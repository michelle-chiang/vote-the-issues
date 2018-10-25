import React from 'react';

import './Header.css';

class Header extends React.Component {
    render() {
        let activeRoute = this.props.activeRoute;
        return (
            <div className='header'>
                <span className={activeRoute === 'choose-your-issues' ? 'active' : ''} id="first">Choose your issues.</span>
                <span className={activeRoute === 'make-your-plan' ? 'active' : ''} id="second">Make your plan.</span>
                <span className={activeRoute === 'share-your-pledge' ? 'active' : ''} id="third">Share your pledge.</span>
            </div>
        )
    }
    
}

export default Header;
