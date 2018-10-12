import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

import './Navigation.css';

const Navigation = () =>
    <nav class="navbar navbar-left">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span> 
	      </button>
	      <span class="navbar-brand">#VoteTheIssues</span>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav">
	        <li><Link to={routes.CHOOSE_YOUR_ISSUES}>Choose your issues.</Link></li>
	        <li><Link to={routes.MAKE_YOUR_PLAN}>Make your plan.</Link></li> 
	        <li><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge.</Link></li> 
	      </ul>
	    </div>
	  </div>
	</nav>

export default Navigation;
