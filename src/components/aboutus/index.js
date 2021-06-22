import React from 'react'
import Video from '../../videos/background_video.mp4'
import {AboutUsContainer, AboutUsBg, VideoBg} from './aboutusElements.js';

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
              {/*CONTENIDO LINEA 67*/}
            </SchoolsMapHeader>
            <Map>
              {/*div con ID MAP para el mapa Leaflet*/}
            </Map>
          </SchoolsMap>

          <SchoolInfoFrame>
            <SchoolInfoContainer>
              {/* {Data imagen blablabla} */}
              <InfoInstructor>
                {/* {info blablabla} */}
              </InfoInstructor>
              <SchoolInfoLocation>
                {/* {

                  Info blablabla
                 */}
              </SchoolInfoLocation>
            </SchoolInfoContainer>
          </SchoolInfoFrame>
        </SchoolsContainer>
      </Schools>
    </AboutUsContainer>
  )
}

export default AboutUsSection
