

import EditableInput from 'components/EditableInput'
import { Meta  } from "@storybook/react/types-6-0";

import styled from 'styled-components'

const StyledPreviewWrapper = styled.div`
  width: 500px;
`

export default {
  title: "components/input",
  component: EditableInput,
} as Meta;


export const Sample = () => (
  <StyledPreviewWrapper>
    <EditableInput />
  </StyledPreviewWrapper>
);
