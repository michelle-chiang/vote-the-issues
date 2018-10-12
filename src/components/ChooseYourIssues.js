import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import IssueSelector from './IssueSelector';

import issueData from '../constants/issues';
import * as routes from '../constants/routes';

// helped by https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/
class ChooseYourIssues extends React.Component {
    render() {
        return (
            <div>
                <Header activeRoute='choose-your-issues' />
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
                
                {/* TODO: Re-enable when 'Make Your Plan' page is implemented */}
                {/* <p><Link to={routes.MAKE_YOUR_PLAN}>Make your plan >>></Link></p> */}
                <p><Link to={routes.SHARE_YOUR_PLEDGE}>Share Your Pledge >>></Link></p>
            </div>
        )
    }
}

export default ChooseYourIssues;