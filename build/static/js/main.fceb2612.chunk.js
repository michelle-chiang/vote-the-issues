(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),l=(a(21),a(15)),o=a(5),i=a(6),u=a(8),m=a(7),d=a(9),h=a(38),p=a(37),v=a(36),y=a(35),E=(a(23),function(){return r.a.createElement("nav",{className:"navbar navbar-left"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("span",{className:"navbar-brand"},"#VoteTheIssues")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(y.a,{to:"/choose-your-issues"},"Choose your issues.")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"/make-your-plan"},"Make your plan.")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"/share-your-pledge"},"Share your pledge."))))))}),b=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.activeRoute;return r.a.createElement("div",{className:"header"},r.a.createElement("p",{className:"choose-your-issues"===e?"active":"",id:"first"},"Choose your issues."),r.a.createElement("p",{className:"make-your-plan"===e?"active":"",id:"second"},"Make your plan."),r.a.createElement("p",{className:"share-your-pledge"===e?"active":"",id:"third"},"Share your pledge."))}}]),t}(r.a.Component)),f=(a(29),{"Category 1":["description 1 that is really really long","description 2","description 3"],"Category 2":["issue 1","issue 2","issue 3"],"Category 3":["hi 1","hi 2","hi 3"]}),g=function(e){return r.a.createElement("div",{className:"issue-selector"},r.a.createElement("label",{className:"category-label"},e.category),r.a.createElement("div",{className:"checkbox-group"},f[e.category].map(function(t,a){return r.a.createElement("label",{key:t,className:"issue-label"},r.a.createElement("input",{className:"form-checkbox",name:t,onChange:e.controlFunc,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)})))},O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{activeRoute:"choose-your-issues"}),Object.keys(f).map(function(t){return r.a.createElement(g,{key:t,category:t,controlFunc:e.props.update,selectedOptions:e.props.getSelectedIssues()})}),r.a.createElement("p",null,r.a.createElement(y.a,{to:"/make-your-plan"},"Make your plan >>>")))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{activeRoute:"make-your-plan"}),r.a.createElement("p",null,r.a.createElement(y.a,{to:"/share-your-pledge"},"Share your pledge >>>")))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).downloadImages=function(e){for(var t=0;t<e.length;t++){var a=document.createElement("a");a.style.display="none",document.body.appendChild(a),a.setAttribute("download","issue_".concat(t));var n=document.getElementById("issue_".concat(t)).toDataURL("image/jpg");a.setAttribute("href",n),a.click(),document.body.removeChild(a)}},a.colorPalette=["#5FD0D4","#FD2E58","#EFA93A","#343D3A","#F1E7DE","#EFA93A","#343D3A","#FD2E58"],a.resolution=1080,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=this.props.getSelectedIssues(),t=window.innerWidth-50,a="".concat(t/e.length,"px"),n=0;n<e.length;n++)this.updateCanvas(e[n],a,n)}},{key:"updateCanvas",value:function(e,t,a){var n=document.getElementById("issue_".concat(a));n.width=this.resolution,n.height=this.resolution;var r=n.getContext("2d");r.fillStyle=this.colorPalette[a],r.fillRect(0,0,n.width,n.height),r.fillStyle="white",r.font="italic bold 80px Arial";!function(e,t,a,n,r,c){for(var s=t.split(" "),l="",o=0;o<s.length;o++){var i=l+s[o]+" ";e.measureText(i).width>r&&o>0?(e.fillText(l,a,n),l=s[o]+" ",n+=c):l=i}e.fillText(l,a,n)}(r,e,(n.width-900)/2,200,900,100),n.style.width=t,n.style.height=t}},{key:"render",value:function(){var e=this,t=this.props.getSelectedIssues();return r.a.createElement("div",null,r.a.createElement(b,{activeRoute:"share-your-pledge"}),r.a.createElement("a",{id:"download",onClick:function(){return e.downloadImages(t)}},"Download images!",r.a.createElement("br",null)),t.map(function(e,t){return r.a.createElement("canvas",{key:t,id:"issue_".concat(t)})}))}}]),t}(r.a.Component),w=(a(31),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getIssueSelection=function(){return a.state.selectedIssues},a.handleIssueSelection=function(e){var t,n=e.target.value;t=a.state.selectedIssues.indexOf(n)>-1?a.state.selectedIssues.filter(function(e){return e!==n}):Object(l.a)(a.state.selectedIssues).concat([n]),a.setState({selectedIssues:t})},a.state={selectedIssues:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(p.a,{from:"/",exact:!0,to:"/choose-your-issues"}),r.a.createElement(v.a,{exact:!0,path:"/choose-your-issues",render:function(t){return r.a.createElement(O,Object.assign({},t,{update:e.handleIssueSelection,getSelectedIssues:e.getIssueSelection}))}}),r.a.createElement(v.a,{exact:!0,path:"/make-your-plan",render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(v.a,{exact:!0,path:"/share-your-pledge",render:function(t){return r.a.createElement(k,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.fceb2612.chunk.js.map