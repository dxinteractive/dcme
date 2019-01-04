(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=a(91),i=n(a(101));t.default=function(e){var t=e.content,a=e.nav;return o.default.createElement(r.Grid,null,o.default.createElement(r.GridItem,{modifier:"9 padding"},t()),o.default.createElement(r.GridItem,{modifier:"3 padding"},o.default.createElement(r.Box,{modifier:"paddingBottomMega"},o.default.createElement(i.default,null)),a&&a()))}},101:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=a(91),i=n(a(94));t.default=function(){return o.default.createElement(r.Box,{modifier:"paddingTopMega"},o.default.createElement(r.NavigationList,{modifier:"margin"},o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/"},"damienclarke.me")),o.default.createElement(r.NavigationListItem,null,o.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),o.default.createElement(r.NavigationListItem,null,o.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com"))),o.default.createElement(r.NavigationList,{modifier:"margin"},o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#javascript-libraries"},"Javascript libs")),o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#effects-pedals"},"Effects pedals")),o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#music"},"Music")),o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#arduino-libraries"},"Arduino libs")),o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#animation"},"Animation")),o.default.createElement(r.NavigationListItem,null,o.default.createElement(i.default,{to:"/#flash-games"},"Old Flash games"))))}},103:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=a(91),i=n(a(106)),l=n(a(100));t.default=function(e){var t=e.markdown,a=e.title,n=t;return o.default.createElement(i.default,{title:a},o.default.createElement(r.Box,{modifier:"defaultBackground"},o.default.createElement(r.Wrapper,null,o.default.createElement(r.Box,{modifier:"paddingBottomTera"},o.default.createElement(l.default,{content:function(){return o.default.createElement(r.Typography,null,o.default.createElement(n,null))}})))))}},107:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0));t.default=function(){return o.default.createElement("div",{id:"disqus_thread"})}},293:function(e,t,a){"use strict";var n=a(1),o=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,n=a.a,o=void 0===n?(0,r.createFactory)("a"):n,c=a.h1,f=void 0===c?(0,r.createFactory)("h1"):c,p=a.h3,m=void 0===p?(0,r.createFactory)("h3"):p,h=a.li,v=void 0===h?(0,r.createFactory)("li"):h,g=a.p,b=void 0===g?(0,r.createFactory)("p"):g,y=a.ul,w=void 0===y?(0,r.createFactory)("ul"):y,E=a.wrapper;return(void 0===E?(0,r.createFactory)("div"):E)({},f({id:"DXLFO"},"DXLFO"),b({},"The DXLFO was a programmable, Arduino-controlled harmonic tremolo* with control voltage outputs. Originally while browsing the ",o({href:"http://www.diystompboxes.com/smfforum/"},"diystompboxes.com forums")," I found a thread about the ",o({href:"http://www.diystompboxes.com/smfforum/index.php?topic=103714.0"},"Twin Peaks Tap Tremolo"),". I really liked the idea behind this pedal, especially the tap tempo function and the different tremolo shapes it could provide. In designing the DXLFO I built the audio signal path in a reasonably similar way, but I wanted to control the tempo and LFO(s) using an Arduino to allow for much more flexibility in modifying LFO patterns. And threw in a screen to display the waveform."),(0,r.createElement)(i.Image,{src:d.default}),b({},"The DXLFO’s audio circuit differed from the Twin Peaks Tremolo in that it had:"),w({},v({},"A relay to switch between the “harmonic tremolo” and a regular tremolo / volume control mode, so that there was the option to preserve the frequency response through the circuit."),v({},"A different tone control that worked more like a band pass filter blended with the original signal.")),b({},"The LFO circuit was completely different. The DXLFO was able to accept a 0-5V CV signal or an expression pedal as an input, which could be used to control any parameter of either of the two internal LFOs. Subdivision of beats was possible, so you could tap quarter notes with your foot and the tremolo would operate on 16ths, and attack and release curves could be played with to modify the shape of the modulation signals. The LFOs could also be optionally set to output a 0-5V control voltage through the two CV outputs, to control other pedals in more complex ways or to control the volume of the audio signal like in a normal tremolo effect or harmonic tremolo."),(0,r.createElement)(i.Image,{src:s.default}),b({},"It was fully designed, working on a breadboard and I’d begun building the DXLFO’s enclosure when I had bigger ideas for my pedalboard as a whole, and it made more sense to split the DXLFO’s core functions apart. Instead of a single box I wanted to use a ",(0,r.createElement)(u.default,{to:"/effects-pedals/shoosh"},"dedicated VCA")," to modulate the volume of the signal, and leave the signal generation, LFO and routing of CV signals to another pedal, which became the idea behind the ",(0,r.createElement)(u.default,{to:"/effects-pedals/ctrl"},"CTRL signal controller"),"."),m({id:"*Footnote:-the-harmonic-tremolo"},"*Footnote: the harmonic tremolo"),b({},"The original harmonic tremolo was a Fender creation that took two tremolo effects and applied one to the low frequencies and one to the high frequencies, so that instead of modulating the volume (“soft-loud-soft-loud”) it would instead alternate between the lower frequencies and the higher ones (“lows-highs-lows-highs”)."),(0,r.createElement)(l.default,null))},t.meta=void 0;var r=o(a(0)),i=a(91),l=n(a(107)),u=n(a(94)),d=n(a(294)),s=n(a(295));t.meta={}},294:function(e,t,a){e.exports=a.p+"static/dxlfo-c31a6f3d49e051e567b28ee14267f938.jpg"},295:function(e,t,a){e.exports=a.p+"static/dxlfo-apart-6ec7a9420d5265fb0c2d8bd1e4dbf432.jpg"},84:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(103)),i=n(a(293));t.default=function(){return o.default.createElement(r.default,{title:"DXLFO",markdown:i.default})}},92:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=n(a(93)),r=n(a(27)),i=n(a(16)),l=n(a(12)),u=n(a(5)),d=n(a(3)),s=n(a(0)),c=a(18),f=a(97);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:d.default.string,activeStyle:d.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(o.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,u=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(a);return s.default.createElement(c.Link,(0,r.default)({to:v,state:d,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:d,replace:m})),!0}},h))},t}(s.default.Component);h.propTypes=(0,r.default)({},m,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},93:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}},94:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(27)),r=n(a(96)),i=n(a(0)),l=n(a(92)),u=n(a(104));t.default=function(e){var t=e.className,a=e.modifier,n=e.name,d=void 0===n?"Link":n,s=(0,r.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,o.default)({},s,{className:(0,u.default)({className:t,modifier:a,name:d})}))}},96:function(e,t,a){var n=a(93);e.exports=function(e,t){if(null==e)return{};var a,o,r=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}},97:function(e,t,a){"use strict";var n=a(15),o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return d.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var r=o(a(0)),i=o(a(3)),l=n(a(92)),u=o(a(98)),d=o(a(28)),s=r.default.createContext({});t.StaticQueryContext=s;var c=function(e){return r.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},98:function(e,t,a){var n;e.exports=(n=a(99))&&n.default||n},99:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(17)),r=n(a(0)),i=n(a(3)),l=n(a(29)),u=n(a(4)),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.default.createElement(l.default,(0,o.default)({location:t,pageResources:a},a.json))};d.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var s=d;t.default=s}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-dxlfo-js-ef538be49296d347dacc.js.map