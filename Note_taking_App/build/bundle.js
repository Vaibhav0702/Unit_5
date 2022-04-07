(()=>{"use strict";var e={424:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\r\n    margin: 0px;\r\n}\r\n#header {\r\n    background:blue;\r\n    color: yellow;\r\n    font: arial;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    display: grid;\r\n    height:80px;\r\n    grid-template-columns:repeat(4,1fr) ;\r\n}\r\n\r\n#header > #name {\r\n    font-family: Arial, Sans-serif;\r\n    display: inline-block;\r\n    color:white;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n#container {\r\n    margin: 20px 20px 20px 20px;\r\n}\r\n#area {\r\n    width: 100%;\r\n    height: 100%;\r\n    font: 1em arial;\r\n    color: rgb(88, 3, 122);\r\n}\r\n#area:focus {\r\n    color: rgb(87, 9, 111);\r\n    border: 2px solid #96c56f;\r\n    box-shadow: 0px 1px 1px #888888;\r\n}\r\n#btn{\r\n    padding:10px;\r\n    background:blue;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\n#root{\r\n    width: 60%;\r\n    margin: auto;\r\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\r\n}\r\n#title{\r\n    padding: 10px 0px 10px 30px ;\r\n    font-size: 25px;\r\n    color: tomato;\r\n    font-weight: bolder\r\n}\r\n#logo>img{\r\n    width:70%;\r\n    height:70%;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],p=t.base?s[0]+t.base:s[0],l=a[p]||0,u="".concat(p," ").concat(l);a[p]=l+1;var d=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=t(e,o),p=0;p<a.length;p++){var l=n(a[p]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},617:(e,r,n)=>{e.exports=n.p+"e06f4d64622869314892.png"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),c=n(565),s=n.n(c),p=n(216),l=n.n(p),u=n(589),d=n.n(u),f=n(424),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=n(617);const g=document.getElementById("logo"),v=document.createElement("img");v.src=h,g.append(v),document.getElementById("btn").addEventListener("click",(function(e){e.preventDefault();let r=document.getElementById("area").value;x.push(r),localStorage.setItem("todo",JSON.stringify(x)),b()}));let x=JSON.parse(localStorage.getItem("todo"))||[];function b(e){const r=document.getElementById("root");r.innerHTML="",x.forEach(((e,n)=>{var t=document.createElement("div"),o=document.createElement("p");o.innerText=e,console.log(e),t.append(o),r.append(t)}))}window.addEventListener("load",(()=>{b()}))})()})();