var ke=Object.defineProperty,Le=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var ee=(t,e,o)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,te=(t,e)=>{for(var o in e||(e={}))Ce.call(e,o)&&ee(t,o,e[o]);if($)for(var o of $(e))De.call(e,o)&&ee(t,o,e[o]);return t},ne=(t,e)=>Le(t,be(e));import{ab as E,G as S,N as we,S as fe,i as de,s as he,O as me,C as b,e as Me,c as Oe,a as Te,d as I,a4 as se,g as _e,a2 as Ae,P as ve,Q as ge,R as pe,z as Ee,q as H,o as j,ac as Be,a5 as G,ae as He,a7 as Se,J as R,K as oe,w as ie,l as ae,x as je,y as re,A as Ge,L as Ne,n as qe,B as le,p as Ie,af as Re,ag as ze,M as Fe,v as Je,aa as Ke}from"./vendor-049c144f.js";import{i as Qe}from"./File.svelte_svelte_type_style_lang-5c39484a.js";const ce=t=>t.clientX||t.changedTouches&&t.changedTouches[0].clientX,ue=t=>t.clientY||t.changedTouches&&t.changedTouches[0].clientY,Ve=typeof window!="undefined",z=Ve&&"ontouchstart"in window;function Ue(){return z?["touchstart","touchmove","touchend","touchcancel"]:["mousedown","mousemove","mouseup","mouseleave"]}function at(t,e,o,a){if(a||t<0)return t;const i=t*o;return i*e/(i+e)}function We(t,e=[]){let o;const a=[];return t.$on=(i,u)=>{let c=we;if(e.includes(i)){const d=t.$$.callbacks[i]||(t.$$.callbacks[i]=[]);return d.push(u),()=>{const r=d.indexOf(u);r!==-1&&d.splice(r,1)}}return o?c=o(i,u):a.push([i,u]),()=>c()},i=>{const u=[],c={},d=r=>S(t,r);o=(r,s)=>{const g=E(i,r,s,!1),P=()=>{g();const X=u.indexOf(P);X>-1&&u.splice(X,1)};return u.push(P),r in c||(c[r]=E(i,r,d)),P};for(const r of a)o(r[0],r[1]);return{destroy:()=>{for(const r of u)r();for(const r of Object.entries(c))r[1]()}}}}function Ze(t){let e,o,a,i;const u=t[4].default,c=me(u,t,t[3],null);let d=[t[2]],r={};for(let s=0;s<d.length;s+=1)r=b(r,d[s]);return{c(){e=Me("div"),c&&c.c(),this.h()},l(s){e=Oe(s,"DIV",{});var f=Te(e);c&&c.l(f),f.forEach(I),this.h()},h(){se(e,r)},m(s,f){_e(s,e,f),c&&c.m(e,null),t[15](e),o=!0,a||(i=[Ae(t[1].call(null,e)),E(e,"click",t[5]),E(e,"dragstart",t[6]),E(e,"mouseover",t[7]),E(e,"mouseout",t[8]),E(e,"blur",t[9]),E(e,"focus",t[10]),E(e,"mouseleave",t[11]),E(e,"pointerleave",t[12]),E(e,"mouseenter",t[13]),E(e,"pointerenter",t[14])],a=!0)},p(s,[f]){c&&c.p&&(!o||f&8)&&ve(c,u,s,s[3],o?pe(u,s[3],f,null):ge(s[3]),null),se(e,r=Ee(d,[f&4&&s[2]]))},i(s){o||(H(c,s),o=!0)},o(s){j(c,s),o=!1},d(s){s&&I(e),c&&c.d(s),t[15](null),a=!1,Be(i)}}}function ye(t,e,o){const a=["this_"];let i=G(e,a),{$$slots:u={},$$scope:c}=e,{this_:d=void 0}=e;const r=We(He());function s(l){S.call(this,t,l)}function f(l){S.call(this,t,l)}function m(l){S.call(this,t,l)}function g(l){S.call(this,t,l)}function P(l){S.call(this,t,l)}function X(l){S.call(this,t,l)}function C(l){S.call(this,t,l)}function v(l){S.call(this,t,l)}function O(l){S.call(this,t,l)}function D(l){S.call(this,t,l)}function _(l){R[l?"unshift":"push"](()=>{d=l,o(0,d)})}return t.$$set=l=>{e=b(b({},e),Se(l)),o(2,i=G(e,a)),"this_"in l&&o(0,d=l.this_),"$$scope"in l&&o(3,c=l.$$scope)},[d,r,i,c,u,s,f,m,g,P,X,C,v,O,D,_]}class xe extends fe{constructor(e){super();de(this,e,ye,Ze,he,{this_:0})}}function $e(t){let e;const o=t[10].default,a=me(o,t,t[12],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,u){a&&a.m(i,u),e=!0},p(i,u){a&&a.p&&(!e||u&4096)&&ve(a,o,i,i[12],e?pe(o,i[12],u,null):ge(i[12]),null)},i(i){e||(H(a,i),e=!0)},o(i){j(a,i),e=!1},d(i){a&&a.d(i)}}}function et(t){let e,o,a,i;const u=[t[4]];function c(s){t[11](s)}var d=t[1];function r(s){let f={$$slots:{default:[$e]},$$scope:{ctx:s}};for(let m=0;m<u.length;m+=1)f=b(f,u[m]);return s[0]!==void 0&&(f.this_=s[0]),{props:f}}return d&&(e=new d(r(t)),R.push(()=>oe(e,"this_",c)),e.$on("dragstart",t[3])),{c(){e&&ie(e.$$.fragment),a=ae()},l(s){e&&je(e.$$.fragment,s),a=ae()},m(s,f){e&&re(e,s,f),_e(s,a,f),i=!0},p(s,[f]){const m=f&16?Ee(u,[Ge(s[4])]):{};if(f&4096&&(m.$$scope={dirty:f,ctx:s}),!o&&f&1&&(o=!0,m.this_=s[0],Ne(()=>o=!1)),d!==(d=s[1])){if(e){qe();const g=e;j(g.$$.fragment,1,0,()=>{le(g,1)}),Ie()}d?(e=new d(r(s)),R.push(()=>oe(e,"this_",c)),e.$on("dragstart",s[3]),ie(e.$$.fragment),H(e.$$.fragment,1),re(e,a.parentNode,a)):e=null}else d&&e.$set(m)},i(s){i||(e&&H(e.$$.fragment,s),i=!0)},o(s){e&&j(e.$$.fragment,s),i=!1},d(s){s&&I(a),e&&le(e,s)}}}const Y=Ue(),tt=(t,e)=>({startX:t,startY:e,startT:new Date,duration:0,isPressed:!0,isY:!1,isX:!1,isSlideX:!1,isSlideY:!1,isSlide:!1,shiftX:0,shiftY:0,shiftXAbs:0,shiftYAbs:0});function nt(t,e,o){const a=["component","usePointerHover","useCapture","slideThreshold","noSlideClick","stopPropagation","container"];let i=G(e,a),u,{$$slots:c={},$$scope:d}=e;const r=Re(),s=ze.$$.callbacks;let{component:f=xe}=e,{usePointerHover:m=!1}=e,{useCapture:g=!1}=e,{slideThreshold:P=5}=e,{noSlideClick:X=!1}=e,{stopPropagation:C=!1}=e,{container:v=void 0}=e;const O=Qe();Fe(t,O,n=>o(16,u=n));let D=!1,_={};const l=(n,p)=>{C&&n.stopPropagation(),p.forEach(k=>{var L,T;const M=Date.now()-((T=(L=_==null?void 0:_.startT)==null?void 0:L.getTime())!=null?T:0);k&&r(k,ne(te({},_),{duration:M,originalEvent:n}))})};Je(()=>{const n={capture:g,passive:!1};return v.addEventListener(Y[0],J,n),v.addEventListener(m?"pointerenter":"mouseenter",F),v.addEventListener(m?"pointerleave":"mouseleave",N),v.addEventListener("click",Q,{capture:!0}),()=>{v.removeEventListener(Y[0],J,n),v.removeEventListener(m?"pointerenter":"mouseenter",F),v.removeEventListener(m?"pointerleave":"mouseleave",N),v.removeEventListener("click",Q,{capture:!0})}});const F=n=>{r("enter",n)},N=n=>{r("leave",n)},J=n=>{_=tt(ce(n),ue(n)),l(n,["start","startX","startY"]),Pe(z?n.target:u.document)},K=n=>{const{isPressed:p,isX:k,isY:M,startX:L=0,startY:T=0}=_;if(p){const V=ce(n)-L,U=ue(n)-T,A=Math.abs(V),B=Math.abs(U);if(!!n.touches&&n.touches.length>1)return w(n);if(!k&&!M){const W=A>=P&&A>B,Z=B>=P&&B>A,y=W&&(!!s.moveX||!!s.move),x=Z&&(!!s.moveY||!!s.move);Object.assign(_,{isY:Z,isX:W,isSlideX:y,isSlideY:x,isSlide:y||x})}_.isSlide&&(Object.assign(_,{shiftX:V,shiftY:U,shiftXAbs:A,shiftYAbs:B}),l(n,["move",_.isSlideX&&"moveX",_.isSlideY&&"moveY"]))}},w=n=>{const{isPressed:p,isSlide:k,isSlideX:M,isSlideY:L}=_;p&&l(n,["end",L&&"endY",M&&"endX"]),D=Boolean(k),_={},z&&N(n),q()};let h;const Pe=n=>{q(),h=n;const p={capture:g,passive:!1};h==null||h.addEventListener(Y[1],K,p),h==null||h.addEventListener(Y[2],w,p),h==null||h.addEventListener(Y[3],w,p)},q=()=>{if(!h)return;const n={capture:g,passive:!1};h==null||h.removeEventListener(Y[1],K,n),h==null||h.removeEventListener(Y[2],w,n),h==null||h.removeEventListener(Y[3],w,n)};Ke(q);const Xe=n=>{const p=n.target;(p.tagName==="A"||p.tagName==="IMG")&&n.preventDefault()},Q=n=>{if(!D)return r("click",n);n.target.closest("a")&&n.preventDefault(),X?n.stopPropagation():r("click",n),D=!1};function Ye(n){v=n,o(0,v)}return t.$$set=n=>{e=b(b({},e),Se(n)),o(4,i=G(e,a)),"component"in n&&o(1,f=n.component),"usePointerHover"in n&&o(5,m=n.usePointerHover),"useCapture"in n&&o(6,g=n.useCapture),"slideThreshold"in n&&o(7,P=n.slideThreshold),"noSlideClick"in n&&o(8,X=n.noSlideClick),"stopPropagation"in n&&o(9,C=n.stopPropagation),"container"in n&&o(0,v=n.container),"$$scope"in n&&o(12,d=n.$$scope)},[v,f,O,Xe,i,m,g,P,X,C,c,Ye,d]}class rt extends fe{constructor(e){super();de(this,e,nt,et,he,{component:1,usePointerHover:5,useCapture:6,slideThreshold:7,noSlideClick:8,stopPropagation:9,container:0})}}export{xe as D,rt as T,ce as a,ue as b,We as c,at as r};
