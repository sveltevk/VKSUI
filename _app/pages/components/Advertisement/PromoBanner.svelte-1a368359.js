import{S as R,i as j,s as V,w as h,x as b,y,q as $,o as d,B,e as E,c as S,a as q,d as u,b as _,g,ab as O,N as H,ap as N,T as w,k as L,m as C,ah as M,n as Q,p as U,af as Y,M as x,C as G,a7 as X,t as A,h as F,j as T,aq as nn,G as sn}from"../../../chunks/vendor-049c144f.js";import{S as tn}from"../../../chunks/Showcase-cd097b41.js";import{c as Z,g as z,d as an}from"../../../chunks/File.svelte_svelte_type_style_lang-ffa59218.js";import{B as en}from"../../../chunks/Button-47be74e1.js";import{S as on}from"../../../chunks/SimpleCell-297b8aef.js";import{A as rn}from"../../../chunks/Avatar-9095890e.js";import{C as J}from"../../../chunks/Caption-8dcbc303.js";import{A as ln}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Tappable-573d1721.js";import"../../../chunks/Touch-d6cdb2b5.js";import"../../../chunks/Spinner-13b87b63.js";import"../../../chunks/Headline-66f6cd6f.js";import"../../../chunks/Subhead-2954488f.js";import"../../../chunks/Text-7112c13b.js";import"../../../chunks/Title-6d86738a.js";function pn(r){let n=(r[0].advertisingLabel||"Advertisement")+"",t;return{c(){t=A(n)},l(s){t=F(s,n)},m(s,a){g(s,t,a)},p(s,a){a&1&&n!==(n=(s[0].advertisingLabel||"Advertisement")+"")&&T(t,n)},d(s){s&&u(t)}}}function cn(r){let n,t;return n=new J({props:{weight:"3",level:"1",class:"PromoBanner__age",$$slots:{default:[un]},$$scope:{ctx:r}}}),{c(){h(n.$$.fragment)},l(s){b(n.$$.fragment,s)},m(s,a){y(n,s,a),t=!0},p(s,a){const o={};a&1024&&(o.$$scope={dirty:a,ctx:s}),n.$set(o)},i(s){t||($(n.$$.fragment,s),t=!0)},o(s){d(n.$$.fragment,s),t=!1},d(s){B(n,s)}}}function un(r){let n,t;return{c(){n=A(r[5]),t=A("+")},l(s){n=F(s,r[5]),t=F(s,"+")},m(s,a){g(s,n,a),g(s,t,a)},p:H,d(s){s&&u(n),s&&u(t)}}}function K(r){let n,t,s,a,o;return t=new nn({}),{c(){n=E("div"),h(t.$$.fragment),this.h()},l(i){n=S(i,"DIV",{class:!0});var f=q(n);b(t.$$.fragment,f),f.forEach(u),this.h()},h(){_(n,"class","PromoBanner__close svelte-1u65nqo")},m(i,f){g(i,n,f),y(t,n,null),s=!0,a||(o=O(n,"click",r[8]),a=!0)},p:H,i(i){s||($(t.$$.fragment,i),s=!0)},o(i){d(t.$$.fragment,i),s=!1},d(i){i&&u(n),B(t),a=!1,o()}}}function fn(r){let n=r[0].title+"",t;return{c(){t=A(n)},l(s){t=F(s,n)},m(s,a){g(s,t,a)},p(s,a){a&1&&n!==(n=s[0].title+"")&&T(t,n)},d(s){s&&u(t)}}}function mn(r){let n,t;return n=new rn({props:{slot:"before",mode:"image",size:48,src:r[0].iconLink,alt:r[0].title}}),{c(){h(n.$$.fragment)},l(s){b(n.$$.fragment,s)},m(s,a){y(n,s,a),t=!0},p(s,a){const o={};a&1&&(o.src=s[0].iconLink),a&1&&(o.alt=s[0].title),n.$set(o)},i(s){t||($(n.$$.fragment,s),t=!0)},o(s){d(n.$$.fragment,s),t=!1},d(s){B(n,s)}}}function kn(r){let n=r[0].ctaText+"",t;return{c(){t=A(n)},l(s){t=F(s,n)},m(s,a){g(s,t,a)},p(s,a){a&1&&n!==(n=s[0].ctaText+"")&&T(t,n)},d(s){s&&u(t)}}}function gn(r){let n,t;return n=new en({props:{slot:"after",mode:"outline",$$slots:{default:[kn]},$$scope:{ctx:r}}}),{c(){h(n.$$.fragment)},l(s){b(n.$$.fragment,s)},m(s,a){y(n,s,a),t=!0},p(s,a){const o={};a&1025&&(o.$$scope={dirty:a,ctx:s}),n.$set(o)},i(s){t||($(n.$$.fragment,s),t=!0)},o(s){d(n.$$.fragment,s),t=!1},d(s){B(n,s)}}}function W(r){let n,t,s;return{c(){n=E("div"),t=E("img"),this.h()},l(a){n=S(a,"DIV",{class:!0});var o=q(n);t=S(o,"IMG",{src:!0,alt:!0}),o.forEach(u),this.h()},h(){N(t.src,s=r[2])||_(t,"src",s),_(t,"alt",""),_(n,"class","PromoBanner__pixels svelte-1u65nqo")},m(a,o){g(a,n,o),w(n,t)},p(a,o){o&4&&!N(t.src,s=a[2])&&_(t,"src",s)},d(a){a&&u(n)}}}function $n(r){let n,t,s,a,o,i,f,v,k,P;s=new J({props:{weight:"3",level:"1",class:"PromoBanner__label",$$slots:{default:[pn]},$$scope:{ctx:r}}});let m=r[5]!=null&&cn(r),e=!r[1]&&K(r);f=new on({props:{href:r[0].trackingLink,rel:"nofollow noopener noreferrer",target:"_blank",description:r[0].domain,$$slots:{after:[gn],before:[mn],default:[fn]},$$scope:{ctx:r}}}),f.$on("click",r[9]);let p=r[2].length>0&&W(r);return{c(){n=E("div"),t=E("div"),h(s.$$.fragment),a=L(),m&&m.c(),o=L(),e&&e.c(),i=L(),h(f.$$.fragment),v=L(),p&&p.c(),this.h()},l(l){n=S(l,"DIV",{class:!0});var c=q(n);t=S(c,"DIV",{class:!0});var D=q(t);b(s.$$.fragment,D),a=C(D),m&&m.l(D),o=C(D),e&&e.l(D),D.forEach(u),i=C(c),b(f.$$.fragment,c),v=C(c),p&&p.l(c),c.forEach(u),this.h()},h(){_(t,"class","PromoBanner__head svelte-1u65nqo"),_(n,"class",k=M(Z(z("PromoBanner",r[3]),r[7].class))+" svelte-1u65nqo")},m(l,c){g(l,n,c),w(n,t),y(s,t,null),w(t,a),m&&m.m(t,null),w(t,o),e&&e.m(t,null),w(n,i),y(f,n,null),w(n,v),p&&p.m(n,null),P=!0},p(l,[c]){const D={};c&1025&&(D.$$scope={dirty:c,ctx:l}),s.$set(D),l[5]!=null&&m.p(l,c),l[1]?e&&(Q(),d(e,1,1,()=>{e=null}),U()):e?(e.p(l,c),c&2&&$(e,1)):(e=K(l),e.c(),$(e,1),e.m(t,null));const I={};c&1&&(I.href=l[0].trackingLink),c&1&&(I.description=l[0].domain),c&1025&&(I.$$scope={dirty:c,ctx:l}),f.$set(I),l[2].length>0?p?p.p(l,c):(p=W(l),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!P||c&136&&k!==(k=M(Z(z("PromoBanner",l[3]),l[7].class))+" svelte-1u65nqo"))&&_(n,"class",k)},i(l){P||($(s.$$.fragment,l),$(m),$(e),$(f.$$.fragment,l),P=!0)},o(l){d(s.$$.fragment,l),d(m),d(e),d(f.$$.fragment,l),P=!1},d(l){l&&u(n),B(s),m&&m.d(),e&&e.d(),B(f),p&&p.d()}}}function dn(r,n,t){let s;const a=Y();let{bannerData:o}=n,{isCloseButtonHidden:i=!1}=n,{currentPixel:f=""}=n;const v=o.ageRestrictions!=null?parseInt(o.ageRestrictions):o.ageRestriction,k=an();x(r,k,e=>t(3,s=e));const P=()=>a("close");function m(e){sn.call(this,r,e)}return r.$$set=e=>{t(7,n=G(G({},n),X(e))),"bannerData"in e&&t(0,o=e.bannerData),"isCloseButtonHidden"in e&&t(1,i=e.isCloseButtonHidden),"currentPixel"in e&&t(2,f=e.currentPixel)},n=X(n),[o,i,f,s,a,v,k,n,P,m]}class _n extends R{constructor(n){super();j(this,n,dn,$n,V,{bannerData:0,isCloseButtonHidden:1,currentPixel:2})}}function vn(r){let n,t;return n=new _n({props:{bannerData:r[0]}}),{c(){h(n.$$.fragment)},l(s){b(n.$$.fragment,s)},m(s,a){y(n,s,a),t=!0},p:H,i(s){t||($(n.$$.fragment,s),t=!0)},o(s){d(n.$$.fragment,s),t=!1},d(s){B(n,s)}}}function hn(r){let n,t,s,a,o,i,f,v,k,P=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PromoBanner<span class="token punctuation">,</span> FixedLayout <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> promoBannerProps <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'vk.com'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">trackingLink</span><span class="token operator">:</span> <span class="token string">'https://vk.com'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">ctaText</span><span class="token operator">:</span> <span class="token string">'\u041F\u0435\u0440\u0435\u0439\u0442\u0438'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">advertisingLabel</span><span class="token operator">:</span> <span class="token string">'\u0420\u0435\u043A\u043B\u0430\u043C\u0430'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">iconLink</span><span class="token operator">:</span> <span class="token string">'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u044B'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">ageRestrictions</span><span class="token operator">:</span> <span class="token string">'14+'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">statistics</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">&#123;</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'playbackStarted'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
			<span class="token punctuation">&#123;</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'click'</span> <span class="token punctuation">&#125;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PromoBanner</span> <span class="token attr-name">bannerData=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>promoBannerProps<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,m;return a=new tn({props:{scroll:!0,$$slots:{default:[vn]},$$scope:{ctx:r}}}),{c(){n=E("h1"),t=A("PromoBanner"),s=L(),h(a.$$.fragment),o=L(),i=E("h2"),f=A("\u041A\u043E\u0434"),v=L(),k=E("pre"),this.h()},l(e){n=S(e,"H1",{id:!0});var p=q(n);t=F(p,"PromoBanner"),p.forEach(u),s=C(e),b(a.$$.fragment,e),o=C(e),i=S(e,"H2",{id:!0});var l=q(i);f=F(l,"\u041A\u043E\u0434"),l.forEach(u),v=C(e),k=S(e,"PRE",{class:!0});var c=q(k);c.forEach(u),this.h()},h(){_(n,"id","promobanner"),_(i,"id","\u043A\u043E\u0434"),_(k,"class","language-svelte")},m(e,p){g(e,n,p),w(n,t),g(e,s,p),y(a,e,p),g(e,o,p),g(e,i,p),w(i,f),g(e,v,p),g(e,k,p),k.innerHTML=P,m=!0},p(e,[p]){const l={};p&2&&(l.$$scope={dirty:p,ctx:e}),a.$set(l)},i(e){m||($(a.$$.fragment,e),m=!0)},o(e){d(a.$$.fragment,e),m=!1},d(e){e&&u(n),e&&u(s),B(a,e),e&&u(o),e&&u(i),e&&u(v),e&&u(k)}}}function bn(r){return[{title:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",domain:"vk.com",trackingLink:"https://vk.com",ctaText:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438",advertisingLabel:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",iconLink:"https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u044B",ageRestrictions:"14+",statistics:[{url:"",type:"playbackStarted"},{url:"",type:"click"}]}]}class yn extends R{constructor(n){super();j(this,n,bn,hn,V,{})}}var Bn={props:[{name:"bannerData",kind:"let",description:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u0430\u043D\u043D\u0435\u0440\u0430, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0438\u0437 VKWebAppGetAds",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"isCloseButtonHidden",kind:"let",description:"\u0424\u043B\u0430\u0433 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u044B",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"currentPixel",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[],events:[{type:"forwarded",name:"click",element:"SimpleCell"},{type:"dispatched",name:"close"}],typedefs:[]};function Pn(r){let n,t,s,a;return n=new yn({}),s=new ln({props:{data:Bn}}),{c(){h(n.$$.fragment),t=L(),h(s.$$.fragment)},l(o){b(n.$$.fragment,o),t=C(o),b(s.$$.fragment,o)},m(o,i){y(n,o,i),g(o,t,i),y(s,o,i),a=!0},p:H,i(o){a||($(n.$$.fragment,o),$(s.$$.fragment,o),a=!0)},o(o){d(n.$$.fragment,o),d(s.$$.fragment,o),a=!1},d(o){B(n,o),o&&u(t),B(s,o)}}}class Nn extends R{constructor(n){super();j(this,n,null,Pn,V,{})}}export{Nn as default};
