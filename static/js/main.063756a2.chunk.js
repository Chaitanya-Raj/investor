(this.webpackJsonpinvestor=this.webpackJsonpinvestor||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),s=(n(14),n(2)),l=n(9),r=(n(15),n(1));var u=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),u=c[0],d=c[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),j=h[0],v=h[1],f=Object(a.useState)(""),p=Object(s.a)(f,2),g=p[0],m=p[1],O=Object(a.useState)(""),w=Object(s.a)(O,2),x=w[0],k=w[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{className:"main-heading",children:"Investment Helper"})}),Object(r.jsxs)("main",{children:[Object(r.jsx)(l.a,{searchable:!1,isOptionDisabled:function(e){return e.isdisabled},className:"select",value:n,onChange:function(e){console.log(e),d(""),v(""),m(""),k(""),i(e)},options:[{value:"si",label:"Simple Interest"},{value:"ci",label:"Compound Interest"},{value:"pvm",label:"Present Value of Money",isdisabled:!0},{value:"fvm",label:"Future Value of Money",isdisabled:!0}]}),("si"===n.value||"ci"===n.value)&&Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:function(e){"si"===n.value?d(parseFloat(j)+parseFloat(j*(g/100)*x)):d(j*Math.pow(1+g/100,x)),e.preventDefault()},children:[Object(r.jsxs)("div",{className:"float-label",children:[Object(r.jsx)("input",{type:"tel",value:j,onChange:function(e){v(e.target.value)}}),Object(r.jsx)("label",{className:""!==j?"active":"",htmlFor:"principal",children:"Principal"})]}),Object(r.jsxs)("div",{className:"float-label",children:[Object(r.jsx)("input",{type:"tel",value:g,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("label",{className:""!==g?"active":"",htmlFor:"Interest",children:"Return"})]}),Object(r.jsxs)("div",{className:"float-label",children:[Object(r.jsx)("input",{type:"tel",value:x,onChange:function(e){k(e.target.value)}}),Object(r.jsx)("label",{className:""!==x?"active":"",htmlFor:"time",children:"Time"})]}),Object(r.jsx)("button",{disabled:!j||!g||!x,children:"Calculate"})]})}),n&&Object(r.jsxs)("div",{className:"float-label amount",children:[Object(r.jsx)("input",{disabled:!0,type:"text",value:u}),Object(r.jsx)("label",{className:""!==u?"active":"",htmlFor:"Interest",children:"Amount"})]})]}),Object(r.jsx)("footer",{children:Object(r.jsx)("p",{children:"Made with \u2764 by Chaitanya Raj"})})]})},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/investor",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/investor","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(t,e)}))}}(),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.063756a2.chunk.js.map