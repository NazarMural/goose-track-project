"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[19],{4019:function(n,e,r){r.r(e),r.d(e,{default:function(){return On}});var t,o,i,a,s,c,d,p,l,u,x,h,g,f,b,v,k,y,m,Z,w,j,C,V,D,z,T,M,E=r(1413),S=r(5861),q=r(9439),U=r(4687),O=r.n(U),A=r(168),F=r(9549),I=r(399),P=F.Z.div(t||(t=(0,A.Z)(["\n  display: flex;\n  gap: 30px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 34px;\n  scroll-snap-type: x mandatory;\n\n  "," {\n    padding-bottom: 150px;\n    gap: 16px;\n  }\n  "," {\n    padding-bottom: 0;\n    gap: 27px;\n  }\n  /* width*/\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: var(--task-scrollbar-track);\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: var(--task-scrollbar-thumb);\n    border-radius: 12px;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--task-scrollbar-thumb-hover);\n  }\n"])),(0,I.VV)(I.Mq),(0,I.VV)(I.gv)),Y=F.Z.div(o||(o=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  max-height: 432px;\n  height: fit-content;\n  position: relative;\n  background-color: var(--primary-bg-color);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  scroll-snap-align: start;\n\n  "," {\n    max-height: 568px;\n  }\n  "," {\n  }\n"])),(0,I.VV)(I.Mq),(0,I.VV)(I.gv)),_=F.Z.div(i||(i=(0,A.Z)(["\n  border-radius: 8px;\n  padding: 0 20px 20px 20px;\n  "," {\n    padding: 0 18px 18px 18px;\n  }\n"])),(0,I.VV)(I.Mq)),H=F.Z.button(a||(a=(0,A.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  background-color: var(--add-task-bg);\n  color: var(--primary-text-color);\n  border: ",";\n  border-radius: 8px;\n  padding: 12px 0;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n\n  &:hover:not([disabled]) {\n    background-color: #2b78ef;\n    color: var(--invert-text-color);\n    border: 1px solid var(--accent-color);\n    & svg {\n      stroke: var(--invert-text-color);\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n  }\n"])),(function(n){return"light"===n.currentTheme?"1px dashed var(--accent-color)":"1px solid var(--accent-color)"})),R=F.Z.svg(s||(s=(0,A.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--primary-text-color);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n"]))),N=F.Z.span(c||(c=(0,A.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n"]))),B=r(2184),L=r(2791),W=F.Z.div(d||(d=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 18px 0;\n  margin-bottom: ",";\n  "," {\n    margin-bottom: ",";\n    padding: 20px 20px 0;\n  }\n"])),(function(n){return 0===n.tasks.length?"35px":"24px"}),(0,I.VV)(I.Mq),(function(n){return 0===n.tasks.length?"35px":"28px"})),J=F.Z.h2(p||(p=(0,A.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  margin: 0;\n\n  color: var(--primary-text-color);\n  "," {\n    font-size: 20px;\n    line-height: 24px;\n  }\n"])),(0,I.VV)(I.Mq)),K=F.Z.button(l||(l=(0,A.Z)(["\n  height: 22px;\n  width: 22px;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n\n  &:hover:not([disabled]) {\n    & svg {\n      stroke: var(--accent-color);\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n    & svg {\n      /* stroke: var(--accent-color); */\n    }\n  }\n  "," {\n    height: 24px;\n    width: 24px;\n  }\n"])),(0,I.VV)(I.Mq)),$=F.Z.svg(u||(u=(0,A.Z)(["\n  height: 100%;\n  width: 100%;\n  stroke: var(--primary-text-color);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n"]))),Q=r(3329),G=function(n){var e=n.type,r=n.onAdd,t=n.tasks,o=n.isDisabledAddTask;return(0,Q.jsxs)(W,{tasks:t,children:[(0,Q.jsx)(J,{children:function(){switch(e){case"to-do":return"To do";case"in-progress":return"In progress";case"done":return"Done";default:return}}()}),(0,Q.jsx)(K,{disabled:o,onClick:function(){return r(e)},children:(0,Q.jsx)($,{children:(0,Q.jsx)("use",{xlinkHref:B.Z+"#icon-icon-plus"})})})]})},X=F.Z.ul(x||(x=(0,A.Z)(["\n  padding: 0 6px 0 18px;\n  margin-right: 6px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  width: 328px;\n  & #popUpReplace {\n    ","\n  }\n\n  & li:nth-last-of-type(-n + 1) {\n    margin-bottom: 32px;\n\n    & #popUpReplace {\n      margin-top: 0;\n      top: -12px;\n      ","\n    }\n  }\n  "," {\n    width: 334px;\n    gap: 18px;\n    padding: 0 8px 0 20px;\n    margin-right: 8px;\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n  "," {\n    width: 313px;\n  }\n  /* width*/\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: var(--task-scrollbar-track);\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: var(--task-scrollbar-thumb);\n    border-radius: 12px;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--task-scrollbar-thumb-hover);\n  }\n"])),(function(n){return 1===n.tasks.length?"top: 16px !important; margin-right: 12px;":null}),(function(n){return 1===n.tasks.length?"0":"-12px"}),(0,I.VV)(I.Mq),(0,I.VV)(I.gv)),nn=F.Z.li(h||(h=(0,A.Z)(["\n  position: relative;\n  background-color: var(--page-bg-color);\n  padding: 14px 14px 18px 14px;\n  border: 1px solid var(--calendar-grid-border);\n\n  border-radius: 8px;\n"]))),en=F.Z.h3(g||(g=(0,A.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 28px;\n"]))),rn=F.Z.div(f||(f=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n"]))),tn=F.Z.img(b||(b=(0,A.Z)(["\n  width: 32px;\n  height: 32px;\n  border: 1.8px solid var(--accent-color);\n  border-radius: 50%;\n  margin-right: 8px;\n"]))),on=F.Z.svg(v||(v=(0,A.Z)(["\n  width: 32px;\n  height: 32px;\n  border: 1.8px solid var(--accent-color);\n  border-radius: 50%;\n  margin-right: 8px;\n  fill: #3e85f32e;\n  .dark & {\n    fill: #ffffff2e;\n  }\n"]))),an=F.Z.button(k||(k=(0,A.Z)(["\n  height: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 12px;\n  color: var(--task-priority-color);\n  padding: 4px 12px;\n  background-color: ",";\n  border: none;\n  border-radius: 4px;\n"])),(function(n){switch(n.priority){case"low":return"var(--task-priority-low-bg)";case"medium":return"var(--task-priority-medium-bg)";case"high":return"var(--task-priority-high-bg)";default:return}})),sn=F.Z.div(y||(y=(0,A.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-left: auto;\n"]))),cn=F.Z.button(m||(m=(0,A.Z)(["\n  background-color: transparent;\n  border: none;\n  padding: 0;\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    & svg {\n      stroke: var(--accent-color);\n    }\n  }\n"]))),dn=F.Z.svg(Z||(Z=(0,A.Z)(["\n  height: 14px;\n  width: 14px;\n  stroke: var(--primary-text-color);\n  cursor: pointer;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n  "," {\n    height: 16px;\n    width: 16px;\n  }\n"])),(0,I.VV)(I.Mq)),pn=F.Z.div(w||(w=(0,A.Z)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  /* gap: 14px; */\n  background-color: var(--task-popup-bg);\n  /* padding: 14px; */\n  border: ",";\n  border-radius: 8px;\n  position: absolute;\n  z-index: 2;\n  margin-top: 12px;\n  right: -1px;\n  box-shadow: 0px 4px 16px 0px #1111111a;\n\n  & div:first-of-type {\n    padding: 14px 14px 7px 14px;\n  }\n  & div:last-of-type {\n    padding: 7px 14px 14px 14px;\n  }\n"])),(function(n){return"light"===n.currentTheme?"none":"1px solid #FFFFFF26"})),ln=F.Z.div(j||(j=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  white-space: nowrap;\n  color: var(--task-popup-color-text);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    & svg {\n      stroke: ",";\n    }\n    background-color: var(--accent-color);\n  }\n"])),(function(n){return"light"===n.currentTheme?"var(--invert-text-color)":"var(--task-popup-color-text);"}),(function(n){return"light"===n.currentTheme?"var(--invert-text-color)":"var(--task-popup-color-text);"})),un=F.Z.span(C||(C=(0,A.Z)(["\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n"]))),xn=r(9434),hn=r(8427),gn=r(1686),fn=r(1048),bn=function(n){var e=n.type,r=n.setIsShowPopUpReplace,t=n._id,o=(0,xn.I0)(),i=(0,xn.v9)(fn.P);(0,L.useEffect)((function(){var n=function(n){"togglePopUp"!==n.target.id&&r(!1)},e=function(n){"Escape"===n.code&&r(!1)};return document.addEventListener("click",n),document.addEventListener("keydown",e),function(){document.removeEventListener("click",n),document.removeEventListener("keydown",e)}}),[r]);var a=function(){var n=(0,S.Z)(O().mark((function n(e,r){return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o((0,hn.CD)({taskId:e,updateTaskData:{category:r}}));case 2:if(!n.sent.payload.status){n.next=6;break}return gn.Notify.failure("Task don`t replace. Try again"),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,Q.jsx)(pn,{id:"popUpReplace",currentTheme:i,children:function(n){var e=[];switch(n){case"to-do":e=[{id:1,typeCategory:"In progress",typeForOnClick:"in-progress"},{id:2,typeCategory:"Done",typeForOnClick:"done"}];break;case"in-progress":e=[{id:1,typeCategory:"To Do",typeForOnClick:"to-do"},{id:2,typeCategory:"Done",typeForOnClick:"done"}];break;case"done":e=[{id:1,typeCategory:"To Do",typeForOnClick:"to-do"},{id:2,typeCategory:"In progress",typeForOnClick:"in-progress"}]}return e}(e).map((function(n){var e=n.id,r=n.typeCategory,o=n.typeForOnClick;return(0,Q.jsxs)(ln,{currentTheme:i,onClick:function(){return a(t,o)},children:[(0,Q.jsx)(un,{children:r}),(0,Q.jsx)(dn,{children:(0,Q.jsx)("use",{xlinkHref:B.Z+"#icon-arrow-circle-broken-right"})})]},e)}))})},vn=r(4217),kn=function(n){var e=n.type,r=n.tasks,t=n.onEdit,o=n.isShowPopUpReplace,i=n.setIsShowPopUpReplace,a=(0,xn.I0)(),s=(0,xn.v9)(vn.O),c=(0,L.useRef)({});return(0,Q.jsx)(X,{tasks:r.filter((function(n){return n.category===e})),children:r.map((function(n){var r=n._id,d=n.title,p=n.priority,l=n.category;return e!==l?"":(0,Q.jsxs)(nn,{children:[(0,Q.jsx)(en,{children:d}),(0,Q.jsxs)(rn,{children:[s?(0,Q.jsx)(tn,{src:s,alt:"User avatar"}):(0,Q.jsx)(on,{children:(0,Q.jsx)("use",{href:"".concat(B.Z,"#icon-ph_user")})}),(0,Q.jsx)(an,{priority:p,children:p.charAt(0).toUpperCase()+p.slice(1)}),(0,Q.jsxs)(sn,{children:[(0,Q.jsx)(cn,{id:"togglePopUp",ref:function(n){return c[r]=n},onClick:function(){var n;o===(n=r)?(i(!1),c[n].blur()):i(n)},children:(0,Q.jsx)(dn,{id:"togglePopUp",children:(0,Q.jsx)("use",{id:"togglePopUp",xlinkHref:B.Z+"#icon-arrow-circle-broken-right"})})}),(0,Q.jsx)(cn,{onClick:function(){return t(n,l)},children:(0,Q.jsx)(dn,{children:(0,Q.jsx)("use",{xlinkHref:B.Z+"#icon-pencil"})})}),(0,Q.jsx)(cn,{onClick:function(){return n=r,void gn.Confirm.show("Confirm","Are you sure you want to delete this?","Delete","Cancel",(0,S.Z)(O().mark((function e(){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a((0,hn.sf)(n));case 2:if(!e.sent.payload.status){e.next=6;break}return gn.Notify.failure("Task don`t delete. Try again"),e.abrupt("return");case 6:gn.Notify.success("Task deleted successfully",{success:{background:"var(--accent-color)"}});case 7:case"end":return e.stop()}}),e)}))),(function(){}),{messageColor:"var(--primary-text-color);",backgroundColor:"var(--primary-bg-color)",okButtonBackground:"var(--accent-color)",titleColor:"var(--accent-color)"});var n},children:(0,Q.jsx)(dn,{children:(0,Q.jsx)("use",{xlinkHref:B.Z+"#icon-trash"})})})]})]}),o===r&&(0,Q.jsx)(bn,{type:e,setIsShowPopUpReplace:i,_id:r})]},r)}))})},yn=r(7689),mn=r(3433),Zn=r(4805),wn=r(2426),jn=r.n(wn),Cn=F.Z.div(V||(V=(0,A.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n\n  & div:nth-of-type(",") {\n    & div {\n      color: #ffffff;\n      background-color: #3e85f3;\n      border-radius: 6px;\n    }\n  }\n"])),(function(n){return n.isSelected+1})),Vn=F.Z.div(D||(D=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--cell-background);\n\n  & div {\n    background-color: var(--cell-background);\n\n    border-radius: 6px;\n    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;\n  }\n\n  padding: 16px 0;\n  cursor: pointer;\n  &:hover {\n    & div {\n      opacity: 1;\n      color: #ffffff;\n      background-color: #3e85f3;\n    }\n  }\n"]))),Dn=F.Z.span(z||(z=(0,A.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--day-head-week-color-text);\n"]))),zn=F.Z.div(T||(T=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  width: 20px;\n  height: 22px;\n  color: var(--task-popup-color-text);\n  "," {\n    font-size: 16px;\n    width: 27px;\n    height: 26px;\n  }\n"])),(0,I.VV)(I.Mq)),Tn=F.Z.span(M||(M=(0,A.Z)([""]))),Mn=r(1954),En=function(){var n=(0,Zn.useMediaQuery)({maxWidth:767}),e=(0,L.useState)(""),r=(0,q.Z)(e,2),t=r[0],o=r[1],i=(0,yn.UO)().currentDay,a=(0,yn.s0)();(0,L.useEffect)((function(){var n=i.split("-").slice(2).join("");(0,mn.Z)(Array(7)).map((function(e,r){return(0,Mn.v)(i).startWeek.day(r+1).format("DD")===n&&o(r),null}))}),[i]);return(0,Q.jsx)(Cn,{isSelected:t,children:(0,mn.Z)(Array(7)).map((function(e,r){return(0,Q.jsxs)(Vn,{onClick:function(){return function(n){var e=n.format("YYYY-MM-DD");localStorage.setItem("date",e),a("././",{relative:"".concat(e)})}((0,Mn.v)(i).startWeek.day(r+1))},children:[(0,Q.jsx)(Dn,{children:n?jn()().day(r+1).format("ddd").charAt(0):jn()().day(r+1).format("ddd")}),(0,Q.jsx)(zn,{children:(0,Q.jsx)(Tn,{children:(0,Mn.v)(i).startWeek.day(r+1).format("D")})})]},r)}))})},Sn=r(7169),qn=r(2553),Un=[{id:1,type:"to-do"},{id:2,type:"in-progress"},{id:3,type:"done"}],On=function(){var n=(0,L.useState)([]),e=(0,q.Z)(n,2),r=e[0],t=e[1],o=(0,yn.UO)().currentDay,i=(0,xn.I0)(),a=(0,L.useState)(!1),s=(0,q.Z)(a,2),c=s[0],d=s[1],p=(0,L.useState)(!1),l=(0,q.Z)(p,2),u=l[0],x=l[1],h=(0,L.useState)(!1),g=(0,q.Z)(h,2),f=g[0],b=g[1],v=(0,L.useState)({}),k=(0,q.Z)(v,2),y=k[0],m=k[1],Z=(0,L.useState)(""),w=(0,q.Z)(Z,2),j=w[0],C=w[1],V=(0,xn.v9)(fn.P),D=(0,xn.v9)(qn.Uq);(0,L.useEffect)((function(){(0,S.Z)(O().mark((function n(){var e;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=jn()(o).format("YYYY-MM"),n.next=3,i((0,hn.Cz)(e));case 3:case"end":return n.stop()}}),n)})))()}),[o,i]),(0,L.useEffect)((function(){var n=D?D.filter((function(n){return n.date===o})).sort((function(n,e){return new Date(e.updatedAt)-new Date(n.updatedAt)})):[];t(n)}),[o,D]),(0,L.useEffect)((function(){var n=new Date(jn()().format("YYYY-MM-DD")),e=new Date(o);b(n!==e&&n>e)}),[o]);var z=function(n){d(!0),C(n)},T=function(n,e){m(n),d(!0),C(e)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(En,{}),(0,Q.jsxs)(P,{children:[Un.map((function(n){var e=n.id,t=n.type;return(0,Q.jsxs)(Y,{children:[(0,Q.jsx)(G,{type:t,onAdd:z,isDisabledAddTask:f,tasks:r.filter((function(n){return n.category===t}))}),(0,Q.jsx)(kn,{type:t,tasks:r,onEdit:T,isShowPopUpReplace:u,setIsShowPopUpReplace:x}),(0,Q.jsx)(_,{children:(0,Q.jsxs)(H,{onClick:function(){return z(t)},disabled:f,currentTheme:V,children:[(0,Q.jsx)(R,{children:(0,Q.jsx)("use",{xlinkHref:B.Z+"#icon-plus"})}),(0,Q.jsx)(N,{children:"Add task"})]})})]},e)})),c&&(0,Q.jsx)(Sn.K,{isOpen:c,onClose:function(){C(""),m({}),d(!1)},category:j,task:(0,E.Z)((0,E.Z)({},y),{},{date:o})})]})]})}},1153:function(n,e,r){r.d(e,{Z:function(){return k}});var t,o,i,a,s,c=r(2791),d=r(4164),p=r(168),l=r(9549),u=r(399),x=l.Z.div(t||(t=(0,p.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--primary-bg-color);\n  border: 1px solid #dce3e5cc;\n  border-radius: 8px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  "," {\n    width: 100%;\n  }\n"])),(0,u.Fp)(u.ai)),h=l.Z.div(o||(o=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  z-index: 999;\n"]))),g=(l.Z.div(i||(i=(0,p.Z)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 5px;\n"]))),l.Z.button(a||(a=(0,p.Z)(["\n  position: absolute;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n"])))),f=l.Z.svg(s||(s=(0,p.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--input-border-color-focus);\n  transition: color 0.3s ease-in-out;\n  &:hover {\n    stroke: #84828a;\n  }\n"]))),b=r(2184),v=r(3329),k=function(n){var e=n.isOpen,r=n.onClose,t=n.closeButtonPosition,o=void 0===t?{top:"14px",right:"14px"}:t,i=n.children;return(0,c.useEffect)((function(){var n=function(n){e&&"Escape"===n.key&&r()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,r]),e?d.createPortal((0,v.jsx)(h,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,v.jsxs)(x,{id:"modal-container",children:[(0,v.jsx)(g,{onClick:r,style:o,children:(0,v.jsx)(f,{children:(0,v.jsx)("use",{xlinkHref:"".concat(b.Z,"#icon-x-close"),width:24,height:24})})}),i]})}),document.getElementById("modal-root")):null}},7169:function(n,e,r){r.d(e,{K:function(){return dn}});var t,o,i,a,s,c,d,p,l,u,x,h,g,f,b,v,k,y,m,Z,w,j=r(2791),C=r(1153),V=r(9439),D=r(5705),z=r(9434),T=r(2184),M=r(8007),E=r(2426),S=r.n(E),q=r(8427),U=r(5264),O=r(168),A=r(9549),F=r(399),I=A.Z.div(t||(t=(0,O.Z)(["\n  position: relative;\n  width: 303px;\n  padding: 48px 18px 40px;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  background-color: var(--task-popup-bg);\n  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n\n  "," {\n    width: 396px;\n    padding: 40px 28px;\n  }\n"])),(0,F.VV)(F.Mq)),P=A.Z.button(o||(o=(0,O.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  &:hover {\n    & svg {\n      stroke: var(--accent-color);\n    }\n  }\n"]))),Y=A.Z.svg(i||(i=(0,O.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: rgba(17, 17, 17, 0.1);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n"]))),_=A.Z.label(a||(a=(0,O.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: rgba(52, 52, 52, 1);\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16;\n"]))),H=(0,A.Z)(D.gN)(s||(s=(0,O.Z)(["\n  width: 267px;\n  height: 42px;\n  flex-shrink: 0;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  border: none;\n  background-color: rgba(246, 246, 246, 1);\n  color: rgba(52, 52, 52, 1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.28;\n  /* cursor: pointer; */\n\n  "," {\n    height: 46px;\n    width: 340px;\n    padding: 14px 18px;\n    margin-bottom: 18px;\n  }\n\n  &::placeholder {\n    opacity: 1;\n    color: var(--task-popup-color-text);\n    font-size: 14px;\n    line-height: 1.28;\n  }\n"])),(0,F.VV)(F.Mq)),R=A.Z.div(c||(c=(0,O.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),N=(0,A.Z)(D.gN)(d||(d=(0,O.Z)(["\n  width: 126px;\n  height: 42px;\n  flex-shrink: 0;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  border: none;\n  background-color: rgba(246, 246, 246, 1);\n  color: rgba(52, 52, 52, 1);\n  font-size: 14px;\n  line-height: 1.28;\n  &::-webkit-calendar-picker-indicator {\n    opacity: 0;\n    /* cursor: pointer; */\n    width: 32px;\n  }\n\n  "," {\n    width: 163px;\n    height: 46px;\n    padding: 14px 18px;\n    margin-bottom: 32px;\n    &::-webkit-calendar-picker-indicator {\n      width: 60px;\n    }\n  }\n"])),(0,F.VV)(F.Mq)),B=A.Z.div(p||(p=(0,O.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 32px;\n"]))),L=A.Z.label(l||(l=(0,O.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(52, 52, 52, 1);\n  font-size: 12px;\n  line-height: 1.16;\n  cursor: pointer;\n\n  &:after {\n    content: '';\n    background: none repeat scroll 0 0 transparent;\n    bottom: -5px;\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: var(--accent-color);\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n  }\n  &:hover:after {\n    width: 100%;\n    left: 0;\n  }\n\n  "," {\n    font-size: 14px;\n    line-height: 1.16;\n  }\n"])),(0,F.VV)(F.Mq)),W=(0,A.Z)(D.gN)(u||(u=(0,O.Z)(["\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n"]))),J=A.Z.svg(x||(x=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),K=A.Z.svg(h||(h=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),$=A.Z.svg(g||(g=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),Q=A.Z.svg(f||(f=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),G=A.Z.svg(b||(b=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),X=A.Z.svg(v||(v=(0,O.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),nn=A.Z.div(k||(k=(0,O.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),en=A.Z.button(y||(y=(0,O.Z)(["\n  display: flex;\n  width: 135px;\n  height: 42px;\n  padding: 8px 20px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  border: none;\n  background: var(--accent-color);\n  color: var(--invert-text-color);\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.28;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: var(--btn-bg-hover);\n  }\n\n  "," {\n    width: 182px;\n    height: 48px;\n    padding: 10px 20px;\n  }\n"])),(0,F.VV)(F.Mq)),rn=A.Z.svg(m||(m=(0,O.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),tn=A.Z.svg(Z||(Z=(0,O.Z)(["\n  width: 18px;\n  height: 18px;\n"]))),on=A.Z.button(w||(w=(0,O.Z)(["\n  width: 118px;\n  height: 42px;\n  padding: 10px 20px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  border: none;\n  background-color: var(--task-btn-cancel);\n  color: var(--primary-text-color);\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.28;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: var(--btn-bg-hover);\n    color: var(--task-popup-bg);\n  }\n\n  "," {\n    width: 144px;\n    height: 48px;\n  }\n"])),(0,F.VV)(F.Mq)),an=r(3329),sn=M.Ry().shape({title:M.Z_("Enter title").max(250,"Text must be at most 250characters").required("Title is required"),start:M.Z_("Enter start").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Invalid start time").required("Start time is required"),end:M.Z_().matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Invalid end time").when("start",(function(n,e){return e.test({test:function(e){return!n||!e||e>n},message:"End time must be greater than start time"})}))}),cn=function(n){var e=n.category,r=n.task,t=n.onClose,o=(0,j.useState)("create"),i=(0,V.Z)(o,2),a=i[0],s=i[1],c=(0,z.I0)();(0,j.useEffect)((function(){null!==r&&void 0!==r&&r._id&&s("edit")}),[r]);return(0,an.jsx)(D.J9,{initialValues:r||{title:"",start:"09:00",end:"09:30",priority:"low"},validationSchema:sn,onSubmit:function(n){var o=null===r||void 0===r?void 0:r._id,i={title:n.title,start:n.start,end:n.end,priority:n.priority,date:(null===r||void 0===r?void 0:r.date)||S()().format("YYYY-MM-DD"),category:e};"edit"===a?c((0,q.CD)({taskId:o,updateTaskData:i})).then((function(n){if(n.error)throw new Error(n.payload);U.Notify.info("Task has been edited."),t()})).catch((function(n){U.Notify.failure("Something went wrong.")})):c((0,q.nb)(i)).then((function(n){if(n.error)throw new Error(n.payload);U.Notify.success("Task has been successfully created."),t()})).catch((function(n){U.Notify.failure("Something went wrong.")}))},children:function(n){var e=n.values;return(0,an.jsxs)(I,{children:[(0,an.jsx)(P,{type:"button","aria-label":"close button",onClick:t,children:(0,an.jsx)(Y,{children:(0,an.jsx)("use",{href:T.Z+"#icon-x-close"})})}),(0,an.jsxs)(D.l0,{children:[(0,an.jsxs)(_,{children:["Title",(0,an.jsx)(D.Bc,{name:"title",component:"div"}),(0,an.jsx)(H,{type:"text",name:"title",placeholder:"Enter text"})]}),(0,an.jsxs)(R,{children:[(0,an.jsxs)(_,{children:["Start",(0,an.jsx)(D.Bc,{name:"start",component:"div"}),(0,an.jsx)(N,{type:"time",name:"start"})]}),(0,an.jsxs)(_,{children:["End",(0,an.jsx)(D.Bc,{name:"end",component:"div"}),(0,an.jsx)(N,{type:"time",name:"end"})]})]}),(0,an.jsxs)(B,{role:"group",children:[(0,an.jsxs)(L,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"low"}),"low"===e.priority?(0,an.jsx)(K,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-blue-stroke"})}):(0,an.jsx)(J,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-blue"})}),"Low"]}),(0,an.jsxs)(L,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"medium"}),"medium"===e.priority?(0,an.jsx)(Q,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-orange-stroke"})}):(0,an.jsx)($,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-orange"})}),"Medium"]}),(0,an.jsxs)(L,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"high"}),"high"===e.priority?(0,an.jsx)(X,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-pink-stroke"})}):(0,an.jsx)(G,{children:(0,an.jsx)("use",{href:T.Z+"#icon-ellipse-pink"})}),"High"]})]}),(0,an.jsxs)(nn,{children:["edit"===a?(0,an.jsxs)(en,{type:"submit",children:[(0,an.jsx)(tn,{stroke:"#fff",fill:"none",children:(0,an.jsx)("use",{href:T.Z+"#icon-pencil"})}),"Edit"]}):(0,an.jsxs)(en,{type:"submit",children:[(0,an.jsx)(rn,{stroke:"#fff",children:(0,an.jsx)("use",{href:T.Z+"#icon-plus"})}),"Add"]}),(0,an.jsx)(on,{type:"button",onClick:t,children:"Cancel"})]})]})]})}})},dn=function(n){var e=n.category,r=n.task,t=n.onClose,o=n.isOpen;return(0,an.jsx)(C.Z,{onClose:t,isOpen:o,closeButtonPosition:{top:"16px",right:"16px"},children:(0,an.jsx)(cn,{onClose:t,category:e,task:r})})}},1954:function(n,e,r){r.d(e,{v:function(){return a}});var t=r(3433),o=r(2426),i=r.n(o),a=function(n){var e;i().updateLocale("en",{week:{dow:1}});var r=(e=n?i()(n).clone():i()()).clone().startOf("month"),o=e.clone().endOf("month"),a=r.clone().startOf("week"),s=o.clone().endOf("week"),c=e.clone().startOf("week"),d=e.clone().endOf("week"),p=s.diff(a,"days")+1,l=p/7,u=a.clone().subtract(1,"day");return{startMonth:r,endMonth:o,startDay:a,endDay:s,startWeek:c,endWeek:d,dayDifference:p,weeks:l,daysArray:(0,t.Z)(Array(p)).map((function(){return u.add(1,"day").clone()}))}}},2553:function(n,e,r){r.d(e,{Uq:function(){return o},aJ:function(){return i}});var t=r(6916),o=function(n){return n.tasks.tasks},i=function(n){return n.tasks.isUpdating};(0,t.P1)([function(n){return n.tasks.isFetchingTasks},function(n){return n.tasks.isAdding},function(n){return n.tasks.isDeleting},i],(function(n,e,r,t){return{isFetchingTasks:n,isAdding:e,isDeleting:r,isUpdating:t}}))},1048:function(n,e,r){r.d(e,{P:function(){return t}});var t=function(n){return n.theme.theme}}}]);
//# sourceMappingURL=19.35f39384.chunk.js.map