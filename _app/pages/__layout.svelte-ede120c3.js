import{S as N,i as K,s as q,w as v,l as H,x as P,y as b,g as k,z as Pe,A as Ce,n as G,o as p,B as w,p as T,q as m,d as $,F as O,G as ee,C as j,H as J,I as Se,J as te,k as U,e as C,m as D,c as S,a as F,b as L,K as ae,L as ne,M as le,N as re,O as Le,P as oe,Q as ie,R as fe,T as Ee,U as Fe,V as Ue,W,t as z,h as R,j as X,X as De,Y as Ve,Z as Ae,_ as Ge,$ as Te,a0 as E,a1 as y,a2 as ze}from"../chunks/vendor-0c96926e.js";import{b as ce}from"../chunks/paths-4b3c6e7e.js";import{c as M,g as Q,u as Ie,a as Re,C as He}from"../chunks/File.svelte_svelte_type_style_lang-1d3c311e.js";import{S as se}from"../chunks/SimpleCell-06da21c8.js";import{H as Ne}from"../chunks/Header-b2934da1.js";import{G as Ke}from"../chunks/Group-31f75528.js";import{D as qe}from"../chunks/Div-8e766e27.js";import{D as je,c as Me}from"../chunks/Touch-445b1a2c.js";import{I as Ye}from"../chunks/IconButton-01418127.js";import{T as ye}from"../chunks/Title-53b10d3f.js";import{L as Y}from"../chunks/Link-8dfe4f64.js";import{C as Be}from"../chunks/Caption-3355185c.js";import"../chunks/Tappable-b9f6c3d1.js";import"../chunks/Headline-a652b6cd.js";import"../chunks/Text-8ff0e3dd.js";import"../chunks/Subhead-7c274b37.js";function Oe(o){let e,n,t,l;const r=o[8].default,a=te(r,o,o[10],null);return{c(){a&&a.c(),e=U(),n=C("div"),this.h()},l(i){a&&a.l(i),e=D(i),n=S(i,"DIV",{class:!0}),F(n).forEach($),this.h()},h(){L(n,"class",t=ae(M("FormField__border",{"FormField__border--hover":o[1]}))+" svelte-17rb6yt")},m(i,s){a&&a.m(i,s),k(i,e,s),k(i,n,s),l=!0},p(i,s){a&&a.p&&(!l||s&1024)&&ne(a,r,i,i[10],l?re(r,i[10],s,null):le(i[10]),null),(!l||s&2&&t!==(t=ae(M("FormField__border",{"FormField__border--hover":i[1]}))+" svelte-17rb6yt"))&&L(n,"class",t)},i(i){l||(m(a,i),l=!0)},o(i){p(a,i),l=!1},d(i){a&&a.d(i),i&&$(e),i&&$(n)}}}function Je(o){let e,n,t;const l=[o[6],{class:M(Q("FormField",o[2]),o[7].class)}];var r=o[0];function a(i){let s={$$slots:{default:[Oe]},$$scope:{ctx:i}};for(let f=0;f<l.length;f+=1)s=j(s,l[f]);return{props:s}}return r&&(e=new r(a(o)),e.$on("click",o[9]),e.$on("mouseover",o[3]),e.$on("mouseout",o[4])),{c(){e&&v(e.$$.fragment),n=H()},l(i){e&&P(e.$$.fragment,i),n=H()},m(i,s){e&&b(e,i,s),k(i,n,s),t=!0},p(i,[s]){const f=s&196?Pe(l,[s&64&&Ce(i[6]),s&132&&{class:M(Q("FormField",i[2]),i[7].class)}]):{};if(s&1026&&(f.$$scope={dirty:s,ctx:i}),r!==(r=i[0])){if(e){G();const c=e;p(c.$$.fragment,1,0,()=>{w(c,1)}),T()}r?(e=new r(a(i)),e.$on("click",i[9]),e.$on("mouseover",i[3]),e.$on("mouseout",i[4]),v(e.$$.fragment),m(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else r&&e.$set(f)},i(i){t||(e&&m(e.$$.fragment,i),t=!0)},o(i){e&&p(e.$$.fragment,i),t=!1},d(i){i&&$(n),e&&w(e,i)}}}function Qe(o,e,n){const t=["component"];let l=O(e,t),r,{$$slots:a={},$$scope:i}=e,{component:s=je}=e,f=!1;const c=g=>{g.stopPropagation(),n(1,f=!0)},u=g=>{g.stopPropagation(),n(1,f=!1)},h=Ie();ee(o,h,g=>n(2,r=g));function I(g){Se.call(this,o,g)}return o.$$set=g=>{n(7,e=j(j({},e),J(g))),n(6,l=O(e,t)),"component"in g&&n(0,s=g.component),"$$scope"in g&&n(10,i=g.$$scope)},e=J(e),[s,f,r,c,u,h,l,e,a,I,i]}class We extends N{constructor(e){super();K(this,e,Qe,Je,q,{component:0})}}function Xe(o){let e,n,t,l=[o[8],{class:"Input__el"}],r={};for(let a=0;a<l.length;a+=1)r=j(r,l[a]);return{c(){e=C("input"),this.h()},l(a){e=S(a,"INPUT",{class:!0}),this.h()},h(){oe(e,r),ie(e,"svelte-1qbk9aq",!0)},m(a,i){k(a,e,i),e.autofocus&&e.focus(),fe(e,o[0]),n||(t=[Ee(o[6].call(null,e)),Fe(e,"input",o[9])],n=!0)},p(a,i){oe(e,r=Pe(l,[i&256&&a[8],{class:"Input__el"}])),i&1&&e.value!==a[0]&&fe(e,a[0]),ie(e,"svelte-1qbk9aq",!0)},d(a){a&&$(e),n=!1,Ue(t)}}}function Ze(o){let e,n;return e=new We({props:{class:M(Q("Input",o[2]),o[7].class,{[`Input--${o[1]}`]:!!o[1]},`Input--sizeY-${o[3].sizeY}`),$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,[l]){const r={};l&142&&(r.class=M(Q("Input",t[2]),t[7].class,{[`Input--${t[1]}`]:!!t[1]},`Input--sizeY-${t[3].sizeY}`)),l&1281&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function xe(o,e,n){const t=["align","value"];let l=O(e,t),r,a,{align:i=void 0}=e,{value:s=void 0}=e;const f=Re();ee(o,f,I=>n(3,a=I));const c=Ie();ee(o,c,I=>n(2,r=I));const u=Me(Le());function h(){s=this.value,n(0,s)}return o.$$set=I=>{n(7,e=j(j({},e),J(I))),n(8,l=O(e,t)),"align"in I&&n(1,i=I.align),"value"in I&&n(0,s=I.value)},e=J(e),[s,i,r,a,f,c,u,e,l,h]}class et extends N{constructor(e){super();K(this,e,xe,Ze,q,{align:1,value:0})}}function ue(o,e,n){const t=o.slice();return t[6]=e[n],t}function tt(o){let e=o[3].header+"",n;return{c(){n=z(e)},l(t){n=R(t,e)},m(t,l){k(t,n,l)},p(t,l){l&8&&e!==(e=t[3].header+"")&&X(n,e)},d(t){t&&$(n)}}}function nt(o){let e,n;return e=new De({props:{fill:"var(--text_tertiary)"}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function lt(o){let e,n;return e=new Ve({props:{fill:"var(--text_tertiary)"}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function rt(o){let e,n,t,l;const r=[lt,nt],a=[];function i(s,f){return s[4]||s[0]!==""?0:1}return e=i(o),n=a[e]=r[e](o),{c(){n.c(),t=H()},l(s){n.l(s),t=H()},m(s,f){a[e].m(s,f),k(s,t,f),l=!0},p(s,f){let c=e;e=i(s),e!==c&&(G(),p(a[c],1,1,()=>{a[c]=null}),T(),n=a[e],n||(n=a[e]=r[e](s),n.c()),m(n,1),n.m(t.parentNode,t))},i(s){l||(m(n),l=!0)},o(s){p(n),l=!1},d(s){a[e].d(s),s&&$(t)}}}function st(o){let e,n;return e=new Ye({props:{slot:"after",$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&529&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function me(o){let e,n;return e=new se({props:{class:o[6].link===o[2].path?"Sidebar__selected":"",href:""+(o[1]+o[6].link),$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&12&&(r.class=t[6].link===t[2].path?"Sidebar__selected":""),l&10&&(r.href=""+(t[1]+t[6].link)),l&520&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function at(o){let e=o[6].name+"",n;return{c(){n=z(e)},l(t){n=R(t,e)},m(t,l){k(t,n,l)},p(t,l){l&8&&e!==(e=t[6].name+"")&&X(n,e)},d(t){t&&$(n)}}}function _e(o){let e=o[0]===""&&o[4]||o[0]!==""&&o[6].name.toLowerCase().includes(o[0]),n,t,l=e&&me(o);return{c(){l&&l.c(),n=H()},l(r){l&&l.l(r),n=H()},m(r,a){l&&l.m(r,a),k(r,n,a),t=!0},p(r,a){a&25&&(e=r[0]===""&&r[4]||r[0]!==""&&r[6].name.toLowerCase().includes(r[0])),e?l?(l.p(r,a),a&25&&m(l,1)):(l=me(r),l.c(),m(l,1),l.m(n.parentNode,n)):l&&(G(),p(l,1,1,()=>{l=null}),T())},i(r){t||(m(l),t=!0)},o(r){p(l),t=!1},d(r){l&&l.d(r),r&&$(n)}}}function ot(o){let e,n,t,l;e=new se({props:{$$slots:{after:[st],default:[tt]},$$scope:{ctx:o}}}),e.$on("click",o[5]);let r=o[3].child,a=[];for(let s=0;s<r.length;s+=1)a[s]=_e(ue(o,r,s));const i=s=>p(a[s],1,1,()=>{a[s]=null});return{c(){v(e.$$.fragment),n=U(),t=C("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){P(e.$$.fragment,s),n=D(s),t=S(s,"DIV",{class:!0});var f=F(t);for(let c=0;c<a.length;c+=1)a[c].l(f);f.forEach($),this.h()},h(){L(t,"class","Element svelte-1jb4zvh")},m(s,f){b(e,s,f),k(s,n,f),k(s,t,f);for(let c=0;c<a.length;c+=1)a[c].m(t,null);l=!0},p(s,[f]){const c={};if(f&537&&(c.$$scope={dirty:f,ctx:s}),e.$set(c),f&31){r=s[3].child;let u;for(u=0;u<r.length;u+=1){const h=ue(s,r,u);a[u]?(a[u].p(h,f),m(a[u],1)):(a[u]=_e(h),a[u].c(),m(a[u],1),a[u].m(t,null))}for(G(),u=r.length;u<a.length;u+=1)i(u);T()}},i(s){if(!l){m(e.$$.fragment,s);for(let f=0;f<r.length;f+=1)m(a[f]);l=!0}},o(s){p(e.$$.fragment,s),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)p(a[f]);l=!1},d(s){w(e,s),s&&$(n),s&&$(t),W(a,s)}}}function it(o,e,n){let{search:t=""}=e,{base:l=""}=e,r=!1,{currentPage:a={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=e,{group:i={header:"Block",child:[{name:"Div",link:"components/block/div"},{name:"Link",link:"/quickStart"}]}}=e;const s=()=>n(4,r=!r);return o.$$set=f=>{"search"in f&&n(0,t=f.search),"base"in f&&n(1,l=f.base),"currentPage"in f&&n(2,a=f.currentPage),"group"in f&&n(3,i=f.group)},[t,l,a,i,r,s]}class ft extends N{constructor(e){super();K(this,e,it,ot,q,{search:0,base:1,currentPage:2,group:3})}}function pe(o,e,n){const t=o.slice();return t[5]=e[n],t}function ct(o){let e,n,t;function l(a){o[4](a)}let r={placeholder:"\u041F\u043E\u0438\u0441\u043A"};return o[3]!==void 0&&(r.value=o[3]),e=new et({props:r}),Ae.push(()=>Ge(e,"value",l)),{c(){v(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,i){b(e,a,i),t=!0},p(a,i){const s={};!n&&i&8&&(n=!0,s.value=a[3],Te(()=>n=!1)),e.$set(s)},i(a){t||(m(e.$$.fragment,a),t=!0)},o(a){p(e.$$.fragment,a),t=!1},d(a){w(e,a)}}}function $e(o){let e,n;return e=new ft({props:{group:o[5],currentPage:o[1],base:o[0],search:o[3].toLowerCase()}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&4&&(r.group=t[5]),l&2&&(r.currentPage=t[1]),l&1&&(r.base=t[0]),l&8&&(r.search=t[3].toLowerCase()),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ut(o){let e,n,t,l;e=new qe({props:{$$slots:{default:[ct]},$$scope:{ctx:o}}});let r=o[2],a=[];for(let s=0;s<r.length;s+=1)a[s]=$e(pe(o,r,s));const i=s=>p(a[s],1,1,()=>{a[s]=null});return{c(){v(e.$$.fragment),n=U();for(let s=0;s<a.length;s+=1)a[s].c();t=H()},l(s){P(e.$$.fragment,s),n=D(s);for(let f=0;f<a.length;f+=1)a[f].l(s);t=H()},m(s,f){b(e,s,f),k(s,n,f);for(let c=0;c<a.length;c+=1)a[c].m(s,f);k(s,t,f),l=!0},p(s,[f]){const c={};if(f&264&&(c.$$scope={dirty:f,ctx:s}),e.$set(c),f&15){r=s[2];let u;for(u=0;u<r.length;u+=1){const h=pe(s,r,u);a[u]?(a[u].p(h,f),m(a[u],1)):(a[u]=$e(h),a[u].c(),m(a[u],1),a[u].m(t.parentNode,t))}for(G(),u=r.length;u<a.length;u+=1)i(u);T()}},i(s){if(!l){m(e.$$.fragment,s);for(let f=0;f<r.length;f+=1)m(a[f]);l=!0}},o(s){p(e.$$.fragment,s),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)p(a[f]);l=!1},d(s){w(e,s),s&&$(n),W(a,s),s&&$(t)}}}function mt(o,e,n){let{base:t=""}=e,l="",{currentPage:r={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=e,{tree:a=[{header:"Block",child:[{name:"\u041E VKSUI",link:"/"},{name:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0442\u0430\u0440\u0442",link:"/quickStart"}]}]}=e;function i(s){l=s,n(3,l)}return o.$$set=s=>{"base"in s&&n(0,t=s.base),"currentPage"in s&&n(1,r=s.currentPage),"tree"in s&&n(2,a=s.tree)},[t,r,a,l,i]}class _t extends N{constructor(e){super();K(this,e,mt,ut,q,{base:0,currentPage:1,tree:2})}}function he(o,e,n){const t=o.slice();return t[3]=e[n],t}function ge(o,e,n){const t=o.slice();return t[6]=e[n],t}function de(o){let e,n;return e=new Ne({props:{mode:"secondary",$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&514&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function pt(o){let e=o[3].header+"",n;return{c(){n=z(e)},l(t){n=R(t,e)},m(t,l){k(t,n,l)},p(t,l){l&2&&e!==(e=t[3].header+"")&&X(n,e)},d(t){t&&$(n)}}}function ke(o){let e,n;return e=new _t({props:{tree:o[3].tree,currentPage:o[2],base:o[0]}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&2&&(r.tree=t[3].tree),l&4&&(r.currentPage=t[2]),l&1&&(r.base=t[0]),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function $t(o){let e=o[6].name+"",n;return{c(){n=z(e)},l(t){n=R(t,e)},m(t,l){k(t,n,l)},p(t,l){l&2&&e!==(e=t[6].name+"")&&X(n,e)},d(t){t&&$(n)}}}function ve(o){let e,n;return e=new se({props:{class:o[6].link===o[2].path?"Sidebar__selected":"",href:""+(o[0]+o[6].link),$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&6&&(r.class=t[6].link===t[2].path?"Sidebar__selected":""),l&3&&(r.href=""+(t[0]+t[6].link)),l&514&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ht(o){let e,n,t,l,r=o[3].header&&de(o),a=o[3].header==="\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"&&ke(o),i=o[3].child,s=[];for(let c=0;c<i.length;c+=1)s[c]=ve(ge(o,i,c));const f=c=>p(s[c],1,1,()=>{s[c]=null});return{c(){r&&r.c(),e=U(),a&&a.c(),n=U();for(let c=0;c<s.length;c+=1)s[c].c();t=U()},l(c){r&&r.l(c),e=D(c),a&&a.l(c),n=D(c);for(let u=0;u<s.length;u+=1)s[u].l(c);t=D(c)},m(c,u){r&&r.m(c,u),k(c,e,u),a&&a.m(c,u),k(c,n,u);for(let h=0;h<s.length;h+=1)s[h].m(c,u);k(c,t,u),l=!0},p(c,u){if(c[3].header?r?(r.p(c,u),u&2&&m(r,1)):(r=de(c),r.c(),m(r,1),r.m(e.parentNode,e)):r&&(G(),p(r,1,1,()=>{r=null}),T()),c[3].header==="\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"?a?(a.p(c,u),u&2&&m(a,1)):(a=ke(c),a.c(),m(a,1),a.m(n.parentNode,n)):a&&(G(),p(a,1,1,()=>{a=null}),T()),u&7){i=c[3].child;let h;for(h=0;h<i.length;h+=1){const I=ge(c,i,h);s[h]?(s[h].p(I,u),m(s[h],1)):(s[h]=ve(I),s[h].c(),m(s[h],1),s[h].m(t.parentNode,t))}for(G(),h=i.length;h<s.length;h+=1)f(h);T()}},i(c){if(!l){m(r),m(a);for(let u=0;u<i.length;u+=1)m(s[u]);l=!0}},o(c){p(r),p(a),s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)p(s[u]);l=!1},d(c){r&&r.d(c),c&&$(e),a&&a.d(c),c&&$(n),W(s,c),c&&$(t)}}}function be(o){let e,n;return e=new Ke({props:{mode:"plain",$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&519&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function gt(o){let e,n,t,l=o[1],r=[];for(let i=0;i<l.length;i+=1)r[i]=be(he(o,l,i));const a=i=>p(r[i],1,1,()=>{r[i]=null});return{c(){e=C("div"),n=C("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=S(i,"DIV",{class:!0});var s=F(e);n=S(s,"DIV",{class:!0});var f=F(n);for(let c=0;c<r.length;c+=1)r[c].l(f);f.forEach($),s.forEach($),this.h()},h(){L(n,"class","Sidebar__in svelte-obh89p"),L(e,"class","Sidebar svelte-obh89p")},m(i,s){k(i,e,s),E(e,n);for(let f=0;f<r.length;f+=1)r[f].m(n,null);t=!0},p(i,[s]){if(s&7){l=i[1];let f;for(f=0;f<l.length;f+=1){const c=he(i,l,f);r[f]?(r[f].p(c,s),m(r[f],1)):(r[f]=be(c),r[f].c(),m(r[f],1),r[f].m(n,null))}for(G(),f=l.length;f<r.length;f+=1)a(f);T()}},i(i){if(!t){for(let s=0;s<l.length;s+=1)m(r[s]);t=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)p(r[s]);t=!1},d(i){i&&$(e),W(r,i)}}}function dt(o,e,n){let{base:t=""}=e,{tree:l}=e,{currentPage:r={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=e;return o.$$set=a=>{"base"in a&&n(0,t=a.base),"tree"in a&&n(1,l=a.tree),"currentPage"in a&&n(2,r=a.currentPage)},[t,l,r]}class kt extends N{constructor(e){super();K(this,e,dt,gt,q,{base:0,tree:1,currentPage:2})}}function vt(o){let e,n;return{c(){e=C("a"),n=z("@sveltevk/vksui"),this.h()},l(t){e=S(t,"A",{href:!0,class:!0});var l=F(e);n=R(l,"@sveltevk/vksui"),l.forEach($),this.h()},h(){L(e,"href",o[0]),L(e,"class","svelte-1kil2u8")},m(t,l){k(t,e,l),E(e,n)},p(t,l){l&1&&L(e,"href",t[0])},d(t){t&&$(e)}}}function bt(o){let e;return{c(){e=z(o[2])},l(n){e=R(n,o[2])},m(n,t){k(n,e,t)},p:y,d(n){n&&$(e)}}}function wt(o){let e;return{c(){e=z("GitHub")},l(n){e=R(n,"GitHub")},m(n,t){k(n,e,t)},d(n){n&&$(e)}}}function Pt(o){let e;return{c(){e=z("\u0420\u0435\u043B\u0438\u0437\u044B")},l(n){e=R(n,"\u0420\u0435\u043B\u0438\u0437\u044B")},m(n,t){k(n,e,t)},d(n){n&&$(e)}}}function It(o){let e,n,t,l,r,a,i,s,f,c,u,h,I,g;return l=new ye({props:{$$slots:{default:[vt]},$$scope:{ctx:o}}}),i=new Y({props:{href:"https://www.npmjs.com/package/@sveltevk/vksui",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[bt]},$$scope:{ctx:o}}}),f=new Y({props:{href:o[1],target:"_blank",rel:"noopener noreferrer",$$slots:{default:[wt]},$$scope:{ctx:o}}}),u=new Y({props:{href:o[1]+"/releases",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){e=C("header"),n=C("div"),t=C("div"),v(l.$$.fragment),r=U(),a=C("div"),v(i.$$.fragment),s=U(),v(f.$$.fragment),c=U(),v(u.$$.fragment),h=U(),I=C("div"),this.h()},l(_){e=S(_,"HEADER",{class:!0});var d=F(e);n=S(d,"DIV",{class:!0});var B=F(n);t=S(B,"DIV",{class:!0});var V=F(t);P(l.$$.fragment,V),V.forEach($),r=D(B),a=S(B,"DIV",{class:!0});var A=F(a);P(i.$$.fragment,A),s=D(A),P(f.$$.fragment,A),c=D(A),P(u.$$.fragment,A),A.forEach($),h=D(B),I=S(B,"DIV",{}),F(I).forEach($),B.forEach($),d.forEach($),this.h()},h(){L(t,"class","Logo svelte-1kil2u8"),L(a,"class","Links svelte-1kil2u8"),L(n,"class","Header__in svelte-1kil2u8"),L(e,"class","svelte-1kil2u8")},m(_,d){k(_,e,d),E(e,n),E(n,t),b(l,t,null),E(n,r),E(n,a),b(i,a,null),E(a,s),b(f,a,null),E(a,c),b(u,a,null),E(n,h),E(n,I),g=!0},p(_,[d]){const B={};d&9&&(B.$$scope={dirty:d,ctx:_}),l.$set(B);const V={};d&8&&(V.$$scope={dirty:d,ctx:_}),i.$set(V);const A={};d&2&&(A.href=_[1]),d&8&&(A.$$scope={dirty:d,ctx:_}),f.$set(A);const Z={};d&2&&(Z.href=_[1]+"/releases"),d&8&&(Z.$$scope={dirty:d,ctx:_}),u.$set(Z)},i(_){g||(m(l.$$.fragment,_),m(i.$$.fragment,_),m(f.$$.fragment,_),m(u.$$.fragment,_),g=!0)},o(_){p(l.$$.fragment,_),p(i.$$.fragment,_),p(f.$$.fragment,_),p(u.$$.fragment,_),g=!1},d(_){_&&$(e),w(l),w(i),w(f),w(u)}}}function Bt(o,e,n){const t="0.0.1";let{base:l}=e,{repositoryURL:r}=e;return o.$$set=a=>{"base"in a&&n(0,l=a.base),"repositoryURL"in a&&n(1,r=a.repositoryURL)},[l,r,t]}class Ct extends N{constructor(e){super();K(this,e,Bt,It,q,{base:0,repositoryURL:1})}}function St(o){let e;return{c(){e=C("div")},l(n){e=S(n,"DIV",{}),F(e).forEach($)},m(n,t){k(n,e,t)},p:y,i:y,o:y,d(n){n&&$(e)}}}function Lt(o){let e,n;return e=new Y({props:{href:o[1]+"/tree/master/src/lib"+o[0].capitalize+".svelte",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&3&&(r.href=t[1]+"/tree/master/src/lib"+t[0].capitalize+".svelte"),l&8&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Et(o){let e;return{c(){e=z("GitHub")},l(n){e=R(n,"GitHub")},m(n,t){k(n,e,t)},d(n){n&&$(e)}}}function Ft(o){let e,n;return e=new Be({props:{weight:"regular",level:"1",$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&8&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ut(o){let e;return{c(){e=z("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443")},l(n){e=R(n,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443")},m(n,t){k(n,e,t)},d(n){n&&$(e)}}}function Dt(o){let e,n;return e=new Be({props:{weight:"regular",level:"1",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,l){const r={};l&8&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Vt(o){let e,n,t,l,r,a,i,s,f;const c=[Lt,St],u=[];function h(_,d){return _[0].isComponent?0:1}t=h(o),l=u[t]=c[t](o),a=new Y({props:{href:o[1]+"/edit/master/src"+(o[0].isComponent?"/lib"+o[0].path+"/README.md":"/routes"+(o[0].path||"/index")+".md"),target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Dt]},$$scope:{ctx:o}}});const I=o[2].default,g=te(I,o,o[3],null);return{c(){e=C("div"),n=C("div"),l.c(),r=U(),v(a.$$.fragment),i=U(),s=C("article"),g&&g.c(),this.h()},l(_){e=S(_,"DIV",{class:!0});var d=F(e);n=S(d,"DIV",{class:!0});var B=F(n);l.l(B),r=D(B),P(a.$$.fragment,B),B.forEach($),i=D(d),s=S(d,"ARTICLE",{class:!0});var V=F(s);g&&g.l(V),V.forEach($),d.forEach($),this.h()},h(){L(n,"class","header svelte-18wea6a"),L(s,"class","svelte-18wea6a"),L(e,"class","article svelte-18wea6a")},m(_,d){k(_,e,d),E(e,n),u[t].m(n,null),E(n,r),b(a,n,null),E(e,i),E(e,s),g&&g.m(s,null),f=!0},p(_,[d]){let B=t;t=h(_),t===B?u[t].p(_,d):(G(),p(u[B],1,1,()=>{u[B]=null}),T(),l=u[t],l?l.p(_,d):(l=u[t]=c[t](_),l.c()),m(l,1),l.m(n,r));const V={};d&3&&(V.href=_[1]+"/edit/master/src"+(_[0].isComponent?"/lib"+_[0].path+"/README.md":"/routes"+(_[0].path||"/index")+".md")),d&8&&(V.$$scope={dirty:d,ctx:_}),a.$set(V),g&&g.p&&(!f||d&8)&&ne(g,I,_,_[3],f?re(I,_[3],d,null):le(_[3]),null)},i(_){f||(m(l),m(a.$$.fragment,_),m(g,_),f=!0)},o(_){p(l),p(a.$$.fragment,_),p(g,_),f=!1},d(_){_&&$(e),u[t].d(),w(a),g&&g.d(_)}}}function At(o,e,n){let{$$slots:t={},$$scope:l}=e,{currentPage:r={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=e,{repositoryURL:a}=e;return o.$$set=i=>{"currentPage"in i&&n(0,r=i.currentPage),"repositoryURL"in i&&n(1,a=i.repositoryURL),"$$scope"in i&&n(3,l=i.$$scope)},[r,a,t,l]}class Gt extends N{constructor(e){super();K(this,e,At,Vt,q,{currentPage:0,repositoryURL:1})}}function Tt(o){let e;const n=o[2].default,t=te(n,o,o[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&8)&&ne(t,n,l,l[3],e?re(n,l[3],r,null):le(l[3]),null)},i(l){e||(m(t,l),e=!0)},o(l){p(t,l),e=!1},d(l){t&&t.d(l)}}}function zt(o){let e,n,t,l,r,a,i;return e=new Ct({props:{base:ce,repositoryURL:we}}),l=new kt({props:{currentPage:o[0],tree:o[1],base:ce}}),a=new Gt({props:{currentPage:o[0],repositoryURL:we,$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment),n=U(),t=C("main"),v(l.$$.fragment),r=U(),v(a.$$.fragment),this.h()},l(s){P(e.$$.fragment,s),n=D(s),t=S(s,"MAIN",{class:!0});var f=F(t);P(l.$$.fragment,f),r=D(f),P(a.$$.fragment,f),f.forEach($),this.h()},h(){L(t,"class","svelte-l2ybjc")},m(s,f){b(e,s,f),k(s,n,f),k(s,t,f),b(l,t,null),E(t,r),b(a,t,null),i=!0},p(s,f){const c={};f&1&&(c.currentPage=s[0]),l.$set(c);const u={};f&1&&(u.currentPage=s[0]),f&8&&(u.$$scope={dirty:f,ctx:s}),a.$set(u)},i(s){i||(m(e.$$.fragment,s),m(l.$$.fragment,s),m(a.$$.fragment,s),i=!0)},o(s){p(e.$$.fragment,s),p(l.$$.fragment,s),p(a.$$.fragment,s),i=!1},d(s){w(e,s),s&&$(n),s&&$(t),w(l),w(a)}}}function Rt(o){let e,n,t,l;return document.title=e=o[0].name,t=new He({props:{$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){n=U(),v(t.$$.fragment)},l(r){ze('[data-svelte="svelte-qvperp"]',document.head).forEach($),n=D(r),P(t.$$.fragment,r)},m(r,a){k(r,n,a),b(t,r,a),l=!0},p(r,[a]){(!l||a&1)&&e!==(e=r[0].name)&&(document.title=e);const i={};a&9&&(i.$$scope={dirty:a,ctx:r}),t.$set(i)},i(r){l||(m(t.$$.fragment,r),l=!0)},o(r){p(t.$$.fragment,r),l=!1},d(r){r&&$(n),w(t,r)}}}const x=o=>o.charAt(0).toUpperCase()+o.slice(1),nn=async({url:o})=>{const e=o.pathname.replace(/\/$/gi,"").replace("/VKSUI",""),n=e.split("/").pop(),t="VKSUI - "+(x(n)||"svelte components"),l=e.includes("/components/"),r=l?e.split("/").map((i,s)=>s!==1?x(i):i).join("/")+"/"+x(n):void 0;return{props:{currentPage:{path:e,name:t,capitalize:r,isComponent:l}}}},we="https://github.com/sveltevk/VKSUI";function Ht(o,e,n){let{$$slots:t={},$$scope:l}=e,{currentPage:r={path:"",capitalize:"",name:"VKSUI",isComponent:!1}}=e,a=[{header:"",child:[{name:"\u041E VKSUI",link:"/"}]},{header:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B",tree:[{header:"Layout",child:[{name:"FixedLayout",link:"/components/Layout/FixedLayout"}]},{header:"Block",child:[{name:"Badge",link:"/components/Blocks/Badge"},{name:"Button",link:"/components/Blocks/Button"},{name:"CellButton",link:"/components/Blocks/CellButton"},{name:"IconButton",link:"/components/Blocks/IconButton"},{name:"Div",link:"/components/Blocks/Div"},{name:"Link",link:"/components/Blocks/Link"},{name:"Header",link:"/components/Blocks/Header"},{name:"Group",link:"/components/Blocks/Group"},{name:"Card",link:"/components/Blocks/Card"},{name:"CardGrid",link:"/components/Blocks/CardGrid"},{name:"Gradient",link:"/components/Blocks/Gradient"},{name:"Footer",link:"/components/Blocks/Footer"},{name:"Spinner",link:"/components/Blocks/Spinner"},{name:"PanelSpinner",link:"/components/Blocks/PanelSpinner"},{name:"Switch",link:"/components/Blocks/Switch"},{name:"InfoRow",link:"/components/Blocks/InfoRow"},{name:"Avatar",link:"/components/Blocks/Avatar"},{name:"GridAvatar",link:"/components/Blocks/GridAvatar"},{name:"InitialsAvatar",link:"/components/Blocks/InitialsAvatar"},{name:"Progress",link:"/components/Blocks/Progress"},{name:"Counter",link:"/components/Blocks/Counter"},{name:"Separator",link:"/components/Blocks/Separator"}]},{header:"Forms",child:[{name:"Checkbox",link:"/components/Forms/Checkbox"}]},{header:"Typography",child:[{name:"Title",link:"/components/Typography/Title"},{name:"Headline",link:"/components/Typography/Headline"},{name:"Text",link:"/components/Typography/Text"},{name:"Subhead",link:"/components/Typography/Subhead"},{name:"Caption",link:"/components/Typography/Caption"}]},{header:"Advertisement",child:[{name:"PromoBanner",link:"/components/Advertisement/PromoBanner"}]},{header:"Service",child:[{name:"AdaptivityProvider",link:"/components/Service/AdaptivityProvider"},{name:"ConfigProvider",link:"/components/Service/ConfigProvider"},{name:"Touch",link:"/components/Service/Touch"}]}],child:[]},{header:"\u041F\u0440\u043E\u0447\u0435\u0435",child:[{name:"\u0423\u0442\u0438\u043B\u0438\u0442\u044B",link:"/utils"},{name:"\u0418\u043A\u043E\u043D\u043A\u0438",link:"/icons"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D",link:"/design"},{name:"\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F",link:"/customize"}]}];return o.$$set=i=>{"currentPage"in i&&n(0,r=i.currentPage),"$$scope"in i&&n(3,l=i.$$scope)},[r,a,t,l]}class ln extends N{constructor(e){super();K(this,e,Ht,Rt,q,{currentPage:0})}}export{ln as default,nn as load};