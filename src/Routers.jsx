// Including React Package
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NavBar } from './elements/header/navbar/NavBar'
// Including Elements
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Footer } from './elements/footer/Footer'
import { Container } from 'react-bootstrap'

export const Routers = () => {
    return (
        <>
            <Container fluid className="p-0 sultani-dine-navbar">
                <Router>
                    {/* Theme Header area */}
                    <header>
                        <NavBar/>
                    </header>

                    {/* Theme Main content area */}
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                        </Switch>
                    </main>

                    {/* Theme footer area */}
                    <footer>
                        <Footer/>
                    </footer>
                </Router>
            </Container>
        </>
    )
}
