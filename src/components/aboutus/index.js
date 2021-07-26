import React from 'react'
import Video from '../../videos/background_video.mp4'
import {AboutUsContainer,
  AboutUsBg,
  VideoBg,
  AboutUsContent,
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
  Yt,
  SeparatorBox,
  AboutUsHistoryContainer} from './aboutusElements.js';
import {Mapa} from '../map';
import sede_logo from '../../images/atra_logo.png'
// import {FaWhatsapp, FaFacebookF, FaYoutube} from 'react-icons/fa';


function AboutUsSection() {
  return (
    <AboutUsContainer>

      <AboutUsBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutUsBg>
      <AboutUsContent>
        <Schools>
          <SchoolsContainer>
            <SchoolsMap>
              <SchoolsMapHeader>
                {<><h1 className={"highlight"}>Encontra tu Sede Mas Cercana!</h1>
              <select>
                <option> Elegi tu provincia</option>
                <option> Buenos Aires</option>
                <option> Santa Fe</option>
                <option> Entre Rios</option>
                <option> Cordoba</option>
                <option> Mendoza</option>
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
                  {<><p><b>Instructor: </b></p>
                    <p> Sabumnim Adrian Barone <b>VI Dan</b></p>
                  </>}
                </InfoInstructor>
                <SchoolInfoLocation>
                  {<>
                    <p style={{display: 'flex', justifyContent: 'flex-end'}}><b>Direccion:</b> Calle 41 N°1243 e/11 y 12</p>
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
        <SeparatorBox/>
        <AboutUsHistoryContainer>
          {<>
            <h1 className={"highlight"}> Nuestra Historia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
               et dignissim metus. Mauris id facilisis ante. Morbi quam massa, lobortis
                nec ipsum vitae, porta viverra orci. Mauris urna nibh, tincidunt eu congue
                 et, mattis ac tellus. Vestibulum malesuada, odio sed laoreet eleifend, tellus
                  felis pellentesque arcu, eget mattis augue dui scelerisque libero. In ac arcu
                   sit amet felis aliquam fermentum. Suspendisse suscipit, velit et faucibus lacinia,
                    odio metus lobortis nibh, ut condimentum odio mauris at mauris. Sed molestie varius
                     arcu ac fermentum. Etiam posuere pulvinar orci eu vehicula. Quisque cursus ligula
                      vitae aliquet varius. Fusce a rutrum nisi. Aliquam sodales lacinia eleifend. Duis dignissim, turpis at aliquam rhoncus, neque diam aliquam justo, et elementum lorem sem non tellus. Pellentesque mollis nisl eget enim faucibus bibendum. Curabitur laoreet non libero nec imperdiet. Quisque pretium efficitur euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </>}
        </AboutUsHistoryContainer>
      </AboutUsContent>
    </AboutUsContainer>
  )
}

export default AboutUsSection
