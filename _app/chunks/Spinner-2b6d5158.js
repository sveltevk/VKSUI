import{S as x,i as A,s as B,C as b,e as C,c as N,a as P,d as k,a4 as z,a1 as y,g as E,n as j,o,p as D,q as f,z as F,a5 as v,a7 as w,ay as G,w as m,x as p,y as g,B as d,az as H,aA as I,aB as J}from"./vendor-ad41e947.js";import{f as q}from"./File.svelte_svelte_type_style_lang-897cf515.js";function K(s){let e,r;return e=new G({props:{"aria-hidden":"true",class:"Spinner__self"}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function L(s){let e,r;return e=new H({props:{"aria-hidden":"true",class:"Spinner__self"}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function M(s){let e,r;return e=new I({props:{"aria-hidden":"true",class:"Spinner__self"}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function O(s){let e,r;return e=new J({props:{"aria-hidden":"true",class:"Spinner__self"}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Q(s){let e,r,t,a,i;const l=[O,M,L,K],u=[];function S(n,c){return n[0]==="large"?0:n[0]==="medium"?1:n[0]==="small"?2:3}r=S(s),t=u[r]=l[r](s);let h=[{role:"status"},s[1],{class:a=q("Spinner",s[2].class)}],_={};for(let n=0;n<h.length;n+=1)_=b(_,h[n]);return{c(){e=C("span"),t.c(),this.h()},l(n){e=N(n,"SPAN",{role:!0,class:!0});var c=P(e);t.l(c),c.forEach(k),this.h()},h(){z(e,_),y(e,"svelte-pgk8ib",!0)},m(n,c){E(n,e,c),u[r].m(e,null),i=!0},p(n,[c]){let $=r;r=S(n),r!==$&&(j(),o(u[$],1,1,()=>{u[$]=null}),D(),t=u[r],t||(t=u[r]=l[r](n),t.c()),f(t,1),t.m(e,null)),z(e,_=F(h,[{role:"status"},c&2&&n[1],(!i||c&4&&a!==(a=q("Spinner",n[2].class)))&&{class:a}])),y(e,"svelte-pgk8ib",!0)},i(n){i||(f(t),i=!0)},o(n){o(t),i=!1},d(n){n&&k(e),u[r].d()}}}function R(s,e,r){const t=["size"];let a=v(e,t),{size:i="regular"}=e;return s.$$set=l=>{r(2,e=b(b({},e),w(l))),r(1,a=v(e,t)),"size"in l&&r(0,i=l.size)},s.$$.update=()=>{var l;r(1,a["aria-label"]=(l=a["aria-label"])!=null?l:'\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F..."',a)},e=w(e),[i,a,e]}class V extends x{constructor(e){super();A(this,e,R,Q,B,{size:0})}}export{V as S};
