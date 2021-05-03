import {FC } from 'react'

import { ModalProps } from './ModalTypes'

import {
  StyledModalContainer,
  StyledModalContentContainer,
  StyledModalChildrenContainer,
  StyledCloseButton,
  StyledHeader
} from './ModalStyles'


const Modal: FC<ModalProps> = ({ open, children, headerText, handleClose }) => {
  return (
    <StyledModalContainer open={open} >
      <StyledModalContentContainer open={open}>
        <StyledCloseButton onClick={handleClose} >
          X
        </StyledCloseButton>
        <StyledHeader>
          {headerText ? headerText : 'Sample modal'}
        </StyledHeader>
        <StyledModalChildrenContainer>
          {children}
        </StyledModalChildrenContainer>
      </StyledModalContentContainer>
    </StyledModalContainer>
  )
}

export default Modal