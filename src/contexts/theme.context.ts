import { createContext } from 'react'
import { ThemeType } from 'types/theme.types'

export interface IThemeContext {
  theme: ThemeType
  themeToggler: () => any
}

const context: IThemeContext = {
  theme: 'dark',
  // tslint:disable-next-line: no-console
  themeToggler: () => console.log()
}


export default createContext(context)
