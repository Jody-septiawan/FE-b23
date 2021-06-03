// import './Css/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigasiBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product';
import Profile from './Components/Profile'

import PrivateRoute from './Components/PrivateRoute'

function App() {


  return(
    <Router>

      <NavigasiBar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/about">

          <About />

        </Route>

        <Route path="/product" component={Product} />

        <PrivateRoute path="/profile" component={Profile} />

      </Switch>

    </Router>
  )
}

export default App;
