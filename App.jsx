import React from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import AppContent from "./components/AppContent.jsx"

export { App }


function App() {
    return (
        <div className="container">
            <Header />
            <AppContent />
            <Footer />
        </div>
    )
}