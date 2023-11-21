import "./Settings.scss"
import SettingSection from "../../components/Settings/SettingSection.tsx"
import {ROUTERS} from "../../constants/routes.ts"

function Settings() {

    const modelData = [
        {
            title: "language model",
            icon: "./src/assets/icons/language-model.png",
            value: "GPT-4",
            to: ROUTERS.LANGUAGE_MODEL
        },
        {
            title: "custome instructions",
            icon: "./src/assets/icons/custom-instructions.png",
            to: ROUTERS.CUSTOM_INSTRUCTIONS
        },
        {
            title: "context window limit",
            icon: "./src/assets/icons/window-limit.png",
            value: 1000,
            to: ROUTERS.CONTEXT_WINDOW_LIMIT
        }
    ]

    const additionalData = [
        {
            title: "automatic speech",
            icon: "./src/assets/icons/auto-speech.png",
            value: "Off",
            to: ROUTERS.AUTO_SPEECH
        },
        {
            title: "auto transcription",
            icon: "./src/assets/icons/auto-transcription.png",
            value: "Off",
            to: ROUTERS.AUTO_TRANSCRIPTION
        },
        {
            title: "single message",
            icon: "./src/assets/icons/single-message.png",
            value: "Off",
            to: ROUTERS.SINGLE_MESSAGE
        }
    ]

    const interfaceData = [
        {
            title: "language",
            icon: "./src/assets/icons/language-interface.png",
            value: "English",
            to: ROUTERS.LANGUAGE
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