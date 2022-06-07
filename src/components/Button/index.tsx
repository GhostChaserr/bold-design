import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonVariant = 'gray_hightlight' | 'primary' | 'white_highlight'
type ButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  text: string
  variant: ButtonVariant
  icon?: ReactNode
  block?: boolean
  size: ButtonSize
  onClick: () => void
}

const Button: FC<Props> = (props) => {
  const classes = [styles.button]
  if (props.block) classes.push(styles.btn_block)

  return (
    <button onClick={props.onClick} className={classNames(classes, styles[props.variant], styles[props.size])}>
      {props.icon && (
        <span className={classNames(styles.icon_container)}>{props.icon}</span>
      )}
      <span className={classNames(styles.text_container)}>{props.text}</span>
    </button>
  )
}

export default Button
