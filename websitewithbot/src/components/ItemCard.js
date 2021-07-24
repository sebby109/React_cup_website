import React from 'react';
import Container from 'react-bootstrap/Container';
import cup1 from './cup1.jpg';

function ItemCard (props) {
    let img = props.image;
    return (
        <Container>
            <div class="grid-item">
                <img class="img-s" src={img} alt="cup1" />
                <div style={{ display: 'block' }}>
                    <b class="text-adj"> Movie cup </b>
                </div>
                <button value="cup1" > Add to chart </button>
            </div>
        </Container>
    );
}
export default ItemCard;