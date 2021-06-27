import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from 'contexts'

import { useTheme } from 'hooks'

import {
  getLightTheme,
  getDarkTheme,
  GlobalStyles,
} from 'utils/theme.utils'

import { ThemeProps } from './ThemeProps'


const Theme: FC<ThemeProps> = ({ children, config }) => {
  const { theme, themeToggler } = useTheme(config)
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      <ThemeProvider
        theme={theme === 'light' ? getLightTheme(config.lightThemeColors) : getDarkTheme(config.darkThemeColors)}
      >
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme
