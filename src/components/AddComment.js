import { useState, useContext } from "react"
import { GlobalCtx } from '../App'
import loading from './Loading.gif'

const AddComment = (props) => {
    
    const { gState } = useContext(GlobalCtx)
    const {url, token} = gState

    const startComment = () => {
        setAddBtn(null)
        setCancel(<button onClick={cancelComment} id="cancel-btn">Cancel</button>)
        setTextbox(<><textarea maxLength="200" id="body" required></textarea><br /></>)
        setSubmitBtn(<button type="submit">Comment</button>)
    }
    
    const cancelComment = () => {
        setAddBtn(<button onClick={startComment}>Comment</button>)
        setTextbox(null)
        setCancel(null)
        setSubmitBtn(null)
    }

    const [cancel, setCancel] = useState(null)
    const [addBtn, setAddBtn] = useState(<button onClick={startComment}>Comment</button>)
    const [textbox, setTextbox] = useState(null)
    const [submitBtn, setSubmitBtn] = useState(null)
    
    const addComment = (e) => {
        e.preventDefault()
        setTextbox(<img src={loading} id="load-gif" alt="loading"/>)
        setSubmitBtn(null)
        const body = document.getElementById("body").value
        fetch(url + "/video/addcomment/" + props.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + token
            },
            body: JSON.stringify({body})
        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <form id="comment-form" onSubmit={addComment}>
            {addBtn}
            {textbox}
            {cancel}
            {submitBtn}
        </form>
    )

}

export default AddComment