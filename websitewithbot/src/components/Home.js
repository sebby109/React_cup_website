
import Container from 'react-bootstrap/Container';
import cup1 from './cup1.jpg';
import cup2 from './cup2.jpg';
import cup3 from './cup3.jpg';
import cup4 from './cup4.jpg';
import cup5 from './cup5.jpg';
import cup6 from './cup6.jpg';
import '../App.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../communication/api';
import { useState } from 'react';

function Home() {
    const history = useHistory();
    const [items, setItems] = useState([]);
    
    let updateCart = () => {
        history.push('/cart');
    }

    useEffect (() => {
        // need the if statement or line will infinite b/c useEffect is running after each return.
        if(items.length === 0){
            let c = [];
            api.getItems()
            .then(x => setItems(x))
            .catch(e => console.log(e));
        }
    });

    return (
        /* Once database is set up use a useEffect to get items in there
            and then use map so you can generate all the items in the database
            so if an item is added it will automatically be put on the website.

            7/15: added cart. Now to create server side so I can transfer the cup images over there
            and get it through the api maybe? and also the names of the cups? use map to create them.
        */

        <Container fluid>
            <div class="grid-container">
                <div class="grid-item">
                    <img class="img-s" src={cup1} alt="cup1" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> Movie cup </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>

                <div class="grid-item">
                    <img class="img-s" src={cup2} alt="cup2" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> Large cup </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>

                <div class="grid-item">
                    <img class="img-s" src={cup3}  alt="cup3" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> coffee mug </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>

                <div class="grid-item">
                    <img class="img-s" src={cup4}  alt="cup1=4" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> Plain small cup </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>

                <div class="grid-item">
                    <img class="img-s" src={cup5}  alt="cup5" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> Cat lady cup </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>

                <div class="grid-item">
                    <img class="img-s" src={cup6}  alt="cup6" />
                    <div style={{ display: 'block' }}>
                        <b class="text-adj"> Small tea cup </b>
                    </div>
                        <button onClick={updateCart}> Add to chart </button>
                </div>
            // delete this, only used to check items.
            {items.map(x => <div>{x.name}</div>)}
            </div>
        </Container>
    );
}

export default Home;