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
  Wpp,
  Fb,
  Yt} from './aboutusElements.js';
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
              {<><h1 className={"highlight"}>Encontra tu Sede Mas Cercana!</h1>
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
                <h1>Santa Teresita</h1>
                <h2 className={"highlight"}>Sede ATRA Barone</h2>
                <img src={sede_logo} style={{width:150, height:150}} alt="" />
              </>}
              <InfoInstructor>
                {<><p><b>Instructor:</b></p>
                  <p> Raul alberto Alvarenga xddd xdxddd  dan</p>
                </>}
              </InfoInstructor>
              <SchoolInfoLocation>
                {<>
                  <p><b>Direccion:</b> avenida pirulo N°4324</p>
                  <ul>
                    <li>lun: 5432 5452</li>
                    <li>mar: 423 3232</li>
                    <li>mie: 32 323</li>
                    <li>jue: 23 412</li>
                    <li>vie: 23 13</li>
                  </ul>
                  <p><b>Telefono:</b> 532 423452</p>
                </>}
                <SocialMediaSede>
                  <Wpp />
                  <Fb />
                  <Yt />
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
