import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectSection from './components/ProjectSection'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import ChatAssistant from './components/ChatAssistant'
import ExperienceTimeline from './components/ExperienceTimeline'
import CopyEmailButton from './components/CopyEmailButton'
import MobileView from './components/MobileView'

const DesktopView = () => {
  const [sections] = useState([
    { id: 'ai', title: 'AI Projects', color: 'bg-indigo-500' },
    // { id: 'consulting', title: 'Consulting Projects', color: 'bg-emerald-500' },
    { id: 'game', title: "Building India's first SMB Accelerator", color: 'bg-violet-500' },
    // { id: 'social', title: 'Social Impact', color: 'bg-amber-500' },
    // { id: 'other', title: 'Other Things', color: 'bg-rose-500' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 whitespace-nowrap"
              >
                Top
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('ai-assistant')
                  if (element) {
                    const navHeight = 64; // Height of the navigation bar
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementPosition - navHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 whitespace-nowrap"
              >
                🤖 AI Assistant
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('professional-journey')
                  if (element) {
                    const navHeight = 64; // Height of the navigation bar
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementPosition - navHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 whitespace-nowrap"
              >
                💼 Professional Journey
              </button>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id)
                    if (element) {
                      const navHeight = 64; // Height of the navigation bar
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`px-4 py-2 rounded-full transition-all whitespace-nowrap min-w-fit ${
                    section.id === 'ai' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-md hover:scale-105'
                      : 'hover:bg-indigo-100 hover:text-indigo-700 text-gray-600'
                  }`}
                >
                  {section.id === 'ai' ? '✨ AI Projects' : section.title}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <CopyEmailButton />
              <a
                href="https://calendar.app.google/2LiPjJjxMerFXNTV6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors whitespace-nowrap flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Coffee Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto space-y-16"
        >
          {/* Hero Section - AI Assistant */}
          <div id="ai-assistant" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-xl border border-indigo-100 p-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Brief Intro - 4 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-4"
              >
                <div className="flex items-start space-x-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src="/images/profile.jpg"
                      alt="Nikhil Devgan"
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                    />
                  </motion.div>
                  <div className="pt-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Nikhil Devgan
                    </h1>
                    <p className="text-base text-gray-600 mt-1">
                      Product & Strategy Professional
                    </p>
                    <p className="text-sm mt-1">
                      <span className="text-[#FD8515]">Berkeley</span>
                      <span className="text-[#003262]">Haas</span> MBA'25
                    </p>
                    <div className="flex items-center space-x-3 mt-4">
                      <motion.a
                        href="https://www.linkedin.com/in/nikhil-devgan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </motion.a>
                      <motion.a
                        href="https://drive.google.com/file/d/176hdb5OGgcbQEF-RLtj9znTMb3p7cVAW/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all text-sm font-medium shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Resume →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Assistant - 8 columns */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur rounded-xl shadow-lg border border-indigo-100 p-6">
                  <ChatAssistant />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Experience Timeline Section */}
          <motion.div
            id="professional-journey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2 text-indigo-600" />
              Professional Journey
            </h3>
            <ExperienceTimeline />
          </motion.div>

          {/* Project Sections */}
          {sections.map((section) => (
            <ProjectSection
              key={section.id}
              id={section.id}
              title={section.title}
              color={section.color}
            />
          ))}
        </motion.div>
      </main>
      
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© {new Date().getFullYear()} Nikhil Devgan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
}

export default App 