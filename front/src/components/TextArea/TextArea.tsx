import "./TextArea.scss"

type TextAreaProps = {
    header: string
    placeholder: string
    value: string
    setValue: (value: string) => void


}

function TextArea({header, placeholder, value, setValue}: TextAreaProps) {
    return (
        <div className="textarea">
            <h1 className="textarea__header">{header}</h1>
            <textarea
                className="textarea__textarea"
                placeholder={placeholder}
                spellCheck={true}
                onChange={event => setValue(event.target.value)}>
                {value}
            </textarea>
        </div>
    )
}

export default TextArea