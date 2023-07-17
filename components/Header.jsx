import React from "react"
import logo from "../images/react-logo.png"

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

function Navigation() {
    return (
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}