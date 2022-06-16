import PropTypes from 'prop-types'

function FeedbackStat({feedbackList}) {
  let average = feedbackList.reduce((acc, cur)=>{
    return acc + cur.rating;
  },0) / feedbackList.length
  average = average.toFixed(1).replace(/[.,]0$/,"");
  return (
    <div className="feedback-stats">
        <h4>Reviews : {feedbackList.length}</h4>
        <h4>Average : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStat.propTypes = {
  feedbackList : PropTypes.array.isRequired,
}

export default FeedbackStat
