import React, { useEffect, useState } from 'react'
import { db, ensureAnonSignIn } from '../services/firebase'
import { collection, doc, getDoc, setDoc, query, getCountFromServer } from 'firebase/firestore'

// A minimal like button that allows one like per anonymous user per post.
// Usage: <LikeButton slug={post.slug} />
export default function LikeButton({ slug, className = '' }) {
  const [uid, setUid] = useState(null)
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const disabled = loading || busy || liked

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        if (!slug) return
        const user = await ensureAnonSignIn()
        if (!mounted) return
        setUid(user?.uid || null)

        const likeRef = doc(db, 'posts', slug, 'likes', user.uid)
        const likeSnap = await getDoc(likeRef)
        if (likeSnap.exists()) setLiked(true)

        const likesCol = collection(db, 'posts', slug, 'likes')
        const snapshot = await getCountFromServer(query(likesCol))
        setCount(snapshot.data().count || 0)
      } catch (e) {
        console.error('Like init failed:', e)
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [slug])

  const onLike = async () => {
    if (!slug || !uid || liked || busy) return
    setBusy(true)
    try {
      const likeRef = doc(db, 'posts', slug, 'likes', uid)
      const likeSnap = await getDoc(likeRef)
      if (likeSnap.exists()) {
        setLiked(true)
        return
      }
      await setDoc(likeRef, { createdAt: new Date().toISOString() })
      setLiked(true)
      setCount(c => c + 1)
    } catch (e) {
      console.error('Like click failed:', e)
    } finally {
      setBusy(false)
    }
  }

  const base = 'inline-flex items-center gap-2 px-3 py-2 rounded border transition select-none'
  const idle = 'bg-[var(--surface-color)] border-[var(--border-color)] hover:opacity-80'
  const active = 'bg-[var(--accent-bg)] border-[var(--accent-color)] text-[var(--accent-color)]'
  const disabledClass = 'opacity-75 cursor-not-allowed'

  return (
    <button
      type="button"
      onClick={onLike}
      disabled={disabled}
      aria-pressed={liked}
      className={`${base} ${liked ? active : idle} ${disabled ? disabledClass : ''} ${className}`}
      title={liked ? 'You liked this' : 'Like this post'}
    >
      <span aria-hidden>❤️</span>
      <span className="tabular-nums">{loading ? '…' : count}</span>
      {liked ? <span className="text-xs opacity-70">(liked)</span> : null}
    </button>
  )
}
 
