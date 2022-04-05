import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Characters from './components/Characters';
import Contact from './components/Contact';



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
  </Switch>
  </Router>
     </div>

  );
}

export default App;
