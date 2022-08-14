"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[42],{4774:function(n,e,o){o.d(e,{Z:function(){return w}});var t,r,a,i,c,l,u,s=o(168),d=o(2499),m=o(5705),x=d.Z.h2(t||(t=(0,s.Z)(["\n  margin-bottom: 30px;\n  text-transform: uppercase;\n  font-weight: 900;\n"]))),h=d.Z.label(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),b=d.Z.span(a||(a=(0,s.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),p=(0,d.Z)(m.gN)(i||(i=(0,s.Z)(["\n  height: 40px;\n  padding: 0 10px 0 10px;\n\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 14px;\n\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),f=d.Z.button(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 200px;\n  height: 40px;\n\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),v=o(6355),g=d.Z.button(l||(l=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 30px;\n  padding: 10px 25px 10px 25px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),Z=d.Z.span(u||(u=(0,s.Z)(["\n  margin-left: 10px;\n"]))),j=o(6871),y=o(184),k=function(n){var e=n.text,o=n.path,t=(0,j.s0)();return(0,y.jsxs)(g,{type:"button",onClick:function(){return t(o)},children:[(0,y.jsx)(v.BMs,{}),(0,y.jsx)(Z,{children:e})]})},w=function(n){var e=n.title,o=n.initialValues,t=n.onSubmitForm,r=n.validationSchema,a=n.buttonLabel;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x,{children:e}),(0,y.jsx)(k,{text:"Contact list",path:"/contacts"}),(0,y.jsx)(m.J9,{initialValues:o,onSubmit:t,validationSchema:r,children:function(n){var e=n.values,o=n.handleChange,t=n.handleSubmit,r=n.isSubmitting;return(0,y.jsxs)(m.l0,{onSubmit:t,children:[(0,y.jsxs)(h,{children:[(0,y.jsx)(b,{children:"Name"}),(0,y.jsx)(p,{type:"text",name:"name",onChange:o,value:e.name}),(0,y.jsx)(m.Bc,{name:"name",component:"div"})]}),(0,y.jsxs)(h,{children:[(0,y.jsx)(b,{children:"Number"}),(0,y.jsx)(p,{type:"tel",name:"number",onChange:o,value:e.number}),(0,y.jsx)(m.Bc,{name:"number",component:"div"})]}),(0,y.jsx)(f,{type:"submit",disabled:r,children:r?"...":a})]})}})]})}},1042:function(n,e,o){o.r(e),o.d(e,{default:function(){return x}});var t=o(9815),r=o(4774),a=o(885),i=o(6871),c=o(7947),l=o(5562),u=o(5264),s=function(){var n=(0,i.s0)(),e=(0,c.Lr)(),o=(0,a.Z)(e,1)[0],t=(0,c.wY)().data;return function(e){null!==t&&void 0!==t&&t.some((function(n){return n.name===e.name}))?l.Report.warning("".concat(e.name),"This user is already in the contact list.","OK"):o(e),n("/contacts"),u.Notify.success("The ".concat(e.name," has been added to your contact list."))}},d=o(4198),m=o(184),x=function(){var n=s();return(0,m.jsx)(t.Z,{children:(0,m.jsx)(r.Z,{title:"Add new contact",initialValues:{name:"",number:""},onSubmitForm:n,validationSchema:d.OD,buttonLabel:"Add contact"})})}},4198:function(n,e,o){o.d(e,{OD:function(){return r},TW:function(){return a},$T:function(){return i}});var t=o(968),r=t.Ry({name:t.Z_().required().min(3).max(30),number:t.Rx().required()}),a=t.Ry({email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)}),i=t.Ry({name:t.Z_().required().min(3).max(30),email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)})}}]);
//# sourceMappingURL=42.d3be7b60.chunk.js.map