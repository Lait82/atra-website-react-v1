
import styled from 'styled-components';


const GlassEffect = styled.div`
	background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(16px);
`

export const NewsSection = styled.section`
  z-index: 1;
  width: 100%;
  display: flex;
  background-color: brown;
  justify-content: center;
`
export const NewsContainer = styled.div`
  z-index: 1;
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  `
export const NewsTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  border-radius: 15px;
  position: relative;
  align-items: center;
`


export const SingleNewContainer = styled(GlassEffect)`
  height: fit-content;
  display: flex;
  margin-bottom: 30px;
  border-radius: 30px 0px 0px 30px;
  position:relative;

  &:nth-child(even){
    border-radius: 0px 30px 30px 0px;
    flex-direction: row-reverse;
  }

  // Arregla la barrita separadora de los even childs
  &:nth-child(even):after{
    right: 38%;

  }
  // barrita separadora de todos
  &:after{
    content:'';
    position: absolute;
    background-image: linear-gradient(rgba(255,0,0,0.6), rgba(0,0,255,0.6));
    height: 90%;
    width: 8px;
    align-self: center;
    right: 62%;
    border-radius: 99px;
  }
  &:before{
    content:'';
    background: rgba(187, 187, 187, 0.5);
    backdrop-filter:blur(16px);
    z-index:-1;
    position: absolute;
    height: 100%;
    width: 12%;
    align-self: center;
    right: -12%;
  }&:nth-child(even):before{
    left:-12%;
  }
`



export const NewsBody = styled.div`
  display: flex;
  overflow: hidden;
  width: 60%;
  padding: 1rem;
  border-radius: 15px;
  &:hover{
    transition: ease-in-out 300ms;
  }
`
export const NewsParagraph = styled.p`
  line-height: 1.9;
  // unsetting p default styles
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`