import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext, useEffect } from "react"
import {GlobalCtx} from '../../App'

const search = <FontAwesomeIcon icon={faSearch} />

const SearchBar = () => {

    const { gState } = useContext(GlobalCtx)
    const { url, token } = gState

    const [results, setResults] = useState();
    const [title, setTitle] = useState(null)

    const getVideoTitles = () => {
        fetch(url + "/video/", {
            method: "get",
            headers: {
                "Authorization": "bearer " + token
            }
        }).then(response => response.json())
        .then(data => setTitle(data))
    }

    useEffect(() => {
        getVideoTitles()
    }, [])

    const handleChange = (event) => {
        let search = event.target.value.trim()
        if (search.length >= 1) {
            setResults(title.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            }).map((item, index) => {
                return (
                    <p>{item.title}</p>
                )
            })
            )
        } else {
            setResults(null)
        }
    }
    


    return (
        <section>
        <div id="search">
           <input type="text" placeholder="Search" onChange={handleChange}/>
           <button title="Search">{search}</button>
        </div>
        <div id="dropdown">
            {results}
        </div>
        </section>
    )
}

export default SearchBar