import 'styled-components'
import { createContext, ReactNode, useState, useEffect } from 'react'
import main_theme from '../styles/Themes/main_theme'
import mainToggleThemeIcon from '../assets/icons/sun.svg'
import dark_theme from '../styles/Themes/dark_theme'
import darkThemeIcon from '../assets/icons/moon.svg'
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

function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(main_theme)
  const [themeIcon, setThemeIcon] = useState<string>(mainToggleThemeIcon)

  useEffect(() => {
    const savedThemeName = localStorage.getItem('themeName')

    if (savedThemeName === 'dark') {
      setTheme(dark_theme)
      setThemeIcon(darkThemeIcon)
    } else {
      setTheme(main_theme)
      setThemeIcon(mainToggleThemeIcon)
    }
  }, [])

  function switchTheme(theme: DefaultTheme, themeIcon: string) {
    setTheme(theme)
    setThemeIcon(themeIcon)

    const themeName = theme === dark_theme ? 'dark' : 'main'
    localStorage.setItem('themeName', themeName)
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIcon, switchTheme }} >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
