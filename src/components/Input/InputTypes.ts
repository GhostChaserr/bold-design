import { ThemeType } from 'components/types/shared.types'
import { ChangeEvent, ReactNode,  RefObject } from 'react'

export type InputType = 'text' | 'number' | 'date'
export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = {
  type?: InputType
  className?: string
  icon?: ReactNode
  iconClassName?: string
  placeHolder?: string
  label?: string
  size?: InputSize
  error?: boolean
  ref?: RefObject<HTMLElement>
  handleChange? : (event: ChangeEvent<HTMLInputElement>) => void
  theme?: ThemeType
}