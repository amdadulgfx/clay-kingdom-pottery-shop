import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact to='/'>
            <Home></Home>
          </Route>
          <Route to='/home'>
            <Home></Home>
          </Route>
          <Route to='/purchase'>
            <Purchase></Purchase>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
