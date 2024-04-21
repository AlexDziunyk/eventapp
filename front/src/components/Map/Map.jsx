import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';


const Map = ({ lat, lng }) => {

  const position = {
    lat: lat,
    lng: lng
  }

  return (
    <div>
      <APIProvider apiKey={"AIzaSyCaHsRUO7Zrpc9UrisK-qkI0yyoLbt1lbk"}>
        <GoogleMap
          scrollwheel={false}
          style={{ width: '100%', height: '600px', borderRadius: '4px' }}
          mapId={"8404e0bab090a21f"}
          defaultCenter={position}
          defaultZoom={16}
          gestureHandling={'greedy'}
        >
          <AdvancedMarker position={position}></AdvancedMarker>
        </GoogleMap>
      </APIProvider>
    </div>
  );
}

export default Map;