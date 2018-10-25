import React from 'react';
// import { Link } from 'react-router-dom';

import Header from './Header';

// import * as routes from '../constants/routes';

import './About.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                	<p>Lots of stuff about Vote the Issues</p>
                    {/* TODO: Link back to beginning of workflow? */}
                </div>
            </div>
        )
    }
}

export default About;
