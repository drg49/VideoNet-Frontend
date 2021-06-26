import { useState, useContext, useEffect } from "react"
import { GlobalCtx } from '../App'
import SingleVideo from "../components/SingleVideo";

const ViewVideo = (props) => {

    const video = props.match.params.id

    const { gState } = useContext(GlobalCtx)
    const {url} = gState

    const [singleVideo, setSingleVideo] = useState(null)

    const getVideo = () => {
        fetch(`${url}/video/${video}`, {
            method: "get",
        }).then(response => response.json())
        .then(data => {
            setSingleVideo(
                <SingleVideo
                    title={data[0].title}
                    video={data[0].video}
                    username={data[0].username}
                    id={data[0]._id}
                    comments={data[0].comment.reverse()}
                />
            )
        }) 
    }

    useEffect(() => {
        getVideo()
    }, [])


    return (
        <div>
            {singleVideo} 
        </div>
    )
}   

export default ViewVideo