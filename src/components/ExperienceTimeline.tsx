import { FC } from 'react';
import { motion } from 'framer-motion';
import { companies } from '../data/companies';

const ExperienceTimeline: FC = () => {
  return (
    <div className="py-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200" />
        
        {/* Company cards */}
        <div className="relative flex justify-between items-start">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex-1 px-2"
            >
              {/* Timeline dot */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg" />
              
              {/* Company logo */}
              <motion.a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-24 h-24 mx-auto rounded-xl bg-white shadow-lg p-2 flex items-center justify-center transform hover:shadow-xl transition-all duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.a>

              {/* Company details */}
              <div className="mt-8 text-center">
                <h3 className="font-bold text-gray-900">{company.name}</h3>
                <p className="text-sm font-medium text-indigo-600 mt-1">{company.role}</p>
                <p className="text-xs text-gray-500 mt-1">{company.period}</p>
                
                {/* Impact */}
                {company.impact?.other && (
                  <div className="mt-4 bg-gradient-to-br from-gray-50 to-white rounded-lg p-4">
                    <ul className="text-xs text-gray-600 space-y-2.5">
                      {company.impact.other.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="flex items-start space-x-2.5 text-left"
                        >
                          <span className="flex-shrink-0 w-1 h-1 rounded-full bg-indigo-400 mt-2" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline; 