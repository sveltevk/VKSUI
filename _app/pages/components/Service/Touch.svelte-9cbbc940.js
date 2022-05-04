import{S as q,i as G,s as R,e as w,t as E,k as b,w as F,c as Y,a as X,h as x,d as c,m as $,x as M,b as C,g as d,T,y as D,q as L,o as H,B as z,v as K,J as B,K as N,a1 as I,L as V,N as O}from"../../../chunks/vendor-049c144f.js";import{S as Q}from"../../../chunks/Showcase-cd097b41.js";import"../../../chunks/File.svelte_svelte_type_style_lang-ffa59218.js";import{T as U}from"../../../chunks/Touch-d6cdb2b5.js";import{H as W}from"../../../chunks/Header-c3f48dee.js";import{A as Z}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Caption-8dcbc303.js";import"../../../chunks/Subhead-2954488f.js";import"../../../chunks/Text-7112c13b.js";import"../../../chunks/Headline-66f6cd6f.js";import"../../../chunks/Title-6d86738a.js";function nn(k){let a;return{c(){a=E("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},l(p){a=x(p,"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},m(p,e){d(p,a,e)},d(p){p&&c(a)}}}function sn(k){let a,p,e,t,o,l,i,_,y;a=new W({props:{mode:"secondary",$$slots:{default:[nn]},$$scope:{ctx:k}}});function u(s){k[9](s)}let m={class:"circle",style:`transform: translate(${k[0]}px, ${k[1]}px)`};return k[2]!==void 0&&(m.container=k[2]),t=new U({props:m}),B.push(()=>N(t,"container",u)),t.$on("end",k[6]),t.$on("move",k[5]),{c(){F(a.$$.fragment),p=b(),e=w("div"),F(t.$$.fragment),l=b(),i=w("style"),_=E(`.container {
		height: 200px;
		border: 8px solid var(--icon_secondary);
		position: relative;
		border-color: var(--icon_secondary);
	}
	.limitExceeded {
		border-color: var(--destructive);
	}

	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}`),this.h()},l(s){M(a.$$.fragment,s),p=$(s),e=Y(s,"DIV",{class:!0});var f=X(e);M(t.$$.fragment,f),f.forEach(c),l=$(s),i=Y(s,"STYLE",{});var h=X(i);_=x(h,`.container {
		height: 200px;
		border: 8px solid var(--icon_secondary);
		position: relative;
		border-color: var(--icon_secondary);
	}
	.limitExceeded {
		border-color: var(--destructive);
	}

	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}`),h.forEach(c),this.h()},h(){C(e,"class","container"),I(e,"limitExceeded",k[4])},m(s,f){D(a,s,f),d(s,p,f),d(s,e,f),D(t,e,null),k[10](e),d(s,l,f),d(s,i,f),T(i,_),y=!0},p(s,f){const h={};f&16384&&(h.$$scope={dirty:f,ctx:s}),a.$set(h);const v={};f&3&&(v.style=`transform: translate(${s[0]}px, ${s[1]}px)`),!o&&f&4&&(o=!0,v.container=s[2],V(()=>o=!1)),t.$set(v),f&16&&I(e,"limitExceeded",s[4])},i(s){y||(L(a.$$.fragment,s),L(t.$$.fragment,s),y=!0)},o(s){H(a.$$.fragment,s),H(t.$$.fragment,s),y=!1},d(s){z(a,s),s&&c(p),s&&c(e),z(t),k[10](null),s&&c(l),s&&c(i)}}}function an(k){let a,p,e,t,o,l,i,_,y,u,m,s,f,h,v,P=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getContext<span class="token punctuation">,</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Touch<span class="token punctuation">,</span> Header <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> container<span class="token punctuation">;</span>
	<span class="token keyword">let</span> block<span class="token punctuation">;</span>

	<span class="token keyword">let</span> shiftX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> shiftY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> startX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> startY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> limitX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> limitY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">resize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			limitX <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
			limitY <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
			shiftX <span class="token operator">=</span> shiftX <span class="token operator">></span> limitX <span class="token operator">?</span> limitX <span class="token operator">:</span> shiftX <span class="token operator">&lt;</span> <span class="token operator">-</span>limitX <span class="token operator">?</span> <span class="token operator">-</span>limitX <span class="token operator">:</span> shiftX<span class="token punctuation">;</span>
			shiftY <span class="token operator">=</span> shiftY <span class="token operator">></span> limitY <span class="token operator">?</span> limitY <span class="token operator">:</span> shiftY <span class="token operator">&lt;</span> <span class="token operator">-</span>limitY <span class="token operator">?</span> <span class="token operator">-</span>limitY <span class="token operator">:</span> shiftY<span class="token punctuation">;</span>
			<span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">'complete'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
			window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">let</span> newShiftX <span class="token operator">=</span> startX <span class="token operator">+</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>shiftX<span class="token punctuation">;</span>
		<span class="token keyword">let</span> newShiftY <span class="token operator">=</span> startY <span class="token operator">+</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>shiftY<span class="token punctuation">;</span>

		shiftX <span class="token operator">=</span> newShiftX <span class="token operator">></span> limitX <span class="token operator">?</span> limitX <span class="token operator">:</span> newShiftX <span class="token operator">&lt;</span> <span class="token operator">-</span>limitX <span class="token operator">?</span> <span class="token operator">-</span>limitX <span class="token operator">:</span> newShiftX<span class="token punctuation">;</span>
		shiftY <span class="token operator">=</span> newShiftY <span class="token operator">></span> limitY <span class="token operator">?</span> limitY <span class="token operator">:</span> newShiftY <span class="token operator">&lt;</span> <span class="token operator">-</span>limitY <span class="token operator">?</span> <span class="token operator">-</span>limitY <span class="token operator">:</span> newShiftY<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onEnd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		startX <span class="token operator">=</span> shiftX<span class="token punctuation">;</span>
		startY <span class="token operator">=</span> shiftY<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token literal-property property">$</span><span class="token operator">:</span> limitExceeded <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>shiftX<span class="token punctuation">)</span> <span class="token operator">>=</span> limitX <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>shiftY<span class="token punctuation">)</span> <span class="token operator">>=</span> limitY<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">&#125;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">class:</span>limitExceeded</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Touch</span>
		<span class="token attr-name"><span class="token namespace">bind:</span>container</span>
		<span class="token attr-name"><span class="token namespace">on:</span>end=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onEnd<span class="token punctuation">&#125;</span></span>
		<span class="token attr-name"><span class="token namespace">on:</span>move=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onMove<span class="token punctuation">&#125;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span>
		<span class="token attr-name">style=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">transform: translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>shiftX<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>shiftY<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">px)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span>
	<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 8px solid <span class="token function">var</span><span class="token punctuation">(</span>--icon_secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--icon_secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token selector">.limitExceeded</span> <span class="token punctuation">&#123;</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--destructive<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token selector">.circle</span> <span class="token punctuation">&#123;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
		<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
		<span class="token property">margin-top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,g;return u=new Q({props:{scroll:!0,$$slots:{default:[sn]},$$scope:{ctx:k}}}),{c(){a=w("h1"),p=E("Touch"),e=b(),t=w("p"),o=E("Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),l=b(),i=w("p"),_=E("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),y=b(),F(u.$$.fragment),m=b(),s=w("h2"),f=E("\u041A\u043E\u0434"),h=b(),v=w("pre"),this.h()},l(n){a=Y(n,"H1",{id:!0});var r=X(a);p=x(r,"Touch"),r.forEach(c),e=$(n),t=Y(n,"P",{});var S=X(t);o=x(S,"Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),S.forEach(c),l=$(n),i=Y(n,"P",{});var j=X(i);_=x(j,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),j.forEach(c),y=$(n),M(u.$$.fragment,n),m=$(n),s=Y(n,"H2",{id:!0});var A=X(s);f=x(A,"\u041A\u043E\u0434"),A.forEach(c),h=$(n),v=Y(n,"PRE",{class:!0});var J=X(v);J.forEach(c),this.h()},h(){C(a,"id","touch"),C(s,"id","\u043A\u043E\u0434"),C(v,"class","language-svelte")},m(n,r){d(n,a,r),T(a,p),d(n,e,r),d(n,t,r),T(t,o),d(n,l,r),d(n,i,r),T(i,_),d(n,y,r),D(u,n,r),d(n,m,r),d(n,s,r),T(s,f),d(n,h,r),d(n,v,r),v.innerHTML=P,g=!0},p(n,[r]){const S={};r&16415&&(S.$$scope={dirty:r,ctx:n}),u.$set(S)},i(n){g||(L(u.$$.fragment,n),g=!0)},o(n){H(u.$$.fragment,n),g=!1},d(n){n&&c(a),n&&c(e),n&&c(t),n&&c(l),n&&c(i),n&&c(y),z(u,n),n&&c(m),n&&c(s),n&&c(h),n&&c(v)}}}function tn(k,a,p){let e,t,o,l=0,i=0,_=0,y=0,u=0,m=0;const s=()=>{t&&(p(7,u=t.offsetLeft),p(8,m=t.offsetTop),p(0,l=l>u?u:l<-u?-u:l),p(1,i=i>m?m:i<-m?-m:i),h())};K(()=>{window.addEventListener("resize",s),document.readyState==="complete"?s():window.addEventListener("load",s)});const f=g=>{let n=_+g.detail.shiftX,r=y+g.detail.shiftY;p(0,l=n>u?u:n<-u?-u:n),p(1,i=r>m?m:r<-m?-m:r)},h=()=>{_=l,y=i};function v(g){t=g,p(2,t)}function P(g){B[g?"unshift":"push"](()=>{o=g,p(3,o)})}return k.$$.update=()=>{k.$$.dirty&387&&p(4,e=Math.abs(l)>=u||Math.abs(i)>=m)},[l,i,t,o,e,f,h,u,m,v,P]}class pn extends q{constructor(a){super();G(this,a,tn,an,R,{})}}var on={props:[{name:"component",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"usePointerHover",kind:"let",description:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C onEnter \u0438 onLeave \u0447\u0435\u0440\u0435\u0437 pointer-events - \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 disabled-\u0438\u043D\u043F\u0443\u0442\u0430\u0445",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"useCapture",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"slideThreshold",kind:"let",type:"number",value:"5",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"noSlideClick",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"stopPropagation",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"container",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!0}],slots:[{name:"__default__",default:!0,slot_props:"{}"}],events:[{type:"dispatched",name:"enter"},{type:"dispatched",name:"leave"},{type:"dispatched",name:"click"}],typedefs:[],rest_props:{type:"InlineComponent",name:"svelte:component"}};function en(k){let a,p,e,t;return a=new pn({}),e=new Z({props:{data:on}}),{c(){F(a.$$.fragment),p=b(),F(e.$$.fragment)},l(o){M(a.$$.fragment,o),p=$(o),M(e.$$.fragment,o)},m(o,l){D(a,o,l),d(o,p,l),D(e,o,l),t=!0},p:O,i(o){t||(L(a.$$.fragment,o),L(e.$$.fragment,o),t=!0)},o(o){H(a.$$.fragment,o),H(e.$$.fragment,o),t=!1},d(o){z(a,o),o&&c(p),z(e,o)}}}class gn extends q{constructor(a){super();G(this,a,null,en,R,{})}}export{gn as default};
