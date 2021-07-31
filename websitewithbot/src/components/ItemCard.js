import React from 'react';
import Container from 'react-bootstrap/Container';

function ItemCard(props) {
    let img = props.image;

    return (
        <Container>
            <div>
                <img class="img-s" src={img} alt="cup" />
                <div style={{ display: 'block' }}>
                    <b class="text-adj"> {props.name} </b>
                    <p style={{ textAlign: 'center', display: 'block' }}>Price: ${props.price}</p>
                </div>
            </div>
        </Container>
    );
}
export default ItemCard;