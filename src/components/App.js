// TODO: connect to Firebase Database
// follow https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf
// routing help from https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

import React, { Component } from 'react';
import { 
  Redirect,
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import Navigation from './Navigation';
import ChooseYourIssues from './ChooseYourIssues';
// TODO: Re-enable when 'Make Your Plan' page is implemented
// import MakeYourPlan from './MakeYourPlan';
import ShareYourPledge from './ShareYourPledge';

import './App.css';

import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedIssues: []
      }
  }
  getIssueSelection = () => {
    return this.state.selectedIssues;
  }
  handleIssueSelection = (e)  => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedIssues.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.selectedIssues.filter(x => x !== newSelection);
    } else {
        newSelectionArray = [...this.state.selectedIssues, newSelection];
    }
    this.setState({ selectedIssues: newSelectionArray });
  }
  render () {
    return (
      <Router>
        <div>
          {/* Display navigation menu */}
          <Navigation />

          {/* Set default home page to Choose Your Issues */}
          <Redirect exact from='/' exact to={routes.CHOOSE_YOUR_ISSUES} />
          
          {/* Render specific pages when routed to */}
          <Route
            exact path={routes.CHOOSE_YOUR_ISSUES}
            render={(props) => <ChooseYourIssues {...props} 
              update={this.handleIssueSelection}
              getSelectedIssues={this.getIssueSelection} />}
          />
          {/* TODO: Implement 'Make Your Plan' page */}
          {/* <Route
            exact path={routes.MAKE_YOUR_PLAN}
            render={(props) => <MakeYourPlan {...props} />}
          /> */}
          <Route
            exact path={routes.SHARE_YOUR_PLEDGE}
            render={(props) => <ShareYourPledge {...props} 
              getSelectedIssues={this.getIssueSelection} />}
          />
        </div>
      </Router>
    )
  }
}

export default App;

