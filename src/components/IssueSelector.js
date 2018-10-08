import React from 'react';

import './IssueSelector.css';

import issueData from '../constants/issues';

const IssueSelector = (props) => (
  <div className='issue-selector'>
    <label className='category-label'>{props.category}</label>
    <div className='checkbox-group'>
      {issueData[props.category].map(function(issue, i) {
        return (
            <label key={issue} className='issue-label'>
              <input
                className='form-checkbox'
                name={issue}
                onChange={props.controlFunc}
                value={issue}
                checked={props.selectedOptions.indexOf(issue) > -1}
                type='checkbox'
              /> {issue}
            </label>
          );
        })}
    </div>
  </div>
);

export default IssueSelector;