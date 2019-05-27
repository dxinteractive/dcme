(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0));t.default=function(){return n.default.createElement("div",{id:"disqus_thread"})}},106:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(27)),r=o(a(0)),i=a(93),l=a(107),s=function(){return r.default.createElement(i.NavigationList,null,r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/"},"damienclarke.me")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),r.default.createElement(i.NavigationListItem,null,r.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),r.default.createElement(i.NavigationListItem,{modifier:"section"},"Stuff"),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Javascript-libraries"},"Javascript libraries")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Effects-pedals"},"Effects pedals")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Music"},"Music")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Arduino-libraries"},"Arduino libraries")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Animation"},"Animation")),r.default.createElement(i.NavigationListItem,null,r.default.createElement(l.Link,{to:"/#Old-Flash-Games"},"Old Flash games")))};t.default=function(e){return r.default.createElement(i.ContentNav,(0,n.default)({nav:s},e))}},107:function(e,t,a){"use strict";var o=a(1),n=o(a(108)),r=o(a(109));e.exports={Link:n.default,IsRenderingStaticHtml:r.default}},108:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(27)),r=o(a(100)),i=o(a(0)),l=o(a(92)),s=o(a(99));t.default=function(e){var t=e.className,a=e.modifier,o=e.name,u=void 0===o?"Link":o,c=(0,r.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,n.default)({},c,{className:(0,s.default)({className:t,modifier:a,name:u})}))}},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return"undefined"==typeof window}},118:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=a(93);t.default=function(e){var t=e.id;return n.default.createElement(r.ResponsiveBox,{modifier:"16-9"},n.default.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},125:function(e,t,a){e.exports=a.p+"static/shoosh-layout-39e60f058136eaa93589ca4b6d59360e.png"},126:function(e,t,a){e.exports=a.p+"static/shoosh-schematic-56b23e86cd6b2b9f7ef41e93d9a65cee.png"},309:function(e,t,a){"use strict";var o=a(1),n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.factories,a=void 0===t?{}:t,o=a.a,n=void 0===o?(0,r.createFactory)("a"):o,p=a.em,m=void 0===p?(0,r.createFactory)("em"):p,v=a.h1,g=void 0===v?(0,r.createFactory)("h1"):v,y=a.h2,b=void 0===y?(0,r.createFactory)("h2"):y,w=a.h3,E=void 0===w?(0,r.createFactory)("h3"):w,L=a.li,k=void 0===L?(0,r.createFactory)("li"):L,C=a.p,_=void 0===C?(0,r.createFactory)("p"):C,T=a.strong,I=void 0===T?(0,r.createFactory)("strong"):T,P=a.ul,V=void 0===P?(0,r.createFactory)("ul"):P,O=a.wrapper;return(void 0===O?(0,r.createFactory)("div"):O)({},g({id:"Building-a-Vactrol-VCA"},"Building a Vactrol VCA"),_({},"Voltage Controlled Amplifiers (or “VCAs”) are a common component in modular synthesizers. They’re basically a volume control that can be set using a reference voltage. In a modular synth their primary job is make notes start and end, the volume is to raise when a key is pressed, and it’s told to lower again when a key is released. The VCA simply reads the control voltage provided to it (often from 0V to 10V), and makes the audio signal quieter the closer the control voltage is to zero."),(0,r.createElement)(i.Image,{src:u.default,alt:"Shoosh on a breadboard"}),_({},"In the world of guitars you might not see much point in one of these, but altering the volume of a signal is the basis for tremolo pedals, the feedback and blend controls in delay pedals, and it provides compressors with their ability to squeeze. Control voltages (“CVs”) can open up some crazy possibilities; plug a low frequency oscillator (“LFO”) into one of these VCAs and you’ve got a tremolo effect that can cut your guitar sound in ",m({},"any shape that the LFO can come up with"),". I’ve found VCAs most useful as components within other effects."),_({},"Why vactrols? They’re known to introduce minimum levels of noise compared to other types of VCA and they’re easy to set up. You wouldn’t use them for everything - their response is very non-linear, they differ from one another, and they are a little slow to turn on and off. But they are very well suited for volume controls, tremolo pedals and compressors."),_({},"##The “Shoosh” vactrol VCA circuit\nHere’s the circuit I came up with and used in the ",(0,r.createElement)(s.default,{to:"/effects-pedals"},"Shoosh"),". A CV from 0-5V will attenuate the audio signal from silent to a level determined by the gain pot. 0-5V is a standard control voltage range for guitar pedals."),E({id:"Shoosh-schematic"},"Shoosh schematic"),(0,r.createElement)(i.Link,{href:h.default,target:"_blank"},(0,r.createElement)(i.Image,{src:h.default})),E({id:"Shoosh-veroboard-layout"},"Shoosh veroboard layout"),(0,r.createElement)(i.Link,{href:f.default,target:"_blank"},(0,r.createElement)(i.Image,{src:f.default})),b({id:"The-amplifier"},"The amplifier"),_({},"Let’s first follow the signal through the amplifier section. It’s basically an op-amp buffer followed by an inverting op-amp to change the audio volume."),V({},k({},"The audio signal moves through the input capacitor C1 and enters op-amp 1 (IC1)."),k({},"Op-amp 1 is a simple buffer, a non-inverting amplifier with unity gain. It doesn’t change the volume. This will keep the input impedance of the pedal high, and ensure that op-amp 2 sees a predictable low impedance source."),k({},"The signal leaves op-amp 1 and goes through the resistor end of the vactrol, encountering some resistance."),k({},"The signal enters op-amp 2. This op amp, the resistor end of the vactrol and the gain pot collectively form an inverting amplifier with variable gain. The gain level is controlled both by the resistance through the vactrol, and the amount of resistance provided by the gain pot. Amount of gain = gain pot resistance / vactrol resistance."),k({},"The signal leaves op-amp 2, flows though the output capacitor C2 and away.")),_({},"A single TL072 is a perfect choice for these two op-amps. They’re good for audio applications and cheap."),_({},"So ",I({},"less vactrol resistance = more volume"),"."),b({id:"The-vactrol"},"The vactrol"),_({},"Vactrols (or optocouplers, or a dozen other names) are made from an LED pointing straight into a light-dependent resistor (“LDR”), encased in plastic. In fact you can make them yourself by getting an LED, pointing it at an LDR and engulfing them in heat shrink tubing or electrical tape so no external light can get in. I prefer buying them because their properties are more predictable, you can choose the ones that have the right turn on and turn off times, and when they’re off they have ",m({},"very")," high resistance which is essential for the amplifier to make a signal completely silent. I usually go with VTL5C1s, they’re quite quick and go very dark."),_({},"The brighter the LED glows, the less resistance the LDR has. That gives us a variable resistor. That’s just what we need for op-amp 2 to have variable gain."),_({},"So ",I({},"more LED brightness = less vactrol resistance"),"."),_({},"Now you might be thinking:"),_({},"More voltage into the vactrol = more LED brightness, right?"),_({},"Well not exactly. It’s possible but it’s difficult. LEDs have a minimum voltage before they turn on. Usually anything less than about 1.2V makes no light, and beyond that LEDs brighten up quickly with additional voltage and then get only marginally brighter with added voltage. It’s far better to control LED brightness using variations in current, not voltage."),_({},"We also don’t want the CV to be responsible for actually providing power to any parts of this pedal. It’s merely a voltage ",m({},"reference"),". Things that generate CVs such as envelope generators or low frequency oscillators would typically not be designed to be used as a current source."),_({},"Also remember that the LEDs in a vactrols follow all the same rules as normal LEDs. Give them too much current and they might die, and remember to plug them in the right way around."),_({},"So let’s go with ",I({},"more LED current = more LED brightness"),"."),_({},"But now we need to turn voltage into current. Voltage-to-current signal conversion."),b({id:"The-transconductance-amplifier"},"The transconductance amplifier"),_({},"Certainly sounds impressive. It’s a simple op-amp circuit that essentially turns a reference voltage into a corresponding current. Put the vactrol’s LED in the loop (anode to the op-amp’s output and cathode to the op-amp’s negative input), add the R4 resistor to ground and you can then control the LED brightness with a control voltage delivered to the op-amp’s positive input."),_({},n({href:"http://Allaboutcircuits.com"},"Allaboutcircuits.com")," has a ",n({href:"http://www.allaboutcircuits.com/textbook/semiconductors/chpt-8/voltage-to-current-signal-conversion/"},"great article on these"),"."),_({},"So finally, ",I({},"more control voltage = more LED current"),"."),_({},"You will need a rail-to-rail op-amp. Normal op-amps can’t output a voltage too close to either rail, but our CV will go all the way down to ground, so your op-amp will have to as well. I use TLC2272s, many others are available."),_({},"The resistor R4 determines how much current will be generated for a given voltage at the op-amp’s positive input. Smaller values make more current for a given voltage. This lets you scale your vactrol’s non-linear response curve against your CV. But keep in mind that smaller values make you lose headroom. Watch out for clipping in the output audio."),b({id:"Other-notes"},"Other notes"),V({},k({},"R5 and R6 provide us with a 4.5V voltage reference (Vref) so op amp 1 and 2 are biased correctly. This uses op amp 4 (IC4) which is set up as a simple buffer. On many other circuits this buffer isn’t really required, but on this circuit if you turn the CV all the way down, the vactrol gets so dark (over 2M) in comparison to R2 that audio begins to leak back through the Vref path and through the output. The buffer prevents this from happening."),k({},"R1 and R3 are in place to ensure that both the input and outputs don’t float if this effect is being bypassed. Floating inputs and outputs often create a big pop when turning an effect back on by pressing the bypass footswitch."),k({},"C1 and C2 can be increased to let through more bass frequencies if desired."),k({},"R7 is just there to ensure that a CV of 0 will be detected if there’s nothing plugged into the CV input.")),b({id:"A-finished-build"},"A finished build"),_({},"See an example over on the ",(0,r.createElement)(s.default,{to:"/effects-pedals/shoosh"},"Shoosh pedal page"),"."),(0,r.createElement)(i.Image,{src:c.default}),_({},"Completed prototype on vero."),(0,r.createElement)(i.Image,{src:d.default}),_({},"Boxed up and added to the pedal board. Please excuse the paint job."),(0,r.createElement)(l.default,null))},t.meta=void 0;var r=n(a(0)),i=a(93),l=o(a(105)),s=o(a(97)),u=(o(a(118)),o(a(310))),c=o(a(311)),d=o(a(312)),f=o(a(125)),h=o(a(126));t.meta={}},310:function(e,t,a){e.exports=a.p+"static/shoosh-breadboard-7e875f0b3a591d421599138dd94a6f26.jpg"},311:function(e,t,a){e.exports=a.p+"static/shoosh-vero-a95caa9974019ac125a23f8657194f13.jpg"},312:function(e,t,a){e.exports=a.p+"static/shoosh-done-2a6c084b7c2138c4cb6430af48ffb59d.jpg"},85:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(101)),i=o(a(309)),l=o(a(106));t.default=function(){return n.default.createElement(r.default,{title:"Building a Vactrol VCA",modifier:"defaultBackground"},n.default.createElement(l.default,{content:function(){return n.default.createElement(i.default,null)},pageNav:["# Building a Vactrol VCA","The amplifier","The vactrol","The transconductance amplifier","Other notes","A finished build"]}))}},92:function(e,t,a){"use strict";var o=a(1);t.__esModule=!0,t.withPrefix=h,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var n=o(a(103)),r=o(a(27)),i=o(a(17)),l=o(a(12)),s=o(a(5)),u=o(a(3)),c=o(a(0)),d=a(18),f=a(94);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},a.props.style,a.props.activeStyle)}:null});var o=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0),a.state={IOSupported:o},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,o,n=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(n.props.to).pathname)},(o=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t),o.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,o=t.getProps,i=void 0===o?this.defaultGetProps:o,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),p=t.replace,m=(0,n.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=h(a);return c.default.createElement(d.Link,(0,r.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:u,replace:p})),!0}},m))},t}(c.default.Component);m.propTypes=(0,r.default)({},p,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(h(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(h(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(h(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},94:function(e,t,a){"use strict";var o=a(15),n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return u.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var r=n(a(0)),i=n(a(3)),l=o(a(92)),s=n(a(95)),u=n(a(28)),c=r.default.createContext({});t.StaticQueryContext=c;var d=function(e){return r.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=d,d.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},95:function(e,t,a){var o;e.exports=(o=a(96))&&o.default||o},96:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(16)),r=o(a(0)),i=o(a(3)),l=o(a(29)),s=o(a(4)),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.default.createElement(l.default,(0,n.default)({location:t,pageResources:a},a.json))};u.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var c=u;t.default=c},97:function(e,t,a){"use strict";var o=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(27)),r=o(a(100)),i=o(a(0)),l=o(a(92)),s=o(a(99));t.default=function(e){var t=e.className,a=e.modifier,o=e.name,u=void 0===o?"Link":o,c=(0,r.default)(e,["className","modifier","name"]);return i.default.createElement(l.default,(0,n.default)({},c,{className:(0,s.default)({className:t,modifier:a,name:u})}))}}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-posts-building-a-vactrol-vca-js-07028325e1b3ef8cfb21.js.map