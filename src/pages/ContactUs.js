import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContactStyle } from '../styles'
import letter from '../assets/letter.svg'
import { name, email, message, setValidation, removeValidation } from '../redux/form'
import TextSelector from '../helpers/TextSelector'


export default function ContactUs() {
  const language = useSelector((state) => state.language)
  const form = useSelector((state) => state.form)
  const dispatch = useDispatch()
  const formRef = useRef(null)

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
      <div className='container' ref={formRef}>
        <h1 className='contact__title'>
          {TextSelector('Contact Us', 'Επικοινωνία', language)}
        </h1>
        <p className='contact__validation'>
          {form.validation}
        </p>
        <form className='contact__form' encType='text/plain' onSubmit={handleSubmit}>
          <label htmlFor='name'>{TextSelector('Full Name', 'Ονοματεπώνυμο', language)}</label>
          <input
            type='text'
            name='name'
            placeholder={TextSelector('Your name', 'Το όνομα σου', language)}
            value={form.name}
            onChange={(event) => { dispatch(name(event.target.value)) }}
            required
          />
          <label htmlFor='name'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='example@email.com'
            value={form.email}
            onChange={(event) => { dispatch(email(event.target.value)) }}
            required
          />
          <label htmlFor='name'>{TextSelector('Message', 'Μήνυμα', language)}</label>
          <textarea
            name='message'
            placeholder={TextSelector('Your message here', 'Το μήνυμα σου', language)}
            value={form.message}
            onChange={(event) => { dispatch(message(event.target.value)) }}
            rows={1500}
            required
          />
          <button type='submit' className='contact__btn'>
            <img src={letter}
              alt={TextSelector('Send Message', 'Στείλε μήνυμα', language)}
              aria-label={TextSelector('Send Message', 'Στείλε μήνυμα', language)} />
          </button>
        </form>
      </div>
    </ContactStyle>
  )
}