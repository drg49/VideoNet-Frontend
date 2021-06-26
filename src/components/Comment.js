const Comment = ({username, body}) => {
    return (
        <div id="comment-box">
            <h4>{username}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Comment