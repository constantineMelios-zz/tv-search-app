import React from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { greek, english } from '../redux/language'
import styled from 'styled-components'


const LangStyle = styled.div`
  margin: 5em;
`

export default function LanguageSelector() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const dispatch = useDispatch()

  return (
    <LangStyle>
      <h1>{language}</h1>
      <button type="button" onClick={() => dispatch(greek())}>
        Greek
      </button>
      <button type="button" onClick={() => dispatch(english())}>
        English
      </button>
    </LangStyle>
  )
}