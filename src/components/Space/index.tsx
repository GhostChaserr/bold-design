import classNames from 'classnames'

import styles from './styles.module.css'
import { FC } from 'react'

type Props = {
  direction: 'horisontal' | 'vertical'
  height: number
  justify:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
  align: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
}

const Space: FC<Props> = ({ children, direction, justify, align, height }) => {
  return (
    <div
      style={{
        justifyContent: justify,
        alignItems: align,
        height: `${height}px`
      }}
      className={classNames(
        styles.container,
        styles[direction]
      )}
    >
      {children}
    </div>
  )
}

export default Space
