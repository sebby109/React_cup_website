
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import api from '../communication/api';


function NavagationBar() {
    const [cartItems, setCartItems] = useState('0');

    useEffect(() => {
        if(cartItems){
            api.getCart()
            .then(x => setCartItems(x))
            .catch(e => alert(e));
        }
        return () => {console.log("Return from resource change.")}
    });

    return (
        <Navbar expand="lg" bg="dark" variant="dark" style={{ borderRadius: '20px', margin: '20px', boxShadow: '5px 5px grey' }}>
            <Navbar.Brand href="/">Home of the cups</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">
                        <img src="https://image.flaticon.com/icons/png/512/263/263142.png" height='30px' />
                    </Nav.Link>
                        <small style={{color:"white"}}> {cartItems} </small>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavagationBar;