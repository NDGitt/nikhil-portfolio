import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSection from './ProjectSection';
import ChatAssistant from './ChatAssistant';
import MobileExperienceTimeline from './MobileExperienceTimeline';
import MobileEmailButton from './MobileEmailButton';

const MobileView = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [sections] = useState([
    { id: 'ai', title: 'AI Projects', color: 'bg-indigo-500' },
    { id: 'game', title: "Building India's first SMB Accelerator", color: 'bg-violet-500' },
  ]);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/profile.jpg"
                alt="Nikhil Devgan"
                className="w-32 h-32 rounded-2xl object-cover shadow-lg ring-4 ring-white mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900">
                Nikhil Devgan
              </h1>
              <p className="text-base text-gray-600">
                Product & Strategy Professional
              </p>
              <p className="text-sm">
                <span className="text-[#FD8515]">Berkeley</span>
                <span className="text-[#003262]">Haas</span> MBA'25
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Welcome to my Portfolio! 👋</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-sm leading-relaxed">
                  Explore my professional journey and projects through these interactive features:
                </p>
                <div className="space-y-3">
                  {/* High Priority: AI Projects */}
                  <motion.button
                    onClick={() => setActiveSection('ai')}
                    className="w-full bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-sm transition-all hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-md"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-lg">
                        ✨
                      </span>
                      <div className="text-left flex-1">
                        <p className="text-base font-semibold text-gray-900">AI Projects</p>
                        <p className="text-sm text-gray-600">5+ AI projects & automations</p>
                      </div>
                    </div>
                  </motion.button>

                  {/* High Priority: AI Assistant */}
                  <motion.button
                    onClick={() => setActiveSection('chat')}
                    className="w-full bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-sm transition-all hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-md"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-lg">
                        🤖
                      </span>
                      <div className="text-left flex-1">
                        <p className="text-base font-semibold text-gray-900">AI Assistant</p>
                        <p className="text-sm text-gray-600">Ask about my experience & projects</p>
                      </div>
                    </div>
                  </motion.button>

                  {/* Lower Priority: Professional Journey */}
                  <button
                    onClick={() => setActiveSection('experience')}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white/70 transition-all hover:bg-white hover:border-gray-300"
                  >
                    <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 text-sm">
                      💼
                    </span>
                    <div className="text-left flex-1">
                      <p className="text-sm font-medium text-gray-900">Professional Journey</p>
                      <p className="text-xs text-gray-600">Career timeline & experience</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              {/* Secondary Links - All Equal Priority */}
              <div className="grid grid-cols-2 gap-2">
                <motion.a
                  href="https://topmate.io/nikhil_devgan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-2 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Coffee Chat</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-devgan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-2 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/NDGitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-2 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </motion.a>
                <div className="flex">
                  <MobileEmailButton />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'chat':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur rounded-xl shadow-lg border border-indigo-100 py-2"
          >
            <ChatAssistant isMobile={true} />
          </motion.div>
        );
      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
          >
            <MobileExperienceTimeline />
          </motion.div>
        );
      default:
        return sections.map((section) => (
          section.id === activeSection && (
            <ProjectSection
              key={section.id}
              id={section.id}
              title={section.title}
              color={section.color}
              isMobile={true}
            />
          )
        ));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
        <div className="flex justify-around items-center p-2">
          <button
            onClick={() => setActiveSection('about')}
            className={`p-3 rounded-lg flex flex-col items-center ${
              activeSection === 'about' ? 'text-indigo-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">About</span>
          </button>
          <button
            onClick={() => setActiveSection('chat')}
            className={`p-3 rounded-lg flex flex-col items-center ${
              activeSection === 'chat' ? 'text-indigo-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-xs mt-1">AI Assistant</span>
          </button>
          <button
            onClick={() => setActiveSection('experience')}
            className={`p-3 rounded-lg flex flex-col items-center ${
              activeSection === 'experience' ? 'text-indigo-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Experience</span>
          </button>
          <button
            onClick={() => setActiveSection('ai')}
            className={`p-3 rounded-lg flex flex-col items-center ${
              activeSection === 'ai' ? 'text-indigo-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">AI Projects</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MobileView; 