(this.webpackJsonplabeling=this.webpackJsonplabeling||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var r,a,c,u,o,i,l,s,f=n(0),b=n.n(f),v=n(16),d=n.n(v),h=(n(87),n(19)),g=n(28),p=n(151),m=n(150),w=(n(88),n(147)),O=n(81),E=n(148),k=n(152),j=n(60),x={dist:function(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))},add:function(e,t){return[e[0]+t[0],e[1]+t[1]]},sub:function(e,t){return[e[0]-t[0],e[1]-t[1]]},mul:function(e,t){return[e[0]*t,e[1]*t]},sum:function(e){return e.reduce((function(e,t){return x.add(e,t)}),[0,0])},nbrs:function(e){return[[e[0]-1,e[1]-1],[e[0],e[1]-1],[e[0]+1,e[1]-1],[e[0]+1,e[1]],[e[0]+1,e[1]+1],[e[0],e[1]+1],[e[0]-1,e[1]+1],[e[0]-1,e[1]]]},closeNbrs:function(e){return[[e[0],e[1]-1],[e[0]+1,e[1]],[e[0],e[1]+1],[e[0]-1,e[1]]]}},y=function(e,t){return t[0]>=0&&t[1]>=0&&t[0]<e.cols&&t[1]<e.rows?e.ucharPtr(t[0],t[1])[0]:0},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[t,y(e,t)],a=r[0],c=r[1];if(0===c)return a;for(var u=function(t){var r=x.nbrs(a),u=r.map((function(t){return y(e,t)})),o=Math.max.apply(Math,Object(j.a)(u));if(o===c)return"break";var i=u.map((function(e,t){return e===o?t:-1})).filter((function(e){return e>-1}));if(n&&255===o)return"break";u=u.filter((function(e,t){return i.includes(t)})),r=r.filter((function(e,t){return i.includes(t)}));var l=x.sub(x.mul(x.sum(r),1/i.length),a),s=r.map((function(e){return x.dist(e,l)}));return a=r[s.indexOf(Math.min.apply(Math,Object(j.a)(s)))],255===(c=o)?"break":void 0},o=0;o<20;o++){var i=u(o);if("break"===i)break}return a},M=function(e,t){var n=x.nbrs(t).map((function(t){return y(e,t)})).map((function(e){return 255===e?1:0})),r=0;if(n[7]&&n[0]&&n[1]||n[1]&&n[2]&&n[3]||n[3]&&n[4]&&n[5]||n[5]&&n[6]&&n[7])return!0;for(var a=0;a<8;a++)r+=n[a]^n[(a+1)%8];return r>4},B=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(255!==y(e,t))return[];if(M(e,t))return[t];var r=[],a=[],c={};for(a.push(t);a.length;){var u=a.pop();if(!c[u.toString()]){c[u.toString()]=!0,r.push(u);var o=x.nbrs(u).filter((function(t){return 255===y(e,t)})),i=o.filter((function(t){return M(e,t)}));i.length?n&&i.forEach((function(e){return r.push(e)})):o.forEach((function(e){return a.push(e)}))}}return r},R=function(e,t){if(255===y(e,t))return!1;var n=x.nbrs(t).map((function(t){return y(e,t)})).map((function(e){return 255===e?1:0}));if(n.reduce((function(e,t){return e+t}),0)>=7)return!0;for(var r=0,a=0;a<8;a++)r+=n[a]^n[(a+1)%8];return r>=4},S=function(e,t){var n=function(t){return e.filter((function(e){return 255===y(e,t)})).length>0};if(n(t))return[];var r=[],a=[],c={};for(a.push(t);a.length;){var u=a.pop();if(!c[u.toString()])if(c[u.toString()]=!0,r.push(u),x.closeNbrs(u).filter((function(e){return!n(e)})).filter((function(e){return!c[e.toString()]})).forEach((function(e){return a.push(e)})),r.length>1e3)break}return r},W=function(e){return cv.imshow("canvas",e)},N=function(e,t){if(o.copyTo(e),t.showEdge){var n=new cv.Mat.zeros(i.rows,i.cols,i.type());t.showEdgeValley?cv.add(i,n,n):cv.threshold(i,n,254,255,cv.THRESH_BINARY),cv.cvtColor(n,n,cv.COLOR_GRAY2RGBA),cv.addWeighted(e,t.bgWeight,n,t.edgeWeight,0,e),n.delete()}var r=new cv.Mat;cv.threshold(l,r,254,255,cv.THRESH_BINARY);var a=new cv.Mat;cv.cvtColor(r,a,cv.COLOR_GRAY2RGBA);var c=new cv.Mat(a.rows,a.cols,a.type(),t.labelColor.map((function(e){return 255-e})));cv.subtract(a,c,a,r),cv.add(e,a,e),cv.subtract(e,c,e,r),r.delete(),a.delete(),c.delete()},V=function(e){cv.threshold(e,e,254,255,cv.THRESH_BINARY);for(var t=2;t<6;t++){var n=cv.Mat.ones(t,t,cv.CV_8U),r=new cv.Mat;cv.dilate(e,r,n,new cv.Point(-1,-1),1,cv.BORDER_CONSTANT,cv.morphologyDefaultBorderValue()),cv.addWeighted(e,.8,r,.2,0,e),n.delete(),r.delete()}},A=function(){return Object(h.a)({},u)},T=function(e){e.x>=0&&e.y>=0&&e.x+e.width<r.cols&&e.y+e.height<r.rows&&(u&&(s.delete(),o.delete(),i.delete(),l.delete()),s=new cv.Mat(e.height,e.width,r.type()),o=r.roi(e),i=a.roi(e),l=c.roi(e),u=e)},G={showEdge:!0,showEdgeValley:!1,labelColor:[255,255,0,255],bgWeight:1,edgeWeight:.4},L=new w.a(G),_=new O.a,I=new O.a,Y=new O.a,H=new O.a,D=new O.a,F={setVal:function(e,t,n){t[0]>=0&&t[1]>=0&&t[0]<e.cols&&t[1]<e.rows&&e.ucharPtr(t[0],t[1]).set(n)},dimBy:function(e,t){var n=new cv.Mat(e.rows,e.cols,e.type(),[0,0,0,t]);cv.subtract(e,n,e),n.delete()}};L.pipe(Object(E.a)((function(){return s}))).subscribe((function(){N(s,L.value),W(s)})),_.pipe(Object(k.a)(T)).subscribe((function(){V(i),N(s,L.value),W(s)})),I.pipe(Object(k.a)((function(e){r=cv.imread(e),a=new cv.Mat,cv.cvtColor(r,a,cv.COLOR_RGB2GRAY,0),cv.Canny(a,a,50,100,3,!1),c=new cv.Mat.zeros(a.rows,a.cols,a.type()),T({x:550,y:450,width:500,height:500}),V(i)}))).subscribe((function(){return D.next((function(e,t){return t.dimBy(e,96)}))})),Y.pipe(Object(E.a)((function(){return i})),Object(k.a)((function(e){return e(i,F)}))).subscribe((function(){V(i),N(s,L.value),W(s)})),H.pipe(Object(E.a)((function(){return l})),Object(k.a)((function(e){return e(l,F)}))).subscribe((function(){N(s,L.value),W(s)})),D.pipe(Object(E.a)((function(){return s})),Object(k.a)((function(){return N(s,L.value)})),Object(k.a)((function(e){return e(s,F)}))).subscribe((function(){W(s)}));n(89);var U={0:[1,2,3],1:[1,3],2:[2,3],3:[3],4:[3],5:[0]},P={0:[0,0,0,0],1:[0,255,255,255],2:[255,0,255,255],3:[255,0,0,255]},z=[],J=function(e,t){var n=e.getBoundingClientRect();return[(t.clientX-n.left)/n.width,(t.clientY-n.top)/n.height]},q=function(e,t){var n=t.map((function(t,n){return Math.floor(t*[e.width,e.height][n])}));return[n[1],n[0]]};function K(){var e=Object(f.useState)(!1),t=Object(g.a)(e,2),n=t[0],r=t[1],a=Object(f.useState)(0),c=Object(g.a)(a,2),u=c[0],o=c[1],s=Object(f.useState)(1),v=Object(g.a)(s,2),d=v[0],w=v[1],O=Object(f.useState)(!1),E=Object(g.a)(O,2),k=E[0],j=E[1],x=Object(f.useState)([-1,-1]),M=Object(g.a)(x,2),W=M[0],N=M[1],V=Object(f.useRef)(null),T=Object(f.useCallback)((function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(d){case 0:t=[];break;case 3:t=[e];break;case 1:t=B(i,C(i,e));break;case 2:t=[C(i,e,!0)].filter((function(e){return y(i,e)}))}if(5===u){if(!k)return;var r=A();_.next({x:r.x+W[1]-e[1],y:r.y+W[0]-e[0],width:500,height:500}),z.push({action:5,targets:[W,e]})}else if(0===u||!k&&!n)D.next((function(e,n){return t.forEach((function(t){return n.setVal(e,t,P[d])}))}));else{if(!t.length)return;switch(u){case 1:t=t.filter((function(e){return y(i,e)})),Y.next((function(e,n){return t.forEach((function(t){return n.setVal(e,t,[0])}))}));break;case 2:Y.next((function(e,n){return t.forEach((function(t){return n.setVal(e,t,[255])}))}));break;case 3:for(var a=t.pop(),c=20,o=a[0]-c;o<a[0]+c;o++)for(var s=a[1]-c;s<a[1]+c;s++)t.push([o,s]);t=t.filter((function(e){return R(i,e)})),Y.next((function(e,n){return t.forEach((function(t){return n.setVal(e,t,[255])}))}));break;case 4:t=S([i,l],t[0]),H.next((function(e,n){return t.forEach((function(t){return n.setVal(e,t,[255])}))}))}if(!t.length)return;z.push({action:u,targets:t})}}),[u,d,k,W]),F=Object(f.useCallback)((function(e){switch(e.action){case 1:Y.next((function(t,n){return e.targets.forEach((function(e){return n.setVal(t,e,[255])}))}));break;case 2:case 3:Y.next((function(t,n){return e.targets.forEach((function(e){return n.setVal(t,e,[0])}))}));break;case 4:H.next((function(t,n){return e.targets.forEach((function(e){return n.setVal(t,e,[0])}))}));break;case 5:var t=A();_.next({x:t.x+e.targets[1][1]-e.targets[0][1],y:t.y+e.targets[1][0]-e.targets[0][0],width:500,height:500})}}),[]),K=Object(f.useCallback)((function(e){I.next(e.currentTarget)}),[]),X=Object(f.useCallback)((function(e){D.next((function(e,t){n||t.dimBy(e,48)}))}),[n]),Z=Object(f.useCallback)((function(e){D.next((function(e,t){n||t.dimBy(e,96)}))}),[n]),$=Object(f.useCallback)((function(e){if(n&&A()){var t=q(A(),J(e.currentTarget,e));t.toString()!==W.toString()&&(T(t),N(t))}}),[n,W,T]),Q=Object(f.useCallback)((function(e){if(n&&(j(!0),0!==u&&A())){var t=q(A(),J(e.currentTarget,e));T(t,!0)}}),[n,u,T]),ee=Object(f.useCallback)((function(e){j(!1)}),[]),te=Object(f.useCallback)((function(e,t){if(d!==e){for(;U[t].indexOf(e)<0;)e=(e+1)%3;w(e)}if(u!==t)switch(o(t),t){case 1:w(1),L.next(Object(h.a)({},G,{showEdgeValley:!0,bgWeight:.5}));break;case 2:w(2),L.next(Object(h.a)({},G,{bgWeight:.8,edgeWeight:.8}));break;case 3:w(3),L.next(Object(h.a)({},G,{bgWeight:.8,edgeWeight:.8}));break;case 4:w(3),L.next(Object(h.a)({},G,{bgWeight:.6}));break;case 5:w(0),L.next(G);break;default:w(1),L.next(G)}}),[d,u]),ne=Object(f.useCallback)((function(e){N([-1,-1]);var t=d,n=u;switch(e.key){case"f":t=(d+1)%3;break;case"z":z.length&&F(z.pop());break;case"w":n=1;break;case"e":n=2;break;case"r":n=3;break;case"d":n=4;break;case"m":n=5;break;default:n=0}te(t,n)}),[u,d,F,te]),re=Object(f.useCallback)((function(){r(!0)}),[]),ae=Object(f.useCallback)((function(){r(!1),D.next((function(e,t){return t.dimBy(e,96)}))}),[]);return b.a.createElement("div",{className:"App"},b.a.createElement("div",{className:"input"},b.a.createElement("img",{id:"imageSrc",alt:"Canvas Input",ref:V,onLoad:K,style:{display:"none"}}),b.a.createElement("input",{type:"file",id:"fileInput",name:"file",onChange:function(e){V.current.src=URL.createObjectURL(e.target.files[0])}})),b.a.createElement("div",{className:"radio"},b.a.createElement("span",null,"Action: "),b.a.createElement(p.a.Group,{value:u,onChange:function(e){return te(d,e.target.value)},disabled:!A()},b.a.createElement(p.a.Button,{value:0},"No Action"),b.a.createElement(p.a.Button,{value:1},"Wipe Edge (W)"),b.a.createElement(p.a.Button,{value:2},"Draw Edge (E)"),b.a.createElement(p.a.Button,{value:3},"Repair Edge (R)"),b.a.createElement(p.a.Button,{value:4},"Fill Label (D)"),b.a.createElement(p.a.Button,{value:5},"Move Canvas (M)"))),b.a.createElement("div",{className:"radio"},b.a.createElement("span",null,"Cursor (F): "),b.a.createElement(p.a.Group,{value:d,onChange:function(e){return te(e.target.value,u)},disabled:!A()},b.a.createElement(p.a.Button,{value:1,disabled:U[u].indexOf(1)<0},"Fall to Edge"),b.a.createElement(p.a.Button,{value:2,disabled:U[u].indexOf(2)<0},"Adhere to Edge"),b.a.createElement(p.a.Button,{value:3,disabled:U[u].indexOf(3)<0},"Floating")),b.a.createElement(m.a,{className:"undo",type:"danger",ghost:!0,onClick:function(){z.length&&F(z.pop())},disabled:!A()},"Undo (Z)")),b.a.createElement("div",{className:"canvas"},b.a.createElement("canvas",{id:"canvas",className:5===u?"moving":"",onMouseEnter:X,onMouseLeave:Z,onMouseMove:$,onMouseDown:Q,onMouseUp:ee,onKeyPress:ne,onFocus:re,onBlur:ae,tabIndex:1e3})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(b.a.createElement(b.a.StrictMode,null,b.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,n){e.exports=n(143)},87:function(e,t,n){},89:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.8d356ffa.chunk.js.map