import React from 'react'
import { Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <div className="sultani-navbar-area bg-dark">
            {/* <!-- sm megamenu start here --> */}
                <Nav id="smmNavbar" className="navbar sm-navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/">M</Link>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item has-menu-item-submenu"><Link to="google.com">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </div>
        </>
    )
}