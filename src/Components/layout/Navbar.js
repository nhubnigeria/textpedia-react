import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/* <a href="/">TextPedia</a> */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                        <li><Link to="/how">How it works</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)