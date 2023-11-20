import {Model, Additional, Interface} from "../../components/Settings/Sections.tsx"
import "./Settings.scss"

function Settings() {
    return (
        <>
            <div className="settings-menu">

                <h1 className="settings-menu__title">Settings</h1>

                <Model/>
                <Additional/>
                <Interface/>
            </div>

        </>
    )
}

export default Settings