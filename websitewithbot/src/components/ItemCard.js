import React from 'react';
import Container from 'react-bootstrap/Container';

function ItemCard (props) {
    let img = props.image;
    return (
        <Container>
            <div class="grid-item">
                <img class="img-s" src={img} alt="cup image" />
                <div style={{ display: 'block' }}>
                    <b class="text-adj"> {props.name} </b>
                    <p style={{textAlign:'center', display:'block'}}>Price: ${props.price}</p>
                </div>
                <button > Add to cart </button>
            </div>
        </Container>
    );
}
export default ItemCard;