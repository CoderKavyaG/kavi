import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import ComponentsLibrary from './pages/ComponentsLibrary'
import CompLoader2 from './pages/CompLoader2'
import NewYearCelebration from './components/NewYearCelebration'

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

// Animated Routes component
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/components-library" element={<PageTransition><ComponentsLibrary /></PageTransition>} />
        <Route path="/comp-loader" element={<PageTransition><CompLoader2 /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider>
      <Router basename="/">
        <ScrollToTop />
        <div className="font-sans min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
          <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
          {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
          <NewYearCelebration />
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App