import{S as E,i as S,s as A,w as B,x as O,y as Q,q as N,o as P,B as T,a2 as p,X as h,ad as U,C as f,a4 as I,e as X,c as j,a0 as y,a1 as b,g as k,ag as v,aa as D,ab as G,z as H,d as J,ac as K,N as L,O as M,P as R,Q as V}from"./vendor-e275372f.js";import{c as z,g as q,u as W,a as Z}from"./File.svelte_svelte_type_style_lang-f559d5ad.js";import{c as w}from"./Touch-b77d496a.js";import{F as x}from"./FormField-951966d2.js";const $=a=>({}),F=a=>({slot:"after"});function ee(a){let e,l,t,s=[a[9],{class:"Input__el"}],n={};for(let o=0;o<s.length;o+=1)n=f(n,s[o]);return{c(){e=X("input"),this.h()},l(o){e=j(o,"INPUT",{class:!0}),this.h()},h(){y(e,n),b(e,"svelte-pq5z6x",!0)},m(o,u){k(o,e,u),e.autofocus&&e.focus(),v(e,a[0]),l||(t=[D(a[7].call(null,e)),G(e,"input",a[11])],l=!0)},p(o,u){y(e,n=H(s,[u&512&&o[9],{class:"Input__el"}])),u&1&&e.value!==o[0]&&v(e,o[0]),b(e,"svelte-pq5z6x",!0)},d(o){o&&J(e),l=!1,K(t)}}}function te(a){let e;const l=a[10].after,t=L(l,a,a[12],F);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&4096)&&M(t,l,s,s[12],e?V(l,s[12],n,$):R(s[12]),F)},i(s){e||(N(t,s),e=!0)},o(s){P(t,s),e=!1},d(s){t&&t.d(s)}}}function se(a){let e,l;return e=new x({props:{class:z(a[8].class,q("Input",a[3]),{[`Input--${a[2]}`]:!!a[2]},`Input--sizeY-${a[4].sizeY}`),style:a[1],disabled:a[9].disabled,$$slots:{after:[te],default:[ee]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const n={};s&284&&(n.class=z(t[8].class,q("Input",t[3]),{[`Input--${t[2]}`]:!!t[2]},`Input--sizeY-${t[4].sizeY}`)),s&2&&(n.style=t[1]),s&512&&(n.disabled=t[9].disabled),s&4609&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function ae(a,e,l){const t=["style","align","value"];let s=p(e,t),n,o,{$$slots:u={},$$scope:_}=e,{style:c=""}=e,{align:m=void 0}=e,{value:r=void 0}=e;const d=W();h(a,d,i=>l(4,o=i));const g=Z();h(a,g,i=>l(3,n=i));const Y=w(U());function C(){r=this.value,l(0,r)}return a.$$set=i=>{l(8,e=f(f({},e),I(i))),l(9,s=p(e,t)),"style"in i&&l(1,c=i.style),"align"in i&&l(2,m=i.align),"value"in i&&l(0,r=i.value),"$$scope"in i&&l(12,_=i.$$scope)},e=I(e),[r,c,m,n,o,d,g,Y,e,s,u,C,_]}class ue extends E{constructor(e){super();S(this,e,ae,se,A,{style:1,align:2,value:0})}}export{ue as I};
