import "./Settings.scss"
import Interface from "../../components/Settings/Sections/Interface.tsx"
import Additional from "../../components/Settings/Sections/Additional.tsx"
import Model from "../../components/Settings/Sections/Model.tsx"

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