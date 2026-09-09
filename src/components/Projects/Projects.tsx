import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../../data/projects'
import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Projects.css'

interface ProjectsProps {
  openProject: string | null
  onOpenProjectChange: (projectId: string | null) => void
}

function Projects({ openProject, onOpenProjectChange }: ProjectsProps) {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [imageIndex, setImageIndex] = useState(0)
  const [videoIndex, setVideoIndex] = useState(0)
  const [mediaTab, setMediaTab] = useState<'photos' | 'videos'>('photos')

  const activeIndex = projects.findIndex((project) => project.id === openProject)
  const activeProject = activeIndex >= 0 ? projects[activeIndex] : null
  const activeText = activeProject ? t.projects.items[activeProject.id] : null
  const activeImages = activeProject?.images ?? []
  const activeVideos = activeProject?.videos ?? []

  const goToProject = (direction: 1 | -1) => {
    if (activeIndex < 0) return
    const nextIndex = (activeIndex + direction + projects.length) % projects.length
    onOpenProjectChange(projects[nextIndex].id)
  }

  const goToImage = (direction: 1 | -1) => {
    if (activeImages.length === 0) return
    setImageIndex(
      (current) => (current + direction + activeImages.length) % activeImages.length
    )
  }

  const goToVideo = (direction: 1 | -1) => {
    if (activeVideos.length === 0) return
    setVideoIndex(
      (current) => (current + direction + activeVideos.length) % activeVideos.length
    )
  }

  // Always start a freshly-opened (or switched-to) project on its
  // first photo, with the Photos tab active.
  useEffect(() => {
    setImageIndex(0)
    setVideoIndex(0)
    setMediaTab('photos')
  }, [openProject])

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
    <>
      <section
        id="work"
        ref={ref}
        className={`projects reveal ${isVisible ? 'reveal--visible' : ''}`}
      >
        <div className="projects__header">
          <p className="projects__eyebrow">{t.projects.eyebrow}</p>

          <h2 className="projects__title">{t.projects.title}</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => {
            const text = t.projects.items[project.id]

            return (
              <button
                key={project.id}
                type="button"
                className="project-card"
                onClick={() => onOpenProjectChange(project.id)}
              >
                <div className="project-card__preview">
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt={text.title}
                      className="project-card__image"
                      loading="lazy"
                    />
                  ) : (
                    <span>{t.projects.previewLabel}</span>
                  )}
                </div>

                <div className="project-card__body">
                  <span className="project-card__category">{text.category}</span>
                  <h3 className="project-card__title">{text.title}</h3>
                  <span className="project-card__year">{project.year}</span>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Rendered via a portal straight to <body>, OUTSIDE the section
          above. That section carries the scroll-reveal entrance
          animation (a `transform`), and any `transform` on an
          ancestor — even `translateY(0)` — creates a new containing
          block for `position: fixed` descendants. Left inside, the
          "fixed" modal would anchor to that section instead of the
          real viewport, breaking its positioning and scroll framing
          exactly as reported. The portal sidesteps that entirely. */}
      {activeProject &&
        activeText &&
        createPortal(
          <div
            className="project-modal-overlay"
            onClick={() => onOpenProjectChange(null)}
          >
            <div
              className="project-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-modal__header">
                <span className="project-modal__category">{activeText.category}</span>

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

              <h3 className="project-modal__title">{activeText.title}</h3>

              <p className="project-modal__date">{activeProject.year}</p>

              <p className="project-modal__description">{activeText.description}</p>

              {activeVideos.length > 0 && (
                <div className="project-modal__media-tabs">
                  <button
                    type="button"
                    className={`project-modal__media-tab ${
                      mediaTab === 'photos' ? 'project-modal__media-tab--active' : ''
                    }`}
                    onClick={() => setMediaTab('photos')}
                  >
                    {t.projects.photosTab}
                  </button>
                  <button
                    type="button"
                    className={`project-modal__media-tab ${
                      mediaTab === 'videos' ? 'project-modal__media-tab--active' : ''
                    }`}
                    onClick={() => setMediaTab('videos')}
                  >
                    {t.projects.videosTab}
                  </button>
                </div>
              )}

              <div className="project-modal__preview">
                {mediaTab === 'videos' && activeVideos.length > 0 ? (
                  <>
                    <iframe
                      key={activeVideos[videoIndex]}
                      className="project-modal__video"
                      src={`https://www.youtube.com/embed/${activeVideos[videoIndex]}`}
                      title={`${activeText.title} — video ${videoIndex + 1}/${activeVideos.length}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {activeVideos.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="project-modal__image-nav project-modal__image-nav--prev"
                          onClick={() => goToVideo(-1)}
                          aria-label="Previous video"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          className="project-modal__image-nav project-modal__image-nav--next"
                          onClick={() => goToVideo(1)}
                          aria-label="Next video"
                        >
                          →
                        </button>

                        <div className="project-modal__image-dots">
                          {activeVideos.map((video, index) => (
                            <button
                              key={video}
                              type="button"
                              className={`project-modal__image-dot ${
                                index === videoIndex
                                  ? 'project-modal__image-dot--active'
                                  : ''
                              }`}
                              onClick={() => setVideoIndex(index)}
                              aria-label={`Go to video ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : activeImages.length > 0 ? (
                  <>
                    <img
                      src={activeImages[imageIndex]}
                      alt={`${activeText.title} — ${imageIndex + 1}/${activeImages.length}`}
                      className="project-modal__image"
                    />

                    {activeImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="project-modal__image-nav project-modal__image-nav--prev"
                          onClick={() => goToImage(-1)}
                          aria-label="Previous photo"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          className="project-modal__image-nav project-modal__image-nav--next"
                          onClick={() => goToImage(1)}
                          aria-label="Next photo"
                        >
                          →
                        </button>

                        <div className="project-modal__image-dots">
                          {activeImages.map((image, index) => (
                            <button
                              key={image}
                              type="button"
                              className={`project-modal__image-dot ${
                                index === imageIndex
                                  ? 'project-modal__image-dot--active'
                                  : ''
                              }`}
                              onClick={() => setImageIndex(index)}
                              aria-label={`Go to photo ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <span>{t.projects.previewLabel}</span>
                )}
              </div>

              <p className="project-modal__label">{t.projects.highlightsLabel}</p>

              <div className="project-modal__highlights">
                {activeText.highlights.map((highlight, index) => (
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
          </div>,
          document.body
        )}
    </>
  )
}

export default Projects
