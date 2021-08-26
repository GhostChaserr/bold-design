import React, { FC } from 'react'
import { StyledInput } from './DatePickerInputStyles'

import { DatePickerInputProps } from './DatePickerInputTypes'
const DatePickerInput: FC<DatePickerInputProps> = ({ onFocus }) => {
  return (
    <>
      <StyledInput
        onFocus={onFocus} readOnly value='20/20/20'
      />
    </>
  )
}

export default DatePickerInput