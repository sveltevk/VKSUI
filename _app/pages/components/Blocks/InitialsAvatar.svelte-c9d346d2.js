import{S as Y,i as Z,s as J,w as j,x as P,y as U,q as w,o as C,B as N,O as ks,e as v,c as $,a as h,d as r,b as x,g as d,P as ms,Q as ds,R as _s,t as _,k as I,h as g,m as z,T as k,n as gs,p as vs,F as $s,N as us}from"../../../chunks/vendor-049c144f.js";import{S as hs}from"../../../chunks/Showcase-44e4d600.js";import{f as os}from"../../../chunks/File.svelte_svelte_type_style_lang-5c39484a.js";import{A as As,a as ws,b as ys}from"../../../chunks/Avatar-b761d0ad.js";import{g as bs}from"../../../chunks/utils-d43c3284.js";import{A as Es}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Tappable-eb98bdc2.js";import"../../../chunks/Touch-effea633.js";function Is(l){let s,e;const a=l[4].default,n=ks(a,l,l[5],null);return{c(){s=v("span"),n&&n.c(),this.h()},l(t){s=$(t,"SPAN",{"aria-hidden":!0,class:!0});var c=h(s);n&&n.l(c),c.forEach(r),this.h()},h(){x(s,"aria-hidden","true"),x(s,"class","InitialsAvatar__text svelte-hx2dg6")},m(t,c){d(t,s,c),n&&n.m(s,null),e=!0},p(t,c){n&&n.p&&(!e||c&32)&&ms(n,a,t,t[5],e?_s(a,t[5],c,null):ds(t[5]),null)},i(t){e||(w(n,t),e=!0)},o(t){C(n,t),e=!1},d(t){t&&r(s),n&&n.d(t)}}}function zs(l){let s,e;return s=new As({props:{style:`font-size:${ls(l[0])}px;`,class:os("InitialsAvatar",`InitialsAvatar--color-${l[2]}`),shadow:l[1],size:l[0],$$slots:{default:[Is]},$$scope:{ctx:l}}}),{c(){j(s.$$.fragment)},l(a){P(s.$$.fragment,a)},m(a,n){U(s,a,n),e=!0},p(a,[n]){const t={};n&1&&(t.style=`font-size:${ls(a[0])}px;`),n&4&&(t.class=os("InitialsAvatar",`InitialsAvatar--color-${a[2]}`)),n&2&&(t.shadow=a[1]),n&1&&(t.size=a[0]),n&32&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){e||(w(s.$$.fragment,a),e=!0)},o(a){C(s.$$.fragment,a),e=!1},d(a){N(s,a)}}}const Cs={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},ls=l=>{const s=Math.ceil(l*.36),e=s%2;return s+e};function Ss(l,s,e){let a,{$$slots:n={},$$scope:t}=s,{gradientColor:c}=s,{size:i=ws}=s,{shadow:y=ys}=s;return l.$$set=p=>{"gradientColor"in p&&e(3,c=p.gradientColor),"size"in p&&e(0,i=p.size),"shadow"in p&&e(1,y=p.shadow),"$$scope"in p&&e(5,t=p.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&e(2,a=typeof c=="string"?c:Cs[c])},[i,y,a,c,n,t]}class Ds extends Y{constructor(s){super();Z(this,s,Ss,zs,J,{gradientColor:3,size:0,shadow:1})}}function Fs(l){return l%6+1}function cs(l,s,e){const a=l.slice();a[1]=s[e];const n=bs();return a[2]=n,a}function xs(l){let s=l[2].initials+"",e,a;return{c(){e=_(s),a=I()},l(n){e=g(n,s),a=z(n)},m(n,t){d(n,e,t),d(n,a,t)},p:us,d(n){n&&r(e),n&&r(a)}}}function is(l){let s,e;return s=new Ds({props:{size:l[1],gradientColor:Fs(l[2].id),$$slots:{default:[xs]},$$scope:{ctx:l}}}),{c(){j(s.$$.fragment)},l(a){P(s.$$.fragment,a)},m(a,n){U(s,a,n),e=!0},p(a,n){const t={};n&32&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){e||(w(s.$$.fragment,a),e=!0)},o(a){C(s.$$.fragment,a),e=!1},d(a){N(s,a)}}}function Rs(l){let s,e,a,n,t,c=l[0],i=[];for(let p=0;p<c.length;p+=1)i[p]=is(cs(l,c,p));const y=p=>C(i[p],1,1,()=>{i[p]=null});return{c(){s=v("div");for(let p=0;p<i.length;p+=1)i[p].c();e=I(),a=v("style"),n=_(`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),this.h()},l(p){s=$(p,"DIV",{class:!0});var u=h(s);for(let A=0;A<i.length;A+=1)i[A].l(u);u.forEach(r),e=z(p),a=$(p,"STYLE",{});var f=h(a);n=g(f,`.Avatars {
		display: flex;
		padding: 12px;
		gap: 8px;
		flex-flow: row wrap;
	}`),f.forEach(r),this.h()},h(){x(s,"class","Avatars")},m(p,u){d(p,s,u);for(let f=0;f<i.length;f+=1)i[f].m(s,null);d(p,e,u),d(p,a,u),k(a,n),t=!0},p(p,u){if(u&1){c=p[0];let f;for(f=0;f<c.length;f+=1){const A=cs(p,c,f);i[f]?(i[f].p(A,u),w(i[f],1)):(i[f]=is(A),i[f].c(),w(i[f],1),i[f].m(s,null))}for(gs(),f=c.length;f<i.length;f+=1)y(f);vs()}},i(p){if(!t){for(let u=0;u<c.length;u+=1)w(i[u]);t=!0}},o(p){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)C(i[u]);t=!1},d(p){p&&r(s),$s(i,p),p&&r(e),p&&r(a)}}}function Ts(l){let s,e,a,n,t,c,i,y,p,u,f,A,B,q,R,T,G,K,O,Q,W,L,b,M,S,X,H,D,rs=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,V;return b=new hs({props:{mini:!0,$$slots:{default:[Rs]},$$scope:{ctx:l}}}),{c(){s=v("h1"),e=_("InitialsAvatar"),a=I(),n=v("p"),t=_("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u043D\u0430 \u0444\u043E\u043D\u0435 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F). \u0414\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 "),c=v("strong"),i=_("\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),y=_("."),p=I(),u=v("p"),f=_("\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0443\u043B\u0443 "),A=v("code"),B=_("user_id % 6 + 1"),q=_(" (\u0441\u043C. \u0444\u0443\u043D\u043A\u0446\u0438\u044E "),R=v("a"),T=v("code"),G=_("calcInitialsAvatarColor"),K=_(") \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F c id 106 \u0431\u0443\u0434\u0435\u0442 5-\u0439 ("),O=v("code"),Q=_("l-blue"),W=_(") \u0446\u0432\u0435\u0442 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430."),L=I(),j(b.$$.fragment),M=I(),S=v("h2"),X=_("\u041A\u043E\u0434"),H=I(),D=v("pre"),this.h()},l(o){s=$(o,"H1",{id:!0});var m=h(s);e=g(m,"InitialsAvatar"),m.forEach(r),a=z(o),n=$(o,"P",{});var F=h(n);t=g(F,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0432 \u043D\u0430 \u0444\u043E\u043D\u0435 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F). \u0414\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 "),c=$(F,"STRONG",{});var ss=h(c);i=g(ss,"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),ss.forEach(r),y=g(F,"."),F.forEach(r),p=z(o),u=$(o,"P",{});var E=h(u);f=g(E,"\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0443\u043B\u0443 "),A=$(E,"CODE",{});var as=h(A);B=g(as,"user_id % 6 + 1"),as.forEach(r),q=g(E," (\u0441\u043C. \u0444\u0443\u043D\u043A\u0446\u0438\u044E "),R=$(E,"A",{href:!0});var ns=h(R);T=$(ns,"CODE",{});var ts=h(T);G=g(ts,"calcInitialsAvatarColor"),ts.forEach(r),ns.forEach(r),K=g(E,") \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F c id 106 \u0431\u0443\u0434\u0435\u0442 5-\u0439 ("),O=$(E,"CODE",{});var es=h(O);Q=g(es,"l-blue"),es.forEach(r),W=g(E,") \u0446\u0432\u0435\u0442 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430."),E.forEach(r),L=z(o),P(b.$$.fragment,o),M=z(o),S=$(o,"H2",{id:!0});var ps=h(S);X=g(ps,"\u041A\u043E\u0434"),ps.forEach(r),H=z(o),D=$(o,"PRE",{class:!0});var fs=h(D);fs.forEach(r),this.h()},h(){x(s,"id","initialsavatar"),x(R,"href","/VKSUI/utils"),x(S,"id","\u043A\u043E\u0434"),x(D,"class","language-svelte")},m(o,m){d(o,s,m),k(s,e),d(o,a,m),d(o,n,m),k(n,t),k(n,c),k(c,i),k(n,y),d(o,p,m),d(o,u,m),k(u,f),k(u,A),k(A,B),k(u,q),k(u,R),k(R,T),k(T,G),k(u,K),k(u,O),k(O,Q),k(u,W),d(o,L,m),U(b,o,m),d(o,M,m),d(o,S,m),k(S,X),d(o,H,m),d(o,D,m),D.innerHTML=rs,V=!0},p(o,[m]){const F={};m&32&&(F.$$scope={dirty:m,ctx:o}),b.$set(F)},i(o){V||(w(b.$$.fragment,o),V=!0)},o(o){C(b.$$.fragment,o),V=!1},d(o){o&&r(s),o&&r(a),o&&r(n),o&&r(p),o&&r(u),o&&r(L),N(b,o),o&&r(M),o&&r(S),o&&r(H),o&&r(D)}}}function Os(l){return[[16,20,24,28,32,36,40,44,48,56,64,72,80,88,96]]}class js extends Y{constructor(s){super();Z(this,s,Os,Ts,J,{})}}var Ps={props:[{name:"gradientColor",kind:"let",description:`\`'red' | 'pink' | 'orange' | 'yellow' | 'green' | 'l-blue' | 'blue' | 'violet'\`

\u0415\u0441\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u043E\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0432 \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u0445\u0435\u043C\u0435:

1: 'red'

2: 'orange'

3: 'yellow'

4: 'green'

5: 'l-blue'

6: 'violet'`,isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"size",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"shadow",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"}],events:[],typedefs:[]};function Us(l){let s,e,a,n;return s=new js({}),a=new Es({props:{data:Ps}}),{c(){j(s.$$.fragment),e=I(),j(a.$$.fragment)},l(t){P(s.$$.fragment,t),e=z(t),P(a.$$.fragment,t)},m(t,c){U(s,t,c),d(t,e,c),U(a,t,c),n=!0},p:us,i(t){n||(w(s.$$.fragment,t),w(a.$$.fragment,t),n=!0)},o(t){C(s.$$.fragment,t),C(a.$$.fragment,t),n=!1},d(t){N(s,t),t&&r(e),N(a,t)}}}class Ks extends Y{constructor(s){super();Z(this,s,null,Us,J,{})}}export{Ks as default};
