"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[757],{3575:function(n,t,e){e.d(t,{t:function(){return p}});var r,o,a=e(168),i=e(9549),s=e(399),c=i.Z.main(r||(r=(0,a.Z)(["\n  background-color: var(--page-bg-color);\n  padding-top: 64px;\n  padding-bottom: 40px;\n\n  "," {\n    padding-bottom: 38px;\n  }\n\n  "," {\n    padding-top: 38px;\n    padding-bottom: 32px;\n  }\n"])),(0,s.VV)(s.Mq),(0,s.VV)(s.gv)),d=i.Z.div(o||(o=(0,a.Z)(["\n  padding: 0 20px;\n\n  "," {\n    padding: 0 32px;\n  }\n"])),(0,s.VV)(s.Mq)),l=e(3329),p=function(n){var t=n.children;return(0,l.jsx)(c,{children:(0,l.jsx)(d,{children:t})})}},9757:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,o,a,i,s,c,d,l=e(2791),p=e(5861),u=e(9439),g=e(4687),f=e.n(g),x=e(550),h=e(1213),b=e(9434),k=e(8427),Z=e(6916),m=function(n){return n.tasks.tasks},v=((0,Z.P1)([function(n){return n.tasks.isFetchingTasks},function(n){return n.tasks.isAdding},function(n){return n.tasks.isDeleting},function(n){return n.tasks.isUpdating}],(function(n,t,e,r){return{isFetchingTasks:n,isAdding:t,isDeleting:e,isUpdating:r}})),e(2426)),y=e.n(v),j=e(168),V=e(9549),w=e(399),C=V.Z.div(r||(r=(0,j.Z)([""]))),D=V.Z.div(o||(o=(0,j.Z)(["\n  padding: 28px 14px;\n  max-width: 335px;\n  background-color: var(--primary-bg-color);\n\n  "," {\n    min-width: 704px;\n  }\n\n  "," {\n    min-width: 1087px;\n  }\n"])),(0,w.VV)(w.Mq),(0,w.VV)(w.gv)),M=V.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  gap: 14px;\n  margin-bottom: 40px;\n"]))),A=V.Z.p(i||(i=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n\n  color: var(--secondary-text-color);\n  font-size: 14px;\n  line-height: 1.28;\n\n  ::before {\n    content: '';\n    display: inline-block;\n    width: 8px; /* \u0414\u0456\u0430\u043c\u0435\u0442\u0440 \u043a\u0440\u0443\u0436\u0435\u0447\u043a\u0430 */\n    height: 8px; /* \u0414\u0456\u0430\u043c\u0435\u0442\u0440 \u043a\u0440\u0443\u0436\u0435\u0447\u043a\u0430 */\n    border-radius: 50%; /* \u0420\u043e\u0431\u0438\u043c\u043e \u043a\u0440\u0443\u0436\u0435\u0447\u043e\u043a */\n    margin-right: 5px; /* \u0412\u0456\u0434\u0441\u0442\u0430\u043d\u044c \u043c\u0456\u0436 \u043a\u0440\u0443\u0436\u0435\u0447\u043a\u043e\u043c \u0456 \u0442\u0435\u043a\u0441\u0442\u043e\u043c */\n  }\n"]))),F=(0,V.Z)(A)(s||(s=(0,j.Z)(["\n  ::before {\n    background-color: var(--legend-day); /* \u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u043a\u0440\u0443\u0436\u0435\u0447\u043e\u043a */\n  }\n"]))),E=(0,V.Z)(A)(c||(c=(0,j.Z)(["\n  ::before {\n    background-color: var(--legend-month); /* \u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u0440\u0443\u0436\u0435\u0447\u043e\u043a */\n  }\n"]))),Y=V.Z.p(d||(d=(0,j.Z)(["\n  margin-bottom: 14px;\n\n  color: var(--secondary-text-color);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n"]))),_=e(3329),q=function(){var n=(0,b.I0)(),t=(0,b.v9)(m),e=y()().format("YYYY-MM-DD"),r=(0,l.useState)(e),o=(0,u.Z)(r,1)[0];return(0,l.useEffect)((function(){(0,p.Z)(f().mark((function t(){var e,r,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n((0,k.Cz)());case 2:e=t.sent,r=e.payload,a=r?r.filter((function(n){return n.date===o})):[],console.log(a);case 6:case"end":return t.stop()}}),t)})))()}),[o,n]),(0,l.useEffect)((function(){x.kL.register(h.Z);var n=document.getElementById("myChart"),t=x.kL.getChart(n);t&&t.destroy(),new x.kL(n,{type:"bar",data:{labels:["to-do","in-progress","done"],datasets:[{label:"# of Votes",data:[14,4,24],lab:["".concat(30,"%"),"".concat(50,"%"),"".concat(20,"%")],backgroundColor:"#FFD2DD"},{label:"# of Votes",data:[18,14,13],lab:["".concat(35,"%"),"".concat(55,"%"),"".concat(25,"%")],backgroundColor:"#3E85F3"}]},plugins:[h.Z],options:{parsing:{xAxisKey:"id",yAxisKey:"value"},plugins:{legend:{display:!1},datalabels:{color:"bleak",anchor:"end",align:"top",offset:0,formatter:function(n,t){return t.dataset.lab[t.dataIndex]}}},scales:{y:{beginAtZero:!0}}}})}),[t]),(0,_.jsxs)(D,{children:[(0,_.jsxs)(M,{children:[(0,_.jsx)(F,{children:"By Day"}),(0,_.jsx)(E,{children:"By Month"})]}),(0,_.jsxs)(C,{children:[(0,_.jsx)(Y,{children:"Tasks"}),(0,_.jsx)("canvas",{id:"myChart"})]})]})},z=e(3575),B=function(){return(0,_.jsx)(z.t,{children:(0,_.jsx)(q,{})})}}}]);
//# sourceMappingURL=757.24766d12.chunk.js.map