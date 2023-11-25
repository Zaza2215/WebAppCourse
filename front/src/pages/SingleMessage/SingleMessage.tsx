import SectionTitle from "../../components/Settings/SectionTitle.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"
import Description from "../../components/Desctiption/Description.tsx"
import ReturnButton from "../../components/ReturnButton/ReturnButton.tsx"

type SingleMessageProps = {
    userSingleMessage: boolean
    setUserSingleMessage: (userSingleMessageProps: boolean) => void
}

function SingleMessage({userSingleMessage, setUserSingleMessage}: SingleMessageProps) {
    return (
        <div className="single-message">
            <SectionTitle title="single message"/>

            <ToggleOption
                text={"single message mode"}
                isChecked={userSingleMessage}
                setIsChecked={setUserSingleMessage}/>

            <Description
                text={"Single request mode is a way for the bot to answer only one question at a time, instead of havind long chats"}>
                <ul>
                    <li>It makes everything quicker, but you need to input all the approriate information about the
                        question at once.
                    </li>
                    <li>In this mode: bot does not remember the previous messages, and the conversations are not
                        saved.
                    </li>
                </ul>
            </Description>

            <ReturnButton/>

        </div>
    )
}

export default SingleMessage