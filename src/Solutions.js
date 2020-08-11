import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './Solutions.css';
import SolutionOne from './Solutions/SolutionOne';
import SolutionTwo from './Solutions/SolutionTwo';
import SolutionThree from './Solutions/SolutionThree';
import SolutionFour from './Solutions/SolutionFour';
import CounterOne from './Counters/CounterOne';
import CounterTwo from './Counters/CounterTwo';
import CounterThree from './Counters/CounterThree';
import CounterFour from './Counters/CounterFour';

function Solutions() {
  return (
    <Router>
        <div>
          <nav>
            <ul className='SubNavBar'>
              <li className='SubNavBarItem'><Link to='/Solutions'className='SubNavBarItemLink'>One</Link></li>
              <li className='SubNavBarItem'><Link to='/Solutions/SolutionTwo' className='SubNavBarItemLink'>Two</Link></li>
              <li className='SubNavBarItem'><Link to='/Solutions/SolutionThree' className='SubNavBarItemLink'>Three</Link></li>
              <li className='SubNavBarItem'><Link to='/Solutions/SolutionFour' className='SubNavBarItemLink'>Four</Link></li>
            </ul>
          </nav>
        </div>
        <div className="SolutionsText">
          <Switch>
            <Route exact path='/Solutions'>
              <SolutionOne></SolutionOne>
              <CounterOne></CounterOne>
            </Route>
            <Route path='/Solutions/SolutionTwo'>
              <SolutionTwo></SolutionTwo>
              <CounterTwo></CounterTwo>
            </Route>
            <Route path='/Solutions/SolutionThree'>
              <SolutionThree></SolutionThree>
              <CounterThree></CounterThree>
            </Route>
            <Route path='/Solutions/SolutionFour'>
              <SolutionFour></SolutionFour>
              <CounterFour></CounterFour>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default Solutions;
