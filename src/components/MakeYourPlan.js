import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import * as routes from '../constants/routes';

import './MakeYourPlan.css';

class MakeYourPlan extends React.Component {
    componentDidMount () {
        // Send page hit to Google Analytics
        const gtag = window.gtag;
        if (window.location.hostname !== 'localhost') {
            gtag('config', 'UA-128119729-1', {
                'page_location': window.location.href,
                'page_path': window.location.pathname,
            });
        };
    }
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
                        <p>I'm voting</p>
                    </div>
                    <div className="row middle-row">
                		<div className="form-group">
                            <div className="col-xs-4">
                            <select 
                                className="form-con†rol" 
                                id="vote-method"
                                onChange={(e) => this.props.update(e, "vote-method")}
                            >
	        					<option id="person"> in-person </option>
	        					<option id="mail"> by mail </option>
	        				</select>
                            </div>
                            <div className="col-xs-4">
                            <select 
                                className="form-con†rol" 
                                id="bda"
                                onChange={(e) => this.props.update(e, "bda")}
                            >
            					<option id="before"> before </option>
            					<option id="during"> during </option>
            					<option id="after"> after </option>
            				</select>
                            </div>
                            <div className="col-xs-4">
                            <select 
                                className="form-con†rol" 
                                id="when"
                                onChange={(e) => this.props.update(e, "when")}
                            >
            					<option id="breakfast"> breakfast </option>
            					<option id="lunch"> lunch </option>
            					<option id="dinner"> dinner </option>
            					<option id="school"> school </option>
            					<option id="work"> work </option>
            				</select>
                            </div>
                        </div>
                    </div>
                    {/* TODO: replace with "on" and date picker */}
                    {/* <div className="row">
        				<p> with </p>
        				<input type="text" id="buddy"></input>
            		</div> */}
                	<div className="row multi-bar">
	                  <div className="col-xs-4 bar-left"></div>
	                  <div className="col-xs-8 bar-right"></div>
	                </div>
                    <div className="row">
    	                <div className="col-xs-4">
                            <p>Confirm Issues</p>
                        </div>
                        <div className="col-xs-8">
                            <ul className="sortable" id="rankings">
                                {issues.map(function(issue, i) {
                                    return <li key={i} id={`issue_${i}`}>{issues[i]}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                	<p className="footer"><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge >>></Link></p>
                </div>
            {/* TODO (Michelle): verify that this and html5sortable package can be removed */}
            {/* <script>
                eval(var el = document.getElementById('rankings');
                console.log(el);
                var sortable = Sortable.create(el);)
            </script> */}
        </div>
        )
    }
}

export default MakeYourPlan;