import{S as N,i as E,s as S,w as M,x as O,y as Q,q as P,o as Y,B as R,a5 as g,a6 as T,M as h,ae as U,C as f,a7 as I,e as j,c as k,a4 as b,a1 as v,g as D,al as y,a2 as G,ab as H,z as J,d as K,ac as L,O as V,P as W,Q as X,R as Z}from"./vendor-049c144f.js";import{f as z,h as q,u as w,a as x}from"./File.svelte_svelte_type_style_lang-5c39484a.js";import{c as $}from"./Touch-effea633.js";import{F as ee}from"./FormField-e9c37b5a.js";const te=a=>({}),F=a=>({slot:"after"});function se(a){let e,l,t,s=[a[9],{class:"Input__el"}],n={};for(let o=0;o<s.length;o+=1)n=f(n,s[o]);return{c(){e=j("input"),this.h()},l(o){e=k(o,"INPUT",{class:!0}),this.h()},h(){b(e,n),v(e,"svelte-pq5z6x",!0)},m(o,u){D(o,e,u),e.autofocus&&e.focus(),y(e,a[0]),l||(t=[G(a[7].call(null,e)),H(e,"input",a[12])],l=!0)},p(o,u){b(e,n=J(s,[u&512&&o[9],{class:"Input__el"}])),u&1&&e.value!==o[0]&&y(e,o[0]),v(e,"svelte-pq5z6x",!0)},d(o){o&&K(e),l=!1,L(t)}}}function ae(a){let e;const l=a[11].after,t=V(l,a,a[13],F);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8192)&&W(t,l,s,s[13],e?Z(l,s[13],n,te):X(s[13]),F)},i(s){e||(P(t,s),e=!0)},o(s){Y(t,s),e=!1},d(s){t&&t.d(s)}}}function le(a){let e,l;return e=new ee({props:{class:z(a[8].class,q("Input",a[3]),{[`Input--${a[2]}`]:!!a[2]},`Input--sizeY-${a[4].sizeY}`),style:a[1],disabled:a[9].disabled,hasAfter:Boolean(a[10].after),$$slots:{after:[ae],default:[se]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const n={};s&284&&(n.class=z(t[8].class,q("Input",t[3]),{[`Input--${t[2]}`]:!!t[2]},`Input--sizeY-${t[4].sizeY}`)),s&2&&(n.style=t[1]),s&512&&(n.disabled=t[9].disabled),s&1024&&(n.hasAfter=Boolean(t[10].after)),s&8705&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){Y(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function ne(a,e,l){const t=["style","align","value"];let s=g(e,t),n,o,{$$slots:u={},$$scope:_}=e;const A=T(u);let{style:c=""}=e,{align:m=void 0}=e,{value:r=void 0}=e;const d=w();h(a,d,i=>l(4,o=i));const p=x();h(a,p,i=>l(3,n=i));const B=$(U());function C(){r=this.value,l(0,r)}return a.$$set=i=>{l(8,e=f(f({},e),I(i))),l(9,s=g(e,t)),"style"in i&&l(1,c=i.style),"align"in i&&l(2,m=i.align),"value"in i&&l(0,r=i.value),"$$scope"in i&&l(13,_=i.$$scope)},e=I(e),[r,c,m,n,o,d,p,B,e,s,A,u,C,_]}class fe extends N{constructor(e){super();E(this,e,ne,le,S,{style:1,align:2,value:0})}}export{fe as I};
