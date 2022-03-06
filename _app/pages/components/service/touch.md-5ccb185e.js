import{S as O,i as R,s as A,e as _,t as x,k as b,w as L,c as Y,a as X,h as E,d as c,m as $,x as z,b as M,g as d,O as T,y as j,q as C,o as P,B as q,v as F,a0 as D,a1 as J,V as B,a2 as K}from"../../../chunks/vendor-bba0ddf7.js";import{S as N}from"../../../chunks/Showcase-d2949add.js";import"../../../chunks/File.svelte_svelte_type_style_lang-5b87c95b.js";import{T as Q}from"../../../chunks/Touch-efc69be4.js";import{H as U}from"../../../chunks/Header-f9c30042.js";function W(k){let t;return{c(){t=x("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},l(p){t=E(p,"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},m(p,i){d(p,t,i)},d(p){p&&c(t)}}}function Z(k){let t,p,i,a,v,f,o,w,g;t=new U({props:{mode:"secondary",$$slots:{default:[W]},$$scope:{ctx:k}}});function e(s){k[9](s)}let r={class:"circle",style:`transform: translate(${k[0]}px, ${k[1]}px)`};return k[2]!==void 0&&(r.container=k[2]),a=new Q({props:r}),D.push(()=>J(a,"container",e)),a.$on("end",k[6]),a.$on("move",k[5]),{c(){L(t.$$.fragment),p=b(),i=_("div"),L(a.$$.fragment),f=b(),o=_("style"),w=x(`.container {
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
	}`),this.h()},l(s){z(t.$$.fragment,s),p=$(s),i=Y(s,"DIV",{class:!0});var u=X(i);z(a.$$.fragment,u),u.forEach(c),f=$(s),o=Y(s,"STYLE",{});var m=X(o);w=E(m,`.container {
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
	}`),m.forEach(c),this.h()},h(){M(i,"class","container"),B(i,"limitExceeded",k[4])},m(s,u){j(t,s,u),d(s,p,u),d(s,i,u),j(a,i,null),k[10](i),d(s,f,u),d(s,o,u),T(o,w),g=!0},p(s,u){const m={};u&16384&&(m.$$scope={dirty:u,ctx:s}),t.$set(m);const h={};u&3&&(h.style=`transform: translate(${s[0]}px, ${s[1]}px)`),!v&&u&4&&(v=!0,h.container=s[2],K(()=>v=!1)),a.$set(h),u&16&&B(i,"limitExceeded",s[4])},i(s){g||(C(t.$$.fragment,s),C(a.$$.fragment,s),g=!0)},o(s){P(t.$$.fragment,s),P(a.$$.fragment,s),g=!1},d(s){q(t,s),s&&c(p),s&&c(i),q(a),k[10](null),s&&c(f),s&&c(o)}}}function nn(k){let t,p,i,a,v,f,o,w,g,e,r,s,u,m,h,H=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,y;return e=new N({props:{scroll:!0,$$slots:{default:[Z]},$$scope:{ctx:k}}}),{c(){t=_("h1"),p=x("Touch"),i=b(),a=_("p"),v=x("Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),f=b(),o=_("p"),w=x("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),g=b(),L(e.$$.fragment),r=b(),s=_("h2"),u=x("\u041A\u043E\u0434"),m=b(),h=_("pre"),this.h()},l(n){t=Y(n,"H1",{id:!0});var l=X(t);p=E(l,"Touch"),l.forEach(c),i=$(n),a=Y(n,"P",{});var S=X(a);v=E(S,"Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),S.forEach(c),f=$(n),o=Y(n,"P",{});var G=X(o);w=E(G,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),G.forEach(c),g=$(n),z(e.$$.fragment,n),r=$(n),s=Y(n,"H2",{id:!0});var V=X(s);u=E(V,"\u041A\u043E\u0434"),V.forEach(c),m=$(n),h=Y(n,"PRE",{class:!0});var I=X(h);I.forEach(c),this.h()},h(){M(t,"id","touch"),M(s,"id","\u043A\u043E\u0434"),M(h,"class","language-svelte")},m(n,l){d(n,t,l),T(t,p),d(n,i,l),d(n,a,l),T(a,v),d(n,f,l),d(n,o,l),T(o,w),d(n,g,l),j(e,n,l),d(n,r,l),d(n,s,l),T(s,u),d(n,m,l),d(n,h,l),h.innerHTML=H,y=!0},p(n,[l]){const S={};l&16415&&(S.$$scope={dirty:l,ctx:n}),e.$set(S)},i(n){y||(C(e.$$.fragment,n),y=!0)},o(n){P(e.$$.fragment,n),y=!1},d(n){n&&c(t),n&&c(i),n&&c(a),n&&c(f),n&&c(o),n&&c(g),q(e,n),n&&c(r),n&&c(s),n&&c(m),n&&c(h)}}}function sn(k,t,p){let i,a,v,f=0,o=0,w=0,g=0,e=0,r=0;const s=()=>{a&&(p(7,e=a.offsetLeft),p(8,r=a.offsetTop),p(0,f=f>e?e:f<-e?-e:f),p(1,o=o>r?r:o<-r?-r:o),m())};F(()=>{window.addEventListener("resize",s),document.readyState==="complete"?s():window.addEventListener("load",s)});const u=y=>{let n=w+y.detail.shiftX,l=g+y.detail.shiftY;p(0,f=n>e?e:n<-e?-e:n),p(1,o=l>r?r:l<-r?-r:l)},m=()=>{w=f,g=o};function h(y){a=y,p(2,a)}function H(y){D[y?"unshift":"push"](()=>{v=y,p(3,v)})}return k.$$.update=()=>{k.$$.dirty&387&&p(4,i=Math.abs(f)>=e||Math.abs(o)>=r)},[f,o,a,v,i,u,m,e,r,h,H]}class cn extends O{constructor(t){super();R(this,t,sn,nn,A,{})}}export{cn as default};
