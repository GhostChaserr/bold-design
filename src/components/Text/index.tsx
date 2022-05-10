import React, { FC } from 'react'
import styles from './styles.module.css'

type Props = {
  text: string
}

const Text: FC<Props> = ({ text }) => {
  return <p className={styles.container}>{text}</p>
}

export default Text
