import { useState, useContext } from "react"
import { GlobalCtx } from '../App'
import {useHistory} from 'react-router-dom'
import loading from '../components/Loading.gif'

const UploadForm = () => {

    const { gState } = useContext(GlobalCtx)
    const { url, token } = gState

    const [upload, setUpload] = useState(null)
    const [name, setName] = useState(null)
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [tempVid, setTempVid] = useState(null)
    let history = useHistory() 


    const [input, setInput] = useState(
        <div className='file file--upload'>
        <label htmlFor='input-file'>
        <i className="material-icons"></i>Upload
        </label>
        <input id='input-file' type='file' onChange={(e) => {uploadVideo(e)}}/>
        </div>
        )

      const uploadVideo = async (e) => {
        const file = e.target.files[0];
        setName(file.name)
        setFile(file)
        setTempVid(<video width="320" height="240" controls>
            <source src={window.URL.createObjectURL(file)} type="video/mp4" />
        </video>) //Shows a preview of the video temporarily before deploying
        setTitle(<input type="title" id="title" placeholder="Title of your video" maxLength="70" required/>)
        setUpload(<button type="submit" id="upload-btn">Post</button>)
        setInput(null)
      }

    const handleCreate = (e) => {
        e.preventDefault()
        setUpload(<img src={loading} alt="loading" id="load-gif"/>)
        setTitle(null)
        const title = document.getElementById("title").value
        const formData = new FormData();
        formData.append("video", file)
        fetch(url + "/video/", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Authorization": "bearer " + token
            }, body: formData
        }).then(response => response.json())
        .then(data => {
            fetch(url + "/video/" + data._id, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "bearer " + token
                }, body: JSON.stringify({title})
            })
        })
        .then(() => history.push("/"))
    }


    return (
        <form onSubmit={handleCreate}>
          {input}
          <br />
          {title}
          {name}
          <br />
          {tempVid}
          <br />
          {upload}
        </form>
    )
}

export default UploadForm