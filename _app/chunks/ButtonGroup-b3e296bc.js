import{S as p,i as v,s as B,O as G,C as f,e as b,c as q,a as z,d as _,a4 as m,a1 as c,g as C,P,Q as S,R as D,z as E,q as I,o as N,a5 as g,a7 as O}from"./vendor-049c144f.js";import{f as h}from"./File.svelte_svelte_type_style_lang-5c39484a.js";function Q(l){let t,o,u;const i=l[5].default,s=G(i,l,l[4],null);let d=[l[3],{class:o=h("ButtonGroup",`ButtonGroup--mode-${l[0]}`,l[1]!=="none"&&`ButtonGroup--gap-${l[1]}`,l[2]&&"ButtonGroup--stretched")},{role:"group"}],n={};for(let e=0;e<d.length;e+=1)n=f(n,d[e]);return{c(){t=b("div"),s&&s.c(),this.h()},l(e){t=q(e,"DIV",{class:!0,role:!0});var a=z(t);s&&s.l(a),a.forEach(_),this.h()},h(){m(t,n),c(t,"svelte-1l51vgl",!0)},m(e,a){C(e,t,a),s&&s.m(t,null),u=!0},p(e,[a]){s&&s.p&&(!u||a&16)&&P(s,i,e,e[4],u?D(i,e[4],a,null):S(e[4]),null),m(t,n=E(d,[a&8&&e[3],(!u||a&7&&o!==(o=h("ButtonGroup",`ButtonGroup--mode-${e[0]}`,e[1]!=="none"&&`ButtonGroup--gap-${e[1]}`,e[2]&&"ButtonGroup--stretched")))&&{class:o},{role:"group"}])),c(t,"svelte-1l51vgl",!0)},i(e){u||(I(s,e),u=!0)},o(e){N(s,e),u=!1},d(e){e&&_(t),s&&s.d(e)}}}function R(l,t,o){const u=["mode","gap","stretched"];let i=g(t,u),{$$slots:s={},$$scope:d}=t,{mode:n="horizontal"}=t,{gap:e="m"}=t,{stretched:a=!1}=t;return l.$$set=r=>{t=f(f({},t),O(r)),o(3,i=g(t,u)),"mode"in r&&o(0,n=r.mode),"gap"in r&&o(1,e=r.gap),"stretched"in r&&o(2,a=r.stretched),"$$scope"in r&&o(4,d=r.$$scope)},[n,e,a,i,d,s]}class k extends p{constructor(t){super();v(this,t,R,Q,B,{mode:0,gap:1,stretched:2})}}export{k as B};