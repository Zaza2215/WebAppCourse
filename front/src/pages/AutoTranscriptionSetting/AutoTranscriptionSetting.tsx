import ReturnButton from "../../components/ReturnButton/ReturnButton.tsx"
import SectionTitle from "../../components/Settings/SectionTitle.tsx"
import Description from "../../components/Desctiption/Description.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"

type AutoTranscriptionSetting = {
    userAutoTranscription: boolean
    setUserAutoTranscription: (userAutoTranscription: boolean) => void
}

function AutoTranscriptionSetting({userAutoTranscription, setUserAutoTranscription}: AutoTranscriptionSetting) {
    return (
        <div className="auto-transcription">
            <SectionTitle title="auto transcription"/>

            <ToggleOption
                text={"Automatic Speech Recognition"}
                isChecked={userAutoTranscription}
                setIsChecked={setUserAutoTranscription}/>

            <Description
                text="Toggles audio transcription for voice messages and video notes, allowing to communicate with the bot using audio if desired."/>

            <ReturnButton/>

        </div>
    )
}

export default AutoTranscriptionSetting