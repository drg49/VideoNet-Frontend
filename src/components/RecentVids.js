import { useState, useContext, useEffect } from "react"
import { GlobalCtx } from '../App'
import { Link } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail'; 


const RecentVids = () => {

    const { gState } = useContext(GlobalCtx)
    const {url} = gState

    const [thumbnails, setThumbnails] = useState(null)

    const getVids = () => {
        fetch(`${url}/video`, {
            method: "get",
        }).then(response => response.json())
        .then(data => {
            setThumbnails(data.map((item, index) => {
                return (
                    <Link to={`/view/${item._id}`} key={index} >
                    <div id="vid-card">
                    <VideoThumbnail id="video"
                        videoUrl={`https://drg-s3-3.s3.amazonaws.com/${item.video}`}
                    />
                    <p>{item.title}</p>
                    </div>
                    </Link>
                )
            }))    
        }) 
    }
    

    useEffect(() => {
        getVids()
    }, [])

    return (
        <section id="video-dash">
            {thumbnails}
        </section>
    )
}

export default RecentVids