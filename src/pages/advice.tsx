import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Advice: NextPage = () => {
  const [rickAndMortyCharacterImg, setRickAndMortyCharacterImg] = useState<string>()
  const [rickAndMortyCharacterName, setRickAndMortyCharacterName] = useState<string>()
  const [advice, setAdvice] = useState<string>()

  useEffect(() => {
    const who = (Math.random() * (15 - 1) + 1) | 0

    async function getApiCharacterImage(who: number) {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${who}`)
        .then(response => response.json())
        .then(data => data)

      setRickAndMortyCharacterName(data.name)
      setRickAndMortyCharacterImg(data.image)
    }

    async function getApiAdviceText() {
      try {
        const advice = await fetch('https://corsproxy.io?url=https://www.affirmations.dev/')
          .then(response => response.json())
          .then(data => data.affirmation)

        setAdvice(advice)
      } catch (error) {
        console.error(error)
        setAdvice(`
          Unable to fetch a piece of advice now. Try again Later. Also, I'm not a robot programmed
          by Rick, although that's exactly what a robot would say, I'm not.
        `)
      }
    }

    getApiCharacterImage(who)
    getApiAdviceText()
  }, [])

  return (
    <main className='advice'>
      {rickAndMortyCharacterImg && advice ?
        <>
          <header>
            <Link href="/">
              <h1 className="upperTitle">Wise</h1>
              <h1 className="bottomTitle">Rick</h1>
            </Link>
          </header>
          <div className="card">
            <div className="advice-text">
              {`"${advice}"`}
              <br />
              <p className="author">- {rickAndMortyCharacterName}</p>
            </div>
            <div className="image" >
              <Image alt='Imagem de bode' width='300' height='300' src={rickAndMortyCharacterImg} ></Image>
            </div>
          </div>
        </> : ''}
    </main>
  )
}

export default Advice
