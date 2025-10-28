

import React, { useState, useEffect } from "react";
import { db, ensureAnonSignIn } from "../services/firebase";
import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";

// Helper to generate a random username
function generateRandomUsername() {
  const adjectives = ["Blue", "Green", "Red", "Yellow", "Purple"];
  const animals = ["Tiger", "Lion", "Bear", "Wolf", "Eagle"];
  const number = Math.floor(Math.random() * 1000);
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adj}${animal}${number}`;
}


const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  // Set or get unique username on mount
  useEffect(() => {
    let stored = localStorage.getItem("username");
    if (!stored) {
      stored = generateRandomUsername();
      localStorage.setItem("username", stored);
    }
    setUsername(stored);
  }, []);

  // Ensure anon sign-in and fetch comments for this post in real-time
  useEffect(() => {
    let unsub = null;
    setLoading(true);
    ensureAnonSignIn().then(() => {
      const q = query(
        collection(db, "comments"),
        where("postId", "==", postId),
        orderBy("timestamp", "desc")
      );
      unsub = onSnapshot(q, (snapshot) => {
        setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      });
    });
    return () => { if (unsub) unsub(); };
  }, [postId]);

  // Add new comment to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    await ensureAnonSignIn();
    await addDoc(collection(db, "comments"), {
      postId,
      username,
      text: newComment,
      timestamp: Date.now()
    });
    setNewComment("");
  };

  return (
    <section className="comments-section mt-16 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-[var(--accent-color)] text-center tracking-tight">Comments</h3>
      <div className="mb-6 text-sm text-[var(--text-secondary)] text-center">
        <span className="opacity-70">Your username:</span> <span className="font-semibold">{username}</span>
      </div>
      <form onSubmit={handleSubmit} className="flex items-start gap-4 mb-10">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-bg)] flex items-center justify-center text-white font-bold text-lg select-none">
          {username.slice(0,2).toUpperCase()}
        </div>
        <div className="flex-1">
          <textarea
            id="comment-textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a public comment..."
            required
            rows={2}
            className="w-full p-3 rounded-lg border border-[var(--border-color)] bg-white/10 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] mb-2 resize-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[var(--accent-color)] text-white font-semibold shadow hover:opacity-90 transition"
            >
              Comment
            </button>
          </div>
        </div>
      </form>
      {loading ? (
        <div className="text-center py-8 text-lg text-gray-400">Loading comments...</div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No comments yet. Be the first to comment!</div>
      ) : (
        <ul className="space-y-8">
          {comments.map((comment) => (
            <li key={comment.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-bg)] flex items-center justify-center text-white font-bold text-lg select-none">
                {comment.username.slice(0,2).toUpperCase()}
              </div>
              <div className="flex-1 border-b border-[var(--border-color)] pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[var(--accent-color)]">{comment.username}</span>
                  <span className="text-xs text-gray-400">{new Date(comment.timestamp).toLocaleString()}</span>
                </div>
                <div className="text-[var(--text-color)] text-base break-words whitespace-pre-line">{comment.text}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentsSection;