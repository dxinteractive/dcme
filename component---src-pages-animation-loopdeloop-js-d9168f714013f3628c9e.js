(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(0)),o=a(94),l=a(107),u=function(){return i.default.createElement(o.NavigationList,null,i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/"},"damienclarke.me")),i.default.createElement(o.NavigationListItem,null,i.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),i.default.createElement(o.NavigationListItem,null,i.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),i.default.createElement(o.NavigationListItem,{modifier:"section"},"Stuff"),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Javascript-libraries"},"Javascript libraries")),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Effects-pedals"},"Effects pedals")),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Music"},"Music")),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Arduino-libraries"},"Arduino libraries")),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Animation"},"Animation")),i.default.createElement(o.NavigationListItem,null,i.default.createElement(l.Link,{to:"/#Old-Flash-Games"},"Old Flash games")))};t.default=function(e){return i.default.createElement(o.ContentNav,(0,r.default)({nav:u},e))}},107:function(e,t,a){"use strict";var n=a(1),r=n(a(108)),i=n(a(109));e.exports={Link:r.default,IsRenderingStaticHtml:i.default}},108:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(101)),o=n(a(0)),l=n(a(93)),u=n(a(99));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,s=(0,i.default)(e,["className","modifier","name"]);return o.default.createElement(l.default,(0,r.default)({},s,{className:(0,u.default)({className:t,modifier:a,name:d})}))}},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return"undefined"==typeof window}},290:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.a,r=void 0===n?(0,i.createFactory)("a"):n,d=a.h1,s=void 0===d?(0,i.createFactory)("h1"):d,c=a.h2,f=void 0===c?(0,i.createFactory)("h2"):c,p=a.p,m=void 0===p?(0,i.createFactory)("p"):p,v=a.wrapper;return(void 0===v?(0,i.createFactory)("div"):v)({},s({id:"Loopdeloop-submissions"},"Loopdeloop submissions"),m({},"Loops for ",r({href:"http://www.loopdeloop.org/"},"loopdeloop.org"),"."),f({id:"Dog"},"Dog"),(0,i.createElement)(u.default,{id:"282191207"}),f({id:"Mad"},"Mad"),(0,i.createElement)(u.default,{id:"48289893"}),f({id:"Dance"},"Dance"),(0,i.createElement)(u.default,{id:"165720790"}),f({id:"Fun"},"Fun"),(0,i.createElement)(o.Image,{src:l.default}),f({id:"Idiots"},"Idiots"),(0,i.createElement)(o.Image,{src:"https://66.media.tumblr.com/tumblr_m06pvu7sRh1r269aho1_500.gif"}),f({id:"Light"},"Light"),(0,i.createElement)(o.Image,{src:"https://66.media.tumblr.com/38fd4ab3bbb0efaf5cbab050a3a0195e/tumblr_mzxm9jttIM1r269aho1_500.gif"}))},t.meta=void 0;var i=r(a(0)),o=a(94),l=n(a(291)),u=n(a(292));t.meta={}},291:function(e,t,a){e.exports=a.p+"static/fun-6c53dfa166be69eb046203ea3697ae26.gif"},292:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(94);t.default=function(e){var t=e.id;return r.default.createElement(i.ResponsiveBox,{modifier:"16-9"},r.default.createElement("iframe",{src:"https://player.vimeo.com/video/".concat(t),frameBorder:"0",allowFullScreen:!0}))}},74:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(102)),o=n(a(290)),l=n(a(106));t.default=function(){return r.default.createElement(i.default,{title:"Loopdeloop submissions",modifier:"defaultBackground"},r.default.createElement(l.default,{content:function(){return r.default.createElement(o.default,null)},pageNav:["# Loopdeloop submissions","Dog","Mad","Dance","Fun","Idiots","Light"]}))}},93:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(104)),i=n(a(27)),o=n(a(17)),l=n(a(12)),u=n(a(5)),d=n(a(3)),s=n(a(0)),c=a(18),f=a(95);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:d.default.string,activeStyle:d.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,u=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(a);return s.default.createElement(c.Link,(0,i.default)({to:h,state:d,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:d,replace:m})),!0}},v))},t}(s.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},95:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(0)),o=r(a(3)),l=n(a(93)),u=r(a(96)),d=r(a(28)),s=i.default.createContext({});t.StaticQueryContext=s;var c=function(e){return i.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:o.default.object,query:o.default.string.isRequired,render:o.default.func,children:o.default.func}},96:function(e,t,a){var n;e.exports=(n=a(97))&&n.default||n},97:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(16)),i=n(a(0)),o=n(a(3)),l=n(a(29)),u=n(a(4)),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return i.default.createElement(l.default,(0,r.default)({location:t,pageResources:a},a.json))};d.propTypes={location:o.default.shape({pathname:o.default.string.isRequired}).isRequired};var s=d;t.default=s}}]);
//# sourceMappingURL=component---src-pages-animation-loopdeloop-js-d9168f714013f3628c9e.js.map