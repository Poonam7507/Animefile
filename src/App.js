import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Characters from './components/Characters';
import Contact from './components/Contact';
import Gryffindor from './components/Gryffindor';
import Slythern from './components/Slythern';
import Hufflepuff from './components/Hufflepuff';
import Ravenclaw from './components/Ravenclaw';



function App() {
  return (
    <div >
      {/* <Home/> */}
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/character" component={Characters} />
        <Route path="/contact" component={Contact} />
        <Route path="/ghouse" component={Gryffindor} />
        <Route path="/shouse" component={Slythern} />
        <Route path="/hhouse" component={Hufflepuff} />
        <Route path="/rhouse" component={Ravenclaw} />
  </Switch>
  </Router>
     </div>

  );
}

export default App;
