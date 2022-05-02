import{S as J,i as Q,s as U,C as L,w as S,x as w,y as H,z as lt,A as rt,q as E,o as x,B as D,a5 as nt,M as ct,a7 as ut,G as it,bI as ft,e as g,t as m,k as I,c as b,a as h,h as $,d as r,m as y,b as K,g as k,T as u,N as st}from"../../../chunks/vendor-049c144f.js";import{S as mt}from"../../../chunks/Showcase-532866e4.js";import{k as at,h as et,d as $t}from"../../../chunks/File.svelte_svelte_type_style_lang-261844e3.js";import{P as kt}from"../../../chunks/PanelHeader-de7b1c83.js";import{P as dt}from"../../../chunks/PanelHeaderButton-583e1ab0.js";import{A as _t}from"../../../chunks/APIDocs-7485e507.js";import"../../../chunks/Separator-fa1991ce.js";import"../../../chunks/Text-43146fdb.js";import"../../../chunks/Tappable-3892faa1.js";import"../../../chunks/Touch-4ac93e5b.js";import"../../../chunks/Title-262f1665.js";function gt(p){let t,e;return t=new ft({}),{c(){S(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,s){H(t,n,s),e=!0},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){x(t.$$.fragment,n),e=!1},d(n){D(t,n)}}}function bt(p){let t,e;const n=[p[3],{text:p[1]===at||p[1]===et?"":p[0]},{primary:!0},{"aria-label":p[0]}];let s={$$slots:{default:[gt]},$$scope:{ctx:p}};for(let a=0;a<n.length;a+=1)s=L(s,n[a]);return t=new dt({props:s}),t.$on("click",p[4]),{c(){S(t.$$.fragment)},l(a){w(t.$$.fragment,a)},m(a,l){H(t,a,l),e=!0},p(a,[l]){const d=l&11?lt(n,[l&8&&rt(a[3]),l&3&&{text:a[1]===at||a[1]===et?"":a[0]},n[2],l&1&&{"aria-label":a[0]}]):{};l&32&&(d.$$scope={dirty:l,ctx:a}),t.$set(d)},i(a){e||(E(t.$$.fragment,a),e=!0)},o(a){x(t.$$.fragment,a),e=!1},d(a){D(t,a)}}}function ht(p,t,e){const n=["text"];let s=nt(t,n),a,{text:l="\u0413\u043E\u0442\u043E\u0432\u043E"}=t;const d=$t();ct(p,d,i=>e(1,a=i));function O(i){it.call(this,p,i)}return p.$$set=i=>{t=L(L({},t),ut(i)),e(3,s=nt(t,n)),"text"in i&&e(0,l=i.text)},[l,a,d,s,O]}class vt extends J{constructor(t){super();Q(this,t,ht,bt,U,{text:0})}}function Pt(p){let t;return{c(){t=m("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430")},l(e){t=$(e,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430")},m(e,n){k(e,t,n)},d(e){e&&r(t)}}}function St(p){let t,e;return t=new vt({props:{slot:"left",text:"\u0413\u043E\u0442\u043E\u0432\u043E"}}),t.$on("click",p[0]),{c(){S(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,s){H(t,n,s),e=!0},p:st,i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){x(t.$$.fragment,n),e=!1},d(n){D(t,n)}}}function wt(p){let t,e;return t=new kt({props:{$$slots:{left:[St],default:[Pt]},$$scope:{ctx:p}}}),{c(){S(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,s){H(t,n,s),e=!0},p(n,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){x(t.$$.fragment,n),e=!1},d(n){D(t,n)}}}function Ht(p){let t,e,n,s,a,l,d,O,i,V,q,C,F,N,A,T,z,R,_,B,v,G,M,P,ot=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PanelHeader<span class="token punctuation">,</span> PanelHeaderSubmit <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeader</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelHeaderSubmit</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onSubmit<span class="token punctuation">&#125;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u0413\u043E\u0442\u043E\u0432\u043E<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PanelHeader</span><span class="token punctuation">></span></span></code>`,j;return _=new mt({props:{frame:!0,mini:!0,$$slots:{default:[wt]},$$scope:{ctx:p}}}),{c(){t=g("h1"),e=m("PanelHeaderSubmit"),n=I(),s=g("p"),a=m("\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u201C\u041E\u0442\u043C\u0435\u043D\u0430\u201D \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u043A\u043D\u0430\u0445 \u0434\u043B\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E "),l=g("code"),d=m("View"),O=m(" \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 "),i=g("code"),V=m("Root"),q=m(". \u041D\u0430 iOS \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043A\u0441\u0442, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u0430\u043A "),C=g("code"),F=m("text"),N=m(", \u043D\u0430 Android - "),A=g("code"),T=m("<Icon28DoneOutline />"),z=m(":"),R=I(),S(_.$$.fragment),B=I(),v=g("h2"),G=m("\u041A\u043E\u0434"),M=I(),P=g("pre"),this.h()},l(o){t=b(o,"H1",{id:!0});var c=h(t);e=$(c,"PanelHeaderSubmit"),c.forEach(r),n=y(o),s=b(o,"P",{});var f=h(s);a=$(f,"\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u201C\u041E\u0442\u043C\u0435\u043D\u0430\u201D \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u043A\u043D\u0430\u0445 \u0434\u043B\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E "),l=b(f,"CODE",{});var W=h(l);d=$(W,"View"),W.forEach(r),O=$(f," \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 "),i=b(f,"CODE",{});var X=h(i);V=$(X,"Root"),X.forEach(r),q=$(f,". \u041D\u0430 iOS \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043A\u0441\u0442, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u0430\u043A "),C=b(f,"CODE",{});var Y=h(C);F=$(Y,"text"),Y.forEach(r),N=$(f,", \u043D\u0430 Android - "),A=b(f,"CODE",{});var Z=h(A);T=$(Z,"<Icon28DoneOutline />"),Z.forEach(r),z=$(f,":"),f.forEach(r),R=y(o),w(_.$$.fragment,o),B=y(o),v=b(o,"H2",{id:!0});var tt=h(v);G=$(tt,"\u041A\u043E\u0434"),tt.forEach(r),M=y(o),P=b(o,"PRE",{class:!0});var pt=h(P);pt.forEach(r),this.h()},h(){K(t,"id","panelheadersubmit"),K(v,"id","\u043A\u043E\u0434"),K(P,"class","language-svelte")},m(o,c){k(o,t,c),u(t,e),k(o,n,c),k(o,s,c),u(s,a),u(s,l),u(l,d),u(s,O),u(s,i),u(i,V),u(s,q),u(s,C),u(C,F),u(s,N),u(s,A),u(A,T),u(s,z),k(o,R,c),H(_,o,c),k(o,B,c),k(o,v,c),u(v,G),k(o,M,c),k(o,P,c),P.innerHTML=ot,j=!0},p(o,[c]){const f={};c&2&&(f.$$scope={dirty:c,ctx:o}),_.$set(f)},i(o){j||(E(_.$$.fragment,o),j=!0)},o(o){x(_.$$.fragment,o),j=!1},d(o){o&&r(t),o&&r(n),o&&r(s),o&&r(R),D(_,o),o&&r(B),o&&r(v),o&&r(M),o&&r(P)}}}function Et(p){return[()=>console.log("Submit")]}class xt extends J{constructor(t){super();Q(this,t,Et,Ht,U,{})}}var Dt={props:[{name:"text",kind:"let",type:"string",value:"'\u0413\u043E\u0442\u043E\u0432\u043E'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[],events:[{type:"forwarded",name:"click",element:"PanelHeaderButton"}],typedefs:[],rest_props:{type:"InlineComponent",name:"PanelHeaderButton"}};function Ot(p){let t,e,n,s;return t=new xt({}),n=new _t({props:{data:Dt}}),{c(){S(t.$$.fragment),e=I(),S(n.$$.fragment)},l(a){w(t.$$.fragment,a),e=y(a),w(n.$$.fragment,a)},m(a,l){H(t,a,l),k(a,e,l),H(n,a,l),s=!0},p:st,i(a){s||(E(t.$$.fragment,a),E(n.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),x(n.$$.fragment,a),s=!1},d(a){D(t,a),a&&r(e),D(n,a)}}}class Nt extends J{constructor(t){super();Q(this,t,null,Ot,U,{})}}export{Nt as default};
