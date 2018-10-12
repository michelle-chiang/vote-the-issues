import React from 'react';

import './IssueSelector.css';

import issueData from '../constants/issues';

const IssueSelector = (props) => (
  <div className='issue-selector'>
    <hr class = "multi-bar"></hr>
    <div class="row">
      <div class="col-xs-4 bar-left"></div>
      <div class="col-xs-8 bar-right"></div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label className='category-label'>{props.category}</label>
      </div>
    </div>
    <div className='checkbox-group'>
      {issueData[props.category].map(function(issue, i) {
        return (
            <div class="row">
              <div class="col-xs-8 leftbox">
                <label key={issue} className='issue-label '>
                  <input
                    className='form-checkbox'
                    name={issue}
                    onChange={props.controlFunc}
                    value={issue}
                    checked={props.selectedOptions.indexOf(issue) > -1}
                    type='checkbox'
                    class='rounded-check'
                  /> {issue}
                </label>
              </div>
            </div>
          );
        })}
    </div>
  </div>
);

export default IssueSelector;