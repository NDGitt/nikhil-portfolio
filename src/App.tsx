import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ProjectSection from './components/ProjectSection'
import { DocumentTextIcon, ArrowTopRightOnSquareIcon, BriefcaseIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { companies } from './data/companies'

function App() {
  const [sections] = useState([
    { id: 'ai', title: 'AI Projects', color: 'bg-indigo-500' },
    { id: 'consulting', title: 'Consulting Projects', color: 'bg-emerald-500' },
    { id: 'game', title: "Building India's first SMB Accelerator", color: 'bg-violet-500' },
    // { id: 'social', title: 'Social Impact', color: 'bg-amber-500' },
    // { id: 'other', title: 'Other Things', color: 'bg-rose-500' },
  ])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 py-3 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 whitespace-nowrap"
            >
              Top
            </button>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 rounded-full transition-colors hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 whitespace-nowrap min-w-fit"
              >
                {section.title}
              </button>
            ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24 space-y-8"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-8">
                  <div className="space-y-4">
                    <div className="flex space-x-3">
                      <motion.a
                        href="https://www.linkedin.com/in/nikhil-devgan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white rounded-lg shadow-lg ring-1 ring-gray-100 text-[#0A66C2] hover:text-[#0A66C2]/90 hover:ring-[#0A66C2]/10 transition-all flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </motion.a>
                      <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 px-4 bg-white rounded-lg shadow-lg ring-1 ring-gray-100 text-gray-600 hover:text-indigo-600 hover:ring-indigo-100 transition-all font-medium text-sm flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Resume
                      </motion.a>
                    </div>
                    <img
                      src="/images/profile.jpg"
                      alt="Nikhil Devgan"
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg ring-2 ring-indigo-100"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">
                      Nikhil Devgan
                    </h1>
                    <p className="text-xl text-gray-600 mt-2">
                      Product & Strategy Professional
                    </p>
                    <p className="text-base mt-1 text-slate-600">
                      <span className="text-[#FD8515]">Berkeley</span><span className="text-[#003262]">Haas</span> MBA'25
                    </p>
                    <div className="flex items-center space-x-3 mt-4 text-sm text-gray-500">
                      <span>Based in San Francisco</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>Open to opportunities</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">7+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">$100M+</div>
                    <div className="text-sm text-gray-600">Value Created</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 lg:sticky lg:top-24"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  Work Experience
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {companies.map((company, index) => (
                    <div key={index} className="space-y-4">
                      {/* Company Logo */}
                      <motion.a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video rounded-lg bg-gray-50 p-4 flex items-center justify-center group relative"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                        />
                      </motion.a>

                      {/* Timeline and Impact */}
                      <div className="relative pl-4 border-l-2 border-indigo-100">
                        <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-100 border-2 border-indigo-500" />
                        <div className="space-y-3">
                          <div>
                            <div className="font-medium text-gray-900">{company.name}</div>
                            <div className="text-sm text-gray-600">{company.role}</div>
                            <div className="text-sm text-gray-500">{company.period}</div>
                          </div>

                          {company.impact && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="grid grid-cols-2 gap-3 mb-2">
                                {company.impact.value && (
                                  <div className="text-center">
                                    <div className="text-base font-bold text-emerald-600">${company.impact.value}M+</div>
                                    <div className="text-xs text-gray-600">Value Created</div>
                                  </div>
                                )}
                                {company.impact.families && (
                                  <div className="text-center">
                                    <div className="text-base font-bold text-indigo-600">
                                      {company.impact.families.toLocaleString()}+
                                    </div>
                                    <div className="text-xs text-gray-600">Families Impacted</div>
                                  </div>
                                )}
                              </div>
                              {company.impact.other && (
                                <ul className="text-xs text-gray-600 list-disc list-inside">
                                  {company.impact.other.map((item, i) => (
                                    <li key={i} className="line-clamp-1">{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

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

export default App 