import Nav from './Nav'
import AddComment from './AddComment'
import Comment from './Comment'

const SingleVideo = (props) => {

    const comments = props.comments.map((item, index) => {
        return (
            <Comment username={item.username} body={item.body}/>
        )
    })

    return (
        <>
        <Nav />
        <div id="single-vid-card">
            <video width="100%" controls>
                <source src={`https://drg-s3-3.s3.amazonaws.com/${props.video}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>{props.title}</h2>
            <h3>{props.username}</h3>
        </div>
        <AddComment id={props.id}/>
        {comments}
        </>
    )
}

export default SingleVideo