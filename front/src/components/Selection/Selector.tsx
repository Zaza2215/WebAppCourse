import "./Selector.scss"
import SelectionOption from "./SelectionOption.tsx"

export type dataSelectorProps = {
    key: string | number
    text: string
    description?: string
    isSelected: boolean
    onClick: () => void
}

type SelectorProps = {
    data: dataSelectorProps[]
}


function Selector({data}: SelectorProps) {
    console.log(data)
    return (
        <div className="selector">
            {
                data.map(
                    (section) => (
                        <SelectionOption
                            key={section.key}
                            text={section.text}
                            description={section.description}
                            isSelected={section.isSelected}
                            onClick={section.onClick}/>
                    )
                )
            }
        </div>
    )
}

export default Selector