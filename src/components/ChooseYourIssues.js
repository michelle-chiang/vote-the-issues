import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import IssueSelector from './IssueSelector';

import issueData from '../constants/issues';
import * as routes from '../constants/routes';

import './ChooseYourIssues.css';


// helped by https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/
class ChooseYourIssues extends React.Component {
    render() {
        return (
            <div>
                <Header activeRoute='choose-your-issues' />
                <div className="container">
                    {Object.keys(issueData).map(category => {
                        return (
                            <IssueSelector 
                                key={category}
                                category={category}
                                controlFunc={this.props.update}
                                selectedOptions={this.props.getSelectedIssues()}
                            />
                        );
                    })}    
                </div>
                <div className="row multi-bar">
                  <div className="col-xs-4 bar-left"></div>
                  <div className="col-xs-8 bar-right"></div>
                </div>
                <p className="footer"><Link to={routes.MAKE_YOUR_PLAN}>Make your plan >>></Link></p>
            </div>
        )
    }
}

export default ChooseYourIssues;