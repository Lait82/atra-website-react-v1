import styled from 'styled-components'
import {FaWhatsapp, FaFacebookF, FaYoutube} from 'react-icons/fa';



export const AboutUsContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position:relative;
  z-index: 1;
	
	&:before{
		content: '';
		position:absolute;
		top: 0;
		left: 0;
		right:0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0,0,0,0.2) 0%,
				rgba(0,0,0,0.6) 100%
			),
			linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
		z-index:2;
	}
`


export const AboutUsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width:100%;
  height:100% ;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

`
export const Schools = styled.section`
	display: flex;
	justify-content: center;
	width: 80vw;
z-index: 3;
`

export const SchoolsContainer = styled.div`
	//ESTE VA TRANSPARENTE
  display:flex;
	flex-direction: row;
	justify-content: space-evenly;
  align-items: center;  
  width: 100%;
	max-width: 1366px;
  // top :0;
	margin-top: 50px;
`
export const SchoolsMap = styled.div`
  	//ESTE LLEVA EFECTO VIDRIO
	display: inline-block;
	border-radius: 20px;
	width: 100%;
	height:600px;
	overflow: hidden;
	
	// efecto vidrio
	background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(16px);
`
export const SchoolsMapHeader = styled.div`
	// ESTE TRANSPARENTE
	display: flex;
	width: 100%;
	height: 15%;
	justify-content: space-around;
	align-items: center;
	//background-color: olive;
	///////////// EL SELECT VA ACA ANIDADO
`
export const Map = styled.div`
	width: 100%;
	height: 85%;
	background-color: red;
	border-radius: 20px;
	overflow: hidden;
`

export const SchoolInfoFrame = styled.div`
	// ESTE LLEVA EFECTO VIDRIO
	display: flex;
	justify-content: center;
	align-content: center;
	background-color: red;
	width: 33%;
	height: min-content;
	border-radius: 20px;
	margin-left: 30px;

  //efecto vidrio
  background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(16px);
`
export const SchoolInfoContainer = styled.div`
  	// ESTE TRANSPARENTE
	display: flex;
  flex-direction: column;
  align-items: center;
	//background-color: red;
	width: 85%;
	overflow: visible;

`
export const InfoInstructor = styled.div`
	display: flex;
	justify-content: space-between;
`
export const SchoolInfoLocation = styled.div`
	ul{
		list-style-type: none;
	}
`
export const SocialMediaSede = styled.div`
	display: flex;
	width: 100%;
	justify-content: stretch;
	align-items: stretch;
	padding-bottom: 12px;
`
export const Wpp = styled(FaWhatsapp)`
	color: black;
	width: 33%;
	&:hover{
		transition: 400ms;
		transform: translateY(-3px);
		color: #4aed68;//#006fa7;
	}
`

export const Fb = styled(FaFacebookF)`
	color: black;
	width: 33%;
	&:hover{
		transition: 400ms;
		transform: translateY(-3px);
		color: #006fa7;
	}
`

export const Yt = styled(FaYoutube)`
	color: black;
	width: 33%;
	&:hover{
		transition: 400ms;
		transform: translateY(-3px);
		color:#ff0000 ;//#006fa7;
	}
`