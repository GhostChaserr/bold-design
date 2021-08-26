import { useEffect, useRef } from 'react'
import { FC } from 'react'
import { NotificationBodyTypes } from './NotificationBodyTypes'
import * as Styled from './NotificationStyles'

const NotificationBody: FC<NotificationBodyTypes> = ({
  notificationId,
  handleClose,
  notificationChildren,
  position,
}) => {

  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleCloseNotification = () => handleClose(notificationId)

  const handleAutoClose = () => {
    setTimeout(() => {
      if (buttonRef.current !== null) { buttonRef.current.click() }
    }, 3000)
  }
  useEffect(() => {
    handleAutoClose()
  }, [])

  return (
    <Styled.StyledContainer position={position}>
      <Styled.StyledCloseBtn ref={buttonRef} onClick={handleCloseNotification}> Close </Styled.StyledCloseBtn>
      {notificationChildren && (
        <>
          {notificationChildren}
        </>
      )}
      {!notificationChildren && (
        <p> Message </p>
      )}
    </Styled.StyledContainer>
  )
}


export default NotificationBody