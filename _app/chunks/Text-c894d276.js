import{S as I,i as O,s as y,l as v,g as k,n as z,o as m,p as Q,q as d,d as _,a2 as N,X as R,C as h,a4 as w,N as P,e as T,c as A,a as C,a0 as p,a1 as g,O as D,P as S,Q as q,z as E}from"./vendor-3f5aaa84.js";import{a as V,c as W,g as X,A as j}from"./File.svelte_svelte_type_style_lang-4a5bcc41.js";function B(o){let e,a;const i=o[7].default,s=P(i,o,o[6],null);let u=[o[2]],n={};for(let t=0;t<u.length;t+=1)n=h(n,u[t]);return{c(){e=T("div"),s&&s.c(),this.h()},l(t){e=A(t,"DIV",{});var l=C(e);s&&s.l(l),l.forEach(_),this.h()},h(){p(e,n),g(e,"svelte-1ncu6iw",!0)},m(t,l){k(t,e,l),s&&s.m(e,null),a=!0},p(t,l){s&&s.p&&(!a||l&64)&&D(s,i,t,t[6],a?q(i,t[6],l,null):S(t[6]),null),p(e,n=E(u,[l&4&&t[2]])),g(e,"svelte-1ncu6iw",!0)},i(t){a||(d(s,t),a=!0)},o(t){m(s,t),a=!1},d(t){t&&_(e),s&&s.d(t)}}}function F(o){let e,a;const i=o[7].default,s=P(i,o,o[6],null);let u=[o[2]],n={};for(let t=0;t<u.length;t+=1)n=h(n,u[t]);return{c(){e=T("span"),s&&s.c(),this.h()},l(t){e=A(t,"SPAN",{});var l=C(e);s&&s.l(l),l.forEach(_),this.h()},h(){p(e,n),g(e,"svelte-1ncu6iw",!0)},m(t,l){k(t,e,l),s&&s.m(e,null),a=!0},p(t,l){s&&s.p&&(!a||l&64)&&D(s,i,t,t[6],a?q(i,t[6],l,null):S(t[6]),null),p(e,n=E(u,[l&4&&t[2]])),g(e,"svelte-1ncu6iw",!0)},i(t){a||(d(s,t),a=!0)},o(t){m(s,t),a=!1},d(t){t&&_(e),s&&s.d(t)}}}function G(o){let e,a,i,s;const u=[F,B],n=[];function t(l,r){return l[0]==="span"?0:1}return e=t(o),a=n[e]=u[e](o),{c(){a.c(),i=v()},l(l){a.l(l),i=v()},m(l,r){n[e].m(l,r),k(l,i,r),s=!0},p(l,[r]){let f=e;e=t(l),e===f?n[e].p(l,r):(z(),m(n[f],1,1,()=>{n[f]=null}),Q(),a=n[e],a?a.p(l,r):(a=n[e]=u[e](l),a.c()),d(a,1),a.m(i.parentNode,i))},i(l){s||(d(a),s=!0)},o(l){m(a),s=!1},d(l){n[e].d(l),l&&_(i)}}}function H(o,e,a){const i=["component","weight"];let s=N(e,i),u,{$$slots:n={},$$scope:t}=e,{component:l="span"}=e,{weight:r="regular"}=e;const f=V();R(o,f,c=>a(5,u=c));let b=r;return u===j&&r==="semibold"&&(b="medium"),o.$$set=c=>{a(8,e=h(h({},e),w(c))),a(2,s=N(e,i)),"component"in c&&a(0,l=c.component),"weight"in c&&a(3,r=c.weight),"$$scope"in c&&a(6,t=c.$$scope)},o.$$.update=()=>{a(2,s.class=W(X("Text",u),`Text--w-${b}`,e.class),s)},e=w(e),[l,f,s,r,b,u,t,n]}class L extends I{constructor(e){super();O(this,e,H,G,y,{component:0,weight:3})}}export{L as T};