import {useState} from 'react'
import Card from './shared/Card';
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({addNewComments}) {
    const [feedbacktext, setText] = useState("");
    const [btnDisable, setDisableStatus] = useState(true);
    const [message, showMessage] = useState("");
    const feedbackChange = (e) => {
        setText(e.target.value);
        if(feedbacktext === ''){
            setDisableStatus(true);
            showMessage(null);
        }else if (feedbacktext !== '' && feedbacktext.trim().length < 10){
            setDisableStatus(true);
            showMessage("Text should be atleast 10 charactors long.");
        }else {
            setDisableStatus(false);
            showMessage(null);
        }
    }
    const [selectedRating, setSelected] = useState(10);
    const handleChangeOnRatingSelect = (e) => {
        setSelected(+e.currentTarget.value);
    }
    const submitNewComment = (e) => {
        e.preventDefault();
        const newComment = {
            rating : selectedRating,
            text : feedbacktext
        }
        // console.log(newComment);
        addNewComments(newComment);
        setText("");
        setDisableStatus(true);
    }
  return (
    <Card reverse={true}>
        <form onSubmit={submitNewComment}>
            <h2>How would you rate my Project ?</h2>
            <RatingSelect selectedRating={selectedRating} handleChangeOnRatingSelect={handleChangeOnRatingSelect} />
            <div className="input-group reverse">
                <input style={{height : 40, padding:10}} placeholder='Write your review here' type="text" onChange={feedbackChange} value={feedbacktext} />
                <Button style={{padding:10}} type="submit" version="secondary" isDisabled={btnDisable}>Submit</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
