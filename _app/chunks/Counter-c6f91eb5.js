import{S as B,i as E,s as K,l as q,g as Q,n as V,o as c,p as y,q as m,d,a5 as g,C as _,a7 as h,w as C,x as b,y as z,z as k,A as R,B as P,O as $,P as N,Q as S,R as T,e as D,c as F,a as G,a4 as v,a1 as A,M as H}from"./vendor-705c6f74.js";import{k as M,f as O,h as j,a as I}from"./File.svelte_svelte_type_style_lang-d8b2afd3.js";import{C as J}from"./Caption-3bca71e3.js";import{T as L}from"./Text-9c08979c.js";function U(n){let e,a;const t=[{weight:"medium"},n[2]];let s={$$slots:{default:[X]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new L({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,f){z(e,l,f),a=!0},p(l,f){const o=f&4?k(t,[t[0],R(l[2])]):{};f&16&&(o.$$scope={dirty:f,ctx:l}),e.$set(o)},i(l){a||(m(e.$$.fragment,l),a=!0)},o(l){c(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}function W(n){let e,a;const t=[{level:"2"},{weight:n[1]===M?"medium":"regular"},n[2]];let s={$$slots:{default:[Y]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new J({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,f){z(e,l,f),a=!0},p(l,f){const o=f&6?k(t,[t[0],f&2&&{weight:l[1]===M?"medium":"regular"},f&4&&R(l[2])]):{};f&16&&(o.$$scope={dirty:f,ctx:l}),e.$set(o)},i(l){a||(m(e.$$.fragment,l),a=!0)},o(l){c(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}function X(n){let e;const a=n[3].default,t=$(a,n,n[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&N(t,a,s,s[4],e?T(a,s[4],l,null):S(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Y(n){let e;const a=n[3].default,t=$(a,n,n[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&N(t,a,s,s[4],e?T(a,s[4],l,null):S(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Z(n){let e,a,t,s;const l=[W,U],f=[];function o(r,u){return r[0]==="s"?0:1}return e=o(n),a=f[e]=l[e](n),{c(){a.c(),t=q()},l(r){a.l(r),t=q()},m(r,u){f[e].m(r,u),Q(r,t,u),s=!0},p(r,[u]){let p=e;e=o(r),e===p?f[e].p(r,u):(V(),c(f[p],1,1,()=>{f[p]=null}),y(),a=f[e],a?a.p(r,u):(a=f[e]=l[e](r),a.c()),m(a,1),a.m(t.parentNode,t))},i(r){s||(m(a),s=!0)},o(r){c(a),s=!1},d(r){f[e].d(r),r&&d(t)}}}function w(n,e,a){const t=["size","platform"];let s=g(e,t),{$$slots:l={},$$scope:f}=e,{size:o}=e,{platform:r}=e;return n.$$set=u=>{e=_(_({},e),h(u)),a(2,s=g(e,t)),"size"in u&&a(0,o=u.size),"platform"in u&&a(1,r=u.platform),"$$scope"in u&&a(4,f=u.$$scope)},[o,r,s,l,f]}class x extends B{constructor(e){super();E(this,e,w,Z,K,{size:0,platform:1})}}function ee(n){let e;const a=n[6].default,t=$(a,n,n[7],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&128)&&N(t,a,s,s[7],e?T(a,s[7],l,null):S(s[7]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function te(n){let e,a,t,s;a=new x({props:{class:"Counter__in",size:n[1],platform:n[2],$$slots:{default:[ee]},$$scope:{ctx:n}}});let l=[n[4],{class:t=O(j("Counter",n[2]),n[5].class,`Counter--${n[0]}`,`Counter--s-${n[1]}`)}],f={};for(let o=0;o<l.length;o+=1)f=_(f,l[o]);return{c(){e=D("span"),C(a.$$.fragment),this.h()},l(o){e=F(o,"SPAN",{class:!0});var r=G(e);b(a.$$.fragment,r),r.forEach(d),this.h()},h(){v(e,f),A(e,"svelte-468d7f",!0)},m(o,r){Q(o,e,r),z(a,e,null),s=!0},p(o,[r]){const u={};r&2&&(u.size=o[1]),r&4&&(u.platform=o[2]),r&128&&(u.$$scope={dirty:r,ctx:o}),a.$set(u),v(e,f=k(l,[r&16&&o[4],(!s||r&39&&t!==(t=O(j("Counter",o[2]),o[5].class,`Counter--${o[0]}`,`Counter--s-${o[1]}`)))&&{class:t}])),A(e,"svelte-468d7f",!0)},i(o){s||(m(a.$$.fragment,o),s=!0)},o(o){c(a.$$.fragment,o),s=!1},d(o){o&&d(e),P(a)}}}function se(n,e,a){const t=["mode","size"];let s=g(e,t),l,{$$slots:f={},$$scope:o}=e,{mode:r="secondary"}=e,{size:u="m"}=e;const p=I();return H(n,p,i=>a(2,l=i)),n.$$set=i=>{a(5,e=_(_({},e),h(i))),a(4,s=g(e,t)),"mode"in i&&a(0,r=i.mode),"size"in i&&a(1,u=i.size),"$$scope"in i&&a(7,o=i.$$scope)},e=h(e),[r,u,l,p,s,e,f,o]}class re extends B{constructor(e){super();E(this,e,se,te,K,{mode:0,size:1})}}export{re as C};
