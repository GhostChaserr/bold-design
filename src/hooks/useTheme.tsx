import { useState } from 'react'
import { ThemeType } from 'types/theme.types'
import { IThemeConfig } from 'interface/theme.interface'


const useTheme = (config: IThemeConfig) => {
  const [theme, setTheme] = useState<ThemeType>(config.theme)
  const themeToggler = () => { theme === 'light' ? setTheme('dark') : setTheme('light') }

  return {
    themeToggler,
    theme
  }
}

export default useTheme