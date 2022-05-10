(()=>{"use strict";var t={853:(t,n,o)=>{o.d(n,{Z:()=>i});var e=o(933),r=o.n(e),s=o(476),c=o.n(s)()(r());c.push([t.id,"body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: rgb(229, 248, 243);\r\n}\r\n\r\n.button {\r\n    min-width: 40px;\r\n    min-height: 40px;\r\n    background-color: blanchedalmond;\r\n    margin: 3px;\r\n    padding: 3px;\r\n    float: left;\r\n    border-radius: 10px;    \r\n    border: 1px solid rgb(252, 205, 144);\r\n}\r\n\r\n.Monitor {\r\n    height: 120px;\r\n    width: 690px;\r\n    border: 2px solid rgb(252, 205, 144);\r\n    margin-bottom: 10px;\r\n    outline: none;\r\n    border-radius: 5px; \r\n    background-color: rgb(243, 250, 248);\r\n    transition: .2s;\r\n    text-align: start;\r\n}\r\n\r\n.Monitor input[type=text] {\r\n    height: 120px;\r\n    width: 900px;\r\n    background: #e2ffef;\r\n    overflow: auto;\r\n    border-radius: 10px;\r\n    outline: none;\r\n    border: 2px solid rgb(252, 205, 144);\r\n    color: #2f3542;\r\n    font-size: 20px;\r\n}\r\n\r\n#keyboard {\r\n    display: block;\r\n    padding: 5px;\r\n    height: 350px;\r\n    width: 710px;   \r\n}\r\n\r\n.button.active {\r\n    background-color: rgb(253, 208, 153);   \r\n}\r\n\r\n.button.remove {\r\n    animation: button_animation 0.5s forwards;\r\n}\r\n\r\n@keyframes button_animation {\r\n    0% {\r\n        background-color: rgb(253, 208, 153); \r\n    };\r\n    100% {\r\n        background-color: blanchedalmond;\r\n    };\r\n    \r\n}\r\n\r\n.Backspace {\r\n    width: 95px;\r\n    content: 'Backspace';\r\n}\r\n\r\n.Tab {\r\n    width: 45px;\r\n}\r\n\r\n.Del {\r\n    width: 45px;\r\n}\r\n\r\n.CapsLock {\r\n    width: 96px;\r\n}\r\n\r\n.ShiftLeft {\r\n    width: 96px;\r\n}\r\n\r\n.ControlLeft {\r\n    width: 70px;\r\n}\r\n\r\n.Space {\r\n    width: 266px;\r\n}\r\n\r\n.ControlRight {\r\n    width: 70px;\r\n}\r\n\r\n.Enter {\r\n    width: 87px;\r\n}\r\n\r\n\r\n",""]);const i=c},476:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=t(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(t,o,e,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(e)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);e&&c[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var n=[];function o(t){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===t){o=e;break}return o}function e(t,e){for(var s={},c=[],i=0;i<t.length;i++){var u=t[i],a=e.base?u[0]+e.base:u[0],l=s[a]||0,b="".concat(a," ").concat(l);s[a]=l+1;var d=o(b),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var p=r(m,e);e.byIndex=i,n.splice(i,0,{identifier:b,updater:p,references:1})}c.push(b)}return c}function r(t,n){var o=n.domAPI(n);return o.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;o.update(t=n)}else o.remove()}}t.exports=function(t,r){var s=e(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<s.length;c++){var i=o(s[c]);n[i].references--}for(var u=e(t,r),a=0;a<s.length;a++){var l=o(s[a]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}s=u}}},311:t=>{var n={};t.exports=function(t,o){var e=function(t){if(void 0===n[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},60:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},192:(t,n,o)=>{t.exports=function(t){var n=o.nc;n&&t.setAttribute("nonce",n)}},760:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(o){!function(t,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,r&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(e,t,n.options)}(n,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},865:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={id:e,exports:{}};return t[e](s,s.exports,o),s.exports}o.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t=o(892),n=o.n(t),e=o(760),r=o.n(e),s=o(311),c=o.n(s),i=o(192),u=o.n(i),a=o(60),l=o.n(a),b=o(865),d=o.n(b),m=o(853),p={};p.styleTagTransform=d(),p.setAttributes=u(),p.insert=c().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const f=[['<textarea class="Monitor" type = "text"></textarea>'],['<div class="row">     \n    <button class="button common" id="Backquote">~</button>\n    <button class="button common" id="Digit1">1</button>\n    <button class="button common" id="Digit2">2</button>\n    <button class="button common" id="Digit3">3</button>\n    <button class="button common" id="Digit4">4</button>\n    <button class="button common" id="Digit5">5</button>\n    <button class="button common" id="Digit6">6</button>\n    <button class="button common" id="Digit7">7</button>\n    <button class="button common" id="Digit8">8</button>\n    <button class="button common" id="Digit9">9</button>\n    <button class="button common" id="Digit0">0</button>\n    <button class="button common" id="Minus">-</button>\n    <button class="button common" id="Plus">=</button>\n    <button class="button Backspace" id="Backspace">Backspace</button>\n    <button class="button Tab" id="Tab">Tab</button>\n    <button class="button common" id="LetterQ">q</button>\n    <button class="button common" id="LetterW">w</button>\n    <button class="button common" id="LetterE">e</button>\n    <button class="button common" id="LetterR">r</button>\n    <button class="button common" id="LetterT">t</button>\n    <button class="button common" id="LetterY">y</button>\n    <button class="button common" id="LetterU">u</button>\n    <button class="button common" id="LetterI">i</button>\n    <button class="button common" id="LetterO">o</button>\n    <button class="button common" id="LetterP">p</button>\n    <button class="button common" id="leftscobka">[</button>\n    <button class="button common" id="rightscobka">]</button>\n    <button class="button common" id="palka"> | </button>\n    <button class="button Delete" id="Delete">Del</button>\n    <button class="button CapsLock" id="CapsLock">CapsLock</button>\n    <button class="button common" id="LetterA">a</button>\n    <button class="button common" id="LetterS">s</button>\n    <button class="button common" id="LetterD">d</button>\n    <button class="button common" id="LetterF">f</button>\n    <button class="button common" id="LetterG">g</button>\n    <button class="button common" id="LetterH">h</button>\n    <button class="button common" id="LetterJ">j</button>\n    <button class="button common" id="LetterK">k</button>\n    <button class="button common" id="LetterL">l</button>\n    <button class="button common" id="dvoetoch">;</button>\n    <button class="button common" id="kovich">\'</button>\n    <button class="button Enter" id="Enter">Enter</button>\n    <button class="button ShiftLeft" id="ShiftLeft">Shift</button>\n    <button class="button common" id="slash1"> / </button>\n    <button class="button common" id="LetterZ">z</button>\n    <button class="button common" id="LetterX">x</button>\n    <button class="button common" id="LetterC">c</button>\n    <button class="button common" id="LetterV">v</button>\n    <button class="button common" id="LetterB">b</button>\n    <button class="button common" id="LetterN">n</button>\n    <button class="button common" id="LetterM">m</button>\n    <button class="button common" id="zapataya">,</button>\n    <button class="button common" id="tochka">.</button>\n    <button class="button common" id="slash2"> / </button>\n    <button class="button buttonup" id="buttonup"></button>\n    <button class="button ShiftRight" id="ShiftRight">Shift</button>\n    <button class="button ControlLeft" id="ControlLeft">Ctrl</button>\n    <button class="button Win" id="Win">Win</button>\n    <button class="button leftAlt" id="leftAlt">Alt</button>\n    <button class="button Space" id="Space"></button>\n    <button class="button rightAlt" id="rightAlt">Alt</button>\n    <button class="button ControlRight" id="ControlRight">Ctrl</button>\n    <button class="button buttonleft" id="buttonleft"></button>\n    <button class="button buttondown" id="buttondown"></button>\n    <button class="button buttonright" id="buttonright"></button>\n</div>']];!function(){let t="";for(let n=0;n<f.length;n++)t+=f[n]+String.fromCharCode(f[n])+"</div>";document.querySelector("#keyboard").innerHTML=t}();let h=document.querySelectorAll(".button"),v=(document.querySelector("#Backspace"),document.querySelector("#Tab"),document.querySelector("#Del"),document.querySelector("#CapsLock")),g=(document.querySelector("#Enter"),document.querySelector("#leftShift"),document.querySelector("#rightShift"),document.querySelector("#leftCtrl"),document.querySelector("#Win"),document.querySelector("#leftAlt")),L=document.querySelector("#Space"),y=document.querySelector("#rightAlt"),x=(document.querySelector("#rightCtrl"),document.querySelector("#Monitor"));for(let t=0;t<h.length;t++)h[t].setAttribute("buttonname",h[t].innerText),h[t].setAttribute("UpperCasename",h[t].innerText.toUpperCase());window.addEventListener("keydown",(function(t){for(let n=0;n<h.length;n++)t.key!=h[n].getAttribute("buttonname")&&t.key!=h[n].getAttribute("UpperCasename")||h[n].classList.add("active"),"Space"==t.code&&L.classList.add("active"),"ShiftLeft"==t.code&&ShiftRight.classList.remove("active"),"ShiftRight"==t.code&&ShiftLeft.classList.remove("active"),"CapsLock"==t.code&&v.classList.toggle("active"),"ControlLeft ctrlKey"==t.code&&ControlRight.classList.remove("active"),"ControlRight ctrlKey"==t.code&&ControlLeft.classList.remove("active"),"leftAlt"==t.code&&y.classList.remove("active"),"rightAlt"==t.code&&g.classList.remove("active")})),window.addEventListener("keyup",(function(t){for(let n=0;n<h.length;n++)t.key!=h[n].getAttribute("buttonname")&&t.key!=h[n].getAttribute("UpperCasename")||(h[n].classList.remove("active"),h[n].classList.add("remove")),"Space"==t.code&&(L.classList.remove("active"),L.classList.add("remove")),"ShiftLeft"==t.code&&(ShiftRight.classList.remove("active"),ShiftRight.classList.remove("remove")),"ShiftRight"==t.code&&(ShiftLeft.classList.remove("active"),ShiftLeft.classList.remove("remove")),"ControlLeft ctrlKey"==t.code&&(ControlRight.classList.remove("active"),ControlRight.classList.remove("remove")),"ControlRight ctrlKey"==t.code&&(ControlLeft.classList.remove("active"),ControlLeft.classList.remove("remove")),"leftAlt"==t.code&&(y.classList.remove("active"),y.classList.remove("remove")),"rightAlt"==t.code&&(g.classList.remove("active"),g.classList.remove("remove")),setTimeout((()=>{h[n].classList.remove("remove")}),200)}));for(let t=0;t<h.length;t++)h[t].addEventListener("click",S);function S(t){console.log(this.innerText),t.preventDefault(),this.classList.add("active"),setTimeout((()=>{this.classList.remove("active")}),200),x.area.value+=this.innerText.value}})()})();