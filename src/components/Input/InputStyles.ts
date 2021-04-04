import styled from 'styled-components'
import { InputSize } from './InputTypes'
import { ThemeType } from 'components/types/shared.types'


export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const StyledLabelWrapper = styled.div`
  margin: 10px 0;
`

export const StyledLabel = styled.label<{
  theme: ThemeType
}>`
  font-size: 1rem;
  padding-left: 10px;
  color: ${({ theme }) => {
    if (theme == 'dark') return 'white;'
    else return 'black;'
  }}
`

export const StyledInputContainer = styled.div<{ size?: InputSize,  }>`
  position: relative;
  width: 100%;
  i {
    position: absolute;
    top: 16px;
    left: 8px;
    box-shadow: 12px 0px 10px -10px rgba(0, 0, 0, 0.1);
    padding: 10px 13px;
    padding: ${({ size }) =>  {

      if (size === 'sm') return '10px 13px;'
      else return '10px 13px;'

    }}
    background-color: #f4f7f8;
    transition: all 0.25s ease;
    border-radius: 10px;
  }
`

export const StyledInput = styled.input<{ size?: InputSize, error?: boolean }>`
  border: none;
  outline: none;
  width: 100%;
  padding: ${({ size }) =>  {

    if (size === 'sm') return '25px 25px;'
    else return '25px;'

  }}

  font-size: 1.2rem;
  background-color: #f4f7f8;
  border-radius: 10px;
  transition: all 0.25s ease;
  text-indent: 25px;

  border: ${({ error }) => error ? '1px solid #f44336;': '1px solid #f4f7f8;'}

  &:focus {
    text-indent: 30px;
    transition: all 0.25s ease;
  }

  &:focus + i {
    top: 15px;
    left: 6px;
    transition: all 0.25s ease;
    background-color: white;
  }

`