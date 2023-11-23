import "./LanguageSetting.scss"
import {LANGUAGES, Language} from "../../constants/languages.ts"
import {BackButton, MainButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"
import SelectionOption from "../../components/Selection/SelectionOption.tsx"
import {useState} from "react"
import Description from "../../components/Desctiption/Description.tsx"

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
            <div className="language-setting__selector">

                {
                    LANGUAGES.map((language) => {
                        return (
                            <SelectionOption
                                key={language.code}
                                text={language.name}
                                description={language.localName}
                                isSelected={language.code === selectedLanguage.code}
                                onClick={() => {
                                    handleClick(language)
                                }}/>
                        )
                    })
                }
            </div>

            <Description
                text={"This option does not control this interface yet"}
                destructive={true}
            />
            <Description
                text={"Controls the language of the interface in the bot."}
            />

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