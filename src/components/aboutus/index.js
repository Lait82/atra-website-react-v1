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
  SchoolInfoLocation} from './aboutusElements.js';
  import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



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
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer 
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
              </MapContainer>
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
