import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { ContactStyle } from '../styles'
import letter from '../assets/letter.svg'


export default function ContactUs() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <ContactStyle>
      <h1 className="contact__title">
        {language === 'en' ? "Contact Us" : "Επικοινωνία"}
      </h1>
      <form className="contact__form" encType="text/plain" onSubmit={handleSubmit}>
        <label htmlFor="name">{language === 'en' ? "Full Name" : "Ονοματεπώνυμο"}</label>
        <input
          type="text"
          name="name"
          placeholder={language === 'en' ? "Your name" : "Το όνομα σου"}
          value={name}
          onChange={(event) => { setName(event.target.value) }}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
        />
        <label htmlFor="name">{language === 'en' ? "Message" : "Μήνυμα"}</label>
        <textarea
          name="message"
          placeholder={language === 'en' ? "Your message" : "Το μήνυμα σου"}
          value={message}
          onChange={(event) => { setMessage(event.target.value) }}
        />
        <button type="submit" className="contact__btn">
          <img src={letter} alt={language === 'en' ? "Send Message" : "Στείλε μήνυμα"} aria-label={language === 'en' ? "Send Message" : "Στείλε μήνυμα"} />
        </button>
      </form>
    </ContactStyle>
  )
}