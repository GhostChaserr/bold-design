import { FC } from 'react'
import { ModalProps } from './ModalTypes'

import Centered from './Centered'
import TopPositioned from './TopPositioned'

const Modal: FC<ModalProps> = ({
  open,
  preset,
  children,
  handleClose,
  height,
}) => {
  return (
    <>
      {preset === 'center' && <Centered handleClose={handleClose} open={open} children={children} />}
      {preset === 'top' && (
        <TopPositioned
          height={height}
          handleClose={handleClose}
          open={open}
          children={children}
          bottomPositioned={false}
        />
      )}
      {preset === 'bottom' && (
        <TopPositioned
          height={height}
          handleClose={handleClose}
          open={open}
          children={children}
          bottomPositioned={true}
        />
      )}
    </>
  )
}

Modal.defaultProps = {
  preset: 'center'
}

export default Modal