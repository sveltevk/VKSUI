import{S as B,i as E,s as K,l as q,g as Q,n as V,o as c,p as y,q as m,d,a5 as g,C as _,a7 as h,w as C,x as b,y as z,z as k,A as R,B as P,O as $,P as N,Q as S,R as T,e as D,c as F,a as G,a4 as v,a1 as A,M as H}from"./vendor-049c144f.js";import{h as M,c as O,g as j,d as I}from"./File.svelte_svelte_type_style_lang-2a367881.js";import{C as J}from"./Caption-3a368c8a.js";import{T as L}from"./Text-8fd7193d.js";function U(a){let e,n;const t=[{weight:"medium"},a[2]];let s={$$slots:{default:[X]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new L({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,u){z(e,l,u),n=!0},p(l,u){const o=u&4?k(t,[t[0],R(l[2])]):{};u&16&&(o.$$scope={dirty:u,ctx:l}),e.$set(o)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){c(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function W(a){let e,n;const t=[{level:"2"},{weight:a[1]===M?"medium":"regular"},a[2]];let s={$$slots:{default:[Y]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new J({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,u){z(e,l,u),n=!0},p(l,u){const o=u&6?k(t,[t[0],u&2&&{weight:l[1]===M?"medium":"regular"},u&4&&R(l[2])]):{};u&16&&(o.$$scope={dirty:u,ctx:l}),e.$set(o)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){c(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function X(a){let e;const n=a[3].default,t=$(n,a,a[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&N(t,n,s,s[4],e?T(n,s[4],l,null):S(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Y(a){let e;const n=a[3].default,t=$(n,a,a[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&N(t,n,s,s[4],e?T(n,s[4],l,null):S(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Z(a){let e,n,t,s;const l=[W,U],u=[];function o(r,f){return r[0]==="s"?0:1}return e=o(a),n=u[e]=l[e](a),{c(){n.c(),t=q()},l(r){n.l(r),t=q()},m(r,f){u[e].m(r,f),Q(r,t,f),s=!0},p(r,[f]){let p=e;e=o(r),e===p?u[e].p(r,f):(V(),c(u[p],1,1,()=>{u[p]=null}),y(),n=u[e],n?n.p(r,f):(n=u[e]=l[e](r),n.c()),m(n,1),n.m(t.parentNode,t))},i(r){s||(m(n),s=!0)},o(r){c(n),s=!1},d(r){u[e].d(r),r&&d(t)}}}function w(a,e,n){const t=["size","platform"];let s=g(e,t),{$$slots:l={},$$scope:u}=e,{size:o}=e,{platform:r}=e;return a.$$set=f=>{e=_(_({},e),h(f)),n(2,s=g(e,t)),"size"in f&&n(0,o=f.size),"platform"in f&&n(1,r=f.platform),"$$scope"in f&&n(4,u=f.$$scope)},[o,r,s,l,u]}class x extends B{constructor(e){super();E(this,e,w,Z,K,{size:0,platform:1})}}function ee(a){let e;const n=a[6].default,t=$(n,a,a[7],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&128)&&N(t,n,s,s[7],e?T(n,s[7],l,null):S(s[7]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function te(a){let e,n,t,s;n=new x({props:{class:"Counter__in",size:a[1],platform:a[2],$$slots:{default:[ee]},$$scope:{ctx:a}}});let l=[a[4],{class:t=O(j("Counter",a[2]),a[5].class,`Counter--${a[0]}`,`Counter--s-${a[1]}`)}],u={};for(let o=0;o<l.length;o+=1)u=_(u,l[o]);return{c(){e=D("span"),C(n.$$.fragment),this.h()},l(o){e=F(o,"SPAN",{class:!0});var r=G(e);b(n.$$.fragment,r),r.forEach(d),this.h()},h(){v(e,u),A(e,"svelte-468d7f",!0)},m(o,r){Q(o,e,r),z(n,e,null),s=!0},p(o,[r]){const f={};r&2&&(f.size=o[1]),r&4&&(f.platform=o[2]),r&128&&(f.$$scope={dirty:r,ctx:o}),n.$set(f),v(e,u=k(l,[r&16&&o[4],(!s||r&39&&t!==(t=O(j("Counter",o[2]),o[5].class,`Counter--${o[0]}`,`Counter--s-${o[1]}`)))&&{class:t}])),A(e,"svelte-468d7f",!0)},i(o){s||(m(n.$$.fragment,o),s=!0)},o(o){c(n.$$.fragment,o),s=!1},d(o){o&&d(e),P(n)}}}function se(a,e,n){const t=["mode","size"];let s=g(e,t),l,{$$slots:u={},$$scope:o}=e,{mode:r="secondary"}=e,{size:f="m"}=e;const p=I();return H(a,p,i=>n(2,l=i)),a.$$set=i=>{n(5,e=_(_({},e),h(i))),n(4,s=g(e,t)),"mode"in i&&n(0,r=i.mode),"size"in i&&n(1,f=i.size),"$$scope"in i&&n(7,o=i.$$scope)},e=h(e),[r,f,l,p,s,e,u,o]}class re extends B{constructor(e){super();E(this,e,se,te,K,{mode:0,size:1})}}export{re as C};