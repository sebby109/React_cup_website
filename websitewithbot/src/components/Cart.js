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
    const [dbItemsPicked, setDbItemsPicked] = useState([]);
    let allCups = [cup1, cup2, cup3, cup4, cup5, cup6];

    useEffect(() =>{

        api.getCart().then(result => setCartNumber(result)).catch(e => console.log(e));
        return () => {console.log("effect closed in cart.")}

    });

    useEffect(() =>{

        api.getTempCart().then(result => setTempCart(result)).catch(e => console.log(e));
        return () => {console.log("effect closed in cart.")}

    });

    // LEFT OFF HERE TRYING TO FIGURE OUT HOW IM GOING TO GET DBITEMSPICKED FILLED AND DISPLAYED ON SCREEN.

    return (
        <Container fluid>
            <div> {cartNumber === 0 ? '' : <div class="dot">{cartNumber}</div>} </div>

            <h1 style={{textAlign:"center"}}>Heres your cart:</h1>

            {temp_cart === [] ? 'Cart is empty' :
                <div id="content">
                    {
                        temp_cart.map(cup_num => 
                            <div>
                                <img class="cart-img" src={allCups[parseInt(cup_num)]} alt="different cups" />
                            </div>
                        )
                    }
                </div>
            }
            {dbItemsPicked.length}
        </Container>
    );
}
export default Cart;