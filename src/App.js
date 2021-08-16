
import './App.css';
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Header from './components/header/Header';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Home Page</Link>
        <Link to="/profile">Profile</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
        </Switch>

     

      </Router>
      
    </div>
  );
}

export default App;
