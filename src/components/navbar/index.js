import React from 'react';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink} from './navbarElements';
import {FaBars} from 'react-icons/fa';
import atra_logo from '../../images/atra_logo.png';

const Navbar = ({toggle})  =>{
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImg src={atra_logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>

            <NavItem>
              <NavLinks to="aboutus" onClick={toggle}>About us</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="sponsors" onClick={toggle}>Sponsors</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="calendar" onClick={toggle}>Calendario</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="showcase" onClick={toggle}>Vidriera</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="utility" onClick={toggle}>Utilidad</NavLinks>
            </NavItem>

          </NavMenu>
          <NavBtn>
            <NavBtnLink to ="/signin" onClick={toggle}>Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
export default Navbar;