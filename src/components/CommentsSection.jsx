

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
      {/* Header: comment count and sort */}
      <div className="flex items-center justify-between mb-6 border-b border-[var(--border-color)] pb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[var(--text-color)]">{comments.length.toLocaleString()} Comments</span>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-[var(--accent-color)] bg-white/5 px-3 py-1.5 rounded hover:bg-white/10 transition">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 6h18M6 12h12m-9 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          Sort by
        </button>
      </div>
      {/* Add comment */}
      <form onSubmit={handleSubmit} className="flex items-start gap-4 mb-10">
        <img
          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(username)}`}
          alt={username + " avatar"}
          className="w-10 h-10 rounded-full border-2 border-[var(--accent-color)] bg-white object-cover shadow"
          loading="lazy"
          style={{ background: '#fff' }}
        />
        <div className="flex-1">
          <textarea
            id="comment-textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
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
      {/* Comments list */}
      {loading ? (
        <div className="text-center py-8 text-lg text-gray-400">Loading comments...</div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No comments yet. Be the first to comment!</div>
      ) : (
        <ul className="space-y-8">
          {comments.map((comment) => (
            <li key={comment.id} className="flex items-start gap-4">
              <img
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(comment.username)}`}
                alt={comment.username + " avatar"}
                className="w-10 h-10 rounded-full border-2 border-[var(--accent-color)] bg-white object-cover shadow"
                loading="lazy"
                style={{ background: '#fff' }}
              />
              <div className="flex-1 border-b border-[var(--border-color)] pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[var(--accent-color)] hover:underline cursor-pointer">{comment.username}</span>
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