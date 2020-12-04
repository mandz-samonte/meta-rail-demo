(this["webpackJsonpmeta-rail-demo"]=this["webpackJsonpmeta-rail-demo"]||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),r=a(60),i=a.n(r),l=(a(72),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,194)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))}),o=a(66),d=a(3),j=a(14);function b(e){return e.routes.map((function(e,t){return Object(s.jsx)(d.a,{exact:e.exact,path:e.path,render:function(t){var a=t.match.url;return Object(s.jsx)(h,{url:a,routes:e.children})}},t)}))}function h(e){var t=e.routes,a=e.url;return"/"===a&&(a=""),t.map((function(e,t){return Object(s.jsx)(d.a,{exact:e.exact,path:"".concat(a+e.path),component:e.component},t)}))}var m=function(e){var t=e.routes;return Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{children:Object(s.jsx)(d.c,{children:Object(s.jsx)(j.b,{basename:"/admin/dashboard",children:Object(s.jsx)(b,{routes:t})})})})})},u=a(11),x=a.n(u);var O=function(e){var t=e.children,a=e.className;return Object(s.jsx)("div",{className:x()("card",a),children:t})};var p=function(e){var t=e.children,a=e.className;return Object(s.jsx)("div",{className:x()("tag",a),children:t})},v=a(21);var g=function(e){var t=e.children,a=e.className,n=e.id,r=void 0===n?"scroll-pane-container":n,i=Object(c.useState)(""),l=Object(v.a)(i,2),o=l[0],d=l[1];function j(){var e=document.getElementById(r),t=e.scrollTop,a=e.scrollHeight-e.offsetHeight;d(t/a*100)}return Object(c.useEffect)((function(){var e=document.getElementById(r);e.addEventListener("scroll",j),d(e.scrollTop)}),[]),Object(s.jsxs)("div",{className:x()("custom-scroll-pane",a),children:[Object(s.jsx)("div",{id:r,className:"scroll-pane-container",children:t}),Object(s.jsx)("input",{onChange:function(e){d(e.target.value);var t=document.getElementById(r),a=(t.scrollHeight-t.offsetHeight)*(e.target.value/100);t.scrollTop=a},value:o,className:"custom-scrollbar",type:"range"})]})},f=a(62),N=a.n(f),w=a(18),y=a.n(w);var C=function(){var e=(new Date).toISOString().slice(0,10),t=y()().subtract(7,"days").format("YYYY-MM-DD");return Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsxs)(O,{className:"nav-logo",children:[Object(s.jsx)("h2",{children:"MetaRail"}),Object(s.jsx)("span",{children:"Insights"}),Object(s.jsx)(N.a,{className:"loader",type:"Oval",width:40,height:40,color:"#36a2eb"})]}),Object(s.jsxs)(O,{className:"nav-filter",children:[Object(s.jsx)(j.c,{to:"/admin/dashboard/&date_from=".concat(e,"&date_to=").concat(e),children:"Today"}),Object(s.jsx)(j.c,{to:"/admin/dashboard/&date_from=".concat(t,"&date_to=").concat(e),children:"Last 7 Days"}),Object(s.jsx)(j.c,{to:"/admin/dashboard",children:"Custom"})]})]})},k=a(63),A=(a(96),[{label:"All",link:"/"},{label:"Insurance",link:"/"},{label:"Travel",link:"/"},{label:"Education",link:"/"},{label:"Finance",link:"/"},{label:"Media & Communications",link:"/"},{label:"Apparel",link:"/"}]),S=[{label:"All",link:"/"},{label:"Health",link:"/"},{label:"Life",link:"/"},{label:"Auto",link:"/"},{label:"Property",link:"/"}];var M=function(){return Object(s.jsxs)(O,{className:"sidebar",children:[Object(s.jsxs)("div",{className:"user-info",children:[Object(s.jsx)("span",{children:"Sample Full Name"}),Object(s.jsxs)("div",{className:"user-type",children:[Object(s.jsx)(p,{children:"Admin"}),Object(s.jsx)(p,{children:"Advertiser"}),Object(s.jsx)(p,{children:"Publisher"})]})]}),Object(s.jsxs)("div",{className:"sidebar-filters",children:[Object(s.jsx)("span",{className:"category-title",children:"Industries"}),Object(s.jsx)(g,{id:"industries",children:A.map((function(e,t){return Object(s.jsx)("span",{children:e.label},t)}))}),Object(s.jsx)("span",{className:"category-title",children:"Verticals"}),Object(s.jsx)(g,{id:"verticals",children:S.map((function(e,t){return Object(s.jsx)("span",{children:e.label},t)}))}),Object(s.jsxs)("div",{className:"campaigns-container",children:[Object(s.jsx)("span",{className:"category-title",children:"Campaigns"}),Object(s.jsxs)("div",{className:"campaigns",children:[Object(s.jsx)(p,{children:"All"}),Object(s.jsx)(p,{children:"Active"}),Object(s.jsx)(p,{children:"InActive"}),Object(s.jsx)(p,{children:"Expiring in 30 days"}),Object(s.jsx)(p,{children:"Don't Expire"}),Object(s.jsx)(p,{children:"All"}),Object(s.jsx)(p,{children:"All"})]})]})]}),Object(s.jsx)("div",{className:"currency-balance",children:Object(s.jsxs)(O,{children:[Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:"graph",children:Object(s.jsx)(k.a,{value:10,minValue:0,maxValue:100,styles:{width:25,heigh:25,path:{stroke:"rgba(255, 115, 115, 100)",strokeLinecap:"butt"}}})}),Object(s.jsxs)("div",{className:"balance",children:[Object(s.jsx)("span",{children:"Current Balance"}),Object(s.jsx)("h3",{children:"$0"}),Object(s.jsx)("a",{href:"/",children:"Prepay"})]})]}),Object(s.jsx)("span",{className:"message",children:"Low Credit Alert. Prepay Now"})]})})]})},D=a(7);var I=function(e){var t=e.children,a=e.title,c=e.className,n=e.icons,r=void 0===n?[]:n;return Object(s.jsxs)(O,{className:c,children:[Object(s.jsxs)("div",{className:"card-header",children:[Object(s.jsx)("span",{className:"card-header-title",children:a}),Object(s.jsx)("div",{className:"card-header-actions",children:r.map((function(e,t){return Object(s.jsx)(D.a,{className:"card-header-icon",size:"xs",icon:e},t)}))})]}),t]})},B=a(29);var P=function(e){var t=e.title,a=e.labels,c=void 0===a?[]:a,n=e.data,r=void 0===n?[]:n;return Object(s.jsxs)("div",{className:"doughnut-chart",children:[Object(s.jsx)("div",{className:"doughnut",children:Object(s.jsx)(B.Doughnut,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:r.map((function(e){return e.sales})),backgroundColor:"rgba(255, 115, 115, 0.5)",hoverBackgroundColor:"rgba(255, 115, 115, 1)",hoverBorderWidth:0}]},options:{legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1,rotation:1*Math.PI,circumference:1*Math.PI}})}),Object(s.jsx)("span",{className:"doughnut-title",children:t}),Object(s.jsx)("div",{className:"breakdowns",children:Object(s.jsx)("span",{children:"$47.00 - MR-PUB-Dev2020"})})]})};var R=function(e){var t=e.labels,a=e.data,c=e.color;return Object(s.jsx)(B.Line,{id:"key-metrics-line-chart",height:30,width:100,data:{labels:t,datasets:[{fill:"start",data:a,backgroundColor:c,borderColor:"rgba(54, 162, 235, 100)",borderWidth:5,pointRadius:10,pointHoverRadius:10,pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(0, 0, 0, 0)",pointHoverBackgroundColor:c}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{min:0,max:100,stepSize:20,minor:{fontColor:"#d6d6d6"}},gridLines:{drawOnChartArea:!1}}],xAxes:[{ticks:{source:"labels",minor:{fontColor:"#d6d6d6"}},type:"time",time:{unit:"day"},distribution:"series",gridLines:{display:!1}}]}}})},E=["Revenue by Publishers","Spend by Advertiser","By Industry","By Vertical"],L=function(e,t){var a,s=[],c=e;for(;new Date(c).toDateString()!==new Date(t).toDateString();){var n=new Date(c.getTime()+Math.random()*(t.getTime()-c.getTime()));new Date(n).toDateString()!==new Date(a).toDateString()&&s.push(n),c=n,a=n}return s}(new Date(y()().subtract(30,"days").format("YYYY-MM-DD")),new Date).map((function(e){return{date:e,sales:Math.floor(100*Math.random()+1),cogs:Math.floor(100*Math.random()+1),margin:Math.floor(100*Math.random()+1),clicks:Math.floor(100*Math.random()+1),impressions:Math.floor(100*Math.random()+1)}}));var T=function(e){e.params;var t=Object(c.useState)(""),a=Object(v.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)("sales"),l=Object(v.a)(i,2),o=l[0],d=l[1];return Object(c.useEffect)((function(){var e=document.getElementById("key-metrics-line-chart").getContext("2d").createLinearGradient(0,0,300,300);e.addColorStop(0,"#009348"),e.addColorStop(1,"#00d4ff"),r(e)}),[]),Object(s.jsxs)(I,{className:"key-metrics",title:"Key Metrics",icons:["info","sync-alt","cog","expand-arrows-alt"],children:[Object(s.jsx)(R,{labels:L.map((function(e){return e.date})),data:L.map((function(e){return e[o]})),color:n}),Object(s.jsx)("div",{className:"ad-spends",children:function(){var e=[{label:"Sales",total:0},{label:"CoGS",total:0},{label:"Margin",total:0},{label:"Clicks",total:0},{label:"Impressions",total:0}];return L.forEach((function(t){e[0].total+=t.sales,e[1].total+=t.cogs,e[2].total+=t.margin,e[3].total+=t.clicks,e[4].total+=t.impressions})),e}().map((function(e,t){return Object(s.jsxs)("span",{className:"ad-spend",onClick:function(){return d(e.label.toLowerCase())},children:[Object(s.jsxs)("span",{children:[t<3&&"$",e.total]}),Object(s.jsx)("p",{children:e.label})]})}))}),Object(s.jsx)("div",{className:"doughnut-charts",children:E.map((function(e,t){return Object(s.jsx)(P,{title:e,data:L})}))}),Object(s.jsxs)("div",{className:"key-metrics-footer",children:[Object(s.jsxs)("span",{className:"show-all",children:["Show All Publishers ",Object(s.jsx)(D.a,{icon:"caret-down",size:"lg"})]}),Object(s.jsxs)("span",{className:"show-all",children:["Show All Advertisers ",Object(s.jsx)(D.a,{icon:"caret-down",size:"lg"})]}),Object(s.jsxs)("span",{className:"show-all",children:["Show All Industries ",Object(s.jsx)(D.a,{icon:"caret-down",size:"lg"})]}),Object(s.jsxs)("span",{className:"show-all",children:["Show All Verticals ",Object(s.jsx)(D.a,{icon:"caret-down",size:"lg"})]})]})]})};var Y=function(){return Object(s.jsx)(I,{className:"map-view",title:"Map View",icons:["info","expand-arrows-alt"]})};var _=function(e){var t=e.title,a=e.description,c=e.positive,n=void 0!==c&&c,r=e.percent,i=void 0===r?"00.00":r,l=e.value,o=void 0===l?"00.00":l;return Object(s.jsxs)(O,{className:"widget",children:[Object(s.jsxs)("span",{className:"widget-title",children:[t,Object(s.jsx)("div",{className:"pmNA",children:"NA"})]}),Object(s.jsxs)("div",{className:"widget-body",children:[Object(s.jsxs)("span",{className:"value",children:[Object(s.jsxs)("span",{className:n?"positive":"negative",children:[i,"%"]}),"|",Object(s.jsxs)("span",{children:["$",o]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(D.a,{className:n?"positive":"negative",icon:n?"arrow-alt-circle-up":"arrow-alt-circle-down",size:"2x"})})]}),Object(s.jsx)("span",{className:"widget-description",children:a})]})};var z=function(){return Object(s.jsx)(I,{className:"performance-metrics",title:"Performance Metrics",icons:["info","expand-arrows-alt"],children:Object(s.jsxs)("div",{className:"performance-metrics-body",children:[Object(s.jsx)(_,{title:"ROAS",description:"Return on Ad Spend"}),Object(s.jsx)(_,{title:"ROAS",description:"Return on Ad Spend"}),Object(s.jsx)(_,{title:"ROAS",description:"Return on Ad Spend"}),Object(s.jsx)(_,{title:"ROAS",description:"Return on Ad Spend"})]})})};var H=function(e){var t=e.title,a=e.positive,c=void 0!==a&&a,n=e.percent,r=void 0===n?"00.00":n,i=e.value,l=void 0===i?"00.00":i;return Object(s.jsxs)(O,{className:x()("widget",{"bottom-border-positive":c,"bottom-border-negative":!c}),children:[Object(s.jsxs)("div",{className:"widget-title",children:[Object(s.jsx)("span",{children:t}),Object(s.jsxs)("span",{className:c?"positive":"negative",children:[Object(s.jsx)(D.a,{icon:c?"chevron-up":"chevron-down"}),r,"%"]})]}),Object(s.jsxs)("div",{className:"widget-body",children:[Object(s.jsx)(D.a,{className:c?"positive":"negative",icon:c?"chevron-up":"chevron-down"}),"$",l]})]})};var F=function(){return Object(s.jsx)(I,{className:"campaign-metrics",title:"Campaign Metrics",icons:["info","expand-arrows-alt"],children:Object(s.jsxs)("div",{className:"campaign-metrics-body",children:[Object(s.jsx)(H,{title:"eCPC"}),Object(s.jsx)(H,{title:"eCPC"}),Object(s.jsx)(H,{title:"eCPC"})]})})};var V=function(e){var t=e.match;return Object(s.jsx)("div",{className:"dashboard",children:Object(s.jsxs)("div",{className:"dashboard-container",children:[Object(s.jsx)(C,{}),Object(s.jsx)(M,{}),Object(s.jsx)(T,{params:t.params}),Object(s.jsx)(Y,{}),Object(s.jsx)(z,{}),Object(s.jsx)(F,{})]})})},$=function(){return[{path:"/dashboard",exact:!0,component:V},{path:"/dashboard/&date_from=:date_from&date_to=:date_to",exact:!0,component:V}]},G=[{name:"main",path:"/",children:[]},{name:"admin",path:"/admin",children:Object(o.a)($())}],J=function(){return Object(s.jsx)(m,{routes:G})},W=(a(192),a(20)),K=a(64),U=a(65);W.b.add(K.a,U.a),i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(J,{})}),document.getElementById("root")),l()},72:function(e,t,a){}},[[193,1,2]]]);
//# sourceMappingURL=main.2ef080a5.chunk.js.map