import{S as G,i as J,s as Q,C as F,w as P,x as E,y as w,z as lt,A as ct,q as H,o as x,B as O,a2 as at,X as rt,a4 as ut,a5 as it,b0 as ft,e as g,t as m,k as I,c as b,a as h,h as k,d as c,m as q,b as X,g as d,L as u,M as st}from"../../../chunks/vendor-3f5aaa84.js";import{S as mt}from"../../../chunks/Showcase-9cd84a10.js";import{A as nt,V as et,a as kt}from"../../../chunks/File.svelte_svelte_type_style_lang-4a5bcc41.js";import{P as $t}from"../../../chunks/PanelHeader-94c54871.js";import{P as dt}from"../../../chunks/PanelHeaderButton-34933664.js";import"../../../chunks/Separator-c92f63da.js";import"../../../chunks/Text-c894d276.js";import"../../../chunks/Tappable-5b361836.js";import"../../../chunks/Touch-46dbc4fc.js";import"../../../chunks/Title-68e1e2f8.js";function _t(p){let t,n;return t=new ft({}),{c(){P(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,s){w(t,a,s),n=!0},i(a){n||(H(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}function gt(p){let t,n;const a=[p[3],{text:p[1]===nt||p[1]===et?"":p[0]},{primary:!0},{"aria-label":p[0]}];let s={$$slots:{default:[_t]},$$scope:{ctx:p}};for(let o=0;o<a.length;o+=1)s=F(s,a[o]);return t=new dt({props:s}),t.$on("click",p[4]),{c(){P(t.$$.fragment)},l(o){E(t.$$.fragment,o)},m(o,l){w(t,o,l),n=!0},p(o,[l]){const $=l&11?lt(a,[l&8&&ct(o[3]),l&3&&{text:o[1]===nt||o[1]===et?"":o[0]},a[2],l&1&&{"aria-label":o[0]}]):{};l&32&&($.$$scope={dirty:l,ctx:o}),t.$set($)},i(o){n||(H(t.$$.fragment,o),n=!0)},o(o){x(t.$$.fragment,o),n=!1},d(o){O(t,o)}}}function bt(p,t,n){const a=["text"];let s=at(t,a),o,{text:l="\u0413\u043E\u0442\u043E\u0432\u043E"}=t;const $=kt();rt(p,$,i=>n(1,o=i));function D(i){it.call(this,p,i)}return p.$$set=i=>{t=F(F({},t),ut(i)),n(3,s=at(t,a)),"text"in i&&n(0,l=i.text)},[l,o,$,s,D]}class ht extends G{constructor(t){super();J(this,t,bt,gt,Q,{text:0})}}function vt(p){let t;return{c(){t=m("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430")},l(n){t=k(n,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430")},m(n,a){d(n,t,a)},d(n){n&&c(t)}}}function St(p){let t,n;return t=new ht({props:{slot:"left",text:"\u0413\u043E\u0442\u043E\u0432\u043E"}}),t.$on("click",p[0]),{c(){P(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,s){w(t,a,s),n=!0},p:st,i(a){n||(H(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}function Pt(p){let t,n;return t=new $t({props:{$$slots:{left:[St],default:[vt]},$$scope:{ctx:p}}}),{c(){P(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,s){w(t,a,s),n=!0},p(a,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){n||(H(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}function Et(p){let t,n,a,s,o,l,$,D,i,B,L,C,y,z,A,K,N,R,_,M,v,T,V,S,ot=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PanelHeader<span class="token punctuation">,</span> PanelHeaderSubmit <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeader</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderSubmit</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onSubmit<span class="token punctuation">&#125;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0413\u043E\u0442\u043E\u0432\u043E<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeader</span><span class="token punctuation">></span></span></code>`,j;return _=new mt({props:{frame:!0,mini:!0,$$slots:{default:[Pt]},$$scope:{ctx:p}}}),{c(){t=g("h1"),n=m("PanelHeaderSubmit"),a=I(),s=g("p"),o=m("\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u201C\u041E\u0442\u043C\u0435\u043D\u0430\u201D \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u043A\u043D\u0430\u0445 \u0434\u043B\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E "),l=g("code"),$=m("View"),D=m(" \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 "),i=g("code"),B=m("Root"),L=m(". \u041D\u0430 iOS \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043A\u0441\u0442, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u0430\u043A "),C=g("code"),y=m("text"),z=m(", \u043D\u0430 Android - "),A=g("code"),K=m("<Icon28DoneOutline />"),N=m(":"),R=I(),P(_.$$.fragment),M=I(),v=g("h2"),T=m("\u041A\u043E\u0434"),V=I(),S=g("pre"),this.h()},l(e){t=b(e,"H1",{id:!0});var r=h(t);n=k(r,"PanelHeaderSubmit"),r.forEach(c),a=q(e),s=b(e,"P",{});var f=h(s);o=k(f,"\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u201C\u041E\u0442\u043C\u0435\u043D\u0430\u201D \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u043A\u043D\u0430\u0445 \u0434\u043B\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E "),l=b(f,"CODE",{});var U=h(l);$=k(U,"View"),U.forEach(c),D=k(f," \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 "),i=b(f,"CODE",{});var W=h(i);B=k(W,"Root"),W.forEach(c),L=k(f,". \u041D\u0430 iOS \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043A\u0441\u0442, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u0430\u043A "),C=b(f,"CODE",{});var Y=h(C);y=k(Y,"text"),Y.forEach(c),z=k(f,", \u043D\u0430 Android - "),A=b(f,"CODE",{});var Z=h(A);K=k(Z,"<Icon28DoneOutline />"),Z.forEach(c),N=k(f,":"),f.forEach(c),R=q(e),E(_.$$.fragment,e),M=q(e),v=b(e,"H2",{id:!0});var tt=h(v);T=k(tt,"\u041A\u043E\u0434"),tt.forEach(c),V=q(e),S=b(e,"PRE",{class:!0});var pt=h(S);pt.forEach(c),this.h()},h(){X(t,"id","panelheadersubmit"),X(v,"id","\u043A\u043E\u0434"),X(S,"class","language-svelte")},m(e,r){d(e,t,r),u(t,n),d(e,a,r),d(e,s,r),u(s,o),u(s,l),u(l,$),u(s,D),u(s,i),u(i,B),u(s,L),u(s,C),u(C,y),u(s,z),u(s,A),u(A,K),u(s,N),d(e,R,r),w(_,e,r),d(e,M,r),d(e,v,r),u(v,T),d(e,V,r),d(e,S,r),S.innerHTML=ot,j=!0},p(e,[r]){const f={};r&2&&(f.$$scope={dirty:r,ctx:e}),_.$set(f)},i(e){j||(H(_.$$.fragment,e),j=!0)},o(e){x(_.$$.fragment,e),j=!1},d(e){e&&c(t),e&&c(a),e&&c(s),e&&c(R),O(_,e),e&&c(M),e&&c(v),e&&c(V),e&&c(S)}}}function wt(p){return[()=>console.log("Submit")]}class Ht extends G{constructor(t){super();J(this,t,wt,Et,Q,{})}}function xt(p){let t,n;return t=new Ht({}),{c(){P(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,s){w(t,a,s),n=!0},p:st,i(a){n||(H(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}class Bt extends G{constructor(t){super();J(this,t,null,xt,Q,{})}}export{Bt as default};