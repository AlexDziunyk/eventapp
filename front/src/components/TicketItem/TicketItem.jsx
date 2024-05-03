import './style.scss';
import { Link } from 'react-router-dom';

const TicketItem = ({ title, text, price, id }) => {
  return (
    <div className='ticket'>
      <h1>{title}</h1>
      <p>{text}</p>
      <h2>{price}</h2>
      <Link className='ticket__link' to={`/events/${id}`}>
        <button>Learn more</button>
      </Link>
    </div>
  )
}

export default TicketItem