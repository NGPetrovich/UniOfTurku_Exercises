(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n.n(o),r=n(16),s=n.n(r),i=n(7),c=n(17),u=n(18),l=n(20),h=n(19),d=n(0),f=function(t){var e=t.note,n=t.toggleImportance,o=e.important?"make not important":"make important";return Object(d.jsxs)("li",{className:"note",children:[e.content," ",Object(d.jsx)("button",{onClick:n,children:o})]})},p=n(5),j=n.n(p),m="https://notes-backend-testing-app.herokuapp.com/notes",b={getAll:function(){return j.a.get(m).then((function(t){return t.data}))},create:function(t){return j.a.post(m,t).then((function(t){return t.data}))},update:function(t,e){return j.a.put("".concat(m,"/").concat(t),e).then((function(t){return t.data}))}},g=function(t){var e=t.message;return null===e?null:Object(d.jsx)("div",{className:"error",children:e})},v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).addNote=function(t){t.preventDefault();var e={content:o.state.newNote,date:new Date,important:Math.random()>0};b.create(e).then((function(t){o.setState({notes:o.state.notes.concat(t),newNote:""})}))},o.handleNoteChange=function(t){console.log(t.target.value),o.setState({newNote:t.target.value})},o.toggleVisible=function(){o.setState({showAll:!o.state.showAll})},o.toggleImportanceOf=function(t){return function(){var e=o.state.notes.find((function(e){return e.id===t})),n=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});b.update(t,n).then((function(e){var n=o.state.notes.filter((function(e){return e.id!==t}));o.setState({notes:n.concat(e)})})).catch((function(n){o.setState({error:"muistiinpano '".concat(e.content,"' on jo valitettavasti poistettu palvelimelta"),notes:o.state.notes.filter((function(e){return e.id!==t}))}),setTimeout((function(){o.setState({error:null})}),5e3)}))}},o.state={notes:[],newNote:"",showAll:!0,error:null},console.log("constructor"),o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;b.getAll().then((function(e){t.setState({notes:e})}))}},{key:"render",value:function(){var t=this;console.log("render");var e=this.state.showAll?this.state.notes:this.state.notes.filter((function(t){return!0===t.important})),n=this.state.showAll?"only important":"all";return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Muistiinpanot"}),Object(d.jsx)(g,{message:this.state.error}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:this.toggleVisible,children:["show ",n]})}),Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsx)(f,{note:e,toggleImportance:t.toggleImportanceOf(e.id)},e.id)}))}),Object(d.jsxs)("form",{onSubmit:this.addNote,children:[Object(d.jsx)("input",{value:this.state.newNote,onChange:this.handleNoteChange}),Object(d.jsx)("button",{type:"submit",children:"Save"})]})]})}}]),n}(a.a.Component);n(44);s.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a14b70b9.chunk.js.map