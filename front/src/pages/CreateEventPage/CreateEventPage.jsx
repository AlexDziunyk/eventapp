import PlacesAutocomplete from '../../components/PlacesAutocomplete/PlacesAutocomplete';
import './style.scss';
import { useRef, useState } from 'react';
import axios from '../../axios/axios';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("");
  const [theme, setTheme] = useState("");
  const [chosenPlace, setChosenPlace] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [fileImage, setFileImage] = useState(null);

  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleCreateEvent = async () => {
    try {

      const formData = new FormData();
      formData.append('image', fileImage);
      formData.append('title', title);
      formData.append('date', date);
      formData.append('lat', lat);
      formData.append('lng', lng);
      formData.append('placeName', chosenPlace);
      formData.append('description', description);
      formData.append('login', "login");
      formData.append('theme', theme);
      formData.append('format', format);

      const response = await axios.post('/events/createEvent', formData)


      if (response.status === 201) {
        navigate("/");
      } else {
        setError("Something went wrong");
      }

    } catch (error) {
      setError("Something went wrong");
    }
  }

  const handleInputChange = (evt) => {
    if (evt.target.files && evt.target.files.length > 0) {
      setImageUrl(URL.createObjectURL(evt.target.files[0]))
      setFileImage(evt.target.files[0]);
    }
  }

  const onChooseFile = () => {
    inputRef.current.click();
  }

  return (
    <div className='create-event'>
      <h1>Create new event</h1>

      <div className='top__container'>
        <div className='input__container'>
          <p className='input__label'>Name</p>
          <input onChange={(evt) => setTitle(evt.target.value)} placeholder='Enter name of your event'></input>
        </div>
        <div className='input__container'>
          <p className='input__label'>Date</p>
          <input onChange={(evt) => setDate(evt.target.value)} type='date' placeholder='Enter date of your event'></input>
        </div>
      </div>
      <div className='top__container'>
        <div className='input__container'>
          <p className='input__label'>Format</p>
          <input onChange={(evt) => setFormat(evt.target.value)} placeholder='Enter name of your event'></input>
        </div>
        <div className='input__container'>
          <p className='input__label'>Theme</p>
          <input onChange={(evt) => setTheme(evt.target.value)} placeholder='Enter date of your event'></input>
        </div>
      </div>
      <div className='input__container'>
        <p className='input__label'>Description</p>
        <textarea onChange={(evt) => setDescription(evt.target.value)} rows={5} placeholder='Enter description of your event'></textarea>
      </div>
      <div className='input__container'>
        <p className='input__label'>Place</p>
        <PlacesAutocomplete setChosenPlace={setChosenPlace} setLat={setLat} setLng={setLng} />
      </div>
      <div className='input__container'>
        <p className='input__label'>Image</p>
        <div className='input__area'>
          <input onChange={handleInputChange} className="input-file" type="file" accept="image/jpeg,image/png,image/gif" ref={inputRef}></input>
          {imageUrl.length === 0 && <div className='input__area_button'>
            <p className='input__text'>Drop'n'Drop file here</p>
            <button onClick={onChooseFile}>Or just CLICK ME</button>
          </div>}
          {imageUrl.length > 0 && <div className='input__area_button'>
            <img className='input__image' src={imageUrl} alt='image'></img>
            <p onClick={onChooseFile} className='input__text_button'>Choose another file</p>
          </div>}
        </div>
      </div>
      <p className='error__text'>{error}</p>
      <button onClick={handleCreateEvent} disabled={chosenPlace === "" || lat === "" || lng === "" || title === "" || description === "" || date === ""}>Create event</button>

    </div>
  )
}

export default CreateEventPage