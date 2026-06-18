import { Link, NavLink } from 'react-router-dom'
import { business } from '../data/business'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt={business.name} className="logo-img" />
        </Link>
        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
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
