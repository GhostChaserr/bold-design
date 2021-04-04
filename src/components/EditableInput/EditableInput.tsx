import { type } from 'os'
import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'

import { StyledLabelWrapper, StyledLabel } from 'components/Input/InputStyles'
import EditableInputProps from './EditableInputTypes'

import {
  StyledEditableIconContainer,
  StyledEditableInputContainer,
  StyledEditableInputWrapper,
  StyledEditableInput
} from './EditableInputStyles'

localStorage.setItem('theme', 'dark')


const EditableInput = ({
  value,
  handleChange,
  icon,
  placeHolder,
  label,
  theme
}: EditableInputProps) => {

  const [isEditing, setIsEditing] = useState<boolean>(true)
  const handleEditing = (): void =>  setIsEditing(!isEditing)

  return (
    <React.Fragment>
      {label && (
        <StyledLabelWrapper>
          <StyledLabel htmlFor={`input-${type}-component`}>{label}</StyledLabel>
        </StyledLabelWrapper>
      )}
      <StyledEditableInputWrapper>
        <StyledEditableInputContainer>
          <StyledEditableInput
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
            readOnly={isEditing}
          />
          {icon && icon}
        </StyledEditableInputContainer>
        <StyledEditableIconContainer>
          {!isEditing &&  <FaCheck onClick={handleEditing} />}
          {isEditing && <FaRegEdit onClick={handleEditing} /> }
        </StyledEditableIconContainer>
      </StyledEditableInputWrapper>
    </React.Fragment>
  )
}

EditableInput.defaultProps = {
  placeHolder: 'Placeholder',
  iconClassName: 'fas fa-at',
  label: 'Edit profile name',
  type: 'text',
  size: 'sm',
  error: false,
  icon: <i className='fas fa-user-tie'></i>,
  theme: 'dark'
}


export default EditableInput