import Container from 'react-bootstrap/Container';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Home />
      </Container>
    </HashRouter>
  );
}

export default App;
