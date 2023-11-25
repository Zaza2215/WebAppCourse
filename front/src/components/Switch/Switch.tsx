import "./Switch.scss"
import classNames from "classnames"
import {useState} from "react"

type SwitchProps = {
    isChecked: boolean
    setIsChecked: (isChecked: boolean) => void
}

function Switch({isChecked, setIsChecked}: SwitchProps) {
    const [checked, setChecked] = useState(isChecked)

    const toggleSwitch = () => {
        setChecked(!checked)
        setIsChecked(!checked)
    }

    return (
        <span
            className={
                classNames(
                    "switch",
                    {"switch--checked": isChecked}
                )
            }
            onClick={toggleSwitch}
        >

        </span>
    )
}

export default Switch