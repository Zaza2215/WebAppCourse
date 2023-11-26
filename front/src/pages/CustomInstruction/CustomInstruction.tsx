import "./CustomInstruction.scss"
import {useState} from "react"
import ReturnButton from "../../components/ReturnButton/ReturnButton.tsx"
import Description from "../../components/Desctiption/Description.tsx"
import {MainButton} from "@vkruglikov/react-telegram-web-app"
import TextArea from "../../components/TextArea/TextArea.tsx"


export type TextAreaProps = {
    userTA: string
    setUserTA: (userTA: string) => void
    header: string
    placeholder: string
}

type CustomInstructionProps = {
    data: TextAreaProps[]
}

function CustomInstruction({data}: CustomInstructionProps) {

    const [lifeCustomInstructionsResponse, setLifeCustomInstructionsResponse] = useState(data[0].userTA)
    const [lifeCustomInstructionsRespond, setLifeCustomInstructionsRespond] = useState(data[1].userTA)

    function save() {
        data[0].setUserTA(lifeCustomInstructionsResponse)
        data[1].setUserTA(lifeCustomInstructionsRespond)
    }

    return (
        <div className="custom-instruction">

            <TextArea
                header={data[0].header}
                value={data[0].userTA}
                setValue={setLifeCustomInstructionsResponse}
                placeholder={data[0].placeholder}
            />

            <TextArea
                header={data[1].header}
                value={data[1].userTA}
                setValue={setLifeCustomInstructionsRespond}
                placeholder={data[1].placeholder}
            />


            <Description
                text="This feature allows ChatGPT to feel more personal and
                contextual for each user.">

                <p
                    className="custom-instruction__text"
                    style={{padding: "0px"}}>The custom instruction feature enables users to provide
                    standing information and preferences to personalize
                    ChatGPT&#039;s responses, eliminating the need to re-explain the
                    same details in every conversation.</p>
                <p
                    className="custom-instruction__text"
                    style={{padding: "0px"}}>For example, users can set custom instructions to inform
                    ChatGPT about their occupation, values, interests, or
                    frequently asked questions, allowing the A1 to tailor its
                    responses accordingly without repeatedly prompting the user for the same background information.</p>

            </Description>

            <ReturnButton/>

            {
                ((lifeCustomInstructionsResponse !== data[0].userTA)
                    ||
                    (lifeCustomInstructionsRespond !== data[1].userTA))
                &&
                <MainButton
                    onClick={save}
                    text="Save"/>
            }

        </div>
    )
}

export default CustomInstruction