import{V as he,D as pe,S as Z,i as W,s as $,N as y,C as V,e as R,c as w,a as A,d as P,a0 as M,g as L,ab as z,O as T,P as E,Q as I,z as se,q as h,o as p,ac as Pe,a2 as X,a4 as B,a5 as C,I as ke,b as U,f as ne,a1 as ae,L as ge,X as N,v as He,ak as ye,w as F,x as K,y as G,B as O,k as x,m as ee,n as Q,p as j,a3 as Te}from"./vendor-3f5aaa84.js";import{b as Ee,a as ve,g as te,W as q,V as J,S as le,c as ie,u as Ie,k as ze}from"./File.svelte_svelte_type_style_lang-4a5bcc41.js";import{S as Ce}from"./Separator-c92f63da.js";import{T as Se}from"./Text-c894d276.js";const Le="vkui_SplitColContext",Ve=()=>he(Le)||pe({colRef:null,animate:!0});function Re(s){let t,n,e,l;const a=s[4].default,u=y(a,s,s[3],null);let m=[s[1]],i={};for(let c=0;c<m.length;c+=1)i=V(i,m[c]);return{c(){t=R("div"),u&&u.c(),this.h()},l(c){t=w(c,"DIV",{});var f=A(t);u&&u.l(f),f.forEach(P),this.h()},h(){M(t,i)},m(c,f){L(c,t,f),u&&u.m(t,null),s[15](t),n=!0,e||(l=[z(t,"click",s[5]),z(t,"dragstart",s[6]),z(t,"mouseover",s[7]),z(t,"mouseout",s[8]),z(t,"blur",s[9]),z(t,"focus",s[10]),z(t,"mouseleave",s[11]),z(t,"pointerleave",s[12]),z(t,"mouseenter",s[13]),z(t,"pointerenter",s[14])],e=!0)},p(c,[f]){u&&u.p&&(!n||f&8)&&T(u,a,c,c[3],n?I(a,c[3],f,null):E(c[3]),null),M(t,i=se(m,[f&2&&c[1]]))},i(c){n||(h(u,c),n=!0)},o(c){p(u,c),n=!1},d(c){c&&P(t),u&&u.d(c),s[15](null),e=!1,Pe(l)}}}function we(s,t,n){const e=["this_","fixed"];let l=X(t,e),{$$slots:a={},$$scope:u}=t,{this_:m=void 0}=t,{fixed:i=!1}=t;function c(r){C.call(this,s,r)}function f(r){C.call(this,s,r)}function k(r){C.call(this,s,r)}function v(r){C.call(this,s,r)}function _(r){C.call(this,s,r)}function d(r){C.call(this,s,r)}function o(r){C.call(this,s,r)}function g(r){C.call(this,s,r)}function H(r){C.call(this,s,r)}function S(r){C.call(this,s,r)}function D(r){ke[r?"unshift":"push"](()=>{m=r,n(0,m)})}return s.$$set=r=>{t=V(V({},t),B(r)),n(1,l=X(t,e)),"this_"in r&&n(0,m=r.this_),"fixed"in r&&n(2,i=r.fixed),"$$scope"in r&&n(3,u=r.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(1,l["data-tooltip-container"]=i?"fixed":"true",l)},[m,l,i,u,a,c,f,k,v,_,d,o,g,H,S,D]}class Ae extends Z{constructor(t){super();W(this,t,we,Re,$,{this_:0,fixed:2})}}function De(s){let t,n,e;const l=s[11].default,a=y(l,s,s[10],null);let u=[{"data-tooltip-container":"fixed"},s[5],{style:s[0]}],m={};for(let i=0;i<u.length;i+=1)m=V(m,u[i]);return{c(){t=R("div"),n=R("div"),a&&a.c(),this.h()},l(i){t=w(i,"DIV",{"data-tooltip-container":!0,style:!0});var c=A(t);n=w(c,"DIV",{class:!0});var f=A(n);a&&a.l(f),f.forEach(P),c.forEach(P),this.h()},h(){U(n,"class","FixedLayout__in"),M(t,m),ne(t,"width",s[1],!1),ae(t,"svelte-4gt3zs",!0)},m(i,c){L(i,t,c),ge(t,n),a&&a.m(n,null),e=!0},p(i,[c]){a&&a.p&&(!e||c&1024)&&T(a,l,i,i[10],e?I(l,i[10],c,null):E(i[10]),null),M(t,m=se(u,[{"data-tooltip-container":"fixed"},c&32&&i[5],(!e||c&1)&&{style:i[0]}])),ne(t,"width",i[1],!1),ae(t,"svelte-4gt3zs",!0)},i(i){e||(h(a,i),e=!0)},o(i){p(a,i),e=!1},d(i){i&&P(t),a&&a.d(i)}}}function Ne(s,t,n){const e=["vertical","filled","style"];let l=X(t,e),a,u,m,{$$slots:i={},$$scope:c}=t,{vertical:f=void 0}=t,{filled:k=!1}=t,{style:v=""}=t;const _=Ee();N(s,_,r=>n(9,u=r));const d=Ve();N(s,d,r=>n(12,m=r));let o="";const g=()=>{n(1,o=m.colRef?`${m.colRef.offsetWidth}px`:"")};let H;const S=r=>(r==null||r.addEventListener("resize",g,!1),g(),()=>r==null?void 0:r.removeEventListener("resize",g,!1));He(()=>H);const D=ve();return N(s,D,r=>n(8,a=r)),s.$$set=r=>{n(16,t=V(V({},t),B(r))),n(5,l=X(t,e)),"vertical"in r&&n(6,f=r.vertical),"filled"in r&&n(7,k=r.filled),"style"in r&&n(0,v=r.style),"$$scope"in r&&n(10,c=r.$$scope)},s.$$.update=()=>{s.$$.dirty&512&&S(u.window),n(5,l.class=ye(te("FixedLayout",a),{"FixedLayout--filled":k},`FixedLayout--${f}`,t.class),l)},t=B(t),[v,o,_,d,D,l,f,k,a,u,c,i]}class Me extends Z{constructor(t){super();W(this,t,Ne,De,$,{vertical:6,filled:7,style:0})}}const Xe=s=>({}),re=s=>({}),Fe=s=>({}),fe=s=>({});function Ke(s){let t,n;const e=s[3].default,l=y(e,s,s[4],null);return{c(){t=R("span"),l&&l.c(),this.h()},l(a){t=w(a,"SPAN",{class:!0});var u=A(t);l&&l.l(u),u.forEach(P),this.h()},h(){U(t,"class","PanelHeader__content-in")},m(a,u){L(a,t,u),l&&l.m(t,null),n=!0},p(a,u){l&&l.p&&(!n||u&16)&&T(l,e,a,a[4],n?I(e,a[4],u,null):E(a[4]),null)},i(a){n||(h(l,a),n=!0)},o(a){p(l,a),n=!1},d(a){a&&P(t),l&&l.d(a)}}}function Ge(s){let t,n;return t=new Se({props:{weight:"medium",$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,l){const a={};l&16&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Oe(s){let t;const n=s[3].default,e=y(n,s,s[4],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&16)&&T(e,n,l,l[4],t?I(n,l[4],a,null):E(l[4]),null)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function oe(s){let t;const n=s[3].right,e=y(n,s,s[4],re);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&16)&&T(e,n,l,l[4],t?I(n,l[4],a,Xe):E(l[4]),re)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function Ue(s){let t,n,e,l,a,u,m,i;const c=s[3].left,f=y(c,s,s[4],fe),k=[Ge,Ke],v=[];function _(o,g){return o[2]===J?0:1}l=_(s),a=v[l]=k[l](s);let d=(s[0]===q.INTERNAL||s[1])&&oe(s);return{c(){t=R("div"),f&&f.c(),n=x(),e=R("div"),a.c(),u=x(),m=R("div"),d&&d.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var g=A(t);f&&f.l(g),g.forEach(P),n=ee(o),e=w(o,"DIV",{class:!0});var H=A(e);a.l(H),H.forEach(P),u=ee(o),m=w(o,"DIV",{class:!0});var S=A(m);d&&d.l(S),S.forEach(P),this.h()},h(){U(t,"class","PanelHeader__left"),U(e,"class","PanelHeader__content"),U(m,"class","PanelHeader__right")},m(o,g){L(o,t,g),f&&f.m(t,null),L(o,n,g),L(o,e,g),v[l].m(e,null),L(o,u,g),L(o,m,g),d&&d.m(m,null),i=!0},p(o,g){f&&f.p&&(!i||g&16)&&T(f,c,o,o[4],i?I(c,o[4],g,Fe):E(o[4]),fe);let H=l;l=_(o),l===H?v[l].p(o,g):(Q(),p(v[H],1,1,()=>{v[H]=null}),j(),a=v[l],a?a.p(o,g):(a=v[l]=k[l](o),a.c()),h(a,1),a.m(e,null)),o[0]===q.INTERNAL||o[1]?d?(d.p(o,g),g&3&&h(d,1)):(d=oe(o),d.c(),h(d,1),d.m(m,null)):d&&(Q(),p(d,1,1,()=>{d=null}),j())},i(o){i||(h(f,o),h(a),h(d),i=!0)},o(o){p(f,o),p(a),p(d),i=!1},d(o){o&&P(t),f&&f.d(o),o&&P(n),o&&P(e),v[l].d(),o&&P(u),o&&P(m),d&&d.d()}}}function qe(s){let t,n;return t=new Ae({props:{fixed:!0,class:"PanelHeader__in",$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,[l]){const a={};l&23&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Be(s,t,n){let{$$slots:e={},$$scope:l}=t,{webviewType:a}=t,{isInsideModal:u}=t,{platform:m}=t;return s.$$set=i=>{"webviewType"in i&&n(0,a=i.webviewType),"isInsideModal"in i&&n(1,u=i.isInsideModal),"platform"in i&&n(2,m=i.platform),"$$scope"in i&&n(4,l=i.$$scope)},[a,u,m,e,l]}class be extends Z{constructor(t){super();W(this,t,Be,qe,$,{webviewType:0,isInsideModal:1,platform:2})}}const Qe=s=>({}),ue=s=>({slot:"left"}),je=s=>({}),_e=s=>({slot:"right"}),Je=s=>({}),ce=s=>({slot:"left"}),Ye=s=>({}),de=s=>({slot:"right"});function Ze(s){let t,n;return t=new be({props:{webviewType:s[7],isInsideModal:Y,platform:s[3],$$slots:{right:[et],left:[xe],default:[$e]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,l){const a={};l&128&&(a.webviewType=e[7]),l&8&&(a.platform=e[3]),l&65536&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function We(s){let t,n;return t=new Me({props:{class:"PanelHeader__fixed",vertical:"top",$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,l){const a={};l&65672&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function $e(s){let t;const n=s[15].default,e=y(n,s,s[16],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,null):E(l[16]),null)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function xe(s){let t;const n=s[15].left,e=y(n,s,s[16],ue);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,Qe):E(l[16]),ue)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function et(s){let t;const n=s[15].right,e=y(n,s,s[16],_e);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,je):E(l[16]),_e)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function tt(s){let t;const n=s[15].default,e=y(n,s,s[16],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,null):E(l[16]),null)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function lt(s){let t;const n=s[15].left,e=y(n,s,s[16],ce);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,Je):E(l[16]),ce)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function st(s){let t;const n=s[15].right,e=y(n,s,s[16],de);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&65536)&&T(e,n,l,l[16],t?I(n,l[16],a,Ye):E(l[16]),de)},i(l){t||(h(e,l),t=!0)},o(l){p(e,l),t=!1},d(l){e&&e.d(l)}}}function nt(s){let t,n;return t=new be({props:{webviewType:s[7],isInsideModal:Y,platform:s[3],$$slots:{right:[st],left:[lt],default:[tt]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,l){const a={};l&128&&(a.webviewType=e[7]),l&8&&(a.platform=e[3]),l&65536&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function me(s){let t,n;return t=new Ce({props:{class:"PanelHeader__separator",expanded:s[4].sizeX===le.REGULAR}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,l){G(t,e,l),n=!0},p(e,l){const a={};l&16&&(a.expanded=e[4].sizeX===le.REGULAR),t.$set(a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function at(s){let t,n,e,l,a,u;const m=[We,Ze],i=[];function c(_,d){return _[5]?0:1}n=c(s),e=i[n]=m[n](s);let f=s[0]&&s[2]&&s[3]!==J&&me(s),k=[s[11],{class:a=ie(s[11].class,te("PanelHeader",s[3]),{"PanelHeader--trnsp":s[1],"PanelHeader--shadow":s[6],"PanelHeader--vis":s[2],"PanelHeader--sep":s[0]&&s[2],"PanelHeader--vkapps":s[7]===q.VKAPPS&&!Y,"PanelHeader--no-left":!s[12].left,"PanelHeader--no-right":!s[12].right,"PanelHeader--fixed":s[5]},`PanelHeader--sizeX-${s[4].sizeX}`)}],v={};for(let _=0;_<k.length;_+=1)v=V(v,k[_]);return{c(){t=R("div"),e.c(),l=x(),f&&f.c(),this.h()},l(_){t=w(_,"DIV",{class:!0});var d=A(t);e.l(d),l=ee(d),f&&f.l(d),d.forEach(P),this.h()},h(){M(t,v)},m(_,d){L(_,t,d),i[n].m(t,null),ge(t,l),f&&f.m(t,null),u=!0},p(_,[d]){let o=n;n=c(_),n===o?i[n].p(_,d):(Q(),p(i[o],1,1,()=>{i[o]=null}),j(),e=i[n],e?e.p(_,d):(e=i[n]=m[n](_),e.c()),h(e,1),e.m(t,l)),_[0]&&_[2]&&_[3]!==J?f?(f.p(_,d),d&13&&h(f,1)):(f=me(_),f.c(),h(f,1),f.m(t,null)):f&&(Q(),p(f,1,1,()=>{f=null}),j()),M(t,v=se(k,[d&2048&&_[11],(!u||d&6399&&a!==(a=ie(_[11].class,te("PanelHeader",_[3]),{"PanelHeader--trnsp":_[1],"PanelHeader--shadow":_[6],"PanelHeader--vis":_[2],"PanelHeader--sep":_[0]&&_[2],"PanelHeader--vkapps":_[7]===q.VKAPPS&&!Y,"PanelHeader--no-left":!_[12].left,"PanelHeader--no-right":!_[12].right,"PanelHeader--fixed":_[5]},`PanelHeader--sizeX-${_[4].sizeX}`)))&&{class:a}]))},i(_){u||(h(e),h(f),u=!0)},o(_){p(e),p(f),u=!1},d(_){_&&P(t),i[n].d(),f&&f.d()}}}const Y=!1;function it(s,t,n){let e,l;const a=["separator","transparent","shadow","visor","fixed"];let u=X(t,a),m,i,c,{$$slots:f={},$$scope:k}=t;const v=Te(f);let{separator:_=!0}=t,{transparent:d=!0}=t,{shadow:o=!1}=t,{visor:g=!0}=t,{fixed:H=void 0}=t;const S=Ie();N(s,S,b=>n(4,i=b));const D=ve();N(s,D,b=>n(3,m=b));const r=he(ze.webviewType)||pe(q.VKAPPS);return N(s,r,b=>n(7,c=b)),s.$$set=b=>{t=V(V({},t),B(b)),n(11,u=X(t,a)),"separator"in b&&n(0,_=b.separator),"transparent"in b&&n(1,d=b.transparent),"shadow"in b&&n(13,o=b.shadow),"visor"in b&&n(2,g=b.visor),"fixed"in b&&n(14,H=b.fixed),"$$scope"in b&&n(16,k=b.$$scope)},s.$$.update=()=>{s.$$.dirty&8208&&n(6,e=o&&i.sizeX===le.REGULAR),s.$$.dirty&16392&&n(5,l=H!==void 0?H:m!==J)},[_,d,g,m,i,l,e,c,S,D,r,u,v,o,H,f,k]}class _t extends Z{constructor(t){super();W(this,t,it,at,$,{separator:0,transparent:1,shadow:13,visor:2,fixed:14})}}export{_t as P,Ae as T};