(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),r=t(3),u=t(7),i=t(2),a=t(4),s=t.n(a),l=t(0),d=function(e){var n=f(e.phonebook,e.filter_str);return Object(l.jsx)(l.Fragment,{children:n.map((function(n){return Object(l.jsxs)("p",{children:[" ",n.name," ",n.number,Object(l.jsx)("button",{onClick:function(){return e.deleteFunc(n)},children:"delete"},n.id)]},n.name)}))})},b=function(e){return Object(l.jsxs)("div",{children:[" filter name with:",Object(l.jsx)("input",{value:e.filter_str,onChange:e.actionFunc})]})},f=function(e,n){return e.filter((function(e){return e.name.includes(n)}))},j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[" name:",Object(l.jsx)("input",{value:e.nameTxt,onChange:e.editNameFunc})]}),Object(l.jsxs)("div",{children:[" number:",Object(l.jsx)("input",{value:e.numTxt,onChange:e.editNumberFunc})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",onClick:e.onSubmitFunc,children:"add"})})]})})},m=(t(16),"/api/persons"),h=function(e){if(null===e.message)return null;console.log("TRING TO RENDER SOMETHING"),console.log(e.message);var n=e.message.includes("rror")?"error":"notification";return Object(l.jsxs)("div",{className:n,children:[" ",e.message,"  "]})},O=function(){var e=Object(i.useState)(null),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)([]),a=Object(r.a)(o,2),f=a[0],O=a[1],g=Object(i.useState)(""),p=Object(r.a)(g,2),x=p[0],v=p[1],E=Object(i.useState)(""),F=Object(r.a)(E,2),T=F[0],k=F[1],w=Object(i.useState)(""),I=Object(r.a)(w,2),N=I[0],R=I[1];return Object(i.useEffect)((function(){console.log("fetching phonebook to UI"),s.a.get(m).then((function(e){console.log("fetced phonebook to UI"),O(e.data)})).catch((function(e){}))}),[]),console.log("render",f.length,"notes"),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(h,{message:t}),Object(l.jsx)(b,{filter_str:N,actionFunc:function(e){return R(e.target.value)}}),Object(l.jsx)("h2",{children:"Add new contact"}),Object(l.jsx)(j,{onSubmitFunc:function(e){e.preventDefault();var n=f.findIndex((function(e){return e.name===x}));if(-1===n)(function(e,n){var t={name:e,number:n};return s.a.post(m,t).then((function(e){return e.data}))})(x,T).then((function(e){console.log("IIIIIMMMMHHHHHEEEEEEEERRRRE"),O(f.concat(e)),c("Added ".concat(x)),setTimeout((function(){c(null)}),5e3)})).catch((function(e){c(e.response),setTimeout((function(){c(null)}),5e3),console.log("ADDNEWCONTACTERROR:"),console.log(e.response)}));else if(f[n].number!==T){var o=f[n].name;window.confirm("Changing number of ".concat(o,"?"))&&(function(e,n){var t=Object(u.a)(Object(u.a)({},e),{},{number:n});return s.a.put(m+"/"+e.id,t).then((function(e){return e.data}))}(f[n],T).then((function(e){O(f.map((function(n){return n.id!==e.id?n:e}))),c("Updated number for ".concat(o)),setTimeout((function(){c(null)}),5e3)})).catch((function(e){alert("Failed updating number!"),console.log(e)})),console.log(t))}else alert("".concat(x," with number ").concat(T," is already added to phonebook"));v(""),k("")},nameTxt:x,numTxt:T,editNameFunc:function(e){return v(e.target.value)},editNumberFunc:function(e){return k(e.target.value)}}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(d,{phonebook:f,filter_str:N,deleteFunc:function(e){var n;window.confirm("Really want to remove ".concat(e.name," ?"))&&(n=e.id,s.a.delete(m+"/"+n).then((function(e){return e.data}))).then((function(){O(f.filter((function(n){return n.id!==e.id}))),c("Deleted ".concat(e.name)),setTimeout((function(){c(null)}),5e3)})).catch((function(){alert("Something wrong - could not remove contact ".concat(e.name))}))}})]})};o.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.15dd39ce.chunk.js.map