import { createGlobalStyle } from 'styled-components'
import { ThemeColorsType } from 'types/theme.types'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#363537',
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  background: '#999',
}


export const EnumAppTheme = {
  light: 'light',
  dark: 'dark'
}

export const getLightTheme = (theme?: ThemeColorsType): ThemeColorsType => {
  if (!theme) return lightTheme
  return theme
}

export const getDarkTheme = (theme: ThemeColorsType = darkTheme): ThemeColorsType => {
  if (!theme) return darkTheme
  return theme
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeColorsType }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`
