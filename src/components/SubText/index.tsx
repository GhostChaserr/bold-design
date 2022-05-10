import classNames from 'classnames'
import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
  text: string
}

const SubText: FC<Props> = ({ text }) => {
  return <h6 className={classNames(styles.container)}>{text}</h6>
}

export default SubText
