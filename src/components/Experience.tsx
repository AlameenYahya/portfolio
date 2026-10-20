import { earlierRoles, experience } from '../data/profile.ts'
import RichText from './RichText.tsx'
import SectionHeading from './SectionHeading.tsx'
import Tags from './Tags.tsx'

export default function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <SectionHeading kicker="Experience" title="Where I'm making an impact" />

        <ol className="timeline">
          {experience.map((job) => (
            <li className="job" key={`${job.title}-${job.org}`}>
              <div className="job-head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="org">{job.org}</p>
                  {job.note && <p className="job-note">{job.note}</p>}
                </div>
                <span className="when">{job.period}</span>
              </div>
              <ul className="highlights">
                {job.highlights.map((item, i) => (
                  <li key={i}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
              <Tags items={job.tags} />
            </li>
          ))}
        </ol>

        <h3 className="subheading">Earlier roles</h3>
        <ul className="earlier">
          {earlierRoles.map((role) => (
            <li key={role.org}>
              <div>
                <p className="earlier-title">
                  {role.title} <span>· {role.org}</span>
                </p>
                <p className="earlier-summary">{role.summary}</p>
              </div>
              <span className="when">{role.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
