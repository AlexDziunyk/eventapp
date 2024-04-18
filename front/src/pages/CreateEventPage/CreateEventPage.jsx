import './style.scss';

const CreateEventPage = () => {
  return (
    <div className='create-event'>
      <h1>Create new event</h1>

      <div className='top__container'>
        <div className='input__container'>
          <p className='input__label'>Name</p>
          <input placeholder='Enter name of your event'></input>
        </div>
        <div className='input__container'>
          <p className='input__label'>Date</p>
          <input placeholder='Enter date of your event'></input>
        </div>
      </div>
      <div className='input__container'>
        <p className='input__label'>Description</p>
        <textarea rows={5} placeholder='Enter description of your event'></textarea>
      </div>
      <button>Create event</button>

    </div>
  )
}

export default CreateEventPage