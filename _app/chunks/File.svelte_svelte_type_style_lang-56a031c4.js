import{Z as Q,D as M,_ as te,$ as pe,a0 as He,S as z,i as D,s as W,O as A,P as L,Q as S,R as C,q as p,o as h,r as R,e as q,c as Z,a as j,d as E,b as he,a1 as P,g as B,a2 as ze,a3 as De,C as H,k as ve,m as de,a4 as V,T as be,n as le,p as se,z as fe,a5 as X,a6 as We,M as O,a7 as ce,w as G,x as Y,y as K,B as U,a8 as ae,f as J,l as ne,J as Be,N as Oe,v as me,a9 as xe,aa as $e}from"./vendor-5b7ee37b.js";const we="vkui_DOMContext",oe=()=>({window:te?window:void 0,document:te?document:void 0}),Ne=()=>Q(we)||M(oe());var ee=(l=>(l.ANDROID="android",l.IOS="ios",l.VKCOM="vkcom",l))(ee||{});const et="android",tt="ios",ke="vkcom";function ge(l){const e=l||te&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(e)?tt:et}var I=(l=>(l.isWebView="vkui_isWebView",l.webviewType="vkui_webviewType",l.scheme="vkui_scheme",l.appearance="vkui_appearance",l.classAppearance="vkui_classAppearance",l.app="vkui_app",l.transitionMotionEnabled="vkui_transitionMotionEnabled",l.platform="vkui_platform",l.hasNewTokens="vkui_hasNewTokens",l))(I||{}),Ve=(l=>(l.VKAPPS="vkapps",l.INTERNAL="internal",l))(Ve||{});function Xe(){return Q(I.platform)||M(ge())}function Me(l,e=ge()){return`${l} ${l}--${e}`}const Ge="vkui_AdaptivityContext";var ie=(l=>(l.COMPACT="compact",l.REGULAR="regular",l))(ie||{}),Ye=(l=>(l[l.SMALL_MOBILE=1]="SMALL_MOBILE",l[l.MOBILE=2]="MOBILE",l[l.SMALL_TABLET=3]="SMALL_TABLET",l[l.TABLET=4]="TABLET",l[l.DESKTOP=5]="DESKTOP",l))(Ye||{}),Ke=(l=>(l[l.EXTRA_SMALL=1]="EXTRA_SMALL",l[l.SMALL=2]="SMALL",l[l.MEDIUM=3]="MEDIUM",l))(Ke||{});const lt=1280,st=1024,at=768,nt=320,ot=414,it=720,Ae=(l,e,a)=>{var _,c;let t=1,s=2,n="regular",r="regular";const i=(_=a.hasMouse)!=null?_:pe,o=(c=a.deviceHasHover)!=null?c:He;return l>=lt?t=5:l>=st?t=4:l>=at?t=3:l>=nt?t=2:t=1,e>=it?s=3:e>ot?s=2:s=1,a.viewWidth&&(t=a.viewWidth),a.viewHeight&&(s=a.viewHeight),t<=2&&(r="compact"),(t>=3&&i||s<=1)&&(n="compact"),a.sizeX&&(r=a.sizeX),a.sizeY&&(n=a.sizeY),{viewWidth:t,viewHeight:s,sizeX:r,sizeY:n,hasMouse:i,deviceHasHover:o}};function Ue(){return Q(Ge)||M({sizeX:ie.COMPACT,sizeY:ie.REGULAR,hasMouse:pe,deviceHasHover:He})}function re(...l){const e=[];return l.forEach(a=>{if(!!a)switch(typeof a){case"string":e.push(a);break;case"object":Object.keys(a).forEach(t=>{a[t]&&e.push(t)});break;default:e.push(`${a}`)}}),e.join(" ")}function Fe(l,e){let a;async function t(n){if(n instanceof HTMLElement)a=n;else{if(n===null)return;throw new TypeError(`Unknown portal target type: ${n===null?"null":typeof n}. Allowed types: HTMLElement.`)}a.appendChild(l),l.hidden=!1}function s(){l.parentNode&&l.parentNode.removeChild(l)}return t(e),{update:t,destroy:s}}function rt(l){let e;const a=l[2].default,t=A(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&L(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}const qe="vkui_AppRootContext",_t=()=>Q(qe)||M({portalRoot:null});function ut(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={portalRoot:null}}=e;const r=M(n);return R(qe,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class Ze extends z{constructor(e){super();D(this,e,ut,rt,W,{value:0})}}const ft=l=>({}),Le=l=>({}),ct=l=>({}),Se=l=>({});function Ce(l){let e,a,t,s,n;const r=l[9].popout,i=A(r,l,l[8],Se);return{c(){e=q("div"),i&&i.c(),this.h()},l(o){e=Z(o,"DIV",{class:!0});var _=j(e);i&&i.l(_),_.forEach(E),this.h()},h(){e.hidden=!0,he(e,"class","svelte-kv3azb"),P(e,"PopoutRoot--absolute",l[2]),P(e,"PopoutRoot__popout",!l[2])},m(o,_){B(o,e,_),i&&i.m(e,null),t=!0,s||(n=ze(a=Fe.call(null,e,l[3].portalRoot)),s=!0)},p(o,_){i&&i.p&&(!t||_&256)&&L(i,r,o,o[8],t?C(r,o[8],_,ct):S(o[8]),Se),a&&De(a.update)&&_&8&&a.update.call(null,o[3].portalRoot),_&4&&P(e,"PopoutRoot--absolute",o[2]),_&4&&P(e,"PopoutRoot__popout",!o[2])},i(o){t||(p(i,o),t=!0)},o(o){h(i,o),t=!1},d(o){o&&E(e),i&&i.d(o),s=!1,n()}}}function Ee(l){let e,a,t,s,n;const r=l[9].modal,i=A(r,l,l[8],Le);return{c(){e=q("div"),i&&i.c(),this.h()},l(o){e=Z(o,"DIV",{class:!0});var _=j(e);i&&i.l(_),_.forEach(E),this.h()},h(){e.hidden=!0,he(e,"class","PopoutRoot__modal svelte-kv3azb")},m(o,_){B(o,e,_),i&&i.m(e,null),t=!0,s||(n=ze(a=Fe.call(null,e,l[3].portalRoot)),s=!0)},p(o,_){i&&i.p&&(!t||_&256)&&L(i,r,o,o[8],t?C(r,o[8],_,ft):S(o[8]),Le),a&&De(a.update)&&_&8&&a.update.call(null,o[3].portalRoot)},i(o){t||(p(i,o),t=!0)},o(o){h(i,o),t=!1},d(o){o&&E(e),i&&i.d(o),s=!1,n()}}}function vt(l){let e,a,t,s,n;const r=l[9].default,i=A(r,l,l[8],null);let o=l[0]&&Ce(l),_=l[1]&&Ee(l),c=[l[6],{class:s=re(l[6].class,"PopoutRoot")}],f={};for(let u=0;u<c.length;u+=1)f=H(f,c[u]);return{c(){e=q("div"),i&&i.c(),a=ve(),o&&o.c(),t=ve(),_&&_.c(),this.h()},l(u){e=Z(u,"DIV",{class:!0});var v=j(e);i&&i.l(v),a=de(v),o&&o.l(v),t=de(v),_&&_.l(v),v.forEach(E),this.h()},h(){V(e,f),P(e,"svelte-kv3azb",!0)},m(u,v){B(u,e,v),i&&i.m(e,null),be(e,a),o&&o.m(e,null),be(e,t),_&&_.m(e,null),n=!0},p(u,[v]){i&&i.p&&(!n||v&256)&&L(i,r,u,u[8],n?C(r,u[8],v,null):S(u[8]),null),u[0]?o?(o.p(u,v),v&1&&p(o,1)):(o=Ce(u),o.c(),p(o,1),o.m(e,t)):o&&(le(),h(o,1,1,()=>{o=null}),se()),u[1]?_?(_.p(u,v),v&2&&p(_,1)):(_=Ee(u),_.c(),p(_,1),_.m(e,null)):_&&(le(),h(_,1,1,()=>{_=null}),se()),V(e,f=fe(c,[v&64&&u[6],(!n||v&64&&s!==(s=re(u[6].class,"PopoutRoot")))&&{class:s}])),P(e,"svelte-kv3azb",!0)},i(u){n||(p(i,u),p(o),p(_),n=!0)},o(u){h(i,u),h(o),h(_),n=!1},d(u){u&&E(e),i&&i.d(u),o&&o.d(),_&&_.d()}}}function dt(l,e,a){let t;const s=["isPopout","isModal"];let n=X(e,s),r,i,{$$slots:o={},$$scope:_}=e;const c=We(o);let{isPopout:f=Boolean(c.popout)}=e,{isModal:u=Boolean(c.modal)}=e;const v=Ue();O(l,v,k=>a(7,r=k));const b=_t();return O(l,b,k=>a(3,i=k)),l.$$set=k=>{e=H(H({},e),ce(k)),a(6,n=X(e,s)),"isPopout"in k&&a(0,f=k.isPopout),"isModal"in k&&a(1,u=k.isModal),"$$scope"in k&&a(8,_=k.$$scope)},l.$$.update=()=>{l.$$.dirty&128&&a(2,t=r.viewWidth>=Ye.SMALL_TABLET&&(r.hasMouse||r.viewHeight>=Ke.MEDIUM))},[f,u,t,i,v,b,n,r,_,o]}class mt extends z{constructor(e){super();D(this,e,dt,vt,W,{isPopout:0,isModal:1})}}const pt=l=>({}),Te=l=>({}),ht=l=>({}),Re=l=>({slot:"popout"}),gt=l=>({}),Ie=l=>({slot:"modal"});function yt(l){let e,a,t,s;const n=l[6].header,r=A(n,l,l[7],Te),i=l[6].default,o=A(i,l,l[7],null);let _=[l[5],{class:t=ae(l[5].class,"SplitLayout__inner",{"SplitLayout__inner--header":l[4].header})}],c={};for(let f=0;f<_.length;f+=1)c=H(c,_[f]);return{c(){r&&r.c(),e=ve(),a=q("div"),o&&o.c(),this.h()},l(f){r&&r.l(f),e=de(f),a=Z(f,"DIV",{class:!0});var u=j(a);o&&o.l(u),u.forEach(E),this.h()},h(){V(a,c),P(a,"svelte-12lh0hf",!0)},m(f,u){r&&r.m(f,u),B(f,e,u),B(f,a,u),o&&o.m(a,null),s=!0},p(f,u){r&&r.p&&(!s||u&128)&&L(r,n,f,f[7],s?C(n,f[7],u,pt):S(f[7]),Te),o&&o.p&&(!s||u&128)&&L(o,i,f,f[7],s?C(i,f[7],u,null):S(f[7]),null),V(a,c=fe(_,[u&32&&f[5],(!s||u&48&&t!==(t=ae(f[5].class,"SplitLayout__inner",{"SplitLayout__inner--header":f[4].header})))&&{class:t}])),P(a,"svelte-12lh0hf",!0)},i(f){s||(p(r,f),p(o,f),s=!0)},o(f){h(r,f),h(o,f),s=!1},d(f){r&&r.d(f),f&&E(e),f&&E(a),o&&o.d(f)}}}function bt(l){let e;const a=l[6].popout,t=A(a,l,l[7],Re);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&128)&&L(t,a,s,s[7],e?C(a,s[7],n,ht):S(s[7]),Re)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function kt(l){let e;const a=l[6].modal,t=A(a,l,l[7],Ie);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&128)&&L(t,a,s,s[7],e?C(a,s[7],n,gt):S(s[7]),Ie)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Mt(l){let e,a;return e=new mt({props:{class:Me("SplitLayout",l[2]),isPopout:l[0],isModal:l[1],$$slots:{modal:[kt],popout:[bt],default:[yt]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,[s]){const n={};s&4&&(n.class=Me("SplitLayout",t[2])),s&1&&(n.isPopout=t[0]),s&2&&(n.isModal=t[1]),s&176&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function At(l,e,a){const t=["isPopout","isModal"];let s=X(e,t),n,{$$slots:r={},$$scope:i}=e;const o=We(r);let{isPopout:_=Boolean(o.popout)}=e,{isModal:c=Boolean(o.modal)}=e;const f=Xe();return O(l,f,u=>a(2,n=u)),l.$$set=u=>{e=H(H({},e),ce(u)),a(5,s=X(e,t)),"isPopout"in u&&a(0,_=u.isPopout),"isModal"in u&&a(1,c=u.isModal),"$$scope"in u&&a(7,i=u.$$scope)},[_,c,n,f,o,s,r,i]}class il extends z{constructor(e){super();D(this,e,At,Mt,W,{isPopout:0,isModal:1})}}function Lt(l){let e;const a=l[2].default,t=A(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&L(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}const je="vkui_SplitColContext",rl=()=>Q(je)||M({colRef:null,animate:!0});function St(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={colRef:null,animate:!0}}=e;const r=M(n);return R(je,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class Ct extends z{constructor(e){super();D(this,e,St,Lt,W,{value:0})}}function Et(l){let e;const a=l[9].default,t=A(a,l,l[11],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&2048)&&L(t,a,s,s[11],e?C(a,s[11],n,null):S(s[11]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Tt(l){let e,a;const t=l[9].default,s=A(t,l,l[11],null);return{c(){e=q("div"),s&&s.c(),this.h()},l(n){e=Z(n,"DIV",{class:!0});var r=j(e);s&&s.l(r),r.forEach(E),this.h()},h(){he(e,"class","SplitCol__fixedInner svelte-1y7eiql")},m(n,r){B(n,e,r),s&&s.m(e,null),a=!0},p(n,r){s&&s.p&&(!a||r&2048)&&L(s,t,n,n[11],a?C(t,n[11],r,null):S(n[11]),null)},i(n){a||(p(s,n),a=!0)},o(n){h(s,n),a=!1},d(n){n&&E(e),s&&s.d(n)}}}function Rt(l){let e,a,t,s;const n=[Tt,Et],r=[];function i(o,_){return o[4]?0:1}return e=i(l),a=r[e]=n[e](l),{c(){a.c(),t=ne()},l(o){a.l(o),t=ne()},m(o,_){r[e].m(o,_),B(o,t,_),s=!0},p(o,_){let c=e;e=i(o),e===c?r[e].p(o,_):(le(),h(r[c],1,1,()=>{r[c]=null}),se(),a=r[e],a?a.p(o,_):(a=r[e]=n[e](o),a.c()),p(a,1),a.m(t.parentNode,t))},i(o){s||(p(a),s=!0)},o(o){h(a),s=!1},d(o){r[e].d(o),o&&E(t)}}}function It(l){let e,a,t,s;a=new Ct({props:{value:l[6],$$slots:{default:[Rt]},$$scope:{ctx:l}}});let n=[l[7],{class:t=ae(l[7].class,"SplitCol",{"SplitCol--spaced":l[3],"SplitCol--fixed":l[4]})}],r={};for(let i=0;i<n.length;i+=1)r=H(r,n[i]);return{c(){e=q("div"),G(a.$$.fragment),this.h()},l(i){e=Z(i,"DIV",{class:!0});var o=j(e);Y(a.$$.fragment,o),o.forEach(E),this.h()},h(){V(e,r),J(e,"width",l[0],!1),J(e,"max-width",l[1],!1),J(e,"min-width",l[2],!1),P(e,"svelte-1y7eiql",!0)},m(i,o){B(i,e,o),K(a,e,null),l[10](e),s=!0},p(i,[o]){const _={};o&64&&(_.value=i[6]),o&2064&&(_.$$scope={dirty:o,ctx:i}),a.$set(_),V(e,r=fe(n,[o&128&&i[7],(!s||o&152&&t!==(t=ae(i[7].class,"SplitCol",{"SplitCol--spaced":i[3],"SplitCol--fixed":i[4]})))&&{class:t}])),J(e,"width",i[0],!1),J(e,"max-width",i[1],!1),J(e,"min-width",i[2],!1),P(e,"svelte-1y7eiql",!0)},i(i){s||(p(a.$$.fragment,i),s=!0)},o(i){h(a.$$.fragment,i),s=!1},d(i){i&&E(e),U(a),l[10](null)}}}function Pt(l,e,a){let t;const s=["width","maxWidth","minWidth","animate","spaced","fixed"];let n=X(e,s),{$$slots:r={},$$scope:i}=e,o,{width:_=void 0}=e,{maxWidth:c=void 0}=e,{minWidth:f=void 0}=e,{animate:u=!1}=e,{spaced:v=!1}=e,{fixed:b=!1}=e;function k(y){Be[y?"unshift":"push"](()=>{o=y,a(5,o)})}return l.$$set=y=>{e=H(H({},e),ce(y)),a(7,n=X(e,s)),"width"in y&&a(0,_=y.width),"maxWidth"in y&&a(1,c=y.maxWidth),"minWidth"in y&&a(2,f=y.minWidth),"animate"in y&&a(8,u=y.animate),"spaced"in y&&a(3,v=y.spaced),"fixed"in y&&a(4,b=y.fixed),"$$scope"in y&&a(11,i=y.$$scope)},l.$$.update=()=>{l.$$.dirty&288&&a(6,t={colRef:o,animate:u})},[_,c,f,v,b,o,t,n,u,r,k,i]}class _l extends z{constructor(e){super();D(this,e,Pt,It,W,{width:0,maxWidth:1,minWidth:2,animate:8,spaced:3,fixed:4})}}const _e=(l,e,a)=>Math.max(e,Math.min(l,a));function Ht(l){let e;const a=l[2].default,t=A(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&L(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}const zt="vkui_ScrollContext",Dt=(l,e)=>({getScroll:()=>({x:l==null?void 0:l.scrollX,y:l==null?void 0:l.scrollY}),scrollTo:(a=0,t=0)=>{l==null||l.scrollTo(a?_e(a,0,(e==null?void 0:e.body.scrollWidth)-(l==null?void 0:l.innerWidth)):0,t?_e(t,0,(e==null?void 0:e.body.scrollHeight)-(l==null?void 0:l.innerHeight)):0)}}),Wt=l=>({getScroll:()=>{var e,a;return{x:(e=l==null?void 0:l.scrollLeft)!=null?e:0,y:(a=l==null?void 0:l.scrollTop)!=null?a:0}},scrollTo:(e=0,a=0)=>{l==null||l.scrollTo(e?_e(e,0,l.scrollWidth-l.clientWidth):0,a?_e(a,0,l.scrollHeight-l.clientHeight):0)}});function Bt(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n={getScroll:()=>({x:0,y:0}),scrollTo:Oe}}=e;const r=M(n);return R(zt,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class Ot extends z{constructor(e){super();D(this,e,Bt,Ht,W,{value:0})}}function wt(l){let e,a,t,s;a=new Ze({props:{value:{appRoot:l[1],portalRoot:l[3],keyboardInput:ue,mode:l[0]},$$slots:{default:[Vt]},$$scope:{ctx:l}}});let n=[l[9],{class:t=re(l[9].class,l[5],"AppRoot",{"AppRoot--no-mouse":!l[2].hasMouse})}],r={};for(let i=0;i<n.length;i+=1)r=H(r,n[i]);return{c(){e=q("div"),G(a.$$.fragment),this.h()},l(i){e=Z(i,"DIV",{class:!0});var o=j(e);Y(a.$$.fragment,o),o.forEach(E),this.h()},h(){V(e,r),P(e,"svelte-1y959sv",!0)},m(i,o){B(i,e,o),K(a,e,null),l[13](e),s=!0},p(i,o){const _={};o&11&&(_.value={appRoot:i[1],portalRoot:i[3],keyboardInput:ue,mode:i[0]}),o&16384&&(_.$$scope={dirty:o,ctx:i}),a.$set(_),V(e,r=fe(n,[o&512&&i[9],(!s||o&548&&t!==(t=re(i[9].class,i[5],"AppRoot",{"AppRoot--no-mouse":!i[2].hasMouse})))&&{class:t}])),P(e,"svelte-1y959sv",!0)},i(i){s||(p(a.$$.fragment,i),s=!0)},o(i){h(a.$$.fragment,i),s=!1},d(i){i&&E(e),U(a),l[13](null)}}}function Nt(l){let e,a;return e=new Ze({props:{value:{appRoot:l[1],portalRoot:l[3],keyboardInput:ue,mode:l[0]},$$slots:{default:[Gt]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const n={};s&11&&(n.value={appRoot:t[1],portalRoot:t[3],keyboardInput:ue,mode:t[0]}),s&16400&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function Vt(l){let e;const a=l[12].default,t=A(a,l,l[14],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16384)&&L(t,a,s,s[14],e?C(a,s[14],n,null):S(s[14]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Xt(l){let e;const a=l[12].default,t=A(a,l,l[14],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16384)&&L(t,a,s,s[14],e?C(a,s[14],n,null):S(s[14]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Gt(l){let e,a;return e=new Ot({props:{value:l[4],$$slots:{default:[Xt]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const n={};s&16&&(n.value=t[4]),s&16384&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function Yt(l){let e,a,t,s;const n=[Nt,wt],r=[];function i(o,_){return o[0]==="partial"?0:1}return e=i(l),a=r[e]=n[e](l),{c(){a.c(),t=ne()},l(o){a.l(o),t=ne()},m(o,_){r[e].m(o,_),B(o,t,_),s=!0},p(o,[_]){let c=e;e=i(o),e===c?r[e].p(o,_):(le(),h(r[c],1,1,()=>{r[c]=null}),se(),a=r[e],a?a.p(o,_):(a=r[e]=n[e](o),a.c()),p(a,1),a.m(t.parentNode,t))},i(o){s||(p(a),s=!0)},o(o){h(a),s=!1},d(o){r[e].d(o),o&&E(t)}}}const ue=!1;function Kt(l,e,a){let t;const s=["mode","scroll"];let n=X(e,s),r,i,o,{$$slots:_={},$$scope:c}=e,{mode:f="full"}=e,{scroll:u="global"}=e,v=null,b=null;const k=Ne();O(l,k,m=>a(11,r=m));const y=Ue();O(l,y,m=>a(2,i=m));const w=Q(I.classAppearance);O(l,w,m=>a(5,o=m)),me(()=>{var T,N;const m=(T=r.document)==null?void 0:T.createElement("div");return m.classList.add("vkui__portal-root"),(N=r.document)==null||N.body.appendChild(m),a(3,b=m),()=>{var x;return(x=m.parentElement)==null?void 0:x.removeChild(m)}}),me(()=>{if(f==="partial")return Oe;const m=v==null?void 0:v.parentElement,T=["vkui__root"].concat(f==="embedded"?"vkui__root--embedded":[]);return m==null||m.classList.add(...T),()=>{m==null||m.classList.remove(...T),f==="full"&&(document==null||document.documentElement.classList.remove("vkui"))}});const d=m=>{var N;if(!te)return;const T=f==="embedded"?v==null?void 0:v.parentElement:(N=r.document)==null?void 0:N.body;if(f==="partial"||m!==ie.REGULAR){T==null||T.classList.remove("vkui--sizeX-regular");return}T==null||T.classList.add("vkui--sizeX-regular")};function F(m){Be[m?"unshift":"push"](()=>{v=m,a(1,v)})}return l.$$set=m=>{e=H(H({},e),ce(m)),a(9,n=X(e,s)),"mode"in m&&a(0,f=m.mode),"scroll"in m&&a(10,u=m.scroll),"$$scope"in m&&a(14,c=m.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&d(i.sizeX),l.$$.dirty&3074&&a(4,t=u==="contain"?Wt(v):Dt(r.window,r.document))},[f,v,i,b,t,o,k,y,w,n,u,r,_,F,c]}class ul extends z{constructor(e){super();D(this,e,Kt,Yt,W,{mode:0,scroll:10})}}function Ut(l){let e;const a=l[9].default,t=A(a,l,l[8],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&256)&&L(t,a,s,s[8],e?C(a,s[8],n,null):S(s[8]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Ft(l,e,a){var y,w;let t,s,{$$slots:n={},$$scope:r}=e;const i=Ne();O(l,i,d=>a(10,t=d));let{sizeX:o=void 0}=e,{sizeY:_=void 0}=e,{viewWidth:c=void 0}=e,{viewHeight:f=void 0}=e,{hasMouse:u=void 0}=e,{deviceHasHover:v=void 0}=e,b=M(Ae((y=t.window)==null?void 0:y.innerWidth,(w=t.window)==null?void 0:w.innerHeight,{sizeX:o,sizeY:_,viewWidth:c,viewHeight:f,hasMouse:u,deviceHasHover:v}));O(l,b,d=>a(11,s=d)),R(Ge,b);const k=()=>{var F,m;const d=Ae((F=t.window)==null?void 0:F.innerWidth,(m=t.window)==null?void 0:m.innerHeight,{sizeX:o,sizeY:_,viewWidth:c,viewHeight:f,hasMouse:u,deviceHasHover:v});(s.viewWidth!==d.viewWidth||s.viewHeight!==d.viewHeight||s.sizeX!==d.sizeX||s.sizeY!==d.sizeY||s.hasMouse!==d.hasMouse||s.deviceHasHover!==d.deviceHasHover)&&b.set(d)};return xe(()=>{k()}),me(()=>{var d;(d=t.window)==null||d.addEventListener("resize",k,!1)}),$e(()=>{var d;(d=t.window)==null||d.removeEventListener("resize",k,!1)}),l.$$set=d=>{"sizeX"in d&&a(2,o=d.sizeX),"sizeY"in d&&a(3,_=d.sizeY),"viewWidth"in d&&a(4,c=d.viewWidth),"viewHeight"in d&&a(5,f=d.viewHeight),"hasMouse"in d&&a(6,u=d.hasMouse),"deviceHasHover"in d&&a(7,v=d.deviceHasHover),"$$scope"in d&&a(8,r=d.$$scope)},[i,b,o,_,c,f,u,v,r,n]}class qt extends z{constructor(e){super();D(this,e,Ft,Ut,W,{sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var $=(l=>(l.BRIGHT_LIGHT="bright_light",l.SPACE_GRAY="space_gray",l.VKCOM_LIGHT="vkcom_light",l.VKCOM_DARK="vkcom_dark",l))($||{});function Je({platform:l,appearance:e}){switch(e){case"dark":switch(l){case ke:return $.VKCOM_DARK;default:return $.SPACE_GRAY}case"light":default:switch(l){case ke:return $.VKCOM_LIGHT;default:return $.BRIGHT_LIGHT}}}const Zt=l=>({class:l&1}),Pe=l=>({class:l[0]});function jt(l){let e;const a=l[7].default,t=A(a,l,l[6],Pe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&65)&&L(t,a,s,s[6],e?C(a,s[6],n,Zt):S(s[6]),Pe)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}const Qe=(l,e)=>{let a;switch(l){case ee.ANDROID:a="vkBase";break;case ee.IOS:a="vkIOS";break;case ee.VKCOM:a="vkCom";break;default:a=l}return`vkui--${a}--${e}`},fl=(l,e)=>`vkui${Je({platform:l,appearance:e})} ${Qe(l,e)}`;function Jt(l,e,a){let t,s,n,{$$slots:r={},$$scope:i}=e;const o=Xe();O(l,o,b=>a(5,n=b));let{appearance:_="light"}=e,{scheme:c=void 0}=e,f=M(t),u=M(_),v=M(s);return R(I.scheme,f),R(I.appearance,u),R(I.classAppearance,v),l.$$set=b=>{"appearance"in b&&a(2,_=b.appearance),"scheme"in b&&a(3,c=b.scheme),"$$scope"in b&&a(6,i=b.$$scope)},l.$$.update=()=>{l.$$.dirty&44&&a(4,t=c||Je({platform:n,appearance:_})),l.$$.dirty&52&&a(0,s=`vkui${t} ${Qe(n,_)}`),l.$$.dirty&16&&f.set(t),l.$$.dirty&4&&u.set(_),l.$$.dirty&1&&v.set(s)},[s,o,_,c,t,n,i,r]}class Qt extends z{constructor(e){super();D(this,e,Jt,jt,W,{appearance:2,scheme:3})}}function xt(l){let e;const a=l[2].default,t=A(a,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&2)&&L(t,a,s,s[1],e?C(a,s[1],n,null):S(s[1]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function $t(l,e,a){let{$$slots:t={},$$scope:s}=e,{value:n=oe()}=e;const r=M(n);return R(we,r),l.$$set=i=>{"value"in i&&a(0,n=i.value),"$$scope"in i&&a(1,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r.set(n)},[n,s,t]}class el extends z{constructor(e){super();D(this,e,$t,xt,W,{value:0})}}function tl(l){let e;const a=l[14].default,t=A(a,l,l[15],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&32768)&&L(t,a,s,s[15],e?C(a,s[15],n,null):S(s[15]),null)},i(s){e||(p(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function ll(l){let e,a;return e=new Qt({props:{appearance:l[1],scheme:l[0],$$slots:{default:[tl]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const n={};s&2&&(n.appearance=t[1]),s&1&&(n.scheme=t[0]),s&32768&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function sl(l){let e,a;return e=new qt({props:{sizeX:l[5],sizeY:l[6],viewWidth:l[7],hasMouse:l[2],$$slots:{default:[ll]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const n={};s&32&&(n.sizeX=t[5]),s&64&&(n.sizeY=t[6]),s&128&&(n.viewWidth=t[7]),s&4&&(n.hasMouse=t[2]),s&32771&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function al(l){let e,a;return e=new el({props:{value:{window:l[3],document:l[4]},$$slots:{default:[sl]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,[s]){const n={};s&24&&(n.value={window:t[3],document:t[4]}),s&32999&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function nl(l,e,a){let{$$slots:t={},$$scope:s}=e,{scheme:n="bright_light"}=e,{isWebView:r=!1}=e,{webviewType:i=Ve.VKAPPS}=e,{app:o=""}=e,{appearance:_="light"}=e,{transitionMotionEnabled:c=!0}=e,{platform:f=ge()}=e,{hasNewTokens:u=!1}=e,{hasMouse:v=pe}=e,{contentWindow:b=oe().window}=e,{contentDocument:k=oe().document}=e,{sizeX:y=void 0}=e,{sizeY:w=void 0}=e,{viewWidth:d=void 0}=e,F=M(r),m=M(i),T=M(o),N=M(c),x=M(f),ye=M(u);return R(I.isWebView,F),R(I.webviewType,m),R(I.app,T),R(I.transitionMotionEnabled,N),R(I.platform,x),R(I.hasNewTokens,ye),l.$$set=g=>{"scheme"in g&&a(0,n=g.scheme),"isWebView"in g&&a(8,r=g.isWebView),"webviewType"in g&&a(9,i=g.webviewType),"app"in g&&a(10,o=g.app),"appearance"in g&&a(1,_=g.appearance),"transitionMotionEnabled"in g&&a(11,c=g.transitionMotionEnabled),"platform"in g&&a(12,f=g.platform),"hasNewTokens"in g&&a(13,u=g.hasNewTokens),"hasMouse"in g&&a(2,v=g.hasMouse),"contentWindow"in g&&a(3,b=g.contentWindow),"contentDocument"in g&&a(4,k=g.contentDocument),"sizeX"in g&&a(5,y=g.sizeX),"sizeY"in g&&a(6,w=g.sizeY),"viewWidth"in g&&a(7,d=g.viewWidth),"$$scope"in g&&a(15,s=g.$$scope)},l.$$.update=()=>{l.$$.dirty&256&&F.set(r),l.$$.dirty&512&&m.set(i),l.$$.dirty&1024&&T.set(o),l.$$.dirty&2048&&N.set(c),l.$$.dirty&4096&&x.set(f),l.$$.dirty&8192&&ye.set(u)},[n,_,v,b,k,y,w,d,r,i,o,c,f,u,t,s]}class cl extends z{constructor(e){super();D(this,e,nl,al,W,{scheme:0,isWebView:8,webviewType:9,app:10,appearance:1,transitionMotionEnabled:11,platform:12,hasNewTokens:13,hasMouse:2,contentWindow:3,contentDocument:4,sizeX:5,sizeY:6,viewWidth:7})}}export{Qt as A,cl as C,lt as D,tt as I,nt as M,ee as P,il as S,st as T,Ye as V,Ve as W,Xe as a,ul as b,oe as c,_l as d,qt as e,re as f,fl as g,Me as h,Ne as i,rl as j,ke as k,ie as l,I as m,et as n,at as o,ot as p,it as q,Ae as r,Ke as s,Ue as u};