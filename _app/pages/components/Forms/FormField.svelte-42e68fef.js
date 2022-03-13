import{S as Y,i as J,s as K,e as d,t as m,k as D,w as h,c as g,a as v,h as $,d as l,m as S,x,b as z,g as k,O as i,y as w,q as b,o as E,B as I,W as X}from"../../../chunks/vendor-bc1c7f53.js";import{S as Z}from"../../../chunks/Showcase-42ab1a50.js";import"../../../chunks/File.svelte_svelte_type_style_lang-f5b0839d.js";import{G as nn}from"../../../chunks/Group-8e9fa137.js";import{F as sn}from"../../../chunks/FormItem-ae7120e3.js";import{F as tn}from"../../../chunks/FormLayout-9fc8d0b2.js";import{F as an}from"../../../chunks/FormField-596155f8.js";import{A as en}from"../../../chunks/APIDocs-5431d725.js";import"../../../chunks/Caption-64885989.js";import"../../../chunks/Separator-f8f5c552.js";import"../../../chunks/Subhead-8832b802.js";import"../../../chunks/IconButton-6a835198.js";import"../../../chunks/Tappable-84ceecc8.js";import"../../../chunks/Touch-3b1b7c1d.js";function pn(c){let n;return{c(){n=d("input"),this.h()},l(p){n=g(p,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){z(n,"type","text"),z(n,"class","CustomInput"),z(n,"placeholder","\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0438\u043D\u043F\u0443\u0442")},m(p,s){k(p,n,s)},d(p){p&&l(n)}}}function on(c){let n,p;return n=new an({props:{$$slots:{default:[pn]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function ln(c){let n,p;return n=new sn({props:{$$slots:{default:[on]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function cn(c){let n,p;return n=new tn({props:{$$slots:{default:[ln]},$$scope:{ctx:c}}}),n.$on("submit",kn),{c(){h(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,t){w(n,s,t),p=!0},p(s,t){const a={};t&1&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){p||(b(n.$$.fragment,s),p=!0)},o(s){E(n.$$.fragment,s),p=!1},d(s){I(n,s)}}}function un(c){let n,p,s,t,a;return n=new nn({props:{$$slots:{default:[cn]},$$scope:{ctx:c}}}),{c(){h(n.$$.fragment),p=D(),s=d("style"),t=m(`.CustomInput {
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
	}`),r.forEach(l)},m(o,r){w(n,o,r),k(o,p,r),k(o,s,r),i(s,t),a=!0},p(o,r){const C={};r&1&&(C.$$scope={dirty:r,ctx:o}),n.$set(C)},i(o){a||(b(n.$$.fragment,o),a=!0)},o(o){E(n.$$.fragment,o),a=!1},d(o){I(n,o),o&&l(p),o&&l(s)}}}function rn(c){let n,p,s,t,a,o,r,C,L,H,j,G,q,M,T,_,O,y,R,P,F,Q=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,A;return _=new Z({props:{scroll:!0,$$slots:{default:[un]},$$scope:{ctx:c}}}),{c(){n=d("h1"),p=m("FormField"),s=D(),t=d("p"),a=m("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),o=d("code"),r=m("Input"),C=m(", "),L=d("code"),H=m("Select"),j=m(", "),G=d("code"),q=m("Textarea"),M=m(" \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),T=D(),h(_.$$.fragment),O=D(),y=d("h2"),R=m("\u041A\u043E\u0434"),P=D(),F=d("pre"),this.h()},l(e){n=g(e,"H1",{id:!0});var u=v(n);p=$(u,"FormField"),u.forEach(l),s=S(e),t=g(e,"P",{});var f=v(t);a=$(f,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C ("),o=g(f,"CODE",{});var B=v(o);r=$(B,"Input"),B.forEach(l),C=$(f,", "),L=g(f,"CODE",{});var N=v(L);H=$(N,"Select"),N.forEach(l),j=$(f,", "),G=g(f,"CODE",{});var U=v(G);q=$(U,"Textarea"),U.forEach(l),M=$(f," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435)."),f.forEach(l),T=S(e),x(_.$$.fragment,e),O=S(e),y=g(e,"H2",{id:!0});var W=v(y);R=$(W,"\u041A\u043E\u0434"),W.forEach(l),P=S(e),F=g(e,"PRE",{class:!0});var V=v(F);V.forEach(l),this.h()},h(){z(n,"id","formfield"),z(y,"id","\u043A\u043E\u0434"),z(F,"class","language-svelte")},m(e,u){k(e,n,u),i(n,p),k(e,s,u),k(e,t,u),i(t,a),i(t,o),i(o,r),i(t,C),i(t,L),i(L,H),i(t,j),i(t,G),i(G,q),i(t,M),k(e,T,u),w(_,e,u),k(e,O,u),k(e,y,u),i(y,R),k(e,P,u),k(e,F,u),F.innerHTML=Q,A=!0},p(e,[u]){const f={};u&1&&(f.$$scope={dirty:u,ctx:e}),_.$set(f)},i(e){A||(b(_.$$.fragment,e),A=!0)},o(e){E(_.$$.fragment,e),A=!1},d(e){e&&l(n),e&&l(s),e&&l(t),e&&l(T),I(_,e),e&&l(O),e&&l(y),e&&l(P),e&&l(F)}}}const kn=c=>{c.preventDefault()};class fn extends Y{constructor(n){super();J(this,n,null,rn,K,{})}}var mn={props:[{name:"component",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"disabled",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"after",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"after",default:!1,fallback:"{after}",slot_props:"{}"}],events:[{type:"forwarded",name:"click",element:"svelte:component"}],typedefs:[],rest_props:{type:"InlineComponent",name:"svelte:component"}};function $n(c){let n,p,s,t;return n=new fn({}),s=new en({props:{data:mn}}),{c(){h(n.$$.fragment),p=D(),h(s.$$.fragment)},l(a){x(n.$$.fragment,a),p=S(a),x(s.$$.fragment,a)},m(a,o){w(n,a,o),k(a,p,o),w(s,a,o),t=!0},p:X,i(a){t||(b(n.$$.fragment,a),b(s.$$.fragment,a),t=!0)},o(a){E(n.$$.fragment,a),E(s.$$.fragment,a),t=!1},d(a){I(n,a),a&&l(p),I(s,a)}}}class Sn extends Y{constructor(n){super();J(this,n,null,$n,K,{})}}export{Sn as default};
