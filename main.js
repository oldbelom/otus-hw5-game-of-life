!function(){"use strict";function n(n,t,e){var r="<table border=1>".concat(t.map((function(n,t){return"<tr>".concat(n.map((function(n,e){return 1===n?"<td \n        data-x=".concat(e,"\n        data-y=").concat(t,'\n        class="cell alive" \n        ></td>'):"<td \n      data-x=".concat(e,"\n      data-y=").concat(t,'\n      class="cell dead" \n      ></td>')})).join(""),"</tr>")})).join(""),"</table>");n.innerHTML=r,n.querySelector("table").addEventListener("click",(function(n){var t=n.target;if(!t)throw Error;var r=t.getAttribute("data-x"),a=t.getAttribute("data-y");Number(r)>=0&&Number(a)>=0&&e(Number(r),Number(a))}))}function t(n,t,e){var r=n[e];if(void 0===r)return 0;var a=r[t];return void 0===a?0:a}function e(e,r,a){var u,c=!1;a.innerHTML='\n    <div class="field-wrapper"></div>\n    <label >Установите скорость игры\n      <input type="range" min="100" max="2000" />\n    </label>\n    <button>Start</button>\n  ';var i=a.querySelector(".field-wrapper"),o=a.querySelector("button"),l=a.querySelector("input"),d=new Array(r).fill(0).map((function(){return new Array(e).fill(0)})),f=function t(e,r){d[r][e]=0===d[r][e]?1:0,n(i,d,t)};function v(){c=!1,o.innerHTML="Start",clearInterval(u)}n(i,d,f),o.addEventListener("click",(function(){var e;c?v():(e=Number(l.value),c=!0,o.innerHTML="Stop",u=setInterval((function(){d=function(n){return n.map((function(e,r){return e.map((function(e,a){var u,c=function(n,e,r){for(var a=0,u=n-1;u<=n+1;u+=1)a+=Number(t(r,u,e-1)),a+=Number(t(r,u,e+1));return(a+=Number(t(r,n-1,e)))+Number(t(r,n+1,e))}(a,r,n),i=t(n,a,r);return 3===(u=c)||2===u&&1===i?1:0}))}))}(d),n(i,d,f),function(n){for(var t=0;t<n.length;t+=1)for(var e=n[t],r=0;r<e.length;r+=1)if(e[r])return!0;return!1}(d)||(alert("All cells died"),v())}),e))}))}var r=document.createElement("div"),a=document.createElement("div");document.body.appendChild(r),document.body.appendChild(a),e(6,6,r),e(10,10,a)}();