import {React} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export function Mapa(){
  return(
    <MapContainer center={[	-34.603684, -58.381559]} zoom={16} fadeAnimation={true} style={{height:'100%'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        place
      />
      <Marker position={[	-34.603684, -58.381559]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
