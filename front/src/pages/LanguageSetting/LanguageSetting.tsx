import {LANGUAGES, Language} from "../../constants/languages.ts"
import {BackButton, MainButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import Description from "../../components/Desctiption/Description.tsx"
import Selector from "../../components/Selection/Selector.tsx"

type languageSettingProps = {
    userLanguage: Language
    setUserLanguage: (model: Language) => void
}

function LanguageSetting({userLanguage, setUserLanguage}: languageSettingProps) {
    const navigator = useNavigate()

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(userLanguage)

    const handleClick = (lang: Language) => {
        setSelectedLanguage(lang)
    }

    function saveSelected() {
        setUserLanguage(selectedLanguage)
        navigator(-1)
    }


    return (
        <div className="language-setting">

            <Selector
                data={LANGUAGES.map((lang) => {
                    return {
                        key: lang.code,
                        text: lang.name,
                        description: lang.localName,
                        isSelected: lang.code === selectedLanguage.code,
                        onClick: () => {
                            handleClick(lang)
                        }
                    }
                })}
            />

            <Description
                text={"This option does not control this interface yet"}
                destructive={true}>
                <p className="destructive">Controls the language of the interface in the bot.</p>
            </Description>

            <BackButton
                onClick={
                    () => navigator(-1)
                }
            />

            {
                userLanguage.code !== selectedLanguage.code && <MainButton
                    onClick={saveSelected}
                    text="Save"/>
            }
        </div>
    )
}

export default LanguageSetting