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
	/* top: 0; */
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items:center; */
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
	overflow: visible;
`;

export const NavImg = styled.img`
	
	border-radius: 999px;
	border: solid 10px rgba(0,0,0,0.6);
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
	/* margin-right: -22px; */
	height: 100%;
	padding-inline-start: 0px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	color: whitesmoke;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	/* background-color: black; */

	&.active {
		border-bottom: 3px solid #01bf71;
	}
	&:hover{
		transition:250ms;
		background-color: rgba(77,77,77, 0.2);
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
	font-size: 16x;
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
