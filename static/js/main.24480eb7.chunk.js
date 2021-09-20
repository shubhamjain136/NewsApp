(this["webpackJsonpmy-news"]=this["webpackJsonpmy-news"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(18),r=c.n(s),i=(c(48),c(49),c(64)),o=c(60),l=c(65),j=(c(33),c(16)),h=c(1);var b=function(){return Object(h.jsx)("div",{className:"sticky-top mb-5",children:Object(h.jsx)(i.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(j.c,{to:"/",className:"nav-link",children:Object(h.jsx)(i.a.Brand,{href:"",children:"My News"})}),Object(h.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(l.a,{className:"me-auto",children:[Object(h.jsx)(j.b,{to:"/",className:"nav-link",children:"Home"}),Object(h.jsx)(j.c,{to:"/business",className:"nav-link",children:"Business"}),Object(h.jsx)(j.c,{to:"/health",className:"nav-link",children:"Health"}),Object(h.jsx)(j.c,{to:"/science",className:"nav-link",children:"Science"}),Object(h.jsx)(j.c,{to:"/technology",className:"nav-link",children:"Technology"}),Object(h.jsx)(j.c,{to:"/sports",className:"nav-link",children:"Sports"})]})})]})})})},u=c(19),d=c.n(u),p=c(32),x=c(26),O=c(8),g=c(66),y=c(61);var m=function(e){var t=e.url,c=e.urlToImage,n=e.description,a=e.title,s=e.content,r=e.author,i=e.date,o=e.source;return Object(h.jsxs)(g.a,{style:{width:"15.5rem",margin:"auto",marginBottom:"50px",height:"550px",background:"#ced6d4"},children:[Object(h.jsx)(g.a.Img,{variant:"top",style:{maxHeight:"160px"},src:c||"https://source.unsplash.com/1600x900/?child,children"}),Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:a.slice(0,75)+(a.length>75?"...":"")}),Object(h.jsx)(g.a.Text,{children:n?n.slice(0,200)+(n.length>200?"...":""):s?s.slice(0,200)+(s.length>200?"...":""):""}),Object(h.jsxs)("p",{className:"text-muted ",style:{paddingTop:"20px",fontSize:"0.8rem",position:"absolute",bottom:"20px",left:"6px"},children:["By ",r||"Unknown"," published at"," ",new Date(i).toLocaleString()]}),Object(h.jsx)("span",{className:"badge badge-pill badge-danger",style:{position:"absolute",right:"0px",top:"0px",background:"#dc3545"},children:o}),Object(h.jsx)(y.a,{variant:"dark",size:"sm",href:t,target:"_blank",style:{position:"absolute",display:"inline",right:"10px",bottom:"10px"},children:"Read More"})]})]})},f=c(62),v=c(63),k=c(42),S=c(43);var w=function(){return Object(h.jsx)("div",{})};var N=function(e){var t=e.category,c=e.country,a=e.apiKey,s=e.pageSize,r=Object(n.useState)([]),i=Object(O.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)(0),u=Object(O.a)(b,2),g=u[0],y=u[1],N=Object(n.useState)(1),T=Object(O.a)(N,2),z=T[0],B=T[1],K=Object(n.useState)(null),F=Object(O.a)(K,2),I=F[0],C=F[1];Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(50),e.next=3,fetch("https://newsapi.org/v2/top-headlines?category=".concat(t,"&sortBy=popularity&apiKey=").concat(a,"&pageSize=").concat(s,"&country=").concat(c,"&page=").concat(z));case 3:return n=e.sent,y(70),e.next=7,n.json();case 7:r=e.sent,j((function(e){return[].concat(Object(p.a)(e),Object(p.a)(r.articles))})),C(r.totalResults),y(100);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,c,z,t,s]),Object(n.useEffect)((function(){window.scrollTo(0,0),j([]),B(1)}),[t]);var H=function(){var e=Object(x.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B((function(e){return e+1}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=t.slice(0,1).toUpperCase()+t.slice(1);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{color:"#24877f",progress:g,onLoaderFinished:function(){return y(0)}}),Object(h.jsxs)(o.a,{style:{overflow:"hidden"},children:[Object(h.jsxs)("h2",{className:"text-light text-center mb-4",children:[L," Headlines"]}),Object(h.jsx)(S.a,{dataLength:l.length,next:H,hasMore:l.length!==I,loader:Object(h.jsx)(w,{}),children:Object(h.jsx)(o.a,{style:{minHeight:"100vh"},children:Object(h.jsx)(f.a,{xs:1,sm:2,md:3,lg:4,children:l.map((function(e){return Object(h.jsx)(v.a,{children:Object(h.jsx)(m,{url:e.url,urlToImage:e.urlToImage,description:e.description,title:e.title,content:e.content,date:e.publishedAt,author:e.author,source:e.source.name})},e.url)}))})})})]})]})},T=c(7);var z=function(){var e="in",t="f360647e037c43d5a45c97ecb6a591be",c="12";return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(T.c,{children:[Object(h.jsx)(T.a,{exact:!0,path:"/",children:Object(h.jsx)(N,{category:"general",country:e,apiKey:t,pageSize:c})}),Object(h.jsx)(T.a,{exact:!0,path:"/health",children:Object(h.jsx)(N,{category:"health",country:e,apiKey:t,pageSize:c})}),Object(h.jsx)(T.a,{exact:!0,path:"/science",children:Object(h.jsx)(N,{category:"science",country:e,apiKey:t,pageSize:c})}),Object(h.jsx)(T.a,{exact:!0,path:"/business",children:Object(h.jsx)(N,{category:"business",country:e,apiKey:t,pageSize:c})}),Object(h.jsx)(T.a,{exact:!0,path:"/sports",children:Object(h.jsx)(N,{category:"sports",country:e,apiKey:t,pageSize:c})}),Object(h.jsx)(T.a,{exact:!0,path:"/technology",children:Object(h.jsx)(N,{category:"technology",country:e,apiKey:t,pageSize:c})})]})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),B()}},[[58,1,2]]]);
//# sourceMappingURL=main.24480eb7.chunk.js.map