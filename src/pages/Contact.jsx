import { useEffect, useState } from 'react'
import { business } from '../data/business'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us | Australian Business Guide'
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <h1>Contact Australian Business Guide</h1>
        <p className="section-intro">
          Ready to grow your business? Call us now, message us on WhatsApp, or send a quick
          enquiry below.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <a href={business.phoneHref} className="btn btn-cta btn-lg contact-call-btn">
              Call Us Now: {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg contact-whatsapp-btn"
            >
              WhatsApp: {business.whatsappDisplay}
            </a>
            <p className="region-note">Serving small to large businesses across {business.region}.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send A Quick Enquiry</h2>
            {submitted ? (
              <p className="form-success">
                Thanks for reaching out! We'll be in touch shortly — or call us now for an
                immediate response.
              </p>
            ) : (
              <>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                />

                <button type="submit" className="btn btn-cta btn-lg">
                  Send Enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
