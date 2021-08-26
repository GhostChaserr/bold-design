import { ReactNode } from 'react'

export type NotificationCategoryType =
  'success' |
  'error' |
  'pending' |
  'info'


export type NotificationPositionType =
  'topRight' |
  'topLeft' |
  'bottomLeft' |
  'bottomRight'


export type NotificationPayload = {
  notificationChildren?: ReactNode
  category?: NotificationCategoryType
  position?: NotificationPositionType
}


export type NotificationInputBody = {
  notificationId: string
  notificationChildren?: ReactNode
  category?: NotificationCategoryType
  position?: NotificationPositionType
}