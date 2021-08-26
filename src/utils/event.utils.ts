import { NotificationPayload } from 'components/Notification/NotificationTypes'
import { getRandomId } from './shared.utils'

export const EnumUserDefinedEvents = {
  notification: 'Notification'
}


export const notification = (payload: NotificationPayload): void => {
  const event = document.createEvent('CustomEvent')
  event.initCustomEvent(EnumUserDefinedEvents.notification, false, false, {
    notificationId: getRandomId(),
    notificationChildren: payload.notificationChildren,
    category: payload.category,
    position: payload.position,
  })
  document.dispatchEvent(event)
}