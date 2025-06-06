import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import MobileProjectCard from './MobileProjectCard'
import useProjects from '../hooks/useProjects'

interface ProjectSectionProps {
  id: string
  title: string
  color: string
  isMobile?: boolean
}

const ProjectSection = ({ id, title, color, isMobile = false }: ProjectSectionProps) => {
  const projects = useProjects(id)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id={id} className="relative py-16">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className={`flex flex-col ${!isMobile ? 'lg:flex-row gap-12' : 'gap-6'}`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${!isMobile ? 'lg:w-1/4 lg:sticky lg:top-24 self-start' : ''} space-y-6`}
        >
          <div className="flex items-center space-x-4">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold heading-underline`}>
              {title}
            </h2>
            <div className={`h-3 w-3 rounded-full ${color}`} />
          </div>
          
          <div className="prose prose-lg">
            <p className="text-gray-600">
              {id === 'ai' && "Exploring AI through product builds, real use cases, and creative play"}
              {id === 'consulting' && "Strategic consulting delivering measurable impact"}
              {id === 'game' && "Growth Stories of Entrepreneurs from India's first SMB accelerator"}
              {id === 'social' && "Projects creating positive societal impact"}
              {id === 'other' && "Additional noteworthy initiatives"}
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <span>{projects.length} Projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${!isMobile ? 'lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-4 px-4 -mx-4'}`}
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={isMobile ? 'w-full' : 'h-full'}
            >
              {isMobile ? (
                <MobileProjectCard {...project} />
              ) : (
                <ProjectCard {...project} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}

export default ProjectSection 