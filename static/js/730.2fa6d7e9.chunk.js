"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[730],{3730:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,o,i,a,d,c,s,l,p,x,u=t(5861),h=t(9439),g=t(4687),f=t.n(g),b=t(2426),v=t.n(b),m=t(168),w=t(9549),k=t(399),Z=w.Z.div(r||(r=(0,m.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: #dce3e580; */\n  background-color: var(--calendar-grid-border);\n  display: grid;\n  grid-gap: 1px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(",", 1fr);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  overflow: hidden;\n"])),(function(n){return n.rows})),y=w.Z.div(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: flex-end; */\n  /* background-color: #ffffff; */\n  background-color: var(--cell-background);\n  padding: 8px 0;\n  height: 94px;\n\n  "," {\n    padding: 14px 0;\n    min-height: 144px;\n  }\n\n  "," {\n    min-height: 125px;\n  }\n"])),(0,k.VV)(k.Mq),(0,k.VV)(k.gv)),j=w.Z.div(i||(i=(0,m.Z)(["\n  display: flex;\n  text-align: end;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  height: 22px;\n  width: 22px;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 14px;\n  margin-right: 4px;\n  cursor: pointer;\n\n  "," {\n    margin-right: 14px;\n  }\n"])),(0,k.VV)(k.Mq)),V=w.Z.div(a||(a=(0,m.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 6px;\n  border-radius: 6px;\n  color: ",";\n  background: ",";\n"])),(function(n){return n.color}),(function(n){return n.background})),M=t(2791),C=w.Z.ul(d||(d=(0,m.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0 2px;\n  overflow-y: auto;\n  max-width: 44px;\n  /* width: 100%; */\n  /* max-width: 100%; */\n  height: 65px;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: var(--task-scrollbar-track);\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--task-scrollbar-thumb);\n    border-radius: 12px;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: var(--task-scrollbar-thumb-hover);\n  }\n\n  "," {\n    max-width: 92px;\n    /* max-width: 100%; */\n    padding: 0 4px;\n  }\n\n  "," {\n    max-width: 139px;\n  }\n"])),(0,k.VV)(k.Mq),(0,k.VV)(k.gv)),D=w.Z.li(c||(c=(0,m.Z)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 4px 8px;\n  /* display: flex; */\n  /* flex-wrap: nowrap; */\n  margin-bottom: 8px;\n  /* max-width: 100%; */\n  /* overflow-x: hidden; */\n  /* white-space: pre-wrap;\n  word-break: break-all;\n  word-wrap: break-word; */\n  max-width: 44px;  \n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n"," {\n    max-width: 92px;\n  }\n\n  "," {\n    max-width: 139px;\n  } \n"])),(function(n){return n.bg}),(function(n){return n.color}),(0,k.VV)(k.Mq),(0,k.VV)(k.gv)),E=w.Z.p(s||(s=(0,m.Z)(["\n  text-decoration: none;\n  /* color: ","; */\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])),(function(n){return n.color})),q=t(7169),z=t(3329),S=function(n){var e=n.tasks,t=n.currentDate,r=(0,M.useState)(!1),o=(0,h.Z)(r,2),i=o[0],a=o[1],d=(0,M.useState)({}),c=(0,h.Z)(d,2),s=c[0],l=c[1],p=function(){l({}),a(!1)};return(0,z.jsx)(C,{children:e.filter((function(n){return!v()(n.date).diff(v()(t),"day")})).map((function(n,e){return(0,z.jsxs)(D,{bg:"var(--calend-".concat(n.priority,"-bg-color)"),color:"var(--calend-".concat(n.priority,"-color)"),children:[(0,z.jsx)("div",{onClick:function(){return function(n){l(n),a(!0)}(n)},children:(0,z.jsx)(E,{children:n.title})}),i&&(0,z.jsx)(q.K,{isOpen:i,onClose:p,category:n.category,task:s})]},e+1)}))})},Y=t(1954),O=t(7689),F=t(8427),T=t(9434),_=t(2553),A=function(){var n=(0,O.UO)().currentMonth,e=(0,M.useState)([]),t=(0,h.Z)(e,2),r=t[0],o=t[1],i=(0,O.s0)(),a=(0,T.I0)(),d=v()("".concat(n,"-01"),"YYYY-MM-DD"),c=(0,Y.v)(d),s=c.startMonth,l=c.endMonth,p=c.weeks,x=c.daysArray,g=function(n){return v()().isSame(n,"day")},b=(0,T.v9)(_.aJ);(0,M.useEffect)((function(){(0,u.Z)(f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a((0,F.Cz)(n));case 2:t=e.sent,r=t.payload,o(r);case 5:case"end":return e.stop()}}),e)})))()}),[n,a,b]);return(0,z.jsx)(Z,{rows:p,children:x.map((function(n,e){return(0,z.jsxs)(y,{children:[(0,z.jsx)(j,{onClick:function(){return function(n){var e=v()(n).format("YYYY-MM-DD");localStorage.setItem("type","day"),localStorage.setItem("date",e),i("/calendar/day/".concat(e))}(n)},children:(0,z.jsx)(V,{color:"".concat(g(n)?"#FFFFFF":"".concat(s>n||l<n?"transparent":"var(--date-color)")),background:"".concat(g(n)?"var(--accent-color)":"transparent"),children:n.format("D")})}),s<n&&l>n&&(0,z.jsx)(S,{currentDate:n,tasks:r})]},e)}))})},I=t(3433),N=t(4805),B=w.Z.div(l||(l=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  height: 50px;\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n"]))),L=w.Z.div(p||(p=(0,m.Z)(["\n  /* display: flex; */\n  /* justify-content: center; */\n  /* align-items: center; */\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--cell-background);\n  color: ",";\n\n  padding: 16px 0;\n"])),(function(n){return n.weekend})),P=function(){var n=(0,N.useMediaQuery)({maxWidth:767});return(0,z.jsx)(B,{children:(0,I.Z)(Array(7)).map((function(e,t){return(0,z.jsx)(L,{weekend:5===t||6===t?"var(--accent-color)":"var(--primary-text-color)",children:n?v()().day(t+1).format("ddd").charAt(0):v()().day(t+1).format("ddd")},t)}))})},H=w.Z.div(x||(x=(0,m.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: var(--page-bg-color); */\n  /* padding: 38px 0; */\n"]))),J=function(){return(0,z.jsxs)(H,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(A,{})]})}},1153:function(n,e,t){t.d(e,{Z:function(){return m}});var r,o,i,a,d,c=t(2791),s=t(4164),l=t(168),p=t(9549),x=t(399),u=p.Z.div(r||(r=(0,l.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--primary-bg-color);\n  border: 1px solid #dce3e5cc;\n  border-radius: 8px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  "," {\n    width: 100%;\n  }\n"])),(0,x.Fp)(x.ai)),h=p.Z.div(o||(o=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  z-index: 999;\n"]))),g=(p.Z.div(i||(i=(0,l.Z)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 5px;\n"]))),p.Z.button(a||(a=(0,l.Z)(["\n  position: absolute;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n"])))),f=p.Z.svg(d||(d=(0,l.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--input-border-color-focus);\n  transition: color 0.3s ease-in-out;\n  &:hover {\n    stroke: #84828a;\n  }\n"]))),b=t(2184),v=t(3329),m=function(n){var e=n.isOpen,t=n.onClose,r=n.closeButtonPosition,o=void 0===r?{top:"14px",right:"14px"}:r,i=n.children;return(0,c.useEffect)((function(){var n=function(n){e&&"Escape"===n.key&&t()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,t]),e?s.createPortal((0,v.jsx)(h,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,v.jsxs)(u,{id:"modal-container",children:[(0,v.jsx)(g,{onClick:t,style:o,children:(0,v.jsx)(f,{children:(0,v.jsx)("use",{xlinkHref:"".concat(b.Z,"#icon-x-close"),width:24,height:24})})}),i]})}),document.getElementById("modal-root")):null}},7169:function(n,e,t){t.d(e,{K:function(){return sn}});var r,o,i,a,d,c,s,l,p,x,u,h,g,f,b,v,m,w,k,Z,y,j=t(2791),V=t(1153),M=t(9439),C=t(5705),D=t(9434),E=t(2184),q=t(8007),z=t(2426),S=t.n(z),Y=t(8427),O=t(5264),F=t(168),T=t(9549),_=t(399),A=T.Z.div(r||(r=(0,F.Z)(["\n    position: relative;\n    width: 303px;\n    padding: 48px 18px 40px;\n    border-radius: 8px;\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    background-color: var(--task-popup-bg);\n    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n\n    "," {\n        width: 396px;\n        padding: 40px 28px;\n    }\n"])),(0,_.VV)(_.Mq)),I=T.Z.button(o||(o=(0,F.Z)(["\n    position: absolute;\n    top: 14px;\n    right: 14px;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n"]))),N=T.Z.svg(i||(i=(0,F.Z)(["\n    width: 24px;\n    height: 24px;\n    stroke: rgba(17, 17, 17, 0.1);\n"]))),B=T.Z.label(a||(a=(0,F.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    color: rgba(52, 52, 52, 1);\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.16;\n"]))),L=(0,T.Z)(C.gN)(d||(d=(0,F.Z)(["\n    width: 267px;\n    height: 42px;\n    flex-shrink: 0;\n    padding: 12px 14px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    border: none;\n    background-color: rgba(246, 246, 246, 1);\n    color: rgba(52, 52, 52, 1);\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.28;\n    cursor: pointer;\n\n    "," {\n        height: 46px;\n        width: 340px;\n        padding: 14px 18px;\n        margin-bottom: 18px;\n    }\n\n    &::placeholder {\n        opacity: 1;\n        color: var(--task-popup-color-text);\n        font-size: 14px;\n        line-height: 1.28;\n    }\n"])),(0,_.VV)(_.Mq)),P=T.Z.div(c||(c=(0,F.Z)(["\n    display: flex;\n    gap: 14px;\n"]))),H=(0,T.Z)(C.gN)(s||(s=(0,F.Z)(["\n    width: 126px;\n    height: 42px;\n    flex-shrink: 0;\n    padding: 12px 14px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    border: none;\n    background-color: rgba(246, 246, 246, 1);\n    color: rgba(52, 52, 52, 1);\n    font-size: 14px;\n    line-height: 1.28;\n    &::-webkit-calendar-picker-indicator {\n    opacity: 0;\n    cursor: pointer;\n    width: 32px;\n}\n\n    "," {\n        width: 163px;\n        height: 46px;\n        padding: 14px 18px;\n        margin-bottom: 32px;\n        &::-webkit-calendar-picker-indicator {\n        width: 60px;\n    }\n}\n"])),(0,_.VV)(_.Mq)),J=T.Z.div(l||(l=(0,F.Z)(["\n    display: flex;\n    gap: 16px;\n    margin-bottom: 32px;\n"]))),U=T.Z.label(p||(p=(0,F.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    color: rgba(52, 52, 52, 1);\n    font-size: 12px;\n    line-height: 1.16;\n\n    "," {\n        font-size: 14px;\n        line-height: 1.16;\n    }\n"])),(0,_.VV)(_.Mq)),W=(0,T.Z)(C.gN)(x||(x=(0,F.Z)(["\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n"]))),K=T.Z.svg(u||(u=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),$=T.Z.svg(h||(h=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),Q=T.Z.svg(g||(g=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),R=T.Z.svg(f||(f=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),G=T.Z.svg(b||(b=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),X=T.Z.svg(v||(v=(0,F.Z)(["\n    width: 10px;\n    height: 10px;\n"]))),nn=T.Z.div(m||(m=(0,F.Z)(["\n    display: flex;\n    gap: 14px;\n"]))),en=T.Z.button(w||(w=(0,F.Z)(["\n    display: flex;\n    width: 135px;\n    height: 42px;\n    padding: 8px 20px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 8px;\n    border: none;\n    background: var(--accent-color);\n    color: var(--invert-text-color);\n    text-align: center;\n    font-size: 14px;\n    line-height: 1.28;\n    transition: background-color 250ms linear;\n\n&:hover,\n&:focus {\n    background-color: var(--btn-bg-hover);\n}\n\n"," {\n    width: 182px;\n    height: 48px;\n    padding: 10px 20px;;\n    }\n"])),(0,_.VV)(_.Mq)),tn=T.Z.svg(k||(k=(0,F.Z)(["\n    width: 20px;\n    height: 20px;\n"]))),rn=T.Z.svg(Z||(Z=(0,F.Z)(["\n    width: 18px;\n    height: 18px;\n"]))),on=T.Z.button(y||(y=(0,F.Z)(["\n    width: 118px;\n    height: 42px;\n    padding: 10px 20px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 8px;\n    border: none;\n    background-color: var(--task-btn-cancel);\n    color: var(--primary-text-color);\n    text-align: center;\n    font-size: 14px;\n    line-height: 1.28;\n    transition: background-color 250ms linear;\n\n&:hover,\n&:focus {\n    background-color: var(--btn-bg-hover);\n    color: var(--task-popup-bg);\n}\n\n"," {\n    width: 144px;\n    height: 48px;\n    }\n"])),(0,_.VV)(_.Mq)),an=t(3329),dn=q.Ry().shape({title:q.Z_("Enter title").max(250,"Text must be at most 250characters").required("Title is required"),start:q.Z_("Enter start").matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Invalid start time").required("Start time is required"),end:q.Z_().matches(/^([01]\d|2[0-3]):([0-5]\d)$/,"Invalid end time").when("start",(function(n,e){return e.test({test:function(e){return!n||!e||e>n},message:"End time must be greater than start time"})}))}),cn=function(n){var e=n.category,t=n.task,r=n.onClose,o=(0,j.useState)("create"),i=(0,M.Z)(o,2),a=i[0],d=i[1],c=(0,D.I0)();(0,j.useEffect)((function(){null!==t&&void 0!==t&&t._id&&d("edit")}),[t]);return(0,an.jsx)(C.J9,{initialValues:t||{title:"",start:"09:00",end:"09:30",priority:"low"},validationSchema:dn,onSubmit:function(n){var o=null===t||void 0===t?void 0:t._id,i={title:n.title,start:n.start,end:n.end,priority:n.priority,date:(null===t||void 0===t?void 0:t.date)||S()().format("YYYY-MM-DD"),category:e};"edit"===a?c((0,Y.CD)({taskId:o,updateTaskData:i})).then((function(n){if(n.error)throw new Error(n.payload);O.Notify.info("Task has been edited."),r()})).catch((function(n){O.Notify.failure("Something went wrong.")})):c((0,Y.nb)(i)).then((function(n){if(n.error)throw new Error(n.payload);O.Notify.success("Task has been successfully created."),r()})).catch((function(n){O.Notify.failure("Something went wrong.")}))},children:function(n){var e=n.values;return(0,an.jsxs)(A,{children:[(0,an.jsx)(I,{type:"button","aria-label":"close button",onClick:r,children:(0,an.jsx)(N,{children:(0,an.jsx)("use",{href:E.Z+"#icon-x-close"})})}),(0,an.jsxs)(C.l0,{children:[(0,an.jsxs)(B,{children:["Title",(0,an.jsx)(C.Bc,{name:"title",component:"div"}),(0,an.jsx)(L,{type:"text",name:"title",placeholder:"Enter text"})]}),(0,an.jsxs)(P,{children:[(0,an.jsxs)(B,{children:["Start",(0,an.jsx)(C.Bc,{name:"start",component:"div"}),(0,an.jsx)(H,{type:"time",name:"start"})]}),(0,an.jsxs)(B,{children:["End",(0,an.jsx)(C.Bc,{name:"end",component:"div"}),(0,an.jsx)(H,{type:"time",name:"end"})]})]}),(0,an.jsxs)(J,{role:"group",children:[(0,an.jsxs)(U,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"low"}),"low"===e.priority?(0,an.jsx)($,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-blue-stroke"})}):(0,an.jsx)(K,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-blue"})}),"Low"]}),(0,an.jsxs)(U,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"medium"}),"medium"===e.priority?(0,an.jsx)(R,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-orange-stroke"})}):(0,an.jsx)(Q,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-orange"})}),"Medium"]}),(0,an.jsxs)(U,{children:[(0,an.jsx)(W,{type:"radio",name:"priority",value:"high"}),"high"===e.priority?(0,an.jsx)(X,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-pink-stroke"})}):(0,an.jsx)(G,{children:(0,an.jsx)("use",{href:E.Z+"#icon-ellipse-pink"})}),"High"]})]}),(0,an.jsxs)(nn,{children:["edit"===a?(0,an.jsxs)(en,{type:"submit",children:[(0,an.jsx)(rn,{stroke:"#fff",fill:"none",children:(0,an.jsx)("use",{href:E.Z+"#icon-pencil"})}),"Edit"]}):(0,an.jsxs)(en,{type:"submit",children:[(0,an.jsx)(tn,{stroke:"#fff",children:(0,an.jsx)("use",{href:E.Z+"#icon-plus"})}),"Add"]}),(0,an.jsx)(on,{type:"button",onClick:r,children:"Cancel"})]})]})]})}})},sn=function(n){var e=n.category,t=n.task,r=n.onClose,o=n.isOpen;return(0,an.jsx)(V.Z,{onClose:r,isOpen:o,closeButtonPosition:{top:"16px",right:"16px"},children:(0,an.jsx)(cn,{onClose:r,category:e,task:t})})}},1954:function(n,e,t){t.d(e,{v:function(){return a}});var r=t(3433),o=t(2426),i=t.n(o),a=function(n){var e;i().updateLocale("en",{week:{dow:1}});var t=(e=n?i()(n).clone():i()()).clone().startOf("month"),o=e.clone().endOf("month"),a=t.clone().startOf("week"),d=o.clone().endOf("week"),c=e.clone().startOf("week"),s=e.clone().endOf("week"),l=d.diff(a,"days")+1,p=l/7,x=a.clone().subtract(1,"day");return{startMonth:t,endMonth:o,startDay:a,endDay:d,startWeek:c,endWeek:s,dayDifference:l,weeks:p,daysArray:(0,r.Z)(Array(l)).map((function(){return x.add(1,"day").clone()}))}}},2553:function(n,e,t){t.d(e,{aJ:function(){return o}});var r=t(6916),o=function(n){return n.tasks.isUpdating};(0,r.P1)([function(n){return n.tasks.isFetchingTasks},function(n){return n.tasks.isAdding},function(n){return n.tasks.isDeleting},o],(function(n,e,t,r){return{isFetchingTasks:n,isAdding:e,isDeleting:t,isUpdating:r}}))}}]);
//# sourceMappingURL=730.2fa6d7e9.chunk.js.map