import React from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { greek, english } from '../redux/language'
import { LanguageStyle } from '../styles'
import el from '../assets/el.png'
import en from '../assets/en.png'
import TextSelector from '../helpers/TextSelector'

export default function LanguageSelector() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const dispatch = useDispatch()

  function handleClick() {
    if (language === 'en-US') {
      dispatch(greek())
    } else {
      dispatch(english())
    }
  }

  return (
    <LanguageStyle type='button' onClick={handleClick} aria-label={TextSelector('Change language', 'Άλλαξε Γλώσσα', language)}>
      <img src={language === 'en-US' ? el : en} alt='change language' />
    </LanguageStyle>
  )
}