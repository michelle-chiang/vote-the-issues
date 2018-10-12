import React from 'react';

import Header from './Header';

class ShareYourPledge extends React.Component {
    constructor(props) {
        super(props);
        this.colorPalette = ['#5FD0D4', '#FD2E58', '#EFA93A', '#343D3A', '#F1E7DE',  '#EFA93A', '#343D3A', '#FD2E58'];
        this.resolution = 1080;
    }
    componentDidMount () {
        const issues = this.props.getSelectedIssues();

        // Calculate image display size
        // TODO: figure out line breaks?
        const w = window.innerWidth - 50;
        const frameWidth = `${w / issues.length}px`
        
        // Add text to images
        for (let i = 0; i < issues.length; i++) {
            this.updateCanvas(issues[i], frameWidth, i);
        }
    }
    updateCanvas (text, frameWidth, i) {
        // from https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
            var words = text.split(' ');
            var line = '';
            for(var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                    context.fillText(line, x, y);
                    line = words[n] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            context.fillText(line, x, y);
        }
          
        // Create canvas and set resolution
        let canvas = document.getElementById(`issue_${i}`)
        canvas.width = this.resolution;
        canvas.height = this.resolution;

        // Fill in background
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this.colorPalette[i];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw text
        ctx.fillStyle = 'white';
        ctx.font = "italic bold 80px Arial";
        const maxWidth = 900;
        const lineHeight = 100;
        const x = (canvas.width - maxWidth)/2;
        const y = 200;
        wrapText(ctx, text, x, y, maxWidth, lineHeight);

        // Set display size
        canvas.style.width = frameWidth;
        canvas.style.height = frameWidth;   
    }

    downloadImages = (issues) => {
        // Adapted from https://stackoverflow.com/questions/2339440/download-multiple-files-with-a-single-action
        for (var i = 0; i < issues.length; i++) {
            var link = document.createElement('a');
            link.style.display = 'none';
            document.body.appendChild(link);

            link.setAttribute('download', `issue_${i}`);
            var canvas = document.getElementById(`issue_${i}`);
            var imgLink = canvas.toDataURL('image/jpg');
            link.setAttribute('href', imgLink);
            link.click()

            document.body.removeChild(link);
        }
    }

    render() {
        const issues = this.props.getSelectedIssues();
        return (
            <div>
                <Header activeRoute='share-your-pledge' />
                <a id='download' onClick={() => this.downloadImages(issues)}>Download images!<br /></a>
                {issues.map(function(issue, i) {
                    return <canvas key={i} id={`issue_${i}`}></canvas>
                })}
            </div>
        )
    }
}

export default ShareYourPledge;