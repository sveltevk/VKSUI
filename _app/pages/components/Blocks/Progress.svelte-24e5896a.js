import{S as N,i as C,s as H,C as R,e as _,k as h,c as d,a as k,d as u,m as w,b as g,f as L,a4 as j,a1 as q,g as v,T as P,z as X,N as A,a5 as F,M as J,a7 as G,t as O,w as E,h as T,x as D,y as b,q as S,o as y,B as M}from"../../../chunks/vendor-5b7ee37b.js";import{S as K}from"../../../chunks/Showcase-99463763.js";import{f as U,h as z,a as Q}from"../../../chunks/File.svelte_svelte_type_style_lang-56a031c4.js";import{D as W}from"../../../chunks/Div-c13fe611.js";import{A as Y}from"../../../chunks/APIDocs-6f0684b7.js";function Z(o){let s,n,a,t,e=`${o[1]}%`,p,m=[{"aria-valuenow":o[0]},o[4],{class:p=U(z("Progress",o[2]),o[5].class)},{role:"progressbar"},{"aria-valuemin":I},{"aria-valuemax":V}],f={};for(let r=0;r<m.length;r+=1)f=R(f,m[r]);return{c(){s=_("div"),n=_("div"),a=h(),t=_("div"),this.h()},l(r){s=d(r,"DIV",{"aria-valuenow":!0,class:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0});var c=k(s);n=d(c,"DIV",{class:!0,"aria-hidden":!0}),k(n).forEach(u),a=w(c),t=d(c,"DIV",{class:!0,"aria-hidden":!0}),k(t).forEach(u),c.forEach(u),this.h()},h(){g(n,"class","Progress__bg"),g(n,"aria-hidden","true"),g(t,"class","Progress__in svelte-v1sg62"),g(t,"aria-hidden","true"),L(t,"width",e,!1),j(s,f),q(s,"svelte-v1sg62",!0)},m(r,c){v(r,s,c),P(s,n),P(s,a),P(s,t)},p(r,[c]){c&2&&e!==(e=`${r[1]}%`)&&L(t,"width",e,!1),j(s,f=X(m,[c&1&&{"aria-valuenow":r[0]},c&16&&r[4],c&36&&p!==(p=U(z("Progress",r[2]),r[5].class))&&{class:p},{role:"progressbar"},{"aria-valuemin":I},{"aria-valuemax":V}])),q(s,"svelte-v1sg62",!0)},i:A,o:A,d(r){r&&u(s)}}}const I=0,V=100;function ss(o,s,n){let a;const t=["value"];let e=F(s,t),p,{value:m=0}=s;const f=Q();return J(o,f,r=>n(2,p=r)),o.$$set=r=>{n(5,s=R(R({},s),G(r))),n(4,e=F(s,t)),"value"in r&&n(0,m=r.value)},o.$$.update=()=>{o.$$.dirty&1&&n(1,a=Math.max(I,Math.min(m,V)))},s=G(s),[m,a,p,f,e,s]}class as extends N{constructor(s){super();C(this,s,ss,Z,H,{value:0})}}function es(o){let s,n;return s=new as({props:{value:40}}),{c(){E(s.$$.fragment)},l(a){D(s.$$.fragment,a)},m(a,t){b(s,a,t),n=!0},p:A,i(a){n||(S(s.$$.fragment,a),n=!0)},o(a){y(s.$$.fragment,a),n=!1},d(a){M(s,a)}}}function ts(o){let s,n;return s=new W({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),{c(){E(s.$$.fragment)},l(a){D(s.$$.fragment,a)},m(a,t){b(s,a,t),n=!0},p(a,t){const e={};t&1&&(e.$$scope={dirty:t,ctx:a}),s.$set(e)},i(a){n||(S(s.$$.fragment,a),n=!0)},o(a){y(s.$$.fragment,a),n=!1},d(a){M(s,a)}}}function ns(o){let s,n,a,t,e,p,m,f,r,c=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Div<span class="token punctuation">,</span> Progress <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">40</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Div</span><span class="token punctuation">></span></span></code>`,x;return t=new K({props:{scroll:!0,$$slots:{default:[ts]},$$scope:{ctx:o}}}),{c(){s=_("h1"),n=O("Progress"),a=h(),E(t.$$.fragment),e=h(),p=_("h2"),m=O("\u041A\u043E\u0434"),f=h(),r=_("pre"),this.h()},l(l){s=d(l,"H1",{id:!0});var i=k(s);n=T(i,"Progress"),i.forEach(u),a=w(l),D(t.$$.fragment,l),e=w(l),p=d(l,"H2",{id:!0});var $=k(p);m=T($,"\u041A\u043E\u0434"),$.forEach(u),f=w(l),r=d(l,"PRE",{class:!0});var B=k(r);B.forEach(u),this.h()},h(){g(s,"id","progress"),g(p,"id","\u043A\u043E\u0434"),g(r,"class","language-svelte")},m(l,i){v(l,s,i),P(s,n),v(l,a,i),b(t,l,i),v(l,e,i),v(l,p,i),P(p,m),v(l,f,i),v(l,r,i),r.innerHTML=c,x=!0},p(l,[i]){const $={};i&1&&($.$$scope={dirty:i,ctx:l}),t.$set($)},i(l){x||(S(t.$$.fragment,l),x=!0)},o(l){y(t.$$.fragment,l),x=!1},d(l){l&&u(s),l&&u(a),M(t,l),l&&u(e),l&&u(p),l&&u(f),l&&u(r)}}}class rs extends N{constructor(s){super();C(this,s,null,ns,H,{})}}var ls={props:[{name:"value",kind:"let",type:"number",value:"0",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[],events:[],typedefs:[],rest_props:{type:"Element",name:"div"}};function os(o){let s,n,a,t;return s=new rs({}),a=new Y({props:{data:ls}}),{c(){E(s.$$.fragment),n=h(),E(a.$$.fragment)},l(e){D(s.$$.fragment,e),n=w(e),D(a.$$.fragment,e)},m(e,p){b(s,e,p),v(e,n,p),b(a,e,p),t=!0},p:A,i(e){t||(S(s.$$.fragment,e),S(a.$$.fragment,e),t=!0)},o(e){y(s.$$.fragment,e),y(a.$$.fragment,e),t=!1},d(e){M(s,e),e&&u(n),M(a,e)}}}class ms extends N{constructor(s){super();C(this,s,null,os,H,{})}}export{ms as default};
