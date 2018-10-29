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
                	 <b>WHAT WE’RE ALL ABOUT</b>

                    <p>Pundits deride single-issue voters. Yet voting on the issues is the best way to reduce toxic partisanship, increase crucial voter turnout, and remind our elected officials that they should get back to governing.</p>

<p> When you vote for Congress, you’re voting for much more than just a candidate — you’re also making a decision on crucial issues facing America today.</p>

<p> Browse the issues and then make a pledge to tell your friends you’re voting on the issues on November 6th.</p>


<b>WHAT WE BELIEVE</b>

<p><i>A growing share of young Americans are not identifying with a party — and that’s okay.</i> But we can’t let political disillusionment overcome our sense of agency. Our elected officials need to know that we see through the circus and want results on the issues that matter.</p>

<p><i>Voting should be a communal activity.</i> Government works best when we can hold politicians responsible for the needs of our whole community. Share your vote pledge on social media -- and then tell your friends over lunch what the heck is going on with that state proposition you heard about in the news.</p>

<p><i>Data we collect about you: none.</i> Your online data should remain private. Unlike most vote pledge platforms, we’re not run by a candidate or a campaign, and we’re not trying to convince you to give us money. </p>

<b>WHO WE ARE</b>

<p>VoteTheIssues was created by three Harvard undergrads who weren’t ready to sit out this election. We want to turn Americans into civic actors, starting with our peers.</p>


<b>COMMENTS?</b>

<p>We’re not party-affiliated, but that doesn’t mean we’re not political. Sorry. (Not sorry.)</p>
<p>Is there any issue you don’t see? <a href="mailto:contactvotetheissues@gmail.com">Let us know about it!</a></p>
<p>We put effort into building this, and we appreciate any fan mail you want to send our way. Tag us on Instagram <a href="https://www.instagram.com/votetheissues/">@votetheissues.</a></p>

            
            
            
                    {/* TODO: Link back to beginning of workflow? */}
                </div>
            </div>
        )
    }
}

export default About;
