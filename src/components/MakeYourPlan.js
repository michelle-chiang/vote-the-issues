import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import * as routes from '../constants/routes';

class MakeYourPlan extends React.Component {
    render() {
        return (
            <div> 
                <Header activeRoute='make-your-plan' />
                <p><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge >>></Link></p>
            </div>
        )
    }
}

export default MakeYourPlan;