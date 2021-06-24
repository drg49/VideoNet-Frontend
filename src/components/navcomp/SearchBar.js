import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const search = <FontAwesomeIcon icon={faSearch} />

const SearchBar = () => {
    return (
        <div id="search">
           <input type="text" placeholder="Search"/>
           <button title="Search">{search}</button>
        </div>
    )
}

export default SearchBar