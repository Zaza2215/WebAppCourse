import "./Settings.scss"
import SettingSection from "../../components/Settings/SettingSection.tsx"
import {ROUTERS} from "../../constants/routes.ts"
import {modelProps} from "../../App.tsx"
import {Language} from "../../constants/languages.ts"

export type settingsProps = {
    userModel: modelProps
    userLanguage: Language
    userAutoTranscription: boolean
}


function Settings({userModel, userLanguage, userAutoTranscription}: settingsProps) {

    const modelData = [
        {
            title: "language model",
            icon: "./src/assets/icons/language-model.png",
            value: userModel.verbose_name,
            to: ROUTERS.LANGUAGE_MODEL,
            ready: true
        },
        {
            title: "custome instructions",
            icon: "./src/assets/icons/custom-instructions.png",
            to: ROUTERS.CUSTOM_INSTRUCTIONS,
            ready: false
        },
        {
            title: "context window limit",
            icon: "./src/assets/icons/window-limit.png",
            value: 1000,
            to: ROUTERS.CONTEXT_WINDOW_LIMIT,
            ready: false
        }
    ]

    const additionalData = [
        {
            title: "automatic speech",
            icon: "./src/assets/icons/auto-speech.png",
            value: "Off",
            to: ROUTERS.AUTO_SPEECH,
            ready: false

        },
        {
            title: "auto transcription",
            icon: "./src/assets/icons/auto-transcription.png",
            value: userAutoTranscription ? "On" : "Off",
            to: ROUTERS.AUTO_TRANSCRIPTION,
            ready: true
        },
        {
            title: "single message",
            icon: "./src/assets/icons/single-message.png",
            value: "Off",
            to: ROUTERS.SINGLE_MESSAGE,
            ready: false
        }
    ]

    const interfaceData = [
        {
            title: "language",
            icon: "./src/assets/icons/language-interface.png",
            value: userLanguage.name,
            to: ROUTERS.LANGUAGE,
            ready: true
        }
    ]

    return (
        <>
            <div className="settings-menu">

                <h1 className="settings-menu__title">Settings</h1>

                <SettingSection
                    title="model section"
                    data={modelData}
                />
                <SettingSection
                    title="additional"
                    data={additionalData}
                />
                <SettingSection
                    title="interface"
                    data={interfaceData}
                />

            </div>

        </>
    )
}

export default Settings