// rsf

import {BackButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    return (
        <>
            <h1>404 Not Found!</h1>

            <BackButton
                onClick={
                    () => navigate(-1)
                }/>
        </>
    )
}

export default NotFound