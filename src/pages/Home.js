import React from 'react'
import { useSelector } from 'react-redux'
import { TvSet } from '../components'
import TextSelector from '../helpers/TextSelector'
import { HomeStyle } from '../styles'

export default function Home() {
  const language = useSelector((state) => state.language)

  return (
    <HomeStyle>
      <div className='main__content'>
        <div className='main__titles'>
          <h1 className='main__title'>
            {TextSelector('Find your next favorite TV show', 'Βρες τη νέα αγαπημένη σου σειρά', language)}
          </h1>
          <p className='main__subtitle'>
            {TextSelector(
              'Choose among the most popular or trending TV series right now. Discover shows you missed and more.',
              'Επίλεξε ανάμεσα στις πιο δημοφιλείς τηλεοπτικές σειρές. Ανακάλυψε σειρές που δεν πρόλαβες και άλλα',
              language
            )}
          </p>
        </div>
        <TvSet className='main__svg' />
      </div>
    </HomeStyle>
  )
}
