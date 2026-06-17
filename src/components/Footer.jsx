import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>{business.name}</h3>
          <p>Bold marketing services for small to large businesses across Australia.</p>
          <p>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </p>
          <p>
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp: {business.whatsappDisplay}
            </a>
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {business.name}. Serving businesses across Australia.
        </p>
      </div>
    </footer>
  )
}

export default Footer
