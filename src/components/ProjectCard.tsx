import type { ReactNode } from 'react'
import type { Project } from '../data/types.ts'
import ExternalLink from './ExternalLink.tsx'
import ProjectArt from './ProjectArt.tsx'
import Tags from './Tags.tsx'

function Thumb({ project }: { project: Project }) {
  let content: ReactNode
  let className = 'thumb'

  if (project.image) {
    content = <img src={project.image} alt={project.imageAlt ?? ''} loading="lazy" />
  } else {
    className += ' thumb-art'
    content = (
      <>
        <ProjectArt kind={project.art ?? 'route'} />
        <span>{project.artLabel ?? project.name}</span>
      </>
    )
  }

  // The title already links to the project; keep the thumbnail out of the tab order
  return project.href ? (
    <ExternalLink className={className} href={project.href} tabIndex={-1} aria-hidden="true">
      {content}
    </ExternalLink>
  ) : (
    <div className={className}>{content}</div>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <Thumb project={project} />
      <div className="card-body">
        <p className="card-meta">{project.meta}</p>
        <h3>
          {project.href ? (
            <ExternalLink href={project.href}>{project.name} ↗</ExternalLink>
          ) : (
            project.name
          )}
        </h3>
        <p className="card-desc">{project.description}</p>
        <Tags items={project.tags} />
      </div>
    </article>
  )
}
