(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{107:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),o=n(a(0)),i=a(95),l=a(108),u=function(){return o.default.createElement(i.NavigationList,null,o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/"},"damienclarke.me")),o.default.createElement(i.NavigationListItem,null,o.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),o.default.createElement(i.NavigationListItem,null,o.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),o.default.createElement(i.NavigationListItem,{modifier:"section"},"Stuff"),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Javascript-libraries"},"Javascript libraries")),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Effects-pedals"},"Effects pedals")),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Music"},"Music")),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Arduino-libraries"},"Arduino libraries")),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Animation"},"Animation")),o.default.createElement(i.NavigationListItem,null,o.default.createElement(l.Link,{to:"/#Old-Flash-Games"},"Old Flash games")))};t.default=function(e){return o.default.createElement(i.ContentNav,(0,r.default)({nav:u},e))}},108:function(e,t,a){"use strict";var n=a(1),r=n(a(109)),o=n(a(110));e.exports={Link:r.default,IsRenderingStaticHtml:o.default}},109:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),o=n(a(102)),i=n(a(0)),l=n(a(94)),u=n(a(101));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,s=void 0===n?"Link":n,d=(0,o.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,r.default)({},d,{className:(0,u.default)({className:t,modifier:a,name:s})}))}},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return"undefined"==typeof window}},111:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0));t.default=function(){return r.default.createElement("div",{id:"disqus_thread"})}},120:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=a(95);t.default=function(e){var t=e.id;return r.default.createElement(o.ResponsiveBox,{modifier:"16-9"},r.default.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},127:function(e,t,a){e.exports=a.p+"static/shoosh-layout-39e60f058136eaa93589ca4b6d59360e.png"},128:function(e,t,a){e.exports=a.p+"static/shoosh-schematic-56b23e86cd6b2b9f7ef41e93d9a65cee.png"},136:function(e,t,a){e.exports=a.p+"static/shoosh-angle-f6d7e8b2843c68a5d07e989d4eb66197.jpg"},137:function(e,t,a){e.exports=a.p+"static/shoosh-inside-c3a765b7c5ea02cea1f464623a8d6e32.jpg"},315:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.h1,r=void 0===n?(0,o.createFactory)("h1"):n,m=a.h2,h=void 0===m?(0,o.createFactory)("h2"):m,v=a.p,g=void 0===v?(0,o.createFactory)("p"):v,b=a.wrapper;return(void 0===b?(0,o.createFactory)("div"):b)({},r({id:"Shoosh"},"Shoosh"),g({},"The Shoosh is a vactrol-based voltage controlled amplifier (VCA). It’s basically a volume control that can be set using a reference voltage from 0 to 5 volts, so this pedal can effectively fill the role of a tremolo, compressor, sidechain or volume pedal depending on what’s controlling it."),(0,o.createElement)(s.default,{id:"6V_dxQa8ePo"}),g({},"The single knob controls the total amount of gain."),(0,o.createElement)(i.Image,{src:d.default,alt:"Shoosh prototype."}),g({},"The board was quite small and only a single knob was required to control it, so I built it into a 1590A sized enclosure. Even then it was a tight squeeze that required the vero layout to be planned out with a little care."),(0,o.createElement)(i.Image,{src:c.default,alt:"Inside the Shoosh."}),g({},"The circuit is an original design, although not an original concept by any means. A vactrol is used to turn an externally provided control voltage (CV) into a resistance, which then controls the gain of the output. For much more information on how the circuit works and how to build it see my post on ",(0,o.createElement)(u.default,{to:"/effects-pedals/posts/building-a-vactrol-vca"},"how to build a vactrol-based VCA"),"."),h({id:"Shoosh-schematic"},"Shoosh schematic"),(0,o.createElement)(i.Link,{href:p.default,target:"_blank"},(0,o.createElement)(i.Image,{src:p.default})),h({id:"Shoosh-veroboard-layout"},"Shoosh veroboard layout"),(0,o.createElement)(i.Link,{href:f.default,target:"_blank"},(0,o.createElement)(i.Image,{src:f.default})),g({},"Is expanded upon this basic circuit to create ",(0,o.createElement)(u.default,{to:"/effects-pedals/blend2"},"an Arduino-controlled splitter / blender, the Blend2"),"."),(0,o.createElement)(l.default,null))},t.meta=void 0;var o=r(a(0)),i=a(95),l=n(a(111)),u=n(a(99)),s=n(a(120)),d=n(a(136)),c=n(a(137)),f=n(a(127)),p=n(a(128));t.meta={}},88:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(103)),i=n(a(315)),l=n(a(107));t.default=function(){return r.default.createElement(o.default,{title:"Shoosh",modifier:"defaultBackground"},r.default.createElement(l.default,{content:function(){return r.default.createElement(i.default,null)},pageNav:["# Shoosh","Shoosh schematic","Shoosh veroboard layout"]}))}},94:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(105)),o=n(a(27)),i=n(a(17)),l=n(a(12)),u=n(a(5)),s=n(a(3)),d=n(a(0)),c=a(18),f=a(96);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,u=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(a);return d.default.createElement(c.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:s,replace:m})),!0}},h))},t}(d.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},96:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return s.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var o=r(a(0)),i=r(a(3)),l=n(a(94)),u=r(a(97)),s=r(a(28)),d=o.default.createContext({});t.StaticQueryContext=d;var c=function(e){return o.default.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},97:function(e,t,a){var n;e.exports=(n=a(98))&&n.default||n},98:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(16)),o=n(a(0)),i=n(a(3)),l=n(a(29)),u=n(a(4)),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return o.default.createElement(l.default,(0,r.default)({location:t,pageResources:a},a.json))};s.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var d=s;t.default=d},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),o=n(a(102)),i=n(a(0)),l=n(a(94)),u=n(a(101));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,s=void 0===n?"Link":n,d=(0,o.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,r.default)({},d,{className:(0,u.default)({className:t,modifier:a,name:s})}))}}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-shoosh-js-ebb200e2affb3a5d0b87.js.map