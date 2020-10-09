import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import Initiatives from './Components/Initiatives';
import Annie from './Components/Annie';
import Kanish from './Components/Kanish';
import Nicholas from './Components/Nick';
import Kaiyi from './Components/Kaiyi';
import Tanmay from './Components/Tanmay';
import Scroll from './Components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Scroll />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/initiatives" component={Initiatives} />
          <Route path="/annie" component={Annie} />
          <Route path="/kanish" component={Kanish} />
          <Route path="/nicholas" component={Nicholas} />
          <Route path="/kaiyi" component={Kaiyi} />
          <Route path="/tanmay" component={Tanmay} />
        </Switch>
        <Nav />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
