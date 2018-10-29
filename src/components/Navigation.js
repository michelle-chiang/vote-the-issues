import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

import './Navigation.css';

const Navigation = () =>
  <nav className="navbar navbar-left">
	  <div className="container-fluid">
	    <div className="navbar-header">
	      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span> 
	      </button>
	      <span className="navbar-brand">#VoteTheIssues</span>
	    </div>
	    <div className="collapse navbar-collapse" id="myNavbar">
	      <ul className="nav navbar-nav">
					<li><Link to={routes.CHOOSE_YOUR_ISSUES}>Choose.</Link></li>
	        <li><Link to={routes.MAKE_YOUR_PLAN}>Plan.</Link></li> 
	        <li><Link to={routes.SHARE_YOUR_PLEDGE}>Pledge.</Link></li>
	        <li><Link to={routes.ABOUT}>About.</Link></li> 
	      </ul>
	    </div>
	  </div>
	</nav>

export default Navigation;
