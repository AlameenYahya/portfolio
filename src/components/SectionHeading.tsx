interface Props {
  kicker: string
  title: string
  intro?: string
}

export default function SectionHeading({ kicker, title, intro }: Props) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </>
  )
}
