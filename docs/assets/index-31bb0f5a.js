(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function Ht(e,t){if(B(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(B(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bt(e){var t=Ht(e,"string");return B(t)==="symbol"?t:String(t)}function Gt(e,t,i){return t=Bt(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function et(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),i.push.apply(i,n)}return i}function it(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?et(Object(i),!0).forEach(function(n){Gt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):et(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function E(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var nt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),W=function(){return Math.random().toString(36).substring(7).split("").join(".")},at={INIT:"@@redux/INIT"+W(),REPLACE:"@@redux/REPLACE"+W(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+W()}};function Vt(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function bt(e,t,i){var n;if(typeof t=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof i>"u"&&(i=t,t=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(E(1));return i(bt)(e,t)}if(typeof e!="function")throw new Error(E(2));var a=e,r=t,o=[],u=o,l=!1;function p(){u===o&&(u=o.slice())}function f(){if(l)throw new Error(E(3));return r}function h(b){if(typeof b!="function")throw new Error(E(4));if(l)throw new Error(E(5));var g=!0;return p(),u.push(b),function(){if(g){if(l)throw new Error(E(6));g=!1,p();var C=u.indexOf(b);u.splice(C,1),o=null}}}function m(b){if(!Vt(b))throw new Error(E(7));if(typeof b.type>"u")throw new Error(E(8));if(l)throw new Error(E(9));try{l=!0,r=a(r,b)}finally{l=!1}for(var g=o=u,S=0;S<g.length;S++){var C=g[S];C()}return b}function y(b){if(typeof b!="function")throw new Error(E(10));a=b,m({type:at.REPLACE})}function O(){var b,g=h;return b={subscribe:function(C){if(typeof C!="object"||C===null)throw new Error(E(11));function tt(){C.next&&C.next(f())}tt();var Dt=g(tt);return{unsubscribe:Dt}}},b[nt]=function(){return this},b}return m({type:at.INIT}),n={dispatch:m,subscribe:h,getState:f,replaceReducer:y},n[nt]=O,n}var jt=bt;function Ut(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,a){return function(){return n(a.apply(void 0,arguments))}})}function qt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return function(){var a=n.apply(void 0,arguments),r=function(){throw new Error(E(15))},o={getState:a.getState,dispatch:function(){return r.apply(void 0,arguments)}},u=t.map(function(l){return l(o)});return r=Ut.apply(void 0,u)(a.dispatch),it(it({},a),{},{dispatch:r})}}}const v={TOGGLE_THEME:"TOGGLE_THEME",SET_ORIENTATION:"SET_ORIENTATION",SET_GROUP:"SET_GROUP",SET_VARIANT:"SET_VARIANT",SET_VARIANT_PANEL:"SET_VARIANT_PANEL",RESET:"RESET",UNLOCKED:"UNLOCKED",TOGGLE_LOADING:"TOGGLE_LOADING",FILTERED:"FILTERED",VISITED:"VISITED",SET_KIND:"SET_KIND"},Ft=e=>({type:v.SET_ORIENTATION,payload:e}),Zt=e=>({type:v.SET_VARIANT,payload:e}),Wt=e=>({type:v.SET_VARIANT_PANEL,payload:e}),Kt=e=>({type:v.SET_GROUP,payload:e}),Qt=()=>({type:v.TOGGLE_THEME}),Yt=e=>({type:v.FILTERED,payload:e}),Xt=e=>({type:v.VISITED,payload:e}),Jt=e=>({type:v.SET_KIND,payload:e}),te=e=>{switch(e){case v.SET_ORIENTATION:return Ft;case v.TOGGLE_THEME:return Qt;case v.SET_GROUP:return Kt;case v.SET_VARIANT:return Zt;case v.SET_VARIANT_PANEL:return Wt;case v.FILTERED:return Yt;case v.VISITED:return Xt;case v.SET_KIND:return Jt;default:return()=>({})}};function $t(e){var t=function(n){var a=n.dispatch,r=n.getState;return function(o){return function(u){return typeof u=="function"?u(a,r,e):o(u)}}};return t}var yt=$t();yt.withExtraArgument=$t;const ee=yt,ie=[{label:"Button",value:"button",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Links and Buttons"},{label:"Checkbox",value:"checkbox",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Input",value:"input",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Progress",value:"progress",kind:"form",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Radio",value:"radio",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Range",value:"range",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Horizontal/Vertical with meter"},{label:"Select",value:"select",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Accent color and multiple"},{label:"Switch",value:"switch",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"}],ne=[{label:"Avatar",value:"avatar",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Sizes with custom CSS properties"},{label:"Hero",value:"hero",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Dimm background to pop CTA"},{label:"Icon",value:"icon",kind:"media",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Image",value:"image",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Picture"}],ae=[{label:"Action Sheet",value:"action-sheet",kind:"group",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Article",value:"article",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Text clamped, images full width"},{label:"Card",value:"card",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Ratio cards"},{label:"Group",value:"group",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Flex & Grid <3 "},{label:"List",value:"list",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Panel",value:"panel",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Group content and interactions"},{label:"Scroller",value:"scroller",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Group content"},{label:"Table",value:"table",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Tabular love"},{label:"Tabs",value:"tabs",kind:"group",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Tray",value:"tray",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Personal fav"}],re=[{label:"Lobotomized Owl",value:"lobotomized-owl",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"*>*",hidden:!0},{label:"Border",value:"border",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Fit",value:"fit",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Personal Fav"},{label:"Font",value:"font",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Gap",value:"gap",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Gradient",value:"gradient",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Hide",value:"hide",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Margin Auto",value:"margin-auto",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Personal Fav"},{label:"Mask",value:"mask",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Overflow",value:"overflow",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"..."},{label:"Padding",value:"padding",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Paper",value:"paper",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Surfaces"},{label:"Place",value:"place",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Print",value:"print",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Do not print",hidden:!0},{label:"Ratio",value:"ratio",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Personal Fav"},{label:"Reorder",value:"reorder",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0},{label:"Util",value:"util",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"...",hidden:!0}],q=[{label:"Reset",value:"reset",kind:"theme",src:"https://github.com/polmoneys/data-css",description:"Minimal"},{label:"Tokens",value:"tokens",kind:"theme",src:"https://github.com/polmoneys/data-css",description:"Custom CSS properties"},{label:"",value:"",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},...ie,{label:"",value:"",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},...ne,{label:"",value:"",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},...ae,{label:"",value:"",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},...re],oe={lightTheme:!0,orientation:"landscape",group:void 0,variant:"pic",variantPanel:"actions",unlocked:[],loading:!0,filtered:q,kind:void 0,visited:[]};function _(e,t,i){const n=te(t);e.dispatch(n(i))}function se(e=oe,t){switch(t.type){case v.TOGGLE_THEME:return{...e,lightTheme:!e.lightTheme};case v.SET_ORIENTATION:return{...e,orientation:t.payload};case v.SET_GROUP:return{...e,group:t.payload};case v.SET_VARIANT:return{...e,variant:t.payload};case v.SET_VARIANT_PANEL:return{...e,variantPanel:t.payload};case v.FILTERED:return{...e,filtered:t.payload};case v.SET_KIND:return{...e,kind:t.payload};case v.VISITED:return{...e,visited:t.payload};default:return e}}const $=jt(se,qt(ee)),le={onQuery:null,onNavigate:null,onSelect:null,onRender:null,debounce:100};function de(e,t={}){const i={...le,...t};let n,a=0,r=[],o,u;e.autocomplete="off",["input","keydown","blur","focus"].forEach(g=>e.addEventListener(g,l));function l(g){if(!(g.type==="keydown"&&p(g))){if(g.type==="blur"){b();return}if(g.target.value===""){b(),o=null;return}g.target.value!==o&&(o=g.target.value,clearTimeout(u),u=setTimeout(f,i.debounce))}}function p(g){if(!n)return!0;switch(g.keyCode){case 38:return y(-1,g);case 40:return y(1,g);case 13:O(a),b();return;case 27:b();return}}async function f(){if(o){if(r=await i.onQuery(o),!r.length){b();return}n||h(),m()}}function h(){n=document.createElement("div"),Object.assign(n.style,{width:window.getComputedStyle(e).width,position:"absolute",left:`${e.offsetLeft}px`,top:`${e.offsetTop+e.offsetHeight}px`}),n.classList.add("autocomp"),e.parentNode.insertBefore(n,e.nextSibling)}function m(){n.innerHTML="",r.forEach((g,S)=>{const C=document.createElement("div");C.classList.add("autocomp-item"),i.onRender?C.appendChild(i.onRender(g)):C.innerText=g,S===a&&C.classList.add("autocomp-sel"),C.addEventListener("mousedown",()=>O(S)),n.appendChild(C)})}function y(g,S){S.preventDefault();const C=n.querySelector(`:nth-child(${a+1})`);C&&C.classList.remove("autocomp-sel"),a=(a+g+r.length)%r.length,n.querySelector(`:nth-child(${a+1})`).classList.add("autocomp-sel")}function O(g){i.onSelect&&(o=i.onSelect(r[g]),e.value=o||r[g])}function b(){r=[],a=0,n&&(n.remove(),n=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const F=window,M=F.trustedTypes,rt=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,X="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+I,ce=`<${Ct}>`,N=document,G=()=>N.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",wt=Array.isArray,ue=e=>wt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,R=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,At=/^(?:script|style|textarea|title)$/i,xt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),s=xt(1),A=xt(2),z=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),ct=new WeakMap,P=N.createTreeWalker(N,129,null,!1);function _t(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const pe=(e,t)=>{const i=e.length-1,n=[];let a,r=t===2?"<svg>":"",o=H;for(let u=0;u<i;u++){const l=e[u];let p,f,h=-1,m=0;for(;m<l.length&&(o.lastIndex=m,f=o.exec(l),f!==null);)m=o.lastIndex,o===H?f[1]==="!--"?o=ot:f[1]!==void 0?o=st:f[2]!==void 0?(At.test(f[2])&&(a=RegExp("</"+f[2],"g")),o=R):f[3]!==void 0&&(o=R):o===R?f[0]===">"?(o=a??H,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,p=f[1],o=f[3]===void 0?R:f[3]==='"'?dt:lt):o===dt||o===lt?o=R:o===ot||o===st?o=H:(o=R,a=void 0);const y=o===R&&e[u+1].startsWith("/>")?" ":"";r+=o===H?l+ce:h>=0?(n.push(p),l.slice(0,h)+X+l.slice(h)+I+y):l+I+(h===-2?(n.push(void 0),u):y)}return[_t(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),n]};class j{constructor({strings:t,_$litType$:i},n){let a;this.parts=[];let r=0,o=0;const u=t.length-1,l=this.parts,[p,f]=pe(t,i);if(this.el=j.createElement(p,n),P.currentNode=this.el.content,i===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(a=P.nextNode())!==null&&l.length<u;){if(a.nodeType===1){if(a.hasAttributes()){const h=[];for(const m of a.getAttributeNames())if(m.endsWith(X)||m.startsWith(I)){const y=f[o++];if(h.push(m),y!==void 0){const O=a.getAttribute(y.toLowerCase()+X).split(I),b=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:b[2],strings:O,ctor:b[1]==="."?he:b[1]==="?"?ge:b[1]==="@"?me:Z})}else l.push({type:6,index:r})}for(const m of h)a.removeAttribute(m)}if(At.test(a.tagName)){const h=a.textContent.split(I),m=h.length-1;if(m>0){a.textContent=M?M.emptyScript:"";for(let y=0;y<m;y++)a.append(h[y],G()),P.nextNode(),l.push({type:2,index:++r});a.append(h[m],G())}}}else if(a.nodeType===8)if(a.data===Ct)l.push({type:2,index:r});else{let h=-1;for(;(h=a.data.indexOf(I,h+1))!==-1;)l.push({type:7,index:r}),h+=I.length-1}r++}}static createElement(t,i){const n=N.createElement("template");return n.innerHTML=t,n}}function D(e,t,i=e,n){var a,r,o,u;if(t===z)return t;let l=n!==void 0?(a=i._$Co)===null||a===void 0?void 0:a[n]:i._$Cl;const p=V(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==p&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),p===void 0?l=void 0:(l=new p(e),l._$AT(e,i,n)),n!==void 0?((o=(u=i)._$Co)!==null&&o!==void 0?o:u._$Co=[])[n]=l:i._$Cl=l),l!==void 0&&(t=D(e,l._$AS(e,t.values),l,n)),t}class ve{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:n},parts:a}=this._$AD,r=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:N).importNode(n,!0);P.currentNode=r;let o=P.nextNode(),u=0,l=0,p=a[0];for(;p!==void 0;){if(u===p.index){let f;p.type===2?f=new U(o,o.nextSibling,this,t):p.type===1?f=new p.ctor(o,p.name,p.strings,this,t):p.type===6&&(f=new be(o,this,t)),this._$AV.push(f),p=a[++l]}u!==(p==null?void 0:p.index)&&(o=P.nextNode(),u++)}return P.currentNode=N,r}v(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class U{constructor(t,i,n,a){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=a,this._$Cp=(r=a==null?void 0:a.isConnected)===null||r===void 0||r}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=D(this,t,i),V(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ue(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var i;const{values:n,_$litType$:a}=t,r=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=j.createElement(_t(a.h,a.h[0]),this.options)),a);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(n);else{const o=new ve(r,this),u=o.u(this.options);o.v(n),this.$(u),this._$AH=o}}_$AC(t){let i=ct.get(t.strings);return i===void 0&&ct.set(t.strings,i=new j(t)),i}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,a=0;for(const r of t)a===i.length?i.push(n=new U(this.k(G()),this.k(G()),this,this.options)):n=i[a],n._$AI(r),a++;a<i.length&&(this._$AR(n&&n._$AB.nextSibling,a),i.length=a)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,i);t&&t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class Z{constructor(t,i,n,a,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=a,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,n,a){const r=this.strings;let o=!1;if(r===void 0)t=D(this,t,i,0),o=!V(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const u=t;let l,p;for(t=r[0],l=0;l<r.length-1;l++)p=D(this,u[n+l],i,l),p===z&&(p=this._$AH[l]),o||(o=!V(p)||p!==this._$AH[l]),p===w?t=w:t!==w&&(t+=(p??"")+r[l+1]),this._$AH[l]=p}o&&!a&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class he extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const fe=M?M.emptyScript:"";class ge extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,fe):this.element.removeAttribute(this.name)}}class me extends Z{constructor(t,i,n,a,r){super(t,i,n,a,r),this.type=5}_$AI(t,i=this){var n;if((t=(n=D(this,t,i,0))!==null&&n!==void 0?n:w)===z)return;const a=this._$AH,r=t===w&&a!==w||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,o=t!==w&&(a===w||r);r&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,n;typeof this._$AH=="function"?this._$AH.call((n=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const ut=F.litHtmlPolyfillSupport;ut==null||ut(j,U),((K=F.litHtmlVersions)!==null&&K!==void 0?K:F.litHtmlVersions=[]).push("2.8.0");const k=(e,t,i)=>{var n,a;const r=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:t;let o=r._$litPart$;if(o===void 0){const u=(a=i==null?void 0:i.renderBefore)!==null&&a!==void 0?a:null;r._$litPart$=o=new U(t.insertBefore(G(),u),u,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ye=e=>(...t)=>({_$litDirective$:e,values:t});let Ce=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et="important",we=" !"+Et,Ae=ye(class extends Ce{constructor(e){var t;if(super(e),e.type!==$e.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ht===void 0){this.ht=new Set;for(const n in t)this.ht.add(n);return this.render(t)}this.ht.forEach(n=>{t[n]==null&&(this.ht.delete(n),n.includes("-")?i.removeProperty(n):i[n]="")});for(const n in t){const a=t[n];if(a!=null){this.ht.add(n);const r=typeof a=="string"&&a.endsWith(we);n.includes("-")||r?i.setProperty(n,r?a.slice(0,-11):a,r?Et:""):i[n]=a}}return z}});function d(e){const{vertices:t,size:i,fill:n,label:a,transforms:r,children:o=!1}=e;return Ee({children:o,vertices:t,size:i,fill:n,label:a,transforms:r})}let Tt=function(e){return Math.PI*e/180},xe=function(e,t,i){return i+e*Math.cos(Tt(t))},_e=function(e,t,i){return i+e*Math.sin(Tt(t))},pt=function(e){return e<1e-7?0:e};const Ee=e=>{let t=e.size||96,i=t/2,n=1*t/2,a=360/e.vertices,r=90,o=e.fill||"red",u=[0,0,t,t].join(" ");const p=[function(f){for(var h=[],m=0;m<f;m++){var y=a*m-r,O=[m===0?"M":"L",pt(xe(n,y,i)),pt(_e(n,y,i))].join(" ");h.push(O)}return h.join(" ")}(e.vertices)].join(" ");return e.children?s`
            <div class="col-center align-center shape-with-label">
                ${Y(t,u,o,p,e.transforms)}
                ${e.children}
            </div>
        `:e.label?s`
            <div class="col-center align-center shape-with-label">
                ${Y(t,u,o,p,e.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${e.label}
                </p>
            </div>
        `:s` ${Y(t,u,o,p,e.transforms)} `};function Y(e,t,i,n,a){if(a){let r={transformOrigin:"center",transform:`${a}`};return A`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
    style="${Ae(r)}"
  >
    <path d=${n} />
  </svg>`}else return A`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
  >
    <path d=${n} />
  </svg>`}function St(e=100){return d({vertices:22,size:e,fill:"currentColor"})}function Ot(){return s`<h2 class="headline" />`}function c(e=1,t){return s` ${[...Array(e)].map(i=>s`<p class="text ${t?"text-short":""}" />`)}`}function J(){return s` <button>${c()}</button> `}function Te(e){return{form:{vertices:5},utils:{vertices:7},media:{vertices:6},theme:{vertices:3},group:{vertices:4}}[e]}function vt(e){const t=document.querySelector(e);t instanceof HTMLElement&&(t.innerHTML="")}function L(e){return document.querySelector(e)}const Se=["chevronLeft","chevronRight","chevronDown","chevronUp","caretLeft","caretRight","caretDown","caretUp","arrowDown","arrowUp","slash","handle","check","cross","plus","dotsY","dotsX","minus","heart","bookmark","pin","star"];function Oe(){return s`
        <h3 data-font>Sprited Icons</h3>
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            ${Se.map(e=>s`${It({d:e,label:e,size:24})}`)}
        </div>
    `}function It({d:e,size:t,label:i}){return A`<svg
      width=${t}
      height=${t}
      focusable="false"
      data-icon
      aria-labelledby="${i}-icon"
      
    >
      <title id="${i}-icon">{label} </title>
      <use href="./sprite.svg#${e}" />
    </svg>
  `}function Ie(e){k(Le(e),document.querySelector("article"))}function Le(e){const{label:t,snippets:i}=e;return s`
        <ul role="list" aria-label=${t} data-group="" data-list="">
            ${i.filter(n=>!n.hidden).map(n=>ke(n))}
        </ul>
    `}function ke(e){const{value:t,label:i,kind:n,description:a}=e,r=o=>{const{kind:u}=$.getState();if(u!==o){_($,"SET_KIND",o);const l=q.filter(p=>p.kind===o);_($,"FILTERED",l)}else _($,"SET_KIND",void 0),_($,"FILTERED",q)};return t===""?s`
            <li data-list-item="">
                <div>
                    <div data-list-item-divider="">${c(1,!0)}</div>
                </div>
            </li>
        `:s` <li data-list-item="">
        ${s`<div data-list-item-start="">
            <button
                type="button"
                data-button="circle"
                data-paper="transparent"
                @click=${{handleEvent:()=>r(n)}}
            >
                ${d({...Te(n),size:24,fill:"currentColor"})}
            </button>
        </div>`}
        <div data-padding="x">
            <h2>${i}</h2>
            <p>${a}</p>
        </div>
        ${s`<div data-list-item-end="">
            <a href=${`?snippet=${t}`}>
                ${It({d:"chevronRight",size:42,label:"Ico label"})}</a
            >
        </div>`}
    </li>`}function Re(){return document.body.addEventListener("click",e=>{const t=L("[data-actionsheet]"),i=t.dataset.actionsheetOpen==="true";e.target.id!=="show-tray"&&e.target.id!=="clear-input"&&(e.target.id==="show-sheet"?i?(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})):(t.querySelector("[data-actionsheet-menu]:first-of-type").scrollIntoView({behavior:"smooth"}),t.dataset.actionsheetOpen="true"):i&&(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})))}),s` ${c(5)}
        <button id="show-sheet" data-button>Show action sheet</button>
        ${c(5)}
        <div data-actionsheet data-actionsheet-open="false">
            <div data-actionsheet-snap-sentinel></div>
            <menu data-actionsheet-menu>
                <button>Action 1</button>
                <button>Action 2</button>
                <button>Action 3</button>
            </menu>
            <menu>
                <button type="reset">Cancel</button>
            </menu>
        </div>`}function Pe(){return s`
        ${c(3)}
        <div
            data-article=""
            data-gap="md"
            data-border-shadow="outer"
            data-padding="y"
            data-hero
        >
            ${c(5)}${c(1,!0)}${c(5)}
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=" "
            />
            ${c(1,!0)}${c(5)}
        </div>
        ${c(3)}
    `}function Ne(){return s` 
    ${c(3)}
            <div data-group="flex" data-gap="xl" data-flex-wrap>
                <a href="javascript:;">Link</a>
                <a href="javascript:;" data-button="">Link</a>
                <a href="javascript:;" data-button="sm">Small</a>
                <a href="javascript:;" data-button="stretch"
                    >${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    stroke="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}</a
                >
            </div>
            <div data-group="flex" data-gap="xl" data-flex-wrap>
                <button data-button="" type="button">Button</button>
                <button data-button="sm" type="button">Small</button>

                <button data-button="circle" type="button" aria-label="Like">
                    ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                </button>
            </div>
        </div>
    ${c(2)}
        
        `}function Me(){return s`
        ${c(4)}
        <fieldset>
            <legend>Check options:</legend>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="checkbox" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="checkbox"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-c"> C </label>
                <input
                    type="checkbox"
                    name="option"
                    value="C"
                    id="checkbox-c"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-d"> D </label>
                <input
                    type="checkbox"
                    name="option"
                    value="D"
                    id="checkbox-d"
                    checked
                    disabled
                />
            </div>
        </fieldset>
        ${c(1)}
    `}function ze(){return s`
        ${c(1)}
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            <p data-font="xs">Aa AA</p>
            <p data-font="sm">Aa AA</p>
            <p data-font="md">Aa AA</p>
            <p data-font="">Aa AA</p>
            <p data-font="lg">Aa AA</p>
            <p data-font="xl">Aa AA</p>
            <p data-font="xxl">Aa AA</p>
        </div>
        ${c(3)}
    `}function De(){return s`
        ${c(2)}
        <div data-group="flex" data-flex="column" data-gap="sm">
            <label for="text-input" style="transform:translateY(7px)"
                >Text Input</label
            >
            <div data-input="">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
            </div>
            <div data-input="">
                ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
            </div>
            <div data-input="">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
                ${A`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="">
                ${A`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
                ${A`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="" style="--input-end-width:60px">
                <p data-padding="x" data-input-start="">+34</p>
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Phone number"
                />
            </div>
            <div data-input="" style="--input-end-width:68px">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Website:"
                    required
                />
                <p
                    data-padding="x"
                    data-input-end=""
                    style="--input-end-width:68px"
                >
                    .com
                </p>
            </div>
            ${c(4)}
            <div data-intrinsic-grid data-gap="xl">
                <div>
                    <label for="date-input">Date Input</label>
                    <div data-input="">
                        <input
                            id="date-input"
                            type="date"
                            placeholder="Select Day"
                            pattern="d{4}-d{2}-d{2}"
                        />
                    </div>
                </div>

                <div>
                    <label for="file-input">File Input</label>
                    <div data-input="">
                        <input id="file-input" type="file" />
                    </div>
                </div>
                <div>
                    <label for="readonly-input">Read-Only Input</label>
                    <div data-input="">
                        <input
                            id="readonly-input"
                            type="text"
                            readonly
                            value="This can only be copied"
                        />
                    </div>
                </div>
                <div>
                    <label for="disabled-input">Disabled Input</label>
                    <div data-input="">
                        <input
                            id="disabled-input"
                            value="Some datum"
                            type="text"
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <label for="textarea">Textarea</label>
                    <div data-input="">
                        <textarea
                            id="textarea"
                            spellcheck="false"
                            autocorrect="off"
                            autocapitalize="off"
                            translate="no"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <label for="textarea-disabled">Textarea Disabled</label>
                    <div data-input="">
                        <textarea id="textarea-disabled" disabled></textarea>
                    </div>
                </div>
            </div>
        </div>
        ${c(1)}
    `}function He(){return s`
        ${c(2)}
        <div data-intrinsic-grid="xsm" data-gap="sm">
            <div
                data-ratio="square"
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:3,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:3,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>

            <div
                data-ratio="square"
                data-paper="error"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:5,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper="error"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:4,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>
            <div
                data-ratio="square"
                data-paper="accent"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:6,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper="accent"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:7,size:24,fill:"currentColor"})}
                ${c(1,!0)}
            </div>
        </div>
        ${c(2)}
    `}function Be(){return s`
        ${c(2)}

        <fieldset>
            <legend>Select option:</legend>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="radio" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="radio"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-c"> C </label>
                <input type="radio" name="option" value="C" id="radio-c" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-d"> D </label>
                <input
                    type="radio"
                    name="option"
                    value="D"
                    checked
                    disabled
                    id="radio-d"
                />
            </div>
        </fieldset>
        ${c(2)}
    `}function Ge(){return s`
        ${c(1)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="range-a">Range</label>
                <input
                    data-range=""
                    type="range"
                    name="range-a"
                    min="0"
                    max="100"
                    value="25"
                    list="markers"
                />

                <label for="range-b">Disabled Range</label>

                <input
                    data-range=""
                    type="range"
                    name="range-b"
                    min="0"
                    max="100"
                    value="25"
                    disabled
                />
                <label for="range-c">Range</label>
                <input
                    orient="vertical"
                    data-range=""
                    type="range"
                    name="range-c"
                    min="0"
                    max="100"
                    value="25"
                    list="markers"
                />
                <datalist id="markers">
                    <option value="0"></option>
                    <option value="25"></option>
                    <option value="50"></option>
                    <option value="75"></option>
                    <option value="100"></option>
                </datalist>
            </div>
        </div>
        ${c(1)}
    `}function Ve(){const e=t=>{t.target.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})};return s`
        <div aria-hidden="true">${c(4)}</div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,i)=>s`<div
                            data-ratio="portrait"
                            style="--scroller-max-inline-size:10rem"
                            data-place-items="start"
                            data-padding="xy"
                            data-place-content="start"
                            data-paper
                            data-font="xxxl"
                        >
                            <img
                                @click=${{handleEvent:e}}
                                data-avatar-size="${i<4?"lg":[10,11,12].includes(i)?"sm":""}"
                                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=" "
                            />
                        </div>`)}
            </div>
        </div>
        ${c(8)}
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,i)=>s` <div
                            data-ratio="landscape"
                            data-scroller-item="${[0,1,2,10].includes(i)?"lg":[6,7,12].includes(i)?"sm":""}"
                        >
                            <picture>
                                <img
                                    src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                    alt=" "
                                />
                            </picture>
                        </div>`)}
            </div>
        </div>
        ${c(1)}
    `}function je(){return s`
        ${c(7)}
        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="standard-select">Standard Select</label>
                <div data-select="">
                    <select id="standard-select">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <hr />
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus=""></span>
                </div>

                <label for="multi-select">Multiple Select</label>
                <div data-select="multiple">
                    <select id="multi-select" multiple>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus=""></span>
                </div>
            </div>
            <div data-group="grid" data-gap="sm">
                <label for="standard-select-disabled">Disabled Select</label>
                <div data-select="">
                    <select id="standard-select-disabled" disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>

                <label for="standard-select">Disabled Multiple Select</label>
                <div data-select="multiple">
                    <select id="multi-select-disabled" multiple disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>
            </div>
        </div>
        ${c(3)}
    `}function Ue(){return s`
        ${c(2)}
        <fieldset>
            <legend>Activate features:</legend>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-e"> E </label>
                <input
                    data-switch=""
                    type="checkbox"
                    name="option"
                    value="E"
                    id="checkbox-e"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-f"> F </label>
                <input
                    data-switch=""
                    type="checkbox"
                    name="option"
                    value="F"
                    id="checkbox-f"
                    checked
                />
            </div>
        </fieldset>
        ${c(2)}
    `}function qe(){return s`
        ${c(5)}
        <div data-overflow="x" data-border-shadow="outer">
            <table>
                <thead>
                    <tr>
                        <th>Emoji</th>
                        <th>NSFW</th>
                        <th>Flirting</th>
                        <th>Bad day</th>
                        <th>Random</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>🔫</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                            ${d({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                        </td>

                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚬</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚨</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🤸🏽‍♂️</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>

                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>💐</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                            ${d({vertices:3,size:20,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🦚</td>
                        <td>
                            ${d({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                        </td>
                        <td>
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                            ${d({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                            ${d({vertices:20,size:16,fill:"currentColor"})}
                        </td>

                        <td>
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                            ${d({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        ${c(5)}
    `}function Fe(){const e=t=>{const i=t.target.dataset.tabId,n=document.querySelectorAll("[data-tabs] [data-tab-id]");n&&(n[0].dataset.tabId===i?n[0].dataset.tabVisible="true":n[0].dataset.tabVisible="false",n[1].dataset.tabId===i?n[1].dataset.tabVisible="true":n[1].dataset.tabVisible="false")};return s` ${c(2)}

        <div data-layout="flex">
            <button
                type="button"
                data-tab-id="1"
                @click=${{handleEvent:e}}
            >
                Tab 1
            </button>
            <button
                type="button"
                data-tab-id="2"
                @click=${{handleEvent:e}}
            >
                Tab 2
            </button>
        </div>
        <div
            data-tabs=""
            data-padding="xy"
            data-gap="sm"
            data-border-shadow="outer"
        >
            <div data-tab-id="1">${St(84)} ${c(1)}${c(1,!0)}</div>
            <div data-tab-id="2" data-tab-visible="false">
                ${c(1,!0)} ${c(3)}${c(1,!0)}
            </div>
        </div>

        ${c(2)}`}const Lt=()=>{const e=L("main"),t=L("[data-tray]"),i=L("[data-tray-overlay]");t.dataset.trayOpen==="false"?(e.setAttribute("inert","true"),i.dataset.trayOverlayOpen="true",t.dataset.trayOpen="true",k(We(),L("[data-tray]"))):(e.removeAttribute("inert"),i.dataset.trayOverlayOpen="false",t.dataset.trayOpen="false")};function Ze(){return s`
        ${c(1)}
        <button
            id="show-tray"
            @click=${{handleEvent:Lt}}
            data-button
        >
            Show tray
        </button>
        ${c(1)}
    `}function We(){return s` <div
        data-group="flex"
        data-flex="column"
        data-gap="sm"
        data-padding="xy"
    >
        ${c(4,!0)}
        <menu>
            <button @click=${{handleEvent:Lt}} type="reset">
                Cancel
            </button>
        </menu>
    </div>`}function Ke(){return s`
        ${c(1)}
        <div data-group="flex" data-gap="sm">
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
                class="fix-unit-width"
            >
                ${A`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <p data-font data-font-number>3.444</p>
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
                data-paper-outline
                class="fix-unit-width"
            >
                ${A`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <p data-font data-font-number>688.888</p>
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="error"
                data-paper-outline
                class="fix-unit-width"
            >
                <p data-font data-font-number>3.444</p>
                ${A`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="error"
                class="fix-unit-width"
            >
                <p data-font data-font-number>688.888</p>
                ${A`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
        </div>
        ${c(1)}
    `}function Qe(){return s`
        <p data-font>Don't overdo it</p>
        ${c(2)}
    `}function ht(){return s` <p data-font>Docs incoming</p>
        <div data-paper-color="" data-paper="error">${c(4)}</div>`}function Ye(e){const t=document.querySelector("article");t!=null&&k(Xe(e),t)}function Xe(e){switch(e){case"reset":return s`${ht()}`;case"tokens":return s`${Qe()}`;case"button":return s`${Ne()}`;case"checkbox":return s`${Me()}`;case"input":return s`${De()}`;case"radio":return s`${Be()}`;case"range":return s`${Ge()}`;case"select":return s`${je()}`;case"switch":return s`${Ue()}`;case"avatar":case"scroller":case"image":return s`${Ve()}`;case"article":case"hero":return s`${Pe()}`;case"icon":return s`${Oe()}`;case"action-sheet":return s`${Re()}`;case"panel":case"card":return;case"group":return s`${Ke()}`;case"list":return s`<p data-font>Check landing</p>
                ${c(4)}`;case"table":return s`${qe()}`;case"tabs":return s`${Fe()}`;case"tray":return s`${Ze()}`;case"lobotomized-owl":case"border":case"fit":case"gap":case"gradient":case"hide":case"margin-auto":case"mask":case"overflow":case"padding":case"place":case"print":case"ratio":case"reorder":case"util":return s`${ht()}`;case"font":return s`${ze()}`;case"paper":return s`${He()}`;default:return s``}}function Je(){return s`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `}function ti(e){return s`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${x.HeadLine()} ${x.Line(3)}
        </div>
    `}function ei(e){return s`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${J()}
        </div>
    `}const x={};x.Pic=Je;x.Content=ti;x.Avatar=St;x.HeadLine=Ot;x.Line=c;x.Actions=ei;function ii(e,t){return s`
        <div class="gap:md ${e?"reorder:top":""}">
            ${T.HeadLine()} ${T.Line(3)}
            ${t?s` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`:s``}
        </div>
    `}function ni(e){return s`
        <div data-reorder="${e?"top":""}">
            ${c(1,!0)}
            <div>${J()}${J()}</div>
        </div>
    `}const T={};T.Content=ii;T.HeadLine=Ot;T.Line=c;T.Actions=ni;function kt(e){k(ai(e),document.querySelector("aside"))}function ai(e){const{orientation:t}=$.getState(),i=t==="portrait";return e?s``:s`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${i?"":"md"}"
        >
            ${[...Array(4)].map(n=>Mt())}
        </div>
    `}function Rt(){k(ri(),document.querySelector("article")),Pt(),kt(!0)}function ri(){return s`
        <div id="controls">
            <h2></h2>
            <nav></nav>
        </div>
        <div data-group="" data-panel="">${oi()}</div>
    `}function oi(){const{variantPanel:e}=$.getState();switch(e){case"actions":return s` ${T.Content()} ${T.Actions()} `;case"actions-reorder":return s` ${T.Content()}${T.Actions(!0)} `;case"input":return s` ${T.Content(!0,!0)} ${T.Actions()} `;default:return s` ${T.Content()}`}}function si(){const t=new URLSearchParams(window.location.search).get("snippet"),i=t==="card",n=a=>{const r=a.target.dataset.option;if(t===r)return;const o=new URL(document.location.href);o.searchParams.set("snippet",r),history.pushState({},"",o),r==="card"?Nt():Rt()};return s`
        <div class="subnav bi">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{handleEvent:n}}
            >
                ${d({vertices:3,size:45,transforms:"translateX(10px)",fill:i?"var(--error-100)":"currentColor"})}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{handleEvent:n}}
            >
                ${d({vertices:4,size:45,transforms:"translateX(10px)",fill:i?"currentColor":"var(--error-100)"})}
            </button>
        </div>
    `}function ft(e,t){const i=a=>{const r=Number(a.target.value);if(r===0)return _($,v.SET_VARIANT,"pic");if(r===5)return _($,v.SET_VARIANT,"pic-content");if(r===10)return _($,v.SET_VARIANT,"pic-reorder");if(r===15)return _($,v.SET_VARIANT,"actions")},n=a=>({pic:0,"pic-content":5,"pic-reorder":10,actions:15})[a];return t?s``:s`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${n(e)}"
                step="5"
                id="range"
                @input=${{handleEvent:i}}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="5"></option>
            <option value="10"></option>
            <option value="15"></option>
            <option value="20"></option>
        </datalist>
    `}function gt(e,t){const i=a=>{switch(Number(a.target.value)){case 0:return _($,v.SET_VARIANT_PANEL,"actions");case 10:return _($,v.SET_VARIANT_PANEL,"actions-reorder");case 20:default:return _($,v.SET_VARIANT_PANEL,"input")}},n={actions:0,"actions-reorder":5,input:10}[e];return t?s``:s`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${n}"
                step="10"
                id="range"
                @input=${{handleEvent:i}}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
        </datalist>
    `}function mt(e,t){const i=e==="square",n=e==="portrait",a=e==="landscape",r=o=>{const{nav:u,option:l}=o.target.dataset;u==="ratio"&&_($,v.SET_ORIENTATION,l)};return t?s``:s`
        <div class="subnav">
            <button
                data-nav="ratio"
                data-option="square"
                @click=${{handleEvent:r}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        fill="${i?"var(--error-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="portrait"
                @click=${{handleEvent:r}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="6"
                        width="44"
                        height="52"
                        fill="${n?"var(--error-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="landscape"
                @click=${{handleEvent:r}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="6"
                        y="14"
                        width="52"
                        height="38"
                        fill="${a?"var(--error-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `}function Pt(){k(li(),document.querySelector("#controls nav")),k(di(),document.querySelector("#controls h2"))}function li(){const{variant:e,variantPanel:t,orientation:i}=$.getState(),a=new URLSearchParams(window.location.search).get("snippet"),r=a==="card",o=a==="panel";return s`
        ${si()} ${r?ft(e):ft(e,!0)}
        ${r?mt(i):mt(i,!0)}
        ${o?gt(t):gt(t,!0)}
    `}function di(){const t=new URLSearchParams(window.location.search).get("snippet"),i=t==="card"?"content with ratio":"interactive elements";return s` <strong>${`${t}:`}</strong> groups ${i}`}function Nt(){k(Mt(),document.querySelector("article")),Pt(),kt(!1)}function Mt(){const{orientation:e}=$.getState();return s` <div
        class="${e==="portrait"?"fix-portrait-card-height":""}"
    >
        <div data-group="" data-card="" data-ratio="${e}">
            ${ci()}
        </div>
    </div>`}function ci(){const{variant:e}=$.getState();switch(e){case"actions":return s` ${x.Content()} ${x.Actions()} `;case"pic":return s` ${x.Pic()}
                <div class="pin-avatar">${x.Avatar()}</div>`;case"pic-content":return s` ${x.Pic()} ${x.Content()} `;case"pic-reorder":return s` ${x.Pic()} ${x.Content(!0)} `;default:return s``}}$.subscribe(zt);function ui(){const e=L("#q input");e!=null&&(e.value=""),_($,"FILTERED",q)}function zt(){const{filtered:e}=$.getState(),i=new URLSearchParams(window.location.search).get("snippet");if(de(L("#q"),{onQuery:async a=>{const r=e.filter(o=>o.value.startsWith(a.toLowerCase()));return i===null&&_($,"FILTERED",r),r},onRender:a=>{const r=document.createElement("ul");r.dataset.list="";const o=document.createElement("span");o.innerHTML=`<svg
                                    width="28"
                                    height="28"
                                    focusable="false"
                                    data-icon
                                >
                                    <use href="./sprite.svg#pin" />
                                </svg>`,o.dataset.listItemStart="";const u=document.createElement("a");u.href=`?snippet=${a.value}`,u.appendChild(document.createTextNode(a.label));const l=document.createElement("li");return l.dataset.listItem="",l.appendChild(o),l.appendChild(u),r.appendChild(l),l}}),i===null){vt("#controls"),Ie({label:"Featured snippets",snippets:e});return}vt("h1");const n=L("#controls");["card","panel"].includes(i)?(n!=null&&n.classList.add("show"),i==="card"&&Nt(),i==="panel"&&Rt()):(n!=null&&n.classList.remove("show"),Ye(i))}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#clear-input");e!=null&&e.addEventListener("click",ui),zt()});
