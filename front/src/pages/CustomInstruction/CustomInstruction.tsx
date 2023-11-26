import "./CustomInstruction.scss"
import {useState} from "react"
import ReturnButton from "../../components/ReturnButton/ReturnButton.tsx"
import Description from "../../components/Desctiption/Description.tsx"
import {MainButton} from "@vkruglikov/react-telegram-web-app"

type CustomInstructionProps = {
    userCustomInstructionsResponse: string
    setUserCustomInstructionsResponse: (userCustomInstructionsResponse: string) => void
    userCustomInstructionsRespond: string
    setUserCustomInstructionsRespond: (userCustomInstructionsResponde: string) => void
}

function CustomInstruction(
    {
        userCustomInstructionsResponse,
        setUserCustomInstructionsResponse,
        userCustomInstructionsRespond,
        setUserCustomInstructionsRespond
    }: CustomInstructionProps) {

    const [lifeCustomInstructionsResponse, setLifeCustomInstructionsResponse] = useState(userCustomInstructionsResponse)
    const [lifeCustomInstructionsRespond, setLifeCustomInstructionsRespond] = useState(userCustomInstructionsRespond)

    function save() {
        console.log(lifeCustomInstructionsResponse)
        setUserCustomInstructionsResponse(lifeCustomInstructionsResponse)
        console.log(userCustomInstructionsResponse)
        setUserCustomInstructionsRespond(lifeCustomInstructionsRespond)
    }

    return (
        <div className="custom-instruction">

            <p className="custom-instruction__text">What Would You Like ChatGPT To Know About You To
                Provide Better Responses?</p>
            <textarea
                className="custom-instruction__textarea"
                placeholder="Thought starters:
- Where are you from?
- What do you do for work?
- What are your hobbies and interests?
- What are you passionate about?
- What are your goals in life?"
                spellCheck={true}
                onChange={event => setLifeCustomInstructionsResponse(event.target.value)}>
                {userCustomInstructionsResponse}
            </textarea>

            <p className="custom-instruction__text">How Would You Like ChatGPT To Respond?</p>
            <textarea
                className="custom-instruction__textarea"
                placeholder="Thought starters:
- How formal or casual should ChatGPT be?
- How long or short should ChatGPT's responses be?
- How do you want to be addressed?
- Should ChatGPT use emojis?
- Should ChatGPT have opinions on topic or be neutral?
"
                onChange={event => setLifeCustomInstructionsRespond(event.target.value)}>
                {userCustomInstructionsRespond}
            </textarea>

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
                ((lifeCustomInstructionsResponse !== userCustomInstructionsResponse)
                    ||
                    (lifeCustomInstructionsRespond !== userCustomInstructionsRespond))
                &&
                <MainButton
                    onClick={save}
                    text="Save"/>
            }

        </div>
    )
}

export default CustomInstruction