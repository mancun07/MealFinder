import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MealsDetails from './components/MealsDetails';
import NotFound from './components/NotFound';
import MealsContextState from './context/MealsContext';

const App = () => {
  return (
    <MealsContextState>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path={'/MealFinder'} component={Home}/>
              <Route exact path={'/meals/:id'} component={MealsDetails}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </MealsContextState>
  );
}

export default App;
