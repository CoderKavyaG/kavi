import { useState, useEffect } from 'react'
import { blogPosts } from '../data/blogPosts'

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPosts(blogPosts)
      setLoading(false)
    }, 300)
  }, [])

  return { posts, loading }
}
