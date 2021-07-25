import React from 'react';
import Container from 'react-bootstrap/Container';
import api from '../communication/api';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function ItemCard(props) {
    let img = props.image;
    let inventory = props.quantity;
    const [cartNumber, setCartNumber] = useState(0);

    let addToCart = () => {

        let cartItem = {count: '1'};
        api.addToCart(cartItem).then(() =>console.log('Item added')).catch(e => alert(e));
        api.getCart().then(result => setCartNumber(result)).catch(e => alert(e));
        // LEFT OFF HERE. TRYING TO FIGURE OUT HOW TO GET CART NUMBER TO STAY IF I GO TO CART PAGE THEN BACK W/0 PURCHASING
 
    }

    return (
        <Container>
            <div class="grid-item">
                <img class="img-s" src={img} alt="cup image" />
                <div style={{ display: 'block' }}>
                    <b class="text-adj"> {props.name} </b>
                    <p style={{ textAlign: 'center', display: 'block' }}>Price: ${props.price}</p>
                </div>

                {inventory === 0 ? <small style={{ color: 'red' }}> Out of stock </small>
                    :
                <button onClick={addToCart}> Add to cart </button>
                }
            </div>
                <div style={{position:"absolute", top:"25px", right:"45px", color:"white"}}> {cartNumber === 0 ? '' : cartNumber} </div>
        </Container>
    );
}
export default ItemCard;