import "./App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Settings from "./pages/Settings/Settings.tsx"
import {ROUTERS} from "./constants/routes.ts"
import LanguageModel from "./pages/LanguageModel/LanguageModel.tsx"
import {useState} from "react"
import LanguageSetting from "./pages/LanguageSetting/LanguageSetting.tsx"
import {LANGUAGES} from "./constants/languages.ts"
import AutoTranscriptionSetting from "./pages/AutoTranscriptionSetting/AutoTranscriptionSetting.tsx"
import AutomaticSpeech from "./pages/AutomaticSpeech/AutomaticSpeech.tsx"
import SingleMessage from "./pages/SingleMessage/SingleMessage.tsx"
import CustomInstruction from "./pages/CustomInstruction/CustomInstruction.tsx"
import {TextAreaProps} from "./pages/CustomInstruction/CustomInstruction.tsx"


export type modelProps = {
    model_id: number
    model_name: string
    verbose_name: string
}

function App() {

    const models: modelProps[] = [
        {
            model_id: 1,
            model_name: "gpt2",
            verbose_name: "GPT-2"

        },
        {
            model_id: 2,
            model_name: "gpt3",
            verbose_name: "GPT-3"
        },
        {
            model_id: 3,
            model_name: "gpt4",
            verbose_name: "GPT-4"
        }
    ]

    const [userModel, setUserModel] = useState(models[0])
    const [userLanguage, setUserLanguage] = useState(LANGUAGES[0])
    const [userAutoTranscription, setUserAutoTranscription] = useState(false)
    const [userAutomaticSpeech, setUserAutomaticSpeech] = useState(false)
    const [userSingleMessage, setUserSingleMessage] = useState(false)

    // Custom Insturctions
    const [userCustomInstructionsResponse, setUserCustomInstructionsResponse] = useState("")
    const [userCustomInstructionsRespond, setUserCustomInstructionsRespond] = useState("")

    const CustomInstructionData: TextAreaProps[] = [
        {
            userTA: userCustomInstructionsResponse,
            setUserTA: setUserCustomInstructionsResponse,
            header: "What Would You Like ChatGPT To Know About You To Provide Better Responses?",
            placeholder: "Thought starters:\n" +
                "- Where are you from?\n" +
                "- What do you do for work?\n" +
                "- What are your hobbies and interests?\n" +
                "- What are you passionate about?\n" +
                "- What are your goals in life?"
        },
        {
            userTA: userCustomInstructionsRespond,
            setUserTA: setUserCustomInstructionsRespond,
            header: "How Would You Like ChatGPT To Respond?",
            placeholder: "Thought starters:\n" +
                "- How formal or casual should ChatGPT be?\n" +
                "- How long or short should ChatGPT's responses be?\n" +
                "- How do you want to be addressed?\n" +
                "- Should ChatGPT use emojis?\n" +
                "- Should ChatGPT have opinions on topic or be neutral?"
        }
    ]

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Settings
                            userModel={userModel}
                            userLanguage={userLanguage}
                            userAutoTranscription={userAutoTranscription}
                            userAutomaticSpeech={userAutomaticSpeech}
                            userSingleMessage={userSingleMessage}/>}/>
                    <Route
                        path={ROUTERS.LANGUAGE_MODEL}
                        element={<LanguageModel
                            models={models}
                            userModel={userModel}
                            setUserModel={setUserModel}/>}/>
                    <Route
                        path={ROUTERS.CUSTOM_INSTRUCTIONS}
                        element={<CustomInstruction
                            data={CustomInstructionData}
                        />}/>
                    <Route
                        path={ROUTERS.AUTO_SPEECH}
                        element={<AutomaticSpeech
                            userAutomaticSpeech={userAutomaticSpeech}
                            setUserAutomaticSpeech={setUserAutomaticSpeech}/>}
                    />
                    <Route
                        path={ROUTERS.AUTO_TRANSCRIPTION}
                        element={<AutoTranscriptionSetting
                            userAutoTranscription={userAutoTranscription}
                            setUserAutoTranscription={setUserAutoTranscription}/>}
                    />
                    <Route
                        path={ROUTERS.SINGLE_MESSAGE}
                        element={<SingleMessage
                            userSingleMessage={userSingleMessage}
                            setUserSingleMessage={setUserSingleMessage}/>}
                    />
                    <Route
                        path={ROUTERS.LANGUAGE}
                        element={<LanguageSetting
                            userLanguage={userLanguage}
                            setUserLanguage={setUserLanguage}/>}
                    />
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
