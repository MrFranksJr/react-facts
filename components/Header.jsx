import React from "react"
import logo from "../images/react-logo.png"
import { Navigation } from "./NavBar.jsx"

export default Header

function Header() {
    return (
        <header className="header">
            <div className="subheader">
                <img src={logo}/>
                <Navigation />
            </div>
            <h1>Fun facts about React</h1>
        </header>
    )
}