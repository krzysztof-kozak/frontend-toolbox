(()=>{"use strict";var n={21:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),s=t(667),i=t.n(s),l=new URL(t(269),t.b),u=new URL(t(989),t.b),f=c()(o()),p=i()(l),d=i()(u);f.push([n.id,'*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: "My Local Font Bold";\n  src: url('+p+') format("truetype");\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "My Local Font Regular";\n  src: url('+d+')\n    format("truetype");\n  font-weight: 400;\n  font-style: normal;\n}\n\n.font-400 {\n  font-family: "My Local Font Regular", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.font-700 {\n  font-family: "My Local Font Bold", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  color: hsl(0deg 57% 90%);\n  background-color: hsl(0, 5%, 10%);\n\n  display: grid;\n  place-items: center;\n}\n\nh1 {\n  font-size: 3rem;\n\n  display: flex;\n  gap: 0.25em;\n  flex-wrap: wrap-reverse;\n  justify-content: center;\n}\n\n.logo-svg {\n  width: 1em;\n}\n',""]);const m=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],s=0;s<n.length;s++){var i=n[s],l=r.base?i[0]+r.base:i[0],u=a[l]||0,f="".concat(l," ").concat(u);a[l]=u+1;var p=t(f),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var m=o(d,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:m,references:1})}c.push(f)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var s=t(a[c]);e[s].references--}for(var i=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=i}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},269:(n,e,t)=>{n.exports=t.p+"7f9491c8a3642e25c850.ttf"},989:(n,e,t)=>{n.exports=t.p+"1525928acec5ca94ffa0.ttf"},867:(n,e,t)=>{n.exports=t.p+"2fc79e76df6735ab245d.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),s=t(565),i=t.n(s),l=t(216),u=t.n(l),f=t(589),p=t.n(f),d=t(21),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals;var h=t(867);document.body.appendChild(function(){const n=document.createElement("h1");n.classList.add("font-700");const e=new Image;e.src=h,e.classList.add("logo-svg");const t=document.createElement("p");return t.textContent="Hello Webpack",n.appendChild(e),n.appendChild(t),n}())})()})();