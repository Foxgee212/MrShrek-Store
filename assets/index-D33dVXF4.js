function n4(r,n){for(var i=0;i<n.length;i++){const s=n[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function r4(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xl={exports:{}},Pi={},Tl={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function i4(){if(Md)return ie;Md=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),_=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,L={};function A(I,M,re){this.props=I,this.context=M,this.refs=L,this.updater=re||N}A.prototype.isReactComponent={},A.prototype.setState=function(I,M){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,M,"setState")},A.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function q(){}q.prototype=A.prototype;function $(I,M,re){this.props=I,this.context=M,this.refs=L,this.updater=re||N}var G=$.prototype=new q;G.constructor=$,b(G,A.prototype),G.isPureReactComponent=!0;var te=Array.isArray,se=Object.prototype.hasOwnProperty,fe={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function _e(I,M,re){var oe,le={},ce=null,ge=null;if(M!=null)for(oe in M.ref!==void 0&&(ge=M.ref),M.key!==void 0&&(ce=""+M.key),M)se.call(M,oe)&&!de.hasOwnProperty(oe)&&(le[oe]=M[oe]);var pe=arguments.length-2;if(pe===1)le.children=re;else if(1<pe){for(var Se=Array(pe),lt=0;lt<pe;lt++)Se[lt]=arguments[lt+2];le.children=Se}if(I&&I.defaultProps)for(oe in pe=I.defaultProps,pe)le[oe]===void 0&&(le[oe]=pe[oe]);return{$$typeof:r,type:I,key:ce,ref:ge,props:le,_owner:fe.current}}function at(I,M){return{$$typeof:r,type:I.type,key:M,ref:I.ref,props:I.props,_owner:I._owner}}function Qe(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function ht(I){var M={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(re){return M[re]})}var Y=/\/+/g;function ve(I,M){return typeof I=="object"&&I!==null&&I.key!=null?ht(""+I.key):M.toString(36)}function we(I,M,re,oe,le){var ce=typeof I;(ce==="undefined"||ce==="boolean")&&(I=null);var ge=!1;if(I===null)ge=!0;else switch(ce){case"string":case"number":ge=!0;break;case"object":switch(I.$$typeof){case r:case n:ge=!0}}if(ge)return ge=I,le=le(ge),I=oe===""?"."+ve(ge,0):oe,te(le)?(re="",I!=null&&(re=I.replace(Y,"$&/")+"/"),we(le,M,re,"",function(lt){return lt})):le!=null&&(Qe(le)&&(le=at(le,re+(!le.key||ge&&ge.key===le.key?"":(""+le.key).replace(Y,"$&/")+"/")+I)),M.push(le)),1;if(ge=0,oe=oe===""?".":oe+":",te(I))for(var pe=0;pe<I.length;pe++){ce=I[pe];var Se=oe+ve(ce,pe);ge+=we(ce,M,re,Se,le)}else if(Se=S(I),typeof Se=="function")for(I=Se.call(I),pe=0;!(ce=I.next()).done;)ce=ce.value,Se=oe+ve(ce,pe++),ge+=we(ce,M,re,Se,le);else if(ce==="object")throw M=String(I),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ge}function je(I,M,re){if(I==null)return I;var oe=[],le=0;return we(I,oe,"","",function(ce){return M.call(re,ce,le++)}),oe}function Ye(I){if(I._status===-1){var M=I._result;M=M(),M.then(function(re){(I._status===0||I._status===-1)&&(I._status=1,I._result=re)},function(re){(I._status===0||I._status===-1)&&(I._status=2,I._result=re)}),I._status===-1&&(I._status=0,I._result=M)}if(I._status===1)return I._result.default;throw I._result}var Pe={current:null},z={transition:null},Z={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:z,ReactCurrentOwner:fe};function H(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:je,forEach:function(I,M,re){je(I,function(){M.apply(this,arguments)},re)},count:function(I){var M=0;return je(I,function(){M++}),M},toArray:function(I){return je(I,function(M){return M})||[]},only:function(I){if(!Qe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ie.Component=A,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=$,ie.StrictMode=s,ie.Suspense=p,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ie.act=H,ie.cloneElement=function(I,M,re){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var oe=b({},I.props),le=I.key,ce=I.ref,ge=I._owner;if(M!=null){if(M.ref!==void 0&&(ce=M.ref,ge=fe.current),M.key!==void 0&&(le=""+M.key),I.type&&I.type.defaultProps)var pe=I.type.defaultProps;for(Se in M)se.call(M,Se)&&!de.hasOwnProperty(Se)&&(oe[Se]=M[Se]===void 0&&pe!==void 0?pe[Se]:M[Se])}var Se=arguments.length-2;if(Se===1)oe.children=re;else if(1<Se){pe=Array(Se);for(var lt=0;lt<Se;lt++)pe[lt]=arguments[lt+2];oe.children=pe}return{$$typeof:r,type:I.type,key:le,ref:ce,props:oe,_owner:ge}},ie.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ie.createElement=_e,ie.createFactory=function(I){var M=_e.bind(null,I);return M.type=I,M},ie.createRef=function(){return{current:null}},ie.forwardRef=function(I){return{$$typeof:m,render:I}},ie.isValidElement=Qe,ie.lazy=function(I){return{$$typeof:E,_payload:{_status:-1,_result:I},_init:Ye}},ie.memo=function(I,M){return{$$typeof:g,type:I,compare:M===void 0?null:M}},ie.startTransition=function(I){var M=z.transition;z.transition={};try{I()}finally{z.transition=M}},ie.unstable_act=H,ie.useCallback=function(I,M){return Pe.current.useCallback(I,M)},ie.useContext=function(I){return Pe.current.useContext(I)},ie.useDebugValue=function(){},ie.useDeferredValue=function(I){return Pe.current.useDeferredValue(I)},ie.useEffect=function(I,M){return Pe.current.useEffect(I,M)},ie.useId=function(){return Pe.current.useId()},ie.useImperativeHandle=function(I,M,re){return Pe.current.useImperativeHandle(I,M,re)},ie.useInsertionEffect=function(I,M){return Pe.current.useInsertionEffect(I,M)},ie.useLayoutEffect=function(I,M){return Pe.current.useLayoutEffect(I,M)},ie.useMemo=function(I,M){return Pe.current.useMemo(I,M)},ie.useReducer=function(I,M,re){return Pe.current.useReducer(I,M,re)},ie.useRef=function(I){return Pe.current.useRef(I)},ie.useState=function(I){return Pe.current.useState(I)},ie.useSyncExternalStore=function(I,M,re){return Pe.current.useSyncExternalStore(I,M,re)},ie.useTransition=function(){return Pe.current.useTransition()},ie.version="18.3.1",ie}var Dd;function pc(){return Dd||(Dd=1,Tl.exports=i4()),Tl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function o4(){if(jd)return Pi;jd=1;var r=pc(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(m,p,g){var E,_={},S=null,N=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)s.call(p,E)&&!u.hasOwnProperty(E)&&(_[E]=p[E]);if(m&&m.defaultProps)for(E in p=m.defaultProps,p)_[E]===void 0&&(_[E]=p[E]);return{$$typeof:n,type:m,key:S,ref:N,props:_,_owner:l.current}}return Pi.Fragment=i,Pi.jsx=f,Pi.jsxs=f,Pi}var Ud;function s4(){return Ud||(Ud=1,xl.exports=o4()),xl.exports}var w=s4(),R=pc();const _t=r4(R),a4=n4({__proto__:null,default:_t},[R]);var os={},Pl={exports:{}},rt={},bl={exports:{}},Nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function l4(){return zd||(zd=1,(function(r){function n(z,Z){var H=z.length;z.push(Z);e:for(;0<H;){var I=H-1>>>1,M=z[I];if(0<l(M,Z))z[I]=Z,z[H]=M,H=I;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],H=z.pop();if(H!==Z){z[0]=H;e:for(var I=0,M=z.length,re=M>>>1;I<re;){var oe=2*(I+1)-1,le=z[oe],ce=oe+1,ge=z[ce];if(0>l(le,H))ce<M&&0>l(ge,le)?(z[I]=ge,z[ce]=H,I=ce):(z[I]=le,z[oe]=H,I=oe);else if(ce<M&&0>l(ge,H))z[I]=ge,z[ce]=H,I=ce;else break e}}return Z}function l(z,Z){var H=z.sortIndex-Z.sortIndex;return H!==0?H:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],g=[],E=1,_=null,S=3,N=!1,b=!1,L=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(z){for(var Z=i(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=z)s(g),Z.sortIndex=Z.expirationTime,n(p,Z);else break;Z=i(g)}}function te(z){if(L=!1,G(z),!b)if(i(p)!==null)b=!0,Ye(se);else{var Z=i(g);Z!==null&&Pe(te,Z.startTime-z)}}function se(z,Z){b=!1,L&&(L=!1,q(_e),_e=-1),N=!0;var H=S;try{for(G(Z),_=i(p);_!==null&&(!(_.expirationTime>Z)||z&&!ht());){var I=_.callback;if(typeof I=="function"){_.callback=null,S=_.priorityLevel;var M=I(_.expirationTime<=Z);Z=r.unstable_now(),typeof M=="function"?_.callback=M:_===i(p)&&s(p),G(Z)}else s(p);_=i(p)}if(_!==null)var re=!0;else{var oe=i(g);oe!==null&&Pe(te,oe.startTime-Z),re=!1}return re}finally{_=null,S=H,N=!1}}var fe=!1,de=null,_e=-1,at=5,Qe=-1;function ht(){return!(r.unstable_now()-Qe<at)}function Y(){if(de!==null){var z=r.unstable_now();Qe=z;var Z=!0;try{Z=de(!0,z)}finally{Z?ve():(fe=!1,de=null)}}else fe=!1}var ve;if(typeof $=="function")ve=function(){$(Y)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,je=we.port2;we.port1.onmessage=Y,ve=function(){je.postMessage(null)}}else ve=function(){A(Y,0)};function Ye(z){de=z,fe||(fe=!0,ve())}function Pe(z,Z){_e=A(function(){z(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){b||N||(b=!0,Ye(se))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var H=S;S=Z;try{return z()}finally{S=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=S;S=z;try{return Z()}finally{S=H}},r.unstable_scheduleCallback=function(z,Z,H){var I=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?I+H:I):H=I,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=H+M,z={id:E++,callback:Z,priorityLevel:z,startTime:H,expirationTime:M,sortIndex:-1},H>I?(z.sortIndex=H,n(g,z),i(p)===null&&z===i(g)&&(L?(q(_e),_e=-1):L=!0,Pe(te,H-I))):(z.sortIndex=M,n(p,z),b||N||(b=!0,Ye(se))),z},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(z){var Z=S;return function(){var H=S;S=Z;try{return z.apply(this,arguments)}finally{S=H}}}})(Nl)),Nl}var Fd;function c4(){return Fd||(Fd=1,bl.exports=l4()),bl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function u4(){if(Vd)return rt;Vd=1;var r=pc(),n=c4();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},_={};function S(e){return p.call(_,e)?!0:p.call(E,e)?!1:g.test(e)?_[e]=!0:(E[e]=!0,!1)}function N(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,t,o,a){if(t===null||typeof t>"u"||N(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,o,a,c,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,$);A[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,$);A[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,$);A[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,o,a){var c=A.hasOwnProperty(t)?A[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(b(t,o,c,a)&&(o=null),a||c===null?S(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):c.mustUseProperty?e[c.propertyName]=o===null?c.type===3?!1:"":o:(t=c.attributeName,a=c.attributeNamespace,o===null?e.removeAttribute(t):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),fe=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),Qe=Symbol.for("react.provider"),ht=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),z=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,I;function M(e){if(I===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var re=!1;function oe(e,t){if(!e||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var a=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){a=P}e.call(t.prototype)}else{try{throw Error()}catch(P){a=P}e()}}catch(P){if(P&&a&&typeof P.stack=="string"){for(var c=P.stack.split(`
`),d=a.stack.split(`
`),h=c.length-1,y=d.length-1;1<=h&&0<=y&&c[h]!==d[y];)y--;for(;1<=h&&0<=y;h--,y--)if(c[h]!==d[y]){if(h!==1||y!==1)do if(h--,y--,0>y||c[h]!==d[y]){var C=`
`+c[h].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=h&&0<=y);break}}}finally{re=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?M(e):""}function le(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case fe:return"Portal";case at:return"Profiler";case _e:return"StrictMode";case ve:return"Suspense";case we:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ht:return(e.displayName||"Context")+".Consumer";case Qe:return(e._context.displayName||"Context")+".Provider";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lt(e){var t=Se(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(h){a=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=lt(e))}function Vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=Se(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,t){var o=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Hc(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=pe(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function Os(e,t){Bc(e,t);var o=pe(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ms(e,t.type,o):t.hasOwnProperty("defaultValue")&&Ms(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ms(e,t,o){(t!=="number"||Ji(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Br=Array.isArray;function ur(e,t,o,a){if(e=e.options,t){t={};for(var c=0;c<o.length;c++)t["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=t.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&a&&(e[o].defaultSelected=!0)}else{for(o=""+pe(o),t=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wc(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(Br(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:pe(o)}}function qc(e,t){var o=pe(t.value),a=pe(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Jc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Qc(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Qc(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,c):e[o]=c}}var ap=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,dr=null,fr=null;function Zc(e){if(e=pi(e)){if(typeof Hs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Co(t),Hs(e.stateNode,e.type,t))}}function Xc(e){dr?fr?fr.push(e):fr=[e]:dr=e}function eu(){if(dr){var e=dr,t=fr;if(fr=dr=null,Zc(e),t)for(e=0;e<t.length;e++)Zc(t[e])}}function tu(e,t){return e(t)}function nu(){}var Bs=!1;function ru(e,t,o){if(Bs)return e(t,o);Bs=!0;try{return tu(e,t,o)}finally{Bs=!1,(dr!==null||fr!==null)&&(nu(),eu())}}function qr(e,t){var o=e.stateNode;if(o===null)return null;var a=Co(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var $s=!1;if(m)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{$s=!1}function lp(e,t,o,a,c,d,h,y,C){var P=Array.prototype.slice.call(arguments,3);try{t.apply(o,P)}catch(D){this.onError(D)}}var Gr=!1,Yi=null,Zi=!1,Ws=null,cp={onError:function(e){Gr=!0,Yi=e}};function up(e,t,o,a,c,d,h,y,C){Gr=!1,Yi=null,lp.apply(cp,arguments)}function dp(e,t,o,a,c,d,h,y,C){if(up.apply(this,arguments),Gr){if(Gr){var P=Yi;Gr=!1,Yi=null}else throw Error(i(198));Zi||(Zi=!0,Ws=P)}}function Fn(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(Fn(e)!==e)throw Error(i(188))}function fp(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,a=t;;){var c=o.return;if(c===null)break;var d=c.alternate;if(d===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===o)return ou(c),e;if(d===a)return ou(c),t;d=d.sibling}throw Error(i(188))}if(o.return!==a.return)o=c,a=d;else{for(var h=!1,y=c.child;y;){if(y===o){h=!0,o=c,a=d;break}if(y===a){h=!0,a=c,o=d;break}y=y.sibling}if(!h){for(y=d.child;y;){if(y===o){h=!0,o=d,a=c;break}if(y===a){h=!0,a=d,o=c;break}y=y.sibling}if(!h)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function su(e){return e=fp(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var lu=n.unstable_scheduleCallback,cu=n.unstable_cancelCallback,pp=n.unstable_shouldYield,hp=n.unstable_requestPaint,Re=n.unstable_now,mp=n.unstable_getCurrentPriorityLevel,qs=n.unstable_ImmediatePriority,uu=n.unstable_UserBlockingPriority,Xi=n.unstable_NormalPriority,gp=n.unstable_LowPriority,du=n.unstable_IdlePriority,eo=null,Ot=null;function yp(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Cp,vp=Math.log,wp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(vp(e)/wp|0)|0}var to=64,no=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,c=e.suspendedLanes,d=e.pingedLanes,h=o&268435455;if(h!==0){var y=h&~c;y!==0?a=Jr(y):(d&=h,d!==0&&(a=Jr(d)))}else h=o&~c,h!==0?a=Jr(h):d!==0&&(a=Jr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-Et(t),c=1<<o,a|=e[o],t&=~c;return a}function kp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Et(d),y=1<<h,C=c[h];C===-1?((y&o)===0||(y&a)!==0)&&(c[h]=kp(y,t)):C<=t&&(e.expiredLanes|=y),d&=~y}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=to;return to<<=1,(to&4194240)===0&&(to=64),e}function Gs(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function Qr(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=o}function Sp(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var c=31-Et(o),d=1<<c;t[c]=0,a[c]=-1,e[c]=-1,o&=~d}}function Js(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-Et(o),c=1<<a;c&t|e[a]&t&&(e[a]|=t),o&=~c}}var he=0;function pu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hu,Qs,mu,gu,yu,Ys=!1,io=[],on=null,sn=null,an=null,Yr=new Map,Zr=new Map,ln=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vu(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Xr(e,t,o,a,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:d,targetContainers:[c]},t!==null&&(t=pi(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Ip(e,t,o,a,c){switch(t){case"focusin":return on=Xr(on,e,t,o,a,c),!0;case"dragenter":return sn=Xr(sn,e,t,o,a,c),!0;case"mouseover":return an=Xr(an,e,t,o,a,c),!0;case"pointerover":var d=c.pointerId;return Yr.set(d,Xr(Yr.get(d)||null,e,t,o,a,c)),!0;case"gotpointercapture":return d=c.pointerId,Zr.set(d,Xr(Zr.get(d)||null,e,t,o,a,c)),!0}return!1}function wu(e){var t=Vn(e.target);if(t!==null){var o=Fn(t);if(o!==null){if(t=o.tag,t===13){if(t=iu(o),t!==null){e.blockedOn=t,yu(e.priority,function(){mu(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);Fs=a,o.target.dispatchEvent(a),Fs=null}else return t=pi(o),t!==null&&Qs(t),e.blockedOn=o,!1;t.shift()}return!0}function Cu(e,t,o){oo(e)&&o.delete(t)}function xp(){Ys=!1,on!==null&&oo(on)&&(on=null),sn!==null&&oo(sn)&&(sn=null),an!==null&&oo(an)&&(an=null),Yr.forEach(Cu),Zr.forEach(Cu)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xp)))}function ti(e){function t(c){return ei(c,e)}if(0<io.length){ei(io[0],e);for(var o=1;o<io.length;o++){var a=io[o];a.blockedOn===e&&(a.blockedOn=null)}}for(on!==null&&ei(on,e),sn!==null&&ei(sn,e),an!==null&&ei(an,e),Yr.forEach(t),Zr.forEach(t),o=0;o<ln.length;o++)a=ln[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(o=ln[0],o.blockedOn===null);)wu(o),o.blockedOn===null&&ln.shift()}var pr=te.ReactCurrentBatchConfig,so=!0;function Tp(e,t,o,a){var c=he,d=pr.transition;pr.transition=null;try{he=1,Zs(e,t,o,a)}finally{he=c,pr.transition=d}}function Pp(e,t,o,a){var c=he,d=pr.transition;pr.transition=null;try{he=4,Zs(e,t,o,a)}finally{he=c,pr.transition=d}}function Zs(e,t,o,a){if(so){var c=Xs(e,t,o,a);if(c===null)ga(e,t,a,ao,o),vu(e,a);else if(Ip(c,e,t,o,a))a.stopPropagation();else if(vu(e,a),t&4&&-1<Ep.indexOf(e)){for(;c!==null;){var d=pi(c);if(d!==null&&hu(d),d=Xs(e,t,o,a),d===null&&ga(e,t,a,ao,o),d===c)break;c=d}c!==null&&a.stopPropagation()}else ga(e,t,a,null,o)}}var ao=null;function Xs(e,t,o,a){if(ao=null,e=Vs(a),e=Vn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(o=t.tag,o===13){if(e=iu(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ao=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case qs:return 1;case uu:return 4;case Xi:case gp:return 16;case du:return 536870912;default:return 16}default:return 16}}var cn=null,ea=null,lo=null;function _u(){if(lo)return lo;var e,t=ea,o=t.length,a,c="value"in cn?cn.value:cn.textContent,d=c.length;for(e=0;e<o&&t[e]===c[e];e++);var h=o-e;for(a=1;a<=h&&t[o-a]===c[d-a];a++);return lo=c.slice(e,1<a?1-a:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Su(){return!1}function ct(e){function t(o,a,c,d,h){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(o=e[y],this[y]=o?o(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?uo:Su,this.isPropagationStopped=Su,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=ct(hr),ni=H({},hr,{view:0,detail:0}),bp=ct(ni),na,ra,ri,fo=H({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(na=e.screenX-ri.screenX,ra=e.screenY-ri.screenY):ra=na=0,ri=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Eu=ct(fo),Np=H({},fo,{dataTransfer:0}),Rp=ct(Np),Ap=H({},ni,{relatedTarget:0}),ia=ct(Ap),Lp=H({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=ct(Lp),Mp=H({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=ct(Mp),jp=H({},hr,{data:0}),Iu=ct(jp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function oa(){return Vp}var Hp=H({},ni,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bp=ct(Hp),$p=H({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=ct($p),Wp=H({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),qp=ct(Wp),Kp=H({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=ct(Kp),Jp=H({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=ct(Jp),Yp=[9,13,27,32],sa=m&&"CompositionEvent"in window,ii=null;m&&"documentMode"in document&&(ii=document.documentMode);var Zp=m&&"TextEvent"in window&&!ii,Tu=m&&(!sa||ii&&8<ii&&11>=ii),Pu=" ",bu=!1;function Nu(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function Xp(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(bu=!0,Pu);case"textInput":return e=t.data,e===Pu&&bu?null:e;default:return null}}function eh(e,t){if(mr)return e==="compositionend"||!sa&&Nu(e,t)?(e=_u(),lo=ea=cn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function Lu(e,t,o,a){Xc(a),t=yo(t,"onChange"),0<t.length&&(o=new ta("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var oi=null,si=null;function nh(e){Yu(e,0)}function po(e){var t=Cr(e);if(Vc(t))return e}function rh(e,t){if(e==="change")return t}var Ou=!1;if(m){var aa;if(m){var la="oninput"in document;if(!la){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),la=typeof Mu.oninput=="function"}aa=la}else aa=!1;Ou=aa&&(!document.documentMode||9<document.documentMode)}function Du(){oi&&(oi.detachEvent("onpropertychange",ju),si=oi=null)}function ju(e){if(e.propertyName==="value"&&po(si)){var t=[];Lu(t,si,e,Vs(e)),ru(nh,t)}}function ih(e,t,o){e==="focusin"?(Du(),oi=t,si=o,oi.attachEvent("onpropertychange",ju)):e==="focusout"&&Du()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(si)}function sh(e,t){if(e==="click")return po(t)}function ah(e,t){if(e==="input"||e==="change")return po(t)}function lh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:lh;function ai(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(t,c)||!It(e[c],t[c]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var o=Uu(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Uu(o)}}function Fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Ji(e.document)}return t}function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=Vu(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&Fu(o.ownerDocument.documentElement,o)){if(a!==null&&ca(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=o.textContent.length,d=Math.min(a.start,c);a=a.end===void 0?d:Math.min(a.end,c),!e.extend&&d>a&&(c=a,a=d,d=c),c=zu(o,d);var h=zu(o,a);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=m&&"documentMode"in document&&11>=document.documentMode,gr=null,ua=null,li=null,da=!1;function Hu(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;da||gr==null||gr!==Ji(a)||(a=gr,"selectionStart"in a&&ca(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),li&&ai(li,a)||(li=a,a=yo(ua,"onSelect"),0<a.length&&(t=new ta("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=gr)))}function ho(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var yr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},fa={},Bu={};m&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function mo(e){if(fa[e])return fa[e];if(!yr[e])return e;var t=yr[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Bu)return fa[e]=t[o];return e}var $u=mo("animationend"),Wu=mo("animationiteration"),qu=mo("animationstart"),Ku=mo("transitionend"),Gu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Gu.set(e,t),u(t,[e])}for(var pa=0;pa<Ju.length;pa++){var ha=Ju[pa],dh=ha.toLowerCase(),fh=ha[0].toUpperCase()+ha.slice(1);un(dh,"on"+fh)}un($u,"onAnimationEnd"),un(Wu,"onAnimationIteration"),un(qu,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Ku,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Qu(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,dp(a,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],c=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var h=a.length-1;0<=h;h--){var y=a[h],C=y.instance,P=y.currentTarget;if(y=y.listener,C!==d&&c.isPropagationStopped())break e;Qu(c,y,P),d=C}else for(h=0;h<a.length;h++){if(y=a[h],C=y.instance,P=y.currentTarget,y=y.listener,C!==d&&c.isPropagationStopped())break e;Qu(c,y,P),d=C}}}if(Zi)throw e=Ws,Zi=!1,Ws=null,e}function Ce(e,t){var o=t[_a];o===void 0&&(o=t[_a]=new Set);var a=e+"__bubble";o.has(a)||(Zu(t,e,2,!1),o.add(a))}function ma(e,t,o){var a=0;t&&(a|=4),Zu(o,e,a,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[go]){e[go]=!0,s.forEach(function(o){o!=="selectionchange"&&(ph.has(o)||ma(o,!1,e),ma(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,ma("selectionchange",!1,t))}}function Zu(e,t,o,a){switch(ku(t)){case 1:var c=Tp;break;case 4:c=Pp;break;default:c=Zs}o=c.bind(null,t,o,e),c=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,o,{capture:!0,passive:c}):e.addEventListener(t,o,!0):c!==void 0?e.addEventListener(t,o,{passive:c}):e.addEventListener(t,o,!1)}function ga(e,t,o,a,c){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var y=a.stateNode.containerInfo;if(y===c||y.nodeType===8&&y.parentNode===c)break;if(h===4)for(h=a.return;h!==null;){var C=h.tag;if((C===3||C===4)&&(C=h.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;h=h.return}for(;y!==null;){if(h=Vn(y),h===null)return;if(C=h.tag,C===5||C===6){a=d=h;continue e}y=y.parentNode}}a=a.return}ru(function(){var P=d,D=Vs(o),j=[];e:{var O=Gu.get(e);if(O!==void 0){var F=ta,B=e;switch(e){case"keypress":if(co(o)===0)break e;case"keydown":case"keyup":F=Bp;break;case"focusin":B="focus",F=ia;break;case"focusout":B="blur",F=ia;break;case"beforeblur":case"afterblur":F=ia;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=qp;break;case $u:case Wu:case qu:F=Op;break;case Ku:F=Gp;break;case"scroll":F=bp;break;case"wheel":F=Qp;break;case"copy":case"cut":case"paste":F=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=xu}var W=(t&4)!==0,Ae=!W&&e==="scroll",x=W?O!==null?O+"Capture":null:O;W=[];for(var k=P,T;k!==null;){T=k;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,x!==null&&(U=qr(k,x),U!=null&&W.push(di(k,U,T)))),Ae)break;k=k.return}0<W.length&&(O=new F(O,B,null,o,D),j.push({event:O,listeners:W}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",O&&o!==Fs&&(B=o.relatedTarget||o.fromElement)&&(Vn(B)||B[Bt]))break e;if((F||O)&&(O=D.window===D?D:(O=D.ownerDocument)?O.defaultView||O.parentWindow:window,F?(B=o.relatedTarget||o.toElement,F=P,B=B?Vn(B):null,B!==null&&(Ae=Fn(B),B!==Ae||B.tag!==5&&B.tag!==6)&&(B=null)):(F=null,B=P),F!==B)){if(W=Eu,U="onMouseLeave",x="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(W=xu,U="onPointerLeave",x="onPointerEnter",k="pointer"),Ae=F==null?O:Cr(F),T=B==null?O:Cr(B),O=new W(U,k+"leave",F,o,D),O.target=Ae,O.relatedTarget=T,U=null,Vn(D)===P&&(W=new W(x,k+"enter",B,o,D),W.target=T,W.relatedTarget=Ae,U=W),Ae=U,F&&B)t:{for(W=F,x=B,k=0,T=W;T;T=vr(T))k++;for(T=0,U=x;U;U=vr(U))T++;for(;0<k-T;)W=vr(W),k--;for(;0<T-k;)x=vr(x),T--;for(;k--;){if(W===x||x!==null&&W===x.alternate)break t;W=vr(W),x=vr(x)}W=null}else W=null;F!==null&&Xu(j,O,F,W,!1),B!==null&&Ae!==null&&Xu(j,Ae,B,W,!0)}}e:{if(O=P?Cr(P):window,F=O.nodeName&&O.nodeName.toLowerCase(),F==="select"||F==="input"&&O.type==="file")var K=rh;else if(Au(O))if(Ou)K=ah;else{K=oh;var J=ih}else(F=O.nodeName)&&F.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(K=sh);if(K&&(K=K(e,P))){Lu(j,K,o,D);break e}J&&J(e,O,P),e==="focusout"&&(J=O._wrapperState)&&J.controlled&&O.type==="number"&&Ms(O,"number",O.value)}switch(J=P?Cr(P):window,e){case"focusin":(Au(J)||J.contentEditable==="true")&&(gr=J,ua=P,li=null);break;case"focusout":li=ua=gr=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,Hu(j,o,D);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":Hu(j,o,D)}var Q;if(sa)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else mr?Nu(e,o)&&(ee="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Tu&&o.locale!=="ko"&&(mr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&mr&&(Q=_u()):(cn=D,ea="value"in cn?cn.value:cn.textContent,mr=!0)),J=yo(P,ee),0<J.length&&(ee=new Iu(ee,e,null,o,D),j.push({event:ee,listeners:J}),Q?ee.data=Q:(Q=Ru(o),Q!==null&&(ee.data=Q)))),(Q=Zp?Xp(e,o):eh(e,o))&&(P=yo(P,"onBeforeInput"),0<P.length&&(D=new Iu("onBeforeInput","beforeinput",null,o,D),j.push({event:D,listeners:P}),D.data=Q))}Yu(j,t)})}function di(e,t,o){return{instance:e,listener:t,currentTarget:o}}function yo(e,t){for(var o=t+"Capture",a=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=qr(e,o),d!=null&&a.unshift(di(e,d,c)),d=qr(e,t),d!=null&&a.push(di(e,d,c))),e=e.return}return a}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,o,a,c){for(var d=t._reactName,h=[];o!==null&&o!==a;){var y=o,C=y.alternate,P=y.stateNode;if(C!==null&&C===a)break;y.tag===5&&P!==null&&(y=P,c?(C=qr(o,d),C!=null&&h.unshift(di(o,C,y))):c||(C=qr(o,d),C!=null&&h.push(di(o,C,y)))),o=o.return}h.length!==0&&e.push({event:t,listeners:h})}var hh=/\r\n?/g,mh=/\u0000|\uFFFD/g;function e1(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(mh,"")}function vo(e,t,o){if(t=e1(t),e1(e)!==t&&o)throw Error(i(425))}function wo(){}var ya=null,va=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(e){return t1.resolve(null).then(e).catch(vh)}:Ca;function vh(e){setTimeout(function(){throw e})}function ka(e,t){var o=t,a=0;do{var c=o.nextSibling;if(e.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){e.removeChild(c),ti(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);ti(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function n1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+wr,fi="__reactProps$"+wr,Bt="__reactContainer$"+wr,_a="__reactEvents$"+wr,wh="__reactListeners$"+wr,Ch="__reactHandles$"+wr;function Vn(e){var t=e[Mt];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Bt]||o[Mt]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=n1(e);e!==null;){if(o=e[Mt])return o;e=n1(e)}return t}e=o,o=e.parentNode}return null}function pi(e){return e=e[Mt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Co(e){return e[fi]||null}var Sa=[],kr=-1;function fn(e){return{current:e}}function ke(e){0>kr||(e.current=Sa[kr],Sa[kr]=null,kr--)}function ye(e,t){kr++,Sa[kr]=e.current,e.current=t}var pn={},Be=fn(pn),Ze=fn(!1),Hn=pn;function _r(e,t){var o=e.type.contextTypes;if(!o)return pn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in o)c[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Xe(e){return e=e.childContextTypes,e!=null}function ko(){ke(Ze),ke(Be)}function r1(e,t,o){if(Be.current!==pn)throw Error(i(168));ye(Be,t),ye(Ze,o)}function i1(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(i(108,ge(e)||"Unknown",c));return H({},o,a)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Hn=Be.current,ye(Be,e),ye(Ze,Ze.current),!0}function o1(e,t,o){var a=e.stateNode;if(!a)throw Error(i(169));o?(e=i1(e,t,Hn),a.__reactInternalMemoizedMergedChildContext=e,ke(Ze),ke(Be),ye(Be,e)):ke(Ze),ye(Ze,o)}var $t=null,So=!1,Ea=!1;function s1(e){$t===null?$t=[e]:$t.push(e)}function kh(e){So=!0,s1(e)}function hn(){if(!Ea&&$t!==null){Ea=!0;var e=0,t=he;try{var o=$t;for(he=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}$t=null,So=!1}catch(c){throw $t!==null&&($t=$t.slice(e+1)),lu(qs,hn),c}finally{he=t,Ea=!1}}return null}var Sr=[],Er=0,Eo=null,Io=0,mt=[],gt=0,Bn=null,Wt=1,qt="";function $n(e,t){Sr[Er++]=Io,Sr[Er++]=Eo,Eo=e,Io=t}function a1(e,t,o){mt[gt++]=Wt,mt[gt++]=qt,mt[gt++]=Bn,Bn=e;var a=Wt;e=qt;var c=32-Et(a)-1;a&=~(1<<c),o+=1;var d=32-Et(t)+c;if(30<d){var h=c-c%5;d=(a&(1<<h)-1).toString(32),a>>=h,c-=h,Wt=1<<32-Et(t)+c|o<<c|a,qt=d+e}else Wt=1<<d|o<<c|a,qt=e}function Ia(e){e.return!==null&&($n(e,1),a1(e,1,0))}function xa(e){for(;e===Eo;)Eo=Sr[--Er],Sr[Er]=null,Io=Sr[--Er],Sr[Er]=null;for(;e===Bn;)Bn=mt[--gt],mt[gt]=null,qt=mt[--gt],mt[gt]=null,Wt=mt[--gt],mt[gt]=null}var ut=null,dt=null,Ee=!1,xt=null;function l1(e,t){var o=Ct(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function c1(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=Bn!==null?{id:Wt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Ct(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,ut=e,dt=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(Ee){var t=dt;if(t){var o=t;if(!c1(e,t)){if(Ta(e))throw Error(i(418));t=dn(o.nextSibling);var a=ut;t&&c1(e,t)?l1(a,o):(e.flags=e.flags&-4097|2,Ee=!1,ut=e)}}else{if(Ta(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ee=!1,ut=e}}}function u1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function xo(e){if(e!==ut)return!1;if(!Ee)return u1(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=dt)){if(Ta(e))throw d1(),Error(i(418));for(;t;)l1(e,t),t=dn(t.nextSibling)}if(u1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){dt=dn(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?dn(e.stateNode.nextSibling):null;return!0}function d1(){for(var e=dt;e;)e=dn(e.nextSibling)}function Ir(){dt=ut=null,Ee=!1}function ba(e){xt===null?xt=[e]:xt.push(e)}var _h=te.ReactCurrentBatchConfig;function hi(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,e));var c=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var y=c.refs;h===null?delete y[d]:y[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function f1(e){var t=e._init;return t(e._payload)}function p1(e){function t(x,k){if(e){var T=x.deletions;T===null?(x.deletions=[k],x.flags|=16):T.push(k)}}function o(x,k){if(!e)return null;for(;k!==null;)t(x,k),k=k.sibling;return null}function a(x,k){for(x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function c(x,k){return x=_n(x,k),x.index=0,x.sibling=null,x}function d(x,k,T){return x.index=T,e?(T=x.alternate,T!==null?(T=T.index,T<k?(x.flags|=2,k):T):(x.flags|=2,k)):(x.flags|=1048576,k)}function h(x){return e&&x.alternate===null&&(x.flags|=2),x}function y(x,k,T,U){return k===null||k.tag!==6?(k=Cl(T,x.mode,U),k.return=x,k):(k=c(k,T),k.return=x,k)}function C(x,k,T,U){var K=T.type;return K===de?D(x,k,T.props.children,U,T.key):k!==null&&(k.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ye&&f1(K)===k.type)?(U=c(k,T.props),U.ref=hi(x,k,T),U.return=x,U):(U=Yo(T.type,T.key,T.props,null,x.mode,U),U.ref=hi(x,k,T),U.return=x,U)}function P(x,k,T,U){return k===null||k.tag!==4||k.stateNode.containerInfo!==T.containerInfo||k.stateNode.implementation!==T.implementation?(k=kl(T,x.mode,U),k.return=x,k):(k=c(k,T.children||[]),k.return=x,k)}function D(x,k,T,U,K){return k===null||k.tag!==7?(k=Zn(T,x.mode,U,K),k.return=x,k):(k=c(k,T),k.return=x,k)}function j(x,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Cl(""+k,x.mode,T),k.return=x,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case se:return T=Yo(k.type,k.key,k.props,null,x.mode,T),T.ref=hi(x,null,k),T.return=x,T;case fe:return k=kl(k,x.mode,T),k.return=x,k;case Ye:var U=k._init;return j(x,U(k._payload),T)}if(Br(k)||Z(k))return k=Zn(k,x.mode,T,null),k.return=x,k;To(x,k)}return null}function O(x,k,T,U){var K=k!==null?k.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return K!==null?null:y(x,k,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case se:return T.key===K?C(x,k,T,U):null;case fe:return T.key===K?P(x,k,T,U):null;case Ye:return K=T._init,O(x,k,K(T._payload),U)}if(Br(T)||Z(T))return K!==null?null:D(x,k,T,U,null);To(x,T)}return null}function F(x,k,T,U,K){if(typeof U=="string"&&U!==""||typeof U=="number")return x=x.get(T)||null,y(k,x,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case se:return x=x.get(U.key===null?T:U.key)||null,C(k,x,U,K);case fe:return x=x.get(U.key===null?T:U.key)||null,P(k,x,U,K);case Ye:var J=U._init;return F(x,k,T,J(U._payload),K)}if(Br(U)||Z(U))return x=x.get(T)||null,D(k,x,U,K,null);To(k,U)}return null}function B(x,k,T,U){for(var K=null,J=null,Q=k,ee=k=0,Fe=null;Q!==null&&ee<T.length;ee++){Q.index>ee?(Fe=Q,Q=null):Fe=Q.sibling;var ue=O(x,Q,T[ee],U);if(ue===null){Q===null&&(Q=Fe);break}e&&Q&&ue.alternate===null&&t(x,Q),k=d(ue,k,ee),J===null?K=ue:J.sibling=ue,J=ue,Q=Fe}if(ee===T.length)return o(x,Q),Ee&&$n(x,ee),K;if(Q===null){for(;ee<T.length;ee++)Q=j(x,T[ee],U),Q!==null&&(k=d(Q,k,ee),J===null?K=Q:J.sibling=Q,J=Q);return Ee&&$n(x,ee),K}for(Q=a(x,Q);ee<T.length;ee++)Fe=F(Q,x,ee,T[ee],U),Fe!==null&&(e&&Fe.alternate!==null&&Q.delete(Fe.key===null?ee:Fe.key),k=d(Fe,k,ee),J===null?K=Fe:J.sibling=Fe,J=Fe);return e&&Q.forEach(function(Sn){return t(x,Sn)}),Ee&&$n(x,ee),K}function W(x,k,T,U){var K=Z(T);if(typeof K!="function")throw Error(i(150));if(T=K.call(T),T==null)throw Error(i(151));for(var J=K=null,Q=k,ee=k=0,Fe=null,ue=T.next();Q!==null&&!ue.done;ee++,ue=T.next()){Q.index>ee?(Fe=Q,Q=null):Fe=Q.sibling;var Sn=O(x,Q,ue.value,U);if(Sn===null){Q===null&&(Q=Fe);break}e&&Q&&Sn.alternate===null&&t(x,Q),k=d(Sn,k,ee),J===null?K=Sn:J.sibling=Sn,J=Sn,Q=Fe}if(ue.done)return o(x,Q),Ee&&$n(x,ee),K;if(Q===null){for(;!ue.done;ee++,ue=T.next())ue=j(x,ue.value,U),ue!==null&&(k=d(ue,k,ee),J===null?K=ue:J.sibling=ue,J=ue);return Ee&&$n(x,ee),K}for(Q=a(x,Q);!ue.done;ee++,ue=T.next())ue=F(Q,x,ee,ue.value,U),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?ee:ue.key),k=d(ue,k,ee),J===null?K=ue:J.sibling=ue,J=ue);return e&&Q.forEach(function(t4){return t(x,t4)}),Ee&&$n(x,ee),K}function Ae(x,k,T,U){if(typeof T=="object"&&T!==null&&T.type===de&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case se:e:{for(var K=T.key,J=k;J!==null;){if(J.key===K){if(K=T.type,K===de){if(J.tag===7){o(x,J.sibling),k=c(J,T.props.children),k.return=x,x=k;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ye&&f1(K)===J.type){o(x,J.sibling),k=c(J,T.props),k.ref=hi(x,J,T),k.return=x,x=k;break e}o(x,J);break}else t(x,J);J=J.sibling}T.type===de?(k=Zn(T.props.children,x.mode,U,T.key),k.return=x,x=k):(U=Yo(T.type,T.key,T.props,null,x.mode,U),U.ref=hi(x,k,T),U.return=x,x=U)}return h(x);case fe:e:{for(J=T.key;k!==null;){if(k.key===J)if(k.tag===4&&k.stateNode.containerInfo===T.containerInfo&&k.stateNode.implementation===T.implementation){o(x,k.sibling),k=c(k,T.children||[]),k.return=x,x=k;break e}else{o(x,k);break}else t(x,k);k=k.sibling}k=kl(T,x.mode,U),k.return=x,x=k}return h(x);case Ye:return J=T._init,Ae(x,k,J(T._payload),U)}if(Br(T))return B(x,k,T,U);if(Z(T))return W(x,k,T,U);To(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,k!==null&&k.tag===6?(o(x,k.sibling),k=c(k,T),k.return=x,x=k):(o(x,k),k=Cl(T,x.mode,U),k.return=x,x=k),h(x)):o(x,k)}return Ae}var xr=p1(!0),h1=p1(!1),Po=fn(null),bo=null,Tr=null,Na=null;function Ra(){Na=Tr=bo=null}function Aa(e){var t=Po.current;ke(Po),e._currentValue=t}function La(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function Pr(e,t){bo=e,Na=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(bo===null)throw Error(i(308));Tr=e,bo.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Wn=null;function Oa(e){Wn===null?Wn=[e]:Wn.push(e)}function m1(e,t,o,a){var c=t.interleaved;return c===null?(o.next=o,Oa(t)):(o.next=c.next,c.next=o),t.interleaved=o,Kt(e,a)}function Kt(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var mn=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ae&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Kt(e,o)}return c=a.interleaved,c===null?(t.next=t,Oa(a)):(t.next=c.next,c.next=t),a.interleaved=t,Kt(e,o)}function No(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Js(e,o)}}function y1(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var h={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?c=d=h:d=d.next=h,o=o.next}while(o!==null);d===null?c=d=t:d=d.next=t}else c=d=t;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function Ro(e,t,o,a){var c=e.updateQueue;mn=!1;var d=c.firstBaseUpdate,h=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var C=y,P=C.next;C.next=null,h===null?d=P:h.next=P,h=C;var D=e.alternate;D!==null&&(D=D.updateQueue,y=D.lastBaseUpdate,y!==h&&(y===null?D.firstBaseUpdate=P:y.next=P,D.lastBaseUpdate=C))}if(d!==null){var j=c.baseState;h=0,D=P=C=null,y=d;do{var O=y.lane,F=y.eventTime;if((a&O)===O){D!==null&&(D=D.next={eventTime:F,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var B=e,W=y;switch(O=t,F=o,W.tag){case 1:if(B=W.payload,typeof B=="function"){j=B.call(F,j,O);break e}j=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=W.payload,O=typeof B=="function"?B.call(F,j,O):B,O==null)break e;j=H({},j,O);break e;case 2:mn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,O=c.effects,O===null?c.effects=[y]:O.push(y))}else F={eventTime:F,lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},D===null?(P=D=F,C=j):D=D.next=F,h|=O;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;O=y,y=O.next,O.next=null,c.lastBaseUpdate=O,c.shared.pending=null}}while(!0);if(D===null&&(C=j),c.baseState=C,c.firstBaseUpdate=P,c.lastBaseUpdate=D,t=c.shared.interleaved,t!==null){c=t;do h|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);Gn|=h,e.lanes=h,e.memoizedState=j}}function v1(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(i(191,c));c.call(a)}}}var mi={},Dt=fn(mi),gi=fn(mi),yi=fn(mi);function qn(e){if(e===mi)throw Error(i(174));return e}function Da(e,t){switch(ye(yi,t),ye(gi,e),ye(Dt,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=js(t,e)}ke(Dt),ye(Dt,t)}function br(){ke(Dt),ke(gi),ke(yi)}function w1(e){qn(yi.current);var t=qn(Dt.current),o=js(t,e.type);t!==o&&(ye(gi,e),ye(Dt,o))}function ja(e){gi.current===e&&(ke(Dt),ke(gi))}var Ie=fn(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=[];function za(){for(var e=0;e<Ua.length;e++)Ua[e]._workInProgressVersionPrimary=null;Ua.length=0}var Lo=te.ReactCurrentDispatcher,Fa=te.ReactCurrentBatchConfig,Kn=0,xe=null,Me=null,Ue=null,Oo=!1,vi=!1,wi=0,Sh=0;function $e(){throw Error(i(321))}function Va(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!It(e[o],t[o]))return!1;return!0}function Ha(e,t,o,a,c,d){if(Kn=d,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?Th:Ph,e=o(a,c),vi){d=0;do{if(vi=!1,wi=0,25<=d)throw Error(i(301));d+=1,Ue=Me=null,t.updateQueue=null,Lo.current=bh,e=o(a,c)}while(vi)}if(Lo.current=jo,t=Me!==null&&Me.next!==null,Kn=0,Ue=Me=xe=null,Oo=!1,t)throw Error(i(300));return e}function Ba(){var e=wi!==0;return wi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?xe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function vt(){if(Me===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ue===null?xe.memoizedState:Ue.next;if(t!==null)Ue=t,Me=e;else{if(e===null)throw Error(i(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ue===null?xe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ci(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=vt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=Me,c=a.baseQueue,d=o.pending;if(d!==null){if(c!==null){var h=c.next;c.next=d.next,d.next=h}a.baseQueue=c=d,o.pending=null}if(c!==null){d=c.next,a=a.baseState;var y=h=null,C=null,P=d;do{var D=P.lane;if((Kn&D)===D)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),a=P.hasEagerState?P.eagerState:e(a,P.action);else{var j={lane:D,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(y=C=j,h=a):C=C.next=j,xe.lanes|=D,Gn|=D}P=P.next}while(P!==null&&P!==d);C===null?h=a:C.next=y,It(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=C,o.lastRenderedState=a}if(e=o.interleaved,e!==null){c=e;do d=c.lane,xe.lanes|=d,Gn|=d,c=c.next;while(c!==e)}else c===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Wa(e){var t=vt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=o.dispatch,c=o.pending,d=t.memoizedState;if(c!==null){o.pending=null;var h=c=c.next;do d=e(d,h.action),h=h.next;while(h!==c);It(d,t.memoizedState)||(et=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),o.lastRenderedState=d}return[d,a]}function C1(){}function k1(e,t){var o=xe,a=vt(),c=t(),d=!It(a.memoizedState,c);if(d&&(a.memoizedState=c,et=!0),a=a.queue,qa(E1.bind(null,o,a,e),[e]),a.getSnapshot!==t||d||Ue!==null&&Ue.memoizedState.tag&1){if(o.flags|=2048,ki(9,S1.bind(null,o,a,c,t),void 0,null),ze===null)throw Error(i(349));(Kn&30)!==0||_1(o,t,c)}return c}function _1(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function S1(e,t,o,a){t.value=o,t.getSnapshot=a,I1(t)&&x1(e)}function E1(e,t,o){return o(function(){I1(t)&&x1(e)})}function I1(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!It(e,o)}catch{return!0}}function x1(e){var t=Kt(e,1);t!==null&&Nt(t,e,1,-1)}function T1(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=xh.bind(null,xe,e),[t.memoizedState,e]}function ki(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function P1(){return vt().memoizedState}function Mo(e,t,o,a){var c=jt();xe.flags|=e,c.memoizedState=ki(1|t,o,void 0,a===void 0?null:a)}function Do(e,t,o,a){var c=vt();a=a===void 0?null:a;var d=void 0;if(Me!==null){var h=Me.memoizedState;if(d=h.destroy,a!==null&&Va(a,h.deps)){c.memoizedState=ki(t,o,d,a);return}}xe.flags|=e,c.memoizedState=ki(1|t,o,d,a)}function b1(e,t){return Mo(8390656,8,e,t)}function qa(e,t){return Do(2048,8,e,t)}function N1(e,t){return Do(4,2,e,t)}function R1(e,t){return Do(4,4,e,t)}function A1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L1(e,t,o){return o=o!=null?o.concat([e]):null,Do(4,4,A1.bind(null,t,e),o)}function Ka(){}function O1(e,t){var o=vt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Va(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function M1(e,t){var o=vt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Va(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function D1(e,t,o){return(Kn&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=o):(It(o,t)||(o=fu(),xe.lanes|=o,Gn|=o,e.baseState=!0),t)}function Eh(e,t){var o=he;he=o!==0&&4>o?o:4,e(!0);var a=Fa.transition;Fa.transition={};try{e(!1),t()}finally{he=o,Fa.transition=a}}function j1(){return vt().memoizedState}function Ih(e,t,o){var a=Cn(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},U1(e))z1(t,o);else if(o=m1(e,t,o,a),o!==null){var c=Ge();Nt(o,e,a,c),F1(o,t,a)}}function xh(e,t,o){var a=Cn(e),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(U1(e))z1(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,y=d(h,o);if(c.hasEagerState=!0,c.eagerState=y,It(y,h)){var C=t.interleaved;C===null?(c.next=c,Oa(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}o=m1(e,t,c,a),o!==null&&(c=Ge(),Nt(o,e,a,c),F1(o,t,a))}}function U1(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function z1(e,t){vi=Oo=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function F1(e,t,o){if((o&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Js(e,o)}}var jo={readContext:yt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Th={readContext:yt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:b1,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Mo(4194308,4,A1.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var o=jt();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=jt();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Ih.bind(null,xe,e),[a.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:T1,useDebugValue:Ka,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=T1(!1),t=e[0];return e=Eh.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=xe,c=jt();if(Ee){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),ze===null)throw Error(i(349));(Kn&30)!==0||_1(a,t,o)}c.memoizedState=o;var d={value:o,getSnapshot:t};return c.queue=d,b1(E1.bind(null,a,d,e),[e]),a.flags|=2048,ki(9,S1.bind(null,a,d,o,t),void 0,null),o},useId:function(){var e=jt(),t=ze.identifierPrefix;if(Ee){var o=qt,a=Wt;o=(a&~(1<<32-Et(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=wi++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=Sh++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:yt,useCallback:O1,useContext:yt,useEffect:qa,useImperativeHandle:L1,useInsertionEffect:N1,useLayoutEffect:R1,useMemo:M1,useReducer:$a,useRef:P1,useState:function(){return $a(Ci)},useDebugValue:Ka,useDeferredValue:function(e){var t=vt();return D1(t,Me.memoizedState,e)},useTransition:function(){var e=$a(Ci)[0],t=vt().memoizedState;return[e,t]},useMutableSource:C1,useSyncExternalStore:k1,useId:j1,unstable_isNewReconciler:!1},bh={readContext:yt,useCallback:O1,useContext:yt,useEffect:qa,useImperativeHandle:L1,useInsertionEffect:N1,useLayoutEffect:R1,useMemo:M1,useReducer:Wa,useRef:P1,useState:function(){return Wa(Ci)},useDebugValue:Ka,useDeferredValue:function(e){var t=vt();return Me===null?t.memoizedState=e:D1(t,Me.memoizedState,e)},useTransition:function(){var e=Wa(Ci)[0],t=vt().memoizedState;return[e,t]},useMutableSource:C1,useSyncExternalStore:k1,useId:j1,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function Ga(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:H({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Uo={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=Ge(),c=Cn(e),d=Gt(a,c);d.payload=t,o!=null&&(d.callback=o),t=gn(e,d,c),t!==null&&(Nt(t,e,c,a),No(t,e,c))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=Ge(),c=Cn(e),d=Gt(a,c);d.tag=1,d.payload=t,o!=null&&(d.callback=o),t=gn(e,d,c),t!==null&&(Nt(t,e,c,a),No(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Ge(),a=Cn(e),c=Gt(o,a);c.tag=2,t!=null&&(c.callback=t),t=gn(e,c,a),t!==null&&(Nt(t,e,a,o),No(t,e,a))}};function V1(e,t,o,a,c,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,h):t.prototype&&t.prototype.isPureReactComponent?!ai(o,a)||!ai(c,d):!0}function H1(e,t,o){var a=!1,c=pn,d=t.contextType;return typeof d=="object"&&d!==null?d=yt(d):(c=Xe(t)?Hn:Be.current,a=t.contextTypes,d=(a=a!=null)?_r(e,c):pn),t=new t(o,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function B1(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function Ja(e,t,o,a){var c=e.stateNode;c.props=o,c.state=e.memoizedState,c.refs={},Ma(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=yt(d):(d=Xe(t)?Hn:Be.current,c.context=_r(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ga(e,t,d,o),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Uo.enqueueReplaceState(c,c.state,null),Ro(e,o,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var o="",a=t;do o+=le(a),a=a.return;while(a);var c=o}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function Qa(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function $1(e,t,o){o=Gt(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){Wo||(Wo=!0,fl=a),Ya(e,t)},o}function W1(e,t,o){o=Gt(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;o.payload=function(){return a(c)},o.callback=function(){Ya(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){Ya(e,t),typeof a!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),o}function q1(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new Nh;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(o)||(c.add(o),e=$h.bind(null,e,t,o),t.then(e,e))}function K1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function G1(e,t,o,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=Gt(-1,1),t.tag=2,gn(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Rh=te.ReactCurrentOwner,et=!1;function Ke(e,t,o,a){t.child=e===null?h1(t,null,o,a):xr(t,e.child,o,a)}function J1(e,t,o,a,c){o=o.render;var d=t.ref;return Pr(t,c),a=Ha(e,t,o,a,d,c),o=Ba(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Jt(e,t,c)):(Ee&&o&&Ia(t),t.flags|=1,Ke(e,t,a,c),t.child)}function Q1(e,t,o,a,c){if(e===null){var d=o.type;return typeof d=="function"&&!wl(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=d,Y1(e,t,d,a,c)):(e=Yo(o.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var h=d.memoizedProps;if(o=o.compare,o=o!==null?o:ai,o(h,a)&&e.ref===t.ref)return Jt(e,t,c)}return t.flags|=1,e=_n(d,a),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,o,a,c){if(e!==null){var d=e.memoizedProps;if(ai(d,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Jt(e,t,c)}return Za(e,t,o,a,c)}function Z1(e,t,o){var a=t.pendingProps,c=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Ar,ft),ft|=o;else{if((o&1073741824)===0)return e=d!==null?d.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Ar,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:o,ye(Ar,ft),ft|=a}else d!==null?(a=d.baseLanes|o,t.memoizedState=null):a=o,ye(Ar,ft),ft|=a;return Ke(e,t,c,o),t.child}function X1(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,o,a,c){var d=Xe(o)?Hn:Be.current;return d=_r(t,d),Pr(t,c),o=Ha(e,t,o,a,d,c),a=Ba(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Jt(e,t,c)):(Ee&&a&&Ia(t),t.flags|=1,Ke(e,t,o,c),t.child)}function ed(e,t,o,a,c){if(Xe(o)){var d=!0;_o(t)}else d=!1;if(Pr(t,c),t.stateNode===null)Fo(e,t),H1(t,o,a),Ja(t,o,a,c),a=!0;else if(e===null){var h=t.stateNode,y=t.memoizedProps;h.props=y;var C=h.context,P=o.contextType;typeof P=="object"&&P!==null?P=yt(P):(P=Xe(o)?Hn:Be.current,P=_r(t,P));var D=o.getDerivedStateFromProps,j=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function";j||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==a||C!==P)&&B1(t,h,a,P),mn=!1;var O=t.memoizedState;h.state=O,Ro(t,a,h,c),C=t.memoizedState,y!==a||O!==C||Ze.current||mn?(typeof D=="function"&&(Ga(t,o,D,a),C=t.memoizedState),(y=mn||V1(t,o,y,a,O,C,P))?(j||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),h.props=a,h.state=C,h.context=P,a=y):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,g1(e,t),y=t.memoizedProps,P=t.type===t.elementType?y:Tt(t.type,y),h.props=P,j=t.pendingProps,O=h.context,C=o.contextType,typeof C=="object"&&C!==null?C=yt(C):(C=Xe(o)?Hn:Be.current,C=_r(t,C));var F=o.getDerivedStateFromProps;(D=typeof F=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==j||O!==C)&&B1(t,h,a,C),mn=!1,O=t.memoizedState,h.state=O,Ro(t,a,h,c);var B=t.memoizedState;y!==j||O!==B||Ze.current||mn?(typeof F=="function"&&(Ga(t,o,F,a),B=t.memoizedState),(P=mn||V1(t,o,P,a,O,B,C)||!1)?(D||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,B,C),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,B,C)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),h.props=a,h.state=B,h.context=C,a=P):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return Xa(e,t,o,a,d,c)}function Xa(e,t,o,a,c,d){X1(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return c&&o1(t,o,!1),Jt(e,t,d);a=t.stateNode,Rh.current=t;var y=h&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=xr(t,e.child,null,d),t.child=xr(t,null,y,d)):Ke(e,t,y,d),t.memoizedState=a.state,c&&o1(t,o,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?r1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&r1(e,t.context,!1),Da(e,t.containerInfo)}function nd(e,t,o,a,c){return Ir(),ba(c),t.flags|=256,Ke(e,t,o,a),t.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,o){var a=t.pendingProps,c=Ie.current,d=!1,h=(t.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(c&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ye(Ie,c&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=a.children,e=a.fallback,d?(a=t.mode,d=t.child,h={mode:"hidden",children:h},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Zo(h,a,0,null),e=Zn(e,a,o,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=tl(o),t.memoizedState=el,e):nl(t,h));if(c=e.memoizedState,c!==null&&(y=c.dehydrated,y!==null))return Ah(e,t,h,a,y,c,o);if(d){d=a.fallback,h=t.mode,c=e.child,y=c.sibling;var C={mode:"hidden",children:a.children};return(h&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=C,t.deletions=null):(a=_n(c,C),a.subtreeFlags=c.subtreeFlags&14680064),y!==null?d=_n(y,d):(d=Zn(d,h,o,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,h=e.child.memoizedState,h=h===null?tl(o):{baseLanes:h.baseLanes|o,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~o,t.memoizedState=el,a}return d=e.child,e=d.sibling,a=_n(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function nl(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,o,a){return a!==null&&ba(a),xr(t,e.child,null,o),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ah(e,t,o,a,c,d,h){if(o)return t.flags&256?(t.flags&=-257,a=Qa(Error(i(422))),zo(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,c=t.mode,a=Zo({mode:"visible",children:a.children},c,0,null),d=Zn(d,c,h,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&xr(t,e.child,null,h),t.child.memoizedState=tl(h),t.memoizedState=el,d);if((t.mode&1)===0)return zo(e,t,h,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var y=a.dgst;return a=y,d=Error(i(419)),a=Qa(d,a,void 0),zo(e,t,h,a)}if(y=(h&e.childLanes)!==0,et||y){if(a=ze,a!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|h))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,Kt(e,c),Nt(a,e,c,-1))}return vl(),a=Qa(Error(i(421))),zo(e,t,h,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Wh.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,dt=dn(c.nextSibling),ut=t,Ee=!0,xt=null,e!==null&&(mt[gt++]=Wt,mt[gt++]=qt,mt[gt++]=Bn,Wt=e.id,qt=e.overflow,Bn=t),t=nl(t,a.children),t.flags|=4096,t)}function id(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),La(e.return,t,o)}function rl(e,t,o,a,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=o,d.tailMode=c)}function od(e,t,o){var a=t.pendingProps,c=a.revealOrder,d=a.tail;if(Ke(e,t,a.children,o),a=Ie.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,o,t);else if(e.tag===19)id(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ye(Ie,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(o=t.child,c=null;o!==null;)e=o.alternate,e!==null&&Ao(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=t.child,t.child=null):(c=o.sibling,o.sibling=null),rl(t,!1,c,o,d);break;case"backwards":for(o=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ao(e)===null){t.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}rl(t,!0,o,null,d);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=_n(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=_n(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Lh(e,t,o){switch(t.tag){case 3:td(t),Ir();break;case 5:w1(t);break;case 1:Xe(t.type)&&_o(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ye(Po,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ye(Ie,Ie.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?rd(e,t,o):(ye(Ie,Ie.current&1),e=Jt(e,t,o),e!==null?e.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(a=(o&t.childLanes)!==0,(e.flags&128)!==0){if(a)return od(e,t,o);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(Ie,Ie.current),a)break;return null;case 22:case 23:return t.lanes=0,Z1(e,t,o)}return Jt(e,t,o)}var sd,il,ad,ld;sd=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},il=function(){},ad=function(e,t,o,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,qn(Dt.current);var d=null;switch(o){case"input":c=Ls(e,c),a=Ls(e,a),d=[];break;case"select":c=H({},c,{value:void 0}),a=H({},a,{value:void 0}),d=[];break;case"textarea":c=Ds(e,c),a=Ds(e,a),d=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=wo)}Us(o,a);var h;o=null;for(P in c)if(!a.hasOwnProperty(P)&&c.hasOwnProperty(P)&&c[P]!=null)if(P==="style"){var y=c[P];for(h in y)y.hasOwnProperty(h)&&(o||(o={}),o[h]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(l.hasOwnProperty(P)?d||(d=[]):(d=d||[]).push(P,null));for(P in a){var C=a[P];if(y=c?.[P],a.hasOwnProperty(P)&&C!==y&&(C!=null||y!=null))if(P==="style")if(y){for(h in y)!y.hasOwnProperty(h)||C&&C.hasOwnProperty(h)||(o||(o={}),o[h]="");for(h in C)C.hasOwnProperty(h)&&y[h]!==C[h]&&(o||(o={}),o[h]=C[h])}else o||(d||(d=[]),d.push(P,o)),o=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,y=y?y.__html:void 0,C!=null&&y!==C&&(d=d||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(l.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&Ce("scroll",e),d||y===C||(d=[])):(d=d||[]).push(P,C))}o&&(d=d||[]).push("style",o);var P=d;(t.updateQueue=P)&&(t.flags|=4)}},ld=function(e,t,o,a){o!==a&&(t.flags|=4)};function _i(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function Oh(e,t,o){var a=t.pendingProps;switch(xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Xe(t.type)&&ko(),We(t),null;case 3:return a=t.stateNode,br(),ke(Ze),ke(Be),za(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xt!==null&&(ml(xt),xt=null))),il(e,t),We(t),null;case 5:ja(t);var c=qn(yi.current);if(o=t.type,e!==null&&t.stateNode!=null)ad(e,t,o,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return We(t),null}if(e=qn(Dt.current),xo(t)){a=t.stateNode,o=t.type;var d=t.memoizedProps;switch(a[Mt]=t,a[fi]=d,e=(t.mode&1)!==0,o){case"dialog":Ce("cancel",a),Ce("close",a);break;case"iframe":case"object":case"embed":Ce("load",a);break;case"video":case"audio":for(c=0;c<ci.length;c++)Ce(ci[c],a);break;case"source":Ce("error",a);break;case"img":case"image":case"link":Ce("error",a),Ce("load",a);break;case"details":Ce("toggle",a);break;case"input":Hc(a,d),Ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Ce("invalid",a);break;case"textarea":Wc(a,d),Ce("invalid",a)}Us(o,d),c=null;for(var h in d)if(d.hasOwnProperty(h)){var y=d[h];h==="children"?typeof y=="string"?a.textContent!==y&&(d.suppressHydrationWarning!==!0&&vo(a.textContent,y,e),c=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&vo(a.textContent,y,e),c=["children",""+y]):l.hasOwnProperty(h)&&y!=null&&h==="onScroll"&&Ce("scroll",a)}switch(o){case"input":Gi(a),$c(a,d,!0);break;case"textarea":Gi(a),Kc(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=wo)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(o,{is:a.is}):(e=h.createElement(o),o==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,o),e[Mt]=t,e[fi]=a,sd(e,t,!1,!1),t.stateNode=e;e:{switch(h=zs(o,a),o){case"dialog":Ce("cancel",e),Ce("close",e),c=a;break;case"iframe":case"object":case"embed":Ce("load",e),c=a;break;case"video":case"audio":for(c=0;c<ci.length;c++)Ce(ci[c],e);c=a;break;case"source":Ce("error",e),c=a;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),c=a;break;case"details":Ce("toggle",e),c=a;break;case"input":Hc(e,a),c=Ls(e,a),Ce("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=H({},a,{value:void 0}),Ce("invalid",e);break;case"textarea":Wc(e,a),c=Ds(e,a),Ce("invalid",e);break;default:c=a}Us(o,c),y=c;for(d in y)if(y.hasOwnProperty(d)){var C=y[d];d==="style"?Yc(e,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Jc(e,C)):d==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&$r(e,C):typeof C=="number"&&$r(e,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?C!=null&&d==="onScroll"&&Ce("scroll",e):C!=null&&G(e,d,C,h))}switch(o){case"input":Gi(e),$c(e,a,!1);break;case"textarea":Gi(e),Kc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?ur(e,!!a.multiple,d,!1):a.defaultValue!=null&&ur(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=wo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)ld(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(o=qn(yi.current),qn(Dt.current),xo(t)){if(a=t.stateNode,o=t.memoizedProps,a[Mt]=t,(d=a.nodeValue!==o)&&(e=ut,e!==null))switch(e.tag){case 3:vo(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(a.nodeValue,o,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Mt]=t,t.stateNode=a}return We(t),null;case 13:if(ke(Ie),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)d1(),Ir(),t.flags|=98560,d=!1;else if(d=xo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Mt]=t}else Ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),d=!1}else xt!==null&&(ml(xt),xt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?De===0&&(De=3):vl())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return br(),il(e,t),e===null&&ui(t.stateNode.containerInfo),We(t),null;case 10:return Aa(t.type._context),We(t),null;case 17:return Xe(t.type)&&ko(),We(t),null;case 19:if(ke(Ie),d=t.memoizedState,d===null)return We(t),null;if(a=(t.flags&128)!==0,h=d.rendering,h===null)if(a)_i(d,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Ao(e),h!==null){for(t.flags|=128,_i(d,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)d=o,e=a,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ye(Ie,Ie.current&1|2),t.child}e=e.sibling}d.tail!==null&&Re()>Lr&&(t.flags|=128,a=!0,_i(d,!1),t.lanes=4194304)}else{if(!a)if(e=Ao(h),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),_i(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Ee)return We(t),null}else 2*Re()-d.renderingStartTime>Lr&&o!==1073741824&&(t.flags|=128,a=!0,_i(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(o=d.last,o!==null?o.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Re(),t.sibling=null,o=Ie.current,ye(Ie,a?o&1|2:o&1),t):(We(t),null);case 22:case 23:return yl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ft&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Mh(e,t){switch(xa(t),t.tag){case 1:return Xe(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),ke(Ze),ke(Be),za(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ja(t),null;case 13:if(ke(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ie),null;case 4:return br(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return yl(),null;case 24:return null;default:return null}}var Vo=!1,qe=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,V=null;function Rr(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){be(e,t,a)}else o.current=null}function ol(e,t,o){try{o()}catch(a){be(e,t,a)}}var cd=!1;function jh(e,t){if(ya=so,e=Vu(),ca(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var h=0,y=-1,C=-1,P=0,D=0,j=e,O=null;t:for(;;){for(var F;j!==o||c!==0&&j.nodeType!==3||(y=h+c),j!==d||a!==0&&j.nodeType!==3||(C=h+a),j.nodeType===3&&(h+=j.nodeValue.length),(F=j.firstChild)!==null;)O=j,j=F;for(;;){if(j===e)break t;if(O===o&&++P===c&&(y=h),O===d&&++D===a&&(C=h),(F=j.nextSibling)!==null)break;j=O,O=j.parentNode}j=F}o=y===-1||C===-1?null:{start:y,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(va={focusedElem:e,selectionRange:o},so=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var W=B.memoizedProps,Ae=B.memoizedState,x=t.stateNode,k=x.getSnapshotBeforeUpdate(t.elementType===t.type?W:Tt(t.type,W),Ae);x.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){be(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return B=cd,cd=!1,B}function Si(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&ol(t,o,d)}c=c.next}while(c!==a)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function sl(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[fi],delete t[_a],delete t[wh],delete t[Ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=wo));else if(a!==4&&(e=e.child,e!==null))for(al(e,t,o),e=e.sibling;e!==null;)al(e,t,o),e=e.sibling}function ll(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ll(e,t,o),e=e.sibling;e!==null;)ll(e,t,o),e=e.sibling}var Ve=null,Pt=!1;function yn(e,t,o){for(o=o.child;o!==null;)pd(e,t,o),o=o.sibling}function pd(e,t,o){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(eo,o)}catch{}switch(o.tag){case 5:qe||Rr(o,t);case 6:var a=Ve,c=Pt;Ve=null,yn(e,t,o),Ve=a,Pt=c,Ve!==null&&(Pt?(e=Ve,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ve.removeChild(o.stateNode));break;case 18:Ve!==null&&(Pt?(e=Ve,o=o.stateNode,e.nodeType===8?ka(e.parentNode,o):e.nodeType===1&&ka(e,o),ti(e)):ka(Ve,o.stateNode));break;case 4:a=Ve,c=Pt,Ve=o.stateNode.containerInfo,Pt=!0,yn(e,t,o),Ve=a,Pt=c;break;case 0:case 11:case 14:case 15:if(!qe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var d=c,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&ol(o,t,h),c=c.next}while(c!==a)}yn(e,t,o);break;case 1:if(!qe&&(Rr(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){be(o,t,y)}yn(e,t,o);break;case 21:yn(e,t,o);break;case 22:o.mode&1?(qe=(a=qe)||o.memoizedState!==null,yn(e,t,o),qe=a):yn(e,t,o);break;default:yn(e,t,o)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Dh),t.forEach(function(a){var c=qh.bind(null,e,a);o.has(a)||(o.add(a),a.then(c,c))})}}function bt(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var d=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 5:Ve=y.stateNode,Pt=!1;break e;case 3:Ve=y.stateNode.containerInfo,Pt=!0;break e;case 4:Ve=y.stateNode.containerInfo,Pt=!0;break e}y=y.return}if(Ve===null)throw Error(i(160));pd(d,h,c),Ve=null,Pt=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch(P){be(c,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Ut(e),a&4){try{Si(3,e,e.return),Ho(3,e)}catch(W){be(e,e.return,W)}try{Si(5,e,e.return)}catch(W){be(e,e.return,W)}}break;case 1:bt(t,e),Ut(e),a&512&&o!==null&&Rr(o,o.return);break;case 5:if(bt(t,e),Ut(e),a&512&&o!==null&&Rr(o,o.return),e.flags&32){var c=e.stateNode;try{$r(c,"")}catch(W){be(e,e.return,W)}}if(a&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,h=o!==null?o.memoizedProps:d,y=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&Bc(c,d),zs(y,h);var P=zs(y,d);for(h=0;h<C.length;h+=2){var D=C[h],j=C[h+1];D==="style"?Yc(c,j):D==="dangerouslySetInnerHTML"?Jc(c,j):D==="children"?$r(c,j):G(c,D,j,P)}switch(y){case"input":Os(c,d);break;case"textarea":qc(c,d);break;case"select":var O=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var F=d.value;F!=null?ur(c,!!d.multiple,F,!1):O!==!!d.multiple&&(d.defaultValue!=null?ur(c,!!d.multiple,d.defaultValue,!0):ur(c,!!d.multiple,d.multiple?[]:"",!1))}c[fi]=d}catch(W){be(e,e.return,W)}}break;case 6:if(bt(t,e),Ut(e),a&4){if(e.stateNode===null)throw Error(i(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(W){be(e,e.return,W)}}break;case 3:if(bt(t,e),Ut(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(W){be(e,e.return,W)}break;case 4:bt(t,e),Ut(e);break;case 13:bt(t,e),Ut(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(dl=Re())),a&4&&hd(e);break;case 22:if(D=o!==null&&o.memoizedState!==null,e.mode&1?(qe=(P=qe)||D,bt(t,e),qe=P):bt(t,e),Ut(e),a&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!D&&(e.mode&1)!==0)for(V=e,D=e.child;D!==null;){for(j=V=D;V!==null;){switch(O=V,F=O.child,O.tag){case 0:case 11:case 14:case 15:Si(4,O,O.return);break;case 1:Rr(O,O.return);var B=O.stateNode;if(typeof B.componentWillUnmount=="function"){a=O,o=O.return;try{t=a,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(W){be(a,o,W)}}break;case 5:Rr(O,O.return);break;case 22:if(O.memoizedState!==null){vd(j);continue}}F!==null?(F.return=O,V=F):vd(j)}D=D.sibling}e:for(D=null,j=e;;){if(j.tag===5){if(D===null){D=j;try{c=j.stateNode,P?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=j.stateNode,C=j.memoizedProps.style,h=C!=null&&C.hasOwnProperty("display")?C.display:null,y.style.display=Qc("display",h))}catch(W){be(e,e.return,W)}}}else if(j.tag===6){if(D===null)try{j.stateNode.nodeValue=P?"":j.memoizedProps}catch(W){be(e,e.return,W)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;D===j&&(D=null),j=j.return}D===j&&(D=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:bt(t,e),Ut(e),a&4&&hd(e);break;case 21:break;default:bt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(dd(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&($r(c,""),a.flags&=-33);var d=fd(e);ll(e,d,c);break;case 3:case 4:var h=a.stateNode.containerInfo,y=fd(e);al(e,y,h);break;default:throw Error(i(161))}}catch(C){be(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e,t,o){V=e,gd(e)}function gd(e,t,o){for(var a=(e.mode&1)!==0;V!==null;){var c=V,d=c.child;if(c.tag===22&&a){var h=c.memoizedState!==null||Vo;if(!h){var y=c.alternate,C=y!==null&&y.memoizedState!==null||qe;y=Vo;var P=qe;if(Vo=h,(qe=C)&&!P)for(V=c;V!==null;)h=V,C=h.child,h.tag===22&&h.memoizedState!==null?wd(c):C!==null?(C.return=h,V=C):wd(c);for(;d!==null;)V=d,gd(d),d=d.sibling;V=c,Vo=y,qe=P}yd(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,V=d):yd(e)}}function yd(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||Ho(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!qe)if(o===null)a.componentDidMount();else{var c=t.elementType===t.type?o.memoizedProps:Tt(t.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&v1(t,d,a);break;case 3:var h=t.updateQueue;if(h!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}v1(t,h,o)}break;case 5:var y=t.stateNode;if(o===null&&t.flags&4){o=y;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var D=P.memoizedState;if(D!==null){var j=D.dehydrated;j!==null&&ti(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}qe||t.flags&512&&sl(t)}catch(O){be(t,t.return,O)}}if(t===e){V=null;break}if(o=t.sibling,o!==null){o.return=t.return,V=o;break}V=t.return}}function vd(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var o=t.sibling;if(o!==null){o.return=t.return,V=o;break}V=t.return}}function wd(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Ho(4,t)}catch(C){be(t,o,C)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(C){be(t,c,C)}}var d=t.return;try{sl(t)}catch(C){be(t,d,C)}break;case 5:var h=t.return;try{sl(t)}catch(C){be(t,h,C)}}}catch(C){be(t,t.return,C)}if(t===e){V=null;break}var y=t.sibling;if(y!==null){y.return=t.return,V=y;break}V=t.return}}var zh=Math.ceil,Bo=te.ReactCurrentDispatcher,cl=te.ReactCurrentOwner,wt=te.ReactCurrentBatchConfig,ae=0,ze=null,Oe=null,He=0,ft=0,Ar=fn(0),De=0,Ei=null,Gn=0,$o=0,ul=0,Ii=null,tt=null,dl=0,Lr=1/0,Qt=null,Wo=!1,fl=null,vn=null,qo=!1,wn=null,Ko=0,xi=0,pl=null,Go=-1,Jo=0;function Ge(){return(ae&6)!==0?Re():Go!==-1?Go:Go=Re()}function Cn(e){return(e.mode&1)===0?1:(ae&2)!==0&&He!==0?He&-He:_h.transition!==null?(Jo===0&&(Jo=fu()),Jo):(e=he,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e)}function Nt(e,t,o,a){if(50<xi)throw xi=0,pl=null,Error(i(185));Qr(e,o,a),((ae&2)===0||e!==ze)&&(e===ze&&((ae&2)===0&&($o|=o),De===4&&kn(e,He)),nt(e,a),o===1&&ae===0&&(t.mode&1)===0&&(Lr=Re()+500,So&&hn()))}function nt(e,t){var o=e.callbackNode;_p(e,t);var a=ro(e,e===ze?He:0);if(a===0)o!==null&&cu(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&cu(o),t===1)e.tag===0?kh(kd.bind(null,e)):s1(kd.bind(null,e)),yh(function(){(ae&6)===0&&hn()}),o=null;else{switch(pu(a)){case 1:o=qs;break;case 4:o=uu;break;case 16:o=Xi;break;case 536870912:o=du;break;default:o=Xi}o=bd(o,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Cd(e,t){if(Go=-1,Jo=0,(ae&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Or()&&e.callbackNode!==o)return null;var a=ro(e,e===ze?He:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Qo(e,a);else{t=a;var c=ae;ae|=2;var d=Sd();(ze!==e||He!==t)&&(Qt=null,Lr=Re()+500,Qn(e,t));do try{Hh();break}catch(y){_d(e,y)}while(!0);Ra(),Bo.current=d,ae=c,Oe!==null?t=0:(ze=null,He=0,t=De)}if(t!==0){if(t===2&&(c=Ks(e),c!==0&&(a=c,t=hl(e,c))),t===1)throw o=Ei,Qn(e,0),kn(e,a),nt(e,Re()),o;if(t===6)kn(e,a);else{if(c=e.current.alternate,(a&30)===0&&!Fh(c)&&(t=Qo(e,a),t===2&&(d=Ks(e),d!==0&&(a=d,t=hl(e,d))),t===1))throw o=Ei,Qn(e,0),kn(e,a),nt(e,Re()),o;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Yn(e,tt,Qt);break;case 3:if(kn(e,a),(a&130023424)===a&&(t=dl+500-Re(),10<t)){if(ro(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Ge(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Ca(Yn.bind(null,e,tt,Qt),t);break}Yn(e,tt,Qt);break;case 4:if(kn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var h=31-Et(a);d=1<<h,h=t[h],h>c&&(c=h),a&=~d}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zh(a/1960))-a,10<a){e.timeoutHandle=Ca(Yn.bind(null,e,tt,Qt),a);break}Yn(e,tt,Qt);break;case 5:Yn(e,tt,Qt);break;default:throw Error(i(329))}}}return nt(e,Re()),e.callbackNode===o?Cd.bind(null,e):null}function hl(e,t){var o=Ii;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=tt,tt=o,t!==null&&ml(t)),e}function ml(e){tt===null?tt=e:tt.push.apply(tt,e)}function Fh(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],d=c.getSnapshot;c=c.value;try{if(!It(d(),c))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~ul,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Et(t),a=1<<o;e[o]=-1,t&=~a}}function kd(e){if((ae&6)!==0)throw Error(i(327));Or();var t=ro(e,0);if((t&1)===0)return nt(e,Re()),null;var o=Qo(e,t);if(e.tag!==0&&o===2){var a=Ks(e);a!==0&&(t=a,o=hl(e,a))}if(o===1)throw o=Ei,Qn(e,0),kn(e,t),nt(e,Re()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,tt,Qt),nt(e,Re()),null}function gl(e,t){var o=ae;ae|=1;try{return e(t)}finally{ae=o,ae===0&&(Lr=Re()+500,So&&hn())}}function Jn(e){wn!==null&&wn.tag===0&&(ae&6)===0&&Or();var t=ae;ae|=1;var o=wt.transition,a=he;try{if(wt.transition=null,he=1,e)return e()}finally{he=a,wt.transition=o,ae=t,(ae&6)===0&&hn()}}function yl(){ft=Ar.current,ke(Ar)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,gh(o)),Oe!==null)for(o=Oe.return;o!==null;){var a=o;switch(xa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ko();break;case 3:br(),ke(Ze),ke(Be),za();break;case 5:ja(a);break;case 4:br();break;case 13:ke(Ie);break;case 19:ke(Ie);break;case 10:Aa(a.type._context);break;case 22:case 23:yl()}o=o.return}if(ze=e,Oe=e=_n(e.current,null),He=ft=t,De=0,Ei=null,ul=$o=Gn=0,tt=Ii=null,Wn!==null){for(t=0;t<Wn.length;t++)if(o=Wn[t],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,d=o.pending;if(d!==null){var h=d.next;d.next=c,a.next=h}o.pending=a}Wn=null}return e}function _d(e,t){do{var o=Oe;try{if(Ra(),Lo.current=jo,Oo){for(var a=xe.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Oo=!1}if(Kn=0,Ue=Me=xe=null,vi=!1,wi=0,cl.current=null,o===null||o.return===null){De=1,Ei=t,Oe=null;break}e:{var d=e,h=o.return,y=o,C=t;if(t=He,y.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,D=y,j=D.tag;if((D.mode&1)===0&&(j===0||j===11||j===15)){var O=D.alternate;O?(D.updateQueue=O.updateQueue,D.memoizedState=O.memoizedState,D.lanes=O.lanes):(D.updateQueue=null,D.memoizedState=null)}var F=K1(h);if(F!==null){F.flags&=-257,G1(F,h,y,d,t),F.mode&1&&q1(d,P,t),t=F,C=P;var B=t.updateQueue;if(B===null){var W=new Set;W.add(C),t.updateQueue=W}else B.add(C);break e}else{if((t&1)===0){q1(d,P,t),vl();break e}C=Error(i(426))}}else if(Ee&&y.mode&1){var Ae=K1(h);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),G1(Ae,h,y,d,t),ba(Nr(C,y));break e}}d=C=Nr(C,y),De!==4&&(De=2),Ii===null?Ii=[d]:Ii.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var x=$1(d,C,t);y1(d,x);break e;case 1:y=C;var k=d.type,T=d.stateNode;if((d.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(vn===null||!vn.has(T)))){d.flags|=65536,t&=-t,d.lanes|=t;var U=W1(d,y,t);y1(d,U);break e}}d=d.return}while(d!==null)}Id(o)}catch(K){t=K,Oe===o&&o!==null&&(Oe=o=o.return);continue}break}while(!0)}function Sd(){var e=Bo.current;return Bo.current=jo,e===null?jo:e}function vl(){(De===0||De===3||De===2)&&(De=4),ze===null||(Gn&268435455)===0&&($o&268435455)===0||kn(ze,He)}function Qo(e,t){var o=ae;ae|=2;var a=Sd();(ze!==e||He!==t)&&(Qt=null,Qn(e,t));do try{Vh();break}catch(c){_d(e,c)}while(!0);if(Ra(),ae=o,Bo.current=a,Oe!==null)throw Error(i(261));return ze=null,He=0,De}function Vh(){for(;Oe!==null;)Ed(Oe)}function Hh(){for(;Oe!==null&&!pp();)Ed(Oe)}function Ed(e){var t=Pd(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Id(e):Oe=t,cl.current=null}function Id(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=Oh(o,t,ft),o!==null){Oe=o;return}}else{if(o=Mh(o,t),o!==null){o.flags&=32767,Oe=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);De===0&&(De=5)}function Yn(e,t,o){var a=he,c=wt.transition;try{wt.transition=null,he=1,Bh(e,t,o,a)}finally{wt.transition=c,he=a}return null}function Bh(e,t,o,a){do Or();while(wn!==null);if((ae&6)!==0)throw Error(i(327));o=e.finishedWork;var c=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=o.lanes|o.childLanes;if(Sp(e,d),e===ze&&(Oe=ze=null,He=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||qo||(qo=!0,bd(Xi,function(){return Or(),null})),d=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||d){d=wt.transition,wt.transition=null;var h=he;he=1;var y=ae;ae|=4,cl.current=null,jh(e,o),md(o,e),ch(va),so=!!ya,va=ya=null,e.current=o,Uh(o),hp(),ae=y,he=h,wt.transition=d}else e.current=o;if(qo&&(qo=!1,wn=e,Ko=c),d=e.pendingLanes,d===0&&(vn=null),yp(o.stateNode),nt(e,Re()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)c=t[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Wo)throw Wo=!1,e=fl,fl=null,e;return(Ko&1)!==0&&e.tag!==0&&Or(),d=e.pendingLanes,(d&1)!==0?e===pl?xi++:(xi=0,pl=e):xi=0,hn(),null}function Or(){if(wn!==null){var e=pu(Ko),t=wt.transition,o=he;try{if(wt.transition=null,he=16>e?16:e,wn===null)var a=!1;else{if(e=wn,wn=null,Ko=0,(ae&6)!==0)throw Error(i(331));var c=ae;for(ae|=4,V=e.current;V!==null;){var d=V,h=d.child;if((V.flags&16)!==0){var y=d.deletions;if(y!==null){for(var C=0;C<y.length;C++){var P=y[C];for(V=P;V!==null;){var D=V;switch(D.tag){case 0:case 11:case 15:Si(8,D,d)}var j=D.child;if(j!==null)j.return=D,V=j;else for(;V!==null;){D=V;var O=D.sibling,F=D.return;if(ud(D),D===P){V=null;break}if(O!==null){O.return=F,V=O;break}V=F}}}var B=d.alternate;if(B!==null){var W=B.child;if(W!==null){B.child=null;do{var Ae=W.sibling;W.sibling=null,W=Ae}while(W!==null)}}V=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,V=h;else e:for(;V!==null;){if(d=V,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Si(9,d,d.return)}var x=d.sibling;if(x!==null){x.return=d.return,V=x;break e}V=d.return}}var k=e.current;for(V=k;V!==null;){h=V;var T=h.child;if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,V=T;else e:for(h=k;V!==null;){if(y=V,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Ho(9,y)}}catch(K){be(y,y.return,K)}if(y===h){V=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,V=U;break e}V=y.return}}if(ae=c,hn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(eo,e)}catch{}a=!0}return a}finally{he=o,wt.transition=t}}return!1}function xd(e,t,o){t=Nr(o,t),t=$1(e,t,1),e=gn(e,t,1),t=Ge(),e!==null&&(Qr(e,1,t),nt(e,t))}function be(e,t,o){if(e.tag===3)xd(e,e,o);else for(;t!==null;){if(t.tag===3){xd(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vn===null||!vn.has(a))){e=Nr(o,e),e=W1(t,e,1),t=gn(t,e,1),e=Ge(),t!==null&&(Qr(t,1,e),nt(t,e));break}}t=t.return}}function $h(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&o,ze===e&&(He&o)===o&&(De===4||De===3&&(He&130023424)===He&&500>Re()-dl?Qn(e,0):ul|=o),nt(e,t)}function Td(e,t){t===0&&((e.mode&1)===0?t=1:(t=no,no<<=1,(no&130023424)===0&&(no=4194304)));var o=Ge();e=Kt(e,t),e!==null&&(Qr(e,t,o),nt(e,o))}function Wh(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),Td(e,o)}function qh(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Td(e,o)}var Pd;Pd=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)et=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return et=!1,Lh(e,t,o);et=(e.flags&131072)!==0}else et=!1,Ee&&(t.flags&1048576)!==0&&a1(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Fo(e,t),e=t.pendingProps;var c=_r(t,Be.current);Pr(t,o),c=Ha(null,t,a,e,c,o);var d=Ba();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(a)?(d=!0,_o(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ma(t),c.updater=Uo,t.stateNode=c,c._reactInternals=t,Ja(t,a,e,o),t=Xa(null,t,a,!0,d,o)):(t.tag=0,Ee&&d&&Ia(t),Ke(null,t,c,o),t=t.child),t;case 16:a=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=Gh(a),e=Tt(a,e),c){case 0:t=Za(null,t,a,e,o);break e;case 1:t=ed(null,t,a,e,o);break e;case 11:t=J1(null,t,a,e,o);break e;case 14:t=Q1(null,t,a,Tt(a.type,e),o);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),Za(e,t,a,c,o);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),ed(e,t,a,c,o);case 3:e:{if(td(t),e===null)throw Error(i(387));a=t.pendingProps,d=t.memoizedState,c=d.element,g1(e,t),Ro(t,a,null,o);var h=t.memoizedState;if(a=h.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=Nr(Error(i(423)),t),t=nd(e,t,a,o,c);break e}else if(a!==c){c=Nr(Error(i(424)),t),t=nd(e,t,a,o,c);break e}else for(dt=dn(t.stateNode.containerInfo.firstChild),ut=t,Ee=!0,xt=null,o=h1(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ir(),a===c){t=Jt(e,t,o);break e}Ke(e,t,a,o)}t=t.child}return t;case 5:return w1(t),e===null&&Pa(t),a=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,h=c.children,wa(a,c)?h=null:d!==null&&wa(a,d)&&(t.flags|=32),X1(e,t),Ke(e,t,h,o),t.child;case 6:return e===null&&Pa(t),null;case 13:return rd(e,t,o);case 4:return Da(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xr(t,null,a,o):Ke(e,t,a,o),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),J1(e,t,a,c,o);case 7:return Ke(e,t,t.pendingProps,o),t.child;case 8:return Ke(e,t,t.pendingProps.children,o),t.child;case 12:return Ke(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,d=t.memoizedProps,h=c.value,ye(Po,a._currentValue),a._currentValue=h,d!==null)if(It(d.value,h)){if(d.children===c.children&&!Ze.current){t=Jt(e,t,o);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){h=d.child;for(var C=y.firstContext;C!==null;){if(C.context===a){if(d.tag===1){C=Gt(-1,o&-o),C.tag=2;var P=d.updateQueue;if(P!==null){P=P.shared;var D=P.pending;D===null?C.next=C:(C.next=D.next,D.next=C),P.pending=C}}d.lanes|=o,C=d.alternate,C!==null&&(C.lanes|=o),La(d.return,o,t),y.lanes|=o;break}C=C.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(i(341));h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),La(h,o,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}Ke(e,t,c.children,o),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,Pr(t,o),c=yt(c),a=a(c),t.flags|=1,Ke(e,t,a,o),t.child;case 14:return a=t.type,c=Tt(a,t.pendingProps),c=Tt(a.type,c),Q1(e,t,a,c,o);case 15:return Y1(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),Fo(e,t),t.tag=1,Xe(a)?(e=!0,_o(t)):e=!1,Pr(t,o),H1(t,a,c),Ja(t,a,c,o),Xa(null,t,a,!0,e,o);case 19:return od(e,t,o);case 22:return Z1(e,t,o)}throw Error(i(156,t.tag))};function bd(e,t){return lu(e,t)}function Kh(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,o,a){return new Kh(e,t,o,a)}function wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gh(e){if(typeof e=="function")return wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Y)return 11;if(e===je)return 14}return 2}function _n(e,t){var o=e.alternate;return o===null?(o=Ct(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Yo(e,t,o,a,c,d){var h=2;if(a=e,typeof e=="function")wl(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case de:return Zn(o.children,c,d,t);case _e:h=8,c|=8;break;case at:return e=Ct(12,o,t,c|2),e.elementType=at,e.lanes=d,e;case ve:return e=Ct(13,o,t,c),e.elementType=ve,e.lanes=d,e;case we:return e=Ct(19,o,t,c),e.elementType=we,e.lanes=d,e;case Pe:return Zo(o,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qe:h=10;break e;case ht:h=9;break e;case Y:h=11;break e;case je:h=14;break e;case Ye:h=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Ct(h,o,t,c),t.elementType=e,t.type=a,t.lanes=d,t}function Zn(e,t,o,a){return e=Ct(7,e,a,t),e.lanes=o,e}function Zo(e,t,o,a){return e=Ct(22,e,a,t),e.elementType=Pe,e.lanes=o,e.stateNode={isHidden:!1},e}function Cl(e,t,o){return e=Ct(6,e,null,t),e.lanes=o,e}function kl(e,t,o){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jh(e,t,o,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function _l(e,t,o,a,c,d,h,y,C){return e=new Jh(e,t,o,y,C),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Ct(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(d),e}function Qh(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function Nd(e){if(!e)return pn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Xe(o))return i1(e,o,t)}return t}function Rd(e,t,o,a,c,d,h,y,C){return e=_l(o,a,!0,e,c,d,h,y,C),e.context=Nd(null),o=e.current,a=Ge(),c=Cn(o),d=Gt(a,c),d.callback=t??null,gn(o,d,c),e.current.lanes=c,Qr(e,c,a),nt(e,a),e}function Xo(e,t,o,a){var c=t.current,d=Ge(),h=Cn(c);return o=Nd(o),t.context===null?t.context=o:t.pendingContext=o,t=Gt(d,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=gn(c,t,h),e!==null&&(Nt(e,c,h,d),No(e,c,h)),h}function es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Sl(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function Yh(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function El(e){this._internalRoot=e}ts.prototype.render=El.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Xo(e,t,null,null)},ts.prototype.unmount=El.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Xo(null,e,null,null)}),t[Bt]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var o=0;o<ln.length&&t!==0&&t<ln[o].priority;o++);ln.splice(o,0,e),o===0&&wu(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function Zh(e,t,o,a,c){if(c){if(typeof a=="function"){var d=a;a=function(){var P=es(h);d.call(P)}}var h=Rd(t,a,e,0,null,!1,!1,"",Od);return e._reactRootContainer=h,e[Bt]=h.current,ui(e.nodeType===8?e.parentNode:e),Jn(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var y=a;a=function(){var P=es(C);y.call(P)}}var C=_l(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=C,e[Bt]=C.current,ui(e.nodeType===8?e.parentNode:e),Jn(function(){Xo(t,C,o,a)}),C}function rs(e,t,o,a,c){var d=o._reactRootContainer;if(d){var h=d;if(typeof c=="function"){var y=c;c=function(){var C=es(h);y.call(C)}}Xo(t,h,e,c)}else h=Zh(o,t,e,c,a);return es(h)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=Jr(t.pendingLanes);o!==0&&(Js(t,o|1),nt(t,Re()),(ae&6)===0&&(Lr=Re()+500,hn()))}break;case 13:Jn(function(){var a=Kt(e,1);if(a!==null){var c=Ge();Nt(a,e,1,c)}}),Sl(e,1)}},Qs=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var o=Ge();Nt(t,e,134217728,o)}Sl(e,134217728)}},mu=function(e){if(e.tag===13){var t=Cn(e),o=Kt(e,t);if(o!==null){var a=Ge();Nt(o,e,t,a)}Sl(e,t)}},gu=function(){return he},yu=function(e,t){var o=he;try{return he=e,t()}finally{he=o}},Hs=function(e,t,o){switch(t){case"input":if(Os(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var c=Co(a);if(!c)throw Error(i(90));Vc(a),Os(a,c)}}}break;case"textarea":qc(e,o);break;case"select":t=o.value,t!=null&&ur(e,!!o.multiple,t,!1)}},tu=gl,nu=Jn;var Xh={usingClientEntryPoint:!1,Events:[pi,Cr,Co,Xc,eu,gl]},Ti={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e4={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=su(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{eo=is.inject(e4),Ot=is}catch{}}return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xh,rt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(i(200));return Qh(e,t,null,o)},rt.createRoot=function(e,t){if(!Il(e))throw Error(i(299));var o=!1,a="",c=Ld;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=_l(e,1,!1,null,null,o,!1,a,c),e[Bt]=t.current,ui(e.nodeType===8?e.parentNode:e),new El(t)},rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=su(t),e=e===null?null:e.stateNode,e},rt.flushSync=function(e){return Jn(e)},rt.hydrate=function(e,t,o){if(!ns(t))throw Error(i(200));return rs(null,e,t,!0,o)},rt.hydrateRoot=function(e,t,o){if(!Il(e))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,c=!1,d="",h=Ld;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(h=o.onRecoverableError)),t=Rd(t,null,e,1,o??null,c,!1,d,h),e[Bt]=t.current,ui(e),a)for(e=0;e<a.length;e++)o=a[e],c=o._getVersion,c=c(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,c]:t.mutableSourceEagerHydrationData.push(o,c);return new ts(t)},rt.render=function(e,t,o){if(!ns(t))throw Error(i(200));return rs(null,e,t,!1,o)},rt.unmountComponentAtNode=function(e){if(!ns(e))throw Error(i(40));return e._reactRootContainer?(Jn(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},rt.unstable_batchedUpdates=gl,rt.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!ns(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return rs(e,t,o,!1,a)},rt.version="18.3.1-next-f1338f8080-20240426",rt}var Hd;function nf(){if(Hd)return Pl.exports;Hd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Pl.exports=u4(),Pl.exports}var Bd;function d4(){if(Bd)return os;Bd=1;var r=nf();return os.createRoot=r.createRoot,os.hydrateRoot=r.hydrateRoot,os}var f4=d4();nf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Mi.apply(this,arguments)}var Nn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Nn||(Nn={}));const $d="popstate";function p4(r){r===void 0&&(r={});function n(s,l){let{pathname:u,search:f,hash:m}=s.location;return Ql("",{pathname:u,search:f,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:hs(l)}return m4(n,i,null,r)}function Le(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function rf(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function h4(){return Math.random().toString(36).substr(2,8)}function Wd(r,n){return{usr:r.state,key:r.key,idx:n}}function Ql(r,n,i,s){return i===void 0&&(i=null),Mi({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof n=="string"?zr(n):n,{state:i,key:n&&n.key||s||h4()})}function hs(r){let{pathname:n="/",search:i="",hash:s=""}=r;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function zr(r){let n={};if(r){let i=r.indexOf("#");i>=0&&(n.hash=r.substr(i),r=r.substr(0,i));let s=r.indexOf("?");s>=0&&(n.search=r.substr(s),r=r.substr(0,s)),r&&(n.pathname=r)}return n}function m4(r,n,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,m=Nn.Pop,p=null,g=E();g==null&&(g=0,f.replaceState(Mi({},f.state,{idx:g}),""));function E(){return(f.state||{idx:null}).idx}function _(){m=Nn.Pop;let A=E(),q=A==null?null:A-g;g=A,p&&p({action:m,location:L.location,delta:q})}function S(A,q){m=Nn.Push;let $=Ql(L.location,A,q);g=E()+1;let G=Wd($,g),te=L.createHref($);try{f.pushState(G,"",te)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;l.location.assign(te)}u&&p&&p({action:m,location:L.location,delta:1})}function N(A,q){m=Nn.Replace;let $=Ql(L.location,A,q);g=E();let G=Wd($,g),te=L.createHref($);f.replaceState(G,"",te),u&&p&&p({action:m,location:L.location,delta:0})}function b(A){let q=l.location.origin!=="null"?l.location.origin:l.location.href,$=typeof A=="string"?A:hs(A);return $=$.replace(/ $/,"%20"),Le(q,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,q)}let L={get action(){return m},get location(){return r(l,f)},listen(A){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener($d,_),p=A,()=>{l.removeEventListener($d,_),p=null}},createHref(A){return n(l,A)},createURL:b,encodeLocation(A){let q=b(A);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:N,go(A){return f.go(A)}};return L}var qd;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(qd||(qd={}));function g4(r,n,i){return i===void 0&&(i="/"),y4(r,n,i)}function y4(r,n,i,s){let l=typeof n=="string"?zr(n):n,u=hc(l.pathname||"/",i);if(u==null)return null;let f=of(r);v4(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=N4(u);m=T4(f[p],g)}return m}function of(r,n,i,s){n===void 0&&(n=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Le(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=Rn([s,p.relativePath]),E=i.concat(p);u.children&&u.children.length>0&&(Le(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),of(u.children,n,E,g)),!(u.path==null&&!u.index)&&n.push({path:g,score:I4(g,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))l(u,f);else for(let p of sf(u.path))l(u,f,p)}),n}function sf(r){let n=r.split("/");if(n.length===0)return[];let[i,...s]=n,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=sf(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function v4(r){r.sort((n,i)=>n.score!==i.score?i.score-n.score:x4(n.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const w4=/^:[\w-]+$/,C4=3,k4=2,_4=1,S4=10,E4=-2,Kd=r=>r==="*";function I4(r,n){let i=r.split("/"),s=i.length;return i.some(Kd)&&(s+=E4),n&&(s+=k4),i.filter(l=>!Kd(l)).reduce((l,u)=>l+(w4.test(u)?C4:u===""?_4:S4),s)}function x4(r,n){return r.length===n.length&&r.slice(0,-1).every((s,l)=>s===n[l])?r[r.length-1]-n[n.length-1]:0}function T4(r,n,i){let{routesMeta:s}=r,l={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?n:n.slice(u.length)||"/",_=P4({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),S=p.route;if(!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Rn([u,_.pathname]),pathnameBase:O4(Rn([u,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(u=Rn([u,_.pathnameBase]))}return f}function P4(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=b4(r.path,r.caseSensitive,r.end),l=n.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((g,E,_)=>{let{paramName:S,isOptional:N}=E;if(S==="*"){let L=m[_]||"";f=u.slice(0,u.length-L.length).replace(/(.)\/+$/,"$1")}const b=m[_];return N&&!b?g[S]=void 0:g[S]=(b||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:r}}function b4(r,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),rf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),s]}function N4(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return rf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),r}}function hc(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function R4(r,n){n===void 0&&(n="/");let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?zr(r):r;return{pathname:i?i.startsWith("/")?i:A4(i,n):n,search:M4(s),hash:D4(l)}}function A4(r,n){let i=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Rl(r,n,i,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L4(r){return r.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function mc(r,n){let i=L4(r);return n?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function gc(r,n,i,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=zr(r):(l=Mi({},r),Le(!l.pathname||!l.pathname.includes("?"),Rl("?","pathname","search",l)),Le(!l.pathname||!l.pathname.includes("#"),Rl("#","pathname","hash",l)),Le(!l.search||!l.search.includes("#"),Rl("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,m;if(f==null)m=i;else{let _=n.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),_-=1;l.pathname=S.join("/")}m=_>=0?n[_]:"/"}let p=R4(l,m),g=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}const Rn=r=>r.join("/").replace(/\/\/+/g,"/"),O4=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),M4=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,D4=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function j4(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const af=["post","put","patch","delete"];new Set(af);const U4=["get",...af];new Set(U4);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Di.apply(this,arguments)}const yc=R.createContext(null),z4=R.createContext(null),On=R.createContext(null),xs=R.createContext(null),Mn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),lf=R.createContext(null);function F4(r,n){let{relative:i}=n===void 0?{}:n;Fr()||Le(!1);let{basename:s,navigator:l}=R.useContext(On),{hash:u,pathname:f,search:m}=uf(r,{relative:i}),p=f;return s!=="/"&&(p=f==="/"?s:Rn([s,f])),l.createHref({pathname:p,search:m,hash:u})}function Fr(){return R.useContext(xs)!=null}function Fi(){return Fr()||Le(!1),R.useContext(xs).location}function cf(r){R.useContext(On).static||R.useLayoutEffect(r)}function Vi(){let{isDataRoute:r}=R.useContext(Mn);return r?X4():V4()}function V4(){Fr()||Le(!1);let r=R.useContext(yc),{basename:n,future:i,navigator:s}=R.useContext(On),{matches:l}=R.useContext(Mn),{pathname:u}=Fi(),f=JSON.stringify(mc(l,i.v7_relativeSplatPath)),m=R.useRef(!1);return cf(()=>{m.current=!0}),R.useCallback(function(g,E){if(E===void 0&&(E={}),!m.current)return;if(typeof g=="number"){s.go(g);return}let _=gc(g,JSON.parse(f),u,E.relative==="path");r==null&&n!=="/"&&(_.pathname=_.pathname==="/"?n:Rn([n,_.pathname])),(E.replace?s.replace:s.push)(_,E.state,E)},[n,s,f,u,r])}function uf(r,n){let{relative:i}=n===void 0?{}:n,{future:s}=R.useContext(On),{matches:l}=R.useContext(Mn),{pathname:u}=Fi(),f=JSON.stringify(mc(l,s.v7_relativeSplatPath));return R.useMemo(()=>gc(r,JSON.parse(f),u,i==="path"),[r,f,u,i])}function H4(r,n){return B4(r,n)}function B4(r,n,i,s){Fr()||Le(!1);let{navigator:l}=R.useContext(On),{matches:u}=R.useContext(Mn),f=u[u.length-1],m=f?f.params:{};f&&f.pathname;let p=f?f.pathnameBase:"/";f&&f.route;let g=Fi(),E;if(n){var _;let A=typeof n=="string"?zr(n):n;p==="/"||(_=A.pathname)!=null&&_.startsWith(p)||Le(!1),E=A}else E=g;let S=E.pathname||"/",N=S;if(p!=="/"){let A=p.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(A.length).join("/")}let b=g4(r,{pathname:N}),L=G4(b&&b.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:Rn([p,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:Rn([p,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),u,i,s);return n&&L?R.createElement(xs.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Nn.Pop}},L):L}function $4(){let r=Z4(),n=j4(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},n),i?R.createElement("pre",{style:l},i):null,null)}const W4=R.createElement($4,null);class q4 extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?R.createElement(Mn.Provider,{value:this.props.routeContext},R.createElement(lf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K4(r){let{routeContext:n,match:i,children:s}=r,l=R.useContext(yc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),R.createElement(Mn.Provider,{value:n},s)}function G4(r,n,i,s){var l;if(n===void 0&&(n=[]),i===void 0&&(i=null),s===void 0&&(s=null),r==null){var u;if(!i)return null;if(i.errors)r=i.matches;else if((u=s)!=null&&u.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,m=(l=i)==null?void 0:l.errors;if(m!=null){let E=f.findIndex(_=>_.route.id&&m?.[_.route.id]!==void 0);E>=0||Le(!1),f=f.slice(0,Math.min(f.length,E+1))}let p=!1,g=-1;if(i&&s&&s.v7_partialHydration)for(let E=0;E<f.length;E++){let _=f[E];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=E),_.route.id){let{loaderData:S,errors:N}=i,b=_.route.loader&&S[_.route.id]===void 0&&(!N||N[_.route.id]===void 0);if(_.route.lazy||b){p=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((E,_,S)=>{let N,b=!1,L=null,A=null;i&&(N=m&&_.route.id?m[_.route.id]:void 0,L=_.route.errorElement||W4,p&&(g<0&&S===0?(e3("route-fallback"),b=!0,A=null):g===S&&(b=!0,A=_.route.hydrateFallbackElement||null)));let q=n.concat(f.slice(0,S+1)),$=()=>{let G;return N?G=L:b?G=A:_.route.Component?G=R.createElement(_.route.Component,null):_.route.element?G=_.route.element:G=E,R.createElement(K4,{match:_,routeContext:{outlet:E,matches:q,isDataRoute:i!=null},children:G})};return i&&(_.route.ErrorBoundary||_.route.errorElement||S===0)?R.createElement(q4,{location:i.location,revalidation:i.revalidation,component:L,error:N,children:$(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):$()},null)}var df=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(df||{}),ff=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(ff||{});function J4(r){let n=R.useContext(yc);return n||Le(!1),n}function Q4(r){let n=R.useContext(z4);return n||Le(!1),n}function Y4(r){let n=R.useContext(Mn);return n||Le(!1),n}function pf(r){let n=Y4(),i=n.matches[n.matches.length-1];return i.route.id||Le(!1),i.route.id}function Z4(){var r;let n=R.useContext(lf),i=Q4(),s=pf();return n!==void 0?n:(r=i.errors)==null?void 0:r[s]}function X4(){let{router:r}=J4(df.UseNavigateStable),n=pf(ff.UseNavigateStable),i=R.useRef(!1);return cf(()=>{i.current=!0}),R.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Di({fromRouteId:n},u)))},[r,n])}const Gd={};function e3(r,n,i){Gd[r]||(Gd[r]=!0)}function t3(r,n){r?.v7_startTransition,r?.v7_relativeSplatPath}function Yl(r){let{to:n,replace:i,state:s,relative:l}=r;Fr()||Le(!1);let{future:u,static:f}=R.useContext(On),{matches:m}=R.useContext(Mn),{pathname:p}=Fi(),g=Vi(),E=gc(n,mc(m,u.v7_relativeSplatPath),p,l==="path"),_=JSON.stringify(E);return R.useEffect(()=>g(JSON.parse(_),{replace:i,state:s,relative:l}),[g,_,l,i,s]),null}function In(r){Le(!1)}function n3(r){let{basename:n="/",children:i=null,location:s,navigationType:l=Nn.Pop,navigator:u,static:f=!1,future:m}=r;Fr()&&Le(!1);let p=n.replace(/^\/*/,"/"),g=R.useMemo(()=>({basename:p,navigator:u,static:f,future:Di({v7_relativeSplatPath:!1},m)}),[p,m,u,f]);typeof s=="string"&&(s=zr(s));let{pathname:E="/",search:_="",hash:S="",state:N=null,key:b="default"}=s,L=R.useMemo(()=>{let A=hc(E,p);return A==null?null:{location:{pathname:A,search:_,hash:S,state:N,key:b},navigationType:l}},[p,E,_,S,N,b,l]);return L==null?null:R.createElement(On.Provider,{value:g},R.createElement(xs.Provider,{children:i,value:L}))}function r3(r){let{children:n,location:i}=r;return H4(Zl(n),i)}new Promise(()=>{});function Zl(r,n){n===void 0&&(n=[]);let i=[];return R.Children.forEach(r,(s,l)=>{if(!R.isValidElement(s))return;let u=[...n,l];if(s.type===R.Fragment){i.push.apply(i,Zl(s.props.children,u));return}s.type!==In&&Le(!1),!s.props.index||!s.props.children||Le(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Zl(s.props.children,u)),i.push(f)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Xl.apply(this,arguments)}function i3(r,n){if(r==null)return{};var i={},s=Object.keys(r),l,u;for(u=0;u<s.length;u++)l=s[u],!(n.indexOf(l)>=0)&&(i[l]=r[l]);return i}function o3(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s3(r,n){return r.button===0&&(!n||n==="_self")&&!o3(r)}const a3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],l3="6";try{window.__reactRouterVersion=l3}catch{}const c3="startTransition",Jd=a4[c3];function u3(r){let{basename:n,children:i,future:s,window:l}=r,u=R.useRef();u.current==null&&(u.current=p4({window:l,v5Compat:!0}));let f=u.current,[m,p]=R.useState({action:f.action,location:f.location}),{v7_startTransition:g}=s||{},E=R.useCallback(_=>{g&&Jd?Jd(()=>p(_)):p(_)},[p,g]);return R.useLayoutEffect(()=>f.listen(E),[f,E]),R.useEffect(()=>t3(s),[s]),R.createElement(n3,{basename:n,children:i,location:m.location,navigationType:m.action,navigator:f,future:s})}const d3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xn=R.forwardRef(function(n,i){let{onClick:s,relative:l,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:E,viewTransition:_}=n,S=i3(n,a3),{basename:N}=R.useContext(On),b,L=!1;if(typeof g=="string"&&f3.test(g)&&(b=g,d3))try{let G=new URL(window.location.href),te=g.startsWith("//")?new URL(G.protocol+g):new URL(g),se=hc(te.pathname,N);te.origin===G.origin&&se!=null?g=se+te.search+te.hash:L=!0}catch{}let A=F4(g,{relative:l}),q=p3(g,{replace:f,state:m,target:p,preventScrollReset:E,relative:l,viewTransition:_});function $(G){s&&s(G),G.defaultPrevented||q(G)}return R.createElement("a",Xl({},S,{href:b||A,onClick:L||u?s:$,ref:i,target:p}))});var Qd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Yd;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Yd||(Yd={}));function p3(r,n){let{target:i,replace:s,state:l,preventScrollReset:u,relative:f,viewTransition:m}=n===void 0?{}:n,p=Vi(),g=Fi(),E=uf(r,{relative:f});return R.useCallback(_=>{if(s3(_,i)){_.preventDefault();let S=s!==void 0?s:hs(g)===hs(E);p(r,{replace:S,state:l,preventScrollReset:u,relative:f,viewTransition:m})}},[g,p,E,s,l,i,r,u,f,m])}const hf=R.createContext(),h3=(r,n)=>{switch(n.type){case"ADD_TO_CART":return r.find(s=>s.id===n.product.id)?r.map(s=>s.id===n.product.id?{...s,quantity:s.quantity+1}:s):[...r,{...n.product,quantity:1}];case"INCREMENT":return r.map(i=>i.id===n.id?{...i,quantity:i.quantity+1}:i);case"DECREMENT":return r.map(i=>i.id===n.id?{...i,quantity:i.quantity-1}:i).filter(i=>i.quantity>0);case"REMOVE_FROM_CART":return r.filter(i=>i.id!==n.id);case"CLEAR_CART":return[];default:return r}},m3=({children:r})=>{const n=JSON.parse(localStorage.getItem("cart"))||[],[i,s]=R.useReducer(h3,n);R.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(i))},[i]);const l=g=>s({type:"ADD_TO_CART",product:g}),u=g=>s({type:"REMOVE_FROM_CART",id:g}),f=()=>s({type:"CLEAR_CART"}),m=g=>s({type:"INCREMENT",id:g}),p=g=>s({type:"DECREMENT",id:g});return w.jsx(hf.Provider,{value:{cart:i,addToCart:l,removeFromCart:u,clearCart:f,increment:m,decrement:p},children:r})},vc=()=>R.useContext(hf),g3=()=>{};var Zd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=function(r){const n=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?n[i++]=l:l<2048?(n[i++]=l>>6|192,n[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),n[i++]=l>>18|240,n[i++]=l>>12&63|128,n[i++]=l>>6&63|128,n[i++]=l&63|128):(n[i++]=l>>12|224,n[i++]=l>>6&63|128,n[i++]=l&63|128)}return n},y3=function(r){const n=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)n[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[i++];n[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[i++],f=r[i++],m=r[i++],p=((l&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;n[s++]=String.fromCharCode(55296+(p>>10)),n[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[i++],f=r[i++];n[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return n.join("")},gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,m=f?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,E=u>>2,_=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,N=g&63;p||(N=64,f||(S=64)),s.push(i[E],i[_],i[S],i[N])}return s.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(mf(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):y3(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const g=l<r.length?i[r.charAt(l)]:64;++l;const _=l<r.length?i[r.charAt(l)]:64;if(++l,u==null||m==null||g==null||_==null)throw new v3;const S=u<<2|m>>4;if(s.push(S),g!==64){const N=m<<4&240|g>>2;if(s.push(N),_!==64){const b=g<<6&192|_;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class v3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w3=function(r){const n=mf(r);return gf.encodeByteArray(n,!0)},yf=function(r){return w3(r).replace(/\./g,"")},vf=function(r){try{return gf.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3=()=>C3().__FIREBASE_DEFAULTS__,_3=()=>{if(typeof process>"u"||typeof Zd>"u")return;const r=Zd.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},S3=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&vf(r[1]);return n&&JSON.parse(n)},wc=()=>{try{return g3()||k3()||_3()||S3()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},E3=r=>wc()?.emulatorHosts?.[r],wf=()=>wc()?.config,Cf=r=>wc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,i)=>{this.resolve=n,this.reject=i})}wrapCallback(n){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(i):n(i,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function x3(r){return(await fetch(r,{credentials:"include"})).ok}const Ai={};function T3(){const r={prod:[],emulator:[]};for(const n of Object.keys(Ai))Ai[n]?r.emulator.push(n):r.prod.push(n);return r}function P3(r){let n=document.getElementById(r),i=!1;return n||(n=document.createElement("div"),n.setAttribute("id",r),i=!0),{created:i,element:n}}let Xd=!1;function b3(r,n){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||Ai[r]===n||Ai[r]||Xd)return;Ai[r]=n;function i(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=T3().prod.length>0;function f(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Xd=!0,f()},S}function E(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function _(){const S=P3(s),N=i("text"),b=document.getElementById(N)||document.createElement("span"),L=i("learnmore"),A=document.getElementById(L)||document.createElement("a"),q=i("preprendIcon"),$=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const G=S.element;m(G),E(A,L);const te=g();p($,q),G.append($,b,A,te),document.body.appendChild(G)}u?(b.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function R3(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function A3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L3(){const r=Je();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _f(){try{return typeof indexedDB=="object"}catch{return!1}}function Sf(){return new Promise((r,n)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{n(l.error?.message||"")}}catch(i){n(i)}})}function O3(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3="FirebaseError";class Ht extends Error{constructor(n,i,s){super(i),this.code=n,this.customData=s,this.name=M3,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(n,i,s){this.service=n,this.serviceName=i,this.errors=s}create(n,...i){const s=i[0]||{},l=`${this.service}/${n}`,u=this.errors[n],f=u?D3(u,s):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new Ht(l,m,s)}}function D3(r,n){return r.replace(j3,(i,s)=>{const l=n[s];return l!=null?String(l):`<${s}?>`})}const j3=/\{\$([^}]+)}/g;function U3(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function rr(r,n){if(r===n)return!0;const i=Object.keys(r),s=Object.keys(n);for(const l of i){if(!s.includes(l))return!1;const u=r[l],f=n[l];if(e0(u)&&e0(f)){if(!rr(u,f))return!1}else if(u!==f)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function e0(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(r){const n=[];for(const[i,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return n.length?"&"+n.join("&"):""}function Ni(r){const n={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");n[decodeURIComponent(l)]=decodeURIComponent(u)}}),n}function Ri(r){const n=r.indexOf("?");if(!n)return"";const i=r.indexOf("#",n);return r.substring(n,i>0?i:void 0)}function z3(r,n){const i=new F3(r,n);return i.subscribe.bind(i)}class F3{constructor(n,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{n(this)}).catch(s=>{this.error(s)})}next(n){this.forEachObserver(i=>{i.next(n)})}error(n){this.forEachObserver(i=>{i.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,i,s){let l;if(n===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");V3(n,["next","error","complete"])?l=n:l={next:n,error:i,complete:s},l.next===void 0&&(l.next=Al),l.error===void 0&&(l.error=Al),l.complete===void 0&&(l.complete=Al);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,n)}sendOne(n,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{i(this.observers[n])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V3(r,n){if(typeof r!="object"||r===null)return!1;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}function Al(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3=1e3,B3=2,$3=14400*1e3,W3=.5;function t0(r,n=H3,i=B3){const s=n*Math.pow(i,r),l=Math.round(W3*s*(Math.random()-.5)*2);return Math.min($3,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(r){return r&&r._delegate?r._delegate:r}class Vt{constructor(n,i,s){this.name=n,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(n,i){this.name=n,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const i=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(i)){const s=new I3;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(n){const i=this.normalizeInstanceIdentifier(n?.identifier),s=n?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(G3(n))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(n=er){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...n.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=er){return this.instances.has(n)}getOptions(n=er){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:i={}}=n,s=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(l)}return l}onInit(n,i){const s=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(s)??new Set;l.add(n),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&n(u,s),()=>{l.delete(n)}}invokeOnInitCallbacks(n,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(n,i)}catch{}}getOrInitializeService({instanceIdentifier:n,options:i={}}){let s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:K3(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null}normalizeInstanceIdentifier(n=er){return this.component?this.component.multipleInstances?n:er:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K3(r){return r===er?void 0:r}function G3(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const i=this.getProvider(n.name);if(i.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);i.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const i=new q3(n,this);return this.providers.set(n,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(me||(me={}));const Q3={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Y3=me.INFO,Z3={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},X3=(r,n,...i)=>{if(n<r.logLevel)return;const s=new Date().toISOString(),l=Z3[n];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Cc{constructor(n){this.name=n,this._logLevel=Y3,this._logHandler=X3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in me))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Q3[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...n),this._logHandler(this,me.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...n),this._logHandler(this,me.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,me.INFO,...n),this._logHandler(this,me.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,me.WARN,...n),this._logHandler(this,me.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...n),this._logHandler(this,me.ERROR,...n)}}const e6=(r,n)=>n.some(i=>r instanceof i);let n0,r0;function t6(){return n0||(n0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n6(){return r0||(r0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ef=new WeakMap,ec=new WeakMap,If=new WeakMap,Ll=new WeakMap,kc=new WeakMap;function r6(r){const n=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{i(An(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return n.then(i=>{i instanceof IDBCursor&&Ef.set(i,r)}).catch(()=>{}),kc.set(n,r),n}function i6(r){if(ec.has(r))return;const n=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{i(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});ec.set(r,n)}let tc={get(r,n,i){if(r instanceof IDBTransaction){if(n==="done")return ec.get(r);if(n==="objectStoreNames")return r.objectStoreNames||If.get(r);if(n==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return An(r[n])},set(r,n,i){return r[n]=i,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function o6(r){tc=r(tc)}function s6(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...i){const s=r.call(Ol(this),n,...i);return If.set(s,n.sort?n.sort():[n]),An(s)}:n6().includes(r)?function(...n){return r.apply(Ol(this),n),An(Ef.get(this))}:function(...n){return An(r.apply(Ol(this),n))}}function a6(r){return typeof r=="function"?s6(r):(r instanceof IDBTransaction&&i6(r),e6(r,t6())?new Proxy(r,tc):r)}function An(r){if(r instanceof IDBRequest)return r6(r);if(Ll.has(r))return Ll.get(r);const n=a6(r);return n!==r&&(Ll.set(r,n),kc.set(n,r)),n}const Ol=r=>kc.get(r);function xf(r,n,{blocked:i,upgrade:s,blocking:l,terminated:u}={}){const f=indexedDB.open(r,n),m=An(f);return s&&f.addEventListener("upgradeneeded",p=>{s(An(f.result),p.oldVersion,p.newVersion,An(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const l6=["get","getKey","getAll","getAllKeys","count"],c6=["put","add","delete","clear"],Ml=new Map;function i0(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(Ml.get(n))return Ml.get(n);const i=n.replace(/FromIndex$/,""),s=n!==i,l=c6.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||l6.includes(i)))return;const u=async function(f,...m){const p=this.transaction(f,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[i](...m),l&&p.done]))[0]};return Ml.set(n,u),u}o6(r=>({...r,get:(n,i,s)=>i0(n,i)||r.get(n,i,s),has:(n,i)=>!!i0(n,i)||r.has(n,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(d6(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function d6(r){return r.getComponent()?.type==="VERSION"}const nc="@firebase/app",o0="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Cc("@firebase/app"),f6="@firebase/app-compat",p6="@firebase/analytics-compat",h6="@firebase/analytics",m6="@firebase/app-check-compat",g6="@firebase/app-check",y6="@firebase/auth",v6="@firebase/auth-compat",w6="@firebase/database",C6="@firebase/data-connect",k6="@firebase/database-compat",_6="@firebase/functions",S6="@firebase/functions-compat",E6="@firebase/installations",I6="@firebase/installations-compat",x6="@firebase/messaging",T6="@firebase/messaging-compat",P6="@firebase/performance",b6="@firebase/performance-compat",N6="@firebase/remote-config",R6="@firebase/remote-config-compat",A6="@firebase/storage",L6="@firebase/storage-compat",O6="@firebase/firestore",M6="@firebase/ai",D6="@firebase/firestore-compat",j6="firebase",U6="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",z6={[nc]:"fire-core",[f6]:"fire-core-compat",[h6]:"fire-analytics",[p6]:"fire-analytics-compat",[g6]:"fire-app-check",[m6]:"fire-app-check-compat",[y6]:"fire-auth",[v6]:"fire-auth-compat",[w6]:"fire-rtdb",[C6]:"fire-data-connect",[k6]:"fire-rtdb-compat",[_6]:"fire-fn",[S6]:"fire-fn-compat",[E6]:"fire-iid",[I6]:"fire-iid-compat",[x6]:"fire-fcm",[T6]:"fire-fcm-compat",[P6]:"fire-perf",[b6]:"fire-perf-compat",[N6]:"fire-rc",[R6]:"fire-rc-compat",[A6]:"fire-gcs",[L6]:"fire-gcs-compat",[O6]:"fire-fst",[D6]:"fire-fst-compat",[M6]:"fire-vertex","fire-js":"fire-js",[j6]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,F6=new Map,ic=new Map;function s0(r,n){try{r.container.addComponent(n)}catch(i){tn.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,i)}}function nn(r){const n=r.name;if(ic.has(n))return tn.debug(`There were multiple attempts to register component ${n}.`),!1;ic.set(n,r);for(const i of ms.values())s0(i,r);for(const i of F6.values())s0(i,r);return!0}function Vr(r,n){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(n)}function kt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new cr("app","Firebase",V6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(n,i,s){this._isDeleted=!1,this._options={...n},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=U6;function Tf(r,n={}){let i=r;typeof n!="object"&&(n={name:n});const s={name:rc,automaticDataCollectionEnabled:!0,...n},l=s.name;if(typeof l!="string"||!l)throw Ln.create("bad-app-name",{appName:String(l)});if(i||(i=wf()),!i)throw Ln.create("no-options");const u=ms.get(l);if(u){if(rr(i,u.options)&&rr(s,u.config))return u;throw Ln.create("duplicate-app",{appName:l})}const f=new J3(l);for(const p of ic.values())f.addComponent(p);const m=new H6(i,s,f);return ms.set(l,m),m}function Pf(r=rc){const n=ms.get(r);if(!n&&r===rc&&wf())return Tf();if(!n)throw Ln.create("no-app",{appName:r});return n}function zt(r,n,i){let s=z6[r]??r;i&&(s+=`-${i}`);const l=s.match(/\s|\//),u=n.match(/\s|\//);if(l||u){const f=[`Unable to register library "${s}" with version "${n}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${n}" contains illegal characters (whitespace or "/")`),tn.warn(f.join(" "));return}nn(new Vt(`${s}-version`,()=>({library:s,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6="firebase-heartbeat-database",$6=1,ji="firebase-heartbeat-store";let Dl=null;function bf(){return Dl||(Dl=xf(B6,$6,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(ji)}catch(i){console.warn(i)}}}}).catch(r=>{throw Ln.create("idb-open",{originalErrorMessage:r.message})})),Dl}async function W6(r){try{const i=(await bf()).transaction(ji),s=await i.objectStore(ji).get(Nf(r));return await i.done,s}catch(n){if(n instanceof Ht)tn.warn(n.message);else{const i=Ln.create("idb-get",{originalErrorMessage:n?.message});tn.warn(i.message)}}}async function a0(r,n){try{const s=(await bf()).transaction(ji,"readwrite");await s.objectStore(ji).put(n,Nf(r)),await s.done}catch(i){if(i instanceof Ht)tn.warn(i.message);else{const s=Ln.create("idb-set",{originalErrorMessage:i?.message});tn.warn(s.message)}}}function Nf(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q6=1024,K6=30;class G6{constructor(n){this.container=n,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Q6(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=l0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>K6){const l=Y6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){tn.warn(n)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=l0(),{heartbeatsToSend:i,unsentEntries:s}=J6(this._heartbeatsCache.heartbeats),l=yf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return tn.warn(n),""}}}function l0(){return new Date().toISOString().substring(0,10)}function J6(r,n=q6){const i=[];let s=r.slice();for(const l of r){const u=i.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),c0(i)>n){u.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),c0(i)>n){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Q6{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _f()?Sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await W6(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const s=await this.read();return a0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const s=await this.read();return a0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...n.heartbeats]})}else return}}function c0(r){return yf(JSON.stringify({version:2,heartbeats:r})).length}function Y6(r){if(r.length===0)return-1;let n=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,n=s);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z6(r){nn(new Vt("platform-logger",n=>new u6(n),"PRIVATE")),nn(new Vt("heartbeat",n=>new G6(n),"PRIVATE")),zt(nc,o0,r),zt(nc,o0,"esm2020"),zt("fire-js","")}Z6("");var X6="firebase",e5="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(X6,e5,"app");const Rf="@firebase/installations",_c="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=1e4,Lf=`w:${_c}`,Of="FIS_v2",t5="https://firebaseinstallations.googleapis.com/v1",n5=3600*1e3,r5="installations",i5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new cr(r5,i5,o5);function Mf(r){return r instanceof Ht&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df({projectId:r}){return`${t5}/projects/${r}/installations`}function jf(r){return{token:r.token,requestStatus:2,expiresIn:a5(r.expiresIn),creationTime:Date.now()}}async function Uf(r,n){const s=(await n.json()).error;return ir.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zf({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function s5(r,{refreshToken:n}){const i=zf(r);return i.append("Authorization",l5(n)),i}async function Ff(r){const n=await r();return n.status>=500&&n.status<600?r():n}function a5(r){return Number(r.replace("s","000"))}function l5(r){return`${Of} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c5({appConfig:r,heartbeatServiceProvider:n},{fid:i}){const s=Df(r),l=zf(r),u=n.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const f={fid:i,authVersion:Of,appId:r.appId,sdkVersion:Lf},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await Ff(()=>fetch(s,m));if(p.ok){const g=await p.json();return{fid:g.fid||i,registrationStatus:2,refreshToken:g.refreshToken,authToken:jf(g.authToken)}}else throw await Uf("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(r){return new Promise(n=>{setTimeout(n,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u5(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5=/^[cdef][\w-]{21}$/,oc="";function f5(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=p5(r);return d5.test(i)?i:oc}catch{return oc}}function p5(r){return u5(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;function Bf(r,n){const i=Ps(r);$f(i,n),h5(i,n)}function $f(r,n){const i=Hf.get(r);if(i)for(const s of i)s(n)}function h5(r,n){const i=m5();i&&i.postMessage({key:r,fid:n}),g5()}let tr=null;function m5(){return!tr&&"BroadcastChannel"in self&&(tr=new BroadcastChannel("[Firebase] FID Change"),tr.onmessage=r=>{$f(r.data.key,r.data.fid)}),tr}function g5(){Hf.size===0&&tr&&(tr.close(),tr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y5="firebase-installations-database",v5=1,or="firebase-installations-store";let jl=null;function Sc(){return jl||(jl=xf(y5,v5,{upgrade:(r,n)=>{switch(n){case 0:r.createObjectStore(or)}}})),jl}async function gs(r,n){const i=Ps(r),l=(await Sc()).transaction(or,"readwrite"),u=l.objectStore(or),f=await u.get(i);return await u.put(n,i),await l.done,(!f||f.fid!==n.fid)&&Bf(r,n.fid),n}async function Wf(r){const n=Ps(r),s=(await Sc()).transaction(or,"readwrite");await s.objectStore(or).delete(n),await s.done}async function bs(r,n){const i=Ps(r),l=(await Sc()).transaction(or,"readwrite"),u=l.objectStore(or),f=await u.get(i),m=n(f);return m===void 0?await u.delete(i):await u.put(m,i),await l.done,m&&(!f||f.fid!==m.fid)&&Bf(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(r){let n;const i=await bs(r.appConfig,s=>{const l=w5(s),u=C5(r,l);return n=u.registrationPromise,u.installationEntry});return i.fid===oc?{installationEntry:await n}:{installationEntry:i,registrationPromise:n}}function w5(r){const n=r||{fid:f5(),registrationStatus:0};return qf(n)}function C5(r,n){if(n.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ir.create("app-offline"));return{installationEntry:n,registrationPromise:l}}const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},s=k5(r,i);return{installationEntry:i,registrationPromise:s}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:_5(r)}:{installationEntry:n}}async function k5(r,n){try{const i=await c5(r,n);return gs(r.appConfig,i)}catch(i){throw Mf(i)&&i.customData.serverCode===409?await Wf(r.appConfig):await gs(r.appConfig,{fid:n.fid,registrationStatus:0}),i}}async function _5(r){let n=await u0(r.appConfig);for(;n.registrationStatus===1;)await Vf(100),n=await u0(r.appConfig);if(n.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await Ec(r);return s||i}return n}function u0(r){return bs(r,n=>{if(!n)throw ir.create("installation-not-found");return qf(n)})}function qf(r){return S5(r)?{fid:r.fid,registrationStatus:0}:r}function S5(r){return r.registrationStatus===1&&r.registrationTime+Af<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E5({appConfig:r,heartbeatServiceProvider:n},i){const s=I5(r,i),l=s5(r,i),u=n.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const f={installation:{sdkVersion:Lf,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await Ff(()=>fetch(s,m));if(p.ok){const g=await p.json();return jf(g)}else throw await Uf("Generate Auth Token",p)}function I5(r,{fid:n}){return`${Df(r)}/${n}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(r,n=!1){let i;const s=await bs(r.appConfig,u=>{if(!Kf(u))throw ir.create("not-registered");const f=u.authToken;if(!n&&P5(f))return u;if(f.requestStatus===1)return i=x5(r,n),u;{if(!navigator.onLine)throw ir.create("app-offline");const m=N5(u);return i=T5(r,m),m}});return i?await i:s.authToken}async function x5(r,n){let i=await d0(r.appConfig);for(;i.authToken.requestStatus===1;)await Vf(100),i=await d0(r.appConfig);const s=i.authToken;return s.requestStatus===0?Ic(r,n):s}function d0(r){return bs(r,n=>{if(!Kf(n))throw ir.create("not-registered");const i=n.authToken;return R5(i)?{...n,authToken:{requestStatus:0}}:n})}async function T5(r,n){try{const i=await E5(r,n),s={...n,authToken:i};return await gs(r.appConfig,s),i}catch(i){if(Mf(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Wf(r.appConfig);else{const s={...n,authToken:{requestStatus:0}};await gs(r.appConfig,s)}throw i}}function Kf(r){return r!==void 0&&r.registrationStatus===2}function P5(r){return r.requestStatus===2&&!b5(r)}function b5(r){const n=Date.now();return n<r.creationTime||r.creationTime+r.expiresIn<n+n5}function N5(r){const n={requestStatus:1,requestTime:Date.now()};return{...r,authToken:n}}function R5(r){return r.requestStatus===1&&r.requestTime+Af<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A5(r){const n=r,{installationEntry:i,registrationPromise:s}=await Ec(n);return s?s.catch(console.error):Ic(n).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L5(r,n=!1){const i=r;return await O5(i),(await Ic(i,n)).token}async function O5(r){const{registrationPromise:n}=await Ec(r);n&&await n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M5(r){if(!r||!r.options)throw Ul("App Configuration");if(!r.name)throw Ul("App Name");const n=["projectId","apiKey","appId"];for(const i of n)if(!r.options[i])throw Ul(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ul(r){return ir.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="installations",D5="installations-internal",j5=r=>{const n=r.getProvider("app").getImmediate(),i=M5(n),s=Vr(n,"heartbeat");return{app:n,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},U5=r=>{const n=r.getProvider("app").getImmediate(),i=Vr(n,Gf).getImmediate();return{getId:()=>A5(i),getToken:l=>L5(i,l)}};function z5(){nn(new Vt(Gf,j5,"PUBLIC")),nn(new Vt(D5,U5,"PRIVATE"))}z5();zt(Rf,_c);zt(Rf,_c,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="analytics",F5="firebase_id",V5="origin",H5=60*1e3,B5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new cr("analytics","Analytics",$5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W5(r){if(!r.startsWith(xc)){const n=pt.create("invalid-gtag-resource",{gtagURL:r});return ot.warn(n.message),""}return r}function Jf(r){return Promise.all(r.map(n=>n.catch(i=>i)))}function q5(r,n){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,n)),i}function K5(r,n){const i=q5("firebase-js-sdk-policy",{createScriptURL:W5}),s=document.createElement("script"),l=`${xc}?l=${r}&id=${n}`;s.src=i?i?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function G5(r){let n=[];return Array.isArray(window[r])?n=window[r]:window[r]=n,n}async function J5(r,n,i,s,l,u){const f=s[l];try{if(f)await n[f];else{const p=(await Jf(i)).find(g=>g.measurementId===l);p&&await n[p.appId]}}catch(m){ot.error(m)}r("config",l,u)}async function Q5(r,n,i,s,l){try{let u=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const m=await Jf(i);for(const p of f){const g=m.find(_=>_.measurementId===p),E=g&&n[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(n)),await Promise.all(u),r("event",s,l||{})}catch(u){ot.error(u)}}function Y5(r,n,i,s){async function l(u,...f){try{if(u==="event"){const[m,p]=f;await Q5(r,n,i,m,p)}else if(u==="config"){const[m,p]=f;await J5(r,n,i,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,g]=f;r("get",m,p,g)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){ot.error(m)}}return l}function Z5(r,n,i,s,l){let u=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Y5(u,r,n,i),{gtagCore:u,wrappedGtag:window[l]}}function X5(r){const n=window.document.getElementsByTagName("script");for(const i of Object.values(n))if(i.src&&i.src.includes(xc)&&i.src.includes(r))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=30,tm=1e3;class nm{constructor(n={},i=tm){this.throttleMetadata=n,this.intervalMillis=i}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,i){this.throttleMetadata[n]=i}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const Qf=new nm;function rm(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function im(r){const{appId:n,apiKey:i}=r,s={method:"GET",headers:rm(i)},l=B5.replace("{app-id}",n),u=await fetch(l,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function om(r,n=Qf,i){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw pt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw pt.create("no-api-key")}const f=n.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new lm;return setTimeout(async()=>{m.abort()},H5),Yf({appId:s,apiKey:l,measurementId:u},f,m,n)}async function Yf(r,{throttleEndTimeMillis:n,backoffCount:i},s,l=Qf){const{appId:u,measurementId:f}=r;try{await sm(s,n)}catch(m){if(f)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await im(r);return l.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!am(p)){if(l.deleteThrottleMetadata(u),f)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:f};throw m}const g=Number(p?.customData?.httpStatus)===503?t0(i,l.intervalMillis,em):t0(i,l.intervalMillis),E={throttleEndTimeMillis:Date.now()+g,backoffCount:i+1};return l.setThrottleMetadata(u,E),ot.debug(`Calling attemptFetch again in ${g} millis`),Yf(r,E,s,l)}}function sm(r,n){return new Promise((i,s)=>{const l=Math.max(n-Date.now(),0),u=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(u),s(pt.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function am(r){if(!(r instanceof Ht)||!r.customData)return!1;const n=Number(r.customData.httpStatus);return n===429||n===500||n===503||n===504}class lm{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function cm(r,n,i,s,l){if(l&&l.global){r("event",i,s);return}else{const u=await n,f={...s,send_to:u};r("event",i,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(){if(_f())try{await Sf()}catch(r){return ot.warn(pt.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return ot.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dm(r,n,i,s,l,u,f){const m=om(r);m.then(S=>{i[S.measurementId]=S.appId,r.options.measurementId&&S.measurementId!==r.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>ot.error(S)),n.push(m);const p=um().then(S=>{if(S)return s.getId()}),[g,E]=await Promise.all([m,p]);X5(u)||K5(u,g.measurementId),l("js",new Date);const _=f?.config??{};return _[V5]="firebase",_.update=!0,E!=null&&(_[F5]=E),l("config",g.measurementId,_),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(n){this.app=n}_delete(){return delete Li[this.app.options.appId],Promise.resolve()}}let Li={},f0=[];const p0={};let zl="dataLayer",pm="gtag",h0,Zf,m0=!1;function hm(){const r=[];if(kf()&&r.push("This is a browser extension environment."),O3()||r.push("Cookies are not available."),r.length>0){const n=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),i=pt.create("invalid-analytics-context",{errorInfo:n});ot.warn(i.message)}}function mm(r,n,i){hm();const s=r.options.appId;if(!s)throw pt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Li[s]!=null)throw pt.create("already-exists",{id:s});if(!m0){G5(zl);const{wrappedGtag:u,gtagCore:f}=Z5(Li,f0,p0,zl,pm);Zf=u,h0=f,m0=!0}return Li[s]=dm(r,f0,p0,n,h0,zl,i),new fm(r)}function gm(r=Pf()){r=Lt(r);const n=Vr(r,ys);return n.isInitialized()?n.getImmediate():ym(r)}function ym(r,n={}){const i=Vr(r,ys);if(i.isInitialized()){const l=i.getImmediate();if(rr(n,i.getOptions()))return l;throw pt.create("already-initialized")}return i.initialize({options:n})}function vm(r,n,i,s){r=Lt(r),cm(Zf,Li[r.app.options.appId],n,i,s).catch(l=>ot.error(l))}const g0="@firebase/analytics",y0="0.10.18";function wm(){nn(new Vt(ys,(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),l=n.getProvider("installations-internal").getImmediate();return mm(s,l,i)},"PUBLIC")),nn(new Vt("analytics-internal",r,"PRIVATE")),zt(g0,y0),zt(g0,y0,"esm2020");function r(n){try{const i=n.getProvider(ys).getImmediate();return{logEvent:(s,l,u)=>vm(i,s,l,u)}}catch(i){throw pt.create("interop-component-reg-failed",{reason:i})}}}wm();function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cm=Xf,e2=new cr("auth","Firebase",Xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Cc("@firebase/auth");function km(r,...n){vs.logLevel<=me.WARN&&vs.warn(`Auth (${Bi}): ${r}`,...n)}function cs(r,...n){vs.logLevel<=me.ERROR&&vs.error(`Auth (${Bi}): ${r}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,...n){throw Pc(r,...n)}function At(r,...n){return Pc(r,...n)}function Tc(r,n,i){const s={...Cm(),[n]:i};return new cr("auth","Firebase",s).create(n,{appName:r.name})}function en(r){return Tc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _m(r,n,i){const s=i;if(!(n instanceof s))throw s.name!==n.constructor.name&&St(r,"argument-error"),Tc(r,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pc(r,...n){if(typeof r!="string"){const i=n[0],s=[...n.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(i,...s)}return e2.create(r,...n)}function X(r,n,...i){if(!r)throw Pc(n,...i)}function Zt(r){const n="INTERNAL ASSERTION FAILED: "+r;throw cs(n),new Error(n)}function rn(r,n){r||Zt(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){return typeof self<"u"&&self.location?.href||""}function Sm(){return v0()==="http:"||v0()==="https:"}function v0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sm()||kf()||"connection"in navigator)?navigator.onLine:!0}function Im(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(n,i){this.shortDelay=n,this.longDelay=i,rn(i>n,"Short delay should be less than long delay!"),this.isMobile=N3()||A3()}get(){return Em()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(r,n){rn(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{static initialize(n,i,s){this.fetchImpl=n,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pm=new $i(3e4,6e4);function Dn(r,n){return r.tenantId&&!n.tenantId?{...n,tenantId:r.tenantId}:n}async function jn(r,n,i,s,l={}){return n2(r,l,async()=>{let u={},f={};s&&(n==="GET"?f=s:u={body:JSON.stringify(s)});const m=Hi({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:n,headers:p,...u};return R3()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Ts(r.emulatorConfig.host)&&(g.credentials="include"),t2.fetch()(await r2(r,r.config.apiHost,i,m),g)})}async function n2(r,n,i){r._canInitEmulator=!1;const s={...xm,...n};try{const l=new Nm(r),u=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw ss(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw ss(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw ss(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Tc(r,E,g);St(r,E)}}catch(l){if(l instanceof Ht)throw l;St(r,"network-request-failed",{message:String(l)})}}async function Wi(r,n,i,s,l={}){const u=await jn(r,n,i,s,l);return"mfaPendingCredential"in u&&St(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function r2(r,n,i,s){const l=`${n}${i}?${s}`,u=r,f=u.config.emulator?bc(r.config,l):`${r.config.apiScheme}://${l}`;return Tm.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function bm(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),Pm.get())})}}function ss(r,n,i){const s={appName:r.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const l=At(r,n,s);return l.customData._tokenResponse=i,l}function w0(r){return r!==void 0&&r.enterprise!==void 0}class Rm{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===n)return bm(i.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Am(r,n){return jn(r,"GET","/v2/recaptchaConfig",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(r,n){return jn(r,"POST","/v1/accounts:delete",n)}async function ws(r,n){return jn(r,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(r){if(r)try{const n=new Date(Number(r));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function Om(r,n=!1){const i=Lt(r),s=await i.getIdToken(n),l=Nc(s);X(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u?.sign_in_provider;return{claims:l,token:s,authTime:Oi(Fl(l.auth_time)),issuedAtTime:Oi(Fl(l.iat)),expirationTime:Oi(Fl(l.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Fl(r){return Number(r)*1e3}function Nc(r){const[n,i,s]=r.split(".");if(n===void 0||i===void 0||s===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const l=vf(i);return l?JSON.parse(l):(cs("Failed to decode base64 JWT payload"),null)}catch(l){return cs("Caught error parsing JWT payload as JSON",l?.toString()),null}}function C0(r){const n=Nc(r);return X(n,"internal-error"),X(typeof n.exp<"u","internal-error"),X(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(r,n,i=!1){if(i)return n;try{return await n}catch(s){throw s instanceof Ht&&Mm(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Mm({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(n=!1){if(!this.isRunning)return;const i=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){n?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(n,i){this.createdAt=n,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(r){const n=r.auth,i=await r.getIdToken(),s=await Ui(r,ws(n,{idToken:i}));X(s?.users.length,n,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=l.providerUserInfo?.length?i2(l.providerUserInfo):[],f=Um(r.providerData,u),m=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!f?.length,g=m?p:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new ac(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,E)}async function jm(r){const n=Lt(r);await Cs(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function Um(r,n){return[...r.filter(s=>!n.some(l=>l.providerId===s.providerId)),...n]}function i2(r){return r.map(({providerId:n,...i})=>({providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(r,n){const i=await n2(r,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await r2(r,l,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ts(r.emulatorConfig.host)&&(p.credentials="include"),t2.fetch()(f,p)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Fm(r,n){return jn(r,"POST","/v2/accounts:revokeToken",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){X(n.idToken,"internal-error"),X(typeof n.idToken<"u","internal-error"),X(typeof n.refreshToken<"u","internal-error");const i="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):C0(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,i)}updateFromIdToken(n){X(n.length!==0,"internal-error");const i=C0(n);this.updateTokensAndExpiration(n,null,i)}async getToken(n,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,i){const{accessToken:s,refreshToken:l,expiresIn:u}=await zm(n,i);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(n,i,s){this.refreshToken=i||null,this.accessToken=n||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(n,i){const{refreshToken:s,accessToken:l,expirationTime:u}=i,f=new Dr;return s&&(X(typeof s=="string","internal-error",{appName:n}),f.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:n}),f.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:n}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(r,n){X(typeof r=="string"||typeof r>"u","internal-error",{appName:n})}class Rt{constructor({uid:n,auth:i,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new Dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ac(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(n){const i=await Ui(this,this.stsTokenManager.getToken(this.auth,n));return X(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(n){return Om(this,n)}reload(){return jm(this)}_assign(n){this!==n&&(X(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(i=>({...i})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const i=new Rt({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(n){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,i=!1){let s=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),s=!0),i&&await Cs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(en(this.auth));const n=await this.getIdToken();return await Ui(this,Lm(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,i){const s=i.displayName??void 0,l=i.email??void 0,u=i.phoneNumber??void 0,f=i.photoURL??void 0,m=i.tenantId??void 0,p=i._redirectEventId??void 0,g=i.createdAt??void 0,E=i.lastLoginAt??void 0,{uid:_,emailVerified:S,isAnonymous:N,providerData:b,stsTokenManager:L}=i;X(_&&L,n,"internal-error");const A=Dr.fromJSON(this.name,L);X(typeof _=="string",n,"internal-error"),En(s,n.name),En(l,n.name),X(typeof S=="boolean",n,"internal-error"),X(typeof N=="boolean",n,"internal-error"),En(u,n.name),En(f,n.name),En(m,n.name),En(p,n.name),En(g,n.name),En(E,n.name);const q=new Rt({uid:_,auth:n,email:l,emailVerified:S,displayName:s,isAnonymous:N,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:A,createdAt:g,lastLoginAt:E});return b&&Array.isArray(b)&&(q.providerData=b.map($=>({...$}))),p&&(q._redirectEventId=p),q}static async _fromIdTokenResponse(n,i,s=!1){const l=new Dr;l.updateFromServerResponse(i);const u=new Rt({uid:i.localId,auth:n,stsTokenManager:l,isAnonymous:s});return await Cs(u),u}static async _fromGetAccountInfoResponse(n,i,s){const l=i.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?i2(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!u?.length,m=new Dr;m.updateFromIdToken(s);const p=new Rt({uid:l.localId,auth:n,stsTokenManager:m,isAnonymous:f}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new ac(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;function Xt(r){rn(r instanceof Function,"Expected a class definition");let n=k0.get(r);return n?(rn(n instanceof r,"Instance stored in cache mismatched with class"),n):(n=new r,k0.set(r,n),n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,i){this.storage[n]=i}async _get(n){const i=this.storage[n];return i===void 0?null:i}async _remove(n){delete this.storage[n]}_addListener(n,i){}_removeListener(n,i){}}o2.type="NONE";const _0=o2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r,n,i){return`firebase:${r}:${n}:${i}`}class jr{constructor(n,i,s){this.persistence=n,this.auth=i,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=us(this.userKey,l.apiKey,u),this.fullPersistenceKey=us("persistence",l.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const i=await ws(this.auth,{idToken:n}).catch(()=>{});return i?Rt._fromGetAccountInfoResponse(this.auth,i,n):null}return Rt._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,i,s="authUser"){if(!i.length)return new jr(Xt(_0),n,s);const l=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Xt(_0);const f=us(s,n.config.apiKey,n.name);let m=null;for(const g of i)try{const E=await g._get(f);if(E){let _;if(typeof E=="string"){const S=await ws(n,{idToken:E}).catch(()=>{});if(!S)break;_=await Rt._fromGetAccountInfoResponse(n,S,E)}else _=Rt._fromJSON(n,E);g!==u&&(m=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new jr(u,n,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(i.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new jr(u,n,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(r){const n=r.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(c2(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(s2(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(d2(n))return"Blackberry";if(f2(n))return"Webos";if(a2(n))return"Safari";if((n.includes("chrome/")||l2(n))&&!n.includes("edge/"))return"Chrome";if(u2(n))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(i);if(s?.length===2)return s[1]}return"Other"}function s2(r=Je()){return/firefox\//i.test(r)}function a2(r=Je()){const n=r.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function l2(r=Je()){return/crios\//i.test(r)}function c2(r=Je()){return/iemobile/i.test(r)}function u2(r=Je()){return/android/i.test(r)}function d2(r=Je()){return/blackberry/i.test(r)}function f2(r=Je()){return/webos/i.test(r)}function Rc(r=Je()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Vm(r=Je()){return Rc(r)&&!!window.navigator?.standalone}function Hm(){return L3()&&document.documentMode===10}function p2(r=Je()){return Rc(r)||u2(r)||f2(r)||d2(r)||/windows phone/i.test(r)||c2(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(r,n=[]){let i;switch(r){case"Browser":i=S0(Je());break;case"Worker":i=`${S0(Je())}-${r}`;break;default:i=r}const s=n.length?n.join(","):"FirebaseCore-web";return`${i}/JsCore/${Bi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,i){const s=u=>new Promise((f,m)=>{try{const p=n(u);f(p)}catch(p){m(p)}});s.onAbort=i,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const i=[];try{for(const s of this.queue)await s(n),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(r,n={}){return jn(r,"GET","/v2/passwordPolicy",Dn(r,n))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=6;class qm{constructor(n){const i=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??Wm,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=n.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,i),this.validatePasswordCharacterOptions(n,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(n,i){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=n.length>=s),l&&(i.meetsMaxPasswordLength=n.length<=l)}validatePasswordCharacterOptions(n,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let l=0;l<n.length;l++)s=n.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(n,i,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(n,i,s,l){this.app=n,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E0(this),this.idTokenSubscription=new E0(this),this.beforeStateQueue=new Bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(n,i){return i&&(this._popupRedirectResolver=Xt(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await jr.create(this,n),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const i=await ws(this,{idToken:n}),s=await Rt._fromGetAccountInfoResponse(this,i,n);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){if(kt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,l=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(n);(!u||u===f)&&m?.user&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(n){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(n){try{await Cs(n)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=Im()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(kt(this.app))return Promise.reject(en(this));const i=n?Lt(n):null;return i&&X(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(n,i=!1){if(!this._deleted)return n&&X(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return kt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await $m(this),i=new qm(n);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new cr("auth","Firebase",n())}onAuthStateChanged(n,i,s){return this.registerStateListener(this.authStateSubscription,n,i,s)}beforeAuthStateChanged(n,i){return this.beforeStateQueue.pushCallback(n,i)}onIdTokenChanged(n,i,s){return this.registerStateListener(this.idTokenSubscription,n,i,s)}authStateReady(){return new Promise((n,i)=>{if(this.currentUser)n();else{const s=this.onAuthStateChanged(()=>{s(),n()},i)}})}async revokeAccessToken(n){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await Fm(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(n,i){const s=await this.getOrInitRedirectPersistenceManager(i);return n===null?s.removeCurrentUser():s.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const i=n&&Xt(n)||this._popupRedirectResolver;X(i,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Xt(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===n?this._currentUser:this.redirectUser?._redirectEventId===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=this.currentUser?.uid??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,i,s,l){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof i=="function"){const p=n.addObserver(i,s,l);return()=>{f=!0,p()}}else{const p=n.addObserver(i);return()=>{f=!0,p()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=h2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return n?.error&&km(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Un(r){return Lt(r)}class E0{constructor(n){this.auth=n,this.observer=null,this.addObserver=z3(i=>this.observer=i)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gm(r){Ns=r}function m2(r){return Ns.loadJS(r)}function Jm(){return Ns.recaptchaEnterpriseScript}function Qm(){return Ns.gapiScript}function Ym(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Zm{constructor(){this.enterprise=new Xm}ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}class Xm{ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}const e8="recaptcha-enterprise",g2="NO_RECAPTCHA";class t8{constructor(n){this.type=e8,this.auth=Un(n)}async verify(n="verify",i=!1){async function s(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{Am(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new Rm(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(p=>{m(p)})})}function l(u,f,m){const p=window.grecaptcha;w0(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:n}).then(g=>{f(g)}).catch(()=>{f(g2)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zm().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!i&&w0(window.grecaptcha))l(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Jm();p.length!==0&&(p+=m),m2(p).then(()=>{l(m,u,f)}).catch(g=>{f(g)})}}).catch(m=>{f(m)})})}}async function I0(r,n,i,s=!1,l=!1){const u=new t8(r);let f;if(l)f=g2;else try{f=await u.verify(i)}catch{f=await u.verify(i,!0)}const m={...n};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function lc(r,n,i,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await I0(r,n,i,i==="getOobCode");return s(r,u)}else return s(r,n).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await I0(r,n,i,i==="getOobCode");return s(r,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(r,n){const i=Vr(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),u=i.getOptions();if(rr(u,n??{}))return l;St(l,"already-initialized")}return i.initialize({options:n})}function r8(r,n){const i=n?.persistence||[],s=(Array.isArray(i)?i:[i]).map(Xt);n?.errorMap&&r._updateErrorMap(n.errorMap),r._initializeWithPersistence(s,n?.popupRedirectResolver)}function i8(r,n,i){const s=Un(r);X(/^https?:\/\//.test(n),s,"invalid-emulator-scheme");const l=!1,u=y2(n),{host:f,port:m}=o8(n),p=m===null?"":`:${m}`,g={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(rr(g,s.config.emulator)&&rr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ts(f)?(x3(`${u}//${f}${p}`),b3("Auth",!0)):s8()}function y2(r){const n=r.indexOf(":");return n<0?"":r.substr(0,n+1)}function o8(r){const n=y2(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(n.length));if(!i)return{host:"",port:null};const s=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:x0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:x0(f)}}}function x0(r){if(!r)return null;const n=Number(r);return isNaN(n)?null:n}function s8(){function r(){const n=document.createElement("p"),i=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(n,i){this.providerId=n,this.signInMethod=i}toJSON(){return Zt("not implemented")}_getIdTokenResponse(n){return Zt("not implemented")}_linkToIdToken(n,i){return Zt("not implemented")}_getReauthenticationResolver(n){return Zt("not implemented")}}async function a8(r,n){return jn(r,"POST","/v1/accounts:signUp",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l8(r,n){return Wi(r,"POST","/v1/accounts:signInWithPassword",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c8(r,n){return Wi(r,"POST","/v1/accounts:signInWithEmailLink",Dn(r,n))}async function u8(r,n){return Wi(r,"POST","/v1/accounts:signInWithEmailLink",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Ac{constructor(n,i,s,l=null){super("password",s),this._email=n,this._password=i,this._tenantId=l}static _fromEmailAndPassword(n,i){return new zi(n,i,"password")}static _fromEmailAndCode(n,i,s=null){return new zi(n,i,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(n,i,"signInWithPassword",l8);case"emailLink":return c8(n,{email:this._email,oobCode:this._password});default:St(n,"internal-error")}}async _linkToIdToken(n,i){switch(this.signInMethod){case"password":const s={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(n,s,"signUpPassword",a8);case"emailLink":return u8(n,{idToken:i,email:this._email,oobCode:this._password});default:St(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(r,n){return Wi(r,"POST","/v1/accounts:signInWithIdp",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d8="http://localhost";class sr extends Ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const i=new sr(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(i.idToken=n.idToken),n.accessToken&&(i.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(i.nonce=n.nonce),n.pendingToken&&(i.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(i.accessToken=n.oauthToken,i.secret=n.oauthTokenSecret):St("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n,{providerId:s,signInMethod:l,...u}=i;if(!s||!l)return null;const f=new sr(s,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(n){const i=this.buildRequest();return Ur(n,i)}_linkToIdToken(n,i){const s=this.buildRequest();return s.idToken=i,Ur(n,s)}_getReauthenticationResolver(n){const i=this.buildRequest();return i.autoCreate=!1,Ur(n,i)}buildRequest(){const n={requestUri:d8,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),n.postBody=Hi(i)}return n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f8(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p8(r){const n=Ni(Ri(r)).link,i=n?Ni(Ri(n)).deep_link_id:null,s=Ni(Ri(r)).deep_link_id;return(s?Ni(Ri(s)).link:null)||s||i||n||r}class Lc{constructor(n){const i=Ni(Ri(n)),s=i.apiKey??null,l=i.oobCode??null,u=f8(i.mode??null);X(s&&l&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(n){const i=p8(n);try{return new Lc(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(n,i){return zi._fromEmailAndPassword(n,i)}static credentialWithLink(n,i){const s=Lc.parseLink(i);return X(s,"argument-error"),zi._fromEmailAndCode(n,s.code,s.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends qi{constructor(){super("facebook.com")}static credential(n){return sr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Tn.credentialFromTaggedObject(n)}static credentialFromError(n){return Tn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Tn.credential(n.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(n,i){return sr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:i})}static credentialFromResult(n){return Yt.credentialFromTaggedObject(n)}static credentialFromError(n){return Yt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:i,oauthAccessToken:s}=n;if(!i&&!s)return null;try{return Yt.credential(i,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends qi{constructor(){super("github.com")}static credential(n){return sr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Pn.credentialFromTaggedObject(n)}static credentialFromError(n){return Pn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Pn.credential(n.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends qi{constructor(){super("twitter.com")}static credential(n,i){return sr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:i})}static credentialFromResult(n){return bn.credentialFromTaggedObject(n)}static credentialFromError(n){return bn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:i,oauthTokenSecret:s}=n;if(!i||!s)return null;try{return bn.credential(i,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h8(r,n){return Wi(r,"POST","/v1/accounts:signUp",Dn(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,i,s,l=!1){const u=await Rt._fromIdTokenResponse(n,s,l),f=T0(s);return new ar({user:u,providerId:f,_tokenResponse:s,operationType:i})}static async _forOperation(n,i,s){await n._updateTokensIfNecessary(s,!0);const l=T0(s);return new ar({user:n,providerId:l,_tokenResponse:s,operationType:i})}}function T0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ht{constructor(n,i,s,l){super(i.code,i.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(n,i,s,l){return new ks(n,i,s,l)}}function v2(r,n,i,s){return(n==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(r,u,n,s):u})}async function m8(r,n,i=!1){const s=await Ui(r,n._linkToIdToken(r.auth,await r.getIdToken()),i);return ar._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g8(r,n,i=!1){const{auth:s}=r;if(kt(s.app))return Promise.reject(en(s));const l="reauthenticate";try{const u=await Ui(r,v2(s,l,n,r),i);X(u.idToken,s,"internal-error");const f=Nc(u.idToken);X(f,s,"internal-error");const{sub:m}=f;return X(r.uid===m,s,"user-mismatch"),ar._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&St(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(r,n,i=!1){if(kt(r.app))return Promise.reject(en(r));const s="signIn",l=await v2(r,s,n),u=await ar._fromIdTokenResponse(r,s,l);return i||await r._updateCurrentUser(u.user),u}async function y8(r,n){return w2(Un(r),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(r){const n=Un(r);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function v8(r,n,i){if(kt(r.app))return Promise.reject(en(r));const s=Un(r),f=await lc(s,{returnSecureToken:!0,email:n,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h8).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&C2(r),p}),m=await ar._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function w8(r,n,i){return kt(r.app)?Promise.reject(en(r)):y8(Lt(r),Hr.credential(n,i)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&C2(r),s})}function C8(r,n,i,s){return Lt(r).onIdTokenChanged(n,i,s)}function k8(r,n,i){return Lt(r).beforeAuthStateChanged(n,i)}function _8(r,n,i,s){return Lt(r).onAuthStateChanged(n,i,s)}function S8(r){return Lt(r).signOut()}const _s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(n,i){this.storageRetriever=n,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,i){return this.storage.setItem(n,JSON.stringify(i)),Promise.resolve()}_get(n){const i=this.storage.getItem(n);return Promise.resolve(i?JSON.parse(i):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E8=1e3,I8=10;class _2 extends k2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,i)=>this.onStorageEvent(n,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p2(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const i of Object.keys(this.listeners)){const s=this.storage.getItem(i),l=this.localCache[i];s!==l&&n(i,l,s)}}onStorageEvent(n,i=!1){if(!n.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=n.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!i&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);Hm()&&u!==n.newValue&&n.newValue!==n.oldValue?setTimeout(l,I8):l()}notifyListeners(n,i){this.localCache[n]=i;const s=this.listeners[n];if(s)for(const l of Array.from(s))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:i,newValue:s}),!0)})},E8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,i){await super._set(n,i),this.localCache[n]=JSON.stringify(i)}async _get(n){const i=await super._get(n);return this.localCache[n]=JSON.stringify(i),i}async _remove(n){await super._remove(n),delete this.localCache[n]}}_2.type="LOCAL";const x8=_2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2 extends k2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,i){}_removeListener(n,i){}}S2.type="SESSION";const E2=S2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T8(r){return Promise.all(r.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const i=this.receivers.find(l=>l.isListeningto(n));if(i)return i;const s=new Rs(n);return this.receivers.push(s),s}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const i=n,{eventId:s,eventType:l,data:u}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(f).map(async g=>g(i.origin,u)),p=await T8(m);i.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(n,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(i)}_unsubscribe(n,i){this.handlersMap[n]&&i&&this.handlersMap[n].delete(i),(!i||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r="",n=10){let i="";for(let s=0;s<n;s++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P8{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,i,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const g=Mc("",20);l.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(_){const S=_;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:n,eventId:g,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function b8(r){Ft().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function N8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R8(){return navigator?.serviceWorker?.controller||null}function A8(){return I2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2="firebaseLocalStorageDb",L8=1,Ss="firebaseLocalStorage",T2="fbase_key";class Ki{constructor(n){this.request=n}toPromise(){return new Promise((n,i)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function As(r,n){return r.transaction([Ss],n?"readwrite":"readonly").objectStore(Ss)}function O8(){const r=indexedDB.deleteDatabase(x2);return new Ki(r).toPromise()}function cc(){const r=indexedDB.open(x2,L8);return new Promise((n,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ss,{keyPath:T2})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ss)?n(s):(s.close(),await O8(),n(await cc()))})})}async function P0(r,n,i){const s=As(r,!0).put({[T2]:n,value:i});return new Ki(s).toPromise()}async function M8(r,n){const i=As(r,!1).get(n),s=await new Ki(i).toPromise();return s===void 0?null:s.value}function b0(r,n){const i=As(r,!0).delete(n);return new Ki(i).toPromise()}const D8=800,j8=3;class P2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(n){let i=0;for(;;)try{const s=await this._openDb();return await n(s)}catch(s){if(i++>j8)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(A8()),this.receiver._subscribe("keyChanged",async(n,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(n,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await N8(),!this.activeServiceWorker)return;this.sender=new P8(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&n[0]?.fulfilled&&n[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||R8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await cc();return await P0(n,_s,"1"),await b0(n,_s),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>P0(s,n,i)),this.localCache[n]=i,this.notifyServiceWorker(n)))}async _get(n){const i=await this._withRetries(s=>M8(s,n));return this.localCache[n]=i,i}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(i=>b0(i,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(l=>{const u=As(l,!1).getAll();return new Ki(u).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const i=[],s=new Set;if(n.length!==0)for(const{fbase_key:l,value:u}of n)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(n,i){this.localCache[n]=i;const s=this.listeners[n];if(s)for(const l of Array.from(s))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P2.type="LOCAL";const U8=P2;new $i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(r,n){return n?Xt(n):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Ac{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Ur(n,this._buildIdpRequest())}_linkToIdToken(n,i){return Ur(n,this._buildIdpRequest(i))}_getReauthenticationResolver(n){return Ur(n,this._buildIdpRequest())}_buildIdpRequest(n){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(i.idToken=n),i}}function z8(r){return w2(r.auth,new Dc(r),r.bypassAuthState)}function F8(r){const{auth:n,user:i}=r;return X(i,n,"internal-error"),g8(i,new Dc(r),r.bypassAuthState)}async function V8(r){const{auth:n,user:i}=r;return X(i,n,"internal-error"),m8(i,new Dc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(n,i,s,l,u=!1){this.auth=n,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(n,i)=>{this.pendingPromise={resolve:n,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(n){const{urlResponse:i,sessionId:s,postBody:l,tenantId:u,error:f,type:m}=n;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:i,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return z8;case"linkViaPopup":case"linkViaRedirect":return V8;case"reauthViaPopup":case"reauthViaRedirect":return F8;default:St(this.auth,"internal-error")}}resolve(n){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8=new $i(2e3,1e4);async function B8(r,n,i){if(kt(r.app))return Promise.reject(At(r,"operation-not-supported-in-this-environment"));const s=Un(r);_m(r,n,Oc);const l=b2(s,i);return new nr(s,"signInViaPopup",n,l).executeNotNull()}class nr extends N2{constructor(n,i,s,l,u){super(n,i,l,u),this.provider=s,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return X(n,this.auth,"internal-error"),n}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const n=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const n=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,H8.get())};n()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $8="pendingRedirect",ds=new Map;class W8 extends N2{constructor(n,i,s=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let n=ds.get(this.auth._key());if(!n){try{const s=await q8(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(s)}catch(i){n=()=>Promise.reject(i)}ds.set(this.auth._key(),n)}return this.bypassAuthState||ds.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const i=await this.auth._redirectUserForId(n.eventId);if(i)return this.user=i,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q8(r,n){const i=J8(n),s=G8(r);if(!await s._isAvailable())return!1;const l=await s._get(i)==="true";return await s._remove(i),l}function K8(r,n){ds.set(r._key(),n)}function G8(r){return Xt(r._redirectPersistence)}function J8(r){return us($8,r.config.apiKey,r.name)}async function Q8(r,n,i=!1){if(kt(r.app))return Promise.reject(en(r));const s=Un(r),l=b2(s,n),f=await new W8(s,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,n)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y8=600*1e3;class Z8{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(n,s)&&(i=!0,this.sendToConsumer(n,s),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!X8(n)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=n,i=!0)),i}sendToConsumer(n,i){if(n.error&&!R2(n)){const s=n.error.code?.split("auth/")[1]||"internal-error";i.onError(At(this.auth,s))}else i.onAuthEvent(n)}isEventForConsumer(n,i){const s=i.eventId===null||!!n.eventId&&n.eventId===i.eventId;return i.filter.includes(n.type)&&s}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=Y8&&this.cachedEventUids.clear(),this.cachedEventUids.has(N0(n))}saveEventToCache(n){this.cachedEventUids.add(N0(n)),this.lastProcessedEventTime=Date.now()}}function N0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(n=>n).join("-")}function R2({type:r,error:n}){return r==="unknown"&&n?.code==="auth/no-auth-event"}function X8(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R2(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e9(r,n={}){return jn(r,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n9=/^https?/;async function r9(r){if(r.config.emulator)return;const{authorizedDomains:n}=await e9(r);for(const i of n)try{if(i9(i))return}catch{}St(r,"unauthorized-domain")}function i9(r){const n=sc(),{protocol:i,hostname:s}=new URL(n);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===n.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===s}if(!n9.test(i))return!1;if(t9.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9=new $i(3e4,6e4);function R0(){const r=Ft().___jsl;if(r?.H){for(const n of Object.keys(r.H))if(r.H[n].r=r.H[n].r||[],r.H[n].L=r.H[n].L||[],r.H[n].r=[...r.H[n].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function s9(r){return new Promise((n,i)=>{function s(){R0(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{R0(),i(At(r,"network-request-failed"))},timeout:o9.get()})}if(Ft().gapi?.iframes?.Iframe)n(gapi.iframes.getContext());else if(Ft().gapi?.load)s();else{const l=Ym("iframefcb");return Ft()[l]=()=>{gapi.load?s():i(At(r,"network-request-failed"))},m2(`${Qm()}?onload=${l}`).catch(u=>i(u))}}).catch(n=>{throw fs=null,n})}let fs=null;function a9(r){return fs=fs||s9(r),fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l9=new $i(5e3,15e3),c9="__/auth/iframe",u9="emulator/auth/iframe",d9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p9(r){const n=r.config;X(n.authDomain,r,"auth-domain-config-required");const i=n.emulator?bc(n,u9):`https://${r.config.authDomain}/${c9}`,s={apiKey:n.apiKey,appName:r.name,v:Bi},l=f9.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${i}?${Hi(s).slice(1)}`}async function h9(r){const n=await a9(r),i=Ft().gapi;return X(i,r,"internal-error"),n.open({where:document.body,url:p9(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d9,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const f=At(r,"network-request-failed"),m=Ft().setTimeout(()=>{u(f)},l9.get());function p(){Ft().clearTimeout(m),l(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g9=500,y9=600,v9="_blank",w9="http://localhost";class A0{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C9(r,n,i,s=g9,l=y9){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...m9,width:s.toString(),height:l.toString(),top:u,left:f},g=Je().toLowerCase();i&&(m=l2(g)?v9:i),s2(g)&&(n=n||w9,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[N,b])=>`${S}${N}=${b},`,"");if(Vm(g)&&m!=="_self")return k9(n||"",m),new A0(null);const _=window.open(n||"",m,E);X(_,r,"popup-blocked");try{_.focus()}catch{}return new A0(_)}function k9(r,n){const i=document.createElement("a");i.href=r,i.target=n;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _9="__/auth/handler",S9="emulator/auth/handler",E9=encodeURIComponent("fac");async function L0(r,n,i,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:s,v:Bi,eventId:l};if(n instanceof Oc){n.setDefaultLanguage(r.languageCode),f.providerId=n.providerId||"",U3(n.getCustomParameters())||(f.customParameters=JSON.stringify(n.getCustomParameters()));for(const[E,_]of Object.entries({}))f[E]=_}if(n instanceof qi){const E=n.getScopes().filter(_=>_!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),g=p?`#${E9}=${encodeURIComponent(p)}`:"";return`${I9(r)}?${Hi(m).slice(1)}${g}`}function I9({config:r}){return r.emulator?bc(r,S9):`https://${r.authDomain}/${_9}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="webStorageSupport";class x9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E2,this._completeRedirectFn=Q8,this._overrideRedirectResult=K8}async _openPopup(n,i,s,l){rn(this.eventManagers[n._key()]?.manager,"_initialize() not called before _openPopup()");const u=await L0(n,i,s,sc(),l);return C9(n,u,Mc())}async _openRedirect(n,i,s,l){await this._originValidation(n);const u=await L0(n,i,s,sc(),l);return b8(u),new Promise(()=>{})}_initialize(n){const i=n._key();if(this.eventManagers[i]){const{manager:l,promise:u}=this.eventManagers[i];return l?Promise.resolve(l):(rn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(n);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(n){const i=await h9(n),s=new Z8(n);return i.register("authEvent",l=>(X(l?.authEvent,n,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:s},this.iframes[n._key()]=i,s}_isIframeWebStorageSupported(n,i){this.iframes[n._key()].send(Vl,{type:Vl},l=>{const u=l?.[0]?.[Vl];u!==void 0&&i(!!u),St(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const i=n._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=r9(n)),this.originValidationPromises[i]}get _shouldInitProactively(){return p2()||a2()||Rc()}}const T9=x9;var O0="@firebase/auth",M0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const i=this.auth.onIdTokenChanged(s=>{n(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(n,i),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const i=this.internalListeners.get(n);i&&(this.internalListeners.delete(n),i(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b9(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N9(r){nn(new Vt("auth",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),l=n.getProvider("heartbeat"),u=n.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;X(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h2(r)},g=new Km(s,l,u,p);return r8(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,i,s)=>{n.getProvider("auth-internal").initialize()})),nn(new Vt("auth-internal",n=>{const i=Un(n.getProvider("auth").getImmediate());return(s=>new P9(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(O0,M0,b9(r)),zt(O0,M0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R9=300,A9=Cf("authIdTokenMaxAge")||R9;let D0=null;const L9=r=>async n=>{const i=n&&await n.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>A9)return;const l=i?.token;D0!==l&&(D0=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function O9(r=Pf()){const n=Vr(r,"auth");if(n.isInitialized())return n.getImmediate();const i=n8(r,{popupRedirectResolver:T9,persistence:[U8,x8,E2]}),s=Cf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=L9(u.toString());k8(i,f,()=>f(i.currentUser)),C8(i,m=>f(m))}}const l=E3("auth");return l&&i8(i,`http://${l}`),i}function M9(){return document.getElementsByTagName("head")?.[0]??document}Gm({loadJS(r){return new Promise((n,i)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=n,s.onerror=l=>{const u=At("internal-error");u.customData=l,i(u)},s.type="text/javascript",s.charset="UTF-8",M9().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N9("Browser");const D9={apiKey:"AIzaSyAsIIq6VkxWGuTFt2QQKvT5fy0Iv5UoIvE",authDomain:"mrshrek-store.firebaseapp.com",projectId:"mrshrek-store",storageBucket:"mrshrek-store.firebasestorage.app",messagingSenderId:"1069635877069",appId:"1:1069635877069:web:d074de0f0030b6b58f1184",measurementId:"G-8XHMJ205S9"},A2=Tf(D9);gm(A2);const bi=O9(A2),L2=R.createContext(),Hl=r=>r.includes("email-already-in-use")?"Email already in use":r.includes("weak-password")?"Password should be at least 6 characters":r.includes("user-not-found")?"No account found with this email":r.includes("wrong-password")?"Incorrect password":r.includes("too-many-requests")?"Too many login attempts, try again later":r,j9=({children:r})=>{const[n,i]=R.useState(null),[s,l]=R.useState(!1),[u,f]=R.useState(!0);R.useEffect(()=>{const _=_8(bi,S=>{if(S){const N=S.email?.trim().toLowerCase(),b=N==="admin@shop.com";i({uid:S.uid,email:N}),l(b),localStorage.setItem("user",JSON.stringify({uid:S.uid,email:N})),localStorage.setItem("isAdmin",JSON.stringify(b))}else i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin");f(!1)});return()=>_()},[]);const m=async()=>{const _=new Yt;try{const N=(await B8(bi,_)).user,b=N.email.trim().toLowerCase(),L=b==="admin@shop.com";return i({uid:N.uid,email:b}),l(L),localStorage.setItem("user",JSON.stringify({uid:N.uid,email:b})),localStorage.setItem("isAdmin",JSON.stringify(L)),{success:!0,user:{uid:N.uid,email:b}}}catch(S){return{success:!1,message:Hl(S.message)}}},p=async(_,S)=>{try{const b=(await w8(bi,_.trim(),S)).user,L=b.email.trim().toLowerCase(),A=L==="admin@shop.com";return i({uid:b.uid,email:L}),l(A),localStorage.setItem("user",JSON.stringify({uid:b.uid,email:L})),localStorage.setItem("isAdmin",JSON.stringify(A)),{success:!0,user:{uid:b.uid,email:L}}}catch(N){return{success:!1,message:Hl(N.message)}}},g=async(_,S)=>{try{return await v8(bi,_.trim(),S),{success:!0}}catch(N){return{success:!1,message:Hl(N.message)}}},E=async()=>{try{await S8(bi),i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin")}catch(_){console.error("Logout error:",_.message)}};return w.jsx(L2.Provider,{value:{user:n,isAdmin:s,login:p,loginWithGoogle:m,logout:E,signup:g,loading:u},children:!u&&r})},zn=()=>R.useContext(L2),O2=R.createContext();function U9({children:r}){const[n,i]=R.useState(()=>{const p=localStorage.getItem("products");return p?JSON.parse(p):[]}),[s,l]=R.useState(()=>{const p=localStorage.getItem("hero");return p?JSON.parse(p):{title:"",subtitle:"",image:""}});R.useEffect(()=>{localStorage.setItem("products",JSON.stringify(n))},[n]),R.useEffect(()=>{localStorage.setItem("hero",JSON.stringify(s))},[s]);const u=p=>{i(g=>[...g,{...p,id:Date.now()}])},f=p=>{i(g=>g.filter(E=>E.id!==p))},m=(p,g)=>{i(E=>E.map(_=>_.id===p?{..._,...g}:_))};return w.jsx(O2.Provider,{value:{products:n,addProduct:u,deleteProduct:f,updateProduct:m,hero:s,setHero:l},children:r})}function M2(){return R.useContext(O2)}const z9=({children:r})=>{const{user:n,isAdmin:i,loading:s}=zn();return s?null:!n||!i?w.jsx(Yl,{to:"/"}):r},D2=R.createContext();function F9({children:r}){const[n,i]=R.useState(()=>{const f=localStorage.getItem("heroes");return f?JSON.parse(f):[]});R.useEffect(()=>{localStorage.setItem("heroes",JSON.stringify(n))},[n]);const s=f=>{const m={...f,id:Date.now()};i(p=>[...p,m])},l=(f,m)=>{i(p=>p.map(g=>g.id===f?{...g,...m}:g))},u=f=>{i(m=>m.filter(p=>p.id!==f))};return w.jsx(D2.Provider,{value:{heroes:n,addHero:s,updateHero:l,deleteHero:u},children:r})}const j2=()=>R.useContext(D2),U2=R.createContext();function V9({children:r}){const[n,i]=R.useState(()=>{const l=localStorage.getItem("orders");return l?JSON.parse(l):[]});R.useEffect(()=>{localStorage.setItem("orders",JSON.stringify(n))},[n]);const s=l=>{i(u=>[...u,l])};return w.jsx(U2.Provider,{value:{orders:n,addOrder:s},children:r})}function z2(){return R.useContext(U2)}function j0({children:r,adminOnly:n=!1}){const{user:i,loading:s}=zn();return s?w.jsx("div",{className:"flex justify-center items-center h-screen",children:w.jsx("p",{className:"text-gray-600",children:"Loading..."})}):i?n&&i.role!=="admin"?w.jsx(Yl,{to:"/",replace:!0}):r:w.jsx(Yl,{to:"/login",replace:!0})}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B9=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,s)=>s?s.toUpperCase():i.toLowerCase()),U0=r=>{const n=B9(r);return n.charAt(0).toUpperCase()+n.slice(1)},F2=(...r)=>r.filter((n,i,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===i).join(" ").trim(),$9=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=R.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...m},p)=>R.createElement("svg",{ref:p,...W9,width:n,height:n,stroke:r,strokeWidth:s?Number(i)*24/Number(n):i,className:F2("lucide",l),...!u&&!$9(m)&&{"aria-hidden":"true"},...m},[...f.map(([g,E])=>R.createElement(g,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(r,n)=>{const i=R.forwardRef(({className:s,...l},u)=>R.createElement(q9,{ref:u,iconNode:n,className:F2(`lucide-${H9(U0(r))}`,`lucide-${r}`,s),...l}));return i.displayName=U0(r),i};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],G9=st("chevron-left",K9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Q9=st("chevron-right",J9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Z9=st("history",Y9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],e7=st("log-in",X9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],n7=st("log-out",t7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["path",{d:"M5 12h14",key:"1ays0h"}]],i7=st("minus",r7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],s7=st("plus",o7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],l7=st("search",a7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],u7=st("shield",c7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],f7=st("shopping-cart",d7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],h7=st("star",p7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],g7=st("trash-2",m7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],v7=st("user-plus",y7);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],C7=st("user",w7);function k7(){const{cart:r}=vc(),{user:n,logout:i}=zn(),s=r.reduce((l,u)=>l+u.quantity,0);return w.jsx("nav",{className:"bg-yellow-500 shadow-lg sticky top-0 z-50",children:w.jsxs("div",{className:"container mx-auto flex items-center justify-between p-4",children:[w.jsx(xn,{to:"/",className:"text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition",children:"MrShrek"}),w.jsxs("div",{className:"flex-1 mx-6 relative",children:[w.jsx("input",{type:"text",placeholder:"Search for products, brands and categories",className:"w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"}),w.jsx(l7,{className:"absolute right-3 top-2.5 text-gray-500",size:20})]}),w.jsxs("div",{className:"flex items-center space-x-6 text-white font-medium",children:[n?w.jsxs(w.Fragment,{children:[w.jsxs("span",{className:"flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md",children:[w.jsx(C7,{size:18})," ",n.email]}),w.jsxs(xn,{to:"/orders",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[w.jsx(Z9,{size:18})," Orders"]}),w.jsxs(xn,{to:"/adminlogin",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[w.jsx(u7,{size:18})," Admin"]}),w.jsxs("button",{onClick:i,className:"flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition",children:[w.jsx(n7,{size:16})," Logout"]})]}):w.jsxs(w.Fragment,{children:[w.jsxs(xn,{to:"/login",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[w.jsx(e7,{size:18})," Login"]}),w.jsxs(xn,{to:"/signup",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[w.jsx(v7,{size:18})," Sign Up"]})]}),w.jsxs(xn,{to:"/cart",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[w.jsx(f7,{size:22}),w.jsx("span",{children:"Cart"}),s>0&&w.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:s})]})]})]})})}function _7(){const{heroes:r}=j2(),[n,i]=R.useState(0),[s,l]=R.useState(!1);return R.useEffect(()=>{if(r.length>1&&!s){const u=setInterval(()=>{i(f=>(f+1)%r.length)},3e3);return()=>clearInterval(u)}},[r,s]),r.length===0?w.jsx("div",{className:"relative bg-gray-200 h-64 md:h-[500px] flex items-center justify-center rounded-xl shadow-lg",children:w.jsx("h2",{className:"text-2xl font-bold text-gray-600",children:"No Hero Banner Added"})}):w.jsxs("div",{className:"relative w-full h-64 md:h-[500px] overflow-hidden rounded-xl shadow-2xl",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[r.map((u,f)=>w.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ease-in-out ${f===n?"opacity-100":"opacity-0"}`,children:[w.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-scale-down"}),w.jsxs("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center text-center px-6",children:[w.jsx("h2",{className:"text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn",children:u.title}),u.subtitle&&w.jsx("p",{className:"text-lg md:text-2xl text-gray-200 mt-3 max-w-2xl animate-fadeIn delay-200",children:u.subtitle}),u.ctaText&&w.jsx("a",{href:u.ctaLink||"#",className:"mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 animate-fadeIn delay-500",children:u.ctaText})]})]},u.id)),r.length>1&&w.jsxs(w.Fragment,{children:[w.jsx("button",{onClick:()=>i(u=>(u-1+r.length)%r.length),className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:w.jsx(G9,{size:28})}),w.jsx("button",{onClick:()=>i(u=>(u+1)%r.length),className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:w.jsx(Q9,{size:28})})]}),w.jsx("div",{className:"absolute bottom-4 w-full flex justify-center gap-2",children:r.map((u,f)=>w.jsx("button",{onClick:()=>i(f),className:`w-3 h-3 rounded-full transition ${n===f?"bg-yellow-500":"bg-white/60"}`},f))})]})}const S7=[{id:1,name:"iphones",image:"Iphones/iphone-13-pro.jpg"},{id:2,name:"iphones",image:"Iphones/iphone-13.jpg"}];function E7(){return w.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-gray-100",children:S7.map(r=>w.jsxs("div",{className:"flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer",children:[w.jsx("img",{src:`/MrShrek-Store/${r.image}`,alt:r.name,className:"w-16 h-16 object-contain mb-2"}),w.jsx("span",{className:"font-medium",children:r.name})]},r.id))})}function I7({categories:r,onFilter:n}){const[i,s]=R.useState(5e5),[l,u]=R.useState(""),f=()=>{n({category:l,maxPrice:i})};return w.jsxs("aside",{className:"w-64 bg-white p-4 shadow rounded",children:[w.jsx("h3",{className:"font-bold mb-3",children:"Filters"}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"font-semibold",children:"Category"}),w.jsxs("select",{value:l,onChange:m=>u(m.target.value),className:"w-full border px-2 py-1 rounded mt-2",children:[w.jsx("option",{value:"",children:"All"}),r.map((m,p)=>w.jsx("option",{value:m.name,children:m.name},p))]})]}),w.jsxs("div",{children:[w.jsxs("h4",{className:"font-semibold",children:["Max Price: ₦",i.toLocaleString()]}),w.jsx("input",{type:"range",min:"40000",max:"5000000",step:"10000",value:i,onChange:m=>s(m.target.value),className:"w-full"})]}),w.jsx("button",{onClick:f,className:"mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 cursor-pointer",children:"Apply Filters"})]})}const x7=[{id:1,name:"Phones"},{id:2,name:"Electronics"},{id:3,name:"Fashion"},{id:4,name:"Groceries"}];function T7(){const{products:r}=M2(),{addToCart:n}=vc(),[i,s]=R.useState(r),l=({category:f,maxPrice:m})=>{let p=r;f&&(p=p.filter(g=>g.category===f)),m&&(p=p.filter(g=>Number(g.price)<=m)),s(p)},u=f=>{let m=[...i];switch(f){case"low-high":m.sort((p,g)=>p.price-g.price);break;case"high-low":m.sort((p,g)=>g.price-p.price);break;case"az":m.sort((p,g)=>p.name.localeCompare(g.name));break;case"za":m.sort((p,g)=>g.name.localeCompare(p.name));break;default:m=[...i]}s(m)};return w.jsxs("div",{children:[w.jsx(_7,{}),w.jsx(E7,{}),w.jsxs("div",{className:"flex p-6 gap-6",children:[w.jsx(I7,{categories:x7,onFilter:l}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex justify-between items-center mb-4",children:[w.jsx("h1",{className:"text-2xl font-bold",children:"Top Deals"}),w.jsxs("select",{onChange:f=>u(f.target.value),className:"border px-2 py-1 rounded",children:[w.jsx("option",{value:"",children:"Sort By"}),w.jsx("option",{value:"low-high",children:"Price: Low → High"}),w.jsx("option",{value:"high-low",children:"Price: High → Low"}),w.jsx("option",{value:"az",children:"Name: A → Z"}),w.jsx("option",{value:"za",children:"Name: Z → A"})]})]}),i.length===0?w.jsx("p",{children:"No products found."}):w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:i.map(f=>w.jsxs("div",{className:"bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col",children:[w.jsx("img",{src:f.image,alt:f.name,className:"w-full h-48 object-scale-down rounded mb-3"}),w.jsx("h2",{className:"text-lg font-semibold line-clamp-1",children:f.name}),f.description&&w.jsx("p",{className:"text-gray-600 text-sm line-clamp-2 mb-2",children:f.description}),w.jsxs("p",{className:"text-green-600 font-bold mb-2",children:["₦",Number(f.price).toLocaleString()]}),w.jsxs("div",{className:"flex items-center gap-1 mb-3",children:[[...Array(5)].map((m,p)=>w.jsx(h7,{size:16,className:p<4?"text-yellow-500 fill-yellow-500":"text-gray-300"},p)),w.jsx("span",{className:"text-xs text-gray-500",children:"(120)"})]}),w.jsx("button",{onClick:()=>n(f),className:"mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer",children:"Add to Cart"})]},f.id))})]})]})]})}var Te=function(){return Te=Object.assign||function(n){for(var i,s=1,l=arguments.length;s<l;s++){i=arguments[s];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},Te.apply(this,arguments)};function jc(r,n){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&n.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)n.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(i[s[l]]=r[s[l]]);return i}function z0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter((function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable}))),i.push.apply(i,s)}return i}function Ne(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?z0(Object(i),!0).forEach((function(s){B2(r,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):z0(Object(i)).forEach((function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))}))}return r}function lr(r){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lr(r)}function V2(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function F0(r,n){for(var i=0;i<n.length;i++){var s=n[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}function H2(r,n,i){return n&&F0(r.prototype,n),i&&F0(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}function B2(r,n,i){return n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function uc(r,n){if(r==null)return{};var i,s,l=(function(f,m){if(f==null)return{};var p,g,E={},_=Object.keys(f);for(g=0;g<_.length;g++)p=_[g],m.indexOf(p)>=0||(E[p]=f[p]);return E})(r,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(s=0;s<u.length;s++)i=u[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(r,i)&&(l[i]=r[i])}return l}function P7(r,n){return(function(i){if(Array.isArray(i))return i})(r)||(function(i,s){var l=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var u,f,m=[],p=!0,g=!1;try{for(l=l.call(i);!(p=(u=l.next()).done)&&(m.push(u.value),!s||m.length!==s);p=!0);}catch(E){g=!0,f=E}finally{try{p||l.return==null||l.return()}finally{if(g)throw f}}return m}})(r,n)||$2(r,n)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function b7(r){return(function(n){if(Array.isArray(n))return dc(n)})(r)||(function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)})(r)||$2(r)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function $2(r,n){if(r){if(typeof r=="string")return dc(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?dc(r,n):void 0}}function dc(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,s=new Array(n);i<n;i++)s[i]=r[i];return s}var Uc={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"};Ne(Ne({},Uc),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"});var N7=Ne(Ne({},Uc),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),it={production:Ne(Ne({},Uc),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||N7;function W2(r,n){var i=[];return Object.keys(r).forEach((function(s){var l=n?"".concat(n,"[").concat(s,"]"):s,u=r[l];i.push(u!==null&&(typeof v>"u"?"undefined":lr(v))==="object"?W2(u,l):"".concat(encodeURIComponent(s),"=").concat(encodeURIComponent(u)))})),i.join("&")}function Mr(){return document.currentScript||(r=document.getElementsByTagName("script"))[r.length-1];var r}function V0(){var r=[],n=Mr();if(n){var i=Array.prototype.slice.call(n.attributes);r=Object.keys(i).filter((function(s){var l=i[s].nodeName;return l&&l.indexOf("data")>-1})).map((function(s){return i[s].nodeName}))}return r}var q2=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,R7=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,A7=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,L7=`
<svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="vault-logo">
  <g clip-path="url(#clip0_9910_9664)">
    <path
      d="M32.1273 15.8163H28.9432C28.6448 15.8163 28.4481 15.6622 28.3497 15.3507L25.1886 6.20188C25.1165 6.01825 25.1296 5.85101 25.2214 5.70345C25.3132 5.55589 25.451 5.48047 25.6346 5.48047H27.9693C28.2513 5.48047 28.435 5.63787 28.5202 5.94611L30.6648 12.9077L32.5536 5.94611C32.6388 5.63459 32.829 5.48047 33.1274 5.48047H35.4195C35.6031 5.48047 35.7441 5.55589 35.8425 5.70345C35.9409 5.85101 35.954 6.01825 35.8851 6.20188L32.7241 15.3507C32.6257 15.6622 32.4257 15.8163 32.1305 15.8163H32.1273Z"
      fill="#343C43" />
    <path
      d="M37.6361 14.5842C36.6097 13.5644 36.0981 12.2495 36.0981 10.6362C36.0981 9.02283 36.6097 7.71118 37.6361 6.69792C38.6624 5.68795 39.8757 5.17969 41.2759 5.17969C41.9416 5.17969 42.5384 5.31085 43.0696 5.57318C43.6008 5.83551 43.9943 6.16998 44.2468 6.57988V5.94373C44.2468 5.81584 44.2927 5.70763 44.3845 5.61581C44.4763 5.524 44.578 5.47809 44.6927 5.47809H46.8373C46.9652 5.47809 47.0701 5.524 47.1554 5.61581C47.2406 5.70763 47.2833 5.81584 47.2833 5.94373V15.3679C47.2833 15.4958 47.2406 15.6008 47.1554 15.686C47.0701 15.7713 46.9652 15.8139 46.8373 15.8139H44.6927C44.578 15.8139 44.4763 15.7713 44.3845 15.686C44.2927 15.6008 44.2468 15.4958 44.2468 15.3679V14.7088C43.991 15.1187 43.6008 15.4565 43.0696 15.7155C42.5384 15.9779 41.935 16.109 41.2562 16.109C39.8691 16.109 38.6624 15.6008 37.6361 14.581V14.5842ZM39.9151 8.79985C39.433 9.31795 39.1936 9.93443 39.1936 10.6558C39.1936 11.3772 39.433 11.997 39.9151 12.5118C40.3971 13.0299 40.9972 13.2857 41.7186 13.2857C42.44 13.2857 43.0401 13.0266 43.5221 12.5118C44.0041 11.997 44.2435 11.3772 44.2435 10.6558C44.2435 9.93443 44.0041 9.31467 43.5221 8.79985C43.0401 8.28502 42.44 8.02597 41.7186 8.02597C40.9972 8.02597 40.3938 8.28502 39.9151 8.79985Z"
      fill="#343C43" />
    <path
      d="M51.6315 5.9016V11.2302C51.6315 11.9385 51.8086 12.4959 52.1627 12.9058C52.5169 13.3157 53.0415 13.5223 53.7334 13.5223C54.4253 13.5223 54.9401 13.319 55.3139 12.9058C55.6878 12.4959 55.878 11.9516 55.878 11.2728V5.9016C55.878 5.78683 55.9239 5.68845 56.0157 5.60319C56.1075 5.51794 56.2092 5.47531 56.3239 5.47531H58.4685C58.6095 5.47531 58.7242 5.52122 58.8095 5.61303C58.8948 5.70485 58.9374 5.81306 58.9374 5.94094V15.3652C58.9374 15.4931 58.8948 15.598 58.8095 15.6832C58.7242 15.7685 58.6128 15.8111 58.4685 15.8111H56.3239C56.196 15.8111 56.0911 15.7718 56.0058 15.6931C55.9206 15.6144 55.878 15.5127 55.878 15.3848V14.7257C55.1139 15.6472 54.081 16.1062 52.7792 16.1062C51.4774 16.1062 50.4707 15.7062 49.7132 14.9061C48.9557 14.106 48.5786 13.0501 48.5786 11.7319V5.89504C48.5786 5.78027 48.6278 5.68189 48.7262 5.59664C48.8246 5.51138 48.9295 5.46875 49.0442 5.46875H51.1658C51.2937 5.46875 51.4019 5.51138 51.4938 5.59664C51.5856 5.68189 51.6315 5.78027 51.6315 5.89504V5.9016Z"
      fill="#343C43" />
    <path
      d="M62.9872 15.8148C62.0658 15.8148 61.387 15.582 60.9509 15.113C60.5115 14.6474 60.2917 14.0178 60.2917 13.2243V1.42267C60.2917 1.29478 60.3344 1.18657 60.4196 1.09475C60.5049 1.00294 60.6164 0.957031 60.7607 0.957031H62.8823C63.0233 0.957031 63.138 1.00294 63.2233 1.09475C63.3085 1.18657 63.3512 1.29478 63.3512 1.42267V12.6078C63.3512 12.8045 63.4069 12.9652 63.5217 13.0865C63.6332 13.2079 63.7906 13.2669 63.9873 13.2669H64.6464C64.9448 13.2669 65.0924 13.4144 65.0924 13.7129V15.2409C65.0924 15.6246 64.8956 15.8148 64.4989 15.8148H62.9905H62.9872Z"
      fill="#343C43" />
    <path
      d="M66.722 12.7378V8.04861H65.3644C65.2365 8.04861 65.1316 8.00271 65.0463 7.91089C64.9611 7.81907 64.9185 7.71086 64.9185 7.58298V5.94997C64.9185 5.82208 64.9611 5.71387 65.0463 5.62206C65.1316 5.53024 65.2365 5.48433 65.3644 5.48433H66.722V2.74626C66.722 2.60526 66.7679 2.49049 66.8597 2.40523C66.9515 2.31997 67.0597 2.27734 67.1876 2.27734H69.3518C69.4666 2.27734 69.5683 2.31997 69.6601 2.40523C69.7519 2.49049 69.7978 2.60198 69.7978 2.74626V5.48433H72.7064C72.8343 5.48433 72.9458 5.53024 73.0474 5.62206C73.1458 5.71387 73.195 5.82208 73.195 5.94997V7.58298C73.195 7.69775 73.1458 7.80268 73.0474 7.90105C72.949 7.99943 72.8343 8.04861 72.7064 8.04861H69.7978V12.0164C69.7978 12.4689 69.9027 12.7804 70.1159 12.9509C70.329 13.1214 70.5684 13.2067 70.8373 13.2067C71.1193 13.2067 71.4308 13.1083 71.7718 12.9083C72.1555 12.6689 72.4441 12.6951 72.6408 12.9935L73.3852 14.1806C73.5557 14.4495 73.5327 14.7052 73.3229 14.9446C72.6146 15.6792 71.5948 16.0497 70.2667 16.0497C69.2764 16.0497 68.437 15.7742 67.7516 15.2234C67.0663 14.6725 66.722 13.8428 66.722 12.741V12.7378Z"
      fill="#343C43" />
    <path
      d="M15.2266 0H4.43496C2.26089 0 0.5 1.76089 0.5 3.93496V14.7266C0.5 16.9006 2.26089 18.6615 4.43496 18.6615H15.2266C17.4006 18.6615 19.1615 16.9006 19.1615 14.7266V3.93496C19.1615 1.76089 17.4006 0 15.2266 0ZM15.079 12.2312L12.1442 14.6118C11.9114 14.8086 11.5507 14.6807 11.4949 14.379L10.8161 11.8934C10.7702 11.6934 10.8489 11.4868 11.0096 11.3589C11.4425 11.0113 11.7179 10.4801 11.7179 9.8833C11.7179 8.44048 10.098 7.37476 8.5765 8.40113C8.48468 8.46344 8.40598 8.54214 8.34368 8.63723C7.63539 9.68983 7.92723 10.7883 8.65192 11.3655C8.8126 11.4934 8.88474 11.6967 8.84211 11.8967L8.22891 14.3823C8.17317 14.6839 7.81246 14.8118 7.57964 14.6151L4.57924 12.2344C4.47431 12.1262 4.41856 11.9787 4.4284 11.8278L4.77271 6.69271C4.78582 6.49268 4.91371 6.31561 5.09734 6.23691L9.41924 4.03661C9.68157 3.9284 9.97341 3.9284 10.2357 4.03661L14.5576 6.23691C14.7445 6.31561 14.8691 6.49268 14.8855 6.69271L15.2299 11.8278C15.2397 11.9787 15.1839 12.1262 15.079 12.2344V12.2312Z"
      fill="#343C43" />
  </g>
  <defs>
    <clipPath id="clip0_9910_9664">
      <rect width="73" height="18.6615" fill="white" transform="translate(0.5)" />
    </clipPath>
  </defs>
</svg>
`,Bl={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},H0=function(r){return r&&lr(r)==="object"?Object.keys(Bl).reduce((function(n,i){return Ne(Ne({},n),{},B2({},i,r[i]||Bl[i]))}),{}):Bl},O7=`
  .pre-checkout-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease;
  }

  .pre-checkout-modal.show {
    display: block;
  }

  .pre-checkout-modal__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #fefefe;
    padding: 20px;
    padding-bottom: max(30px, env(safe-area-inset-bottom));
    width: 100%;
    border-radius: 6px 6px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;

    box-sizing: border-box;
    transform: translateY(238px);
    transition: transform 0.3s cubic-bezier(.16,.81,.32,1);
  }

  .modal-wrapper {
    width: 100%;
  }

  .payment-info {
    position: relative;
    padding-bottom: 15px;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .customer-email {
    color: #737373;
    font-size: 13px;
    line-height: 16px;
  }

  .customer-info {
    flex: 1;
    text-align: right;
  }

  .merchant-logo {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .transaction-amount {
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
    color: #737373;
  }

  .amount {
    color: #29b263;
    font-weight: bold;
  }

  @media only screen and (min-width: 500px) {
    .pre-checkout-modal__content {
      bottom: 0;
      top: 0;
      margin: auto;
      border-radius: 6px;
      height: fit-content;
    }
  }

  .pre-checkout-modal__content.show {
    transform: translateY(0);
    margin: 0 auto;
    margin-top: 100px;
  }

  .pre-checkout-modal__content > * {
    margin-top: 0;
    margin-bottom: 40px;
  }
  .pre-checkout-modal__content > *:last-child {
    margin-bottom: 0;
  }

  .pre-checkout-modal__content svg {
    margin: auto;
    width: 100%;
  }

  #inline-button-wordmark--white {
    position: absolute;
    bottom: -50px;
    margin: auto;
    left: 0;
    right: 0;
    width: fit-content;
  }

  #inline-button-wordmark--grey {
    display: none;
  }

  .pre-checkout-modal__content #apple-pay-mark--light {
    margin-bottom: 16px;
  }

  .pre-checkout-modal p {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #4E4E4E;
    line-height: 140%;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 20px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .pre-checkout-modal button {
    height: 42px;
    width: 100%;
    
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .pre-checkout-modal .open-paystack-pop-button {
    background: #FAFAFA;
    border: 1px solid #F2F3F3;
    color: #4E4E4E;
    font-weight: 500;
  }

  .pre-checkout-modal .open-paystack-pop-button:hover, 
  .pre-checkout-modal .open-paystack-pop-button:active, 
  .pre-checkout-modal .open-paystack-pop-button:focus {
    background: #F2F3F3;
  }

  .pre-checkout-modal .pay-with-vault-button {
    font-weight: 700;
    background: #44b669;
    background: linear-gradient(to bottom, #44b669 0%, #40ad57 100%);
    border: solid 1px #49a861;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    color: white;
    transition: all 300ms;
  }

  .pre-checkout-modal .vault-instruction {
    color: #2f3d4d;
    font-size: 14px;
    letter-spacing: normal;
    line-height: 1.4;
    margin: 0 auto 24px;
    padding: 0;
  }
  .vault-logo-container {
    width: 74px;
    height: 20px;
    margin: 0 auto 24px
  }
  .vault-logo-container img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  .vault-divider {
    margin-bottom: 16px;
    margin-top: 24px;
    position: relative;
  }
  .vault-divider__container {
    align-items: center;
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .vault-divider__line {
    border: 1px dashed #ccced0;
    width: 100%;
  }
  .vault-divider__text-container {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .vault-divider__text {
    background-color: #fff;
    color: #999da1;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -.3px;
    line-height: 19.6px;
    margin-bottom: 2px;
    padding: 0 8px;
  }

  #payment-request-button {
    width: 100%;
    height: fit-content;
    margin: 24px 0 16px 0;
  }

  #paystackpop-button {
    padding: 0 16px;
  }

  #apple-pay-close-button {
    position: absolute;
    text-align: center;
    top: 0;
    right: -26px;
    height: 16px;
    width: 16px;
    padding: 0;
    display: inline-block;
    z-index: 3;
    border-radius: 50%;
    background: transparent;
    transition: all 300ms;
    outline: none;
    cursor: pointer;
    border: none;
  }

  #apple-pay-close-button svg {
    width: initial;
  }
  
  #apple-pay-close-button:hover {
    background-color: #e22b28;
  }

  @media only screen and (max-width: 500px) {
    .pre-checkout-modal__content {
      max-width: 500px;
      border-radius: 0;
      padding-bottom: 0;
    }

    .modal-wrapper {
      padding: 0;
    }

    .vault-logo-container {
      width: 74px;
      height: 20px;
    }

    #inline-button-wordmark--white {
      display: none
    }
    
    #inline-button-wordmark--grey {
      display: block;
      width: 100%;
      margin: 16px 0;
      height: 13px;
    }

    #apple-pay-close-button {
      display: none;
    }
  }
`,B0=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(r/100).toFixed(2))},$0={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function W0(r){return Object.keys(r).reduce((function(n,i){var s=encodeURIComponent(i),l=encodeURIComponent(r[i]),u="".concat(s,"=").concat(l);return[].concat(b7(n),[u])}),[]).join("&")}var M7=function(r){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[r]||"".concat(r.toUpperCase()," PLAN")},K2=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(it.applePayVersion)}catch{return!1}},fc=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return K2()&&r.includes("apple_pay")};function D7(){var r=0;return Array.from(document.querySelectorAll("body *")).forEach((function(n){var i=window.getComputedStyle(n),s=parseFloat(i.zIndex);!Number.isNaN(s)&&s>r&&(r=s)})),r}function $l(r){var n=document.createElement("iframe");return n.setAttribute("frameBorder","0"),n.setAttribute("allowtransparency","true"),n.id=r,n.style.display="none",n}function ps(r){return r.querySelector("apple-pay-button")||r.querySelector("#apple-pay-button")}function as(r){return document.querySelector("#".concat(r))}function q0(r,n,i){var s=n.channels,l=s===void 0?[]:s,u=n.styles,f=u===void 0?{}:u,m={applePay:!1};return new Promise((function(p,g){if(r)if(fc(l)){if(ps(r))return m.applePay=!0,void p(m);(function(E,_){return new Promise((function(S,N){var b=document.createElement("script");b.src=E,b.addEventListener("load",(function(){S(!0)})),b.addEventListener("error",(function(){b.remove(),N(!1)})),_?_.appendChild(b):document.head.appendChild(b)}))})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",r).then((function(){if(i&&i!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(lr(window.webpackJsonp),". Switching to fallback apple pay button"));(function(E,_){var S=_.styles,N=_.theme,b=document.createElement("style"),L=(function(q){var $=q.height,G=q.width,te=q.borderRadius,se=q.padding;return`
  apple-pay-button {
    --apple-pay-button-width: `.concat(G,`;
    --apple-pay-button-height: `).concat($,`;
    --apple-pay-button-border-radius: `).concat(te,`;
    --apple-pay-button-padding: `).concat(se,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(G,`;
  }
`)})(S);b.type="text/css",b.styleSheet?b.styleSheet.cssText=L:b.appendChild(document.createTextNode(L)),E.appendChild(b);var A=document.createElement("apple-pay-button");A.setAttribute("buttonstyle",N==="light"?"white":"black"),A.setAttribute("type",S.type),A.setAttribute("locale",S.locale),E.appendChild(A)})(r,{styles:H0(f.applePay),theme:f.theme}),m.applePay=!0,p(m)})).catch((function(){(function(E,_){var S=_.styles,N=_.theme,b=document.createElement("style"),L=(function($){var G=$.height,te=$.width,se=$.borderRadius,fe=$.padding,de=$.type,_e=$.locale;return`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(te,`;
        height: `).concat(G,`;
        border-radius: `).concat(se,`;
        padding: `).concat(fe,`;
        -apple-pay-button-type: `).concat(de,`;
        -webkit-locale: `).concat(_e,`;
    }
    .apple-pay-button-black {
        -apple-pay-button-style: black;
    }
    .apple-pay-button-white {
        -apple-pay-button-style: white;
    }
    .apple-pay-button-white-with-line {
        -apple-pay-button-style: white-outline;
    }
  }

  @supports not (-webkit-appearance: -apple-pay-button) {
    .apple-pay-button {
        display: inline-block;
        background-size: 100% 60%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 5px;
        padding: 0px;
        box-sizing: border-box;
        min-width: 200px;
        min-height: 32px;
        max-height: 64px;
    }
    .apple-pay-button-black {
        background-image: -webkit-named-image(apple-pay-logo-white);
        background-color: black;
    }
    .apple-pay-button-white {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
    }
    .apple-pay-button-white-with-line {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
        border: .5px solid black;
    }
  }
`)})(S);b.type="text/css",b.styleSheet?b.styleSheet.cssText=L:b.appendChild(document.createTextNode(L)),E.appendChild(b);var A=document.createElement("button");A.classList.add("apple-pay-button",N==="light"?"apple-pay-button-white":"apple-pay-button-black"),A.id="apple-pay-button";var q=document.createElement("span");q.classList.add("logo"),A.appendChild(q),E.appendChild(A)})(r,{styles:H0(f.applePay),theme:f.theme}),m.applePay=!0,p(m)}))}else g("No wallet payment method is available on this device");else g("Container to mount elements was not provided")}))}function j7(r){for(;r.firstChild;)r.removeChild(r.firstChild)}var G2="payment-request-button",J2="paystackpop-button",Q2="pay-with-vault-button";function Y2(r){var n=document.createElement("button");return n.id=J2,n.className="open-paystack-pop-button",n.innerText=r,n}function K0(r){return r.querySelector("#".concat(J2))}function Z2(){var r=document.createElement("div");return r.id=G2,r}function Wl(r){return r.querySelector("#".concat(G2))}function U7(){var r=document.createElement("button");return r.className="pay-with-vault-button",r.id=Q2,r.innerText="Pay with Vault",r}function z7(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=document.createElement("div");i.className="vault-logo-container",i.innerHTML=L7,r.appendChild(i);var s=document.createElement("p");s.id="instruction",s.className="vault-instruction",s.innerHTML="Access your saved cards and bank details for faster, more secure payments",r.appendChild(s);var l=U7();r.appendChild(l);var u=document.createElement("div");if(u.className="vault-divider",u.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',r.appendChild(u),n.canPayWithApplePay){var f=Z2();r.appendChild(f)}var m=Y2("Use other payment methods");r.appendChild(m)}function F7(r){var n=document.createElement("div");n.innerHTML=`
  <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="apple-pay-mark--light">
    <g>
    <path d="M46.0162 0H4.98386C4.81297 0 4.64177 0 4.47118 0.000996555C4.32698 0.00202331 4.18311 0.00362383 4.03925 0.00754966C3.72548 0.0160355 3.40903 0.0345472 3.09919 0.0902335C2.7844 0.146886 2.49148 0.239294 2.20571 0.384791C1.92477 0.52766 1.66757 0.71453 1.44468 0.937516C1.22169 1.1605 1.03482 1.41728 0.891977 1.69852C0.74645 1.98429 0.653982 2.27731 0.597722 2.59234C0.541737 2.90227 0.523101 3.21866 0.514645 3.53209C0.51078 3.67596 0.509122 3.81982 0.508183 3.96366C0.507186 4.13461 0.507519 4.30545 0.507519 4.4767V27.5236C0.507519 27.6949 0.507186 27.8654 0.508183 28.0367C0.509122 28.1805 0.51078 28.3244 0.514645 28.4683C0.523101 28.7814 0.541737 29.0978 0.597722 29.4077C0.653982 29.7228 0.74645 30.0157 0.891977 30.3015C1.03482 30.5827 1.22169 30.8399 1.44468 31.0625C1.66757 31.2859 1.92477 31.4727 2.20571 31.6152C2.49148 31.7611 2.7844 31.8535 3.09919 31.9102C3.40903 31.9655 3.72548 31.9843 4.03925 31.9928C4.18311 31.9961 4.32698 31.998 4.47118 31.9987C4.64177 32 4.81297 32 4.98386 32H46.0162C46.1868 32 46.358 32 46.5286 31.9987C46.6724 31.998 46.8163 31.9961 46.9608 31.9928C47.2739 31.9843 47.5903 31.9655 47.9009 31.9102C48.2153 31.8535 48.5083 31.7611 48.7941 31.6152C49.0753 31.4727 49.3317 31.2859 49.5551 31.0625C49.7777 30.8399 49.9646 30.5827 50.1078 30.3015C50.2537 30.0157 50.346 29.7228 50.402 29.4077C50.458 29.0978 50.4762 28.7814 50.4847 28.4683C50.4886 28.3244 50.4906 28.1805 50.4912 28.0367C50.4925 27.8654 50.4926 27.6949 50.4926 27.5236V4.4767C50.4926 4.30545 50.4925 4.13461 50.4912 3.96366C50.4906 3.81982 50.4886 3.67596 50.4847 3.53209C50.4762 3.21866 50.458 2.90227 50.402 2.59234C50.346 2.27731 50.2537 1.98429 50.1078 1.69852C49.9646 1.41728 49.7777 1.1605 49.5551 0.937516C49.3317 0.71453 49.0753 0.52766 48.7941 0.384791C48.5083 0.239294 48.2153 0.146886 47.9009 0.0902335C47.5903 0.0345472 47.2739 0.0160355 46.9608 0.00754966C46.8163 0.00362383 46.6724 0.00202331 46.5286 0.000996555C46.358 0 46.1868 0 46.0162 0Z" fill="black"/>
    <path d="M46.0162 1.06662L46.521 1.06759C46.6577 1.06855 46.7945 1.07003 46.932 1.07378C47.1711 1.08024 47.4509 1.09319 47.7117 1.13994C47.9384 1.18077 48.1285 1.24286 48.311 1.33575C48.4911 1.42728 48.6562 1.54723 48.8003 1.69113C48.9449 1.83599 49.065 2.0013 49.1578 2.18343C49.2501 2.36447 49.3118 2.55369 49.3524 2.78205C49.3991 3.04001 49.412 3.32055 49.4185 3.56121C49.4222 3.69704 49.424 3.83287 49.4247 3.97194C49.426 4.14012 49.4259 4.3082 49.4259 4.47671V27.5236C49.4259 27.6921 49.426 27.8599 49.4246 28.0317C49.424 28.1675 49.4222 28.3033 49.4185 28.4394C49.4119 28.6797 49.3991 28.9601 49.3519 29.2211C49.3118 29.4463 49.2502 29.6356 49.1573 29.8175C49.0648 29.9992 48.9449 30.1643 48.8009 30.3083C48.656 30.4532 48.4915 30.5728 48.3092 30.6652C48.1281 30.7576 47.9383 30.8197 47.7138 30.8601C47.4477 30.9075 47.1562 30.9205 46.9367 30.9265C46.7986 30.9296 46.6611 30.9315 46.5203 30.9321C46.3525 30.9334 46.1841 30.9334 46.0162 30.9334H4.98386C4.98162 30.9334 4.97945 30.9334 4.97718 30.9334C4.81127 30.9334 4.64503 30.9334 4.4761 30.9321C4.33836 30.9315 4.20093 30.9296 4.06805 30.9266C3.8435 30.9205 3.55181 30.9075 3.2879 30.8604C3.06151 30.8197 2.87171 30.7576 2.68822 30.664C2.50766 30.5724 2.34329 30.453 2.19831 30.3077C2.05444 30.1641 1.93488 29.9995 1.84245 29.8176C1.74992 29.6358 1.68801 29.446 1.64731 29.218C1.60025 28.9576 1.58733 28.6783 1.58087 28.4396C1.57718 28.303 1.57564 28.1664 1.57476 28.0305L1.5741 27.6295L1.57413 27.5236V4.47671L1.5741 4.37083L1.57473 3.97067C1.57564 3.83402 1.57718 3.6974 1.58087 3.56088C1.58733 3.32197 1.60025 3.04258 1.64769 2.77991C1.68804 2.55405 1.74992 2.36422 1.84293 2.18155C1.93464 2.001 2.05441 1.83617 2.19903 1.69158C2.34308 1.54747 2.50799 1.42767 2.6897 1.33527C2.87122 1.24283 3.06138 1.18077 3.28778 1.14003C3.54864 1.09316 3.82861 1.08024 4.06839 1.07375C4.20507 1.07003 4.34174 1.06855 4.4774 1.06762L4.98386 1.06662H46.0162Z" fill="white"/>
    <path d="M14.1531 10.7629C14.5811 10.2276 14.8715 9.50886 14.7949 8.77435C14.1684 8.80551 13.4038 9.18768 12.9612 9.72342C12.5638 10.1822 12.212 10.9311 12.3037 11.6348C13.007 11.6958 13.7097 11.2832 14.1531 10.7629Z" fill="black"/>
    <path d="M14.7869 11.7722C13.7655 11.7114 12.8972 12.3519 12.4094 12.3519C11.9214 12.3519 11.1745 11.8029 10.3667 11.8177C9.31521 11.8331 8.33959 12.4276 7.80602 13.3731C6.70857 15.2646 7.51641 18.0704 8.58362 19.611C9.10188 20.3731 9.72648 21.2123 10.5495 21.1822C11.3271 21.1517 11.6319 20.6787 12.5771 20.6787C13.5216 20.6787 13.7961 21.1822 14.6192 21.1669C15.4729 21.1516 16.0065 20.4044 16.5248 19.6415C17.1193 18.7727 17.3627 17.9338 17.378 17.8877C17.3627 17.8725 15.732 17.2469 15.7169 15.3711C15.7015 13.8004 16.9972 13.0534 17.0581 13.007C16.3265 11.9249 15.1832 11.8029 14.7869 11.7722Z" fill="black"/>
    <path d="M23.68 9.64661C25.8999 9.64661 27.4457 11.1768 27.4457 13.4046C27.4457 15.6404 25.8681 17.1786 23.6244 17.1786H21.1665V21.0872H19.3907V9.64661H23.68V9.64661ZM21.1665 15.688H23.2041C24.7502 15.688 25.6302 14.8556 25.6302 13.4126C25.6302 11.9697 24.7502 11.1451 23.2121 11.1451H21.1665V15.688Z" fill="black"/>
    <path d="M27.9097 18.7167C27.9097 17.2578 29.0276 16.3619 31.0098 16.2509L33.293 16.1162V15.474C33.293 14.5464 32.6666 13.9914 31.6203 13.9914C30.629 13.9914 30.0106 14.467 29.8601 15.2124H28.2428C28.3379 13.7059 29.6222 12.5959 31.6836 12.5959C33.7053 12.5959 34.9976 13.6663 34.9976 15.3392V21.0872H33.3563V19.7156H33.3169C32.8333 20.6433 31.7787 21.2299 30.6847 21.2299C29.0514 21.2299 27.9097 20.2151 27.9097 18.7167ZM33.293 17.9635V17.3055L31.2395 17.4323C30.2167 17.5037 29.6381 17.9556 29.6381 18.6691C29.6381 19.3985 30.2406 19.8742 31.1603 19.8742C32.3574 19.8742 33.293 19.0496 33.293 17.9635Z" fill="black"/>
    <path d="M36.547 24.1556V22.768C36.6736 22.7997 36.959 22.7997 37.1018 22.7997C37.8946 22.7997 38.3228 22.4668 38.5843 21.6105C38.5843 21.5946 38.7351 21.1031 38.7351 21.0952L35.7224 12.7466H37.5774L39.6866 19.5333H39.7181L41.8273 12.7466H43.6349L40.5109 21.5232C39.7976 23.5451 38.973 24.1952 37.2447 24.1952C37.1018 24.1952 36.6736 24.1793 36.547 24.1556Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="49.9851" height="32" fill="white" transform="translate(0.507462)"/>
    </clipPath>
    </defs>
  </svg>
`,r.appendChild(n);var i=document.createElement("p");i.id="apple-pay-description",i.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",r.appendChild(i);var s=Z2();r.appendChild(s);var l=Y2("More payment options");r.appendChild(l)}var ls=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function V7(r){var n,i=Ne({},r);return i.metadata=r.metadata||{},i.metadata.referrer=(n=window.location.href)&&n.length>500?n.split("?")[0]:n,i.metadata=JSON.stringify(i.metadata),i.mode="popup",r.split&&typeof r.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach((function(s){i[s.from]&&(i[s.to]=i[s.from],delete i[s.from])})),Object.values(r).forEach((function(s,l){if(typeof s=="function"){var u=Object.keys(r)[l];delete i[u]}})),i}var H7=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],X2=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),ep=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.platform,i=r.userAgent,s=i===void 0?window&&window.navigator&&window.navigator.userAgent:i,l=n||X2;return H7.includes(l)||s.includes("Mac")&&"ontouchend"in document},B7=function(r,n,i){var s="".concat(it.paystackApiUrl,"transaction/update_log/").concat(r),l={Authorization:"Bearer ".concat(n)};return fetch(s,{method:"POST",body:JSON.stringify({payload:JSON.stringify(i)}),headers:l})},$7=function(r,n){var i="".concat(it.paystackApiUrl,"transaction/set_ip/").concat(r),s={Authorization:"Bearer ".concat(n)};return fetch(i,{method:"POST",headers:s})},W7={initializeLog:function(r){var n=r||{},i=n.attempts,s=n.authentication,l=n.errors,u=n.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:i||0,authentication:s,errors:l||0,success:!1,mobile:ep(),input:[],history:u||[]}},getTimeSpent:function(){var r=Math.round(Date.now()/1e3);return this.log.time_spent=r-this.log.start_time,this.log.time_spent},logAPIResponse:function(r,n){switch(r.status){case"success":return this.logApiSuccess(n);case"failed":return this.logApiError(r.message);default:return!1}},logValidationResponse:function(r){return this.log.history.push({type:"action",message:r,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(r){var n="Attempted to pay";return r&&(n+=" with ".concat(r)),this.log.attempts+=1,this.log.history.push({type:"action",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(r){var n="Error";return r&&(n+=": ".concat(r)),this.log.errors+=1,this.log.history.push({type:"error",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(r){var n="Successfully paid";return r&&(n+=" with ".concat(r)),this.log.success=!0,this.log.history.push({type:"success",message:n,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return B7(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return $7(this.id,this.response.merchant_key)}catch{}}},q7=["language","connect_account"],K7={requestInline:function(){var r=this,n=this.urlParameters,i=n.language,s=n.connect_account,l=uc(n,q7),u=Ne({"Content-Type":"application/json"},i&&{"Accept-Language":i});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),it.paystackApiUrl).toString(),{headers:u}):fetch(new URL("/checkout/request_inline",it.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(l),headers:Ne(Ne({},u),s&&{"x-connect-account":s})})).then((function(f){return f.json()})).then((function(f){if(f.status===!1)throw new Error(f.message);return r.response=f.data,r.id=f.data.id,r.status=f.data.transaction_status,r.accessCode=f.data.access_code,r.log=null,Object.assign(r,W7),r.initializeLog(f.data.log),r.saveIpAddress(),f.data}))}},ql=(function(){function r(n){V2(this,r),(function(g){function E(b,L){this.message=b,this.issues=L||[]}if(!g||lr(g)!=="object")throw new E("Transaction parameters should be a non-empty object");var _=g;if("accessCode"in _)return{accessCode:_.accessCode};Object.keys(_).forEach((function(b){ls.find((function(L){return L.value===b}))!==void 0||delete _[b]}));var S=Object.keys(_),N=[];if(ls.filter((function(b){return b.required})).forEach((function(b){var L=!_[b.value],A=b.or?b.or.some((function(q){return _[q]})):null;L&&!A&&N.push({message:"Required parameter missing: ".concat(b.value)})})),S.forEach((function(b){var L=_[b],A=ls.find((function($){return $.value===b})),q=lr(L);q==="object"&&Array.isArray(L)&&(q="array"),A.types.indexOf(q)<=-1&&N.push({message:"Invalid parameter type: ".concat(b),validTypes:A.types})})),S.forEach((function(b){var L=ls.find((function(A){return A.value===b}));L.override&&delete _[L.override]})),N.length)throw new E("Invalid transaction parameters",N)})(n),this.parameters=n,this.urlParameters=V7(n),this.id=null,this.status=null,this.accessCode=n.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var i=n.onError,s=n.onLoad,l=n.onSuccess,u=n.onCancel,f=n.callback,m=n.onClose,p=n.onBankTransferConfirmationPending;this.callbacks={onError:i,onLoad:s,onSuccess:l,onCancel:u,onBankTransferConfirmationPending:p},this.deprecatedCallbacks={callback:f,onClose:m},Object.assign(this,K7)}return H2(r,[{key:"onSetupError",value:function(n){this.logError(n),this.callbacks.onError&&this.callbacks.onError(n)}},{key:"onLoad",value:function(n){var i=n.id,s=n.customer,l=n.accessCode;Object.assign(this,{id:i,customer:s,accessCode:l}),this.authorizationUrl="".concat(it.checkoutUrl).concat(l),this.callbacks.onLoad&&this.callbacks.onLoad({id:i,customer:s,accessCode:l})}},{key:"onSuccess",value:function(n){this.isActive=!1,this.response=n,this.status=n.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(n),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(n)}},{key:"setStatus",value:function(n){this.status=n}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(n){this.errors.push(n)}}]),r})(),zc=console?console.warn||console.log:function(){};function G0(r,n,i){zc('"'.concat(r,'" has been deprecated, please use "').concat(n,'". ').concat(i))}var ne,G7=["preload","inlineTransaction"],J7=["container","styles","onElementsMount"];function Kl(r,n){if(!r.length)return null;var i=r.filter((function(s){var l,u,f,m,p=!s.status||s.status==="abandoned",g=(l=s.parameters,u=n,f=Object.keys(l).sort().join("")===Object.keys(u).sort().join(""),m=Object.values(l).sort().join("")===Object.values(u).sort().join(""),f&&m);return p&&g}));return i.length?i[i.length-1]:null}function J0(r){var n=r.checkoutIframe,i=r.urlParameters;n&&i&&n.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:i},"*")}var Q7="trackCheckoutClosed",Q0="trackPaymentError",Y7="trackPaymentAttempt",Z7="trackPaymentCompletion";function Gl(r){throw zc(r),new Error(r)}var Y0,Z0,tp=(function(){function r(n){var i,s;V2(this,r),this.id=(function(){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=0;f<5;f+=1)l+=u.charAt(Math.floor(Math.random()*u.length));return l})(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=n&&n.isDeprecatedApi,n&&n.isEmbed?this.isEmbed=!0:n&&n.isPaymentRequest&&(n.container&&as(n.container)||Gl("A container is required to mount the payment request button"),this.paymentRequestContainer=as(n.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=(function(l){var u=$l("inline-background-".concat(l));u.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  background: rgba(0, 0, 0, 0.75);    
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  visibility: hidden;
  display: none;
`,document.body.appendChild(u);var f=u.contentWindow.document;return f.open(),f.write(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paystack Popup Loader</title>
    <style>
      .app-loader {
        margin: 200px 0;
        text-align: center;
        color: white;
      }      
      @keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .app-loader__spinner {
        position: relative;
        display: inline-block;
      }
      .app-loader__spinner div {
        left: 95px;
        top: 35px;
        position: absolute;
        -webkit-animation: app-loader__spinner linear 1s infinite;
        animation: app-loader__spinner linear 1s infinite;
        background: white;
        width: 10px;
        height: 30px;
        border-radius: 40%;
        -webkit-transform-origin: 5px 65px;
        transform-origin: 5px 65px;
      }
      .app-loader__spinner div:nth-child(1) {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-animation-delay: -0.916666666666667s;
        animation-delay: -0.916666666666667s;
      }
      .app-loader__spinner div:nth-child(2) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
        -webkit-animation-delay: -0.833333333333333s;
        animation-delay: -0.833333333333333s;
      }
      .app-loader__spinner div:nth-child(3) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
      }
      .app-loader__spinner div:nth-child(4) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation-delay: -0.666666666666667s;
        animation-delay: -0.666666666666667s;
      }
      .app-loader__spinner div:nth-child(5) {
        -webkit-transform: rotate(120deg);
        transform: rotate(120deg);
        -webkit-animation-delay: -0.583333333333333s;
        animation-delay: -0.583333333333333s;
      }
      .app-loader__spinner div:nth-child(6) {
        -webkit-transform: rotate(150deg);
        transform: rotate(150deg);
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .app-loader__spinner div:nth-child(7) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-animation-delay: -0.416666666666667s;
        animation-delay: -0.416666666666667s;
      }
      .app-loader__spinner div:nth-child(8) {
        -webkit-transform: rotate(210deg);
        transform: rotate(210deg);
        -webkit-animation-delay: -0.333333333333333s;
        animation-delay: -0.333333333333333s;
      }
      .app-loader__spinner div:nth-child(9) {
        -webkit-transform: rotate(240deg);
        transform: rotate(240deg);
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
      }
      .app-loader__spinner div:nth-child(10) {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-animation-delay: -0.166666666666667s;
        animation-delay: -0.166666666666667s;
      }
      .app-loader__spinner div:nth-child(11) {
        -webkit-transform: rotate(300deg);
        transform: rotate(300deg);
        -webkit-animation-delay: -0.083333333333333s;
        animation-delay: -0.083333333333333s;
      }
      .app-loader__spinner div:nth-child(12) {
        -webkit-transform: rotate(330deg);
        transform: rotate(330deg);
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      .app-loader__spinner {
        width: 40px;
        height: 40px;
        -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
        transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
      }
    </style>
  </head>

  <body>
    <div id="app-loader" class="app-loader">
      <div id="spinner" class="app-loader__spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  </body>

  </html>
`),f.close(),u})(this.id),this.checkoutIframe=(i=this.id,(s=$l("inline-checkout-".concat(i))).src="".concat(it.checkoutUrl,"popup"),s.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  visibility: hidden;
  display: none;
  height: 100%;
`,s.setAttribute("allowpaymentrequest","true"),s.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(s),s),this.registerListeners()}return H2(r,[{key:"registerListeners",value:function(){var n=this;window.addEventListener("message",(function(i){var s="".concat(i.origin,"/")===it.checkoutUrl,l=n.checkoutIframe&&n.checkoutIframe.contentWindow===i.source,u=n.isEmbed;s||l?n.respondToEvent(i):u&&n.respondToEmbedEvents(i)}))}},{key:"sendAnalyticsEventToCheckout",value:function(n,i){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:n,params:i},"*")}},{key:"checkout",value:function(n){this.activeTransaction()&&this.activeTransaction().cancel(),ne=this;var i=Kl(this.transactions,n)||new ql(n);return new Promise((function(s,l){i.requestInline().then((function(u){var f=(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=p.platform,E=p.userAgent,_=E===void 0?window&&window.navigator&&window.navigator.userAgent:E,S=g||X2,N=_&&!!_.match(/Version\/[\d.]+.*Safari/),b=S&&/(Mac)/i.test(S);return ep()||b&&N})()&&fc(u.channels),m=(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=!!p.custom_filters&&p.custom_filters.recurring,E=p.plan_details,_=g||E,S=!!p.link_config&&p.link_config.enabled&&p.link_config.has_payment_instruments;return!_&&S})(u);m||f?(ne.preloadTransaction({inlineTransaction:i}),ne.preCheckoutModal=(function(p,g){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},_=document.querySelector("#pre-checkout-modal-".concat(p));if(_){if(K0(_)&&Wl(_))return _;_.remove()}var S=document.createElement("div");S.classList.add("pre-checkout-modal"),S.id="pre-checkout-modal-".concat(p),S.style.zIndex=D7()+1;var N=document.createElement("div");N.classList.add("pre-checkout-modal__content"),S.appendChild(N);var b=g||{},L=b.merchant_logo,A=b.merchant_name,q=b.email,$=b.amount,G=b.currency,te=b.label,se=new Intl.NumberFormat("en",{style:"currency",currency:G,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format($/100),fe=document.createElement("div");fe.classList.add("payment-info"),fe.innerHTML='<img class="merchant-logo" src="'.concat(L,'" alt="').concat(A,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(te||q,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(se,`</span></div>
    </div>`),N.appendChild(fe),N.innerHTML+=A7;var de=document.createElement("div");de.classList.add("modal-wrapper"),E.canPayWithVault?z7(de,{canPayWithApplePay:E.canPayWithApplePay}):F7(de),de.innerHTML=de.innerHTML+q2+R7,N.appendChild(de);var _e=document.createElement("style");return _e.textContent=O7,document.body.appendChild(_e),document.body.appendChild(S),S})(ne.id,u,{canPayWithVault:m,canPayWithApplePay:f}),f?(ne.paymentRequestContainer=Wl(ne.preCheckoutModal),q0(ne.paymentRequestContainer,{channels:u.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},u.merchant_id).then((function(){ne.registerPaymentRequestEventListeners(),ne.openPreCheckoutModal()})).catch((function(){m?(Wl(ne.preCheckoutModal).remove(),ne.openPreCheckoutModal()):(ne.closePreCheckoutModal(),ne.animateCheckoutIn())})).finally((function(){s(i)}))):(ne.openPreCheckoutModal(),s(i))):(ne.newTransaction({inlineTransaction:i}),s(i))})).catch((function(u){i.onSetupError({status:!1,message:u.message}),l(u)}))}))}},{key:"openPreCheckoutModal",value:function(){var n;this.registerPreCheckoutModalEventListeners(),n=this.preCheckoutModal,new Promise((function(i,s){try{var l=n.querySelector(".pre-checkout-modal__content");n.classList.add("show"),setTimeout((function(){l.classList.add("show"),i(!0)}),50)}catch(u){s(u)}}))}},{key:"registerPreCheckoutModalEventListeners",value:function(){var n,i=this,s=!1,l=this.activeTransaction();document.addEventListener("touchstart",(function(p){p.preventDefault(),s||(s=!0,n=setTimeout((function(){s=!1}),125))}),!0),document.addEventListener("touchend",(function(p){p.target&&p.target.isSameNode(ne.preCheckoutModal)&&s&&(clearTimeout(n),ne.closePreCheckoutModal(),l&&l.cancel()),s=!1}),!0);var u=K0(this.preCheckoutModal),f=this.preCheckoutModal.querySelector("#".concat(Q2));u.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn()},f&&(f.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn(),i.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var m=(function(p){return p.querySelector("#apple-pay-close-button")})(this.preCheckoutModal);m.onclick=function(){i.sendAnalyticsEventToCheckout(Q7),i.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(n){var i;this.preCheckoutModal&&(n==="failed"?(i=this.preCheckoutModal)&&(i.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,i.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):((function(s){s&&(s.querySelector(".pre-checkout-modal__content").classList.remove("show"),s.classList.remove("show"))})(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(n){var i,s=n.preload,l=n.inlineTransaction,u=uc(n,G7),f=this.paymentRequestContainer&&ps(this.paymentRequestContainer);this.activeTransaction()&&!f&&this.activeTransaction().cancel();var m=Kl(this.transactions,l?l.parameters:u),p=m||l||new ql(u);return m?(p.isActive=!0,i={accessCode:p.accessCode}):(i=p.accessCode?{accessCode:p.accessCode}:p.urlParameters,this.transactions.push(p)),this.isDeprecatedApi||this.open(i,s),p}},{key:"preloadTransaction",value:function(n){var i=this;return this.newTransaction(Ne(Ne({},n),{},{preload:!0})),function(){return i.animateCheckoutIn()}}},{key:"paymentRequest",value:function(n){var i=n.container,s=n.styles,l=n.onElementsMount,u=uc(n,J7);return ne=this,new Promise((function(f,m){var p=document.querySelector("#".concat(n.loadPaystackCheckoutButton));if(K2()){ne.activeTransaction()&&ne.activeTransaction().cancel(),i&&as(i)||Gl("A container is required to mount the payment request button"),ne.paymentRequestContainer=as(i);var g=Kl(ne.transactions,u),E=g||new ql(u);E.requestInline().then((function(N){q0(ne.paymentRequestContainer,{channels:N.channels,styles:s},N.merchant_id).then((function(b){l&&l(b)})).catch((function(){l&&l(null)})).finally((function(){if(g?E.isActive=!0:ne.transactions.push(E),ne.registerPaymentRequestEventListeners(),p){var b=ne.preloadTransaction({inlineTransaction:E});p.onclick=b}f(E)}))})).catch((function(N){E.onSetupError({status:!1,message:N.message}),m(N)}))}else{if(n&&n.loadPaystackCheckoutButton)if(p){var _=ne.preloadTransaction(u);p.onclick=_}else zc("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");l&&l(null);var S=ne.activeTransaction();f(S)}}))}},{key:"registerApplePayEventListener",value:function(){var n=this;ps(this.paymentRequestContainer).onclick=function(){return n.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var n=this.activeTransaction();n&&fc(n.response.channels)?this.registerApplePayEventListener():j7(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var n,i,s,l,u,f=this,m="apple pay",p=this.activeTransaction();if(p){var g={channel:"apple_pay",paymentMethod:m,currency:p.currency,amount:p.amount},E={channel:"apple_pay",currency:p.currency,amount:p.amount,timeSpent:p.getTimeSpent()};try{p.logAttempt(m),this.sendAnalyticsEventToCheckout(Y7,g);var _=(n={currency:p.response.currency,amount:p.response.amount,merchantName:p.response.merchant_name,interval:p.response.plan_details&&p.response.plan_details.interval},i=n.currency,s=n.amount,l=n.merchantName,u=n.interval,Ne({countryCode:"NG",currencyCode:i,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(l," - Paystack"),type:"final",amount:String(B0(s))}},typeof u=="string"&&u.trim()!==""&&{lineItems:[{label:M7(u),amount:String(B0(s))}]})),S=new window.ApplePaySession(it.applePayVersion,_);S.onvalidatemerchant=function(N){var b=(function(L){var A=L.transactionId,q=L.validationURL,$=L.merchantName,G=L.domainName,te=G===void 0?window&&window.location&&window.location.hostname:G,se="".concat(it.paymentBaseUrl).concat(it.applePayValidateSessionPath),fe=W0({transaction:A,sessionUrl:q,displayName:$,domainName:te});return fetch(se,Ne(Ne({},$0),{},{body:fe})).then((function(de){return de.json()}))})({validationURL:N.validationURL,transactionId:p.id,merchantName:p.response.merchant_name});b.then((function(L){L.status!=="success"?p.onSetupError(L):S.completeMerchantValidation(L.data),p.logValidationResponse(L.message)})).catch((function(L){p.onSetupError(L)}))},S.oncancel=function(){ne.preCheckoutModal||p.onCancel()},S.onpaymentauthorized=function(N){var b=N.payment,L=(function(A){var q=A.transactionId,$=A.payment,G="".concat(it.paymentBaseUrl).concat(it.applePayChargePath),te=W0({transaction:q,paymentObject:JSON.stringify($)});return fetch(G,Ne(Ne({},$0),{},{body:te})).then((function(se){return se.json()}))})({transactionId:p.id,payment:b});L.then((function(A){p.logAPIResponse(A,m),A.status==="success"?(S.completePayment(S.STATUS_SUCCESS),p.onSuccess(A),f.sendAnalyticsEventToCheckout(Z7,E)):(S.completePayment(S.STATUS_FAILURE),p.onSetupError(A),f.sendAnalyticsEventToCheckout(Q0,{channel:"apple_pay",message:A&&A.message||"Transaction attempt failed"})),ne.closePreCheckoutModal(A.status)})).catch((function(A){S.completePayment(S.STATUS_FAILURE),p.onSetupError(A),f.sendAnalyticsEventToCheckout(Q0,{channel:"apple_pay",message:A&&A.message||"Error occurred"}),ne.closePreCheckoutModal("failed")}))},S.begin()}catch(N){p.onSetupError(N)}}else Gl("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(n){return this.newTransaction({accessCode:n})}},{key:"activeTransaction",value:function(){var n=this.transactions.filter((function(s){return s.isActive})),i=n.length?n[n.length-1]:null;return i}},{key:"cancelTransaction",value:function(n){var i=this.transactions.find((function(s){return s.id===n}))||this.activeTransaction();i&&(i.cancel(),this.close())}},{key:"respondToEvent",value:function(n){if(n){var i,s,l=this.activeTransaction();try{var u=n.data||n.message,f=u.event,m=u.data;if(f)switch(f){case"loaded:checkout":this.isLoaded=!0,l&&J0({checkoutIframe:this.checkoutIframe,urlParameters:l.urlParameters});break;case"loaded:transaction":i=this.backgroundIframe,(s=i.contentWindow.document)&&(s.getElementById("app-loader").style.display="none"),l.onLoad(m);break;case"error":m.type==="setup"?l.onSetupError(m):l.logError(m);break;case"cancel":case"close":this.close();var p=m&&m.status;p&&l.setStatus(p),!(this.paymentRequestContainer&&ps(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(l.isActive=!1),l.onCancel();break;case"transfer:pending":this.close();var g=m&&m.status;g&&l.setStatus(g),l.onBankTransferConfirmationPending();break;case"success":this.close(),l.onSuccess(m)}}catch{}}}},{key:"respondToEmbedEvents",value:function(n){var i,s,l=this.activeTransaction(),u=n.data||n.message;if(u&&(typeof u=="string"||u instanceof String)){var f={action:s=(i=u)&&typeof i=="string"?i.split(" ")[0]:null,data:s?i.split(" ").slice(2).join(" "):null};f&&f.action==="PaystackClose"&&f.data&&l.onSuccess(u),f.action==="PaystackTLSClose"&&l.cancel()}}},{key:"animateCheckoutIn",value:function(){var n,i=this;if(!this.isOpen){var s=this.checkoutIframe,l=this.backgroundIframe;(n={checkoutIframe:s,backgroundIframe:l},new Promise((function(u,f){n||f("No dom element provided");var m=n.checkoutIframe,p=n.backgroundIframe;m&&p||f("No dom element provided"),m.style.display="",m.style.visibility="visible",p.style.display="",p.style.visibility="visible",u()}))).then((function(){i.checkoutIframe.contentWindow.postMessage("render","*")})),this.isOpen=!0}}},{key:"open",value:function(n,i){n&&(J0({checkoutIframe:this.checkoutIframe,urlParameters:n}),i||this.animateCheckoutIn())}},{key:"close",value:function(){var n=this;if(this.isOpen){var i,s=this.checkoutIframe,l=this.backgroundIframe;(i={checkoutIframe:s,backgroundIframe:l},new Promise((function(u,f){i||f("No dom element provided");var m=i.checkoutIframe,p=i.backgroundIframe;m&&p||f("No dom element provided"),p.style.opacity=0,m.style.display="none",m.style.visibility="hidden",setTimeout((function(){p.style.display="none",p.style.visibility="hidden",p.style.opacity=1,u()}),300)}))).then((function(){n.checkoutIframe.contentWindow.postMessage("close","*")})),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(n){var i=n&&n.container;ne||(ne=new r({isDeprecatedApi:!0,isEmbed:i})),G0("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var s=ne.newTransaction(n,"deprecated"),l=s.urlParameters;if(i){var u="".concat(it.siteUrl,"/assets/payment/production/inline.html?").concat(W2(l)),f=(function(m,p){var g=$l("embed-checkout-".concat(m));return g.style.cssText=`
  background: transparent;
  background: rgba(0,0,0,0);
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  nmargin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: none;
`,g.src=p,g.id=m,g.name=m,g})(ne.id,u);(function(m,p){var g=document.getElementById(m);g.innerHTML="",g.removeAttribute("style"),g.className="paystack-embed-container",g.style.position="relative",g.style.width="100%",g.appendChild(p)})(n.container,f),f.onload=function(){var m;f.contentWindow.postMessage("PaystackOpen ".concat(ne.id),"*"),m=f,new Promise((function(p,g){m||g("No dom element provided"),m.style.display="",m.style.visibility="visible",p()}))}}else s.openIframe=function(){G0("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),ne.open(l)};return s}}]),r})();if(Y0=V0().length>0,Z0=Mr()&&Mr().parentElement.tagName==="FORM",Y0&&Z0){var Jl,Xn=(function(){var r={},n=Mr();return V0().forEach((function(i){var s=n.getAttribute(i),l=i.split("data-")[1].replace(/-([a-z])/g,(function(u){return u[1].toUpperCase()}));r[l]=s})),(function(i){if(i.buttonId&&!document.getElementById(i.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var s=Ne({},i);s.buttonText=i.buttonText||"Pay",s.buttonVariant="normal",s.buttonWordmarkVariant="normal";var l=["normal","light"];return i.buttonVariant&&l.indexOf(i.buttonVariant)>-1&&(s.buttonVariant=i.buttonVariant),i.buttonWordmarkVariant&&l.indexOf(i.buttonWordmarkVariant)>-1&&(s.buttonWordmarkVariant=i.buttonWordmarkVariant),s})(r)})(),X0=Mr().parentElement;ne||(ne=new tp),(function(r){var n;if(r.id)(n=document.getElementById(r.id)).setAttribute("data-inline-id",r.id);else{var i=document.createElement("div");i.id="inline-button-".concat(r.inlineId),i.innerHTML=(function(s){var l,u,f={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:q2};return`
    <style>
      #inline-button-`.concat(s.inlineId,` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(s.inlineId,`__trigger {
        `).concat((l=s.variant||"normal",u={normal:`
    background: linear-gradient(180deg,#44b669 0,#40ad57);
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    color: #ffffff;
  `,light:`
    background: white;
    text-shadow: none;
    color: #011b33;
  `},"".concat(`
    box-sizing: border-box;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 10px;
    text-align: center;
    -webkit-appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    padding: 16px 24px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    transition: all .3s ease;
    border: none;
    min-width: 190px;
  `).concat(u[l])),`
      }
      #inline-button-`).concat(s.inlineId,`__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(s.inlineId,`__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(s.inlineId,'__trigger" data-inline-id="').concat(s.inlineId,'">').concat(s.text||"Pay"," ").concat(s.currency||"NGN"," ").concat(s.amount,`</button>
    <div id="inline-button-`).concat(s.inlineId,`__wordmark">
      `).concat(f[s.wordmarkVariant||"normal"],`
    </div>
  `)})(r),r.parent.parentNode.insertBefore(i,r.parent.nextSibling),n=P7(i.getElementsByTagName("button"),1)[0]}return n})({inlineId:ne.id,amount:Xn.amount/100,currency:Xn.currency,id:Xn.buttonId,text:Xn.buttonText,variant:Xn.buttonVariant,wordmarkVariant:Xn.buttonWordmarkVariant,parent:Mr()}).addEventListener("click",(function(r){r.preventDefault(),Jl?ne.resumeTransaction(Jl.accessCode):Jl=ne.newTransaction(Ne(Ne({},Xn),{},{onSuccess:function(n){var i,s,l,u,f,m;i={type:"hidden",name:"reference",value:n.reference,parent:X0},s=i.type,l=i.value,u=i.name,f=i.parent,(m=document.createElement("input")).type=s,m.value=l,m.name=u,f.appendChild(m),X0.submit()}}))}))}var X7=function(r){var n=new tp;n.newTransaction(r)};function np(r){function n(i){var s=i.config,l=i.onSuccess,u=i.onClose,f=Te(Te({},r),s),m=f.publicKey,p=f.firstname,g=f.lastname,E=f.phone,_=f.email,S=f.amount,N=f.reference,b=f.metadata,L=f.currency,A=L===void 0?"NGN":L,q=f.channels,$=f.label,G=f.plan,te=f.quantity,se=f.subaccount,fe=f.transaction_charge,de=f.bearer,_e=f.split,at=f.split_code,Qe=f.connect_account,ht=f.connect_split,Y=f.onBankTransferConfirmationPending,ve=Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te({onSuccess:l||function(){return null},onCancel:u||function(){return null},key:m,email:_,amount:S},p&&{firstname:p}),g&&{lastname:g}),E&&{phone:E}),N&&{ref:N}),A&&{currency:A}),q&&{channels:q}),b&&{metadata:b}),$&&{label:$}),Y&&{onBankTransferConfirmationPending:Y}),se&&{subaccount:se}),fe&&{transaction_charge:fe}),de&&{bearer:de}),_e&&{split:_e}),at&&{split_code:at}),G&&{plan:G}),te&&{quantity:te}),ht&&{connect_split:ht}),Qe&&{connect_account:Qe});X7(ve)}return n}var eg=function(r){var n=r.text,i=r.className,s=r.children,l=r.onSuccess,u=r.onClose,f=r.disabled,m=jc(r,["text","className","children","onSuccess","onClose","disabled"]),p=np(m);return _t.createElement("button",{className:i,onClick:function(){return p({config:m,onSuccess:l,onClose:u})},disabled:f},n||s)},rp=R.createContext({config:{},initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),tg=function(r){var n=r.children,i=r.onSuccess,s=r.onClose,l=jc(r,["children","onSuccess","onClose"]),u=np(l);return _t.createElement(rp.Provider,{value:{config:l,initializePayment:u,onSuccess:i,onClose:s}},n)},ng=function(r){var n=r.children,i=r.ref,s=R.useContext(rp),l=s.config,u=s.initializePayment,f=s.onSuccess,m=s.onClose,p=function(){return u({config:l,onSuccess:f,onClose:m})};return n({initializePayment:p,ref:i})};R.forwardRef(function(r,n){var i=r.children,s=r.onSuccess,l=r.onClose,u=jc(r,["children","onSuccess","onClose"]),f=s||function(){return null},m=l||function(){return null};return _t.createElement(tg,Te({},u,{onSuccess:f,onClose:m}),_t.createElement(ng,{ref:n},i))});function rg(){const{cart:r,increment:n,decrement:i,removeFromCart:s,clearCart:l}=vc(),{user:u}=zn(),{addOrder:f}=z2(),m=r.reduce((N,b)=>N+b.price*b.quantity,0),p="pk_live_8ae3997fa52803c7789fd20cf9b114f07bc9ccf4",g=m*100,E=u?u.email:"<user_email>",_=()=>{const N={id:Date.now(),items:r,total:m,email:E,date:new Date().toLocaleString()},b=JSON.parse(localStorage.getItem("orders"))||[];b.push(N),localStorage.setItem("orders",JSON.stringify(b)),l(),f(N),alert("✅ Payment Successful! Your order has been saved.")},S={email:E,amount:g,metadata:{custom_fields:[{display_name:"Cart Items",variable_name:"cart",value:r.map(N=>`${N.name} x${N.quantity}`).join(", ")}]},publicKey:p,text:"Checkout with Paystack",onSuccess:_,onClose:()=>alert("❌ Payment Window Closed")};return w.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[w.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Your Cart"}),r.length===0?w.jsx("p",{className:"text-gray-600",children:"Your cart is empty."}):w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"space-y-4",children:r.map(N=>w.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white shadow rounded-lg",children:[w.jsx("img",{src:N.image,alt:N.name,className:"w-30 h-30 object-scale-down rounded"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("h3",{className:"text-lg font-semibold",children:N.name}),w.jsxs("p",{className:"text-gray-500 text-sm",children:["₦",N.price.toLocaleString()]}),w.jsxs("p",{className:"text-gray-400 text-xs",children:["Quantity: ",N.quantity]})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("button",{onClick:()=>i(N.id),className:"p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600",children:w.jsx(i7,{size:16})}),w.jsx("span",{className:"px-2 font-medium",children:N.quantity}),w.jsx("button",{onClick:()=>n(N.id),className:"p-2 rounded-full bg-green-500 text-white hover:bg-green-600",children:w.jsx(s7,{size:16})})]}),w.jsx("button",{onClick:()=>s(N.id),className:"p-2 rounded-full bg-red-500 text-white hover:bg-red-600",children:w.jsx(g7,{size:16})})]},N.id))}),w.jsxs("div",{className:"mt-8 p-6 bg-gray-50 shadow rounded-lg",children:[w.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Total: ₦",m.toLocaleString()]}),w.jsxs("div",{className:"flex gap-4",children:[w.jsx("button",{onClick:l,className:"bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800",children:"Clear Cart"}),w.jsx(eg,{...S,disabled:r.length===0||m===0,className:"bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"})]})]})]})]})}var ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ef=_t.createContext&&_t.createContext(ip),ig=["attr","size","title"];function og(r,n){if(r==null)return{};var i=sg(r,n),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)s=u[l],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function sg(r,n){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(n.indexOf(s)>=0)continue;i[s]=r[s]}return i}function Es(){return Es=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Es.apply(this,arguments)}function tf(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function Is(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?tf(Object(i),!0).forEach(function(s){ag(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):tf(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function ag(r,n,i){return n=lg(n),n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function lg(r){var n=cg(r,"string");return typeof n=="symbol"?n:n+""}function cg(r,n){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function op(r){return r&&r.map((n,i)=>_t.createElement(n.tag,Is({key:i},n.attr),op(n.child)))}function Fc(r){return n=>_t.createElement(ug,Es({attr:Is({},r.attr)},n),op(r.child))}function ug(r){var n=i=>{var{attr:s,size:l,title:u}=r,f=og(r,ig),m=l||i.size||"1em",p;return i.className&&(p=i.className),r.className&&(p=(p?p+" ":"")+r.className),_t.createElement("svg",Es({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:p,style:Is(Is({color:r.color||i.color},i.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&_t.createElement("title",null,u),r.children)};return ef!==void 0?_t.createElement(ef.Consumer,null,i=>n(i)):n(ip)}function dg(r){return Fc({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(r)}function fg(r){return Fc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function pg(r){return Fc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function hg(){const{login:r,loginWithGoogle:n}=zn(),i=Vi(),[s,l]=R.useState(""),[u,f]=R.useState(""),[m,p]=R.useState(""),[g,E]=R.useState(!1),_=async N=>{N.preventDefault(),p(""),E(!0);const b=await r(s,u);if(b.success){const L=b.user.email;i(L==="admin@shop.com"?"/admin":"/")}else p(b.message);E(!1)},S=async()=>{p(""),E(!0);const N=await n();if(N.success){const b=N.user.email;i(b==="admin@shop.com"?"/admin":"/")}else p(N.message);E(!1)};return w.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:w.jsxs("form",{className:"bg-white p-8 rounded-lg shadow-lg w-96 space-y-6",onSubmit:_,children:[w.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-4",children:"Welcome Back"}),m&&w.jsx("p",{className:"text-red-500 text-center",children:m}),w.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[w.jsx(fg,{className:"text-gray-400 mr-2"}),w.jsx("input",{type:"email",placeholder:"Email",className:"w-full outline-none",value:s,onChange:N=>l(N.target.value),required:!0})]}),w.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[w.jsx(pg,{className:"text-gray-400 mr-2"}),w.jsx("input",{type:"password",placeholder:"Password",className:"w-full outline-none",value:u,onChange:N=>f(N.target.value),required:!0})]}),w.jsx("button",{type:"submit",disabled:g,className:`w-full py-2 rounded text-white font-semibold transition ${g?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:g?"Logging in...":"Login"}),w.jsxs("div",{className:"flex items-center my-2",children:[w.jsx("hr",{className:"flex-1 border-gray-300"}),w.jsx("span",{className:"mx-2 text-gray-500 text-sm",children:"OR"}),w.jsx("hr",{className:"flex-1 border-gray-300"})]}),w.jsxs("button",{type:"button",onClick:S,disabled:g,className:"w-full py-2 rounded text-white bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 transition",children:[w.jsx(dg,{}),g?"Processing...":"Login with Google"]}),w.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Don’t have an account?"," ",w.jsx(xn,{to:"/signup",className:"text-blue-500 hover:underline font-medium",children:"Sign Up"})]})]})})}function mg(){const{signup:r}=zn(),n=Vi(),[i,s]=R.useState(""),[l,u]=R.useState(""),[f,m]=R.useState(""),[p,g]=R.useState(!1),E=async _=>{_.preventDefault(),m(""),g(!0);const S=await r(i,l);S.success?n("/"):m(S.message),g(!1)};return w.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:w.jsxs("form",{onSubmit:E,className:"bg-white p-6 rounded shadow-md w-96",children:[w.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Sign Up"}),f&&w.jsx("p",{className:"text-red-500 mb-3",children:f}),w.jsx("input",{type:"email",placeholder:"Email",className:"border p-2 w-full mb-3 rounded",value:i,onChange:_=>s(_.target.value),required:!0}),w.jsx("input",{type:"password",placeholder:"Password",className:"border p-2 w-full mb-3 rounded",value:l,onChange:_=>u(_.target.value),required:!0}),w.jsx("button",{type:"submit",disabled:p,className:`w-full py-2 rounded text-white transition ${p?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:p?"Signing up...":"Sign Up"}),w.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Already have an account?"," ",w.jsx(xn,{to:"/login",className:"text-blue-500 hover:underline",children:"Login"})]})]})})}function gg(){const{orders:r}=z2(),{user:n}=zn(),i=n?r.filter(s=>s.email===n.email):[];return w.jsxs("div",{className:"p-6",children:[w.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Order History"}),n?i.length===0?w.jsx("p",{children:"You have no orders yet."}):w.jsx("ul",{className:"space-y-4",children:i.map(s=>w.jsxs("li",{className:"bg-white p-4 rounded shadow space-y-2",children:[w.jsxs("p",{className:"font-bold",children:["Order ID: ",s.id]}),w.jsxs("p",{children:["Date: ",s.date]}),w.jsxs("p",{children:["Total: ₦",s.total.toLocaleString()]}),w.jsxs("p",{children:["Items: ",s.items.map(l=>l.name).join(", ")]})]},s.id))}):w.jsx("p",{children:"Please log in to view your orders."})]})}function yg(){const{products:r,addProduct:n,deleteProduct:i,updateProduct:s}=M2(),{heroes:l,addHero:u,updateHero:f,deleteHero:m}=j2(),[p,g]=R.useState({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),[E,_]=R.useState(null),[S,N]=R.useState(null),b=Y=>{const{name:ve,value:we}=Y.target;g(je=>({...je,[ve]:we}))},L=Y=>{const ve=Y.target.files[0];if(ve){const we=new FileReader;we.onloadend=()=>{g(je=>({...je,image:we.result})),_(we.result)},we.readAsDataURL(ve)}},A=Y=>{if(Y.preventDefault(),!p.title||!p.image){alert("Hero title and image are required.");return}S?(f(S,p),N(null)):u(p),g({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),_(null)},q=Y=>{g(Y),_(Y.image),N(Y.id)},[$,G]=R.useState({name:"",price:"",image:"",description:""}),[te,se]=R.useState(null),[fe,de]=R.useState(null),_e=Y=>{const{name:ve,value:we}=Y.target;G(je=>({...je,[ve]:we}))},at=Y=>{const ve=Y.target.files[0];if(ve){const we=new FileReader;we.onload=()=>{G(je=>({...je,image:we.result})),se(we.result)},we.readAsDataURL(ve)}},Qe=Y=>{if(Y.preventDefault(),!$.name||!$.price||!$.image){alert("Please fill in product name, price, and image.");return}fe?(s(fe,$),de(null)):n($),G({name:"",price:"",image:"",description:""}),se(null)},ht=Y=>{G(Y),se(Y.image),de(Y.id)};return w.jsxs("div",{className:"p-6 space-y-10",children:[w.jsxs("div",{className:"bg-white shadow rounded p-6",children:[w.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Hero Banner"}),w.jsxs("form",{onSubmit:A,className:"grid gap-4 mb-8",children:[w.jsx("input",{type:"text",name:"title",value:p.title,onChange:b,placeholder:"Hero Title",className:"p-2 border rounded"}),w.jsx("input",{type:"text",name:"subtitle",value:p.subtitle,onChange:b,placeholder:"Hero Subtitle",className:"p-2 border rounded"}),w.jsx("input",{type:"text",name:"ctaText",value:p.ctaText,onChange:b,placeholder:"CTA Button Text",className:"p-2 border rounded"}),w.jsx("input",{type:"text",name:"ctaLink",value:p.ctaLink,onChange:b,placeholder:"CTA Button Link",className:"p-2 border rounded"}),w.jsx("input",{type:"file",accept:"image/*",onChange:L,className:"p-2 border rounded"}),E&&w.jsx("img",{src:E,alt:"Hero Preview",className:"w-full max-h-64 object-scale-down rounded border"}),w.jsx("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",children:S?"Update Hero":"Add Hero"})]}),l.length===0?w.jsx("p",{className:"text-gray-500",children:"No heroes yet. Add one above."}):w.jsx("div",{className:"grid gap-4",children:l.map(Y=>w.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm flex items-center p-4 gap-4",children:[w.jsx("img",{src:Y.image,alt:Y.title,className:"w-32 h-20 object-scale-down rounded"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("h3",{className:"font-bold",children:Y.title}),w.jsx("p",{className:"text-sm text-gray-600",children:Y.subtitle})]}),w.jsx("button",{onClick:()=>q(Y),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),w.jsx("button",{onClick:()=>m(Y.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]},Y.id))})]}),w.jsxs("div",{className:"bg-white shadow rounded p-6",children:[w.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Products"}),w.jsxs("form",{onSubmit:Qe,className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[w.jsx("input",{type:"text",name:"name",value:$.name,onChange:_e,placeholder:"Product Name",className:"p-2 border rounded"}),w.jsx("input",{type:"number",name:"price",value:$.price,onChange:_e,placeholder:"Price",className:"p-2 border rounded"}),w.jsx("input",{type:"file",accept:"image/*",onChange:at,className:"p-2 border rounded md:col-span-2"}),te&&w.jsx("img",{src:te,alt:"Product Preview",className:"w-32 h-32 object-scale-down rounded border md:col-span-2"}),w.jsx("textarea",{name:"description",value:$.description,onChange:_e,placeholder:"Product Description",className:"p-2 border rounded md:col-span-2",rows:"3"}),w.jsx("button",{type:"submit",className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded col-span-1 md:col-span-2",children:fe?"Update Product":"Add Product"})]}),r.length===0?w.jsx("p",{className:"text-gray-500",children:"No products yet. Add one above."}):w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:r.map(Y=>w.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm overflow-hidden flex flex-col",children:[w.jsx("img",{src:Y.image,alt:Y.name,className:"w-full h-40 object-scale-down rounded-b-none mt-2"}),w.jsxs("div",{className:"p-4 flex-1 flex flex-col",children:[w.jsx("h3",{className:"text-lg font-semibold",children:Y.name}),w.jsx("p",{className:"text-sm text-gray-600 mb-2",children:Y.description||"No description"}),w.jsxs("p",{className:"text-green-600 font-bold mb-4",children:["₦",Number(Y.price).toLocaleString()]}),w.jsxs("div",{className:"mt-auto flex gap-2",children:[w.jsx("button",{onClick:()=>ht(Y),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),w.jsx("button",{onClick:()=>i(Y.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]})]})]},Y.id))})]})]})}function vg(){const{login:r,logout:n}=zn(),i=Vi(),[s,l]=R.useState({email:"",password:""}),[u,f]=R.useState(""),[m,p]=R.useState(!1),g=async E=>{E.preventDefault(),f(""),p(!0);const _=await r(s.email,s.password);_.success?_.user.email==="admin@shop.com"?i("/admin"):(f("You are not allowed to log in here."),await n()):f(_.message),p(!1)};return w.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:w.jsxs("form",{onSubmit:g,className:"bg-white p-6 rounded shadow w-96 space-y-4",children:[w.jsx("h1",{className:"text-2xl font-bold text-center",children:"Admin Login"}),u&&w.jsx("p",{className:"text-red-500 text-center",children:u}),w.jsx("input",{type:"email",placeholder:"Admin Email",value:s.email,onChange:E=>l({...s,email:E.target.value}),className:"w-full border p-2 rounded",required:!0}),w.jsx("input",{type:"password",placeholder:"Password",value:s.password,onChange:E=>l({...s,password:E.target.value}),className:"w-full border p-2 rounded",required:!0}),w.jsx("button",{type:"submit",disabled:m,className:`w-full p-2 rounded text-white ${m?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:m?"Logging in...":"Login"})]})})}function wg(){return w.jsx(j9,{children:w.jsx(F9,{children:w.jsx(m3,{children:w.jsx(V9,{children:w.jsx(U9,{children:w.jsxs(u3,{basename:"/MrShrek-Store/",children:[w.jsx(k7,{}),w.jsxs(r3,{children:[w.jsx(In,{path:"/",element:w.jsx(T7,{})}),w.jsx(In,{path:"/cart",element:w.jsx(j0,{children:w.jsx(rg,{})})}),w.jsx(In,{path:"/login",element:w.jsx(hg,{})}),w.jsx(In,{path:"/signup",element:w.jsx(mg,{})}),w.jsx(In,{path:"/orders",element:w.jsx(j0,{children:w.jsx(gg,{})})}),w.jsx(In,{path:"/admin",element:w.jsx(z9,{children:w.jsx(yg,{})})}),w.jsx(In,{path:"/adminlogin",element:w.jsx(vg,{})})]})]})})})})})})}f4.createRoot(document.getElementById("root")).render(w.jsx(R.StrictMode,{children:w.jsx(wg,{})}));
