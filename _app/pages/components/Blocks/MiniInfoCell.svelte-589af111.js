import{S as N,i as y,s as K,C as P,w as b,x as w,y as I,z as en,A as on,q as g,o as _,B as M,a5 as Q,a6 as pn,M as ln,ag as cn,v as un,a7 as rn,G as fn,O as Y,e as z,c as F,a as G,d as m,b as U,g as v,P as R,Q as q,R as B,k as h,l as V,m as A,n as kn,p as mn,t as L,h as O,T as D,aH as $n,N as W,aI as gn,aJ as _n,aK as tn,aL as dn}from"../../../chunks/vendor-049c144f.js";import{S as vn}from"../../../chunks/Showcase-532866e4.js";import{c as X,g as Z,d as bn}from"../../../chunks/File.svelte_svelte_type_style_lang-261844e3.js";import{A as wn}from"../../../chunks/Avatar-99535b88.js";import{G as In}from"../../../chunks/Group-cab62547.js";import{L as Mn}from"../../../chunks/Link-2bf11b6c.js";import{U as Cn}from"../../../chunks/UsersStack-ea4f5eb2.js";import{T as hn}from"../../../chunks/Text-43146fdb.js";import{T as An}from"../../../chunks/Tappable-3892faa1.js";import{D as x}from"../../../chunks/Touch-4ac93e5b.js";import{g as H}from"../../../chunks/utils-899c0d60.js";import{A as Ln}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Caption-e6202dca.js";import"../../../chunks/Separator-fa1991ce.js";import"../../../chunks/Subhead-a2fcc967.js";const On=o=>({}),nn=o=>({}),Wn=o=>({}),sn=o=>({});function En(o){let n;const a=o[8].default,s=Y(a,o,o[10],null);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,t){s&&s.m(e,t),n=!0},p(e,t){s&&s.p&&(!n||t&1024)&&R(s,a,e,e[10],n?B(a,e[10],t,null):q(e[10]),null)},i(e){n||(g(s,e),n=!0)},o(e){_(s,e),n=!1},d(e){s&&s.d(e)}}}function an(o){let n,a;const s=o[8].after,e=Y(s,o,o[10],nn);return{c(){n=z("span"),e&&e.c(),this.h()},l(t){n=F(t,"SPAN",{class:!0});var c=G(n);e&&e.l(c),c.forEach(m),this.h()},h(){U(n,"class","MiniInfoCell__after svelte-t1lzdk")},m(t,c){v(t,n,c),e&&e.m(n,null),a=!0},p(t,c){e&&e.p&&(!a||c&1024)&&R(e,s,t,t[10],a?B(s,t[10],c,On):q(t[10]),nn)},i(t){a||(g(e,t),a=!0)},o(t){_(e,t),a=!1},d(t){t&&m(n),e&&e.d(t)}}}function Sn(o){let n,a,s,e,t,c;const $=o[8].before,d=Y($,o,o[10],sn);s=new hn({props:{class:"MiniInfoCell__content",weight:o[0]==="more"?"medium":"regular",$$slots:{default:[En]},$$scope:{ctx:o}}});let u=o[7].after&&an(o);return{c(){n=z("span"),d&&d.c(),a=h(),b(s.$$.fragment),e=h(),u&&u.c(),t=V(),this.h()},l(l){n=F(l,"SPAN",{class:!0});var i=G(n);d&&d.l(i),i.forEach(m),a=A(l),w(s.$$.fragment,l),e=A(l),u&&u.l(l),t=V(),this.h()},h(){U(n,"class","MiniInfoCell__icon svelte-t1lzdk")},m(l,i){v(l,n,i),d&&d.m(n,null),v(l,a,i),I(s,l,i),v(l,e,i),u&&u.m(l,i),v(l,t,i),c=!0},p(l,i){d&&d.p&&(!c||i&1024)&&R(d,$,l,l[10],c?B($,l[10],i,Wn):q(l[10]),sn);const C={};i&1&&(C.weight=l[0]==="more"?"medium":"regular"),i&1024&&(C.$$scope={dirty:i,ctx:l}),s.$set(C),l[7].after?u?(u.p(l,i),i&128&&g(u,1)):(u=an(l),u.c(),g(u,1),u.m(t.parentNode,t)):u&&(kn(),_(u,1,1,()=>{u=null}),mn())},i(l){c||(g(d,l),g(s.$$.fragment,l),g(u),c=!0)},o(l){_(d,l),_(s.$$.fragment,l),_(u),c=!1},d(l){l&&m(n),d&&d.d(l),l&&m(a),M(s,l),l&&m(e),u&&u.d(l),l&&m(t)}}}function zn(o){let n,a;const s=[{component:x},{disabled:!o[3]},{role:o[3]?"button":void 0},o[6],{class:X(o[6].class,Z("MiniInfoCell",o[4]),{[`MiniInfoCell--md-${o[0]}`]:o[0]!=="base",[`MiniInfoCell--wr-${o[1]}`]:o[1]!=="nowrap"},`MiniInfoCell--lvl-${o[2]}`)}];let e={$$slots:{default:[Sn]},$$scope:{ctx:o}};for(let t=0;t<s.length;t+=1)e=P(e,s[t]);return n=new An({props:e}),n.$on("click",o[9]),{c(){b(n.$$.fragment)},l(t){w(n.$$.fragment,t)},m(t,c){I(n,t,c),a=!0},p(t,[c]){const $=c&95?en(s,[c&0&&{component:x},c&8&&{disabled:!t[3]},c&8&&{role:t[3]?"button":void 0},c&64&&on(t[6]),c&87&&{class:X(t[6].class,Z("MiniInfoCell",t[4]),{[`MiniInfoCell--md-${t[0]}`]:t[0]!=="base",[`MiniInfoCell--wr-${t[1]}`]:t[1]!=="nowrap"},`MiniInfoCell--lvl-${t[2]}`)}]):{};c&1153&&($.$$scope={dirty:c,ctx:t}),n.$set($)},i(t){a||(g(n.$$.fragment,t),a=!0)},o(t){_(n.$$.fragment,t),a=!1},d(t){M(n,t)}}}function Fn(o,n,a){const s=["mode","textWrap","textLevel"];let e=Q(n,s),t,{$$slots:c={},$$scope:$}=n;const d=pn(c);let{mode:u="base"}=n,{textWrap:l="nowrap"}=n,{textLevel:i="secondary"}=n;const C=bn();ln(o,C,f=>a(4,t=f));let p=!1;const k=cn.$$.callbacks;un(()=>a(3,p=k.click!==void 0));function r(f){fn.call(this,o,f)}return o.$$set=f=>{n=P(P({},n),rn(f)),a(6,e=Q(n,s)),"mode"in f&&a(0,u=f.mode),"textWrap"in f&&a(1,l=f.textWrap),"textLevel"in f&&a(2,i=f.textLevel),"$$scope"in f&&a(10,$=f.$$scope)},[u,l,i,p,t,C,e,d,c,r,$]}class S extends N{constructor(n){super();y(this,n,Fn,zn,K,{mode:0,textWrap:1,textLevel:2})}}function Gn(o){let n;return{c(){n=L(`\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0432\u0443\u0437\u043E\u0432, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u044D\u0442\u043E \u043E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441
		\u0431\u0435\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.`)},l(a){n=O(a,`\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0432\u0443\u0437\u043E\u0432, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u044D\u0442\u043E \u043E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441
		\u0431\u0435\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.`)},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function Un(o){let n,a;return n=new $n({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function jn(o){let n;return{c(){n=L("514,7K \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \xB7 77 \u0434\u0440\u0443\u0437\u0435\u0439")},l(a){n=O(a,"514,7K \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \xB7 77 \u0434\u0440\u0443\u0437\u0435\u0439")},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function Tn(o){let n,a;return n=new gn({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Dn(o){let n,a;return n=new Cn({props:{slot:"after",photos:[H("user_mm"),H("user_arthurstam"),H("user_xyz")]}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Hn(o){let n;return{c(){n=L("vk.com/team")},l(a){n=O(a,"vk.com/team")},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function Pn(o){let n,a;return n=new Mn({props:{href:"https://vk.com/team",$$slots:{default:[Hn]},$$scope:{ctx:o}}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p(s,e){const t={};e&4&&(t.$$scope={dirty:e,ctx:s}),n.$set(t)},i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Nn(o){let n,a;return n=new _n({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function yn(o){let n;return{c(){n=L("\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B: \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435")},l(a){n=O(a,"\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B: \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435")},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function Kn(o){let n,a;return n=new tn({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Yn(o){let n,a;return n=new wn({props:{slot:"after",size:24,src:"https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Rn(o){let n;return{c(){n=L("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0443\u0447\u0451\u0431\u044B")},l(a){n=O(a,"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0443\u0447\u0451\u0431\u044B")},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function qn(o){let n,a;return n=new tn({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Bn(o){let n;return{c(){n=L("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")},l(a){n=O(a,"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")},m(a,s){v(a,n,s)},d(a){a&&m(n)}}}function Jn(o){let n,a;return n=new dn({props:{slot:"before"}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p:W,i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Qn(o){let n,a,s,e,t,c,$,d,u,l,i,C;return n=new S({props:{textWrap:"short",$$slots:{before:[Un],default:[Gn]},$$scope:{ctx:o}}}),s=new S({props:{$$slots:{after:[Dn],before:[Tn],default:[jn]},$$scope:{ctx:o}}}),t=new S({props:{$$slots:{before:[Nn],default:[Pn]},$$scope:{ctx:o}}}),$=new S({props:{$$slots:{after:[Yn],before:[Kn],default:[yn]},$$scope:{ctx:o}}}),u=new S({props:{mode:"add",$$slots:{before:[qn],default:[Rn]},$$scope:{ctx:o}}}),u.$on("click",o[0]),i=new S({props:{mode:"more",$$slots:{before:[Jn],default:[Bn]},$$scope:{ctx:o}}}),i.$on("click",o[1]),{c(){b(n.$$.fragment),a=h(),b(s.$$.fragment),e=h(),b(t.$$.fragment),c=h(),b($.$$.fragment),d=h(),b(u.$$.fragment),l=h(),b(i.$$.fragment)},l(p){w(n.$$.fragment,p),a=A(p),w(s.$$.fragment,p),e=A(p),w(t.$$.fragment,p),c=A(p),w($.$$.fragment,p),d=A(p),w(u.$$.fragment,p),l=A(p),w(i.$$.fragment,p)},m(p,k){I(n,p,k),v(p,a,k),I(s,p,k),v(p,e,k),I(t,p,k),v(p,c,k),I($,p,k),v(p,d,k),I(u,p,k),v(p,l,k),I(i,p,k),C=!0},p(p,k){const r={};k&4&&(r.$$scope={dirty:k,ctx:p}),n.$set(r);const f={};k&4&&(f.$$scope={dirty:k,ctx:p}),s.$set(f);const E={};k&4&&(E.$$scope={dirty:k,ctx:p}),t.$set(E);const j={};k&4&&(j.$$scope={dirty:k,ctx:p}),$.$set(j);const T={};k&4&&(T.$$scope={dirty:k,ctx:p}),u.$set(T);const J={};k&4&&(J.$$scope={dirty:k,ctx:p}),i.$set(J)},i(p){C||(g(n.$$.fragment,p),g(s.$$.fragment,p),g(t.$$.fragment,p),g($.$$.fragment,p),g(u.$$.fragment,p),g(i.$$.fragment,p),C=!0)},o(p){_(n.$$.fragment,p),_(s.$$.fragment,p),_(t.$$.fragment,p),_($.$$.fragment,p),_(u.$$.fragment,p),_(i.$$.fragment,p),C=!1},d(p){M(n,p),p&&m(a),M(s,p),p&&m(e),M(t,p),p&&m(c),M($,p),p&&m(d),M(u,p),p&&m(l),M(i,p)}}}function Vn(o){let n,a;return n=new In({props:{$$slots:{default:[Qn]},$$scope:{ctx:o}}}),{c(){b(n.$$.fragment)},l(s){w(n.$$.fragment,s)},m(s,e){I(n,s,e),a=!0},p(s,e){const t={};e&4&&(t.$$scope={dirty:e,ctx:s}),n.$set(t)},i(s){a||(g(n.$$.fragment,s),a=!0)},o(s){_(n.$$.fragment,s),a=!1},d(s){M(n,s)}}}function Xn(o){let n,a,s,e,t,c,$,d,u,l,i,C,p=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Group<span class="token punctuation">,</span> MiniInfoCell<span class="token punctuation">,</span> UsersStack<span class="token punctuation">,</span> Avatar<span class="token punctuation">,</span> Link <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon20ArticleOutline <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/20/article_outline'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon20FollowersOutline <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/20/followers_outline'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon20GlobeOutline <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/20/globe_outline'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon20WorkOutline <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/20/work_outline'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Icon20Info <span class="token keyword">from</span> <span class="token string">'@sveltevk/icons/dist/20/info'</span><span class="token punctuation">;</span>

	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getAvatarUrl <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$site/data/utils'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span> <span class="token attr-name">textWrap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>short<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20ArticleOutline</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0432\u0443\u0437\u043E\u0432, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u044D\u0442\u043E \u043E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441
		\u0431\u0435\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20FollowersOutline</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UsersStack</span>
			<span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span>
			<span class="token attr-name">photos=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_mm'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_arthurstam'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAvatarUrl</span><span class="token punctuation">(</span><span class="token string">'user_xyz'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
		<span class="token punctuation">/></span></span>
		514,7K \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \xB7 77 \u0434\u0440\u0443\u0437\u0435\u0439
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20GlobeOutline</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://vk.com/team<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>vk.com/team<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20WorkOutline</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>
			<span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span>
			<span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">24</span><span class="token punctuation">&#125;</span></span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1<span class="token punctuation">"</span></span>
		<span class="token punctuation">/></span></span>
		\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B: \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0443\u0447\u0451\u0431\u044B'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20WorkOutline</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0443\u0447\u0451\u0431\u044B
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniInfoCell</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>more<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon20Info</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MiniInfoCell</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span></code>`,k;return $=new vn({props:{scroll:!0,$$slots:{default:[Vn]},$$scope:{ctx:o}}}),{c(){n=z("h1"),a=L("MiniInfoCell"),s=h(),e=z("h2"),t=L("\u041F\u0440\u0438\u043C\u0435\u0440"),c=h(),b($.$$.fragment),d=h(),u=z("h2"),l=L("\u041A\u043E\u0434"),i=h(),C=z("pre"),this.h()},l(r){n=F(r,"H1",{id:!0});var f=G(n);a=O(f,"MiniInfoCell"),f.forEach(m),s=A(r),e=F(r,"H2",{id:!0});var E=G(e);t=O(E,"\u041F\u0440\u0438\u043C\u0435\u0440"),E.forEach(m),c=A(r),w($.$$.fragment,r),d=A(r),u=F(r,"H2",{id:!0});var j=G(u);l=O(j,"\u041A\u043E\u0434"),j.forEach(m),i=A(r),C=F(r,"PRE",{class:!0});var T=G(C);T.forEach(m),this.h()},h(){U(n,"id","miniinfocell"),U(e,"id","\u043F\u0440\u0438\u043C\u0435\u0440"),U(u,"id","\u043A\u043E\u0434"),U(C,"class","language-svelte")},m(r,f){v(r,n,f),D(n,a),v(r,s,f),v(r,e,f),D(e,t),v(r,c,f),I($,r,f),v(r,d,f),v(r,u,f),D(u,l),v(r,i,f),v(r,C,f),C.innerHTML=p,k=!0},p(r,[f]){const E={};f&4&&(E.$$scope={dirty:f,ctx:r}),$.$set(E)},i(r){k||(g($.$$.fragment,r),k=!0)},o(r){_($.$$.fragment,r),k=!1},d(r){r&&m(n),r&&m(s),r&&m(e),r&&m(c),M($,r),r&&m(d),r&&m(u),r&&m(i),r&&m(C)}}}function Zn(o){return[()=>console.log("\u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0443\u0447\u0451\u0431\u044B"),()=>console.log("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")]}class xn extends N{constructor(n){super();y(this,n,Zn,Xn,K,{})}}var ns={props:[{name:"mode",kind:"let",description:"\u0422\u0438\u043F \u044F\u0447\u0435\u0439\u043A\u0438:\n\n- `base` \u2013 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u044F\u0447\u0435\u0439\u043A\u0430 \u0441 \u0441\u0435\u0440\u043E\u0439 \u0438\u043A\u043E\u043D\u043A\u043E\u0439 \u0438 \u0441\u0435\u0440\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C.<br />\n\u0412 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C `Link`, \u0447\u0442\u043E\u0431\u044B \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0430\u0441\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u043E\u0439.\n- `add` \u2013 \u0442\u0438\u043F \u044F\u0447\u0435\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043D\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0447\u0435\u0433\u043E-\u0442\u043E.\n- `more` \u2013 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0442\u0430\u043A\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043A\u0430\u043A\u0443\u044E-\u0442\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.",type:"string",value:"'base'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"textWrap",kind:"let",description:"\u0422\u0438\u043F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430:\n\n- `nowrap` \u2013 \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443, \u0442\u0435\u043A\u0441\u0442 \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u0438 \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F.\n- `short` \u2013 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F 3 \u0441\u0442\u0440\u043E\u043A\u0438, \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F.\n- `full` \u2013 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E.",type:"string",value:"'nowrap'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"textLevel",kind:"let",description:"\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0430:\n\n- `primary` \u2013 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0441\u0442\u0438\u043B\u044C, \u0435\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432 \u043E\u0431\u0449\u0435\u043C \u0441\u043F\u0438\u0441\u043A\u0435.<br />\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F: \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430\n- `secondary` \u2013 \u0441\u0442\u0438\u043B\u044C \u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.",type:"string",value:"'secondary'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"after",default:!1,slot_props:"{}"},{name:"before",default:!1,slot_props:"{}"}],events:[{type:"forwarded",name:"click",element:"Tappable"}],typedefs:[],rest_props:{type:"InlineComponent",name:"Tappable"}};function ss(o){let n,a,s,e;return n=new xn({}),s=new Ln({props:{data:ns}}),{c(){b(n.$$.fragment),a=h(),b(s.$$.fragment)},l(t){w(n.$$.fragment,t),a=A(t),w(s.$$.fragment,t)},m(t,c){I(n,t,c),v(t,a,c),I(s,t,c),e=!0},p:W,i(t){e||(g(n.$$.fragment,t),g(s.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),_(s.$$.fragment,t),e=!1},d(t){M(n,t),t&&m(a),M(s,t)}}}class _s extends N{constructor(n){super();y(this,n,null,ss,K,{})}}export{_s as default};
