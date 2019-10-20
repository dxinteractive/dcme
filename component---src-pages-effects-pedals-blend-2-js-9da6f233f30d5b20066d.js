(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{379:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return O})),a.d(t,"default",(function(){return I}));var n=a(11),r=a.n(n),o=a(28),l=a.n(o),i=(a(0),a(132)),c=a(100),s=a(406),u=a(375),d=a(419),m=a.n(d),h=a(420),b=a.n(h),f=a(421),p=a.n(f),g=a(422),v=a.n(g),y=a(423),j=a.n(y),L=a(407),O={},w={_frontmatter:O},E="wrapper";function I(e){var t=e.components,a=l()(e,["components"]);return Object(i.b)(E,r()({},w,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Blend2"),Object(i.b)("p",null,"The Blend2 is a microprocessor-controlled parallel effects loop blender. Its main function is to split the audio signal into two parallel loops, and modulate the gain of the audio signal at the send and return of each loop. These gain levels are controlled by the microprocessor, which has a number of preset blend patterns, and uses these in conjunction with a 0-5V control voltage or expression pedal."),Object(i.b)("p",null,"So you can do reverb throws, A/B blending, panning, parallel volume swells etc. all with an expression pedal."),Object(i.b)(L.a,{id:"S4Ff2V3ovio",mdxType:"Youtube"}),Object(i.b)("p",null,"It also contains a small effect router (using a set of four relays), and a display to show information about the order of the rest of the pedals on the pedalboard as determined by the ",Object(i.b)(u.a,{to:"/effects-pedals/shuffler",mdxType:"Link"},"shuffler")," (using I2C). These two features are very specific to my pedalboard setup so I haven't gone into any detail on them here."),Object(i.b)(c.Image,{src:m.a,alt:"Blend2",mdxType:"Image"}),Object(i.b)(c.Image,{src:b.a,alt:"Blend2 signal board",mdxType:"Image"}),Object(i.b)("h2",null,"Blend2 schematic"),Object(i.b)("p",null,"This schematic is for the signal path. This has 7 connections to the Blend2 controller:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ULN1-4 which can control the four variable gain amplifiers (Vactrols)"),Object(i.b)("li",{parentName:"ul"},"ULN5 which toggles the relay that flips the phase of the second loop"),Object(i.b)("li",{parentName:"ul"},"5V out, to power the microcontroller with some reasonably heavy noise filtering"),Object(i.b)("li",{parentName:"ul"},"GND for the shared ground")),Object(i.b)(c.Link,{href:v.a,target:"_blank",mdxType:"HtmlLink"},Object(i.b)(c.Image,{src:v.a,mdxType:"Image"})),Object(i.b)("h2",null,"Blend2 veroboard layout"),Object(i.b)("p",null,"I hope this is correct, no guarantees! I soldered each Vactrol to a header strip to make them easy to disconnect and debug. Please refer to the photo to see how this is done."),Object(i.b)(c.Link,{href:p.a,target:"_blank",mdxType:"HtmlLink"},Object(i.b)(c.Image,{src:p.a,mdxType:"Image"})),Object(i.b)("h2",null,"Blend2 control schematic"),Object(i.b)("p",null,"These are the very rough plans I had for the controller. The only important connections between the controller and the blender are the four current sinks (ULN1-4) that control the Vactrols using PWMs, and the current sink for the phase flipping relay (ULN5). The microcontrollers PWM and relay pins connect to the ULN2803. (You can ignore the I2C stuff and four of the relays)"),Object(i.b)("p",null,"Also keep in mind that you'll probably want to make your PWM frequency fast enough that it gets out of audible range."),Object(i.b)("p",null,"This is just a rough idea of what can be done, it's not really a set of instructions. ",Object(i.b)("a",r()({parentName:"p"},{href:"https://github.com/dxinteractive/blend2"}),"Here's the code I wrote to go with it in case you're interested"),"."),Object(i.b)(c.Link,{href:j.a,target:"_blank",mdxType:"HtmlLink"},Object(i.b)(c.Image,{src:j.a,mdxType:"Image"})),Object(i.b)(s.a,{mdxType:"Disqus"}))}I.isMDXComponent=!0},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(376),l=a(379),i=a(409);t.default=function(){return r.a.createElement(o.a,{title:"Blend2",modifier:"defaultBackground"},r.a.createElement(i.a,{content:function(){return r.a.createElement(l.default,null)},pageNav:["# Blend2","Blend2 schematic","Blend2 veroboard layout","Blend2 control schematic"]}))}},406:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{id:"disqus_thread"})}},407:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(100);t.a=function(e){var t=e.id;return r.a.createElement(o.ResponsiveBox,{modifier:"16-9"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},409:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(0),l=a.n(o),i=a(100),c=function(){return l.a.createElement(i.NavigationList,null,l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/"},"damienclarke.me")),l.a.createElement(i.NavigationListItem,null,l.a.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),l.a.createElement(i.NavigationListItem,null,l.a.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),l.a.createElement(i.NavigationListItem,{modifier:"section"},"Stuff"),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Javascript-libraries"},"Javascript libraries")),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Effects-pedals"},"Effects pedals")),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Music"},"Music")),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Arduino-libraries"},"Arduino libraries")),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Animation"},"Animation")),l.a.createElement(i.NavigationListItem,null,l.a.createElement(i.Link,{href:"/#Old-Flash-Games"},"Old Flash games")))};t.a=function(e){return l.a.createElement(i.ContentNav,r()({nav:c},e))}},419:function(e,t,a){e.exports=a.p+"static/blend2-15ea16fcd3b4361abf17079aea7c7c12.jpg"},420:function(e,t,a){e.exports=a.p+"static/blend2-board-523ac70c9c64874706173a7dd986495c.jpg"},421:function(e,t,a){e.exports=a.p+"static/blend2-layout-2e767043dd809e137be7ff8130c15dc4.png"},422:function(e,t,a){e.exports=a.p+"static/blend2-schematic-43f743f7e3fc5fcb95e4963016c44aa3.png"},423:function(e,t,a){e.exports=a.p+"static/blend2-control-schematic-a3a2416a022ca8fa9c5828821d9339cf.png"}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-blend-2-js-9da6f233f30d5b20066d.js.map