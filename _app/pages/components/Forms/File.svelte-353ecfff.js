import{S as x,i as tt,s as st,w as E,x as D,y as z,q as v,o as F,B as S,a5 as kt,M as zt,C as Z,a7 as _t,O as et,e as h,k as w,c as y,m as O,a4 as gt,a1 as dt,g,z as St,P as at,Q as nt,R as ot,d as c,t as k,h as _,a as I,b as J,T as f,bT as It,N as lt,bU as Ct}from"../../../chunks/vendor-049c144f.js";import{S as Bt}from"../../../chunks/Showcase-cd097b41.js";import{c as $t,g as bt,d as Pt}from"../../../chunks/File.svelte_svelte_type_style_lang-ffa59218.js";import{G as wt}from"../../../chunks/Group-25a5695e.js";import{F as vt}from"../../../chunks/FormItem-1ae01959.js";import{B as Ot}from"../../../chunks/Button-47be74e1.js";import{L as Gt}from"../../../chunks/label-8787ed33.js";import{A as qt}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Caption-8dcbc303.js";import"../../../chunks/Separator-4d1755f3.js";import"../../../chunks/Subhead-2954488f.js";import"../../../chunks/Removable-4b86f5b9.js";import"../../../chunks/IconButton-f3052604.js";import"../../../chunks/Tappable-573d1721.js";import"../../../chunks/Touch-d6cdb2b5.js";import"../../../chunks/Spinner-13b87b63.js";import"../../../chunks/Headline-66f6cd6f.js";import"../../../chunks/Text-7112c13b.js";import"../../../chunks/Title-6d86738a.js";const Ht=o=>({}),Ft=o=>({slot:"before"}),Nt=o=>({}),ht=o=>({slot:"after"});function Tt(o){let s;return{c(){s=k("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B")},l(n){s=_(n,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B")},m(n,t){g(n,s,t)},d(n){n&&c(s)}}}function At(o){let s,n,t,e=[o[10],{class:"File__input"},{type:"file"}],a={};for(let p=0;p<e.length;p+=1)a=Z(a,e[p]);const r=o[11].default,$=et(r,o,o[12],null),i=$||Tt();return{c(){s=h("input"),n=w(),i&&i.c(),this.h()},l(p){s=y(p,"INPUT",{class:!0,type:!0}),n=O(p),i&&i.l(p),this.h()},h(){gt(s,a),dt(s,"svelte-1nzrrfq",!0)},m(p,b){g(p,s,b),s.autofocus&&s.focus(),g(p,n,b),i&&i.m(p,b),t=!0},p(p,b){gt(s,a=St(e,[b&1024&&p[10],{class:"File__input"},{type:"file"}])),dt(s,"svelte-1nzrrfq",!0),$&&$.p&&(!t||b&4096)&&at($,r,p,p[12],t?ot(r,p[12],b,null):nt(p[12]),null)},i(p){t||(v(i,p),t=!0)},o(p){F(i,p),t=!1},d(p){p&&c(s),p&&c(n),i&&i.d(p)}}}function Lt(o){let s;const n=o[11].before,t=et(n,o,o[12],Ft);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,a){t&&t.m(e,a),s=!0},p(e,a){t&&t.p&&(!s||a&4096)&&at(t,n,e,e[12],s?ot(n,e[12],a,Ht):nt(e[12]),Ft)},i(e){s||(v(t,e),s=!0)},o(e){F(t,e),s=!1},d(e){t&&t.d(e)}}}function Mt(o){let s;const n=o[11].after,t=et(n,o,o[12],ht);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,a){t&&t.m(e,a),s=!0},p(e,a){t&&t.p&&(!s||a&4096)&&at(t,n,e,e[12],s?ot(n,e[12],a,Nt):nt(e[12]),ht)},i(e){s||(v(t,e),s=!0)},o(e){F(t,e),s=!1},d(e){t&&t.d(e)}}}function Rt(o){let s,n;return s=new Ot({props:{align:o[5],class:$t(bt("File",o[7]),o[9].class),component:Gt,stretched:o[4],mode:o[2],size:o[3],before:o[0],after:o[1],style:o[6],disabled:o[10].disabled,type:"button",$$slots:{after:[Mt],before:[Lt],default:[At]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p(t,[e]){const a={};e&32&&(a.align=t[5]),e&640&&(a.class=$t(bt("File",t[7]),t[9].class)),e&16&&(a.stretched=t[4]),e&4&&(a.mode=t[2]),e&8&&(a.size=t[3]),e&1&&(a.before=t[0]),e&2&&(a.after=t[1]),e&64&&(a.style=t[6]),e&1024&&(a.disabled=t[10].disabled),e&5120&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Ut(o,s,n){const t=["before","after","mode","controlSize","stretched","align","style"];let e=kt(s,t),a,{$$slots:r={},$$scope:$}=s,{before:i=""}=s,{after:p=""}=s,{mode:b="primary"}=s,{controlSize:N="s"}=s,{stretched:C=!1}=s,{align:T="center"}=s,{style:A=""}=s;const B=Pt();return zt(o,B,u=>n(7,a=u)),o.$$set=u=>{n(9,s=Z(Z({},s),_t(u))),n(10,e=kt(s,t)),"before"in u&&n(0,i=u.before),"after"in u&&n(1,p=u.after),"mode"in u&&n(2,b=u.mode),"controlSize"in u&&n(3,N=u.controlSize),"stretched"in u&&n(4,C=u.stretched),"align"in u&&n(5,T=u.align),"style"in u&&n(6,A=u.style),"$$scope"in u&&n(12,$=u.$$scope)},s=_t(s),[i,p,b,N,C,T,A,a,B,s,e,r,$]}class yt extends x{constructor(s){super();tt(this,s,Ut,Rt,st,{before:0,after:1,mode:2,controlSize:3,stretched:4,align:5,style:6})}}function jt(o){let s;return{c(){s=k("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E")},l(n){s=_(n,"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E")},m(n,t){g(n,s,t)},d(n){n&&c(s)}}}function Qt(o){let s,n;return s=new It({props:{slot:"before"}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p:lt,i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Jt(o){let s,n;return s=new yt({props:{controlSize:"m",$$slots:{before:[Qt],default:[jt]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p(t,e){const a={};e&1&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Kt(o){let s,n;return s=new Ct({props:{slot:"before"}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p:lt,i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Vt(o){let s,n;return s=new yt({props:{controlSize:"l",mode:"secondary",$$slots:{before:[Kt]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p(t,e){const a={};e&1&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Wt(o){let s,n,t,e;return s=new vt({props:{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0444\u043E\u0442\u043E",$$slots:{default:[Jt]},$$scope:{ctx:o}}}),t=new vt({props:{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment),n=w(),E(t.$$.fragment)},l(a){D(s.$$.fragment,a),n=O(a),D(t.$$.fragment,a)},m(a,r){z(s,a,r),g(a,n,r),z(t,a,r),e=!0},p(a,r){const $={};r&1&&($.$$scope={dirty:r,ctx:a}),s.$set($);const i={};r&1&&(i.$$scope={dirty:r,ctx:a}),t.$set(i)},i(a){e||(v(s.$$.fragment,a),v(t.$$.fragment,a),e=!0)},o(a){F(s.$$.fragment,a),F(t.$$.fragment,a),e=!1},d(a){S(s,a),a&&c(n),S(t,a)}}}function Xt(o){let s,n;return s=new wt({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p(t,e){const a={};e&1&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Yt(o){let s,n,t,e,a,r,$,i,p,b,N,C,T,A,B,u,K,L,V,W,M,G,X,R,P,U,q,Y,j,H,Et=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Group<span class="token punctuation">,</span> FormItem<span class="token punctuation">,</span> File <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon24Camera <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/24/camera'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon24Document <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/24/document'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0444\u043E\u0442\u043E<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">controlSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon24Camera</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
			\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>File</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">controlSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>l<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon24Document</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>File</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span></code>`,Q;return P=new Bt({props:{scroll:!0,$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){s=h("h1"),n=k("File"),t=w(),e=h("p"),a=k("\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0434 "),r=h("code"),$=k('<input type="file" />'),i=k(". \u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0441\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430. "),p=h("code"),b=k("File"),N=k(" \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 "),C=h("code"),T=k("Button"),A=k(". \u0422\u043E \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u0435 \u043A "),B=h("code"),u=k("Button"),K=k(", \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B \u0438 \u043A "),L=h("code"),V=k("File"),W=k("."),M=w(),G=h("h2"),X=k("\u041F\u0440\u0438\u043C\u0435\u0440"),R=w(),E(P.$$.fragment),U=w(),q=h("h2"),Y=k("\u041A\u043E\u0434"),j=w(),H=h("pre"),this.h()},l(l){s=y(l,"H1",{id:!0});var m=I(s);n=_(m,"File"),m.forEach(c),t=O(l),e=y(l,"P",{});var d=I(e);a=_(d,"\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0434 "),r=y(d,"CODE",{});var pt=I(r);$=_(pt,'<input type="file" />'),pt.forEach(c),i=_(d,". \u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0441\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430. "),p=y(d,"CODE",{});var ct=I(p);b=_(ct,"File"),ct.forEach(c),N=_(d," \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 "),C=y(d,"CODE",{});var rt=I(C);T=_(rt,"Button"),rt.forEach(c),A=_(d,". \u0422\u043E \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u0435 \u043A "),B=y(d,"CODE",{});var ut=I(B);u=_(ut,"Button"),ut.forEach(c),K=_(d,", \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B \u0438 \u043A "),L=y(d,"CODE",{});var it=I(L);V=_(it,"File"),it.forEach(c),W=_(d,"."),d.forEach(c),M=O(l),G=y(l,"H2",{id:!0});var ft=I(G);X=_(ft,"\u041F\u0440\u0438\u043C\u0435\u0440"),ft.forEach(c),R=O(l),D(P.$$.fragment,l),U=O(l),q=y(l,"H2",{id:!0});var mt=I(q);Y=_(mt,"\u041A\u043E\u0434"),mt.forEach(c),j=O(l),H=y(l,"PRE",{class:!0});var Dt=I(H);Dt.forEach(c),this.h()},h(){J(s,"id","file"),J(G,"id","\u043F\u0440\u0438\u043C\u0435\u0440"),J(q,"id","\u043A\u043E\u0434"),J(H,"class","language-svelte")},m(l,m){g(l,s,m),f(s,n),g(l,t,m),g(l,e,m),f(e,a),f(e,r),f(r,$),f(e,i),f(e,p),f(p,b),f(e,N),f(e,C),f(C,T),f(e,A),f(e,B),f(B,u),f(e,K),f(e,L),f(L,V),f(e,W),g(l,M,m),g(l,G,m),f(G,X),g(l,R,m),z(P,l,m),g(l,U,m),g(l,q,m),f(q,Y),g(l,j,m),g(l,H,m),H.innerHTML=Et,Q=!0},p(l,[m]){const d={};m&1&&(d.$$scope={dirty:m,ctx:l}),P.$set(d)},i(l){Q||(v(P.$$.fragment,l),Q=!0)},o(l){F(P.$$.fragment,l),Q=!1},d(l){l&&c(s),l&&c(t),l&&c(e),l&&c(M),l&&c(G),l&&c(R),S(P,l),l&&c(U),l&&c(q),l&&c(j),l&&c(H)}}}class Zt extends x{constructor(s){super();tt(this,s,null,Yt,st,{})}}var xt={props:[{name:"before",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"after",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"mode",kind:"let",type:"string",value:"'primary'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"controlSize",kind:"let",type:"string",value:"'s'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"stretched",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"align",kind:"let",type:"string",value:"'center'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"style",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,fallback:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",slot_props:"{}"},{name:"after",default:!1,slot_props:"{ slot: after }"},{name:"before",default:!1,slot_props:"{ slot: before }"}],events:[],typedefs:[],rest_props:{type:"Element",name:"input"}};function ts(o){let s,n,t,e;return s=new Zt({}),t=new qt({props:{data:xt}}),{c(){E(s.$$.fragment),n=w(),E(t.$$.fragment)},l(a){D(s.$$.fragment,a),n=O(a),D(t.$$.fragment,a)},m(a,r){z(s,a,r),g(a,n,r),z(t,a,r),e=!0},p:lt,i(a){e||(v(s.$$.fragment,a),v(t.$$.fragment,a),e=!0)},o(a){F(s.$$.fragment,a),F(t.$$.fragment,a),e=!1},d(a){S(s,a),a&&c(n),S(t,a)}}}class vs extends x{constructor(s){super();tt(this,s,null,ts,st,{})}}export{vs as default};
