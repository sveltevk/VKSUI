import{S as G,i as H,s as J,l as N,g as v,n as L,o as m,p as M,q as d,d as _,F as P,G as O,C as h,H as A,J as D,e as S,c as q,a as E,P as p,Q as g,L as I,M as y,N as z,z as F}from"./vendor-23252826.js";import{u as Q,c as R,g as V,A as W}from"./File.svelte_svelte_type_style_lang-d77b42ba.js";function j(o){let e,a;const i=o[9].default,l=D(i,o,o[8],null);let u=[o[2]],n={};for(let t=0;t<u.length;t+=1)n=h(n,u[t]);return{c(){e=S("div"),l&&l.c(),this.h()},l(t){e=q(t,"DIV",{});var s=E(e);l&&l.l(s),s.forEach(_),this.h()},h(){p(e,n),g(e,"svelte-8u9koe",!0)},m(t,s){v(t,e,s),l&&l.m(e,null),a=!0},p(t,s){l&&l.p&&(!a||s&256)&&I(l,i,t,t[8],a?z(i,t[8],s,null):y(t[8]),null),p(e,n=F(u,[s&4&&t[2]])),g(e,"svelte-8u9koe",!0)},i(t){a||(d(l,t),a=!0)},o(t){m(l,t),a=!1},d(t){t&&_(e),l&&l.d(t)}}}function B(o){let e,a;const i=o[9].default,l=D(i,o,o[8],null);let u=[o[2]],n={};for(let t=0;t<u.length;t+=1)n=h(n,u[t]);return{c(){e=S("span"),l&&l.c(),this.h()},l(t){e=q(t,"SPAN",{});var s=E(e);l&&l.l(s),s.forEach(_),this.h()},h(){p(e,n),g(e,"svelte-8u9koe",!0)},m(t,s){v(t,e,s),l&&l.m(e,null),a=!0},p(t,s){l&&l.p&&(!a||s&256)&&I(l,i,t,t[8],a?z(i,t[8],s,null):y(t[8]),null),p(e,n=F(u,[s&4&&t[2]])),g(e,"svelte-8u9koe",!0)},i(t){a||(d(l,t),a=!0)},o(t){m(l,t),a=!1},d(t){t&&_(e),l&&l.d(t)}}}function K(o){let e,a,i,l;const u=[B,j],n=[];function t(s,f){return s[0]==="span"?0:1}return e=t(o),a=n[e]=u[e](o),{c(){a.c(),i=N()},l(s){a.l(s),i=N()},m(s,f){n[e].m(s,f),v(s,i,f),l=!0},p(s,[f]){let r=e;e=t(s),e===r?n[e].p(s,f):(L(),m(n[r],1,1,()=>{n[r]=null}),M(),a=n[e],a?a.p(s,f):(a=n[e]=u[e](s),a.c()),d(a,1),a.m(i.parentNode,i))},i(s){l||(d(a),l=!0)},o(s){m(a),l=!1},d(s){n[e].d(s),s&&_(i)}}}function T(o,e,a){const i=["component","weight","level","caps"];let l=P(e,i),u,{$$slots:n={},$$scope:t}=e,{component:s=void 0}=e,{weight:f}=e,{level:r}=e,{caps:b=!1}=e;const C=Q();O(o,C,c=>a(7,u=c));let k=f;return u===W&&f==="semibold"&&(k="medium"),o.$$set=c=>{a(10,e=h(h({},e),A(c))),a(2,l=P(e,i)),"component"in c&&a(0,s=c.component),"weight"in c&&a(3,f=c.weight),"level"in c&&a(4,r=c.level),"caps"in c&&a(5,b=c.caps),"$$scope"in c&&a(8,t=c.$$scope)},o.$$.update=()=>{a(2,l.class=R(V("Caption",u),`Caption--w-${k}`,`Caption--l-${r}`,{"Caption--caps":b},e.class),l)},e=A(e),[s,C,l,f,r,b,k,u,t,n]}class Y extends G{constructor(e){super();H(this,e,T,K,J,{component:0,weight:3,level:4,caps:5})}}export{Y as C};