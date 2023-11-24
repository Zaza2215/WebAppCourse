import {useNavigate} from "react-router-dom"
import {BackButton} from "@vkruglikov/react-telegram-web-app"

function ReturnButton() {
    const navigator = useNavigate()

    return (
        <>
            <BackButton onClick={() => navigator(-1)}/>
        </>
    )
}

export default ReturnButton