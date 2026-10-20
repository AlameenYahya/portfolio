import { profile } from '../data/profile.ts'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
