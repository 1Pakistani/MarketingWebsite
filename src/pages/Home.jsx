import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'
import { faqs } from '../data/faq'

function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Australian Business Guide | Marketing Services Australia'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>{business.tagline}</h1>
          <p className="hero-sub">
            Australian Business Guide helps small to large businesses across Australia get seen,
            get found, and get more enquiries — through bold, multi-channel marketing across bus,
            cinema, billboard, social, search, and podcast advertising.
          </p>
          <div className="hero-ctas">
            <a href={business.phoneHref} className="btn btn-cta btn-lg">
              Call Us Now
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              Message Us On WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <h2>Marketing Services Across Australia</h2>
          <p className="section-intro">
            Every service is built around one goal: getting your business in front of more of
            the right people, more often.
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

      <section className="section why-section">
        <div className="container">
          <h2>Why Businesses Choose Australian Business Guide</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Multi-Channel Reach</h3>
              <p>
                From bus and billboard advertising to Meta, TikTok, Google, and podcast marketing,
                we cover both traditional and digital channels under one roof.
              </p>
            </div>
            <div className="why-card">
              <h3>Australia-Wide Service</h3>
              <p>
                We work with small to large businesses across Australia, tailoring each campaign
                to local audiences and goals.
              </p>
            </div>
            <div className="why-card">
              <h3>Direct, Easy Communication</h3>
              <p>
                Reach us instantly by phone or WhatsApp — no call centres, no waiting in a queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container">
          <h2>Client Success Stories</h2>
          <p className="placeholder-note">
            Case studies and client testimonials are coming soon. Check back shortly, or call us
            now to ask about results we're achieving for current clients.
          </p>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready To Get More Customers?</h2>
          <p>Talk to Australian Business Guide today and start getting noticed.</p>
          <a href={business.phoneHref} className="btn btn-cta btn-lg">
            Call Us Now
          </a>
        </div>
      </section>

      <section className="section keywords-section">
        <div className="container">
          <h2>Marketing Services We Provide Across Australia</h2>
          <ul className="keywords-list">
            {services.map((s) => (
              <li key={s.id}>{s.keyword}</li>
            ))}
            <li>Marketing Agency Australia</li>
            <li>Small Business Marketing Australia</li>
            <li>Multi-Channel Advertising Australia</li>
          </ul>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, idx) => (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  {item.q}
                  <span className="faq-toggle">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && <p className="faq-answer">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-banner-inner">
          <h2>See Our Work</h2>
          <p>Check out the marketing channels we work across on our Portfolio page.</p>
          <Link to="/portfolio" className="btn btn-outline btn-lg">
            View Portfolio
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
