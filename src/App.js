import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./components/pages/About"
import AboutIconLink from "./components/AboutIconLink"
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { useState } from "react";
function App(){
    const [feedbackData,setFeedbackData] = useState(FeedbackData);
    const deleteComment = (id) => {
        if(window.confirm("Are you sure you want to delete this comment ?")){
            setFeedbackData(feedbackData.filter((item)=> item.id !== id));
        }
    }
    const addNewComments = (newComment) => {
        newComment.id = uuidv4();
        setFeedbackData([newComment, ...feedbackData]);
        console.log(newComment);
    }
    return (
        <Router>
            <Header text="FeedBack UI" />
            <Routes>
                <Route path="/" element={
                    <>
                        <FeedbackForm addNewComments={addNewComments} />
                        <FeedbackStats feedbackList ={feedbackData} />
                        <FeedbackList deleteComment={deleteComment} feedbackItemList={feedbackData} />
                        <AboutIconLink/>
                    </>
                }>
                    </Route>
                <Route path="/about" element={<>
                        <About/>
                    </>}>
                </Route>
            </Routes>
        </Router>
    )
}
export default App
