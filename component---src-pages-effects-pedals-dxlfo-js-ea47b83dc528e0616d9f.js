(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20],{385:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return g}));var n=a(14),o=a.n(n),r=a(35),l=a.n(r),i=(a(2),a(133)),s=a(106),c=a(410),d=a(379),u=a(428),h=a.n(u),m=a(429),f=a.n(m),p={},b={_frontmatter:p},w="wrapper";function g(e){var t=e.components,a=l()(e,["components"]);return Object(i.b)(w,o()({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"DXLFO"),Object(i.b)("p",null,"The DXLFO was a programmable, Arduino-controlled harmonic tremolo* with control voltage outputs. Originally while browsing the ",Object(i.b)("a",o()({parentName:"p"},{href:"http://www.diystompboxes.com/smfforum/"}),"diystompboxes.com forums")," I found a thread about the ",Object(i.b)("a",o()({parentName:"p"},{href:"http://www.diystompboxes.com/smfforum/index.php?topic=103714.0"}),"Twin Peaks Tap Tremolo"),". I really liked the idea behind this pedal, especially the tap tempo function and the different tremolo shapes it could provide. In designing the DXLFO I built the audio signal path in a reasonably similar way, but I wanted to control the tempo and LFO(s) using an Arduino to allow for much more flexibility in modifying LFO patterns. And threw in a screen to display the waveform."),Object(i.b)(s.i,{src:h.a,mdxType:"Image"}),Object(i.b)("p",null,"The DXLFO's audio circuit differed from the Twin Peaks Tremolo in that it had:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'A relay to switch between the "harmonic tremolo" and a regular tremolo / volume control mode, so that there was the option to preserve the frequency response through the circuit.'),Object(i.b)("li",{parentName:"ul"},"A different tone control that worked more like a band pass filter blended with the original signal.")),Object(i.b)("p",null,"The LFO circuit was completely different. The DXLFO was able to accept a 0-5V CV signal or an expression pedal as an input, which could be used to control any parameter of either of the two internal LFOs. Subdivision of beats was possible, so you could tap quarter notes with your foot and the tremolo would operate on 16ths, and attack and release curves could be played with to modify the shape of the modulation signals. The LFOs could also be optionally set to output a 0-5V control voltage through the two CV outputs, to control other pedals in more complex ways or to control the volume of the audio signal like in a normal tremolo effect or harmonic tremolo."),Object(i.b)(s.i,{src:f.a,mdxType:"Image"}),Object(i.b)("p",null,"It was fully designed, working on a breadboard and I'd begun building the DXLFO's enclosure when I had bigger ideas for my pedalboard as a whole, and it made more sense to split the DXLFO's core functions apart. Instead of a single box I wanted to use a ",Object(i.b)(d.a,{to:"/effects-pedals/shoosh",mdxType:"Link"},"dedicated VCA")," to modulate the volume of the signal, and leave the signal generation, LFO and routing of CV signals to another pedal, which became the idea behind the ",Object(i.b)(d.a,{to:"/effects-pedals/ctrl",mdxType:"Link"},"CTRL signal controller"),"."),Object(i.b)("h3",null,"*Footnote: the harmonic tremolo"),Object(i.b)("p",null,'The original harmonic tremolo was a Fender creation that took two tremolo effects and applied one to the low frequencies and one to the high frequencies, so that instead of modulating the volume ("soft-loud-soft-loud") it would instead alternate between the lower frequencies and the higher ones ("lows-highs-lows-highs").'),Object(i.b)(c.a,{mdxType:"Disqus"}))}g.isMDXComponent=!0},402:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(380),l=a(385),i=a(413);t.default=function(){return o.a.createElement(r.a,{title:"Shoosh",modifier:"defaultBackground"},o.a.createElement(i.a,{content:function(){return o.a.createElement(l.default,null)},pageNav:["# DXLFO"]}))}},410:function(e,t,a){"use strict";var n=a(2),o=a.n(n);t.a=function(){return o.a.createElement("div",{id:"disqus_thread"})}},413:function(e,t,a){"use strict";var n=a(14),o=a.n(n),r=a(2),l=a.n(r),i=a(106),s=function(){return l.a.createElement(i.m,null,l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/"},"damienclarke.me")),l.a.createElement(i.n,null,l.a.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),l.a.createElement(i.n,null,l.a.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),l.a.createElement(i.n,{modifier:"section"},"Stuff"),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Javascript-libraries"},"Javascript libraries")),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Effects-pedals"},"Effects pedals")),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Music"},"Music")),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Arduino-libraries"},"Arduino libraries")),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Animation"},"Animation")),l.a.createElement(i.n,null,l.a.createElement(i.k,{href:"/#Old-Flash-Games"},"Old Flash games")))};t.a=function(e){return l.a.createElement(i.d,o()({nav:s},e))}},428:function(e,t,a){e.exports=a.p+"static/dxlfo-c31a6f3d49e051e567b28ee14267f938.jpg"},429:function(e,t,a){e.exports=a.p+"static/dxlfo-apart-6ec7a9420d5265fb0c2d8bd1e4dbf432.jpg"}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-dxlfo-js-ea47b83dc528e0616d9f.js.map