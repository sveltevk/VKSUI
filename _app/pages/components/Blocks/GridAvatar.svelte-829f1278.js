import{S as M,i as R,s as N,w as A,x as y,y as w,q as x,o as G,B as E,C as P,a7 as q,e as z,c as F,a as T,d as u,b as I,g as k,F as Y,t as b,k as d,h as H,m as _,T as D,N as W}from"../../../chunks/vendor-705c6f74.js";import{S as Z}from"../../../chunks/Showcase-8d380aaf.js";import{f as C}from"../../../chunks/File.svelte_svelte_type_style_lang-d8b2afd3.js";import{A as J,a as K,b as Q}from"../../../chunks/Avatar-9bd30186.js";import{a as v}from"../../../chunks/utils-d43c3284.js";import{A as aa}from"../../../chunks/APIDocs-c55e0504.js";import"../../../chunks/Tappable-20c88b88.js";import"../../../chunks/Touch-4189a9f9.js";function B(l,a,p){const s=l.slice();return s[5]=a[p],s}function O(l){let a,p;return{c(){a=z("div"),this.h()},l(s){a=F(s,"DIV",{class:!0,style:!0}),T(a).forEach(u),this.h()},h(){I(a,"class","GridAvatar__item svelte-18wovpy"),I(a,"style",p=`background-image: url(${l[5]})`)},m(s,t){k(s,a,t)},p(s,t){t&1&&p!==(p=`background-image: url(${s[5]})`)&&I(a,"style",p)},d(s){s&&u(a)}}}function sa(l){let a,p=l[0].slice(0,L),s=[];for(let t=0;t<p.length;t+=1)s[t]=O(B(l,p,t));return{c(){a=z("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=F(t,"DIV",{class:!0});var e=T(a);for(let c=0;c<s.length;c+=1)s[c].l(e);e.forEach(u),this.h()},h(){I(a,"class","GridAvatar__in svelte-18wovpy")},m(t,e){k(t,a,e);for(let c=0;c<s.length;c+=1)s[c].m(a,null)},p(t,e){if(e&1){p=t[0].slice(0,L);let c;for(c=0;c<p.length;c+=1){const r=B(t,p,c);s[c]?s[c].p(r,e):(s[c]=O(r),s[c].c(),s[c].m(a,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=p.length}},d(t){t&&u(a),Y(s,t)}}}function na(l){let a,p;return a=new J({props:{class:C(l[4].class,"GridAvatar",`GridAvatar--images-${l[3]}`),shadow:l[2],size:l[1],$$slots:{default:[sa]},$$scope:{ctx:l}}}),{c(){A(a.$$.fragment)},l(s){y(a.$$.fragment,s)},m(s,t){w(a,s,t),p=!0},p(s,[t]){const e={};t&24&&(e.class=C(s[4].class,"GridAvatar",`GridAvatar--images-${s[3]}`)),t&4&&(e.shadow=s[2]),t&2&&(e.size=s[1]),t&257&&(e.$$scope={dirty:t,ctx:s}),a.$set(e)},i(s){p||(x(a.$$.fragment,s),p=!0)},o(s){G(a.$$.fragment,s),p=!1},d(s){E(a,s)}}}const ta=1,L=4;function ea(l,a,p){let s,{src:t=[]}=a,{size:e=K}=a,{shadow:c=Q}=a;return l.$$set=r=>{p(4,a=P(P({},a),q(r))),"src"in r&&p(0,t=r.src),"size"in r&&p(1,e=r.size),"shadow"in r&&p(2,c=r.shadow)},l.$$.update=()=>{l.$$.dirty&1&&p(3,s=Math.max(ta,Math.min(L,t.length)))},a=q(a),[t,e,c,s,a]}class S extends M{constructor(a){super();R(this,a,ea,na,N,{src:0,size:1,shadow:2})}}function pa(l){let a,p,s,t,e,c,r,f,g,m,$,i,j,h;return p=new S({}),t=new S({props:{src:[v("user_ji")]}}),c=new S({props:{src:[v("user_wayshev"),v("user_mm")]}}),f=new S({props:{src:[v("user_arthurstam"),v("user_xyz"),v("user_ox")]}}),m=new S({props:{src:[v("user_ilyagrshn"),v("user_tc"),v("user_lihachyov"),v("user_va")]}}),{c(){a=z("div"),A(p.$$.fragment),s=d(),A(t.$$.fragment),e=d(),A(c.$$.fragment),r=d(),A(f.$$.fragment),g=d(),A(m.$$.fragment),$=d(),i=z("style"),j=b(`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),this.h()},l(n){a=F(n,"DIV",{class:!0});var o=T(a);y(p.$$.fragment,o),s=_(o),y(t.$$.fragment,o),e=_(o),y(c.$$.fragment,o),r=_(o),y(f.$$.fragment,o),g=_(o),y(m.$$.fragment,o),o.forEach(u),$=_(n),i=F(n,"STYLE",{});var U=T(i);j=H(U,`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),U.forEach(u),this.h()},h(){I(a,"class","Avatars")},m(n,o){k(n,a,o),w(p,a,null),D(a,s),w(t,a,null),D(a,e),w(c,a,null),D(a,r),w(f,a,null),D(a,g),w(m,a,null),k(n,$,o),k(n,i,o),D(i,j),h=!0},p:W,i(n){h||(x(p.$$.fragment,n),x(t.$$.fragment,n),x(c.$$.fragment,n),x(f.$$.fragment,n),x(m.$$.fragment,n),h=!0)},o(n){G(p.$$.fragment,n),G(t.$$.fragment,n),G(c.$$.fragment,n),G(f.$$.fragment,n),G(m.$$.fragment,n),h=!1},d(n){n&&u(a),E(p),E(t),E(c),E(f),E(m),n&&u($),n&&u(i)}}}function ca(l){let a,p,s,t,e,c,r,f,g,m,$,i,j=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> GridAvatar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getAvatarUrl <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$site/data/utils'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Avatars<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GridAvatar</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GridAvatar</span> <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_ji'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GridAvatar</span> <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_wayshev'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_mm'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GridAvatar</span>
		<span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_arthurstam'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_xyz'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_ox'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
	<span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GridAvatar</span>
		<span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
			<span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_ilyagrshn'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_tc'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_lihachyov'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_va'</span><span class="token punctuation">)</span>
		<span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
	<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.Avatars</span> <span class="token punctuation">&#123;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
		<span class="token property">gap</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
		<span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,h;return r=new Z({props:{mini:!0,$$slots:{default:[pa]},$$scope:{ctx:l}}}),{c(){a=z("h1"),p=b("GridAvatar"),s=d(),t=z("p"),e=b("\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u0432 \u0441\u0435\u0442\u043A\u0435 \u043E\u0442 1 \u0434\u043E 4 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432."),c=d(),A(r.$$.fragment),f=d(),g=z("h2"),m=b("\u041A\u043E\u0434"),$=d(),i=z("pre"),this.h()},l(n){a=F(n,"H1",{id:!0});var o=T(a);p=H(o,"GridAvatar"),o.forEach(u),s=_(n),t=F(n,"P",{});var U=T(t);e=H(U,"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u0432 \u0441\u0435\u0442\u043A\u0435 \u043E\u0442 1 \u0434\u043E 4 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432."),U.forEach(u),c=_(n),y(r.$$.fragment,n),f=_(n),g=F(n,"H2",{id:!0});var V=T(g);m=H(V,"\u041A\u043E\u0434"),V.forEach(u),$=_(n),i=F(n,"PRE",{class:!0});var X=T(i);X.forEach(u),this.h()},h(){I(a,"id","gridavatar"),I(g,"id","\u043A\u043E\u0434"),I(i,"class","language-svelte")},m(n,o){k(n,a,o),D(a,p),k(n,s,o),k(n,t,o),D(t,e),k(n,c,o),w(r,n,o),k(n,f,o),k(n,g,o),D(g,m),k(n,$,o),k(n,i,o),i.innerHTML=j,h=!0},p(n,[o]){const U={};o&1&&(U.$$scope={dirty:o,ctx:n}),r.$set(U)},i(n){h||(x(r.$$.fragment,n),h=!0)},o(n){G(r.$$.fragment,n),h=!1},d(n){n&&u(a),n&&u(s),n&&u(t),n&&u(c),E(r,n),n&&u(f),n&&u(g),n&&u($),n&&u(i)}}}class oa extends M{constructor(a){super();R(this,a,null,ca,N,{})}}var la={props:[{name:"src",kind:"let",type:"[]",value:"[]",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"size",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"shadow",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[],events:[],typedefs:[]};function ra(l){let a,p,s,t;return a=new oa({}),s=new aa({props:{data:la}}),{c(){A(a.$$.fragment),p=d(),A(s.$$.fragment)},l(e){y(a.$$.fragment,e),p=_(e),y(s.$$.fragment,e)},m(e,c){w(a,e,c),k(e,p,c),w(s,e,c),t=!0},p:W,i(e){t||(x(a.$$.fragment,e),x(s.$$.fragment,e),t=!0)},o(e){G(a.$$.fragment,e),G(s.$$.fragment,e),t=!1},d(e){E(a,e),e&&u(p),E(s,e)}}}class _a extends M{constructor(a){super();R(this,a,null,ra,N,{})}}export{_a as default};
