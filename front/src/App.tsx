import "./App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Settings from "./pages/Settings.tsx"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Settings/>}/>
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
