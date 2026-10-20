import { facts } from '../data/profile.ts'

export default function Glance() {
  return (
    <section className="glance" aria-label="At a glance">
      <dl className="container glance-grid">
        {facts.map((fact) => (
          <div key={fact.value}>
            <dt>{fact.value}</dt>
            <dd>{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
