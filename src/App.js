import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/purchase'>
            <Purchase></Purchase>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
