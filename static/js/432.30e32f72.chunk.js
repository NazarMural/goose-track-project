(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[432],{6420:function(n,e,r){"use strict";r.d(e,{Z:function(){return J}});var a,o,t,i,s,l,c,p,g,d,u,x,h,m=r(5861),f=r(4687),b=r.n(f),v=r(5705),k=r(2791),w=r(168),Z=r(9549),_=r(399),j=Z.Z.div(a||(a=(0,w.Z)(["\n  background-color: var(--primary-bg-color);\n  border-radius: 8px;\n  padding: 40px 24px;\n  width: fill-available;\n  width: 335px;\n\n  "," {\n    padding: 40px 40px;\n    width: 480px;\n  }\n"])),(0,_.VV)(_.Mq)),P=Z.Z.h2(o||(o=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  color: var(--accent-color);\n  box-shadow: 0px 47px 355px 0px #00000012;\n  margin-bottom: 32px;\n\n  "," {\n    font-size: 24px;\n    margin-bottom: 40px;\n  }\n"])),(0,_.VV)(_.Mq)),y=Z.Z.form(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),R=Z.Z.label(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=Z.Z.span(s||(s=(0,w.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  color: var(--primary-text-color);\n  margin-bottom: 8px;\n\n  "," {\n    font-size: 14px;\n    line-height: 17px;\n  }\n"])),(0,_.VV)(_.Mq)),O=Z.Z.div(l||(l=(0,w.Z)(["\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n"]))),E=Z.Z.input(c||(c=(0,w.Z)(["\n  display: block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 14px;\n  border: 1px solid;\n  border-color: ",";\n\n  border-radius: 8px;\n  width: fill-available;\n\n  &:valid {\n    background-color: var(--primary-bg-color) !important;\n  }\n\n  &::placeholder {\n    color: var(--placeholder-color);\n  }\n\n  &:focus-visible {\n    outline: none;\n    border-color: var(--input-border-color-focus);\n  }\n\n  "," {\n    font-size: 16px;\n    padding: 18px;\n  }\n"])),(function(n){var e=n.errors;return n.touched?e?"var(--error-color);":"var(--success-color);":"var(--input-border-color);"}),(0,_.VV)(_.Mq)),V=Z.Z.svg(p||(p=(0,w.Z)(["\n  position: absolute;\n  fill: ",";\n  height: 22px;\n  width: 22px;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  "," {\n    height: 24px;\n    width: 24px;\n    right: 18px;\n  }\n"])),(function(n){return n.error?"var(--error-color)":"var(--success-color)"}),(0,_.VV)(_.Mq)),T=Z.Z.button(g||(g=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  color: var(--invert-text-color);\n  overflow: hidden;\n  transform: translatez(0);\n\n  box-shadow: 4px 2px 16px 0px #88a5bf7a;\n  cursor: pointer;\n\n  margin-top: 32px;\n  padding: 14px 0;\n  border-radius: 16px;\n  background-color: var(--btn-bg-color);\n  border: none;\n\n  &:hover {\n    background-color: var(--btn-bg-hover);\n  }\n"]))),z=Z.Z.span(d||(d=(0,w.Z)([""]))),q=Z.Z.span(u||(u=(0,w.Z)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 300%;\n  height: 100%;\n  bottom: auto;\n  margin: auto;\n  z-index: -1;\n  background: linear-gradient(\n    90deg,\n    var(--btn-bg-color) 0%,\n    rgba(255, 38, 38, 0.5) 40%,\n    rgba(255, 38, 38, 0.5) 60%,\n    var(--btn-bg-color) 100%\n  );\n\n  animation: loading 1.5s ease infinite;\n  @keyframes loading {\n    from {\n      transform: translateX(-10%);\n    }\n    to {\n      transform: translateX(110%);\n    }\n  }\n"]))),S=Z.Z.svg(x||(x=(0,w.Z)(["\n  height: 22px;\n  width: 22px;\n\n  stroke: var(--invert-text-color);\n  & use {\n    fill: transparent;\n  }\n\n  "," {\n    height: 24px;\n    width: 24px;\n  }\n"])),(0,_.VV)(_.Mq)),M=Z.Z.span(h||(h=(0,w.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n  color: ",";\n  margin-left: 15px;\n  margin-top: 8px;\n"])),(function(n){return n.error?"var(--error-color)":"var(--success-color)"})),F=r(6727),L=r(9434),G=r(4927),I=r(2184),U=function(n){return n.auth.isLoggedIn},A=function(n){return n.auth.isAuthLoading},B=r(7689),H=r(1686),W=r(3329),D=(0,F.Ry)().shape({name:(0,F.Z_)().min(2).max(50).required(),email:(0,F.Z_)().email().required(),password:(0,F.Z_)().required().min(6)}),N=(0,F.Ry)().shape({email:(0,F.Z_)().email().required(),password:(0,F.Z_)().min(6).required()}),J=function(n){var e=n.login,r=(0,L.v9)(A),a=(0,L.v9)(U),o=(0,B.s0)();(0,k.useEffect)((function(){a&&o("/calendar/month/")}),[a,o]);var t=(0,L.I0)(),i=(0,v.TA)({initialValues:e?{email:"",password:""}:{name:"",email:"",password:""},validationSchema:e?N:D,validateOnChange:!1,onSubmit:function(n){return x.apply(this,arguments)}}),s=i.values,l=i.errors,c=i.touched,p=i.resetForm,g=i.handleChange,d=i.handleBlur,u=i.handleSubmit;function x(){return(x=(0,m.Z)(b().mark((function n(r){var a,o;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=13;break}return n.next=3,t((0,G.pt)(r));case 3:if(!(a=n.sent).payload.status){n.next=13;break}n.t0=a.payload.status,n.next=409===n.t0?8:10;break;case 8:return H.Report.warning("Warning","This email in use!!!","Okay",{backOverlayClickToClose:!0}),n.abrupt("break",12);case 10:return H.Report.failure("Error","Server ERROR, please try again.","Okay",{backOverlayClickToClose:!0}),n.abrupt("break",12);case 12:return n.abrupt("return");case 13:return n.next=15,t((0,G.Lh)({email:r.email,password:r.password}));case 15:if(!(o=n.sent).payload.status){n.next=25;break}n.t1=o.payload.status,n.next=401===n.t1?20:22;break;case 20:return H.Report.warning("Warning","Password on email is not correct!","Okay",{backOverlayClickToClose:!0}),n.abrupt("break",24);case 22:return H.Report.failure("Error","Server ERROR, please try again.","Okay",{backOverlayClickToClose:!0}),n.abrupt("break",24);case 24:return n.abrupt("return");case 25:p();case 26:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,W.jsxs)(j,{children:[(0,W.jsx)(P,{children:e?"Log In":"Sign Up"}),(0,W.jsxs)(y,{onSubmit:u,children:[!e&&(0,W.jsxs)(R,{htmlFor:"name",children:[(0,W.jsx)(C,{children:"Name"}),(0,W.jsxs)(O,{children:[(0,W.jsx)(E,{value:s.name,onBlur:d,onChange:g,type:"text",name:"name",placeholder:"Enter your name",errors:l.name,touched:c.name}),c.name&&(0,W.jsx)(V,{error:l.name,children:(0,W.jsx)("use",{xlinkHref:"".concat(I.Z).concat(l.name?"#icon-error":"#icon-done")})})]}),c.name&&(l.name?(0,W.jsx)(M,{error:!0,children:"This is an ERROR name"}):(0,W.jsx)(M,{children:"This is an CORRECT name"}))]}),(0,W.jsxs)(R,{htmlFor:"email",children:[(0,W.jsx)(C,{children:"Email"}),(0,W.jsxs)(O,{children:[(0,W.jsx)(E,{value:s.email,onBlur:d,onChange:g,type:"email",name:"email",autoComplete:"off",placeholder:"Enter email",errors:l.email,touched:c.email}),c.email&&(0,W.jsx)(V,{children:(0,W.jsx)("use",{xlinkHref:"".concat(I.Z).concat(l.email?"#icon-error":"#icon-done")})})]}),c.email&&(l.email?(0,W.jsx)(M,{error:!0,children:"This is an ERROR email"}):(0,W.jsx)(M,{children:"This is an CORRECT email"}))]}),(0,W.jsxs)(R,{htmlFor:"password",children:[(0,W.jsx)(C,{children:"Password"}),(0,W.jsxs)(O,{children:[(0,W.jsx)(E,{value:s.password,onBlur:d,onChange:g,type:"password",name:"password",placeholder:"Enter password",errors:l.password,touched:c.password}),c.password&&(0,W.jsx)(V,{children:(0,W.jsx)("use",{xlinkHref:"".concat(I.Z).concat(l.password?"#icon-error":"#icon-done")})})]}),c.password&&(l.password?(0,W.jsx)(M,{error:!0,children:"This is an ERROR password"}):(0,W.jsx)(M,{children:"This is an CORRECT password"}))]}),(0,W.jsxs)(T,{type:"submit",children:[r&&(0,W.jsx)(q,{}),(0,W.jsx)(z,{children:e?"Log In":"Sign Up"}),(0,W.jsx)(S,{children:(0,W.jsx)("use",{xlinkHref:"".concat(I.Z,"#icon-log-in")})})]})]})]})}},5264:function(n,e,r){"use strict";r.d(e,{Z:function(){return g}});var a=r(2791),o=r(8177),t=r(5861),i=r(9439),s=r(4687),l=r.n(s),c=function(n){var e=(0,a.useState)(!0),o=(0,i.Z)(e,2),s=o[0],c=o[1],p=(0,a.useState)(null),g=(0,i.Z)(p,2),d=g[0],u=g[1],x=(0,a.useState)(null),h=(0,i.Z)(x,2),m=h[0],f=h[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,t.Z)(l().mark((function e(){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(2358)("./".concat(n));case 3:a=e.sent,f(a.default),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(e.t0);case 10:return e.prev=10,c(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),{loading:s,error:d,image:m}},p=r(3329),g=function(n){var e=n.children,r=n.login,a=n.img,t=c("registerPage_loginPage/"+a).image;return(0,p.jsx)(o.Ar,{img:t,login:r,children:(0,p.jsx)(o.W2,{children:e})})}},8177:function(n,e,r){"use strict";r.d(e,{Ar:function(){return p},W2:function(){return g},jJ:function(){return d}});var a,o,t,i=r(168),s=r(9549),l=r(1087),c=r(399),p=s.Z.div(a||(a=(0,i.Z)(["\n  height: 100vh;\n  width: 100%;\n\n  background-color: var(--auth-bg-color);\n\n  "," {\n    &::after {\n      content: '';\n\n      background-image: url(",");\n      background-repeat: no-repeat;\n      position: absolute;\n      bottom: 0;\n\n      ","\n      width: ",";\n      height: ",";\n    }\n  }\n"])),(0,c.VV)(c.gv),(function(n){return n.img}),(function(n){return n.login?"right: 0;":"left: 0;"}),(function(n){return n.login?"368px":"400px"}),(function(n){return n.login?"521px":"416px"})),g=s.Z.div(o||(o=(0,i.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n  margin: 0 auto;\n"]))),d=(0,s.Z)(l.rU)(t||(t=(0,i.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 14px;\n\n  color: var(--accent-color);\n\n  box-shadow: 0px 47px 355px 0px #00000012;\n  margin-top: 18px;\n\n  "," {\n    font-size: 18px;\n    line-height: 24px;\n\n    margin-top: 24px;\n  }\n"])),(0,c.VV)(c.Mq))},8432:function(n,e,r){"use strict";r.r(e);var a=r(6420),o=r(5264),t=r(8177),i=(r(2791),r(3329));e.default=function(){return(0,i.jsxs)(o.Z,{img:"goose_register.png",children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(t.jJ,{to:"/login",children:"Log In"})]})}},2358:function(n,e,r){var a={"./GoosePageDay.png":[2218,218],"./default-avatar.png":[8140,140],"./icons/desctop_logoGoose.png":[9776,776],"./icons/icons.svg":[7149,149],"./icons/mobile_logoGoose.png":[2593,593],"./icons/tablet_logoGoose.png":[9417,417],"./mainPage/desktop_GooseMainPage.png":[5919],"./mainPage/desktop_GooseMainPage@2x.png":[817],"./mainPage/desktop_calendar.png":[9496,496],"./mainPage/desktop_calendar@2x.png":[5633],"./mainPage/desktop_sadebar@2x.png":[3849],"./mainPage/desktop_sidebar.png":[3231],"./mainPage/desktop_task_all@2x.png":[1985],"./mainPage/desktop_tasks_all.png":[7524],"./mainPage/mobile_calendar.png":[8343],"./mainPage/mobile_calendar@2x.png":[4776],"./mainPage/mobile_sidebar.png":[6632],"./mainPage/mobile_sidebar@2x.png":[9387],"./mainPage/mobile_task_all.png":[6913],"./mainPage/mobile_task_all@2x.png":[7317],"./mainPage/tablet_calendar.png":[2201],"./mainPage/tablet_calendar@2x.png":[520],"./mainPage/tablet_sidebar.png":[3317],"./mainPage/tablet_sidebar@2x.png":[925],"./mainPage/tablet_task_all.png":[3350],"./mainPage/tablet_task_all@2x.png":[4172],"./notFoundPage/notFoundPage.png":[4947,947],"./notFoundPage/notFoundPage@2x.png":[5908,908],"./registerPage_loginPage/goose_login.png":[2722,722],"./registerPage_loginPage/goose_login@2x.png":[313,313],"./registerPage_loginPage/goose_register.png":[4220,220],"./registerPage_loginPage/goose_register@2x.png":[6190,190]};function o(n){if(!r.o(a,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[n],o=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r.t(o,17)}))}o.keys=function(){return Object.keys(a)},o.id=2358,n.exports=o}}]);
//# sourceMappingURL=432.30e32f72.chunk.js.map