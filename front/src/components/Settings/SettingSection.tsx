import SettingCard, {SettingCardProps} from "./SettingCard.tsx"
import SectionTitle from "./SectionTitle.tsx"

type SettingSectionProps = {
    title: string,
    data: SettingCardProps[]

}

function SettingSection({title, data}: SettingSectionProps) {
    return (
        <section className="section settings-menu__section">
            <SectionTitle
                title={title}/>
            <div className="section__cards">

                {
                    data.map((card) => {
                        return (<SettingCard
                            key={card.title}
                            title={card.title}
                            icon={card.icon}
                            value={card.value}
                            to={card.to}
                            ready={card.ready}
                        />)
                    })
                }

            </div>
        </section>
    )
}

export default SettingSection