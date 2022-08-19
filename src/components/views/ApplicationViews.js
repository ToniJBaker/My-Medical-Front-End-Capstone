import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<h2>Welcome to My Medical Storage</h2>} />
        </Routes>
    
    </>
    )
}