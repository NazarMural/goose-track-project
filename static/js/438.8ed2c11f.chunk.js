"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[438],{7438:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,o,a,i,d,c,l,s,p,g,u=t(9439),x=t(2426),f=t.n(x),h=t(168),m=t(9549),w=t(399),y=m.Z.div(r||(r=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: #dce3e580; */\n  background-color: var(--calendar-grid-border);\n  display: grid;\n  grid-gap: 1px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(",", 1fr);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  overflow: hidden;\n"])),(function(n){return n.rows})),v=m.Z.div(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: flex-end; */\n  /* background-color: #ffffff; */\n  background-color: var(--cell-background);\n  padding: 8px 0;\n  height: 96px;\n\n  "," {\n    padding: 14px 0;\n  }\n"])),(0,w.VV)(w.Mq)),b=m.Z.div(a||(a=(0,h.Z)(["\n  display: flex;\n  text-align: end;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  height: 22px;\n  width: 22px;\n  /* padding: 4px 6px; */\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 14px;\n  padding-right: 4px;\n\n  "," {\n    padding-right: 14px;\n  }\n"])),(0,w.VV)(w.Mq)),k=m.Z.div(i||(i=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  color: ",";\n  background: ",";\n"])),(function(n){return n.color}),(function(n){return n.background})),Z=JSON.parse('[{"title":"read","start":"09:00","end":"09:30","priority":"low","date":"2023-09-29","category":"to-do","owner":"test@email.com"},{"title":"update","start":"09:00","end":"09:30","priority":"medium","date":"2023-09-29","category":"to-do","owner":"test@email.com"},{"title":"create","start":"09:00","end":"09:30","priority":"high","date":"2023-09-29","category":"to-do","owner":"test@email.com"},{"title":"read","start":"09:00","end":"09:30","priority":"low","date":"2023-09-29","category":"to-do","owner":"test@email.com"},{"title":"learn","start":"09:00","end":"09:30","priority":"high","date":"2023-09-25","category":"in-progress","owner":"test@email.com"},{"title":"to-do1","start":"09:00","end":"09:30","priority":"low","date":"2023-09-30","category":"in-progress","owner":"test@email.com"},{"title":"to-do1","start":"09:00","end":"09:30","priority":"high","date":"2023-09-10","category":"done","owner":"test@email.com"},{"title":"learn","start":"09:00","end":"09:30","priority":"high","date":"2023-09-14","category":"in-progress","owner":"test@email.com"},{"title":"to-do1","start":"09:00","end":"09:30","priority":"low","date":"2023-09-14","category":"in-progress","owner":"test@email.com"},{"title":"to-do1","start":"09:00","end":"09:30","priority":"high","date":"2023-09-14","category":"done","owner":"test@email.com"}]'),j=t(1087),M=m.Z.ul(d||(d=(0,h.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0 2px;\n  overflow-y: auto;\n  max-width: 44px;\n  /* max-width: 100%; */\n  height: 65px;\n\n  "," {\n    /* max-width: 92px; */\n    max-width: 100%;\n    padding: 0 4px;\n  }\n\n  "," {\n    /* max-width: 139px; */\n  }\n"])),(0,w.VV)(w.Mq),(0,w.VV)(w.gv)),V=m.Z.li(c||(c=(0,h.Z)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 4px 8px;\n  /* display: flex; */\n  /* flex-wrap: nowrap; */\n  margin-bottom: 8px;\n  max-width: 100%;\n  /* overflow-x: hidden; */\n  /* white-space: pre-wrap;\n  word-break: break-all;\n  word-wrap: break-word; */\n  /* max-width: 44px; \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 */\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  /* "," {\n    max-width: 92px;\n  }\n\n  "," {\n    max-width: 139px;\n  } */\n"])),(function(n){return n.bg}),(function(n){return n.color}),(0,w.VV)(w.Mq),(0,w.VV)(w.gv)),O=(0,m.Z)(j.OL)(l||(l=(0,h.Z)(["\n  text-decoration: none;\n  /* color: ","; */\n  color: inherit;\n  /* overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; */\n"])),(function(n){return n.color})),D=t(3329),A=function(n){var e=n.date;return(0,D.jsx)(M,{children:Z.filter((function(n){return!f()(n.date).diff(f()(e),"day")})).map((function(n,e){return(0,D.jsx)(V,{bg:"var(--calend-".concat(n.priority,"-bg-color)"),color:"var(--calend-".concat(n.priority,"-color)"),children:(0,D.jsx)(O,{children:n.title})},e)}))})},q=t(3433),C=t(7689),Y=function(){var n=(0,C.UO)().currentMonth.split("-"),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=function(n){var e;f().updateLocale("en",{week:{dow:1}});var t=(e=n?f()(n):f()()).clone().startOf("month"),r=e.clone().endOf("month"),o=t.clone().startOf("week"),a=r.clone().endOf("week"),i=e.clone().startOf("week"),d=e.clone().endOf("week"),c=a.diff(o,"days")+1,l=c/7,s=o.clone().subtract(1,"day");return{startMonth:t,endMonth:r,startDay:o,endDay:a,startWeek:i,endWeek:d,dayDifference:c,weeks:l,daysArray:(0,q.Z)(Array(c)).map((function(){return s.add(1,"day").clone()}))}}(f()("".concat(r,"-").concat(t,"-01"),"YYYY-MMMM-DD")),a=o.startMonth,i=o.endMonth,d=o.weeks,c=o.daysArray,l=function(n){return f()().isSame(n,"day")};return(0,D.jsx)(y,{rows:d,children:c.map((function(n,e){return(0,D.jsxs)(v,{children:[(0,D.jsx)(b,{children:(0,D.jsx)(k,{color:"".concat(l(n)?"var(--date-color-accent)":"".concat(a>n||i<n?"transparent":"var(--date-color)")),background:"".concat(l(n)?"var(--accent-color)":"transparent"),children:n.format("D")})}),a<n&&i>n&&(0,D.jsx)(A,{date:n})]},e)}))})},_=t(4805),L=m.Z.div(s||(s=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  height: 50px;\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n"]))),W=m.Z.div(p||(p=(0,h.Z)(["\n  /* display: flex; */\n  /* justify-content: center; */\n  /* align-items: center; */\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--cell-background);\n  color: ",";\n\n  padding: 16px 0;\n"])),(function(n){return n.weekend})),S=function(){var n=(0,_.useMediaQuery)({maxWidth:767});return(0,D.jsx)(L,{children:(0,q.Z)(Array(7)).map((function(e,t){return(0,D.jsx)(W,{weekend:5===t||6===t?"var(--accent-color)":"var(--primary-text-color)",children:n?f()().day(t+1).format("ddd").charAt(0):f()().day(t+1).format("ddd")},t)}))})},z=m.Z.div(g||(g=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  /* background-color: var(--page-bg-color); */\n  /* padding: 38px 0; */\n"]))),E=function(){return(0,D.jsxs)(z,{children:[(0,D.jsx)("button",{onClick:function(){document.documentElement.classList.toggle("dark")},children:"Change theme"}),(0,D.jsx)(S,{}),(0,D.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=438.8ed2c11f.chunk.js.map