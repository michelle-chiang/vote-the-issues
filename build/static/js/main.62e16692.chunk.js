(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),c=a.n(o),r=(a(22),a(16)),s=a(5),i=a(6),u=a(8),m=a(7),d=a(9),h=a(44),p=a(43),E=a(46),v=a(45),g=a(42),b=(a(24),function(){return l.a.createElement("nav",{className:"navbar navbar-left"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement("span",{className:"navbar-brand"},"#VoteTheIssues")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(g.a,{to:"/choose-your-issues"},"Choose your issues.")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/make-your-plan"},"Make your plan.")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/share-your-pledge"},"Pledge.")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/about"},"About."))))))}),f=(a(28),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.activeRoute;return l.a.createElement("div",{className:"header"},l.a.createElement("span",{className:"choose-your-issues"===e?"active":"",id:"first"},"Choose your issues."),l.a.createElement("span",{className:"make-your-plan"===e?"active":"",id:"second"},"Make your plan."),l.a.createElement("span",{className:"share-your-pledge"===e?"active":"",id:"third"},"Share your pledge."))}}]),t}(l.a.Component)),w=(a(30),{Trump:["Congressional Dems need the power to subpoena this corrupt administration.","...","..."],Conservation:["National monuments are public treasures, not business opportunities for Trump\u2019s mining buddies.","The DoD believes in climate change. So should Congress.","Remember the polar bears? Only Congress can save the Artic National Wildlife Refuge from oil drilling."],"Voting Rights":["It's time for the Voting Rights Act of 2018.","The culture wars are back and we can\u2019t let neo-Nazis gain an inch.","Flint still doesn\u2019t have reliable, lead-free drinking water."],"Hey Congress \u2014 Get Your Act Together!":["Weapons of war have no place in schoolhouse or police stations.","Congress shouldn't ransom undocumented children to buy Trump a wall.","hi 3"],Students:["Education is forever. Student loans shouldn't be.","We marched together. Now it's time to vote together.","..."]}),y=function(e){return l.a.createElement("div",{className:"all-issues"},l.a.createElement("div",{className:"row multi-bar"},l.a.createElement("div",{className:"col-xs-4 bar-left"}),l.a.createElement("div",{className:"col-xs-8 bar-right"})),l.a.createElement("div",{className:"issue-selector"},l.a.createElement("div",{className:"row multi-bar"},l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("label",{className:"category-label"},e.category))),l.a.createElement("div",{className:"checkbox-group"},w[e.category].map(function(t,a){return e.selectedOptions.indexOf(t),l.a.createElement("div",{className:"row",key:"".concat(t,"_row").concat(a)},l.a.createElement("div",{className:"col-xs-8 leftbox"},l.a.createElement("label",{key:t,className:"issue-label"},l.a.createElement("input",{className:"form-checkbox",name:t,onChange:e.controlFunc,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)))}))))},N=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.gtag;"localhost"!==window.location.hostname&&e("config","UA-128119729-1",{page_location:window.location.href,page_path:window.location.pathname})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f,{activeRoute:"choose-your-issues"}),l.a.createElement("div",{className:"container"},Object.keys(w).map(function(t){return l.a.createElement(y,{key:t,category:t,controlFunc:e.props.update,selectedOptions:e.props.getSelectedIssues()})})),l.a.createElement("div",{className:"row multi-bar"},l.a.createElement("div",{className:"col-xs-4 bar-left"}),l.a.createElement("div",{className:"col-xs-8 bar-right"})),l.a.createElement("p",{className:"footer"},l.a.createElement(g.a,{to:"/make-your-plan"},"Make your plan >>>")))}}]),t}(l.a.Component)),k=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.gtag;"localhost"!==window.location.hostname&&e("config","UA-128119729-1",{page_location:window.location.href,page_path:window.location.pathname})}},{key:"render",value:function(){var e=this.props.getSelectedIssues();return l.a.createElement("div",null,l.a.createElement(f,{activeRoute:"make-your-plan"}),l.a.createElement("div",{className:"container plan"},l.a.createElement("p",null,"Making a concrete plan increases voter turnout by XX%. How are you getting to the polls?"),l.a.createElement("div",{className:"row multi-bar"},l.a.createElement("div",{className:"col-xs-4 bar-left"}),l.a.createElement("div",{className:"col-xs-8 bar-right"})),l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"I'm voting")),l.a.createElement("div",{className:"row middle-row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("select",{className:"form-con\u2020rol",id:"vote-method"},l.a.createElement("option",{id:"person"}," in-person "),l.a.createElement("option",{id:"mail"}," by mail "))),l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("select",{className:"form-con\u2020rol",id:"bda"},l.a.createElement("option",{id:"before"}," before "),l.a.createElement("option",{id:"during"}," during "),l.a.createElement("option",{id:"after"}," after "))),l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("select",{className:"form-con\u2020rol",id:"when"},l.a.createElement("option",{id:"breakfast"}," breakfast "),l.a.createElement("option",{id:"lunch"}," lunch "),l.a.createElement("option",{id:"dinner"}," dinner "),l.a.createElement("option",{id:"school"}," school "),l.a.createElement("option",{id:"work"}," work "))))),l.a.createElement("div",{className:"row"},l.a.createElement("p",null," with "),l.a.createElement("input",{type:"text",id:"buddy"})),l.a.createElement("div",{className:"row multi-bar"},l.a.createElement("div",{className:"col-xs-4 bar-left"}),l.a.createElement("div",{className:"col-xs-8 bar-right"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("p",null,"Confirm Rankings")),l.a.createElement("div",{className:"col-xs-8"},l.a.createElement("ul",{className:"sortable",id:"rankings"},e.map(function(t,a){return l.a.createElement("li",{key:a,id:"issue_".concat(a)},e[a])})))),l.a.createElement("p",{className:"footer"},l.a.createElement(g.a,{to:"/share-your-pledge"},"Share your pledge >>>"))),l.a.createElement("script",null,"eval(var el = document.getElementById('rankings'); console.log(el); var sortable = Sortable.create(el);)"))}}]),t}(l.a.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).colorPalette=["#5FD0D4","#FD2E58","#EFA93A","#343D3A","#F1E7DE","#EFA93A","#343D3A","#FD2E58"],a.resolution=1080,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){"localhost"!==window.location.hostname&&(0,window.gtag)("config","UA-128119729-1",{page_location:window.location.href,page_path:window.location.pathname});for(var e=this.props.getSelectedIssues(),t=window.innerWidth,a="".concat(t/e.length-50,"px"),n=0;n<e.length;n++)this.updateCanvas(e[n],a,n)}},{key:"updateCanvas",value:function(e,t,a){var n=document.getElementById("issue_".concat(a));n.width=this.resolution,n.height=this.resolution;var l=n.getContext("2d");l.fillStyle=this.colorPalette[a],l.fillRect(0,0,n.width,n.height),l.fillStyle="white",l.font="italic bold 80px Arial";var o=(n.width-900)/2;!function(e,t,a,n,l,o){for(var c=t.split(" "),r="",s=0;s<c.length;s++){var i=r+c[s]+" ";e.measureText(i).width>l&&s>0?(e.fillText(r,a,n),r=c[s]+" ",n+=o):r=i}e.fillText(r,a,n)}(l,e,o,200,900,100),n.style.width=t,n.style.height=t,n.addEventListener("click",function(t){"localhost"!==window.location.hostname&&(0,window.gtag)("event","download",{event_label:e,event_category:"issue_download"});var l=n.toDataURL("image/jpg"),o=document.getElementById("link_".concat(a));o.setAttribute("download","issue_".concat(a)),o.setAttribute("href",l)})}},{key:"render",value:function(){var e=this.props.getSelectedIssues();return l.a.createElement("div",null,l.a.createElement(f,{activeRoute:"share-your-pledge"}),l.a.createElement("p",null,"Click on each image to download, then share on your favorite social media platform!"),e.map(function(e,t){return l.a.createElement("a",{key:t,id:"link_".concat(t)},l.a.createElement("canvas",{id:"issue_".concat(t)}))}))}}]),t}(l.a.Component),j=(a(36),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Lots of stuff about Vote the Issues")))}}]),t}(l.a.Component)),x=(a(38),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getIssueSelection=function(){return a.state.selectedIssues},a.handleIssueSelection=function(e){var t,n=e.target.value;t=a.state.selectedIssues.indexOf(n)>-1?a.state.selectedIssues.filter(function(e){return e!==n}):Object(r.a)(a.state.selectedIssues).concat([n]),a.setState({selectedIssues:t})},a.state={selectedIssues:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(p.a,{exact:!0,from:"/",to:"/choose-your-issues"}),l.a.createElement(E.a,null,l.a.createElement(v.a,{exact:!0,path:"/choose-your-issues",render:function(t){return l.a.createElement(N,Object.assign({},t,{update:e.handleIssueSelection,getSelectedIssues:e.getIssueSelection}))}}),l.a.createElement(v.a,{exact:!0,path:"/make-your-plan",render:function(t){return l.a.createElement(k,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}}),l.a.createElement(v.a,{exact:!0,path:"/share-your-pledge",render:function(t){return l.a.createElement(O,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}}),l.a.createElement(v.a,{exact:!0,path:"/about",render:function(t){return l.a.createElement(j,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}}),l.a.createElement(v.a,{render:function(t){return l.a.createElement(O,Object.assign({},t,{getSelectedIssues:e.getIssueSelection}))}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.62e16692.chunk.js.map