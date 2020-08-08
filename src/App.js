import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Title from './Title';
import Problem from './Problem';
import Explanation from './Explanation';
import Solutions from './Solutions';
import Form from './Form';
import CityEmail from './CityEmail';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Router>
        <div>
          <nav>
            <ul className='NavBar'>
              <li className='NavBarItem'><Link to='/' className='NavBarItemLink'>Problem</Link></li>
              <li className='NavBarItem'><Link to='/Explanation' className='NavBarItemLink'>Explanation</Link></li>
              <li className='NavBarItem'><Link to='/Solutions' className='NavBarItemLink'>Solutions</Link></li>
              <li className='NavBarItem'><Link to='/Form' className='NavBarItemLink'>Improve Us</Link></li>
              <li className='NavBarItem'><Link to='/CityEmail' className='NavBarItemLink'>Improve the City</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              <Problem />
            </Route>
            <Route path='/Explanation'>
              <Explanation />
            </Route>
            <Route path='/Solutions'>
              <Solutions />
            </Route>
            <Route path='/Form'>
              <Form />
            </Route>
            <Route path='/CityEmail'>
              <CityEmail />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
