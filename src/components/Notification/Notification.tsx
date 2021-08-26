import { useEffect, useState } from 'react'
import { EnumUserDefinedEvents } from 'utils/event.utils'
import * as Styled from './NotificationStyles'



import NotificationBody from './NotificationBody'
import { NotificationInputBody } from './NotificationTypes'

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationInputBody[]>([])

  useEffect(() => {
    document.addEventListener(EnumUserDefinedEvents.notification, (event: any) => {
      const notificationInputBody = event.detail as NotificationInputBody
      setNotifications([...notifications, notificationInputBody])
    })
  }, [notifications])


  const closeNotification = (targetNotificationId: string) => {
    setNotifications(notifications.filter((notificationInputBody: NotificationInputBody) => (
      notificationInputBody.notificationId !== targetNotificationId
    )))
  }

  if (notifications.length === 0) return null

  return (
    <Styled.StyledContainer className='notifications__container'>
      {notifications.map((notification: NotificationInputBody) => (
        <NotificationBody
          notificationId={notification.notificationId}
          handleClose={closeNotification}
          notificationChildren={notification.notificationChildren}
          key={notification.notificationId}
          category={notification.category}
          position={notification.position}
        />)
      )}
    </Styled.StyledContainer>
  )
}

export default Notification
