import{F as K,D as k,X as L,a7 as x,a8 as be,S as D,i as O,s as B,G as U,H as N,I as R,J as V,q as M,o as C,R as X,r as b,a9 as Le,v as Ee,aa as ze,w as $,x as ee,y as te,B as se,ab as He,e as E,c as z,a as H,d as S,b as P,g as F,W as we,t as Pe,h as De,ac as Oe,O as W,C as q,k as re,m as oe,N as ce,K as ve,n as Be,p as Ue,z as Ne,Y as Re,P as ue,Q as Ve,T as fe}from"./vendor-bc1c7f53.js";const Me="vkui_DOMContext",Y=()=>({window:L?window:void 0,document:L?document:void 0}),We=()=>K(Me)||k(Y());var G=(e=>(e.ANDROID="android",e.IOS="ios",e.VKCOM="vkcom",e))(G||{});const Ge="android",le="ios",de="vkcom";function Z(e){const t=e||L&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(t)?le:Ge}var w=(e=>(e.isWebView="vkui_isWebView",e.webviewType="vkui_webviewType",e.scheme="vkui_scheme",e.appearance="vkui_appearance",e.classAppearance="vkui_classAppearance",e.app="vkui_app",e.transitionMotionEnabled="vkui_transitionMotionEnabled",e.platform="vkui_platform",e.hasNewTokens="vkui_hasNewTokens",e))(w||{}),Ce=(e=>(e.VKAPPS="vkapps",e.INTERNAL="internal",e))(Ce||{});function Se(){return K(w.platform)||k(Z())}function he(e,t=Z()){return`${e} ${e}--${t}`}const Ae="vkui_AdaptivityContext";var J=(e=>(e.COMPACT="compact",e.REGULAR="regular",e))(J||{}),Xe=(e=>(e[e.SMALL_MOBILE=1]="SMALL_MOBILE",e[e.MOBILE=2]="MOBILE",e[e.SMALL_TABLET=3]="SMALL_TABLET",e[e.TABLET=4]="TABLET",e[e.DESKTOP=5]="DESKTOP",e))(Xe||{}),Ye=(e=>(e[e.EXTRA_SMALL=1]="EXTRA_SMALL",e[e.SMALL=2]="SMALL",e[e.MEDIUM=3]="MEDIUM",e))(Ye||{});const Ke=1280,Fe=1024,Ze=768,je=320,qe=414,Je=720,ye=(e,t,a)=>{var u,i;let s=1,l=2,n="regular",r="regular";const h=(u=a.hasMouse)!=null?u:x,v=(i=a.deviceHasHover)!=null?i:be;return e>=Ke?s=5:e>=Fe?s=4:e>=Ze?s=3:e>=je?s=2:s=1,t>=Je?l=3:t>qe?l=2:l=1,a.viewWidth&&(s=a.viewWidth),a.viewHeight&&(l=a.viewHeight),s<=2&&(r="compact"),(s>=3&&h||l<=1)&&(n="compact"),a.sizeX&&(r=a.sizeX),a.sizeY&&(n=a.sizeY),{viewWidth:s,viewHeight:l,sizeX:r,sizeY:n,hasMouse:h,deviceHasHover:v}};function kt(){return K(Ae)||k({sizeX:J.COMPACT,sizeY:J.REGULAR,hasMouse:x,deviceHasHover:be})}function Q(...e){const t=[];return e.forEach(a=>{if(!!a)switch(typeof a){case"string":t.push(a);break;case"object":Object.keys(a).forEach(s=>{a[s]&&t.push(s)});break;default:t.push(`${a}`)}}),t.join(" ")}function Qe(e){let t;const a=e[9].default,s=U(a,e,e[8],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),t=!0},p(l,[n]){s&&s.p&&(!t||n&256)&&N(s,a,l,l[8],t?V(a,l[8],n,null):R(l[8]),null)},i(l){t||(M(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){s&&s.d(l)}}}function xe(e,t,a){var p,A;let s,l,{$$slots:n={},$$scope:r}=t;const h=We();X(e,h,o=>a(10,s=o));let{sizeX:v=void 0}=t,{sizeY:u=void 0}=t,{viewWidth:i=void 0}=t,{viewHeight:m=void 0}=t,{hasMouse:y=void 0}=t,{deviceHasHover:_=void 0}=t,c=k(ye((p=s.window)==null?void 0:p.innerWidth,(A=s.window)==null?void 0:A.innerHeight,{sizeX:v,sizeY:u,viewWidth:i,viewHeight:m,hasMouse:y,deviceHasHover:_}));X(e,c,o=>a(11,l=o)),b(Ae,c);const f=()=>{var g,T;const o=ye((g=s.window)==null?void 0:g.innerWidth,(T=s.window)==null?void 0:T.innerHeight,{sizeX:v,sizeY:u,viewWidth:i,viewHeight:m,hasMouse:y,deviceHasHover:_});(l.viewWidth!==o.viewWidth||l.viewHeight!==o.viewHeight||l.sizeX!==o.sizeX||l.sizeY!==o.sizeY||l.hasMouse!==o.hasMouse||l.deviceHasHover!==o.deviceHasHover)&&c.set(o)};return Le(()=>{f()}),Ee(()=>{var o;(o=s.window)==null||o.addEventListener("resize",f,!1)}),ze(()=>{var o;(o=s.window)==null||o.removeEventListener("resize",f,!1)}),e.$$set=o=>{"sizeX"in o&&a(2,v=o.sizeX),"sizeY"in o&&a(3,u=o.sizeY),"viewWidth"in o&&a(4,i=o.viewWidth),"viewHeight"in o&&a(5,m=o.viewHeight),"hasMouse"in o&&a(6,y=o.hasMouse),"deviceHasHover"in o&&a(7,_=o.deviceHasHover),"$$scope"in o&&a(8,r=o.$$scope)},[h,c,v,u,i,m,y,_,r,n]}class $e extends D{constructor(t){super();O(this,t,xe,Qe,B,{sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var I=(e=>(e.BRIGHT_LIGHT="bright_light",e.SPACE_GRAY="space_gray",e.VKCOM_LIGHT="vkcom_light",e.VKCOM_DARK="vkcom_dark",e))(I||{});function Te({platform:e,appearance:t}){switch(t){case"dark":switch(e){case de:return I.VKCOM_DARK;default:return I.SPACE_GRAY}case"light":default:switch(e){case de:return I.VKCOM_LIGHT;default:return I.BRIGHT_LIGHT}}}const et=e=>({class:e&1}),me=e=>({class:e[0]});function tt(e){let t;const a=e[7].default,s=U(a,e,e[6],me);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),t=!0},p(l,[n]){s&&s.p&&(!t||n&65)&&N(s,a,l,l[6],t?V(a,l[6],n,et):R(l[6]),me)},i(l){t||(M(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){s&&s.d(l)}}}const Ie=(e,t)=>{let a;switch(e){case G.ANDROID:a="vkBase";break;case G.IOS:a="vkIOS";break;case G.VKCOM:a="vkCom";break;default:a=e}return`vkui--${a}--${t}`},bt=(e,t)=>`vkui${Te({platform:e,appearance:t})} ${Ie(e,t)}`;function st(e,t,a){let s,l,n,{$$slots:r={},$$scope:h}=t;const v=Se();X(e,v,c=>a(5,n=c));let{appearance:u="light"}=t,{scheme:i=void 0}=t,m=k(s),y=k(u),_=k(l);return b(w.scheme,m),b(w.appearance,y),b(w.classAppearance,_),e.$$set=c=>{"appearance"in c&&a(2,u=c.appearance),"scheme"in c&&a(3,i=c.scheme),"$$scope"in c&&a(6,h=c.$$scope)},e.$$.update=()=>{e.$$.dirty&44&&a(4,s=i||Te({platform:n,appearance:u})),e.$$.dirty&52&&a(0,l=`vkui${s} ${Ie(n,u)}`),e.$$.dirty&16&&m.set(s),e.$$.dirty&4&&y.set(u),e.$$.dirty&1&&_.set(l)},[l,v,u,i,s,n,h,r]}class lt extends D{constructor(t){super();O(this,t,st,tt,B,{appearance:2,scheme:3})}}function at(e){let t;const a=e[2].default,s=U(a,e,e[1],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),t=!0},p(l,[n]){s&&s.p&&(!t||n&2)&&N(s,a,l,l[1],t?V(a,l[1],n,null):R(l[1]),null)},i(l){t||(M(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){s&&s.d(l)}}}function nt(e,t,a){let{$$slots:s={},$$scope:l}=t,{value:n=Y()}=t;const r=k(n);return b(Me,r),e.$$set=h=>{"value"in h&&a(0,n=h.value),"$$scope"in h&&a(1,l=h.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&r.set(n)},[n,l,s]}class _t extends D{constructor(t){super();O(this,t,nt,at,B,{value:0})}}function it(e){let t;const a=e[14].default,s=U(a,e,e[15],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),t=!0},p(l,n){s&&s.p&&(!t||n&32768)&&N(s,a,l,l[15],t?V(a,l[15],n,null):R(l[15]),null)},i(l){t||(M(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){s&&s.d(l)}}}function rt(e){let t,a;return t=new lt({props:{appearance:e[1],scheme:e[0],$$slots:{default:[it]},$$scope:{ctx:e}}}),{c(){$(t.$$.fragment)},l(s){ee(t.$$.fragment,s)},m(s,l){te(t,s,l),a=!0},p(s,l){const n={};l&2&&(n.appearance=s[1]),l&1&&(n.scheme=s[0]),l&32768&&(n.$$scope={dirty:l,ctx:s}),t.$set(n)},i(s){a||(M(t.$$.fragment,s),a=!0)},o(s){C(t.$$.fragment,s),a=!1},d(s){se(t,s)}}}function ot(e){let t,a;return t=new $e({props:{sizeX:e[5],sizeY:e[6],viewWidth:e[7],hasMouse:e[2],$$slots:{default:[rt]},$$scope:{ctx:e}}}),{c(){$(t.$$.fragment)},l(s){ee(t.$$.fragment,s)},m(s,l){te(t,s,l),a=!0},p(s,l){const n={};l&32&&(n.sizeX=s[5]),l&64&&(n.sizeY=s[6]),l&128&&(n.viewWidth=s[7]),l&4&&(n.hasMouse=s[2]),l&32771&&(n.$$scope={dirty:l,ctx:s}),t.$set(n)},i(s){a||(M(t.$$.fragment,s),a=!0)},o(s){C(t.$$.fragment,s),a=!1},d(s){se(t,s)}}}function ct(e){let t,a;return t=new _t({props:{value:{window:e[3],document:e[4]},$$slots:{default:[ot]},$$scope:{ctx:e}}}),{c(){$(t.$$.fragment)},l(s){ee(t.$$.fragment,s)},m(s,l){te(t,s,l),a=!0},p(s,[l]){const n={};l&24&&(n.value={window:s[3],document:s[4]}),l&32999&&(n.$$scope={dirty:l,ctx:s}),t.$set(n)},i(s){a||(M(t.$$.fragment,s),a=!0)},o(s){C(t.$$.fragment,s),a=!1},d(s){se(t,s)}}}function vt(e,t,a){let{$$slots:s={},$$scope:l}=t,{scheme:n="bright_light"}=t,{isWebView:r=!1}=t,{webviewType:h=Ce.VKAPPS}=t,{app:v=""}=t,{appearance:u="light"}=t,{transitionMotionEnabled:i=!0}=t,{platform:m=Z()}=t,{hasNewTokens:y=!1}=t,{hasMouse:_=x}=t,{contentWindow:c=Y().window}=t,{contentDocument:f=Y().document}=t,{sizeX:p=void 0}=t,{sizeY:A=void 0}=t,{viewWidth:o=void 0}=t,g=k(r),T=k(h),ae=k(v),ne=k(i),_e=k(m),ie=k(y);return b(w.isWebView,g),b(w.webviewType,T),b(w.app,ae),b(w.transitionMotionEnabled,ne),b(w.platform,_e),b(w.hasNewTokens,ie),e.$$set=d=>{"scheme"in d&&a(0,n=d.scheme),"isWebView"in d&&a(8,r=d.isWebView),"webviewType"in d&&a(9,h=d.webviewType),"app"in d&&a(10,v=d.app),"appearance"in d&&a(1,u=d.appearance),"transitionMotionEnabled"in d&&a(11,i=d.transitionMotionEnabled),"platform"in d&&a(12,m=d.platform),"hasNewTokens"in d&&a(13,y=d.hasNewTokens),"hasMouse"in d&&a(2,_=d.hasMouse),"contentWindow"in d&&a(3,c=d.contentWindow),"contentDocument"in d&&a(4,f=d.contentDocument),"sizeX"in d&&a(5,p=d.sizeX),"sizeY"in d&&a(6,A=d.sizeY),"viewWidth"in d&&a(7,o=d.viewWidth),"$$scope"in d&&a(15,l=d.$$scope)},e.$$.update=()=>{e.$$.dirty&256&&g.set(r),e.$$.dirty&512&&T.set(h),e.$$.dirty&1024&&ae.set(v),e.$$.dirty&2048&&ne.set(i),e.$$.dirty&4096&&_e.set(m),e.$$.dirty&8192&&ie.set(y)},[n,u,_,c,f,p,A,o,r,h,v,i,m,y,s,l]}class wt extends D{constructor(t){super();O(this,t,vt,ct,B,{scheme:0,isWebView:8,webviewType:9,app:10,appearance:1,transitionMotionEnabled:11,platform:12,hasNewTokens:13,hasMouse:2,contentWindow:3,contentDocument:4,sizeX:5,sizeY:6,viewWidth:7})}}const ut="SSRContext",j={};function ft(e){if(j[e])return j[e];const t=Z(e);let a=null;t===le&&(a=dt(e));const s={userAgent:e,platform:t,platformVersion:a};return j[e]=s,s}function dt(e){if(!e)return null;const t=e.match(/(iphone os|cpu os|ios) \b([0-9]+_[0-9]+(?:_[0-9]+)?)\b/i);if(!t)return null;const[a,s,l]=t[2].replace(/_/g,".").split(".");return{major:parseInt(a)||0,minor:parseInt(s)||0,patch:parseInt(l)||0}}function ht(){const e=K(ut);let t=L&&navigator.userAgent?navigator.userAgent:"";return e&&e.platform&&(t=e.userAgent),ft(t)}function ge(e,t,a){const s=e.slice();return s[16]=t[a],s}function pe(e){let t,a;return{c(){t=E("div"),this.h()},l(s){t=z(s,"DIV",{class:!0,style:!0}),H(t).forEach(S),this.h()},h(){P(t,"class","UsersStack__photo svelte-1r1itkb"),P(t,"style",a=`background-image: url(${e[16]})`)},m(s,l){F(s,t,l)},p:we,d(s){s&&S(t)}}}function yt(e){let t,a=`+${e[5]}`,s,l;return{c(){t=E("div"),s=Pe(a),this.h()},l(n){t=z(n,"DIV",{class:!0});var r=H(t);s=De(r,a),r.forEach(S),this.h()},h(){P(t,"class",l=Oe(Q("UsersStack__photo","UsersStack__photo--others"))+" svelte-1r1itkb")},m(n,r){F(n,t,r),W(t,s)},p:we,d(n){n&&S(t)}}}function ke(e){let t,a;const s=e[14].default,l=U(s,e,e[13],null);return{c(){t=E("div"),l&&l.c(),this.h()},l(n){t=z(n,"DIV",{class:!0});var r=H(t);l&&l.l(r),r.forEach(S),this.h()},h(){P(t,"class","UsersStack__text svelte-1r1itkb")},m(n,r){F(n,t,r),l&&l.m(t,null),a=!0},p(n,r){l&&l.p&&(!a||r&8192)&&N(l,s,n,n[13],a?V(s,n[13],r,null):R(n[13]),null)},i(n){a||(M(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&S(t),l&&l.d(n)}}}function mt(e){let t,a,s,l,n,r,h=e[7],v=[];for(let _=0;_<h.length;_+=1)v[_]=pe(ge(e,h,_));let u=e[6]&&yt(e),i=e[10].default&&ke(e),m=[e[8],{class:n=Q(he("UsersStack",e[3]),`UsersStack--size-${e[0]}`,`UsersStack--l-${e[1]}`,{"UsersStack--others":e[6],"UsersStack--simple":!e[2]},e[9].class)}],y={};for(let _=0;_<m.length;_+=1)y=q(y,m[_]);return{c(){t=E("div"),a=E("div");for(let _=0;_<v.length;_+=1)v[_].c();s=re(),u&&u.c(),l=re(),i&&i.c(),this.h()},l(_){t=z(_,"DIV",{class:!0});var c=H(t);a=z(c,"DIV",{class:!0});var f=H(a);for(let p=0;p<v.length;p+=1)v[p].l(f);s=oe(f),u&&u.l(f),f.forEach(S),l=oe(c),i&&i.l(c),c.forEach(S),this.h()},h(){P(a,"class","UsersStack__photos svelte-1r1itkb"),ce(t,y),ve(t,"svelte-1r1itkb",!0)},m(_,c){F(_,t,c),W(t,a);for(let f=0;f<v.length;f+=1)v[f].m(a,null);W(a,s),u&&u.m(a,null),W(t,l),i&&i.m(t,null),r=!0},p(_,[c]){if(c&128){h=_[7];let f;for(f=0;f<h.length;f+=1){const p=ge(_,h,f);v[f]?v[f].p(p,c):(v[f]=pe(p),v[f].c(),v[f].m(a,s))}for(;f<v.length;f+=1)v[f].d(1);v.length=h.length}_[6]&&u.p(_,c),_[10].default?i?(i.p(_,c),c&1024&&M(i,1)):(i=ke(_),i.c(),M(i,1),i.m(t,null)):i&&(Be(),C(i,1,1,()=>{i=null}),Ue()),ce(t,y=Ne(m,[c&256&&_[8],(!r||c&527&&n!==(n=Q(he("UsersStack",_[3]),`UsersStack--size-${_[0]}`,`UsersStack--l-${_[1]}`,{"UsersStack--others":_[6],"UsersStack--simple":!_[2]},_[9].class)))&&{class:n}])),ve(t,"svelte-1r1itkb",!0)},i(_){r||(M(i),r=!0)},o(_){C(i),r=!1},d(_){_&&S(t),Re(v,_),u&&u.d(),i&&i.d()}}}if(L){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttributeNS(null,"id","__SVG_MASKS_NODE__"),e.setAttributeNS(null,"width","0"),e.setAttributeNS(null,"height","0"),e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.innerHTML=`<defs>
  <clipPath id="users_stack_mask_24_left">
    <path d="M3.9971785,12 C3.9971785,9.49005736 3.33667467,7.13438366 2.18,5.09731189 C4.35181237,2.01417617 7.93927741,0 11.9971785,0 C18.6245955,0 23.9971785,5.372583 23.9971785,12 C23.9971785,18.627417 18.6245955,24 11.9971785,24 C7.93927741,24 4.35181237,21.9858238 2.18,18.9026881 C3.33667467,16.8656163 3.9971785,14.5099426 3.9971785,12 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_24_right">
    <path d="M21.8171785,5.09731189 C20.6605038,7.13438366 20,9.49005736 20,12 C20,14.5099426 20.6605038,16.8656163 21.8171785,18.9026881 C19.6453661,21.9858238 16.0579011,24 12,24 C5.372583,24 3.90798505e-14,18.627417 3.90798505e-14,12 C3.90798505e-14,5.372583 5.372583,0 12,0 C16.0579011,0 19.6453661,2.01417617 21.8171785,5.09731189 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_left">
    <path d="M2.13430019,23.9892466 C3.32858917,21.5820026 4,18.8694095 4,16 C4,13.1305905 3.32858917,10.4179974 2.13430019,8.0107534 C4.89924175,3.22241289 10.0733034,-2.30926389e-14 16,-2.30926389e-14 C24.836556,-2.30926389e-14 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C10.0733034,32 4.89924175,28.7775871 2.13430019,23.9892466 L2.13430019,23.9892466 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_right">
    <path d="M29.8656998,8.0107534 C28.6714108,10.4179974 28,13.1305905 28,16 C28,18.8694095 28.6714108,21.5820026 29.8656998,23.9892466 C27.1007583,28.7775871 21.9266966,32 16,32 C7.163444,32 3.90798505e-14,24.836556 3.90798505e-14,16 C3.90798505e-14,7.163444 7.163444,0 16,0 C21.9266966,0 27.1007583,3.22241289 29.8656998,8.0107534 Z"></path>
  </clipPath>
</defs>`,He(()=>{document.body.appendChild(e)})}function gt(e,t,a){const s=["photos","size","layout","visibleCount"];let l=ue(t,s),n,{$$slots:r={},$$scope:h}=t;const v=Ve(r);let{photos:u=[]}=t,{size:i="s"}=t,{layout:m="horizontal"}=t,{visibleCount:y=3}=t;const{platformVersion:_}=ht(),c=Se();X(e,c,g=>a(3,n=g));const f=Math.max(0,u.length-y),p=f>0&&i==="m",A=u.slice(0,y);let o=!0;return n===le&&(o=_&&_.major>=12),e.$$set=g=>{a(9,t=q(q({},t),fe(g))),a(8,l=ue(t,s)),"photos"in g&&a(11,u=g.photos),"size"in g&&a(0,i=g.size),"layout"in g&&a(1,m=g.layout),"visibleCount"in g&&a(12,y=g.visibleCount),"$$scope"in g&&a(13,h=g.$$scope)},t=fe(t),[i,m,o,n,c,f,p,A,l,t,v,u,y,h,r]}class Mt extends D{constructor(t){super();O(this,t,gt,mt,B,{photos:11,size:0,layout:1,visibleCount:12})}}export{lt as A,w as C,Ke as D,le as I,je as M,G as P,J as S,Fe as T,Mt as U,Xe as V,Ce as W,Ye as a,Se as b,Q as c,We as d,bt as e,Y as f,he as g,wt as h,$e as i,de as j,Ge as k,Ze as l,qe as m,Je as n,ye as o,kt as u};