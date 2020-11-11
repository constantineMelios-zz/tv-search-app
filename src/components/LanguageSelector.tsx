import React from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { greek, english } from '../redux/language'
import { LanguageStyle } from '../styles'
import el from '../assets/el.png'
import en from '../assets/en.png'

export default function LanguageSelector() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const dispatch = useDispatch()

  function handleClick() {
    if (language === 'en') {
      dispatch(greek())
    } else {
      dispatch(english())
    }
  }

  return (
    <LanguageStyle type='button' onClick={handleClick} aria-label={language === 'en' ? "Change language" : "Άλλαξε Γλώσσα"}>
      <img src={language === 'en' ? el : en} alt='change language' />
    </LanguageStyle>
  )
}