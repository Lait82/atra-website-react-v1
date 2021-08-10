// import {React} from 'react'
import styled from 'styled-components'




const blackOpacity = `rgba(0,0,0,0.6)`;
const lightOpacity = `rgba(0,0,0,0.3)`

const GlassEffect = styled.div`
	background: rgba(187, 187, 187, 0.5);
	backdrop-filter: blur(16px);
`



export const CalendarSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`
export const CalendarContainer = styled.div`
  background-color: slateblue;
  display: flex;
`
export const Months = styled.div`
  background-color: orangered;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-row: 100%;
  padding: 2rem;
`
export const CurrentMonth = styled(GlassEffect)`
  width: 90%;
  border-radius: 35px 35px 15px 35px;
  overflow: hidden;
  padding: .3rem ;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  
`
// export const MonthName = styled.div`
//   span{
//     margin-block-end: 0;
//     margin-block-start: 0;
//   }
//   font-size: xx-large;
// `
export const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: fit-content;
  justify-items: center;
  position: relative;
  font-weight: bold;
  padding-right: .5rem;
  padding-left: .5rem;
`

export const DayNamesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  &:after{
    content:'';
    position: absolute;
    top:10%;
    left: 0px;
    background-color: ${blackOpacity};
    width: 3px;
    border-radius: 10px;
    height: 70%;
  }
  &:first-child:after{
    content:none;
  }
`

export const MonthGrid = styled.div`
  /* background-color: ${lightOpacity};  */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 34rem;
  border-radius: 15px 15px 15px 30px;
  /* border-bottom: 4px solid black;
  border-right:4px solid black; */
  padding:.5rem;
`

export const Day = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: lightgray;
  // border-top: 4px solid black;
  // border-left: 4px solid black;
  border: 3px solid ${blackOpacity};
  position: relative;

  border-radius: 15px 35px 15px 35px;
`

export const NumberDay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: medium;
  font-weight: bold;
`

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5%;
  span{
    font-size: small;
    text-align: center;
    font-weight: bold;
  }
`

export const EventType = styled.img`
  width: 50% ;
  height: 50% ;
  padding-bottom: 5%;
`

export const NextMonths = styled.div` // This is the parent class of NextMonthContaine.divr
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  z-index:1;  ////////////////////////////  VER VIDEO SOBRE COMO FUNCIONA z index con Position
` 

export const NextMonthContainer = styled(GlassEffect)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  border-radius: 35px;
`

export const MonthName = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  span{
    font-size: 2rem;
    font-weight: bolder;
    margin: 1rem 0rem 1rem 0rem;
  }
`



export const NextMonth = styled.div` // this has to be equal to month grid    FFIIIXXXIIIITTT.div
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  overflow: hidden;
  padding: .5rem;
`

export const SmallCalendarDay = styled.div`
  color:${props => props.scdEvent ? 'red' : 'black'};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: bolder;
  opacity:0.8;
  /* color: ${blackOpacity}; */
  // border-top: solid 2px var(--black-opacity);
  // border-left: solid 2px var(--black-opacity);
`