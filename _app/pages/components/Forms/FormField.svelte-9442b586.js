import{S as J,i as K,s as Q,e as d,t as f,k as D,w,c as g,a as h,h as $,d as o,m as G,x as E,b as x,g as m,L as i,y as b,q as I,o as C,B as L,M as X}from"../../../chunks/vendor-e275372f.js";import{S as Z}from"../../../chunks/Showcase-22f52de2.js";import"../../../chunks/File.svelte_svelte_type_style_lang-f559d5ad.js";import{G as nn}from"../../../chunks/Group-84d8e684.js";import{F as sn}from"../../../chunks/FormItem-b9f17217.js";import{F as tn}from"../../../chunks/FormLayout-476b00d8.js";import{F as an}from"../../../chunks/FormField-951966d2.js";import"../../../chunks/Caption-cce6cb91.js";import"../../../chunks/Subhead-7310ead1.js";import"../../../chunks/IconButton-dd2e7abe.js";import"../../../chunks/Tappable-3fe2f36b.js";import"../../../chunks/Touch-b77d496a.js";function pn(l){let n;return{c(){n=d("input"),this.h()},l(a){n=g(a,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){x(n,"type","text"),x(n,"class","CustomInput"),x(n,"placeholder","\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0438\u043D\u043F\u0443\u0442")},m(a,s){m(a,n,s)},d(a){a&&o(n)}}}function en(l){let n,a;return n=new an({props:{$$slots:{default:[pn]},$$scope:{ctx:l}}}),{c(){w(n.$$.fragment)},l(s){E(n.$$.fragment,s)},m(s,p){b(n,s,p),a=!0},p(s,p){const c={};p&1&&(c.$$scope={dirty:p,ctx:s}),n.$set(c)},i(s){a||(I(n.$$.fragment,s),a=!0)},o(s){C(n.$$.fragment,s),a=!1},d(s){L(n,s)}}}function on(l){let n,a;return n=new sn({props:{$$slots:{default:[en]},$$scope:{ctx:l}}}),{c(){w(n.$$.fragment)},l(s){E(n.$$.fragment,s)},m(s,p){b(n,s,p),a=!0},p(s,p){const c={};p&1&&(c.$$scope={dirty:p,ctx:s}),n.$set(c)},i(s){a||(I(n.$$.fragment,s),a=!0)},o(s){C(n.$$.fragment,s),a=!1},d(s){L(n,s)}}}function cn(l){let n,a;return n=new tn({props:{$$slots:{default:[on]},$$scope:{ctx:l}}}),n.$on("submit",rn),{c(){w(n.$$.fragment)},l(s){E(n.$$.fragment,s)},m(s,p){b(n,s,p),a=!0},p(s,p){const c={};p&1&&(c.$$scope={dirty:p,ctx:s}),n.$set(c)},i(s){a||(I(n.$$.fragment,s),a=!0)},o(s){C(n.$$.fragment,s),a=!1},d(s){L(n,s)}}}function ln(l){let n,a,s,p,c;return n=new nn({props:{$$slots:{default:[cn]},$$scope:{ctx:l}}}),{c(){w(n.$$.fragment),a=D(),s=d("style"),p=f(`.CustomInput {
		position: relative;
		display: block;
		width: 100%;
		margin: 0;
		padding: 11px;
		font-size: ;
		line-height: 19px;
		text-overflow: ellipsis;
		color: #000;
		border: none;
		background: transparent;
		z-index: 2;
	}`)},l(e){E(n.$$.fragment,e),a=G(e),s=g(e,"STYLE",{});var r=h(s);p=$(r,`.CustomInput {
		position: relative;
		display: block;
		width: 100%;
		margin: 0;
		padding: 11px;
		font-size: ;
		line-height: 19px;
		text-overflow: ellipsis;
		color: #000;
		border: none;
		background: transparent;
		z-index: 2;
	}`),r.forEach(o)},m(e,r){b(n,e,r),m(e,a,r),m(e,s,r),i(s,p),c=!0},p(e,r){const F={};r&1&&(F.$$scope={dirty:r,ctx:e}),n.$set(F)},i(e){c||(I(n.$$.fragment,e),c=!0)},o(e){C(n.$$.fragment,e),c=!1},d(e){L(n,e),e&&o(a),e&&o(s)}}}function un(l){let n,a,s,p,c,e,r,F,S,P,j,z,q,R,T,_,H,y,A,M,v,V=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> FormField<span class="token punctuation">,</span> FormItem<span class="token punctuation">,</span> FormLayout<span class="token punctuation">,</span> Group <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormLayout</span>
		<span class="token attr-name"><span class="token namespace">on:</span>submit=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
			e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
	<span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormField</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CustomInput<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0438\u043D\u043F\u0443\u0442<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormField</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormLayout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.CustomInput</span> <span class="token punctuation">&#123;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
		<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
		<span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,O;return _=new Z({props:{scroll:!0,$$slots:{default:[ln]},$$scope:{ctx:l}}}),{c(){n=d("h1"),a=f("FormField"),s=D(),p=d("p"),c=f("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),e=d("code"),r=f("Input"),F=f(", "),S=d("code"),P=f("Select"),j=f(", "),z=d("code"),q=f("Textarea"),R=f(" \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),T=D(),w(_.$$.fragment),H=D(),y=d("h2"),A=f("\u041A\u043E\u0434"),M=D(),v=d("pre"),this.h()},l(t){n=g(t,"H1",{id:!0});var u=h(n);a=$(u,"FormField"),u.forEach(o),s=G(t),p=g(t,"P",{});var k=h(p);c=$(k,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),e=g(k,"CODE",{});var B=h(e);r=$(B,"Input"),B.forEach(o),F=$(k,", "),S=g(k,"CODE",{});var N=h(S);P=$(N,"Select"),N.forEach(o),j=$(k,", "),z=g(k,"CODE",{});var U=h(z);q=$(U,"Textarea"),U.forEach(o),R=$(k," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),k.forEach(o),T=G(t),E(_.$$.fragment,t),H=G(t),y=g(t,"H2",{id:!0});var Y=h(y);A=$(Y,"\u041A\u043E\u0434"),Y.forEach(o),M=G(t),v=g(t,"PRE",{class:!0});var W=h(v);W.forEach(o),this.h()},h(){x(n,"id","formfield"),x(y,"id","\u043A\u043E\u0434"),x(v,"class","language-svelte")},m(t,u){m(t,n,u),i(n,a),m(t,s,u),m(t,p,u),i(p,c),i(p,e),i(e,r),i(p,F),i(p,S),i(S,P),i(p,j),i(p,z),i(z,q),i(p,R),m(t,T,u),b(_,t,u),m(t,H,u),m(t,y,u),i(y,A),m(t,M,u),m(t,v,u),v.innerHTML=V,O=!0},p(t,[u]){const k={};u&1&&(k.$$scope={dirty:u,ctx:t}),_.$set(k)},i(t){O||(I(_.$$.fragment,t),O=!0)},o(t){C(_.$$.fragment,t),O=!1},d(t){t&&o(n),t&&o(s),t&&o(p),t&&o(T),L(_,t),t&&o(H),t&&o(y),t&&o(M),t&&o(v)}}}const rn=l=>{l.preventDefault()};class kn extends J{constructor(n){super();K(this,n,null,un,Q,{})}}function mn(l){let n,a;return n=new kn({}),{c(){w(n.$$.fragment)},l(s){E(n.$$.fragment,s)},m(s,p){b(n,s,p),a=!0},p:X,i(s){a||(I(n.$$.fragment,s),a=!0)},o(s){C(n.$$.fragment,s),a=!1},d(s){L(n,s)}}}class bn extends J{constructor(n){super();K(this,n,null,mn,Q,{})}}export{bn as default};
