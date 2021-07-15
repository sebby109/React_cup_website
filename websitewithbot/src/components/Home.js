
import Container from 'react-bootstrap/Container';
import cup1 from './cup1.jpg';
import cup2 from './cup2.jpg';
import cup3 from './cup3.jpg';
import cup4 from './cup4.jpg';
import cup5 from './cup5.jpg';
import cup6 from './cup6.jpg';
import '../App.css';

function Home() {
    return (
        /* Once database is set up use a useEffect to get items in there
            and then use map so you can generate all the items in the database
            so if an item is added it will automatically be put on the website.
        */
        <Container>
            <div class="grid-container">
                <div class="grid-item">
                    <img class="img-s" src={cup1} alt="cup1" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center'}}>Graphics cup</b>
                    </div>
                </div>
                <div class="grid-item">
                    <img class="img-s" src={cup2} alt="cup2" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center' }}>Graphics cup</b>
                    </div>
                </div>
                <div class="grid-item">
                    <img class="img-s" src={cup3}  alt="cup3" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center' }}>Graphics cup</b>
                    </div>
                </div>
                <div class="grid-item">
                    <img class="img-s" src={cup4}  alt="cup1=4" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center' }}>Graphics cup</b>
                    </div>
                </div>
                <div class="grid-item">
                    <img class="img-s" src={cup5}  alt="cup5" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center' }}>Graphics cup</b>
                    </div>
                </div>
                <div class="grid-item">
                    <img class="img-s" src={cup6}  alt="cup6" />
                    <div style={{ display: 'block' }}>
                        <b style={{ verticalAlign: 'top', display: 'inline-block', textAlign: 'center' }}>Graphics cup</b>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;