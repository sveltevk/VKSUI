import{S as Sn,i as An,s as xn,e as k,t as i,k as H,w as _,c as m,a as g,h as f,d as p,m as E,x as d,b,g as r,O as c,y as v,q as h,o as w,B as P,aJ as Mn,aG as In,W as Rn}from"../../../chunks/vendor-9fde05ec.js";import{S as On}from"../../../chunks/Showcase-22cea066.js";import"../../../chunks/File.svelte_svelte_type_style_lang-fd380a47.js";import{P as Cn}from"../../../chunks/PanelHeader-6a7f5b2c.js";import{P as en}from"../../../chunks/PanelHeaderButton-0aab8a31.js";import"../../../chunks/Separator-76701597.js";import"../../../chunks/Text-236cbc4e.js";import"../../../chunks/Tappable-ccba16c1.js";import"../../../chunks/Touch-1a1dd94d.js";import"../../../chunks/Title-c5a5112e.js";function qn(u){let t,s;return t=new Mn({}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Ln(u){let t,s;return t=new en({props:{slot:"left",$$slots:{default:[qn]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p(n,e){const o={};e&1&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Tn(u){let t,s;return t=new In({}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function jn(u){let t,s;return t=new en({props:{slot:"right",$$slots:{default:[Tn]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p(n,e){const o={};e&1&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Gn(u){let t,s;return t=new Cn({props:{$$slots:{right:[jn],left:[Ln]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p(n,e){const o={};e&1&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Jn(u){let t,s;return t=new Mn({}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Wn(u){let t,s;return t=new In({}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function yn(u){let t,s,n,e;return t=new en({props:{$$slots:{default:[Jn]},$$scope:{ctx:u}}}),n=new en({props:{$$slots:{default:[Wn]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment),s=H(),_(n.$$.fragment)},l(o){d(t.$$.fragment,o),s=E(o),d(n.$$.fragment,o)},m(o,$){v(t,o,$),r(o,s,$),v(n,o,$),e=!0},p(o,$){const R={};$&1&&(R.$$scope={dirty:$,ctx:o}),t.$set(R);const q={};$&1&&(q.$$scope={dirty:$,ctx:o}),n.$set(q)},i(o){e||(h(t.$$.fragment,o),h(n.$$.fragment,o),e=!0)},o(o){w(t.$$.fragment,o),w(n.$$.fragment,o),e=!1},d(o){P(t,o),o&&p(s),P(n,o)}}}function zn(u){let t,s;return t=new Cn({props:{$$slots:{right:[yn]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p(n,e){const o={};e&1&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function Fn(u){let t,s,n,e,o,$,R,q,W,B,pn,T,on,ln,j,cn,rn,y,O,z,M,un,F,I,Dn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PanelHeader<span class="token punctuation">,</span> PanelHeaderButton <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon28Notifications <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/28/notifications'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon28SettingsOutline <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/28/settings_outline'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeader</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderButton</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon28Notifications</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderButton</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon28SettingsOutline</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeader</span><span class="token punctuation">></span></span></code>`,Q,S,fn,G,$n,kn,U,A,X,C,mn,Y,D,Kn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeader</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon28Notifications</span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon28SettingsOutline</span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeaderButton</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeader</span><span class="token punctuation">></span></span></code>`,Z,K,gn,nn,x,_n,N,dn,vn,tn;return O=new On({props:{frame:!0,mini:!0,$$slots:{default:[Gn]},$$scope:{ctx:u}}}),A=new On({props:{mini:!0,$$slots:{default:[zn]},$$scope:{ctx:u}}}),{c(){t=k("h1"),s=i("PanelHeaderButton"),n=H(),e=k("p"),o=i("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043A\u043D\u043E\u043F\u043E\u043A \u0432 \u0448\u0430\u043F\u043A\u0435 \u043F\u0430\u043D\u0435\u043B\u0438. \u0412\u043D\u0443\u0442\u0440\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u043B\u0438\u0431\u043E "),$=k("a"),R=i("\u0438\u043A\u043E\u043D\u043A\u0430"),q=i(", \u043B\u0438\u0431\u043E \u0442\u0435\u043A\u0441\u0442. \u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432 iOS, \u043D\u043E \u0435\u0441\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F Android."),W=H(),B=k("p"),pn=i("\u041A\u043D\u043E\u043F\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u0432 "),T=k("code"),on=i("left"),ln=i(" \u0438\u043B\u0438 "),j=k("code"),cn=i("right"),rn=i(" \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 PanelHeader"),y=H(),_(O.$$.fragment),z=H(),M=k("h2"),un=i("\u041A\u043E\u0434"),F=H(),I=k("pre"),Q=H(),S=k("p"),fn=i("\u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043D\u043E\u043F\u043E\u043A \u0441\u043F\u0440\u0430\u0432\u0430 \u0438\u043B\u0438 \u0441\u043B\u0435\u0432\u0430, \u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C "),G=k("code"),$n=i("svelte:fragment"),kn=i(":"),U=H(),_(A.$$.fragment),X=H(),C=k("h2"),mn=i("\u041A\u043E\u0434"),Y=H(),D=k("pre"),Z=H(),K=k("h2"),gn=i("VK Mini Apps"),nn=H(),x=k("p"),_n=i("\u0415\u0441\u043B\u0438 \u0432\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 "),N=k("a"),dn=i("VK Mini Apps"),vn=i(", \u0442\u043E \u0432\u0430\u043C \u0431\u0443\u0434\u0443\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043A\u043D\u043E\u043F\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430, \u0442\u0430\u043A \u043A\u0430\u043A \u043D\u0430 \u0438\u0445 \u043C\u0435\u0441\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C."),this.h()},l(a){t=m(a,"H1",{id:!0});var l=g(t);s=f(l,"PanelHeaderButton"),l.forEach(p),n=E(a),e=m(a,"P",{});var V=g(e);o=f(V,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043A\u043D\u043E\u043F\u043E\u043A \u0432 \u0448\u0430\u043F\u043A\u0435 \u043F\u0430\u043D\u0435\u043B\u0438. \u0412\u043D\u0443\u0442\u0440\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u043B\u0438\u0431\u043E "),$=m(V,"A",{href:!0,rel:!0});var J=g($);R=f(J,"\u0438\u043A\u043E\u043D\u043A\u0430"),J.forEach(p),q=f(V,", \u043B\u0438\u0431\u043E \u0442\u0435\u043A\u0441\u0442. \u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432 iOS, \u043D\u043E \u0435\u0441\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F Android."),V.forEach(p),W=E(a),B=m(a,"P",{});var L=g(B);pn=f(L,"\u041A\u043D\u043E\u043F\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u0432 "),T=m(L,"CODE",{});var hn=g(T);on=f(hn,"left"),hn.forEach(p),ln=f(L," \u0438\u043B\u0438 "),j=m(L,"CODE",{});var wn=g(j);cn=f(wn,"right"),wn.forEach(p),rn=f(L," \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 PanelHeader"),L.forEach(p),y=E(a),d(O.$$.fragment,a),z=E(a),M=m(a,"H2",{id:!0});var Pn=g(M);un=f(Pn,"\u041A\u043E\u0434"),Pn.forEach(p),F=E(a),I=m(a,"PRE",{class:!0});var Nn=g(I);Nn.forEach(p),Q=E(a),S=m(a,"P",{});var an=g(S);fn=f(an,"\u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043D\u043E\u043F\u043E\u043A \u0441\u043F\u0440\u0430\u0432\u0430 \u0438\u043B\u0438 \u0441\u043B\u0435\u0432\u0430, \u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C "),G=m(an,"CODE",{});var Hn=g(G);$n=f(Hn,"svelte:fragment"),Hn.forEach(p),kn=f(an,":"),an.forEach(p),U=E(a),d(A.$$.fragment,a),X=E(a),C=m(a,"H2",{id:!0});var En=g(C);mn=f(En,"\u041A\u043E\u0434"),En.forEach(p),Y=E(a),D=m(a,"PRE",{class:!0});var Vn=g(D);Vn.forEach(p),Z=E(a),K=m(a,"H2",{id:!0});var Bn=g(K);gn=f(Bn,"VK Mini Apps"),Bn.forEach(p),nn=E(a),x=m(a,"P",{});var sn=g(x);_n=f(sn,"\u0415\u0441\u043B\u0438 \u0432\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 "),N=m(sn,"A",{href:!0,rel:!0});var bn=g(N);dn=f(bn,"VK Mini Apps"),bn.forEach(p),vn=f(sn,", \u0442\u043E \u0432\u0430\u043C \u0431\u0443\u0434\u0443\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043A\u043D\u043E\u043F\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430, \u0442\u0430\u043A \u043A\u0430\u043A \u043D\u0430 \u0438\u0445 \u043C\u0435\u0441\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C."),sn.forEach(p),this.h()},h(){b(t,"id","panelheaderbutton"),b($,"href","https://sveltevk.github.io/icons/"),b($,"rel","nofollow"),b(M,"id","\u043A\u043E\u0434"),b(I,"class","language-svelte"),b(C,"id","\u043A\u043E\u0434-1"),b(D,"class","language-svelte"),b(K,"id","vk-mini-apps"),b(N,"href","https://vk.com/vkappsdev"),b(N,"rel","nofollow")},m(a,l){r(a,t,l),c(t,s),r(a,n,l),r(a,e,l),c(e,o),c(e,$),c($,R),c(e,q),r(a,W,l),r(a,B,l),c(B,pn),c(B,T),c(T,on),c(B,ln),c(B,j),c(j,cn),c(B,rn),r(a,y,l),v(O,a,l),r(a,z,l),r(a,M,l),c(M,un),r(a,F,l),r(a,I,l),I.innerHTML=Dn,r(a,Q,l),r(a,S,l),c(S,fn),c(S,G),c(G,$n),c(S,kn),r(a,U,l),v(A,a,l),r(a,X,l),r(a,C,l),c(C,mn),r(a,Y,l),r(a,D,l),D.innerHTML=Kn,r(a,Z,l),r(a,K,l),c(K,gn),r(a,nn,l),r(a,x,l),c(x,_n),c(x,N),c(N,dn),c(x,vn),tn=!0},p(a,[l]){const V={};l&1&&(V.$$scope={dirty:l,ctx:a}),O.$set(V);const J={};l&1&&(J.$$scope={dirty:l,ctx:a}),A.$set(J)},i(a){tn||(h(O.$$.fragment,a),h(A.$$.fragment,a),tn=!0)},o(a){w(O.$$.fragment,a),w(A.$$.fragment,a),tn=!1},d(a){a&&p(t),a&&p(n),a&&p(e),a&&p(W),a&&p(B),a&&p(y),P(O,a),a&&p(z),a&&p(M),a&&p(F),a&&p(I),a&&p(Q),a&&p(S),a&&p(U),P(A,a),a&&p(X),a&&p(C),a&&p(Y),a&&p(D),a&&p(Z),a&&p(K),a&&p(nn),a&&p(x)}}}class Qn extends Sn{constructor(t){super();An(this,t,null,Fn,xn,{})}}function Un(u){let t,s;return t=new Qn({}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p:Rn,i(n){s||(h(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}class lt extends Sn{constructor(t){super();An(this,t,null,Un,xn,{})}}export{lt as default};
