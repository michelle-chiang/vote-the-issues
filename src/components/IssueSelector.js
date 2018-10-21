import React from 'react';

import './IssueSelector.css';

import issueData from '../constants/issues';

const IssueSelector = (props) => (
  <div className="all-issues">
    <div className="row multi-bar">
      <div className="col-xs-4 bar-left"></div>
      <div className="col-xs-8 bar-right"></div>
    </div>
    <div className='issue-selector'>
      <div className="row multi-bar">
        <div className="col-xs-4">
          <label className='category-label'>{props.category}</label>
        </div>
      </div>
      <div className='checkbox-group'>
        {issueData[props.category].map(function(issue, i) {
          if (props.selectedOptions.indexOf(issue) > -1) {
            // userdata.length = 0;
            // userdata.push({issue});
            // console.log(userdata)
          }
          return (
              <div className="row">
                <div className="col-xs-8 leftbox">
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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  </div>
);

export default IssueSelector;