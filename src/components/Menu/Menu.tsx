import React, { FC } from 'react'
import * as Styled from './MenuStyles'

import MenuLink from './MenuLink'
import { useState } from 'react'


const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleToggleMenu = (): void => setMenuOpen(!menuOpen)
  return (
    <Styled.StyledContainer>
      <Styled.StyledTrigger onClick={handleToggleMenu}>
        Open
      </Styled.StyledTrigger>
      {menuOpen && (
        <Styled.StyledMenuContainer>
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
          <MenuLink />
        </Styled.StyledMenuContainer>
      )}
    </Styled.StyledContainer>
  )
}

export default Menu