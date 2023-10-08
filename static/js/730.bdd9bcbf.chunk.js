"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[730],{3730:function(n,r,e){e.r(r),e.d(r,{default:function(){return G}});var t,o,a,c,d,i,l,s,u,p,f=e(5861),x=e(9439),g=e(4687),h=e.n(g),w=e(2426),m=e.n(w),v=e(168),y=e(9549),k=e(399),b=y.Z.div(t||(t=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: #dce3e580; */\n  background-color: var(--calendar-grid-border);\n  display: grid;\n  grid-gap: 1px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(",", 1fr);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  overflow: hidden;\n"])),(function(n){return n.rows})),Z=y.Z.div(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: flex-end; */\n  /* background-color: #ffffff; */\n  background-color: var(--cell-background);\n  padding: 8px 0;\n  height: 96px;\n\n  "," {\n    padding: 14px 0;\n  }\n"])),(0,k.VV)(k.Mq)),j=y.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  text-align: end;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  height: 22px;\n  width: 22px;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 14px;\n  margin-right: 4px;\n\n  "," {\n    margin-right: 14px;\n  }\n"])),(0,k.VV)(k.Mq)),M=y.Z.div(c||(c=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 6px;\n  border-radius: 6px;\n  color: ",";\n  background: ",";\n"])),(function(n){return n.color}),(function(n){return n.background})),V=e(1087),D=y.Z.ul(d||(d=(0,v.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0 2px;\n  overflow-y: auto;\n  max-width: 44px;\n  /* max-width: 100%; */\n  height: 65px;\n\n  "," {\n    /* max-width: 92px; */\n    max-width: 100%;\n    padding: 0 4px;\n  }\n\n  "," {\n    /* max-width: 139px; */\n  }\n"])),(0,k.VV)(k.Mq),(0,k.VV)(k.gv)),O=y.Z.li(i||(i=(0,v.Z)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 4px 8px;\n  /* display: flex; */\n  /* flex-wrap: nowrap; */\n  margin-bottom: 8px;\n  max-width: 100%;\n  /* overflow-x: hidden; */\n  /* white-space: pre-wrap;\n  word-break: break-all;\n  word-wrap: break-word; */\n  /* max-width: 44px; \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 */\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  /* "," {\n    max-width: 92px;\n  }\n\n  "," {\n    max-width: 139px;\n  } */\n"])),(function(n){return n.bg}),(function(n){return n.color}),(0,k.VV)(k.Mq),(0,k.VV)(k.gv)),Y=(0,y.Z)(V.OL)(l||(l=(0,v.Z)(["\n  text-decoration: none;\n  /* color: ","; */\n  color: inherit;\n  /* overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; */\n"])),(function(n){return n.color})),A=e(3329),q=function(n){var r=n.tasks,e=n.currentDate;return(0,A.jsx)(D,{children:r.filter((function(n){return!m()(n.date).diff(m()(e),"day")})).map((function(n,r){return(0,A.jsx)(O,{bg:"var(--calend-".concat(n.priority,"-bg-color)"),color:"var(--calend-".concat(n.priority,"-color)"),children:(0,A.jsx)(Y,{children:n.title})},r)}))})},C=e(1954),S=e(7689),_=e(2791),I=e(8427),W=e(9434),z=function(){var n=(0,S.UO)().currentMonth,r=(0,_.useState)([]),e=(0,x.Z)(r,2),t=e[0],o=e[1],a=(0,S.s0)(),c=(0,W.I0)(),d=m()("".concat(n,"-01"),"YYYY-MM-DD"),i=(0,C.v)(d),l=i.startMonth,s=i.endMonth,u=i.weeks,p=i.daysArray,g=function(n){return m()().isSame(n,"day")};(0,_.useEffect)((function(){(0,f.Z)(h().mark((function r(){var e,t;return h().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c((0,I.Cz)(n));case 2:e=r.sent,t=e.payload,o(t);case 5:case"end":return r.stop()}}),r)})))()}),[n,c]);return(0,A.jsx)(b,{rows:u,children:p.map((function(n,r){return(0,A.jsxs)(Z,{children:[(0,A.jsx)(j,{onClick:function(){return function(n){var r=m()(n).format("YYYY-MM-DD");localStorage.setItem("type","day"),localStorage.setItem("date",r),a("/calendar/day/".concat(r))}(n)},children:(0,A.jsx)(M,{color:"".concat(g(n)?"var(--date-color-accent)":"".concat(l>n||s<n?"transparent":"var(--date-color)")),background:"".concat(g(n)?"var(--accent-color)":"transparent"),children:n.format("D")})}),l<n&&s>n&&(0,A.jsx)(q,{currentDate:n,tasks:t})]},r)}))})},L=e(3433),E=e(4805),Q=y.Z.div(s||(s=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  height: 50px;\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n"]))),U=y.Z.div(u||(u=(0,v.Z)(["\n  /* display: flex; */\n  /* justify-content: center; */\n  /* align-items: center; */\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--cell-background);\n  color: ",";\n\n  padding: 16px 0;\n"])),(function(n){return n.weekend})),B=function(){var n=(0,E.useMediaQuery)({maxWidth:767});return(0,A.jsx)(Q,{children:(0,L.Z)(Array(7)).map((function(r,e){return(0,A.jsx)(U,{weekend:5===e||6===e?"var(--accent-color)":"var(--primary-text-color)",children:n?m()().day(e+1).format("ddd").charAt(0):m()().day(e+1).format("ddd")},e)}))})},F=y.Z.div(p||(p=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: var(--page-bg-color); */\n  /* padding: 38px 0; */\n"]))),G=function(){return(0,A.jsxs)(F,{children:[(0,A.jsx)(B,{}),(0,A.jsx)(z,{})]})}},1954:function(n,r,e){e.d(r,{v:function(){return c}});var t=e(3433),o=e(2426),a=e.n(o),c=function(n){var r;a().updateLocale("en",{week:{dow:1}});var e=(r=n?a()(n).clone():a()()).clone().startOf("month"),o=r.clone().endOf("month"),c=e.clone().startOf("week"),d=o.clone().endOf("week"),i=r.clone().startOf("week"),l=r.clone().endOf("week"),s=d.diff(c,"days")+1,u=s/7,p=c.clone().subtract(1,"day");return{startMonth:e,endMonth:o,startDay:c,endDay:d,startWeek:i,endWeek:l,dayDifference:s,weeks:u,daysArray:(0,t.Z)(Array(s)).map((function(){return p.add(1,"day").clone()}))}}}}]);
//# sourceMappingURL=730.bdd9bcbf.chunk.js.map