import React from 'react';

import './Header.css';

class Header extends React.Component {
    render() {
        let activeRoute = this.props.activeRoute;
        return (
            <div className='header'>
                <p className={activeRoute === 'choose-your-issues' ? 'active' : ''} id="first">Choose your issues.</p>
                <p className={activeRoute === 'make-your-plan' ? 'active' : ''} id="second">Make your plan.</p>
                <p className={activeRoute === 'share-your-pledge' ? 'active' : ''} id="third">Share your pledge.</p>
            </div>
        )
    }
    
}

export default Header;
