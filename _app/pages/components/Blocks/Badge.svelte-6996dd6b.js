import{S as A,i as M,s as R,C as q,e as S,c as E,a as I,d as c,P as F,Q as L,g as r,z as X,a1 as B,F as Q,H as J,t as w,k as b,w as k,h,m as v,x as m,b as P,a0 as j,y as $,q as g,o as _,B as d,au as Y}from"../../../chunks/vendor-0c96926e.js";import{S as Z}from"../../../chunks/Showcase-d13b75be.js";import{c as y}from"../../../chunks/File.svelte_svelte_type_style_lang-1d3c311e.js";import{S as aa}from"../../../chunks/SimpleCell-06da21c8.js";import{H as U}from"../../../chunks/Header-b2934da1.js";import{T as sa,a as K}from"../../../chunks/TabsItem-463c8dae.js";import{G as O}from"../../../chunks/Group-31f75528.js";import"../../../chunks/Tappable-b9f6c3d1.js";import"../../../chunks/Touch-445b1a2c.js";import"../../../chunks/Headline-a652b6cd.js";import"../../../chunks/Text-8ff0e3dd.js";import"../../../chunks/Title-53b10d3f.js";import"../../../chunks/Caption-3355185c.js";import"../../../chunks/Subhead-7c274b37.js";function na(l){let a,t=[l[0]],s={};for(let e=0;e<t.length;e+=1)s=q(s,t[e]);return{c(){a=S("span"),this.h()},l(e){a=E(e,"SPAN",{}),I(a).forEach(c),this.h()},h(){F(a,s),L(a,"svelte-dtkjwp",!0)},m(e,n){r(e,a,n)},p(e,[n]){F(a,s=X(t,[n&1&&e[0]])),L(a,"svelte-dtkjwp",!0)},i:B,o:B,d(e){e&&c(a)}}}function ta(l,a,t){const s=["mode"];let e=Q(a,s),{mode:n="new"}=a;return l.$$set=p=>{t(2,a=q(q({},a),J(p))),t(0,e=Q(a,s)),"mode"in p&&t(1,n=p.mode)},l.$$.update=()=>{t(0,e.class=y(a.class,"Badge",`Badge--${n}`),e)},a=J(a),[e,n]}class z extends A{constructor(a){super();M(this,a,ta,na,R,{mode:1})}}function ea(l){let a;return{c(){a=w("\u0412 \u043F\u0443\u043D\u043A\u0442\u0430\u0445 \u043C\u0435\u043D\u044E")},l(t){a=h(t,"\u0412 \u043F\u0443\u043D\u043A\u0442\u0430\u0445 \u043C\u0435\u043D\u044E")},m(t,s){r(t,a,s)},d(t){t&&c(a)}}}function pa(l){let a;return{c(){a=w("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")},l(t){a=h(t,"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")},m(t,s){r(t,a,s)},d(t){t&&c(a)}}}function oa(l){let a,t;return a=new Y({props:{slot:"before"}}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,e){$(a,s,e),t=!0},p:B,i(s){t||(g(a.$$.fragment,s),t=!0)},o(s){_(a.$$.fragment,s),t=!1},d(s){d(a,s)}}}function la(l){let a,t;return a=new z({props:{slot:"badge","aria-label":"\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435"}}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,e){$(a,s,e),t=!0},p:B,i(s){t||(g(a.$$.fragment,s),t=!0)},o(s){_(a.$$.fragment,s),t=!1},d(s){d(a,s)}}}function ca(l){let a,t,s,e;return a=new U({props:{mode:"secondary",$$slots:{default:[ea]},$$scope:{ctx:l}}}),s=new aa({props:{expandable:!0,$$slots:{badge:[la],before:[oa],default:[pa]},$$scope:{ctx:l}}}),{c(){k(a.$$.fragment),t=b(),k(s.$$.fragment)},l(n){m(a.$$.fragment,n),t=v(n),m(s.$$.fragment,n)},m(n,p){$(a,n,p),r(n,t,p),$(s,n,p),e=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),a.$set(u);const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),s.$set(i)},i(n){e||(g(a.$$.fragment,n),g(s.$$.fragment,n),e=!0)},o(n){_(a.$$.fragment,n),_(s.$$.fragment,n),e=!1},d(n){d(a,n),n&&c(t),d(s,n)}}}function ua(l){let a;return{c(){a=w("\u0412 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044F\u0445")},l(t){a=h(t,"\u0412 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044F\u0445")},m(t,s){r(t,a,s)},d(t){t&&c(a)}}}function ra(l){let a;return{c(){a=w("\u0414\u0438\u0430\u043B\u043E\u0433\u0438")},l(t){a=h(t,"\u0414\u0438\u0430\u043B\u043E\u0433\u0438")},m(t,s){r(t,a,s)},d(t){t&&c(a)}}}function ia(l){let a,t;return a=new z({props:{slot:"after",mode:"prominent","aria-label":"\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435"}}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,e){$(a,s,e),t=!0},p:B,i(s){t||(g(a.$$.fragment,s),t=!0)},o(s){_(a.$$.fragment,s),t=!1},d(s){d(a,s)}}}function fa(l){let a;return{c(){a=w("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F")},l(t){a=h(t,"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F")},m(t,s){r(t,a,s)},d(t){t&&c(a)}}}function ka(l){let a,t;return a=new z({props:{slot:"after",mode:"prominent","aria-label":"\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435"}}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,e){$(a,s,e),t=!0},p:B,i(s){t||(g(a.$$.fragment,s),t=!0)},o(s){_(a.$$.fragment,s),t=!1},d(s){d(a,s)}}}function ma(l){let a,t,s,e;return a=new K({props:{$$slots:{after:[ia],default:[ra]},$$scope:{ctx:l}}}),s=new K({props:{selected:!0,$$slots:{after:[ka],default:[fa]},$$scope:{ctx:l}}}),{c(){k(a.$$.fragment),t=b(),k(s.$$.fragment)},l(n){m(a.$$.fragment,n),t=v(n),m(s.$$.fragment,n)},m(n,p){$(a,n,p),r(n,t,p),$(s,n,p),e=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),a.$set(u);const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),s.$set(i)},i(n){e||(g(a.$$.fragment,n),g(s.$$.fragment,n),e=!0)},o(n){_(a.$$.fragment,n),_(s.$$.fragment,n),e=!1},d(n){d(a,n),n&&c(t),d(s,n)}}}function $a(l){let a,t,s,e;return a=new U({props:{mode:"secondary",$$slots:{default:[ua]},$$scope:{ctx:l}}}),s=new sa({props:{$$slots:{default:[ma]},$$scope:{ctx:l}}}),{c(){k(a.$$.fragment),t=b(),k(s.$$.fragment)},l(n){m(a.$$.fragment,n),t=v(n),m(s.$$.fragment,n)},m(n,p){$(a,n,p),r(n,t,p),$(s,n,p),e=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),a.$set(u);const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),s.$set(i)},i(n){e||(g(a.$$.fragment,n),g(s.$$.fragment,n),e=!0)},o(n){_(a.$$.fragment,n),_(s.$$.fragment,n),e=!1},d(n){d(a,n),n&&c(t),d(s,n)}}}function ga(l){let a,t,s,e;return a=new O({props:{$$slots:{default:[ca]},$$scope:{ctx:l}}}),s=new O({props:{$$slots:{default:[$a]},$$scope:{ctx:l}}}),{c(){k(a.$$.fragment),t=b(),k(s.$$.fragment)},l(n){m(a.$$.fragment,n),t=v(n),m(s.$$.fragment,n)},m(n,p){$(a,n,p),r(n,t,p),$(s,n,p),e=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),a.$set(u);const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),s.$set(i)},i(n){e||(g(a.$$.fragment,n),g(s.$$.fragment,n),e=!0)},o(n){_(a.$$.fragment,n),_(s.$$.fragment,n),e=!1},d(n){d(a,n),n&&c(t),d(s,n)}}}function _a(l){let a,t,s,e,n,p,u,i,x,N,G,T,V=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Group<span class="token punctuation">,</span> Header<span class="token punctuation">,</span> SimpleCell<span class="token punctuation">,</span> Tabs<span class="token punctuation">,</span> TabsItem<span class="token punctuation">,</span> Badge <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon28Notifications <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/28/notifications'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0412 \u043F\u0443\u043D\u043A\u0442\u0430\u0445 \u043C\u0435\u043D\u044E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleCell</span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon28Notifications</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>badge<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SimpleCell</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0412 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044F\u0445<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabsItem</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prominent<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
			\u0414\u0438\u0430\u043B\u043E\u0433\u0438
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabsItem</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabsItem</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prominent<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0415\u0441\u0442\u044C \u043D\u043E\u0432\u044B\u0435<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
			\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabsItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span></code>`,C;return u=new Z({props:{scroll:!0,$$slots:{default:[ga]},$$scope:{ctx:l}}}),{c(){a=S("h1"),t=w("Badge"),s=b(),e=S("p"),n=w("\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u0434\u0435\u043B\u0443."),p=b(),k(u.$$.fragment),i=b(),x=S("h2"),N=w("\u041A\u043E\u0434"),G=b(),T=S("pre"),this.h()},l(o){a=E(o,"H1",{id:!0});var f=I(a);t=h(f,"Badge"),f.forEach(c),s=v(o),e=E(o,"P",{});var H=I(e);n=h(H,"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u0434\u0435\u043B\u0443."),H.forEach(c),p=v(o),m(u.$$.fragment,o),i=v(o),x=E(o,"H2",{id:!0});var D=I(x);N=h(D,"\u041A\u043E\u0434"),D.forEach(c),G=v(o),T=E(o,"PRE",{class:!0});var W=I(T);W.forEach(c),this.h()},h(){P(a,"id","badge"),P(x,"id","\u043A\u043E\u0434"),P(T,"class","language-svelte")},m(o,f){r(o,a,f),j(a,t),r(o,s,f),r(o,e,f),j(e,n),r(o,p,f),$(u,o,f),r(o,i,f),r(o,x,f),j(x,N),r(o,G,f),r(o,T,f),T.innerHTML=V,C=!0},p(o,[f]){const H={};f&1&&(H.$$scope={dirty:f,ctx:o}),u.$set(H)},i(o){C||(g(u.$$.fragment,o),C=!0)},o(o){_(u.$$.fragment,o),C=!1},d(o){o&&c(a),o&&c(s),o&&c(e),o&&c(p),d(u,o),o&&c(i),o&&c(x),o&&c(G),o&&c(T)}}}class da extends A{constructor(a){super();M(this,a,null,_a,R,{})}}function ba(l){let a,t;return a=new da({}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,e){$(a,s,e),t=!0},p:B,i(s){t||(g(a.$$.fragment,s),t=!0)},o(s){_(a.$$.fragment,s),t=!1},d(s){d(a,s)}}}class ja extends A{constructor(a){super();M(this,a,null,ba,R,{})}}export{ja as default};