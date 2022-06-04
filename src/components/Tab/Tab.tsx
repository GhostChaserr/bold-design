import { ReactNode, useState, FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

type TabComponent = {
  tab: string
  component: ReactNode
}

type TabProps = {
  content: TabComponent[]
}

const Tab: FC<TabProps> = (props) => {
  const [activeTab, setActiveTab] = useState<string>(props.content[0].tab)
  const tabs = props.content.map((content) => content.tab)
  const handleTabChange = (tab: string) => setActiveTab(tab)
  const renderContent = (activeTab: string) => {
    return props.content.find((tabComponent) => tabComponent.tab === activeTab)
      ?.component
  }

  const renderTabButton = (tab: string) => {
    const active: string = activeTab
    const isActive: boolean = active === tab
    const classes = [styles.tab_button].concat(
      isActive ? [styles.tab_button_active] : []
    )
    return (
      <div className={classNames(styles.tab_button_container)}>
        <button
          onClick={() => handleTabChange(tab)}
          className={classNames(classes)}
        >
          {tab}
        </button>
      </div>
    )
  }

  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.buttons_container)}>
        {tabs.map((tab) => renderTabButton(tab))}
      </div>
      <div className={classNames(styles.tab_button_content_container)}>
        {renderContent(activeTab)}
      </div>
    </div>
  )
}

export default Tab
