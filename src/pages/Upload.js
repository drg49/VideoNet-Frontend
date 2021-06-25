import Logo from "../components/navcomp/Logo"
import UploadForm from "../components/UploadForm"

const Upload = () => {
    return (
        <div style={{marginTop: "11px"}}>
            <Logo />
            <h2 style={{marginTop: "42px"}}>Upload a Video</h2>
            <UploadForm />
        </div>
    )
}

export default Upload