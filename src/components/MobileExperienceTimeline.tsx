import { FC } from 'react';
import { motion } from 'framer-motion';
import { companies } from '../data/companies';

const MobileExperienceTimeline: FC = () => {
  return (
    <div className="py-4">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-200" />
        
        {/* Company cards */}
        <div className="space-y-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-start pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-7 top-8 w-3 h-3 rounded-full bg-indigo-600 border-4 border-white shadow-lg" />
              
              <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                {/* Company logo */}
                <motion.a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 rounded-xl bg-white shadow-sm p-2 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.a>

                {/* Company details */}
                <div>
                  <h3 className="font-bold text-gray-900">{company.name}</h3>
                  <p className="text-sm font-medium text-indigo-600 mt-1">{company.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{company.period}</p>
                  
                  {/* Impact */}
                  {company.impact?.other && (
                    <div className="mt-4">
                      <ul className="text-sm text-gray-600 space-y-2">
                        {company.impact.other.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="flex items-start space-x-2"
                          >
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Partners section */}
                  {company.partners && company.partners.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-gray-400">
                        {company.name === "Global Alliance for Mass Entrepreneurship (GAME)" ? "Funders" : "Worked with"}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-4">
                        {company.partners.map((partner) => (
                          <motion.div
                            key={partner.name}
                            className="group relative"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="p-1">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`w-auto object-contain opacity-100 transition-all duration-300 ${
                                  partner.name.includes('Gates') ? 'h-4' : partner.name.includes('McKinsey') ? 'h-[72px]' : 'h-10'
                                }`}
                              />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                                {partner.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileExperienceTimeline; 