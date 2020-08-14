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
              <li className='NavBarItem'><Link to='/explanation' className='NavBarItemLink'>Explanation</Link></li>
              <li className='NavBarItem'><Link to='/solutions' className='NavBarItemLink'>Solutions</Link></li>
              <li className='NavBarItem'><Link to='/form' className='NavBarItemLink'>Improve Us</Link></li>
              <li className='NavBarItem'><Link to='/cityemail' className='NavBarItemLink'>Improve the City</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              <Problem />
            </Route>
            <Route path='/explanation'>
              <Explanation />
            </Route>
            <Route path='/solutions'>
              <Solutions />
            </Route>
            <Route path='/form'>
              <Form />
            </Route>
            <Route path='/cityemail'>
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
