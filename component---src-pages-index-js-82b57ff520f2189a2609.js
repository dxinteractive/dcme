(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=a(87),r=i(a(91));t.default=function(){return n.default.createElement(l.Box,{modifier:"paddingTopMega"},n.default.createElement(l.NavigationList,{modifier:"margin"},n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/"},"damienclarke.me")),n.default.createElement(l.NavigationListItem,null,n.default.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),n.default.createElement(l.NavigationListItem,null,n.default.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com"))),n.default.createElement(l.NavigationList,{modifier:"margin"},n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/#javascript-libraries"},"Javascript libs")),n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/#effects-pedals"},"Effects pedals")),n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/#arduino-libraries"},"Arduino libs")),n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/#animation"},"Animation")),n.default.createElement(l.NavigationListItem,null,n.default.createElement(r.default,{to:"/#flash-games"},"Old Flash games"))))}},287:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(27)),l=i(a(0)),r=i(a(91)),d=a(87),o=(i(a(288)),i(a(289))),m=i(a(312)),c=i(a(313)),u=i(a(315));t.default=function(e){var t=e.alt,a=e.description,i=e.docs,f=e.github,s=e.href,p=e.image,g=e.link,h=e.name,b=e.npm,E=e.to,v=function(e){return s?l.default.createElement(d.Link,(0,n.default)({href:s},e)):E?l.default.createElement(r.default,(0,n.default)({to:E},e)):l.default.createElement("span",e)},x=(0,u.default)([l.default.createElement(v,{key:"1"},l.default.createElement(d.Text,{modifier:"sizeMega"},h)),g&&l.default.createElement(v,{key:"2",modifier:"secondary"},g),f&&l.default.createElement(d.Link,{key:"3",modifier:"secondary",href:"https://github.com/".concat(f)},"github"),i&&l.default.createElement(d.Link,{key:"4",modifier:"secondary",href:i},"docs"),f&&b&&!1],(0,o.default)((0,m.default)()),(0,c.default)(" | "));return t?l.default.createElement(d.Box,{modifier:"paddingBottom"},l.default.createElement(d.Grid,null,l.default.createElement(d.GridItem,{modifier:"padding"},l.default.createElement(d.Text,{element:"div",modifier:"margin monospace"},x),a&&l.default.createElement(d.Text,{element:"div",modifier:"margin monospace"},a)),p&&l.default.createElement(d.GridItem,{modifier:"3 padding"},l.default.createElement(d.Box,{modifier:"paddingTopKilo"},l.default.createElement(v,null,l.default.createElement(d.Image,{src:p})))))):l.default.createElement(d.Box,{modifier:"paddingBottom"},l.default.createElement(d.Grid,null,p&&l.default.createElement(d.GridItem,{modifier:"3 padding"},l.default.createElement(v,null,l.default.createElement(d.Image,{src:p}))),l.default.createElement(d.GridItem,{modifier:"padding"},l.default.createElement(d.Box,null,l.default.createElement(d.Text,{element:"div",modifier:"margin monospace"},x),a&&l.default.createElement(d.Text,{element:"div",modifier:"margin monospace"},a)))))}},288:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(6)),l=i(a(7)),r=i(a(8)),d=i(a(9)),o=i(a(10)),m=i(a(0)),c=a(87),u=function(e){function t(e){var a;return(0,n.default)(this,t),(a=(0,r.default)(this,(0,d.default)(t).call(this,e))).state={fetching:!0,tag_name:""},a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.state.fetching?m.default.createElement(c.Loader,null):this.state.tag_name}}]),t}(m.default.Component);t.default=u},316:function(e,t,a){"use strict";var i=a(1),n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=a(87),d=i(a(89)),o=function(e){var t=e.imageLink,a=t.description,i=t.image,n=t.link,o=t.to,m=l.default.createElement(l.Fragment,null,l.default.createElement(r.Box,{modifier:"marginBottom"},l.default.createElement(r.ImageThumbnail,{src:i,modifier:"16-9"})),a&&l.default.createElement(r.Text,{element:"div",modifier:"monospace link secondary"},a));return n?l.default.createElement("a",{href:n},m):o?l.default.createElement(d.default,{to:o},m):m};t.default=function(e){var t=e.description,a=e.href,i=e.images,n=e.link,d=e.name;return l.default.createElement(r.Box,{modifier:"paddingBottomGiga"},l.default.createElement(r.Text,{element:"div",modifier:"margin monospace"},a?l.default.createElement(r.Link,{href:a},l.default.createElement(r.Text,{modifier:"sizeMega"},d)):l.default.createElement(r.Text,{modifier:"sizeMega primary"},d),n&&l.default.createElement(r.Text,null," | ",l.default.createElement(r.Link,{href:a,modifier:"secondary"},n))),t&&l.default.createElement(r.Text,{element:"div",modifier:"margin monospace"},t),l.default.createElement(r.Grid,null,l.default.createElement(r.GridItem,{modifier:"6 paddingMilli stackedMargin"},l.default.createElement(r.Grid,null,l.default.createElement(r.GridItem,{modifier:"6 always paddingMilli"},l.default.createElement(o,{imageLink:i[0]})),l.default.createElement(r.GridItem,{modifier:"6 always paddingMilli"},l.default.createElement(o,{imageLink:i[1]})))),l.default.createElement(r.GridItem,{modifier:"6 paddingMilli stackedMargin"},l.default.createElement(r.Grid,null,l.default.createElement(r.GridItem,{modifier:"6 always paddingMilli"},l.default.createElement(o,{imageLink:i[2]})),l.default.createElement(r.GridItem,{modifier:"6 always paddingMilli"},l.default.createElement(o,{imageLink:i[3]}))))))}},317:function(e,t,a){e.exports=a.p+"static/dataparcels-thumbnail-6ce0be7ea8a7b69ce33b8522f1df8ca3.gif"},318:function(e,t,a){e.exports=a.p+"static/unmutable-thumbnail-c8b81afae6f4d349fe30d5f79e8a67c5.gif"},319:function(e,t,a){e.exports=a.p+"static/bazz-fuzz-face-thumbnail-5637fdffb54678f121c05e56d9b86443.jpg"},320:function(e,t,a){e.exports=a.p+"static/dxlfo-thumbnail-baa51516b024bcd68709817a3639b93f.jpg"},321:function(e,t,a){e.exports=a.p+"static/shoosh-thumbnail-86d6f0e7ea942839bad62ac91cb99190.jpg"},322:function(e,t,a){e.exports=a.p+"static/fun-thumbnail-55b0fb5908734d9d60925231883adb07.jpg"},323:function(e,t,a){e.exports=a.p+"static/how-to-assemble-lego-robot-thumbnail-dfd99e4f5c4cbed479b3d64df7f92eff.jpg"},324:function(e,t,a){e.exports=a.p+"static/skate-tricks-thumbnail-0703769a175bc4ef8fe024bffd3d491b.jpg"},325:function(e,t,a){e.exports=a.p+"static/bloxorz-thumbnail-8f8ed3df7dab4a20a1c673e70d0e066f.jpg"},326:function(e,t,a){e.exports=a.p+"static/silversphere-thumbnail-50c255abdaa7ef4e70a3effb63b84c08.jpg"},327:function(e,t,a){e.exports=a.p+"static/electricman-2-thumbnail-45435ed0f110d922c38999a4eb92adc9.jpg"},85:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=a(87),r=i(a(99)),d=i(a(287)),o=i(a(316)),m=i(a(91)),c=i(a(103)),u=i(a(317)),f=i(a(318)),s=i(a(319)),p=i(a(320)),g=i(a(321)),h=i(a(322)),b=i(a(323)),E=i(a(324)),v=i(a(325)),x=i(a(326)),y=i(a(327));t.default=function(){var e=n.default.createElement(l.CenteredLanding,{modifier:"heightThird",top:function(){return n.default.createElement(l.Text,{element:"h1",modifier:"sizeTera superDuper"},"damienclarke.me")},bottom:function(){return n.default.createElement(l.Box,null,n.default.createElement(l.Text,{element:"p",modifier:"monospace margin"},"Software engineer + musician + effects pedal builder + animator living in Melbourne, Australia."),n.default.createElement(l.Text,{element:"p",modifier:"monospace margin"},n.default.createElement("a",{className:"Link Link-secondary",href:"https://github.com/dxinteractive"},"github")," | ",n.default.createElement("a",{className:"Link Link-secondary",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")))}}),t=n.default.createElement(l.Box,{modifier:"paddingBottomTera"},n.default.createElement("a",{id:"javascript-libraries"}),n.default.createElement(l.Text,{element:"h2",modifier:"sizeKilo marginKilo"},"Javascript libraries"),n.default.createElement(d.default,{name:"dataparcels",href:"https://dataparcels.blueflag.codes/",docs:"https://dataparcels.blueflag.codes/",github:"blueflag/dataparcels",npm:"react-dataparcels",description:"A library for editing data structures that works really well with React.",image:u.default}),n.default.createElement(d.default,{name:"unmutable",href:"https://github.com/blueflag/unmutable",github:"blueflag/unmutable",npm:"unmutable",description:"An immutable, point-free, functional data collection library for plain old Javascript.",image:f.default})),a=n.default.createElement(l.Box,{modifier:"paddingBottomTera"},n.default.createElement("a",{id:"effects-pedals"}),n.default.createElement(l.Text,{element:"h2",modifier:"sizeKilo marginKilo"},"Effects pedals"),n.default.createElement(d.default,{name:"Shoosh",to:"/effects-pedals/shoosh",link:"more info",description:n.default.createElement(l.Text,null,"A vactrol-based voltage controlled amplifier. Original design, prototype complete. See also ",n.default.createElement(m.default,{to:"/effects-pedals/posts/building-a-vactrol-vca",modifier:"secondary"},"how to build one"),"."),image:g.default,alt:!0}),n.default.createElement(d.default,{name:"Bazz Fuzz Face",to:"/effects-pedals/bazz-fuzz-face",link:"more info",description:"A modified clone, a silicon Fuzz Face and a Bazz Fuzz in the same box. Goes from mild grit to synthy fuzz, aggressive crunch and choked-up sputter.",image:s.default,alt:!0}),n.default.createElement(d.default,{name:"DXLFO",to:"/effects-pedals/dxlfo",link:"more info",description:"An Arduino-controlled harmonic tremolo and dual LFO with CV outputs. Original design based partially on the Twin Peaks tremolo. Prototype abandoned.",image:p.default,alt:!0})),i=n.default.createElement(l.Box,{modifier:"paddingBottomTera"},n.default.createElement("a",{id:"arduino-libraries"}),n.default.createElement(l.Text,{element:"h2",modifier:"sizeKilo marginKilo"},"Arduino libraries"),n.default.createElement(d.default,{name:"ResponsiveAnalogRead",href:"https://github.com/dxinteractive/ResponsiveAnalogRead",github:"dxinteractive/ResponsiveAnalogRead",description:n.default.createElement(l.Box,null,n.default.createElement(l.Text,{element:"p",modifier:"margin"},"Arduino library for eliminating noise in analogRead inputs without decreasing responsiveness."),n.default.createElement(l.Text,{element:"p",modifier:"emphasis primary"},"Version 2 is almost ready!")),image:"https://camo.githubusercontent.com/a140bd72365ddfd53a7ba52ff947d09e5d7ac29f/687474703a2f2f64616d69656e636c61726b652e6d652f636f6e74656e742f312d636f64652f332d726573706f6e736976652d616e616c6f672d726561642f7468756d626e61696c2e6a7067",alt:!0}),n.default.createElement(d.default,{name:"AnalogMultiButton",href:"https://github.com/dxinteractive/AnalogMultiButton",github:"dxinteractive/AnalogMultiButton",description:"Arduino library to capture multiple button presses through a single analog pin, as well as onPress and onRelease events and button press times.",image:"https://camo.githubusercontent.com/db8996b0c79daf386bbc9f6b2a99989e79d59002/687474703a2f2f64616d69656e636c61726b652e6d652f636f6e74656e742f312d636f64652f352d616e616c6f672d6d756c74692d627574746f6e2f7468756d626e61696c2e6a7067",alt:!0}),n.default.createElement(d.default,{name:"ArduinoTapTempo",href:"https://github.com/dxinteractive/ArduinoTapTempo",github:"dxinteractive/ArduinoTapTempo",description:"An Arduino library that times consecutive button presses to calculate tempo / BPM. Corrects for missed beats and can reset phase with single taps. ",image:"https://camo.githubusercontent.com/2e7c36035ce8aae7ac0f7f145c0024192e93c76a/687474703a2f2f64616d69656e636c61726b652e6d652f636f6e74656e742f312d636f64652f312d61726475696e6f2d7461702d74656d706f2f7468756d626e61696c2e6a7067",alt:!0})),k=n.default.createElement(l.Box,{modifier:"paddingBottomTera"},n.default.createElement("a",{id:"animation"}),n.default.createElement(l.Text,{element:"h2",modifier:"sizeKilo marginKilo"},"Animation"),n.default.createElement(o.default,{name:"Loopdeloop submissions",description:n.default.createElement(l.Text,null,"Loops for ",n.default.createElement(l.Link,{modifier:"secondary",href:"http://www.loopdeloop.org/"},"loopdeloop.org"),". ",n.default.createElement(m.default,{modifier:"secondary",to:"/animation/loopdeloop"},"See more.")),images:[{image:"https://i.vimeocdn.com/video/716159216.jpg",link:"https://vimeo.com/282191207",description:"dog (0:37)"},{image:"https://i.vimeocdn.com/video/334164917.jpg",link:"https://vimeo.com/48289893",description:"mad (0:38)"},{image:"https://i.vimeocdn.com/video/569652187.jpg",link:"https://vimeo.com/165720790",description:"dance (0:18)"},{image:h.default,description:"more",to:"/animation/loopdeloop"}]}),n.default.createElement(o.default,{name:"Shorts and infographics",images:[{image:"https://i.vimeocdn.com/video/201855591.jpg",link:"https://vimeo.com/28944522",description:"small plastic figurine (2:10)"},{image:"https://i.vimeocdn.com/video/199220069.jpg",link:"https://vimeo.com/29716833",description:"some sleepy guy (1:00)"},{image:b.default,link:"https://www.youtube.com/watch?v=Ojrx-BK22wg",description:"how to assemble lego robot (1:39)"},{image:E.default,to:"/animation/skate-tricks",description:"skate tricks infographics"}]}),n.default.createElement(o.default,{name:"12gon",description:n.default.createElement(l.Text,null,"Hypnotic animated geometry. ",n.default.createElement(l.Link,{modifier:"secondary",href:"http://12gon.tumblr.com"},"See more.")),href:"https://12gon.tumblr.com",link:"12gon.tumblr.com",images:[{image:"https://66.media.tumblr.com/d76ccce59cc8c5b1e38328e33ea9a0b0/tumblr_n20913WJ4w1r2xv8po1_500.gif",link:"http://12gon.tumblr.com/post/78733618405/m%C3%B6bius-6hedrons-3d"},{image:"https://66.media.tumblr.com/a4514711dd133f89f612ca463a13d147/tumblr_n59d51P8lV1r2xv8po1_500.gif",link:"http://12gon.tumblr.com/post/85119873523/shatter-3gons"},{image:"https://66.media.tumblr.com/9b2da91be7dc6a5565a1183342cf68b4/tumblr_n5m9osWqzV1r2xv8po1_r1_500.gif",link:"http://12gon.tumblr.com/post/85814750618/fragment-20hedrons"},{image:"https://66.media.tumblr.com/b157baeb534ea7efc053455306c1fa57/tumblr_n1sid9LI9e1r2xv8po1_500.gif",link:"http://12gon.tumblr.com/post/78416765824/breathe-4gons-3d"}]})),w=n.default.createElement(l.Box,{modifier:"paddingBottomTera"},n.default.createElement("a",{id:"flash-games"}),n.default.createElement(l.Text,{element:"h2",modifier:"sizeKilo marginKilo"},"Old Flash games that probably don't work anymore"),n.default.createElement(d.default,{name:"Bloxorz",href:"https://www.albinoblacksheep.com/games/bloxorz",link:"albinoblacksheep.com",description:n.default.createElement(l.Box,null,n.default.createElement(l.Text,{element:"p",modifier:"margin"},"Bloxorz is a brain twisting puzzle game of rolling blocks and switching bridges. You'll be rolling round in circles over the course of the 33 levels."),n.default.createElement(l.Text,{element:"p"},"This was the first video game to use this gameplay concept and was one of the top Flash games of 2007, reaching over 1/4 billion confirmed plays.")),image:v.default,alt:!0}),n.default.createElement(d.default,{name:"Silversphere",href:"https://www.miniclip.com/games/silversphere/en/",link:"miniclip.com",description:n.default.createElement(l.Box,null,n.default.createElement(l.Text,{element:"p",modifier:"margin"},"This is a puzzle game with a simple objective - get the silver sphere into the vortex in each level. However, you must make it through some fiendishly puzzling situations to get there. Finishing the game is not as easy as it may seem."),n.default.createElement(l.Text,{element:"p"},"Winner of the Miniclip Flash Game competition 2005.")),image:x.default,alt:!0}),n.default.createElement(d.default,{name:"Electricman 2",href:"https://www.newgrounds.com/portal/view/363447",link:"newgrounds.com",description:n.default.createElement(l.Box,null,n.default.createElement(l.Text,{element:"p",modifier:"margin"},"Electricman is back, and is now entering one of the fiercest fist-fighting competitions in the stick man universe.")),image:y.default,alt:!0}),n.default.createElement(l.Box,{modifier:"paddingTopKilo"},n.default.createElement(l.Text,{element:"p",modifier:"monospace"},"Other more-stupid and / or less-good games include ",n.default.createElement(l.Link,{href:"https://www.albinoblacksheep.com/games/mindlessviolence"},"More Mindless Violence"),", ",n.default.createElement(l.Link,{href:"https://www.albinoblacksheep.com/games/broken-arms"},"Perfect Future Under Attack: Broken Arms"),", ",n.default.createElement(l.Link,{href:"https://www.albinoblacksheep.com/games/jetspeed"},"Jetspeed")," and ",n.default.createElement(l.Link,{href:"https://www.albinoblacksheep.com/games/missilegame3d"},"Missile Game 3D"),".")));return n.default.createElement(c.default,null,n.default.createElement(l.Box,{modifier:"invertedCopy invertedBackground"},n.default.createElement(l.Wrapper,null,e,n.default.createElement(r.default,{content:function(){return t}}),a,i,k,w)))}},91:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(27)),l=i(a(93)),r=i(a(0)),d=i(a(89)),o=i(a(98));t.default=function(e){var t=e.className,a=e.modifier,i=e.name,m=void 0===i?"Link":i,c=(0,l.default)(e,["className","modifier","name"]);return r.default.createElement(d.default,(0,n.default)({},c,{className:(0,o.default)({className:t,modifier:a,name:m})}))}},94:function(e,t,a){"use strict";var i=a(15),n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return d.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return d.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return d.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return d.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return d.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return m.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var l=n(a(0)),r=n(a(3)),d=i(a(89)),o=n(a(95)),m=n(a(28)),c=l.default.createContext({});t.StaticQueryContext=c;var u=function(e){return l.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=u,u.propTypes={data:r.default.object,query:r.default.string.isRequired,render:r.default.func,children:r.default.func}},95:function(e,t,a){var i;e.exports=(i=a(96))&&i.default||i},96:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(17)),l=i(a(0)),r=i(a(3)),d=i(a(29)),o=i(a(4)),m=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return l.default.createElement(d.default,(0,n.default)({location:t,pageResources:a},a.json))};m.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var c=m;t.default=c},99:function(e,t,a){"use strict";var i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=a(87),r=i(a(100));t.default=function(e){var t=e.content,a=e.nav;return n.default.createElement(l.Grid,null,n.default.createElement(l.GridItem,{modifier:"9 padding"},t()),n.default.createElement(l.GridItem,{modifier:"3 padding"},n.default.createElement(l.Box,{modifier:"paddingBottomMega"},n.default.createElement(r.default,null)),a&&a()))}}}]);
//# sourceMappingURL=component---src-pages-index-js-82b57ff520f2189a2609.js.map