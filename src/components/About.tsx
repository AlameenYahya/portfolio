import { about } from '../data/profile.ts'
import RichText from './RichText.tsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <div>
          <p className="kicker">About</p>
          <h2>Engineering that holds up in production</h2>
        </div>
        <div className="prose">
          {about.map((paragraph, i) => (
            <p key={i}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
