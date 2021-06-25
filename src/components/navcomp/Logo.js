import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const icon = <FontAwesomeIcon icon={faBolt} />

const Logo = () => {
    return (
        <Link to="/">
        <div>
            <h1 id="logo">VideoNet {icon}</h1>
        </div>
        </Link>
    )
}

export default Logo