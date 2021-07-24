
import Container from 'react-bootstrap/Container';
import cup1 from './cup1.jpg';
import cup2 from './cup2.jpg';
import cup3 from './cup3.jpg';
import cup4 from './cup4.jpg';
import cup5 from './cup5.jpg';
import cup6 from './cup6.jpg';
import ItemCard from './ItemCard';
import '../App.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../communication/api';
import { useState } from 'react';

function Home() {
    const history = useHistory();
    const [items, setItems] = useState([]);
    let allCups = [cup1, cup2, cup3, cup4, cup5, cup6];
    let counter = 0;

    let updateCart = () => {
        history.push('/cart');
    }

    useEffect(() => {
        // need the if statement or line will infinite b/c useEffect is running after each return.
        if (items.length === 0) {
            api.getItems()
                .then(x => setItems(x))
                .catch(e => console.log(e));
        }
        return () => {console.log('useEffect Closed')};
    });

    let addToItems = (event) => {
        /* Adds the item they selected to the cart. selection obtains which item they
            picked and convt makes it so it can be posted into the api. */
        let selection = event.target.value;
        let convrt = { name: selection };
        api.addItem(convrt).catch(e => console.log(e));
    }

    let updateCount = () => {
        if (counter === allCups.length) {
            counter = 0;
        }
        else {
            counter += 1;
        }
    }

    return (
        /* Once database is set up use a useEffect to get items in there
            and then use map so you can generate all the items in the database
            so if an item is added it will automatically be put on the website.

            7/15: added cart. Now to create server side so I can transfer the cup images over there
            and get it through the api maybe? and also the names of the cups? use map to create them.
        */

        <Container fluid>
            <div class="grid-container">

                {items.map(cur_cup =>
                    <div>
                        {
                            <ItemCard image={allCups[counter]} name={cur_cup.itemname} price={cur_cup.price} quantonLoad={cur_cup.quantity} onLoad={updateCount()} />
                        }
                    </div>
                )}
            </div>
        </Container>
    );
}

export default Home;