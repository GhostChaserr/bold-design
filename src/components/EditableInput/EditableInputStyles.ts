import styled from 'styled-components'
import { StyledInput, StyledInputContainer } from '../Input/InputStyles'

export const StyledEditableInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const StyledEditableInputContainer = styled(StyledInputContainer)`
  flex: 1;
  position: relative;

`

export const StyledEditableIconContainer = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;
  padding: 18px;
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 10px;
`

export const StyledEditableInput = styled(StyledInput)`
  box-sizing: border-box;
`

