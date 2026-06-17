import { useEffect } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'

function About() {
  useEffect(() => {
    document.title = 'About Us | Australia Business Guide'
  }, [])

  return (
    <>
      <section className="section about-hero">
        <div className="container">
          <h1>About {business.name}</h1>
          <p className="section-intro">
            {business.name} is a marketing business based in Australia, helping small to large
            businesses get seen and get more enquiries through bold, multi-channel advertising —
            spanning bus, cinema, billboard, social, search, and podcast marketing.
          </p>
        </div>
      </section>

      <section className="section about-channels">
        <div className="container">
          <h2>The Channels We Work Across</h2>
          <p className="section-intro">
            Rather than relying on a single platform, we combine traditional and digital marketing
            channels so your business can be seen wherever your customers are.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.id}>
                <h3>{s.benefit}</h3>
                <p className="service-name">{s.name}</p>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready To Work With Us?</h2>
          <p>Talk to {business.name} today about your marketing goals.</p>
          <a href={business.phoneHref} className="btn btn-cta btn-lg">
            Call Us Now
          </a>
        </div>
      </section>
    </>
  )
}

export default About
