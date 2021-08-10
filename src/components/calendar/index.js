import {React} from 'react'
import {CalendarSection,
  CalendarContainer,
  Months,
  CurrentMonth,
  NextMonths,
  MonthName,
  DayNames,
  MonthGrid,
  Day,
  DayNamesContainer,
  NumberDay,
  EventContainer,
  EventType,
  NextMonth,
  NextMonthContainer,
  SmallCalendarDay
} from './calendarComponents' 

import Video from '../../videos/background_video.mp4'
import {
  AboutUsBg,
  VideoBg,
} from '../aboutus/aboutusElements.js';

function Calendar(){
  return(
  <CalendarSection>

  {/* <AboutUsBg>
    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
  </AboutUsBg> */}

    <CalendarContainer>
      <Months>
        <CurrentMonth>

          <MonthName>
            <span className="highlight">
              Agosto
            </span>
          </MonthName>
            <DayNames>
              <DayNamesContainer><span>Lun</span></DayNamesContainer>
              <DayNamesContainer><span>Mar</span></DayNamesContainer>
              <DayNamesContainer><span>Mié</span></DayNamesContainer>
              <DayNamesContainer><span>Jue</span></DayNamesContainer>
              <DayNamesContainer><span>Vie</span></DayNamesContainer>
              <DayNamesContainer><span>Sab</span></DayNamesContainer>
              <DayNamesContainer><span>Dom</span></DayNamesContainer>
            </DayNames>
            <MonthGrid>
              <Day> 
                <NumberDay>26</NumberDay>
                <EventContainer>
                  <EventType src="./logo192.png" />
                  <span>Villa Clelia</span>
                </EventContainer>
              </Day>  
              <Day><NumberDay>27</NumberDay></Day>
              <Day><NumberDay>28</NumberDay></Day>
              <Day><NumberDay>29</NumberDay></Day>
              <Day><NumberDay>30</NumberDay></Day>
              <Day> 
              <NumberDay>31</NumberDay>
                <EventContainer>
                  <EventType src="./logo192.png" />
                  <span>San Clemente</span>
                </EventContainer>
              </Day>  
              <Day><NumberDay>1</NumberDay></Day>
              <Day><NumberDay>2</NumberDay></Day>
              <Day><NumberDay>3</NumberDay></Day>
              <Day><NumberDay>4</NumberDay></Day>
              <Day><NumberDay>5</NumberDay></Day>
              <Day><NumberDay>6</NumberDay></Day>
              <Day><NumberDay>7</NumberDay></Day>
              <Day><NumberDay>8</NumberDay></Day>
              <Day><NumberDay>9</NumberDay></Day>
              <Day><NumberDay>10</NumberDay></Day>
              <Day> 
              <NumberDay>11</NumberDay>
                <EventContainer>
                  <EventType src="./logo192.png" />
                  <span>Mar de Ajó</span>
                </EventContainer>
              </Day>  
              <Day><NumberDay>12</NumberDay></Day>
              <Day><NumberDay>13</NumberDay></Day>
              <Day><NumberDay>14</NumberDay></Day>
              <Day><NumberDay>15</NumberDay></Day>
              <Day><NumberDay>16</NumberDay></Day>
              <Day><NumberDay>17</NumberDay></Day>
              <Day><NumberDay>18</NumberDay></Day>
              <Day><NumberDay>19</NumberDay></Day>
              <Day><NumberDay>20</NumberDay></Day>
              <Day> 
              <NumberDay>21</NumberDay>
                <EventContainer>
                  <EventType src="./logo192.png" />
                  <span>General Rodríguez</span>
                </EventContainer>
              </Day>  
              <Day><NumberDay>22</NumberDay></Day>
              <Day><NumberDay>23</NumberDay></Day>
              <Day><NumberDay>24</NumberDay></Day>
              <Day><NumberDay>25</NumberDay></Day>
              <Day> 
              <NumberDay>26</NumberDay>
                <EventContainer>
                  <EventType src="./logo192.png" />
                  <span>San Martin de los Andes</span>
                </EventContainer>
              </Day>  
              <Day><NumberDay>2</NumberDay></Day>
              <Day><NumberDay>3</NumberDay></Day>
              <Day><NumberDay>4</NumberDay></Day>
            </MonthGrid>

        </CurrentMonth>


        <NextMonths>
          <NextMonthContainer> {/*month 1*/}
            <MonthName>
              <span className="highlight">
              Septiembre
              </span>
            </MonthName>
            <DayNames>
              <DayNamesContainer><span>Lun</span></DayNamesContainer>
              <DayNamesContainer><span>Mar</span></DayNamesContainer>
              <DayNamesContainer><span>Mié</span></DayNamesContainer>
              <DayNamesContainer><span>Jue</span></DayNamesContainer>
              <DayNamesContainer><span>Vie</span></DayNamesContainer>
              <DayNamesContainer><span>Sab</span></DayNamesContainer>
              <DayNamesContainer><span>Dom</span></DayNamesContainer>
            </DayNames>
            <NextMonth>
                  <SmallCalendarDay>31</SmallCalendarDay>
                  <SmallCalendarDay>1</SmallCalendarDay>
                  <SmallCalendarDay>2</SmallCalendarDay>
                  <SmallCalendarDay>3</SmallCalendarDay>
                  <SmallCalendarDay>4</SmallCalendarDay>
                  <SmallCalendarDay>5</SmallCalendarDay>
                  <SmallCalendarDay>6</SmallCalendarDay>
                  <SmallCalendarDay>7</SmallCalendarDay>
                  <SmallCalendarDay scdEvent={true}>8</SmallCalendarDay>
                  <SmallCalendarDay>9</SmallCalendarDay>
                  <SmallCalendarDay>10</SmallCalendarDay>
                  <SmallCalendarDay>11</SmallCalendarDay>
                  <SmallCalendarDay scdEvent={true}>12</SmallCalendarDay>
                  <SmallCalendarDay>13</SmallCalendarDay>
                  <SmallCalendarDay>14</SmallCalendarDay>
                  <SmallCalendarDay>15</SmallCalendarDay>
                  <SmallCalendarDay>16</SmallCalendarDay>
                  <SmallCalendarDay>17</SmallCalendarDay>
                  <SmallCalendarDay>18</SmallCalendarDay>
                  <SmallCalendarDay scdEvent={true}>19</SmallCalendarDay>
                  <SmallCalendarDay>20</SmallCalendarDay>
                  <SmallCalendarDay>21</SmallCalendarDay>
                  <SmallCalendarDay>22</SmallCalendarDay>
                  <SmallCalendarDay scdEvent={true}>23</SmallCalendarDay>
                  <SmallCalendarDay>24</SmallCalendarDay>
                  <SmallCalendarDay>25</SmallCalendarDay>
                  <SmallCalendarDay>26</SmallCalendarDay>
                  <SmallCalendarDay>27</SmallCalendarDay>
                  <SmallCalendarDay>28</SmallCalendarDay>
                  <SmallCalendarDay>29</SmallCalendarDay>
                  <SmallCalendarDay>30</SmallCalendarDay>
                  <SmallCalendarDay>31</SmallCalendarDay>
                  <SmallCalendarDay scdEvent={true}>1</SmallCalendarDay>
                  <SmallCalendarDay>2</SmallCalendarDay>
                  <SmallCalendarDay>3</SmallCalendarDay>
                </NextMonth>
          </NextMonthContainer>
          {/*////////////////////////// MONTHS SEPARATOR /////////////////////////*/}
          <NextMonthContainer> {/*month 2*/}
            <MonthName>
              <span className="highlight">
              Octubre
              </span>
            </MonthName>
            <DayNames>
              <DayNamesContainer><span>Lun</span></DayNamesContainer>
              <DayNamesContainer><span>Mar</span></DayNamesContainer>
              <DayNamesContainer><span>Mié</span></DayNamesContainer>
              <DayNamesContainer><span>Jue</span></DayNamesContainer>
              <DayNamesContainer><span>Vie</span></DayNamesContainer>
              <DayNamesContainer><span>Sab</span></DayNamesContainer>
              <DayNamesContainer><span>Dom</span></DayNamesContainer>
            </DayNames>
            <NextMonth>
              <SmallCalendarDay>31</SmallCalendarDay>
              <SmallCalendarDay>1</SmallCalendarDay>
              <SmallCalendarDay>2</SmallCalendarDay>
              <SmallCalendarDay>3</SmallCalendarDay>
              <SmallCalendarDay>4</SmallCalendarDay>
              <SmallCalendarDay>5</SmallCalendarDay>
              <SmallCalendarDay>6</SmallCalendarDay>
              <SmallCalendarDay>7</SmallCalendarDay>
              <SmallCalendarDay scdEvent="true">8</SmallCalendarDay>
              <SmallCalendarDay>9</SmallCalendarDay>
              <SmallCalendarDay>10</SmallCalendarDay>
              <SmallCalendarDay>11</SmallCalendarDay>
              <SmallCalendarDay scdEvent={true}>12</SmallCalendarDay>
              <SmallCalendarDay>13</SmallCalendarDay>
              <SmallCalendarDay>14</SmallCalendarDay>
              <SmallCalendarDay>15</SmallCalendarDay>
              <SmallCalendarDay>16</SmallCalendarDay>
              <SmallCalendarDay>17</SmallCalendarDay>
              <SmallCalendarDay>18</SmallCalendarDay>
              <SmallCalendarDay scdEvent={true}>19</SmallCalendarDay>
              <SmallCalendarDay>20</SmallCalendarDay>
              <SmallCalendarDay>21</SmallCalendarDay>
              <SmallCalendarDay>22</SmallCalendarDay>
              <SmallCalendarDay scdEvent={true}>23</SmallCalendarDay>
              <SmallCalendarDay>24</SmallCalendarDay>
              <SmallCalendarDay>25</SmallCalendarDay>
              <SmallCalendarDay>26</SmallCalendarDay>
              <SmallCalendarDay>27</SmallCalendarDay>
              <SmallCalendarDay>28</SmallCalendarDay>
              <SmallCalendarDay>29</SmallCalendarDay>
              <SmallCalendarDay>30</SmallCalendarDay>
              <SmallCalendarDay>31</SmallCalendarDay>
              <SmallCalendarDay scdEvent={true}>1</SmallCalendarDay>
              <SmallCalendarDay>2</SmallCalendarDay>
              <SmallCalendarDay>3</SmallCalendarDay>
            </NextMonth>
          </NextMonthContainer>

        </NextMonths>
      
      
      </Months>
    </CalendarContainer>
  </CalendarSection>
  )
}


export default Calendar