(this.webpackJsonppokemon_matching_cards_project=this.webpackJsonppokemon_matching_cards_project||[]).push([[0],{60:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(21),s=t.n(c),i=(t(60),t(10)),o=t(77),l=t(7),j=t(0);function u(e){var a=e.pokemon,t=e.handleClick,r=e.index,n=e.isCardOpen,c=e.disableCardIndicator;return Object(j.jsx)("button",{onClick:function(e){return t(e,r)},disabled:2===c||n,className:"card",children:Object(j.jsx)("img",{className:n?"open":"hidden",src:a,alt:a})})}var f=t(75);function m(e){var a=e.pokemons,t=e.handleClick,r=e.isCardOpen,n=e.disableCardIndicator,c=function(){return a.map((function(e,a){return Object(j.jsx)(u,{index:a,pokemon:e,handleClick:t,isCardOpen:r[a],disableCardIndicator:n},a)}))};return Object(j.jsxs)("ul",{className:"deck",children:[0===c().length&&Object(j.jsx)(f.a,{animation:"border",variant:"primary"}),c()]})}function b(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e}function d(e){return"card"===e.target.className?e.target.firstElementChild.src.replace(/[^0-9]/g,""):e.target.src.replace(/[^0-9]/g,"")}var h={zero:Object(l.a)(Array(5)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star"},a)})),one:Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star"},a)})).concat(Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star"},a+1)}))),two:Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star"},a)})).concat(Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star"},a+2)}))),three:Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star"},a)})).concat(Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star"},a+3)}))),four:Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star"},a+4)}))),five:Object(l.a)(Array(5)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star"},a)}))},O={zero:Object(l.a)(Array(5)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a)})),halfToOne:Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star-half-alt fa-3x"},a)})).concat(Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+1)}))),one:Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+1)}))),halfToTwo:Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star-half-alt fa-3x"},a+1)}))).concat(Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+2)}))),two:Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+2)}))),halfToThree:Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star-half-alt fa-3x"},a+2)}))).concat(Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+3)}))),three:Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(2)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+3)}))),halfToFour:Object(l.a)(Array(3)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star-half-alt fa-3x"},a+3)}))).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+4)}))),four:Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"far fa-star fa-3x"},a+4)}))),halfToFive:Object(l.a)(Array(4)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)})).concat(Object(l.a)(Array(1)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star-half-alt fa-3x"},a+4)}))),five:Object(l.a)(Array(5)).map((function(e,a){return Object(j.jsx)("i",{className:"fas fa-star fa-3x"},a)}))},x=t(8),p=t(2),v=t(80),g=t(79),N=t(76);function y(e){var a=e.moves,t=e.isCardOpen,n=e.restartGame,c=e.fetchReviews,s=e.handleGameDifficulty,o=e.deckSize,l=Object(r.useState)(!0),u=Object(i.a)(l,2),f=u[0],m=u[1],b=Object(r.useState)(!1),d=Object(i.a)(b,2),h=d[0],O=d[1],y=Object(r.useState)({firstName:"",lastName:"",rating:"",comments:""}),k=Object(i.a)(y,2),C=k[0],w=k[1];function A(e){w(Object(p.a)(Object(p.a)({},C),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(j.jsxs)("div",{className:"game-stats",children:[Object(j.jsx)("i",{className:"fas fa-retweet fa-2x",onClick:function(){n(),m(!0),O(!1)}}),Object(j.jsx)("span",{children:Object(j.jsxs)("div",{onChange:function(e){s(e),m(!0)},children:[Object(j.jsx)(v.a.Check,{inline:!0,name:"difficulty",type:"radio",label:"Easy",value:"easy"}),Object(j.jsx)(v.a.Check,{inline:!0,name:"difficulty",type:"radio",label:"Medium",value:"medium",defaultChecked:!0}),Object(j.jsx)(v.a.Check,{inline:!0,name:"difficulty",type:"radio",label:"Hard",value:"hard"})]})}),Object(j.jsx)("span",{children:Object(j.jsx)("h5",{children:Object(j.jsxs)("strong",{children:["Moves: ",Math.floor(a)]})})}),f&&Object(j.jsxs)(g.a,{centered:!0,show:f&&void 0===t.find((function(e){return!e})),children:[Object(j.jsx)(g.a.Header,{closeButton:!0,onClick:function(){m(!1),O(!1)},children:Object(j.jsx)(g.a.Title,{children:"Congratulations!"})}),Object(j.jsxs)(g.a.Body,{children:["You've matched all cards in ",Math.floor(a)," moves!",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Would you like to save your results and rate us?"]}),Object(j.jsxs)(g.a.Footer,{children:[Object(j.jsx)(N.a,{variant:"secondary",onClick:function(){m(!1),O(!1)},children:"No"}),Object(j.jsx)(N.a,{variant:"primary",onClick:function(){return O(!0)},children:"Yes"})]}),h&&Object(j.jsx)(g.a.Body,{children:Object(j.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),m(!1),fetch("http://localhost:4000/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:C.firstName,lastName:C.lastName,rating:""!==C.rating?parseInt(C.rating):5,comments:C.comments,gameDifficulty:function(){switch(o){case 10:return"Easy";case 20:return"Medium";case 30:return"Hard";default:return"Medium"}}(),moves:a,datePosted:Date.now()})}).then(c),w({firstName:"",lastName:"",rating:"",comments:""})},children:[Object(j.jsx)(v.a.Control,{required:!0,type:"text",placeholder:"Enter first name",name:"firstName",value:C.firstName,onChange:A}),Object(j.jsx)(v.a.Control,{type:"text",placeholder:"Enter last name",name:"lastName",value:C.lastName,onChange:A}),Object(j.jsxs)(v.a.Group,{controlId:"formSelect",children:[Object(j.jsx)(v.a.Label,{children:"Rate me:"}),Object(j.jsxs)(v.a.Select,{required:!0,name:"rating",onChange:A,children:[Object(j.jsx)("option",{value:"5",children:"Five"}),Object(j.jsx)("option",{value:"4",children:"Four"}),Object(j.jsx)("option",{value:"3",children:"Three"}),Object(j.jsx)("option",{value:"2",children:"Two"}),Object(j.jsx)("option",{value:"1",children:"One"}),Object(j.jsx)("option",{value:"0",children:"Zero"})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)(v.a.Control,{type:"text",placeholder:"Comments...",name:"comments",value:C.comments,onChange:A}),Object(j.jsx)("br",{}),Object(j.jsx)(g.a.Footer,{children:Object(j.jsx)(N.a,{variant:"success",type:"submit",children:"Submit"})})]})})]})]})}function k(e){var a=e.fetchReviews,t=Object(r.useState)([]),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(20),u=Object(i.a)(o,2),f=u[0],h=u[1];function O(){var e=[];fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151").then((function(e){return e.json()})).then((function(a){a.results.forEach((function(a){e.push(a.url)}));var t=a.results.map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return e.sprites.other.dream_world.front_default}))}));Promise.all(t).then((function(e){return function(e){var a=b(e).map((function(e,a){return a<f/2&&e})).filter((function(e){return e})),t=Object(l.a)(a),r=b(a.concat(t));s(r)}(e)}))}))}Object(r.useEffect)((function(){O(),g(new Array(f).fill(!1))}),[f]);var x=Object(r.useState)(new Array(f).fill(!1)),p=Object(i.a)(x,2),v=p[0],g=p[1],N=Object(r.useState)({pokeIndexes:[],pokeIds:[]}),k=Object(i.a)(N,2),C=k[0],w=k[1],A=Object(r.useState)(0),I=Object(i.a)(A,2),S=I[0],T=I[1],F=Object(r.useState)(0),E=Object(i.a)(F,2),P=E[0],D=E[1];return Object(r.useEffect)((function(){!function(){var e=Object(l.a)(v);2===C.pokeIndexes.length&&(setTimeout((function(){return D(0)}),500),w({pokeIndexes:[],pokeIds:[]}),C.pokeIds[0]!==C.pokeIds[1]&&(w({pokeIndexes:[],pokeIds:[]}),e[C.pokeIndexes[0]]=!1,e[C.pokeIndexes[1]]=!1,setTimeout((function(){D(0),g(e)}),500)))}()}),[C,v,P]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{moves:S,isCardOpen:v,restartGame:function(){g(new Array(f).fill(!1)),w({pokeIndexes:[],pokeIds:[]}),T(0),D(0),O()},fetchReviews:a,handleGameDifficulty:function(e){switch(e.target.value){case"easy":h(10);break;case"medium":h(20);break;case"hard":h(30);break;default:h(20)}w({pokeIndexes:[],pokeIds:[]}),T(0),D(0)},deckSize:f}),Object(j.jsx)(m,{pokemons:c,handleClick:function(e,a){T(S+.5),D(P+1);var t=Object(l.a)(v);t[a]=!0,g(t),w({pokeIndexes:C.pokeIndexes.concat(a),pokeIds:C.pokeIds.concat(d(e))})},isCardOpen:v,disableCardIndicator:P})]})}function C(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("a",{id:"contact-me",href:"mailto:haroldtm55@gmail.com",children:Object(j.jsx)("b",{children:"Contact the Developer"})}),Object(j.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg",alt:"The international Pokemon logo."}),Object(j.jsx)("h1",{children:"Matching Cards"})]})}var w=t(82),A=t(81),I=t(28);function S(){return Object(j.jsx)(w.a,{bg:"primary",variant:"dark",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(A.a,{className:"Navbar",children:[Object(j.jsx)(I.b,{to:"/",children:Object(j.jsx)("i",{className:"fas fa-gamepad fa-3x"})}),Object(j.jsx)(I.b,{to:"/reviews",children:Object(j.jsx)("b",{children:"Reviews"})}),Object(j.jsx)(I.b,{to:"/contact",children:Object(j.jsx)("b",{children:"Contact"})})]})})})}var T=t(83);function F(e){var a=e.review;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(T.a,{bg:"Secondary",text:"dark",style:{width:"18rem"},className:"mb-2",children:[Object(j.jsxs)(T.a.Header,{children:[Object(j.jsx)("i",{className:"fas fa-child"})," ",Object(j.jsxs)("b",{children:[a.firstName+" "+a.lastName,Object(j.jsx)("br",{}),new Date(a.datePosted).toLocaleString()]})]}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{children:function(){switch(a.rating){case 0:return h.zero;case 1:return h.one;case 2:return h.two;case 3:return h.three;case 4:return h.four;default:return h.five}}()}),Object(j.jsxs)(T.a.Text,{children:[a.comments,Object(j.jsx)("br",{}),Object(j.jsxs)("strong",{children:["Difficulty: ",a.gameDifficulty]}),Object(j.jsx)("br",{}),Object(j.jsxs)("strong",{children:["Moves: ",a.moves]})]})]})]})})}var E=t(52),P=t(53);function D(e){var a=e.handleCheckboxChange,t=e.handleStartsFilter;return Object(j.jsx)("div",{className:"filter-reviews",children:Object(j.jsx)(v.a,{children:Object(j.jsxs)(E.a,{xs:2,children:[Object(j.jsx)(v.a.Check,{onChange:a,type:"checkbox",label:"Sort by oldest review"}),Object(j.jsx)(P.a,{label:"Filter by stars",children:Object(j.jsxs)(v.a.Select,{name:"rating",onChange:t,children:[Object(j.jsx)("option",{value:"All",children:"All"}),Object(j.jsx)("option",{value:"5",children:"Five"}),Object(j.jsx)("option",{value:"4",children:"Four"}),Object(j.jsx)("option",{value:"3",children:"Three"}),Object(j.jsx)("option",{value:"2",children:"Two"}),Object(j.jsx)("option",{value:"1",children:"One"}),Object(j.jsx)("option",{value:"0",children:"Zero"})]})})]})})})}function M(e){var a=e.reviews,t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)("All"),l=Object(i.a)(o,2),u=l[0],f=l[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:Object(j.jsx)("b",{children:"Reviews"})}),Object(j.jsx)(D,{handleCheckboxChange:function(e){e.target.checked?s(!0):s(!1)},handleStartsFilter:function(e){null===e.target.value||"All"===e.target.value?f("All"):f(parseInt(e.target.value))}}),Object(j.jsx)("div",{className:"average-rating",children:function(){var e=a.map((function(e){return e.rating})).reduce((function(e,a){return e+a}));switch(Math.round(e/a.length*2)/2){case 0:return O.zero;case.5:return O.halfToOne;case 1:return O.one;case 1.5:return O.halfToTwo;case 2:return O.two;case 2.5:return O.halfToThree;case 3:return O.three;case 3.5:return O.halfToFour;case 4:return O.four;case 4.5:return O.halfToFive;default:return O.five}}()}),Object(j.jsx)("div",{className:"reviews-container",children:c&&"All"===u?a.map((function(e,a){return Object(j.jsx)(F,{review:e},a)})):c&&"All"!==u?a.filter((function(e){return e.rating===u})).map((function(e,a){return Object(j.jsx)(F,{review:e},a)})):c||"All"!==u?c||"All"===u?void 0:a.filter((function(e){return e.rating===u})).map((function(e,a){return Object(j.jsx)(F,{review:e},a)})).reverse():a.map((function(e,a){return Object(j.jsx)(F,{review:e},a)})).reverse()})]})}var G=t(78);function _(){var e=Object(r.useState)({firstName:"",lastName:"",email:"",phone:"",message:""}),a=Object(i.a)(e,2),t=a[0],n=a[1];function c(e){n(Object(p.a)(Object(p.a)({},t),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(j.jsxs)("div",{className:"contact-us",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("b",{children:"Contact"})}),Object(j.jsxs)("div",{className:"contact-info",children:[Object(j.jsxs)("div",{className:"email",children:[Object(j.jsx)("i",{className:"fas fa-paper-plane fa-2x"}),Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"mailto:haroldtm55@gmail.com",children:"haroldtm55@gmail.com"})})]}),Object(j.jsxs)("div",{className:"phone",children:[Object(j.jsx)("i",{className:"fas fa-mobile-alt fa-2x"}),Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"callto:+61404927123",children:"+61 401 927 123"})})]})]}),Object(j.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:4000/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t.firstName,lastName:t.lastName,email:t.email,phone:t.phone,message:t.message})}).then((function(){return alert("Thank you ".concat(t.firstName,", I will contact you soon!"))})).catch((function(){return alert("Thank you ".concat(t.firstName,", I will contact you soon!"))})),n({firstName:"",lastName:"",email:"",phone:"",message:""})},children:[Object(j.jsxs)(G.a,{className:"mb-3",children:[Object(j.jsxs)(v.a.Group,{as:E.a,controlId:"formGridFirstName",children:[Object(j.jsx)(v.a.Label,{children:"First Name"}),Object(j.jsx)(v.a.Control,{type:"text",placeholder:"Enter first name",name:"firstName",onChange:c,value:t.firstName})]}),Object(j.jsxs)(v.a.Group,{as:E.a,controlId:"formGridSurname",children:[Object(j.jsx)(v.a.Label,{children:"Surname"}),Object(j.jsx)(v.a.Control,{type:"text",placeholder:"Enter Surname",name:"lastName",onChange:c,value:t.lastName})]})]}),Object(j.jsxs)(G.a,{className:"mb-3",children:[Object(j.jsxs)(v.a.Group,{as:E.a,controlId:"formGridEmail",children:[Object(j.jsx)(v.a.Label,{children:"Email"}),Object(j.jsx)(v.a.Control,{required:!0,type:"email",placeholder:"Enter email",name:"email",onChange:c,value:t.email})]}),Object(j.jsxs)(v.a.Group,{as:E.a,controlId:"formGridPhone",children:[Object(j.jsx)(v.a.Label,{children:"Phone number"}),Object(j.jsx)(v.a.Control,{type:"tel",placeholder:"Enter phone number",name:"phone",onChange:c,value:t.phone})]})]}),Object(j.jsxs)(v.a.Group,{as:E.a,className:"mb-3",controlId:"textarea",children:[Object(j.jsx)(v.a.Label,{children:"Your message:"}),Object(j.jsx)(v.a.Control,{required:!0,as:"textarea",rows:3,name:"message",onChange:c,value:t.message})]}),Object(j.jsx)(N.a,{variant:"primary",type:"submit",children:"Submit"})]})]})}var H=t(11),L=[{firstName:"Harold",lastName:"Torres",rating:5,comments:"I like pokemons!",gameDifficulty:"Medium",moves:27,datePosted:1624191071351},{firstName:"Sha",lastName:"",rating:3,comments:"Could be better",gameDifficulty:"Hard",moves:24,datePosted:1625192071351},{firstName:"Jae",lastName:"",rating:4,comments:"Are pokemons real??",gameDifficulty:"Medium",moves:25,datePosted:1626193071351},{firstName:"Min",lastName:"",rating:5,comments:"",gameDifficulty:"Hard",moves:25,datePosted:1627194071351},{firstName:"Justin",lastName:"",rating:4,comments:"I like to write long posts, and that's why my post is the longest so far.",gameDifficulty:"Medium",moves:27,datePosted:1627295071351},{firstName:"Thomas",lastName:"",rating:2,comments:"How many pokemons are there?",gameDifficulty:"Easy",moves:26,datePosted:1628196071351}];function J(){var e=Object(r.useState)(L),a=Object(i.a)(e,2),t=a[0],n=a[1];function c(){fetch("http://localhost:4000/reviews").then((function(e){return e.json()})).then((function(e){n(L.concat(e))})).catch((function(){return alert("Welcome and enjoy the Matching Cards Pokemon game! \nHowever, it seems that you've opened the deployed version. Eveything will work fine except new reviews won't be posted, and contact form submissions won't be stored in the mock JSON server database.")}))}return Object(r.useEffect)((function(){c()}),[]),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(C,{}),Object(j.jsxs)(H.c,{children:[Object(j.jsx)(H.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{fetchReviews:c})}),Object(j.jsx)(H.a,{exact:!0,path:"/reviews",children:Object(j.jsx)(M,{reviews:t})}),Object(j.jsx)(H.a,{exact:!0,path:"/contact",children:Object(j.jsx)(_,{})})]})]})}var R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),c(e),s(e)}))};t(72);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(I.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root")),R()}},[[73,1,2]]]);
//# sourceMappingURL=main.17c5e67d.chunk.js.map