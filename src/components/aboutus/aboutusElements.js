import styled from 'styled-components'



export const AboutUsContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position:relative;
  z-index: 1;

  // Add  :before styles
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
	width: 65%;
	height:600px;
	overflow: hidden;
	
	// efecto vidrio
	background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(7px);
`
export const SchoolsMapHeader = styled.div`
	// ESTE TRANSPARENTE
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	//background-color: olive;
	///////////// EL SELECT VA ACA ANIDADO
`
export const Map = styled.div`
  height: 100%;
	width: 100%;
	border-radius: 20px;
	overflow: hidden;
`

export const SchoolInfoFrame = styled.div`
	// ESTE LLEVA EFECTO VIDRIO
	display: flex;
	justify-content: center;
	align-content: center;
	background-color: red;
	width: 27%;
	height: min-content;
	border-radius: 20px;

  //efecto vidrio
  background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(7px);
`
export const SchoolInfoContainer = styled.div`
  	// ESTE TRANSPARENTE
	display: flex;
  flex-direction: column;
  align-items: center;
	//background-color: red;
	width: 85%;
	overflow: hidden;
`
export const InfoInstructor = styled.div`
	display: flex;
	justify-content: space-between;
`
export const SchoolInfoLocation = styled.div`
/////////////// ACA VA EL ESTILO DEL UL
`