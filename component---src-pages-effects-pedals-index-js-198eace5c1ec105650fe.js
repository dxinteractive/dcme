(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27)),o=a(n(101)),i=a(n(0)),u=a(n(93)),l=a(n(99));t.default=function(e){var t=e.className,n=e.modifier,a=e.name,d=void 0===a?"Link":a,s=(0,o.default)(e,["className","modifier","name"]);return i.default.createElement(u.default,(0,r.default)({},s,{className:(0,l.default)({className:t,modifier:n,name:d})}))}},105:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=n(94),i=a(n(102));t.default=function(e){var t=e.title,n=e.content;return r.default.createElement(i.default,null,r.default.createElement(o.Wrapper,null,r.default.createElement(o.Box,{modifier:"invertedCopy invertedBackground"},r.default.createElement(o.CenteredLanding,{top:t,bottom:n}))))}},84:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=n(94),i=a(n(105)),u=a(n(100));t.default=function(){return r.default.createElement(i.default,{title:function(){return r.default.createElement(o.Text,{element:"h1",modifier:"sizeTera center"},"Almost there")},content:function(){return r.default.createElement(o.Box,null,r.default.createElement(o.Text,{element:"p",modifier:"monospace center margin"},"This page has moved ",r.default.createElement(u.default,{to:"/#effects-pedals"},"here"),"."))}})}},93:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(104)),o=a(n(27)),i=a(n(17)),u=a(n(12)),l=a(n(5)),d=a(n(3)),s=a(n(0)),c=n(18),f=n(95);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var v={activeClassName:d.default.string,activeStyle:d.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(n);return s.default.createElement(c.Link,(0,o.default)({to:h,state:d,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:d,replace:v})),!0}},m))},t}(s.default.Component);m.propTypes=(0,o.default)({},v,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var h=m;t.default=h;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},95:function(e,t,n){"use strict";var a=n(15),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return u.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return u.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return u.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return u.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return u.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var o=r(n(0)),i=r(n(3)),u=a(n(93)),l=r(n(96)),d=r(n(28)),s=o.default.createContext({});t.StaticQueryContext=s;var c=function(e){return o.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},96:function(e,t,n){var a;e.exports=(a=n(97))&&a.default||a},97:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(16)),o=a(n(0)),i=a(n(3)),u=a(n(29)),l=a(n(4)),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.default.createElement(u.default,(0,r.default)({location:t,pageResources:n},n.json))};d.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var s=d;t.default=s}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-index-js-198eace5c1ec105650fe.js.map