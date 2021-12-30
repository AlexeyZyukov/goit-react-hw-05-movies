(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{15:function(e,t,n){e.exports={wrapper:"MoviesList_wrapper__2xBIp",noBullets:"MoviesList_noBullets__3wo82"}},19:function(e,t,n){},20:function(e,t,n){e.exports={title:"PageHeading_title__ub7zZ"}},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),s=n.n(a),i=n(5),o=(n(26),n(2)),j=n(8),l=n.n(j),b=n(0),u=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(i.c,{exact:!0,to:"/",className:l.a.link,activeClassName:l.a.activeLink,children:"HomePage"}),Object(b.jsx)(i.c,{to:"/moviesPage",className:l.a.link,activeClassName:l.a.activeLink,children:"MoviesPage"})]})},x=n(19),h=n.n(x);function p(e){var t=e.children;return Object(b.jsx)("div",{className:h.a.container,children:t})}function d(){return Object(b.jsxs)(p,{children:[Object(b.jsx)(u,{}),Object(b.jsx)("br",{})]})}var O=n(9),v=n(20),m=n.n(v),f=function(e){var t=e.text;return Object(b.jsx)("h1",{className:m.a.title,children:t})},g=n(14),_=n.n(g),w=n(21),k="https://api.themoviedb.org/3",N="f18f6a819e9c6881cbb8a279cacace51";function y(){return P.apply(this,arguments)}function P(){return P=Object(w.a)(_.a.mark((function e(){var t,n,c=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Sorry, nothing was found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}var M=n(15),L=n.n(M),S=n.p+"static/media/no_image_poster.70136814.jpg";function B(e){var t=e.url,n=e.movies;return Object(b.jsx)("ul",{className:L.a.wrapper,children:n&&n.map((function(e){var n;return Object(b.jsx)("li",{className:L.a.noBullets,children:Object(b.jsxs)(i.b,{to:"".concat(t).concat(e.id),children:[Object(b.jsx)("img",{src:e.poster_path?"https://www.themoviedb.org/t/p/w300".concat(e.poster_path):S,alt:e.title}),Object(b.jsx)("h4",{children:null!==(n=e.title)&&void 0!==n?n:e.name})]})},e.id)}))})}function F(){var e=Object(o.g)().url,t=Object(c.useState)(null),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){y("".concat(k,"/trending/all/day?api_key=").concat(N)).then((function(e){return a(e.results)}))}),[]),console.log(e),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{text:"Popular movies"}),Object(b.jsx)(B,{url:e,movies:r})]})}var E=n(6),H=n.n(E);function I(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{text:"Movies"}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"text",className:H.a.inputField,placeHolder:"input movie to search"}),Object(b.jsx)("button",{type:"submit",className:H.a.button,children:"Search"})]})]})}function C(){var e=Object(o.f)().movieId,t=Object(c.useState)(null),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){(function(e){return y("".concat(k,"/movie/").concat(e,"?api_key=").concat(N,"&language=en-US"))})(e).then(a)}),[e]),console.log(e),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{text:"Movie details"}),r&&Object(b.jsxs)("div",{className:H.a.wrapper,children:[Object(b.jsx)("img",{src:r.poster_path?"https://www.themoviedb.org/t/p/w300".concat(r.poster_path):S,alt:r.title,className:H.a.box1}),Object(b.jsx)("h2",{children:r.original_title}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"User score: "}),r.vote_average,Object(b.jsx)("span",{children:" %"})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Description: "})," ",r.overview]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Genres: "}),r.genres?r.genres.map((function(e){return e.name})).join(" "):"unknown genre"]})]})]})}function G(){return Object(b.jsx)("h1",{children:"404 Page not found"})}function J(){return Object(b.jsxs)(p,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/moviesPage",exact:!0,children:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{path:"/:movieId",children:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(G,{})})]})]})}s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(J,{})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={wrapper:"view_wrapper__3CmHx",box1:"view_box1__MF_Jz"}},8:function(e,t,n){e.exports={link:"Navigation_link___fXg0",activeLink:"Navigation_activeLink__2GmGt Navigation_link___fXg0"}}},[[37,1,2]]]);
//# sourceMappingURL=main.43bff19a.chunk.js.map