import { ReactNode } from "react"



export type TabComponent = {
  tab: string
  component: ReactNode
}


export type TabProps = {
  tabComponents: TabComponent[]
  center?: boolean
}

