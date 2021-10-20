import type { NextPage } from 'next'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import { Main, Header, Title, Card, AdviceText } from '../styles/advice'
import { ButtonComponent } from '../components/Button'
import { useTheme } from '../hooks/useTheme'
import mainThemeIcon from '../assets/icons/sun.svg'
import main_theme from '../styles/Themes/main_theme'

import darkThemeIcon from '../assets/icons/moon.svg'
import dark_theme from '../styles/Themes/dark_theme'

const Advice: NextPage = () => {
  const [rickAndMortyCharacterImg, setRickAndMortyCharacterImg] = useState<string>()
  const [rickAndMortyCharacterName, setRickAndMortyCharacterName] = useState<string>()
  const [advice, setAdvice] = useState<string>()

  const { theme, themeIcon, switchTheme } = useTheme()

  async function handleToggleTheme() {
    if (theme === main_theme) {
      switchTheme(dark_theme, darkThemeIcon)
    } else if (theme === dark_theme) {
      switchTheme(main_theme, mainThemeIcon)
    } else {
      throw new Error('Unknown theme')
    }
  }

  useEffect(() => {
    const who = (Math.random() * (15 - 1) + 1)  | 0

    async function getApiCharacterImage (who: number) {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${who}`)
        .then(response => response.json())
        .then(data => data)
  
      setRickAndMortyCharacterName(data.name)
      setRickAndMortyCharacterImg(data.image)
    }

    async function getApiAdviceText () {
      const advice = await fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => data.slip.advice)
      
      setAdvice(advice)
    }

    getApiCharacterImage(who)
    getApiAdviceText()
  }, [])  

  return (
    <Main>
      { rickAndMortyCharacterImg && advice ? 
        <>
          <Header>
            <Title className="upperTitle">Wise</Title>
            <Title className="bottomTitle">Rick</Title>
          </Header>
          <ButtonComponent toggleThemeButtonImage={themeIcon} propFunction={handleToggleTheme} />
          <Card>
            <AdviceText>
              {`"${advice}"`}
              <br />
              <p className="author">- {rickAndMortyCharacterName}</p>
            </AdviceText>
            <div className="image" >
              <Image alt='Imagem de bode' width='300' height='300' src={rickAndMortyCharacterImg} ></Image>
            </div>
          </Card>
        </> : '' }
    </Main>
  )
}

export default Advice