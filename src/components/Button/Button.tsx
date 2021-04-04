import React from 'react'

import { ButtonProps } from './ButtonTypes'
import { StyledButton } from './ButtonStyles'

const Button = ({
  text,
  width,
  block,
  disabled,
  size,
  color,
  handleClick,
}: ButtonProps) => {
  return (
    <React.Fragment>
      <StyledButton
        onClick={handleClick}
        disabled={disabled}
        size={size}
        color={color}
        block={block}
        width={width}
      >{text}</StyledButton>
    </React.Fragment>
  )
}

Button.defaultProps = {
  text: 'Upload now',
  width: 200,
  size: 'md',
  color: 'strongRed',
  block: false,
}

export default Button