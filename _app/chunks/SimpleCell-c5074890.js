import{S as oe,i as ne,s as ae,C as G,w as $,x,y as ee,z as re,A as _e,q as p,o as v,B as le,H as J,aa as ce,I as K,J as M,G as ue,K as N,e as V,c as z,a as A,d as k,b as j,g,M as q,N as O,O as P,k as D,m as E,a0 as H,n as T,p as X,l as F,t as ie,h as te,j as se,ab as me}from"./vendor-107f5108.js";import{a as de,u as pe,c as be,g as he,I as B}from"./File.svelte_svelte_type_style_lang-ec30d4c1.js";import{T as ve}from"./Tappable-7c7eeb6a.js";import{D as ke}from"./Touch-da745c48.js";import{A as L}from"./a-3a4ccca5.js";const ge=s=>({}),Q=s=>({}),Ce=s=>({}),R=s=>({}),Se=s=>({}),U=s=>({}),Ie=s=>({}),W=s=>({});function Y(s){let e,i;const n=s[13].description,a=N(n,s,s[15],U),t=a||De(s);return{c(){e=V("div"),t&&t.c(),this.h()},l(l){e=z(l,"DIV",{class:!0});var o=A(e);t&&t.l(o),o.forEach(k),this.h()},h(){j(e,"class","SimpleCell__description svelte-ow13di")},m(l,o){g(l,e,o),t&&t.m(e,null),i=!0},p(l,o){a?a.p&&(!i||o&32768)&&q(a,n,l,l[15],i?P(n,l[15],o,Se):O(l[15]),U):t&&t.p&&(!i||o&8)&&t.p(l,i?o:-1)},i(l){i||(p(t,l),i=!0)},o(l){v(t,l),i=!1},d(l){l&&k(e),t&&t.d(l)}}}function De(s){let e;return{c(){e=ie(s[3])},l(i){e=te(i,s[3])},m(i,n){g(i,e,n)},p(i,n){n&8&&se(e,i[3])},d(i){i&&k(e)}}}function Z(s){let e,i;const n=s[13].indicator,a=N(n,s,s[15],R),t=a||Ee(s);return{c(){e=V("div"),t&&t.c(),this.h()},l(l){e=z(l,"DIV",{class:!0});var o=A(e);t&&t.l(o),o.forEach(k),this.h()},h(){j(e,"class","SimpleCell__indicator svelte-ow13di")},m(l,o){g(l,e,o),t&&t.m(e,null),i=!0},p(l,o){a?a.p&&(!i||o&32768)&&q(a,n,l,l[15],i?P(n,l[15],o,Ce):O(l[15]),R):t&&t.p&&(!i||o&4)&&t.p(l,i?o:-1)},i(l){i||(p(t,l),i=!0)},o(l){v(t,l),i=!1},d(l){l&&k(e),t&&t.d(l)}}}function Ee(s){let e;return{c(){e=ie(s[2])},l(i){e=te(i,s[2])},m(i,n){g(i,e,n)},p(i,n){n&4&&se(e,i[2])},d(i){i&&k(e)}}}function w(s){let e,i,n;const a=s[13].after,t=N(a,s,s[15],Q);let l=s[5]&&s[6]===B&&y();return{c(){e=V("div"),t&&t.c(),i=D(),l&&l.c(),this.h()},l(o){e=z(o,"DIV",{class:!0});var d=A(e);t&&t.l(d),i=E(d),l&&l.l(d),d.forEach(k),this.h()},h(){j(e,"class","SimpleCell__after svelte-ow13di")},m(o,d){g(o,e,d),t&&t.m(e,null),H(e,i),l&&l.m(e,null),n=!0},p(o,d){t&&t.p&&(!n||d&32768)&&q(t,a,o,o[15],n?P(a,o[15],d,ge):O(o[15]),Q),o[5]&&o[6]===B?l?d&96&&p(l,1):(l=y(),l.c(),p(l,1),l.m(e,null)):l&&(T(),v(l,1,1,()=>{l=null}),X())},i(o){n||(p(t,o),p(l),n=!0)},o(o){v(t,o),v(l),n=!1},d(o){o&&k(e),t&&t.d(o),l&&l.d()}}}function y(s){let e,i;return e=new me({}),{c(){$(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,a){ee(e,n,a),i=!0},i(n){i||(p(e.$$.fragment,n),i=!0)},o(n){v(e.$$.fragment,n),i=!1},d(n){le(e,n)}}}function Ne(s){let e,i,n,a,t,l,o,d;const S=s[13].before,b=N(S,s,s[15],W),C=s[13].default,h=N(C,s,s[15],null);let c=(s[10].description||s[3])&&Y(s),u=(s[10].indicator||typeof s[2]!="undefined")&&Z(s),_=(s[10].after||s[5]&&s[6]===B)&&w(s);return{c(){b&&b.c(),e=D(),i=V("div"),n=V("div"),h&&h.c(),a=D(),c&&c.c(),t=D(),u&&u.c(),l=D(),_&&_.c(),o=F(),this.h()},l(f){b&&b.l(f),e=E(f),i=z(f,"DIV",{class:!0});var r=A(i);n=z(r,"DIV",{class:!0});var I=A(n);h&&h.l(I),I.forEach(k),a=E(r),c&&c.l(r),r.forEach(k),t=E(f),u&&u.l(f),l=E(f),_&&_.l(f),o=F(),this.h()},h(){j(n,"class","SimpleCell__children svelte-ow13di"),j(i,"class","SimpleCell__main svelte-ow13di")},m(f,r){b&&b.m(f,r),g(f,e,r),g(f,i,r),H(i,n),h&&h.m(n,null),H(i,a),c&&c.m(i,null),g(f,t,r),u&&u.m(f,r),g(f,l,r),_&&_.m(f,r),g(f,o,r),d=!0},p(f,r){b&&b.p&&(!d||r&32768)&&q(b,S,f,f[15],d?P(S,f[15],r,Ie):O(f[15]),W),h&&h.p&&(!d||r&32768)&&q(h,C,f,f[15],d?P(C,f[15],r,null):O(f[15]),null),f[10].description||f[3]?c?(c.p(f,r),r&1032&&p(c,1)):(c=Y(f),c.c(),p(c,1),c.m(i,null)):c&&(T(),v(c,1,1,()=>{c=null}),X()),f[10].indicator||typeof f[2]!="undefined"?u?(u.p(f,r),r&1028&&p(u,1)):(u=Z(f),u.c(),p(u,1),u.m(l.parentNode,l)):u&&(T(),v(u,1,1,()=>{u=null}),X()),f[10].after||f[5]&&f[6]===B?_?(_.p(f,r),r&1120&&p(_,1)):(_=w(f),_.c(),p(_,1),_.m(o.parentNode,o)):_&&(T(),v(_,1,1,()=>{_=null}),X())},i(f){d||(p(b,f),p(h,f),p(c),p(u),p(_),d=!0)},o(f){v(b,f),v(h,f),v(c),v(u),v(_),d=!1},d(f){b&&b.d(f),f&&k(e),f&&k(i),h&&h.d(f),c&&c.d(),f&&k(t),u&&u.d(f),f&&k(l),_&&_.d(f),f&&k(o)}}}function Ve(s){let e,i;const n=[s[9],{href:s[1]},{disabled:s[4]},{component:s[1]?L:s[0]}];let a={$$slots:{default:[Ne]},$$scope:{ctx:s}};for(let t=0;t<n.length;t+=1)a=G(a,n[t]);return e=new ve({props:a}),e.$on("click",s[14]),{c(){$(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),i=!0},p(t,[l]){const o=l&531?re(n,[l&512&&_e(t[9]),l&2&&{href:t[1]},l&16&&{disabled:t[4]},l&3&&{component:t[1]?L:t[0]}]):{};l&33900&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){i||(p(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){le(e,t)}}}function ze(s,e,i){const n=["component","href","indicator","description","disabled","expandable","multiline"];let a=J(e,n),t,l,{$$slots:o={},$$scope:d}=e;const S=ce(o);let{component:b=ke}=e,{href:C=void 0}=e,{indicator:h=void 0}=e,{description:c=""}=e,{disabled:u=!1}=e,{expandable:_=!1}=e,{multiline:f=!1}=e;const r=de();K(s,r,m=>i(12,t=m));const I=pe();K(s,I,m=>i(6,l=m));function fe(m){ue.call(this,s,m)}return s.$$set=m=>{i(16,e=G(G({},e),M(m))),i(9,a=J(e,n)),"component"in m&&i(0,b=m.component),"href"in m&&i(1,C=m.href),"indicator"in m&&i(2,h=m.indicator),"description"in m&&i(3,c=m.description),"disabled"in m&&i(4,u=m.disabled),"expandable"in m&&i(5,_=m.expandable),"multiline"in m&&i(11,f=m.multiline),"$$scope"in m&&i(15,d=m.$$scope)},s.$$.update=()=>{i(9,a.class=be(e.class,he("SimpleCell",l),`SimpleCell--sizeX-${t.sizeX}`,{"SimpleCell--exp":_,"SimpleCell--mult":f}),a)},e=M(e),[b,C,h,c,u,_,l,r,I,a,S,f,t,o,fe,d]}class Te extends oe{constructor(e){super();ne(this,e,ze,Ve,ae,{component:0,href:1,indicator:2,description:3,disabled:4,expandable:5,multiline:11})}}export{Te as S};