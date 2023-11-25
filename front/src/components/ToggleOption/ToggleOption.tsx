import "./ToggleOption.scss"
import Switch from "../../components/Switch/Switch.tsx"

type ToggleOptionProps = {
    isChecked: boolean
    setIsChecked: (isChecked: boolean) => void
}

function ToggleOption({isChecked, setIsChecked}: ToggleOptionProps) {
    return (
        <div className="toggle-option">
            <div className="toggle-option__text">
                Automatic Speech Recognition
            </div>
            <Switch
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
        </div>
    )
}

export default ToggleOption