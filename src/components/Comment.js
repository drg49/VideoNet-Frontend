import { useState, useContext, useEffect } from "react"
import { GlobalCtx } from '../App'


const Comment = ({username, body, id, commentid}) => {
    
    const { gState } = useContext(GlobalCtx)
    const {url, token} = gState
    
    const currentUser = localStorage.getItem("user")

    const handleDelete = (id, commentid) => {
        fetch(`${url}/video/removecomment/${id}/${commentid}`, {
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
        <div id="comment-box">
            <div>
            <h4>{username}</h4>
            <p>{body}</p>
            </div>
            {currentUser === username ? <button onClick={() => handleDelete(id, commentid)}>Delete</button> : null}
        </div>
    )
}

export default Comment