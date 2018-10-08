import React from 'react';
import { Link } from 'react-router-dom';

import IssueSelector from './IssueSelector';

import * as routes from '../constants/routes';

// TODO: import this from constants/issues.json
const categoryInfo = {
    'Category 1': [
        'description 1',
        'description 2',
        'description 3'
    ],
    'Category 2': [
        'description 1',
        'description 2',
        'description 3'
    ],
    'Category 3': [
        'description 1',
        'description 2',
        'description 3'
    ]
}

// helped by https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/
class ChooseYourIssues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIssues: []
        }
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

    render() {
        return (
            <div>
                <p>choose your issues page</p>
                {Object.keys(categoryInfo).map(category => {
                    return (
                        <IssueSelector 
                            key={category}
                            category={category}
                            controlFunc={this.handleIssueSelection}
                            selectedOptions={this.state.selectedIssues}
                        />
                    );
                })}
                
                <p><Link to={routes.MAKE_YOUR_PLAN}>Make your plan >>></Link></p>
            </div>
        )
    }
}

export default ChooseYourIssues;