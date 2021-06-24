import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faUser } from '@fortawesome/free-solid-svg-icons'

const upload = <FontAwesomeIcon icon={faUpload} />
const profile = <FontAwesomeIcon icon={faUser} />

const Profile = () => {
    return (
        <div id="nav-profile">
            <div id="upload" title="Upload">{upload}</div>
            <div id="profile" title="Your Profile">{profile}</div>
        </div>
    )
}

export default Profile