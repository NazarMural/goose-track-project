"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[19],{4019:function(n,r,e){e.r(r),e.d(r,{default:function(){return An}});var t,o,i,a,c,s,p,d,l,u,x,f,h,g,v,b,k,y,m,w,Z,j,C,V,D,T,U,z,M=e(1413),S=e(5861),F=e(9439),P=e(4687),A=e.n(P),E=e(168),I=e(9549),Y=e(399),O=I.Z.div(t||(t=(0,E.Z)(["\n  display: flex;\n  gap: 30px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 34px;\n  scroll-snap-type: x mandatory;\n\n  "," {\n    padding-bottom: 150px;\n    gap: 16px;\n  }\n  "," {\n    padding-bottom: 0;\n    gap: 27px;\n  }\n  /* width*/\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: var(--task-scrollbar-track);\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: var(--task-scrollbar-thumb);\n    border-radius: 12px;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--task-scrollbar-thumb-hover);\n  }\n"])),(0,Y.VV)(Y.Mq),(0,Y.VV)(Y.gv)),q=I.Z.div(o||(o=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  max-height: 432px;\n  height: fit-content;\n  position: relative;\n  background-color: var(--primary-bg-color);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  scroll-snap-align: start;\n\n  "," {\n    max-height: 568px;\n  }\n  "," {\n  }\n"])),(0,Y.VV)(Y.Mq),(0,Y.VV)(Y.gv)),H=I.Z.div(i||(i=(0,E.Z)(["\n  border-radius: 8px;\n  padding: 0 20px 20px 20px;\n  "," {\n    padding: 0 18px 18px 18px;\n  }\n"])),(0,Y.VV)(Y.Mq)),R=I.Z.button(a||(a=(0,E.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  background-color: var(--add-task-bg);\n  color: var(--primary-text-color);\n  border: ",";\n  border-radius: 8px;\n  padding: 12px 0;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n\n  &:hover:not([disabled]) {\n    background-color: #2b78ef;\n    color: var(--invert-text-color);\n    border: 1px solid var(--accent-color);\n    & svg {\n      stroke: var(--invert-text-color);\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n  }\n"])),(function(n){return"light"===n.currentTheme?"1px dashed var(--accent-color)":"1px solid var(--accent-color)"})),_=I.Z.svg(c||(c=(0,E.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--primary-text-color);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n"]))),L=I.Z.span(s||(s=(0,E.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n"]))),W=e(2184),N=e(2791),B=I.Z.div(p||(p=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 18px 0;\n  margin-bottom: ",";\n  "," {\n    margin-bottom: ",";\n    padding: 20px 20px 0;\n  }\n"])),(function(n){return 0===n.tasks.length?"35px":"24px"}),(0,Y.VV)(Y.Mq),(function(n){return 0===n.tasks.length?"35px":"28px"})),K=I.Z.h2(d||(d=(0,E.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  margin: 0;\n\n  color: var(--primary-text-color);\n  "," {\n    font-size: 20px;\n    line-height: 24px;\n  }\n"])),(0,Y.VV)(Y.Mq)),Q=I.Z.button(l||(l=(0,E.Z)(["\n  height: 22px;\n  width: 22px;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n\n  &:hover:not([disabled]) {\n    & svg {\n      stroke: var(--accent-color);\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n    & svg {\n      /* stroke: var(--accent-color); */\n    }\n  }\n  "," {\n    height: 24px;\n    width: 24px;\n  }\n"])),(0,Y.VV)(Y.Mq)),G=I.Z.svg(u||(u=(0,E.Z)(["\n  height: 100%;\n  width: 100%;\n  stroke: var(--primary-text-color);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n"]))),J=e(3329),X=function(n){var r=n.type,e=n.onAdd,t=n.tasks,o=n.isDisabledAddTask;return(0,J.jsxs)(B,{tasks:t,children:[(0,J.jsx)(K,{children:function(){switch(r){case"to-do":return"To do";case"in-progress":return"In progress";case"done":return"Done";default:return}}()}),(0,J.jsx)(Q,{disabled:o,onClick:function(){return e(r)},children:(0,J.jsx)(G,{children:(0,J.jsx)("use",{xlinkHref:W.Z+"#icon-icon-plus"})})})]})},$=I.Z.ul(x||(x=(0,E.Z)(["\n  padding: 0 6px 0 18px;\n  margin-right: 6px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  width: 328px;\n  & #popUpReplace {\n    ","\n  }\n\n  & li:nth-last-of-type(-n + 1) {\n    margin-bottom: 32px;\n\n    & #popUpReplace {\n      margin-top: 0;\n      top: -12px;\n      ","\n    }\n  }\n  "," {\n    width: 334px;\n    gap: 18px;\n    padding: 0 8px 0 20px;\n    margin-right: 8px;\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n  "," {\n    width: 313px;\n  }\n  /* width*/\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: var(--task-scrollbar-track);\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: var(--task-scrollbar-thumb);\n    border-radius: 12px;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--task-scrollbar-thumb-hover);\n  }\n"])),(function(n){return 1===n.tasks.length?"top: 16px !important; margin-right: 12px;":null}),(function(n){return 1===n.tasks.length?"0":"-12px"}),(0,Y.VV)(Y.Mq),(0,Y.VV)(Y.gv)),nn=I.Z.li(f||(f=(0,E.Z)(["\n  position: relative;\n  background-color: var(--page-bg-color);\n  padding: 14px 14px 18px 14px;\n  border: 1px solid var(--calendar-grid-border);\n\n  border-radius: 8px;\n"]))),rn=I.Z.h3(h||(h=(0,E.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 28px;\n"]))),en=I.Z.div(g||(g=(0,E.Z)(["\n  display: flex;\n  align-items: end;\n"]))),tn=I.Z.img(v||(v=(0,E.Z)(["\n  width: 32px;\n  height: 32px;\n  border: 1.8px solid var(--accent-color);\n  border-radius: 50%;\n  margin-right: 8px;\n"]))),on=I.Z.svg(b||(b=(0,E.Z)(["\n  width: 32px;\n  height: 32px;\n  border: 1.8px solid var(--accent-color);\n  border-radius: 50%;\n  margin-right: 8px;\n  fill: #3e85f32e;\n  .dark & {\n    fill: #ffffff2e;\n  }\n"]))),an=I.Z.button(k||(k=(0,E.Z)(["\n  height: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 12px;\n  color: var(--task-priority-color);\n  padding: 4px 12px;\n  background-color: ",";\n  border: none;\n  border-radius: 4px;\n"])),(function(n){switch(n.priority){case"low":return"var(--task-priority-low-bg)";case"medium":return"var(--task-priority-medium-bg)";case"high":return"var(--task-priority-high-bg)";default:return}})),cn=I.Z.div(y||(y=(0,E.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-left: auto;\n"]))),sn=I.Z.button(m||(m=(0,E.Z)(["\n  background-color: transparent;\n  border: none;\n  padding: 0;\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    & svg {\n      stroke: var(--accent-color);\n    }\n  }\n"]))),pn=I.Z.svg(w||(w=(0,E.Z)(["\n  height: 14px;\n  width: 14px;\n  stroke: var(--primary-text-color);\n  cursor: pointer;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  & use {\n    fill: transparent;\n  }\n  "," {\n    height: 16px;\n    width: 16px;\n  }\n"])),(0,Y.VV)(Y.Mq)),dn=I.Z.div(Z||(Z=(0,E.Z)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  /* gap: 14px; */\n  background-color: var(--task-popup-bg);\n  /* padding: 14px; */\n  border: ",";\n  border-radius: 8px;\n  position: absolute;\n  z-index: 2;\n  margin-top: 12px;\n  right: -1px;\n  box-shadow: 0px 4px 16px 0px #1111111a;\n\n  & div:first-of-type {\n    padding: 14px 14px 7px 14px;\n  }\n  & div:last-of-type {\n    padding: 7px 14px 14px 14px;\n  }\n"])),(function(n){return"light"===n.currentTheme?"none":"1px solid #FFFFFF26"})),ln=I.Z.div(j||(j=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  white-space: nowrap;\n  color: var(--task-popup-color-text);\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    & svg {\n      stroke: ",";\n    }\n    background-color: var(--accent-color);\n  }\n"])),(function(n){return"light"===n.currentTheme?"var(--invert-text-color)":"var(--task-popup-color-text);"}),(function(n){return"light"===n.currentTheme?"var(--invert-text-color)":"var(--task-popup-color-text);"})),un=I.Z.span(C||(C=(0,E.Z)(["\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n"]))),xn=e(9434),fn=e(8427),hn=e(1686),gn=e(1048),vn=function(n){var r=n.type,e=n.setIsShowPopUpReplace,t=n._id,o=(0,xn.I0)(),i=(0,xn.v9)(gn.P);(0,N.useEffect)((function(){var n=function(n){"togglePopUp"!==n.target.id&&e(!1)},r=function(n){"Escape"===n.code&&e(!1)};return document.addEventListener("click",n),document.addEventListener("keydown",r),function(){document.removeEventListener("click",n),document.removeEventListener("keydown",r)}}),[e]);var a=function(){var n=(0,S.Z)(A().mark((function n(r,e){return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o((0,fn.CD)({taskId:r,updateTaskData:{category:e}}));case 2:if(!n.sent.payload.status){n.next=6;break}return hn.Notify.failure("Task don`t replace. Try again"),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}();return(0,J.jsx)(dn,{id:"popUpReplace",currentTheme:i,children:function(n){var r=[];switch(n){case"to-do":r=[{id:1,typeCategory:"In progress",typeForOnClick:"in-progress"},{id:2,typeCategory:"Done",typeForOnClick:"done"}];break;case"in-progress":r=[{id:1,typeCategory:"To Do",typeForOnClick:"to-do"},{id:2,typeCategory:"Done",typeForOnClick:"done"}];break;case"done":r=[{id:1,typeCategory:"To Do",typeForOnClick:"to-do"},{id:2,typeCategory:"In progress",typeForOnClick:"in-progress"}]}return r}(r).map((function(n){var r=n.id,e=n.typeCategory,o=n.typeForOnClick;return(0,J.jsxs)(ln,{currentTheme:i,onClick:function(){return a(t,o)},children:[(0,J.jsx)(un,{children:e}),(0,J.jsx)(pn,{children:(0,J.jsx)("use",{xlinkHref:W.Z+"#icon-arrow-circle-broken-right"})})]},r)}))})},bn=e(4217),kn=function(n){var r=n.type,e=n.tasks,t=n.onEdit,o=n.isShowPopUpReplace,i=n.setIsShowPopUpReplace,a=(0,xn.I0)(),c=(0,xn.v9)(bn.O),s=(0,N.useRef)({});return(0,J.jsx)($,{tasks:e.filter((function(n){return n.category===r})),children:e.map((function(n){var e=n._id,p=n.title,d=n.priority,l=n.category;return r!==l?"":(0,J.jsxs)(nn,{children:[(0,J.jsx)(rn,{children:p}),(0,J.jsxs)(en,{children:[c?(0,J.jsx)(tn,{src:c,alt:"User avatar"}):(0,J.jsx)(on,{children:(0,J.jsx)("use",{href:"".concat(W.Z,"#icon-ph_user")})}),(0,J.jsx)(an,{priority:d,children:d.charAt(0).toUpperCase()+d.slice(1)}),(0,J.jsxs)(cn,{children:[(0,J.jsx)(sn,{id:"togglePopUp",ref:function(n){return s[e]=n},onClick:function(){var n;o===(n=e)?(i(!1),s[n].blur()):i(n)},children:(0,J.jsx)(pn,{id:"togglePopUp",children:(0,J.jsx)("use",{id:"togglePopUp",xlinkHref:W.Z+"#icon-arrow-circle-broken-right"})})}),(0,J.jsx)(sn,{onClick:function(){return t(n,l)},children:(0,J.jsx)(pn,{children:(0,J.jsx)("use",{xlinkHref:W.Z+"#icon-pencil"})})}),(0,J.jsx)(sn,{onClick:function(){return n=e,void hn.Confirm.show("Confirm","Are you sure you want to delete this?","Delete","Cancel",(0,S.Z)(A().mark((function r(){return A().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a((0,fn.sf)(n));case 2:if(!r.sent.payload.status){r.next=6;break}return hn.Notify.failure("Task don`t delete. Try again"),r.abrupt("return");case 6:hn.Notify.success("Task deleted successfully",{success:{background:"var(--accent-color)"}});case 7:case"end":return r.stop()}}),r)}))),(function(){}),{messageColor:"var(--primary-text-color);",backgroundColor:"var(--primary-bg-color)",okButtonBackground:"var(--accent-color)",titleColor:"var(--accent-color)"});var n},children:(0,J.jsx)(pn,{children:(0,J.jsx)("use",{xlinkHref:W.Z+"#icon-trash"})})})]})]}),o===e&&(0,J.jsx)(vn,{type:r,setIsShowPopUpReplace:i,_id:e})]},e)}))})},yn=e(7689),mn=e(3433),wn=e(4805),Zn=e(2426),jn=e.n(Zn),Cn=I.Z.div(V||(V=(0,E.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n\n  & div:nth-of-type(",") {\n    & div {\n      color: #ffffff;\n      background-color: #3e85f3;\n      border-radius: 6px;\n    }\n  }\n"])),(function(n){return n.isSelected+1})),Vn=I.Z.div(D||(D=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--cell-background);\n\n  & div {\n    background-color: var(--cell-background);\n\n    border-radius: 6px;\n    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;\n  }\n\n  padding: 16px 0;\n  cursor: pointer;\n  &:hover {\n    & div {\n      opacity: 1;\n      color: #ffffff;\n      background-color: #3e85f3;\n    }\n  }\n"]))),Dn=I.Z.span(T||(T=(0,E.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--day-head-week-color-text);\n"]))),Tn=I.Z.div(U||(U=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  width: 20px;\n  height: 22px;\n  color: var(--task-popup-color-text);\n  "," {\n    font-size: 16px;\n    width: 27px;\n    height: 26px;\n  }\n"])),(0,Y.VV)(Y.Mq)),Un=I.Z.span(z||(z=(0,E.Z)([""]))),zn=e(1954),Mn=function(){var n=(0,wn.useMediaQuery)({maxWidth:767}),r=(0,N.useState)(""),e=(0,F.Z)(r,2),t=e[0],o=e[1],i=(0,yn.UO)().currentDay,a=(0,yn.s0)();(0,N.useEffect)((function(){var n=i.split("-").slice(2).join("");(0,mn.Z)(Array(7)).map((function(r,e){return(0,zn.v)(i).startWeek.day(e+1).format("DD")===n&&o(e),null}))}),[i]);return(0,J.jsx)(Cn,{isSelected:t,children:(0,mn.Z)(Array(7)).map((function(r,e){return(0,J.jsxs)(Vn,{onClick:function(){return function(n){var r=n.format("YYYY-MM-DD");localStorage.setItem("date",r),a("././",{relative:"".concat(r)})}((0,zn.v)(i).startWeek.day(e+1))},children:[(0,J.jsx)(Dn,{children:n?jn()().day(e+1).format("ddd").charAt(0):jn()().day(e+1).format("ddd")}),(0,J.jsx)(Tn,{children:(0,J.jsx)(Un,{children:(0,zn.v)(i).startWeek.day(e+1).format("D")})})]},e)}))})},Sn=e(3923),Fn=e(2553),Pn=[{id:1,type:"to-do"},{id:2,type:"in-progress"},{id:3,type:"done"}],An=function(){var n=(0,N.useState)([]),r=(0,F.Z)(n,2),e=r[0],t=r[1],o=(0,yn.UO)().currentDay,i=(0,xn.I0)(),a=(0,N.useState)(!1),c=(0,F.Z)(a,2),s=c[0],p=c[1],d=(0,N.useState)(!1),l=(0,F.Z)(d,2),u=l[0],x=l[1],f=(0,N.useState)(!1),h=(0,F.Z)(f,2),g=h[0],v=h[1],b=(0,N.useState)({}),k=(0,F.Z)(b,2),y=k[0],m=k[1],w=(0,N.useState)(""),Z=(0,F.Z)(w,2),j=Z[0],C=Z[1],V=(0,xn.v9)(gn.P),D=(0,xn.v9)(Fn.Uq);(0,N.useEffect)((function(){(0,S.Z)(A().mark((function n(){var r;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=jn()(o).format("YYYY-MM"),n.next=3,i((0,fn.Cz)(r));case 3:case"end":return n.stop()}}),n)})))()}),[o,i]),(0,N.useEffect)((function(){var n=D?D.filter((function(n){return n.date===o})).sort((function(n,r){return new Date(r.updatedAt)-new Date(n.updatedAt)})):[];t(n)}),[o,D]),(0,N.useEffect)((function(){var n=new Date(jn()().format("YYYY-MM-DD")),r=new Date(o);v(n!==r&&n>r)}),[o]);var T=function(n){p(!0),C(n)},U=function(n,r){m(n),p(!0),C(r)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Mn,{}),(0,J.jsxs)(O,{children:[Pn.map((function(n){var r=n.id,t=n.type;return(0,J.jsxs)(q,{children:[(0,J.jsx)(X,{type:t,onAdd:T,isDisabledAddTask:g,tasks:e.filter((function(n){return n.category===t}))}),(0,J.jsx)(kn,{type:t,tasks:e,onEdit:U,isShowPopUpReplace:u,setIsShowPopUpReplace:x}),(0,J.jsx)(H,{children:(0,J.jsxs)(R,{onClick:function(){return T(t)},disabled:g,currentTheme:V,children:[(0,J.jsx)(_,{children:(0,J.jsx)("use",{xlinkHref:W.Z+"#icon-plus"})}),(0,J.jsx)(L,{children:"Add task"})]})})]},r)})),s&&(0,J.jsx)(Sn.K,{isOpen:s,onClose:function(){C(""),m({}),p(!1)},category:j,task:(0,M.Z)((0,M.Z)({},y),{},{date:o})})]})]})}},1048:function(n,r,e){e.d(r,{P:function(){return t}});var t=function(n){return n.theme.theme}}}]);
//# sourceMappingURL=19.34eeee01.chunk.js.map