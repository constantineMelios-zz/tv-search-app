import React, { useRef, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { ContactStyle } from '../styles'
import letter from '../assets/letter.svg'


export default function ContactUs() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validation, setValidation] = useState('')
  const formRef = useRef<HTMLDivElement>(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (formRef.current !== null) {
      formRef.current.classList.add('sent')
    }
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
      validationMessage()
      if (formRef.current !== null) {
        formRef.current.classList.remove('sent')
      }
    }, 250)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function validationMessage() {
    setValidation(() => {
      if (language === 'en') {
        return "Your message sent succesfully! Anything else to add?"
      }
      return "To μήνυμα σας στάλθηκε με επιτυχία! Θέλετε να μας πείτε κάτι ακόμα;"
    })
  }

  return (
    <ContactStyle>
      <div className="container" ref={formRef}>
        <h1 className="contact__title">
          {language === 'en' ? "Contact Us" : "Επικοινωνία"}
        </h1>
        <p className="contact__validation">
          {validation}
        </p>
        <form className="contact__form" encType="text/plain" onSubmit={handleSubmit}>
          <label htmlFor="name">{language === 'en' ? "Full Name" : "Ονοματεπώνυμο"}</label>
          <input
            type="text"
            name="name"
            placeholder={language === 'en' ? "Your name" : "Το όνομα σου"}
            value={name}
            onChange={(event) => { setName(event.target.value) }}
            required
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
            required
          />
          <label htmlFor="name">{language === 'en' ? "Message" : "Μήνυμα"}</label>
          <textarea
            name="message"
            placeholder={language === 'en' ? "Your message here" : "Το μήνυμα σου"}
            value={message}
            onChange={(event) => { setMessage(event.target.value) }}
            rows={1500}
            required
          />
          <button type="submit" className="contact__btn">
            <img src={letter} alt={language === 'en' ? "Send Message" : "Στείλε μήνυμα"} aria-label={language === 'en' ? "Send Message" : "Στείλε μήνυμα"} />
          </button>
        </form>
      </div>
    </ContactStyle>
  )
}