import "./LanguageModel.scss"
import SectionTitle from "../../components/Settings/SectionTitle.tsx"
import {BackButton, MainButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"
import SelectionOption from "../../components/Selection/SelectionOption.tsx"
import {modelProps} from "../../App.tsx"
import {useState} from "react"
import Description from "../../components/Desctiption/Description.tsx"

type languageModelProps = {
    userModel: modelProps
    models: modelProps[]
    setUserModel: (model: modelProps) => void
}

function LanguageModel({models, userModel, setUserModel}: languageModelProps) {
    const navigator = useNavigate()

    const [selectedModel, setSelectedModel] = useState<modelProps>(userModel)

    const handleClick = (model: modelProps) => {
        setSelectedModel(model)
    }

    function saveSelected() {
        setUserModel(selectedModel)
        navigator(-1)
    }


    return (
        <div className="language-model">
            <SectionTitle
                title="Language Model"
                type="secondary"/>

            <div className="language-model__selector">

                {
                    models.map((model) => {
                        return (
                            <SelectionOption
                                key={model.model_id}
                                text={model.verbose_name}
                                isSelected={model.model_id === selectedModel.model_id}
                                onClick={() => {
                                    handleClick(model)
                                }}/>
                        )
                    })
                }

            </div>

            <Description text={"Chose the language model that ChatGPT will use to generate response"}>
                <ul>
                    <li><strong>GPT 3</strong> provides good results at a lower cost.</li>
                    <li><strong>GPT 4</strong> offers superior performance but at  a higher price.</li>
                </ul>

            </Description>

            <BackButton
                onClick={
                    () => navigator(-1)
                }
            />

            {userModel.model_id !== selectedModel.model_id && <MainButton
                onClick={saveSelected}
                text="Save"
            />}

        </div>
    )
}

export default LanguageModel