import SettingCard from "../SettingCard.tsx"

function Model() {
    return (
        <section className="section settings-menu__section">
            <h2 className="section__title uppercase letter-spacing">model section</h2>
            <div className="section__cards">

                <SettingCard
                    title='language model'
                    icon="./src/assets/icons/language-model.png"
                    value="GPT-4"
                    to="/language-model"
                />
                <SettingCard
                    title='custome instructions'
                    icon="./src/assets/icons/custom-instructions.png"
                    to="/language-model"
                />
                <SettingCard
                    title='context window limit'
                    icon="./src/assets/icons/window-limit.png"
                    value={1000}
                    to="/language-model"
                />

            </div>
        </section>
    )
}

export default Model