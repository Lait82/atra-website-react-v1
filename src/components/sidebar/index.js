import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './sidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About Us
          </SidebarLink>
          <SidebarLink to="sponsors">
            Sponsors
          </SidebarLink>
          <SidebarLink to="calendar">
            Calendario
          </SidebarLink>
          <SidebarLink to="showcase">
            Vidriera
          </SidebarLink>
          <SidebarLink to="utility">
            Utilidad
          </SidebarLink>

          <SidebarLink to="signin">
            Sign In
          </SidebarLink>


        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to ="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
