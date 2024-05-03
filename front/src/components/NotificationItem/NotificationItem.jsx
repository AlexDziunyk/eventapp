import './style.scss';

const NotificationItem = ({ title, text }) => {
  return (
    <div className='notification'>
      <h1>{title}</h1>
      <p>{text}</p>
      {/* <div className='notification__button'>Go to event</div> */}
    </div>
  )
}

export default NotificationItem