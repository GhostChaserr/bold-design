import styled from 'styled-components'
import { NotificationPositionType } from '../NotificationTypes'

export const StyledContainer = styled.div<{ position?: NotificationPositionType }>`
  max-width: 200px;
  padding: 10px;
  border: 1px solid red;
`

export const StyledCloseBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
`