import Image from 'next/image'

import { Button } from './style'

function ButtonComponent (props: {toggleThemeButtonImage: string, propFunction: () => void}) {
  return (
    <Button onClick={props.propFunction}>
      { props.toggleThemeButtonImage ?
        <div className="button-image">
          <Image src={props.toggleThemeButtonImage} alt="Toggle theme" width="24" height="24" />
        </div>
        : '' 
      }
    </Button>
  )
}

export { ButtonComponent }