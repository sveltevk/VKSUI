import{S as h,i as g,s as f,C as c,e as p,c as B,a as x,d as r,N as m,K as d,g as N,z as P,W as i,P as _,T as u}from"./vendor-bc1c7f53.js";import{c as S}from"./File.svelte_svelte_type_style_lang-f5b0839d.js";function j(l){let e,s=[l[0]],a={};for(let t=0;t<s.length;t+=1)a=c(a,s[t]);return{c(){e=p("span"),this.h()},l(t){e=B(t,"SPAN",{}),x(e).forEach(r),this.h()},h(){m(e,a),d(e,"svelte-dtkjwp",!0)},m(t,n){N(t,e,n)},p(t,[n]){m(e,a=P(s,[n&1&&t[0]])),d(e,"svelte-dtkjwp",!0)},i,o:i,d(t){t&&r(e)}}}function k(l,e,s){const a=["mode"];let t=_(e,a),{mode:n="new"}=e;return l.$$set=o=>{s(2,e=c(c({},e),u(o))),s(0,t=_(e,a)),"mode"in o&&s(1,n=o.mode)},l.$$.update=()=>{s(0,t.class=S(e.class,"Badge",`Badge--${n}`),t)},e=u(e),[t,n]}class q extends h{constructor(e){super();g(this,e,k,j,f,{mode:1})}}export{q as B};