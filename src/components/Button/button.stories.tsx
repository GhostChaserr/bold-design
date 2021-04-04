
import styled from 'styled-components'
import Button from './Button'
import { Meta  } from "@storybook/react/types-6-0";

const StyledPreviewWrapper = styled.div`
  width: 500px;
`

export default {
  title: "components/button",
  component: Button,
} as Meta;


export const DefaultButton = () => (
  <StyledPreviewWrapper>
    <Button />
  </StyledPreviewWrapper>
)

export const BlockButton = () => (
  <StyledPreviewWrapper>
    <Button 
      block={true}
    />
  </StyledPreviewWrapper>
)

export const CustomWidth = () => (
  <StyledPreviewWrapper>
    <Button
      width={100}
    />
  </StyledPreviewWrapper>
)

export const MediumSizeButton = () => (
  <StyledPreviewWrapper>
    <Button 
      size='md'
    />
  </StyledPreviewWrapper>
)


export const SmallSizeButton = () => (
  <StyledPreviewWrapper>
    <Button 
      size='sm'
    />
  </StyledPreviewWrapper>
)

export const LargeSizeButton = () => (
  <StyledPreviewWrapper>
    <Button 
      size='lg'
      block={true}
    />
  </StyledPreviewWrapper>
)