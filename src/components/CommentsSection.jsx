import React, { useState, useEffect, useRef } from "react";
import { db, ensureAnonSignIn, auth } from "../services/firebase";
import { collection, addDoc, query, where, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";

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
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" = most recent, "asc" = oldest
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sectionRef = useRef(null);
  const [userUid, setUserUid] = useState("");

  // Set or get unique username on mount, and get user UID
  useEffect(() => {
    let stored = localStorage.getItem("username");
    if (!stored) {
      stored = generateRandomUsername();
      localStorage.setItem("username", stored);
    }
    setUsername(stored);
    // Get Firebase Auth UID
    ensureAnonSignIn().then((user) => {
      setUserUid(user.uid);
    });
  }, []);

  // Ensure anon sign-in and fetch comments for this post in real-time
  useEffect(() => {
    let unsub = null;
    setLoading(true);
    ensureAnonSignIn().then(() => {
      const q = query(
        collection(db, "comments"),
        where("postId", "==", postId),
        orderBy("timestamp", sortOrder)
      );
      unsub = onSnapshot(q, (snapshot) => {
        setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      });
    });
    return () => { if (unsub) unsub(); };
  }, [postId, sortOrder]);

  // Close dropdown on click outside
  useEffect(() => {
    if (!showSortDropdown) return;
    const handler = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setShowSortDropdown(false);
      }
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [showSortDropdown]);

  // Add new comment to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const user = await ensureAnonSignIn();
    await addDoc(collection(db, "comments"), {
      postId,
      username,
      text: newComment,
      timestamp: Date.now(),
      uid: user.uid
    });
    setNewComment("");
  };

  // Delete comment
  const handleDelete = async (commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;
    await deleteDoc(doc(db, "comments", commentId));
  };

  return (
    <section
      ref={sectionRef}
      className="comments-section mt-16 max-w-2xl mx-auto px-2 sm:px-4"
    >
      {/* Header: comment count and sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[var(--border-color)] pb-6 gap-4">
        <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-color)] tracking-tight">
          {comments.length.toLocaleString()} Comments
        </span>
        <div className="relative">
          <button
            className="flex items-center gap-1 text-sm font-semibold text-[var(--accent-color)] bg-[var(--surface-color)] px-4 py-2 rounded-lg hover:bg-[var(--accent-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all duration-200"
            tabIndex={0}
            onClick={() => setShowSortDropdown((v) => !v)}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={showSortDropdown ? "true" : "false"}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 6h18M6 12h12m-9 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Sort by
          </button>
          {/* Dropdown */}
          {showSortDropdown && (
            <ul className="absolute right-0 mt-2 w-44 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-lg shadow-lg z-10 animate-fade-in" role="listbox">
              <li
                className={`px-4 py-2 cursor-pointer rounded hover:bg-[var(--accent-bg)] transition-all duration-150 ${sortOrder === "desc" ? "font-bold text-[var(--accent-color)]" : "text-[var(--text-color)]"}`}
                onClick={() => { setSortOrder("desc"); setShowSortDropdown(false); }}
                role="option"
                aria-selected={sortOrder === "desc"}
              >
                Most Recent
              </li>
              <li
                className={`px-4 py-2 cursor-pointer rounded hover:bg-[var(--accent-bg)] transition-all duration-150 ${sortOrder === "asc" ? "font-bold text-[var(--accent-color)]" : "text-[var(--text-color)]"}`}
                onClick={() => { setSortOrder("asc"); setShowSortDropdown(false); }}
                role="option"
                aria-selected={sortOrder === "asc"}
              >
                Oldest
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* Add comment */}
      <form
        onSubmit={handleSubmit}
        className="flex items-start gap-4 mb-12 bg-[var(--surface-color)] rounded-xl p-4 shadow-sm border border-[var(--border-color)]"
      >
        <img
          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(username)}`}
          alt={username + " avatar"}
          className="w-12 h-12 rounded-full border-2 border-[var(--accent-color)] bg-white object-cover shadow-md transition-transform duration-200 hover:scale-105"
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
            className="w-full p-3 rounded-lg border border-[var(--border-color)] bg-white/10 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] mb-2 resize-none text-base transition-all duration-200"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[var(--accent-color)] text-white font-semibold shadow hover:opacity-90 focus:ring-2 focus:ring-[var(--accent-color)] transition-all duration-200"
            >
              Comment
            </button>
          </div>
        </div>
      </form>
      {/* Comments list */}
      {loading ? (
        <div className="text-center py-8 text-lg text-[var(--text-secondary)]">Loading comments...</div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8 text-[var(--text-secondary)]">No comments yet. Be the first to comment!</div>
      ) : (
        <ul className="space-y-8">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="flex items-start gap-4 group animate-fade-in"
            >
              <img
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(comment.username)}`}
                alt={comment.username + " avatar"}
                className="w-12 h-12 rounded-full border-2 border-[var(--accent-color)] bg-white object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
                style={{ background: '#fff' }}
              />
              <div className="flex-1 border-b border-[var(--border-color)] pb-6 relative bg-[var(--surface-color)] rounded-xl px-4 pt-3 pb-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-semibold text-[var(--accent-color)] hover:underline cursor-pointer text-base">
                    {comment.username}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                  {comment.uid === userUid && (
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="ml-2 text-xs text-red-500 hover:underline opacity-80 group-hover:opacity-100 transition-all duration-150"
                      title="Delete comment"
                    >
                      Delete
                    </button>
                  )}
                </div>
                <div className="text-[var(--text-color)] text-base break-words whitespace-pre-line leading-relaxed">
                  {comment.text}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentsSection;