import React, { useState } from 'react'
import me from '../assets/img/me.jpg'
import '../assets/style/model.css'

const Model = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* FLOATING AVATAR BUTTON */}
      <div className="bottom-modal">
        <img
          src={me}
          alt="profile"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* PROFILE MODAL */}
      {open && (
        <div className="profile-overlay" onClick={() => setOpen(false)}>
          <div
            className="profile-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="profile-close" onClick={() => setOpen(false)}>
              ×
            </button>

            <img src={me} className="profile-img" alt="me" />

            <p className="profile-text">
              <span className="profile-title">Hi i’m Deratech</span>{' '}
              I craft bespoke, high-converting websites that elevate your brand
              and deliver real business results. Every site I build is designed
              with strategy, aesthetics, and user experience in mind — helping
              you attract your ideal audience, build trust, and seamlessly
              convert visitors into loyal clients.
            </p>

            <ul className="profile-skills">
              <li>Web Developer</li>
              <li>WordPress Developer</li>
              <li>Website Revamping</li>
              <li>React || Laravel || JavaScript Developer</li>
              <li>Tutoring</li>
            </ul>

            <div className="profile-socials">
              <a href="https://wa.me/message/R4UQNDGGZWDGJ1" target="_blank"><i className="bi bi-whatsapp" /></a>
              <a href="https://facebook.com" target="_blank"><i className="bi bi-facebook" /></a>
              <a href="https://instagram.com" target="_blank"><i className="bi bi-instagram" /></a>
              <a href="https://linkedin.com" target="_blank"><i className="bi bi-linkedin" /></a>
              <a href="mailto:christianchrisdav@gmail.com"><i className="bi bi-envelope-at-fill" /></a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Model
