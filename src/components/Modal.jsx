import React from 'react'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-dark-surface rounded-lg p-8 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-dark-text capitalize">{title}</h2>
          <button 
            onClick={onClose}
            className="text-dark-text-secondary hover:text-dark-text transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-dark-text-secondary">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
