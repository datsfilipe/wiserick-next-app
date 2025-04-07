import Image from 'next/image'

function Button(props: { toggleThemeButtonImage: string, propFunction: () => void }) {
  return (
    <button className='btn' onClick={props.propFunction}>
      {props.toggleThemeButtonImage ?
        <div className="button-image">
          <Image src={props.toggleThemeButtonImage} alt="Toggle theme" width="24" height="24" />
        </div>
        : ''
      }
    </button>
  )
}

export { Button }
