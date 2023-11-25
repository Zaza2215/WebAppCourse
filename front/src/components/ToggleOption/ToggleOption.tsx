import "./ToggleOption.scss"
import Switch from "../../components/Switch/Switch.tsx"

type ToggleOptionProps = {
    text: string
    isChecked: boolean
    setIsChecked: (isChecked: boolean) => void
}

function ToggleOption({text, isChecked, setIsChecked}: ToggleOptionProps) {
    return (
        <div className="toggle-option">
            <div className="toggle-option__text">
                {text}
            </div>
            <Switch
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
        </div>
    )
}

export default ToggleOption