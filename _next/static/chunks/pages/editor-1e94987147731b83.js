(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1862:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var r,i=n(9499),o=n(4730),s=(n(7294),n(186)),c=n(5893),a=["children","status"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.PRIMARY="SILVER_DARK",e.SECONDARY="BLURPLE",e.DANGER="DANGER",e.SUCCESS="SEAGREEN",e.WARNING="ORANGE"}(r||(r={}));var u=s.ZP.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-6goz99-0"})(["display:block;background:",";color:",";cursor:pointer;padding:8px 16px;@media only screen and (max-width:768px){font-size:18px;}"],(function(e){return function(e,t){return t[r[e]]}(e.status,e.theme)}),(function(e){return e.theme.FULL_WHITE})),p=s.ZP.div.withConfig({displayName:"Button__StyledButtonContent",componentId:"sc-6goz99-1"})(["display:flex;justify-content:center;align-items:center;gap:8px;"]),f=function(e){var t=e.children,n=e.status,r=(0,o.Z)(e,a);return(0,c.jsx)(u,d(d({type:"button",status:null!==n&&void 0!==n?n:"PRIMARY"},r),{},{children:(0,c.jsx)(p,{children:t})}))}},6660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var r=n(6835),i=n(7294),o=n(9008),s=n(1163),c=n(186),a=n(5884),l=n(1862),d=n(9499),u=n(1664),p=n(4059),f=n(9583),h=n(5434),x=n(8193),m=n(471),y=n(4730),g=n(7812),j=["children"],b=function(e){try{"object"!==typeof e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[e]);var t=function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(n=0,function(){return String(++n)});return t?[t].flat().map((function(t){return{id:i(),text:Object.fromEntries(Object.entries(t).filter((function(e){var t=(0,r.Z)(e,2),n=(t[0],t[1]);return!Array.isArray(n)&&!(n instanceof Object)}))),children:Object.entries(t).filter((function(e){var t=(0,r.Z)(e,2),n=(t[0],t[1]);return Array.isArray(n)||"object"===typeof n})).flatMap((function(t){var n=(0,r.Z)(t,2),o=n[0],s=n[1];return[{id:i(),text:o,children:e(s,i)}]}))}})):[]}(e);return[].concat((0,g.Z)(function e(t){return t.flatMap((function(t){var n=t.children;return[(0,y.Z)(t,j)].concat((0,g.Z)(e(n)))}))}(t)),(0,g.Z)(function e(t){return t.flatMap((function(t){var n=t.id,r=t.children,i=void 0===r?[]:r;return[].concat((0,g.Z)(i.map((function(e){var t=e.id;return{id:"e".concat(t,"-").concat(n),from:t,to:n}}))),(0,g.Z)(e(i)))}))}(t)))}catch(n){return console.error("An error occured while parsin JSON data!"),[]}};function v(e){switch(e){case"LEFT":return"UP";case"UP":return"RIGHT";case"RIGHT":return"DOWN";default:return"LEFT"}}function w(e){if(e instanceof Object){var t="",n=Object.entries(e);return Object.keys(e).every((function(e){return!isNaN(+e)}))?Object.values(e).join(""):(n.forEach((function(e){t+="".concat(e[0],": ").concat(e[1],"\n")})),t)}return e}function S(e){return"text"in e}var O=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,i.useEffect)((function(){return n(!0)}),[]),t},_=n(5893);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=c.ZP.div.withConfig({displayName:"Sidebar__StyledSidebar",componentId:"sc-77ih9s-0"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:60px;background:#2f3136;padding:8px;border-right:1px solid ",";"],(function(e){return e.theme.SILVER_DARK})),C=c.ZP.div.withConfig({displayName:"Sidebar__StyledElement",componentId:"sc-77ih9s-1"})(["text-align:center;font-size:32px;font-weight:700;width:100%;color:",";cursor:pointer;pointer-events:",";a{text-align:center;width:100%;}svg{vertical-align:middle;}"],(function(e){var t=e.theme;return e.disabled?t.SILVER_DARK:t.SILVER}),(function(e){return e.disabled&&"none"})),I=c.ZP.span.withConfig({displayName:"Sidebar__StyledText",componentId:"sc-77ih9s-2"})(["color:",";"],(function(e){var t=e.theme;return e.secondary?t.FULL_WHITE:t.ORANGE})),R=c.ZP.nav.withConfig({displayName:"Sidebar__StyledTopWrapper",componentId:"sc-77ih9s-3"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-bottom:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),Z=c.ZP.nav.withConfig({displayName:"Sidebar__StyledBottomWrapper",componentId:"sc-77ih9s-4"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-top:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),L=c.ZP.div.withConfig({displayName:"Sidebar__StyledLogo",componentId:"sc-77ih9s-5"})(["color:",";"],(function(e){return e.theme.FULL_WHITE})),k=c.ZP.label.withConfig({displayName:"Sidebar__StyledImportFile",componentId:"sc-77ih9s-6"})(['cursor:pointer;input[type="file"]{display:none;}']);var z=function(e){var t,n=e.setJson,o=O(),s=i.useState(null),c=(0,r.Z)(s,2),a=c[0],l=c[1],y=(0,p._)("config",{layout:"LEFT",expand:!0,controls:!0}),g=(0,r.Z)(y,2),j=g[0],b=g[1],w=function(e){b((function(t){return P(P({},t),{},(0,d.Z)({},e,!t[e]))}))};return i.useEffect((function(){if(a){var e=new FileReader;e.readAsText(a,"UTF-8"),e.onload=function(e){var t;n(null===(t=e.target)||void 0===t?void 0:t.result)}}}),[a,n]),o?(0,_.jsxs)(N,{children:[(0,_.jsxs)(R,{children:[(0,_.jsx)(u.default,{passHref:!0,href:"/",children:(0,_.jsx)(C,{as:"a",children:(0,_.jsxs)(L,{children:[(0,_.jsx)(I,{children:"J"}),(0,_.jsx)(I,{secondary:!0,children:"V"})]})})}),(0,_.jsx)(C,{title:"Home",children:(0,_.jsx)(u.default,{href:"/",children:(0,_.jsx)("a",{children:(0,_.jsx)(x.V9Z,{})})})}),(0,_.jsx)(C,{as:"a",onClick:function(){n("[]"),localStorage.removeItem("json")},title:"Clear JSON",children:(0,_.jsx)(x.XzY,{})}),(0,_.jsx)(C,{as:"a",onClick:function(){return b((function(e){return P(P({},e),{},{layout:v(e.layout)})}))},title:"Change Layout",children:(t=j.layout,"LEFT"===t?(0,_.jsx)(m.mtx,{}):"UP"===t?(0,_.jsx)(m.LkX,{}):"RIGHT"===t?(0,_.jsx)(m.glP,{}):(0,_.jsx)(m.uFB,{}))}),(0,_.jsx)(C,{title:"Toggle Controls",as:"a",onClick:function(){return w("controls")},children:j.controls?(0,_.jsx)(x.yLO,{}):(0,_.jsx)(x.QzB,{})}),(0,_.jsx)(C,{as:"a",title:"Toggle Expand/Collapse",onClick:function(){return w("expand")},children:j.expand?(0,_.jsx)(h.bPX,{}):(0,_.jsx)(h.SPo,{})}),(0,_.jsx)(C,{as:"a",title:"Import JSON File",children:(0,_.jsxs)(k,{children:[(0,_.jsx)("input",{onChange:function(e){var t;e.target.files&&l(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},type:"file",accept:"application/JSON"},null===a||void 0===a?void 0:a.name),(0,_.jsx)(f.Xur,{})]})})]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(C,{children:(0,_.jsx)(u.default,{href:"https://twitter.com/aykutsarach",children:(0,_.jsx)("a",{rel:"me",target:"_blank",children:(0,_.jsx)(x.h3E,{})})})}),(0,_.jsx)(C,{children:(0,_.jsx)(u.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,_.jsx)("a",{rel:"me",target:"_blank",children:(0,_.jsx)(x.RrF,{})})})})]})]}):null},A=n(8336),T=n(4597),D=(0,c.ZP)(A.Z).withConfig({displayName:"JsonEditor__StyledJSONInput",componentId:"sc-1sxvk25-0"})(["margin-top:10px;padding:5px;"]),J=[{Author:"J. K. Rowling.",Genre:"Fantasy",Characters:["Hermione Granger","Harry Potter","Lord Voldemort","MORE"],Books:[{title:"Philosopher's Stone",date:"1997"},{title:"Chamber of Secrets",date:"1998"},{title:"Prisoner of Azkaban",date:"1999"},{title:"Goblet of Fire",date:"1999"},{title:"Order of the Phoenix",date:"2003"},{title:"Half-Blood Prince",date:"2005"},{title:"Deathly Hallows",date:"2007"}]}],B=function(e){var t=e.json,n=e.setJson,o=i.useState(t),s=(0,r.Z)(o,2),c=s[0],a=s[1];i.useEffect((function(){var e=localStorage.getItem("json");e&&a(e);var t=document.querySelector('[name="outer-box"] > div');t&&(t.style.transform="translate(-75%, 25%)")}),[]),i.useEffect((function(){"[]"===t&&a(t)}),[t]);return(0,_.jsx)(D,{placeholder:JSON.parse(c),onChange:function(e){if(!e.error){if(""===e.json)return n("[]");n(e.json)}},locale:T.Z,height:"100%",width:"auto"})},F=n(6126),G=n(3607);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=c.ZP.div.withConfig({displayName:"CustomNode__StyledTextWrapper",componentId:"sc-enntnn-0"})(["position:absolute;display:flex;justify-content:center;align-items:center;font-size:12px;width:100%;height:100%;overflow:hidden;&:hover{cursor:pointer;stroke:white !important;}"]),K=c.ZP.pre.withConfig({displayName:"CustomNode__StyledText",componentId:"sc-enntnn-1"})(["display:flex;justify-content:center;flex-direction:column;width:",";height:",";color:",";"],(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.theme.SILVER})),U=c.ZP.foreignObject.withConfig({displayName:"CustomNode__StyledForeignObject",componentId:"sc-enntnn-2"})(['position:"relative" !important;pointer-events:"none" !important;width:',";height:",";"],(function(e){return e.width+"px"}),(function(e){return e.height+"px"})),X=c.ZP.span.withConfig({displayName:"CustomNode__StyledKey",componentId:"sc-enntnn-3"})(["color:",";"],(function(e){var t=e.theme,n=e.bond,r=e.arrayValue;return n?t.SEAGREEN:r?t.ORANGE:t.BLURPLE})),Y={fill:"transparent",stroke:"transparent",strokeWidth:0},M={fill:"black"},Q=function(e){var t=e.properties;return(0,_.jsx)(G.Node,H(H({},e),{},{label:(0,_.jsx)(G.Label,{style:Y}),port:(0,_.jsx)(G.Port,{style:M,rx:10,ry:10}),children:function(e){var n=e.width,r=e.height;if(t.text instanceof Object){var i=Object.entries(t.text);if(Object.keys(t.text).every((function(e){return!isNaN(+e)}))){var o=Object.values(t.text).join("");return(0,_.jsx)(U,{width:n,height:r,x:0,y:0,children:(0,_.jsx)(W,{children:(0,_.jsx)(K,{width:n,height:r,children:(0,_.jsx)(X,{arrayValue:!0,children:o})})})})}return(0,_.jsx)(U,{width:n,height:r,x:0,y:0,children:(0,_.jsx)(W,{children:(0,_.jsx)(K,{width:n,height:r,children:i.map((function(e,t){return null!==e[1]&&(0,_.jsxs)("div",{style:{height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"0 auto",width:n-20},children:[(0,_.jsxs)(X,{children:[e[0],": "]}),e[1]]},t)}))})})})}return(0,_.jsx)(U,{width:n,height:r,x:0,y:0,children:(0,_.jsx)(W,{children:(0,_.jsx)(K,{width:n,height:r,children:(0,_.jsx)(X,{bond:!0,children:t.text})})})})}}))},q=c.ZP.div.withConfig({displayName:"LiveEditor__StyledLiveEditor",componentId:"sc-143se6z-0"})(["position:relative;border-left:3px solid ",";"],(function(e){return e.theme.SILVER_DARK})),$=c.ZP.div.withConfig({displayName:"LiveEditor__StyledEditorWrapper",componentId:"sc-143se6z-1"})(["position:absolute;"]),ee=c.ZP.div.withConfig({displayName:"LiveEditor__StyledControls",componentId:"sc-143se6z-2"})(["position:fixed;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px;bottom:8px;right:8px;opacity:0.9;button:hover{opacity:0.5;}"]),te=function(e){var t=e.json,n=O(),o=i.useRef(null),s=i.useRef(null),c=(0,p._)("config",{layout:"LEFT",expand:!0,controls:!0}),a=(0,r.Z)(c,1)[0];i.useEffect((function(){var e;s.current&&(null===(e=s.current)||void 0===e||e.resetTransform())}),[t,s]);var d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=JSON.parse(e);for(var n=b(e),r=[],i=[],o=0;o<n.length;o++){var s=n[o];if(S(s)){var c=w(s.text).split("\n"),a=c.map((function(e){return e.length})).sort((function(e,t){return e-t})).reverse()[0];r.push({id:s.id,text:s.text,width:t?35+8*a:180,height:t?30+10*c.length:50})}else i.push(s)}return{nodes:r,edges:i}}(t,a.expand),u=d.nodes,f=d.edges;return n?(0,_.jsxs)(q,{children:[(0,_.jsx)($,{children:(0,_.jsx)(F.d$,{maxScale:2,minScale:.4,initialScale:.8,ref:s,limitToBounds:!1,wheel:{step:.4},children:(0,_.jsx)(F.Uv,{children:(0,_.jsx)(G.Canvas,{ref:o,nodes:u,edges:f,layoutOptions:{"elk.direction":a.layout},maxWidth:2e4,maxHeight:2e4,center:!1,zoomable:!1,fit:!0,readonly:!0,animated:!0,node:Q})})})}),a.controls&&(0,_.jsxs)(ee,{children:[(0,_.jsx)(l.z,{onClick:function(){return function(e){var t,n,r;null!==(t=s.current)&&void 0!==t&&t.state.scale&&(null===(n=s.current)||void 0===n?void 0:n.state.scale)<2&&(null===(r=s.current)||void 0===r||r.setTransform(s.current.instance.transformState.positionX-200,s.current.instance.transformState.positionY-200,s.current.state.scale+e))}(.5)},children:(0,_.jsx)(x.SxL,{size:24})}),(0,_.jsx)(l.z,{onClick:function(){return function(e){var t,n,r;null!==(t=s.current)&&void 0!==t&&t.state.scale&&(null===(n=s.current)||void 0===n?void 0:n.state.scale)>.4&&(null===(r=s.current)||void 0===r||r.setTransform(s.current.instance.transformState.positionX+200,s.current.instance.transformState.positionY+200,s.current.state.scale-e))}(.4)},children:(0,_.jsx)(x.aAQ,{size:24})}),(0,_.jsx)(l.z,{onClick:function(){var e;return null===(e=s.current)||void 0===e?void 0:e.resetTransform()},children:(0,_.jsx)(x.vju,{size:24})}),(0,_.jsx)(l.z,{onClick:function(){return localStorage.setItem("json",t)},children:(0,_.jsx)(x.gg_,{size:24})})]})]}):null},ne=c.ZP.div.withConfig({displayName:"editor__StyledPageWrapper",componentId:"sc-19myogy-0"})(["display:flex;"]),re=c.ZP.div.withConfig({displayName:"editor__StyledIncompatible",componentId:"sc-19myogy-1"})(["display:none;@media only screen and (max-width:568px){position:fixed;top:0;left:0;display:flex;flex-direction:column;background:",';content:"This app is not compatible with your device!";color:',';width:100%;height:100vh;justify-content:center;align-items:center;button{margin-top:60px;}&::before{content:"Uh, oh!";font-weight:700;font-size:60px;opacity:0.6;}}'],(function(e){return e.theme.BLACK_LIGHT}),(function(e){return e.theme.SILVER})),ie=c.ZP.div.withConfig({displayName:"editor__StyledEditorWrapper",componentId:"sc-19myogy-2"})(["width:100%;overflow:hidden;@media only screen and (max-width:568px){display:none;}"]),oe=c.ZP.div.withConfig({displayName:"editor__StyledTools",componentId:"sc-19myogy-3"})(["display:flex;align-items:center;height:15px;border-bottom:1px solid ",";padding:4px 16px;background:",";color:",";"],(function(e){return e.theme.BLACK}),(function(e){return e.theme.BLACK_SECONDARY}),(function(e){return e.theme.SILVER})),se=(0,c.ZP)(a.Z).withConfig({displayName:"editor__StyledEditor",componentId:"sc-19myogy-4"})(["position:relative !important;display:flex;background:",";height:calc(100vh - 26px) !important;.Resizer{background:#000;opacity:0.2;z-index:1;box-sizing:border-box;background-clip:padding-box;}.Resizer:hover{transition:all 2s ease;}.Resizer.horizontal{height:11px;margin:-5px 0;border-top:5px solid rgba(255,255,255,0);border-bottom:5px solid rgba(255,255,255,0);cursor:row-resize;width:100%;}.Resizer.horizontal:hover{border-top:5px solid rgba(0,0,0,0.5);border-bottom:5px solid rgba(0,0,0,0.5);}.Resizer.vertical{width:11px;margin:0 -5px;border-left:5px solid rgba(255,255,255,0);border-right:5px solid rgba(255,255,255,0);cursor:col-resize;}.Resizer.vertical:hover{border-left:5px solid rgba(0,0,0,0.5);border-right:5px solid rgba(0,0,0,0.5);}.Resizer.disabled{cursor:not-allowed;}.Resizer.disabled:hover{border-color:transparent;}"],(function(e){return e.theme.BLACK_LIGHT})),ce=function(){var e=i.useState(JSON.stringify(J)),t=(0,r.Z)(e,2),n=t[0],c=t[1],a=(0,s.useRouter)();return i.useEffect((function(){var e=localStorage.getItem("json");e&&c(e)}),[]),(0,_.jsxs)(ne,{children:[(0,_.jsx)(o.default,{children:(0,_.jsx)("title",{children:"Editor | JSON Visio"})}),(0,_.jsx)(z,{setJson:c}),(0,_.jsxs)(ie,{children:[(0,_.jsx)(oe,{}),(0,_.jsxs)(se,{maxSize:800,minSize:300,defaultSize:450,split:"vertical",children:[(0,_.jsx)(B,{json:n,setJson:c}),(0,_.jsx)(te,{json:n,setJson:c})]})]}),(0,_.jsxs)(re,{children:["This app is not compatible with your device!",(0,_.jsx)(l.z,{className:"incompatible",onClick:function(){return a.push("/")},children:"Go Back"})]})]})}},545:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(6660)}])}},function(e){e.O(0,[617,228,445,955,319,987,825,872,774,888,179],(function(){return t=545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);