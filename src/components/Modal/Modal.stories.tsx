import Modal from './Modal'
import { Meta  } from '@storybook/react/types-6-0'

import styled from 'styled-components'

const StyledPreviewWrapper = styled.div`
  width: 500px;
`

export default {
  title: 'components/modal',
  component: Modal,
} as Meta

export const DefaultModal = () => (
  <StyledPreviewWrapper>
    <Modal handleClose={() => console.log('Closing')} open={true} />
  </StyledPreviewWrapper>
)
