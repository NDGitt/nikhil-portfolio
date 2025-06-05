import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags?: string[]
  metrics?: {
    label: string
    value: string
  }[]
}

const ProjectCard = ({ title, description, image, link, tags = [], metrics = [] }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="flex-1 p-5 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <ArrowUpRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>

          {metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="text-base font-semibold text-indigo-600">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {tags.length > 0 && (
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.a>
  )
}

export default ProjectCard 