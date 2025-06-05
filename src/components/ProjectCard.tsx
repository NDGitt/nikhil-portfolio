import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags?: string[]
}

const ProjectCard = ({ title, description, image, link, tags = [] }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card group/card">
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform transition-transform duration-500 group-hover/card:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover/card:text-indigo-600 transition-colors">
              {title}
            </h3>
            <ArrowUpRightIcon className="w-5 h-5 text-gray-400 group-hover/card:text-indigo-600 transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all" />
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
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