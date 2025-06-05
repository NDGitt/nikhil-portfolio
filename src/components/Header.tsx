import { motion } from 'framer-motion'
import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/profile.jpg"
              alt="Nikhil Devgan"
              className="w-20 h-20 rounded-2xl object-cover shadow-lg ring-2 ring-indigo-100"
            />
            <div>
              <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Nikhil Devgan
              </motion.h1>
              <p className="text-gray-600 mt-1 text-lg">Product & Strategy Professional</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-8">
            <motion.div 
              className="text-sm space-y-1 bg-indigo-50 px-4 py-2 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-indigo-900 font-medium">7+ years experience</div>
              <div className="text-indigo-700">$100M+ value created</div>
            </motion.div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center space-x-2"
              >
                <DocumentTextIcon className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
              
              <div className="flex space-x-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:your.email@example.com"
                  className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <EnvelopeIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 