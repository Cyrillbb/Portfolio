(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Searcher.64a81f89.png"},function(e,a,t){e.exports=t.p+"static/media/chat.cc74d443.png"},function(e,a,t){e.exports=t.p+"static/media/SpaceStuff.2879e712.png"},,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(14),c=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(19),i=t(6);t(25);var o=function(e){var a=e.pathname,t=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useRef)(null);return Object(r.useEffect)((function(){switch(a){case"Portfolio/projects":t.current.className="Header__Link",c.current.className="Header__Link",l.current.className="Header__Link--highlighted";break;case"Portfolio/contacts":t.current.className="Header__Link",c.current.className="Header__Link--highlighted",l.current.className="Header__Link";break;default:t.current.className="Header__Link--highlighted",c.current.className="Header__Link",l.current.className="Header__Link"}}),[a]),n.a.createElement("header",{className:"Header"},n.a.createElement("nav",{className:"HeaderNav"},n.a.createElement("h3",{className:"HeaderNav_h3"},"My portfolio"),n.a.createElement("ul",{className:"HeaderNav__ul"},n.a.createElement("li",null,n.a.createElement(i.b,{ref:t,className:"Header__Link",to:"/Portfolio"},"Home")),n.a.createElement("li",null,n.a.createElement(i.b,{ref:l,className:"Header__Link",to:"/Portfolio/projects"},"Projects")),n.a.createElement("li",null,n.a.createElement(i.b,{ref:c,className:"Header__Link",to:"/Portfolio/contacts"},"Contacts")))))},m=t(1);t(31),t(32);var u=function(){return n.a.createElement("section",{className:"Home"},n.a.createElement("h2",{className:"Home__h2"},"Hello,  my name is Kirill Baryshnikov. I am a passionate ",n.a.createElement("span",{className:"Home__span"},"front-end")," developer."),n.a.createElement("h3",{className:"Home__h3"},"My skills"),n.a.createElement("ul",{className:"Home__ul"},n.a.createElement("li",{className:"list-group-item"},"HTML5"),n.a.createElement("li",{className:"list-group-item"},"CSS3, SCSS"),n.a.createElement("li",{className:"list-group-item"},"JavaScript(ES6+)"),n.a.createElement("li",{className:"list-group-item"},"React.js"),n.a.createElement("li",{className:"list-group-item"},"Redux"),n.a.createElement("li",null,"Jest"),n.a.createElement("li",{className:"list-group-item"},"Node.js"),n.a.createElement("li",{className:"list-group-item"},"Express.js"),n.a.createElement("li",{className:"list-group-item"},"Socket.io"),n.a.createElement("li",{className:"list-group-item"},"Webpack")),n.a.createElement(i.b,{className:"Home__Link",to:"/Portfolio/projects"},"My projects ",n.a.createElement("i",{className:"fas fa-arrow-right"})),n.a.createElement(i.b,{className:"Home__LinkCont",to:"/Portfolio/contacts"},"My contacts ",n.a.createElement("i",{className:"fas fa-arrow-right"})))},p=(t(33),t(16)),f=t.n(p),h=t(17),E=t.n(h),d=t(18),N=t.n(d);t(34),t(35);var _=function(e){var a=e.link,t=e.name;return n.a.createElement("a",{className:"ButtonLink",href:a,target:"_blank",rel:"noopener noreferrer"},t)};var b=function(e){var a=e.img,t=e.link,r=e.cardName,l=e.liveLink;return n.a.createElement("div",{className:"Card"},n.a.createElement("p",{style:{fontSize:"larger"}},r),n.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"Card__img",src:a,alt:""})),n.a.createElement("div",{className:"Card__div"},n.a.createElement("div",{className:"Card__div__div"},"Check github readme for description and link to the live demo."),n.a.createElement(_,{name:"Github",link:t})))};var g=function(){return n.a.createElement("section",{className:"Projects"},n.a.createElement(b,{cardName:"MERN Anime Searcher app",img:f.a,link:"https://github.com/Cyrillbb/mernAnimeSearcher",liveLink:"https://simple-anime-searcher.herokuapp.com/SimpleAnimeSearch"}),n.a.createElement(b,{cardName:"Simple chat app",img:E.a,link:"https://github.com/Cyrillbb/SimpleChatServer",liveLink:"https://cyrils-simple-chat.herokuapp.com/"}),n.a.createElement(b,{cardName:"Web page about space",img:N.a,link:"https://github.com/Cyrillbb/SpaceStuff",liveLink:"https://cyrillbb.github.io/SpaceStuff/"}))};t(36);var k=function(){return n.a.createElement("section",{className:"Contacts"},n.a.createElement("a",{className:"Contacts__i",href:"https://github.com/Cyrillbb",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("span",{className:"Contacts__i"},n.a.createElement("i",{className:"fas fa-hospital-symbol"})),n.a.createElement("a",{className:"Contacts__i",href:"mailto: kibaryshnikov@yandex.ru"},n.a.createElement("i",{className:"fas fa-at"})))};var v=function(){var e=Object(r.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(m.f)();return Object(r.useEffect)((function(){l(c.pathname.slice(1))}),[c]),n.a.createElement("div",{className:"App"},n.a.createElement(o,{pathname:t}),n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/Portfolio"},n.a.createElement(u,null)),n.a.createElement(m.a,{exact:!0,path:"/Portfolio/projects"},n.a.createElement(g,null)),n.a.createElement(m.a,{exact:!0,path:"/Portfolio/contacts"},n.a.createElement(k,null))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(r.Profiler,{id:"app",onRender:function(){return console.log("rendered")}},n.a.createElement(v,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.5fb8d018.chunk.js.map