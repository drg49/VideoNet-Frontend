import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faUser } from '@fortawesome/free-solid-svg-icons'

const upload = <FontAwesomeIcon icon={faUpload} />
const profile = <FontAwesomeIcon icon={faUser} />

const Profile = () => {
    return (
        <div id="nav-profile">
            <Link to="/upload"><div id="upload" title="Upload">{upload}</div></Link>
            <Link to="/myprofile"><div id="profile" title="Your Profile">{profile}</div></Link>
        </div>
    )
}

export default Profile