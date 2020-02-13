(window.webpackJsonp=window.webpackJsonp||[]).push([[22,23],{386:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return j})),a.d(t,"default",(function(){return E}));var n=a(14),o=a.n(n),r=a(35),i=a.n(r),l=(a(2),a(133)),s=a(106),c=a(410),h=a(379),u=(a(411),a(430)),p=a.n(u),m=a(431),b=a.n(m),d=a(432),f=a.n(d),g=a(414),v=a.n(g),y=a(415),w=a.n(y),j={},O={_frontmatter:j},k="wrapper";function E(e){var t=e.components,a=i()(e,["components"]);return Object(l.b)(k,o()({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"building-a-vactrol-vca"},"Building a Vactrol VCA"),Object(l.b)("p",null,"Voltage Controlled Amplifiers (or \"VCAs\") are a common component in modular synthesizers. They're basically a volume control that can be set using a reference voltage. In a modular synth their primary job is make notes start and end, the volume is to raise when a key is pressed, and it's told to lower again when a key is released. The VCA simply reads the control voltage provided to it (often from 0V to 10V), and makes the audio signal quieter the closer the control voltage is to zero."),Object(l.b)(s.i,{src:p.a,alt:"Shoosh on a breadboard",mdxType:"Image"}),Object(l.b)("p",null,'In the world of guitars you might not see much point in one of these, but altering the volume of a signal is the basis for tremolo pedals, the feedback and blend controls in delay pedals, and it provides compressors with their ability to squeeze. Control voltages ("CVs") can open up some crazy possibilities; plug a low frequency oscillator ("LFO") into one of these VCAs and you\'ve got a tremolo effect that can cut your guitar sound in ',Object(l.b)("em",{parentName:"p"},"any shape that the LFO can come up with"),". I've found VCAs most useful as components within other effects."),Object(l.b)("p",null,"Why vactrols? They're known to introduce minimum levels of noise compared to other types of VCA and they're easy to set up. You wouldn't use them for everything - their response is very non-linear, they differ from one another, and they are a little slow to turn on and off. But they are very well suited for volume controls, tremolo pedals and compressors."),Object(l.b)("p",null,'##The "Shoosh" vactrol VCA circuit\nHere\'s the circuit I came up with and used in the ',Object(l.b)(h.a,{to:"/effects-pedals",mdxType:"Link"},"Shoosh"),". A CV from 0-5V will attenuate the audio signal from silent to a level determined by the gain pot. 0-5V is a standard control voltage range for guitar pedals."),Object(l.b)("h3",{id:"shoosh-schematic"},"Shoosh schematic"),Object(l.b)(s.k,{href:w.a,target:"_blank",mdxType:"HtmlLink"},Object(l.b)(s.i,{src:w.a,mdxType:"Image"})),Object(l.b)("h3",{id:"shoosh-veroboard-layout"},"Shoosh veroboard layout"),Object(l.b)(s.k,{href:v.a,target:"_blank",mdxType:"HtmlLink"},Object(l.b)(s.i,{src:v.a,mdxType:"Image"})),Object(l.b)("h2",{id:"the-amplifier"},"The amplifier"),Object(l.b)("p",null,"Let's first follow the signal through the amplifier section. It's basically an op-amp buffer followed by an inverting op-amp to change the audio volume."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The audio signal moves through the input capacitor C1 and enters op-amp 1 (IC1)."),Object(l.b)("li",{parentName:"ul"},"Op-amp 1 is a simple buffer, a non-inverting amplifier with unity gain. It doesn't change the volume. This will keep the input impedance of the pedal high, and ensure that op-amp 2 sees a predictable low impedance source."),Object(l.b)("li",{parentName:"ul"},"The signal leaves op-amp 1 and goes through the resistor end of the vactrol, encountering some resistance."),Object(l.b)("li",{parentName:"ul"},"The signal enters op-amp 2. This op amp, the resistor end of the vactrol and the gain pot collectively form an inverting amplifier with variable gain. The gain level is controlled both by the resistance through the vactrol, and the amount of resistance provided by the gain pot. Amount of gain = gain pot resistance / vactrol resistance."),Object(l.b)("li",{parentName:"ul"},"The signal leaves op-amp 2, flows though the output capacitor C2 and away.")),Object(l.b)("p",null,"A single TL072 is a perfect choice for these two op-amps. They're good for audio applications and cheap."),Object(l.b)("p",null,"So ",Object(l.b)("strong",{parentName:"p"},"less vactrol resistance = more volume"),"."),Object(l.b)("h2",{id:"the-vactrol"},"The vactrol"),Object(l.b)("p",null,'Vactrols (or optocouplers, or a dozen other names) are made from an LED pointing straight into a light-dependent resistor ("LDR"), encased in plastic. In fact you can make them yourself by getting an LED, pointing it at an LDR and engulfing them in heat shrink tubing or electrical tape so no external light can get in. I prefer buying them because their properties are more predictable, you can choose the ones that have the right turn on and turn off times, and when they\'re off they have ',Object(l.b)("em",{parentName:"p"},"very")," high resistance which is essential for the amplifier to make a signal completely silent. I usually go with VTL5C1s, they're quite quick and go very dark."),Object(l.b)("p",null,"The brighter the LED glows, the less resistance the LDR has. That gives us a variable resistor. That's just what we need for op-amp 2 to have variable gain."),Object(l.b)("p",null,"So ",Object(l.b)("strong",{parentName:"p"},"more LED brightness = less vactrol resistance"),"."),Object(l.b)("p",null,"Now you might be thinking:"),Object(l.b)("p",null,"More voltage into the vactrol = more LED brightness, right?"),Object(l.b)("p",null,"Well not exactly. It's possible but it's difficult. LEDs have a minimum voltage before they turn on. Usually anything less than about 1.2V makes no light, and beyond that LEDs brighten up quickly with additional voltage and then get only marginally brighter with added voltage. It's far better to control LED brightness using variations in current, not voltage."),Object(l.b)("p",null,"We also don't want the CV to be responsible for actually providing power to any parts of this pedal. It's merely a voltage ",Object(l.b)("em",{parentName:"p"},"reference"),". Things that generate CVs such as envelope generators or low frequency oscillators would typically not be designed to be used as a current source."),Object(l.b)("p",null,"Also remember that the LEDs in a vactrols follow all the same rules as normal LEDs. Give them too much current and they might die, and remember to plug them in the right way around."),Object(l.b)("p",null,"So let's go with ",Object(l.b)("strong",{parentName:"p"},"more LED current = more LED brightness"),"."),Object(l.b)("p",null,"But now we need to turn voltage into current. Voltage-to-current signal conversion."),Object(l.b)("h2",{id:"the-transconductance-amplifier"},"The transconductance amplifier"),Object(l.b)("p",null,"Certainly sounds impressive. It's a simple op-amp circuit that essentially turns a reference voltage into a corresponding current. Put the vactrol's LED in the loop (anode to the op-amp's output and cathode to the op-amp's negative input), add the R4 resistor to ground and you can then control the LED brightness with a control voltage delivered to the op-amp's positive input."),Object(l.b)("p",null,"Allaboutcircuits.com has a ",Object(l.b)("a",o()({parentName:"p"},{href:"http://www.allaboutcircuits.com/textbook/semiconductors/chpt-8/voltage-to-current-signal-conversion/",target:"_blank",rel:["nofollow","noopener","noreferrer"]}),"great article on these",Object(l.b)("span",{parentName:"a"},"(opens in a new window)")),"."),Object(l.b)("p",null,"So finally, ",Object(l.b)("strong",{parentName:"p"},"more control voltage = more LED current"),"."),Object(l.b)("p",null,"You will need a rail-to-rail op-amp. Normal op-amps can't output a voltage too close to either rail, but our CV will go all the way down to ground, so your op-amp will have to as well. I use TLC2272s, many others are available."),Object(l.b)("p",null,"The resistor R4 determines how much current will be generated for a given voltage at the op-amp's positive input. Smaller values make more current for a given voltage. This lets you scale your vactrol's non-linear response curve against your CV. But keep in mind that smaller values make you lose headroom. Watch out for clipping in the output audio."),Object(l.b)("h2",{id:"other-notes"},"Other notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"R5 and R6 provide us with a 4.5V voltage reference (Vref) so op amp 1 and 2 are biased correctly. This uses op amp 4 (IC4) which is set up as a simple buffer. On many other circuits this buffer isn't really required, but on this circuit if you turn the CV all the way down, the vactrol gets so dark (over 2M) in comparison to R2 that audio begins to leak back through the Vref path and through the output. The buffer prevents this from happening."),Object(l.b)("li",{parentName:"ul"},"R1 and R3 are in place to ensure that both the input and outputs don't float if this effect is being bypassed. Floating inputs and outputs often create a big pop when turning an effect back on by pressing the bypass footswitch."),Object(l.b)("li",{parentName:"ul"},"C1 and C2 can be increased to let through more bass frequencies if desired."),Object(l.b)("li",{parentName:"ul"},"R7 is just there to ensure that a CV of 0 will be detected if there's nothing plugged into the CV input.")),Object(l.b)("h2",{id:"a-finished-build"},"A finished build"),Object(l.b)("p",null,"See an example over on the ",Object(l.b)(h.a,{to:"/effects-pedals/shoosh",mdxType:"Link"},"Shoosh pedal page"),"."),Object(l.b)(s.i,{src:b.a,mdxType:"Image"}),Object(l.b)("p",null,"Completed prototype on vero."),Object(l.b)(s.i,{src:f.a,mdxType:"Image"}),Object(l.b)("p",null,"Boxed up and added to the pedal board. Please excuse the paint job."),Object(l.b)(c.a,{mdxType:"Disqus"}))}E.isMDXComponent=!0},404:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(380),i=a(386),l=a(413);t.default=function(){return o.a.createElement(r.a,{title:"Building a Vactrol VCA",modifier:"defaultBackground"},o.a.createElement(l.a,{content:function(){return o.a.createElement(i.default,null)},pageNav:["# Building a Vactrol VCA","The amplifier","The vactrol","The transconductance amplifier","Other notes","A finished build"]}))}},410:function(e,t,a){"use strict";var n=a(2),o=a.n(n);t.a=function(){return o.a.createElement("div",{id:"disqus_thread"})}},411:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(106);t.a=function(e){var t=e.id;return o.a.createElement(r.o,{modifier:"16-9"},o.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0"),frameBorder:"0",allowFullScreen:!0}))}},413:function(e,t,a){"use strict";var n=a(14),o=a.n(n),r=a(2),i=a.n(r),l=a(106),s=function(){return i.a.createElement(l.m,null,i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/"},"damienclarke.me")),i.a.createElement(l.n,null,i.a.createElement("a",{className:"Link",href:"https://github.com/dxinteractive"},"github")),i.a.createElement(l.n,null,i.a.createElement("a",{className:"Link",href:"mailto:dxinteractive@gmail.com"},"dxinteractive@gmail.com")),i.a.createElement(l.n,{modifier:"section"},"Stuff"),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#javascript-libraries"},"Javascript libraries")),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#effects-pedals"},"Effects pedals")),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#music"},"Music")),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#arduino-libraries"},"Arduino libraries")),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#animation"},"Animation")),i.a.createElement(l.n,null,i.a.createElement(l.k,{href:"/#old-flash-games"},"Old Flash games")))};t.a=function(e){return i.a.createElement(l.d,o()({nav:s},e))}},414:function(e,t,a){e.exports=a.p+"static/shoosh-layout-39e60f058136eaa93589ca4b6d59360e.png"},415:function(e,t,a){e.exports=a.p+"static/shoosh-schematic-56b23e86cd6b2b9f7ef41e93d9a65cee.png"},430:function(e,t,a){e.exports=a.p+"static/shoosh-breadboard-7e875f0b3a591d421599138dd94a6f26.jpg"},431:function(e,t,a){e.exports=a.p+"static/shoosh-vero-a95caa9974019ac125a23f8657194f13.jpg"},432:function(e,t,a){e.exports=a.p+"static/shoosh-done-2a6c084b7c2138c4cb6430af48ffb59d.jpg"}}]);
//# sourceMappingURL=component---src-pages-effects-pedals-posts-building-a-vactrol-vca-js-503b748fe115ee204326.js.map