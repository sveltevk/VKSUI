import{S as K,i as O,s as R,C as D,e as h,w as j,c as P,a as b,x as F,d as c,N as E,K as N,g as p,y as L,z as M,q as k,o as y,B as Q,P as T,R as V,T as C,b as I,k as X,m as g,n as U,p as W,G as B,H as G,I as H,J}from"./vendor-9fde05ec.js";import{c as w,g as S,u as Y,b as Z,I as q}from"./File.svelte_svelte_type_style_lang-fd380a47.js";import{T as $}from"./PanelHeader-6a7f5b2c.js";import{T as x}from"./Touch-1a1dd94d.js";function A(r){let e;return{c(){e=h("div"),this.h()},l(l){e=P(l,"DIV",{class:!0}),b(e).forEach(c),this.h()},h(){I(e,"class","Panel__fade")},m(l,i){p(l,e,i)},d(l){l&&c(e)}}}function ee(r){let e;const l=r[7].default,i=B(l,r,r[8],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,t){i&&i.m(s,t),e=!0},p(s,t){i&&i.p&&(!e||t&256)&&G(i,l,s,s[8],e?J(l,s[8],t,null):H(s[8]),null)},i(s){e||(k(i,s),e=!0)},o(s){y(i,s),e=!1},d(s){i&&i.d(s)}}}function se(r){let e,l;const i=r[7].default,s=B(i,r,r[8],null);return{c(){e=h("div"),s&&s.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var o=b(e);s&&s.l(o),o.forEach(c),this.h()},h(){I(e,"class","Panel__centered svelte-7y6wk0")},m(t,o){p(t,e,o),s&&s.m(e,null),l=!0},p(t,o){s&&s.p&&(!l||o&256)&&G(s,i,t,t[8],l?J(i,t[8],o,null):H(t[8]),null)},i(t){l||(k(s,t),l=!0)},o(t){y(s,t),l=!1},d(t){t&&c(e),s&&s.d(t)}}}function te(r){let e,l,i,s,t,o,n,u,f=r[1]===q&&A();const v=[se,ee],m=[];function _(a,d){return a[0]?0:1}return s=_(r),t=m[s]=v[s](r),{c(){f&&f.c(),e=X(),l=h("div"),i=X(),t.c(),o=X(),n=h("div"),this.h()},l(a){f&&f.l(a),e=g(a),l=P(a,"DIV",{class:!0}),b(l).forEach(c),i=g(a),t.l(a),o=g(a),n=P(a,"DIV",{class:!0}),b(n).forEach(c),this.h()},h(){I(l,"class","Panel__in-before svelte-7y6wk0"),I(n,"class","Panel__in-after svelte-7y6wk0")},m(a,d){f&&f.m(a,d),p(a,e,d),p(a,l,d),p(a,i,d),m[s].m(a,d),p(a,o,d),p(a,n,d),u=!0},p(a,d){a[1]===q?f||(f=A(),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null);let z=s;s=_(a),s===z?m[s].p(a,d):(U(),y(m[z],1,1,()=>{m[z]=null}),W(),t=m[s],t?t.p(a,d):(t=m[s]=v[s](a),t.c()),k(t,1),t.m(o.parentNode,o))},i(a){u||(k(t),u=!0)},o(a){y(t),u=!1},d(a){f&&f.d(a),a&&c(e),a&&c(l),a&&c(i),m[s].d(a),a&&c(o),a&&c(n)}}}function le(r){let e,l,i,s;l=new x({props:{component:$,class:"Panel__in",$$slots:{default:[te]},$$scope:{ctx:r}}});let t=[r[5],{class:i=w(S("Panel",r[1]),`Panel--${r[2].sizeX}`,{"Panel--centered":r[0],[`Panel--sizeX-${r[2].sizeX}`]:!0},r[6].class)}],o={};for(let n=0;n<t.length;n+=1)o=D(o,t[n]);return{c(){e=h("div"),j(l.$$.fragment),this.h()},l(n){e=P(n,"DIV",{class:!0});var u=b(e);F(l.$$.fragment,u),u.forEach(c),this.h()},h(){E(e,o),N(e,"svelte-7y6wk0",!0)},m(n,u){p(n,e,u),L(l,e,null),s=!0},p(n,[u]){const f={};u&259&&(f.$$scope={dirty:u,ctx:n}),l.$set(f),E(e,o=M(t,[u&32&&n[5],(!s||u&71&&i!==(i=w(S("Panel",n[1]),`Panel--${n[2].sizeX}`,{"Panel--centered":n[0],[`Panel--sizeX-${n[2].sizeX}`]:!0},n[6].class)))&&{class:i}])),N(e,"svelte-7y6wk0",!0)},i(n){s||(k(l.$$.fragment,n),s=!0)},o(n){y(l.$$.fragment,n),s=!1},d(n){n&&c(e),Q(l)}}}function ae(r,e,l){const i=["centered"];let s=T(e,i),t,o,{$$slots:n={},$$scope:u}=e,{centered:f=!1}=e;const v=Y();V(r,v,_=>l(2,o=_));const m=Z();return V(r,m,_=>l(1,t=_)),r.$$set=_=>{l(6,e=D(D({},e),C(_))),l(5,s=T(e,i)),"centered"in _&&l(0,f=_.centered),"$$scope"in _&&l(8,u=_.$$scope)},e=C(e),[f,t,o,v,m,s,e,n,u]}class fe extends K{constructor(e){super();O(this,e,ae,le,R,{centered:0})}}export{fe as P};
