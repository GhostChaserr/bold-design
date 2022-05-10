import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonVariant = 'highlight' | 'primary'
type ButtonSize = 'block' | 'lg' | 'sm'

type Props = {
  text: string
  variant: ButtonVariant
  icon?: ReactNode
  block?: boolean
}

const Button: FC<Props> = ({ text, variant, block }) => {
  const classes = [styles.button]
  if (variant === 'highlight') classes.push(styles.highlight)
  else if (variant === 'primary') classes.push(styles.primary)

  if (block) classes.push(styles.btn_block )

  return <button className={classNames(classes)}>{text}</button>
}

export default Button
