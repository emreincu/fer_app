(this.webpackJsonpfer_app=this.webpackJsonpfer_app||[]).push([[0],{113:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n(18),s=n(17),i=(n(110),n(111),n(112),n(113),n(29)),o=n.n(i),l=n(44),u=n(98),d=n(99),j=n(102),p=n(101),O=n(7),b=n(28),h=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onConfigure=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.sdk.app.getCurrentState();case 2:return t=e.sent,e.abrupt("return",{parameters:a.state.parameters,targetState:t});case 4:case"end":return e.stop()}}),e)}))),a.state={parameters:{}},e.sdk.app.onConfigure((function(){return a.onConfigure()})),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:t=e.sent,this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)(O.Workbench,{className:Object(b.a)({margin:"80px"}),children:Object(a.jsxs)(O.Form,{children:[Object(a.jsx)(O.Heading,{children:"Feriha App Configuration"}),Object(a.jsx)(O.Paragraph,{children:"Welcome to feriha app configuration page."})]})})}}]),n}(r.Component),g=n(21),x=function(e){var t=Object(r.useState)(e.sdk.entry.fields.type.getValue()),n=Object(g.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(e.sdk.entry.fields.category.getValue()),o=Object(g.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(e.sdk.entry.fields.title.getValue()),j=Object(g.a)(d,2),p=j[0],b=j[1],h=Object(r.useState)(e.sdk.entry.fields.link.getValue()),x=Object(g.a)(h,2),f=x[0],m=x[1],y=Object(r.useState)("yes"===e.sdk.entry.fields.status.getValue()),k=Object(g.a)(y,2),v=k[0],C=k[1];return Object(a.jsx)("div",{style:{margin:"1.5rem auto",width:"100%","max-width":"768px"},children:Object(a.jsxs)(O.Card,{children:[Object(a.jsxs)(O.Typography,{children:[Object(a.jsx)(O.DisplayText,{children:"Menu Item"}),Object(a.jsx)(O.Paragraph,{children:"Type field is conditional"})]}),Object(a.jsxs)(O.FieldGroup,{row:!1,children:[Object(a.jsx)(O.SectionHeading,{children:"Type"}),Object(a.jsxs)(O.Select,{id:"type",name:"type",width:"large",onChange:function(t){s(t.target.value),e.sdk.entry.fields.type.setValue(t.target.value)},value:c,children:[Object(a.jsx)(O.Option,{value:"Category",children:"Category"}),Object(a.jsx)(O.Option,{value:"Custom Link",children:"Custom Link"})]})]}),("Category"===c||!e.sdk.entry.fields.category.getValue())&&Object(a.jsxs)(O.FieldGroup,{row:!1,children:[Object(a.jsx)(O.SectionHeading,{children:"Category"}),Object(a.jsx)(O.TextInput,{onChange:function(t){u(t.target.value),e.sdk.entry.fields.category.setValue(t.target.value)},value:l})]}),"Custom Link"===c&&Object(a.jsxs)(O.FieldGroup,{row:!1,children:[Object(a.jsx)(O.SectionHeading,{children:"Title"}),Object(a.jsx)(O.TextInput,{onChange:function(t){b(t.target.value),e.sdk.entry.fields.title.setValue(t.target.value)},value:p}),Object(a.jsx)(O.SectionHeading,{children:"Custom Link"}),Object(a.jsx)(O.TextInput,{onChange:function(t){m(t.target.value),e.sdk.entry.fields.link.setValue(t.target.value)},value:f})]}),Object(a.jsxs)(O.FieldGroup,{row:!1,children:[Object(a.jsx)(O.SectionHeading,{children:"Status"}),Object(a.jsxs)(O.Select,{id:"status",name:"status",width:"large",onChange:function(t){var n="yes"===t.target.value;C(n),e.sdk.entry.fields.status.setValue(n)},value:v?"yes":"no",children:[Object(a.jsx)(O.Option,{value:"yes",children:"Enabled"}),Object(a.jsx)(O.Option,{value:"no",children:"Disabled"})]})]})]})})},f=function(e){return Object(a.jsx)(O.Workbench,{className:Object(b.a)({margin:"80px"}),children:Object(a.jsxs)(O.Form,{className:Object(b.a)({margin:"0px auto"},{border:"1px solid red"},{height:"max-content"},{padding:"20px"}),children:[Object(a.jsx)(O.Heading,{children:"Hi!"}),Object(a.jsx)(O.Paragraph,{children:"This is feriha app page.. dsadsa"})]})})},m=function(e){return Object(a.jsx)(O.Paragraph,{children:"Hello Sidebar Component"})},y=function(e){return Object(a.jsx)(O.Paragraph,{children:"Hello Entry Field Component"})},k=function(e){return Object(a.jsx)(O.Paragraph,{children:"Hello Dialog Component"})};Object(s.init)((function(e){var t=document.getElementById("root");[{location:s.locations.LOCATION_APP_CONFIG,component:Object(a.jsx)(h,{sdk:e})},{location:s.locations.LOCATION_ENTRY_FIELD,component:Object(a.jsx)(y,{sdk:e})},{location:s.locations.LOCATION_ENTRY_EDITOR,component:Object(a.jsx)(x,{sdk:e})},{location:s.locations.LOCATION_DIALOG,component:Object(a.jsx)(k,{sdk:e})},{location:s.locations.LOCATION_ENTRY_SIDEBAR,component:Object(a.jsx)(m,{sdk:e})},{location:s.locations.LOCATION_PAGE,component:Object(a.jsx)(f,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(c.render)(n.component,t)}))}))}},[[372,1,2]]]);
//# sourceMappingURL=main.1c2bd419.chunk.js.map