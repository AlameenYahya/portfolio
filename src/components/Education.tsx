import { certifications, education } from '../data/profile.ts'
import type { Qualification } from '../data/types.ts'
import SectionHeading from './SectionHeading.tsx'

function QualificationList({ items }: { items: Qualification[] }) {
  return (
    <ul className="quals">
      {items.map((q) => (
        <li key={q.title}>
          <div>
            <p className="qual-title">{q.title}</p>
            {(q.institution || q.detail) && (
              <p className="qual-meta">{[q.institution, q.detail].filter(Boolean).join(' · ')}</p>
            )}
          </div>
          <span className="when">{q.period}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading kicker="Education" title="Education & certifications" />
        <div className="edu-grid">
          <div>
            <h3 className="subheading">Degrees & diplomas</h3>
            <QualificationList items={education} />
          </div>
          <div>
            <h3 className="subheading">Certifications</h3>
            <QualificationList items={certifications} />
          </div>
        </div>
      </div>
    </section>
  )
}
