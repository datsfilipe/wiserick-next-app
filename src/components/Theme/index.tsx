import { useContext, ReactNode } from 'react'

import GlobalStyle from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeContext'

type ThemeProps = {
  children: ReactNode;
}

export function Theme(props: ThemeProps) {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}
