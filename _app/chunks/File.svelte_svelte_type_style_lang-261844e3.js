var vt=Object.defineProperty;var ze=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var We=(l,e,a)=>e in l?vt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,Oe=(l,e)=>{for(var a in e||(e={}))dt.call(e,a)&&We(l,a,e[a]);if(ze)for(var a of ze(e))mt.call(e,a)&&We(l,a,e[a]);return l};import{Z as ee,D as k,_ as Z,$ as Me,a0 as Ze,S as z,i as W,s as O,O as M,P as A,Q as S,R as C,q as g,o as y,r as R,e as j,c as J,a as Q,d as E,b as Ae,a1 as I,g as w,a2 as je,a3 as Je,C as D,k as he,m as ge,a4 as X,T as Be,n as oe,p as ie,z as me,a5 as G,a6 as Qe,M as B,a7 as pe,N as Se,w as Y,x as K,y as U,B as F,a8 as re,f as $,l as _e,J as xe,v as ye,a9 as pt,aa as be}from"./vendor-049c144f.js";const $e="vkui_DOMContext",ue=()=>({window:Z?window:void 0,document:Z?document:void 0}),Ce=()=>ee($e)||k(ue());var ne=(l=>(l.ANDROID="android",l.IOS="ios",l.VKCOM="vkcom",l))(ne||{});const ht="android",gt="ios",ke="vkcom";function Ee(l){const e=l||Z&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(e)?gt:ht}var P=(l=>(l.isWebView="vkui_isWebView",l.webviewType="vkui_webviewType",l.scheme="vkui_scheme",l.appearance="vkui_appearance",l.classAppearance="vkui_classAppearance",l.app="vkui_app",l.transitionMotionEnabled="vkui_transitionMotionEnabled",l.platform="vkui_platform",l.hasNewTokens="vkui_hasNewTokens",l))(P||{}),et=(l=>(l.VKAPPS="vkapps",l.INTERNAL="internal",l))(et||{});function tt(){return ee(P.platform)||k(Ee())}function we(l,e=Ee()){return`${l} ${l}--${e}`}const lt="vkui_AdaptivityContext";var fe=(l=>(l.COMPACT="compact",l.REGULAR="regular",l))(fe||{}),st=(l=>(l[l.SMALL_MOBILE=1]="SMALL_MOBILE",l[l.MOBILE=2]="MOBILE",l[l.SMALL_TABLET=3]="SMALL_TABLET",l[l.TABLET=4]="TABLET",l[l.DESKTOP=5]="DESKTOP",l))(st||{}),at=(l=>(l[l.EXTRA_SMALL=1]="EXTRA_SMALL",l[l.SMALL=2]="SMALL",l[l.MEDIUM=3]="MEDIUM",l))(at||{});const yt=1280,bt=1024,kt=768,Mt=320,At=414,St=720,Ne=(l,e,a)=>{var _,v;let t=1,s=2,n="regular",r="regular";const i=(_=a.hasMouse)!=null?_:Me,o=(v=a.deviceHasHover)!=null?v:Ze;return l>=yt?t=5:l>=bt?t=4:l>=kt?t=3:l>=Mt?t=2:t=1,e>=St?s=3:e>At?s=2:s=1,a.viewWidth&&(t=a.viewWidth),a.viewHeight&&(s=a.viewHeight),t<=2&&(r="compact"),(t>=3&&i||s<=1)&&(n="compact"),a.sizeX&&(r=a.sizeX),a.sizeY&&(n=a.sizeY),{viewWidth:t,viewHeight:s,sizeX:r,sizeY:n,hasMouse:i,deviceHasHover:o}};function nt(){return ee(lt)||k({sizeX:fe.COMPACT,sizeY:fe.REGULAR,hasMouse:Me,deviceHasHover:Ze})}function ce(...l){const e=[];return l.forEach(a=>{if(!!a)switch(typeof a){case"string":e.push(a);break;case"object":Object.keys(a).forEach(t=>{a[t]&&e.push(t)});break;default:e.push(`${a}`)}}),e.join(" ")}function ot(l,e){let a;async function t(n){n!==null&&(a=n,a.appendChild(l),l.hidden=!1)}function s(){l.parentNode&&l.parentNode.removeChild(l)}return t(e),{update:t,destroy:s}}function Ct(l){let e;const a=l[2].default,t=M(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&A(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}const it="vkui_AppRootContext",Et=()=>ee(it)||k({portalRoot:null});function Tt(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={portalRoot:null}}=e;const r=k(n);return R(it,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class rt extends z{constructor(e){super();W(this,e,Tt,Ct,O,{value:0})}}const Lt=l=>({}),Ve=l=>({}),Rt=l=>({}),Xe=l=>({});function Ge(l){let e,a,t,s,n;const r=l[10].popout,i=M(r,l,l[9],Xe);return{c(){e=j("div"),i&&i.c(),this.h()},l(o){e=J(o,"DIV",{class:!0});var _=Q(e);i&&i.l(_),_.forEach(E),this.h()},h(){e.hidden=!0,Ae(e,"class","svelte-kv3azb"),I(e,"PopoutRoot--absolute",l[2]),I(e,"PopoutRoot__popout",!l[2])},m(o,_){w(o,e,_),i&&i.m(e,null),t=!0,s||(n=je(a=l[5].call(null,e,l[3].portalRoot)),s=!0)},p(o,_){i&&i.p&&(!t||_&512)&&A(i,r,o,o[9],t?C(r,o[9],_,Rt):S(o[9]),Xe),a&&Je(a.update)&&_&8&&a.update.call(null,o[3].portalRoot),_&4&&I(e,"PopoutRoot--absolute",o[2]),_&4&&I(e,"PopoutRoot__popout",!o[2])},i(o){t||(g(i,o),t=!0)},o(o){y(i,o),t=!1},d(o){o&&E(e),i&&i.d(o),s=!1,n()}}}function Ye(l){let e,a,t,s,n;const r=l[10].modal,i=M(r,l,l[9],Ve);return{c(){e=j("div"),i&&i.c(),this.h()},l(o){e=J(o,"DIV",{class:!0});var _=Q(e);i&&i.l(_),_.forEach(E),this.h()},h(){e.hidden=!0,Ae(e,"class","PopoutRoot__modal svelte-kv3azb")},m(o,_){w(o,e,_),i&&i.m(e,null),t=!0,s||(n=je(a=ot.call(null,e,l[3].portalRoot)),s=!0)},p(o,_){i&&i.p&&(!t||_&512)&&A(i,r,o,o[9],t?C(r,o[9],_,Lt):S(o[9]),Ve),a&&Je(a.update)&&_&8&&a.update.call(null,o[3].portalRoot)},i(o){t||(g(i,o),t=!0)},o(o){y(i,o),t=!1},d(o){o&&E(e),i&&i.d(o),s=!1,n()}}}function Pt(l){let e,a,t,s,n;const r=l[10].default,i=M(r,l,l[9],null);let o=l[0]&&Ge(l),_=l[1]&&Ye(l),v=[l[7],{class:s=ce(l[7].class,"PopoutRoot")}],f={};for(let u=0;u<v.length;u+=1)f=D(f,v[u]);return{c(){e=j("div"),i&&i.c(),a=he(),o&&o.c(),t=he(),_&&_.c(),this.h()},l(u){e=J(u,"DIV",{class:!0});var c=Q(e);i&&i.l(c),a=ge(c),o&&o.l(c),t=ge(c),_&&_.l(c),c.forEach(E),this.h()},h(){X(e,f),I(e,"svelte-kv3azb",!0)},m(u,c){w(u,e,c),i&&i.m(e,null),Be(e,a),o&&o.m(e,null),Be(e,t),_&&_.m(e,null),n=!0},p(u,[c]){i&&i.p&&(!n||c&512)&&A(i,r,u,u[9],n?C(r,u[9],c,null):S(u[9]),null),u[0]?o?(o.p(u,c),c&1&&g(o,1)):(o=Ge(u),o.c(),g(o,1),o.m(e,t)):o&&(oe(),y(o,1,1,()=>{o=null}),ie()),u[1]?_?(_.p(u,c),c&2&&g(_,1)):(_=Ye(u),_.c(),g(_,1),_.m(e,null)):_&&(oe(),y(_,1,1,()=>{_=null}),ie()),X(e,f=me(v,[c&128&&u[7],(!n||c&128&&s!==(s=ce(u[7].class,"PopoutRoot")))&&{class:s}])),I(e,"svelte-kv3azb",!0)},i(u){n||(g(i,u),g(o),g(_),n=!0)},o(u){y(i,u),y(o),y(_),n=!1},d(u){u&&E(e),i&&i.d(u),o&&o.d(),_&&_.d()}}}function It(l,e,a){let t;const s=["isPopout","isModal"];let n=G(e,s),r,i,{$$slots:o={},$$scope:_}=e;const v=Qe(o);let{isPopout:f=Boolean(v.popout)}=e,{isModal:u=Boolean(v.modal)}=e;const c=nt();B(l,c,m=>a(8,i=m));const b=(m,H)=>{if(r.portalRoot&&r.mode!=="full")return Oe({},ot(m,H));m.hidden=!1;async function p(N){N.hidden=!1}return p(H),{update:p,noop:Se}},T=Et();return B(l,T,m=>a(3,r=m)),l.$$set=m=>{e=D(D({},e),pe(m)),a(7,n=G(e,s)),"isPopout"in m&&a(0,f=m.isPopout),"isModal"in m&&a(1,u=m.isModal),"$$scope"in m&&a(9,_=m.$$scope)},l.$$.update=()=>{l.$$.dirty&256&&a(2,t=i.viewWidth>=st.SMALL_TABLET&&(i.hasMouse||i.viewHeight>=at.MEDIUM))},[f,u,t,r,c,b,T,n,i,_,o]}class Dt extends z{constructor(e){super();W(this,e,It,Pt,O,{isPopout:0,isModal:1})}}const Ht=l=>({}),Ke=l=>({}),zt=l=>({}),Ue=l=>({slot:"popout"}),Wt=l=>({}),Fe=l=>({slot:"modal"});function Ot(l){let e,a,t,s;const n=l[6].header,r=M(n,l,l[7],Ke),i=l[6].default,o=M(i,l,l[7],null);let _=[l[5],{class:t=re(l[5].class,"SplitLayout__inner",{"SplitLayout__inner--header":l[4].header})}],v={};for(let f=0;f<_.length;f+=1)v=D(v,_[f]);return{c(){r&&r.c(),e=he(),a=j("div"),o&&o.c(),this.h()},l(f){r&&r.l(f),e=ge(f),a=J(f,"DIV",{class:!0});var u=Q(a);o&&o.l(u),u.forEach(E),this.h()},h(){X(a,v),I(a,"svelte-12lh0hf",!0)},m(f,u){r&&r.m(f,u),w(f,e,u),w(f,a,u),o&&o.m(a,null),s=!0},p(f,u){r&&r.p&&(!s||u&128)&&A(r,n,f,f[7],s?C(n,f[7],u,Ht):S(f[7]),Ke),o&&o.p&&(!s||u&128)&&A(o,i,f,f[7],s?C(i,f[7],u,null):S(f[7]),null),X(a,v=me(_,[u&32&&f[5],(!s||u&48&&t!==(t=re(f[5].class,"SplitLayout__inner",{"SplitLayout__inner--header":f[4].header})))&&{class:t}])),I(a,"svelte-12lh0hf",!0)},i(f){s||(g(r,f),g(o,f),s=!0)},o(f){y(r,f),y(o,f),s=!1},d(f){r&&r.d(f),f&&E(e),f&&E(a),o&&o.d(f)}}}function Bt(l){let e;const a=l[6].popout,t=M(a,l,l[7],Ue);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&128)&&A(t,a,s,s[7],e?C(a,s[7],n,zt):S(s[7]),Ue)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function wt(l){let e;const a=l[6].modal,t=M(a,l,l[7],Fe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&128)&&A(t,a,s,s[7],e?C(a,s[7],n,Wt):S(s[7]),Fe)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function Nt(l){let e,a;return e=new Dt({props:{class:we("SplitLayout",l[2]),isPopout:l[0],isModal:l[1],$$slots:{modal:[wt],popout:[Bt],default:[Ot]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,[s]){const n={};s&4&&(n.class=we("SplitLayout",t[2])),s&1&&(n.isPopout=t[0]),s&2&&(n.isModal=t[1]),s&176&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function Vt(l,e,a){const t=["isPopout","isModal"];let s=G(e,t),n,{$$slots:r={},$$scope:i}=e;const o=Qe(r);let{isPopout:_=Boolean(o.popout)}=e,{isModal:v=Boolean(o.modal)}=e;const f=tt();return B(l,f,u=>a(2,n=u)),l.$$set=u=>{e=D(D({},e),pe(u)),a(5,s=G(e,t)),"isPopout"in u&&a(0,_=u.isPopout),"isModal"in u&&a(1,v=u.isModal),"$$scope"in u&&a(7,i=u.$$scope)},[_,v,n,f,o,s,r,i]}class Rl extends z{constructor(e){super();W(this,e,Vt,Nt,O,{isPopout:0,isModal:1})}}function Xt(l){let e;const a=l[2].default,t=M(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&A(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}const _t="vkui_SplitColContext",Pl=()=>ee(_t)||k({colRef:null,animate:!0});function Gt(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={colRef:null,animate:!0}}=e;const r=k(n);return R(_t,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class Yt extends z{constructor(e){super();W(this,e,Gt,Xt,O,{value:0})}}function Kt(l){let e;const a=l[9].default,t=M(a,l,l[11],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&2048)&&A(t,a,s,s[11],e?C(a,s[11],n,null):S(s[11]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function Ut(l){let e,a;const t=l[9].default,s=M(t,l,l[11],null);return{c(){e=j("div"),s&&s.c(),this.h()},l(n){e=J(n,"DIV",{class:!0});var r=Q(e);s&&s.l(r),r.forEach(E),this.h()},h(){Ae(e,"class","SplitCol__fixedInner svelte-1y7eiql")},m(n,r){w(n,e,r),s&&s.m(e,null),a=!0},p(n,r){s&&s.p&&(!a||r&2048)&&A(s,t,n,n[11],a?C(t,n[11],r,null):S(n[11]),null)},i(n){a||(g(s,n),a=!0)},o(n){y(s,n),a=!1},d(n){n&&E(e),s&&s.d(n)}}}function Ft(l){let e,a,t,s;const n=[Ut,Kt],r=[];function i(o,_){return o[4]?0:1}return e=i(l),a=r[e]=n[e](l),{c(){a.c(),t=_e()},l(o){a.l(o),t=_e()},m(o,_){r[e].m(o,_),w(o,t,_),s=!0},p(o,_){let v=e;e=i(o),e===v?r[e].p(o,_):(oe(),y(r[v],1,1,()=>{r[v]=null}),ie(),a=r[e],a?a.p(o,_):(a=r[e]=n[e](o),a.c()),g(a,1),a.m(t.parentNode,t))},i(o){s||(g(a),s=!0)},o(o){y(a),s=!1},d(o){r[e].d(o),o&&E(t)}}}function qt(l){let e,a,t,s;a=new Yt({props:{value:l[6],$$slots:{default:[Ft]},$$scope:{ctx:l}}});let n=[l[7],{class:t=re(l[7].class,"SplitCol",{"SplitCol--spaced":l[3],"SplitCol--fixed":l[4]})}],r={};for(let i=0;i<n.length;i+=1)r=D(r,n[i]);return{c(){e=j("div"),Y(a.$$.fragment),this.h()},l(i){e=J(i,"DIV",{class:!0});var o=Q(e);K(a.$$.fragment,o),o.forEach(E),this.h()},h(){X(e,r),$(e,"width",l[0],!1),$(e,"max-width",l[1],!1),$(e,"min-width",l[2],!1),I(e,"svelte-1y7eiql",!0)},m(i,o){w(i,e,o),U(a,e,null),l[10](e),s=!0},p(i,[o]){const _={};o&64&&(_.value=i[6]),o&2064&&(_.$$scope={dirty:o,ctx:i}),a.$set(_),X(e,r=me(n,[o&128&&i[7],(!s||o&152&&t!==(t=re(i[7].class,"SplitCol",{"SplitCol--spaced":i[3],"SplitCol--fixed":i[4]})))&&{class:t}])),$(e,"width",i[0],!1),$(e,"max-width",i[1],!1),$(e,"min-width",i[2],!1),I(e,"svelte-1y7eiql",!0)},i(i){s||(g(a.$$.fragment,i),s=!0)},o(i){y(a.$$.fragment,i),s=!1},d(i){i&&E(e),F(a),l[10](null)}}}function Zt(l,e,a){let t;const s=["width","maxWidth","minWidth","animate","spaced","fixed"];let n=G(e,s),{$$slots:r={},$$scope:i}=e,o,{width:_=void 0}=e,{maxWidth:v=void 0}=e,{minWidth:f=void 0}=e,{animate:u=!1}=e,{spaced:c=!1}=e,{fixed:b=!1}=e;function T(m){xe[m?"unshift":"push"](()=>{o=m,a(5,o)})}return l.$$set=m=>{e=D(D({},e),pe(m)),a(7,n=G(e,s)),"width"in m&&a(0,_=m.width),"maxWidth"in m&&a(1,v=m.maxWidth),"minWidth"in m&&a(2,f=m.minWidth),"animate"in m&&a(8,u=m.animate),"spaced"in m&&a(3,c=m.spaced),"fixed"in m&&a(4,b=m.fixed),"$$scope"in m&&a(11,i=m.$$scope)},l.$$.update=()=>{l.$$.dirty&288&&a(6,t={colRef:o,animate:u})},[_,v,f,c,b,o,t,n,u,r,T,i]}class Il extends z{constructor(e){super();W(this,e,Zt,qt,O,{width:0,maxWidth:1,minWidth:2,animate:8,spaced:3,fixed:4})}}const jt=Boolean(Z&&window.__isVkuiTesting),ae={supported:!1,name:null};Z&&!jt&&(typeof TransitionEvent!="undefined"?(ae.supported=!0,ae.name="transitionend"):typeof WebKitTransitionEvent!="undefined"&&(ae.supported=!0,ae.name="webkitTransitionEnd"));const ve=(l,e,a)=>Math.max(e,Math.min(l,a));function Jt(l){let e;const a=l[2].default,t=M(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&A(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}const Qt="vkui_ScrollContext",xt=(l,e)=>({getScroll:()=>({x:l==null?void 0:l.scrollX,y:l==null?void 0:l.scrollY}),scrollTo:(a=0,t=0)=>{l==null||l.scrollTo(a?ve(a,0,(e==null?void 0:e.body.scrollWidth)-(l==null?void 0:l.innerWidth)):0,t?ve(t,0,(e==null?void 0:e.body.scrollHeight)-(l==null?void 0:l.innerHeight)):0)}}),$t=l=>({getScroll:()=>{var e,a;return{x:(e=l==null?void 0:l.scrollLeft)!=null?e:0,y:(a=l==null?void 0:l.scrollTop)!=null?a:0}},scrollTo:(e=0,a=0)=>{l==null||l.scrollTo(e?ve(e,0,l.scrollWidth-l.clientWidth):0,a?ve(a,0,l.scrollHeight-l.clientHeight):0)}});function el(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={getScroll:()=>({x:0,y:0}),scrollTo:Se}}=e;const r=k(n);return R(Qt,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class tl extends z{constructor(e){super();W(this,e,el,Jt,O,{value:0})}}function ll(l){let e,a,t,s;a=new rt({props:{value:{appRoot:l[1],portalRoot:l[3],keyboardInput:de,mode:l[0]},$$slots:{default:[al]},$$scope:{ctx:l}}});let n=[l[9],{class:t=ce(l[9].class,l[5],"AppRoot",{"AppRoot--no-mouse":!l[2].hasMouse})}],r={};for(let i=0;i<n.length;i+=1)r=D(r,n[i]);return{c(){e=j("div"),Y(a.$$.fragment),this.h()},l(i){e=J(i,"DIV",{class:!0});var o=Q(e);K(a.$$.fragment,o),o.forEach(E),this.h()},h(){X(e,r),I(e,"svelte-1y959sv",!0)},m(i,o){w(i,e,o),U(a,e,null),l[13](e),s=!0},p(i,o){const _={};o&11&&(_.value={appRoot:i[1],portalRoot:i[3],keyboardInput:de,mode:i[0]}),o&16384&&(_.$$scope={dirty:o,ctx:i}),a.$set(_),X(e,r=me(n,[o&512&&i[9],(!s||o&548&&t!==(t=ce(i[9].class,i[5],"AppRoot",{"AppRoot--no-mouse":!i[2].hasMouse})))&&{class:t}])),I(e,"svelte-1y959sv",!0)},i(i){s||(g(a.$$.fragment,i),s=!0)},o(i){y(a.$$.fragment,i),s=!1},d(i){i&&E(e),F(a),l[13](null)}}}function sl(l){let e,a;return e=new rt({props:{value:{appRoot:l[1],portalRoot:l[3],keyboardInput:de,mode:l[0]},$$slots:{default:[ol]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,s){const n={};s&11&&(n.value={appRoot:t[1],portalRoot:t[3],keyboardInput:de,mode:t[0]}),s&16400&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function al(l){let e;const a=l[12].default,t=M(a,l,l[14],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16384)&&A(t,a,s,s[14],e?C(a,s[14],n,null):S(s[14]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function nl(l){let e;const a=l[12].default,t=M(a,l,l[14],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16384)&&A(t,a,s,s[14],e?C(a,s[14],n,null):S(s[14]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function ol(l){let e,a;return e=new tl({props:{value:l[4],$$slots:{default:[nl]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,s){const n={};s&16&&(n.value=t[4]),s&16384&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function il(l){let e,a,t,s;const n=[sl,ll],r=[];function i(o,_){return o[0]==="partial"?0:1}return e=i(l),a=r[e]=n[e](l),{c(){a.c(),t=_e()},l(o){a.l(o),t=_e()},m(o,_){r[e].m(o,_),w(o,t,_),s=!0},p(o,[_]){let v=e;e=i(o),e===v?r[e].p(o,_):(oe(),y(r[v],1,1,()=>{r[v]=null}),ie(),a=r[e],a?a.p(o,_):(a=r[e]=n[e](o),a.c()),g(a,1),a.m(t.parentNode,t))},i(o){s||(g(a),s=!0)},o(o){y(a),s=!1},d(o){r[e].d(o),o&&E(t)}}}const de=!1;function rl(l,e,a){let t;const s=["mode","scroll"];let n=G(e,s),r,i,o,{$$slots:_={},$$scope:v}=e,{mode:f="full"}=e,{scroll:u="global"}=e,c=null,b=null;const T=Ce();B(l,T,h=>a(11,r=h));const m=nt();B(l,m,h=>a(2,i=h));const H=ee(P.classAppearance);B(l,H,h=>a(5,o=h)),ye(()=>{var L,V;const h=(L=r.document)==null?void 0:L.createElement("div");return h.classList.add("vkui__portal-root"),(V=r.document)==null||V.body.appendChild(h),a(3,b=h),()=>{var se;return(se=h.parentElement)==null?void 0:se.removeChild(h)}}),ye(()=>{if(f==="partial")return Se;const h=c==null?void 0:c.parentElement,L=["vkui__root"].concat(f==="embedded"?"vkui__root--embedded":[]);return h==null||h.classList.add(...L),()=>{h==null||h.classList.remove(...L),f==="full"&&(document==null||document.documentElement.classList.remove("vkui"))}});const p=h=>{var V;if(!Z)return;const L=f==="embedded"?c==null?void 0:c.parentElement:(V=r.document)==null?void 0:V.body;if(f==="partial"||h!==fe.REGULAR){L==null||L.classList.remove("vkui--sizeX-regular");return}L==null||L.classList.add("vkui--sizeX-regular")};function N(h){xe[h?"unshift":"push"](()=>{c=h,a(1,c)})}return l.$$set=h=>{e=D(D({},e),pe(h)),a(9,n=G(e,s)),"mode"in h&&a(0,f=h.mode),"scroll"in h&&a(10,u=h.scroll),"$$scope"in h&&a(14,v=h.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&p(i.sizeX),l.$$.dirty&3074&&a(4,t=u==="contain"?$t(c):xt(r.window,r.document))},[f,c,i,b,t,o,T,m,H,n,u,r,_,N,v]}class Dl extends z{constructor(e){super();W(this,e,rl,il,O,{mode:0,scroll:10})}}function _l(l){let e;const a=l[9].default,t=M(a,l,l[8],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&256)&&A(t,a,s,s[8],e?C(a,s[8],n,null):S(s[8]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function ul(l,e,a){var m,H;let t,s,{$$slots:n={},$$scope:r}=e;const i=Ce();B(l,i,p=>a(10,t=p));let{sizeX:o=void 0}=e,{sizeY:_=void 0}=e,{viewWidth:v=void 0}=e,{viewHeight:f=void 0}=e,{hasMouse:u=void 0}=e,{deviceHasHover:c=void 0}=e,b=k(Ne((m=t.window)==null?void 0:m.innerWidth,(H=t.window)==null?void 0:H.innerHeight,{sizeX:o,sizeY:_,viewWidth:v,viewHeight:f,hasMouse:u,deviceHasHover:c}));B(l,b,p=>a(11,s=p)),R(lt,b);const T=()=>{var N,h;const p=Ne((N=t.window)==null?void 0:N.innerWidth,(h=t.window)==null?void 0:h.innerHeight,{sizeX:o,sizeY:_,viewWidth:v,viewHeight:f,hasMouse:u,deviceHasHover:c});(s.viewWidth!==p.viewWidth||s.viewHeight!==p.viewHeight||s.sizeX!==p.sizeX||s.sizeY!==p.sizeY||s.hasMouse!==p.hasMouse||s.deviceHasHover!==p.deviceHasHover)&&b.set(p)};return pt(()=>{T()}),ye(()=>{var p;(p=t.window)==null||p.addEventListener("resize",T,!1)}),be(()=>{var p;(p=t.window)==null||p.removeEventListener("resize",T,!1)}),l.$$set=p=>{"sizeX"in p&&a(2,o=p.sizeX),"sizeY"in p&&a(3,_=p.sizeY),"viewWidth"in p&&a(4,v=p.viewWidth),"viewHeight"in p&&a(5,f=p.viewHeight),"hasMouse"in p&&a(6,u=p.hasMouse),"deviceHasHover"in p&&a(7,c=p.deviceHasHover),"$$scope"in p&&a(8,r=p.$$scope)},[i,b,o,_,v,f,u,c,r,n]}class fl extends z{constructor(e){super();W(this,e,ul,_l,O,{sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var q=(l=>(l.DEPRECATED_CLIENT_LIGHT="client_light",l.DEPRECATED_CLIENT_DARK="client_dark",l.VKCOM="vkcom",l.BRIGHT_LIGHT="bright_light",l.SPACE_GRAY="space_gray",l.VKCOM_LIGHT="vkcom_light",l.VKCOM_DARK="vkcom_dark",l))(q||{});function cl({platform:l,scheme:e,appearance:a}){return a?ut({platform:l,appearance:a}):e==="inherit"?e:l===ke&&(e==="bright_light"||e==="space_gray")?"vkcom_light":e}function ut({platform:l,appearance:e}){switch(e){case"dark":switch(l){case ke:return q.VKCOM_DARK;default:return q.SPACE_GRAY}case"light":default:switch(l){case ke:return q.VKCOM_LIGHT;default:return q.BRIGHT_LIGHT}}}const vl=l=>({class:l&1}),qe=l=>({class:l[0]});function dl(l){let e;const a=l[7].default,t=M(a,l,l[6],qe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&65)&&A(t,a,s,s[6],e?C(a,s[6],n,vl):S(s[6]),qe)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}const ft=(l,e)=>{let a;switch(l){case ne.ANDROID:a="vkBase";break;case ne.IOS:a="vkIOS";break;case ne.VKCOM:a="vkCom";break;default:a=l}return`vkui--${a}--${e}`};function ml(l,e,a){let t,s,n,{$$slots:r={},$$scope:i}=e;const o=tt();B(l,o,b=>a(5,n=b));let{appearance:_="light"}=e,{scheme:v=void 0}=e,f=k(t),u=k(_),c=k(s);return R(P.scheme,f),R(P.appearance,u),R(P.classAppearance,c),l.$$set=b=>{"appearance"in b&&a(2,_=b.appearance),"scheme"in b&&a(3,v=b.scheme),"$$scope"in b&&a(6,i=b.$$scope)},l.$$.update=()=>{l.$$.dirty&44&&a(4,t=v||ut({platform:n,appearance:_})),l.$$.dirty&52&&a(0,s=`vkui${t} ${ft(n,_)}`),l.$$.dirty&16&&f.set(t),l.$$.dirty&4&&u.set(_),l.$$.dirty&1&&c.set(s)},[s,o,_,v,t,n,i,r]}class pl extends z{constructor(e){super();W(this,e,ml,dl,O,{appearance:2,scheme:3})}}function hl(l){let e;const a=l[2].default,t=M(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&A(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function gl(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n=ue()}=e;const r=k(n);return R($e,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class yl extends z{constructor(e){super();W(this,e,gl,hl,O,{value:0})}}function bl(l){let e;const a=l[19].default,t=M(a,l,l[20],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&1048576)&&A(t,a,s,s[20],e?C(a,s[20],n,null):S(s[20]),null)},i(s){e||(g(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function kl(l){let e,a;return e=new pl({props:{appearance:l[0]||l[7],$$slots:{default:[bl]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,s){const n={};s&129&&(n.appearance=t[0]||t[7]),s&1048576&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function Ml(l){let e,a;return e=new fl({props:{sizeX:l[4],sizeY:l[5],viewWidth:l[6],hasMouse:l[1],$$slots:{default:[kl]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,s){const n={};s&16&&(n.sizeX=t[4]),s&32&&(n.sizeY=t[5]),s&64&&(n.viewWidth=t[6]),s&2&&(n.hasMouse=t[1]),s&1048705&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function Al(l){let e,a;return e=new yl({props:{value:{window:l[2],document:l[3]},$$slots:{default:[Ml]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p(t,[s]){const n={};s&12&&(n.value={window:t[2],document:t[3]}),s&1048819&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}const Sl=l=>l===q.SPACE_GRAY||l===q.VKCOM_DARK?"dark":"light";function Cl(l,e,a){var He;let t,s,n,{$$slots:r={},$$scope:i}=e,{scheme:o="bright_light"}=e,{isWebView:_=!1}=e,{webviewType:v=et.VKAPPS}=e,{app:f=""}=e,{appearance:u=void 0}=e,{transitionMotionEnabled:c=!0}=e,{platform:b=Ee()}=e,{hasNewTokens:T=!1}=e,{hasMouse:m=Me}=e,{contentWindow:H=ue().window}=e,{contentDocument:p=ue().document}=e,{sizeX:N=void 0}=e,{sizeY:h=void 0}=e,{viewWidth:L=void 0}=e;const V=Ce();B(l,V,d=>a(18,n=d)),be(()=>{var d;t!=="inherit"&&((d=n.document)==null||d.body.removeAttribute("scheme"))});function se(d,te){const le=te==="inherit";return le?(()=>{if(!(!le||!Z||!d))return d.getAttribute("scheme")})():te}const ct=se((He=n.document)==null?void 0:He.body,t);let x="";be(()=>{var d;return(d=n.document)==null?void 0:d.body.classList.remove(x)});let Te=k(_),Le=k(v),Re=k(f),Pe=k(c),Ie=k(b),De=k(T);return R(P.isWebView,Te),R(P.webviewType,Le),R(P.app,Re),R(P.transitionMotionEnabled,Pe),R(P.platform,Ie),R(P.hasNewTokens,De),l.$$set=d=>{"scheme"in d&&a(9,o=d.scheme),"isWebView"in d&&a(10,_=d.isWebView),"webviewType"in d&&a(11,v=d.webviewType),"app"in d&&a(12,f=d.app),"appearance"in d&&a(0,u=d.appearance),"transitionMotionEnabled"in d&&a(13,c=d.transitionMotionEnabled),"platform"in d&&a(14,b=d.platform),"hasNewTokens"in d&&a(15,T=d.hasNewTokens),"hasMouse"in d&&a(1,m=d.hasMouse),"contentWindow"in d&&a(2,H=d.contentWindow),"contentDocument"in d&&a(3,p=d.contentDocument),"sizeX"in d&&a(4,N=d.sizeX),"sizeY"in d&&a(5,h=d.sizeY),"viewWidth"in d&&a(6,L=d.viewWidth),"$$scope"in d&&a(20,i=d.$$scope)},l.$$.update=()=>{var d,te,le;l.$$.dirty&16897&&a(17,t=cl({scheme:o,platform:b,appearance:u})),l.$$.dirty&393216&&t!=="inherit"&&((d=n.document)==null||d.body.setAttribute("scheme",t)),l.$$.dirty&344192&&(x&&((te=n.document)==null||te.body.classList.remove(x)),a(16,x=ft(b,s)),(le=n.document)==null||le.body.classList.add(x)),l.$$.dirty&1024&&Te.set(_),l.$$.dirty&2048&&Le.set(v),l.$$.dirty&4096&&Re.set(f),l.$$.dirty&8192&&Pe.set(c),l.$$.dirty&16384&&Ie.set(b),l.$$.dirty&32768&&De.set(T)},a(7,s=Sl(ct)),[u,m,H,p,N,h,L,s,V,o,_,v,f,c,b,T,x,t,n,r,i]}class Hl extends z{constructor(e){super();W(this,e,Cl,Al,O,{scheme:9,isWebView:10,webviewType:11,app:12,appearance:0,transitionMotionEnabled:13,platform:14,hasNewTokens:15,hasMouse:1,contentWindow:2,contentDocument:3,sizeX:4,sizeY:5,viewWidth:6})}}export{Dl as A,Hl as C,yt as D,gt as I,Mt as M,ne as P,Rl as S,bt as T,st as V,et as W,Il as a,fl as b,ce as c,tt as d,Ce as e,Pl as f,we as g,ke as h,fe as i,P as j,ht as k,kt as l,At as m,St as n,Ne as o,pl as p,ue as q,Et as r,at as s,ae as t,nt as u};
