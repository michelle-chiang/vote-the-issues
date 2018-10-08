// TODO: connect to Firebase Database
// follow https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';

import Header from './Header';
import Navigation from './Navigation';
// import ChooseYourIssues from './ChooseYourIssues';
// import MakeYourPlan from './MakeYourPlan';
// import ShareYourPledge from './ShareYourPledge';

import './App.css';

import * as routes from '../constants/routes';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navigation />

          {/* TODO: make activeRoute dynamic based on params */}
          <Header activeRoute='choose-your-issues' />

          {/* <Route
            exact path={routes.CHOOSE_YOUR_ISSUES}
            component={ChooseYourIssues}
          />
          <Route
            exact path={routes.MAKE_YOUR_PLAN}
            component={MakeYourPlan}
          />
          <Route
            exact path={routes.SHARE_YOUR_PLEDGE}
            component={ShareYourPledge}
          /> */}

        </div>
      </Router>
    )
  }
}

export default App;

// import logo from './logo.svg';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

