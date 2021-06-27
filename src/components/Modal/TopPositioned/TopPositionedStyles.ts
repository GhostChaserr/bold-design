import styled from 'styled-components'
import {
  StyledModalContentContainer,
  StyledModalContainer
} from '../ModalStyles'


export const StyledTopModalCloseButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  color: black;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
`


// flex-direction: ${({ bottomPositioned }) => {
//   if (bottomPositioned) return `column-reverse;`
//   return 'column;'
// }}

export const StyledTopModalContainer = styled(StyledModalContainer) <{ bottomPositioned?: boolean }>`
  width: 100vw;
  height: 100vh;
  flex-direction: ${({ bottomPositioned }) => {
      console.log(bottomPositioned)
      if (bottomPositioned) return `column-reverse;`
      return 'column;'
  }}
  justify-content: flex-start;
`
export const StyledTopModalChildrenContainer = styled.div``
export const StyledTopModalContentContainer = styled(StyledModalContentContainer) <{ height?: string }>`
  width: 100vw;
  border-radius: 0;
  height: 30vh;
  height: ${({ height }) => {
    if (height) return `${height};`
    return '30vh;'
  }}
`
