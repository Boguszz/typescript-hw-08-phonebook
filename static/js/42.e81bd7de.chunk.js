"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[42],{4774:function(n,e,o){o.d(e,{Z:function(){return C}});var t,r,i,a,c,l,s,m,u=o(5705),d=o(6355),x=o(168),h=o(2499),p=h.Z.button(t||(t=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 30px;\n  padding: 10px 25px 10px 25px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),b=h.Z.span(r||(r=(0,x.Z)(["\n  margin-left: 10px;\n"]))),f=o(6871),v=o(184),g=function(n){var e=n.text,o=n.path,t=(0,f.s0)();return(0,v.jsxs)(p,{type:"button",onClick:function(){return t(o)},children:[(0,v.jsx)(d.BMs,{}),(0,v.jsx)(b,{children:e})]})},Z=h.Z.h2(i||(i=(0,x.Z)(["\n  margin-bottom: 30px;\n  text-transform: uppercase;\n  font-weight: 900;\n"]))),j=h.Z.label(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),y=(0,h.Z)(u.Bc)(c||(c=(0,x.Z)(["\n  margin-top: 8px;\n  color: red;\n"]))),k=h.Z.span(l||(l=(0,x.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),S=(0,h.Z)(u.gN)(s||(s=(0,x.Z)(["\n  height: 40px;\n  padding: 0 10px 0 10px;\n\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 14px;\n\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),w=h.Z.button(m||(m=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 200px;\n  height: 40px;\n\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),C=function(n){var e=n.title,o=n.initialValues,t=n.onSubmitForm,r=n.validationSchema,i=n.buttonLabel;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z,{children:e}),(0,v.jsx)(g,{text:"Contact list",path:"/contacts"}),(0,v.jsx)(u.J9,{initialValues:o,onSubmit:t,validationSchema:r,children:function(n){var e=n.values,o=n.handleChange,t=n.handleSubmit,r=n.isSubmitting;return(0,v.jsxs)(u.l0,{onSubmit:t,children:[(0,v.jsxs)(j,{children:[(0,v.jsx)(k,{children:"Name"}),(0,v.jsx)(S,{type:"text",name:"name",onChange:o,value:e.name}),(0,v.jsx)(y,{name:"name",component:"div"})]}),(0,v.jsxs)(j,{children:[(0,v.jsx)(k,{children:"Phone"}),(0,v.jsx)(S,{type:"tel",name:"phone",onChange:o,value:e.phone}),(0,v.jsx)(y,{name:"phone",component:"div"})]}),(0,v.jsxs)(j,{children:[(0,v.jsx)(k,{children:"Email"}),(0,v.jsx)(S,{type:"email",name:"email",onChange:o,value:e.email}),(0,v.jsx)(y,{name:"email",component:"div"})]}),(0,v.jsx)(w,{type:"submit",children:r?"...":i})]})}})]})}},1042:function(n,e,o){o.r(e),o.d(e,{default:function(){return d}});var t=o(9815),r=o(4774),i=o(885),a=o(6871),c=o(7947),l=o(5264),s=function(){var n=(0,a.s0)(),e=(0,c.Lr)(),o=(0,i.Z)(e,1)[0];return{onSubmitForm:function(e){o(e),n("/contacts"),l.Notify.success("The ".concat(e.name," has been added to your contact list."))}}},m=o(4198),u=o(184),d=function(){var n=s().onSubmitForm;return(0,u.jsx)(t.Z,{children:(0,u.jsx)(r.Z,{title:"Add new contact",initialValues:{name:"",phone:"",email:""},onSubmitForm:n,validationSchema:m.OD,buttonLabel:"Add contact"})})}},4198:function(n,e,o){o.d(e,{OD:function(){return r},TW:function(){return i},$T:function(){return a}});var t=o(968),r=t.Ry({name:t.Z_().required().min(3).max(30),phone:t.Rx().required(),email:t.Z_().email()}),i=t.Ry({email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)}),a=t.Ry({name:t.Z_().required().min(3).max(30),email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)})}}]);
//# sourceMappingURL=42.e81bd7de.chunk.js.map