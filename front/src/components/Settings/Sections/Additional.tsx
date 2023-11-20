import SettingCard from "../SettingCard.tsx"

function Additional() {
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

export default Additional