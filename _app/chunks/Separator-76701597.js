import{S as z,i as w,s as C,C as u,e as m,c as f,a as h,d as c,b as N,K as o,N as p,g as P,O as D,z as E,W as v,P as S,R as I,T as g}from"./vendor-9fde05ec.js";import{c as b,g as x,b as V}from"./File.svelte_svelte_type_style_lang-fd380a47.js";function q(r){let e,s,i,l=[r[4],{"aria-hidden":"true"},{class:i=b(x("Separator",r[2]),r[5].class,{"Separator--wide":r[0]})}],d={};for(let a=0;a<l.length;a+=1)d=u(d,l[a]);return{c(){e=m("div"),s=m("div"),this.h()},l(a){e=f(a,"DIV",{"aria-hidden":!0,class:!0});var t=h(e);s=f(t,"DIV",{class:!0}),h(s).forEach(c),t.forEach(c),this.h()},h(){N(s,"class","Separator__in svelte-x9cuz"),o(s,"Separator__in--expanded",r[1]),p(e,d),o(e,"svelte-x9cuz",!0)},m(a,t){P(a,e,t),D(e,s)},p(a,[t]){t&2&&o(s,"Separator__in--expanded",a[1]),p(e,d=E(l,[t&16&&a[4],{"aria-hidden":"true"},t&37&&i!==(i=b(x("Separator",a[2]),a[5].class,{"Separator--wide":a[0]}))&&{class:i}])),o(e,"svelte-x9cuz",!0)},i:v,o:v,d(a){a&&c(e)}}}function K(r,e,s){const i=["wide","expanded"];let l=S(e,i),d,{wide:a=!1}=e,{expanded:t=!1}=e;const _=V();return I(r,_,n=>s(2,d=n)),r.$$set=n=>{s(5,e=u(u({},e),g(n))),s(4,l=S(e,i)),"wide"in n&&s(0,a=n.wide),"expanded"in n&&s(1,t=n.expanded)},e=g(e),[a,t,d,_,l,e]}class T extends z{constructor(e){super();w(this,e,K,q,C,{wide:0,expanded:1})}}export{T as S};
