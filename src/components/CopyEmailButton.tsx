import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CopyEmailButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const email = 'nikhil_devgan@berkeley.edu';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowCopied(true);
      setIsOpen(false);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 flex items-center space-x-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Email</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Contact Options</p>
              <p className="text-xs text-gray-500 mt-1">{email}</p>
            </div>
            <div className="py-1">
              <button
                onClick={handleCopyClick}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Copy Email Address</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyEmailButton; 