(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),l=(a(21),a(15)),o=a(5),u=a(6),i=a(8),h=a(7),m=a(9),d=a(36),p=a(35),y=a(34),f=a(33),E=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.a,{to:"/choose-your-issues"},"Choose your issues.")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/make-your-plan"},"Make your plan.")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/share-your-pledge"},"Share your pledge."))),r.a.createElement("span",null,"#VoteTheIssues"))},v=(a(25),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.activeRoute;return r.a.createElement("div",{className:"header"},r.a.createElement("p",{className:"choose-your-issues"===e?"active":""},"Choose your issues."),r.a.createElement("p",{className:"make-your-plan"===e?"active":""},"Make your plan."),r.a.createElement("p",{className:"share-your-pledge"===e?"active":""},"Share your pledge."))}}]),t}(r.a.Component)),g=(a(27),{"Category 1":["description 1 that is really really long","description 2","description 3"],"Category 2":["issue 1","issue 2","issue 3"],"Category 3":["hi 1","hi 2","hi 3"]}),b=function(e){return r.a.createElement("div",{className:"issue-selector"},r.a.createElement("label",{className:"category-label"},e.category),r.a.createElement("div",{className:"checkbox-group"},g[e.category].map(function(t,a){return r.a.createElement("label",{key:t,className:"issue-label"},r.a.createElement("input",{className:"form-checkbox",name:t,onChange:e.controlFunc,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)})))},O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{activeRoute:"choose-your-issues"}),Object.keys(g).map(function(t){return r.a.createElement(b,{key:t,category:t,controlFunc:e.props.update,selectedOptions:e.props.getSelectedIssues()})}),r.a.createElement("p",null,r.a.createElement(f.a,{to:"/make-your-plan"},"Make your plan >>>")))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{activeRoute:"make-your-plan"}),r.a.createElement("p",null,r.a.createElement(f.a,{to:"/share-your-pledge"},"Share your pledge >>>")))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).colorPalette=["#5FD0D4","#FD2E58","#EFA93A","#343D3A","#F1E7DE","#EFA93A","#343D3A","#FD2E58"],a.resolution=1080,a.frameWidth="300px",a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=this.props.getSelectedIssues(),t=0;t<e.length;t++)this.updateCanvas(e[t],t)}},{key:"updateCanvas",value:function(e,t){var a=document.getElementById("issue_".concat(t));a.width=this.resolution,a.height=this.resolution;var n=a.getContext("2d");n.fillStyle=this.colorPalette[t],n.fillRect(0,0,a.width,a.height),n.fillStyle="white",n.font="italic bold 80px Arial";!function(e,t,a,n,r,c){for(var s=t.split(" "),l="",o=0;o<s.length;o++){var u=l+s[o]+" ";e.measureText(u).width>r&&o>0?(e.fillText(l,a,n),l=s[o]+" ",n+=c):l=u}e.fillText(l,a,n)}(n,e,(a.width-900)/2,200,900,100),a.style.width=this.frameWidth,a.style.height=this.frameWidth}},{key:"render",value:function(){var e=this.props.getSelectedIssues();return r.a.createElement("div",null,r.a.createElement(v,{activeRoute:"share-your-pledge"}),r.a.createElement("p",null,"instructions here"),e.map(function(e,t){return r.a.createElement("canvas",{key:t,id:"issue_".concat(t)})}))}}]),t}(r.a.Component),I=(a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).getIssueSelection=function(){return a.state.selectedIssues},a.handleIssueSelection=function(e){var t,n=e.target.value;t=a.state.selectedIssues.indexOf(n)>-1?a.state.selectedIssues.filter(function(e){return e!==n}):Object(l.a)(a.state.selectedIssues).concat([n]),a.setState({selectedIssues:t})},a.state={selectedIssues:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(p.a,{from:"/",exact:!0,to:"/choose-your-issues"}),r.a.createElement(y.a,{exact:!0,path:"/choose-your-issues",render:function(t){return r.a.createElement(O,Object.assign({},t,{update:e.handleIssueSelection,getSelectedIssues:e.getIssueSelection}))}}),r.a.createElement(y.a,{exact:!0,path:"/make-your-plan",render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(y.a,{exact:!0,path:"/share-your-pledge",render:function(t){return r.a.createElement(k,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.56c1ae57.chunk.js.map