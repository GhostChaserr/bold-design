import styled from 'styled-components'
import { SizeType } from 'components/types/shared.types'

import { buttonSize, buttonColors } from './ButtonUtils'
import { ButtonColor } from './ButtonTypes'


export const StyledButton = styled.button<{
  block?: boolean
  width?: number
  size?: SizeType
  color?: ButtonColor
}>`
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  padding: ${({ size }) => size && buttonSize[size] || buttonSize.md };
  background-color: ${({ color }) => color && buttonColors[color] || 'white' };
  border-radius: 5px;
  width: ${({ block, width }) =>  block ? '100%' : width ? `${width}px`: '100$'};
  transition: all 0.2s ease;
  transform: translateY(0);
  &:hover {
    transition: all 0.2s ease;
    transform: translateY(-4px);
  }
`