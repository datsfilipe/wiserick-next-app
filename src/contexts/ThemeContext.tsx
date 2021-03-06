import 'styled-components'
import { createContext, ReactNode, useState } from 'react'
import main_theme from '../styles/Themes/main_theme'
import mainToggleThemeIcon from '../assets/icons/sun.svg'
import { DefaultTheme } from 'styled-components'

export type ThemeContextType = {
  theme: DefaultTheme;
  switchTheme: (theme: DefaultTheme, themeIcon: string) => void;
  themeIcon: string;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType)

function ThemeContextProvider (props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(main_theme)
  const [themeIcon, setThemeIcon] = useState<string>(mainToggleThemeIcon)

  function switchTheme (theme: DefaultTheme, themeIcon: string) {
    setTheme(theme)
    setThemeIcon(themeIcon)
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIcon, switchTheme }} >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }