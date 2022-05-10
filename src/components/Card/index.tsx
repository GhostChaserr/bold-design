import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

type CardVariant = 'basic' | 'withPadding'

type Props = {
  variant?: CardVariant
}

const Card: FC<Props> = ({ children, variant }) => {
  return (
    <div
      className={classNames(
        styles.container,
        variant === 'withPadding' && styles.card_padding
      )}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  variant: 'withPadding'
}

export default Card
