import{S as T,i as j,s as A,O as B,C as I,e as k,k as F,c as M,a as D,d as P,m as H,b as E,a4 as C,a1 as V,g as J,T as z,ab as O,P as K,Q as U,R as Z,z as w,q as x,at as $,aC as S,aD as q,o as ee,ac as ae,a5 as L,M as N,v as se,a7 as y,G as te}from"./vendor-f3d45434.js";import{f as G,h as Q,I as R,a as le,i as oe}from"./File.svelte_svelte_type_style_lang-184c9a3b.js";function re(e){let a,t,d,_,i,f,n,u,c,g;const m=e[12].default,o=B(m,e,e[11],null);let h=[e[9],{class:f=G(e[10].class,Q("PopoutWrapper",e[6]),`PopoutWrapper--v-${e[2]}`,`PopoutWrapper--h-${e[3]}`,{"PopoutWrapper--closing":e[4],"PopoutWrapper--opened":e[5],"PopoutWrapper--fixed":e[1],"PopoutWrapper--masked":e[0]})}],p={};for(let l=0;l<h.length;l+=1)p=I(p,h[l]);return{c(){a=k("div"),t=k("div"),d=k("div"),_=F(),i=k("div"),o&&o.c(),this.h()},l(l){a=M(l,"DIV",{class:!0});var r=D(a);t=M(r,"DIV",{class:!0});var v=D(t);d=M(v,"DIV",{class:!0}),D(d).forEach(P),_=H(v),i=M(v,"DIV",{class:!0});var W=D(i);o&&o.l(W),W.forEach(P),v.forEach(P),r.forEach(P),this.h()},h(){E(d,"class","PopoutWrapper__overlay svelte-s4zaud"),E(i,"class","PopoutWrapper__content svelte-s4zaud"),E(t,"class","PopoutWrapper__container svelte-s4zaud"),C(a,p),V(a,"svelte-s4zaud",!0)},m(l,r){J(l,a,r),z(a,t),z(t,d),z(t,_),z(t,i),o&&o.m(i,null),u=!0,c||(g=[O(d,"click",e[13]),O(a,"introend",e[14])],c=!0)},p(l,[r]){e=l,o&&o.p&&(!u||r&2048)&&K(o,m,e,e[11],u?Z(m,e[11],r,null):U(e[11]),null),C(a,p=w(h,[r&512&&e[9],(!u||r&1151&&f!==(f=G(e[10].class,Q("PopoutWrapper",e[6]),`PopoutWrapper--v-${e[2]}`,`PopoutWrapper--h-${e[3]}`,{"PopoutWrapper--closing":e[4],"PopoutWrapper--opened":e[5],"PopoutWrapper--fixed":e[1],"PopoutWrapper--masked":e[0]})))&&{class:f}])),V(a,"svelte-s4zaud",!0)},i(l){u||(x(o,l),$(()=>{n||(n=S(a,q,{duration:e[6]===R?300:200},!0)),n.run(1)}),u=!0)},o(l){ee(o,l),n||(n=S(a,q,{duration:e[6]===R?300:200},!1)),n.run(0),u=!1},d(l){l&&P(a),o&&o.d(l),l&&n&&n.end(),c=!1,ae(g)}}}function ie(e,a,t){const d=["hasMask","fixed","alignY","alignX","closing"];let _=L(a,d),i,f,{$$slots:n={},$$scope:u}=a,{hasMask:c=!0}=a,{fixed:g=!0}=a,{alignY:m="center"}=a,{alignX:o="center"}=a,{closing:h=!1}=a,p=!c;const l=le();N(e,l,s=>t(6,f=s));const r=oe();N(e,r,s=>t(15,i=s)),se(()=>{var Y;const s={passive:!1},X=b=>b.preventDefault();return(Y=i.window)==null||Y.addEventListener("touchmove",X,s),()=>{var b;return(b=i.window)==null?void 0:b.removeEventListener("touchmove",X)}});function v(s){te.call(this,e,s)}const W=()=>t(5,p=!0);return e.$$set=s=>{t(10,a=I(I({},a),y(s))),t(9,_=L(a,d)),"hasMask"in s&&t(0,c=s.hasMask),"fixed"in s&&t(1,g=s.fixed),"alignY"in s&&t(2,m=s.alignY),"alignX"in s&&t(3,o=s.alignX),"closing"in s&&t(4,h=s.closing),"$$scope"in s&&t(11,u=s.$$scope)},a=y(a),[c,g,m,o,h,p,f,l,r,_,a,u,n,v,W]}class de extends T{constructor(a){super();j(this,a,ie,re,A,{hasMask:0,fixed:1,alignY:2,alignX:3,closing:4})}}export{de as P};