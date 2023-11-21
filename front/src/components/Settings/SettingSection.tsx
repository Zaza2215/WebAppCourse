import SettingCard, {SettingCardProps} from "./SettingCard.tsx"

type SettingSectionProps = {
    title: string,
    data: SettingCardProps[]

}

function SettingSection({title, data}: SettingSectionProps) {
    return (
        <section className="section settings-menu__section">
            <h2 className="section__title uppercase letter-spacing">{title}</h2>
            <div className="section__cards">

                {
                    data.map((card) => {
                        return (<SettingCard
                            key={card.title}
                            title={card.title}
                            icon={card.icon}
                            value={card.value}
                            to={card.to}
                        />)
                    })
                }

            </div>
        </section>
    )
}

export default SettingSection