(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),s=c.n(a),n=c(1),i=(c(9),c(10),c(11),c(4)),b=c.n(i),d=c(0);const l=t=>{let{tabs:e,selectedTab:c,onTabSelected:a}=t;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((t=>Object(d.jsx)("li",{className:b()({"is-active":c.id===t.id}),"data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:()=>{c.id!==t.id&&a(t)},children:t.title})},t.id)))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=()=>{const[t,e]=Object(n.useState)(o[0]);return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is"," ".concat(t.title)]}),Object(d.jsx)(l,{selectedTab:t,setSelectedTab:e,tabs:o,onTabSelected:t=>{e(t)}})]})};s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.29811529.chunk.js.map