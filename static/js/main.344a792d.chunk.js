(this["webpackJsonpmeta-rail-demo"]=this["webpackJsonpmeta-rail-demo"]||[]).push([[0],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(61),i=a.n(r),l=(a(73),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,195)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))}),o=a(67),d=a(3),j=a(14);function b(e){return e.routes.map((function(e,t){return Object(n.jsx)(d.a,{exact:e.exact,path:e.path,render:function(t){var a=t.match.url;return Object(n.jsx)(h,{url:a,routes:e.children})}},t)}))}function h(e){var t=e.routes,a=e.url;return"/"===a&&(a=""),t.map((function(e,t){return Object(n.jsx)(d.a,{exact:e.exact,path:"".concat(a+e.path),component:e.component},t)}))}var u=function(e){var t=e.routes;return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.c,{children:Object(n.jsx)(b,{routes:t})})})})},m=a(43),p=a(11),O=a.n(p);var x=function(e){var t=e.children,a=e.className;return Object(n.jsx)("div",{className:O()("card",a),children:t})};var v=function(e){var t=e.children,a=e.className;return Object(n.jsx)("div",{className:O()("tag",a),children:t})},f=a(12);var g=function(e){var t=e.children,a=e.className,s=e.id,r=void 0===s?"scroll-pane-container":s,i=Object(c.useState)(""),l=Object(f.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(""),b=Object(f.a)(j,2),h=(b[0],b[1]);function u(){var e=document.getElementById(r),t=e.scrollTop,a=e.scrollHeight-e.offsetHeight;d(t/a*100)}return Object(c.useEffect)((function(){var e=document.getElementById("".concat(r,"-container")),t=document.getElementById(r),a=document.getElementById("".concat(r,"-scrollbar-input"));a.style.width="".concat(e.offsetHeight,"px"),a.style.right="-".concat(Math.abs(e.offsetHeight/2-25),"px"),t.addEventListener("scroll",u),h(e),d(t.scrollTop)}),[t]),Object(n.jsxs)("div",{id:"".concat(r,"-container"),className:O()("custom-scroll-pane",a),children:[Object(n.jsx)("div",{id:r,className:"scroll-pane-container",children:t}),Object(n.jsx)("input",{id:"".concat(r,"-scrollbar-input"),onChange:function(e){d(e.target.value);var t=document.getElementById(r),a=(t.scrollHeight-t.offsetHeight)*(e.target.value/100);t.scrollTop=a},value:o,className:"custom-scrollbar",type:"range"})]})},N=a(63),w=a.n(N),y=a(19),k=a.n(y);var S=function(){var e=(new Date).toISOString().slice(0,10),t=k()().subtract(7,"days").format("YYYY-MM-DD");return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsxs)(x,{className:"nav-logo",children:[Object(n.jsx)("h2",{children:"MetaRail"}),Object(n.jsx)("span",{children:"Insights"}),Object(n.jsx)(w.a,{className:"loader",type:"Oval",width:40,height:40,color:"#36a2eb"})]}),Object(n.jsxs)(x,{className:"nav-filter",children:[Object(n.jsx)(j.b,{to:"/admin/dashboard/&date_from=".concat(e,"&date_to=").concat(e),children:"Today"}),Object(n.jsx)(j.b,{to:"/admin/dashboard/&date_from=".concat(t,"&date_to=").concat(e),children:"Last 7 Days"}),Object(n.jsx)(j.b,{to:"/admin/dashboard",children:"Custom"})]})]})},C=a(64),A=(a(97),[{label:"All",link:"/"},{label:"Insurance",link:"/"},{label:"Travel",link:"/"},{label:"Education",link:"/"},{label:"Finance",link:"/"},{label:"Media & Communications",link:"/"},{label:"Apparel",link:"/"}]),M=[{label:"All",link:"/"},{label:"Health",link:"/"},{label:"Life",link:"/"},{label:"Auto",link:"/"},{label:"Property",link:"/"},{label:"Property",link:"/"},{label:"Property",link:"/"}];var D=function(){return Object(n.jsxs)(x,{className:"sidebar",children:[Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("span",{children:"Sample Full Name"}),Object(n.jsxs)("div",{className:"user-type",children:[Object(n.jsx)(v,{children:"Admin"}),Object(n.jsx)(v,{children:"Advertiser"}),Object(n.jsx)(v,{children:"Publisher"})]})]}),Object(n.jsxs)("div",{className:"sidebar-filters",children:[Object(n.jsx)("span",{className:"category-title",children:"Industries"}),Object(n.jsx)(g,{id:"industries",children:A.map((function(e,t){return Object(n.jsx)("span",{children:e.label},t)}))}),Object(n.jsx)("span",{className:"category-title",children:"Verticals"}),Object(n.jsx)(g,{id:"verticals",children:M.map((function(e,t){return Object(n.jsx)("span",{children:e.label},t)}))}),Object(n.jsxs)("div",{className:"campaigns-container",children:[Object(n.jsx)("span",{className:"category-title",children:"Campaigns"}),Object(n.jsxs)("div",{className:"campaigns",children:[Object(n.jsx)(v,{children:"All"}),Object(n.jsx)(v,{children:"Active"}),Object(n.jsx)(v,{children:"InActive"}),Object(n.jsx)(v,{children:"Expiring in 30 days"}),Object(n.jsx)(v,{children:"Don't Expire"}),Object(n.jsx)(v,{children:"All"}),Object(n.jsx)(v,{children:"All"})]})]})]}),Object(n.jsx)("div",{className:"currency-balance",children:Object(n.jsxs)(x,{children:[Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("div",{className:"graph",children:Object(n.jsx)(C.a,{value:10,minValue:0,maxValue:100,styles:{width:25,heigh:25,path:{stroke:"rgba(255, 115, 115, 100)",strokeLinecap:"butt"}}})}),Object(n.jsxs)("div",{className:"balance",children:[Object(n.jsx)("span",{children:"Current Balance"}),Object(n.jsx)("h3",{children:"$0"}),Object(n.jsx)("a",{href:"/",children:"Prepay"})]})]}),Object(n.jsx)("span",{className:"message",children:"Low Credit Alert. Prepay Now"})]})})]})},B=a(7);var I=function(e){var t=e.children,a=e.title,c=e.className,s=e.icons,r=void 0===s?[]:s;return Object(n.jsxs)(x,{className:c,children:[Object(n.jsxs)("div",{className:"card-header",children:[Object(n.jsx)("span",{className:"card-header-title",children:a}),Object(n.jsx)("div",{className:"card-header-actions",children:r.map((function(e,t){return Object(n.jsx)(B.a,{className:"card-header-icon",size:"xs",icon:e},t)}))})]}),t]})},P=a(29);var E=function(e){var t=e.title,a=e.labels,c=void 0===a?[]:a,s=e.data,r=void 0===s?[]:s,i=e.breakdowns,l=void 0===i?[]:i,o=e.handleSelectBreakdown,d=e.id;return Object(n.jsxs)("div",{className:"doughnut-chart",children:[Object(n.jsx)("div",{className:"doughnut",children:Object(n.jsx)(P.Doughnut,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:r.map((function(e){return e.sales})),backgroundColor:"rgba(255, 115, 115, 0.5)",hoverBackgroundColor:"rgba(255, 115, 115, 1)",hoverBorderWidth:0}]},options:{legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1,rotation:1*Math.PI,circumference:1*Math.PI}})}),Object(n.jsx)("span",{className:"doughnut-title",children:t}),Object(n.jsx)(g,{id:d,className:"breakdowns",children:l.map((function(e,t){return Object(n.jsxs)("span",{onClick:function(){return function(e){o(e)}(e.id)},children:[e.value," - ",e.id]},t)}))})]})};var R=function(e){var t=e.labels,a=e.data,c=e.color;return Object(n.jsx)(P.Line,{id:"key-metrics-line-chart",height:25,width:100,data:{labels:t,datasets:[{fill:"start",data:a,backgroundColor:c,borderColor:"rgba(54, 162, 235, 100)",borderWidth:5,pointRadius:10,pointHoverRadius:10,pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(0, 0, 0, 0)",pointHoverBackgroundColor:c}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{min:0,max:100,stepSize:20,minor:{fontColor:"#d6d6d6"}},gridLines:{drawOnChartArea:!1}}],xAxes:[{ticks:{source:"labels",minor:{fontColor:"#d6d6d6"}},type:"time",time:{unit:"day"},distribution:"series",gridLines:{display:!1}}]}}})},L=function(e,t){var a,n=[],c=e;for(;new Date(c).toDateString()!==new Date(t).toDateString();){var s=new Date(c.getTime()+Math.random()*(t.getTime()-c.getTime()));new Date(s).toDateString()!==new Date(a).toDateString()&&n.push(s),c=s,a=s}return n}(new Date(k()().subtract(30,"days").format("YYYY-MM-DD")),new Date).map((function(e){return{date:e,sales:Math.floor(100*Math.random()+1),cogs:Math.floor(100*Math.random()+1),margin:Math.floor(100*Math.random()+1),clicks:Math.floor(100*Math.random()+1),impressions:Math.floor(100*Math.random()+1)}}));function F(e){for(var t=[],a=0,n=Math.floor(5*Math.random()+1),c=0;c<n;c++)t.push({id:c,entity:e[1],value:parseFloat(Math.floor(500*Math.random()+1).toFixed(2))});for(var s=0;s<n;s++)a+=parseFloat(t[s].value.toFixed(2));return[{id:"random-1",entity:e[0],value:a,breakdowns:t}]}var T=function(e){e.params;var t=Object(c.useState)(""),a=Object(f.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)("sales"),l=Object(f.a)(i,2),o=l[0],j=l[1],b=Object(c.useState)([]),h=Object(f.a)(b,2),u=h[0],m=h[1],p=Object(c.useState)([]),O=Object(f.a)(p,2),x=O[0],v=O[1],g=Object(d.f)(),N=Object(d.g)(),w=new URLSearchParams(Object(d.g)().search);function y(e,t){if(t&&t.length)return"".concat(e," ").concat(t[0].entity&&t[0].entity.charAt(0).toUpperCase()+t[0].entity.slice(1))}function k(e,t,a){w.set("entity_id",t),w.set("entity","publisher"),g.push("".concat(N.pathname,"?").concat(w.toString()));var n=e.filter((function(e){return e.id===t}));n[0].breakdowns?a(n[0].breakdowns):a(n),y(n.entity)}return Object(c.useEffect)((function(){var e=document.getElementById("key-metrics-line-chart").getContext("2d").createLinearGradient(0,0,300,300);e.addColorStop(0,"#009348"),e.addColorStop(1,"#00d4ff"),r(e),m(F(["publisher","units"])),v(F(["campaigns","placements"]))}),[]),Object(n.jsxs)(I,{className:"key-metrics",title:"Key Metrics",icons:["info","sync-alt","cog","expand-arrows-alt"],children:[Object(n.jsx)(R,{labels:L.map((function(e){return e.date})),data:L.map((function(e){return e[o]})),color:s}),Object(n.jsx)("div",{className:"ad-spends",children:function(){var e=[{label:"Sales",total:0},{label:"CoGS",total:0},{label:"Margin",total:0},{label:"Clicks",total:0},{label:"Impressions",total:0}];return L.forEach((function(t){e[0].total+=t.sales,e[1].total+=t.cogs,e[2].total+=t.margin,e[3].total+=t.clicks,e[4].total+=t.impressions})),e}().map((function(e,t){return Object(n.jsxs)("span",{className:"ad-spend",onClick:function(){return j(e.label.toLowerCase())},children:[Object(n.jsxs)("span",{children:[t<3&&"$",e.total]}),Object(n.jsx)("p",{children:e.label})]},t)}))}),Object(n.jsxs)("div",{className:"doughnut-charts",children:[Object(n.jsx)(E,{title:y("Revenue by",u),id:"publisher",data:L,breakdowns:u,handleSelectBreakdown:function(e){return k(u,e,m)}}),Object(n.jsx)(E,{title:y("Spend by",x),id:"advertiser",data:L,breakdowns:x,handleSelectBreakdown:function(e){return k(x,e,v)}}),Object(n.jsx)(E,{title:"By Industries",id:"industry",data:L}),Object(n.jsx)(E,{title:"By Vertical",id:"vertical",data:L})]}),Object(n.jsxs)("div",{className:"key-metrics-footer",children:[Object(n.jsxs)("span",{className:"show-all",children:["Show All Publishers ",Object(n.jsx)(B.a,{icon:"caret-down",size:"lg"})]}),Object(n.jsxs)("span",{className:"show-all",children:["Show All Advertisers ",Object(n.jsx)(B.a,{icon:"caret-down",size:"lg"})]}),Object(n.jsxs)("span",{className:"show-all",children:["Show All Industries ",Object(n.jsx)(B.a,{icon:"caret-down",size:"lg"})]}),Object(n.jsxs)("span",{className:"show-all",children:["Show All Verticals ",Object(n.jsx)(B.a,{icon:"caret-down",size:"lg"})]})]})]})};var H=function(){return Object(n.jsx)(I,{className:"map-view",title:"Map View",icons:["info","expand-arrows-alt"]})};var Y=function(e){var t=e.title,a=e.description,c=e.positive,s=void 0!==c&&c,r=e.percent,i=void 0===r?"00.00":r,l=e.value,o=void 0===l?"00.00":l;return Object(n.jsxs)(x,{className:"widget",children:[Object(n.jsxs)("span",{className:"widget-title",children:[t,Object(n.jsx)("div",{className:"pmNA",children:"NA"})]}),Object(n.jsxs)("div",{className:"widget-body",children:[Object(n.jsxs)("span",{className:"value",children:[Object(n.jsxs)("span",{className:s?"positive":"negative",children:[i,"%"]}),"|",Object(n.jsxs)("span",{children:["$",o]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(B.a,{className:s?"positive":"negative",icon:s?"arrow-alt-circle-up":"arrow-alt-circle-down",size:"2x"})})]}),Object(n.jsx)("span",{className:"widget-description",children:a})]})};var z=function(){return Object(n.jsx)(I,{className:"performance-metrics",title:"Performance Metrics",icons:["info","expand-arrows-alt"],children:Object(n.jsxs)("div",{className:"performance-metrics-body",children:[Object(n.jsx)(Y,{title:"ROAS",description:"Return on Ad Spend"}),Object(n.jsx)(Y,{title:"ROAS",description:"Return on Ad Spend"}),Object(n.jsx)(Y,{title:"ROAS",description:"Return on Ad Spend"}),Object(n.jsx)(Y,{title:"ROAS",description:"Return on Ad Spend"})]})})};var V=function(e){var t=e.title,a=e.positive,c=void 0!==a&&a,s=e.percent,r=void 0===s?"00.00":s,i=e.value,l=void 0===i?"00.00":i;return Object(n.jsxs)(x,{className:O()("widget",{"bottom-border-positive":c,"bottom-border-negative":!c}),children:[Object(n.jsxs)("div",{className:"widget-title",children:[Object(n.jsx)("span",{children:t}),Object(n.jsxs)("span",{className:c?"positive":"negative",children:[Object(n.jsx)(B.a,{icon:c?"chevron-up":"chevron-down"}),r,"%"]})]}),Object(n.jsxs)("div",{className:"widget-body",children:[Object(n.jsx)(B.a,{className:c?"positive":"negative",icon:c?"chevron-up":"chevron-down"}),"$",l]})]})};var _=function(){return Object(n.jsx)(I,{className:"campaign-metrics",title:"Campaign Metrics",icons:["info","expand-arrows-alt"],children:Object(n.jsxs)("div",{className:"campaign-metrics-body",children:[Object(n.jsx)(V,{title:"eCPC"}),Object(n.jsx)(V,{title:"eCPC"}),Object(n.jsx)(V,{title:"eCPC"})]})})};var $=function(e){var t=e.match;return Object(n.jsx)("div",{className:"dashboard",children:Object(n.jsxs)("div",{className:"dashboard-container",children:[Object(n.jsx)(S,{}),Object(n.jsx)(D,{}),Object(n.jsx)(T,{params:t.params}),Object(n.jsx)(H,{}),Object(n.jsx)(z,{}),Object(n.jsx)(_,{})]})})},G=function(){return[{path:"/dashboard",exact:!0,component:function(e){return Object(n.jsx)($,Object(m.a)({},e))}},{path:"/dashboard:slug",exact:!0,component:function(e){return Object(n.jsx)($,Object(m.a)({},e))}}]},J=[{name:"main",path:"/",children:[]},{name:"admin",path:"/admin",children:Object(o.a)(G())}],U=function(){return Object(n.jsx)(u,{routes:J})},W=(a(193),a(21)),K=a(65),q=a(66);W.b.add(K.a,q.a),i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),l()},73:function(e,t,a){}},[[194,1,2]]]);
//# sourceMappingURL=main.344a792d.chunk.js.map