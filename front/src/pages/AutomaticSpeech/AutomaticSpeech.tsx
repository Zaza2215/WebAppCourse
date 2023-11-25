import ReturnButton from "../../components/ReturnButton/ReturnButton.tsx"
import SectionTitle from "../../components/Settings/SectionTitle.tsx"
import Description from "../../components/Desctiption/Description.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"


type AutomaticSpeech = {
    userAutomaticSpeech: boolean
    setUserAutomaticSpeech: (userAutoTranscription: boolean) => void
}

function AutomaticSpeech({userAutomaticSpeech, setUserAutomaticSpeech}: AutomaticSpeech) {
    return (
        <div className="auto-speech">
            <SectionTitle title="automatic speech"/>

            <ToggleOption
                text={"Automatic Speech Recognition"}
                isChecked={userAutomaticSpeech}
                setIsChecked={setUserAutomaticSpeech}/>

            <Description text="">
                <p className="destructive">This feature is not working yet.</p>
                <p>This feature will force the bot to send you voice messages as the response.</p>
            </Description>

            <ReturnButton/>

        </div>
    )
}

export default AutomaticSpeech