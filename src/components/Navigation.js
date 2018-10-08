import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.CHOOSE_YOUR_ISSUES}>Choose your issues.</Link></li>
            <li><Link to={routes.MAKE_YOUR_PLAN}>Make your plan.</Link></li>
            <li><Link to={routes.SHARE_YOUR_PLEDGE}>Share your pledge.</Link></li>
        </ul>
        <span>#VoteTheIssues</span>
    </div>

export default Navigation;
