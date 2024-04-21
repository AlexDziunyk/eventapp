import MainEventItem from '../../components/MainEventItem/MainEventItem';
import './style.scss';
import axios from '../../axios/axios';
import { useEffect, useState } from 'react';
import Map from '../../components/Map/Map';

const HomePage = () => {

  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  const getAllEvents = async () => {
    try {
      const { data } = await axios.get("/events/all");
      setEvents(data.result);
    } catch (error) {
      setError(data.message)
    }
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className='home-page'>
      {/* <img src='http://localhost:3001/uploads/image-1713567277650'></img> */}
      <p className='error__text'>{error}</p>
      {events.length === 0 && <p>No events yet</p>}
      {events.length > 0 && events.map(({ _id, author, title, date, description, format, theme, price }) => {
        return <MainEventItem key={_id} id={_id} price={price} title={title} author={author} date={date} description={description} format={format} theme={theme} />
      })}

    </div>
  )
}

export default HomePage