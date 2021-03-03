import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo-horizontal-1.png'
import shape from '../../assets/image/shape.png'
import path from '../../assets/image/path-1.png'
import "../../assets/css/header.css"

function Header() {

    const [display, setDisplay] = useState(false);

    const displayData = () => setDisplay(!display)


    const navLinks = [
        {
            name: 'SO FUNKTIONIERT’S',
            to: "/"
        },
        {
            name: 'SONDERANGEBOTE',
            to: "/"
        },
    ]
    return (
        <header className="header-bg">
            <div className="container">
                <NavLink to="/" className="logo"><img src={logo} alt="logo" /></NavLink>
                <div className="menu">
                    {
                        navLinks.map((item, i) =>
                            <NavLink
                                className="menu-link"
                                to={item.to}
                                key={i}>
                                {item.name}
                            </NavLink>
                        )
                    }
                    <ul onClick={displayData}>
                        <li className="main-menu">
                            <img src={shape} alt="shape" className="shape" />
                        MEIN BEREICH
                        <img src={path} alt="path" className="path" />
                            <ul className={display ? "submenu" : 'submenuhidden'}>
                                <li>
                                    My published jokes
                            </li>
                                <li>
                                    My saved jokes
                            </li>
                                <li>
                                    Account Information
                            </li>
                                <li>
                                    Publish new joke
                            </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default React.memo(Header);
