import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import * as routes from '../constants/routes';

import './MakeYourPlan.css';

class MakeYourPlan extends React.Component {
    render() {
        const issues = this.props.getSelectedIssues();
        return (
            <div> 
                <Header activeRoute='make-your-plan' />
                <div className="container plan">
                	<p>Making a concrete plan increases voter turnout by XX%. How are you getting to the polls?</p>
                	<div className="row multi-bar">
	                  <div className="col-xs-4 bar-left"></div>
	                  <div className="col-xs-8 bar-right"></div>
	                </div>
                	<div className="row">
                		<div className="form-group">
                			<p>I'm voting</p>
                			<select className="form-con†rol" id="vote-method">
	        					<option id="person"> in-person </option>
	        					<option id="mail"> by mail </option>
	        				</select>
	        				<select className="form-con†rol" id="bda">
            					<option id="before"> before </option>
            					<option id="during"> during </option>
            					<option id="after"> after </option>
            				</select>
                			<select className="form-con†rol" id="when">
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
                	<div className="row multi-bar">
	                  <div className="col-xs-4 bar-left"></div>
	                  <div className="col-xs-8 bar-right"></div>
	                </div>
	                <div className="col-xs-4">
                        <p>Confirm Rankings</p>
                    </div>
                    <div className="col-xs-8 ranking">
                        <ul className="ml4 js-sortable sortable list flex flex-column list-reset">
                            {issues.map(function(issue, i) {
                                return <li className="p1 mb1 navy bg-yellow" draggable="true" aria-selected="true" role="option" aria-grabbed="false" id={`issue_${i}`}>{issues[i]}</li>
                            })}
                        </ul>
                    </div>
                	<p className="footer"><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge >>></Link></p>
                </div>
            </div>
        )
    }
}

export default MakeYourPlan;