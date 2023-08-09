import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Home from './components/Home';

import {BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";


function App() {
  return (
  <>    
  <Router>
    <Navbar title="TextUtils"/>
    <div className="container my-5 ">
    <Switch>

            <Route path="/">
              <Home/>
            </Route>

            <Route path="/Textform">
              <Textform heading="Enter your Text Here" />
            </Route>

            <Route path="/About">
              <About/>
            </Route>

    </Switch>
    </div>
  </Router>
  </>
  );
  
}

export default App;
