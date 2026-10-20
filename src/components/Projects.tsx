import { projects } from '../data/profile.ts'
import ProjectCard from './ProjectCard.tsx'
import SectionHeading from './SectionHeading.tsx'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeading
          kicker="Selected work"
          title="Products I've built and led"
          intro="A selection of production systems. Some client work is private, so I'm happy to walk through architecture and code in more depth during an interview."
        />
        <div className="cards">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
