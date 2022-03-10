import{S as Y,i as Z,s as J,w as N,x as P,y as H,q as b,o as T,B as V,N as fs,e as v,c as h,a as $,d as u,b as R,g as _,O as ms,P as _s,Q as ds,t as d,k as S,h as g,m as x,L as f,n as gs,p as vs,F as hs,M as us}from"../../../chunks/vendor-e275372f.js";import{S as $s}from"../../../chunks/Showcase-22f52de2.js";import{c as os}from"../../../chunks/File.svelte_svelte_type_style_lang-f559d5ad.js";import{A as As,a as ws,b as Es}from"../../../chunks/Avatar-32b34cd0.js";import{g as ys}from"../../../chunks/utils-d43c3284.js";import"../../../chunks/Tappable-3fe2f36b.js";import"../../../chunks/Touch-b77d496a.js";function bs(l){let s,t;const a=l[4].default,n=fs(a,l,l[5],null);return{c(){s=v("span"),n&&n.c(),this.h()},l(o){s=h(o,"SPAN",{"aria-hidden":!0,class:!0});var r=$(s);n&&n.l(r),r.forEach(u),this.h()},h(){R(s,"aria-hidden","true"),R(s,"class","InitialsAvatar__text svelte-hx2dg6")},m(o,r){_(o,s,r),n&&n.m(s,null),t=!0},p(o,r){n&&n.p&&(!t||r&32)&&ms(n,a,o,o[5],t?ds(a,o[5],r,null):_s(o[5]),null)},i(o){t||(b(n,o),t=!0)},o(o){T(n,o),t=!1},d(o){o&&u(s),n&&n.d(o)}}}function Is(l){let s,t;return s=new As({props:{style:`font-size:${ls(l[0])}px;`,class:os("InitialsAvatar",`InitialsAvatar--color-${l[2]}`),shadow:l[1],size:l[0],$$slots:{default:[bs]},$$scope:{ctx:l}}}),{c(){N(s.$$.fragment)},l(a){P(s.$$.fragment,a)},m(a,n){H(s,a,n),t=!0},p(a,[n]){const o={};n&1&&(o.style=`font-size:${ls(a[0])}px;`),n&4&&(o.class=os("InitialsAvatar",`InitialsAvatar--color-${a[2]}`)),n&2&&(o.shadow=a[1]),n&1&&(o.size=a[0]),n&32&&(o.$$scope={dirty:n,ctx:a}),s.$set(o)},i(a){t||(b(s.$$.fragment,a),t=!0)},o(a){T(s.$$.fragment,a),t=!1},d(a){V(s,a)}}}const zs={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},ls=l=>{const s=Math.ceil(l*.36),t=s%2;return s+t};function Cs(l,s,t){let a,{$$slots:n={},$$scope:o}=s,{gradientColor:r}=s,{size:c=ws}=s,{shadow:w=Es}=s;return l.$$set=e=>{"gradientColor"in e&&t(3,r=e.gradientColor),"size"in e&&t(0,c=e.size),"shadow"in e&&t(1,w=e.shadow),"$$scope"in e&&t(5,o=e.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&t(2,a=typeof r=="string"?r:zs[r])},[c,w,a,r,n,o]}class Ss extends Y{constructor(s){super();Z(this,s,Cs,Is,J,{gradientColor:3,size:0,shadow:1})}}function xs(l){return l%6+1}function cs(l,s,t){const a=l.slice();a[1]=s[t];const n=ys();return a[2]=n,a}function Rs(l){let s=l[2].initials+"",t,a;return{c(){t=d(s),a=S()},l(n){t=g(n,s),a=x(n)},m(n,o){_(n,t,o),_(n,a,o)},p:us,d(n){n&&u(t),n&&u(a)}}}function is(l){let s,t;return s=new Ss({props:{size:l[1],gradientColor:xs(l[2].id),$$slots:{default:[Rs]},$$scope:{ctx:l}}}),{c(){N(s.$$.fragment)},l(a){P(s.$$.fragment,a)},m(a,n){H(s,a,n),t=!0},p(a,n){const o={};n&32&&(o.$$scope={dirty:n,ctx:a}),s.$set(o)},i(a){t||(b(s.$$.fragment,a),t=!0)},o(a){T(s.$$.fragment,a),t=!1},d(a){V(s,a)}}}function Ts(l){let s,t,a,n,o,r=l[0],c=[];for(let e=0;e<r.length;e+=1)c[e]=is(cs(l,r,e));const w=e=>T(c[e],1,1,()=>{c[e]=null});return{c(){s=v("div");for(let e=0;e<c.length;e+=1)c[e].c();t=S(),a=v("style"),n=d(`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),this.h()},l(e){s=h(e,"DIV",{class:!0});var i=$(s);for(let A=0;A<c.length;A+=1)c[A].l(i);i.forEach(u),t=x(e),a=h(e,"STYLE",{});var k=$(a);n=g(k,`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),k.forEach(u),this.h()},h(){R(s,"class","Avatars")},m(e,i){_(e,s,i);for(let k=0;k<c.length;k+=1)c[k].m(s,null);_(e,t,i),_(e,a,i),f(a,n),o=!0},p(e,i){if(i&1){r=e[0];let k;for(k=0;k<r.length;k+=1){const A=cs(e,r,k);c[k]?(c[k].p(A,i),b(c[k],1)):(c[k]=is(A),c[k].c(),b(c[k],1),c[k].m(s,null))}for(gs(),k=r.length;k<c.length;k+=1)w(k);vs()}},i(e){if(!o){for(let i=0;i<r.length;i+=1)b(c[i]);o=!0}},o(e){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)T(c[i]);o=!1},d(e){e&&u(s),hs(c,e),e&&u(t),e&&u(a)}}}function Os(l){let s,t,a,n,o,r,c,w,e,i,k,A,B,q,O,D,G,K,j,Q,W,U,E,F,I,X,L,z,rs=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> InitialsAvatar<span class="token punctuation">,</span> calcInitialsAvatarColor <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getRandomUser <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$site/data/utils'</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> sizes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Avatars<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">sizes </span><span class="token keyword">as</span> <span class="token language-javascript">size<span class="token punctuation">&#125;</span></span></span>
		<span class="token language-javascript"><span class="token punctuation">&#123;</span>@<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getRandomUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InitialsAvatar</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>size<span class="token punctuation">&#125;</span></span> <span class="token attr-name">gradientColor=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token function">calcInitialsAvatarColor</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
			<span class="token language-javascript"><span class="token punctuation">&#123;</span>user<span class="token punctuation">.</span>initials<span class="token punctuation">&#125;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InitialsAvatar</span><span class="token punctuation">></span></span>
	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.Avatars</span> <span class="token punctuation">&#123;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
		<span class="token property">gap</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
		<span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,M;return E=new $s({props:{mini:!0,$$slots:{default:[Ts]},$$scope:{ctx:l}}}),{c(){s=v("h1"),t=d("InitialsAvatar"),a=S(),n=v("p"),o=d("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u043D\u0430 \u0444\u043E\u043D\u0435 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F). \u0414\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 "),r=v("strong"),c=d("\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),w=d("."),e=S(),i=v("p"),k=d("\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0443\u043B\u0443 "),A=v("code"),B=d("user_id % 6 + 1"),q=d(" (\u0441\u043C. \u0444\u0443\u043D\u043A\u0446\u0438\u044E "),O=v("a"),D=v("code"),G=d("calcInitialsAvatarColor"),K=d(") \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F c id 106 \u0431\u0443\u0434\u0435\u0442 5-\u0439 ("),j=v("code"),Q=d("l-blue"),W=d(") \u0446\u0432\u0435\u0442 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430."),U=S(),N(E.$$.fragment),F=S(),I=v("h2"),X=d("\u041A\u043E\u0434"),L=S(),z=v("pre"),this.h()},l(p){s=h(p,"H1",{id:!0});var m=$(s);t=g(m,"InitialsAvatar"),m.forEach(u),a=x(p),n=h(p,"P",{});var C=$(n);o=g(C,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u043D\u0430 \u0444\u043E\u043D\u0435 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F). \u0414\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 "),r=h(C,"STRONG",{});var ss=$(r);c=g(ss,"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),ss.forEach(u),w=g(C,"."),C.forEach(u),e=x(p),i=h(p,"P",{});var y=$(i);k=g(y,"\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0443\u043B\u0443 "),A=h(y,"CODE",{});var as=$(A);B=g(as,"user_id % 6 + 1"),as.forEach(u),q=g(y," (\u0441\u043C. \u0444\u0443\u043D\u043A\u0446\u0438\u044E "),O=h(y,"A",{href:!0});var ns=$(O);D=h(ns,"CODE",{});var ts=$(D);G=g(ts,"calcInitialsAvatarColor"),ts.forEach(u),ns.forEach(u),K=g(y,") \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F c id 106 \u0431\u0443\u0434\u0435\u0442 5-\u0439 ("),j=h(y,"CODE",{});var es=$(j);Q=g(es,"l-blue"),es.forEach(u),W=g(y,") \u0446\u0432\u0435\u0442 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430."),y.forEach(u),U=x(p),P(E.$$.fragment,p),F=x(p),I=h(p,"H2",{id:!0});var ps=$(I);X=g(ps,"\u041A\u043E\u0434"),ps.forEach(u),L=x(p),z=h(p,"PRE",{class:!0});var ks=$(z);ks.forEach(u),this.h()},h(){R(s,"id","initialsavatar"),R(O,"href","/VKSUI/utils"),R(I,"id","\u043A\u043E\u0434"),R(z,"class","language-svelte")},m(p,m){_(p,s,m),f(s,t),_(p,a,m),_(p,n,m),f(n,o),f(n,r),f(r,c),f(n,w),_(p,e,m),_(p,i,m),f(i,k),f(i,A),f(A,B),f(i,q),f(i,O),f(O,D),f(D,G),f(i,K),f(i,j),f(j,Q),f(i,W),_(p,U,m),H(E,p,m),_(p,F,m),_(p,I,m),f(I,X),_(p,L,m),_(p,z,m),z.innerHTML=rs,M=!0},p(p,[m]){const C={};m&32&&(C.$$scope={dirty:m,ctx:p}),E.$set(C)},i(p){M||(b(E.$$.fragment,p),M=!0)},o(p){T(E.$$.fragment,p),M=!1},d(p){p&&u(s),p&&u(a),p&&u(n),p&&u(e),p&&u(i),p&&u(U),V(E,p),p&&u(F),p&&u(I),p&&u(L),p&&u(z)}}}function Ds(l){return[[16,20,24,28,32,36,40,44,48,56,64,72,80,88,96]]}class js extends Y{constructor(s){super();Z(this,s,Ds,Os,J,{})}}function Us(l){let s,t;return s=new js({}),{c(){N(s.$$.fragment)},l(a){P(s.$$.fragment,a)},m(a,n){H(s,a,n),t=!0},p:us,i(a){t||(b(s.$$.fragment,a),t=!0)},o(a){T(s.$$.fragment,a),t=!1},d(a){V(s,a)}}}class Bs extends Y{constructor(s){super();Z(this,s,null,Us,J,{})}}export{Bs as default};
