import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSection from './ProjectSection';
import ChatAssistant from './ChatAssistant';
import MobileExperienceTimeline from './MobileExperienceTimeline';
import CopyEmailButton from './CopyEmailButton';
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
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      🤖
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">AI Assistant</p>
                      <p className="text-xs text-gray-600">Chat with my AI assistant to learn about my experience, skills, and projects in an interactive way.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      💼
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Professional Journey</p>
                      <p className="text-xs text-gray-600">Explore my career timeline, from consulting at ZS to building India's first SMB Accelerator at GAME.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      ✨
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">AI Projects</p>
                      <p className="text-xs text-gray-600">Check out my latest AI projects, including an SMB Compliance Discovery Platform and AI Profile Finder.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Professional Links */}
              <div className="flex justify-center space-x-3">
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-devgan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-2 bg-[#0A66C2] text-white rounded-lg max-w-[140px] text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://khpdqxdcxwdjipozoirl.supabase.co/storage/v1/object/public/public-assets//Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg max-w-[140px] text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              {/* Contact Actions */}
              <div className="flex justify-center space-x-3">
                <div className="flex-1 max-w-[140px]">
                  <MobileEmailButton />
                </div>
                <motion.a
                  href="https://calendar.app.google/2LiPjJjxMerFXNTV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-2 bg-indigo-600 text-white rounded-lg max-w-[140px] text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Coffee Chat</span>
                </motion.a>
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