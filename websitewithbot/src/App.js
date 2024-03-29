import 'bootstrap/dist/css/bootstrap.min.css'; //need this for bootstrap to work!
import Container from 'react-bootstrap/Container';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavagationBar from './components/NavagationBar';
import Cart from './components/Cart';
import React from 'react';

// used a relational database for this website. PostgreSQL

function App() {

  return (
    // test
    <HashRouter>
      <Container fluid>
        <NavagationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
