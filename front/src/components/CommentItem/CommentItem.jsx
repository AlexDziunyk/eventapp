import './style.scss';

const CommentItem = ({ author, description }) => {
  return (
    <div className='comment'>
      <h4>{author}</h4>
      <p>{description}</p>
    </div>
  )
}

export default CommentItem