import{S as y,i as $,s as x,O as M,w as U,x as W,y as Y,q as m,o as d,B as Z,C as P,e as N,k as S,c as O,a as q,m as X,d as C,b as ee,a4 as A,a1 as j,g as w,T as k,P as T,Q as E,R as I,n as B,p as D,z as se,a5 as Q,a6 as te,M as R,a7 as V,t as ae,h as oe,j as re}from"./vendor-705c6f74.js";import{f as z,h as F,u as le,a as ie,l as ne}from"./File.svelte_svelte_type_style_lang-d8b2afd3.js";import{C as fe}from"./Caption-3bca71e3.js";import{S as ce}from"./Separator-f0f0fff0.js";const _e=a=>({}),H=a=>({}),ue=a=>({}),J=a=>({});function K(a){let e,t;return e=new fe({props:{class:"Group__description",weight:"regular",level:"1",$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){U(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,r){Y(e,o,r),t=!0},p(o,r){const l={};r&4097&&(l.$$scope={dirty:r,ctx:o}),e.$set(l)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){Z(e,o)}}}function pe(a){let e;return{c(){e=ae(a[0])},l(t){e=oe(t,a[0])},m(t,o){w(t,e,o)},p(t,o){o&1&&re(e,t[0])},d(t){t&&C(e)}}}function me(a){let e;const t=a[11].description,o=M(t,a,a[12],H),r=o||pe(a);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,u){r&&r.m(l,u),e=!0},p(l,u){o?o.p&&(!e||u&4096)&&T(o,t,l,l[12],e?I(t,l[12],u,_e):E(l[12]),H):r&&r.p&&(!e||u&1)&&r.p(l,e?u:-1)},i(l){e||(m(r,l),e=!0)},o(l){d(r,l),e=!1},d(l){r&&r.d(l)}}}function L(a){let e,t;return e=new ce({props:{class:z("Group__separator",{"Group__separator--force":a[1]==="show"}),expanded:a[3]==="card"}}),{c(){U(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,r){Y(e,o,r),t=!0},p(o,r){const l={};r&2&&(l.class=z("Group__separator",{"Group__separator--force":o[1]==="show"})),r&8&&(l.expanded=o[3]==="card"),e.$set(l)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){Z(e,o)}}}function de(a){let e,t,o,r,l,u,p;const g=a[11].header,c=M(g,a,a[12],J),v=a[11].default,_=M(v,a,a[12],null);let n=(a[9].description||a[0]!=="")&&K(a),i=a[1]!=="hide"&&L(a),G=[a[7],{class:u=z(a[8].class,F("Group",a[4]),`Group--sizeX-${a[2].sizeX}`,`Group--${a[3]}`)}],h={};for(let s=0;s<G.length;s+=1)h=P(h,G[s]);return{c(){e=N("section"),t=N("div"),c&&c.c(),o=S(),_&&_.c(),r=S(),n&&n.c(),l=S(),i&&i.c(),this.h()},l(s){e=O(s,"SECTION",{class:!0});var f=q(e);t=O(f,"DIV",{class:!0});var b=q(t);c&&c.l(b),o=X(b),_&&_.l(b),r=X(b),n&&n.l(b),b.forEach(C),l=X(f),i&&i.l(f),f.forEach(C),this.h()},h(){ee(t,"class","Group__inner svelte-15ipv0f"),A(e,h),j(e,"svelte-15ipv0f",!0)},m(s,f){w(s,e,f),k(e,t),c&&c.m(t,null),k(t,o),_&&_.m(t,null),k(t,r),n&&n.m(t,null),k(e,l),i&&i.m(e,null),p=!0},p(s,[f]){c&&c.p&&(!p||f&4096)&&T(c,g,s,s[12],p?I(g,s[12],f,ue):E(s[12]),J),_&&_.p&&(!p||f&4096)&&T(_,v,s,s[12],p?I(v,s[12],f,null):E(s[12]),null),s[9].description||s[0]!==""?n?(n.p(s,f),f&513&&m(n,1)):(n=K(s),n.c(),m(n,1),n.m(t,null)):n&&(B(),d(n,1,1,()=>{n=null}),D()),s[1]!=="hide"?i?(i.p(s,f),f&2&&m(i,1)):(i=L(s),i.c(),m(i,1),i.m(e,null)):i&&(B(),d(i,1,1,()=>{i=null}),D()),A(e,h=se(G,[f&128&&s[7],(!p||f&284&&u!==(u=z(s[8].class,F("Group",s[4]),`Group--sizeX-${s[2].sizeX}`,`Group--${s[3]}`)))&&{class:u}])),j(e,"svelte-15ipv0f",!0)},i(s){p||(m(c,s),m(_,s),m(n),m(i),p=!0)},o(s){d(c,s),d(_,s),d(n),d(i),p=!1},d(s){s&&C(e),c&&c.d(s),_&&_.d(s),n&&n.d(),i&&i.d()}}}const he=!1;function ge(a,e,t){let o;const r=["description","separator","mode"];let l=Q(e,r),u,p,{$$slots:g={},$$scope:c}=e;const v=te(g);let{description:_=""}=e,{separator:n="auto"}=e,{mode:i=void 0}=e;const G=le();R(a,G,s=>t(2,u=s));const h=ie();return R(a,h,s=>t(4,p=s)),a.$$set=s=>{t(8,e=P(P({},e),V(s))),t(7,l=Q(e,r)),"description"in s&&t(0,_=s.description),"separator"in s&&t(1,n=s.separator),"mode"in s&&t(10,i=s.mode),"$$scope"in s&&t(12,c=s.$$scope)},a.$$.update=()=>{a.$$.dirty&1028&&t(3,o=i||(u.sizeX===ne.COMPACT||he?"plain":"card"))},e=V(e),[_,n,u,o,p,G,h,l,e,v,i,g,c]}class Ce extends y{constructor(e){super();$(this,e,ge,de,x,{description:0,separator:1,mode:10})}}export{Ce as G};
