import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import * as routes from '../constants/routes';

import './MakeYourPlan.css';

class MakeYourPlan extends React.Component {
    render() {
        return (
            <div> 
                <Header activeRoute='make-your-plan' />
                <div class="container plan">
                	<p>Making a concrete plan increases voter turnout by XX%. How are you getting to the polls?</p>
                	<div class="row multi-bar">
	                  <div class="col-xs-4 bar-left"></div>
	                  <div class="col-xs-8 bar-right"></div>
	                </div>
                	<div class="row">
                		<div class="form-group">
                			<p>I'm voting</p>
                			<select class="form-con†rol" id="vote-method">
	        					<option id="person"> in-person </option>
	        					<option id="mail"> by mail </option>
	        				</select>
	        				<select class="form-con†rol" id="bda">
            					<option id="before"> before </option>
            					<option id="during"> during </option>
            					<option id="after"> after </option>
            				</select>
                			<select class="form-con†rol" id="when">
            					<option id="breakfast"> breakfast </option>
            					<option id="lunch"> lunch </option>
            					<option id="dinner"> dinner </option>
            					<option id="school"> school </option>
            					<option id="work"> work </option>
            				</select>
            				<p> with </p>
            				<input type="text" id="buddy"></input>
                		</div>
                	</div>
                	<div class="row multi-bar">
	                  <div class="col-xs-4 bar-left"></div>
	                  <div class="col-xs-8 bar-right"></div>
	                </div>
	                
                	<p class="footer"><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge >>></Link></p>
                </div>
            </div>
        )
    }
}

export default MakeYourPlan;