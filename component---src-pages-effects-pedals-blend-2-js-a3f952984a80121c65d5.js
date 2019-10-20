(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return k})),n.d(t,"default",(function(){return x}));var a=n(11),r=n.n(a),o=n(28),l=n.n(o),c=(n(0),n(129)),i=n(99),s=n(391),d=n(360),u=n(404),h=n.n(u),b=n(405),m=n.n(b),f=n(406),p=n.n(f),g=n(407),y=n.n(g),j=n(408),w=n.n(j),O=n(392),k={},v={_frontmatter:k},E="wrapper";function x(e){var t=e.components,n=l()(e,["components"]);return Object(c.b)(E,r()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"blend2"},"Blend2"),Object(c.b)("p",null,"The Blend2 is a microprocessor-controlled parallel effects loop blender. Its main function is to split the audio signal into two parallel loops, and modulate the gain of the audio signal at the send and return of each loop. These gain levels are controlled by the microprocessor, which has a number of preset blend patterns, and uses these in conjunction with a 0-5V control voltage or expression pedal."),Object(c.b)("p",null,"So you can do reverb throws, A/B blending, panning, parallel volume swells etc. all with an expression pedal."),Object(c.b)(O.a,{id:"S4Ff2V3ovio",mdxType:"Youtube"}),Object(c.b)("p",null,"It also contains a small effect router (using a set of four relays), and a display to show information about the order of the rest of the pedals on the pedalboard as determined by the ",Object(c.b)(d.a,{to:"/effects-pedals/shuffler",mdxType:"Link"},"shuffler")," (using I2C). These two features are very specific to my pedalboard setup so I haven't gone into any detail on them here."),Object(c.b)(i.i,{src:h.a,alt:"Blend2",mdxType:"Image"}),Object(c.b)(i.i,{src:m.a,alt:"Blend2 signal board",mdxType:"Image"}),Object(c.b)("h2",{id:"blend2-schematic"},"Blend2 schematic"),Object(c.b)("p",null,"This schematic is for the signal path. This has 7 connections to the Blend2 controller:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ULN1-4 which can control the four variable gain amplifiers (Vactrols)"),Object(c.b)("li",{parentName:"ul"},"ULN5 which toggles the relay that flips the phase of the second loop"),Object(c.b)("li",{parentName:"ul"},"5V out, to power the microcontroller with some reasonably heavy noise filtering"),Object(c.b)("li",{parentName:"ul"},"GND for the shared ground")),Object(c.b)(i.k,{href:y.a,target:"_blank",mdxType:"HtmlLink"},Object(c.b)(i.i,{src:y.a,mdxType:"Image"})),Object(c.b)("h2",{id:"blend2-veroboard-layout"},"Blend2 veroboard layout"),Object(c.b)("p",null,"I hope this is correct, no guarantees! I soldered each Vactrol to a header strip to make them easy to disconnect and debug. Please refer to the photo to see how this is done."),Object(c.b)(i.k,{href:p.a,target:"_blank",mdxType:"HtmlLink"},Object(c.b)(i.i,{src:p.a,mdxType:"Image"})),Object(c.b)("h2",{id:"blend2-control-schematic"},"Blend2 control schematic"),Object(c.b)("p",null,"These are the very rough plans I had for the controller. The only important connections between the controller and the blender are the four current sinks (ULN1-4) that control the Vactrols using PWMs, and the current sink for the phase flipping relay (ULN5). The microcontrollers PWM and relay pins connect to the ULN2803. (You can ignore the I2C stuff and four of the relays)"),Object(c.b)("p",null,"Also keep in mind that you'll probably want to make your PWM frequency fast enough that it gets out of audible range."),Object(c.b)("p",null,"This is just a rough idea of what can be done, it's not really a set of instructions. ",Object(c.b)("a",r()({parentName:"p"},{href:"https://github.com/dxinteractive/blend2",target:"_blank",rel:["nofollow","noopener","noreferrer"]}),"Here's the code I wrote to go with it in case you're interested",Object(c.b)("span",{parentName:"a"},"(opens in a new window)")),"."),Object(c.b)(i.k,{href:w.a,target:"_blank",mdxType:"HtmlLink"},Object(c.b)(i.i,{src:w.a,mdxType:"Image"})),Object(c.b)(s.a,{mdxType:"Disqus"}))}x.isMDXComponent=!0},381:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(361),l=n(364),c=n(394);t.default=function(){return r.a.createElement(o.a,{title:"Blend2",modifier:"defaultBackground"},r.a.createElement(c.a,{content:function(){return r.a.createElement(l.default,null)},pageNav:["# Blend2","Blend2 schematic","Blend2 veroboard layout","Blend2 control schematic"]}))}},391:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",{id:"disqus_thread"})}},392:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(99);t.a=function(e){var t=e.id;return r.a.createElement(o.o,{modifier:"16-9"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},394:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),l=n.n(o),c=n(99),i=function(){return l.a.createElement(c.m,null,l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/"},"damienclarke.me")),l.a.createElement(c.n,null,l.a.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),l.a.createElement(c.n,null,l.a.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),l.a.createElement(c.n,{modifier:"section"},"Stuff"),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Javascript-libraries"},"Javascript libraries")),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Effects-pedals"},"Effects pedals")),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Music"},"Music")),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Arduino-libraries"},"Arduino libraries")),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Animation"},"Animation")),l.a.createElement(c.n,null,l.a.createElement(c.k,{href:"/#Old-Flash-Games"},"Old Flash games")))};t.a=function(e){return l.a.createElement(c.d,r()({nav:i},e))}},404:function(e,t,n){e.exports=n.p+"static/blend2-15ea16fcd3b4361abf17079aea7c7c12.jpg"},405:function(e,t,n){e.exports=n.p+"static/blend2-board-523ac70c9c64874706173a7dd986495c.jpg"},406:function(e,t,n){e.exports=n.p+"static/blend2-layout-2e767043dd809e137be7ff8130c15dc4.png"},407:function(e,t,n){e.exports=n.p+"static/blend2-schematic-43f743f7e3fc5fcb95e4963016c44aa3.png"},408:function(e,t,n){e.exports=n.p+"static/blend2-control-schematic-a3a2416a022ca8fa9c5828821d9339cf.png"}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-blend-2-js-a3f952984a80121c65d5.js.map