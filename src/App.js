import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Sortinghat from './components/Sortinghat';
import Characters from './components/Characters';
import Thoughts from './components/Thoughts';
import Gryffindor from './components/Gryffindor';
import Slythern from './components/Slythern';
import Hufflepuff from './components/Hufflepuff';
import Ravenclaw from './components/Ravenclaw';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import Quiz4 from './components/Quiz4';



function App() {
  return (
    <div >
      {/* <Home/> */}
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sortinghat" component={Sortinghat} />
        <Route path="/character" component={Characters} />
        <Route path="/thoughts" component={Thoughts} />
        <Route path="/ghouse" component={Gryffindor} />
        <Route path="/shouse" component={Slythern} />
        <Route path="/hhouse" component={Hufflepuff} />
        <Route path="/rhouse" component={Ravenclaw} />
        <Route path="/jigpuzzle1" component={Quiz1} />
        <Route path="/jigpuzzle2" component={Quiz2} />
        <Route path="/jigpuzzle3" component={Quiz3} />
        <Route path="/jigpuzzle4" component={Quiz4} />
  </Switch>
  </Router>
     </div>

  );
}

export default App;
