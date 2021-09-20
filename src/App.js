
import './App.css';
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { AuthContext} from './context/AuthContext'
import { useContext } from 'react';
import SetProfile from './pages/setProfile/SetProfile';


function App() {

  const { user} = useContext(AuthContext);


  

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              { user ? <Home /> : <Login /> }
            </Route>
            <Route path="/signup">
              { user ? <Redirect to="/" /> : <Signup /> }
            </Route>
            <Route path="/Login">
              { user ? <Redirect to="/" /> : <Login /> }
            </Route>
            <Route path="/profile/:userId" exact component={Profile} />
            <Route path="/setProfile/:userId" exact component={SetProfile} />
            
          
          </Switch>
        </Router>

      
      
    </div>
  );
}

export default App;
