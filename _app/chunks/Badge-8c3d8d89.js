import{S as h,i as f,s as g,C as r,e as p,c as B,a as x,d as c,a4 as m,a1 as d,g as N,z as S,N as i,a5 as _,a7 as u}from"./vendor-f3d45434.js";import{f as j}from"./File.svelte_svelte_type_style_lang-184c9a3b.js";function k(l){let e,s=[l[0]],a={};for(let t=0;t<s.length;t+=1)a=r(a,s[t]);return{c(){e=p("span"),this.h()},l(t){e=B(t,"SPAN",{}),x(e).forEach(c),this.h()},h(){m(e,a),d(e,"svelte-dtkjwp",!0)},m(t,n){N(t,e,n)},p(t,[n]){m(e,a=S(s,[n&1&&t[0]])),d(e,"svelte-dtkjwp",!0)},i,o:i,d(t){t&&c(e)}}}function C(l,e,s){const a=["mode"];let t=_(e,a),{mode:n="new"}=e;return l.$$set=o=>{s(2,e=r(r({},e),u(o))),s(0,t=_(e,a)),"mode"in o&&s(1,n=o.mode)},l.$$.update=()=>{s(0,t.class=j(e.class,"Badge",`Badge--${n}`),t)},e=u(e),[t,n]}class q extends h{constructor(e){super();f(this,e,C,k,g,{mode:1})}}export{q as B};