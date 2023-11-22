import "./App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Settings from "./pages/Settings/Settings.tsx"
import {ROUTERS} from "./constants/routes.ts"
import LanguageModel from "./pages/LanguageModel/LanguageModel.tsx"
import {useState} from "react"


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

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Settings
                            userModel={userModel}/>}/>
                    <Route
                        path={ROUTERS.LANGUAGE_MODEL}
                        element={<LanguageModel
                            models={models}
                            userModel={userModel}
                            setUserModel={setUserModel}/>}/>
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
