import React, { FC } from 'react'
import { ModalProps } from '../ModalTypes'

import {
  StyledModalContainer,
  StyledModalContentContainer,
  StyledModalChildrenContainer,
  StyledCloseButton,
} from './CenteredStyles'


const Centered: FC<ModalProps> = ({ open, preset, children, handleClose }) => {
  return (
    <StyledModalContainer open={open} >
      <StyledModalContentContainer open={open}>
        <StyledCloseButton onClick={handleClose} >
          X
        </StyledCloseButton>
        <StyledModalChildrenContainer>
          {children}
        </StyledModalChildrenContainer>
      </StyledModalContentContainer>
    </StyledModalContainer>
  )
}

export default Centered