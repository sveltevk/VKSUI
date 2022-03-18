import{S as J,i as K,s as Q,e as d,t as m,k as C,w as h,c as g,a as v,h as $,d as l,m as S,x,b as z,g as k,T as i,y as w,q as b,o as E,B as I,N as X}from"../../../chunks/vendor-5b7ee37b.js";import{S as Z}from"../../../chunks/Showcase-99463763.js";import"../../../chunks/File.svelte_svelte_type_style_lang-56a031c4.js";import{G as nn}from"../../../chunks/Group-7eef567e.js";import{F as sn}from"../../../chunks/FormItem-920d83c9.js";import{F as tn}from"../../../chunks/FormLayout-ebb4b4c7.js";import{F as an}from"../../../chunks/FormField-17db39f8.js";import{A as en}from"../../../chunks/APIDocs-6f0684b7.js";import"../../../chunks/Caption-c18e7195.js";import"../../../chunks/Separator-a9a7ff73.js";import"../../../chunks/Subhead-b597bfa9.js";import"../../../chunks/IconButton-ec12fd04.js";import"../../../chunks/Tappable-a779c8bd.js";import"../../../chunks/Touch-8e5c70b6.js";function pn(c){let n;return{c(){n=d("input"),this.h()},l(p){n=g(p,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){z(n,"type","text"),z(n,"class","CustomInput"),z(n,"placeholder","\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0438\u043D\u043F\u0443\u0442")},m(p,s){k(p,n,s)},d(p){p&&l(n)}}}function on(c){let n,p;return n=new an({props:{$$slots:{default:[pn]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function ln(c){let n,p;return n=new sn({props:{$$slots:{default:[on]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function cn(c){let n,p;return n=new tn({props:{$$slots:{default:[ln]},$$scope:{ctx:c}}}),n.$on("submit",kn),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function un(c){let n,p,s,t,a;return n=new nn({props:{$$slots:{default:[cn]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment),p=C(),s=d("style"),t=m(`.CustomInput {
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
	}`)},l(o){x(n.$$.fragment,o),p=S(o),s=g(o,"STYLE",{});var r=v(s);t=$(r,`.CustomInput {
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
	}`),r.forEach(l)},m(o,r){w(n,o,r),k(o,p,r),k(o,s,r),i(s,t),a=!0},p(o,r){const D={};r&1&&(D.$$scope={dirty:r,ctx:o}),n.$set(D)},i(o){a||(b(n.$$.fragment,o),a=!0)},o(o){E(n.$$.fragment,o),a=!1},d(o){I(n,o),o&&l(p),o&&l(s)}}}function rn(c){let n,p,s,t,a,o,r,D,L,O,j,T,q,M,G,_,A,y,N,P,F,V=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,H;return _=new Z({props:{scroll:!0,$$slots:{default:[un]},$$scope:{ctx:c}}}),{c(){n=d("h1"),p=m("FormField"),s=C(),t=d("p"),a=m("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),o=d("code"),r=m("Input"),D=m(", "),L=d("code"),O=m("Select"),j=m(", "),T=d("code"),q=m("Textarea"),M=m(" \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),G=C(),h(_.$$.fragment),A=C(),y=d("h2"),N=m("\u041A\u043E\u0434"),P=C(),F=d("pre"),this.h()},l(e){n=g(e,"H1",{id:!0});var u=v(n);p=$(u,"FormField"),u.forEach(l),s=S(e),t=g(e,"P",{});var f=v(t);a=$(f,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),o=g(f,"CODE",{});var R=v(o);r=$(R,"Input"),R.forEach(l),D=$(f,", "),L=g(f,"CODE",{});var B=v(L);O=$(B,"Select"),B.forEach(l),j=$(f,", "),T=g(f,"CODE",{});var U=v(T);q=$(U,"Textarea"),U.forEach(l),M=$(f," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),f.forEach(l),G=S(e),x(_.$$.fragment,e),A=S(e),y=g(e,"H2",{id:!0});var Y=v(y);N=$(Y,"\u041A\u043E\u0434"),Y.forEach(l),P=S(e),F=g(e,"PRE",{class:!0});var W=v(F);W.forEach(l),this.h()},h(){z(n,"id","formfield"),z(y,"id","\u043A\u043E\u0434"),z(F,"class","language-svelte")},m(e,u){k(e,n,u),i(n,p),k(e,s,u),k(e,t,u),i(t,a),i(t,o),i(o,r),i(t,D),i(t,L),i(L,O),i(t,j),i(t,T),i(T,q),i(t,M),k(e,G,u),w(_,e,u),k(e,A,u),k(e,y,u),i(y,N),k(e,P,u),k(e,F,u),F.innerHTML=V,H=!0},p(e,[u]){const f={};u&1&&(f.$$scope={dirty:u,ctx:e}),_.$set(f)},i(e){H||(b(_.$$.fragment,e),H=!0)},o(e){E(_.$$.fragment,e),H=!1},d(e){e&&l(n),e&&l(s),e&&l(t),e&&l(G),I(_,e),e&&l(A),e&&l(y),e&&l(P),e&&l(F)}}}const kn=c=>{c.preventDefault()};class fn extends J{constructor(n){super();K(this,n,null,rn,Q,{})}}var mn={props:[{name:"component",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"disabled",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"after",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"hasAfter",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"after",default:!1,fallback:"{after}",slot_props:"{}"}],events:[{type:"forwarded",name:"click",element:"svelte:component"}],typedefs:[],rest_props:{type:"InlineComponent",name:"svelte:component"}};function $n(c){let n,p,s,t;return n=new fn({}),s=new en({props:{data:mn}}),{c(){h(n.$$.fragment),p=C(),h(s.$$.fragment)},l(a){x(n.$$.fragment,a),p=S(a),x(s.$$.fragment,a)},m(a,o){w(n,a,o),k(a,p,o),w(s,a,o),t=!0},p:X,i(a){t||(b(n.$$.fragment,a),b(s.$$.fragment,a),t=!0)},o(a){E(n.$$.fragment,a),E(s.$$.fragment,a),t=!1},d(a){I(n,a),a&&l(p),I(s,a)}}}class Sn extends J{constructor(n){super();K(this,n,null,$n,Q,{})}}export{Sn as default};
