(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(91),l=n(a(101));t.default=function(e){var t=e.content,a=e.nav;return r.default.createElement(i.Grid,null,r.default.createElement(i.GridItem,{modifier:"9 padding"},t()),r.default.createElement(i.GridItem,{modifier:"3 padding"},r.default.createElement(i.Box,{modifier:"paddingBottomMega"},r.default.createElement(l.default,null)),a&&a()))}},101:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(91),l=n(a(94));t.default=function(){return r.default.createElement(i.Box,{modifier:"paddingTopMega"},r.default.createElement(i.NavigationList,{modifier:"margin"},r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/"},"damienclarke.me")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com"))),r.default.createElement(i.NavigationList,{modifier:"margin"},r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#javascript-libraries"},"Javascript libs")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#effects-pedals"},"Effects pedals")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#music"},"Music")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#arduino-libraries"},"Arduino libs")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#animation"},"Animation")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#flash-games"},"Old Flash games"))))}},103:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(91),l=n(a(106)),o=n(a(100));t.default=function(e){var t=e.markdown,a=e.title,n=t;return r.default.createElement(l.default,{title:a},r.default.createElement(i.Box,{modifier:"defaultBackground"},r.default.createElement(i.Wrapper,null,r.default.createElement(i.Box,{modifier:"paddingBottomTera"},r.default.createElement(o.default,{content:function(){return r.default.createElement(i.Typography,null,r.default.createElement(n,null))}})))))}},278:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.a,r=void 0===n?(0,i.createFactory)("a"):n,d=a.h1,c=void 0===d?(0,i.createFactory)("h1"):d,f=a.h2,s=void 0===f?(0,i.createFactory)("h2"):f,p=a.p,m=void 0===p?(0,i.createFactory)("p"):p,v=a.wrapper;return(void 0===v?(0,i.createFactory)("div"):v)({},c({id:"Loopdeloop-submissions"},"Loopdeloop submissions"),m({},"Loops for ",r({href:"http://www.loopdeloop.org/"},"loopdeloop.org"),"."),s({id:"Dog"},"Dog"),(0,i.createElement)(u.default,{id:"282191207"}),s({id:"Mad"},"Mad"),(0,i.createElement)(u.default,{id:"48289893"}),s({id:"Dance"},"Dance"),(0,i.createElement)(u.default,{id:"165720790"}),s({id:"Fun"},"Fun"),(0,i.createElement)(l.Image,{src:o.default}),s({id:"Idiots"},"Idiots"),(0,i.createElement)(l.Image,{src:"https://66.media.tumblr.com/tumblr_m06pvu7sRh1r269aho1_500.gif"}),s({id:"Light"},"Light"),(0,i.createElement)(l.Image,{src:"https://66.media.tumblr.com/38fd4ab3bbb0efaf5cbab050a3a0195e/tumblr_mzxm9jttIM1r269aho1_500.gif"}))},t.meta=void 0;var i=r(a(0)),l=a(91),o=n(a(279)),u=n(a(280));t.meta={}},279:function(e,t,a){e.exports=a.p+"static/fun-6c53dfa166be69eb046203ea3697ae26.gif"},280:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(91);t.default=function(e){var t=e.id;return r.default.createElement(i.ResponsiveBox,{modifier:"16-9"},r.default.createElement("iframe",{src:"https://player.vimeo.com/video/".concat(t),frameBorder:"0",allowFullScreen:!0}))}},77:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(103)),l=n(a(278));t.default=function(){return r.default.createElement(i.default,{title:"Gravel is fun",markdown:l.default})}},92:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(93)),i=n(a(27)),l=n(a(16)),o=n(a(12)),u=n(a(5)),d=n(a(3)),c=n(a(0)),f=a(18),s=a(97);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:d.default.string,activeStyle:d.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,s.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,s.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,s.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,o=t.onClick,u=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(a);return c.default.createElement(f.Link,(0,i.default)({to:g,state:d,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,s.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),h(a,{state:d,replace:m})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var g=v;t.default=g;var h=function(e,t){window.___navigate(p(e),t)};t.navigate=h;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},93:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},94:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(96)),l=n(a(0)),o=n(a(92)),u=n(a(104));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,c=(0,i.default)(e,["className","modifier","name"]);return l.default.createElement(o.default,(0,r.default)({},c,{className:(0,u.default)({className:t,modifier:a,name:d})}))}},96:function(e,t,a){var n=a(93);e.exports=function(e,t){if(null==e)return{};var a,r,i=n(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}},97:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(0)),l=r(a(3)),o=n(a(92)),u=r(a(98)),d=r(a(28)),c=i.default.createContext({});t.StaticQueryContext=c;var f=function(e){return i.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=f,f.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},98:function(e,t,a){var n;e.exports=(n=a(99))&&n.default||n},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(17)),i=n(a(0)),l=n(a(3)),o=n(a(29)),u=n(a(4)),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return i.default.createElement(o.default,(0,r.default)({location:t,pageResources:a},a.json))};d.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var c=d;t.default=c}}]);
//# sourceMappingURL=component---src-pages-animation-loopdeloop-js-cfccd19a95fbd837e341.js.map