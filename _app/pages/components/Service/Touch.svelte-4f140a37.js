import{S as A,i as B,s as I,e as _,t as x,k as b,w as H,c as $,a as Y,h as E,d as l,m as X,x as L,b as M,g as m,a0 as T,y as z,q as j,o as C,B as P,v as Z,Z as Q,_ as F,Q as R,$ as J,a1 as K}from"../../../chunks/vendor-cd9acbd1.js";import{S as N}from"../../../chunks/Showcase-35d3168e.js";import"../../../chunks/File.svelte_svelte_type_style_lang-fdbb58fb.js";import{T as O}from"../../../chunks/Touch-35c6f896.js";import{H as U}from"../../../chunks/Header-e5422f9f.js";import"../../../chunks/Caption-ec3b02e1.js";import"../../../chunks/Subhead-4d97359e.js";import"../../../chunks/Text-04b50ff1.js";import"../../../chunks/Headline-f418a5e8.js";import"../../../chunks/Title-7352f3c2.js";function W(u){let a;return{c(){a=x("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},l(p){a=E(p,"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},m(p,t){m(p,a,t)},d(p){p&&l(a)}}}function nn(u){let a,p,t,o,v,f,e,w,g;a=new U({props:{mode:"secondary",$$slots:{default:[W]},$$scope:{ctx:u}}});function c(s){u[9](s)}let k={class:"circle",style:`transform: translate(${u[0]}px, ${u[1]}px)`};return u[2]!==void 0&&(k.container=u[2]),o=new O({props:k}),Q.push(()=>F(o,"container",c)),o.$on("end",u[6]),o.$on("move",u[5]),{c(){H(a.$$.fragment),p=b(),t=_("div"),H(o.$$.fragment),f=b(),e=_("style"),w=x(`.container {
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
	}`),this.h()},l(s){L(a.$$.fragment,s),p=X(s),t=$(s,"DIV",{class:!0});var r=Y(t);L(o.$$.fragment,r),r.forEach(l),f=X(s),e=$(s,"STYLE",{});var d=Y(e);w=E(d,`.container {
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
	}`),d.forEach(l),this.h()},h(){M(t,"class","container"),R(t,"limitExceeded",u[4])},m(s,r){z(a,s,r),m(s,p,r),m(s,t,r),z(o,t,null),u[10](t),m(s,f,r),m(s,e,r),T(e,w),g=!0},p(s,r){const d={};r&16384&&(d.$$scope={dirty:r,ctx:s}),a.$set(d);const h={};r&3&&(h.style=`transform: translate(${s[0]}px, ${s[1]}px)`),!v&&r&4&&(v=!0,h.container=s[2],J(()=>v=!1)),o.$set(h),r&16&&R(t,"limitExceeded",s[4])},i(s){g||(j(a.$$.fragment,s),j(o.$$.fragment,s),g=!0)},o(s){C(a.$$.fragment,s),C(o.$$.fragment,s),g=!1},d(s){P(a,s),s&&l(p),s&&l(t),P(o),u[10](null),s&&l(f),s&&l(e)}}}function sn(u){let a,p,t,o,v,f,e,w,g,c,k,s,r,d,h,q=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,y;return c=new N({props:{scroll:!0,$$slots:{default:[nn]},$$scope:{ctx:u}}}),{c(){a=_("h1"),p=x("Touch"),t=b(),o=_("p"),v=x("Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),f=b(),e=_("p"),w=x("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),g=b(),H(c.$$.fragment),k=b(),s=_("h2"),r=x("\u041A\u043E\u0434"),d=b(),h=_("pre"),this.h()},l(n){a=$(n,"H1",{id:!0});var i=Y(a);p=E(i,"Touch"),i.forEach(l),t=X(n),o=$(n,"P",{});var S=Y(o);v=E(S,"Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),S.forEach(l),f=X(n),e=$(n,"P",{});var D=Y(e);w=E(D,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),D.forEach(l),g=X(n),L(c.$$.fragment,n),k=X(n),s=$(n,"H2",{id:!0});var G=Y(s);r=E(G,"\u041A\u043E\u0434"),G.forEach(l),d=X(n),h=$(n,"PRE",{class:!0});var V=Y(h);V.forEach(l),this.h()},h(){M(a,"id","touch"),M(s,"id","\u043A\u043E\u0434"),M(h,"class","language-svelte")},m(n,i){m(n,a,i),T(a,p),m(n,t,i),m(n,o,i),T(o,v),m(n,f,i),m(n,e,i),T(e,w),m(n,g,i),z(c,n,i),m(n,k,i),m(n,s,i),T(s,r),m(n,d,i),m(n,h,i),h.innerHTML=q,y=!0},p(n,[i]){const S={};i&16415&&(S.$$scope={dirty:i,ctx:n}),c.$set(S)},i(n){y||(j(c.$$.fragment,n),y=!0)},o(n){C(c.$$.fragment,n),y=!1},d(n){n&&l(a),n&&l(t),n&&l(o),n&&l(f),n&&l(e),n&&l(g),P(c,n),n&&l(k),n&&l(s),n&&l(d),n&&l(h)}}}function an(u,a,p){let t,o,v,f=0,e=0,w=0,g=0,c=0,k=0;const s=()=>{o&&(p(7,c=o.offsetLeft),p(8,k=o.offsetTop),p(0,f=f>c?c:f<-c?-c:f),p(1,e=e>k?k:e<-k?-k:e),d())};Z(()=>{window.addEventListener("resize",s),document.readyState==="complete"?s():window.addEventListener("load",s)});const r=y=>{let n=w+y.detail.shiftX,i=g+y.detail.shiftY;p(0,f=n>c?c:n<-c?-c:n),p(1,e=i>k?k:i<-k?-k:i)},d=()=>{w=f,g=e};function h(y){o=y,p(2,o)}function q(y){Q[y?"unshift":"push"](()=>{v=y,p(3,v)})}return u.$$.update=()=>{u.$$.dirty&387&&p(4,t=Math.abs(f)>=c||Math.abs(e)>=k)},[f,e,o,v,t,r,d,c,k,h,q]}class tn extends A{constructor(a){super();B(this,a,an,sn,I,{})}}function pn(u){let a,p;return a=new tn({}),{c(){H(a.$$.fragment)},l(t){L(a.$$.fragment,t)},m(t,o){z(a,t,o),p=!0},p:K,i(t){p||(j(a.$$.fragment,t),p=!0)},o(t){C(a.$$.fragment,t),p=!1},d(t){P(a,t)}}}class hn extends A{constructor(a){super();B(this,a,null,pn,I,{})}}export{hn as default};
