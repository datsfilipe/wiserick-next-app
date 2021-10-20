import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { Theme } from '../components/Theme/index'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Theme>
        <Component {...pageProps} />
        <GlobalStyle />
      </Theme>
    </ThemeContextProvider>
  )
}
export default MyApp