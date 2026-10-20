import { useId } from 'react'
import type { ProjectArt as ArtKind } from '../data/types.ts'

/** Placeholder illustration for projects without a public screenshot. */
export default function ProjectArt({ kind }: { kind: ArtKind }) {
  const gridId = useId()

  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity=".12" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill={`url(#${gridId})`} />
      {kind === 'route' && (
        <>
          <path
            d="M40 150 C90 40, 160 170, 210 80 S 290 60, 290 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <circle cx="40" cy="150" r="8" fill="currentColor" />
          <circle cx="290" cy="60" r="8" fill="currentColor" />
          <circle cx="160" cy="118" r="5" fill="currentColor" fillOpacity=".5" />
        </>
      )}
      {kind === 'records' && (
        <g fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="70" y="30" width="180" height="130" rx="10" />
          <path d="M70 62h180M130 30v130M190 30v130" />
          <path d="M70 94h180M70 126h180" strokeOpacity=".45" />
          <path d="M215 140l20 20" strokeWidth="4" />
          <circle cx="205" cy="130" r="14" fill="var(--art-bg)" />
        </g>
      )}
      {kind === 'finance' && (
        <g fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M60 160h200" />
          <rect x="80" y="110" width="28" height="50" rx="4" />
          <rect x="128" y="84" width="28" height="76" rx="4" />
          <rect x="176" y="58" width="28" height="102" rx="4" />
          <path d="M78 92 L142 60 L190 40 L240 30" strokeDasharray="6 6" />
          <circle cx="240" cy="30" r="6" fill="currentColor" />
        </g>
      )}
      {kind === 'chat' && (
        <>
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="60" y="45" width="140" height="44" rx="12" />
            <rect x="120" y="111" width="140" height="44" rx="12" />
          </g>
          <g fill="currentColor">
            <circle cx="100" cy="67" r="4" />
            <circle cx="130" cy="67" r="4" />
            <circle cx="160" cy="67" r="4" />
          </g>
        </>
      )}
    </svg>
  )
}
