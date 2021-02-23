(this.webpackJsonprenterwebapi=this.webpackJsonprenterwebapi||[]).push([[0],{40:function(e,t,n){e.exports=n(63)},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=n(16),i=n(7),u=n(8),s=n(11),m=n(10),d=n(4),p=n(65),f=n(17),h=n(64),b=n(66),g=n(67),v=n(70),E=n(68),y=n(69),w=(n(46),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleNavbar=a.toggleNavbar.bind(Object(f.a)(a)),a.state={collapsed:!0},a}return Object(u.a)(n,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(h.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(p.a,null,r.a.createElement(b.a,{tag:o.b,to:"/"},"Renter Insurance Application"),r.a.createElement(g.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(v.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(E.a,null,r.a.createElement(y.a,{tag:o.b,className:"text-dark",to:"/"},"Home")),r.a.createElement(E.a,null,r.a.createElement(y.a,{tag:o.b,className:"text-dark",to:"/counter"},"Counter")),r.a.createElement(E.a,null,r.a.createElement(y.a,{tag:o.b,className:"text-dark",to:"/fetch-data"},"Fetch data")),r.a.createElement(E.a,null,r.a.createElement(y.a,{tag:o.b,className:"text-dark",to:"/insurance"},"Insurance application")))))))}}]),n}(a.Component));w.displayName=w.name;var O=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(p.a,null,this.props.children))}}]),n}(a.Component);O.displayName=O.name;var C=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Renter Insurance Application"),r.a.createElement("p",null,"A single-page application hosts by Azure cloud, built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://get.asp.net/"},"ASP.NET Core")," and ",r.a.createElement("a",{href:"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"},"C#")," for cross-platform server-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," for client-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://getbootstrap.com/"},"Bootstrap")," for layout and styling")),r.a.createElement("p",null,"To help you get started, we have also set up:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Client-side navigation"),". For example, click ",r.a.createElement("em",null,"Counter")," then ",r.a.createElement("em",null,"Back")," to return here."),r.a.createElement("li",null,r.a.createElement("strong",null,"Development server integration"),". In development mode, the development server from ",r.a.createElement("code",null,"create-react-app")," runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file."),r.a.createElement("li",null,r.a.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",r.a.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",r.a.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",r.a.createElement("code",null,"npm")," commands such as ",r.a.createElement("code",null,"npm test")," or ",r.a.createElement("code",null,"npm install"),"."))}}]),n}(a.Component);C.displayName=C.name;var k=n(12),N=n.n(k),j=n(15),I=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={forecasts:[],loading:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):n.renderForecastsTable(this.state.forecasts);return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),r.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(j.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({forecasts:n,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return r.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temp. (C)"),r.a.createElement("th",null,"Temp. (F)"),r.a.createElement("th",null,"Summary"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.date},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.temperatureC),r.a.createElement("td",null,e.temperatureF),r.a.createElement("td",null,e.summary))}))))}}]),n}(a.Component);I.displayName=I.name;var x,P=n(23),S=n(34),T=n(35),D=n(27),R=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={renterItems:[],newItemName:"",newItemValue:100,newItemCategory:"",newRenterName:"",loading:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.populateInsuranceData()}},{key:"addItem",value:function(){var e=this;this.actOnData("POST","insurance/",{category:this.state.newItemCategory,itemName:this.state.newItemName,itemValue:this.state.newItemValue,renterName:this.state.newRenterName}).then((function(t){e.props.reloadData(t),e.setState({renterItems:t})}))}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):this.renderItemsTable(this.state.renterItems);return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"Insured Personal Items"),e)}},{key:"renderItemsTable",value:function(e){var t=this,n={margin:"5px"};return r.a.createElement("div",null," ",r.a.createElement("label",{htmlFor:"newRenterName"},"Renter Name "),r.a.createElement("input",{type:"text",id:"newRenterName",value:this.state.newRenterName,style:n,onChange:function(e){return t.setState({newRenterName:e.target.value})}}),r.a.createElement("label",{htmlFor:"newItemCategory"},"Item Category "),r.a.createElement("input",{type:"text",id:"newItemCategory",value:this.state.newItemCategory,style:n,onChange:function(e){return t.setState({newItemCategory:e.target.value})}}),r.a.createElement("label",{htmlFor:"newItemName"},"Item Name "),r.a.createElement("input",{type:"text",id:"newItemName",value:this.state.newItemName,style:n,onChange:function(e){return t.setState({newItemName:e.target.value})}}),r.a.createElement("label",{htmlFor:"newItemValue"},"Item Value "),r.a.createElement("input",{type:"number",id:"newItemValue",min:"100",max:"5000",step:"50",style:n,value:this.state.newItemValue,onChange:function(e){return t.setState({newItemValue:e.target.value})}}),r.a.createElement("input",{type:"button",value:"Add new Item",onClick:function(e){return t.addItem()}}))}},{key:"populateInsuranceData",value:function(){var e=Object(j.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("insurance");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({renterItems:n,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"actOnData",value:function(){var e=Object(j.a)(N.a.mark((function e(){var t,n,a,r,l=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"POST",n=l.length>1&&void 0!==l[1]?l[1]:"",a=l.length>2&&void 0!==l[2]?l[2]:{},e.next=5,fetch(n,{method:t,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.a.Component),V=T.a.div(x||(x=Object(S.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n\n      input {\n        font-size: 1rem;\n        padding: 0;\n        margin: 0;\n        border: 0;\n      }\n    }\n  }\n\n  .pagination {\n    padding: 0.5rem;\n  }\n"]))),F={Cell:function(e){var t=e.value,n=e.row,a=e.column,l=e.updateMyData,c=e.deleteOneObject,o=r.a.useState(t),i=Object(P.a)(o,2),u=i[0],s=i[1];r.a.useEffect((function(){s(t)}),[t]);var m=e.column.Header;if("Delete"!==m){return["Category"].includes(m)?r.a.createElement("div",null,u):r.a.createElement("input",{value:u,onChange:function(e){return s(e.target.value)},onBlur:function(){l(n,a,u,e.row.original._id)}})}return r.a.createElement("input",{type:"button",value:"delete",onClick:function(){c(e.row.original._id)}})}};function H(e){var t=e.columns,n=e.data,a=e.updateMyData,l=e.skipPageReset,c=e.deleteOneObject,o=Object(D.useTable)({columns:t,data:n,defaultColumn:F,autoResetPage:!l,updateMyData:a,deleteOneObject:c},D.usePagination),i=o.getTableProps,u=o.getTableBodyProps,s=o.headerGroups,m=o.prepareRow,d=o.page,p=o.canPreviousPage,f=o.canNextPage,h=o.pageOptions,b=o.pageCount,g=o.gotoPage,v=o.nextPage,E=o.previousPage,y=o.setPageSize,w=o.state,O=w.pageIndex,C=w.pageSize;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",i(),r.a.createElement("thead",null,s.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",u(),d.map((function(e,t){return m(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:function(){return g(0)},disabled:!p},"<<")," ",r.a.createElement("button",{onClick:function(){return E()},disabled:!p},"<")," ",r.a.createElement("button",{onClick:function(){return v()},disabled:!f},">")," ",r.a.createElement("button",{onClick:function(){return g(b-1)},disabled:!f},">>")," ",r.a.createElement("span",null,"Page"," ",r.a.createElement("strong",null,O+1," of ",h.length)," "),r.a.createElement("span",null,"| Go to page:"," ",r.a.createElement("input",{type:"number",defaultValue:O+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;g(t)},style:{width:"100px"}}))," ",r.a.createElement("select",{value:C,onChange:function(e){y(Number(e.target.value))}},[5,10,20,30,40,50].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)})))))}function A(e){return e.map((function(e){return{_id:e._id,renterName:e.renterName,itemName:e.itemName,itemValue:e.itemValue,category:e.category}}))}function L(){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(N.a.mark((function e(){var t,n,a,r,l=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"POST",n=l.length>1&&void 0!==l[1]?l[1]:"",a=l.length>2&&void 0!==l[2]?l[2]:{},e.next=5,fetch(n,{method:t,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=r.a.useMemo((function(){return[{Header:"Renter Name",accessor:"renterName"},{Header:"Category",accessor:"category"},{Header:"Item Name",accessor:"itemName"},{Header:"Item Value",accessor:"itemValue"},{Header:"Delete"}]}),[]),t=r.a.useState([]),n=Object(P.a)(t,2),a=n[0],l=n[1],c=r.a.useState(!1),o=Object(P.a)(c,2),i=o[0],u=o[1];return r.a.useEffect((function(){u(!1)}),[a]),r.a.useEffect((function(){function e(){return(e=Object(j.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("insurance");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(A(n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(R,{reloadData:function(e){return l(A(e))}}),r.a.createElement("br",null),r.a.createElement("h4",null,"Hint: click table cell to edit its value"),r.a.createElement(V,null,r.a.createElement(H,{columns:e,data:a,updateMyData:function(e,t,n,r){u(!0);var c=a.find((function(e){return e._id===r}));c&&t&&t.id&&c[t.id]&&c[t.id]!==n&&(c[t.id]=n,L("POST","insurance/",c).then((function(e){l(A(e))})))},deleteOneObject:function(e){u(!0),L("DELETE","insurance/item/".concat(e)).then((function(e){l(A(e))}))},skipPageReset:i})))},W=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={currentCount:0},a.incrementCounter=a.incrementCounter.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"This is a simple example of a React component."),r.a.createElement("p",{"aria-live":"polite"},"Current count: ",r.a.createElement("strong",null,this.state.currentCount)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),n}(a.Component);W.displayName=W.name;n(62);var J=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(d.a,{exact:!0,path:"/",component:C}),r.a.createElement(d.a,{path:"/counter",component:W}),r.a.createElement(d.a,{path:"/fetch-data",component:I}),r.a.createElement(d.a,{path:"/insurance",component:M}))}}]),n}(a.Component);J.displayName=J.name;var _=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=document.getElementsByTagName("base")[0].getAttribute("href"),U=document.getElementById("root");c.a.render(r.a.createElement(o.a,{basename:G},r.a.createElement(J,null)),U),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");_?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):z(e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.c6e0c43e.chunk.js.map