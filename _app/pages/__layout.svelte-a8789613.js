import{S as W,i as E,s as U,w as g,k as C,e as N,x as d,m as A,c as K,a as D,d as v,b as q,y as k,g as P,q as u,o as $,B as h,n as S,p as B,F as Q,l as I,t as T,h as F,j as X,G as j,H as He,I as Ve,J as We,K as Ee,L as Ue,M as Z,N as H,O as ee,P as te,Q as ne,R as re,T as x,U as Ge,V as Se,W as Be,X as Ne,v as Ke,Y as O}from"../chunks/vendor-f3d45434.js";import{A as De,u as Le,a as Oe,g as Re,b as qe,V as M,S as je,c as Je,d as Ce,C as Qe,W as ae,e as Xe}from"../chunks/File.svelte_svelte_type_style_lang-184c9a3b.js";import{P as Ae}from"../chunks/Panel-ba710e35.js";import{P as Y}from"../chunks/PanelHeader-c777139e.js";import{P as le}from"../chunks/PanelHeaderButton-43b07e6c.js";import{P as Ye}from"../chunks/PanelHeaderClose-1630fd2f.js";import{G as Ie}from"../chunks/Group-fb6acbe3.js";import{L as G}from"../chunks/Link-8a89450c.js";import{S as oe}from"../chunks/SimpleCell-baf08a30.js";import{H as Ze}from"../chunks/Header-5e0a0534.js";import{I as Te}from"../chunks/Icon28TokenizedOutline-65345f18.js";import{F as xe}from"../chunks/Footer-b4115c06.js";import{S as et}from"../chunks/Search-55713ff1.js";import{I as tt}from"../chunks/IconButton-6f98634a.js";import{b as nt}from"../chunks/paths-4b3c6e7e.js";import{C as Fe}from"../chunks/Caption-a542ea7a.js";import{D as rt}from"../chunks/Div-e3e04ab4.js";import"../chunks/Touch-ca7c47e0.js";import"../chunks/Separator-02083e3e.js";import"../chunks/Text-e2f4f9ff.js";import"../chunks/Tappable-7ffc7a62.js";import"../chunks/Title-9ed5c810.js";import"../chunks/Headline-4eb2972f.js";import"../chunks/Subhead-1ac84747.js";function se(o,t,n){const e=o.slice();return e[8]=t[n],e}function ie(o){let t,n,e,r;t=new oe({props:{$$slots:{after:[it],default:[lt]},$$scope:{ctx:o}}}),t.$on("click",o[6]);let l=o[5],s=[];for(let a=0;a<l.length;a+=1)s[a]=fe(se(o,l,a));const m=a=>$(s[a],1,1,()=>{s[a]=null});return{c(){g(t.$$.fragment),n=C(),e=N("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){d(t.$$.fragment,a),n=A(a),e=K(a,"DIV",{class:!0});var f=D(e);for(let i=0;i<s.length;i+=1)s[i].l(f);f.forEach(v),this.h()},h(){q(e,"class","Element svelte-1jb4zvh")},m(a,f){k(t,a,f),P(a,n,f),P(a,e,f);for(let i=0;i<s.length;i+=1)s[i].m(e,null);r=!0},p(a,f){const i={};if(f&2073&&(i.$$scope={dirty:f,ctx:a}),t.$set(i),f&38){l=a[5];let c;for(c=0;c<l.length;c+=1){const p=se(a,l,c);s[c]?(s[c].p(p,f),u(s[c],1)):(s[c]=fe(p),s[c].c(),u(s[c],1),s[c].m(e,null))}for(S(),c=l.length;c<s.length;c+=1)m(c);B()}},i(a){if(!r){u(t.$$.fragment,a);for(let f=0;f<l.length;f+=1)u(s[f]);r=!0}},o(a){$(t.$$.fragment,a),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)$(s[f]);r=!1},d(a){h(t,a),a&&v(n),a&&v(e),Q(s,a)}}}function lt(o){let t=o[3].header+"",n;return{c(){n=T(t)},l(e){n=F(e,t)},m(e,r){P(e,n,r)},p(e,r){r&8&&t!==(t=e[3].header+"")&&X(n,t)},d(e){e&&v(n)}}}function ot(o){let t,n;return t=new He({props:{fill:"var(--text_tertiary)"}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function at(o){let t,n;return t=new Ve({props:{fill:"var(--text_tertiary)"}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function st(o){let t,n,e,r;const l=[at,ot],s=[];function m(a,f){return a[4]||a[0]!==""?0:1}return t=m(o),n=s[t]=l[t](o),{c(){n.c(),e=I()},l(a){n.l(a),e=I()},m(a,f){s[t].m(a,f),P(a,e,f),r=!0},p(a,f){let i=t;t=m(a),t!==i&&(S(),$(s[i],1,1,()=>{s[i]=null}),B(),n=s[t],n||(n=s[t]=l[t](a),n.c()),u(n,1),n.m(e.parentNode,e))},i(a){r||(u(n),r=!0)},o(a){$(n),r=!1},d(a){s[t].d(a),a&&v(e)}}}function it(o){let t,n;return t=new tt({props:{slot:"after",$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&2065&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ct(o){let t=o[8].name+"",n,e;return{c(){n=T(t),e=C()},l(r){n=F(r,t),e=A(r)},m(r,l){P(r,n,l),P(r,e,l)},p(r,l){l&32&&t!==(t=r[8].name+"")&&X(n,t)},d(r){r&&v(n),r&&v(e)}}}function ce(o){let t,n;return t=new Te({props:{title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 vkui-tokens"}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ft(o){let t,n,e=o[8].tokenized&&ce();return{c(){e&&e.c(),t=C()},l(r){e&&e.l(r),t=A(r)},m(r,l){e&&e.m(r,l),P(r,t,l),n=!0},p(r,l){r[8].tokenized?e?l&32&&u(e,1):(e=ce(),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(S(),$(e,1,1,()=>{e=null}),B())},i(r){n||(u(e),n=!0)},o(r){$(e),n=!1},d(r){e&&e.d(r),r&&v(t)}}}function fe(o){let t,n;return t=new oe({props:{class:o[8].link===o[2].path?"Sidebar__selected":"",href:""+(o[1]+o[8].link),$$slots:{after:[ft],default:[ct]},$$scope:{ctx:o}}}),t.$on("click",o[7]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&36&&(l.class=e[8].link===e[2].path?"Sidebar__selected":""),r&34&&(l.href=""+(e[1]+e[8].link)),r&2080&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ut(o){let t,n,e=(o[5].length>0||!(o[4]||o[0]!==""))&&ie(o);return{c(){e&&e.c(),t=I()},l(r){e&&e.l(r),t=I()},m(r,l){e&&e.m(r,l),P(r,t,l),n=!0},p(r,[l]){r[5].length>0||!(r[4]||r[0]!=="")?e?(e.p(r,l),l&49&&u(e,1)):(e=ie(r),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(S(),$(e,1,1,()=>{e=null}),B())},i(r){n||(u(e),n=!0)},o(r){$(e),n=!1},d(r){e&&e.d(r),r&&v(t)}}}function mt(o,t,n){let e,{search:r=""}=t,{base:l=""}=t,s=!1,{currentPage:m={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t,{group:a={header:"Block",child:[{name:"Div",link:"components/block/div"},{name:"Link",link:"/quickStart",tokenized:!0}]}}=t;const f=()=>n(4,s=!s);function i(c){j.call(this,o,c)}return o.$$set=c=>{"search"in c&&n(0,r=c.search),"base"in c&&n(1,l=c.base),"currentPage"in c&&n(2,m=c.currentPage),"group"in c&&n(3,a=c.group)},o.$$.update=()=>{o.$$.dirty&25&&n(5,e=r===""?s?a.child:[]:a.child.filter(({name:c})=>c.toLowerCase().indexOf(r)>-1))},[r,l,m,a,s,e,f,i]}class pt extends W{constructor(t){super();E(this,t,mt,ut,U,{search:0,base:1,currentPage:2,group:3})}}function ue(o,t,n){const e=o.slice();return e[7]=t[n],e}function me(o){let t,n;return t=new xe({props:{$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&1024&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function $t(o){let t;return{c(){t=T("\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")},l(n){t=F(n,"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")},m(n,e){P(n,t,e)},d(n){n&&v(t)}}}function pe(o){let t,n;return t=new pt({props:{group:o[7],currentPage:o[1],base:o[0],search:o[2].toLowerCase()}}),t.$on("click",o[6]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&8&&(l.group=e[7]),r&2&&(l.currentPage=e[1]),r&1&&(l.base=e[0]),r&4&&(l.search=e[2].toLowerCase()),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function _t(o){let t,n,e,r,l;function s(p){o[5](p)}let m={placeholder:"\u041F\u043E\u0438\u0441\u043A",style:"background:none"};o[2]!==void 0&&(m.value=o[2]),t=new et({props:m}),We.push(()=>Ee(t,"value",s));let a=o[3],f=[];for(let p=0;p<a.length;p+=1)f[p]=pe(ue(o,a,p));const i=p=>$(f[p],1,1,()=>{f[p]=null});let c=null;return a.length||(c=me(o)),{c(){g(t.$$.fragment),e=C();for(let p=0;p<f.length;p+=1)f[p].c();r=I(),c&&c.c()},l(p){d(t.$$.fragment,p),e=A(p);for(let _=0;_<f.length;_+=1)f[_].l(p);r=I(),c&&c.l(p)},m(p,_){k(t,p,_),P(p,e,_);for(let b=0;b<f.length;b+=1)f[b].m(p,_);P(p,r,_),c&&c.m(p,_),l=!0},p(p,[_]){const b={};if(!n&&_&4&&(n=!0,b.value=p[2],Ue(()=>n=!1)),t.$set(b),_&15){a=p[3];let w;for(w=0;w<a.length;w+=1){const y=ue(p,a,w);f[w]?(f[w].p(y,_),u(f[w],1)):(f[w]=pe(y),f[w].c(),u(f[w],1),f[w].m(r.parentNode,r))}for(S(),w=a.length;w<f.length;w+=1)i(w);B(),!a.length&&c?c.p(p,_):a.length?c&&(S(),$(c,1,1,()=>{c=null}),B()):(c=me(p),c.c(),u(c,1),c.m(r.parentNode,r))}},i(p){if(!l){u(t.$$.fragment,p);for(let _=0;_<a.length;_+=1)u(f[_]);l=!0}},o(p){$(t.$$.fragment,p),f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)$(f[_]);l=!1},d(p){h(t,p),p&&v(e),Q(f,p),p&&v(r),c&&c.d(p)}}}function gt(o,t,n){let e,{base:r=""}=t,l="",{currentPage:s={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t,{tree:m=[{header:"Block",child:[{name:"\u041E VKSUI",link:"/"},{name:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0442\u0430\u0440\u0442",link:"/quickStart"}]}]}=t;function a(i){l=i,n(2,l)}function f(i){j.call(this,o,i)}return o.$$set=i=>{"base"in i&&n(0,r=i.base),"currentPage"in i&&n(1,s=i.currentPage),"tree"in i&&n(4,m=i.tree)},o.$$.update=()=>{o.$$.dirty&20&&n(3,e=l?m.filter(({child:i})=>i.filter(({name:c})=>c.toLowerCase().indexOf(l)>-1).length>0):m)},[r,s,l,e,m,a,f]}class dt extends W{constructor(t){super();E(this,t,gt,_t,U,{base:0,currentPage:1,tree:4})}}function $e(o,t,n){const e=o.slice();return e[5]=t[n],e}function _e(o,t,n){const e=o.slice();return e[8]=t[n],e}function ge(o){let t,n;return t=new Ze({props:{mode:"secondary",$$slots:{default:[kt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&2050&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function kt(o){let t=o[5].header+"",n;return{c(){n=T(t)},l(e){n=F(e,t)},m(e,r){P(e,n,r)},p(e,r){r&2&&t!==(t=e[5].header+"")&&X(n,t)},d(e){e&&v(n)}}}function de(o){let t,n;return t=new dt({props:{tree:o[5].tree,currentPage:o[2],base:o[0]}}),t.$on("click",o[3]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&2&&(l.tree=e[5].tree),r&4&&(l.currentPage=e[2]),r&1&&(l.base=e[0]),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ht(o){let t=o[8].name+"",n;return{c(){n=T(t)},l(e){n=F(e,t)},m(e,r){P(e,n,r)},p(e,r){r&2&&t!==(t=e[8].name+"")&&X(n,t)},d(e){e&&v(n)}}}function ke(o){let t,n;return t=new Te({props:{title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 vkui-tokens"}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function bt(o){let t,n,e=o[8].tokenized&&ke();return{c(){e&&e.c(),t=I()},l(r){e&&e.l(r),t=I()},m(r,l){e&&e.m(r,l),P(r,t,l),n=!0},p(r,l){r[8].tokenized?e?l&2&&u(e,1):(e=ke(),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(S(),$(e,1,1,()=>{e=null}),B())},i(r){n||(u(e),n=!0)},o(r){$(e),n=!1},d(r){e&&e.d(r),r&&v(t)}}}function he(o){let t,n;return t=new oe({props:{class:o[8].link===o[2].path?"Sidebar__selected":"",href:""+(o[0]+o[8].link),$$slots:{after:[bt],default:[ht]},$$scope:{ctx:o}}}),t.$on("click",o[4]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&6&&(l.class=e[8].link===e[2].path?"Sidebar__selected":""),r&3&&(l.href=""+(e[0]+e[8].link)),r&2050&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function vt(o){let t,n,e,r,l=o[5].header&&ge(o),s=o[5].header==="\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"&&de(o),m=o[5].child,a=[];for(let i=0;i<m.length;i+=1)a[i]=he(_e(o,m,i));const f=i=>$(a[i],1,1,()=>{a[i]=null});return{c(){l&&l.c(),t=C(),s&&s.c(),n=C();for(let i=0;i<a.length;i+=1)a[i].c();e=C()},l(i){l&&l.l(i),t=A(i),s&&s.l(i),n=A(i);for(let c=0;c<a.length;c+=1)a[c].l(i);e=A(i)},m(i,c){l&&l.m(i,c),P(i,t,c),s&&s.m(i,c),P(i,n,c);for(let p=0;p<a.length;p+=1)a[p].m(i,c);P(i,e,c),r=!0},p(i,c){if(i[5].header?l?(l.p(i,c),c&2&&u(l,1)):(l=ge(i),l.c(),u(l,1),l.m(t.parentNode,t)):l&&(S(),$(l,1,1,()=>{l=null}),B()),i[5].header==="\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"?s?(s.p(i,c),c&2&&u(s,1)):(s=de(i),s.c(),u(s,1),s.m(n.parentNode,n)):s&&(S(),$(s,1,1,()=>{s=null}),B()),c&7){m=i[5].child;let p;for(p=0;p<m.length;p+=1){const _=_e(i,m,p);a[p]?(a[p].p(_,c),u(a[p],1)):(a[p]=he(_),a[p].c(),u(a[p],1),a[p].m(e.parentNode,e))}for(S(),p=m.length;p<a.length;p+=1)f(p);B()}},i(i){if(!r){u(l),u(s);for(let c=0;c<m.length;c+=1)u(a[c]);r=!0}},o(i){$(l),$(s),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)$(a[c]);r=!1},d(i){l&&l.d(i),i&&v(t),s&&s.d(i),i&&v(n),Q(a,i),i&&v(e)}}}function be(o){let t,n;return t=new Ie({props:{mode:"plain",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&2055&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Pt(o){let t,n,e=o[1],r=[];for(let s=0;s<e.length;s+=1)r[s]=be($e(o,e,s));const l=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=I()},l(s){for(let m=0;m<r.length;m+=1)r[m].l(s);t=I()},m(s,m){for(let a=0;a<r.length;a+=1)r[a].m(s,m);P(s,t,m),n=!0},p(s,[m]){if(m&7){e=s[1];let a;for(a=0;a<e.length;a+=1){const f=$e(s,e,a);r[a]?(r[a].p(f,m),u(r[a],1)):(r[a]=be(f),r[a].c(),u(r[a],1),r[a].m(t.parentNode,t))}for(S(),a=e.length;a<r.length;a+=1)l(a);B()}},i(s){if(!n){for(let m=0;m<e.length;m+=1)u(r[m]);n=!0}},o(s){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)$(r[m]);n=!1},d(s){Q(r,s),s&&v(t)}}}function wt(o,t,n){let{base:e=""}=t,{tree:r}=t,{currentPage:l={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t;function s(a){j.call(this,o,a)}function m(a){j.call(this,o,a)}return o.$$set=a=>{"base"in a&&n(0,e=a.base),"tree"in a&&n(1,r=a.tree),"currentPage"in a&&n(2,l=a.currentPage)},[e,r,l,s,m]}class ye extends W{constructor(t){super();E(this,t,wt,Pt,U,{base:0,tree:1,currentPage:2})}}function ve(o){let t,n;return t=new Ce({props:{maxWidth:"280px",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16398&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function St(o){let t;return{c(){t=T(J)},l(n){t=F(n,J)},m(n,e){P(n,t,e)},p:H,d(n){n&&v(t)}}}function Bt(o){let t,n,e,r;return t=new Y({props:{$$slots:{default:[St]},$$scope:{ctx:o}}}),e=new ye({props:{currentPage:o[3],tree:o[2],base:o[1]}}),{c(){g(t.$$.fragment),n=C(),g(e.$$.fragment)},l(l){d(t.$$.fragment,l),n=A(l),d(e.$$.fragment,l)},m(l,s){k(t,l,s),P(l,n,s),k(e,l,s),r=!0},p(l,s){const m={};s&16384&&(m.$$scope={dirty:s,ctx:l}),t.$set(m);const a={};s&8&&(a.currentPage=l[3]),s&4&&(a.tree=l[2]),s&2&&(a.base=l[1]),e.$set(a)},i(l){r||(u(t.$$.fragment,l),u(e.$$.fragment,l),r=!0)},o(l){$(t.$$.fragment,l),$(e.$$.fragment,l),r=!1},d(l){h(t,l),l&&v(n),h(e,l)}}}function Lt(o){let t,n;return t=new Ae({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16398&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ct(o){let t,n;return t=new Y({props:{$$slots:{right:[Wt],left:[Mt],default:[It]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16401&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function At(o){let t,n;return t=new Y({props:{$$slots:{right:[Rt],default:[Nt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16385&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function It(o){let t;return{c(){t=T(J)},l(n){t=F(n,J)},m(n,e){P(n,t,e)},p:H,d(n){n&&v(t)}}}function Tt(o){let t,n;return t=new le({props:{$$slots:{default:[yt]},$$scope:{ctx:o}}}),t.$on("click",o[10]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16384&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ft(o){let t,n;return t=new Ye({}),t.$on("click",o[10]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p:H,i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function yt(o){let t,n;return t=new Ge({}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Mt(o){let t,n,e,r;const l=[Ft,Tt],s=[];function m(a,f){return a[4]?0:1}return t=m(o),n=s[t]=l[t](o),{c(){n.c(),e=I()},l(a){n.l(a),e=I()},m(a,f){s[t].m(a,f),P(a,e,f),r=!0},p(a,f){let i=t;t=m(a),t===i?s[t].p(a,f):(S(),$(s[i],1,1,()=>{s[i]=null}),B(),n=s[t],n?n.p(a,f):(n=s[t]=l[t](a),n.c()),u(n,1),n.m(e.parentNode,e))},i(a){r||(u(n),r=!0)},o(a){$(n),r=!1},d(a){s[t].d(a),a&&v(e)}}}function zt(o){let t,n;return t=new Se({}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ht(o){let t,n;return t=new Be({}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Vt(o){let t,n,e,r;const l=[Ht,zt],s=[];function m(a,f){return a[0]==="dark"?0:1}return t=m(o),n=s[t]=l[t](o),{c(){n.c(),e=I()},l(a){n.l(a),e=I()},m(a,f){s[t].m(a,f),P(a,e,f),r=!0},p(a,f){let i=t;t=m(a),t!==i&&(S(),$(s[i],1,1,()=>{s[i]=null}),B(),n=s[t],n||(n=s[t]=l[t](a),n.c()),u(n,1),n.m(e.parentNode,e))},i(a){r||(u(n),r=!0)},o(a){$(n),r=!1},d(a){s[t].d(a),a&&v(e)}}}function Wt(o){let t,n;return t=new le({props:{slot:"right",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),t.$on("click",o[9]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16385&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Et(o){let t;return{c(){t=T(o[11])},l(n){t=F(n,o[11])},m(n,e){P(n,t,e)},p:H,d(n){n&&v(t)}}}function Ut(o){let t;return{c(){t=T("GitHub")},l(n){t=F(n,"GitHub")},m(n,e){P(n,t,e)},d(n){n&&v(t)}}}function Gt(o){let t;return{c(){t=T("\u0420\u0435\u043B\u0438\u0437\u044B")},l(n){t=F(n,"\u0420\u0435\u043B\u0438\u0437\u044B")},m(n,e){P(n,t,e)},d(n){n&&v(t)}}}function Nt(o){let t,n,e,r,l,s,m;return n=new G({props:{href:"https://www.npmjs.com/package/@sveltevk/vksui",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Et]},$$scope:{ctx:o}}}),r=new G({props:{href:we,target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),s=new G({props:{href:we+"/releases",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Gt]},$$scope:{ctx:o}}}),{c(){t=N("div"),g(n.$$.fragment),e=C(),g(r.$$.fragment),l=C(),g(s.$$.fragment),this.h()},l(a){t=K(a,"DIV",{class:!0});var f=D(t);d(n.$$.fragment,f),e=A(f),d(r.$$.fragment,f),l=A(f),d(s.$$.fragment,f),f.forEach(v),this.h()},h(){q(t,"class","Links svelte-1pluy96")},m(a,f){P(a,t,f),k(n,t,null),x(t,e),k(r,t,null),x(t,l),k(s,t,null),m=!0},p(a,f){const i={};f&16384&&(i.$$scope={dirty:f,ctx:a}),n.$set(i);const c={};f&16384&&(c.$$scope={dirty:f,ctx:a}),r.$set(c);const p={};f&16384&&(p.$$scope={dirty:f,ctx:a}),s.$set(p)},i(a){m||(u(n.$$.fragment,a),u(r.$$.fragment,a),u(s.$$.fragment,a),m=!0)},o(a){$(n.$$.fragment,a),$(r.$$.fragment,a),$(s.$$.fragment,a),m=!1},d(a){a&&v(t),h(n),h(r),h(s)}}}function Kt(o){let t,n;return t=new Se({}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Dt(o){let t,n;return t=new Be({props:{fill:""}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ot(o){let t,n,e,r;const l=[Dt,Kt],s=[];function m(a,f){return a[0]==="dark"?0:1}return t=m(o),n=s[t]=l[t](o),{c(){n.c(),e=I()},l(a){n.l(a),e=I()},m(a,f){s[t].m(a,f),P(a,e,f),r=!0},p(a,f){let i=t;t=m(a),t!==i&&(S(),$(s[i],1,1,()=>{s[i]=null}),B(),n=s[t],n||(n=s[t]=l[t](a),n.c()),u(n,1),n.m(e.parentNode,e))},i(a){r||(u(n),r=!0)},o(a){$(n),r=!1},d(a){s[t].d(a),a&&v(e)}}}function Rt(o){let t,n;return t=new le({props:{slot:"right",$$slots:{default:[Ot]},$$scope:{ctx:o}}}),t.$on("click",o[9]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16385&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Pe(o){let t,n;return t=new ye({props:{currentPage:o[3],tree:o[2],base:o[1]}}),t.$on("click",o[10]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&8&&(l.currentPage=e[3]),r&4&&(l.tree=e[2]),r&2&&(l.base=e[1]),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function qt(o){let t;const n=o[13].default,e=ee(n,o,o[14],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,l){e&&e.m(r,l),t=!0},p(r,l){e&&e.p&&(!t||l&16384)&&te(e,n,r,r[14],t?re(n,r[14],l,null):ne(r[14]),null)},i(r){t||(u(e,r),t=!0)},o(r){$(e,r),t=!1},d(r){e&&e.d(r)}}}function jt(o){let t,n,e,r,l,s;const m=[At,Ct],a=[];function f(c,p){return c[5].viewWidth>=M.SMALL_TABLET?0:1}t=f(o),n=a[t]=m[t](o);let i=o[6]&&Pe(o);return l=new Ie({props:{hidden:o[6],$$slots:{default:[qt]},$$scope:{ctx:o}}}),{c(){n.c(),e=C(),i&&i.c(),r=C(),g(l.$$.fragment)},l(c){n.l(c),e=A(c),i&&i.l(c),r=A(c),d(l.$$.fragment,c)},m(c,p){a[t].m(c,p),P(c,e,p),i&&i.m(c,p),P(c,r,p),k(l,c,p),s=!0},p(c,p){let _=t;t=f(c),t===_?a[t].p(c,p):(S(),$(a[_],1,1,()=>{a[_]=null}),B(),n=a[t],n?n.p(c,p):(n=a[t]=m[t](c),n.c()),u(n,1),n.m(e.parentNode,e)),c[6]?i?(i.p(c,p),p&64&&u(i,1)):(i=Pe(c),i.c(),u(i,1),i.m(r.parentNode,r)):i&&(S(),$(i,1,1,()=>{i=null}),B());const b={};p&64&&(b.hidden=c[6]),p&16384&&(b.$$scope={dirty:p,ctx:c}),l.$set(b)},i(c){s||(u(n),u(i),u(l.$$.fragment,c),s=!0)},o(c){$(n),$(i),$(l.$$.fragment,c),s=!1},d(c){a[t].d(c),c&&v(e),i&&i.d(c),c&&v(r),h(l,c)}}}function Jt(o){let t,n;return t=new Ae({props:{$$slots:{default:[jt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16511&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Qt(o){let t,n,e,r=o[5].viewWidth>=M.SMALL_TABLET&&ve(o);return n=new Ce({props:{spaced:o[5].viewWidth>=M.SMALL_TABLET,animate:o[5].viewWidth<=M.MOBILE,maxWidth:"1360px",$$slots:{default:[Jt]},$$scope:{ctx:o}}}),{c(){r&&r.c(),t=C(),g(n.$$.fragment)},l(l){r&&r.l(l),t=A(l),d(n.$$.fragment,l)},m(l,s){r&&r.m(l,s),P(l,t,s),k(n,l,s),e=!0},p(l,s){l[5].viewWidth>=M.SMALL_TABLET?r?(r.p(l,s),s&32&&u(r,1)):(r=ve(l),r.c(),u(r,1),r.m(t.parentNode,t)):r&&(S(),$(r,1,1,()=>{r=null}),B());const m={};s&32&&(m.spaced=l[5].viewWidth>=M.SMALL_TABLET),s&32&&(m.animate=l[5].viewWidth<=M.MOBILE),s&16511&&(m.$$scope={dirty:s,ctx:l}),n.$set(m)},i(l){e||(u(r),u(n.$$.fragment,l),e=!0)},o(l){$(r),$(n.$$.fragment,l),e=!1},d(l){r&&r.d(l),l&&v(t),h(n,l)}}}function Xt(o){let t,n;return t=new Y({props:{separator:!1}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p:H,i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Yt(o){let t,n;return t=new je({props:{class:"Doc",$$slots:{header:[Xt],default:[Qt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16511&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Zt(o){let t,n;return t=new qe({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&16511&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function xt(o){let t,n;return t=new De({props:{appearance:o[0],$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,[r]){const l={};r&1&&(l.appearance=e[0]),r&16511&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}const J="@sveltevk/vksui",we="https://github.com/sveltevk/VKSUI";function en(o,t,n){let e,r,l,{$$slots:s={},$$scope:m}=t;const a=Le();Z(o,a,L=>n(5,r=L));const f=Oe();Z(o,f,L=>n(12,l=L));let{base:i=""}=t,{tree:c}=t,{currentPage:p={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t,{appearance:_="light"}=t;const b=()=>n(0,_=_==="light"?"dark":"light");let w="";const y=L=>{const{document:V}=Je();return w&&(V==null||V.body.classList.remove(...w.split(" "))),V==null||V.body.classList.add(...L.split(" ")),w=L,""};let z=!1;const Me=()=>n(4,z=!z),ze="0.0.3";return o.$$set=L=>{"base"in L&&n(1,i=L.base),"tree"in L&&n(2,c=L.tree),"currentPage"in L&&n(3,p=L.currentPage),"appearance"in L&&n(0,_=L.appearance),"$$scope"in L&&n(14,m=L.$$scope)},o.$$.update=()=>{o.$$.dirty&4097&&y(Re(l,_)),o.$$.dirty&48&&n(6,e=z&&r.viewWidth<M.SMALL_TABLET)},[_,i,c,p,z,r,e,a,f,b,Me,ze,l,s,m]}class tn extends W{constructor(t){super();E(this,t,en,xt,U,{base:1,tree:2,currentPage:3,appearance:0})}}function nn(o){let t;return{c(){t=N("div")},l(n){t=K(n,"DIV",{}),D(t).forEach(v)},m(n,e){P(n,t,e)},p:H,i:H,o:H,d(n){n&&v(t)}}}function rn(o){let t,n;return t=new G({props:{href:o[1]+"/tree/master/src/lib"+o[0].capitalize+".svelte",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&3&&(l.href=e[1]+"/tree/master/src/lib"+e[0].capitalize+".svelte"),r&32&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ln(o){let t;return{c(){t=T("GitHub")},l(n){t=F(n,"GitHub")},m(n,e){P(n,t,e)},d(n){n&&v(t)}}}function on(o){let t,n;return t=new Fe({props:{weight:"regular",level:"1",$$slots:{default:[ln]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&32&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function an(o){let t;return{c(){t=T("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443")},l(n){t=F(n,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443")},m(n,e){P(n,t,e)},d(n){n&&v(t)}}}function sn(o){let t,n;return t=new Fe({props:{weight:"regular",level:"1",$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&32&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function cn(o){let t,n,e,r,l,s,m,a;const f=[rn,nn],i=[];function c(b,w){return b[0].isComponent?0:1}n=c(o),e=i[n]=f[n](o),l=new G({props:{href:o[1]+"/edit/master/src"+(o[0].isComponent?"/lib"+o[0].path+"/README.md":"/routes"+(o[0].path||"/index")+".md"),target:"_blank",rel:"noopener noreferrer",$$slots:{default:[sn]},$$scope:{ctx:o}}});const p=o[4].default,_=ee(p,o,o[5],null);return{c(){t=N("div"),e.c(),r=C(),g(l.$$.fragment),s=C(),m=N("article"),_&&_.c(),this.h()},l(b){t=K(b,"DIV",{class:!0});var w=D(t);e.l(w),r=A(w),d(l.$$.fragment,w),w.forEach(v),s=A(b),m=K(b,"ARTICLE",{class:!0});var y=D(m);_&&_.l(y),y.forEach(v),this.h()},h(){q(t,"class","header svelte-1lu72gb"),q(m,"class","svelte-1lu72gb")},m(b,w){P(b,t,w),i[n].m(t,null),x(t,r),k(l,t,null),P(b,s,w),P(b,m,w),_&&_.m(m,null),a=!0},p(b,w){let y=n;n=c(b),n===y?i[n].p(b,w):(S(),$(i[y],1,1,()=>{i[y]=null}),B(),e=i[n],e?e.p(b,w):(e=i[n]=f[n](b),e.c()),u(e,1),e.m(t,r));const z={};w&3&&(z.href=b[1]+"/edit/master/src"+(b[0].isComponent?"/lib"+b[0].path+"/README.md":"/routes"+(b[0].path||"/index")+".md")),w&32&&(z.$$scope={dirty:w,ctx:b}),l.$set(z),_&&_.p&&(!a||w&32)&&te(_,p,b,b[5],a?re(p,b[5],w,null):ne(b[5]),null)},i(b){a||(u(e),u(l.$$.fragment,b),u(_,b),a=!0)},o(b){$(e),$(l.$$.fragment,b),$(_,b),a=!1},d(b){b&&v(t),i[n].d(),h(l),b&&v(s),b&&v(m),_&&_.d(b)}}}function fn(o){let t,n;return t=new rt({props:{class:"article",style:o[2].viewWidth>=M.SMALL_TABLET?"padding: 32px 40px 50px":void 0,$$slots:{default:[cn]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,[r]){const l={};r&4&&(l.style=e[2].viewWidth>=M.SMALL_TABLET?"padding: 32px 40px 50px":void 0),r&35&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function un(o,t,n){let e,{$$slots:r={},$$scope:l}=t,{currentPage:s={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t,{repositoryURL:m}=t;const a=Le();return Z(o,a,f=>n(2,e=f)),o.$$set=f=>{"currentPage"in f&&n(0,s=f.currentPage),"repositoryURL"in f&&n(1,m=f.repositoryURL),"$$scope"in f&&n(5,l=f.$$scope)},[s,m,e,a,r,l]}class mn extends W{constructor(t){super();E(this,t,un,fn,U,{currentPage:0,repositoryURL:1})}}function pn(o){let t;const n=o[5].default,e=ee(n,o,o[6],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,l){e&&e.m(r,l),t=!0},p(r,l){e&&e.p&&(!t||l&64)&&te(e,n,r,r[6],t?re(n,r[6],l,null):ne(r[6]),null)},i(r){t||(u(e,r),t=!0)},o(r){$(e,r),t=!1},d(r){e&&e.d(r)}}}function $n(o){let t,n;return t=new mn({props:{currentPage:o[0],repositoryURL:kn,$$slots:{default:[pn]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&1&&(l.currentPage=e[0]),r&64&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function _n(o){let t,n;return t=new tn({props:{appearance:o[2],currentPage:o[0],tree:o[4],base:nt,$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&4&&(l.appearance=e[2]),r&1&&(l.currentPage=e[0]),r&65&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function gn(o){let t,n;return t=new Xe({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},p(e,r){const l={};r&69&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function dn(o){let t,n,e,r;return document.title=t=o[0].name,e=new Qe({props:{platform:o[3],webviewType:o[1],$$slots:{default:[gn]},$$scope:{ctx:o}}}),{c(){n=C(),g(e.$$.fragment)},l(l){Ne('[data-svelte="svelte-qvperp"]',document.head).forEach(v),n=A(l),d(e.$$.fragment,l)},m(l,s){P(l,n,s),k(e,l,s),r=!0},p(l,[s]){(!r||s&1)&&t!==(t=l[0].name)&&(document.title=t);const m={};s&2&&(m.webviewType=l[1]),s&69&&(m.$$scope={dirty:s,ctx:l}),e.$set(m)},i(l){r||(u(e.$$.fragment,l),r=!0)},o(l){$(e.$$.fragment,l),r=!1},d(l){l&&v(n),h(e,l)}}}const R=o=>o.charAt(0).toUpperCase()+o.slice(1),On=async({url:o})=>{const t=o.pathname.replace(/\/$/gi,"").replace("/VKSUI",""),n=t.split("/").pop(),e=R(n)?R(n)+" \u2014 VKSUI":"VKSUI",r=t.includes("/components/"),l=r?t.split("/").map((m,a)=>a!==1?R(m):m).join("/")+"/"+R(n):void 0;return{props:{currentPage:{path:t,name:e,capitalize:l,isComponent:r}}}},kn="https://github.com/sveltevk/VKSUI";function hn(o,t,n){let{$$slots:e={},$$scope:r}=t,{currentPage:l={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=t,s,m=ae.INTERNAL,a="light";Ke(()=>{O.send("VKWebAppInit",{}),O.supports("VKWebAppGetLaunchParams")&&O.send("VKWebAppGetLaunchParams").then(i=>{i.vk_platform!=="desktop_web"&&n(1,m=ae.VKAPPS)}),O.subscribe(i=>{if(i.detail.type==="VKWebAppUpdateConfig")switch(i.detail.data.scheme){case"client_light":n(2,a="light");break;case"client_dark":n(2,a="dark");break;case"space_gray":n(2,a="dark");break;case"bright_light":n(2,a="light");break}})});let f=[{header:"",child:[{name:"\u041E VKSUI",link:"/"}]},{header:"\u041E\u0441\u043D\u043E\u0432\u0430",child:[{name:"\u0420\u0435\u0436\u0438\u043C\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",link:"/modes"},{name:"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",link:"/adaptivity"},{name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0438 \u0442\u0435\u043C\u044B",link:"/platforms_and_themes"}]},{header:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B",tree:[{header:"Layout",child:[{name:"SplitLayout",link:"/components/Layout/SplitLayout"},{name:"SplitCol",link:"/components/Layout/SplitCol"},{name:"Panel",link:"/components/Layout/Panel"},{name:"PanelHeader",link:"/components/Layout/PanelHeader"},{name:"PanelHeaderButton",link:"/components/Layout/PanelHeaderButton"},{name:"PanelHeaderBack",link:"/components/Layout/PanelHeaderBack"},{name:"PanelHeaderClose",link:"/components/Layout/PanelHeaderClose"},{name:"PanelHeaderSubmit",link:"/components/Layout/PanelHeaderSubmit"},{name:"PanelHeaderEdit",link:"/components/Layout/PanelHeaderEdit"},{name:"Tabbar",link:"/components/Layout/Tabbar"},{name:"TabbarItem",link:"/components/Layout/TabbarItem"},{name:"FixedLayout",link:"/components/Layout/FixedLayout"}]},{header:"Popouts",child:[{name:"PopoutWrapper",link:"/components/Popouts/PopoutWrapper"},{name:"Alert",link:"/components/Popouts/Alert"},{name:"ScreenSpinner",link:"/components/Popouts/ScreenSpinner"},{name:"Snackbar",link:"/components/Popouts/Snackbar"}]},{header:"Modals",child:[{name:"ModalDismissButton",link:"/components/Modals/ModalDismissButton"}]},{header:"Blocks",child:[{name:"Badge",link:"/components/Blocks/Badge"},{name:"Button",link:"/components/Blocks/Button",tokenized:!0},{name:"ButtonGroup",link:"/components/Blocks/ButtonGroup",tokenized:!0},{name:"CellButton",link:"/components/Blocks/CellButton"},{name:"IconButton",link:"/components/Blocks/IconButton"},{name:"Div",link:"/components/Blocks/Div"},{name:"Link",link:"/components/Blocks/Link"},{name:"Header",link:"/components/Blocks/Header"},{name:"Group",link:"/components/Blocks/Group"},{name:"Card",link:"/components/Blocks/Card",tokenized:!0},{name:"CardGrid",link:"/components/Blocks/CardGrid"},{name:"Gradient",link:"/components/Blocks/Gradient"},{name:"SimpleCell",link:"/components/Blocks/SimpleCell"},{name:"Footer",link:"/components/Blocks/Footer"},{name:"Spinner",link:"/components/Blocks/Spinner"},{name:"PanelSpinner",link:"/components/Blocks/PanelSpinner"},{name:"Switch",link:"/components/Blocks/Switch"},{name:"InfoRow",link:"/components/Blocks/InfoRow"},{name:"Avatar",link:"/components/Blocks/Avatar"},{name:"GridAvatar",link:"/components/Blocks/GridAvatar"},{name:"InitialsAvatar",link:"/components/Blocks/InitialsAvatar"},{name:"Progress",link:"/components/Blocks/Progress"},{name:"Search",link:"/components/Blocks/Search"},{name:"Counter",link:"/components/Blocks/Counter"},{name:"UsersStack",link:"/components/Blocks/UsersStack"},{name:"Spacing",link:"/components/Blocks/Spacing"},{name:"Separator",link:"/components/Blocks/Separator"},{name:"Placeholder",link:"/components/Blocks/Placeholder"},{name:"Banner",link:"/components/Blocks/Banner"},{name:"MiniInfoCell",link:"/components/Blocks/MiniInfoCell"},{name:"WriteBar",link:"/components/Blocks/WriteBar"},{name:"WriteBarIcon",link:"/components/Blocks/WriteBarIcon"},{name:"ModalCardBase",link:"/components/Blocks/ModalCardBase"}]},{header:"Forms",child:[{name:"FormLayout",link:"/components/Forms/FormLayout"},{name:"FormItem",link:"/components/Forms/FormItem"},{name:"FormLayoutGroup",link:"/components/Forms/FormLayoutGroup"},{name:"FormField",link:"/components/Forms/FormField"},{name:"FormStatus",link:"/components/Forms/FormStatus"},{name:"Checkbox",link:"/components/Forms/Checkbox"},{name:"Input",link:"/components/Forms/Input"},{name:"NativeSelect",link:"/components/Forms/NativeSelect"},{name:"SelectMimicry",link:"/components/Forms/SelectMimicry"},{name:"CustomSelectOption",link:"/components/Forms/CustomSelectOption"},{name:"Textarea",link:"/components/Forms/Textarea"},{name:"File",link:"/components/Forms/File"}]},{header:"Typography",child:[{name:"Title",link:"/components/Typography/Title",tokenized:!0},{name:"Headline",link:"/components/Typography/Headline"},{name:"Text",link:"/components/Typography/Text"},{name:"Subhead",link:"/components/Typography/Subhead",tokenized:!0},{name:"Caption",link:"/components/Typography/Caption"}]},{header:"Advertisement",child:[{name:"PromoBanner",link:"/components/Advertisement/PromoBanner"}]},{header:"Service",child:[{name:"AdaptivityProvider",link:"/components/Service/AdaptivityProvider"},{name:"ConfigProvider",link:"/components/Service/ConfigProvider"},{name:"Touch",link:"/components/Service/Touch"}]}],child:[]},{header:"\u041F\u0440\u043E\u0447\u0435\u0435",child:[{name:"\u0421\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433",link:"/ssr"},{name:"\u0423\u0442\u0438\u043B\u0438\u0442\u044B",link:"/utils"},{name:"\u0418\u043A\u043E\u043D\u043A\u0438",link:"/icons"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D",link:"/design"},{name:"\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F",link:"/customize",tokenized:!0}]}];return o.$$set=i=>{"currentPage"in i&&n(0,l=i.currentPage),"$$scope"in i&&n(6,r=i.$$scope)},[l,m,a,s,f,e,r]}class Rn extends W{constructor(t){super();E(this,t,hn,dn,U,{currentPage:0})}}export{Rn as default,On as load};