import classNames from "classnames"
import { ChangeEvent, FC, ReactNode } from "react"
import styles from './styles.module.css'


type TextInputProps = {
  disabled: boolean
  onChange?: (text: string) => void
  placeholder?: string 
  icon?: ReactNode
  onClick?: () => void
  
}

const TextInput: FC<TextInputProps> = ({ onChange, disabled, placeholder, icon, onClick }) => {
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value) 
  return (
    <div className={classNames(styles.container)}>
      {icon && (
        <div className={classNames(styles.icon_container)}>
          {icon}
        </div>
      )}
      <input
        onClick={onClick}
        readOnly={disabled}
        className={classNames(styles.input, !icon && styles.text_indent)} 
        onChange={onTextChange}
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput