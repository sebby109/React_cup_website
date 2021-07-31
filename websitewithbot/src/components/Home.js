
import Container from 'react-bootstrap/Container';
import cup1 from './cup1.jpg';
import cup2 from './cup2.jpg';
import cup3 from './cup3.jpg';
import cup4 from './cup4.jpg';
import cup5 from './cup5.jpg';
import cup6 from './cup6.jpg';
import ItemCard from './ItemCard';
import '../App.css';
import api from '../communication/api';
import { useState, useEffect } from 'react';

function Home() {
    const [items, setItems] = useState([]);
    let allCups = [cup1, cup2, cup3, cup4, cup5, cup6];
    let counter = 0;
    const [cartNumber, setCartNumber] = useState(0);


    useEffect(() => {
        // need the if statement or line will infinite b/c useEffect is running after each return.
        if (items.length === 0) {
            api.getItems()
                .then(x => setItems(x))
                .catch(e => console.log(e));
        }
        return () => {console.log('useEffect Closed')};
    });

    let updateCount = () => {
        if (counter === allCups.length) {
            counter = 0;
        }
        else {
            counter += 1;
        }
    }

    let getCartNumber = () => {
        api.getCart().then(result => setCartNumber(result)).catch(e => alert(e));
    }

    let addToCart = () => {
        let cartItem = {count: '1'};
        api.addToCart(cartItem).then(() =>console.log('Item added')).catch(e => alert(e));
        getCartNumber();
    }

    return (
        /* Once database is set up use a useEffect to get items in there
            and then use map so you can generate all the items in the database
            so if an item is added it will automatically be put on the website.

            7/15: added cart. Now to create server side so I can transfer the cup images over there
            and get it through the api maybe? and also the names of the cups? use map to create them.
        */

        <Container fluid onLoad={getCartNumber}>
            <div class="grid-container">

                {items.map(cur_cup =>
                    <div>
                        {<div class="grid-item">

                            <ItemCard image={allCups[counter]} name={cur_cup.itemname} price={cur_cup.price} onLoad={updateCount()} />

                            {cur_cup.quantity === 0 ? <small style={{ color: 'red' }}> Out of stock </small>
                                :
                            <button onClick={addToCart}> Add to cart </button>
                            }

                        </div>
                        }
                    </div>
                )}
                <div> {cartNumber === 0 ? '' : <div class="dot">{cartNumber}</div>} </div>
            </div>
        </Container>
    );
}

export default Home;