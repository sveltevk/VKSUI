import{a5 as H,D as h,a6 as j,a7 as q,a8 as J,S as L,i as z,s as P,K as S,L as D,M as N,N as R,q as w,o as k,H as Q,r as g,a9 as le,v as ie,aa as ne,C as M,I,w as x,x as $,y as ee,B as te,ab as _e}from"./vendor-bba0ddf7.js";const A=()=>({window:H?window:void 0,document:H?document:void 0});var E=(e=>(e.ANDROID="android",e.IOS="ios",e.VKCOM="vkcom",e))(E||{});const re="android",ve="ios",Z="vkcom";function G(e){const t=e||H&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(t)?ve:re}var y=(e=>(e.isWebView="vkui_isWebView",e.webviewType="vkui_webviewType",e.scheme="vkui_scheme",e.appearance="vkui_appearance",e.app="vkui_app",e.transitionMotionEnabled="vkui_transitionMotionEnabled",e.platform="vkui_platform",e.hasNewTokens="vkui_hasNewTokens",e.contentWindow="vkui_contentWindow",e.contentDocument="vkui_contentDocument",e))(y||{}),b=(e=>(e.DEPRECATED_CLIENT_LIGHT="client_light",e.DEPRECATED_CLIENT_DARK="client_dark",e.BRIGHT_LIGHT="bright_light",e.SPACE_GRAY="space_gray",e))(b||{}),ae=(e=>(e.VKAPPS="vkapps",e.INTERNAL="internal",e))(ae||{});function ce(){return j(y.platform)||h(G())}function De(...e){let t=[];return e.forEach(s=>{if(!!s)switch(typeof s){case"string":t.push(s);break;case"object":Object.keys(s).forEach(a=>{s[a]&&t.push(a)});break;default:t.push(`${s}`)}}),t.join(" ")}function Ne(e,t=G()){return`${e} ${e}--${t}`}const se="AdaptivityContext";var p=(e=>(e.COMPACT="compact",e.REGULAR="regular",e))(p||{});const oe=1280,ue=1024,fe=768,de=320,he=414,ye=720,U=(e,t,s)=>{var f,u;let a=1,l=2,i="regular",n="regular",v=(f=s.hasMouse)!=null?f:q,o=(u=s.deviceHasHover)!=null?u:J;return e>=oe?a=5:e>=ue?a=4:e>=fe?a=3:e>=de?a=2:a=1,t>=ye?l=3:t>he?l=2:l=1,s.viewWidth&&(a=s.viewWidth),s.viewHeight&&(l=s.viewHeight),a<=2&&(n="compact"),(a>=3&&v||l<=1)&&(i="compact"),s.sizeX&&(n=s.sizeX),s.sizeY&&(i=s.sizeY),{viewWidth:a,viewHeight:l,sizeX:n,sizeY:i,hasMouse:v,deviceHasHover:o}};function Re(){return j(se)||h({sizeX:p.COMPACT,sizeY:p.REGULAR,hasMouse:q,deviceHasHover:J})}function ge(e){let t;const s=e[9].default,a=S(s,e,e[8],null);return{c(){a&&a.c()},l(l){a&&a.l(l)},m(l,i){a&&a.m(l,i),t=!0},p(l,[i]){a&&a.p&&(!t||i&256)&&D(a,s,l,l[8],t?R(s,l[8],i,null):N(l[8]),null)},i(l){t||(w(a,l),t=!0)},o(l){k(a,l),t=!1},d(l){a&&a.d(l)}}}function me(e,t,s){let a,{$$slots:l={},$$scope:i}=t,{contentWindow:n=A().window}=t,{sizeX:v=void 0}=t,{sizeY:o=void 0}=t,{viewWidth:f=void 0}=t,{viewHeight:u=void 0}=t,{hasMouse:d=void 0}=t,{deviceHasHover:c=void 0}=t,m=h(U(n==null?void 0:n.innerWidth,n==null?void 0:n.innerHeight,{sizeX:v,sizeY:o,viewWidth:f,viewHeight:u,hasMouse:d,deviceHasHover:c}));Q(e,m,_=>s(10,a=_)),g(se,m);const C=()=>{const _=U(n==null?void 0:n.innerWidth,n==null?void 0:n.innerHeight,{sizeX:v,sizeY:o,viewWidth:f,viewHeight:u,hasMouse:d,deviceHasHover:c});(a.viewWidth!==_.viewWidth||a.viewHeight!==_.viewHeight||a.sizeX!==_.sizeX||a.sizeY!==_.sizeY||a.hasMouse!==_.hasMouse||a.deviceHasHover!==_.deviceHasHover)&&m.set(_)};return le(()=>{C()}),ie(()=>{n==null||n.addEventListener("resize",C,!1)}),ne(()=>{n==null||n.removeEventListener("resize",C,!1)}),e.$$set=_=>{"contentWindow"in _&&s(1,n=_.contentWindow),"sizeX"in _&&s(2,v=_.sizeX),"sizeY"in _&&s(3,o=_.sizeY),"viewWidth"in _&&s(4,f=_.viewWidth),"viewHeight"in _&&s(5,u=_.viewHeight),"hasMouse"in _&&s(6,d=_.hasMouse),"deviceHasHover"in _&&s(7,c=_.deviceHasHover),"$$scope"in _&&s(8,i=_.$$scope)},[m,n,v,o,f,u,d,c,i,l]}class Ce extends L{constructor(t){super();z(this,t,me,ge,P,{contentWindow:1,sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var T=(e=>(e.BRIGHT_LIGHT="bright_light",e.SPACE_GRAY="space_gray",e.VKCOM_LIGHT="vkcom_light",e.VKCOM_DARK="vkcom_dark",e))(T||{});function be({platform:e,appearance:t}){switch(t){case"dark":switch(e){case Z:return T.VKCOM_DARK;default:return T.SPACE_GRAY}case"light":switch(e){case Z:return T.VKCOM_LIGHT;default:return T.BRIGHT_LIGHT}}}function Te(e){let t;const s=e[6].default,a=S(s,e,e[5],null);return{c(){a&&a.c()},l(l){a&&a.l(l)},m(l,i){a&&a.m(l,i),t=!0},p(l,[i]){a&&a.p&&(!t||i&32)&&D(a,s,l,l[5],t?R(s,l[5],i,null):N(l[5]),null)},i(l){t||(w(a,l),t=!0)},o(l){k(a,l),t=!1},d(l){a&&a.d(l)}}}const we=(e,t)=>{let s;switch(e){case E.ANDROID:s="vkBase";break;case E.IOS:s="vkIOS";break;case E.VKCOM:s="vkCom";break;default:s=e}return`vkui--${s}--${t}`},ke=(e,t)=>{var s;(s=t||A().document)==null||s.body.setAttribute("scheme",e)},Ae=(e,t,s)=>{var a;(a=s||A().document)==null||a.body.setAttribute("class",we(e,t))};function Ee(e,t,s){let a,l,{$$slots:i={},$$scope:n}=t,{appearance:v="light"}=t,{scheme:o=void 0}=t;const f=ce();Q(e,f,c=>s(4,l=c));let u=h(a),d=h(v);return g(y.scheme,u),g(y.appearance,d),e.$$set=c=>{s(9,t=M(M({},t),I(c))),"appearance"in c&&s(1,v=c.appearance),"scheme"in c&&s(2,o=c.scheme),"$$scope"in c&&s(5,n=c.$$scope)},e.$$.update=()=>{e.$$.dirty&22&&s(3,a=o||be({platform:l,appearance:v})),e.$$.dirty&8&&u.set(a),e.$$.dirty&2&&d.set(v),ke(o,t.document),Ae(l,v,t.document)},t=I(t),[f,v,o,a,l,n,i]}class He extends L{constructor(t){super();z(this,t,Ee,Te,P,{appearance:1,scheme:2})}}function Me(e){let t;const s=e[12].default,a=S(s,e,e[13],null);return{c(){a&&a.c()},l(l){a&&a.l(l)},m(l,i){a&&a.m(l,i),t=!0},p(l,i){a&&a.p&&(!t||i&8192)&&D(a,s,l,l[13],t?R(s,l[13],i,null):N(l[13]),null)},i(l){t||(w(a,l),t=!0)},o(l){k(a,l),t=!1},d(l){a&&a.d(l)}}}function Ie(e){let t,s;return t=new He({props:{appearance:e[1],scheme:e[0],$$slots:{default:[Me]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},l(a){$(t.$$.fragment,a)},m(a,l){ee(t,a,l),s=!0},p(a,l){const i={};l&2&&(i.appearance=a[1]),l&1&&(i.scheme=a[0]),l&8192&&(i.$$scope={dirty:l,ctx:a}),t.$set(i)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){te(t,a)}}}function pe(e){let t,s;return t=new Ce({props:{contentWindow:e[2],sizeX:e[3],sizeY:e[4],viewWidth:e[5],$$slots:{default:[Ie]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},l(a){$(t.$$.fragment,a)},m(a,l){ee(t,a,l),s=!0},p(a,[l]){const i={};l&4&&(i.contentWindow=a[2]),l&8&&(i.sizeX=a[3]),l&16&&(i.sizeY=a[4]),l&32&&(i.viewWidth=a[5]),l&8195&&(i.$$scope={dirty:l,ctx:a}),t.$set(i)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){te(t,a)}}}const Le=e=>{switch(e){case b.DEPRECATED_CLIENT_LIGHT:return b.BRIGHT_LIGHT;case b.DEPRECATED_CLIENT_DARK:return b.SPACE_GRAY;default:return e}},ze=(e,t)=>{var s;(s=t||A().document)==null||s.body.setAttribute("scheme",e)};function Pe(e,t,s){let{$$slots:a={},$$scope:l}=t,{scheme:i="bright_light"}=t,{isWebView:n=!1}=t,{webviewType:v=ae.VKAPPS}=t,{app:o=void 0}=t,{appearance:f="light"}=t,{transitionMotionEnabled:u=!0}=t,{platform:d=G()}=t,{hasNewTokens:c=!1}=t,{contentWindow:m=A().window}=t,{sizeX:C=void 0}=t,{sizeY:_=void 0}=t,{viewWidth:V=void 0}=t,O=h(n),W=h(v),Y=h(o),X=h(u),B=h(d),K=h(m),F=h(c);return g(y.isWebView,O),g(y.webviewType,W),g(y.app,Y),g(y.transitionMotionEnabled,X),g(y.platform,B),g(y.contentWindow,K),g(y.hasNewTokens,F),e.$$set=r=>{s(21,t=M(M({},t),I(r))),"scheme"in r&&s(0,i=r.scheme),"isWebView"in r&&s(6,n=r.isWebView),"webviewType"in r&&s(7,v=r.webviewType),"app"in r&&s(8,o=r.app),"appearance"in r&&s(1,f=r.appearance),"transitionMotionEnabled"in r&&s(9,u=r.transitionMotionEnabled),"platform"in r&&s(10,d=r.platform),"hasNewTokens"in r&&s(11,c=r.hasNewTokens),"contentWindow"in r&&s(2,m=r.contentWindow),"sizeX"in r&&s(3,C=r.sizeX),"sizeY"in r&&s(4,_=r.sizeY),"viewWidth"in r&&s(5,V=r.viewWidth),"$$scope"in r&&s(13,l=r.$$scope)},e.$$.update=()=>{e.$$.dirty&64&&O.set(n),e.$$.dirty&128&&W.set(v),e.$$.dirty&256&&Y.set(o),e.$$.dirty&512&&X.set(u),e.$$.dirty&1024&&B.set(d),e.$$.dirty&4&&K.set(m),e.$$.dirty&2048&&F.set(c),ze(Le(i),t.document)},t=I(t),[i,f,m,C,_,V,n,v,o,u,d,c,a,l]}class Ge extends L{constructor(t){super();z(this,t,Pe,pe,P,{scheme:0,isWebView:6,webviewType:7,app:8,appearance:1,transitionMotionEnabled:9,platform:10,hasNewTokens:11,contentWindow:2,sizeX:3,sizeY:4,viewWidth:5})}}if(H){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttributeNS(null,"id","__SVG_MASKS_NODE__"),e.setAttributeNS(null,"width","0"),e.setAttributeNS(null,"height","0"),e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.innerHTML=`<defs>
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
</defs>`,_e(()=>{document.body.appendChild(e)})}export{re as A,Ge as C,oe as D,ve as I,de as M,E as P,b as S,ue as T,Z as V,ae as W,ce as a,A as b,De as c,fe as d,he as e,ye as f,Ne as g,p as h,U as i,y as j,Re as u};