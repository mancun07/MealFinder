import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MealsDetails from './components/MealsDetails';
import MealsContextState from './context/MealsContext';

const App = () => {
  return (
    <MealsContextState>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route path={'/meals/:id'} component={MealsDetails}/>
            </Switch>
          </div>
        </Router>
    </MealsContextState>
  );
}

export default App;
