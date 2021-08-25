
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../App.css';

function NavagationBar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" style={{ borderRadius: '20px', margin: '20px', boxShadow: '5px 5px grey' }} >
            <Navbar.Brand href="/">Home of the cups</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link to="/cart">
                            <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="cart icon" height='30px' />
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavagationBar;