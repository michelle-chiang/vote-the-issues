import React from 'react';

// TODO: get these as props from React Router
let issues = ['asdflkjasdfl', 'hello dere', 'bleh'];

class ShareYourPledge extends React.Component {
    componentDidMount () {
        for (let i = 0; i < issues.length; i++) {
            this.updateCanvas(i);
        }
    }
    updateCanvas (i) {
        let canvas = document.getElementById(`issue_${i}`)
        const ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(issues[i], 30, 30);
    }
    render() {
        return (
            <div>
                <p>instructions here</p>
                {issues.map(function(issue, i) {
                    return (
                        <canvas 
                            key={i}
                            id={`issue_${i}`} 
                            width='200' 
                            height='100' 
                            style={{
                                border: '1px solid #000000'
                            }}>
                        </canvas>
                    )
                })}
            </div>
        )
    }
}

export default ShareYourPledge;