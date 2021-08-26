import { ReactNode } from 'react'
import { NotificationCategoryType, NotificationPositionType } from '../NotificationTypes'

export type NotificationBodyTypes = {
  handleClose: (notificationId: string) => void
  notificationId: string
  notificationChildren?: ReactNode
  category?: NotificationCategoryType
  position?: NotificationPositionType
}