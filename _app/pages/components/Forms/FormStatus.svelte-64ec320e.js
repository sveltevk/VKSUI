import{S as R,i as j,s as q,w as d,x as h,y as v,q as i,o as $,B as F,C as N,e as E,k as w,c as P,a as C,m as I,d as m,a4 as B,a1 as L,g,T as z,n as O,p as Q,z as os,a5 as V,a6 as ls,M as ps,a7 as J,O as Z,P as y,Q as x,R as ss,t as D,h as G,j as rs,b as A,N as ts}from"../../../chunks/vendor-f3d45434.js";import{S as us}from"../../../chunks/Showcase-14efc28d.js";import{f as K,h as U,a as cs}from"../../../chunks/File.svelte_svelte_type_style_lang-184c9a3b.js";import{G as fs}from"../../../chunks/Group-fb6acbe3.js";import{F as M}from"../../../chunks/FormItem-d37b0a96.js";import{C as is}from"../../../chunks/Caption-a542ea7a.js";import{H as ms}from"../../../chunks/Headline-4eb2972f.js";import{I as as}from"../../../chunks/Input-b904afcc.js";import{A as $s}from"../../../chunks/APIDocs-467c197b.js";import"../../../chunks/Separator-02083e3e.js";import"../../../chunks/Subhead-1ac84747.js";import"../../../chunks/IconButton-6f98634a.js";import"../../../chunks/Tappable-7ffc7a62.js";import"../../../chunks/Touch-ca7c47e0.js";import"../../../chunks/FormField-e58afeaf.js";const ks=o=>({}),W=o=>({});function X(o){let s,e;return s=new ms({props:{weight:"medium",class:"FormStatus__header",$$slots:{default:[gs]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&258&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function _s(o){let s;return{c(){s=D(o[1])},l(e){s=G(e,o[1])},m(e,t){g(e,s,t)},p(e,t){t&2&&rs(s,e[1])},d(e){e&&m(s)}}}function gs(o){let s;const e=o[7].header,t=Z(e,o,o[8],W),n=t||_s(o);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,p){n&&n.m(a,p),s=!0},p(a,p){t?t.p&&(!s||p&256)&&y(t,e,a,a[8],s?ss(e,a[8],p,ks):x(a[8]),W):n&&n.p&&(!s||p&2)&&n.p(a,s?p:-1)},i(a){s||(i(n,a),s=!0)},o(a){$(n,a),s=!1},d(a){n&&n.d(a)}}}function Y(o){let s,e;return s=new is({props:{level:"1",weight:"regular",class:"FormStatus__content",$$slots:{default:[ds]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&256&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function ds(o){let s;const e=o[7].default,t=Z(e,o,o[8],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,a){t&&t.m(n,a),s=!0},p(n,a){t&&t.p&&(!s||a&256)&&y(t,e,n,n[8],s?ss(e,n[8],a,null):x(n[8]),null)},i(n){s||(i(t,n),s=!0)},o(n){$(t,n),s=!1},d(n){t&&t.d(n)}}}function hs(o){let s,e,t,n,a=(o[6].header||o[1])&&X(o),p=o[6].default&&Y(o),l=[o[4],{class:t=K(o[5].class,U("FormStatus",o[2]),`FormStatus--${o[0]}`)}],c={};for(let r=0;r<l.length;r+=1)c=N(c,l[r]);return{c(){s=E("div"),a&&a.c(),e=w(),p&&p.c(),this.h()},l(r){s=P(r,"DIV",{class:!0});var f=C(s);a&&a.l(f),e=I(f),p&&p.l(f),f.forEach(m),this.h()},h(){B(s,c),L(s,"svelte-1ixz6ux",!0)},m(r,f){g(r,s,f),a&&a.m(s,null),z(s,e),p&&p.m(s,null),n=!0},p(r,[f]){r[6].header||r[1]?a?(a.p(r,f),f&66&&i(a,1)):(a=X(r),a.c(),i(a,1),a.m(s,e)):a&&(O(),$(a,1,1,()=>{a=null}),Q()),r[6].default?p?(p.p(r,f),f&64&&i(p,1)):(p=Y(r),p.c(),i(p,1),p.m(s,null)):p&&(O(),$(p,1,1,()=>{p=null}),Q()),B(s,c=os(l,[f&16&&r[4],(!n||f&37&&t!==(t=K(r[5].class,U("FormStatus",r[2]),`FormStatus--${r[0]}`)))&&{class:t}])),L(s,"svelte-1ixz6ux",!0)},i(r){n||(i(a),i(p),n=!0)},o(r){$(a),$(p),n=!1},d(r){r&&m(s),a&&a.d(),p&&p.d()}}}function vs(o,s,e){const t=["mode","header"];let n=V(s,t),a,{$$slots:p={},$$scope:l}=s;const c=ls(p);let{mode:r="default"}=s,{header:f=""}=s;const S=cs();return ps(o,S,k=>e(2,a=k)),o.$$set=k=>{e(5,s=N(N({},s),J(k))),e(4,n=V(s,t)),"mode"in k&&e(0,r=k.mode),"header"in k&&e(1,f=k.header),"$$scope"in k&&e(8,l=k.$$scope)},s=J(s),[r,f,a,S,n,s,c,p,l]}class Fs extends R{constructor(s){super();j(this,s,vs,hs,q,{mode:0,header:1})}}function Ss(o){let s;return{c(){s=D("\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435")},l(e){s=G(e,"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435")},m(e,t){g(e,s,t)},d(e){e&&m(s)}}}function ws(o){let s,e;return s=new Fs({props:{header:"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",mode:"error",$$slots:{default:[Ss]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function Is(o){let s,e;return s=new as({props:{value:"+7 12 344 15 48"}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p:ts,i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function bs(o){let s,e;return s=new as({}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function Es(o){let s,e,t,n,a,p;return s=new M({props:{$$slots:{default:[ws]},$$scope:{ctx:o}}}),t=new M({props:{top:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",$$slots:{default:[Is]},$$scope:{ctx:o}}}),a=new M({props:{top:"\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",$$slots:{default:[bs]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment),e=w(),d(t.$$.fragment),n=w(),d(a.$$.fragment)},l(l){h(s.$$.fragment,l),e=I(l),h(t.$$.fragment,l),n=I(l),h(a.$$.fragment,l)},m(l,c){v(s,l,c),g(l,e,c),v(t,l,c),g(l,n,c),v(a,l,c),p=!0},p(l,c){const r={};c&1&&(r.$$scope={dirty:c,ctx:l}),s.$set(r);const f={};c&1&&(f.$$scope={dirty:c,ctx:l}),t.$set(f);const S={};c&1&&(S.$$scope={dirty:c,ctx:l}),a.$set(S)},i(l){p||(i(s.$$.fragment,l),i(t.$$.fragment,l),i(a.$$.fragment,l),p=!0)},o(l){$(s.$$.fragment,l),$(t.$$.fragment,l),$(a.$$.fragment,l),p=!1},d(l){F(s,l),l&&m(e),F(t,l),l&&m(n),F(a,l)}}}function Ps(o){let s,e;return s=new fs({props:{$$slots:{default:[Es]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function Cs(o){let s,e,t,n,a,p,l,c,r,f,S,k,ns=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Input<span class="token punctuation">,</span> FormItem<span class="token punctuation">,</span> FormStatus<span class="token punctuation">,</span> Group <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormStatus</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormStatus</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>+7 12 344 15 48<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span></code>`,H;return l=new us({props:{scroll:!0,$$slots:{default:[Ps]},$$scope:{ctx:o}}}),{c(){s=E("h1"),e=D("FormStatus"),t=w(),n=E("p"),a=D("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0444\u043E\u0440\u043C\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u0438 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u0442\u0435\u043A\u0441\u0442 \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B."),p=w(),d(l.$$.fragment),c=w(),r=E("h2"),f=D("\u041A\u043E\u0434"),S=w(),k=E("pre"),this.h()},l(u){s=P(u,"H1",{id:!0});var _=C(s);e=G(_,"FormStatus"),_.forEach(m),t=I(u),n=P(u,"P",{});var b=C(n);a=G(b,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0444\u043E\u0440\u043C\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u0438 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u0442\u0435\u043A\u0441\u0442 \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B."),b.forEach(m),p=I(u),h(l.$$.fragment,u),c=I(u),r=P(u,"H2",{id:!0});var T=C(r);f=G(T,"\u041A\u043E\u0434"),T.forEach(m),S=I(u),k=P(u,"PRE",{class:!0});var es=C(k);es.forEach(m),this.h()},h(){A(s,"id","formstatus"),A(r,"id","\u043A\u043E\u0434"),A(k,"class","language-svelte")},m(u,_){g(u,s,_),z(s,e),g(u,t,_),g(u,n,_),z(n,a),g(u,p,_),v(l,u,_),g(u,c,_),g(u,r,_),z(r,f),g(u,S,_),g(u,k,_),k.innerHTML=ns,H=!0},p(u,[_]){const b={};_&1&&(b.$$scope={dirty:_,ctx:u}),l.$set(b)},i(u){H||(i(l.$$.fragment,u),H=!0)},o(u){$(l.$$.fragment,u),H=!1},d(u){u&&m(s),u&&m(t),u&&m(n),u&&m(p),F(l,u),u&&m(c),u&&m(r),u&&m(S),u&&m(k)}}}class Ds extends R{constructor(s){super();j(this,s,null,Cs,q,{})}}var Gs={props:[{name:"mode",kind:"let",type:"string",value:"'default'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"header",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"header",default:!1,fallback:"{header}",slot_props:"{}"}],events:[],typedefs:[],rest_props:{type:"Element",name:"div"}};function Hs(o){let s,e,t,n;return s=new Ds({}),t=new $s({props:{data:Gs}}),{c(){d(s.$$.fragment),e=w(),d(t.$$.fragment)},l(a){h(s.$$.fragment,a),e=I(a),h(t.$$.fragment,a)},m(a,p){v(s,a,p),g(a,e,p),v(t,a,p),n=!0},p:ts,i(a){n||(i(s.$$.fragment,a),i(t.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),n=!1},d(a){F(s,a),a&&m(e),F(t,a)}}}class Us extends R{constructor(s){super();j(this,s,null,Hs,q,{})}}export{Us as default};