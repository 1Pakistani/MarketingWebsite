import { Link, NavLink } from 'react-router-dom'
import { business } from '../data/business'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          {business.name}
        </Link>
        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        <a href={business.phoneHref} className="btn btn-cta header-cta">
          Call Us Now
        </a>
      </div>
    </header>
  )
}

export default Header
