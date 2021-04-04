import Input from './Input'
import { Meta  } from '@storybook/react/types-6-0'

import styled from 'styled-components'

const StyledPreviewWrapper = styled.div`
  width: 500px;
`

export default {
  title: 'components/input',
  component: Input,
} as Meta

export const TextInput = () => (
  <StyledPreviewWrapper>
  <Input
    size='md'
    label='Firstname'
    type='text'
    icon={<i className='fas fa-user-tie'>@</i>}
  />
  </StyledPreviewWrapper>
)

export const NumberInput = () => (
  <StyledPreviewWrapper>
    <Input
      size='md'
      label='Sallary'
      type='number'
      icon={<i className='fas fa-user-tie'>@</i>}
    />
  </StyledPreviewWrapper>
)

export const DateInput = () => (
  <StyledPreviewWrapper>
    <Input
      size='md'
      label='Sallary'
      type='date'
      icon={<i className='fas fa-user-tie'>@</i>}
    />
  </StyledPreviewWrapper>
)
export const ErrorInput = () => (
  <StyledPreviewWrapper>
    <Input
      error={true}
      size='md'
      label='Sallary'
      type='number'
      icon={<i className='fas fa-user-tie'>@</i>}
    />
  </StyledPreviewWrapper>
)
