import classNames from 'classnames'
import { FC, CSSProperties } from 'react'
import styles from './styles.module.css'

type Props = {
  text: string
  size: 'normal' | 'lg'
  cssProperties?: CSSProperties
}

const Text: FC<Props> = ({ text, size, cssProperties }) => {
  return (
    <p
      style={cssProperties}
      className={classNames(styles.container, styles[size])}
    >
      {text}
    </p>
  )
}

Text.defaultProps = {
  size: 'normal'
}

export default Text
