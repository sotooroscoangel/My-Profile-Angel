import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Project One',
    category: 'Coming Soon',
    description: 'A brief description of the project will go here.',
  },
  {
    number: '02',
    title: 'Project Two',
    category: 'Coming Soon',
    description: 'A brief description of the project will go here.',
  },
  {
    number: '03',
    title: 'Project Three',
    category: 'Coming Soon',
    description: 'A brief description of the project will go here.',
  },
]

function Projects() {
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
          <article className="project-card" key={project.number}>
            <div className="project-card__number">
              {project.number}
            </div>

            <div className="project-card__content">
              <p className="project-card__category">
                {project.category}
              </p>

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <span className="project-card__link">
                View project →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects