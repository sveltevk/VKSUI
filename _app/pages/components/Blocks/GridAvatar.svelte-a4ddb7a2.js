import{S as R,i as V,s as N,w as y,x as w,y as x,q as G,o as E,B as U,C as q,a4 as C,e as z,c as T,a as j,d as u,b as I,g as k,F as Y,t as S,k as h,h as b,m as $,L as D,M as W}from"../../../chunks/vendor-e275372f.js";import{S as Z}from"../../../chunks/Showcase-22f52de2.js";import{c as P}from"../../../chunks/File.svelte_svelte_type_style_lang-f559d5ad.js";import{A as J,a as K,b as Q}from"../../../chunks/Avatar-32b34cd0.js";import{a as v}from"../../../chunks/utils-d43c3284.js";import"../../../chunks/Tappable-3fe2f36b.js";import"../../../chunks/Touch-b77d496a.js";function B(l,a,p){const s=l.slice();return s[5]=a[p],s}function O(l){let a,p;return{c(){a=z("div"),this.h()},l(s){a=T(s,"DIV",{class:!0,style:!0}),j(a).forEach(u),this.h()},h(){I(a,"class","GridAvatar__item svelte-18wovpy"),I(a,"style",p=`background-image: url(${l[5]})`)},m(s,t){k(s,a,t)},p(s,t){t&1&&p!==(p=`background-image: url(${s[5]})`)&&I(a,"style",p)},d(s){s&&u(a)}}}function aa(l){let a,p=l[0].slice(0,H),s=[];for(let t=0;t<p.length;t+=1)s[t]=O(B(l,p,t));return{c(){a=z("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=T(t,"DIV",{class:!0});var o=j(a);for(let e=0;e<s.length;e+=1)s[e].l(o);o.forEach(u),this.h()},h(){I(a,"class","GridAvatar__in svelte-18wovpy")},m(t,o){k(t,a,o);for(let e=0;e<s.length;e+=1)s[e].m(a,null)},p(t,o){if(o&1){p=t[0].slice(0,H);let e;for(e=0;e<p.length;e+=1){const r=B(t,p,e);s[e]?s[e].p(r,o):(s[e]=O(r),s[e].c(),s[e].m(a,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=p.length}},d(t){t&&u(a),Y(s,t)}}}function sa(l){let a,p;return a=new J({props:{class:P(l[4].class,"GridAvatar",`GridAvatar--images-${l[3]}`),shadow:l[2],size:l[1],$$slots:{default:[aa]},$$scope:{ctx:l}}}),{c(){y(a.$$.fragment)},l(s){w(a.$$.fragment,s)},m(s,t){x(a,s,t),p=!0},p(s,[t]){const o={};t&24&&(o.class=P(s[4].class,"GridAvatar",`GridAvatar--images-${s[3]}`)),t&4&&(o.shadow=s[2]),t&2&&(o.size=s[1]),t&257&&(o.$$scope={dirty:t,ctx:s}),a.$set(o)},i(s){p||(G(a.$$.fragment,s),p=!0)},o(s){E(a.$$.fragment,s),p=!1},d(s){U(a,s)}}}const na=1,H=4;function ta(l,a,p){let s,{src:t=[]}=a,{size:o=K}=a,{shadow:e=Q}=a;return l.$$set=r=>{p(4,a=q(q({},a),C(r))),"src"in r&&p(0,t=r.src),"size"in r&&p(1,o=r.size),"shadow"in r&&p(2,e=r.shadow)},l.$$.update=()=>{l.$$.dirty&1&&p(3,s=Math.max(na,Math.min(H,t.length)))},a=C(a),[t,o,e,s,a]}class M extends R{constructor(a){super();V(this,a,ta,sa,N,{src:0,size:1,shadow:2})}}function pa(l){let a,p,s,t,o,e,r,f,g,m,_,i,L,d;return p=new M({}),t=new M({props:{src:[v("user_ji")]}}),e=new M({props:{src:[v("user_wayshev"),v("user_mm")]}}),f=new M({props:{src:[v("user_arthurstam"),v("user_xyz"),v("user_ox")]}}),m=new M({props:{src:[v("user_ilyagrshn"),v("user_tc"),v("user_lihachyov"),v("user_va")]}}),{c(){a=z("div"),y(p.$$.fragment),s=h(),y(t.$$.fragment),o=h(),y(e.$$.fragment),r=h(),y(f.$$.fragment),g=h(),y(m.$$.fragment),_=h(),i=z("style"),L=S(`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),this.h()},l(n){a=T(n,"DIV",{class:!0});var c=j(a);w(p.$$.fragment,c),s=$(c),w(t.$$.fragment,c),o=$(c),w(e.$$.fragment,c),r=$(c),w(f.$$.fragment,c),g=$(c),w(m.$$.fragment,c),c.forEach(u),_=$(n),i=T(n,"STYLE",{});var A=j(i);L=b(A,`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),A.forEach(u),this.h()},h(){I(a,"class","Avatars")},m(n,c){k(n,a,c),x(p,a,null),D(a,s),x(t,a,null),D(a,o),x(e,a,null),D(a,r),x(f,a,null),D(a,g),x(m,a,null),k(n,_,c),k(n,i,c),D(i,L),d=!0},p:W,i(n){d||(G(p.$$.fragment,n),G(t.$$.fragment,n),G(e.$$.fragment,n),G(f.$$.fragment,n),G(m.$$.fragment,n),d=!0)},o(n){E(p.$$.fragment,n),E(t.$$.fragment,n),E(e.$$.fragment,n),E(f.$$.fragment,n),E(m.$$.fragment,n),d=!1},d(n){n&&u(a),U(p),U(t),U(e),U(f),U(m),n&&u(_),n&&u(i)}}}function ea(l){let a,p,s,t,o,e,r,f,g,m,_,i,L=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,d;return r=new Z({props:{mini:!0,$$slots:{default:[pa]},$$scope:{ctx:l}}}),{c(){a=z("h1"),p=S("GridAvatar"),s=h(),t=z("p"),o=S("\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u0432 \u0441\u0435\u0442\u043A\u0435 \u043E\u0442 1 \u0434\u043E 4 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432."),e=h(),y(r.$$.fragment),f=h(),g=z("h2"),m=S("\u041A\u043E\u0434"),_=h(),i=z("pre"),this.h()},l(n){a=T(n,"H1",{id:!0});var c=j(a);p=b(c,"GridAvatar"),c.forEach(u),s=$(n),t=T(n,"P",{});var A=j(t);o=b(A,"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u0432 \u0441\u0435\u0442\u043A\u0435 \u043E\u0442 1 \u0434\u043E 4 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432."),A.forEach(u),e=$(n),w(r.$$.fragment,n),f=$(n),g=T(n,"H2",{id:!0});var F=j(g);m=b(F,"\u041A\u043E\u0434"),F.forEach(u),_=$(n),i=T(n,"PRE",{class:!0});var X=j(i);X.forEach(u),this.h()},h(){I(a,"id","gridavatar"),I(g,"id","\u043A\u043E\u0434"),I(i,"class","language-svelte")},m(n,c){k(n,a,c),D(a,p),k(n,s,c),k(n,t,c),D(t,o),k(n,e,c),x(r,n,c),k(n,f,c),k(n,g,c),D(g,m),k(n,_,c),k(n,i,c),i.innerHTML=L,d=!0},p(n,[c]){const A={};c&1&&(A.$$scope={dirty:c,ctx:n}),r.$set(A)},i(n){d||(G(r.$$.fragment,n),d=!0)},o(n){E(r.$$.fragment,n),d=!1},d(n){n&&u(a),n&&u(s),n&&u(t),n&&u(e),U(r,n),n&&u(f),n&&u(g),n&&u(_),n&&u(i)}}}class ca extends R{constructor(a){super();V(this,a,null,ea,N,{})}}function oa(l){let a,p;return a=new ca({}),{c(){y(a.$$.fragment)},l(s){w(a.$$.fragment,s)},m(s,t){x(a,s,t),p=!0},p:W,i(s){p||(G(a.$$.fragment,s),p=!0)},o(s){E(a.$$.fragment,s),p=!1},d(s){U(a,s)}}}class ma extends R{constructor(a){super();V(this,a,null,oa,N,{})}}export{ma as default};