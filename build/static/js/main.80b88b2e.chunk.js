(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(22),a(13)),o=a(16),i=a(4),u=a(5),m=a(7),d=a(6),p=a(8),E=a(45),h=a(44),v=a(43),b=a(42),f=(a(24),function(){return r.a.createElement("nav",{className:"navbar navbar-left"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("span",{className:"navbar-brand"},"#VoteTheIssues")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/choose-your-issues"},"Pledge.")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/make-your-plan"},"Make your plan.")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/about"},"About."))))))}),g=(a(28),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.activeRoute;return r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"choose-your-issues"===e?"active":"",id:"first"},"Choose your issues."),r.a.createElement("span",{className:"make-your-plan"===e?"active":"",id:"second"},"Make your plan."),r.a.createElement("span",{className:"share-your-pledge"===e?"active":"",id:"third"},"Share your pledge."))}}]),t}(r.a.Component)),y=(a(30),{Trump:["Congressional Dems need the power to subpoena this corrupt administration.","...","..."],Conservation:["National monuments are public treasures, not business opportunities for Trump\u2019s mining buddies.","The DoD believes in climate change. So should Congress.","Remember the polar bears? Only Congress can save the Artic National Wildlife Refuge from oil drilling."],"Voting Rights":["It's time for the Voting Rights Act of 2018.","The culture wars are back and we can\u2019t let neo-Nazis gain an inch.","Flint still doesn\u2019t have reliable, lead-free drinking water."],"Hey Congress \u2014 Get Your Act Together!":["Weapons of war have no place in schoolhouse or police stations.","Congress shouldn't ransom undocumented children to buy Trump a wall.","hi 3"],Students:["Education is forever. Student loans shouldn't be.","We marched together. Now it's time to vote together.","..."]}),N=function(e){return r.a.createElement("div",{className:"all-issues"},r.a.createElement("div",{className:"row multi-bar"},r.a.createElement("div",{className:"col-xs-4 bar-left"}),r.a.createElement("div",{className:"col-xs-8 bar-right"})),r.a.createElement("div",{className:"issue-selector"},r.a.createElement("div",{className:"row multi-bar"},r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("label",{className:"category-label"},e.category))),r.a.createElement("div",{className:"checkbox-group"},y[e.category].map(function(t,a){return e.selectedOptions.indexOf(t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-8 leftbox"},r.a.createElement("label",{key:t,className:"issue-label"},r.a.createElement("input",{className:"form-checkbox",name:t,onChange:e.controlFunc,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)))}))))},w=(a(32),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{activeRoute:"choose-your-issues"}),r.a.createElement("div",{className:"container"},Object.keys(y).map(function(t){return r.a.createElement(N,{key:t,category:t,controlFunc:e.props.update,selectedOptions:e.props.getSelectedIssues()})})),r.a.createElement("div",{className:"row multi-bar"},r.a.createElement("div",{className:"col-xs-4 bar-left"}),r.a.createElement("div",{className:"col-xs-8 bar-right"})),r.a.createElement("p",{className:"footer"},r.a.createElement(b.a,{to:"/make-your-plan"},"Make your plan >>>")))}}]),t}(r.a.Component)),O=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.getSelectedIssues();return r.a.createElement("div",null,r.a.createElement(g,{activeRoute:"make-your-plan"}),r.a.createElement("div",{className:"container plan"},r.a.createElement("p",null,"Making a concrete plan increases voter turnout by XX%. How are you getting to the polls?"),r.a.createElement("div",{className:"row multi-bar"},r.a.createElement("div",{className:"col-xs-4 bar-left"}),r.a.createElement("div",{className:"col-xs-8 bar-right"})),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"I'm voting")),r.a.createElement("div",{className:"row middle-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("select",{className:"form-con\u2020rol",id:"vote-method"},r.a.createElement("option",{id:"person"}," in-person "),r.a.createElement("option",{id:"mail"}," by mail "))),r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("select",{className:"form-con\u2020rol",id:"bda"},r.a.createElement("option",{id:"before"}," before "),r.a.createElement("option",{id:"during"}," during "),r.a.createElement("option",{id:"after"}," after "))),r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("select",{className:"form-con\u2020rol",id:"when"},r.a.createElement("option",{id:"breakfast"}," breakfast "),r.a.createElement("option",{id:"lunch"}," lunch "),r.a.createElement("option",{id:"dinner"}," dinner "),r.a.createElement("option",{id:"school"}," school "),r.a.createElement("option",{id:"work"}," work "))))),r.a.createElement("div",{className:"row"},r.a.createElement("p",null," with "),r.a.createElement("input",{type:"text",id:"buddy"})),r.a.createElement("div",{className:"row multi-bar"},r.a.createElement("div",{className:"col-xs-4 bar-left"}),r.a.createElement("div",{className:"col-xs-8 bar-right"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("p",null,"Confirm Rankings")),r.a.createElement("div",{className:"col-xs-8"},r.a.createElement("ul",{className:"sortable",id:"rankings"},e.map(function(t,a){return r.a.createElement("li",{id:"issue_".concat(a)},e[a])})))),r.a.createElement("p",{className:"footer"},r.a.createElement(b.a,{to:"/share-your-pledge"},"Share your pledge >>>"))),r.a.createElement("script",null,"eval(var el = document.getElementById('rankings'); console.log(el); var sortable = Sortable.create(el);)"))}}]),t}(r.a.Component)),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).downloadImages=function(e){for(var t=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS"),n=0;n<e.length;n++){var r=document.getElementById("issue_".concat(n)).toDataURL("image/jpg");if(t)console.log("isSafari"),a.openTab(r);else{var l=document.createElement("a");l.style.display="none",document.body.appendChild(l),l.setAttribute("download","issue_".concat(n)),l.setAttribute("href",r),l.click(),document.body.removeChild(l)}}},a.colorPalette=["#5FD0D4","#FD2E58","#EFA93A","#343D3A","#F1E7DE","#EFA93A","#343D3A","#FD2E58"],a.resolution=1080,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=this.props.getSelectedIssues(),t=window.innerWidth-50,a="".concat(t/e.length,"px"),n=0;n<e.length;n++)this.updateCanvas(e[n],a,n)}},{key:"openTab",value:function(e){var t=window.document.createElement("a");t.target="_blank",t.href=e;var a=window.document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}},{key:"updateCanvas",value:function(e,t,a){var n=document.getElementById("issue_".concat(a));n.width=this.resolution,n.height=this.resolution;var r=n.getContext("2d");r.fillStyle=this.colorPalette[a],r.fillRect(0,0,n.width,n.height),r.fillStyle="white",r.font="italic bold 80px Arial";!function(e,t,a,n,r,l){for(var c=t.split(" "),s="",o=0;o<c.length;o++){var i=s+c[o]+" ";e.measureText(i).width>r&&o>0?(e.fillText(s,a,n),s=c[o]+" ",n+=l):s=i}e.fillText(s,a,n)}(r,e,(n.width-900)/2,200,900,100),n.style.width=t,n.style.height=t}},{key:"render",value:function(){var e=this,t=this.props.getSelectedIssues();return r.a.createElement("div",null,r.a.createElement(g,{activeRoute:"share-your-pledge"}),r.a.createElement("a",{id:"download",onClick:function(){return e.downloadImages(t)}},"Download images!",r.a.createElement("br",null)),t.map(function(e,t){return r.a.createElement("canvas",{key:t,id:"issue_".concat(t)})}))}}]),t}(r.a.Component),x=(a(36),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Lots of stuff about Vote the Issues")))}}]),t}(r.a.Component)),j=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getIssueSelection=function(){return a.state.selectedIssues},a.handleIssueSelection=function(e){var t,n=e.target.value;t=a.state.selectedIssues.indexOf(n)>-1?a.state.selectedIssues.filter(function(e){return e!==n}):Object(o.a)(a.state.selectedIssues).concat([n]),a.setState({selectedIssues:t})},a.state={selectedIssues:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(h.a,(e={exact:!0,from:"/"},Object(s.a)(e,"exact",!0),Object(s.a)(e,"to","/choose-your-issues"),e)),r.a.createElement(v.a,{exact:!0,path:"/choose-your-issues",render:function(e){return r.a.createElement(w,Object.assign({},e,{update:t.handleIssueSelection,getSelectedIssues:t.getIssueSelection}))}}),r.a.createElement(v.a,{exact:!0,path:"/make-your-plan",render:function(e){return r.a.createElement(O,Object.assign({},e,{getSelectedIssues:t.getIssueSelection}))}}),r.a.createElement(v.a,{exact:!0,path:"/share-your-pledge",render:function(e){return r.a.createElement(k,Object.assign({},e,{getSelectedIssues:t.getIssueSelection}))}}),r.a.createElement(v.a,{exact:!0,path:"/about",render:function(e){return r.a.createElement(x,Object.assign({},e,{getSelectedIssues:t.getIssueSelection}))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.80b88b2e.chunk.js.map