import { SizeType, ThemeType } from "components/types/shared.types"

export type ButtonType = 'regular' | 'floating'
export type ButtonColor = 'lightRed' | 'boldRed' | 'strongRed'

export type ButtonProps = {
  size?: SizeType
  type?: ButtonType
  theme?: ThemeType
  block?: boolean
  width?: number
  text: string
  color?: ButtonColor
  disabled?: boolean
  handleClick? : () => void
}