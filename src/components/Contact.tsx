import { profile } from '../data/profile.ts'
import ExternalLink from './ExternalLink.tsx'
import SectionHeading from './SectionHeading.tsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <SectionHeading
          kicker="Contact"
          title="Let's talk"
          intro="I work remotely with teams internationally and I'm open to Senior Software Engineer opportunities. The fastest way to reach me is by email."
        />
        <div className="hero-actions center">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={profile.cv} download>
            Download CV
          </a>
          <ExternalLink className="btn btn-ghost" href={profile.linkedin}>
            LinkedIn ↗
          </ExternalLink>
          <ExternalLink className="btn btn-ghost" href={profile.github}>
            GitHub ↗
          </ExternalLink>
          <ExternalLink className="btn btn-ghost" href={profile.whatsapp}>
            WhatsApp ↗
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
