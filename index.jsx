import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import AppContent from "./components/AppContent.jsx"


function Page() {
    return (
        <div id="core">
            <Header />
            <AppContent />
            <Footer />
        </div>
    )
}


const rootLevel = ReactDOM.createRoot(document.getElementById('root'))

rootLevel.render(<Page />)