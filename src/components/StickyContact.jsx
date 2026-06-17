import { business } from '../data/business'

function StickyContact() {
  return (
    <div className="sticky-contact">
      <a href={business.phoneHref} className="sticky-btn sticky-call">
        Call Us Now
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn sticky-whatsapp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default StickyContact
