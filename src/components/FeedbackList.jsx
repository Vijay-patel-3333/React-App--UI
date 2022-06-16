import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedbackItemList, deleteComment}) {
    if (!feedbackItemList || feedbackItemList.length === 0){
        return <div>
            No Feedback Available.
        </div>;
    }
  return (
    <AnimatePresence>
      <div className='feedback-list'>
          {feedbackItemList.map((item,idx)=>(
            <motion.div key={idx} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <FeedbackItem deleteComment={deleteComment} key={idx} feedbackInfo = {item}/>
            </motion.div>
          ))}
      </div>
    </AnimatePresence>
  )

  // return (
  //   <div className='feedback-list'>
  //      {feedbackItemList.map((item,idx)=>(
  //           <FeedbackItem deleteComment={deleteComment} key={idx} feedbackInfo = {item}/>
  //      ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
  feedbackItemList : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.string.isRequired,
      text : PropTypes.string.isRequired,
      rating : PropTypes.number.isRequired,
    })
  ),
}
export default FeedbackList
