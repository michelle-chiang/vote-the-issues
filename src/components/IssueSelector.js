import React from 'react';

// TODO: import this from constants/issues.json
const categoryInfo = {
    'Category 1': [
        'description 1',
        'description 2',
        'description 3'
    ],
    'Category 2': [
        'issue 1',
        'issue 2',
        'issue 3'
    ],
    'Category 3': [
        'hi 1',
        'hi 2',
        'hi 3'
    ]
}

const IssueSelector = (props) => (
    <div>
        <label className='category-label'>{props.category}</label>
        <div className='checkbox-group'>
            {categoryInfo[props.category].map(issue => {
                return (
                    <label key={props.category} className='issue-label'>
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