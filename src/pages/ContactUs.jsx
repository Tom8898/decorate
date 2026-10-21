import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import './ContactUs.css'
import heroImg from '../assets/3_ See the new Ambitec showroom .webp'

const CONTACT_EMAIL = 'info@ambitec.co.nz'
const MAP_SRC =
  'https://www.google.com/maps?q=-36.9116374,174.7490889&z=15&output=embed'

const HELP_OPTIONS = [
  'I would like a quote',
  'I would like some samples',
  'I would like to make an appointment to visit your showroom',
]

const PROJECT_SIZES = [
  'One wall <20m2',
  'Multiple walls 20 - 50m2',
  'Multiple rooms 50-100m2',
]

const REFERRALS = [
  'My designer/architect',
  'A friend',
  'My builder',
  'Google search',
  'Social Media',
  'Ad in a magazine',
]

// There is no form backend yet, so submitting opens the visitor's email
// client with the enquiry pre-filled.
function buildMailto(form) {
  const body = [
    `Name: ${form.firstName} ${form.lastName}`,
    `Email: ${form.email}`,
    `How can we help: ${form.help.join(', ') || '-'}`,
    `Project size: ${form.size}`,
    `How did you hear about us: ${form.referral}`,
    '',
    form.message,
  ].join('\n')
  const subject = 'Ambitec Polished Plaster Inquiry'
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  help: [],
  message: '',
  size: '',
  referral: '',
}

function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const toggleHelp = (option) =>
    setForm((f) => ({
      ...f,
      help: f.help.includes(option)
        ? f.help.filter((o) => o !== option)
        : [...f.help, option],
    }))

  const onSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailto(form)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="contact-form contact-form--sent">
        <p className="contact-form__thanks">Thank you for getting in touch!</p>
        <p>We value your time and will get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <fieldset className="contact-form__field">
        <legend>
          Name <span className="contact-form__req">(required)</span>
        </legend>
        <div className="contact-form__row">
          <label>
            <span>First Name</span>
            <input
              type="text"
              autoComplete="given-name"
              required
              value={form.firstName}
              onChange={update('firstName')}
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              type="text"
              autoComplete="family-name"
              required
              value={form.lastName}
              onChange={update('lastName')}
            />
          </label>
        </div>
      </fieldset>

      <label className="contact-form__field">
        <span>
          Email <span className="contact-form__req">(required)</span>
        </span>
        <input
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={update('email')}
        />
      </label>

      <fieldset className="contact-form__field">
        <legend>How can we help</legend>
        <div className="contact-form__checks">
          {HELP_OPTIONS.map((option) => (
            <label key={option} className="contact-form__check">
              <input
                type="checkbox"
                checked={form.help.includes(option)}
                onChange={() => toggleHelp(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="contact-form__field">
        <span>
          Message <span className="contact-form__req">(required)</span>
        </span>
        <small>
          Please provide as much information about your project. ie: location,
          residential/commercial, size, product you are interested in.
        </small>
        <textarea
          rows="6"
          required
          value={form.message}
          onChange={update('message')}
        />
      </label>

      <label className="contact-form__field">
        <span>
          Project Size <span className="contact-form__req">(required)</span>
        </span>
        <small>How many m2 is your project</small>
        <select required value={form.size} onChange={update('size')}>
          <option value="" disabled>
            Select an option
          </option>
          {PROJECT_SIZES.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className="contact-form__field">
        <span>
          How did you hear about us?{' '}
          <span className="contact-form__req">(required)</span>
        </span>
        <select required value={form.referral} onChange={update('referral')}>
          <option value="" disabled>
            Select an option
          </option>
          {REFERRALS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn btn--solid contact-form__submit">
        Send
      </button>
    </form>
  )
}

function ContactUs() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img src={heroImg} alt="The Ambitec showroom" />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb__current">Contact us</span>
          </nav>
          <h1 className="product-hero__title">We would love to hear from you.</h1>
          <p className="product-hero__subtitle">
            Tell us a little more about your project and what finishes you are
            interested in and we will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container contact__inner">
          <div className="contact__info">
            <p className="contact__lead">
              Ambitec, New Zealand’s leading polished plaster specialist,
              providing high-end finishes tailored for architectural projects
              across Auckland and beyond.
            </p>

            <div className="contact__block">
              <span className="eyebrow">Showroom by appointment only</span>
              <p>
                34 Frost Rd, Mt Roskill
                <br />
                Auckland 1041
              </p>
              <p>Monday to Friday 9–4pm</p>
            </div>

            <div className="contact__block">
              <span className="eyebrow">Get in touch</span>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Ambitec%20Polished%20Plaster%20Inquiry`}
              >
                {CONTACT_EMAIL}
              </a>
              <a href="tel:+6493942953">+64 9 394 2953</a>
            </div>

            <div className="contact__block">
              <span className="eyebrow">Technical or installation queries</span>
              <a href="tel:0275959571">Call 027 5959 571</a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="Ambitec showroom location"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}

export default ContactUs
