const SingleVideo = (props) => {

    return (
        <div id="single-vid-card">
            <video width="1200" id="single-vid" controls>
                <source src={`https://drg-s3-3.s3.amazonaws.com/${props.video}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>{props.title}</h2>
        </div>
    )
}

export default SingleVideo