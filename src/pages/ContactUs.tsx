import React, { useEffect, useRef } from 'react'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { ContactStyle } from '../styles'
import letter from '../assets/letter.svg'
import { name, email, message, setValidation, removeValidation } from '../redux/form'


export default function ContactUs() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const form = useSelector((state: RootStateOrAny) => state.form)
  const dispatch = useDispatch()
  const formRef = useRef<HTMLDivElement>(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (formRef.current !== null) {
      formRef.current.classList.add('sent')
    }
    setTimeout(() => {
      dispatch(name(''))
      dispatch(email(''))
      dispatch(message(''))
      dispatch(setValidation(language))
      if (formRef.current !== null) {
        formRef.current.classList.remove('sent')
      }
    }, 250)
  }

  useEffect(() => {
    dispatch(setValidation(language))
  }, [language, dispatch])

  useEffect(() => {
    dispatch(removeValidation())
    return () => {
      dispatch(removeValidation())
    }
  }, [dispatch])

  return (
    <ContactStyle>
      <div className="container" ref={formRef}>
        <h1 className="contact__title">
          {language === 'en' ? "Contact Us" : "Επικοινωνία"}
        </h1>
        <p className="contact__validation">
          {form.validation}
        </p>
        <form className="contact__form" encType="text/plain" onSubmit={handleSubmit}>
          <label htmlFor="name">{language === 'en' ? "Full Name" : "Ονοματεπώνυμο"}</label>
          <input
            type="text"
            name="name"
            placeholder={language === 'en' ? "Your name" : "Το όνομα σου"}
            value={form.name}
            onChange={(event) => { dispatch(name(event.target.value)) }}
            required
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={(event) => { dispatch(email(event.target.value)) }}
            required
          />
          <label htmlFor="name">{language === 'en' ? "Message" : "Μήνυμα"}</label>
          <textarea
            name="message"
            placeholder={language === 'en' ? "Your message here" : "Το μήνυμα σου"}
            value={form.message}
            onChange={(event) => { dispatch(message(event.target.value)) }}
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