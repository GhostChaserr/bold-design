import { InputProps } from './InputTypes'

import {
  StyledInputWrapper,
  StyledInput,
  StyledInputContainer,
  StyledLabelWrapper,
  StyledLabel,
} from './InputStyles'

const Input = ({
  placeHolder,
  label,
  type,
  size,
  error,
  icon,
  handleChange,
}: InputProps) => {
  return (
    <StyledInputWrapper>
      {label && (
        <StyledLabelWrapper>
          <StyledLabel htmlFor={`input-${type}-component`}>{label}</StyledLabel>
        </StyledLabelWrapper>
      )}
      <StyledInputContainer size={size}>
        <StyledInput
          onChange={handleChange}
          error={error}
          id={`input-${type}-component`}
          placeholder={placeHolder}
          type={type}
        />
        {icon && icon}
      </StyledInputContainer>
    </StyledInputWrapper>
  )
}

Input.defaultProps = {
  placeHolder: 'Placeholder',
  iconClassName: 'fas fa-at',
  label: 'First name',
  type: 'text',
  size: 'sm',
  error: false,
  icon: <i className='fas fa-user-tie'></i>,
}

export default Input
