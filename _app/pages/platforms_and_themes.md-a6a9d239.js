import{S as Cn,i as An,s as On,e as o,t,k as r,c,a as u,h as p,d as s,m as i,b as k,g as l,T as n,N as Ks}from"../chunks/vendor-049c144f.js";function bn(rn){let _,La,oa,N,Ua,ca,S,ha,ua,f,xa,W,Na,ja,$,Ma,Va,z,Ba,Ga,F,Ia,Qa,J,Wa,$a,ra,P,X,Y,za,Fa,m,Ja,Z,Xa,Ya,D,Za,as,ia,g,kn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppRoot</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleCell</span><span class="token punctuation">></span></span>\u042D\u0442\u0430 \u044F\u0447\u0435\u0439\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0442\u043E\u0447\u044C \u0432 \u0442\u043E\u0447\u044C \u043A\u0430\u043A \u0432 iOS \u043A\u043B\u0438\u0435\u043D\u0442\u0435 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SimpleCell</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppRoot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span></code>`,ka,E,ss,aa,ns,ts,j,ps,es,fa,C,sa,na,ls,os,H,cs,R,us,rs,va,q,is,da,v,ks,ta,fs,vs,y,ds,Es,pa,_s,ms,Ea,T,Ps,_a,M,Cs,ma,w,fn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">appearance</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppRoot</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleCell</span><span class="token punctuation">></span></span>\u0412\u0435\u0447\u0435\u0440\u0435\u0435\u0442...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SimpleCell</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppRoot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AdaptivityProvider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span></code>`,Pa,K,As,Ca,A,Os,ea,bs,Ss,Aa,L,vn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppearanceProvider</span> <span class="token attr-name">appearance</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>className<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Snackbar</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F<span class="token punctuation">"</span></span> <span class="token attr-name">class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>className<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Snackbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppearanceProvider</span><span class="token punctuation">></span></span></code>`,Oa,U,Ds,ba,V,gs,Sa,h,Hs,Da,B,Rs,ga,O,qs,la,ys,Ts,Ha,x,dn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> appearance <span class="token operator">=</span> <span class="token function">useAppearance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Div</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>$appearance <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'Out of the blue'</span> <span class="token operator">:</span> <span class="token string">'And into the black'</span><span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Div</span><span class="token punctuation">></span></span></code>`,Ra,G,ws;return{c(){_=o("h1"),La=t("\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0438 \u0442\u0435\u043C\u044B"),oa=r(),N=o("p"),Ua=t("\u041A\u0430\u043A \u0443\u0436\u0435 \u0431\u044B\u043B\u043E \u0441\u043A\u0430\u0437\u0430\u043D\u043E \u0440\u0430\u043D\u0435\u0435, VKSUI \u043C\u043E\u0436\u0435\u0442 \u043C\u0438\u043C\u0438\u043A\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0434 \u0434\u0438\u0437\u0430\u0439\u043D\u044B \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u0439 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0442\u043B\u0438\u0447\u0438\u043C\u044B \u043E\u0442 \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432."),ca=r(),S=o("h2"),ha=t("\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),ua=r(),f=o("p"),xa=t("\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F 3 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u2014 "),W=o("code"),Na=t("ios"),ja=t(", "),$=o("code"),Ma=t("android"),Va=t(" \u0438 "),z=o("code"),Ba=t("vkcom"),Ga=t(". \u0414\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0435\u0451 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 "),F=o("code"),Ia=t("ConfigProvider"),Qa=t(" \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 "),J=o("code"),Wa=t("platform"),$a=t("."),ra=r(),P=o("blockquote"),X=o("p"),Y=o("strong"),za=t("\u0412\u0430\u0436\u043D\u043E"),Fa=r(),m=o("p"),Ja=t("\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 "),Z=o("code"),Xa=t("android"),Ya=t(". \u0422\u0430\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u2014 \u044D\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u0435. \u042D\u0442\u0443 \u0442\u0435\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438 \u0432 Android \u043A\u043B\u0438\u0435\u043D\u0442, \u043D\u043E \u0438 \u0434\u043B\u044F "),D=o("a"),Za=t("m.vk.com"),as=t(". \u041E\u043D\u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 standalone-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (\u0442\u043E \u0435\u0441\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u0430\u043A \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F)"),ia=r(),g=o("pre"),ka=r(),E=o("p"),ss=t("\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 "),aa=o("code"),ns=t("usePlatform"),ts=t(". \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u044D\u0442\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0432 "),j=o("a"),ps=t("\u0443\u0442\u0438\u043B\u0438\u0442\u0430\u0445"),es=t("."),fa=r(),C=o("blockquote"),sa=o("p"),na=o("strong"),ls=t("\u0412\u0430\u0436\u043D\u043E"),os=r(),H=o("p"),cs=t("\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 vkcom \u043D\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0435\u0451 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u0432 \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u043D\u044B\u0439 "),R=o("a"),us=t("vk.com"),rs=t("."),va=r(),q=o("h3"),is=t("\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),da=r(),v=o("p"),ks=t("\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0432 "),ta=o("code"),fs=t("ConfigProvider"),vs=t(" \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. \u042D\u0442\u043E\u0442 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0443\u043C\u0435\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0435\u0451 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0435\u0439\u0441 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0438\u043D\u0438-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 "),y=o("a"),ds=t("vk.com"),Es=t(". \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u043A\u0430 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u044F\u0432\u043D\u043E. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 query-\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 "),pa=o("code"),_s=t("vk_platform"),ms=t("."),Ea=r(),T=o("h2"),Ps=t("\u0422\u0435\u043C\u044B"),_a=r(),M=o("p"),Cs=t("\u0423 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0435\u0441\u0442\u044C \u0434\u0432\u0435 \u0442\u0435\u043C\u044B: \u0441\u0432\u0435\u0442\u043B\u0430\u044F (light) \u0438 \u0442\u0451\u043C\u043D\u0430\u044F (dark). \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432 \u0435\u0451 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E appearance \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ConfigProvider."),ma=r(),w=o("pre"),Pa=r(),K=o("h3"),As=t("\u041F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"),Ca=r(),A=o("p"),Os=t("\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0442\u043E \u044D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 "),ea=o("code"),bs=t("AppearanceProvider"),Ss=t("."),Aa=r(),L=o("pre"),Oa=r(),U=o("h3"),Ds=t("\u041E\u0442\u043A\u0443\u0434\u0430 \u0432\u0437\u044F\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u043F\u0440\u0438 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438?"),ba=r(),V=o("p"),gs=t("\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 iOS \u0438\u043B\u0438 Android \u043A\u043B\u0438\u0435\u043D\u0442\u044B, \u0442\u043E \u0442\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 vk-bridge. \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043C\u0438\u043D\u0438-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 VKWebAppUpdateConfig. \u0412 \u0434\u0430\u043D\u043D\u044B\u0445 \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u043E\u043C\u0438\u043C\u043E \u043F\u0440\u043E\u0447\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 appearance, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0442\u0435\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430."),Sa=r(),h=o("h3"),Hs=t("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0432 \u043A\u043E\u0434\u0435"),Da=r(),B=o("p"),Rs=t("\u0423 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u044B \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 appearance, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u0442\u0451\u043C\u043D\u0430\u044F \u043E\u043D\u0430 \u0438\u043B\u0438 \u0441\u0432\u0435\u0442\u043B\u0430\u044F. \u0412 \u043A\u043E\u0434\u0435 \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043E\u043F\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430."),ga=r(),O=o("p"),qs=t("\u0415\u0433\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 "),la=o("code"),ys=t("useAppearance()"),Ts=t(":"),Ha=r(),x=o("pre"),Ra=r(),G=o("p"),ws=t("Appearance \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0437\u0430\u043C\u0435\u043D\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0432 \u0442\u0435\u043C\u043D\u044B\u0445 \u0442\u0435\u043C\u0430\u0445."),this.h()},l(a){_=c(a,"H1",{id:!0});var e=u(_);La=p(e,"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0438 \u0442\u0435\u043C\u044B"),e.forEach(s),oa=i(a),N=c(a,"P",{});var Ls=u(N);Ua=p(Ls,"\u041A\u0430\u043A \u0443\u0436\u0435 \u0431\u044B\u043B\u043E \u0441\u043A\u0430\u0437\u0430\u043D\u043E \u0440\u0430\u043D\u0435\u0435, VKSUI \u043C\u043E\u0436\u0435\u0442 \u043C\u0438\u043C\u0438\u043A\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0434 \u0434\u0438\u0437\u0430\u0439\u043D\u044B \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u0439 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0442\u043B\u0438\u0447\u0438\u043C\u044B \u043E\u0442 \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432."),Ls.forEach(s),ca=i(a),S=c(a,"H2",{id:!0});var Us=u(S);ha=p(Us,"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),Us.forEach(s),ua=i(a),f=c(a,"P",{});var d=u(f);xa=p(d,"\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F 3 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u2014 "),W=c(d,"CODE",{});var hs=u(W);Na=p(hs,"ios"),hs.forEach(s),ja=p(d,", "),$=c(d,"CODE",{});var xs=u($);Ma=p(xs,"android"),xs.forEach(s),Va=p(d," \u0438 "),z=c(d,"CODE",{});var Ns=u(z);Ba=p(Ns,"vkcom"),Ns.forEach(s),Ga=p(d,". \u0414\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0435\u0451 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 "),F=c(d,"CODE",{});var js=u(F);Ia=p(js,"ConfigProvider"),js.forEach(s),Qa=p(d," \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 "),J=c(d,"CODE",{});var Ms=u(J);Wa=p(Ms,"platform"),Ms.forEach(s),$a=p(d,"."),d.forEach(s),ra=i(a),P=c(a,"BLOCKQUOTE",{});var qa=u(P);X=c(qa,"P",{});var Vs=u(X);Y=c(Vs,"STRONG",{});var Bs=u(Y);za=p(Bs,"\u0412\u0430\u0436\u043D\u043E"),Bs.forEach(s),Vs.forEach(s),Fa=i(qa),m=c(qa,"P",{});var I=u(m);Ja=p(I,"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 "),Z=c(I,"CODE",{});var Gs=u(Z);Xa=p(Gs,"android"),Gs.forEach(s),Ya=p(I,". \u0422\u0430\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u2014 \u044D\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u0435. \u042D\u0442\u0443 \u0442\u0435\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438 \u0432 Android \u043A\u043B\u0438\u0435\u043D\u0442, \u043D\u043E \u0438 \u0434\u043B\u044F "),D=c(I,"A",{href:!0,rel:!0});var Is=u(D);Za=p(Is,"m.vk.com"),Is.forEach(s),as=p(I,". \u041E\u043D\u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 standalone-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (\u0442\u043E \u0435\u0441\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u0430\u043A \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F)"),I.forEach(s),qa.forEach(s),ia=i(a),g=c(a,"PRE",{class:!0});var En=u(g);En.forEach(s),ka=i(a),E=c(a,"P",{});var Q=u(E);ss=p(Q,"\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 "),aa=c(Q,"CODE",{});var Qs=u(aa);ns=p(Qs,"usePlatform"),Qs.forEach(s),ts=p(Q,". \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u044D\u0442\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0432 "),j=c(Q,"A",{href:!0});var Ws=u(j);ps=p(Ws,"\u0443\u0442\u0438\u043B\u0438\u0442\u0430\u0445"),Ws.forEach(s),es=p(Q,"."),Q.forEach(s),fa=i(a),C=c(a,"BLOCKQUOTE",{});var ya=u(C);sa=c(ya,"P",{});var $s=u(sa);na=c($s,"STRONG",{});var zs=u(na);ls=p(zs,"\u0412\u0430\u0436\u043D\u043E"),zs.forEach(s),$s.forEach(s),os=i(ya),H=c(ya,"P",{});var Ta=u(H);cs=p(Ta,"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 vkcom \u043D\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0435\u0451 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u0432 \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u043D\u044B\u0439 "),R=c(Ta,"A",{href:!0,rel:!0});var Fs=u(R);us=p(Fs,"vk.com"),Fs.forEach(s),rs=p(Ta,"."),Ta.forEach(s),ya.forEach(s),va=i(a),q=c(a,"H3",{id:!0});var Js=u(q);is=p(Js,"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),Js.forEach(s),da=i(a),v=c(a,"P",{});var b=u(v);ks=p(b,"\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0432 "),ta=c(b,"CODE",{});var Xs=u(ta);fs=p(Xs,"ConfigProvider"),Xs.forEach(s),vs=p(b," \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. \u042D\u0442\u043E\u0442 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0443\u043C\u0435\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0435\u0451 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0435\u0439\u0441 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0438\u043D\u0438-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 "),y=c(b,"A",{href:!0,rel:!0});var Ys=u(y);ds=p(Ys,"vk.com"),Ys.forEach(s),Es=p(b,". \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u043A\u0430 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u044F\u0432\u043D\u043E. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 query-\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 "),pa=c(b,"CODE",{});var Zs=u(pa);_s=p(Zs,"vk_platform"),Zs.forEach(s),ms=p(b,"."),b.forEach(s),Ea=i(a),T=c(a,"H2",{id:!0});var an=u(T);Ps=p(an,"\u0422\u0435\u043C\u044B"),an.forEach(s),_a=i(a),M=c(a,"P",{});var sn=u(M);Cs=p(sn,"\u0423 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0435\u0441\u0442\u044C \u0434\u0432\u0435 \u0442\u0435\u043C\u044B: \u0441\u0432\u0435\u0442\u043B\u0430\u044F (light) \u0438 \u0442\u0451\u043C\u043D\u0430\u044F (dark). \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432 \u0435\u0451 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E appearance \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ConfigProvider."),sn.forEach(s),ma=i(a),w=c(a,"PRE",{class:!0});var _n=u(w);_n.forEach(s),Pa=i(a),K=c(a,"H3",{id:!0});var nn=u(K);As=p(nn,"\u041F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"),nn.forEach(s),Ca=i(a),A=c(a,"P",{});var wa=u(A);Os=p(wa,"\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0442\u043E \u044D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 "),ea=c(wa,"CODE",{});var tn=u(ea);bs=p(tn,"AppearanceProvider"),tn.forEach(s),Ss=p(wa,"."),wa.forEach(s),Aa=i(a),L=c(a,"PRE",{class:!0});var mn=u(L);mn.forEach(s),Oa=i(a),U=c(a,"H3",{id:!0});var pn=u(U);Ds=p(pn,"\u041E\u0442\u043A\u0443\u0434\u0430 \u0432\u0437\u044F\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u043F\u0440\u0438 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438?"),pn.forEach(s),ba=i(a),V=c(a,"P",{});var en=u(V);gs=p(en,"\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 iOS \u0438\u043B\u0438 Android \u043A\u043B\u0438\u0435\u043D\u0442\u044B, \u0442\u043E \u0442\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 vk-bridge. \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043C\u0438\u043D\u0438-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 VKWebAppUpdateConfig. \u0412 \u0434\u0430\u043D\u043D\u044B\u0445 \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u043E\u043C\u0438\u043C\u043E \u043F\u0440\u043E\u0447\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 appearance, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0442\u0435\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430."),en.forEach(s),Sa=i(a),h=c(a,"H3",{id:!0});var ln=u(h);Hs=p(ln,"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0432 \u043A\u043E\u0434\u0435"),ln.forEach(s),Da=i(a),B=c(a,"P",{});var on=u(B);Rs=p(on,"\u0423 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u044B \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 appearance, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u0442\u0451\u043C\u043D\u0430\u044F \u043E\u043D\u0430 \u0438\u043B\u0438 \u0441\u0432\u0435\u0442\u043B\u0430\u044F. \u0412 \u043A\u043E\u0434\u0435 \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043E\u043F\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430."),on.forEach(s),ga=i(a),O=c(a,"P",{});var Ka=u(O);qs=p(Ka,"\u0415\u0433\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 "),la=c(Ka,"CODE",{});var cn=u(la);ys=p(cn,"useAppearance()"),cn.forEach(s),Ts=p(Ka,":"),Ka.forEach(s),Ha=i(a),x=c(a,"PRE",{class:!0});var Pn=u(x);Pn.forEach(s),Ra=i(a),G=c(a,"P",{});var un=u(G);ws=p(un,"Appearance \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0437\u0430\u043C\u0435\u043D\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0432 \u0442\u0435\u043C\u043D\u044B\u0445 \u0442\u0435\u043C\u0430\u0445."),un.forEach(s),this.h()},h(){k(_,"id","\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B-\u0438-\u0442\u0435\u043C\u044B"),k(S,"id","\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),k(D,"href","https://m.vk.com"),k(D,"rel","nofollow"),k(g,"class","language-svelte"),k(j,"href","utils"),k(R,"href","https://vk.com"),k(R,"rel","nofollow"),k(q,"id","\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435-\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"),k(y,"href","https://vk.com"),k(y,"rel","nofollow"),k(T,"id","\u0442\u0435\u043C\u044B"),k(w,"class","language-svelte"),k(K,"id","\u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0442\u0435\u043C\u044B-\u0434\u043B\u044F-\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"),k(L,"class","language-svelte"),k(U,"id","\u043E\u0442\u043A\u0443\u0434\u0430-\u0432\u0437\u044F\u0442\u044C-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435-\u0442\u0435\u043C\u044B-\u043F\u0440\u0438-\u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438"),k(h,"id","\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0442\u0435\u043C\u044B-\u0432-\u043A\u043E\u0434\u0435"),k(x,"class","language-svelte")},m(a,e){l(a,_,e),n(_,La),l(a,oa,e),l(a,N,e),n(N,Ua),l(a,ca,e),l(a,S,e),n(S,ha),l(a,ua,e),l(a,f,e),n(f,xa),n(f,W),n(W,Na),n(f,ja),n(f,$),n($,Ma),n(f,Va),n(f,z),n(z,Ba),n(f,Ga),n(f,F),n(F,Ia),n(f,Qa),n(f,J),n(J,Wa),n(f,$a),l(a,ra,e),l(a,P,e),n(P,X),n(X,Y),n(Y,za),n(P,Fa),n(P,m),n(m,Ja),n(m,Z),n(Z,Xa),n(m,Ya),n(m,D),n(D,Za),n(m,as),l(a,ia,e),l(a,g,e),g.innerHTML=kn,l(a,ka,e),l(a,E,e),n(E,ss),n(E,aa),n(aa,ns),n(E,ts),n(E,j),n(j,ps),n(E,es),l(a,fa,e),l(a,C,e),n(C,sa),n(sa,na),n(na,ls),n(C,os),n(C,H),n(H,cs),n(H,R),n(R,us),n(H,rs),l(a,va,e),l(a,q,e),n(q,is),l(a,da,e),l(a,v,e),n(v,ks),n(v,ta),n(ta,fs),n(v,vs),n(v,y),n(y,ds),n(v,Es),n(v,pa),n(pa,_s),n(v,ms),l(a,Ea,e),l(a,T,e),n(T,Ps),l(a,_a,e),l(a,M,e),n(M,Cs),l(a,ma,e),l(a,w,e),w.innerHTML=fn,l(a,Pa,e),l(a,K,e),n(K,As),l(a,Ca,e),l(a,A,e),n(A,Os),n(A,ea),n(ea,bs),n(A,Ss),l(a,Aa,e),l(a,L,e),L.innerHTML=vn,l(a,Oa,e),l(a,U,e),n(U,Ds),l(a,ba,e),l(a,V,e),n(V,gs),l(a,Sa,e),l(a,h,e),n(h,Hs),l(a,Da,e),l(a,B,e),n(B,Rs),l(a,ga,e),l(a,O,e),n(O,qs),n(O,la),n(la,ys),n(O,Ts),l(a,Ha,e),l(a,x,e),x.innerHTML=dn,l(a,Ra,e),l(a,G,e),n(G,ws)},p:Ks,i:Ks,o:Ks,d(a){a&&s(_),a&&s(oa),a&&s(N),a&&s(ca),a&&s(S),a&&s(ua),a&&s(f),a&&s(ra),a&&s(P),a&&s(ia),a&&s(g),a&&s(ka),a&&s(E),a&&s(fa),a&&s(C),a&&s(va),a&&s(q),a&&s(da),a&&s(v),a&&s(Ea),a&&s(T),a&&s(_a),a&&s(M),a&&s(ma),a&&s(w),a&&s(Pa),a&&s(K),a&&s(Ca),a&&s(A),a&&s(Aa),a&&s(L),a&&s(Oa),a&&s(U),a&&s(ba),a&&s(V),a&&s(Sa),a&&s(h),a&&s(Da),a&&s(B),a&&s(ga),a&&s(O),a&&s(Ha),a&&s(x),a&&s(Ra),a&&s(G)}}}class Dn extends Cn{constructor(_){super();An(this,_,null,bn,On,{})}}export{Dn as default};
