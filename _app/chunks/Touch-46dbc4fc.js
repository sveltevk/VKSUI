var Yt=Object.defineProperty,St=Object.defineProperties;var wt=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var T=(e,t,i)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,P=(e,t)=>{for(var i in t||(t={}))kt.call(t,i)&&T(e,i,t[i]);if(R)for(var i of R(t))Dt.call(t,i)&&T(e,i,t[i]);return e},A=(e,t)=>St(e,wt(t));import{ab as g,a5 as b,M as Lt,S as it,i as at,s as rt,N as ct,C as S,e as Ct,c as Mt,a as Pt,d as G,a0 as y,g as ut,aa as At,O as lt,P as ft,Q as dt,z as ht,q as O,o as B,ac as Ot,a2 as N,ad as Bt,a4 as _t,I as J,J as $,w as x,l as tt,x as Nt,y as et,A as It,K as jt,n as qt,B as st,p as zt,ae as Ft,a7 as Gt,X as Jt,v as Kt,W as Qt,Z as Ut}from"./vendor-3f5aaa84.js";import{b as Vt}from"./File.svelte_svelte_type_style_lang-4a5bcc41.js";const nt=e=>e.clientX||e.changedTouches&&e.changedTouches[0].clientX,ot=e=>e.clientY||e.changedTouches&&e.changedTouches[0].clientY,Wt=typeof window!="undefined",k=Wt&&"ontouchstart"in window;function Zt(){return k?["touchstart","touchmove","touchend","touchcancel"]:["mousedown","mousemove","mouseup","mouseleave"]}function Ht(e,t=[]){let i;const c=[];return e.$on=(a,u)=>{let l=Lt;if(t.includes(a)){const d=e.$$.callbacks[a]||(e.$$.callbacks[a]=[]);return d.push(u),()=>{const o=d.indexOf(u);o!==-1&&d.splice(o,1)}}return i?l=i(a,u):c.push([a,u]),()=>l()},a=>{const u=[],l={},d=o=>b(e,o);i=(o,s)=>{const m=g(a,o,s,!1),_=()=>{m();const h=u.indexOf(_);h>-1&&u.splice(h,1)};return u.push(_),o in l||(l[o]=g(a,o,d)),_};for(const o of c)i(o[0],o[1]);return{destroy:()=>{for(const o of u)o();for(const o of Object.entries(l))o[1]()}}}}function Rt(e){let t,i,c,a;const u=e[4].default,l=ct(u,e,e[3],null);let d=[e[2]],o={};for(let s=0;s<d.length;s+=1)o=S(o,d[s]);return{c(){t=Ct("div"),l&&l.c(),this.h()},l(s){t=Mt(s,"DIV",{});var f=Pt(t);l&&l.l(f),f.forEach(G),this.h()},h(){y(t,o)},m(s,f){ut(s,t,f),l&&l.m(t,null),e[15](t),i=!0,c||(a=[At(e[1].call(null,t)),g(t,"click",e[5]),g(t,"dragstart",e[6]),g(t,"mouseover",e[7]),g(t,"mouseout",e[8]),g(t,"blur",e[9]),g(t,"focus",e[10]),g(t,"mouseleave",e[11]),g(t,"pointerleave",e[12]),g(t,"mouseenter",e[13]),g(t,"pointerenter",e[14])],c=!0)},p(s,[f]){l&&l.p&&(!i||f&8)&&lt(l,u,s,s[3],i?dt(u,s[3],f,null):ft(s[3]),null),y(t,o=ht(d,[f&4&&s[2]]))},i(s){i||(O(l,s),i=!0)},o(s){B(l,s),i=!1},d(s){s&&G(t),l&&l.d(s),e[15](null),c=!1,Ot(a)}}}function Tt(e,t,i){const c=["this_"];let a=N(t,c),{$$slots:u={},$$scope:l}=t,{this_:d=void 0}=t;const o=Ht(Bt());function s(r){b.call(this,e,r)}function f(r){b.call(this,e,r)}function p(r){b.call(this,e,r)}function m(r){b.call(this,e,r)}function _(r){b.call(this,e,r)}function h(r){b.call(this,e,r)}function w(r){b.call(this,e,r)}function I(r){b.call(this,e,r)}function j(r){b.call(this,e,r)}function D(r){b.call(this,e,r)}function L(r){J[r?"unshift":"push"](()=>{d=r,i(0,d)})}return e.$$set=r=>{t=S(S({},t),_t(r)),i(2,a=N(t,c)),"this_"in r&&i(0,d=r.this_),"$$scope"in r&&i(3,l=r.$$scope)},[d,o,a,l,u,s,f,p,m,_,h,w,I,j,D,L]}class yt extends it{constructor(t){super();at(this,t,Tt,Rt,rt,{this_:0})}}function $t(e){let t;const i=e[8].default,c=ct(i,e,e[14],null);return{c(){c&&c.c()},l(a){c&&c.l(a)},m(a,u){c&&c.m(a,u),t=!0},p(a,u){c&&c.p&&(!t||u&16384)&&lt(c,i,a,a[14],t?dt(i,a[14],u,null):ft(a[14]),null)},i(a){t||(O(c,a),t=!0)},o(a){B(c,a),t=!1},d(a){c&&c.d(a)}}}function xt(e){let t,i,c,a;const u=[e[6]];function l(s){e[9](s)}var d=e[1];function o(s){let f={$$slots:{default:[$t]},$$scope:{ctx:s}};for(let p=0;p<u.length;p+=1)f=S(f,u[p]);return s[0]!==void 0&&(f.this_=s[0]),{props:f}}return d&&(t=new d(o(e)),J.push(()=>$(t,"this_",l)),t.$on("click",e[5]),t.$on("dragstart",e[4]),t.$on("mouseleave",e[10]),t.$on("pointerleave",e[11]),t.$on("mouseenter",e[12]),t.$on("pointerenter",e[13])),{c(){t&&x(t.$$.fragment),c=tt()},l(s){t&&Nt(t.$$.fragment,s),c=tt()},m(s,f){t&&et(t,s,f),ut(s,c,f),a=!0},p(s,[f]){const p=f&64?ht(u,[It(s[6])]):{};if(f&16384&&(p.$$scope={dirty:f,ctx:s}),!i&&f&1&&(i=!0,p.this_=s[0],jt(()=>i=!1)),d!==(d=s[1])){if(t){qt();const m=t;B(m.$$.fragment,1,0,()=>{st(m,1)}),zt()}d?(t=new d(o(s)),J.push(()=>$(t,"this_",l)),t.$on("click",s[5]),t.$on("dragstart",s[4]),t.$on("mouseleave",s[10]),t.$on("pointerleave",s[11]),t.$on("mouseenter",s[12]),t.$on("pointerenter",s[13]),x(t.$$.fragment),O(t.$$.fragment,1),et(t,c.parentNode,c)):t=null}else d&&t.$set(p)},i(s){a||(t&&O(t.$$.fragment,s),a=!0)},o(s){t&&B(t.$$.fragment,s),a=!1},d(s){s&&G(c),t&&st(t,s)}}}const E=Zt();function te(e,t,i){const c=["component","useCapture","container"];let a=N(t,c),u,{$$slots:l={},$$scope:d}=t;const o=Ft(),s=Gt.$$.callbacks,f=Vt();Jt(e,f,n=>i(17,u=n));let{component:p=yt}=t,{useCapture:m=!1}=t,{container:_=void 0}=t,h={},w=!1;Kt(()=>{Qt&&(_.addEventListener(E[0],D,{capture:m,passive:!1}),k&&K(_)),_.addEventListener("mouseenter",I,{capture:m,passive:!0}),_.addEventListener("mouseleave",j,{capture:m,passive:!0})}),Ut(()=>{_==null||_.removeEventListener(E[0],D),k&&Q(_)});const I=n=>{o("enter",n)},j=n=>{o("leave",n)},D=n=>{h={startX:nt(n),startY:ot(n),startT:new Date,isPressed:!0};const v=A(P({},h),{originalEvent:n});o("start",v),o("startX",v),o("startY",v),!k&&K(u.document)},L=n=>{const{isPressed:v,isX:q,isY:z,startX:F,startY:U}=h;if(v){const X=nt(n)-F,V=ot(n)-U,C=Math.abs(X),M=Math.abs(V);if(!!n.touches&&n.touches.length>1)return r(n);if(!q&&!z){let Y=C>=5&&C>M,W=M>=5&&M>C,Z=Y&&!!s.moveX||!!s.move,H=W&&!!s.moveY||!!s.move;h.isY=W,h.isX=Y,h.isSlideX=Z,h.isSlideY=H,h.isSlide=Z||H}if(h.isSlide){h.shiftX=X,h.shiftY=V,h.shiftXAbs=C,h.shiftYAbs=M;const Y=A(P({},h),{originalEvent:n});o("move",Y),h.isSlideX&&o("moveX",Y),h.isSlideY&&o("moveY",Y)}}},r=n=>{const{isPressed:v,isSlide:q,isSlideX:z,isSlideY:F}=h;if(v){const X=A(P({},h),{originalEvent:n});o("end",X),F&&o("endY",X),z&&o("endX",X)}w=n.target.tagName==="A"&&q,h={},!k&&Q(u.document)},K=n=>{const v={capture:m,passive:!1};n==null||n.addEventListener(E[1],L,v),n==null||n.addEventListener(E[2],r,v),n==null||n.addEventListener(E[3],r,v)},Q=n=>{const v={capture:m,passive:!1};n==null||n.removeEventListener(E[1],L,v),n==null||n.removeEventListener(E[2],r,v),n==null||n.removeEventListener(E[3],r,v)},vt=n=>{const v=n.target;(v.tagName==="A"||v.tagName==="IMG")&&n.preventDefault()},mt=n=>{w&&(w=!1,n.preventDefault()),o("click",n)};function pt(n){_=n,i(0,_)}const gt=()=>o("leave"),bt=()=>o("leave"),Et=()=>o("enter"),Xt=()=>o("enter");return e.$$set=n=>{t=S(S({},t),_t(n)),i(6,a=N(t,c)),"component"in n&&i(1,p=n.component),"useCapture"in n&&i(7,m=n.useCapture),"container"in n&&i(0,_=n.container),"$$scope"in n&&i(14,d=n.$$scope)},[_,p,o,f,vt,mt,a,m,l,pt,gt,bt,Et,Xt,d]}class oe extends it{constructor(t){super();at(this,t,te,xt,rt,{component:1,useCapture:7,container:0})}}export{yt as D,oe as T,nt as a,ot as b,Ht as c};