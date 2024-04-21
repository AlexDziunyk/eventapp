import GoogleMapReact from 'google-map-react';
import marker from '../../static/img/marker.png';

const Marker = () => <div>
  <img width={20} height={20} src={marker} alt='marker'></img>
</div>;

const Map = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 16
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCaHsRUO7Zrpc9UrisK-qkI0yyoLbt1lbk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={10.99835602}
          lng={77.01502627}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map