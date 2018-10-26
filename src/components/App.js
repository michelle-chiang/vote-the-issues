// TODO: connect to Firebase Database
// follow https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf
// routing help from https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

import React, { Component } from 'react';
import { 
  Redirect,
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';

import Navigation from './Navigation';
import ChooseYourIssues from './ChooseYourIssues';
import MakeYourPlan from './MakeYourPlan';
import ShareYourPledge from './ShareYourPledge';
import About from './About';

import './App.css';

import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedIssues: [],
        plan: {
          // TODO: change these from hard-coded defaults
          'vote-method': 'in-person',
          'bda': 'before',
          'when': 'breakfast'
          // TODO: add date
        }
      }
  }
  getIssueSelection = () => {
    return this.state.selectedIssues;
  }
  getPlan = () => {
    return this.state.plan;
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
  handlePlanSelection = (e, category) => {
    const newSelection = e.target.value;
    let newPlan = this.state.plan;
    newPlan[category] = newSelection;
    this.setState({ plan: newPlan});
  }
  render () {
    return (
      <Router>
        <div>
          {/* Display navigation menu */}
          <Navigation />
          <Switch>
            {/* Set default home page to Choose Your Issues */}
            <Redirect exact from='/' to={routes.CHOOSE_YOUR_ISSUES} />
            
            {/* Render specific pages when routed to */}
            <Route
              exact path={routes.CHOOSE_YOUR_ISSUES}
              render={(props) => <ChooseYourIssues {...props} 
              update={this.handleIssueSelection}
              getSelectedIssues={this.getIssueSelection} />}
            />
            <Route
              exact path={routes.MAKE_YOUR_PLAN}
              render={(props) => <MakeYourPlan {...props}
              update={this.handlePlanSelection}
              getSelectedIssues={this.getIssueSelection} />}
            />
            <Route
              exact path={routes.SHARE_YOUR_PLEDGE}
              render={(props) => <ShareYourPledge {...props} 
              getPlan={this.getPlan}
              getSelectedIssues={this.getIssueSelection} />}
            />
            <Route
              exact path={routes.ABOUT}
              render={(props) => <About {...props} 
              getSelectedIssues={this.getIssueSelection} />}
            />

            {/* TODO: determine if this is actually necessary */}
            {/* Hack: redict 404 error from image download to 
            Share Your Pledge page */}
            {/* <Route 
              render={(props) => <ShareYourPledge {...props} 
              getSelectedIssues={this.getIssueSelection} />}
            /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

