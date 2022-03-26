import{S as lt,i as ct,s as it,e,t,k,c as o,a as l,h as p,d as s,m as r,b as H,g as i,T as a,N as En}from"../chunks/vendor-ad41e947.js";function ut(at){let h,Ka,Pa,I,xa,ma,O,N,G,Na,Ga,C,Xa,X,Ya,$a,Y,Qa,Fa,Da,T,st=`<code class="language-svelte"><span class="token comment">&lt;!-- Main.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ConfigProvider<span class="token punctuation">,</span> AdaptivityProvider<span class="token punctuation">,</span> AppRoot <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span></code>`,Ta,g,Ja,$,Za,as,Q,ss,ns,Wa,L,F,ts,ps,J,es,os,Ma,W,nt=`<code class="language-svelte"><span class="token comment">&lt;!-- App.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> AppRoot<span class="token punctuation">,</span> SplitLayout<span class="token punctuation">,</span> SplitCol<span class="token punctuation">,</span> Panel <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppRoot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitLayout</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitCol</span> <span class="token attr-name">width=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">280</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span><span class="token punctuation">></span></span>Navigation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitCol</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitCol</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span><span class="token punctuation">></span></span>Profile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitCol</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitLayout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppRoot</span><span class="token punctuation">></span></span></code>`,Va,P,ls,Z,cs,is,Ra,M,tt=`<code class="language-svelte"><span class="token comment">&lt;!-- App.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
		AppRoot<span class="token punctuation">,</span>
		SplitLayout<span class="token punctuation">,</span>
		SplitCol<span class="token punctuation">,</span>
		Panel<span class="token punctuation">,</span>
		PanelHeader<span class="token punctuation">,</span>
		useAdaptivity<span class="token punctuation">,</span>
		ViewWidth
	<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> adaptivity <span class="token operator">=</span> <span class="token function">useAdaptivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppRoot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitLayout</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> $adaptivity<span class="token punctuation">.</span>viewWidth <span class="token operator">>=</span> ViewWidth<span class="token punctuation">.</span><span class="token constant">SMALL_TABLET</span><span class="token punctuation">&#125;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeader</span> <span class="token attr-name">separator=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
			<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>

		<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> $adaptivity<span class="token punctuation">.</span>viewWidth <span class="token operator">===</span> ViewWidth<span class="token punctuation">.</span><span class="token constant">DESKTOP</span><span class="token punctuation">&#125;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitCol</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>280px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span><span class="token punctuation">></span></span>Navigation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitCol</span><span class="token punctuation">></span></span>
		<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitCol</span>
			<span class="token attr-name">spaced</span><span class="token attr-value"><span class="token punctuation">=</span>&#123;$adaptivity.viewWidth</span> <span class="token punctuation">></span></span>= ViewWidth.SMALL_TABLET&#125;
			animate=<span class="token language-javascript"><span class="token punctuation">&#123;</span>$adaptivity<span class="token punctuation">.</span>viewWidth <span class="token operator">&lt;=</span> ViewWidth<span class="token punctuation">.</span><span class="token constant">MOBILE</span><span class="token punctuation">&#125;</span></span>
		>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span><span class="token punctuation">></span></span>Profile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitCol</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitLayout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppRoot</span><span class="token punctuation">></span></span></code>`,Ba,m,aa,sa,us,ks,y,w,rs,na,ds,vs,ta,Es,fs,gs,A,_s,pa,hs,Cs,ea,Ls,ys,ws,V,As,oa,Ss,Os,Ha,R,Ps,Ia,u,ms,la,Ds,Ts,ca,Ws,Ms,ia,Vs,Rs,ua,Bs,Hs,ka,Is,zs,ra,js,Us,B,bs,qs,za,_,f,da,Ks,xs,va,Ns,Gs,Ea,Xs,Ys,fa,$s,Qs,v,ga,Fs,Js,_a,Zs,an,ha,sn,nn,Ca,tn,pn,La,en,on,ya,ln,cn,S,wa,un,kn,Aa,rn,dn,Sa,vn;return{c(){h=e("h1"),Ka=t("\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"),Pa=k(),I=e("p"),xa=t("\u041E\u0434\u043D\u043E \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432 VKUI \u2014 \u044D\u0442\u043E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C. \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u0442 \u0440\u0430\u0437\u043D\u044B\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432: \u043F\u043E\u0434 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B. \u041E\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u043C\u044B\u0448\u043A\u0438, \u0432\u044B\u0441\u043E\u0442\u044B \u0438 \u0448\u0438\u0440\u0438\u043D\u044B \u044D\u043A\u0440\u0430\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043E\u043A, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435. \u0412 \u044D\u0442\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435 \u043C\u044B \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u043C, \u043A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0430\u0448 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u044B\u043C."),ma=k(),O=e("blockquote"),N=e("p"),G=e("strong"),Na=t("\u0412\u0430\u0436\u043D\u043E"),Ga=k(),C=e("p"),Xa=t("\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 "),X=e("code"),Ya=t("AdaptivityProvider"),$a=t(" \u0438 "),Y=e("code"),Qa=t("useAdaptivity()"),Fa=t(" \u0432 \u043E\u0434\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435(\u0444\u0430\u0439\u043B\u0435)"),Da=k(),T=e("pre"),Ta=k(),g=e("p"),Ja=t("\u0414\u0430\u043B\u0435\u0435, \u043D\u0443\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),$=e("code"),Za=t("SplitLayout"),as=t(" \u0438 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D "),Q=e("code"),ss=t("SplitCol"),ns=t("."),Wa=k(),L=e("p"),F=e("code"),ts=t("SplitLayout"),ps=t(" \u2014 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u0430 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438. "),J=e("code"),es=t("SplitCol"),os=t(" \u2014 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043A\u0438."),Ma=k(),W=e("pre"),Va=k(),P=e("p"),ls=t("\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u043E. \u0422\u0435\u043F\u0435\u0440\u044C \u043D\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E, \u0447\u0442\u043E \u043B\u0435\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u043D\u0443\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445. \u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u043C \u0432 AdaptivityProvider \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0442\u043E\u0434\u043E\u043C "),Z=e("code"),cs=t("useAdaptivity()"),is=t("."),Ra=k(),M=e("pre"),Ba=k(),m=e("blockquote"),aa=e("p"),sa=e("strong"),us=t("\u041D\u044E\u0430\u043D\u0441\u044B"),ks=k(),y=e("ul"),w=e("li"),rs=t("\u0421\u043B\u043E\u0442 "),na=e("code"),ds=t("header"),vs=t(" \u0432 "),ta=e("code"),Es=t("SplitLayout"),fs=t(" \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043A\u0432\u043E\u0437\u043D\u043E\u0439 \u0448\u0430\u043F\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A (\u0438\u043B\u0438 \u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439)"),gs=k(),A=e("li"),_s=t("\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u0445 "),pa=e("code"),hs=t("ViewWidth.TABLET"),Cs=t(" \u0438 \u0431\u043E\u043B\u0435\u0435 ("),ea=e("code"),Ls=t("SplitCol.animate"),ys=t(")"),ws=k(),V=e("li"),As=t("\u0415\u0441\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A, \u0442\u043E \u0443 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F\u044B (\u0432 \u0442\u0440\u0451\u0445-\u043A\u043E\u043B\u043E\u043D\u043E\u0447\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u044D\u0442\u043E \u043E\u0434\u043D\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430) ("),oa=e("code"),Ss=t("SplitCol.spaced"),Os=t(")"),Ha=k(),R=e("h2"),Ps=t("\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438"),Ia=k(),u=e("p"),ms=t("\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0431\u0430\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0447\u0435\u0442\u044B\u0440\u0451\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u0445: "),la=e("code"),Ds=t("viewWidth"),Ts=t(", "),ca=e("code"),Ws=t("viewHeight"),Ms=t(", "),ia=e("code"),Vs=t("sizeX"),Rs=t(", "),ua=e("code"),Bs=t("sizeY"),Hs=t(". \u042D\u0442\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0432 "),ka=e("code"),Is=t("AdaptivityProvider"),zs=t(", \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043D\u0438\u043C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0442\u043E\u0434 "),ra=e("code"),js=t("useAdaptivity()"),Us=t(", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 "),B=e("a"),bs=t("\u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"),qs=t("."),za=k(),_=e("ul"),f=e("li"),da=e("code"),Ks=t("sizeX"),xs=t(" \u0438 "),va=e("code"),Ns=t("sizeY"),Gs=t(" \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "),Ea=e("code"),Xs=t("SizeType.REGULAR"),Ys=t(" | "),fa=e("code"),$s=t("SizeType.COMPACT"),Qs=k(),v=e("li"),ga=e("code"),Fs=t("viewWidth"),Js=t(" \u2014 "),_a=e("code"),Zs=t("ViewWidth.SMALL_MOBILE"),an=t(" | "),ha=e("code"),sn=t("ViewWidth.MOBILE"),nn=t(" | "),Ca=e("code"),tn=t("ViewWidth.SMALL_TABLET"),pn=t(" | "),La=e("code"),en=t("ViewWidth.TABLET"),on=t(" | "),ya=e("code"),ln=t("ViewWidth.DESKTOP"),cn=k(),S=e("li"),wa=e("code"),un=t("viewHeight"),kn=t(" \u2014 "),Aa=e("code"),rn=t("ViewHeight.SMALL"),dn=t(" | "),Sa=e("code"),vn=t("ViewHeight.MEDIUM"),this.h()},l(n){h=o(n,"H1",{id:!0});var c=l(h);Ka=p(c,"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"),c.forEach(s),Pa=r(n),I=o(n,"P",{});var fn=l(I);xa=p(fn,"\u041E\u0434\u043D\u043E \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432 VKUI \u2014 \u044D\u0442\u043E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C. \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u0442 \u0440\u0430\u0437\u043D\u044B\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432: \u043F\u043E\u0434 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B. \u041E\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u043C\u044B\u0448\u043A\u0438, \u0432\u044B\u0441\u043E\u0442\u044B \u0438 \u0448\u0438\u0440\u0438\u043D\u044B \u044D\u043A\u0440\u0430\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043E\u043A, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u043E\u0440\u043C \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435. \u0412 \u044D\u0442\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435 \u043C\u044B \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u043C, \u043A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0430\u0448 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u044B\u043C."),fn.forEach(s),ma=r(n),O=o(n,"BLOCKQUOTE",{});var ja=l(O);N=o(ja,"P",{});var gn=l(N);G=o(gn,"STRONG",{});var _n=l(G);Na=p(_n,"\u0412\u0430\u0436\u043D\u043E"),_n.forEach(s),gn.forEach(s),Ga=r(ja),C=o(ja,"P",{});var z=l(C);Xa=p(z,"\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 "),X=o(z,"CODE",{});var hn=l(X);Ya=p(hn,"AdaptivityProvider"),hn.forEach(s),$a=p(z," \u0438 "),Y=o(z,"CODE",{});var Cn=l(Y);Qa=p(Cn,"useAdaptivity()"),Cn.forEach(s),Fa=p(z," \u0432 \u043E\u0434\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435(\u0444\u0430\u0439\u043B\u0435)"),z.forEach(s),ja.forEach(s),Da=r(n),T=o(n,"PRE",{class:!0});var pt=l(T);pt.forEach(s),Ta=r(n),g=o(n,"P",{});var j=l(g);Ja=p(j,"\u0414\u0430\u043B\u0435\u0435, \u043D\u0443\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),$=o(j,"CODE",{});var Ln=l($);Za=p(Ln,"SplitLayout"),Ln.forEach(s),as=p(j," \u0438 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D "),Q=o(j,"CODE",{});var yn=l(Q);ss=p(yn,"SplitCol"),yn.forEach(s),ns=p(j,"."),j.forEach(s),Wa=r(n),L=o(n,"P",{});var Oa=l(L);F=o(Oa,"CODE",{});var wn=l(F);ts=p(wn,"SplitLayout"),wn.forEach(s),ps=p(Oa," \u2014 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442-\u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u0430 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438. "),J=o(Oa,"CODE",{});var An=l(J);es=p(An,"SplitCol"),An.forEach(s),os=p(Oa," \u2014 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043A\u0438."),Oa.forEach(s),Ma=r(n),W=o(n,"PRE",{class:!0});var et=l(W);et.forEach(s),Va=r(n),P=o(n,"P",{});var Ua=l(P);ls=p(Ua,"\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u043E. \u0422\u0435\u043F\u0435\u0440\u044C \u043D\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E, \u0447\u0442\u043E \u043B\u0435\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u043D\u0443\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445. \u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u043C \u0432 AdaptivityProvider \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0442\u043E\u0434\u043E\u043C "),Z=o(Ua,"CODE",{});var Sn=l(Z);cs=p(Sn,"useAdaptivity()"),Sn.forEach(s),is=p(Ua,"."),Ua.forEach(s),Ra=r(n),M=o(n,"PRE",{class:!0});var ot=l(M);ot.forEach(s),Ba=r(n),m=o(n,"BLOCKQUOTE",{});var ba=l(m);aa=o(ba,"P",{});var On=l(aa);sa=o(On,"STRONG",{});var Pn=l(sa);us=p(Pn,"\u041D\u044E\u0430\u043D\u0441\u044B"),Pn.forEach(s),On.forEach(s),ks=r(ba),y=o(ba,"UL",{});var U=l(y);w=o(U,"LI",{});var b=l(w);rs=p(b,"\u0421\u043B\u043E\u0442 "),na=o(b,"CODE",{});var mn=l(na);ds=p(mn,"header"),mn.forEach(s),vs=p(b," \u0432 "),ta=o(b,"CODE",{});var Dn=l(ta);Es=p(Dn,"SplitLayout"),Dn.forEach(s),fs=p(b," \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043A\u0432\u043E\u0437\u043D\u043E\u0439 \u0448\u0430\u043F\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A (\u0438\u043B\u0438 \u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439)"),b.forEach(s),gs=r(U),A=o(U,"LI",{});var q=l(A);_s=p(q,"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u0445 "),pa=o(q,"CODE",{});var Tn=l(pa);hs=p(Tn,"ViewWidth.TABLET"),Tn.forEach(s),Cs=p(q," \u0438 \u0431\u043E\u043B\u0435\u0435 ("),ea=o(q,"CODE",{});var Wn=l(ea);Ls=p(Wn,"SplitCol.animate"),Wn.forEach(s),ys=p(q,")"),q.forEach(s),ws=r(U),V=o(U,"LI",{});var qa=l(V);As=p(qa,"\u0415\u0441\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A, \u0442\u043E \u0443 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F\u044B (\u0432 \u0442\u0440\u0451\u0445-\u043A\u043E\u043B\u043E\u043D\u043E\u0447\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u044D\u0442\u043E \u043E\u0434\u043D\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430) ("),oa=o(qa,"CODE",{});var Mn=l(oa);Ss=p(Mn,"SplitCol.spaced"),Mn.forEach(s),Os=p(qa,")"),qa.forEach(s),U.forEach(s),ba.forEach(s),Ha=r(n),R=o(n,"H2",{id:!0});var Vn=l(R);Ps=p(Vn,"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438"),Vn.forEach(s),Ia=r(n),u=o(n,"P",{});var d=l(u);ms=p(d,"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0431\u0430\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0447\u0435\u0442\u044B\u0440\u0451\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u0445: "),la=o(d,"CODE",{});var Rn=l(la);Ds=p(Rn,"viewWidth"),Rn.forEach(s),Ts=p(d,", "),ca=o(d,"CODE",{});var Bn=l(ca);Ws=p(Bn,"viewHeight"),Bn.forEach(s),Ms=p(d,", "),ia=o(d,"CODE",{});var Hn=l(ia);Vs=p(Hn,"sizeX"),Hn.forEach(s),Rs=p(d,", "),ua=o(d,"CODE",{});var In=l(ua);Bs=p(In,"sizeY"),In.forEach(s),Hs=p(d,". \u042D\u0442\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0432 "),ka=o(d,"CODE",{});var zn=l(ka);Is=p(zn,"AdaptivityProvider"),zn.forEach(s),zs=p(d,", \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043D\u0438\u043C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0442\u043E\u0434 "),ra=o(d,"CODE",{});var jn=l(ra);js=p(jn,"useAdaptivity()"),jn.forEach(s),Us=p(d,", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 "),B=o(d,"A",{href:!0,rel:!0});var Un=l(B);bs=p(Un,"\u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"),Un.forEach(s),qs=p(d,"."),d.forEach(s),za=r(n),_=o(n,"UL",{});var K=l(_);f=o(K,"LI",{});var D=l(f);da=o(D,"CODE",{});var bn=l(da);Ks=p(bn,"sizeX"),bn.forEach(s),xs=p(D," \u0438 "),va=o(D,"CODE",{});var qn=l(va);Ns=p(qn,"sizeY"),qn.forEach(s),Gs=p(D," \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "),Ea=o(D,"CODE",{});var Kn=l(Ea);Xs=p(Kn,"SizeType.REGULAR"),Kn.forEach(s),Ys=p(D," | "),fa=o(D,"CODE",{});var xn=l(fa);$s=p(xn,"SizeType.COMPACT"),xn.forEach(s),D.forEach(s),Qs=r(K),v=o(K,"LI",{});var E=l(v);ga=o(E,"CODE",{});var Nn=l(ga);Fs=p(Nn,"viewWidth"),Nn.forEach(s),Js=p(E," \u2014 "),_a=o(E,"CODE",{});var Gn=l(_a);Zs=p(Gn,"ViewWidth.SMALL_MOBILE"),Gn.forEach(s),an=p(E," | "),ha=o(E,"CODE",{});var Xn=l(ha);sn=p(Xn,"ViewWidth.MOBILE"),Xn.forEach(s),nn=p(E," | "),Ca=o(E,"CODE",{});var Yn=l(Ca);tn=p(Yn,"ViewWidth.SMALL_TABLET"),Yn.forEach(s),pn=p(E," | "),La=o(E,"CODE",{});var $n=l(La);en=p($n,"ViewWidth.TABLET"),$n.forEach(s),on=p(E," | "),ya=o(E,"CODE",{});var Qn=l(ya);ln=p(Qn,"ViewWidth.DESKTOP"),Qn.forEach(s),E.forEach(s),cn=r(K),S=o(K,"LI",{});var x=l(S);wa=o(x,"CODE",{});var Fn=l(wa);un=p(Fn,"viewHeight"),Fn.forEach(s),kn=p(x," \u2014 "),Aa=o(x,"CODE",{});var Jn=l(Aa);rn=p(Jn,"ViewHeight.SMALL"),Jn.forEach(s),dn=p(x," | "),Sa=o(x,"CODE",{});var Zn=l(Sa);vn=p(Zn,"ViewHeight.MEDIUM"),Zn.forEach(s),x.forEach(s),K.forEach(s),this.h()},h(){H(h,"id","\u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"),H(T,"class","language-svelte"),H(W,"class","language-svelte"),H(M,"class","language-svelte"),H(R,"id","\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435-\u0434\u0435\u0442\u0430\u043B\u0438"),H(B,"href","https://svelte.dev/docs#run-time-svelte-store"),H(B,"rel","nofollow")},m(n,c){i(n,h,c),a(h,Ka),i(n,Pa,c),i(n,I,c),a(I,xa),i(n,ma,c),i(n,O,c),a(O,N),a(N,G),a(G,Na),a(O,Ga),a(O,C),a(C,Xa),a(C,X),a(X,Ya),a(C,$a),a(C,Y),a(Y,Qa),a(C,Fa),i(n,Da,c),i(n,T,c),T.innerHTML=st,i(n,Ta,c),i(n,g,c),a(g,Ja),a(g,$),a($,Za),a(g,as),a(g,Q),a(Q,ss),a(g,ns),i(n,Wa,c),i(n,L,c),a(L,F),a(F,ts),a(L,ps),a(L,J),a(J,es),a(L,os),i(n,Ma,c),i(n,W,c),W.innerHTML=nt,i(n,Va,c),i(n,P,c),a(P,ls),a(P,Z),a(Z,cs),a(P,is),i(n,Ra,c),i(n,M,c),M.innerHTML=tt,i(n,Ba,c),i(n,m,c),a(m,aa),a(aa,sa),a(sa,us),a(m,ks),a(m,y),a(y,w),a(w,rs),a(w,na),a(na,ds),a(w,vs),a(w,ta),a(ta,Es),a(w,fs),a(y,gs),a(y,A),a(A,_s),a(A,pa),a(pa,hs),a(A,Cs),a(A,ea),a(ea,Ls),a(A,ys),a(y,ws),a(y,V),a(V,As),a(V,oa),a(oa,Ss),a(V,Os),i(n,Ha,c),i(n,R,c),a(R,Ps),i(n,Ia,c),i(n,u,c),a(u,ms),a(u,la),a(la,Ds),a(u,Ts),a(u,ca),a(ca,Ws),a(u,Ms),a(u,ia),a(ia,Vs),a(u,Rs),a(u,ua),a(ua,Bs),a(u,Hs),a(u,ka),a(ka,Is),a(u,zs),a(u,ra),a(ra,js),a(u,Us),a(u,B),a(B,bs),a(u,qs),i(n,za,c),i(n,_,c),a(_,f),a(f,da),a(da,Ks),a(f,xs),a(f,va),a(va,Ns),a(f,Gs),a(f,Ea),a(Ea,Xs),a(f,Ys),a(f,fa),a(fa,$s),a(_,Qs),a(_,v),a(v,ga),a(ga,Fs),a(v,Js),a(v,_a),a(_a,Zs),a(v,an),a(v,ha),a(ha,sn),a(v,nn),a(v,Ca),a(Ca,tn),a(v,pn),a(v,La),a(La,en),a(v,on),a(v,ya),a(ya,ln),a(_,cn),a(_,S),a(S,wa),a(wa,un),a(S,kn),a(S,Aa),a(Aa,rn),a(S,dn),a(S,Sa),a(Sa,vn)},p:En,i:En,o:En,d(n){n&&s(h),n&&s(Pa),n&&s(I),n&&s(ma),n&&s(O),n&&s(Da),n&&s(T),n&&s(Ta),n&&s(g),n&&s(Wa),n&&s(L),n&&s(Ma),n&&s(W),n&&s(Va),n&&s(P),n&&s(Ra),n&&s(M),n&&s(Ba),n&&s(m),n&&s(Ha),n&&s(R),n&&s(Ia),n&&s(u),n&&s(za),n&&s(_)}}}class rt extends lt{constructor(h){super();ct(this,h,null,ut,it,{})}}export{rt as default};
