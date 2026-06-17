import { useEffect } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'

function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Australian Business Guide'
  }, [])

  return (
    <section className="section portfolio-page">
      <div className="container">
        <h1>Our Marketing Portfolio</h1>
        <p className="section-intro">
          We work across bus, cinema, billboard, social, search, and podcast marketing for
          businesses throughout Australia. Case studies and campaign examples for each channel
          below are coming soon.
        </p>

        <div className="portfolio-grid">
          {services.map((s) => (
            <div className="portfolio-card" key={s.id}>
              <h3>{s.name}</h3>
              <p className="placeholder-note">Case study coming soon.</p>
            </div>
          ))}
        </div>

        <div className="section cta-banner inline-cta">
          <h2>Want To See What We Could Do For Your Business?</h2>
          <a href={business.phoneHref} className="btn btn-cta btn-lg">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
