import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonVariant = 'highlight' | 'primary'
type ButtonSize = 'block' | 'lg' | 'sm'

type Props = {
  text: string
  variant: ButtonVariant
  icon?: ReactNode
}

const Button: FC<Props> = ({ text, variant }) => {
  const classes = [styles.button]
  if (variant === 'highlight') classes.push(styles.highlight)
  else if (variant === 'primary') classes.push(styles.primary)

  return <button className={classNames(classes)}>{text}</button>
}

export default Button
