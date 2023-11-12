(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function jt(e,t){if(H(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(H(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qt(e){var t=jt(e,"string");return H(t)==="symbol"?t:String(t)}function Ft(e,t,n){return t=qt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(n),!0).forEach(function(a){Ft(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function A(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var st=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),W=function(){return Math.random().toString(36).substring(7).split("").join(".")},lt={INIT:"@@redux/INIT"+W(),REPLACE:"@@redux/REPLACE"+W(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+W()}};function Zt(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function xt(e,t,n){var a;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(A(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(A(1));return n(xt)(e,t)}if(typeof e!="function")throw new Error(A(2));var i=e,o=t,s=[],p=s,c=!1;function v(){p===s&&(p=s.slice())}function m(){if(c)throw new Error(A(3));return o}function f($){if(typeof $!="function")throw new Error(A(4));if(c)throw new Error(A(5));var O=!0;return v(),p.push($),function(){if(O){if(c)throw new Error(A(6));O=!1,v();var E=p.indexOf($);p.splice(E,1),s=null}}}function b($){if(!Zt($))throw new Error(A(7));if(typeof $.type>"u")throw new Error(A(8));if(c)throw new Error(A(9));try{c=!0,o=i(o,$)}finally{c=!1}for(var O=s=p,U=0;U<O.length;U++){var E=O[U];E()}return $}function w($){if(typeof $!="function")throw new Error(A(10));i=$,b({type:lt.REPLACE})}function z(){var $,O=f;return $={subscribe:function(E){if(typeof E!="object"||E===null)throw new Error(A(11));function it(){E.next&&E.next(m())}it();var Vt=O(it);return{unsubscribe:Vt}}},$[st]=function(){return this},$}return b({type:lt.INIT}),a={dispatch:b,subscribe:f,getState:m,replaceReducer:w},a[st]=z,a}var Wt=xt;function Kt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(a){return a}:t.length===1?t[0]:t.reduce(function(a,i){return function(){return a(i.apply(void 0,arguments))}})}function Yt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return function(){var i=a.apply(void 0,arguments),o=function(){throw new Error(A(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},p=t.map(function(c){return c(s)});return o=Kt.apply(void 0,p)(i.dispatch),rt(rt({},i),{},{dispatch:o})}}}const u={TOGGLE_THEME:"TOGGLE_THEME",SET_ORIENTATION:"SET_ORIENTATION",SET_GROUP:"SET_GROUP",SET_VARIANT:"SET_VARIANT",SET_VARIANT_PANEL:"SET_VARIANT_PANEL",RESET:"RESET",FILTERED:"FILTERED",SUGGESTIONS:"SUGGESTIONS",SET_KIND:"SET_KIND",SET_OUTPUT:"SET_OUTPUT"},Qt=e=>({type:u.SET_ORIENTATION,payload:e}),Xt=e=>({type:u.SET_VARIANT,payload:e}),Jt=e=>({type:u.SET_VARIANT_PANEL,payload:e}),te=e=>({type:u.SET_GROUP,payload:e}),ee=e=>({type:u.SET_OUTPUT,payload:e}),ne=e=>({type:u.FILTERED,payload:e}),ae=e=>({type:u.SUGGESTIONS,payload:e}),ie=e=>({type:u.SET_KIND,payload:e}),oe=e=>{switch(e){case u.SET_ORIENTATION:return Qt;case u.SET_GROUP:return te;case u.SET_VARIANT:return Xt;case u.SET_VARIANT_PANEL:return Jt;case u.FILTERED:return ne;case u.SUGGESTIONS:return ae;case u.SET_KIND:return ie;case u.SET_OUTPUT:return ee;default:return()=>({})}};function wt(e){var t=function(a){var i=a.dispatch,o=a.getState;return function(s){return function(p){return typeof p=="function"?p(i,o,e):s(p)}}};return t}var At=wt();At.withExtraArgument=wt;const re=At,se=[{label:"Button",value:"button",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Checkbox",value:"checkbox",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Input",value:"input",kind:"form",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Progress",value:"progress",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Radio",value:"radio",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"},{label:"Range",value:"range",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Select",value:"select",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},{label:"Switch",value:"switch",kind:"form",src:"https://github.com/polmoneys/data-css",description:"CurrentColor friendly"}],le=[{label:"Avatar",value:"avatar",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Sizes with custom CSS properties"},{label:"Hero",value:"hero",kind:"media",src:"https://github.com/polmoneys/data-css",description:"Dimm background to pop CTA"},{label:"Icon",value:"icon",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},{label:"Image",value:"image",kind:"media",src:"https://github.com/polmoneys/data-css",description:""}],de=[{label:"Action Sheet",value:"action-sheet",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Article",value:"article",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Text clamped, images full width"},{label:"Card",value:"card",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Aspect ratio <3"},{label:"Group",value:"group",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"List",value:"list",kind:"group",src:"https://github.com/polmoneys/data-css",description:"Start and End slots"},{label:"Panel",value:"panel",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Scroller",value:"scroller",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Table",value:"table",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tabs",value:"tabs",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tray",value:"tray",kind:"group",src:"https://github.com/polmoneys/data-css",description:""}],ce=[{label:"Lobotomized Owl",value:"lobotomized-owl",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"*>*",hidden:!0},{label:"Border",value:"border",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Fit",value:"fit",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Font",value:"font",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gap",value:"gap",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Gradient",value:"gradient",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Hide",value:"hide",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Margin Auto",value:"margin-auto",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Mask",value:"mask",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Overflow",value:"overflow",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Padding",value:"padding",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Paper",value:"paper",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Surfaces as in grouped styles"},{label:"Place",value:"place",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Print",value:"print",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"Do not print",hidden:!0},{label:"Ratio",value:"ratio",kind:"utils",src:"https://github.com/polmoneys/data-css",description:""},{label:"Reorder",value:"reorder",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0},{label:"Util",value:"util",kind:"utils",src:"https://github.com/polmoneys/data-css",description:"",hidden:!0}],J=[{label:"Reset",value:"reset",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},{label:"Tokens",value:"tokens",kind:"theme",src:"https://github.com/polmoneys/data-css",description:"Custom CSS properties"},{label:"",value:"",kind:"theme",src:"https://github.com/polmoneys/data-css",description:""},...se,{label:"",value:"",kind:"form",src:"https://github.com/polmoneys/data-css",description:""},...le,{label:"",value:"",kind:"media",src:"https://github.com/polmoneys/data-css",description:""},...de,{label:"",value:"",kind:"group",src:"https://github.com/polmoneys/data-css",description:""},...ce],q={lightTheme:!0,orientation:"landscape",group:void 0,variant:"pic",variantPanel:"actions",filtered:J.filter(e=>e.hidden===void 0||!e.hidden),kind:void 0,suggestions:[],output:[]};function g(e,t,n){const a=oe(t);e.dispatch(a(n))}function ue(e=q,t){switch(t.type){case u.TOGGLE_THEME:return{...e,lightTheme:!e.lightTheme};case u.SET_ORIENTATION:return{...e,orientation:t.payload};case u.SET_GROUP:return{...e,group:t.payload};case u.SET_VARIANT:return{...e,variant:t.payload};case u.SET_VARIANT_PANEL:return{...e,variantPanel:t.payload};case u.FILTERED:return{...e,filtered:t.payload};case u.SET_KIND:return{...e,kind:t.payload};case u.SUGGESTIONS:return{...e,suggestions:t.payload};case u.SET_OUTPUT:return{...e,output:t.payload};default:return e}}const h=Wt(ue,Yt(re));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const F=window,N=F.trustedTypes,dt=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,tt="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,St="?"+k,pe=`<${St}>`,R=document,D=()=>R.createComment(""),G=e=>e===null||typeof e!="object"&&typeof e!="function",Tt=Array.isArray,he=e=>Tt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ut=/>/g,I=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ht=/"/g,_t=/^(?:script|style|textarea|title)$/i,Et=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=Et(1),x=Et(2),L=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),vt=new WeakMap,P=R.createTreeWalker(R,129,null,!1);function kt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const ve=(e,t)=>{const n=e.length-1,a=[];let i,o=t===2?"<svg>":"",s=B;for(let p=0;p<n;p++){const c=e[p];let v,m,f=-1,b=0;for(;b<c.length&&(s.lastIndex=b,m=s.exec(c),m!==null);)b=s.lastIndex,s===B?m[1]==="!--"?s=ct:m[1]!==void 0?s=ut:m[2]!==void 0?(_t.test(m[2])&&(i=RegExp("</"+m[2],"g")),s=I):m[3]!==void 0&&(s=I):s===I?m[0]===">"?(s=i??B,f=-1):m[1]===void 0?f=-2:(f=s.lastIndex-m[2].length,v=m[1],s=m[3]===void 0?I:m[3]==='"'?ht:pt):s===ht||s===pt?s=I:s===ct||s===ut?s=B:(s=I,i=void 0);const w=s===I&&e[p+1].startsWith("/>")?" ":"";o+=s===B?c+pe:f>=0?(a.push(v),c.slice(0,f)+tt+c.slice(f)+k+w):c+k+(f===-2?(a.push(void 0),p):w)}return[kt(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),a]};class V{constructor({strings:t,_$litType$:n},a){let i;this.parts=[];let o=0,s=0;const p=t.length-1,c=this.parts,[v,m]=ve(t,n);if(this.el=V.createElement(v,a),P.currentNode=this.el.content,n===2){const f=this.el.content,b=f.firstChild;b.remove(),f.append(...b.childNodes)}for(;(i=P.nextNode())!==null&&c.length<p;){if(i.nodeType===1){if(i.hasAttributes()){const f=[];for(const b of i.getAttributeNames())if(b.endsWith(tt)||b.startsWith(k)){const w=m[s++];if(f.push(b),w!==void 0){const z=i.getAttribute(w.toLowerCase()+tt).split(k),$=/([.?@])?(.*)/.exec(w);c.push({type:1,index:o,name:$[2],strings:z,ctor:$[1]==="."?ge:$[1]==="?"?be:$[1]==="@"?$e:Z})}else c.push({type:6,index:o})}for(const b of f)i.removeAttribute(b)}if(_t.test(i.tagName)){const f=i.textContent.split(k),b=f.length-1;if(b>0){i.textContent=N?N.emptyScript:"";for(let w=0;w<b;w++)i.append(f[w],D()),P.nextNode(),c.push({type:2,index:++o});i.append(f[b],D())}}}else if(i.nodeType===8)if(i.data===St)c.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(k,f+1))!==-1;)c.push({type:7,index:o}),f+=k.length-1}o++}}static createElement(t,n){const a=R.createElement("template");return a.innerHTML=t,a}}function M(e,t,n=e,a){var i,o,s,p;if(t===L)return t;let c=a!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[a]:n._$Cl;const v=G(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==v&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),v===void 0?c=void 0:(c=new v(e),c._$AT(e,n,a)),a!==void 0?((s=(p=n)._$Co)!==null&&s!==void 0?s:p._$Co=[])[a]=c:n._$Cl=c),c!==void 0&&(t=M(e,c._$AS(e,t.values),c,a)),t}class fe{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:a},parts:i}=this._$AD,o=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:R).importNode(a,!0);P.currentNode=o;let s=P.nextNode(),p=0,c=0,v=i[0];for(;v!==void 0;){if(p===v.index){let m;v.type===2?m=new j(s,s.nextSibling,this,t):v.type===1?m=new v.ctor(s,v.name,v.strings,this,t):v.type===6&&(m=new ye(s,this,t)),this._$AV.push(m),v=i[++c]}p!==(v==null?void 0:v.index)&&(s=P.nextNode(),p++)}return P.currentNode=R,o}v(t){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,n),n+=a.strings.length-2):a._$AI(t[n])),n++}}class j{constructor(t,n,a,i){var o;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=a,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=M(this,t,n),G(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):he(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&G(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var n;const{values:a,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=V.createElement(kt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.v(a);else{const s=new fe(o,this),p=s.u(this.options);s.v(a),this.$(p),this._$AH=s}}_$AC(t){let n=vt.get(t.strings);return n===void 0&&vt.set(t.strings,n=new V(t)),n}T(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,i=0;for(const o of t)i===n.length?n.push(a=new j(this.k(D()),this.k(D()),this,this.options)):a=n[i],a._$AI(o),i++;i<n.length&&(this._$AR(a&&a._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Z{constructor(t,n,a,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,a,i){const o=this.strings;let s=!1;if(o===void 0)t=M(this,t,n,0),s=!G(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const p=t;let c,v;for(t=o[0],c=0;c<o.length-1;c++)v=M(this,p[a+c],n,c),v===L&&(v=this._$AH[c]),s||(s=!G(v)||v!==this._$AH[c]),v===y?t=y:t!==y&&(t+=(v??"")+o[c+1]),this._$AH[c]=v}s&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ge extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}const me=N?N.emptyScript:"";class be extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==y?this.element.setAttribute(this.name,me):this.element.removeAttribute(this.name)}}class $e extends Z{constructor(t,n,a,i,o){super(t,n,a,i,o),this.type=5}_$AI(t,n=this){var a;if((t=(a=M(this,t,n,0))!==null&&a!==void 0?a:y)===L)return;const i=this._$AH,o=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==y&&(i===y||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,t):this._$AH.handleEvent(t)}}class ye{constructor(t,n,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const ft=F.litHtmlPolyfillSupport;ft==null||ft(V,j),((K=F.litHtmlVersions)!==null&&K!==void 0?K:F.litHtmlVersions=[]).push("2.8.0");const _=(e,t,n)=>{var a,i;const o=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:t;let s=o._$litPart$;if(s===void 0){const p=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new j(t.insertBefore(D(),p),p,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xe=e=>(...t)=>({_$litDirective$:e,values:t});let we=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,a){this._$Ct=t,this._$AM=n,this._$Ci=a}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot="important",Ae=" !"+Ot,Se=xe(class extends we{constructor(e){var t;if(super(e),e.type!==Ce.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return a==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const a in t)this.ht.add(a);return this.render(t)}this.ht.forEach(a=>{t[a]==null&&(this.ht.delete(a),a.includes("-")?n.removeProperty(a):n[a]="")});for(const a in t){const i=t[a];if(i!=null){this.ht.add(a);const o=typeof i=="string"&&i.endsWith(Ae);a.includes("-")||o?n.setProperty(a,o?i.slice(0,-11):i,o?Ot:""):n[a]=i}}return L}});function d(e){const{vertices:t,size:n,fill:a,label:i,transforms:o,children:s=!1}=e;return Ee({children:s,vertices:t,size:n,fill:a,label:i,transforms:o})}let It=function(e){return Math.PI*e/180},Te=function(e,t,n){return n+e*Math.cos(It(t))},_e=function(e,t,n){return n+e*Math.sin(It(t))},gt=function(e){return e<1e-7?0:e};const Ee=e=>{let t=e.size||96,n=t/2,a=1*t/2,i=360/e.vertices,o=90,s=e.fill||"red",p=[0,0,t,t].join(" ");const v=[function(m){for(var f=[],b=0;b<m;b++){var w=i*b-o,z=[b===0?"M":"L",gt(Te(a,w,n)),gt(_e(a,w,n))].join(" ");f.push(z)}return f.join(" ")}(e.vertices)].join(" ");return e.children?r`
            <div class="col-center align-center shape-with-label">
                ${Q(t,p,s,v,e.transforms)}
                ${e.children}
            </div>
        `:e.label?r`
            <div class="col-center align-center shape-with-label">
                ${Q(t,p,s,v,e.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${e.label}
                </p>
            </div>
        `:r` ${Q(t,p,s,v,e.transforms)} `};function Q(e,t,n,a,i){let o={pointerEvents:"none",transformOrigin:"center",transform:`${i??""}`};return x`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${n}
    style="${Se(o)}"
      focusable="false"
        
  >
    <path d=${a} />
  </svg>`}function Pt(e=100){return d({vertices:22,size:e,fill:"currentColor"})}function Rt(){return r`<h2 class="headline" />`}function l(e=1,t){return r` ${[...Array(e)].map(n=>r`<p class="text ${t?"text-short":""}" />`)}`}function et(){return r` <button>${l()}</button> `}const ke=["paper","tray","action-sheet","reset","tokens","button","group"];function Oe(e){return{form:{vertices:5},utils:{vertices:7},media:{vertices:6},theme:{vertices:3},group:{vertices:4}}[e]}function mt(e){const t=document.querySelector(e);t instanceof HTMLElement&&(t.innerHTML="")}function T(e){return document.querySelector(e)}function Nt(e){return[].slice.call(document.querySelectorAll(e))}function Ie(e){return navigator.clipboard.writeText(e).then(()=>{console.log("Text copied to clipboard!")}).catch(t=>{console.error("🙏🏽",t)})}function Pe(e){const t=new URLSearchParams(window.location.search);t.set("copy",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({path:n},"",n)}const Re=["chevronLeft","chevronRight","chevronDown","chevronUp","caretLeft","caretRight","caretDown","caretUp","arrowDown","arrowUp","slash","handle","check","cross","plus","dotsY","dotsX","minus","heart","bookmark","pin","star","github"];function Ne(){return r`
        ${l(2)}
        <div
            data-group="flex"
            data-flex-wrap
            data-gap="xl"
            data-place-items="baseline"
        >
            ${Re.map(e=>r`${at({d:e,label:e,size:48})}`)}
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
        </div>
    `}function at({d:e,size:t,label:n}){return x`<svg
      width="${t}px"
      height="${t}px"
      focusable="false"
      data-icon
      aria-labelledby="${n}-icon"
    viewbox="0 0 ${t} ${t}"
    >
      <title id="${n}-icon">{label} </title>
      <use href="./sprite.svg#${e}" />
    </svg>
  `}function Le(e){_(Me(e),document.querySelector("article"))}function Me(e){const{label:t,snippets:n}=e;return r`
        <ul
            id="snippets-list"
            role="list"
            aria-label=${t}
            data-group=""
            data-list=""
        >
            ${n.length===0?r` <li data-list-item="">
                      <div><p data-font="lg">No results</p></div>
                  </li>`:r``}
            ${n.map(a=>ze(a))}
        </ul>
    `}function ze(e){const{value:t,label:n,kind:a,description:i}=e,{kind:o}=h.getState(),s=p=>{if(o!==p){g(h,"SET_KIND",p);const c=J.filter(v=>v.kind===p);g(h,"FILTERED",c)}else g(h,"SET_KIND",void 0),g(h,"FILTERED",J)};return t===""?r`
            <li data-list-item="">
                <div>
                    <div data-list-item-divider="">${l(1,!0)}</div>
                </div>
            </li>
        `:r` <li data-list-item="">
        <div data-list-item-start="">
            <button
                type="button"
                data-paper="transparent"
                @click=${{handleEvent:()=>s(a)}}
            >
                ${d({...Oe(a),size:24,fill:a===o?"var(--red-100)":"currentColor"})}
            </button>
        </div>
        <div data-padding="x">
            <h2>${n}</h2>
            ${i===""?r``:r` <p>${i}</p>`}
        </div>
        <div data-list-item-end="">
            <a href=${`?snippet=${t}`}>
                ${at({d:"chevronRight",size:42,label:"Ico label"})}</a
            >
        </div>
    </li>`}function Ue(){return document.body.addEventListener("click",e=>{const t=T("[data-actionsheet]"),n=t.dataset.actionsheetOpen==="true";["show-tray","clear-input"].includes(e.target.id)||(e.target.id==="show-sheet"?n?(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})):(t.querySelector("[data-actionsheet-menu]:first-of-type").scrollIntoView({behavior:"smooth"}),t.dataset.actionsheetOpen="true"):n&&(t.dataset.actionsheetOpen="false",t.querySelector("[data-actionsheet-snap-sentinel]").scrollIntoView({behavior:"smooth"})))}),r` ${l(5)}
        <button id="show-sheet" data-button>Show action sheet</button>
        ${l(5)}
        <div data-actionsheet data-actionsheet-open="false">
            <div data-actionsheet-snap-sentinel></div>
            <menu data-actionsheet-menu>
                <button type="button" data-button="full">Action 1</button>
                <button type="button" data-button="full">Action 2</button>
                <button type="button" data-button="full" data-paper="accent">
                    Action 3
                </button>
            </menu>
            <menu>
                <button type="reset" data-button="full" data-paper="error">
                    Cancel
                </button>
            </menu>
        </div>`}function Be(){return r`
        ${l(3)}
        <div
            data-article=""
            data-gap="md"
            data-border-shadow="outer"
            data-padding="y"
            data-hero
        >
            ${l(5)}${l(1,!0)}${l(5)}
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=" "
            />
            ${l(1,!0)}${l(5)}
        </div>
        ${l(3)}
    `}const bt={idle:"Async call",sending:`<div data-spinner="sm" style="--spinner-count: 8">
            <span style="--spinner-index: 0"></span>
            <span style="--spinner-index: 1"></span>
            <span style="--spinner-index: 2"></span>
            <span style="--spinner-index: 3"></span>
            <span style="--spinner-index: 4"></span>
            <span style="--spinner-index: 5"></span>
            <span style="--spinner-index: 6"></span>
            <span style="--spinner-index: 7"></span>
        </div> working...`,done:"Done!"};function X(e,t){document.startViewTransition?document.startViewTransition(()=>t.target.innerHTML=bt[e]):t.target.innerHTML=bt[e]}function He(){let e=[];function t(){e.forEach(a=>{clearTimeout(a)}),e=[]}function n(a){t(),X("sending",a),e.push(setTimeout(()=>X("done",a),4e3)),e.push(setTimeout(()=>X("idle",a),6e3))}return r` 
    ${l(3)}
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
            
            <button data-button 
            @click=${{handleEvent:n}}
            >Async call</button>
            </div>
        </div>
    ${l(2)}
        
        `}function nt(){const e=Nt('input[type="checkbox"]:not(#checkbox-e)'),t=Array.from(e);return{checked:t.filter(n=>n.checked),all:t}}function De(){const{output:e}=h.getState(),t=(i=!0)=>{const o=T("#checkbox-e");o!=null&&(o.indeterminate=i)},n=()=>{const{checked:i,all:o}=nt();i.length===0?(g(h,u.SET_OUTPUT,o),o.filter(s=>!s.disabled).map(s=>s.checked=!0)):(g(h,u.SET_OUTPUT,[]),o.filter(s=>!s.disabled).map(s=>s.checked=!1))},a=()=>{const{checked:i}=nt();if(i.length===0){t(!1);return}g(h,u.SET_OUTPUT,i),t()};return r`
        ${l(4)}
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
                    ${e.length>0?e.map(i=>r`<p data-font="xl">${i.defaultValue}</p>`):"-"}</output
                >
            </div>
            <fieldset>
                <legend>Check options:</legend>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-a"> A </label>
                    <input
                        @change=${()=>a()}
                        type="checkbox"
                        name="option"
                        value="A"
                        id="checkbox-a"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-b"> B </label>
                    <input
                        @change=${()=>a()}
                        type="checkbox"
                        name="option"
                        value="B"
                        id="checkbox-b"
                    />
                </div>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-c"> C </label>
                    <input
                        @change=${()=>a()}
                        type="checkbox"
                        name="option"
                        value="C"
                        id="checkbox-c"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-d"> D </label>
                    <input
                        @change=${()=>a()}
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
                        @change=${()=>n()}
                    />
                </div>
            </fieldset>
        </form>

        ${l(1)}
    `}function Ge(){return r`
        ${l(1)}
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            <p data-font="xs">Aa AA</p>
            <p data-font="sm">Aa AA</p>
            <p data-font="md">Aa AA</p>
            <p data-font="">Aa AA</p>
            <p data-font="lg">Aa AA</p>
            <p data-font="xl">Aa AA</p>
            <p data-font="xxl">Aa AA</p>
        </div>
        ${l(3)}
    `}function Ve(){return r`
        ${l(2)}
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
            ${l(4)}
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
        ${l(1)}
    `}function je(){return r`
        ${l(2)}
        <div data-intrinsic-grid data-gap="sm">
            <div
                data-ratio="square"
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:3,size:24,fill:"currentColor"})}
                ${l(1,!0)}
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
                ${l(1,!0)}
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
                ${l(1,!0)}
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
                ${l(1,!0)}
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
                ${l(1,!0)}
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
                ${l(1,!0)}
            </div>

            <div
                data-ratio="square"
                data-theme
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${d({vertices:7,size:24,fill:"currentColor"})}
                ${l(1,!0)}
            </div>
        </div>
        ${l(2)}
    `}function qe(){const e=Nt('input[type="radio"]:not(#radio-d)'),t=Array.from(e);return{checked:t.filter(n=>n.checked),all:t}}function Fe(){const{output:e}=h.getState(),t=()=>{const{checked:n}=qe();g(h,u.SET_OUTPUT,n)};return r`
        ${l(2)}
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
                    ${e.length>0?e.map(n=>r`<p data-font="xl">${n.defaultValue}</p>`):"-"}</output
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
        ${l(2)}
    `}function Ze(){return r`
        ${l(1)}

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
        ${l(1)}
    `}function We(){const e=t=>{t.target.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})};return r`
        <div aria-hidden="true">${l(4)}</div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,n)=>r`<div
                            data-ratio="portrait"
                            style="--scroller-max-inline-size:10rem"
                            data-place-items="start"
                            data-padding="xy"
                            data-place-content="start"
                            data-paper
                        >
                            <img
                                @click=${{handleEvent:e}}
                                data-avatar="${n<4?"lg":[10,11,12].includes(n)?"sm":""}"
                                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=" "
                            />
                        </div>`)}
            </div>
        </div>
        ${l(8)}
        <div data-scroller="">
            <div>
                ${[...Array(12)].map((t,n)=>r` <div
                            data-ratio="landscape"
                            data-scroller-item="${[0,1,2,10].includes(n)?"lg":[6,7,12].includes(n)?"sm":""}"
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
        ${l(1)}
    `}function Ke(){const{output:e}=h.getState(),t=a=>{const i=a.target.selectedIndex+1;g(h,u.SET_OUTPUT,[{defaultValue:`Option ${i}`}])},n=a=>{var s;const i=a.target.selectedOptions,o=(s=Array.from(i))==null?void 0:s.map(p=>({defaultValue:`Option ${p.index+1}`}));g(h,u.SET_OUTPUT,o)};return r`
        ${l(7)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="standard-select">Standard Select</label>
                <div data-select="">
                    <select
                        id="standard-select"
                        @change=${a=>t(a)}
                    >
                        <option value="Option-1">Option 1</option>
                        <option value="Option-2">Option 2</option>
                        <option value="Option-3">Option 3</option>
                        <option value="Option-4">Option 4</option>
                        <option value="Option-5">Option 5</option>
                        <hr />
                        <option value="Option-6">
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
                        @change=${a=>n(a)}
                    >
                        <option value="Option-1">Option 1</option>
                        <option value="Option-2">Option 2</option>
                        <option value="Option-3">Option 3</option>
                        <option value="Option-4">Option 4</option>
                        <option value="Option-5">Option 5</option>
                        <hr />
                        <option value="Option-6">
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
                    ${e.length>0?e.map(a=>r`<p data-font="xl">${a.defaultValue}</p>`):"-"}</output
                >
            </div>
        </div>
        ${l(3)}
    `}function Ye(){const{output:e}=h.getState(),t=()=>{const{checked:n}=nt();g(h,u.SET_OUTPUT,n)};return r`
        ${l(2)}
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
                    ${e.length>0?e.map(n=>r`<p data-font="xl">${n.defaultValue}</p>`):"-"}</output
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
        ${l(2)}
    `}function Qe(){return r`
        ${l(5)}
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
        ${l(5)}
    `}function Xe(){const e=t=>{const n=t.target.dataset.tabId,a=document.querySelectorAll("[data-tabs] [data-tab-id]");a&&(a[0].dataset.tabId===n?a[0].dataset.tabVisible="true":a[0].dataset.tabVisible="false",a[1].dataset.tabId===n?a[1].dataset.tabVisible="true":a[1].dataset.tabVisible="false")};return r` ${l(2)}

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
            <div data-tab-id="1">${Pt(84)} ${l(1)}${l(1,!0)}</div>
            <div data-tab-id="2" data-tab-visible="false">
                ${l(1,!0)} ${l(3)}${l(1,!0)}
            </div>
        </div>

        ${l(2)}`}const Lt=()=>{const e=T("body"),t=T("[data-tray]"),n=T("[data-tray-overlay]");t.dataset.trayOpen==="false"?(n.dataset.trayOverlayOpen="true",t.dataset.trayOpen="true",e.style.overflow="hidden",e.style.height="100vh",_(tn(),T("[data-tray]"))):(n.dataset.trayOverlayOpen="false",t.dataset.trayOpen="false",e.style.overflow="auto",e.style.height="auto")};function Je(){return r`
        ${l(1)}
        <button
            id="show-tray"
            @click=${{handleEvent:Lt}}
            data-button
        >
            Show tray
        </button>
        ${l(1)}
    `}function tn(){return r` <div
        data-group="flex"
        data-flex="column"
        data-gap="sm"
        data-padding="xy"
    >
        ${l(4)}
        <menu>
            <button
                data-button
                autofocus
                @click=${{handleEvent:Lt}}
                type="reset"
            >
                Cancel
            </button>
        </menu>
        ${l(12)}
    </div>`}function en(){return r`
        ${l(1)}
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
                    fill="currentColor"
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
                                    fill="currentColor"

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
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="currentColor" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
        </div>
        ${l(1)}
    `}function nn(){return r`${l(4)}
        <p data-font>Docs incoming</p> `}function an(){return r`
        ${l(1)}

        <div data-group="flex" data-flex="column" data-gap="xl">
            <progress max="100" value="10">10%</progress>
            <progress max="100" value="20">20%</progress>
            <progress max="100" value="30">30%</progress>
            <progress max="100" value="50">50%</progress>
            <progress max="100" value="60">60%</progress>
            <progress max="100" value="90">90%</progress>
            <progress max="100" value="100">100%</progress>
        </div>
        ${l(1)}
    `}function Mt(e){return r` <button
        type="button"
        data-button
        id="copy-button"
        @click=${{handleEvent:async()=>{await Ie(e),Pe("true");const n=T("#copy-button");n!=null&&(n.innerHTML=`<svg
      width="24"
      height="24"
      focusable="false"
      data-icon
      aria-labelledby="copyied-icon"
    viewbox="0 0 24 24"
    >
      <title id="copyied-icon">copy </title>
      <use href="./sprite.svg#check" />
    </svg>`)}}}
    >
        ${at({d:"arrowDown",label:"arrowDown",size:24})}
    </button>`}function on(){const e=`a {
            text-decoration: underline;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: 0.1em;
            text-underline-offset: 0.09em;
            hyphens: none;
            outline: none;
        }`;return r`
        ${l(4)}
        <br />
        <div data-overflow="x" data-overflow-portrait>
            <code>
                <span class="line highlight-comment">/*</span>
                <span class="line highlight-comment level-1"
                    >I'm from the 80s, <3 links.</span
                >
                <span class="line highlight-comment level-1">
                    Now we can style as
                </span>
                <span class="line highlight-comment  level-1"
                    >them deserve</span
                >
                <span class="line highlight-comment">*/</span>
                <span class="line highlight-comment"> a {</span>
                <span class="line highlight-snippet level-1">
                    text-decoration: underline;</span
                >
                <span class="line highlight-snippet level-1">
                    text-decoration-skip-ink: auto;</span
                >
                <span class="line highlight-snippet level-1">
                    text-decoration-thickness: 0.1em;</span
                >
                <span class="line highlight-snippet level-1">
                    text-underline-offset: 0.09em;</span
                >
                <span class="line highlight-noise level-1">
                    hyphens: none;</span
                >
                <span class="line highlight-noise level-1">
                    outline: none;</span
                >
                <span class="line highlight-comment"> }</span>
            </code>
        </div>
        <br />
        ${Mt(e)}
        <br />
        <br />
    `}function rn(){const e=`<div
                        data-input=""
                        style="
                            --input-start-width: 90px;
                            --input-end-width: 60px;
                        "
                    ></div>`;return r`
        ${l(4)}
        <br />
        <div data-overflow="x" data-overflow-portrait>
            <code>
                <span class="line highlight-comment">/*</span>
                <span class="line highlight-comment level-1">
                    We can fine tune
                </span>
                <span class="line highlight-comment level-1">
                    CSS custom properties
                </span>
                <span class="line highlight-comment level-1">
                    values inline
                </span>
                <span class="line highlight-comment"> */ </span>
                <span class="line highlight-comment"> </span>

                <span class="line highlight-noise level-1"> ... </span>
                <span class="line highlight-snippet level-1"> data-input </span>
                <span class="line highlight-snippet level-1"> style=" </span>
                <span class="line highlight-snippet level-2">
                    --input-start-width: 90px;
                </span>
                <span class="line highlight-snippet level-2">
                    --input-end-width: 60px;
                </span>
                <span class="line highlight-noise level-1"> " </span>
                <span class="line highlight-noise level-1"> ... </span>
            </code>
        </div>
        <br />
        ${Mt(e)}
        <br />
        <br />
    `}function sn(e){const t=document.querySelector("article");t!=null&&_(ln(e),t)}function ln(e){switch(e){case"reset":return r`${on()}`;case"tokens":return r`${rn()}`;case"button":return r`${He()}`;case"checkbox":return r`${De()}`;case"input":return r`${Ve()}`;case"radio":return r`${Fe()}`;case"range":return r`${Ze()}`;case"select":return r`${Ke()}`;case"progress":return r`${an()}`;case"switch":return r`${Ye()}`;case"avatar":case"scroller":case"image":return r`${We()}`;case"article":case"hero":return r`${Be()}`;case"icon":return r`${Ne()}`;case"action-sheet":return r`${Ue()}`;case"panel":case"card":return;case"group":return r`${en()}`;case"list":return r`<p data-font>Check landing</p>
                ${l(4)}`;case"table":return r`${Qe()}`;case"tabs":return r`${Xe()}`;case"tray":return r`${Je()}`;case"lobotomized-owl":case"border":case"fit":case"gap":case"gradient":case"hide":case"margin-auto":case"mask":case"overflow":case"padding":case"place":case"print":case"ratio":case"reorder":case"util":return r`${nn()}`;case"font":return r`${Ge()}`;case"paper":return r`${je()}`;default:return r``}}function dn(){return r`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `}function cn(e){return r`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${C.HeadLine()} ${C.Line(3)}
        </div>
    `}function un(e){return r`
        <div data-gap="sm" data-reorder="${e?"top":""}">
            ${et()}
        </div>
    `}const C={};C.Pic=dn;C.Content=cn;C.Avatar=Pt;C.HeadLine=Rt;C.Line=l;C.Actions=un;function pn(e,t){return r`
        <div class="gap:md ${e?"reorder:top":""}">
            ${S.HeadLine()} ${S.Line(3)}
            ${t?r` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`:r``}
        </div>
    `}function hn(e){return r`
        <div data-reorder="${e?"top":""}">
            ${l(1,!0)}
            <div>${et()}${et()}</div>
        </div>
    `}const S={};S.Content=pn;S.HeadLine=Rt;S.Line=l;S.Actions=hn;function zt(e){_(vn(e),document.querySelector("aside"))}function vn(e){const{orientation:t}=h.getState(),n=t==="portrait";return e?r``:r`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${n?"":"md"}"
        >
            ${[...Array(4)].map(a=>Dt())}
        </div>
    `}function Ut(){_(fn(),document.querySelector("article")),Bt(),zt(!0)}function fn(){return r`
        <div id="controls">
            <h2></h2>
            <nav></nav>
        </div>
        <div data-group="" data-panel="">${gn()}</div>
    `}function gn(){const{variantPanel:e}=h.getState();switch(e){case"actions":return r` ${S.Content()} ${S.Actions()} `;case"actions-reorder":return r` ${S.Content()}${S.Actions(!0)} `;case"input":return r` ${S.Content(!0,!0)} ${S.Actions()} `;default:return r` ${S.Content()}`}}function mn(){const t=new URLSearchParams(window.location.search).get("snippet"),n=t==="card",a=i=>{const o=i.target.dataset.option;if(t===o)return;const s=new URL(document.location.href);s.searchParams.set("snippet",o),history.pushState({},"",s),o==="card"?Ht():Ut()};return r`
        <div class="subnav bi">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{handleEvent:a}}
            >
                ${d({vertices:3,size:45,transforms:"translateX(10px)",fill:n?"var(--red-100)":"currentColor"})}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{handleEvent:a}}
            >
                ${d({vertices:4,size:45,transforms:"translateX(10px)",fill:n?"currentColor":"var(--red-100)"})}
            </button>
        </div>
    `}function $t(e,t){const n=i=>{const o=Number(i.target.value);if(o===0)return g(h,u.SET_VARIANT,"pic");if(o===5)return g(h,u.SET_VARIANT,"pic-content");if(o===10)return g(h,u.SET_VARIANT,"pic-reorder");if(o===15)return g(h,u.SET_VARIANT,"actions")},a=i=>({pic:0,"pic-content":5,"pic-reorder":10,actions:15})[i];return t?r``:r`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${a(e)}"
                step="5"
                id="range"
                @input=${{handleEvent:n}}
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
    `}function yt(e,t){const n=i=>{switch(Number(i.target.value)){case 0:return g(h,u.SET_VARIANT_PANEL,"actions");case 10:return g(h,u.SET_VARIANT_PANEL,"actions-reorder");case 20:default:return g(h,u.SET_VARIANT_PANEL,"input")}},a={actions:0,"actions-reorder":5,input:10}[e];return t?r``:r`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${a}"
                step="10"
                id="range"
                @input=${{handleEvent:n}}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
        </datalist>
    `}function Ct(e,t){const n=e==="square",a=e==="portrait",i=e==="landscape",o=s=>{const{nav:p,option:c}=s.target.dataset;p==="ratio"&&g(h,u.SET_ORIENTATION,c)};return t?r``:r`
        <div class="subnav">
            <button
                data-nav="ratio"
                data-option="square"
                @click=${{handleEvent:o}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        fill="${n?"var(--red-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="portrait"
                @click=${{handleEvent:o}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="6"
                        width="44"
                        height="52"
                        fill="${a?"var(--red-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="landscape"
                @click=${{handleEvent:o}}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="6"
                        y="14"
                        width="52"
                        height="38"
                        fill="${i?"var(--red-100)":"currentColor"}"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `}const bn=[{label:"default",value:"currentColor"},{label:"gold",value:"var(--gold-100)"},{label:"purple",value:"var(--purple-100)"}];function $n(){_(yn(),document.querySelector("section > header div:first-of-type"))}function yn(){const e=t=>{const{swatch:n}=t.target.dataset,a={gold:"error",purple:"focus",gray:"gray",default:""}[n],i=T("article"),o=T('header [data-input=""]');i!=null&&o!=null&&(i.classList.remove("error","focus","gray"),o.classList.remove("error","focus","gray"),a!==""&&(i.classList.add(a),o.classList.add(a)))};return r`
        <div data-group="flex" data-gap="sm">
            ${bn.map(t=>r`
                    <button
                        data-animation-wiggle-hover
                        data-button="circle"
                        data-fit="comfy-height"
                        data-paper
                        data-paper-outline
                        data-swatch=${t.label}
                        @click=${{handleEvent:e}}
                    >
                        ${d({vertices:8,size:32,fill:t.value})}
                    </button>
                `)}
        </div>
    `}function Bt(){_(Cn(),document.querySelector("#controls nav")),_(xn(),document.querySelector("#controls h2"))}function Cn(){const{variant:e,variantPanel:t,orientation:n}=h.getState(),i=new URLSearchParams(window.location.search).get("snippet"),o=i==="card",s=i==="panel";return r`
        ${mn()} ${o?$t(e):$t(e,!0)}
        ${o?Ct(n):Ct(n,!0)}
        ${s?yt(t):yt(t,!0)}
    `}function xn(){const t=new URLSearchParams(window.location.search).get("snippet"),n=t==="card"?"content with ratio":"interactive elements";return r` <strong>${`${t}:`}</strong> groups ${n}`}function Ht(){_(Dt(),document.querySelector("article")),Bt(),zt(!1)}function Dt(){const{orientation:e}=h.getState();return r` <div
        class="${e==="portrait"?"fix-portrait-card-height":""}"
    >
        <div data-group="" data-card="" data-ratio="${e}">
            ${wn()}
        </div>
    </div>`}function wn(){const{variant:e}=h.getState();switch(e){case"actions":return r` ${C.Content()} ${C.Actions()} `;case"pic":return r` ${C.Pic()}
                <div class="pin-avatar">${C.Avatar()}</div>`;case"pic-content":return r` ${C.Pic()} ${C.Content()} `;case"pic-reorder":return r` ${C.Pic()} ${C.Content(!0)} `;default:return r``}}function An(){_(Sn(),document.querySelector("#search-results-container"))}function Sn(){const{suggestions:e}=h.getState();return e.length===0?r``:r`
        <ul id="search-results">
            ${e==null?void 0:e.map(t=>r`
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
    `}h.subscribe(Gt);function Tn(){const e=T("#q");e!=null&&(e.value=""),g(h,u.FILTERED,q.filtered),g(h,u.SUGGESTIONS,[]),g(h,u.SET_OUTPUT,[])}function _n(e){var a;const n=((a=e.target)==null?void 0:a.value).replace(/[^a-zA-Z]/g,"").toLowerCase();if(n!==""){const i=q.filtered.filter(o=>o.value.startsWith(n));i.length>0?(g(h,u.FILTERED,i),g(h,u.SUGGESTIONS,i)):(g(h,u.FILTERED,q.filtered),g(h,u.SUGGESTIONS,[]))}else g(h,u.SUGGESTIONS,[])}function Gt(){const{filtered:e}=h.getState(),n=new URLSearchParams(window.location.search).get("snippet");if(An(),n===null){mt("#controls"),Le({label:"Featured snippets",snippets:e});return}mt("h1");const a=T("#controls");["card","panel"].includes(n)?(a!=null&&a.classList.add("show"),n==="card"&&Ht(),n==="panel"&&Ut()):(a!=null&&a.classList.remove("show"),sn(n),ke.includes(n)||$n())}document.addEventListener("DOMContentLoaded",function(){const e=T("#clear-input");e!=null&&e.addEventListener("click",Tn);const t=T("#q");t!=null&&t.addEventListener("input",_n),Gt()});
