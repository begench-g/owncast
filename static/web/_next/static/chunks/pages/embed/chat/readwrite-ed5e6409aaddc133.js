(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955,4218],{20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(4942),r=n(87462),i=n(97685),a=n(97937),c=n(94184),l=n.n(c),s=n(98423),u=n(67294),f=n(53124),p=n(98787),d=n(68349),h=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},m=RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),b=RegExp("^(".concat(p.E.join("|"),")$")),g=u.forwardRef(function(e,t){var n,c=e.prefixCls,p=e.className,h=e.style,g=e.children,x=e.icon,y=e.color,j=e.onClose,k=e.closeIcon,_=e.closable,O=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=u.useContext(f.E_),N=C.getPrefixCls,E=C.direction,w=u.useState(!0),Z=(0,i.Z)(w,2),T=Z[0],P=Z[1];u.useEffect(function(){"visible"in O&&P(O.visible)},[O.visible]);var S=function(){return!!y&&(m.test(y)||b.test(y))},I=(0,r.Z)({backgroundColor:y&&!S()?y:void 0},h),H=S(),L=N("tag",c),$=l()(L,(n={},(0,o.Z)(n,"".concat(L,"-").concat(y),H),(0,o.Z)(n,"".concat(L,"-has-color"),y&&!H),(0,o.Z)(n,"".concat(L,"-hidden"),!T),(0,o.Z)(n,"".concat(L,"-rtl"),"rtl"===E),n),p),J=function(e){e.stopPropagation(),null==j||j(e),!e.defaultPrevented&&("visible"in O||P(!1))},R="onClick"in O||g&&"a"===g.type,U=(0,s.Z)(O,["visible"]),D=x||null,F=D?u.createElement(u.Fragment,null,D,u.createElement("span",null,g)):g,M=u.createElement("span",(0,r.Z)({},U,{ref:t,className:$,style:I}),F,void 0!==_&&_?k?u.createElement("span",{className:"".concat(L,"-close-icon"),onClick:J},k):u.createElement(a.Z,{className:"".concat(L,"-close-icon"),onClick:J}):null);return R?u.createElement(d.Z,null,M):M});g.CheckableTag=function(e){var t,n=e.prefixCls,i=e.className,a=e.checked,c=e.onChange,s=e.onClick,p=h(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=l()(d,(t={},(0,o.Z)(t,"".concat(d,"-checkable"),!0),(0,o.Z)(t,"".concat(d,"-checkable-checked"),a),t),i);return u.createElement("span",(0,r.Z)({},p,{className:v,onClick:function(e){null==c||c(!a),null==s||s(e)}}))};var x=g},62705:function(e,t,n){var o=n(55639).Symbol;e.exports=o},44239:function(e,t,n){var o=n(62705),r=n(89607),i=n(2333),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},27561:function(e,t,n){var o=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},31957:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},89607:function(e,t,n){var o=n(62705),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=a.call(e);return o&&(t?e[c]=n:delete e[c]),r}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var o=n(31957),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var o=n(13218),r=n(7771),i=n(14841),a=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,f,p,d,h=0,v=!1,m=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,o=s;return l=s=void 0,h=t,f=e.apply(o,n)}function x(e){var n=e-d,o=e-h;return void 0===d||n>=t||n<0||m&&o>=u}function y(){var e,n,o,i=r();if(x(i))return j(i);p=setTimeout(y,(e=i-d,n=i-h,o=t-e,m?c(o,u-n):o))}function j(e){return(p=void 0,b&&l)?g(e):(l=s=void 0,f)}function k(){var e,n=r(),o=x(n);if(l=arguments,s=this,d=n,o){if(void 0===p)return h=e=d,p=setTimeout(y,t),v?g(e):f;if(m)return clearTimeout(p),p=setTimeout(y,t),g(d)}return void 0===p&&(p=setTimeout(y,t)),f}return t=i(t)||0,o(n)&&(v=!!n.leading,u=(m="maxWait"in n)?a(i(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==p&&clearTimeout(p),h=0,l=d=s=p=void 0},k.flush=function(){return void 0===p?f:j(r())},k}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var o=n(44239),r=n(37005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},7771:function(e,t,n){var o=n(55639);e.exports=function(){return o.Date.now()}},14841:function(e,t,n){var o=n(27561),r=n(13218),i=n(33448),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?a:+e}},30672:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return n(34986)}])},6097:function(e,t,n){"use strict";n.d(t,{h:function(){return m}});var o=n(85893),r=n(94199),i=n(20550),a=n(94184),c=n.n(a),l=n(5152),s=n.n(l),u=n(41664),f=n.n(u),p=n(50738),d=n(31764),h=n.n(d);let v=s()(()=>Promise.all([n.e(4931),n.e(3013),n.e(850)]).then(n.bind(n,80850)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[80850]},ssr:!1}),m=e=>{let{name:t="Your stream title",chatAvailable:n,chatDisabled:a,online:l}=e;return(0,o.jsxs)("header",{className:c()(["".concat(h().header)],"global-header"),children:[l?(0,o.jsx)(f(),{href:"#player",className:h().skipLink,children:"Skip to player"}):(0,o.jsx)(f(),{href:"#offline-message",className:h().skipLink,children:"Skip to offline message"}),(0,o.jsx)(f(),{href:"#skip-to-content",className:h().skipLink,children:"Skip to page content"}),(0,o.jsx)(f(),{href:"#footer",className:h().skipLink,children:"Skip to footer"}),(0,o.jsxs)("div",{className:h().logo,children:[(0,o.jsx)("div",{id:"header-logo",className:h().logoImage,children:(0,o.jsx)(p.C,{variant:"contrast"})}),(0,o.jsx)("h1",{className:h().title,id:"global-header-text",children:t})]}),n&&!a&&(0,o.jsx)(v,{}),!n&&!a&&(0,o.jsx)(r.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(i.Z,{className:h().offlineTag,children:"Chat offline"})})]})};t.Z=m},34986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(85893),r=n(4480),i=n(83366),a=n(77466),c=n(6097);function l(){let e=(0,r.sJ)(a.db),t=(0,r.sJ)(a.pH),n=(0,r.sJ)(a.g1),l=(0,r.sJ)(a.Q),{name:s,chatDisabled:u}=n,{videoAvailable:f}=l;if(!e)return null;let{id:p,displayName:d,isModerator:h}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(a.me,{}),(0,o.jsx)(c.Z,{name:s,chatAvailable:!0,chatDisabled:u,online:f}),(0,o.jsx)(i.ChatContainer,{messages:t,usernameToHighlight:d,chatUserId:p,isModerator:h,showInput:!0,height:"80vh"})]})}},31764:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2",skipLink:"Header_skipLink__9Pusb",offlineTag:"Header_offlineTag__0p3lk"}}},function(e){e.O(0,[1272,8700,2744,9680,492,7606,5320,180,7466,3366,9774,2888,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);