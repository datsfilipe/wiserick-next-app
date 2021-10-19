import type { NextPage } from 'next'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import { Main, Header, Title, Card, AdviceText } from '../styles/advice'

const Advice: NextPage = () => {
  const [rickAndMortyCharacterImg, setRickAndMortyCharacterImg] = useState<string>()
  const [rickAndMortyCharacterName, setRickAndMortyCharacterName] = useState<string>()
  const [advice, setAdvice] = useState<string>()

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