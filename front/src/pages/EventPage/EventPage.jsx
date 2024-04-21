import './style.scss';
import eventImg from '../../static/img/event.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import Map from '../../components/Map/Map';
import CommentItem from '../../components/CommentItem/CommentItem';
import UserItem from '../../components/UserItem/UserItem';
import { CiBellOn } from "react-icons/ci";

const EventPage = () => {

  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [bottomMode, setBottomMode] = useState("comments");

  const getEventData = async () => {
    try {
      const { data } = await axios.get(`/events/getEventById/${id}`);
      console.log(data.result);
      setEvent(data.result);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <>
      {event && <div className='event'>
        <div className='event__top'>
          <img className='event__img' src={eventImg} alt='event'></img>
          <div className='event__col'>
            <div className='event__content'>
              <div className='event__title'>
                <h1>{event.title}</h1>
                <p>Organizator: <b>{event.author}</b></p>
              </div>
              <p className='event__theme'>Theme: <b>{event.theme}</b></p>
              <p className='event__format'>Format: <b>{event.format}</b></p>
              <p className='event__date'>Date: <b>{event.date}</b></p>
              <div className='event__bottom'>
                <h3>Description:</h3>
                <p className='event__description'>{event.description}</p>
              </div>
            </div>
            <div className='event__price_info'>
              <div className='event__actions'>
                <p className='event__price'>Price: <span>{event.price}</span></p>
                <div className='event__notification'>
                  <CiBellOn size={40}/>
                </div>
              </div>
              <button className='event__button'>Buy ticket</button>
            </div>
          </div>
        </div>
        <div className='event__map'>
          <h2>Place: {event.placeName}</h2>
          <Map lat={event.lat} lng={event.lng} position={{ lat: event.lat, lng: event.lng }} />
        </div>
        <div className='event__modes'>
          <div onClick={() => setBottomMode("comments")} className={`event__modes_button ${bottomMode === "comments" && "button__active"}`}>Comments</div>
          <div onClick={() => setBottomMode("users")} className={`event__modes_button ${bottomMode === "users" && "button__active"}`}>Users</div>
        </div>
        {bottomMode === "comments" && <div className='event__mode__items'>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>}
        {bottomMode === "users" && <div className='event__mode__items'>
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>}
      </div>}
    </>

  )
}

export default EventPage