import Logout from "../components/Logout"
import Nav from "../components/Nav"

const MyProfile = () => {

    const currentUser = localStorage.getItem("user")

    return (
        <>
            <Nav />
            <h2>{currentUser}</h2>
            <Logout />
        </>
    )
}

export default MyProfile