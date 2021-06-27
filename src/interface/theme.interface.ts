import { ThemeType, ThemeColorsType } from 'types/theme.types'

export interface IThemeConfig {
  theme: ThemeType
  darkThemeColors?: ThemeColorsType
  lightThemeColors?: ThemeColorsType
}
