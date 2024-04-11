import './style.scss';

const MainEventItem = () => {
  return (
    <div className='main-event-item__wrapper'>
      <h1>Name</h1>
      <div className='main-event-item'>
        <div className='column-one'>
          <p className='main-event-item__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatem facere dignissimos reiciendis quo eligendi saepe. Nesciunt ea esse, quisquam necessitatibus aut recusandae obcaecati, distinctio labore tenetur omnis blanditiis ipsa!</p>
        </div>
        <div className='column-two'>
          <p>Format: <b>Conference</b></p>
          <p>Theme: <b>Business</b></p>
        </div>
        <div className='column-three'>
          <p className='learn__more'>Learn more</p>
          <p>Price: <b>25$</b></p>
        </div>
      </div>
    </div>
  )
}

export default MainEventItem