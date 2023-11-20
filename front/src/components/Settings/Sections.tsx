import SettingCard from "./SettingCard.tsx"


export function Model() {
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


export function Additional() {
    return (
        <section className="section settings-menu__section">
            <h2 className="section__title uppercase letter-spacing">additional</h2>
            <div className="section__cards">

                <SettingCard
                    title='automatic speech'
                    icon="./src/assets/icons/auto-speech.png"
                    value="Off"
                    to="/language-model"
                />
                <SettingCard
                    title='auto transcription'
                    icon="./src/assets/icons/auto-transcription.png"
                    value='Off'
                    to="/language-model"
                />
                <SettingCard
                    title='single message'
                    icon="./src/assets/icons/single-message.png"
                    value='Off'
                    to="/language-model"
                />

            </div>
        </section>
    )
}


export function Interface() {
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

