import "./Description.scss"
import React from "react"
import classNames from "classnames"


type DescriptionProps = {
    text: string
    destructive?: boolean
    children?: React.ReactNode
}


function Description({text, destructive, children}: DescriptionProps) {
    return (
        <>
            <div
                className={
                    classNames(
                        "description",
                        {"description--destructive": destructive}
                    )
                }>
                {text}
                {children}
            </div>
        </>
    )
}

export default Description