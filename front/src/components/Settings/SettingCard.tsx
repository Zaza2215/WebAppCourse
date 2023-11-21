import {Link} from "react-router-dom"
import "./SettingCard.scss"
import ArrowIcon from "../Icons/Icons.tsx"


export type SettingCardProps = {
    title: string,
    value?: string | number,
    icon?: string,
    to: string
}


function SettingCard({title, value, icon, to}: SettingCardProps) {
    return (
        <>
            <Link to={to}>
                <div className="card">
                    <div className="card__left">
                        <div className="card__icon">
                            <img
                                src={icon}
                                className="card__icon"
                                alt={`${title} icon`}
                            />

                        </div>
                        <div className="card__title">
                            {title}
                        </div>
                    </div>

                    <div className="card__right">

                        {value && <div className="card__value">{value}</div>}

                        <ArrowIcon/>

                    </div>
                </div>
            </Link>
        </>
    )
}

export default SettingCard