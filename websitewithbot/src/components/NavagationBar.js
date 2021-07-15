
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

//left off trying to figure out how i wanted the background. 

function NavagationBar(props) {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" style={{ borderRadius: '20px', margin: '20px', boxShadow: '5px 5px grey' }}>
            <Navbar.Brand href="#home">Cups</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="#">login</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">
                        <img src="https://image.flaticon.com/icons/png/512/263/263142.png" height='30px' />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
export default NavagationBar;