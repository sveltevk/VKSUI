import{S as E,i as G,s as H,l as j,g as I,n as M,o as c,p as O,q as m,d,P as g,C as _,T as h,w as C,x as b,y as z,z as k,A as J,B as N,G as P,H as $,I as T,J as S,e as R,c as V,a as y,N as q,K as v,R as D}from"./vendor-9fde05ec.js";import{j as A,c as K,g as B,b as F}from"./File.svelte_svelte_type_style_lang-fd380a47.js";import{C as L}from"./Caption-17bf2210.js";import{T as Q}from"./Text-236cbc4e.js";function U(o){let e,n;const t=[{weight:"medium"},o[2]];let s={$$slots:{default:[X]},$$scope:{ctx:o}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new Q({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,u){z(e,l,u),n=!0},p(l,u){const a=u&4?k(t,[t[0],J(l[2])]):{};u&16&&(a.$$scope={dirty:u,ctx:l}),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){c(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function W(o){let e,n;const t=[{level:"2"},{weight:o[1]===A?"medium":"regular"},o[2]];let s={$$slots:{default:[Y]},$$scope:{ctx:o}};for(let l=0;l<t.length;l+=1)s=_(s,t[l]);return e=new L({props:s}),{c(){C(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,u){z(e,l,u),n=!0},p(l,u){const a=u&6?k(t,[t[0],u&2&&{weight:l[1]===A?"medium":"regular"},u&4&&J(l[2])]):{};u&16&&(a.$$scope={dirty:u,ctx:l}),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){c(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function X(o){let e;const n=o[3].default,t=P(n,o,o[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&$(t,n,s,s[4],e?S(n,s[4],l,null):T(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Y(o){let e;const n=o[3].default,t=P(n,o,o[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&$(t,n,s,s[4],e?S(n,s[4],l,null):T(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function Z(o){let e,n,t,s;const l=[W,U],u=[];function a(r,f){return r[0]==="s"?0:1}return e=a(o),n=u[e]=l[e](o),{c(){n.c(),t=j()},l(r){n.l(r),t=j()},m(r,f){u[e].m(r,f),I(r,t,f),s=!0},p(r,[f]){let p=e;e=a(r),e===p?u[e].p(r,f):(M(),c(u[p],1,1,()=>{u[p]=null}),O(),n=u[e],n?n.p(r,f):(n=u[e]=l[e](r),n.c()),m(n,1),n.m(t.parentNode,t))},i(r){s||(m(n),s=!0)},o(r){c(n),s=!1},d(r){u[e].d(r),r&&d(t)}}}function w(o,e,n){const t=["size","platform"];let s=g(e,t),{$$slots:l={},$$scope:u}=e,{size:a}=e,{platform:r}=e;return o.$$set=f=>{e=_(_({},e),h(f)),n(2,s=g(e,t)),"size"in f&&n(0,a=f.size),"platform"in f&&n(1,r=f.platform),"$$scope"in f&&n(4,u=f.$$scope)},[a,r,s,l,u]}class x extends E{constructor(e){super();G(this,e,w,Z,H,{size:0,platform:1})}}function ee(o){let e;const n=o[6].default,t=P(n,o,o[7],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&128)&&$(t,n,s,s[7],e?S(n,s[7],l,null):T(s[7]),null)},i(s){e||(m(t,s),e=!0)},o(s){c(t,s),e=!1},d(s){t&&t.d(s)}}}function te(o){let e,n,t,s;n=new x({props:{class:"Counter__in",size:o[1],platform:o[2],$$slots:{default:[ee]},$$scope:{ctx:o}}});let l=[o[4],{class:t=K(B("Counter",o[2]),o[5].class,`Counter--${o[0]}`,`Counter--s-${o[1]}`)}],u={};for(let a=0;a<l.length;a+=1)u=_(u,l[a]);return{c(){e=R("span"),C(n.$$.fragment),this.h()},l(a){e=V(a,"SPAN",{class:!0});var r=y(e);b(n.$$.fragment,r),r.forEach(d),this.h()},h(){q(e,u),v(e,"svelte-468d7f",!0)},m(a,r){I(a,e,r),z(n,e,null),s=!0},p(a,[r]){const f={};r&2&&(f.size=a[1]),r&4&&(f.platform=a[2]),r&128&&(f.$$scope={dirty:r,ctx:a}),n.$set(f),q(e,u=k(l,[r&16&&a[4],(!s||r&39&&t!==(t=K(B("Counter",a[2]),a[5].class,`Counter--${a[0]}`,`Counter--s-${a[1]}`)))&&{class:t}])),v(e,"svelte-468d7f",!0)},i(a){s||(m(n.$$.fragment,a),s=!0)},o(a){c(n.$$.fragment,a),s=!1},d(a){a&&d(e),N(n)}}}function se(o,e,n){const t=["mode","size"];let s=g(e,t),l,{$$slots:u={},$$scope:a}=e,{mode:r="secondary"}=e,{size:f="m"}=e;const p=F();return D(o,p,i=>n(2,l=i)),o.$$set=i=>{n(5,e=_(_({},e),h(i))),n(4,s=g(e,t)),"mode"in i&&n(0,r=i.mode),"size"in i&&n(1,f=i.size),"$$scope"in i&&n(7,a=i.$$scope)},e=h(e),[r,f,l,p,s,e,u,a]}class re extends E{constructor(e){super();G(this,e,se,te,H,{mode:0,size:1})}}export{re as C};