import { Link } from 'react-router-dom';
import './style.scss';

const MainEventItem = ({ id, author, title, date, description, format, theme, price }) => {
  return (
    <div className='main-event-item__wrapper'>
      <h1>{title}</h1>
      <div className='main-event-item'>
        <div className='column-one'>
          <p className='main-event-item__description'>{description}</p>
        </div>
        <div className='column-two'>
          <p>Format: <b>{format}</b></p>
          <p>Theme: <b>{theme}</b></p>
        </div>
        <div className='column-three'>
          <Link to={`/events/${id}`} className='learn__more'>Learn more</Link>
          <p>Price: <b>{price}</b></p>
        </div>
      </div>
    </div>
  )
}

export default MainEventItem