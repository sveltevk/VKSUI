import{S as Z,i as y,s as x,G as k,V as $e,a0 as Ne,e as S,w as F,k as A,c as B,a as T,x as E,m as D,d,b as N,f as ee,g,y as z,O as Y,H as P,I,J as R,a1 as Ae,q as p,o as b,B as C,v as De,aa as Ye,Z as Q,t as W,h as j,j as q,U as le,C as H,N as K,n as L,p as M,z as ke,P as X,R as G,T as U,ao as Se,W as Be,K as te,Q as Te,ah as Ve,l as oe}from"./vendor-9fde05ec.js";import{k as se,j as ae,I as ne,g as J,b as Pe,u as Ie,c as re}from"./File.svelte_svelte_type_style_lang-fd380a47.js";import{C as Re}from"./Caption-17bf2210.js";import{S as Fe}from"./Subhead-9a7aad1f.js";import{I as Ee}from"./IconButton-c27e264d.js";import{B as Oe,T as Le}from"./Tappable-ccba16c1.js";const Me=a=>({}),fe=a=>({});function He(a){let e;return{c(){e=S("i"),this.h()},l(o){e=B(o,"I",{class:!0,role:!0}),T(e).forEach(d),this.h()},h(){N(e,"class","Removable__toggle-in"),N(e,"role","presentation")},m(o,t){g(o,e,t)},d(o){o&&d(e)}}}function We(a){let e;return{c(){e=W(a[0])},l(o){e=j(o,a[0])},m(o,t){g(o,e,t)},p(o,t){t&1&&q(e,o[0])},d(o){o&&d(e)}}}function je(a){let e,o;const t=a[6].removePlaceholder,s=k(t,a,a[9],fe),l=s||We(a);return{c(){e=S("span"),l&&l.c(),this.h()},l(n){e=B(n,"SPAN",{class:!0});var f=T(e);l&&l.l(f),f.forEach(d),this.h()},h(){N(e,"class","Removable__remove-in")},m(n,f){g(n,e,f),l&&l.m(e,null),o=!0},p(n,f){s?s.p&&(!o||f&512)&&P(s,t,n,n[9],o?R(t,n[9],f,Me):I(n[9]),fe):l&&l.p&&(!o||f&1)&&l.p(n,o?f:-1)},i(n){o||(p(l,n),o=!0)},o(n){b(l,n),o=!1},d(n){n&&d(e),l&&l.d(n)}}}function qe(a){let e,o,t,s,l,n,f,i,r;o=new Ee({props:{hasActive:!1,hasHover:!1,"aria-label":a[0],class:"Removable__action Removable__toggle",disabled:a[3]>0,$$slots:{default:[He]},$$scope:{ctx:a}}}),o.$on("click",a[5]);const u=a[6].default,c=k(u,a,a[9],null);function h(m){a[7](m)}let $={component:Oe,hasActive:!1,hasHover:!1,disabled:a[2],class:"Removable__remove",$$slots:{default:[je]},$$scope:{ctx:a}};return a[1]!==void 0&&($.container=a[1]),f=new Le({props:$}),$e.push(()=>Ne(f,"container",h)),f.$on("click",a[8]),{c(){e=S("div"),F(o.$$.fragment),t=A(),c&&c.c(),s=A(),l=S("span"),n=A(),F(f.$$.fragment),this.h()},l(m){e=B(m,"DIV",{class:!0,ontransitionend:!0});var _=T(e);E(o.$$.fragment,_),t=D(_),c&&c.l(_),s=D(_),l=B(_,"SPAN",{class:!0,"aria-hidden":!0}),T(l).forEach(d),n=D(_),E(f.$$.fragment,_),_.forEach(d),this.h()},h(){var m;N(l,"class","Removable__offset"),N(l,"aria-hidden","true"),N(e,"class","Removable__content"),N(e,"ontransitionend",a[4]),ee(e,"transform",`translateX(-${(m=a[3])!=null?m:0}px)`,!1)},m(m,_){g(m,e,_),z(o,e,null),Y(e,t),c&&c.m(e,null),Y(e,s),Y(e,l),Y(e,n),z(f,e,null),r=!0},p(m,[_]){var w;const V={};_&1&&(V["aria-label"]=m[0]),_&8&&(V.disabled=m[3]>0),_&512&&(V.$$scope={dirty:_,ctx:m}),o.$set(V),c&&c.p&&(!r||_&512)&&P(c,u,m,m[9],r?R(u,m[9],_,null):I(m[9]),null);const O={};_&4&&(O.disabled=m[2]),_&513&&(O.$$scope={dirty:_,ctx:m}),!i&&_&2&&(i=!0,O.container=m[1],Ae(()=>i=!1)),f.$set(O),_&8&&ee(e,"transform",`translateX(-${(w=m[3])!=null?w:0}px)`,!1)},i(m){r||(p(o.$$.fragment,m),p(c,m),p(f.$$.fragment,m),r=!0)},o(m){b(o.$$.fragment,m),b(c,m),b(f.$$.fragment,m),r=!1},d(m){m&&d(e),C(o),c&&c.d(m),C(f)}}}function we(a,e,o){let{$$slots:t={},$$scope:s}=e,{removePlaceholder:l=""}=e,n,f=!0,i=0;const r=()=>{i>0&&o(3,i=0)};De(()=>window.addEventListener("click",r,{capture:!0})),Ye(()=>window.removeEventListener("click",r,{capture:!0}));const u=()=>{i>0?n==null||n.focus():o(2,f=!0)},c=m=>{if(m.stopPropagation(),!n)return;const{offsetWidth:_}=n;o(2,f=!1),o(3,i=_)};function h(m){n=m,o(1,n)}function $(m){Q.call(this,a,m)}return a.$$set=m=>{"removePlaceholder"in m&&o(0,l=m.removePlaceholder),"$$scope"in m&&o(9,s=m.$$scope)},[l,n,f,i,u,c,t,h,$,s]}class Ke extends Z{constructor(e){super();y(this,e,we,qe,x,{removePlaceholder:0})}}const Xe=a=>({}),ie=a=>({slot:"removePlaceholder"});function ue(a){let e,o,t,s;const l=a[7].default,n=k(l,a,a[10],null);return t=new Ee({props:{activeMode:"opacity",hoverMode:"opacity",class:"Removable__action","aria-label":a[0],$$slots:{default:[Ge]},$$scope:{ctx:a}}}),t.$on("click",a[8]),{c(){e=S("div"),n&&n.c(),o=A(),F(t.$$.fragment),this.h()},l(f){e=B(f,"DIV",{class:!0});var i=T(e);n&&n.l(i),o=D(i),E(t.$$.fragment,i),i.forEach(d),this.h()},h(){N(e,"class","Removable__content")},m(f,i){g(f,e,i),n&&n.m(e,null),Y(e,o),z(t,e,null),s=!0},p(f,i){n&&n.p&&(!s||i&1024)&&P(n,l,f,f[10],s?R(l,f[10],i,null):I(f[10]),null);const r={};i&1&&(r["aria-label"]=f[0]),i&1024&&(r.$$scope={dirty:i,ctx:f}),t.$set(r)},i(f){s||(p(n,f),p(t.$$.fragment,f),s=!0)},o(f){b(n,f),b(t.$$.fragment,f),s=!1},d(f){f&&d(e),n&&n.d(f),C(t)}}}function Ge(a){let e,o;return e=new Se({props:{role:"presentation"}}),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p:Be,i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function ce(a){let e,o;return e=new Ke({props:{removePlaceholder:a[0],$$slots:{removePlaceholder:[Ue],default:[Je]},$$scope:{ctx:a}}}),e.$on("click",a[9]),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&1&&(l.removePlaceholder=t[0]),s&1025&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function Je(a){let e;const o=a[7].default,t=k(o,a,a[10],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&1024)&&P(t,o,s,s[10],e?R(o,s[10],l,null):I(s[10]),null)},i(s){e||(p(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function Qe(a){let e;return{c(){e=W(a[0])},l(o){e=j(o,a[0])},m(o,t){g(o,e,t)},p(o,t){t&1&&q(e,o[0])},d(o){o&&d(e)}}}function Ue(a){let e;const o=a[7].removePlaceholder,t=k(o,a,a[10],ie),s=t||Qe(a);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&1024)&&P(t,o,l,l[10],e?R(o,l[10],n,Xe):I(l[10]),ie):s&&s.p&&(!e||n&1)&&s.p(l,e?n:-1)},i(l){e||(p(s,l),e=!0)},o(l){b(s,l),e=!1},d(l){s&&s.d(l)}}}function Ze(a){let e,o,t,s,l=(a[2]===se||a[2]===ae)&&ue(a),n=a[2]===ne&&ce(a),f=[a[6],{class:t=le(a[6].class,J("Removable",a[2]),`Removable--${a[1]}`,`Removable--sizeY-${a[3].sizeY}`)}],i={};for(let r=0;r<f.length;r+=1)i=H(i,f[r]);return{c(){e=S("div"),l&&l.c(),o=A(),n&&n.c(),this.h()},l(r){e=B(r,"DIV",{class:!0});var u=T(e);l&&l.l(u),o=D(u),n&&n.l(u),u.forEach(d),this.h()},h(){K(e,i)},m(r,u){g(r,e,u),l&&l.m(e,null),Y(e,o),n&&n.m(e,null),s=!0},p(r,[u]){r[2]===se||r[2]===ae?l?(l.p(r,u),u&4&&p(l,1)):(l=ue(r),l.c(),p(l,1),l.m(e,o)):l&&(L(),b(l,1,1,()=>{l=null}),M()),r[2]===ne?n?(n.p(r,u),u&4&&p(n,1)):(n=ce(r),n.c(),p(n,1),n.m(e,null)):n&&(L(),b(n,1,1,()=>{n=null}),M()),K(e,i=ke(f,[u&64&&r[6],(!s||u&78&&t!==(t=le(r[6].class,J("Removable",r[2]),`Removable--${r[1]}`,`Removable--sizeY-${r[3].sizeY}`)))&&{class:t}]))},i(r){s||(p(l),p(n),s=!0)},o(r){b(l),b(n),s=!1},d(r){r&&d(e),l&&l.d(),n&&n.d()}}}function ye(a,e,o){const t=["removePlaceholder","align"];let s=X(e,t),l,n,{$$slots:f={},$$scope:i}=e,{removePlaceholder:r="\u0423\u0434\u0430\u043B\u0438\u0442\u044C"}=e,{align:u="center"}=e;const c=Pe();G(a,c,_=>o(2,l=_));const h=Ie();G(a,h,_=>o(3,n=_));function $(_){Q.call(this,a,_)}function m(_){Q.call(this,a,_)}return a.$$set=_=>{e=H(H({},e),U(_)),o(6,s=X(e,t)),"removePlaceholder"in _&&o(0,r=_.removePlaceholder),"align"in _&&o(1,u=_.align),"$$scope"in _&&o(10,i=_.$$scope)},[r,u,l,n,c,h,s,f,$,m,i]}class xe extends Z{constructor(e){super();y(this,e,ye,Ze,x,{removePlaceholder:0,align:1})}}const el=a=>({}),me=a=>({}),ll=a=>({}),_e=a=>({}),tl=a=>({}),pe=a=>({}),ol=a=>({}),be=a=>({});function sl(a){let e,o,t,s,l=(a[12].top||a[0])&&de(a);const n=a[14].default,f=k(n,a,a[17],null);let i=(a[12].bottom||a[1])&&he(a);return{c(){l&&l.c(),e=A(),f&&f.c(),o=A(),i&&i.c(),t=oe()},l(r){l&&l.l(r),e=D(r),f&&f.l(r),o=D(r),i&&i.l(r),t=oe()},m(r,u){l&&l.m(r,u),g(r,e,u),f&&f.m(r,u),g(r,o,u),i&&i.m(r,u),g(r,t,u),s=!0},p(r,u){r[12].top||r[0]?l?(l.p(r,u),u&4097&&p(l,1)):(l=de(r),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(L(),b(l,1,1,()=>{l=null}),M()),f&&f.p&&(!s||u&131072)&&P(f,n,r,r[17],s?R(n,r[17],u,null):I(r[17]),null),r[12].bottom||r[1]?i?(i.p(r,u),u&4098&&p(i,1)):(i=he(r),i.c(),p(i,1),i.m(t.parentNode,t)):i&&(L(),b(i,1,1,()=>{i=null}),M())},i(r){s||(p(l),p(f,r),p(i),s=!0)},o(r){b(l),b(f,r),b(i),s=!1},d(r){l&&l.d(r),r&&d(e),f&&f.d(r),r&&d(o),i&&i.d(r),r&&d(t)}}}function al(a){let e,o;return e=new xe({props:{align:"start",removePlaceholder:a[4],$$slots:{default:[pl]},$$scope:{ctx:a}}}),e.$on("click",a[15]),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&16&&(l.removePlaceholder=t[4]),s&135171&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function de(a){let e,o;return e=new Fe({props:{class:"FormItem__top",$$slots:{default:[rl]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&131073&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function nl(a){let e;return{c(){e=W(a[0])},l(o){e=j(o,a[0])},m(o,t){g(o,e,t)},p(o,t){t&1&&q(e,o[0])},d(o){o&&d(e)}}}function rl(a){let e;const o=a[14].top,t=k(o,a,a[17],_e),s=t||nl(a);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&131072)&&P(t,o,l,l[17],e?R(o,l[17],n,ll):I(l[17]),_e):s&&s.p&&(!e||n&1)&&s.p(l,e?n:-1)},i(l){e||(p(s,l),e=!0)},o(l){b(s,l),e=!1},d(l){s&&s.d(l)}}}function he(a){let e,o;return e=new Re({props:{level:"1",weight:"regular",class:"FormItem__bottom",$$slots:{default:[il]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&131074&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function fl(a){let e;return{c(){e=W(a[1])},l(o){e=j(o,a[1])},m(o,t){g(o,e,t)},p(o,t){t&2&&q(e,o[1])},d(o){o&&d(e)}}}function il(a){let e;const o=a[14].bottom,t=k(o,a,a[17],me),s=t||fl(a);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&131072)&&P(t,o,l,l[17],e?R(o,l[17],n,el):I(l[17]),me):s&&s.p&&(!e||n&2)&&s.p(l,e?n:-1)},i(l){e||(p(s,l),e=!0)},o(l){b(s,l),e=!1},d(l){s&&s.d(l)}}}function ve(a){let e,o;return e=new Fe({props:{class:"FormItem__top",$$slots:{default:[cl]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&131073&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function ul(a){let e;return{c(){e=W(a[0])},l(o){e=j(o,a[0])},m(o,t){g(o,e,t)},p(o,t){t&1&&q(e,o[0])},d(o){o&&d(e)}}}function cl(a){let e;const o=a[14].top,t=k(o,a,a[17],be),s=t||ul(a);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&131072)&&P(t,o,l,l[17],e?R(o,l[17],n,ol):I(l[17]),be):s&&s.p&&(!e||n&1)&&s.p(l,e?n:-1)},i(l){e||(p(s,l),e=!0)},o(l){b(s,l),e=!1},d(l){s&&s.d(l)}}}function ge(a){let e,o;return e=new Re({props:{level:"1",weight:"regular",class:"FormItem__bottom",$$slots:{default:[_l]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){z(e,t,s),o=!0},p(t,s){const l={};s&131074&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function ml(a){let e;return{c(){e=W(a[1])},l(o){e=j(o,a[1])},m(o,t){g(o,e,t)},p(o,t){t&2&&q(e,o[1])},d(o){o&&d(e)}}}function _l(a){let e;const o=a[14].bottom,t=k(o,a,a[17],pe),s=t||ml(a);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&131072)&&P(t,o,l,l[17],e?R(o,l[17],n,tl):I(l[17]),pe):s&&s.p&&(!e||n&2)&&s.p(l,e?n:-1)},i(l){e||(p(s,l),e=!0)},o(l){b(s,l),e=!1},d(l){s&&s.d(l)}}}function pl(a){let e,o,t,s,l=(a[12].top||a[0])&&ve(a);const n=a[14].default,f=k(n,a,a[17],null);let i=(a[12].bottom||a[1])&&ge(a);return{c(){e=S("div"),l&&l.c(),o=A(),f&&f.c(),t=A(),i&&i.c(),this.h()},l(r){e=B(r,"DIV",{class:!0});var u=T(e);l&&l.l(u),o=D(u),f&&f.l(u),t=D(u),i&&i.l(u),u.forEach(d),this.h()},h(){N(e,"class","FormItem__removable svelte-fp7f3b")},m(r,u){g(r,e,u),l&&l.m(e,null),Y(e,o),f&&f.m(e,null),Y(e,t),i&&i.m(e,null),s=!0},p(r,u){r[12].top||r[0]?l?(l.p(r,u),u&4097&&p(l,1)):(l=ve(r),l.c(),p(l,1),l.m(e,o)):l&&(L(),b(l,1,1,()=>{l=null}),M()),f&&f.p&&(!s||u&131072)&&P(f,n,r,r[17],s?R(n,r[17],u,null):I(r[17]),null),r[12].bottom||r[1]?i?(i.p(r,u),u&4098&&p(i,1)):(i=ge(r),i.c(),p(i,1),i.m(e,null)):i&&(L(),b(i,1,1,()=>{i=null}),M())},i(r){s||(p(l),p(f,r),p(i),s=!0)},o(r){b(l),b(f,r),b(i),s=!1},d(r){r&&d(e),l&&l.d(),f&&f.d(r),i&&i.d()}}}function bl(a){let e,o,t,s,l;const n=[al,sl],f=[];function i(c,h){return c[3]?0:1}o=i(a),t=f[o]=n[o](a);let r=[a[11],{class:s=re(J("FormItem",a[6]),`FormItem--${a[2]}`,`FormItem--sizeY-${a[7].sizeY}`,{"FormItem--withTop":Boolean(a[12].top||a[0]),"FormItem--removable":a[3]},a[13].class)}],u={};for(let c=0;c<r.length;c+=1)u=H(u,r[c]);return{c(){e=S("label"),t.c(),this.h()},l(c){e=B(c,"LABEL",{class:!0});var h=T(e);t.l(h),h.forEach(d),this.h()},h(){K(e,u),te(e,"svelte-fp7f3b",!0)},m(c,h){g(c,e,h),f[o].m(e,null),a[16](e),l=!0},p(c,[h]){let $=o;o=i(c),o===$?f[o].p(c,h):(L(),b(f[$],1,1,()=>{f[$]=null}),M(),t=f[o],t?t.p(c,h):(t=f[o]=n[o](c),t.c()),p(t,1),t.m(e,null)),K(e,u=ke(r,[h&2048&&c[11],(!l||h&12493&&s!==(s=re(J("FormItem",c[6]),`FormItem--${c[2]}`,`FormItem--sizeY-${c[7].sizeY}`,{"FormItem--withTop":Boolean(c[12].top||c[0]),"FormItem--removable":c[3]},c[13].class)))&&{class:s}])),te(e,"svelte-fp7f3b",!0)},i(c){l||(p(t),l=!0)},o(c){b(t),l=!1},d(c){c&&d(e),f[o].d(),a[16](null)}}}function dl(a,e,o){const t=["top","bottom","status","removable","removePlaceholder"];let s=X(e,t),l,n,{$$slots:f={},$$scope:i}=e;const r=Te(f);let u,{top:c=void 0}=e,{bottom:h=void 0}=e,{status:$="default"}=e,{removable:m=!1}=e,{removePlaceholder:_="\u0423\u0434\u0430\u043B\u0438\u0442\u044C"}=e;const V=Pe();G(a,V,v=>o(6,l=v));const O=Ie();G(a,O,v=>o(7,n=v));const w=Ve(),ze=()=>{w("remove",u)};function Ce(v){$e[v?"unshift":"push"](()=>{u=v,o(5,u)})}return a.$$set=v=>{o(13,e=H(H({},e),U(v))),o(11,s=X(e,t)),"top"in v&&o(0,c=v.top),"bottom"in v&&o(1,h=v.bottom),"status"in v&&o(2,$=v.status),"removable"in v&&o(3,m=v.removable),"removePlaceholder"in v&&o(4,_=v.removePlaceholder),"$$scope"in v&&o(17,i=v.$$scope)},e=U(e),[c,h,$,m,_,u,l,n,V,O,w,s,r,e,f,ze,Ce,i]}class Il extends Z{constructor(e){super();y(this,e,dl,bl,x,{top:0,bottom:1,status:2,removable:3,removePlaceholder:4})}}export{Il as F,xe as R};
