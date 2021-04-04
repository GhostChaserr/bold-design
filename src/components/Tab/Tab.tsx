import React, { useState } from 'react'

import { TabProps } from './TabTypes'
import { 
  StyledTabButtonContainer,
  StyledTabButton,
  StyledTabButtonsWrapper,
  StyledTabContentWrapper,
  StyledTabWrapper,
} from './TabStyles';


const Tab = ({ 
  tabComponents,
  center
}: TabProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabComponents[0].tab);
  const tabs = tabComponents.map(tabComponent => tabComponent.tab);

  const handleTabChange = (tab: string) => setActiveTab(tab)
  const renderTabButton = (tab: string) => {

    // Get current tab.
    const active: string = activeTab;
    const isActive: boolean = active === tab;

    return (
      <StyledTabButtonContainer key={tab}>
        <StyledTabButton
          className='bold-design__tab__button'
          isActive={isActive}
          onClick={() => handleTabChange(tab)}>
          {tab}
        </StyledTabButton>
      </StyledTabButtonContainer >
    );
  };

  const renderContent = (activeTab: string) => {
    return tabComponents.find(tabComponent => tabComponent.tab === activeTab)?.component
  }

  return (
    <StyledTabWrapper>
      <StyledTabButtonsWrapper center={center}>
        {tabs.map(tab => renderTabButton(tab))}
      </StyledTabButtonsWrapper>
      <StyledTabContentWrapper>
        {renderContent(activeTab)}
      </StyledTabContentWrapper>
    </StyledTabWrapper>
  )

}

Tab.defaultProps = {
  center: false,
  tabComponents: [
    {
      tab: 'products',
      component: <p> Products component </p>
    },
    {
      tab: 'accessories',
      component: <p> accessories component </p>
    },
  ]
  
}

export default Tab


