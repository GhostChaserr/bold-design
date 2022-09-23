import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type IconSizeOptions = 'sm' | 'md' | 'lg'

type IconProps = {
  icon: ReactNode
  onClick?: () => void
  size: IconSizeOptions
}

const Icon: FC<IconProps> = ({ icon, onClick, size }) => {
  return (
    <button 
      onClick={onClick}  
      className={classNames(styles.container, styles[size])}>
      {icon}
    </button>
  )
}

export default Icon