import{S as le,i as ae,s as te,O as S,J as oe,K as fe,e as I,w as N,k as C,c as E,a as A,x as z,m as D,d as v,b,f as q,g as $,y as M,T as R,P as T,Q as V,R as Y,L as ce,q as h,o as p,B as O,v as ue,aa as me,G as w,t as se,h as ne,j as re,a8 as H,C as B,a4 as K,n as W,p as X,z as _e,a5 as j,M as G,a7 as de,an as he,N as pe}from"./vendor-ad41e947.js";import{n as J,k as Q,I as F,h as U,a as ve,u as be}from"./File.svelte_svelte_type_style_lang-897cf515.js";import{I as ie}from"./IconButton-1d3e51f5.js";import{B as ge,T as $e}from"./Tappable-e57a254e.js";const Pe=t=>({}),Z=t=>({});function ke(t){let e;return{c(){e=I("i"),this.h()},l(l){e=E(l,"I",{class:!0,role:!0}),A(e).forEach(v),this.h()},h(){b(e,"class","Removable__toggle-in"),b(e,"role","presentation")},m(l,a){$(l,e,a)},d(l){l&&v(e)}}}function Re(t){let e;return{c(){e=se(t[0])},l(l){e=ne(l,t[0])},m(l,a){$(l,e,a)},p(l,a){a&1&&re(e,l[0])},d(l){l&&v(e)}}}function Ie(t){let e,l;const a=t[6].removePlaceholder,n=S(a,t,t[9],Z),o=n||Re(t);return{c(){e=I("span"),o&&o.c(),this.h()},l(s){e=E(s,"SPAN",{class:!0});var r=A(e);o&&o.l(r),r.forEach(v),this.h()},h(){b(e,"class","Removable__remove-in")},m(s,r){$(s,e,r),o&&o.m(e,null),l=!0},p(s,r){n?n.p&&(!l||r&512)&&T(n,a,s,s[9],l?Y(a,s[9],r,Pe):V(s[9]),Z):o&&o.p&&(!l||r&1)&&o.p(s,l?r:-1)},i(s){l||(h(o,s),l=!0)},o(s){p(o,s),l=!1},d(s){s&&v(e),o&&o.d(s)}}}function Ee(t){let e,l,a,n,o,s,r,c,f;l=new ie({props:{hasActive:!1,hasHover:!1,"aria-label":t[0],class:"Removable__action Removable__toggle",disabled:t[3]>0,$$slots:{default:[ke]},$$scope:{ctx:t}}}),l.$on("click",t[5]);const _=t[6].default,d=S(_,t,t[9],null);function P(i){t[7](i)}let g={component:ge,hasActive:!1,hasHover:!1,disabled:t[2],class:"Removable__remove",$$slots:{default:[Ie]},$$scope:{ctx:t}};return t[1]!==void 0&&(g.container=t[1]),r=new $e({props:g}),oe.push(()=>fe(r,"container",P)),r.$on("click",t[8]),{c(){e=I("div"),N(l.$$.fragment),a=C(),d&&d.c(),n=C(),o=I("span"),s=C(),N(r.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0,ontransitionend:!0});var u=A(e);z(l.$$.fragment,u),a=D(u),d&&d.l(u),n=D(u),o=E(u,"SPAN",{class:!0,"aria-hidden":!0}),A(o).forEach(v),s=D(u),z(r.$$.fragment,u),u.forEach(v),this.h()},h(){var i;b(o,"class","Removable__offset"),b(o,"aria-hidden","true"),b(e,"class","Removable__content"),b(e,"ontransitionend",t[4]),q(e,"transform",`translateX(-${(i=t[3])!=null?i:0}px)`,!1)},m(i,u){$(i,e,u),M(l,e,null),R(e,a),d&&d.m(e,null),R(e,n),R(e,o),R(e,s),M(r,e,null),f=!0},p(i,[u]){var L;const k={};u&1&&(k["aria-label"]=i[0]),u&8&&(k.disabled=i[3]>0),u&512&&(k.$$scope={dirty:u,ctx:i}),l.$set(k),d&&d.p&&(!f||u&512)&&T(d,_,i,i[9],f?Y(_,i[9],u,null):V(i[9]),null);const m={};u&4&&(m.disabled=i[2]),u&513&&(m.$$scope={dirty:u,ctx:i}),!c&&u&2&&(c=!0,m.container=i[1],ce(()=>c=!1)),r.$set(m),u&8&&q(e,"transform",`translateX(-${(L=i[3])!=null?L:0}px)`,!1)},i(i){f||(h(l.$$.fragment,i),h(d,i),h(r.$$.fragment,i),f=!0)},o(i){p(l.$$.fragment,i),p(d,i),p(r.$$.fragment,i),f=!1},d(i){i&&v(e),O(l),d&&d.d(i),O(r)}}}function Ae(t,e,l){let{$$slots:a={},$$scope:n}=e,{removePlaceholder:o=""}=e,s,r=!0,c=0;const f=()=>{c>0&&l(3,c=0)};ue(()=>window.addEventListener("click",f,{capture:!0})),me(()=>window.removeEventListener("click",f,{capture:!0}));const _=()=>{c>0?s==null||s.focus():l(2,r=!0)},d=i=>{if(i.stopPropagation(),!s)return;const{offsetWidth:u}=s;l(2,r=!1),l(3,c=u)};function P(i){s=i,l(1,s)}function g(i){w.call(this,t,i)}return t.$$set=i=>{"removePlaceholder"in i&&l(0,o=i.removePlaceholder),"$$scope"in i&&l(9,n=i.$$scope)},[o,s,r,c,_,d,a,P,g,n]}class Ce extends le{constructor(e){super();ae(this,e,Ae,Ee,te,{removePlaceholder:0})}}const De=t=>({}),y=t=>({slot:"removePlaceholder"});function x(t){let e,l,a,n;const o=t[8].default,s=S(o,t,t[12],null);return a=new ie({props:{activeMode:"opacity",hoverMode:"opacity",class:"Removable__action","aria-label":t[1],$$slots:{default:[Ne]},$$scope:{ctx:t}}}),a.$on("click",t[9]),{c(){e=I("div"),s&&s.c(),l=C(),N(a.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var c=A(e);s&&s.l(c),l=D(c),z(a.$$.fragment,c),c.forEach(v),this.h()},h(){b(e,"class","Removable__content")},m(r,c){$(r,e,c),s&&s.m(e,null),R(e,l),M(a,e,null),n=!0},p(r,c){s&&s.p&&(!n||c&4096)&&T(s,o,r,r[12],n?Y(o,r[12],c,null):V(r[12]),null);const f={};c&2&&(f["aria-label"]=r[1]),c&4096&&(f.$$scope={dirty:c,ctx:r}),a.$set(f)},i(r){n||(h(s,r),h(a.$$.fragment,r),n=!0)},o(r){p(s,r),p(a.$$.fragment,r),n=!1},d(r){r&&v(e),s&&s.d(r),O(a)}}}function Ne(t){let e,l;return e=new he({props:{role:"presentation"}}),{c(){N(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,n){M(e,a,n),l=!0},p:pe,i(a){l||(h(e.$$.fragment,a),l=!0)},o(a){p(e.$$.fragment,a),l=!1},d(a){O(e,a)}}}function ee(t){let e,l;return e=new Ce({props:{removePlaceholder:t[1],$$slots:{removePlaceholder:[Oe],default:[ze]},$$scope:{ctx:t}}}),e.$on("click",t[10]),{c(){N(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,n){M(e,a,n),l=!0},p(a,n){const o={};n&2&&(o.removePlaceholder=a[1]),n&4098&&(o.$$scope={dirty:n,ctx:a}),e.$set(o)},i(a){l||(h(e.$$.fragment,a),l=!0)},o(a){p(e.$$.fragment,a),l=!1},d(a){O(e,a)}}}function ze(t){let e;const l=t[8].default,a=S(l,t,t[12],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,o){a&&a.m(n,o),e=!0},p(n,o){a&&a.p&&(!e||o&4096)&&T(a,l,n,n[12],e?Y(l,n[12],o,null):V(n[12]),null)},i(n){e||(h(a,n),e=!0)},o(n){p(a,n),e=!1},d(n){a&&a.d(n)}}}function Me(t){let e;return{c(){e=se(t[1])},l(l){e=ne(l,t[1])},m(l,a){$(l,e,a)},p(l,a){a&2&&re(e,l[1])},d(l){l&&v(e)}}}function Oe(t){let e;const l=t[8].removePlaceholder,a=S(l,t,t[12],y),n=a||Me(t);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){a?a.p&&(!e||s&4096)&&T(a,l,o,o[12],e?Y(l,o[12],s,De):V(o[12]),y):n&&n.p&&(!e||s&2)&&n.p(o,e?s:-1)},i(o){e||(h(n,o),e=!0)},o(o){p(n,o),e=!1},d(o){n&&n.d(o)}}}function Se(t){let e,l,a,n,o=(t[3]===J||t[3]===Q)&&x(t),s=t[3]===F&&ee(t),r=[t[7],{class:a=H(t[7].class,U("Removable",t[3]),`Removable--${t[2]}`,`Removable--sizeY-${t[4].sizeY}`)}],c={};for(let f=0;f<r.length;f+=1)c=B(c,r[f]);return{c(){e=I("div"),o&&o.c(),l=C(),s&&s.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var _=A(e);o&&o.l(_),l=D(_),s&&s.l(_),_.forEach(v),this.h()},h(){K(e,c)},m(f,_){$(f,e,_),o&&o.m(e,null),R(e,l),s&&s.m(e,null),t[11](e),n=!0},p(f,[_]){f[3]===J||f[3]===Q?o?(o.p(f,_),_&8&&h(o,1)):(o=x(f),o.c(),h(o,1),o.m(e,l)):o&&(W(),p(o,1,1,()=>{o=null}),X()),f[3]===F?s?(s.p(f,_),_&8&&h(s,1)):(s=ee(f),s.c(),h(s,1),s.m(e,null)):s&&(W(),p(s,1,1,()=>{s=null}),X()),K(e,c=_e(r,[_&128&&f[7],(!n||_&156&&a!==(a=H(f[7].class,U("Removable",f[3]),`Removable--${f[2]}`,`Removable--sizeY-${f[4].sizeY}`)))&&{class:a}]))},i(f){n||(h(o),h(s),n=!0)},o(f){p(o),p(s),n=!1},d(f){f&&v(e),o&&o.d(),s&&s.d(),t[11](null)}}}function Te(t,e,l){const a=["removePlaceholder","align","root"];let n=j(e,a),o,s,{$$slots:r={},$$scope:c}=e,{removePlaceholder:f="\u0423\u0434\u0430\u043B\u0438\u0442\u044C"}=e,{align:_="center"}=e,{root:d=null}=e;const P=ve();G(t,P,m=>l(3,o=m));const g=be();G(t,g,m=>l(4,s=m));function i(m){w.call(this,t,m)}function u(m){w.call(this,t,m)}function k(m){oe[m?"unshift":"push"](()=>{d=m,l(0,d)})}return t.$$set=m=>{e=B(B({},e),de(m)),l(7,n=j(e,a)),"removePlaceholder"in m&&l(1,f=m.removePlaceholder),"align"in m&&l(2,_=m.align),"root"in m&&l(0,d=m.root),"$$scope"in m&&l(12,c=m.$$scope)},[d,f,_,o,s,P,g,n,r,i,u,k,c]}class Le extends le{constructor(e){super();ae(this,e,Te,Se,te,{removePlaceholder:1,align:2,root:0})}}export{Le as R};
