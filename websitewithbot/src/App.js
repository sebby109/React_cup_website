import 'bootstrap/dist/css/bootstrap.min.css'; //need this for bootstrap to work!
import Container from 'react-bootstrap/Container';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavagationBar from './components/NavagationBar';

function App() {

  return (
    <HashRouter>
      <Container fluid>
        <NavagationBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
