import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
}

const useProjects = (sectionId: string): Project[] => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await import(`../data/${sectionId}-projects.json`)
        setProjects(response.default)
      } catch (error) {
        console.error(`Error loading projects for section ${sectionId}:`, error)
        setProjects([])
      }
    }

    loadProjects()
  }, [sectionId])

  return projects
}

export default useProjects 