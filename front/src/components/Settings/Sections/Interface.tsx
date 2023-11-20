import SettingCard from "../SettingCard.tsx"


function Interface() {
    return (
        <section className="section settings-menu__section">
            <h2 className="section__title uppercase letter-spacing">interface</h2>
            <div className="section__cards">

                <SettingCard
                    title='language'
                    icon="./src/assets/icons/language-interface.png"
                    value="English"
                    to="/language-model"
                />

            </div>
        </section>
    )
}

export default Interface