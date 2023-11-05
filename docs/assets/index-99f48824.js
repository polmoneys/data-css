(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function Dt(e,t){if(H(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t||"default");if(H(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vt(e){var t=Dt(e,"string");return H(t)==="symbol"?t:String(t)}function jt(e,t,a){return t=Vt(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,i)}return a}function rt(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?nt(Object(a),!0).forEach(function(i){jt(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function A(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ot=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),W=function(){return Math.random().toString(36).substring(7).split("").join(".")},st={INIT:"@@redux/INIT"+W(),REPLACE:"@@redux/REPLACE"+W(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+W()}};function qt(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ct(e,t,a){var i;if(typeof t=="function"&&typeof a=="function"||typeof a=="function"&&typeof arguments[3]=="function")throw new Error(A(0));if(typeof t=="function"&&typeof a>"u"&&(a=t,t=void 0),typeof a<"u"){if(typeof a!="function")throw new Error(A(1));return a(Ct)(e,t)}if(typeof e!="function")throw new Error(A(2));var n=e,r=t,s=[],p=s,c=!1;function h(){p===s&&(p=s.slice())}function g(){if(c)throw new Error(A(3));return r}function f($){if(typeof $!="function")throw new Error(A(4));if(c)throw new Error(A(5));var k=!0;return h(),p.push($),function(){if(k){if(c)throw new Error(A(6));k=!1,h();var E=p.indexOf($);p.splice(E,1),s=null}}}function b($){if(!qt($))throw new Error(A(7));if(typeof $.type>"u")throw new Error(A(8));if(c)throw new Error(A(9));try{c=!0,r=n(r,$)}finally{c=!1}for(var k=s=p,U=0;U<k.length;U++){var E=k[U];E()}return $}function w($){if(typeof $!="function")throw new Error(A(10));n=$,b({type:st.REPLACE})}function z(){var $,k=f;return $={subscribe:function(E){if(typeof E!="object"||E===null)throw new Error(A(11));function it(){E.next&&E.next(g())}it();var Gt=k(it);return{unsubscribe:Gt}}},$[ot]=function(){return this},$}return b({type:st.INIT}),i={dispatch:b,subscribe:f,getState:g,replaceReducer:w},i[ot]=z,i}var Ft=Ct;function Zt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.length===0?function(i){return i}:t.length===1?t[0]:t.reduce(function(i,n){return function(){return i(n.apply(void 0,arguments))}})}function Wt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(i){return function(){var n=i.apply(void 0,arguments),r=function(){throw new Error(A(15))},s={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},p=t.map(function(c){return c(s)});return r=Zt.apply(void 0,p)(n.dispatch),rt(rt({},n),{},{dispatch:r})}}}const u={TOGGLE_THEME:"TOGGLE_THEME",SET_ORIENTATION:"SET_ORIENTATION",SET_GROUP:"SET_GROUP",SET_VARIANT:"SET_VARIANT",SET_VARIANT_PANEL:"SET_VARIANT_PANEL",RESET:"RESET",FILTERED:"FILTERED",SUGGESTIONS:"SUGGESTIONS",SET_KIND:"SET_KIND",SET_OUTPUT:"SET_OUTPUT"},Kt=e=>({type:u.SET_ORIENTATION,payload:e}),Yt=e=>({type:u.SET_VARIANT,payload:e}),Qt=e=>({type:u.SET_VARIANT_PANEL,payload:e}),Xt=e=>({type:u.SET_GROUP,payload:e}),Jt=e=>({type:u.SET_OUTPUT,payload:e}),te=e=>({type:u.FILTERED,payload:e}),ee=e=>({type:u.SUGGESTIONS,payload:e}),ae=e=>({type:u.SET_KIND,payload:e}),ie=e=>{switch(e){case u.SET_ORIENTATION:return Kt;case u.SET_GROUP:return Xt;case u.SET_VARIANT:return Yt;case u.SET_VARIANT_PANEL:return Qt;case u.FILTERED:return te;case u.SUGGESTIONS:return ee;case u.SET_KIND:return ae;case u.SET_OUTPUT:return Jt;default:return()=>({})}};function xt(e){var t=function(i){var n=i.dispatch,r=i.getState;return function(s){return function(p){return typeof p=="function"?p(n,r,e):s(p)}}};return t}var wt=xt();wt.withExtraArgument=xt;const ne=wt,re=[{label:"Button",value:"button",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Checkbox",value:"checkbox",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Input",value:"input",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Progress",value:"progress",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Radio",value:"radio",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Range",value:"range",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Select",value:"select",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Switch",value:"switch",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"}],oe=[{label:"Avatar",value:"avatar",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Sizes with custom CSS properties"},{label:"Hero",value:"hero",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Dimm background to pop CTA"},{label:"Icon",value:"icon",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},{label:"Image",value:"image",kind:"media",src:"https://github.com/polmoneys/data-css",description:""}],se=[{label:"Action Sheet",value:"action-sheet",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Article",value:"article",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Text clamped, images full width"},{label:"Card",value:"card",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Ratio cards"},{label:"Group",value:"group",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"List",value:"list",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Panel",value:"panel",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Scroller",value:"scroller",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Table",value:"table",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tabs",value:"tabs",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tray",value:"tray",kind:"group",src:"https://github.com/polmoneys/data-css",description:""}],le=[{label:"Lobotomized Owl",value:"lobotomized-owl",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"*>*",hidden:!0},{label:"Border",value:"border",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Fit",value:"fit",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Font",value:"font",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gap",value:"gap",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gradient",value:"gradient",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Hide",value:"hide",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Margin Auto",value:"margin-auto",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Mask",value:"mask",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Overflow",value:"overflow",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Padding",value:"padding",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Paper",value:"paper",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Surfaces"},{label:"Place",value:"place",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Print",value:"print",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Do not print",hidden:!0},{label:"Ratio",value:"ratio",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Reorder",value:"reorder",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Util",value:"util",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0}],X=[{label:"Reset",value:"reset",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tokens",value:"tokens",kind:"theme",src:"https://github.com/polmoneys/data-css",description:"Custom CSS properties"},{label:"",value:"",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},...re,{label:"",value:"",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},...oe,{label:"",value:"",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},...se,{label:"",value:"",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},...le],q={lightTheme:!0,orientation:"landscape",group:void 0,variant:"pic",variantPanel:"actions",filtered:X.filter(e=>e.hidden===void 0||!e.hidden),kind:void 0,suggestions:[],output:[]};function m(e,t,a){const i=ie(t);e.dispatch(i(a))}function de(e=q,t){switch(t.type){case u.TOGGLE_THEME:return{...e,lightTheme:!e.lightTheme};case u.SET_ORIENTATION:return{...e,orientation:t.payload};case u.SET_GROUP:return{...e,group:t.payload};case u.SET_VARIANT:return{...e,variant:t.payload};case u.SET_VARIANT_PANEL:return{...e,variantPanel:t.payload};case u.FILTERED:return{...e,filtered:t.payload};case u.SET_KIND:return{...e,kind:t.payload};case u.SUGGESTIONS:return{...e,suggestions:t.payload};case u.SET_OUTPUT:return{...e,output:t.payload};default:return e}}const v=Ft(de,Wt(ne));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const F=window,N=F.trustedTypes,lt=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,J="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,At="?"+O,ce=`<${At}>`,R=document,G=()=>R.createComment(""),D=e=>e===null||typeof e!="object"&&typeof e!="function",St=Array.isArray,ue=e=>St(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,I=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,_t=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),o=_t(1),x=_t(2),L=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ht=new WeakMap,P=R.createTreeWalker(R,129,null,!1);function Et(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const pe=(e,t)=>{const a=e.length-1,i=[];let n,r=t===2?"<svg>":"",s=B;for(let p=0;p<a;p++){const c=e[p];let h,g,f=-1,b=0;for(;b<c.length&&(s.lastIndex=b,g=s.exec(c),g!==null);)b=s.lastIndex,s===B?g[1]==="!--"?s=dt:g[1]!==void 0?s=ct:g[2]!==void 0?(Tt.test(g[2])&&(n=RegExp("</"+g[2],"g")),s=I):g[3]!==void 0&&(s=I):s===I?g[0]===">"?(s=n??B,f=-1):g[1]===void 0?f=-2:(f=s.lastIndex-g[2].length,h=g[1],s=g[3]===void 0?I:g[3]==='"'?pt:ut):s===pt||s===ut?s=I:s===dt||s===ct?s=B:(s=I,n=void 0);const w=s===I&&e[p+1].startsWith("/>")?" ":"";r+=s===B?c+ce:f>=0?(i.push(h),c.slice(0,f)+J+c.slice(f)+O+w):c+O+(f===-2?(i.push(void 0),p):w)}return[Et(e,r+(e[a]||"<?>")+(t===2?"</svg>":"")),i]};class V{constructor({strings:t,_$litType$:a},i){let n;this.parts=[];let r=0,s=0;const p=t.length-1,c=this.parts,[h,g]=pe(t,a);if(this.el=V.createElement(h,i),P.currentNode=this.el.content,a===2){const f=this.el.content,b=f.firstChild;b.remove(),f.append(...b.childNodes)}for(;(n=P.nextNode())!==null&&c.length<p;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const b of n.getAttributeNames())if(b.endsWith(J)||b.startsWith(O)){const w=g[s++];if(f.push(b),w!==void 0){const z=n.getAttribute(w.toLowerCase()+J).split(O),$=/([.?@])?(.*)/.exec(w);c.push({type:1,index:r,name:$[2],strings:z,ctor:$[1]==="."?ve:$[1]==="?"?ge:$[1]==="@"?me:Z})}else c.push({type:6,index:r})}for(const b of f)n.removeAttribute(b)}if(Tt.test(n.tagName)){const f=n.textContent.split(O),b=f.length-1;if(b>0){n.textContent=N?N.emptyScript:"";for(let w=0;w<b;w++)n.append(f[w],G()),P.nextNode(),c.push({type:2,index:++r});n.append(f[b],G())}}}else if(n.nodeType===8)if(n.data===At)c.push({type:2,index:r});else{let f=-1;for(;(f=n.data.indexOf(O,f+1))!==-1;)c.push({type:7,index:r}),f+=O.length-1}r++}}static createElement(t,a){const i=R.createElement("template");return i.innerHTML=t,i}}function M(e,t,a=e,i){var n,r,s,p;if(t===L)return t;let c=i!==void 0?(n=a._$Co)===null||n===void 0?void 0:n[i]:a._$Cl;const h=D(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==h&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),h===void 0?c=void 0:(c=new h(e),c._$AT(e,a,i)),i!==void 0?((s=(p=a)._$Co)!==null&&s!==void 0?s:p._$Co=[])[i]=c:a._$Cl=c),c!==void 0&&(t=M(e,c._$AS(e,t.values),c,i)),t}class he{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var a;const{el:{content:i},parts:n}=this._$AD,r=((a=t==null?void 0:t.creationScope)!==null&&a!==void 0?a:R).importNode(i,!0);P.currentNode=r;let s=P.nextNode(),p=0,c=0,h=n[0];for(;h!==void 0;){if(p===h.index){let g;h.type===2?g=new j(s,s.nextSibling,this,t):h.type===1?g=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(g=new be(s,this,t)),this._$AV.push(g),h=n[++c]}p!==(h==null?void 0:h.index)&&(s=P.nextNode(),p++)}return P.currentNode=R,r}v(t){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,a),a+=i.strings.length-2):i._$AI(t[a])),a++}}class j{constructor(t,a,i,n){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,a;return(a=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&a!==void 0?a:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=M(this,t,a),D(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ue(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var a;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=V.createElement(Et(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)===null||a===void 0?void 0:a._$AD)===r)this._$AH.v(i);else{const s=new he(r,this),p=s.u(this.options);s.v(i),this.$(p),this._$AH=s}}_$AC(t){let a=ht.get(t.strings);return a===void 0&&ht.set(t.strings,a=new V(t)),a}T(t){St(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,n=0;for(const r of t)n===a.length?a.push(i=new j(this.k(G()),this.k(G()),this,this.options)):i=a[n],i._$AI(r),n++;n<a.length&&(this._$AR(i&&i._$AB.nextSibling,n),a.length=n)}_$AR(t=this._$AA.nextSibling,a){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,a);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var a;this._$AM===void 0&&(this._$Cp=t,(a=this._$AP)===null||a===void 0||a.call(this,t))}}class Z{constructor(t,a,i,n,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=a,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,a=this,i,n){const r=this.strings;let s=!1;if(r===void 0)t=M(this,t,a,0),s=!D(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const p=t;let c,h;for(t=r[0],c=0;c<r.length-1;c++)h=M(this,p[i+c],a,c),h===L&&(h=this._$AH[c]),s||(s=!D(h)||h!==this._$AH[c]),h===y?t=y:t!==y&&(t+=(h??"")+r[c+1]),this._$AH[c]=h}s&&!n&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ve extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}const fe=N?N.emptyScript:"";class ge extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==y?this.element.setAttribute(this.name,fe):this.element.removeAttribute(this.name)}}class me extends Z{constructor(t,a,i,n,r){super(t,a,i,n,r),this.type=5}_$AI(t,a=this){var i;if((t=(i=M(this,t,a,0))!==null&&i!==void 0?i:y)===L)return;const n=this._$AH,r=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var a,i;typeof this._$AH=="function"?this._$AH.call((i=(a=this.options)===null||a===void 0?void 0:a.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,a,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const vt=F.litHtmlPolyfillSupport;vt==null||vt(V,j),((K=F.litHtmlVersions)!==null&&K!==void 0?K:F.litHtmlVersions=[]).push("2.8.0");const _=(e,t,a)=>{var i,n;const r=(i=a==null?void 0:a.renderBefore)!==null&&i!==void 0?i:t;let s=r._$litPart$;if(s===void 0){const p=(n=a==null?void 0:a.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new j(t.insertBefore(G(),p),p,void 0,a??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ye=e=>(...t)=>({_$litDirective$:e,values:t});let Ce=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,i){this._$Ct=t,this._$AM=a,this._$Ci=i}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot="important",xe=" !"+Ot,we=ye(class extends Ce{constructor(e){var t;if(super(e),e.type!==$e.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return i==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ht===void 0){this.ht=new Set;for(const i in t)this.ht.add(i);return this.render(t)}this.ht.forEach(i=>{t[i]==null&&(this.ht.delete(i),i.includes("-")?a.removeProperty(i):a[i]="")});for(const i in t){const n=t[i];if(n!=null){this.ht.add(i);const r=typeof n=="string"&&n.endsWith(xe);i.includes("-")||r?a.setProperty(i,r?n.slice(0,-11):n,r?Ot:""):a[i]=n}}return L}});function l(e){const{vertices:t,size:a,fill:i,label:n,transforms:r,children:s=!1}=e;return Te({children:s,vertices:t,size:a,fill:i,label:n,transforms:r})}let kt=function(e){return Math.PI*e/180},Ae=function(e,t,a){return a+e*Math.cos(kt(t))},Se=function(e,t,a){return a+e*Math.sin(kt(t))},ft=function(e){return e<1e-7?0:e};const Te=e=>{let t=e.size||96,a=t/2,i=1*t/2,n=360/e.vertices,r=90,s=e.fill||"red",p=[0,0,t,t].join(" ");const h=[function(g){for(var f=[],b=0;b<g;b++){var w=n*b-r,z=[b===0?"M":"L",ft(Ae(i,w,a)),ft(Se(i,w,a))].join(" ");f.push(z)}return f.join(" ")}(e.vertices)].join(" ");return e.children?o`
            <div class="col-center align-center shape-with-label">
                ${Q(t,p,s,h,e.transforms)}
                ${e.children}
            </div>
        `:e.label?o`
            <div class="col-center align-center shape-with-label">
                ${Q(t,p,s,h,e.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${e.label}
                </p>
            </div>
        `:o` ${Q(t,p,s,h,e.transforms)} `};function Q(e,t,a,i,n){let r={pointerEvents:"none",transformOrigin:"center",transform:`${n??""}`};return x`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${a}
    style="${we(r)}"
      focusable="false"
        
  >
    <path d=${i} />
  </svg>`}function It(e=100){return l({vertices:22,size:e,fill:"currentColor"})}function Pt(){return o`<h2 class="headline" />`}function d(e=1,t){return o` ${[...Array(e)].map(a=>o`<p class="text ${t?"text-short":""}" />`)}`}function tt(){return o` <button>${d()}</button> `}function _e(e){return{form:{vertices:5},utils:{vertices:7},media:{vertices:6},theme:{vertices:3},group:{vertices:4}}[e]}function gt(e){const t=document.querySelector(e);t instanceof HTMLElement&&(t.innerHTML="")}function T(e){return document.querySelector(e)}function at(e){return[].slice.call(document.querySelectorAll(e))}const Ee=["chevronLeft","chevronRight","chevronDown","chevronUp","caretLeft","caretRight","caretDown","caretUp","arrowDown","arrowUp","slash","handle","check","cross","plus","dotsY","dotsX","minus","heart","bookmark","pin","star"];function Oe(){return o`
        <h3 data-font>Sprited Icons</h3>
        <div
            data-group="flex"
            data-flex-wrap
            data-gap="xl"
            data-place-items="baseline"
        >
            ${Ee.map(e=>o`${Rt({d:e,label:e,size:48})}`)}
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
    `}function Rt({d:e,size:t,label:a}){return x`<svg
      width="${t}px"
      height="${t}px"
      focusable="false"
      data-icon
      aria-labelledby="${a}-icon"
    viewbox="0 0 ${t} ${t}"
    >
      <title id="${a}-icon">{label} </title>
      <use href="./sprite.svg#${e}" />
    </svg>
  `}function ke(e){_(Ie(e),document.querySelector("article"))}function Ie(e){const{label:t,snippets:a}=e;return o`
        <ul
            id="snippets-list"
            role="list"
            aria-label=${t}
            data-group=""
            data-list=""
        >
            ${a.length===0?o` <li data-list-item="">
                      <div><p data-font="lg">No results</p></div>
                  </li>`:o``}
            ${a.map(i=>Pe(i))}
        </ul>
    `}function Pe(e){const{value:t,label:a,kind:i,description:n}=e,{kind:r}=v.getState(),s=p=>{if(r!==p){m(v,"SET_KIND",p);const c=X.filter(h=>h.kind===p);m(v,"FILTERED",c)}else m(v,"SET_KIND",void 0),m(v,"FILTERED",X)};return t===""?o`
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
                @click=${{handleEvent:()=>s(i)}}
            >
                ${l({..._e(i),size:24,fill:i===r?"var(--red-100)":"currentColor"})}
            </button>
        </div>
        <div data-padding="x">
            <h2>${a}</h2>
            ${n===""?o``:o` <p>${n}</p>`}
        </div>
        <div data-list-item-end="">
            <a href=${`?snippet=${t}`}>
                ${Rt({d:"chevronRight",size:42,label:"Ico label"})}</a
            >
        </div>
    </li>`}function Re(){return document.body.addEventListener("click",e=>{const t=T("[data-actionsheet]"),a=t.dataset.actionsheetOpen==="true";["show-tray","clear-input"].includes(e.target.id)||(e.target.id==="show-sheet"?a?(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})):(t.querySelector("[data-actionsheet-menu]:first-of-type").scrollIntoView({behavior:"smooth"}),t.dataset.actionsheetOpen="true"):a&&(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})))}),o` ${d(5)}
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
    `}function Le(){return o` 
    ${d(3)}
            <div data-group="flex" data-gap="xl" data-flex-wrap>
                <a href="javascript:;">Link</a>
                <a href="javascript:;" data-button="">Link</a>
                <a href="javascript:;" data-button="sm">Small</a>
                <a href="javascript:;" data-button="stretch" aria-label="Rate four stars"
                    >${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                    ${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    ${x`<svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        
        `}function et(){const e=at('input[type="checkbox"]:not(#checkbox-e)'),t=Array.from(e);return{checked:t.filter(a=>a.checked),all:t}}function Me(){const{output:e}=v.getState(),t=(n=!0)=>{const r=T("#checkbox-e");r!=null&&(r.indeterminate=n)},a=()=>{const{checked:n,all:r}=et();n.length===0?(m(v,u.SET_OUTPUT,r),r.filter(s=>!s.disabled).map(s=>s.checked=!0)):(m(v,u.SET_OUTPUT,[]),r.filter(s=>!s.disabled).map(s=>s.checked=!1))},i=()=>{const{checked:n}=et();if(n.length===0){t(!1);return}m(v,u.SET_OUTPUT,n),t()};return o`
        ${d(4)}
        <form id="checkbox-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="checkbox-showcase"
                    name="checkbox-showcase-result"
                    for="checkbox-a checkbox-b checkbox-c checkbox-d"
                >
                    ${e.length>0?e.map(n=>o`<p data-font="xl">${n.defaultValue}</p>`):"-"}</output
                >
            </div>
            <fieldset>
                <legend>Check options:</legend>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-a"> A </label>
                    <input
                        @change=${()=>i()}
                        type="checkbox"
                        name="option"
                        value="A"
                        id="checkbox-a"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-b"> B </label>
                    <input
                        @change=${()=>i()}
                        type="checkbox"
                        name="option"
                        value="B"
                        id="checkbox-b"
                    />
                </div>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-c"> C </label>
                    <input
                        @change=${()=>i()}
                        type="checkbox"
                        name="option"
                        value="C"
                        id="checkbox-c"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-d"> D </label>
                    <input
                        @change=${()=>i()}
                        type="checkbox"
                        name="option"
                        value="D"
                        id="checkbox-d"
                        disabled
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-e"> Some checked </label>
                    <input
                        type="checkbox"
                        name="option"
                        value="E"
                        id="checkbox-e"
                        @change=${()=>a()}
                    />
                </div>
            </fieldset>
        </form>

        ${d(1)}
    `}function ze(){return o`
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
    `}function Ue(){return o`
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
                ${x`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${x`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="">
                ${x`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${x`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    `}function Be(){return o`
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

            <div
                data-ratio="square"
                data-theme
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
    `}function He(){const e=at('input[type="radio"]:not(#radio-d)'),t=Array.from(e);return{checked:t.filter(a=>a.checked),all:t}}function Ge(){const{output:e}=v.getState(),t=()=>{const{checked:a}=He();m(v,u.SET_OUTPUT,a)};return o`
        ${d(2)}
        <form id="radio-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="radio-showcase"
                    name="radio-showcase-result"
                    for="radio-a radio-b radio-c radio-d"
                >
                    ${e.length>0?e.map(a=>o`<p data-font="xl">${a.defaultValue}</p>`):"-"}</output
                >
            </div>
            <fieldset>
                <legend>Select option:</legend>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-a"> A </label>
                    <input
                        @change=${()=>t()}
                        type="radio"
                        name="option"
                        value="A"
                        id="radio-a"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-b"> B </label>

                    <input
                        @change=${()=>t()}
                        type="radio"
                        name="option"
                        value="B"
                        id="radio-b"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-c"> C </label>

                    <input
                        @change=${()=>t()}
                        type="radio"
                        name="option"
                        value="C"
                        id="radio-c"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-d"> D </label>
                    <input
                        @change=${()=>t()}
                        type="radio"
                        name="option"
                        value="D"
                        disabled
                        id="radio-d"
                    />
                </div>
            </fieldset>
        </form>
        ${d(2)}
    `}function De(){return o`
        ${d(1)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="range-a">Range</label>
                <input
                    type="range"
                    name="range-a"
                    min="0"
                    max="100"
                    value="25"
                    list="markers"
                />

                <label for="range-b">Disabled Range</label>

                <input
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
    `}function Ve(){const e=t=>{t.target.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})};return o`
        <div aria-hidden="true">${d(4)}</div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,a)=>o`<div
                            data-ratio="portrait"
                            style="--scroller-max-inline-size:10rem"
                            data-place-items="start"
                            data-padding="xy"
                            data-place-content="start"
                            data-paper
                        >
                            <img
                                @click=${{handleEvent:e}}
                                data-avatar="${a<4?"lg":[10,11,12].includes(a)?"sm":""}"
                                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=" "
                            />
                        </div>`)}
            </div>
        </div>
        ${d(8)}
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,a)=>o` <div
                            data-ratio="landscape"
                            data-scroller-item="${[0,1,2,10].includes(a)?"lg":[6,7,12].includes(a)?"sm":""}"
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
    `}function je(){const e=at("select:not(:disabled)"),t=Array.from(e);return{checked:t.map(a=>{var i,n;return a.multiple?(console.log({is:(i=Array.from(a.selectedOptions))==null?void 0:i.map(r=>r.index)}),a.selectedOptions.length>0?(n=Array.from(a.selectedOptions))==null?void 0:n.map(r=>r.index).join(" + "):-1):a.selectedIndex}).filter(a=>a===-1),all:t}}function qe(){const{output:e}=v.getState(),t=()=>{const{checked:a}=je();m(v,u.SET_OUTPUT,a)};return o`
        ${d(7)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="standard-select">Standard Select</label>
                <div data-select="">
                    <select
                        id="standard-select"
                        @change=${()=>t()}
                    >
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
                    <span data-select-focus></span>
                </div>

                <label for="multi-select">Multiple Select</label>
                <div data-select="multiple">
                    <select
                        id="multi-select"
                        multiple
                        @change=${()=>t()}
                    >
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus></span>
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
            <div data-group="grid" data-gap="sm">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="checkbox-showcase"
                    name="checkbox-showcase-result"
                    for="checkbox-a checkbox-b checkbox-c checkbox-d"
                    data-border-shadow="outer"
                >
                    ${e.length>0?e.map(a=>o`<p data-font="xl">${a.defaultValue}</p>`):"-"}</output
                >
            </div>
        </div>
        ${d(3)}
    `}function Fe(){const{output:e}=v.getState(),t=()=>{const{checked:a}=et();m(v,u.SET_OUTPUT,a)};return o`
        ${d(2)}
        <form id="switch-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="switch-showcase"
                    name="switch-showcase-result"
                    for="checkbox-e checkbox-f"
                >
                    ${e.length>0?e.map(a=>o`<p data-font="xl">${a.defaultValue}</p>`):"-"}</output
                >
            </div>
            <fieldset>
                <legend>Activate features:</legend>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-f"> F </label>
                    <input
                        @change=${()=>t()}
                        data-switch=""
                        type="checkbox"
                        name="option"
                        value="F"
                        id="checkbox-f"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-g"> G </label>
                    <input
                        @change=${()=>t()}
                        data-switch=""
                        type="checkbox"
                        name="option"
                        value="G"
                        id="checkbox-g"
                    />
                </div>
            </fieldset>
        </form>
        ${d(2)}
    `}function Ze(){return o`
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
    `}function We(){const e=t=>{const a=t.target.dataset.tabId,i=document.querySelectorAll("[data-tabs] [data-tab-id]");i&&(i[0].dataset.tabId===a?i[0].dataset.tabVisible="true":i[0].dataset.tabVisible="false",i[1].dataset.tabId===a?i[1].dataset.tabVisible="true":i[1].dataset.tabVisible="false")};return o` ${d(2)}

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
            <div data-tab-id="1">${It(84)} ${d(1)}${d(1,!0)}</div>
            <div data-tab-id="2" data-tab-visible="false">
                ${d(1,!0)} ${d(3)}${d(1,!0)}
            </div>
        </div>

        ${d(2)}`}const Nt=()=>{const e=T("main"),t=T("[data-tray]"),a=T("[data-tray-overlay]");t.dataset.trayOpen==="false"?(e.setAttribute("inert","true"),a.dataset.trayOverlayOpen="true",t.dataset.trayOpen="true",_(Ye(),T("[data-tray]"))):(e.removeAttribute("inert"),a.dataset.trayOverlayOpen="false",t.dataset.trayOpen="false")};function Ke(){return o`
        ${d(1)}
        <button
            id="show-tray"
            @click=${{handleEvent:Nt}}
            data-button
        >
            Show tray
        </button>
        ${d(1)}
    `}function Ye(){return o` <div
        data-group="flex"
        data-flex="column"
        data-gap="sm"
        data-padding="xy"
    >
        ${d(4)}
        <menu>
            <button @click=${{handleEvent:Nt}} type="reset">
                Cancel
            </button>
        </menu>
        ${d(1)}
    </div>`}function Qe(){return o`
        ${d(1)}
        <div data-group="flex" data-gap="sm">
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
                class="fix-unit-width"
            >
                ${x`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${x`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                ${x`
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
                ${x`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
        </div>
        ${d(1)}
    `}function mt(){return o` <p data-font>Docs incoming</p>
        <div data-paper-color="" data-paper="error">${d(4)}</div>`}function Xe(){return o`
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
    `}function Je(e){const t=document.querySelector("article");t!=null&&_(ta(e),t)}function ta(e){switch(e){case"reset":case"tokens":return o`${mt()}`;case"button":return o`${Le()}`;case"checkbox":return o`${Me()}`;case"input":return o`${Ue()}`;case"radio":return o`${Ge()}`;case"range":return o`${De()}`;case"select":return o`${qe()}`;case"progress":return o`${Xe()}`;case"switch":return o`${Fe()}`;case"avatar":case"scroller":case"image":return o`${Ve()}`;case"article":case"hero":return o`${Ne()}`;case"icon":return o`${Oe()}`;case"action-sheet":return o`${Re()}`;case"panel":case"card":return;case"group":return o`${Qe()}`;case"list":return o`<p data-font>Check landing</p>
                ${d(4)}`;case"table":return o`${Ze()}`;case"tabs":return o`${We()}`;case"tray":return o`${Ke()}`;case"lobotomized-owl":case"border":case"fit":case"gap":case"gradient":case"hide":case"margin-auto":case"mask":case"overflow":case"padding":case"place":case"print":case"ratio":case"reorder":case"util":return o`${mt()}`;case"font":return o`${ze()}`;case"paper":return o`${Be()}`;default:return o``}}function ea(){return o`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `}function aa(e){return o`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${C.HeadLine()} ${C.Line(3)}
        </div>
    `}function ia(e){return o`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${tt()}
        </div>
    `}const C={};C.Pic=ea;C.Content=aa;C.Avatar=It;C.HeadLine=Pt;C.Line=d;C.Actions=ia;function na(e,t){return o`
        <div class="gap:md ${e?"reorder:top":""}">
            ${S.HeadLine()} ${S.Line(3)}
            ${t?o` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`:o``}
        </div>
    `}function ra(e){return o`
        <div data-reorder="${e?"top":""}">
            ${d(1,!0)}
            <div>${tt()}${tt()}</div>
        </div>
    `}const S={};S.Content=na;S.HeadLine=Pt;S.Line=d;S.Actions=ra;function Lt(e){_(oa(e),document.querySelector("aside"))}function oa(e){const{orientation:t}=v.getState(),a=t==="portrait";return e?o``:o`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${a?"":"md"}"
        >
            ${[...Array(4)].map(i=>Bt())}
        </div>
    `}function Mt(){_(sa(),document.querySelector("article")),zt(),Lt(!0)}function sa(){return o`
        <div id="controls">
            <h2></h2>
            <nav></nav>
        </div>
        <div data-group="" data-panel="">${la()}</div>
    `}function la(){const{variantPanel:e}=v.getState();switch(e){case"actions":return o` ${S.Content()} ${S.Actions()} `;case"actions-reorder":return o` ${S.Content()}${S.Actions(!0)} `;case"input":return o` ${S.Content(!0,!0)} ${S.Actions()} `;default:return o` ${S.Content()}`}}function da(){const t=new URLSearchParams(window.location.search).get("snippet"),a=t==="card",i=n=>{const r=n.target.dataset.option;if(t===r)return;const s=new URL(document.location.href);s.searchParams.set("snippet",r),history.pushState({},"",s),r==="card"?Ut():Mt()};return o`
        <div class="subnav bi">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{handleEvent:i}}
            >
                ${l({vertices:3,size:45,transforms:"translateX(10px)",fill:a?"var(--red-100)":"currentColor"})}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{handleEvent:i}}
            >
                ${l({vertices:4,size:45,transforms:"translateX(10px)",fill:a?"currentColor":"var(--red-100)"})}
            </button>
        </div>
    `}function bt(e,t){const a=n=>{const r=Number(n.target.value);if(r===0)return m(v,u.SET_VARIANT,"pic");if(r===5)return m(v,u.SET_VARIANT,"pic-content");if(r===10)return m(v,u.SET_VARIANT,"pic-reorder");if(r===15)return m(v,u.SET_VARIANT,"actions")},i=n=>({pic:0,"pic-content":5,"pic-reorder":10,actions:15})[n];return t?o``:o`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${i(e)}"
                step="5"
                id="range"
                @input=${{handleEvent:a}}
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
    `}function $t(e,t){const a=n=>{switch(Number(n.target.value)){case 0:return m(v,u.SET_VARIANT_PANEL,"actions");case 10:return m(v,u.SET_VARIANT_PANEL,"actions-reorder");case 20:default:return m(v,u.SET_VARIANT_PANEL,"input")}},i={actions:0,"actions-reorder":5,input:10}[e];return t?o``:o`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${i}"
                step="10"
                id="range"
                @input=${{handleEvent:a}}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
        </datalist>
    `}function yt(e,t){const a=e==="square",i=e==="portrait",n=e==="landscape",r=s=>{const{nav:p,option:c}=s.target.dataset;p==="ratio"&&m(v,u.SET_ORIENTATION,c)};return t?o``:o`
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
                        fill="${a?"var(--red-100)":"currentColor"}"
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
                        fill="${i?"var(--red-100)":"currentColor"}"
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
                        fill="${n?"var(--red-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `}const ca=[{label:"default",value:"currentColor"},{label:"red",value:"var(--red-100)"},{label:"purple",value:"var(--purple-100)"},{label:"gray",value:"var(--gray-100)"}];function ua(){_(pa(),document.querySelector("section > header div:first-of-type"))}function pa(){const e=t=>{const{swatch:a}=t.target.dataset,i={red:"error",purple:"focus",gray:"gray",default:""}[a],n=T("article"),r=T('header [data-input=""]');n!=null&&r!=null&&(n.classList.remove("error","focus","gray"),r.classList.remove("error","focus","gray"),i!==""&&(n.classList.add(i),r.classList.add(i)))};return o`
        <div data-group="flex" data-gap="sm">
            ${ca.map(t=>o`
                    <button
                        data-animation-wiggle-hover
                        data-button="circle"
                        data-fit="comfy-height"
                        data-paper
                        data-paper-outline
                        data-swatch=${t.label}
                        @click=${{handleEvent:e}}
                    >
                        ${l({vertices:8,size:32,fill:t.value})}
                    </button>
                `)}
        </div>
    `}function zt(){_(ha(),document.querySelector("#controls nav")),_(va(),document.querySelector("#controls h2"))}function ha(){const{variant:e,variantPanel:t,orientation:a}=v.getState(),n=new URLSearchParams(window.location.search).get("snippet"),r=n==="card",s=n==="panel";return o`
        ${da()} ${r?bt(e):bt(e,!0)}
        ${r?yt(a):yt(a,!0)}
        ${s?$t(t):$t(t,!0)}
    `}function va(){const t=new URLSearchParams(window.location.search).get("snippet"),a=t==="card"?"content with ratio":"interactive elements";return o` <strong>${`${t}:`}</strong> groups ${a}`}function Ut(){_(Bt(),document.querySelector("article")),zt(),Lt(!1)}function Bt(){const{orientation:e}=v.getState();return o` <div
        class="${e==="portrait"?"fix-portrait-card-height":""}"
    >
        <div data-group="" data-card="" data-ratio="${e}">
            ${fa()}
        </div>
    </div>`}function fa(){const{variant:e}=v.getState();switch(e){case"actions":return o` ${C.Content()} ${C.Actions()} `;case"pic":return o` ${C.Pic()}
                <div class="pin-avatar">${C.Avatar()}</div>`;case"pic-content":return o` ${C.Pic()} ${C.Content()} `;case"pic-reorder":return o` ${C.Pic()} ${C.Content(!0)} `;default:return o``}}function ga(){_(ma(),document.querySelector("#search-results-container"))}function ma(){const{suggestions:e}=v.getState();return e.length===0?o``:o`
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
    `}v.subscribe(Ht);function ba(){const e=T("#q");e!=null&&(e.value=""),m(v,u.FILTERED,q.filtered),m(v,u.SUGGESTIONS,[]),m(v,u.SET_OUTPUT,[])}function $a(e){var i;const a=((i=e.target)==null?void 0:i.value).replace(/[^a-zA-Z]/g,"").toLowerCase();if(a!==""){const n=q.filtered.filter(r=>r.value.startsWith(a));n.length>0?(m(v,u.FILTERED,n),m(v,u.SUGGESTIONS,n)):(m(v,u.FILTERED,q.filtered),m(v,u.SUGGESTIONS,[]))}else m(v,u.SUGGESTIONS,[])}function Ht(){const{filtered:e}=v.getState(),a=new URLSearchParams(window.location.search).get("snippet");if(ga(),a===null){gt("#controls"),ke({label:"Featured snippets",snippets:e});return}gt("h1");const i=T("#controls");["card","panel"].includes(a)?(i!=null&&i.classList.add("show"),a==="card"&&Ut(),a==="panel"&&Mt()):(i!=null&&i.classList.remove("show"),Je(a),["paper"].includes(a)||ua())}document.addEventListener("DOMContentLoaded",function(){const e=T("#clear-input");e!=null&&e.addEventListener("click",ba);const t=T("#q");t!=null&&t.addEventListener("input",$a),Ht()});
