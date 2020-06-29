(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(20),n(6)),u=n(4),i=n(1),s=n(5),m=n(3),f=n(2),h=n(27),b=(n(21),function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"phonebook"},t))}),p=n(11),d=(n(14),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.inputChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.createContact=function(t){t.preventDefault(),e.state.number.length<7||e.state.number.length>7?p.a.notify("Please fill the correct number: 12-34-567",{duration:5e3}):(e.props.onSubmit(e.state),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.createContact},r.a.createElement("label",null,"Name *",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:t,className:"input",onChange:this.inputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Phone number *",r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"number",value:n,className:"input",onChange:this.inputChange})),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",type:"submit"},"Add contact"))}}]),n}(a.Component)),E=function(e){var t=e.filter,n=e.contactsLength,a=e.onChange;return r.a.createElement(r.a.Fragment,null,n>1&&r.a.createElement("label",null,"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"filter",value:t,className:"input",onChange:a})))},v=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete;return r.a.createElement("li",{className:"list-item"},r.a.createElement("div",{className:"list-item-data"},r.a.createElement("span",null,n,":"),r.a.createElement("span",null,a[0],a[1],"-",a[2],a[3],"-",a[4],a[5],a[6])),r.a.createElement("button",{className:"btn",type:"button",onClick:function(){return c(t)}},"Delete"))},g=function(e){var t=e.contacts,n=e.onDelete;return r.a.createElement("ul",{className:"list"},t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement(v,{key:t,id:t,name:a,number:c,onDelete:function(){return n(t)}})})))},C=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("h2",{className:"feedback-title"},t),r.a.createElement("section",{className:"section"},n))};C.defaultProps={title:""};var y=C,N=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},O=(n(24),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.inputChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.addContact=function(t){var n=t.name,a=t.number;if(e.state.contacts.find((function(e){return e.name===n})))p.a.notify("".concat(n," is already in contacts."),{duration:5e3});else if(n&&a){var r={id:Object(h.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(o.a)(t))}}))}else p.a.notify("Please fill the form",{duration:5e3})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){N("contacts")&&this.setState({contacts:N("contacts")})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}("contacts",this.state.contacts)}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return r.a.createElement(b,null,r.a.createElement(y,{title:"Phonebook"},r.a.createElement(d,{onSubmit:this.addContact,onChange:this.inputChange})),r.a.createElement(y,{title:"Contacts"},r.a.createElement(E,{filter:n,contactsLength:t.length,onChange:this.inputChange}),r.a.createElement(g,{contacts:c,onDelete:this.deleteContact})))}}]),n}(a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.551787c5.chunk.js.map