(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{344:function(e,t,n){"use strict";var r=n(15),a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(19)),o=r(n(349)),l=r(n(0)),i=n(350);function c(){var e=(0,l.useRef)(),t=0;(0,i.useRender)(function(){var n=5*Math.sin(o.Math.degToRad(t+=.1)),r=Math.cos(o.Math.degToRad(2*t));e.current.rotation.set(n,n,n),e.current.scale.set(r,r,r)});var n=(0,l.useMemo)(function(){var e=new o.SphereBufferGeometry(1,10,10),t=new o.MeshBasicMaterial({color:new o.Color("lightblue")}),n=new Array(2e3).fill().map(function(){return[800*Math.random()-400,800*Math.random()-400,800*Math.random()-400]});return[e,t,f,n]},[]),r=(0,u.default)(n,4),a=r[0],c=r[1],f=r[2],d=r[3];return l.default.createElement("group",{ref:e},d.map(function(e,t){var n=(0,u.default)(e,3),r=n[0],o=n[1],i=n[2];return l.default.createElement("mesh",{key:t,geometry:a,material:c,position:[r,o,i]})}))}t.default=function(){return l.default.createElement(i.Canvas,{camera:{position:[0,0,0]}},l.default.createElement("ambientLight",{color:"lightblue"}),l.default.createElement("pointLight",{color:"white",intensity:1,position:[10,10,10]}),l.default.createElement(c,null))}},91:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),u=n(94),o=r(n(344));t.default=function(){return a.default.createElement(u.AppFrame,{title:function(){return"rgbsky"},content:function(){return a.default.createElement(o.default,null)}})}}}]);
//# sourceMappingURL=component---src-pages-rgbsky-index-js-dd4845adda6fa12bfdb3.js.map