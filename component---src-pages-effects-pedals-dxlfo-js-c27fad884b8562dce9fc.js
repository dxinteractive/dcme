(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,t,a){var n=a(98);e.exports=function(e,t){if(null==e)return{};var a,r,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},101:function(e,t,a){"use strict";var n=a(15),r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var o=r(a(0)),i=r(a(3)),l=n(a(97)),u=r(a(102)),d=r(a(28)),s=o.default.createContext({});t.StaticQueryContext=s;var c=function(e){return o.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},102:function(e,t,a){var n;e.exports=(n=a(103))&&n.default||n},103:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(17)),o=n(a(0)),i=n(a(3)),l=n(a(29)),u=n(a(4)),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return o.default.createElement(l.default,(0,r.default)({location:t,pageResources:a},a.json))};d.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var s=d;t.default=s},107:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=a(96),i=n(a(108));t.default=function(e){var t=e.content,a=e.nav;return e.navFirst?r.default.createElement(o.Grid,null,r.default.createElement(o.GridItem,{modifier:"3 push9"},r.default.createElement(o.Box,{modifier:"paddingLeft"},r.default.createElement(o.Box,{modifier:"paddingBottomMega"},r.default.createElement(i.default,null))),a&&a()),r.default.createElement(o.GridItem,{modifier:"9 pull3"},t())):r.default.createElement(o.Grid,null,r.default.createElement(o.GridItem,{modifier:"9 padding"},t()),r.default.createElement(o.GridItem,{modifier:"3 padding"},r.default.createElement(o.Box,{modifier:"paddingBottomMega"},r.default.createElement(i.default,null)),a&&a()))}},108:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=a(96),i=n(a(99));t.default=function(){return r.default.createElement(o.Box,{modifier:"paddingTopMega"},r.default.createElement(o.NavigationList,{modifier:"margin"},r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/"},"damienclarke.me")),r.default.createElement(o.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),r.default.createElement(o.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com"))),r.default.createElement(o.NavigationList,{modifier:"margin"},r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#javascript-libraries"},"Javascript libraries")),r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#effects-pedals"},"Effects pedals")),r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#music"},"Music")),r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#arduino-libraries"},"Arduino libraries")),r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#animation"},"Animation")),r.default.createElement(o.NavigationListItem,null,r.default.createElement(i.default,{to:"/#flash-games"},"Old Flash games"))))}},111:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=a(96),i=n(a(106)),l=n(a(107));t.default=function(e){var t=e.markdown,a=e.title,n=t;return r.default.createElement(i.default,{title:a},r.default.createElement(o.Box,{modifier:"defaultBackground"},r.default.createElement(o.Wrapper,null,r.default.createElement(o.Box,{modifier:"paddingBottomTera"},r.default.createElement(l.default,{content:function(){return r.default.createElement(o.Typography,null,r.default.createElement(n,null))}})))))}},113:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0));t.default=function(){return r.default.createElement("div",{id:"disqus_thread"})}},298:function(e,t,a){"use strict";var n=a(1),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.a,r=void 0===n?(0,o.createFactory)("a"):n,c=a.h1,f=void 0===c?(0,o.createFactory)("h1"):c,m=a.h3,p=void 0===m?(0,o.createFactory)("h3"):m,h=a.li,v=void 0===h?(0,o.createFactory)("li"):h,g=a.p,b=void 0===g?(0,o.createFactory)("p"):g,y=a.ul,w=void 0===y?(0,o.createFactory)("ul"):y,E=a.wrapper;return(void 0===E?(0,o.createFactory)("div"):E)({},f({id:"DXLFO"},"DXLFO"),b({},"The DXLFO was a programmable, Arduino-controlled harmonic tremolo* with control voltage outputs. Originally while browsing the ",r({href:"http://www.diystompboxes.com/smfforum/"},"diystompboxes.com forums")," I found a thread about the ",r({href:"http://www.diystompboxes.com/smfforum/index.php?topic=103714.0"},"Twin Peaks Tap Tremolo"),". I really liked the idea behind this pedal, especially the tap tempo function and the different tremolo shapes it could provide. In designing the DXLFO I built the audio signal path in a reasonably similar way, but I wanted to control the tempo and LFO(s) using an Arduino to allow for much more flexibility in modifying LFO patterns. And threw in a screen to display the waveform."),(0,o.createElement)(i.Image,{src:d.default}),b({},"The DXLFO’s audio circuit differed from the Twin Peaks Tremolo in that it had:"),w({},v({},"A relay to switch between the “harmonic tremolo” and a regular tremolo / volume control mode, so that there was the option to preserve the frequency response through the circuit."),v({},"A different tone control that worked more like a band pass filter blended with the original signal.")),b({},"The LFO circuit was completely different. The DXLFO was able to accept a 0-5V CV signal or an expression pedal as an input, which could be used to control any parameter of either of the two internal LFOs. Subdivision of beats was possible, so you could tap quarter notes with your foot and the tremolo would operate on 16ths, and attack and release curves could be played with to modify the shape of the modulation signals. The LFOs could also be optionally set to output a 0-5V control voltage through the two CV outputs, to control other pedals in more complex ways or to control the volume of the audio signal like in a normal tremolo effect or harmonic tremolo."),(0,o.createElement)(i.Image,{src:s.default}),b({},"It was fully designed, working on a breadboard and I’d begun building the DXLFO’s enclosure when I had bigger ideas for my pedalboard as a whole, and it made more sense to split the DXLFO’s core functions apart. Instead of a single box I wanted to use a ",(0,o.createElement)(u.default,{to:"/effects-pedals/shoosh"},"dedicated VCA")," to modulate the volume of the signal, and leave the signal generation, LFO and routing of CV signals to another pedal, which became the idea behind the ",(0,o.createElement)(u.default,{to:"/effects-pedals/ctrl"},"CTRL signal controller"),"."),p({id:"*Footnote:-the-harmonic-tremolo"},"*Footnote: the harmonic tremolo"),b({},"The original harmonic tremolo was a Fender creation that took two tremolo effects and applied one to the low frequencies and one to the high frequencies, so that instead of modulating the volume (“soft-loud-soft-loud”) it would instead alternate between the lower frequencies and the higher ones (“lows-highs-lows-highs”)."),(0,o.createElement)(l.default,null))},t.meta=void 0;var o=r(a(0)),i=a(96),l=n(a(113)),u=n(a(99)),d=n(a(299)),s=n(a(300));t.meta={}},299:function(e,t,a){e.exports=a.p+"static/dxlfo-c31a6f3d49e051e567b28ee14267f938.jpg"},300:function(e,t,a){e.exports=a.p+"static/dxlfo-apart-6ec7a9420d5265fb0c2d8bd1e4dbf432.jpg"},87:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(111)),i=n(a(298));t.default=function(){return r.default.createElement(o.default,{title:"DXLFO",markdown:i.default})}},97:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(98)),o=n(a(27)),i=n(a(16)),l=n(a(12)),u=n(a(5)),d=n(a(3)),s=n(a(0)),c=a(18),f=a(101);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:d.default.string,activeStyle:d.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,u=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),p=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return s.default.createElement(c.Link,(0,o.default)({to:v,state:d,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:d,replace:p})),!0}},h))},t}(s.default.Component);h.propTypes=(0,o.default)({},p,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(m(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},98:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27)),o=n(a(100)),i=n(a(0)),l=n(a(97)),u=n(a(105));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,s=(0,o.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,r.default)({},s,{className:(0,u.default)({className:t,modifier:a,name:d})}))}}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-dxlfo-js-c27fad884b8562dce9fc.js.map