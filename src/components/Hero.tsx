import { currentRoles, profile } from '../data/profile.ts'
import ExternalLink from './ExternalLink.tsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow">
          <span className="dot" aria-hidden="true" /> {profile.availability}
        </p>
        <h1>{profile.name}</h1>
        <p className="role">
          {profile.title} <span className="location">· {profile.location}</span>
        </p>
        <p className="lede">{profile.summary}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <a className="btn btn-ghost" href="#work">
            View selected work
          </a>
          <ExternalLink className="btn btn-ghost" href={profile.linkedin}>
            LinkedIn ↗
          </ExternalLink>
          <ExternalLink className="btn btn-ghost" href={profile.github}>
            GitHub ↗
          </ExternalLink>
        </div>

        <ul className="now" aria-label="Current roles">
          {currentRoles.map((role) => (
            <li key={role.org}>
              <span className="now-label">{role.title}</span>
              <span className="now-org">{role.org}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
