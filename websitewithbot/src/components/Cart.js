import Container from 'react-bootstrap/Container';
import '../App.css';
import React from 'react';
import api from '../communication/api';
import { useState, useEffect } from 'react';
import cup1 from './cup1.jpg';
import cup2 from './cup2.jpg';
import cup3 from './cup3.jpg';
import cup4 from './cup4.jpg';
import cup5 from './cup5.jpg';
import cup6 from './cup6.jpg';

function Cart() {
    const [cartNumber, setCartNumber] = useState(0);
    const [temp_cart, setTempCart] = useState([]);

    useEffect(() =>{
        api.getCart().then(result => setCartNumber(result)).catch(e => alert(e));
        return () => {console.log("effect closed in cart.")}
    });

    useEffect(() =>{
        // used to get the ids of all the items chosen from the user. LET OFF HERE
        api.getTempCart().then(result => setTempCart(result)).catch(e => alert(e));
        return () => {console.log("effect closed in cart.")}
    });

    //LEFT OFF HERE 7/31 TRY A FORM FOR CART ITEMS TO BE ADDED
    // STILL NEED TO FIGURE OUT HOW TO GET SELECTED ITEMS.

    return (
        <Container fluid>
            <div> {cartNumber === 0 ? '' : <div class="dot">{cartNumber}</div>} </div>
        </Container>
    );
}
export default Cart;