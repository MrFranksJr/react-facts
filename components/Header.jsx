import React from "react"

export default Header

function Header() {
    return (
        <header className="header">
            <div className="subheader">
                <img src="./images/react-logo.png"/>
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