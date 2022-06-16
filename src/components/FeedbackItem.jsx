import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes}  from 'react-icons/fa'

function FeedbackItem({feedbackInfo, deleteComment}) {
    // const [rating, setRatings] = useState(7);
    // const [text, setText] = useState("This is an example of feedback message.");
  return (
    <Card reverse={true}>
      <div className='num-display'>{feedbackInfo.rating}</div>
      <button onClick={()=>deleteComment(feedbackInfo.id)} className="close">
        <FaTimes color='yellow'/>
      </button>
      <div className='text-display'>{feedbackInfo.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    feedbackInfo : PropTypes.object.isRequired,
}
export default FeedbackItem
