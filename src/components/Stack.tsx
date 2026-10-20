import { stack } from '../data/profile.ts'
import SectionHeading from './SectionHeading.tsx'

export default function Stack() {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <SectionHeading kicker="Skills" title="Tools I use to ship" />
        <div className="stack-grid">
          {stack.map((group) => (
            <div className="stack" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
