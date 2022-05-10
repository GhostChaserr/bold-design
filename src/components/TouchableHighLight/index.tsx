import classNames from 'classnames'
import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
  onClick: () => void
}

const TouchableHighLight: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classNames(styles.container)}>
      {children}
    </button>
  )
}

export default TouchableHighLight
