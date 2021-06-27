import { createGlobalStyle } from 'styled-components'


interface ITheme {
  body: string
  text: string
}

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`