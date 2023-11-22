import "./SelectionOption.scss"

type SelectionOptionProps = {
    text: string
    isSelected: boolean
    onClick: () => void
}


function SelectionOption({text, isSelected, onClick}: SelectionOptionProps) {
    return (
        <div
            className="selection-option"
            onClick={onClick}>

            <div className="selection-option__left">
                <div className="selection-option__text">
                    {text}
                </div>
            </div>

            <div className="selection-option__right">
                {isSelected && <div className="selection-option__tick"></div>}
            </div>

        </div>
    )
}

export default SelectionOption