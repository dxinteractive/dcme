(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,a){var n=a(98);e.exports=function(e,t){if(null==e)return{};var a,r,i=n(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}},101:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return u.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return u.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return u.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return u.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return u.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(0)),l=r(a(3)),u=n(a(97)),o=r(a(102)),d=r(a(28)),f=i.default.createContext({});t.StaticQueryContext=f;var c=function(e){return i.default.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},102:function(e,t,a){var n;e.exports=(n=a(103))&&n.default||n},103:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(17)),i=n(a(0)),l=n(a(3)),u=n(a(29)),o=n(a(4)),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.default.createElement(u.default,(0,r.default)({location:t,pageResources:a},a.json))};d.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var f=d;t.default=f},107:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(96),l=n(a(108));t.default=function(e){var t=e.content,a=e.nav;return e.navFirst?r.default.createElement(i.Grid,null,r.default.createElement(i.GridItem,{modifier:"3 push9"},r.default.createElement(i.Box,{modifier:"paddingLeft"},r.default.createElement(i.Box,{modifier:"paddingBottomMega"},r.default.createElement(l.default,null))),a&&a()),r.default.createElement(i.GridItem,{modifier:"9 pull3"},t())):r.default.createElement(i.Grid,null,r.default.createElement(i.GridItem,{modifier:"9 padding"},t()),r.default.createElement(i.GridItem,{modifier:"3 padding"},r.default.createElement(i.Box,{modifier:"paddingBottomMega"},r.default.createElement(l.default,null)),a&&a()))}},108:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(96),l=n(a(99));t.default=function(){return r.default.createElement(i.Box,{modifier:"paddingTopMega"},r.default.createElement(i.NavigationList,{modifier:"margin"},r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/"},"damienclarke.me")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com"))),r.default.createElement(i.NavigationList,{modifier:"margin"},r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#javascript-libraries"},"Javascript libraries")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#effects-pedals"},"Effects pedals")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#music"},"Music")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#arduino-libraries"},"Arduino libraries")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#animation"},"Animation")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.default,{to:"/#flash-games"},"Old Flash games"))))}},111:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(96),l=n(a(106)),u=n(a(107));t.default=function(e){var t=e.markdown,a=e.title,n=t;return r.default.createElement(l.default,{title:a},r.default.createElement(i.Box,{modifier:"defaultBackground"},r.default.createElement(i.Wrapper,null,r.default.createElement(i.Box,{modifier:"paddingBottomTera"},r.default.createElement(u.default,{content:function(){return r.default.createElement(i.Typography,null,r.default.createElement(n,null))}})))))}},113:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0));t.default=function(){return r.default.createElement("div",{id:"disqus_thread"})}},116:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=a(96);t.default=function(e){var t=e.id;return r.default.createElement(i.ResponsiveBox,{modifier:"16-9"},r.default.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},129:function(e,t,a){e.exports=a.p+"static/shoosh-layout-39e60f058136eaa93589ca4b6d59360e.png"},130:function(e,t,a){e.exports=a.p+"static/shoosh-schematic-56b23e86cd6b2b9f7ef41e93d9a65cee.png"},141:function(e,t,a){e.exports=a.p+"static/shoosh-angle-f6d7e8b2843c68a5d07e989d4eb66197.jpg"},142:function(e,t,a){e.exports=a.p+"static/shoosh-inside-c3a765b7c5ea02cea1f464623a8d6e32.jpg"},297:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.h1,r=void 0===n?(0,i.createFactory)("h1"):n,u=a.p,o=void 0===u?(0,i.createFactory)("p"):u,d=a.wrapper;return(void 0===d?(0,i.createFactory)("div"):d)({},r({id:"CTRL"},"CTRL"),o({},"Details coming soon."),(0,i.createElement)(l.default,null))},t.meta=void 0;var i=r(a(0)),l=(a(96),n(a(113)));n(a(99)),n(a(116)),n(a(141)),n(a(142)),n(a(129)),n(a(130));t.meta={}},86:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(111)),l=n(a(297));t.default=function(){return r.default.createElement(i.default,{title:"CTRL",markdown:l.default})}},97:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(98)),i=n(a(27)),l=n(a(16)),u=n(a(12)),o=n(a(5)),d=n(a(3)),f=n(a(0)),c=a(18),s=a(101);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:d.default.string,activeStyle:d.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,o.default)((0,u.default)((0,u.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,u.default)((0,u.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,s.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,s.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,s.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,u=t.onClick,o=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(a);return f.default.createElement(c.Link,(0,i.default)({to:h,state:d,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,s.parsePath)(a).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:d,replace:m})),!0}},v))},t}(f.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},98:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),i=n(a(100)),l=n(a(0)),u=n(a(97)),o=n(a(105));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,f=(0,i.default)(e,["className","modifier","name"]);return l.default.createElement(u.default,(0,r.default)({},f,{className:(0,o.default)({className:t,modifier:a,name:d})}))}}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-ctrl-js-6124086ca10150229c7a.js.map