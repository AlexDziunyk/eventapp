import './style.scss';

const UserItem = ({ login }) => {
  return (
    <div className='user-item'>
      <h4>{login}</h4>
    </div>
  )
}

export default UserItem