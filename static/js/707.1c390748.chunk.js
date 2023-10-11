"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[707],{3575:function(n,t,e){e.d(t,{t:function(){return h}});var o,a,r=e(168),c=e(9549),i=e(399),d=c.Z.main(o||(o=(0,r.Z)(["\n  background-color: var(--page-bg-color);\n  padding-top: 64px;\n  padding-bottom: 40px;\n\n  "," {\n    padding-bottom: 38px;\n  }\n\n  "," {\n    padding-top: 38px;\n    padding-bottom: 32px;\n  }\n"])),(0,i.VV)(i.Mq),(0,i.VV)(i.gv)),l=c.Z.div(a||(a=(0,r.Z)(["\n  padding: 0 20px;\n\n  "," {\n    padding: 0 32px;\n  }\n"])),(0,i.VV)(i.Mq)),s=e(3329),h=function(n){var t=n.children;return(0,s.jsx)(d,{children:(0,s.jsx)(l,{children:t})})}},8707:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var o,a,r,c,i,d,l,s,h,p=e(2791),u=e(3575),x=e(9439),f=e(2426),g=e.n(f),m=e(168),v=e(9549),Y=e(1087),y=e(399),M=v.Z.div(o||(o=(0,m.Z)(["\n  margin-bottom: 24px;\n\n  "," {\n    display: flex;\n    justify-content: space-between;\n  }\n"])),(0,y.VV)(y.Mq)),b=v.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  border-radius: 8px;\n  overflow: hidden;\n  height: 34px;\n\n  "," {\n    max-width: 152px;\n  }\n"])),(0,y.VV)(y.ai)),j=(0,v.Z)(Y.OL)(r||(r=(0,m.Z)(["\n  text-decoration: none;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  color: var(--switch-type-color);\n  width: 76px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0;\n  background-color: var(--switch-type-bg);\n\n  &.active {\n    color: var(--switch-type-color-active);\n    background-color: var(--switch-type-bg-active);\n  }\n"]))),Z=e(7689),k=e(2184),w=v.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  gap: 8px;\n"]))),D=v.Z.div(i||(i=(0,m.Z)(["\n  background-color: var(--accent-color);\n  width: 150px;\n  display: flex;\n  padding: 6px 12px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n"]))),S=v.Z.span(d||(d=(0,m.Z)(["\n  text-transform: uppercase;\n  color: var(--invert-text-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 18px;\n"]))),I=v.Z.div(l||(l=(0,m.Z)(["\n  display: flex;\n  background: var(--calendar-grid-border);\n  border: 1px solid var(--calendar-grid-border);\n  border-radius: 8px;\n  gap: 1px;\n  overflow: hidden;\n  cursor: pointer;\n"]))),V=v.Z.div(s||(s=(0,m.Z)(["\n  padding: 7px 10px;\n  background: var(--primary-bg-color);\n"]))),C=v.Z.svg(h||(h=(0,m.Z)(["\n  fill: var(--chevron-btn-color);\n  &:hover {\n    fill: var(--accent-color);\n  }\n"]))),q=e(3329),L=function(){var n,t,e=(0,Z.UO)(),o=(0,Z.s0)();e.currentDay&&(n="day",t=e.currentDay,localStorage.setItem("type","day")),e.currentMonth&&(n="month",t=e.currentMonth,localStorage.setItem("type","month"));return(0,q.jsxs)(w,{children:[(0,q.jsx)(D,{children:(0,q.jsx)(S,{children:g()(t).format("day"===n?"DD MMM YYYY":"MMMM YYYY")})}),(0,q.jsxs)(I,{children:[(0,q.jsx)("div",{onClick:function(){var e=g()(t).subtract(1,n).format("YYYY-MM-DD");localStorage.setItem("date",e);var a=g()(e).format("YYYY-MM");o("month"===n?"month/".concat(a):"day/".concat(e))},children:(0,q.jsx)(V,{children:(0,q.jsx)(C,{width:"16",height:"16",children:(0,q.jsx)("use",{xlinkHref:"".concat(k.Z,"#icon-chevron-left"),width:16,height:16})})})}),(0,q.jsx)("div",{onClick:function(){var e=g()(t).add(1,n).format("YYYY-MM-DD");localStorage.setItem("date",e);var a=g()(e).format("YYYY-MM"),r=g()(e).format("YYYY-MM-DD");o("month"===n?"month/".concat(a):"day/".concat(r))},children:(0,q.jsx)(V,{children:(0,q.jsx)(C,{width:"16",height:"16",children:(0,q.jsx)("use",{xlinkHref:"".concat(k.Z,"#icon-chevron-right"),width:16,height:16})})})})]})]})},E=function(){var n=(0,p.useState)(""),t=(0,x.Z)(n,2),e=t[0],o=t[1],a=(0,p.useState)(""),r=(0,x.Z)(a,2),c=r[0],i=r[1],d=g()(e).format("YYYY-MM"),l=g()(e).format("YYYY-MM-DD"),s=document.querySelector("#data-type-month"),h=document.querySelector("#data-type-day"),u=(0,Z.UO)();(0,p.useEffect)((function(){var n=localStorage.getItem("date"),t=localStorage.getItem("type");o(n||g()().format("YYYY-MM-DD")),i(t||"month")}),[]),(0,p.useEffect)((function(){u.currentDay&&(null===h||void 0===h||h.classList.add("active"),null===s||void 0===s||s.classList.remove("active")),u.currentMonth&&(null===s||void 0===s||s.classList.add("active"),null===h||void 0===h||h.classList.remove("active"))}));var f=function(n){switch(n.currentTarget.textContent){case"Month":i("month"),localStorage.setItem("type","month");break;case"Day":i("day"),localStorage.setItem("type","day");break;default:return c}};return(0,q.jsxs)(M,{children:[(0,q.jsx)(L,{}),(0,q.jsxs)(b,{children:[(0,q.jsx)(j,{to:"month/".concat(d),onClick:f,id:"data-type-month",children:"Month"}),(0,q.jsx)(j,{to:"day/".concat(l),onClick:f,id:"data-type-day",children:"Day"})]})]})},_=function(){var n=(0,Z.s0)();(0,p.useEffect)((function(){var t=g()().format("YYYY-MM").toString();n("/calendar/month/".concat(t))}),[n]);var t=localStorage.getItem("type")||"month";return(0,p.useEffect)((function(){var e=localStorage.getItem("date")||g()().format("YYYY-MM-DD").toString(),o=e.slice(0,-3);n("month"===t?"/calendar/month/".concat(o):"/calendar/day/".concat(e)),localStorage.setItem("date",e),localStorage.setItem("type",t)}),[n,t]),(0,q.jsxs)(u.t,{children:[(0,q.jsx)(E,{}),(0,q.jsx)(Z.j3,{})]})}}}]);
//# sourceMappingURL=707.1c390748.chunk.js.map