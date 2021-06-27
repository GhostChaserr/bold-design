import React, { FC } from 'react'
import { TopPositionedProps } from './TopPositionedTypes'

import {
  StyledTopModalChildrenContainer,
  StyledTopModalContentContainer,
  StyledTopModalContainer,
  StyledTopModalCloseButton
} from './TopPositionedStyles'

const TopPositioned: FC<TopPositionedProps> = ({
  open,
  bottomPositioned,
  children,
  handleClose,
  height
}) => {
  return (
    <StyledTopModalContainer open={open} bottomPositioned={bottomPositioned} >
      <StyledTopModalContentContainer height={height} open={open}>
        <StyledTopModalCloseButton onClick={handleClose}>
          Close
        </StyledTopModalCloseButton>
        <StyledTopModalChildrenContainer>
          {children}
        </StyledTopModalChildrenContainer>
      </StyledTopModalContentContainer>
    </StyledTopModalContainer>
  )
}

export default TopPositioned


