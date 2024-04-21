import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import marker from '../../static/img/marker.png';

const Marker = () => <div>
  <img width={20} height={20} src={marker} alt='marker'></img>
</div>;

const Map = () => {

  const position = {
    lat: 10.99835602,
    lng: 77.01502627
  }

  return (
    <div >
      <APIProvider apiKey={"AIzaSyCaHsRUO7Zrpc9UrisK-qkI0yyoLbt1lbk"}>
        <GoogleMap
          style={{ width: '100%', height: '600px' }}
          mapId={"8404e0bab090a21f"}
          defaultCenter={position}
          defaultZoom={16}
          gestureHandling={'greedy'}
          disableDefaultUI={true}>
          <AdvancedMarker position={position}></AdvancedMarker>
        </GoogleMap>
      </APIProvider>
    </div>
  );
}

export default Map;