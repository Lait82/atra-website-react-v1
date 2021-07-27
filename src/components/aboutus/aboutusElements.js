import styled from 'styled-components'
import {FaWhatsapp, FaFacebookF, FaYoutube} from 'react-icons/fa';

// yellow atra: #006fa7
// blue atra: 

const GlassEffect = styled.div`
	background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(16px);
`

export const SeparatorBox = styled.div`
	width:100%;
	height: 50px;
`






export const AboutUsContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: fit-content;
  position:relative;
  z-index: 1;
	// Este solia tener el before del filtro oscuro
`


export const AboutUsBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

export const VideoBg = styled.video`
  width:100%;
  height:100% ;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

`
export const AboutUsContent = styled.div`
	/* background-color: rgba(255,0,0, 0.5); */
	display: flex;
	width:100%;
	flex-direction: column;
	align-items:center;
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
	margin-top: 50px;
`
export const SchoolsMap = styled(GlassEffect)`
  	//ESTE LLEVA EFECTO VIDRIO
	display: inline-block;
	border-radius: 20px;
	width: 100%;
	height:600px;
	overflow: hidden;

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
	border-radius: 20px;
	overflow: hidden;
`

export const SchoolInfoFrame = styled(GlassEffect)`
	// ESTE LLEVA EFECTO VIDRIO
	display: flex;
	justify-content: center;
	align-content: center;
	width: 33%;
	height: min-content;
	border-radius: 20px;
	margin-left: 30px;

`
export const SchoolInfoContainer = styled.div`
  	// ESTE TRANSPARENTE
	display: flex;
  flex-direction: column;
  align-items: center;
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
		justify-content: initial;
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
export const AboutUsHistoryContainer = styled(GlassEffect)`
	display: flex;
	position: relative;
	width:85%;
	flex-direction: column;
	border-radius: 20px;
	z-index: 3;
	p{
		line-height: 2em;
		margin-left: 50px;
		margin-right: 50px;
	}
	h1{
		margin-left: 30px;
		width:fit-content;
	}
	&::before{
		content: '';
    position: absolute;
		width: 10px;
    top: 0;
		bottom: 0;
		transform: translateX(-30px);
		border-radius: 12px;
		background-image: linear-gradient(red, blue);
		opacity: 0.4;
	}
`