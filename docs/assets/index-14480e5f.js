(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function Dt(e,t){if(D(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t||"default");if(D(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gt(e){var t=Dt(e,"string");return D(t)==="symbol"?t:String(t)}function jt(e,t,i){return t=Gt(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function et(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,a)}return i}function it(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?et(Object(i),!0).forEach(function(a){jt(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):et(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function x(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var at=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Z=function(){return Math.random().toString(36).substring(7).split("").join(".")},nt={INIT:"@@redux/INIT"+Z(),REPLACE:"@@redux/REPLACE"+Z(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Z()}};function Vt(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function bt(e,t,i){var a;if(typeof t=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(x(0));if(typeof t=="function"&&typeof i>"u"&&(i=t,t=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(x(1));return i(bt)(e,t)}if(typeof e!="function")throw new Error(x(2));var n=e,r=t,s=[],u=s,c=!1;function p(){u===s&&(u=s.slice())}function f(){if(c)throw new Error(x(3));return r}function h(b){if(typeof b!="function")throw new Error(x(4));if(c)throw new Error(x(5));var I=!0;return p(),u.push(b),function(){if(I){if(c)throw new Error(x(6));I=!1,p();var E=u.indexOf(b);u.splice(E,1),s=null}}}function m(b){if(!Vt(b))throw new Error(x(7));if(typeof b.type>"u")throw new Error(x(8));if(c)throw new Error(x(9));try{c=!0,r=n(r,b)}finally{c=!1}for(var I=s=u,B=0;B<I.length;B++){var E=I[B];E()}return b}function w(b){if(typeof b!="function")throw new Error(x(10));n=b,m({type:nt.REPLACE})}function z(){var b,I=h;return b={subscribe:function(E){if(typeof E!="object"||E===null)throw new Error(x(11));function tt(){E.next&&E.next(f())}tt();var Ht=I(tt);return{unsubscribe:Ht}}},b[at]=function(){return this},b}return m({type:nt.INIT}),a={dispatch:m,subscribe:h,getState:f,replaceReducer:w},a[at]=z,a}var Ut=bt;function qt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.length===0?function(a){return a}:t.length===1?t[0]:t.reduce(function(a,n){return function(){return a(n.apply(void 0,arguments))}})}function Ft(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(a){return function(){var n=a.apply(void 0,arguments),r=function(){throw new Error(x(15))},s={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},u=t.map(function(c){return c(s)});return r=qt.apply(void 0,u)(n.dispatch),it(it({},n),{},{dispatch:r})}}}const v={TOGGLE_THEME:"TOGGLE_THEME",SET_ORIENTATION:"SET_ORIENTATION",SET_GROUP:"SET_GROUP",SET_VARIANT:"SET_VARIANT",SET_VARIANT_PANEL:"SET_VARIANT_PANEL",RESET:"RESET",FILTERED:"FILTERED",SUGGESTIONS:"SUGGESTIONS",SET_KIND:"SET_KIND"},Zt=e=>({type:v.SET_ORIENTATION,payload:e}),Wt=e=>({type:v.SET_VARIANT,payload:e}),Kt=e=>({type:v.SET_VARIANT_PANEL,payload:e}),Yt=e=>({type:v.SET_GROUP,payload:e}),Qt=e=>({type:v.FILTERED,payload:e}),Xt=e=>({type:v.SUGGESTIONS,payload:e}),Jt=e=>({type:v.SET_KIND,payload:e}),te=e=>{switch(e){case v.SET_ORIENTATION:return Zt;case v.SET_GROUP:return Yt;case v.SET_VARIANT:return Wt;case v.SET_VARIANT_PANEL:return Kt;case v.FILTERED:return Qt;case v.SUGGESTIONS:return Xt;case v.SET_KIND:return Jt;default:return()=>({})}};function $t(e){var t=function(a){var n=a.dispatch,r=a.getState;return function(s){return function(u){return typeof u=="function"?u(n,r,e):s(u)}}};return t}var yt=$t();yt.withExtraArgument=$t;const ee=yt,ie=[{label:"Button",value:"button",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Checkbox",value:"checkbox",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Input",value:"input",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Progress",value:"progress",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Radio",value:"radio",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Range",value:"range",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Select",value:"select",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Switch",value:"switch",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"}],ae=[{label:"Avatar",value:"avatar",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Sizes with custom CSS properties"},{label:"Hero",value:"hero",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Dimm background to pop CTA"},{label:"Icon",value:"icon",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},{label:"Image",value:"image",kind:"media",src:"https://github.com/polmoneys/data-css",description:""}],ne=[{label:"Action Sheet",value:"action-sheet",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Article",value:"article",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Text clamped, images full width"},{label:"Card",value:"card",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Ratio cards"},{label:"Group",value:"group",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"List",value:"list",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Panel",value:"panel",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Scroller",value:"scroller",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Table",value:"table",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tabs",value:"tabs",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tray",value:"tray",kind:"group",src:"https://github.com/polmoneys/data-css",description:""}],re=[{label:"Lobotomized Owl",value:"lobotomized-owl",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"*>*",hidden:!0},{label:"Border",value:"border",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Fit",value:"fit",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Font",value:"font",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gap",value:"gap",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gradient",value:"gradient",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Hide",value:"hide",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Margin Auto",value:"margin-auto",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Mask",value:"mask",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Overflow",value:"overflow",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Padding",value:"padding",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Paper",value:"paper",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Surfaces"},{label:"Place",value:"place",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Print",value:"print",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Do not print",hidden:!0},{label:"Ratio",value:"ratio",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Reorder",value:"reorder",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Util",value:"util",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0}],Q=[{label:"Reset",value:"reset",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tokens",value:"tokens",kind:"theme",src:"https://github.com/polmoneys/data-css",description:"Custom CSS properties"},{label:"",value:"",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},...ie,{label:"",value:"",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},...ae,{label:"",value:"",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},...ne,{label:"",value:"",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},...re],Ct={lightTheme:!0,orientation:"landscape",group:void 0,variant:"pic",variantPanel:"actions",filtered:Q.filter(e=>e.hidden===void 0||!e.hidden),kind:void 0,suggestions:[]};function A(e,t,i){const a=te(t);e.dispatch(a(i))}function oe(e=Ct,t){switch(t.type){case v.TOGGLE_THEME:return{...e,lightTheme:!e.lightTheme};case v.SET_ORIENTATION:return{...e,orientation:t.payload};case v.SET_GROUP:return{...e,group:t.payload};case v.SET_VARIANT:return{...e,variant:t.payload};case v.SET_VARIANT_PANEL:return{...e,variantPanel:t.payload};case v.FILTERED:return{...e,filtered:t.payload};case v.SET_KIND:return{...e,kind:t.payload};case v.SUGGESTIONS:return{...e,suggestions:t.payload};default:return e}}const g=Ut(oe,Ft(ee));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const q=window,P=q.trustedTypes,rt=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,X="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,At="?"+T,se=`<${At}>`,R=document,G=()=>R.createComment(""),j=e=>e===null||typeof e!="object"&&typeof e!="function",wt=Array.isArray,le=e=>wt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",K=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,N=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,xt=/^(?:script|style|textarea|title)$/i,_t=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),o=_t(1),y=_t(2),L=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ct=new WeakMap,k=R.createTreeWalker(R,129,null,!1);function St(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const de=(e,t)=>{const i=e.length-1,a=[];let n,r=t===2?"<svg>":"",s=H;for(let u=0;u<i;u++){const c=e[u];let p,f,h=-1,m=0;for(;m<c.length&&(s.lastIndex=m,f=s.exec(c),f!==null);)m=s.lastIndex,s===H?f[1]==="!--"?s=ot:f[1]!==void 0?s=st:f[2]!==void 0?(xt.test(f[2])&&(n=RegExp("</"+f[2],"g")),s=N):f[3]!==void 0&&(s=N):s===N?f[0]===">"?(s=n??H,h=-1):f[1]===void 0?h=-2:(h=s.lastIndex-f[2].length,p=f[1],s=f[3]===void 0?N:f[3]==='"'?dt:lt):s===dt||s===lt?s=N:s===ot||s===st?s=H:(s=N,n=void 0);const w=s===N&&e[u+1].startsWith("/>")?" ":"";r+=s===H?c+se:h>=0?(a.push(p),c.slice(0,h)+X+c.slice(h)+T+w):c+T+(h===-2?(a.push(void 0),u):w)}return[St(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),a]};class V{constructor({strings:t,_$litType$:i},a){let n;this.parts=[];let r=0,s=0;const u=t.length-1,c=this.parts,[p,f]=de(t,i);if(this.el=V.createElement(p,a),k.currentNode=this.el.content,i===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(n=k.nextNode())!==null&&c.length<u;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const m of n.getAttributeNames())if(m.endsWith(X)||m.startsWith(T)){const w=f[s++];if(h.push(m),w!==void 0){const z=n.getAttribute(w.toLowerCase()+X).split(T),b=/([.?@])?(.*)/.exec(w);c.push({type:1,index:r,name:b[2],strings:z,ctor:b[1]==="."?ue:b[1]==="?"?ve:b[1]==="@"?he:F})}else c.push({type:6,index:r})}for(const m of h)n.removeAttribute(m)}if(xt.test(n.tagName)){const h=n.textContent.split(T),m=h.length-1;if(m>0){n.textContent=P?P.emptyScript:"";for(let w=0;w<m;w++)n.append(h[w],G()),k.nextNode(),c.push({type:2,index:++r});n.append(h[m],G())}}}else if(n.nodeType===8)if(n.data===At)c.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(T,h+1))!==-1;)c.push({type:7,index:r}),h+=T.length-1}r++}}static createElement(t,i){const a=R.createElement("template");return a.innerHTML=t,a}}function M(e,t,i=e,a){var n,r,s,u;if(t===L)return t;let c=a!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[a]:i._$Cl;const p=j(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==p&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),p===void 0?c=void 0:(c=new p(e),c._$AT(e,i,a)),a!==void 0?((s=(u=i)._$Co)!==null&&s!==void 0?s:u._$Co=[])[a]=c:i._$Cl=c),c!==void 0&&(t=M(e,c._$AS(e,t.values),c,a)),t}class ce{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:a},parts:n}=this._$AD,r=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:R).importNode(a,!0);k.currentNode=r;let s=k.nextNode(),u=0,c=0,p=n[0];for(;p!==void 0;){if(u===p.index){let f;p.type===2?f=new U(s,s.nextSibling,this,t):p.type===1?f=new p.ctor(s,p.name,p.strings,this,t):p.type===6&&(f=new fe(s,this,t)),this._$AV.push(f),p=n[++c]}u!==(p==null?void 0:p.index)&&(s=k.nextNode(),u++)}return k.currentNode=R,r}v(t){let i=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,i),i+=a.strings.length-2):a._$AI(t[i])),i++}}class U{constructor(t,i,a,n){var r;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),j(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):le(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var i;const{values:a,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=V.createElement(St(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(a);else{const s=new ce(r,this),u=s.u(this.options);s.v(a),this.$(u),this._$AH=s}}_$AC(t){let i=ct.get(t.strings);return i===void 0&&ct.set(t.strings,i=new V(t)),i}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let a,n=0;for(const r of t)n===i.length?i.push(a=new U(this.k(G()),this.k(G()),this,this.options)):a=i[n],a._$AI(r),n++;n<i.length&&(this._$AR(a&&a._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class F{constructor(t,i,a,n,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,a,n){const r=this.strings;let s=!1;if(r===void 0)t=M(this,t,i,0),s=!j(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const u=t;let c,p;for(t=r[0],c=0;c<r.length-1;c++)p=M(this,u[a+c],i,c),p===L&&(p=this._$AH[c]),s||(s=!j(p)||p!==this._$AH[c]),p===$?t=$:t!==$&&(t+=(p??"")+r[c+1]),this._$AH[c]=p}s&&!n&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ue extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const pe=P?P.emptyScript:"";class ve extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,pe):this.element.removeAttribute(this.name)}}class he extends F{constructor(t,i,a,n,r){super(t,i,a,n,r),this.type=5}_$AI(t,i=this){var a;if((t=(a=M(this,t,i,0))!==null&&a!==void 0?a:$)===L)return;const n=this._$AH,r=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==$&&(n===$||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,a;typeof this._$AH=="function"?this._$AH.call((a=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&a!==void 0?a:this.element,t):this._$AH.handleEvent(t)}}class fe{constructor(t,i,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const ut=q.litHtmlPolyfillSupport;ut==null||ut(V,U),((W=q.litHtmlVersions)!==null&&W!==void 0?W:q.litHtmlVersions=[]).push("2.8.0");const S=(e,t,i)=>{var a,n;const r=(a=i==null?void 0:i.renderBefore)!==null&&a!==void 0?a:t;let s=r._$litPart$;if(s===void 0){const u=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new U(t.insertBefore(G(),u),u,void 0,i??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},me=e=>(...t)=>({_$litDirective$:e,values:t});let be=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this._$Ct=t,this._$AM=i,this._$Ci=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et="important",$e=" !"+Et,ye=me(class extends be{constructor(e){var t;if(super(e),e.type!==ge.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const a=e[i];return a==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ht===void 0){this.ht=new Set;for(const a in t)this.ht.add(a);return this.render(t)}this.ht.forEach(a=>{t[a]==null&&(this.ht.delete(a),a.includes("-")?i.removeProperty(a):i[a]="")});for(const a in t){const n=t[a];if(n!=null){this.ht.add(a);const r=typeof n=="string"&&n.endsWith($e);a.includes("-")||r?i.setProperty(a,r?n.slice(0,-11):n,r?Et:""):i[a]=n}}return L}});function l(e){const{vertices:t,size:i,fill:a,label:n,transforms:r,children:s=!1}=e;return we({children:s,vertices:t,size:i,fill:a,label:n,transforms:r})}let Tt=function(e){return Math.PI*e/180},Ce=function(e,t,i){return i+e*Math.cos(Tt(t))},Ae=function(e,t,i){return i+e*Math.sin(Tt(t))},pt=function(e){return e<1e-7?0:e};const we=e=>{let t=e.size||96,i=t/2,a=1*t/2,n=360/e.vertices,r=90,s=e.fill||"red",u=[0,0,t,t].join(" ");const p=[function(f){for(var h=[],m=0;m<f;m++){var w=n*m-r,z=[m===0?"M":"L",pt(Ce(a,w,i)),pt(Ae(a,w,i))].join(" ");h.push(z)}return h.join(" ")}(e.vertices)].join(" ");return e.children?o`
            <div class="col-center align-center shape-with-label">
                ${Y(t,u,s,p,e.transforms)}
                ${e.children}
            </div>
        `:e.label?o`
            <div class="col-center align-center shape-with-label">
                ${Y(t,u,s,p,e.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${e.label}
                </p>
            </div>
        `:o` ${Y(t,u,s,p,e.transforms)} `};function Y(e,t,i,a,n){if(n){let r={transformOrigin:"center",transform:`${n}`};return y`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
    style="${ye(r)}"
  >
    <path d=${a} />
  </svg>`}else return y`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
  >
    <path d=${a} />
  </svg>`}function Ot(e=100){return l({vertices:22,size:e,fill:"currentColor"})}function It(){return o`<h2 class="headline" />`}function d(e=1,t){return o` ${[...Array(e)].map(i=>o`<p class="text ${t?"text-short":""}" />`)}`}function J(){return o` <button>${d()}</button> `}function xe(e){return{form:{vertices:5},utils:{vertices:7},media:{vertices:6},theme:{vertices:3},group:{vertices:4}}[e]}function vt(e){const t=document.querySelector(e);t instanceof HTMLElement&&(t.innerHTML="")}function O(e){return document.querySelector(e)}const _e=["chevronLeft","chevronRight","chevronDown","chevronUp","caretLeft","caretRight","caretDown","caretUp","arrowDown","arrowUp","slash","handle","check","cross","plus","dotsY","dotsX","minus","heart","bookmark","pin","star"];function Se(){return o`
        <h3 data-font>Sprited Icons</h3>
        <div
            data-group="flex"
            data-flex-wrap
            data-gap="xl"
            data-place-items="baseline"
        >
            ${_e.map(e=>o`${Nt({d:e,label:e,size:48})}`)}
        </div>
        <div data-spinner style="--spinner-count: 10">
            <span style="--spinner-index: 0"></span>
            <span style="--spinner-index: 1"></span>
            <span style="--spinner-index: 2"></span>
            <span style="--spinner-index: 3"></span>
            <span style="--spinner-index: 4"></span>
            <span style="--spinner-index: 5"></span>
            <span style="--spinner-index: 6"></span>
            <span style="--spinner-index: 7"></span>
            <span style="--spinner-index: 8"></span>
            <span style="--spinner-index: 9"></span>
        </div>
    `}function Nt({d:e,size:t,label:i}){return y`<svg
      width="${t}px"
      height="${t}px"
      focusable="false"
      data-icon
      aria-labelledby="${i}-icon"
    viewbox="0 0 ${t} ${t}"
    >
      <title id="${i}-icon">{label} </title>
      <use href="./sprite.svg#${e}" />
    </svg>
  `}function Ee(e){S(Te(e),document.querySelector("article"))}function Te(e){const{label:t,snippets:i}=e;return o`
        <ul
            id="snippets-list"
            role="list"
            aria-label=${t}
            data-group=""
            data-list=""
        >
            ${i.length===0?o` <li data-list-item="">
                      <div><p data-font="lg">No results</p></div>
                  </li>`:o``}
            ${i.map(a=>Oe(a))}
        </ul>
    `}function Oe(e){const{value:t,label:i,kind:a,description:n}=e,{kind:r}=g.getState(),s=u=>{if(r!==u){A(g,"SET_KIND",u);const c=Q.filter(p=>p.kind===u);A(g,"FILTERED",c)}else A(g,"SET_KIND",void 0),A(g,"FILTERED",Q)};return t===""?o`
            <li data-list-item="">
                <div>
                    <div data-list-item-divider="">${d(1,!0)}</div>
                </div>
            </li>
        `:o` <li data-list-item="">
        <div data-list-item-start="">
            <button
                type="button"
                data-paper="transparent"
                @click=${{handleEvent:()=>s(a)}}
            >
                ${l({...xe(a),size:24,fill:a===r?"var(--red-100)":"currentColor"})}
            </button>
        </div>
        <div data-padding="x">
            <h2>${i}</h2>
            ${n===""?o``:o` <p>${n}</p>`}
        </div>
        <div data-list-item-end="">
            <a href=${`?snippet=${t}`}>
                ${Nt({d:"chevronRight",size:42,label:"Ico label"})}</a
            >
        </div>
    </li>`}function Ie(){return document.body.addEventListener("click",e=>{const t=O("[data-actionsheet]"),i=t.dataset.actionsheetOpen==="true";e.target.id!=="show-tray"&&e.target.id!=="clear-input"&&(e.target.id==="show-sheet"?i?(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})):(t.querySelector("[data-actionsheet-menu]:first-of-type").scrollIntoView({behavior:"smooth"}),t.dataset.actionsheetOpen="true"):i&&(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})))}),o` ${d(5)}
        <button id="show-sheet" data-button>Show action sheet</button>
        ${d(5)}
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
        </div>`}function Ne(){return o`
        ${d(3)}
        <div
            data-article=""
            data-gap="md"
            data-border-shadow="outer"
            data-padding="y"
            data-hero
        >
            ${d(5)}${d(1,!0)}${d(5)}
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=" "
            />
            ${d(1,!0)}${d(5)}
        </div>
        ${d(3)}
    `}function ke(){return o` 
    ${d(3)}
            <div data-group="flex" data-gap="xl" data-flex-wrap>
                <a href="javascript:;">Link</a>
                <a href="javascript:;" data-button="">Link</a>
                <a href="javascript:;" data-button="sm">Small</a>
                <a href="javascript:;" data-button="stretch"
                    >${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    ${d(2)}
        
        `}function Re(){return o`
        ${d(4)}
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
        ${d(1)}
    `}function Pe(){return o`
        ${d(1)}
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            <p data-font="xs">Aa AA</p>
            <p data-font="sm">Aa AA</p>
            <p data-font="md">Aa AA</p>
            <p data-font="">Aa AA</p>
            <p data-font="lg">Aa AA</p>
            <p data-font="xl">Aa AA</p>
            <p data-font="xxl">Aa AA</p>
        </div>
        ${d(3)}
    `}function Le(){return o`
        ${d(2)}
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
                ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${y`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="">
                ${y`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${y`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            ${d(4)}
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
                            type="email"
                            disabled
                            inputmode="text"
                            multiple
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
        ${d(1)}
    `}function Me(){return o`
        ${d(2)}
        <div data-intrinsic-grid="xsm" data-gap="sm">
            <div
                data-ratio="square"
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${l({vertices:3,size:24,fill:"currentColor"})}
                ${d(1,!0)}
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
                ${l({vertices:3,size:24,fill:"currentColor"})}
                ${d(1,!0)}
            </div>

            <div
                data-ratio="square"
                data-paper="error"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${l({vertices:5,size:24,fill:"currentColor"})}
                ${d(1,!0)}
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
                ${l({vertices:4,size:24,fill:"currentColor"})}
                ${d(1,!0)}
            </div>
            <div
                data-ratio="square"
                data-paper="accent"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${l({vertices:6,size:24,fill:"currentColor"})}
                ${d(1,!0)}
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
                ${l({vertices:7,size:24,fill:"currentColor"})}
                ${d(1,!0)}
            </div>
        </div>
        ${d(2)}
    `}function ze(){return o`
        ${d(2)}

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
        ${d(2)}
    `}function Be(){return o`
        ${d(1)}

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
        ${d(1)}
    `}function He(){const e=t=>{t.target.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})};return o`
        <div aria-hidden="true">${d(4)}</div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,i)=>o`<div
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
        ${d(8)}
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,i)=>o` <div
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
        ${d(1)}
    `}function De(){return o`
        ${d(7)}
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
        ${d(3)}
    `}function Ge(){return o`
        ${d(2)}
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
        ${d(2)}
    `}function je(){return o`
        ${d(5)}
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
                            ${l({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                            ${l({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                        </td>

                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚬</td>
                        <td>
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚨</td>
                        <td>
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🤸🏽‍♂️</td>
                        <td>
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                        </td>

                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>

                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>💐</td>
                        <td>
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                            ${l({vertices:3,size:20,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🦚</td>
                        <td>
                            ${l({vertices:3,size:20,fill:"currentColor",transforms:"rotate(180deg)"})}
                        </td>
                        <td>
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                            ${l({vertices:6,size:17,fill:"currentColor"})}
                        </td>
                        <td>
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                            ${l({vertices:20,size:16,fill:"currentColor"})}
                        </td>

                        <td>
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                            ${l({vertices:4,size:19,fill:"currentColor"})}
                        </td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        ${d(5)}
    `}function Ve(){const e=t=>{const i=t.target.dataset.tabId,a=document.querySelectorAll("[data-tabs] [data-tab-id]");a&&(a[0].dataset.tabId===i?a[0].dataset.tabVisible="true":a[0].dataset.tabVisible="false",a[1].dataset.tabId===i?a[1].dataset.tabVisible="true":a[1].dataset.tabVisible="false")};return o` ${d(2)}

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
            <div data-tab-id="1">${Ot(84)} ${d(1)}${d(1,!0)}</div>
            <div data-tab-id="2" data-tab-visible="false">
                ${d(1,!0)} ${d(3)}${d(1,!0)}
            </div>
        </div>

        ${d(2)}`}const kt=()=>{const e=O("main"),t=O("[data-tray]"),i=O("[data-tray-overlay]");t.dataset.trayOpen==="false"?(e.setAttribute("inert","true"),i.dataset.trayOverlayOpen="true",t.dataset.trayOpen="true",S(qe(),O("[data-tray]"))):(e.removeAttribute("inert"),i.dataset.trayOverlayOpen="false",t.dataset.trayOpen="false")};function Ue(){return o`
        ${d(1)}
        <button
            id="show-tray"
            @click=${{handleEvent:kt}}
            data-button
        >
            Show tray
        </button>
        ${d(1)}
    `}function qe(){return o` <div
        data-group="flex"
        data-flex="column"
        data-gap="sm"
        data-padding="xy"
    >
        ${d(4,!0)}
        <menu>
            <button @click=${{handleEvent:kt}} type="reset">
                Cancel
            </button>
        </menu>
    </div>`}function Fe(){return o`
        ${d(1)}
        <div data-group="flex" data-gap="sm">
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
                class="fix-unit-width"
            >
                ${y`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${y`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${y`
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
                ${y`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
        </div>
        ${d(1)}
    `}function Ze(){return o`
        <p data-font>Don't overdo it</p>
        ${d(2)}
    `}function ht(){return o` <p data-font>Docs incoming</p>
        <div data-paper-color="" data-paper="error">${d(4)}</div>`}function We(){return o`
        ${d(1)}

        <div data-group="flex" data-flex="column" data-gap="xl">
            <progress max="100" value="10">10%</progress>
            <progress max="100" value="20">20%</progress>
            <progress max="100" value="30">30%</progress>
            <progress max="100" value="50">50%</progress>
            <progress max="100" value="60">60%</progress>
            <progress max="100" value="90">90%</progress>
            <progress max="100" value="100">100%</progress>
        </div>
        ${d(1)}
    `}function Ke(e){const t=document.querySelector("article");t!=null&&S(Ye(e),t)}function Ye(e){switch(e){case"reset":return o`${ht()}`;case"tokens":return o`${Ze()}`;case"button":return o`${ke()}`;case"checkbox":return o`${Re()}`;case"input":return o`${Le()}`;case"radio":return o`${ze()}`;case"range":return o`${Be()}`;case"select":return o`${De()}`;case"progress":return o`${We()}`;case"switch":return o`${Ge()}`;case"avatar":case"scroller":case"image":return o`${He()}`;case"article":case"hero":return o`${Ne()}`;case"icon":return o`${Se()}`;case"action-sheet":return o`${Ie()}`;case"panel":case"card":return;case"group":return o`${Fe()}`;case"list":return o`<p data-font>Check landing</p>
                ${d(4)}`;case"table":return o`${je()}`;case"tabs":return o`${Ve()}`;case"tray":return o`${Ue()}`;case"lobotomized-owl":case"border":case"fit":case"gap":case"gradient":case"hide":case"margin-auto":case"mask":case"overflow":case"padding":case"place":case"print":case"ratio":case"reorder":case"util":return o`${ht()}`;case"font":return o`${Pe()}`;case"paper":return o`${Me()}`;default:return o``}}function Qe(){return o`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `}function Xe(e){return o`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${C.HeadLine()} ${C.Line(3)}
        </div>
    `}function Je(e){return o`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${J()}
        </div>
    `}const C={};C.Pic=Qe;C.Content=Xe;C.Avatar=Ot;C.HeadLine=It;C.Line=d;C.Actions=Je;function ti(e,t){return o`
        <div class="gap:md ${e?"reorder:top":""}">
            ${_.HeadLine()} ${_.Line(3)}
            ${t?o` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`:o``}
        </div>
    `}function ei(e){return o`
        <div data-reorder="${e?"top":""}">
            ${d(1,!0)}
            <div>${J()}${J()}</div>
        </div>
    `}const _={};_.Content=ti;_.HeadLine=It;_.Line=d;_.Actions=ei;function Rt(e){S(ii(e),document.querySelector("aside"))}function ii(e){const{orientation:t}=g.getState(),i=t==="portrait";return e?o``:o`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${i?"":"md"}"
        >
            ${[...Array(4)].map(a=>zt())}
        </div>
    `}function Pt(){S(ai(),document.querySelector("article")),Lt(),Rt(!0)}function ai(){return o`
        <div id="controls">
            <h2></h2>
            <nav></nav>
        </div>
        <div data-group="" data-panel="">${ni()}</div>
    `}function ni(){const{variantPanel:e}=g.getState();switch(e){case"actions":return o` ${_.Content()} ${_.Actions()} `;case"actions-reorder":return o` ${_.Content()}${_.Actions(!0)} `;case"input":return o` ${_.Content(!0,!0)} ${_.Actions()} `;default:return o` ${_.Content()}`}}function ri(){const t=new URLSearchParams(window.location.search).get("snippet"),i=t==="card",a=n=>{const r=n.target.dataset.option;if(t===r)return;const s=new URL(document.location.href);s.searchParams.set("snippet",r),history.pushState({},"",s),r==="card"?Mt():Pt()};return o`
        <div class="subnav bi">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{handleEvent:a}}
            >
                ${l({vertices:3,size:45,transforms:"translateX(10px)",fill:i?"var(--error-100)":"currentColor"})}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{handleEvent:a}}
            >
                ${l({vertices:4,size:45,transforms:"translateX(10px)",fill:i?"currentColor":"var(--error-100)"})}
            </button>
        </div>
    `}function ft(e,t){const i=n=>{const r=Number(n.target.value);if(r===0)return A(g,v.SET_VARIANT,"pic");if(r===5)return A(g,v.SET_VARIANT,"pic-content");if(r===10)return A(g,v.SET_VARIANT,"pic-reorder");if(r===15)return A(g,v.SET_VARIANT,"actions")},a=n=>({pic:0,"pic-content":5,"pic-reorder":10,actions:15})[n];return t?o``:o`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${a(e)}"
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
    `}function gt(e,t){const i=n=>{switch(Number(n.target.value)){case 0:return A(g,v.SET_VARIANT_PANEL,"actions");case 10:return A(g,v.SET_VARIANT_PANEL,"actions-reorder");case 20:default:return A(g,v.SET_VARIANT_PANEL,"input")}},a={actions:0,"actions-reorder":5,input:10}[e];return t?o``:o`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${a}"
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
    `}function mt(e,t){const i=e==="square",a=e==="portrait",n=e==="landscape",r=s=>{const{nav:u,option:c}=s.target.dataset;u==="ratio"&&A(g,v.SET_ORIENTATION,c)};return t?o``:o`
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
                        fill="${a?"var(--error-100)":"currentColor"}"
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
                        fill="${n?"var(--error-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `}function Lt(){S(oi(),document.querySelector("#controls nav")),S(si(),document.querySelector("#controls h2"))}function oi(){const{variant:e,variantPanel:t,orientation:i}=g.getState(),n=new URLSearchParams(window.location.search).get("snippet"),r=n==="card",s=n==="panel";return o`
        ${ri()} ${r?ft(e):ft(e,!0)}
        ${r?mt(i):mt(i,!0)}
        ${s?gt(t):gt(t,!0)}
    `}function si(){const t=new URLSearchParams(window.location.search).get("snippet"),i=t==="card"?"content with ratio":"interactive elements";return o` <strong>${`${t}:`}</strong> groups ${i}`}function Mt(){S(zt(),document.querySelector("article")),Lt(),Rt(!1)}function zt(){const{orientation:e}=g.getState();return o` <div
        class="${e==="portrait"?"fix-portrait-card-height":""}"
    >
        <div data-group="" data-card="" data-ratio="${e}">
            ${li()}
        </div>
    </div>`}function li(){const{variant:e}=g.getState();switch(e){case"actions":return o` ${C.Content()} ${C.Actions()} `;case"pic":return o` ${C.Pic()}
                <div class="pin-avatar">${C.Avatar()}</div>`;case"pic-content":return o` ${C.Pic()} ${C.Content()} `;case"pic-reorder":return o` ${C.Pic()} ${C.Content(!0)} `;default:return o``}}function di(){S(ci(),document.querySelector("#search-results-container"))}function ci(){const{suggestions:e}=g.getState();return e.length===0?o``:o`
        <ul id="search-results">
            ${e==null?void 0:e.map(t=>o`
                    <li>
                        <svg width="28" height="28" focusable="false" data-icon>
                            <use href="./sprite.svg#pin" />
                        </svg>
                        <a href=${`?snippet=${t.value}`}
                            >${t.label}</a
                        >
                    </li>
                `)}
        </ul>
    `}g.subscribe(Bt);function ui(){const e=O("#q");e!=null&&(e.value=""),A(g,v.FILTERED,Ct.filtered),A(g,v.SUGGESTIONS,[])}function pi(e){var n;const{filtered:t}=g.getState(),i=(n=e.target)==null?void 0:n.value,a=t.filter(r=>r.value.startsWith(i.toLowerCase()));a.length>0&&(A(g,v.FILTERED,a),A(g,v.SUGGESTIONS,a))}function Bt(){const{filtered:e}=g.getState(),i=new URLSearchParams(window.location.search).get("snippet");if(di(),i===null){vt("#controls"),Ee({label:"Featured snippets",snippets:e});return}vt("h1");const a=O("#controls");["card","panel"].includes(i)?(a!=null&&a.classList.add("show"),i==="card"&&Mt(),i==="panel"&&Pt()):(a!=null&&a.classList.remove("show"),Ke(i))}document.addEventListener("input",pi);document.addEventListener("DOMContentLoaded",function(){const e=O("#clear-input");e!=null&&e.addEventListener("click",ui),Bt()});
