import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import './style.scss';

import { useState } from "react";

const PlacesAutocomplete = ({setChosenPlace, setLat, setLng}) => {

  // const [chosenPlace, setChosenPlace] = useState("");
  // const [lat, setLat] = useState("");
  // const [lng, setLng] = useState("");


  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      language: "en"
    },
    debounce: 300,
  });



  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
      () => {
        setValue(description, false);
        clearSuggestions();

        setChosenPlace(description);

        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);

          console.log("📍 Coordinates: ", { lat, lng });

          setLat(lat);
          setLng(lng)
        });
      };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div className="places__item" key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </div>
      );
    });

  return (
    <div className="places" ref={ref}>
      <input
        className="places__input"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Choose the place"
      />

      {status === "OK" && <div className="places__list">{renderSuggestions()}</div>}
    </div>
  );
};

export default PlacesAutocomplete;