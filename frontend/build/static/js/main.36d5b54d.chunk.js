(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},437:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(48),c=n.n(r),s=(n(278),n(279),n(12)),o=(n(280),n(49)),i=n(24),l=n(553),u=n(554),j=n(246),d=n(1),p=function(){return Object(d.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(j.a,{className:"text-center py-3",children:"Copyright \xa9 Note Zipper"})})})})},b=n(567),h=n(565),O=n(564),f=n(251),x=n(17),g=n(42),m=n(22),y=n.n(m),v="USER_LOGIN_REQUEST",S="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",E="USER_LOGOUT",w="USER_REGISTER_REQUEST",I="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",N="USER_UPDATE_REQUEST",T="USER_UPDATE_SUCCESS",_="USER_UPDATE_FAIL",k=n(46),A=n.n(k);var U=function(e){var t=e.setSearch,n=(Object(x.b)(),Object(x.c)((function(e){return e.userLogin})).userInfo);return Object(a.useEffect)((function(){}),[n]),Object(d.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b.a.Brand,{href:"/",children:"Driving Automation"}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(h.a,{className:"m-auto",children:n&&Object(d.jsx)(O.a,{inline:!0,children:Object(d.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(h.a.Link,{href:"/",children:"Home"}),Object(d.jsx)(h.a.Link,{href:"/",children:"Tech Stack"}),Object(d.jsx)(h.a.Link,{href:"/",children:"Pricing"}),Object(d.jsx)(h.a.Link,{href:"/",children:"Polls"}),Object(d.jsx)(h.a.Link,{href:"/",children:"Transition"})]})]})]})})},P=(n(555),n(559)),R=n(133),D=n(134),F=n(107),G=(n(262),n(560)),B=n(104),z=n(268),W=[{name:"Jan 2019",Waymo:3432,Cruise:2342,Apple:1e3},{name:"Feb 2019",Waymo:2342,Cruise:3246,Apple:5e3},{name:"Mar 2019",Waymo:4565,Cruise:4556,Apple:4e3},{name:"Apr 2019",Waymo:6654,Cruise:4465,Apple:3e3},{name:"May 2019",Waymo:8765,Cruise:4553,Apple:4e3},{name:"Jan 2020",Waymo:3432,Cruise:2342,Apple:1e3},{name:"Feb 2020",Waymo:2342,Cruise:3246,Apple:5e3},{name:"Mar 2020",Waymo:4565,Cruise:4556,Apple:4e3},{name:"Apr 2020",Waymo:6654,Cruise:4465,Apple:3e3},{name:"May 2020",Waymo:8765,Cruise:4553,Apple:4e3}],H=function(){return Object(d.jsxs)(G.a,{width:730,height:250,data:W,margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(P.a,{strokeDasharray:"3 3"}),Object(d.jsx)(R.a,{dataKey:"name"}),Object(d.jsx)(D.a,{}),Object(d.jsx)(F.a,{}),Object(d.jsx)(B.a,{}),Object(d.jsx)(z.a,{type:"monotone",dataKey:"Waymo",stroke:"#0095FF"}),Object(d.jsx)(z.a,{type:"monotone",dataKey:"Cruise",stroke:"#FF0000"}),Object(d.jsx)(z.a,{type:"monotone",dataKey:"Apple",stroke:"#FF0000"})]})};var J=function(e){return e.history,Object(d.jsx)("div",{children:Object(d.jsx)(H,{})})},Q=n(562),K=n(568),M=n(570),q=n(563);n(437);var Z=function(e){var t=e.children,n=e.title;return Object(d.jsx)("div",{className:"mainback",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading",children:n}),Object(d.jsx)("hr",{})]}),t]})})})})},V=n(87),X=n.n(V),Y="NOTES_LIST_REQUEST",$="NOTES_LIST_SUCCESS",ee="NOTES_LIST_FAIL",te="NOTES_CREATE_REQUEST",ne="NOTES_CREATE_SUCCESS",ae="NOTES_CREATE_FAIL",re="NOTES_UPDATE_REQUEST",ce="NOTES_UPDATE_SUCCESS",se="NOTES_UPDATE_FAIL",oe="NOTES_DELETE_REQUEST",ie="NOTES_DELETE_SUCCESS",le="NOTES_DELETE_FAIL",ue=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(n,a){var r,c,s,o,i,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:oe}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,A.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:ie,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:le,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},je=n(561);var de=function(e){var t=e.size,n=void 0===t?100:t;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(d.jsx)(je.a,{style:{width:n,height:n},animation:"border"})})},pe=n(569),be=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(d.jsx)(pe.a,{variant:n,style:{fontSize:20},children:Object(d.jsx)("strong",{children:a})})};var he=function(e){var t=e.history,n=e.search,r=Object(x.b)(),c=Object(x.c)((function(e){return e.noteList})),s=c.loading,i=c.error,l=c.notes,u=Object(x.c)((function(e){return e.userLogin})).userInfo,j=Object(x.c)((function(e){return e.noteDelete})),p=j.loading,b=j.error,h=j.success,O=Object(x.c)((function(e){return e.noteCreate})).success,f=Object(x.c)((function(e){return e.noteUpdate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(g.a)(y.a.mark((function e(t,n){var a,r,c,s,o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,A.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:$,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:ee,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),u||t.push("/")}),[r,t,u,h,O,f]),Object(d.jsxs)(Z,{title:"Welcome Back ".concat(u&&u.name,".."),children:[console.log(l),Object(d.jsx)(o.b,{to:"/createnote",children:Object(d.jsx)(Q.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Note"})}),i&&Object(d.jsx)(be,{variant:"danger",children:i}),b&&Object(d.jsx)(be,{variant:"danger",children:b}),s&&Object(d.jsx)(de,{}),p&&Object(d.jsx)(de,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(d.jsx)(K.a,{children:Object(d.jsxs)(M.a,{style:{margin:10},children:[Object(d.jsxs)(M.a.Header,{style:{display:"flex"},children:[Object(d.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(d.jsx)(K.a.Toggle,{as:M.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(Q.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(d.jsx)(Q.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(ue(t)));var t},children:"Delete"})]})]}),Object(d.jsx)(K.a.Collapse,{eventKey:"0",children:Object(d.jsxs)(M.a.Body,{children:[Object(d.jsx)("h4",{children:Object(d.jsxs)(q.a,{variant:"success",children:["Category - ",e.category]})}),Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)(X.a,{children:e.content}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(d.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var Oe=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(),u=Object(s.a)(l,2),j=u[0],p=u[1],b=Object(a.useState)(),h=Object(s.a)(b,2),f=h[0],m=h[1],v=Object(a.useState)(""),S=Object(s.a)(v,2),C=S[0],E=S[1],w=Object(x.b)(),I=Object(x.c)((function(e){return e.noteUpdate})),L=I.loading,N=I.error,T=Object(x.c)((function(e){return e.noteDelete})),_=T.loading,k=T.error;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(y.a.mark((function e(){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),p(a.content),m(a.category),E(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.params.id,C]),Object(d.jsx)(Z,{title:"Edit Note",children:Object(d.jsxs)(M.a,{children:[Object(d.jsx)(M.a.Header,{children:"Edit your Note"}),Object(d.jsx)(M.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),w(function(e,t,n,a){return function(){var r=Object(g.a)(y.a.mark((function r(c,s){var o,i,l,u,j,d;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:re}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,A.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:ce,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:se,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,o,j,f)),o&&j&&f&&(i(""),m(""),p(""),n.push("/mynotes"))},children:[_&&Object(d.jsx)(de,{}),N&&Object(d.jsx)(be,{variant:"danger",children:N}),k&&Object(d.jsx)(be,{variant:"danger",children:k}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:j,onChange:function(e){return p(e.target.value)}})]}),j&&Object(d.jsxs)(M.a,{children:[Object(d.jsx)(M.a.Header,{children:"Note Preview"}),Object(d.jsx)(M.a.Body,{children:Object(d.jsx)(X.a,{children:j})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return m(e.target.value)}})]}),L&&Object(d.jsx)(de,{size:50}),Object(d.jsx)(Q.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(d.jsx)(Q.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&w(ue(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(d.jsxs)(M.a.Footer,{className:"text-muted",children:["Updated on - ",C.substring(0,10)]})]})})};n(548);var fe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],f=Object(x.b)(),m=Object(x.c)((function(e){return e.userLogin})),E=m.loading,w=m.error,I=m.userInfo;return Object(a.useEffect)((function(){I&&t.push("/mynotes")}),[t,I]),Object(d.jsx)(Z,{title:"LOGIN",children:Object(d.jsxs)("div",{className:"loginContainer",children:[w&&Object(d.jsx)(be,{variant:"danger",children:w}),E&&Object(d.jsx)(de,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(g.a)(y.a.mark((function n(a){var r,c,s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:v}),r={headers:{"Content-type":"application/json"}},n.next=5,A.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:S,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:C,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,b))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(Q.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{children:["New Customer ? ",Object(d.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})})};n(549);var xe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],f=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),m=Object(s.a)(f,2),v=m[0],C=m[1],E=Object(a.useState)(""),N=Object(s.a)(E,2),T=N[0],_=N[1],k=Object(a.useState)(""),U=Object(s.a)(k,2),P=U[0],R=U[1],D=Object(a.useState)(null),F=Object(s.a)(D,2),G=F[0],B=F[1],z=Object(a.useState)(null),W=Object(s.a)(z,2),H=W[0],J=W[1],K=Object(x.b)(),M=Object(x.c)((function(e){return e.userRegister})),q=M.loading,V=M.error,X=M.userInfo;return Object(a.useEffect)((function(){X&&t.push("/")}),[t,X]),Object(d.jsx)(Z,{title:"REGISTER",children:Object(d.jsxs)("div",{className:"loginContainer",children:[V&&Object(d.jsx)(be,{variant:"danger",children:V}),G&&Object(d.jsx)(be,{variant:"danger",children:G}),q&&Object(d.jsx)(de,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),T!==P?B("Passwords do not match"):K(function(e,t,n,a){return function(){var r=Object(g.a)(y.a.mark((function r(c){var s,o,i;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:w}),s={headers:{"Content-type":"application/json"}},r.next=5,A.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:I,payload:i}),c({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(b,c,T,v))},children:[Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:T,placeholder:"Password",onChange:function(e){return _(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:P,placeholder:"Confirm Password",onChange:function(e){return R(e.target.value)}})]}),H&&Object(d.jsx)(be,{variant:"danger",children:H}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return J("Please Select an Image");if(J(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return J("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){C(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(Q.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{children:["Have an Account ? ",Object(d.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})};var ge=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),h=b[0],f=b[1],m=Object(x.b)(),v=Object(x.c)((function(e){return e.noteCreate})),S=v.loading,C=v.error,E=v.note;console.log(E);var w=function(){o(""),f(""),j("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(Z,{title:"Create a Note",children:Object(d.jsxs)(M.a,{children:[Object(d.jsx)(M.a.Header,{children:"Create a new Note"}),Object(d.jsx)(M.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),m(function(e,t,n){return function(){var a=Object(g.a)(y.a.mark((function a(r,c){var s,o,i,l,u,j;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:te}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,A.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:ne,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:ae,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,u,h)),c&&u&&h&&(w(),t.push("/mynotes"))},children:[C&&Object(d.jsx)(be,{variant:"danger",children:C}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",value:u,placeholder:"Enter the content",rows:4,onChange:function(e){return j(e.target.value)}})]}),u&&Object(d.jsxs)(M.a,{children:[Object(d.jsx)(M.a.Header,{children:"Note Preview"}),Object(d.jsx)(M.a.Body,{children:Object(d.jsx)(X.a,{children:u})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),S&&Object(d.jsx)(de,{size:50}),Object(d.jsx)(Q.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(d.jsx)(Q.a,{className:"mx-2",onClick:w,variant:"danger",children:"Reset Feilds"})]})}),Object(d.jsxs)(M.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},me=(n(550),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),p=l[0],b=l[1],h=Object(a.useState)(),f=Object(s.a)(h,2),m=f[0],v=f[1],C=Object(a.useState)(""),E=Object(s.a)(C,2),w=E[0],I=E[1],L=Object(a.useState)(""),k=Object(s.a)(L,2),U=k[0],P=k[1],R=Object(a.useState)(),D=Object(s.a)(R,2),F=D[0],G=D[1],B=Object(x.b)(),z=Object(x.c)((function(e){return e.userLogin})).userInfo,W=Object(x.c)((function(e){return e.userUpdate})),H=W.loading,J=W.error,K=W.success;Object(a.useEffect)((function(){z?(o(z.name),b(z.email),v(z.pic)):t.push("/")}),[t,z]);return Object(d.jsx)(Z,{title:"EDIT PROFILE",children:Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{className:"profileContainer",children:[Object(d.jsx)(j.a,{md:6,children:Object(d.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),B((t={name:c,email:p,password:w,pic:m},function(){var e=Object(g.a)(y.a.mark((function e(n,a){var r,c,s,o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:N}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,A.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:T,payload:i}),n({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[H&&Object(d.jsx)(de,{}),K&&Object(d.jsx)(be,{variant:"success",children:"Updated Successfully"}),J&&Object(d.jsx)(be,{variant:"danger",children:J}),Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:w,onChange:function(e){return I(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:U,onChange:function(e){return P(e.target.value)}})]})," ",F&&Object(d.jsx)(be,{variant:"danger",children:F}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if(G(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return G("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){v(e.url.toString()),console.log(m)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(Q.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(d.jsx)(j.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("img",{src:m,alt:c,className:"profilePic"})})]})})})});var ye=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(U,{setSearch:function(e){return r(e)}}),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)(i.a,{path:"/",component:J,exact:!0}),Object(d.jsx)(i.a,{path:"/login",component:fe}),Object(d.jsx)(i.a,{path:"/register",component:xe}),Object(d.jsx)(i.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(d.jsx)(he,{search:n,history:t})}}),Object(d.jsx)(i.a,{path:"/note/:id",component:Oe}),Object(d.jsx)(i.a,{path:"/createnote",component:ge}),";",Object(d.jsx)(i.a,{path:"/profile",component:me})]}),Object(d.jsx)(p,{})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Se=n(105),Ce=n(266),Ee=n(265),we=Object(Se.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case $:return{loading:!1,notes:t.payload};case ee:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case C:return{loading:!1,error:t.payload};case E:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case I:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{loading:!0};case ne:return{loading:!1,success:!0};case ae:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return{loading:!0};case ie:return{loading:!1,success:!0};case le:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return{loading:!0};case ce:return{loading:!1,success:!0};case se:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case T:return{loading:!1,userInfo:t.payload,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}}}),Ie={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},Le=[Ce.a],Ne=Object(Se.createStore)(we,Ie,Object(Ee.composeWithDevTools)(Se.applyMiddleware.apply(void 0,Le)));c.a.render(Object(d.jsx)(x.a,{store:Ne,children:Object(d.jsx)(ye,{})}),document.getElementById("root")),ve()}},[[551,1,2]]]);
//# sourceMappingURL=main.36d5b54d.chunk.js.map