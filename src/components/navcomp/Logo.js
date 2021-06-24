import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faBolt} />

const Logo = () => {
    return (
        <div>
            <h1>VideoNet {icon}</h1>
        </div>
    )
}

export default Logo