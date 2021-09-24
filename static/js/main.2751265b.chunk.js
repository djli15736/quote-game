(this["webpackJsonpquotes-app"]=this["webpackJsonpquotes-app"]||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),s=(n(171),n(24)),i=n(11),l=(n(172),n(72)),u=n(157),d=n(202);var j=n(154),b=n.n(j),h=n(3);function O(e){var t=e.users,n=e.setUsers;return Object(h.jsx)(b.a,{items:t,onChange:function(e){n(e)}})}var x="quote-game-users",v=[{id:"1",text:"Daniel"},{id:"2",text:"Jim"},{id:"3",text:"Bob"},{id:"4",text:"Michael"},{id:"5",text:"Tony"}];function m(){var e=localStorage.getItem(x);return null===e?[].concat(v):JSON.parse(e)}function S(e){var t=e.setQuote,n=e.reveal,a=e.sourceRevealed,r=e.deck,o=e.showAddCardModal,l=Object(c.useState)(m),j=Object(i.a)(l,2),b=j[0],v=j[1];return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h1",{children:" Control Panel "}),Object(h.jsx)(O,{users:b,setUsers:v}),Object(h.jsx)(d.a,{onClick:function(){var e;n(!1),t((e=r)[Math.floor(Math.random()*e.length)])},className:"m-4",children:"Swap Current Quote"}),Object(h.jsx)(d.a,{onClick:function(){return n(!a)},className:"m-4",children:" Reveal Source "}),Object(h.jsx)(d.a,{onClick:function(){var e=function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var c=[e[t],e[n]];e[n]=c[0],e[t]=c[1]}return e}(b);v(Object(s.a)(e))},className:"m-4",children:" Shuffle Users"}),Object(h.jsx)(d.a,{onClick:function(){localStorage.setItem(x,JSON.stringify(b))},className:"m-4",variant:"success",children:"Save"}),Object(h.jsx)(d.a,{onClick:function(){o(!0)},className:"m-4",variant:"success",children:"Add New Quote"})]})}var g=n(201);function f(e){var t=e.quote,n=e.sourceRevealed,a=Object(c.useState)(1),r=Object(i.a)(a,2),o=r[0],s=r[1];return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:"Quote Viewer"}),Object(h.jsxs)(g.a.Text,{children:[Object(h.jsx)("strong",{children:"Current quote:"})," ",t.Quote]}),n&&Object(h.jsxs)(g.a.Text,{children:[Object(h.jsx)("strong",{children:"Source:"})," ",t.Source]})]})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("input",{id:"guess-box",type:"text",placeholder:"Who said it?"}),Object(h.jsx)("button",{onClick:function(){var e,n=null===(e=document.getElementById("guess-box"))||void 0===e?void 0:e.value,c=document.getElementById("scoreboard");n===t.Source?(s(o+1),c.innerHTML="Score: "+o,alert("Correct!")):alert("Incorrect!")},children:"Submit"}),Object(h.jsx)("div",{id:"scoreboard",children:"Score: 0"})]})})]})}n(188);var I=n(197),C=n(198),y=n(199),p=n(200);function w(e){var t=e.visible,n=e.setVisible,a=(e.addQuote,Object(c.useState)("QUOTE TEXT")),r=Object(i.a)(a,2),o=r[0],s=r[1],l=Object(c.useState)("SOURCE TEXT"),u=Object(i.a)(l,2),j=u[0],b=u[1];var O=function(){return n(!1)};return Object(h.jsxs)(y.a,{show:t,onHide:O,children:[Object(h.jsx)(y.a.Header,{closeButton:!0,children:Object(h.jsx)(y.a.Title,{children:"Modal title"})}),Object(h.jsx)(y.a.Body,{children:Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.quoteTextArea",children:[Object(h.jsx)(p.a.Label,{children:"Quote"}),Object(h.jsx)(p.a.Control,{as:"textarea",rows:3,value:o,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.sourceTextArea",children:[Object(h.jsx)(p.a.Label,{children:"Who said it?"}),Object(h.jsx)(p.a.Control,{as:"textarea",rows:3,value:j,onChange:function(e){return b(e.target.value)}})]})]})}),Object(h.jsxs)(y.a.Footer,{children:[Object(h.jsx)(d.a,{variant:"secondary",onClick:O,children:"Close"}),Object(h.jsx)(d.a,{variant:"primary",onClick:O,children:"Save changes"})]})]})}var T=function(){var e=Object(c.useState)(l[0]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),u=o[0],d=o[1],j=Object(c.useState)(!1),b=Object(i.a)(j,2),O=b[0],x=b[1],v=Object(c.useState)(l),m=Object(i.a)(v,2),g=m[0],y=m[1];return Object(h.jsx)(I.a,{className:"App",children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(S,{showAddCardModal:x,setQuote:a,reveal:d,deck:g,sourceRevealed:u}),Object(h.jsx)(f,{quote:n,sourceRevealed:u}),Object(h.jsx)(w,{visible:O,setVisible:x,addQuote:function(e){y([].concat(Object(s.a)(g),[e]))}})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),Q()},72:function(e){e.exports=JSON.parse('[{"ID":1,"Kind":"Iconic","Quote":"The things I do for love.","Source":"Jamie Lannister"},{"ID":2,"Kind":"Iconic","Quote":"Dracarys.","Source":"Daenerys Targaryen"},{"ID":3,"Kind":"Iconic","Quote":"You know nothing Jon Snow.","Source":"Ygritte"},{"ID":4,"Kind":"Iconic","Quote":"Winter is Coming.","Source":"House Stark Words"},{"ID":5,"Kind":"Iconic","Quote":"The King in the North!","Source":"Greatjon Umber"},{"ID":6,"Kind":"Well-Known","Quote":"They\'ll bend the knee or I\'ll destroy them.","Source":"Stannis Baratheon"},{"ID":7,"Kind":"Well-Known","Quote":"Any man who must say I am the king is no true king.","Source":"Tywin Lannister"},{"ID":8,"Kind":"Well-Known","Quote":"My watch has ended.","Source":"Jon Snow"},{"ID":9,"Kind":"Iconic","Quote":"Chaos is a ladder.","Source":"Petyr Baelish"},{"ID":10,"Kind":"Well-Known","Quote":"I have always been your son.","Source":"Tyrion Lannister"}]')}},[[191,1,2]]]);
//# sourceMappingURL=main.2751265b.chunk.js.map