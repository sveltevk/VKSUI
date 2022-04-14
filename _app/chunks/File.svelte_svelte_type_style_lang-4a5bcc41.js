import{T as x,U as ke,D as w,V as F,W as A,S as D,i as O,s as L,N as W,O as N,P as U,Q as R,q as C,o as S,X as G,r as k,Y as ze,v as Ie,Z as Ae,w as $,x as ee,y as te,B as se,_ as Te,e as T,c as E,a as P,d as M,b as V,g as K,M as be,t as Ee,h as Pe,$ as Ve,L as Y,C as q,k as re,m as oe,a0 as ce,a1 as ve,n as De,p as Oe,z as Le,F as We,a2 as ue,a3 as Ne,a4 as fe}from"./vendor-3f5aaa84.js";const Ce="vkui_AdaptivityContext";var Q=(t=>(t.COMPACT="compact",t.REGULAR="regular",t))(Q||{});const Ue=1280,Re=1024,Ye=768,Be=320,Ge=414,Xe=720,he=(t,e,a)=>{var u,_;let s=1,l=2,n="regular",r="regular";const d=(u=a.hasMouse)!=null?u:x,v=(_=a.deviceHasHover)!=null?_:ke;return t>=Ue?s=5:t>=Re?s=4:t>=Ye?s=3:t>=Be?s=2:s=1,e>=Xe?l=3:e>Ge?l=2:l=1,a.viewWidth&&(s=a.viewWidth),a.viewHeight&&(l=a.viewHeight),s<=2&&(r="compact"),(s>=3&&d||l<=1)&&(n="compact"),a.sizeX&&(r=a.sizeX),a.sizeY&&(n=a.sizeY),{viewWidth:s,viewHeight:l,sizeX:r,sizeY:n,hasMouse:d,deviceHasHover:v}};function gt(){return F(Ce)||w({sizeX:Q.COMPACT,sizeY:Q.REGULAR,hasMouse:x,deviceHasHover:ke})}function J(...t){const e=[];return t.forEach(a=>{if(!!a)switch(typeof a){case"string":e.push(a);break;case"object":Object.keys(a).forEach(s=>{a[s]&&e.push(s)});break;default:e.push(`${a}`)}}),e.join(" ")}var b=(t=>(t.isWebView="vkui_isWebView",t.webviewType="vkui_webviewType",t.scheme="vkui_scheme",t.appearance="vkui_appearance",t.classAppearance="vkui_classAppearance",t.app="vkui_app",t.transitionMotionEnabled="vkui_transitionMotionEnabled",t.platform="vkui_platform",t.hasNewTokens="vkui_hasNewTokens",t))(b||{}),Se=(t=>(t.VKAPPS="vkapps",t.INTERNAL="internal",t))(Se||{});const Me="vkui_DOMContext",X=()=>({window:A?window:void 0,document:A?document:void 0}),Fe=()=>F(Me)||w(X());var B=(t=>(t.ANDROID="android",t.IOS="ios",t.VKCOM="vkcom",t))(B||{});const Ke="android",le="ios",de="vkcom";function Z(t){const e=t||A&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(e)?le:Ke}function He(){return F(b.platform)||w(Z())}function me(t,e=Z()){return`${t} ${t}--${e}`}function Ze(t){let e;const a=t[9].default,s=W(a,t,t[8],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,[n]){s&&s.p&&(!e||n&256)&&N(s,a,l,l[8],e?R(a,l[8],n,null):U(l[8]),null)},i(l){e||(C(s,l),e=!0)},o(l){S(s,l),e=!1},d(l){s&&s.d(l)}}}function je(t,e,a){var p,H;let s,l,{$$slots:n={},$$scope:r}=e;const d=Fe();G(t,d,o=>a(10,s=o));let{sizeX:v=void 0}=e,{sizeY:u=void 0}=e,{viewWidth:_=void 0}=e,{viewHeight:y=void 0}=e,{hasMouse:m=void 0}=e,{deviceHasHover:i=void 0}=e,c=w(he((p=s.window)==null?void 0:p.innerWidth,(H=s.window)==null?void 0:H.innerHeight,{sizeX:v,sizeY:u,viewWidth:_,viewHeight:y,hasMouse:m,deviceHasHover:i}));G(t,c,o=>a(11,l=o)),k(Ce,c);const f=()=>{var g,z;const o=he((g=s.window)==null?void 0:g.innerWidth,(z=s.window)==null?void 0:z.innerHeight,{sizeX:v,sizeY:u,viewWidth:_,viewHeight:y,hasMouse:m,deviceHasHover:i});(l.viewWidth!==o.viewWidth||l.viewHeight!==o.viewHeight||l.sizeX!==o.sizeX||l.sizeY!==o.sizeY||l.hasMouse!==o.hasMouse||l.deviceHasHover!==o.deviceHasHover)&&c.set(o)};return ze(()=>{f()}),Ie(()=>{var o;(o=s.window)==null||o.addEventListener("resize",f,!1)}),Ae(()=>{var o;(o=s.window)==null||o.removeEventListener("resize",f,!1)}),t.$$set=o=>{"sizeX"in o&&a(2,v=o.sizeX),"sizeY"in o&&a(3,u=o.sizeY),"viewWidth"in o&&a(4,_=o.viewWidth),"viewHeight"in o&&a(5,y=o.viewHeight),"hasMouse"in o&&a(6,m=o.hasMouse),"deviceHasHover"in o&&a(7,i=o.deviceHasHover),"$$scope"in o&&a(8,r=o.$$scope)},[d,c,v,u,_,y,m,i,r,n]}class qe extends D{constructor(e){super();O(this,e,je,Ze,L,{sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var I=(t=>(t.BRIGHT_LIGHT="bright_light",t.SPACE_GRAY="space_gray",t.VKCOM_LIGHT="vkcom_light",t.VKCOM_DARK="vkcom_dark",t))(I||{});function Qe({platform:t,appearance:e}){switch(e){case"dark":switch(t){case de:return I.VKCOM_DARK;default:return I.SPACE_GRAY}case"light":default:switch(t){case de:return I.VKCOM_LIGHT;default:return I.BRIGHT_LIGHT}}}const Je=t=>({class:t&1}),ye=t=>({class:t[0]});function xe(t){let e;const a=t[7].default,s=W(a,t,t[6],ye);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,[n]){s&&s.p&&(!e||n&65)&&N(s,a,l,l[6],e?R(a,l[6],n,Je):U(l[6]),ye)},i(l){e||(C(s,l),e=!0)},o(l){S(s,l),e=!1},d(l){s&&s.d(l)}}}const $e=(t,e)=>{let a;switch(t){case B.ANDROID:a="vkBase";break;case B.IOS:a="vkIOS";break;case B.VKCOM:a="vkCom";break;default:a=t}return`vkui--${a}--${e}`};function et(t,e,a){let s,l,n,{$$slots:r={},$$scope:d}=e;const v=He();G(t,v,c=>a(5,n=c));let{appearance:u="light"}=e,{scheme:_=void 0}=e,y=w(s),m=w(u),i=w(l);return k(b.scheme,y),k(b.appearance,m),k(b.classAppearance,i),t.$$set=c=>{"appearance"in c&&a(2,u=c.appearance),"scheme"in c&&a(3,_=c.scheme),"$$scope"in c&&a(6,d=c.$$scope)},t.$$.update=()=>{t.$$.dirty&44&&a(4,s=_||Qe({platform:n,appearance:u})),t.$$.dirty&52&&a(0,l=`vkui${s} ${$e(n,u)}`),t.$$.dirty&16&&y.set(s),t.$$.dirty&4&&m.set(u),t.$$.dirty&1&&i.set(l)},[l,v,u,_,s,n,d,r]}class tt extends D{constructor(e){super();O(this,e,et,xe,L,{appearance:2,scheme:3})}}function st(t){let e;const a=t[2].default,s=W(a,t,t[1],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,[n]){s&&s.p&&(!e||n&2)&&N(s,a,l,l[1],e?R(a,l[1],n,null):U(l[1]),null)},i(l){e||(C(s,l),e=!0)},o(l){S(s,l),e=!1},d(l){s&&s.d(l)}}}function lt(t,e,a){let{$$slots:s={},$$scope:l}=e,{value:n=X()}=e;const r=w(n);return k(Me,r),t.$$set=d=>{"value"in d&&a(0,n=d.value),"$$scope"in d&&a(1,l=d.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&r.set(n)},[n,l,s]}class at extends D{constructor(e){super();O(this,e,lt,st,L,{value:0})}}function nt(t){let e;const a=t[14].default,s=W(a,t,t[15],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){s&&s.p&&(!e||n&32768)&&N(s,a,l,l[15],e?R(a,l[15],n,null):U(l[15]),null)},i(l){e||(C(s,l),e=!0)},o(l){S(s,l),e=!1},d(l){s&&s.d(l)}}}function it(t){let e,a;return e=new tt({props:{appearance:t[1],scheme:t[0],$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,l){te(e,s,l),a=!0},p(s,l){const n={};l&2&&(n.appearance=s[1]),l&1&&(n.scheme=s[0]),l&32768&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){a||(C(e.$$.fragment,s),a=!0)},o(s){S(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function _t(t){let e,a;return e=new qe({props:{sizeX:t[5],sizeY:t[6],viewWidth:t[7],hasMouse:t[2],$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,l){te(e,s,l),a=!0},p(s,l){const n={};l&32&&(n.sizeX=s[5]),l&64&&(n.sizeY=s[6]),l&128&&(n.viewWidth=s[7]),l&4&&(n.hasMouse=s[2]),l&32771&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){a||(C(e.$$.fragment,s),a=!0)},o(s){S(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function rt(t){let e,a;return e=new at({props:{value:{window:t[3],document:t[4]},$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,l){te(e,s,l),a=!0},p(s,[l]){const n={};l&24&&(n.value={window:s[3],document:s[4]}),l&32999&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){a||(C(e.$$.fragment,s),a=!0)},o(s){S(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function ot(t,e,a){let{$$slots:s={},$$scope:l}=e,{scheme:n="bright_light"}=e,{isWebView:r=!1}=e,{webviewType:d=Se.VKAPPS}=e,{app:v=""}=e,{appearance:u="light"}=e,{transitionMotionEnabled:_=!0}=e,{platform:y=Z()}=e,{hasNewTokens:m=!1}=e,{hasMouse:i=x}=e,{contentWindow:c=X().window}=e,{contentDocument:f=X().document}=e,{sizeX:p=void 0}=e,{sizeY:H=void 0}=e,{viewWidth:o=void 0}=e,g=w(r),z=w(d),ae=w(v),ne=w(_),ie=w(y),_e=w(m);return k(b.isWebView,g),k(b.webviewType,z),k(b.app,ae),k(b.transitionMotionEnabled,ne),k(b.platform,ie),k(b.hasNewTokens,_e),t.$$set=h=>{"scheme"in h&&a(0,n=h.scheme),"isWebView"in h&&a(8,r=h.isWebView),"webviewType"in h&&a(9,d=h.webviewType),"app"in h&&a(10,v=h.app),"appearance"in h&&a(1,u=h.appearance),"transitionMotionEnabled"in h&&a(11,_=h.transitionMotionEnabled),"platform"in h&&a(12,y=h.platform),"hasNewTokens"in h&&a(13,m=h.hasNewTokens),"hasMouse"in h&&a(2,i=h.hasMouse),"contentWindow"in h&&a(3,c=h.contentWindow),"contentDocument"in h&&a(4,f=h.contentDocument),"sizeX"in h&&a(5,p=h.sizeX),"sizeY"in h&&a(6,H=h.sizeY),"viewWidth"in h&&a(7,o=h.viewWidth),"$$scope"in h&&a(15,l=h.$$scope)},t.$$.update=()=>{t.$$.dirty&256&&g.set(r),t.$$.dirty&512&&z.set(d),t.$$.dirty&1024&&ae.set(v),t.$$.dirty&2048&&ne.set(_),t.$$.dirty&4096&&ie.set(y),t.$$.dirty&8192&&_e.set(m)},[n,u,i,c,f,p,H,o,r,d,v,_,y,m,s,l]}class pt extends D{constructor(e){super();O(this,e,ot,rt,L,{scheme:0,isWebView:8,webviewType:9,app:10,appearance:1,transitionMotionEnabled:11,platform:12,hasNewTokens:13,hasMouse:2,contentWindow:3,contentDocument:4,sizeX:5,sizeY:6,viewWidth:7})}}const ct="SSRContext",j={};function vt(t){if(j[t])return j[t];const e=Z(t);let a=null;e===le&&(a=ut(t));const s={userAgent:t,platform:e,platformVersion:a};return j[t]=s,s}function ut(t){if(!t)return null;const e=t.match(/(iphone os|cpu os|ios) \b([0-9]+_[0-9]+(?:_[0-9]+)?)\b/i);if(!e)return null;const[a,s,l]=e[2].replace(/_/g,".").split(".");return{major:parseInt(a)||0,minor:parseInt(s)||0,patch:parseInt(l)||0}}function ft(){const t=F(ct);let e=A&&navigator.userAgent?navigator.userAgent:"";return t&&t.platform&&(e=t.userAgent),vt(e)}function ge(t,e,a){const s=t.slice();return s[16]=e[a],s}function pe(t){let e,a;return{c(){e=T("div"),this.h()},l(s){e=E(s,"DIV",{class:!0,style:!0}),P(e).forEach(M),this.h()},h(){V(e,"class","UsersStack__photo svelte-1r1itkb"),V(e,"style",a=`background-image: url(${t[16]})`)},m(s,l){K(s,e,l)},p:be,d(s){s&&M(e)}}}function ht(t){let e,a=`+${t[5]}`,s,l;return{c(){e=T("div"),s=Ee(a),this.h()},l(n){e=E(n,"DIV",{class:!0});var r=P(e);s=Pe(r,a),r.forEach(M),this.h()},h(){V(e,"class",l=Ve(J("UsersStack__photo","UsersStack__photo--others"))+" svelte-1r1itkb")},m(n,r){K(n,e,r),Y(e,s)},p:be,d(n){n&&M(e)}}}function we(t){let e,a;const s=t[14].default,l=W(s,t,t[13],null);return{c(){e=T("div"),l&&l.c(),this.h()},l(n){e=E(n,"DIV",{class:!0});var r=P(e);l&&l.l(r),r.forEach(M),this.h()},h(){V(e,"class","UsersStack__text svelte-1r1itkb")},m(n,r){K(n,e,r),l&&l.m(e,null),a=!0},p(n,r){l&&l.p&&(!a||r&8192)&&N(l,s,n,n[13],a?R(s,n[13],r,null):U(n[13]),null)},i(n){a||(C(l,n),a=!0)},o(n){S(l,n),a=!1},d(n){n&&M(e),l&&l.d(n)}}}function dt(t){let e,a,s,l,n,r,d=t[7],v=[];for(let i=0;i<d.length;i+=1)v[i]=pe(ge(t,d,i));let u=t[6]&&ht(t),_=t[10].default&&we(t),y=[t[8],{class:n=J(me("UsersStack",t[3]),`UsersStack--size-${t[0]}`,`UsersStack--l-${t[1]}`,{"UsersStack--others":t[6],"UsersStack--simple":!t[2]},t[9].class)}],m={};for(let i=0;i<y.length;i+=1)m=q(m,y[i]);return{c(){e=T("div"),a=T("div");for(let i=0;i<v.length;i+=1)v[i].c();s=re(),u&&u.c(),l=re(),_&&_.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var c=P(e);a=E(c,"DIV",{class:!0});var f=P(a);for(let p=0;p<v.length;p+=1)v[p].l(f);s=oe(f),u&&u.l(f),f.forEach(M),l=oe(c),_&&_.l(c),c.forEach(M),this.h()},h(){V(a,"class","UsersStack__photos svelte-1r1itkb"),ce(e,m),ve(e,"svelte-1r1itkb",!0)},m(i,c){K(i,e,c),Y(e,a);for(let f=0;f<v.length;f+=1)v[f].m(a,null);Y(a,s),u&&u.m(a,null),Y(e,l),_&&_.m(e,null),r=!0},p(i,[c]){if(c&128){d=i[7];let f;for(f=0;f<d.length;f+=1){const p=ge(i,d,f);v[f]?v[f].p(p,c):(v[f]=pe(p),v[f].c(),v[f].m(a,s))}for(;f<v.length;f+=1)v[f].d(1);v.length=d.length}i[6]&&u.p(i,c),i[10].default?_?(_.p(i,c),c&1024&&C(_,1)):(_=we(i),_.c(),C(_,1),_.m(e,null)):_&&(De(),S(_,1,1,()=>{_=null}),Oe()),ce(e,m=Le(y,[c&256&&i[8],(!r||c&527&&n!==(n=J(me("UsersStack",i[3]),`UsersStack--size-${i[0]}`,`UsersStack--l-${i[1]}`,{"UsersStack--others":i[6],"UsersStack--simple":!i[2]},i[9].class)))&&{class:n}])),ve(e,"svelte-1r1itkb",!0)},i(i){r||(C(_),r=!0)},o(i){S(_),r=!1},d(i){i&&M(e),We(v,i),u&&u.d(),_&&_.d()}}}if(A){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttributeNS(null,"id","__SVG_MASKS_NODE__"),t.setAttributeNS(null,"width","0"),t.setAttributeNS(null,"height","0"),t.style.position="absolute",t.style.width="0px",t.style.height="0px",t.innerHTML=`<defs>
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
</defs>`,Te(()=>{document.body.appendChild(t)})}function mt(t,e,a){const s=["photos","size","layout","visibleCount"];let l=ue(e,s),n,{$$slots:r={},$$scope:d}=e;const v=Ne(r);let{photos:u=[]}=e,{size:_="s"}=e,{layout:y="horizontal"}=e,{visibleCount:m=3}=e;const{platformVersion:i}=ft(),c=He();G(t,c,g=>a(3,n=g));const f=Math.max(0,u.length-m),p=f>0&&_==="m",H=u.slice(0,m);let o=!0;return n===le&&(o=i&&i.major>=12),t.$$set=g=>{a(9,e=q(q({},e),fe(g))),a(8,l=ue(e,s)),"photos"in g&&a(11,u=g.photos),"size"in g&&a(0,_=g.size),"layout"in g&&a(1,y=g.layout),"visibleCount"in g&&a(12,m=g.visibleCount),"$$scope"in g&&a(13,d=g.$$scope)},e=fe(e),[_,y,o,n,c,f,p,H,l,e,v,u,m,d,r]}class wt extends D{constructor(e){super();O(this,e,mt,dt,L,{photos:11,size:0,layout:1,visibleCount:12})}}export{Ke as A,pt as C,Ue as D,le as I,Be as M,B as P,Q as S,Re as T,wt as U,de as V,Se as W,He as a,Fe as b,J as c,Ye as d,Ge as e,Xe as f,me as g,he as h,tt as i,X as j,b as k,qe as l,gt as u};