import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
	font-family: 'Baloo Chettan 2', cursive;
	background: rgba(0,0,0,0.6);
	height: 120px; 
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
 // This property fixes the little gap between the lower border of the image and the navbar.
	///////////////////////////////////////////////////////////////////////AFINAR
		// ratios: 21px 67% || 0px  81%

	transform:translateY(21px);
`;

export const LogoContainer = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	border-radius: 90px;
	// The code below is to shade the lower border of the logo image.
	padding: 10px;
	background-image: linear-gradient(transparent 67%, rgb(0, 0, 0, 0.6) 50%, rgb(0, 0, 0, 0.6)); 
	`;

export const NavImg = styled.img`
	width: 8rem;
	height: 8rem;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: white;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-self:center;
	list-style: none;
	text-align: center;
	height: 100%;
	// Weird pre-defined styles that I had to reset to default.
	margin-block-start: 0px;
	margin-block-end: 0px;
	padding-inline-start:0px ;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
		// Empty and here for possible mobile stylings.
`;

export const NavLinks = styled(LinkScroll)`
	color: whitesmoke;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
	&:hover{
		transition: all 0.25s ease-in-out;;
		color: #f2b000;
		transform: translateY(4px);
		;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkRouter)`
	border-radius: 50px;
	background: #f2b000;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 18px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #006fa7;
		color: white;
	}
`;
