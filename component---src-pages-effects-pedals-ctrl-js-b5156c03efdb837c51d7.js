(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0));t.default=function(){return r.default.createElement("div",{id:"disqus_thread"})}},108:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(0)),u=a(95),o=a(109),l=function(){return i.default.createElement(u.NavigationList,null,i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/"},"damienclarke.me")),i.default.createElement(u.NavigationListItem,null,i.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),i.default.createElement(u.NavigationListItem,null,i.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),i.default.createElement(u.NavigationListItem,{modifier:"section"},"Stuff"),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Javascript-libraries"},"Javascript libraries")),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Effects-pedals"},"Effects pedals")),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Music"},"Music")),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Arduino-libraries"},"Arduino libraries")),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Animation"},"Animation")),i.default.createElement(u.NavigationListItem,null,i.default.createElement(o.Link,{to:"/#Old-Flash-Games"},"Old Flash games")))};t.default=function(e){return i.default.createElement(u.ContentNav,(0,r.default)({nav:l},e))}},109:function(e,t,a){"use strict";var n=a(1),r=n(a(110)),i=n(a(111));e.exports={Link:r.default,IsRenderingStaticHtml:i.default}},110:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(102)),u=n(a(0)),o=n(a(94)),l=n(a(101));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,s=(0,i.default)(e,["className","modifier","name"]);return u.default.createElement(o.default,(0,r.default)({},s,{className:(0,l.default)({className:t,modifier:a,name:d})}))}},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return"undefined"==typeof window}},120:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(95);t.default=function(e){var t=e.id;return r.default.createElement(i.ResponsiveBox,{modifier:"16-9"},r.default.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},127:function(e,t,a){e.exports=a.p+"static/shoosh-layout-39e60f058136eaa93589ca4b6d59360e.png"},128:function(e,t,a){e.exports=a.p+"static/shoosh-schematic-56b23e86cd6b2b9f7ef41e93d9a65cee.png"},136:function(e,t,a){e.exports=a.p+"static/shoosh-angle-f6d7e8b2843c68a5d07e989d4eb66197.jpg"},137:function(e,t,a){e.exports=a.p+"static/shoosh-inside-c3a765b7c5ea02cea1f464623a8d6e32.jpg"},307:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.h1,r=void 0===n?(0,i.createFactory)("h1"):n,o=a.p,l=void 0===o?(0,i.createFactory)("p"):o,d=a.wrapper;return(void 0===d?(0,i.createFactory)("div"):d)({},r({id:"CTRL"},"CTRL"),l({},"Details coming soon."),(0,i.createElement)(u.default,null))},t.meta=void 0;var i=r(a(0)),u=(a(95),n(a(107)));n(a(99)),n(a(120)),n(a(136)),n(a(137)),n(a(127)),n(a(128));t.meta={}},84:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(103)),u=n(a(307)),o=n(a(108));t.default=function(){return r.default.createElement(i.default,{title:"CTRL",modifier:"defaultBackground"},r.default.createElement(o.default,{content:function(){return r.default.createElement(u.default,null)},pageNav:["# CTRL"]}))}},94:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(105)),i=n(a(27)),u=n(a(17)),o=n(a(12)),l=n(a(5)),d=n(a(3)),s=n(a(0)),c=a(18),f=a(96);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:d.default.string,activeStyle:d.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,u.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,u=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(a);return s.default.createElement(c.Link,(0,i.default)({to:h,state:d,getProps:u,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:d,replace:m})),!0}},v))},t}(s.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},96:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(0)),u=r(a(3)),o=n(a(94)),l=r(a(97)),d=r(a(28)),s=i.default.createContext({});t.StaticQueryContext=s;var c=function(e){return i.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},97:function(e,t,a){var n;e.exports=(n=a(98))&&n.default||n},98:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(16)),i=n(a(0)),u=n(a(3)),o=n(a(29)),l=n(a(4)),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.default.createElement(o.default,(0,r.default)({location:t,pageResources:a},a.json))};d.propTypes={location:u.default.shape({pathname:u.default.string.isRequired}).isRequired};var s=d;t.default=s},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(102)),u=n(a(0)),o=n(a(94)),l=n(a(101));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,s=(0,i.default)(e,["className","modifier","name"]);return u.default.createElement(o.default,(0,r.default)({},s,{className:(0,l.default)({className:t,modifier:a,name:d})}))}}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-ctrl-js-b5156c03efdb837c51d7.js.map