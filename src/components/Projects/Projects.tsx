import { useEffect } from 'react'
import { projects } from '../../data/projects'
import './Projects.css'

interface ProjectsProps {
  openProject: string | null
  onOpenProjectChange: (projectId: string | null) => void
}

function Projects({ openProject, onOpenProjectChange }: ProjectsProps) {
  const activeIndex = projects.findIndex((project) => project.id === openProject)
  const activeProject = activeIndex >= 0 ? projects[activeIndex] : null

  const goToProject = (direction: 1 | -1) => {
    if (activeIndex < 0) return
    const nextIndex = (activeIndex + direction + projects.length) % projects.length
    onOpenProjectChange(projects[nextIndex].id)
  }

  // Lock page scroll while the modal is open, and support Escape /
  // arrow-key navigation between projects.
  useEffect(() => {
    if (!activeProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenProjectChange(null)
      if (event.key === 'ArrowRight') goToProject(1)
      if (event.key === 'ArrowLeft') goToProject(-1)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject])

  return (
    <section id="work" className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">02 / WORK</p>

        <h2 className="projects__title">
          Selected Projects
        </h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-card"
            onClick={() => onOpenProjectChange(project.id)}
          >
            <div className="project-card__preview">
              <span>PROJECT PREVIEW</span>
            </div>

            <div className="project-card__body">
              <span className="project-card__category">
                {project.category}
              </span>

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <span className="project-card__year">
                {project.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal-overlay"
          onClick={() => onOpenProjectChange(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal__header">
              <span className="project-modal__category">
                {activeProject.category}
              </span>

              <div className="project-modal__header-right">
                <span className="project-modal__counter">
                  {activeIndex + 1} / {projects.length}
                </span>

                <button
                  type="button"
                  className="project-modal__close"
                  onClick={() => onOpenProjectChange(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            <h3 className="project-modal__title">
              {activeProject.title}
            </h3>

            <p className="project-modal__date">
              {activeProject.year}
            </p>

            <p className="project-modal__description">
              {activeProject.description}
            </p>

            <div className="project-modal__preview">
              <span>PROJECT PREVIEW</span>
            </div>

            <p className="project-modal__label">HIGHLIGHTS</p>

            <div className="project-modal__highlights">
              {activeProject.highlights.map((highlight, index) => (
                <div key={highlight} className="project-modal__highlight">
                  <span className="project-modal__highlight-number">
                    {index + 1}
                  </span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            <div className="project-modal__technologies">
              {activeProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {projects.length > 1 && (
              <div className="project-modal__nav">
                <button
                  type="button"
                  onClick={() => goToProject(-1)}
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => goToProject(1)}
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
