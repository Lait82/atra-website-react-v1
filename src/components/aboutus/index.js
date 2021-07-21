import React from 'react'
import Video from '../../videos/background_video.mp4'
import {AboutUsContainer,
  AboutUsBg,
  VideoBg,
  Schools,
  SchoolsContainer,
  SchoolsMap,
  SchoolsMapHeader,
  Map,
  SchoolInfoFrame,
  SchoolInfoContainer,
  InfoInstructor,
  SchoolInfoLocation,
  SocialMediaSede,
  Wpp} from './aboutusElements.js';
import {Mapa} from '../map';
import sede_logo from '../../images/atra_logo.png'
// import {FaWhatsapp, FaFacebookF, FaYoutube} from 'react-icons/fa';


function AboutUsSection() {
  return (
    <AboutUsContainer>

      <AboutUsBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutUsBg>
      <Schools>
        <SchoolsContainer>
          <SchoolsMap>
            <SchoolsMapHeader>
              {<><h1>Encontra tu Sede Mas Cercana!</h1>
            <select>
              <option> Elegi tu provincia</option>
              <option> daf</option>
              <option> daf</option>
              <option> daf</option>
            </select></>}
            </SchoolsMapHeader>
            <Map>
              <Mapa/>
            </Map>
          </SchoolsMap>

          <SchoolInfoFrame>
            <SchoolInfoContainer>
              {<>
                <h1>Sede ATRA Baroneeeee efes e</h1>
                <img src={sede_logo} style={{width:150, height:150}} alt="" />
              </>}
              <InfoInstructor>
                {<><p>Instructor:</p>
                  <p> Raul alberto Alvarenga xddd xdxddd  dan</p>
                </>}
              </InfoInstructor>
              <SchoolInfoLocation>
                {<>
                  <p>Direccion: avenida pirulo N°4324</p>
                  <ul>
                    <li>lun: 5432 5452</li>
                    <li>mar: 423 3232</li>
                    <li>mie: 32 323</li>
                    <li>jue: 23 412</li>
                    <li>vie: 23 13</li>
                  </ul>
                  <p>Telefono: 532 423452</p>
                </>}
                <SocialMediaSede>
                  <Wpp />
                  {/* <FaFacebookF />
                  <FaYoutube /> */}
                </SocialMediaSede>
              </SchoolInfoLocation>
            </SchoolInfoContainer>
          </SchoolInfoFrame>
        </SchoolsContainer>
      </Schools>
    </AboutUsContainer>
  )
}

export default AboutUsSection
