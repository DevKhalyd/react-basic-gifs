(this.webpackJsonpgift_expert_app=this.webpackJsonpgift_expert_app||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),l=n(1),u=n(16),o=function(e){var t=e.setAnime,n=Object(a.useState)(""),c=Object(l.a)(n,2),i=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>0&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",placeholder:"Type your topic",onChange:function(e){var t=e.target.value;return o(t)},value:i})))},m=n(13),s=n(14),f=function(){function e(t,n,a,r){var c,i;Object(m.a)(this,e),this.id=void 0,this.title=void 0,this.url=void 0,this.image=void 0,this.id=t,this.title=n,this.url=a,this.image=null!==(c=null===r||void 0===r||null===(i=r.original)||void 0===i?void 0:i.url)&&void 0!==c?c:""}return Object(s.a)(e,[{key:"toString",value:function(){return"id: ".concat(this.id,"\n")+"title: ".concat(this.title,"\n")+"url: ".concat(this.url,"\n")+"image: ".concat(this.image,"\n")}}],[{key:"fromObject",value:function(t){return new e(t.id,t.title,t.url,t.images)}}]),e}(),g=new(n(15).GiphyFetch)("9iZru4MOs4AwaDlo5C4RAWeGWr9Nrg9J");function h(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),o=u[0],m=u[1];return Object(a.useEffect)((function(){var t;(t=e,g.search(t,{lang:"en",limit:10})).then((function(e){var t=e.data,n=[];t.forEach((function(e){e&&n.push(f.fromObject(e))})),m([].concat(n)),c(!1)})).catch((function(e){console.log("Error ".concat(e)),m([]),c(!1)}))}),[e]),[r,o]}var v=n(5),E=function(){var e=Object(v.b)({loading:!0,indicator:r.a.createElement(v.a,null)}).indicatorEl;return r.a.createElement("div",{className:"static-size"},e," ")};var p=function(e){var t=e.category,n=e.gifs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("br",null),function(e){return r.a.createElement("div",{className:"wrapper"},e.map((function(e){return r.a.createElement("div",{className:"container-gif"},r.a.createElement("img",{src:e.image,alt:e.title,width:"90%",height:"70%"}),r.a.createElement("br",null),r.a.createElement("div",{className:"tooltip"},e.title,r.a.createElement("span",{className:"tooltiptext"},e.id)))})))}(n))},d=function(e){var t=e.category,n=h(t),a=Object(l.a)(n,2),c=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(E,null):r.a.createElement(p,{category:t,gifs:i}))};var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Looking for your gifs"),r.a.createElement(o,{setAnime:c}),r.a.createElement("hr",null),function(e){return 0===e.length?r.a.createElement("h2",null,"Please input some topic"):r.a.createElement("ol",null,e.map((function(e,t){return r.a.createElement(d,{key:e+t,category:e})})))}(n))};n(42);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.28159a85.chunk.js.map