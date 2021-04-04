import { ThemeType } from 'components/types/shared.types'
import { ChangeEvent, ReactNode,  RefObject } from 'react'

type EditableInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  placeHolder?: string
  label?: string
  error?: boolean
  ref?: RefObject<HTMLElement>
  handleChange? : (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  theme?: ThemeType
}

export default EditableInputProps