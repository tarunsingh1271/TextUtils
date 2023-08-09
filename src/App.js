import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";


function App() {
  return (
  <>    
  <Router>
    <Navbar title="TextUtils"/>
    <div className="container my-5 ">
    <Switch>
          <Route path="/About">
            <About />
          </Route>
          
          <Route path="/">
          <Textform heading="Enter your Text Here" />
          </Route>
    </Switch>
    </div>
  </Router>
  </>
  );
  
}

export default App;
