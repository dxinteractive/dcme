(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{381:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return b})),o.d(t,"default",(function(){return g}));var a=o(11),n=o.n(a),i=o(28),r=o.n(i),l=(o(0),o(132)),s=o(100),d=o(406),h=o(375),c=o(424),u=o.n(c),p=o(425),m=o.n(p),b={},f={_frontmatter:b},w="wrapper";function g(e){var t=e.components,o=r()(e,["components"]);return Object(l.b)(w,n()({},f,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"DXLFO"),Object(l.b)("p",null,"The DXLFO was a programmable, Arduino-controlled harmonic tremolo* with control voltage outputs. Originally while browsing the ",Object(l.b)("a",n()({parentName:"p"},{href:"http://www.diystompboxes.com/smfforum/"}),"diystompboxes.com forums")," I found a thread about the ",Object(l.b)("a",n()({parentName:"p"},{href:"http://www.diystompboxes.com/smfforum/index.php?topic=103714.0"}),"Twin Peaks Tap Tremolo"),". I really liked the idea behind this pedal, especially the tap tempo function and the different tremolo shapes it could provide. In designing the DXLFO I built the audio signal path in a reasonably similar way, but I wanted to control the tempo and LFO(s) using an Arduino to allow for much more flexibility in modifying LFO patterns. And threw in a screen to display the waveform."),Object(l.b)(s.Image,{src:u.a,mdxType:"Image"}),Object(l.b)("p",null,"The DXLFO's audio circuit differed from the Twin Peaks Tremolo in that it had:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'A relay to switch between the "harmonic tremolo" and a regular tremolo / volume control mode, so that there was the option to preserve the frequency response through the circuit.'),Object(l.b)("li",{parentName:"ul"},"A different tone control that worked more like a band pass filter blended with the original signal.")),Object(l.b)("p",null,"The LFO circuit was completely different. The DXLFO was able to accept a 0-5V CV signal or an expression pedal as an input, which could be used to control any parameter of either of the two internal LFOs. Subdivision of beats was possible, so you could tap quarter notes with your foot and the tremolo would operate on 16ths, and attack and release curves could be played with to modify the shape of the modulation signals. The LFOs could also be optionally set to output a 0-5V control voltage through the two CV outputs, to control other pedals in more complex ways or to control the volume of the audio signal like in a normal tremolo effect or harmonic tremolo."),Object(l.b)(s.Image,{src:m.a,mdxType:"Image"}),Object(l.b)("p",null,"It was fully designed, working on a breadboard and I'd begun building the DXLFO's enclosure when I had bigger ideas for my pedalboard as a whole, and it made more sense to split the DXLFO's core functions apart. Instead of a single box I wanted to use a ",Object(l.b)(h.a,{to:"/effects-pedals/shoosh",mdxType:"Link"},"dedicated VCA")," to modulate the volume of the signal, and leave the signal generation, LFO and routing of CV signals to another pedal, which became the idea behind the ",Object(l.b)(h.a,{to:"/effects-pedals/ctrl",mdxType:"Link"},"CTRL signal controller"),"."),Object(l.b)("h3",null,"*Footnote: the harmonic tremolo"),Object(l.b)("p",null,'The original harmonic tremolo was a Fender creation that took two tremolo effects and applied one to the low frequencies and one to the high frequencies, so that instead of modulating the volume ("soft-loud-soft-loud") it would instead alternate between the lower frequencies and the higher ones ("lows-highs-lows-highs").'),Object(l.b)(d.a,{mdxType:"Disqus"}))}g.isMDXComponent=!0},406:function(e,t,o){"use strict";var a=o(0),n=o.n(a);t.a=function(){return n.a.createElement("div",{id:"disqus_thread"})}},424:function(e,t,o){e.exports=o.p+"static/dxlfo-c31a6f3d49e051e567b28ee14267f938.jpg"},425:function(e,t,o){e.exports=o.p+"static/dxlfo-apart-6ec7a9420d5265fb0c2d8bd1e4dbf432.jpg"}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-dxlfo-mdx-mdx-88389ed5b92454414865.js.map