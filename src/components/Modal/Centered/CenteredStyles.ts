import globalConstants from 'constants/global.constants'
import styled from 'styled-components'

export const StyledModalContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: ${({ open }) => open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: ${globalConstants.zIndexes.modal};
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }
`

export const StyledModalContentContainer = styled.div<{ open: boolean }>`
  min-width: 600px;
  min-height: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  box-sizing: border-box;
  transition: all 0.2s ease;
  @media (max-width: 600px) {
    width: 100%;
    border: 1px solid blue;
  }
`

export const StyledCloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  border: 1px solid black;
  font-size: 12px;
  padding: 10px 15px;
  border: none;
  outline: none;
  background: white;
  cursor: pointer;
  color: black;
  border-radius: 13px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    top: -13px;
    right: -13px;
    transition: all 0.2s ease;
  }
`

export const StyledModalChildrenContainer = styled.div``