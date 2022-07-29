import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";
import ShopHeader from "../shop-header/shop-header";


const App = () => {
    return (
        <>
            <main className="container">
                <ShopHeader numItems={5} total={20}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CardPage />} />
                </Routes>
            </main>

        </>
    )
}

export default App;