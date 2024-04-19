import MainEventItem from '../../components/MainEventItem/MainEventItem';
import './style.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* <img src='http://localhost:3001/uploads/image-1713567277650'></img> */}
      <MainEventItem />
      <MainEventItem />
      <MainEventItem />
      <MainEventItem />
      <MainEventItem />
      <MainEventItem />
      <MainEventItem />
    </div>
  )
}

export default HomePage