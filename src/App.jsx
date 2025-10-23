import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Resume from './pages/Resume'

function App() {
  return (
    <ThemeProvider>
      <Router basename="/">
        <div className="font-sans min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App