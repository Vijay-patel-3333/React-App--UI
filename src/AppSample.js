function App(){
    const title = "MY App";
    const intro = "This is my FeedBack App !";
    let mathValue = 10;
    var tempValue = "abc";
    const comments = [
        {commentNo : "1", commentMessage : "Comment 1"},
        {commentNo : "2", commentMessage : "Comment 2"},
        {commentNo : "3", commentMessage : "Comment 3"},
    ];
    const showComments = true;
    const isLoading  = false;
    const commentBlog = (<div className="CommentsBlog">
    <h2>Comments : {comments.length}</h2>
    <ul>
        {comments.map((comment,index) => (
            <li key={comment.commentNo}>  {index+1} : {comment.commentMessage}  </li>

        ))}
    </ul>
</div>);
    if(isLoading) return (<h1>Loading...</h1>)
    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            <p><i>{intro}</i></p>
            <span>{mathValue}</span>
            <h6>{tempValue}</h6>
            {showComments && commentBlog}
            
        </>
    )
}

export default App