function h4(r,n){for(var i=0;i<n.length;i++){const o=n[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in r)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function p4(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tl={exports:{}},Pi={},Pl={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function m4(){if(zd)return ae;zd=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),C=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=C&&E[C]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,O={};function A(E,j,oe){this.props=E,this.context=j,this.refs=O,this.updater=oe||R}A.prototype.isReactComponent={},A.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},A.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function K(){}K.prototype=A.prototype;function W(E,j,oe){this.props=E,this.context=j,this.refs=O,this.updater=oe||R}var L=W.prototype=new K;L.constructor=W,P(L,A.prototype),L.isPureReactComponent=!0;var V=Array.isArray,G=Object.prototype.hasOwnProperty,Y={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function me(E,j,oe){var le,ue={},de=null,ye=null;if(j!=null)for(le in j.ref!==void 0&&(ye=j.ref),j.key!==void 0&&(de=""+j.key),j)G.call(j,le)&&!ie.hasOwnProperty(le)&&(ue[le]=j[le]);var he=arguments.length-2;if(he===1)ue.children=oe;else if(1<he){for(var _e=Array(he),ct=0;ct<he;ct++)_e[ct]=arguments[ct+2];ue.children=_e}if(E&&E.defaultProps)for(le in he=E.defaultProps,he)ue[le]===void 0&&(ue[le]=he[le]);return{$$typeof:r,type:E,key:de,ref:ye,props:ue,_owner:Y.current}}function Ve(E,j){return{$$typeof:r,type:E.type,key:j,ref:E.ref,props:E.props,_owner:E._owner}}function Xe(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function mt(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(oe){return j[oe]})}var ee=/\/+/g;function we(E,j){return typeof E=="object"&&E!==null&&E.key!=null?mt(""+E.key):j.toString(36)}function Ce(E,j,oe,le,ue){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(de){case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case r:case n:ye=!0}}if(ye)return ye=E,ue=ue(ye),E=le===""?"."+we(ye,0):le,V(ue)?(oe="",E!=null&&(oe=E.replace(ee,"$&/")+"/"),Ce(ue,j,oe,"",function(ct){return ct})):ue!=null&&(Xe(ue)&&(ue=Ve(ue,oe+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(ee,"$&/")+"/")+E)),j.push(ue)),1;if(ye=0,le=le===""?".":le+":",V(E))for(var he=0;he<E.length;he++){de=E[he];var _e=le+we(de,he);ye+=Ce(de,j,oe,_e,ue)}else if(_e=x(E),typeof _e=="function")for(E=_e.call(E),he=0;!(de=E.next()).done;)de=de.value,_e=le+we(de,he++),ye+=Ce(de,j,oe,_e,ue);else if(de==="object")throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ye}function De(E,j,oe){if(E==null)return E;var le=[],ue=0;return Ce(E,le,"","",function(de){return j.call(oe,de,ue++)}),le}function et(E){if(E._status===-1){var j=E._result;j=j(),j.then(function(oe){(E._status===0||E._status===-1)&&(E._status=1,E._result=oe)},function(oe){(E._status===0||E._status===-1)&&(E._status=2,E._result=oe)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var Te={current:null},F={transition:null},te={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:F,ReactCurrentOwner:Y};function $(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:De,forEach:function(E,j,oe){De(E,function(){j.apply(this,arguments)},oe)},count:function(E){var j=0;return De(E,function(){j++}),j},toArray:function(E){return De(E,function(j){return j})||[]},only:function(E){if(!Xe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ae.Component=A,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=W,ae.StrictMode=o,ae.Suspense=h,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ae.act=$,ae.cloneElement=function(E,j,oe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var le=P({},E.props),ue=E.key,de=E.ref,ye=E._owner;if(j!=null){if(j.ref!==void 0&&(de=j.ref,ye=Y.current),j.key!==void 0&&(ue=""+j.key),E.type&&E.type.defaultProps)var he=E.type.defaultProps;for(_e in j)G.call(j,_e)&&!ie.hasOwnProperty(_e)&&(le[_e]=j[_e]===void 0&&he!==void 0?he[_e]:j[_e])}var _e=arguments.length-2;if(_e===1)le.children=oe;else if(1<_e){he=Array(_e);for(var ct=0;ct<_e;ct++)he[ct]=arguments[ct+2];le.children=he}return{$$typeof:r,type:E.type,key:ue,ref:de,props:le,_owner:ye}},ae.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},ae.createElement=me,ae.createFactory=function(E){var j=me.bind(null,E);return j.type=E,j},ae.createRef=function(){return{current:null}},ae.forwardRef=function(E){return{$$typeof:m,render:E}},ae.isValidElement=Xe,ae.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:et}},ae.memo=function(E,j){return{$$typeof:y,type:E,compare:j===void 0?null:j}},ae.startTransition=function(E){var j=F.transition;F.transition={};try{E()}finally{F.transition=j}},ae.unstable_act=$,ae.useCallback=function(E,j){return Te.current.useCallback(E,j)},ae.useContext=function(E){return Te.current.useContext(E)},ae.useDebugValue=function(){},ae.useDeferredValue=function(E){return Te.current.useDeferredValue(E)},ae.useEffect=function(E,j){return Te.current.useEffect(E,j)},ae.useId=function(){return Te.current.useId()},ae.useImperativeHandle=function(E,j,oe){return Te.current.useImperativeHandle(E,j,oe)},ae.useInsertionEffect=function(E,j){return Te.current.useInsertionEffect(E,j)},ae.useLayoutEffect=function(E,j){return Te.current.useLayoutEffect(E,j)},ae.useMemo=function(E,j){return Te.current.useMemo(E,j)},ae.useReducer=function(E,j,oe){return Te.current.useReducer(E,j,oe)},ae.useRef=function(E){return Te.current.useRef(E)},ae.useState=function(E){return Te.current.useState(E)},ae.useSyncExternalStore=function(E,j,oe){return Te.current.useSyncExternalStore(E,j,oe)},ae.useTransition=function(){return Te.current.useTransition()},ae.version="18.3.1",ae}var Fd;function yc(){return Fd||(Fd=1,Pl.exports=m4()),Pl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function g4(){if(Vd)return Pi;Vd=1;var r=yc(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,y){var _,C={},x=null,R=null;y!==void 0&&(x=""+y),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(R=h.ref);for(_ in h)o.call(h,_)&&!u.hasOwnProperty(_)&&(C[_]=h[_]);if(m&&m.defaultProps)for(_ in h=m.defaultProps,h)C[_]===void 0&&(C[_]=h[_]);return{$$typeof:n,type:m,key:x,ref:R,props:C,_owner:l.current}}return Pi.Fragment=i,Pi.jsx=f,Pi.jsxs=f,Pi}var Hd;function y4(){return Hd||(Hd=1,Tl.exports=g4()),Tl.exports}var g=y4(),N=yc();const _t=p4(N),v4=h4({__proto__:null,default:_t},[N]);var so={},Nl={exports:{}},ot={},Rl={exports:{}},Al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function w4(){return Bd||(Bd=1,(function(r){function n(F,te){var $=F.length;F.push(te);e:for(;0<$;){var E=$-1>>>1,j=F[E];if(0<l(j,te))F[E]=te,F[$]=j,$=E;else break e}}function i(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var te=F[0],$=F.pop();if($!==te){F[0]=$;e:for(var E=0,j=F.length,oe=j>>>1;E<oe;){var le=2*(E+1)-1,ue=F[le],de=le+1,ye=F[de];if(0>l(ue,$))de<j&&0>l(ye,ue)?(F[E]=ye,F[de]=$,E=de):(F[E]=ue,F[le]=$,E=le);else if(de<j&&0>l(ye,$))F[E]=ye,F[de]=$,E=de;else break e}}return te}function l(F,te){var $=F.sortIndex-te.sortIndex;return $!==0?$:F.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var h=[],y=[],_=1,C=null,x=3,R=!1,P=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(F){for(var te=i(y);te!==null;){if(te.callback===null)o(y);else if(te.startTime<=F)o(y),te.sortIndex=te.expirationTime,n(h,te);else break;te=i(y)}}function V(F){if(O=!1,L(F),!P)if(i(h)!==null)P=!0,et(G);else{var te=i(y);te!==null&&Te(V,te.startTime-F)}}function G(F,te){P=!1,O&&(O=!1,K(me),me=-1),R=!0;var $=x;try{for(L(te),C=i(h);C!==null&&(!(C.expirationTime>te)||F&&!mt());){var E=C.callback;if(typeof E=="function"){C.callback=null,x=C.priorityLevel;var j=E(C.expirationTime<=te);te=r.unstable_now(),typeof j=="function"?C.callback=j:C===i(h)&&o(h),L(te)}else o(h);C=i(h)}if(C!==null)var oe=!0;else{var le=i(y);le!==null&&Te(V,le.startTime-te),oe=!1}return oe}finally{C=null,x=$,R=!1}}var Y=!1,ie=null,me=-1,Ve=5,Xe=-1;function mt(){return!(r.unstable_now()-Xe<Ve)}function ee(){if(ie!==null){var F=r.unstable_now();Xe=F;var te=!0;try{te=ie(!0,F)}finally{te?we():(Y=!1,ie=null)}}else Y=!1}var we;if(typeof W=="function")we=function(){W(ee)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,De=Ce.port2;Ce.port1.onmessage=ee,we=function(){De.postMessage(null)}}else we=function(){A(ee,0)};function et(F){ie=F,Y||(Y=!0,we())}function Te(F,te){me=A(function(){F(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){P||R||(P=!0,et(G))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(h)},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var $=x;x=te;try{return F()}finally{x=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,te){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=x;x=F;try{return te()}finally{x=$}},r.unstable_scheduleCallback=function(F,te,$){var E=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?E+$:E):$=E,F){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=$+j,F={id:_++,callback:te,priorityLevel:F,startTime:$,expirationTime:j,sortIndex:-1},$>E?(F.sortIndex=$,n(y,F),i(h)===null&&F===i(y)&&(O?(K(me),me=-1):O=!0,Te(V,$-E))):(F.sortIndex=j,n(h,F),P||R||(P=!0,et(G))),F},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(F){var te=x;return function(){var $=x;x=te;try{return F.apply(this,arguments)}finally{x=$}}}})(Al)),Al}var $d;function C4(){return $d||($d=1,Rl.exports=w4()),Rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function k4(){if(Wd)return ot;Wd=1;var r=yc(),n=C4();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},C={};function x(e){return h.call(C,e)?!0:h.call(_,e)?!1:y.test(e)?C[e]=!0:(_[e]=!0,!1)}function R(e,t,s,a){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,s,a){if(t===null||typeof t>"u"||R(e,t,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,s,a,c,d,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=p}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(K,W);A[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(K,W);A[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(K,W);A[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function L(e,t,s,a){var c=A.hasOwnProperty(t)?A[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,s,c,a)&&(s=null),a||c===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):c.mustUseProperty?e[c.propertyName]=s===null?c.type===3?!1:"":s:(t=c.attributeName,a=c.attributeNamespace,s===null?e.removeAttribute(t):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,a?e.setAttributeNS(a,t,s):e.setAttribute(t,s))))}var V=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),Y=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),mt=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),F=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,E;function j(e){if(E===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var oe=!1;function le(e,t){if(!e||oe)return"";oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var a=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){a=T}e.call(t.prototype)}else{try{throw Error()}catch(T){a=T}e()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),d=a.stack.split(`
`),p=c.length-1,w=d.length-1;1<=p&&0<=w&&c[p]!==d[w];)w--;for(;1<=p&&0<=w;p--,w--)if(c[p]!==d[w]){if(p!==1||w!==1)do if(p--,w--,0>w||c[p]!==d[w]){var k=`
`+c[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=w);break}}}finally{oe=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?j(e):""}function ue(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case Y:return"Portal";case Ve:return"Profiler";case me:return"StrictMode";case we:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ct(e){var t=_e(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,d.call(this,p)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=ct(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),a="";return e&&(a=_e(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var s=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function qc(e,t){var s=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;s=he(t.value!=null?t.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kc(e,t){t=t.checked,t!=null&&L(e,"checked",t,!1)}function jo(e,t){Kc(e,t);var s=he(t.value),a=t.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Do(e,t.type,s):t.hasOwnProperty("defaultValue")&&Do(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gc(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Do(e,t,s){(t!=="number"||Qi(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var $r=Array.isArray;function ur(e,t,s,a){if(e=e.options,t){t={};for(var c=0;c<s.length;c++)t["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=t.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&a&&(e[s].defaultSelected=!0)}else{for(s=""+he(s),t=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(i(92));if($r(s)){if(1<s.length)throw Error(i(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:he(s)}}function Qc(e,t){var s=he(t.value),a=he(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function Yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Xc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,s,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yh=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){yh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function eu(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function tu(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var a=s.indexOf("--")===0,c=eu(s,t[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,c):e[s]=c}}var vh=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(vh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $o=null,dr=null,fr=null;function nu(e){if(e=pi(e)){if(typeof $o!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Cs(t),$o(e.stateNode,e.type,t))}}function ru(e){dr?fr?fr.push(e):fr=[e]:dr=e}function iu(){if(dr){var e=dr,t=fr;if(fr=dr=null,nu(e),t)for(e=0;e<t.length;e++)nu(t[e])}}function su(e,t){return e(t)}function ou(){}var Wo=!1;function au(e,t,s){if(Wo)return e(t,s);Wo=!0;try{return su(e,t,s)}finally{Wo=!1,(dr!==null||fr!==null)&&(ou(),iu())}}function Kr(e,t){var s=e.stateNode;if(s===null)return null;var a=Cs(s);if(a===null)return null;s=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,t,typeof s));return s}var qo=!1;if(m)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){qo=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{qo=!1}function wh(e,t,s,a,c,d,p,w,k){var T=Array.prototype.slice.call(arguments,3);try{t.apply(s,T)}catch(D){this.onError(D)}}var Jr=!1,Zi=null,Xi=!1,Ko=null,Ch={onError:function(e){Jr=!0,Zi=e}};function kh(e,t,s,a,c,d,p,w,k){Jr=!1,Zi=null,wh.apply(Ch,arguments)}function xh(e,t,s,a,c,d,p,w,k){if(kh.apply(this,arguments),Jr){if(Jr){var T=Zi;Jr=!1,Zi=null}else throw Error(i(198));Xi||(Xi=!0,Ko=T)}}function Fn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(Fn(e)!==e)throw Error(i(188))}function _h(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var s=e,a=t;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(a=c.return,a!==null){s=a;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return cu(c),e;if(d===a)return cu(c),t;d=d.sibling}throw Error(i(188))}if(s.return!==a.return)s=c,a=d;else{for(var p=!1,w=c.child;w;){if(w===s){p=!0,s=c,a=d;break}if(w===a){p=!0,a=c,s=d;break}w=w.sibling}if(!p){for(w=d.child;w;){if(w===s){p=!0,s=d,a=c;break}if(w===a){p=!0,a=d,s=c;break}w=w.sibling}if(!p)throw Error(i(189))}}if(s.alternate!==a)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:t}function uu(e){return e=_h(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=du(e);if(t!==null)return t;e=e.sibling}return null}var fu=n.unstable_scheduleCallback,hu=n.unstable_cancelCallback,Sh=n.unstable_shouldYield,Eh=n.unstable_requestPaint,Re=n.unstable_now,Ih=n.unstable_getCurrentPriorityLevel,Go=n.unstable_ImmediatePriority,pu=n.unstable_UserBlockingPriority,es=n.unstable_NormalPriority,bh=n.unstable_LowPriority,mu=n.unstable_IdlePriority,ts=null,Mt=null;function Th(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Rh,Ph=Math.log,Nh=Math.LN2;function Rh(e){return e>>>=0,e===0?32:31-(Ph(e)/Nh|0)|0}var ns=64,rs=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function is(e,t){var s=e.pendingLanes;if(s===0)return 0;var a=0,c=e.suspendedLanes,d=e.pingedLanes,p=s&268435455;if(p!==0){var w=p&~c;w!==0?a=Qr(w):(d&=p,d!==0&&(a=Qr(d)))}else p=s&~c,p!==0?a=Qr(p):d!==0&&(a=Qr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)s=31-Et(t),c=1<<s,a|=e[s],t&=~c;return a}function Ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lh(e,t){for(var s=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var p=31-Et(d),w=1<<p,k=c[p];k===-1?((w&s)===0||(w&a)!==0)&&(c[p]=Ah(w,t)):k<=t&&(e.expiredLanes|=w),d&=~w}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=ns;return ns<<=1,(ns&4194240)===0&&(ns=64),e}function Qo(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Yr(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=s}function Oh(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var c=31-Et(s),d=1<<c;t[c]=0,a[c]=-1,e[c]=-1,s&=~d}}function Yo(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var a=31-Et(s),c=1<<a;c&t|e[a]&t&&(e[a]|=t),s&=~c}}var pe=0;function yu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vu,Zo,wu,Cu,ku,Xo=!1,ss=[],an=null,ln=null,cn=null,Zr=new Map,Xr=new Map,un=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function ei(e,t,s,a,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:d,targetContainers:[c]},t!==null&&(t=pi(t),t!==null&&Zo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function jh(e,t,s,a,c){switch(t){case"focusin":return an=ei(an,e,t,s,a,c),!0;case"dragenter":return ln=ei(ln,e,t,s,a,c),!0;case"mouseover":return cn=ei(cn,e,t,s,a,c),!0;case"pointerover":var d=c.pointerId;return Zr.set(d,ei(Zr.get(d)||null,e,t,s,a,c)),!0;case"gotpointercapture":return d=c.pointerId,Xr.set(d,ei(Xr.get(d)||null,e,t,s,a,c)),!0}return!1}function _u(e){var t=Vn(e.target);if(t!==null){var s=Fn(t);if(s!==null){if(t=s.tag,t===13){if(t=lu(s),t!==null){e.blockedOn=t,ku(e.priority,function(){wu(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);Ho=a,s.target.dispatchEvent(a),Ho=null}else return t=pi(s),t!==null&&Zo(t),e.blockedOn=s,!1;t.shift()}return!0}function Su(e,t,s){os(e)&&s.delete(t)}function Dh(){Xo=!1,an!==null&&os(an)&&(an=null),ln!==null&&os(ln)&&(ln=null),cn!==null&&os(cn)&&(cn=null),Zr.forEach(Su),Xr.forEach(Su)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Dh)))}function ni(e){function t(c){return ti(c,e)}if(0<ss.length){ti(ss[0],e);for(var s=1;s<ss.length;s++){var a=ss[s];a.blockedOn===e&&(a.blockedOn=null)}}for(an!==null&&ti(an,e),ln!==null&&ti(ln,e),cn!==null&&ti(cn,e),Zr.forEach(t),Xr.forEach(t),s=0;s<un.length;s++)a=un[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<un.length&&(s=un[0],s.blockedOn===null);)_u(s),s.blockedOn===null&&un.shift()}var hr=V.ReactCurrentBatchConfig,as=!0;function Uh(e,t,s,a){var c=pe,d=hr.transition;hr.transition=null;try{pe=1,ea(e,t,s,a)}finally{pe=c,hr.transition=d}}function zh(e,t,s,a){var c=pe,d=hr.transition;hr.transition=null;try{pe=4,ea(e,t,s,a)}finally{pe=c,hr.transition=d}}function ea(e,t,s,a){if(as){var c=ta(e,t,s,a);if(c===null)va(e,t,a,ls,s),xu(e,a);else if(jh(c,e,t,s,a))a.stopPropagation();else if(xu(e,a),t&4&&-1<Mh.indexOf(e)){for(;c!==null;){var d=pi(c);if(d!==null&&vu(d),d=ta(e,t,s,a),d===null&&va(e,t,a,ls,s),d===c)break;c=d}c!==null&&a.stopPropagation()}else va(e,t,a,null,s)}}var ls=null;function ta(e,t,s,a){if(ls=null,e=Bo(a),e=Vn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=lu(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function Eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ih()){case Go:return 1;case pu:return 4;case es:case bh:return 16;case mu:return 536870912;default:return 16}default:return 16}}var dn=null,na=null,cs=null;function Iu(){if(cs)return cs;var e,t=na,s=t.length,a,c="value"in dn?dn.value:dn.textContent,d=c.length;for(e=0;e<s&&t[e]===c[e];e++);var p=s-e;for(a=1;a<=p&&t[s-a]===c[d-a];a++);return cs=c.slice(e,1<a?1-a:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function bu(){return!1}function ut(e){function t(s,a,c,d,p){this._reactName=s,this._targetInst=c,this.type=a,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ds:bu,this.isPropagationStopped=bu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=ut(pr),ri=$({},pr,{view:0,detail:0}),Fh=ut(ri),ia,sa,ii,fs=$({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(ia=e.screenX-ii.screenX,sa=e.screenY-ii.screenY):sa=ia=0,ii=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Tu=ut(fs),Vh=$({},fs,{dataTransfer:0}),Hh=ut(Vh),Bh=$({},ri,{relatedTarget:0}),oa=ut(Bh),$h=$({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wh=ut($h),qh=$({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kh=ut(qh),Gh=$({},pr,{data:0}),Pu=ut(Gh),Jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function aa(){return Zh}var Xh=$({},ri,{key:function(e){if(e.key){var t=Jh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aa,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ep=ut(Xh),tp=$({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=ut(tp),np=$({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aa}),rp=ut(np),ip=$({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sp=ut(ip),op=$({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=ut(op),lp=[9,13,27,32],la=m&&"CompositionEvent"in window,si=null;m&&"documentMode"in document&&(si=document.documentMode);var cp=m&&"TextEvent"in window&&!si,Ru=m&&(!la||si&&8<si&&11>=si),Au=" ",Lu=!1;function Ou(e,t){switch(e){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function up(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Lu=!0,Au);case"textInput":return e=t.data,e===Au&&Lu?null:e;default:return null}}function dp(e,t){if(mr)return e==="compositionend"||!la&&Ou(e,t)?(e=Iu(),cs=na=dn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function Du(e,t,s,a){ru(a),t=ys(t,"onChange"),0<t.length&&(s=new ra("onChange","change",null,s,a),e.push({event:s,listeners:t}))}var oi=null,ai=null;function hp(e){t1(e,0)}function hs(e){var t=Cr(e);if(Wc(t))return e}function pp(e,t){if(e==="change")return t}var Uu=!1;if(m){var ca;if(m){var ua="oninput"in document;if(!ua){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),ua=typeof zu.oninput=="function"}ca=ua}else ca=!1;Uu=ca&&(!document.documentMode||9<document.documentMode)}function Fu(){oi&&(oi.detachEvent("onpropertychange",Vu),ai=oi=null)}function Vu(e){if(e.propertyName==="value"&&hs(ai)){var t=[];Du(t,ai,e,Bo(e)),au(hp,t)}}function mp(e,t,s){e==="focusin"?(Fu(),oi=t,ai=s,oi.attachEvent("onpropertychange",Vu)):e==="focusout"&&Fu()}function gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(ai)}function yp(e,t){if(e==="click")return hs(t)}function vp(e,t){if(e==="input"||e==="change")return hs(t)}function wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:wp;function li(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var c=s[a];if(!h.call(t,c)||!It(e[c],t[c]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var s=Hu(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=t&&a>=t)return{node:s,offset:t-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hu(s)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Qi(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cp(e){var t=Wu(),s=e.focusedElem,a=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&$u(s.ownerDocument.documentElement,s)){if(a!==null&&da(s)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=s.textContent.length,d=Math.min(a.start,c);a=a.end===void 0?d:Math.min(a.end,c),!e.extend&&d>a&&(c=a,a=d,d=c),c=Bu(s,d);var p=Bu(s,a);c&&p&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kp=m&&"documentMode"in document&&11>=document.documentMode,gr=null,fa=null,ci=null,ha=!1;function qu(e,t,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ha||gr==null||gr!==Qi(a)||(a=gr,"selectionStart"in a&&da(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ci&&li(ci,a)||(ci=a,a=ys(fa,"onSelect"),0<a.length&&(t=new ra("onSelect","select",null,t,s),e.push({event:t,listeners:a}),t.target=gr)))}function ps(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var yr={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionend:ps("Transition","TransitionEnd")},pa={},Ku={};m&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function ms(e){if(pa[e])return pa[e];if(!yr[e])return e;var t=yr[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Ku)return pa[e]=t[s];return e}var Gu=ms("animationend"),Ju=ms("animationiteration"),Qu=ms("animationstart"),Yu=ms("transitionend"),Zu=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Zu.set(e,t),u(t,[e])}for(var ma=0;ma<Xu.length;ma++){var ga=Xu[ma],xp=ga.toLowerCase(),_p=ga[0].toUpperCase()+ga.slice(1);fn(xp,"on"+_p)}fn(Gu,"onAnimationEnd"),fn(Ju,"onAnimationIteration"),fn(Qu,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(Yu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function e1(e,t,s){var a=e.type||"unknown-event";e.currentTarget=s,xh(a,t,void 0,e),e.currentTarget=null}function t1(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],c=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var p=a.length-1;0<=p;p--){var w=a[p],k=w.instance,T=w.currentTarget;if(w=w.listener,k!==d&&c.isPropagationStopped())break e;e1(c,w,T),d=k}else for(p=0;p<a.length;p++){if(w=a[p],k=w.instance,T=w.currentTarget,w=w.listener,k!==d&&c.isPropagationStopped())break e;e1(c,w,T),d=k}}}if(Xi)throw e=Ko,Xi=!1,Ko=null,e}function ke(e,t){var s=t[Sa];s===void 0&&(s=t[Sa]=new Set);var a=e+"__bubble";s.has(a)||(n1(t,e,2,!1),s.add(a))}function ya(e,t,s){var a=0;t&&(a|=4),n1(s,e,a,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[gs]){e[gs]=!0,o.forEach(function(s){s!=="selectionchange"&&(Sp.has(s)||ya(s,!1,e),ya(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,ya("selectionchange",!1,t))}}function n1(e,t,s,a){switch(Eu(t)){case 1:var c=Uh;break;case 4:c=zh;break;default:c=ea}s=c.bind(null,t,s,e),c=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,s,{capture:!0,passive:c}):e.addEventListener(t,s,!0):c!==void 0?e.addEventListener(t,s,{passive:c}):e.addEventListener(t,s,!1)}function va(e,t,s,a,c){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var w=a.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;p=p.return}for(;w!==null;){if(p=Vn(w),p===null)return;if(k=p.tag,k===5||k===6){a=d=p;continue e}w=w.parentNode}}a=a.return}au(function(){var T=d,D=Bo(s),U=[];e:{var M=Zu.get(e);if(M!==void 0){var H=ra,q=e;switch(e){case"keypress":if(us(s)===0)break e;case"keydown":case"keyup":H=ep;break;case"focusin":q="focus",H=oa;break;case"focusout":q="blur",H=oa;break;case"beforeblur":case"afterblur":H=oa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=rp;break;case Gu:case Ju:case Qu:H=Wh;break;case Yu:H=sp;break;case"scroll":H=Fh;break;case"wheel":H=ap;break;case"copy":case"cut":case"paste":H=Kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Nu}var J=(t&4)!==0,Ae=!J&&e==="scroll",I=J?M!==null?M+"Capture":null:M;J=[];for(var S=T,b;S!==null;){b=S;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,I!==null&&(z=Kr(S,I),z!=null&&J.push(fi(S,z,b)))),Ae)break;S=S.return}0<J.length&&(M=new H(M,q,null,s,D),U.push({event:M,listeners:J}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",M&&s!==Ho&&(q=s.relatedTarget||s.fromElement)&&(Vn(q)||q[$t]))break e;if((H||M)&&(M=D.window===D?D:(M=D.ownerDocument)?M.defaultView||M.parentWindow:window,H?(q=s.relatedTarget||s.toElement,H=T,q=q?Vn(q):null,q!==null&&(Ae=Fn(q),q!==Ae||q.tag!==5&&q.tag!==6)&&(q=null)):(H=null,q=T),H!==q)){if(J=Tu,z="onMouseLeave",I="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(J=Nu,z="onPointerLeave",I="onPointerEnter",S="pointer"),Ae=H==null?M:Cr(H),b=q==null?M:Cr(q),M=new J(z,S+"leave",H,s,D),M.target=Ae,M.relatedTarget=b,z=null,Vn(D)===T&&(J=new J(I,S+"enter",q,s,D),J.target=b,J.relatedTarget=Ae,z=J),Ae=z,H&&q)t:{for(J=H,I=q,S=0,b=J;b;b=vr(b))S++;for(b=0,z=I;z;z=vr(z))b++;for(;0<S-b;)J=vr(J),S--;for(;0<b-S;)I=vr(I),b--;for(;S--;){if(J===I||I!==null&&J===I.alternate)break t;J=vr(J),I=vr(I)}J=null}else J=null;H!==null&&r1(U,M,H,J,!1),q!==null&&Ae!==null&&r1(U,Ae,q,J,!0)}}e:{if(M=T?Cr(T):window,H=M.nodeName&&M.nodeName.toLowerCase(),H==="select"||H==="input"&&M.type==="file")var Q=pp;else if(ju(M))if(Uu)Q=vp;else{Q=gp;var Z=mp}else(H=M.nodeName)&&H.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(Q=yp);if(Q&&(Q=Q(e,T))){Du(U,Q,s,D);break e}Z&&Z(e,M,T),e==="focusout"&&(Z=M._wrapperState)&&Z.controlled&&M.type==="number"&&Do(M,"number",M.value)}switch(Z=T?Cr(T):window,e){case"focusin":(ju(Z)||Z.contentEditable==="true")&&(gr=Z,fa=T,ci=null);break;case"focusout":ci=fa=gr=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,qu(U,s,D);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":qu(U,s,D)}var X;if(la)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else mr?Ou(e,s)&&(re="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(re="onCompositionStart");re&&(Ru&&s.locale!=="ko"&&(mr||re!=="onCompositionStart"?re==="onCompositionEnd"&&mr&&(X=Iu()):(dn=D,na="value"in dn?dn.value:dn.textContent,mr=!0)),Z=ys(T,re),0<Z.length&&(re=new Pu(re,e,null,s,D),U.push({event:re,listeners:Z}),X?re.data=X:(X=Mu(s),X!==null&&(re.data=X)))),(X=cp?up(e,s):dp(e,s))&&(T=ys(T,"onBeforeInput"),0<T.length&&(D=new Pu("onBeforeInput","beforeinput",null,s,D),U.push({event:D,listeners:T}),D.data=X))}t1(U,t)})}function fi(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ys(e,t){for(var s=t+"Capture",a=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Kr(e,s),d!=null&&a.unshift(fi(e,d,c)),d=Kr(e,t),d!=null&&a.push(fi(e,d,c))),e=e.return}return a}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function r1(e,t,s,a,c){for(var d=t._reactName,p=[];s!==null&&s!==a;){var w=s,k=w.alternate,T=w.stateNode;if(k!==null&&k===a)break;w.tag===5&&T!==null&&(w=T,c?(k=Kr(s,d),k!=null&&p.unshift(fi(s,k,w))):c||(k=Kr(s,d),k!=null&&p.push(fi(s,k,w)))),s=s.return}p.length!==0&&e.push({event:t,listeners:p})}var Ep=/\r\n?/g,Ip=/\u0000|\uFFFD/g;function i1(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Ip,"")}function vs(e,t,s){if(t=i1(t),i1(e)!==t&&s)throw Error(i(425))}function ws(){}var wa=null,Ca=null;function ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,s1=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof s1<"u"?function(e){return s1.resolve(null).then(e).catch(Pp)}:xa;function Pp(e){setTimeout(function(){throw e})}function _a(e,t){var s=t,a=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(a===0){e.removeChild(c),ni(t);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=c}while(s);ni(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function o1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),jt="__reactFiber$"+wr,hi="__reactProps$"+wr,$t="__reactContainer$"+wr,Sa="__reactEvents$"+wr,Np="__reactListeners$"+wr,Rp="__reactHandles$"+wr;function Vn(e){var t=e[jt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[$t]||s[jt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=o1(e);e!==null;){if(s=e[jt])return s;e=o1(e)}return t}e=s,s=e.parentNode}return null}function pi(e){return e=e[jt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Cs(e){return e[hi]||null}var Ea=[],kr=-1;function pn(e){return{current:e}}function xe(e){0>kr||(e.current=Ea[kr],Ea[kr]=null,kr--)}function ve(e,t){kr++,Ea[kr]=e.current,e.current=t}var mn={},We=pn(mn),tt=pn(!1),Hn=mn;function xr(e,t){var s=e.type.contextTypes;if(!s)return mn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in s)c[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function nt(e){return e=e.childContextTypes,e!=null}function ks(){xe(tt),xe(We)}function a1(e,t,s){if(We.current!==mn)throw Error(i(168));ve(We,t),ve(tt,s)}function l1(e,t,s){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(i(108,ye(e)||"Unknown",c));return $({},s,a)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Hn=We.current,ve(We,e),ve(tt,tt.current),!0}function c1(e,t,s){var a=e.stateNode;if(!a)throw Error(i(169));s?(e=l1(e,t,Hn),a.__reactInternalMemoizedMergedChildContext=e,xe(tt),xe(We),ve(We,e)):xe(tt),ve(tt,s)}var Wt=null,_s=!1,Ia=!1;function u1(e){Wt===null?Wt=[e]:Wt.push(e)}function Ap(e){_s=!0,u1(e)}function gn(){if(!Ia&&Wt!==null){Ia=!0;var e=0,t=pe;try{var s=Wt;for(pe=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}Wt=null,_s=!1}catch(c){throw Wt!==null&&(Wt=Wt.slice(e+1)),fu(Go,gn),c}finally{pe=t,Ia=!1}}return null}var _r=[],Sr=0,Ss=null,Es=0,gt=[],yt=0,Bn=null,qt=1,Kt="";function $n(e,t){_r[Sr++]=Es,_r[Sr++]=Ss,Ss=e,Es=t}function d1(e,t,s){gt[yt++]=qt,gt[yt++]=Kt,gt[yt++]=Bn,Bn=e;var a=qt;e=Kt;var c=32-Et(a)-1;a&=~(1<<c),s+=1;var d=32-Et(t)+c;if(30<d){var p=c-c%5;d=(a&(1<<p)-1).toString(32),a>>=p,c-=p,qt=1<<32-Et(t)+c|s<<c|a,Kt=d+e}else qt=1<<d|s<<c|a,Kt=e}function ba(e){e.return!==null&&($n(e,1),d1(e,1,0))}function Ta(e){for(;e===Ss;)Ss=_r[--Sr],_r[Sr]=null,Es=_r[--Sr],_r[Sr]=null;for(;e===Bn;)Bn=gt[--yt],gt[yt]=null,Kt=gt[--yt],gt[yt]=null,qt=gt[--yt],gt[yt]=null}var dt=null,ft=null,Se=!1,bt=null;function f1(e,t){var s=kt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function h1(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Bn!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=kt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,dt=e,ft=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(Se){var t=ft;if(t){var s=t;if(!h1(e,t)){if(Pa(e))throw Error(i(418));t=hn(s.nextSibling);var a=dt;t&&h1(e,t)?f1(a,s):(e.flags=e.flags&-4097|2,Se=!1,dt=e)}}else{if(Pa(e))throw Error(i(418));e.flags=e.flags&-4097|2,Se=!1,dt=e}}}function p1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Is(e){if(e!==dt)return!1;if(!Se)return p1(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ka(e.type,e.memoizedProps)),t&&(t=ft)){if(Pa(e))throw m1(),Error(i(418));for(;t;)f1(e,t),t=hn(t.nextSibling)}if(p1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){ft=hn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?hn(e.stateNode.nextSibling):null;return!0}function m1(){for(var e=ft;e;)e=hn(e.nextSibling)}function Er(){ft=dt=null,Se=!1}function Ra(e){bt===null?bt=[e]:bt.push(e)}var Lp=V.ReactCurrentBatchConfig;function mi(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var a=s.stateNode}if(!a)throw Error(i(147,e));var c=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(p){var w=c.refs;p===null?delete w[d]:w[d]=p},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function bs(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function g1(e){var t=e._init;return t(e._payload)}function y1(e){function t(I,S){if(e){var b=I.deletions;b===null?(I.deletions=[S],I.flags|=16):b.push(S)}}function s(I,S){if(!e)return null;for(;S!==null;)t(I,S),S=S.sibling;return null}function a(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function c(I,S){return I=Sn(I,S),I.index=0,I.sibling=null,I}function d(I,S,b){return I.index=b,e?(b=I.alternate,b!==null?(b=b.index,b<S?(I.flags|=2,S):b):(I.flags|=2,S)):(I.flags|=1048576,S)}function p(I){return e&&I.alternate===null&&(I.flags|=2),I}function w(I,S,b,z){return S===null||S.tag!==6?(S=xl(b,I.mode,z),S.return=I,S):(S=c(S,b),S.return=I,S)}function k(I,S,b,z){var Q=b.type;return Q===ie?D(I,S,b.props.children,z,b.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===et&&g1(Q)===S.type)?(z=c(S,b.props),z.ref=mi(I,S,b),z.return=I,z):(z=Ys(b.type,b.key,b.props,null,I.mode,z),z.ref=mi(I,S,b),z.return=I,z)}function T(I,S,b,z){return S===null||S.tag!==4||S.stateNode.containerInfo!==b.containerInfo||S.stateNode.implementation!==b.implementation?(S=_l(b,I.mode,z),S.return=I,S):(S=c(S,b.children||[]),S.return=I,S)}function D(I,S,b,z,Q){return S===null||S.tag!==7?(S=Zn(b,I.mode,z,Q),S.return=I,S):(S=c(S,b),S.return=I,S)}function U(I,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return S=xl(""+S,I.mode,b),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case G:return b=Ys(S.type,S.key,S.props,null,I.mode,b),b.ref=mi(I,null,S),b.return=I,b;case Y:return S=_l(S,I.mode,b),S.return=I,S;case et:var z=S._init;return U(I,z(S._payload),b)}if($r(S)||te(S))return S=Zn(S,I.mode,b,null),S.return=I,S;bs(I,S)}return null}function M(I,S,b,z){var Q=S!==null?S.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Q!==null?null:w(I,S,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case G:return b.key===Q?k(I,S,b,z):null;case Y:return b.key===Q?T(I,S,b,z):null;case et:return Q=b._init,M(I,S,Q(b._payload),z)}if($r(b)||te(b))return Q!==null?null:D(I,S,b,z,null);bs(I,b)}return null}function H(I,S,b,z,Q){if(typeof z=="string"&&z!==""||typeof z=="number")return I=I.get(b)||null,w(S,I,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case G:return I=I.get(z.key===null?b:z.key)||null,k(S,I,z,Q);case Y:return I=I.get(z.key===null?b:z.key)||null,T(S,I,z,Q);case et:var Z=z._init;return H(I,S,b,Z(z._payload),Q)}if($r(z)||te(z))return I=I.get(b)||null,D(S,I,z,Q,null);bs(S,z)}return null}function q(I,S,b,z){for(var Q=null,Z=null,X=S,re=S=0,Fe=null;X!==null&&re<b.length;re++){X.index>re?(Fe=X,X=null):Fe=X.sibling;var fe=M(I,X,b[re],z);if(fe===null){X===null&&(X=Fe);break}e&&X&&fe.alternate===null&&t(I,X),S=d(fe,S,re),Z===null?Q=fe:Z.sibling=fe,Z=fe,X=Fe}if(re===b.length)return s(I,X),Se&&$n(I,re),Q;if(X===null){for(;re<b.length;re++)X=U(I,b[re],z),X!==null&&(S=d(X,S,re),Z===null?Q=X:Z.sibling=X,Z=X);return Se&&$n(I,re),Q}for(X=a(I,X);re<b.length;re++)Fe=H(X,I,re,b[re],z),Fe!==null&&(e&&Fe.alternate!==null&&X.delete(Fe.key===null?re:Fe.key),S=d(Fe,S,re),Z===null?Q=Fe:Z.sibling=Fe,Z=Fe);return e&&X.forEach(function(En){return t(I,En)}),Se&&$n(I,re),Q}function J(I,S,b,z){var Q=te(b);if(typeof Q!="function")throw Error(i(150));if(b=Q.call(b),b==null)throw Error(i(151));for(var Z=Q=null,X=S,re=S=0,Fe=null,fe=b.next();X!==null&&!fe.done;re++,fe=b.next()){X.index>re?(Fe=X,X=null):Fe=X.sibling;var En=M(I,X,fe.value,z);if(En===null){X===null&&(X=Fe);break}e&&X&&En.alternate===null&&t(I,X),S=d(En,S,re),Z===null?Q=En:Z.sibling=En,Z=En,X=Fe}if(fe.done)return s(I,X),Se&&$n(I,re),Q;if(X===null){for(;!fe.done;re++,fe=b.next())fe=U(I,fe.value,z),fe!==null&&(S=d(fe,S,re),Z===null?Q=fe:Z.sibling=fe,Z=fe);return Se&&$n(I,re),Q}for(X=a(I,X);!fe.done;re++,fe=b.next())fe=H(X,I,re,fe.value,z),fe!==null&&(e&&fe.alternate!==null&&X.delete(fe.key===null?re:fe.key),S=d(fe,S,re),Z===null?Q=fe:Z.sibling=fe,Z=fe);return e&&X.forEach(function(f4){return t(I,f4)}),Se&&$n(I,re),Q}function Ae(I,S,b,z){if(typeof b=="object"&&b!==null&&b.type===ie&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case G:e:{for(var Q=b.key,Z=S;Z!==null;){if(Z.key===Q){if(Q=b.type,Q===ie){if(Z.tag===7){s(I,Z.sibling),S=c(Z,b.props.children),S.return=I,I=S;break e}}else if(Z.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===et&&g1(Q)===Z.type){s(I,Z.sibling),S=c(Z,b.props),S.ref=mi(I,Z,b),S.return=I,I=S;break e}s(I,Z);break}else t(I,Z);Z=Z.sibling}b.type===ie?(S=Zn(b.props.children,I.mode,z,b.key),S.return=I,I=S):(z=Ys(b.type,b.key,b.props,null,I.mode,z),z.ref=mi(I,S,b),z.return=I,I=z)}return p(I);case Y:e:{for(Z=b.key;S!==null;){if(S.key===Z)if(S.tag===4&&S.stateNode.containerInfo===b.containerInfo&&S.stateNode.implementation===b.implementation){s(I,S.sibling),S=c(S,b.children||[]),S.return=I,I=S;break e}else{s(I,S);break}else t(I,S);S=S.sibling}S=_l(b,I.mode,z),S.return=I,I=S}return p(I);case et:return Z=b._init,Ae(I,S,Z(b._payload),z)}if($r(b))return q(I,S,b,z);if(te(b))return J(I,S,b,z);bs(I,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,S!==null&&S.tag===6?(s(I,S.sibling),S=c(S,b),S.return=I,I=S):(s(I,S),S=xl(b,I.mode,z),S.return=I,I=S),p(I)):s(I,S)}return Ae}var Ir=y1(!0),v1=y1(!1),Ts=pn(null),Ps=null,br=null,Aa=null;function La(){Aa=br=Ps=null}function Oa(e){var t=Ts.current;xe(Ts),e._currentValue=t}function Ma(e,t,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;e=e.return}}function Tr(e,t){Ps=e,Aa=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(Ps===null)throw Error(i(308));br=e,Ps.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Wn=null;function ja(e){Wn===null?Wn=[e]:Wn.push(e)}function w1(e,t,s,a){var c=t.interleaved;return c===null?(s.next=s,ja(t)):(s.next=c.next,c.next=s),t.interleaved=s,Gt(e,a)}function Gt(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var yn=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ce&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Gt(e,s)}return c=a.interleaved,c===null?(t.next=t,ja(a)):(t.next=c.next,c.next=t),a.interleaved=t,Gt(e,s)}function Ns(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yo(e,s)}}function k1(e,t){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var p={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};d===null?c=d=p:d=d.next=p,s=s.next}while(s!==null);d===null?c=d=t:d=d.next=t}else c=d=t;s={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function Rs(e,t,s,a){var c=e.updateQueue;yn=!1;var d=c.firstBaseUpdate,p=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var k=w,T=k.next;k.next=null,p===null?d=T:p.next=T,p=k;var D=e.alternate;D!==null&&(D=D.updateQueue,w=D.lastBaseUpdate,w!==p&&(w===null?D.firstBaseUpdate=T:w.next=T,D.lastBaseUpdate=k))}if(d!==null){var U=c.baseState;p=0,D=T=k=null,w=d;do{var M=w.lane,H=w.eventTime;if((a&M)===M){D!==null&&(D=D.next={eventTime:H,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var q=e,J=w;switch(M=t,H=s,J.tag){case 1:if(q=J.payload,typeof q=="function"){U=q.call(H,U,M);break e}U=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,M=typeof q=="function"?q.call(H,U,M):q,M==null)break e;U=$({},U,M);break e;case 2:yn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,M=c.effects,M===null?c.effects=[w]:M.push(w))}else H={eventTime:H,lane:M,tag:w.tag,payload:w.payload,callback:w.callback,next:null},D===null?(T=D=H,k=U):D=D.next=H,p|=M;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;M=w,w=M.next,M.next=null,c.lastBaseUpdate=M,c.shared.pending=null}}while(!0);if(D===null&&(k=U),c.baseState=k,c.firstBaseUpdate=T,c.lastBaseUpdate=D,t=c.shared.interleaved,t!==null){c=t;do p|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);Gn|=p,e.lanes=p,e.memoizedState=U}}function x1(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=s,typeof c!="function")throw Error(i(191,c));c.call(a)}}}var gi={},Dt=pn(gi),yi=pn(gi),vi=pn(gi);function qn(e){if(e===gi)throw Error(i(174));return e}function Ua(e,t){switch(ve(vi,t),ve(yi,e),ve(Dt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zo(t,e)}xe(Dt),ve(Dt,t)}function Pr(){xe(Dt),xe(yi),xe(vi)}function _1(e){qn(vi.current);var t=qn(Dt.current),s=zo(t,e.type);t!==s&&(ve(yi,e),ve(Dt,s))}function za(e){yi.current===e&&(xe(Dt),xe(yi))}var Ee=pn(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function Va(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var Ls=V.ReactCurrentDispatcher,Ha=V.ReactCurrentBatchConfig,Kn=0,Ie=null,Me=null,Ue=null,Os=!1,wi=!1,Ci=0,Op=0;function qe(){throw Error(i(321))}function Ba(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!It(e[s],t[s]))return!1;return!0}function $a(e,t,s,a,c,d){if(Kn=d,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ls.current=e===null||e.memoizedState===null?Up:zp,e=s(a,c),wi){d=0;do{if(wi=!1,Ci=0,25<=d)throw Error(i(301));d+=1,Ue=Me=null,t.updateQueue=null,Ls.current=Fp,e=s(a,c)}while(wi)}if(Ls.current=Ds,t=Me!==null&&Me.next!==null,Kn=0,Ue=Me=Ie=null,Os=!1,t)throw Error(i(300));return e}function Wa(){var e=Ci!==0;return Ci=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ie.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function wt(){if(Me===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ue===null?Ie.memoizedState:Ue.next;if(t!==null)Ue=t,Me=e;else{if(e===null)throw Error(i(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ue===null?Ie.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ki(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=wt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=Me,c=a.baseQueue,d=s.pending;if(d!==null){if(c!==null){var p=c.next;c.next=d.next,d.next=p}a.baseQueue=c=d,s.pending=null}if(c!==null){d=c.next,a=a.baseState;var w=p=null,k=null,T=d;do{var D=T.lane;if((Kn&D)===D)k!==null&&(k=k.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:e(a,T.action);else{var U={lane:D,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};k===null?(w=k=U,p=a):k=k.next=U,Ie.lanes|=D,Gn|=D}T=T.next}while(T!==null&&T!==d);k===null?p=a:k.next=w,It(a,t.memoizedState)||(rt=!0),t.memoizedState=a,t.baseState=p,t.baseQueue=k,s.lastRenderedState=a}if(e=s.interleaved,e!==null){c=e;do d=c.lane,Ie.lanes|=d,Gn|=d,c=c.next;while(c!==e)}else c===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function Ka(e){var t=wt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=s.dispatch,c=s.pending,d=t.memoizedState;if(c!==null){s.pending=null;var p=c=c.next;do d=e(d,p.action),p=p.next;while(p!==c);It(d,t.memoizedState)||(rt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),s.lastRenderedState=d}return[d,a]}function S1(){}function E1(e,t){var s=Ie,a=wt(),c=t(),d=!It(a.memoizedState,c);if(d&&(a.memoizedState=c,rt=!0),a=a.queue,Ga(T1.bind(null,s,a,e),[e]),a.getSnapshot!==t||d||Ue!==null&&Ue.memoizedState.tag&1){if(s.flags|=2048,xi(9,b1.bind(null,s,a,c,t),void 0,null),ze===null)throw Error(i(349));(Kn&30)!==0||I1(s,t,c)}return c}function I1(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function b1(e,t,s,a){t.value=s,t.getSnapshot=a,P1(t)&&N1(e)}function T1(e,t,s){return s(function(){P1(t)&&N1(e)})}function P1(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!It(e,s)}catch{return!0}}function N1(e){var t=Gt(e,1);t!==null&&Rt(t,e,1,-1)}function R1(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=Dp.bind(null,Ie,e),[t.memoizedState,e]}function xi(e,t,s,a){return e={tag:e,create:t,destroy:s,deps:a,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e)),e}function A1(){return wt().memoizedState}function Ms(e,t,s,a){var c=Ut();Ie.flags|=e,c.memoizedState=xi(1|t,s,void 0,a===void 0?null:a)}function js(e,t,s,a){var c=wt();a=a===void 0?null:a;var d=void 0;if(Me!==null){var p=Me.memoizedState;if(d=p.destroy,a!==null&&Ba(a,p.deps)){c.memoizedState=xi(t,s,d,a);return}}Ie.flags|=e,c.memoizedState=xi(1|t,s,d,a)}function L1(e,t){return Ms(8390656,8,e,t)}function Ga(e,t){return js(2048,8,e,t)}function O1(e,t){return js(4,2,e,t)}function M1(e,t){return js(4,4,e,t)}function j1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function D1(e,t,s){return s=s!=null?s.concat([e]):null,js(4,4,j1.bind(null,t,e),s)}function Ja(){}function U1(e,t){var s=wt();t=t===void 0?null:t;var a=s.memoizedState;return a!==null&&t!==null&&Ba(t,a[1])?a[0]:(s.memoizedState=[e,t],e)}function z1(e,t){var s=wt();t=t===void 0?null:t;var a=s.memoizedState;return a!==null&&t!==null&&Ba(t,a[1])?a[0]:(e=e(),s.memoizedState=[e,t],e)}function F1(e,t,s){return(Kn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=s):(It(s,t)||(s=gu(),Ie.lanes|=s,Gn|=s,e.baseState=!0),t)}function Mp(e,t){var s=pe;pe=s!==0&&4>s?s:4,e(!0);var a=Ha.transition;Ha.transition={};try{e(!1),t()}finally{pe=s,Ha.transition=a}}function V1(){return wt().memoizedState}function jp(e,t,s){var a=xn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},H1(e))B1(t,s);else if(s=w1(e,t,s,a),s!==null){var c=Qe();Rt(s,e,a,c),$1(s,t,a)}}function Dp(e,t,s){var a=xn(e),c={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(H1(e))B1(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var p=t.lastRenderedState,w=d(p,s);if(c.hasEagerState=!0,c.eagerState=w,It(w,p)){var k=t.interleaved;k===null?(c.next=c,ja(t)):(c.next=k.next,k.next=c),t.interleaved=c;return}}catch{}finally{}s=w1(e,t,c,a),s!==null&&(c=Qe(),Rt(s,e,a,c),$1(s,t,a))}}function H1(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function B1(e,t){wi=Os=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function $1(e,t,s){if((s&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yo(e,s)}}var Ds={readContext:vt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Up={readContext:vt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:L1,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Ms(4194308,4,j1.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var s=Ut();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var a=Ut();return t=s!==void 0?s(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=jp.bind(null,Ie,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:R1,useDebugValue:Ja,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=R1(!1),t=e[0];return e=Mp.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var a=Ie,c=Ut();if(Se){if(s===void 0)throw Error(i(407));s=s()}else{if(s=t(),ze===null)throw Error(i(349));(Kn&30)!==0||I1(a,t,s)}c.memoizedState=s;var d={value:s,getSnapshot:t};return c.queue=d,L1(T1.bind(null,a,d,e),[e]),a.flags|=2048,xi(9,b1.bind(null,a,d,s,t),void 0,null),s},useId:function(){var e=Ut(),t=ze.identifierPrefix;if(Se){var s=Kt,a=qt;s=(a&~(1<<32-Et(a)-1)).toString(32)+s,t=":"+t+"R"+s,s=Ci++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Op++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:vt,useCallback:U1,useContext:vt,useEffect:Ga,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:M1,useMemo:z1,useReducer:qa,useRef:A1,useState:function(){return qa(ki)},useDebugValue:Ja,useDeferredValue:function(e){var t=wt();return F1(t,Me.memoizedState,e)},useTransition:function(){var e=qa(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:E1,useId:V1,unstable_isNewReconciler:!1},Fp={readContext:vt,useCallback:U1,useContext:vt,useEffect:Ga,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:M1,useMemo:z1,useReducer:Ka,useRef:A1,useState:function(){return Ka(ki)},useDebugValue:Ja,useDeferredValue:function(e){var t=wt();return Me===null?t.memoizedState=e:F1(t,Me.memoizedState,e)},useTransition:function(){var e=Ka(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:E1,useId:V1,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Qa(e,t,s,a){t=e.memoizedState,s=s(a,t),s=s==null?t:$({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Us={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var a=Qe(),c=xn(e),d=Jt(a,c);d.payload=t,s!=null&&(d.callback=s),t=vn(e,d,c),t!==null&&(Rt(t,e,c,a),Ns(t,e,c))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var a=Qe(),c=xn(e),d=Jt(a,c);d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=vn(e,d,c),t!==null&&(Rt(t,e,c,a),Ns(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Qe(),a=xn(e),c=Jt(s,a);c.tag=2,t!=null&&(c.callback=t),t=vn(e,c,a),t!==null&&(Rt(t,e,a,s),Ns(t,e,a))}};function W1(e,t,s,a,c,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,p):t.prototype&&t.prototype.isPureReactComponent?!li(s,a)||!li(c,d):!0}function q1(e,t,s){var a=!1,c=mn,d=t.contextType;return typeof d=="object"&&d!==null?d=vt(d):(c=nt(t)?Hn:We.current,a=t.contextTypes,d=(a=a!=null)?xr(e,c):mn),t=new t(s,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function K1(e,t,s,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ya(e,t,s,a){var c=e.stateNode;c.props=s,c.state=e.memoizedState,c.refs={},Da(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=vt(d):(d=nt(t)?Hn:We.current,c.context=xr(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Qa(e,t,d,s),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Us.enqueueReplaceState(c,c.state,null),Rs(e,s,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var s="",a=t;do s+=ue(a),a=a.return;while(a);var c=s}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function Za(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Vp=typeof WeakMap=="function"?WeakMap:Map;function G1(e,t,s){s=Jt(-1,s),s.tag=3,s.payload={element:null};var a=t.value;return s.callback=function(){Ws||(Ws=!0,pl=a),Xa(e,t)},s}function J1(e,t,s){s=Jt(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;s.payload=function(){return a(c)},s.callback=function(){Xa(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(s.callback=function(){Xa(e,t),typeof a!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),s}function Q1(e,t,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Vp;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(s)||(c.add(s),e=t4.bind(null,e,t,s),t.then(e,e))}function Y1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Z1(e,t,s,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Jt(-1,1),t.tag=2,vn(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Hp=V.ReactCurrentOwner,rt=!1;function Je(e,t,s,a){t.child=e===null?v1(t,null,s,a):Ir(t,e.child,s,a)}function X1(e,t,s,a,c){s=s.render;var d=t.ref;return Tr(t,c),a=$a(e,t,s,a,d,c),s=Wa(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qt(e,t,c)):(Se&&s&&ba(t),t.flags|=1,Je(e,t,a,c),t.child)}function ed(e,t,s,a,c){if(e===null){var d=s.type;return typeof d=="function"&&!kl(d)&&d.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=d,td(e,t,d,a,c)):(e=Ys(s.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var p=d.memoizedProps;if(s=s.compare,s=s!==null?s:li,s(p,a)&&e.ref===t.ref)return Qt(e,t,c)}return t.flags|=1,e=Sn(d,a),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,s,a,c){if(e!==null){var d=e.memoizedProps;if(li(d,a)&&e.ref===t.ref)if(rt=!1,t.pendingProps=a=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Qt(e,t,c)}return el(e,t,s,a,c)}function nd(e,t,s){var a=t.pendingProps,c=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ar,ht),ht|=s;else{if((s&1073741824)===0)return e=d!==null?d.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Ar,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:s,ve(Ar,ht),ht|=a}else d!==null?(a=d.baseLanes|s,t.memoizedState=null):a=s,ve(Ar,ht),ht|=a;return Je(e,t,c,s),t.child}function rd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,s,a,c){var d=nt(s)?Hn:We.current;return d=xr(t,d),Tr(t,c),s=$a(e,t,s,a,d,c),a=Wa(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qt(e,t,c)):(Se&&a&&ba(t),t.flags|=1,Je(e,t,s,c),t.child)}function id(e,t,s,a,c){if(nt(s)){var d=!0;xs(t)}else d=!1;if(Tr(t,c),t.stateNode===null)Fs(e,t),q1(t,s,a),Ya(t,s,a,c),a=!0;else if(e===null){var p=t.stateNode,w=t.memoizedProps;p.props=w;var k=p.context,T=s.contextType;typeof T=="object"&&T!==null?T=vt(T):(T=nt(s)?Hn:We.current,T=xr(t,T));var D=s.getDerivedStateFromProps,U=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function";U||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==a||k!==T)&&K1(t,p,a,T),yn=!1;var M=t.memoizedState;p.state=M,Rs(t,a,p,c),k=t.memoizedState,w!==a||M!==k||tt.current||yn?(typeof D=="function"&&(Qa(t,s,D,a),k=t.memoizedState),(w=yn||W1(t,s,w,a,M,k,T))?(U||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),p.props=a,p.state=k,p.context=T,a=w):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{p=t.stateNode,C1(e,t),w=t.memoizedProps,T=t.type===t.elementType?w:Tt(t.type,w),p.props=T,U=t.pendingProps,M=p.context,k=s.contextType,typeof k=="object"&&k!==null?k=vt(k):(k=nt(s)?Hn:We.current,k=xr(t,k));var H=s.getDerivedStateFromProps;(D=typeof H=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==U||M!==k)&&K1(t,p,a,k),yn=!1,M=t.memoizedState,p.state=M,Rs(t,a,p,c);var q=t.memoizedState;w!==U||M!==q||tt.current||yn?(typeof H=="function"&&(Qa(t,s,H,a),q=t.memoizedState),(T=yn||W1(t,s,T,a,M,q,k)||!1)?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,q,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,q,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=q),p.props=a,p.state=q,p.context=k,a=T):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return tl(e,t,s,a,d,c)}function tl(e,t,s,a,c,d){rd(e,t);var p=(t.flags&128)!==0;if(!a&&!p)return c&&c1(t,s,!1),Qt(e,t,d);a=t.stateNode,Hp.current=t;var w=p&&typeof s.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&p?(t.child=Ir(t,e.child,null,d),t.child=Ir(t,null,w,d)):Je(e,t,w,d),t.memoizedState=a.state,c&&c1(t,s,!0),t.child}function sd(e){var t=e.stateNode;t.pendingContext?a1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&a1(e,t.context,!1),Ua(e,t.containerInfo)}function od(e,t,s,a,c){return Er(),Ra(c),t.flags|=256,Je(e,t,s,a),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,s){var a=t.pendingProps,c=Ee.current,d=!1,p=(t.flags&128)!==0,w;if((w=p)||(w=e!==null&&e.memoizedState===null?!1:(c&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ve(Ee,c&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=a.children,e=a.fallback,d?(a=t.mode,d=t.child,p={mode:"hidden",children:p},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=Zs(p,a,0,null),e=Zn(e,a,s,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=rl(s),t.memoizedState=nl,e):il(t,p));if(c=e.memoizedState,c!==null&&(w=c.dehydrated,w!==null))return Bp(e,t,p,a,w,c,s);if(d){d=a.fallback,p=t.mode,c=e.child,w=c.sibling;var k={mode:"hidden",children:a.children};return(p&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=k,t.deletions=null):(a=Sn(c,k),a.subtreeFlags=c.subtreeFlags&14680064),w!==null?d=Sn(w,d):(d=Zn(d,p,s,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,p=e.child.memoizedState,p=p===null?rl(s):{baseLanes:p.baseLanes|s,cachePool:null,transitions:p.transitions},d.memoizedState=p,d.childLanes=e.childLanes&~s,t.memoizedState=nl,a}return d=e.child,e=d.sibling,a=Sn(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=s),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a}function il(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,s,a){return a!==null&&Ra(a),Ir(t,e.child,null,s),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bp(e,t,s,a,c,d,p){if(s)return t.flags&256?(t.flags&=-257,a=Za(Error(i(422))),zs(e,t,p,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,c=t.mode,a=Zs({mode:"visible",children:a.children},c,0,null),d=Zn(d,c,p,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&Ir(t,e.child,null,p),t.child.memoizedState=rl(p),t.memoizedState=nl,d);if((t.mode&1)===0)return zs(e,t,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var w=a.dgst;return a=w,d=Error(i(419)),a=Za(d,a,void 0),zs(e,t,p,a)}if(w=(p&e.childLanes)!==0,rt||w){if(a=ze,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,Gt(e,c),Rt(a,e,c,-1))}return Cl(),a=Za(Error(i(421))),zs(e,t,p,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=n4.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,ft=hn(c.nextSibling),dt=t,Se=!0,bt=null,e!==null&&(gt[yt++]=qt,gt[yt++]=Kt,gt[yt++]=Bn,qt=e.id,Kt=e.overflow,Bn=t),t=il(t,a.children),t.flags|=4096,t)}function ld(e,t,s){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ma(e.return,t,s)}function sl(e,t,s,a,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=s,d.tailMode=c)}function cd(e,t,s){var a=t.pendingProps,c=a.revealOrder,d=a.tail;if(Je(e,t,a.children,s),a=Ee.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,s,t);else if(e.tag===19)ld(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ve(Ee,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(s=t.child,c=null;s!==null;)e=s.alternate,e!==null&&As(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=t.child,t.child=null):(c=s.sibling,s.sibling=null),sl(t,!1,c,s,d);break;case"backwards":for(s=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&As(e)===null){t.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}sl(t,!0,s,null,d);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,s=Sn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Sn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function $p(e,t,s){switch(t.tag){case 3:sd(t),Er();break;case 5:_1(t);break;case 1:nt(t.type)&&xs(t);break;case 4:Ua(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ve(Ts,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?ad(e,t,s):(ve(Ee,Ee.current&1),e=Qt(e,t,s),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(a=(s&t.childLanes)!==0,(e.flags&128)!==0){if(a)return cd(e,t,s);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(Ee,Ee.current),a)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,s)}return Qt(e,t,s)}var ud,ol,dd,fd;ud=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ol=function(){},dd=function(e,t,s,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,qn(Dt.current);var d=null;switch(s){case"input":c=Mo(e,c),a=Mo(e,a),d=[];break;case"select":c=$({},c,{value:void 0}),a=$({},a,{value:void 0}),d=[];break;case"textarea":c=Uo(e,c),a=Uo(e,a),d=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ws)}Fo(s,a);var p;s=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var w=c[T];for(p in w)w.hasOwnProperty(p)&&(s||(s={}),s[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?d||(d=[]):(d=d||[]).push(T,null));for(T in a){var k=a[T];if(w=c?.[T],a.hasOwnProperty(T)&&k!==w&&(k!=null||w!=null))if(T==="style")if(w){for(p in w)!w.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(s||(s={}),s[p]="");for(p in k)k.hasOwnProperty(p)&&w[p]!==k[p]&&(s||(s={}),s[p]=k[p])}else s||(d||(d=[]),d.push(T,s)),s=k;else T==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(d=d||[]).push(T,k)):T==="children"?typeof k!="string"&&typeof k!="number"||(d=d||[]).push(T,""+k):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(k!=null&&T==="onScroll"&&ke("scroll",e),d||w===k||(d=[])):(d=d||[]).push(T,k))}s&&(d=d||[]).push("style",s);var T=d;(t.updateQueue=T)&&(t.flags|=4)}},fd=function(e,t,s,a){s!==a&&(t.flags|=4)};function _i(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(t)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=s,t}function Wp(e,t,s){var a=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return nt(t.type)&&ks(),Ke(t),null;case 3:return a=t.stateNode,Pr(),xe(tt),xe(We),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(yl(bt),bt=null))),ol(e,t),Ke(t),null;case 5:za(t);var c=qn(vi.current);if(s=t.type,e!==null&&t.stateNode!=null)dd(e,t,s,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}if(e=qn(Dt.current),Is(t)){a=t.stateNode,s=t.type;var d=t.memoizedProps;switch(a[jt]=t,a[hi]=d,e=(t.mode&1)!==0,s){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(c=0;c<ui.length;c++)ke(ui[c],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":qc(a,d),ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},ke("invalid",a);break;case"textarea":Jc(a,d),ke("invalid",a)}Fo(s,d),c=null;for(var p in d)if(d.hasOwnProperty(p)){var w=d[p];p==="children"?typeof w=="string"?a.textContent!==w&&(d.suppressHydrationWarning!==!0&&vs(a.textContent,w,e),c=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&vs(a.textContent,w,e),c=["children",""+w]):l.hasOwnProperty(p)&&w!=null&&p==="onScroll"&&ke("scroll",a)}switch(s){case"input":Ji(a),Gc(a,d,!0);break;case"textarea":Ji(a),Yc(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=ws)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zc(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=p.createElement(s,{is:a.is}):(e=p.createElement(s),s==="select"&&(p=e,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):e=p.createElementNS(e,s),e[jt]=t,e[hi]=a,ud(e,t,!1,!1),t.stateNode=e;e:{switch(p=Vo(s,a),s){case"dialog":ke("cancel",e),ke("close",e),c=a;break;case"iframe":case"object":case"embed":ke("load",e),c=a;break;case"video":case"audio":for(c=0;c<ui.length;c++)ke(ui[c],e);c=a;break;case"source":ke("error",e),c=a;break;case"img":case"image":case"link":ke("error",e),ke("load",e),c=a;break;case"details":ke("toggle",e),c=a;break;case"input":qc(e,a),c=Mo(e,a),ke("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=$({},a,{value:void 0}),ke("invalid",e);break;case"textarea":Jc(e,a),c=Uo(e,a),ke("invalid",e);break;default:c=a}Fo(s,c),w=c;for(d in w)if(w.hasOwnProperty(d)){var k=w[d];d==="style"?tu(e,k):d==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Xc(e,k)):d==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Wr(e,k):typeof k=="number"&&Wr(e,""+k):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?k!=null&&d==="onScroll"&&ke("scroll",e):k!=null&&L(e,d,k,p))}switch(s){case"input":Ji(e),Gc(e,a,!1);break;case"textarea":Ji(e),Yc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+he(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?ur(e,!!a.multiple,d,!1):a.defaultValue!=null&&ur(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=ws)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)fd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(s=qn(vi.current),qn(Dt.current),Is(t)){if(a=t.stateNode,s=t.memoizedProps,a[jt]=t,(d=a.nodeValue!==s)&&(e=dt,e!==null))switch(e.tag){case 3:vs(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(a.nodeValue,s,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[jt]=t,t.stateNode=a}return Ke(t),null;case 13:if(xe(Ee),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)m1(),Er(),t.flags|=98560,d=!1;else if(d=Is(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[jt]=t}else Er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),d=!1}else bt!==null&&(yl(bt),bt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?je===0&&(je=3):Cl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Pr(),ol(e,t),e===null&&di(t.stateNode.containerInfo),Ke(t),null;case 10:return Oa(t.type._context),Ke(t),null;case 17:return nt(t.type)&&ks(),Ke(t),null;case 19:if(xe(Ee),d=t.memoizedState,d===null)return Ke(t),null;if(a=(t.flags&128)!==0,p=d.rendering,p===null)if(a)_i(d,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=As(e),p!==null){for(t.flags|=128,_i(d,!1),a=p.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=s,s=t.child;s!==null;)d=s,e=a,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}d.tail!==null&&Re()>Lr&&(t.flags|=128,a=!0,_i(d,!1),t.lanes=4194304)}else{if(!a)if(e=As(p),e!==null){if(t.flags|=128,a=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),_i(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Se)return Ke(t),null}else 2*Re()-d.renderingStartTime>Lr&&s!==1073741824&&(t.flags|=128,a=!0,_i(d,!1),t.lanes=4194304);d.isBackwards?(p.sibling=t.child,t.child=p):(s=d.last,s!==null?s.sibling=p:t.child=p,d.last=p)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Re(),t.sibling=null,s=Ee.current,ve(Ee,a?s&1|2:s&1),t):(Ke(t),null);case 22:case 23:return wl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function qp(e,t){switch(Ta(t),t.tag){case 1:return nt(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),xe(tt),xe(We),Va(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return za(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return Pr(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var Vs=!1,Ge=!1,Kp=typeof WeakSet=="function"?WeakSet:Set,B=null;function Rr(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){Pe(e,t,a)}else s.current=null}function al(e,t,s){try{s()}catch(a){Pe(e,t,a)}}var hd=!1;function Gp(e,t){if(wa=as,e=Wu(),da(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var c=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var p=0,w=-1,k=-1,T=0,D=0,U=e,M=null;t:for(;;){for(var H;U!==s||c!==0&&U.nodeType!==3||(w=p+c),U!==d||a!==0&&U.nodeType!==3||(k=p+a),U.nodeType===3&&(p+=U.nodeValue.length),(H=U.firstChild)!==null;)M=U,U=H;for(;;){if(U===e)break t;if(M===s&&++T===c&&(w=p),M===d&&++D===a&&(k=p),(H=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=H}s=w===-1||k===-1?null:{start:w,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ca={focusedElem:e,selectionRange:s},as=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,Ae=q.memoizedState,I=t.stateNode,S=I.getSnapshotBeforeUpdate(t.elementType===t.type?J:Tt(t.type,J),Ae);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(z){Pe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return q=hd,hd=!1,q}function Si(e,t,s){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&al(t,s,d)}c=c.next}while(c!==a)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==t)}}function ll(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[hi],delete t[Sa],delete t[Np],delete t[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function md(e){return e.tag===5||e.tag===3||e.tag===4}function gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=ws));else if(a!==4&&(e=e.child,e!==null))for(cl(e,t,s),e=e.sibling;e!==null;)cl(e,t,s),e=e.sibling}function ul(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ul(e,t,s),e=e.sibling;e!==null;)ul(e,t,s),e=e.sibling}var He=null,Pt=!1;function wn(e,t,s){for(s=s.child;s!==null;)yd(e,t,s),s=s.sibling}function yd(e,t,s){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ts,s)}catch{}switch(s.tag){case 5:Ge||Rr(s,t);case 6:var a=He,c=Pt;He=null,wn(e,t,s),He=a,Pt=c,He!==null&&(Pt?(e=He,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):He.removeChild(s.stateNode));break;case 18:He!==null&&(Pt?(e=He,s=s.stateNode,e.nodeType===8?_a(e.parentNode,s):e.nodeType===1&&_a(e,s),ni(e)):_a(He,s.stateNode));break;case 4:a=He,c=Pt,He=s.stateNode.containerInfo,Pt=!0,wn(e,t,s),He=a,Pt=c;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var d=c,p=d.destroy;d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&al(s,t,p),c=c.next}while(c!==a)}wn(e,t,s);break;case 1:if(!Ge&&(Rr(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(w){Pe(s,t,w)}wn(e,t,s);break;case 21:wn(e,t,s);break;case 22:s.mode&1?(Ge=(a=Ge)||s.memoizedState!==null,wn(e,t,s),Ge=a):wn(e,t,s);break;default:wn(e,t,s)}}function vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Kp),t.forEach(function(a){var c=r4.bind(null,e,a);s.has(a)||(s.add(a),a.then(c,c))})}}function Nt(e,t){var s=t.deletions;if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];try{var d=e,p=t,w=p;e:for(;w!==null;){switch(w.tag){case 5:He=w.stateNode,Pt=!1;break e;case 3:He=w.stateNode.containerInfo,Pt=!0;break e;case 4:He=w.stateNode.containerInfo,Pt=!0;break e}w=w.return}if(He===null)throw Error(i(160));yd(d,p,c),He=null,Pt=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(T){Pe(c,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}function wd(e,t){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),zt(e),a&4){try{Si(3,e,e.return),Hs(3,e)}catch(J){Pe(e,e.return,J)}try{Si(5,e,e.return)}catch(J){Pe(e,e.return,J)}}break;case 1:Nt(t,e),zt(e),a&512&&s!==null&&Rr(s,s.return);break;case 5:if(Nt(t,e),zt(e),a&512&&s!==null&&Rr(s,s.return),e.flags&32){var c=e.stateNode;try{Wr(c,"")}catch(J){Pe(e,e.return,J)}}if(a&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,p=s!==null?s.memoizedProps:d,w=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&Kc(c,d),Vo(w,p);var T=Vo(w,d);for(p=0;p<k.length;p+=2){var D=k[p],U=k[p+1];D==="style"?tu(c,U):D==="dangerouslySetInnerHTML"?Xc(c,U):D==="children"?Wr(c,U):L(c,D,U,T)}switch(w){case"input":jo(c,d);break;case"textarea":Qc(c,d);break;case"select":var M=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var H=d.value;H!=null?ur(c,!!d.multiple,H,!1):M!==!!d.multiple&&(d.defaultValue!=null?ur(c,!!d.multiple,d.defaultValue,!0):ur(c,!!d.multiple,d.multiple?[]:"",!1))}c[hi]=d}catch(J){Pe(e,e.return,J)}}break;case 6:if(Nt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(i(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(J){Pe(e,e.return,J)}}break;case 3:if(Nt(t,e),zt(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(J){Pe(e,e.return,J)}break;case 4:Nt(t,e),zt(e);break;case 13:Nt(t,e),zt(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(hl=Re())),a&4&&vd(e);break;case 22:if(D=s!==null&&s.memoizedState!==null,e.mode&1?(Ge=(T=Ge)||D,Nt(t,e),Ge=T):Nt(t,e),zt(e),a&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!D&&(e.mode&1)!==0)for(B=e,D=e.child;D!==null;){for(U=B=D;B!==null;){switch(M=B,H=M.child,M.tag){case 0:case 11:case 14:case 15:Si(4,M,M.return);break;case 1:Rr(M,M.return);var q=M.stateNode;if(typeof q.componentWillUnmount=="function"){a=M,s=M.return;try{t=a,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(J){Pe(a,s,J)}}break;case 5:Rr(M,M.return);break;case 22:if(M.memoizedState!==null){xd(U);continue}}H!==null?(H.return=M,B=H):xd(U)}D=D.sibling}e:for(D=null,U=e;;){if(U.tag===5){if(D===null){D=U;try{c=U.stateNode,T?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=U.stateNode,k=U.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=eu("display",p))}catch(J){Pe(e,e.return,J)}}}else if(U.tag===6){if(D===null)try{U.stateNode.nodeValue=T?"":U.memoizedProps}catch(J){Pe(e,e.return,J)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;D===U&&(D=null),U=U.return}D===U&&(D=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Nt(t,e),zt(e),a&4&&vd(e);break;case 21:break;default:Nt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(md(s)){var a=s;break e}s=s.return}throw Error(i(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Wr(c,""),a.flags&=-33);var d=gd(e);ul(e,d,c);break;case 3:case 4:var p=a.stateNode.containerInfo,w=gd(e);cl(e,w,p);break;default:throw Error(i(161))}}catch(k){Pe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jp(e,t,s){B=e,Cd(e)}function Cd(e,t,s){for(var a=(e.mode&1)!==0;B!==null;){var c=B,d=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Vs;if(!p){var w=c.alternate,k=w!==null&&w.memoizedState!==null||Ge;w=Vs;var T=Ge;if(Vs=p,(Ge=k)&&!T)for(B=c;B!==null;)p=B,k=p.child,p.tag===22&&p.memoizedState!==null?_d(c):k!==null?(k.return=p,B=k):_d(c);for(;d!==null;)B=d,Cd(d),d=d.sibling;B=c,Vs=w,Ge=T}kd(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,B=d):kd(e)}}function kd(e){for(;B!==null;){var t=B;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Hs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ge)if(s===null)a.componentDidMount();else{var c=t.elementType===t.type?s.memoizedProps:Tt(t.type,s.memoizedProps);a.componentDidUpdate(c,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&x1(t,d,a);break;case 3:var p=t.updateQueue;if(p!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}x1(t,p,s)}break;case 5:var w=t.stateNode;if(s===null&&t.flags&4){s=w;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var D=T.memoizedState;if(D!==null){var U=D.dehydrated;U!==null&&ni(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ge||t.flags&512&&ll(t)}catch(M){Pe(t,t.return,M)}}if(t===e){B=null;break}if(s=t.sibling,s!==null){s.return=t.return,B=s;break}B=t.return}}function xd(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}function _d(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Hs(4,t)}catch(k){Pe(t,s,k)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(k){Pe(t,c,k)}}var d=t.return;try{ll(t)}catch(k){Pe(t,d,k)}break;case 5:var p=t.return;try{ll(t)}catch(k){Pe(t,p,k)}}}catch(k){Pe(t,t.return,k)}if(t===e){B=null;break}var w=t.sibling;if(w!==null){w.return=t.return,B=w;break}B=t.return}}var Qp=Math.ceil,Bs=V.ReactCurrentDispatcher,dl=V.ReactCurrentOwner,Ct=V.ReactCurrentBatchConfig,ce=0,ze=null,Oe=null,Be=0,ht=0,Ar=pn(0),je=0,Ei=null,Gn=0,$s=0,fl=0,Ii=null,it=null,hl=0,Lr=1/0,Yt=null,Ws=!1,pl=null,Cn=null,qs=!1,kn=null,Ks=0,bi=0,ml=null,Gs=-1,Js=0;function Qe(){return(ce&6)!==0?Re():Gs!==-1?Gs:Gs=Re()}function xn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Be!==0?Be&-Be:Lp.transition!==null?(Js===0&&(Js=gu()),Js):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Eu(e.type)),e)}function Rt(e,t,s,a){if(50<bi)throw bi=0,ml=null,Error(i(185));Yr(e,s,a),((ce&2)===0||e!==ze)&&(e===ze&&((ce&2)===0&&($s|=s),je===4&&_n(e,Be)),st(e,a),s===1&&ce===0&&(t.mode&1)===0&&(Lr=Re()+500,_s&&gn()))}function st(e,t){var s=e.callbackNode;Lh(e,t);var a=is(e,e===ze?Be:0);if(a===0)s!==null&&hu(s),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(s!=null&&hu(s),t===1)e.tag===0?Ap(Ed.bind(null,e)):u1(Ed.bind(null,e)),Tp(function(){(ce&6)===0&&gn()}),s=null;else{switch(yu(a)){case 1:s=Go;break;case 4:s=pu;break;case 16:s=es;break;case 536870912:s=mu;break;default:s=es}s=Ld(s,Sd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Sd(e,t){if(Gs=-1,Js=0,(ce&6)!==0)throw Error(i(327));var s=e.callbackNode;if(Or()&&e.callbackNode!==s)return null;var a=is(e,e===ze?Be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Qs(e,a);else{t=a;var c=ce;ce|=2;var d=bd();(ze!==e||Be!==t)&&(Yt=null,Lr=Re()+500,Qn(e,t));do try{Xp();break}catch(w){Id(e,w)}while(!0);La(),Bs.current=d,ce=c,Oe!==null?t=0:(ze=null,Be=0,t=je)}if(t!==0){if(t===2&&(c=Jo(e),c!==0&&(a=c,t=gl(e,c))),t===1)throw s=Ei,Qn(e,0),_n(e,a),st(e,Re()),s;if(t===6)_n(e,a);else{if(c=e.current.alternate,(a&30)===0&&!Yp(c)&&(t=Qs(e,a),t===2&&(d=Jo(e),d!==0&&(a=d,t=gl(e,d))),t===1))throw s=Ei,Qn(e,0),_n(e,a),st(e,Re()),s;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Yn(e,it,Yt);break;case 3:if(_n(e,a),(a&130023424)===a&&(t=hl+500-Re(),10<t)){if(is(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Qe(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=xa(Yn.bind(null,e,it,Yt),t);break}Yn(e,it,Yt);break;case 4:if(_n(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var p=31-Et(a);d=1<<p,p=t[p],p>c&&(c=p),a&=~d}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Qp(a/1960))-a,10<a){e.timeoutHandle=xa(Yn.bind(null,e,it,Yt),a);break}Yn(e,it,Yt);break;case 5:Yn(e,it,Yt);break;default:throw Error(i(329))}}}return st(e,Re()),e.callbackNode===s?Sd.bind(null,e):null}function gl(e,t){var s=Ii;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=it,it=s,t!==null&&yl(t)),e}function yl(e){it===null?it=e:it.push.apply(it,e)}function Yp(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var c=s[a],d=c.getSnapshot;c=c.value;try{if(!It(d(),c))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~fl,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Et(t),a=1<<s;e[s]=-1,t&=~a}}function Ed(e){if((ce&6)!==0)throw Error(i(327));Or();var t=is(e,0);if((t&1)===0)return st(e,Re()),null;var s=Qs(e,t);if(e.tag!==0&&s===2){var a=Jo(e);a!==0&&(t=a,s=gl(e,a))}if(s===1)throw s=Ei,Qn(e,0),_n(e,t),st(e,Re()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,it,Yt),st(e,Re()),null}function vl(e,t){var s=ce;ce|=1;try{return e(t)}finally{ce=s,ce===0&&(Lr=Re()+500,_s&&gn())}}function Jn(e){kn!==null&&kn.tag===0&&(ce&6)===0&&Or();var t=ce;ce|=1;var s=Ct.transition,a=pe;try{if(Ct.transition=null,pe=1,e)return e()}finally{pe=a,Ct.transition=s,ce=t,(ce&6)===0&&gn()}}function wl(){ht=Ar.current,xe(Ar)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,bp(s)),Oe!==null)for(s=Oe.return;s!==null;){var a=s;switch(Ta(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ks();break;case 3:Pr(),xe(tt),xe(We),Va();break;case 5:za(a);break;case 4:Pr();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:Oa(a.type._context);break;case 22:case 23:wl()}s=s.return}if(ze=e,Oe=e=Sn(e.current,null),Be=ht=t,je=0,Ei=null,fl=$s=Gn=0,it=Ii=null,Wn!==null){for(t=0;t<Wn.length;t++)if(s=Wn[t],a=s.interleaved,a!==null){s.interleaved=null;var c=a.next,d=s.pending;if(d!==null){var p=d.next;d.next=c,a.next=p}s.pending=a}Wn=null}return e}function Id(e,t){do{var s=Oe;try{if(La(),Ls.current=Ds,Os){for(var a=Ie.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Os=!1}if(Kn=0,Ue=Me=Ie=null,wi=!1,Ci=0,dl.current=null,s===null||s.return===null){je=1,Ei=t,Oe=null;break}e:{var d=e,p=s.return,w=s,k=t;if(t=Be,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var T=k,D=w,U=D.tag;if((D.mode&1)===0&&(U===0||U===11||U===15)){var M=D.alternate;M?(D.updateQueue=M.updateQueue,D.memoizedState=M.memoizedState,D.lanes=M.lanes):(D.updateQueue=null,D.memoizedState=null)}var H=Y1(p);if(H!==null){H.flags&=-257,Z1(H,p,w,d,t),H.mode&1&&Q1(d,T,t),t=H,k=T;var q=t.updateQueue;if(q===null){var J=new Set;J.add(k),t.updateQueue=J}else q.add(k);break e}else{if((t&1)===0){Q1(d,T,t),Cl();break e}k=Error(i(426))}}else if(Se&&w.mode&1){var Ae=Y1(p);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),Z1(Ae,p,w,d,t),Ra(Nr(k,w));break e}}d=k=Nr(k,w),je!==4&&(je=2),Ii===null?Ii=[d]:Ii.push(d),d=p;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var I=G1(d,k,t);k1(d,I);break e;case 1:w=k;var S=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cn===null||!Cn.has(b)))){d.flags|=65536,t&=-t,d.lanes|=t;var z=J1(d,w,t);k1(d,z);break e}}d=d.return}while(d!==null)}Pd(s)}catch(Q){t=Q,Oe===s&&s!==null&&(Oe=s=s.return);continue}break}while(!0)}function bd(){var e=Bs.current;return Bs.current=Ds,e===null?Ds:e}function Cl(){(je===0||je===3||je===2)&&(je=4),ze===null||(Gn&268435455)===0&&($s&268435455)===0||_n(ze,Be)}function Qs(e,t){var s=ce;ce|=2;var a=bd();(ze!==e||Be!==t)&&(Yt=null,Qn(e,t));do try{Zp();break}catch(c){Id(e,c)}while(!0);if(La(),ce=s,Bs.current=a,Oe!==null)throw Error(i(261));return ze=null,Be=0,je}function Zp(){for(;Oe!==null;)Td(Oe)}function Xp(){for(;Oe!==null&&!Sh();)Td(Oe)}function Td(e){var t=Ad(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?Pd(e):Oe=t,dl.current=null}function Pd(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=Wp(s,t,ht),s!==null){Oe=s;return}}else{if(s=qp(s,t),s!==null){s.flags&=32767,Oe=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);je===0&&(je=5)}function Yn(e,t,s){var a=pe,c=Ct.transition;try{Ct.transition=null,pe=1,e4(e,t,s,a)}finally{Ct.transition=c,pe=a}return null}function e4(e,t,s,a){do Or();while(kn!==null);if((ce&6)!==0)throw Error(i(327));s=e.finishedWork;var c=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=s.lanes|s.childLanes;if(Oh(e,d),e===ze&&(Oe=ze=null,Be=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||qs||(qs=!0,Ld(es,function(){return Or(),null})),d=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||d){d=Ct.transition,Ct.transition=null;var p=pe;pe=1;var w=ce;ce|=4,dl.current=null,Gp(e,s),wd(s,e),Cp(Ca),as=!!wa,Ca=wa=null,e.current=s,Jp(s),Eh(),ce=w,pe=p,Ct.transition=d}else e.current=s;if(qs&&(qs=!1,kn=e,Ks=c),d=e.pendingLanes,d===0&&(Cn=null),Th(s.stateNode),st(e,Re()),t!==null)for(a=e.onRecoverableError,s=0;s<t.length;s++)c=t[s],a(c.value,{componentStack:c.stack,digest:c.digest});if(Ws)throw Ws=!1,e=pl,pl=null,e;return(Ks&1)!==0&&e.tag!==0&&Or(),d=e.pendingLanes,(d&1)!==0?e===ml?bi++:(bi=0,ml=e):bi=0,gn(),null}function Or(){if(kn!==null){var e=yu(Ks),t=Ct.transition,s=pe;try{if(Ct.transition=null,pe=16>e?16:e,kn===null)var a=!1;else{if(e=kn,kn=null,Ks=0,(ce&6)!==0)throw Error(i(331));var c=ce;for(ce|=4,B=e.current;B!==null;){var d=B,p=d.child;if((B.flags&16)!==0){var w=d.deletions;if(w!==null){for(var k=0;k<w.length;k++){var T=w[k];for(B=T;B!==null;){var D=B;switch(D.tag){case 0:case 11:case 15:Si(8,D,d)}var U=D.child;if(U!==null)U.return=D,B=U;else for(;B!==null;){D=B;var M=D.sibling,H=D.return;if(pd(D),D===T){B=null;break}if(M!==null){M.return=H,B=M;break}B=H}}}var q=d.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var Ae=J.sibling;J.sibling=null,J=Ae}while(J!==null)}}B=d}}if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,B=p;else e:for(;B!==null;){if(d=B,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Si(9,d,d.return)}var I=d.sibling;if(I!==null){I.return=d.return,B=I;break e}B=d.return}}var S=e.current;for(B=S;B!==null;){p=B;var b=p.child;if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,B=b;else e:for(p=S;B!==null;){if(w=B,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Hs(9,w)}}catch(Q){Pe(w,w.return,Q)}if(w===p){B=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,B=z;break e}B=w.return}}if(ce=c,gn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ts,e)}catch{}a=!0}return a}finally{pe=s,Ct.transition=t}}return!1}function Nd(e,t,s){t=Nr(s,t),t=G1(e,t,1),e=vn(e,t,1),t=Qe(),e!==null&&(Yr(e,1,t),st(e,t))}function Pe(e,t,s){if(e.tag===3)Nd(e,e,s);else for(;t!==null;){if(t.tag===3){Nd(t,e,s);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Cn===null||!Cn.has(a))){e=Nr(s,e),e=J1(t,e,1),t=vn(t,e,1),e=Qe(),t!==null&&(Yr(t,1,e),st(t,e));break}}t=t.return}}function t4(e,t,s){var a=e.pingCache;a!==null&&a.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&s,ze===e&&(Be&s)===s&&(je===4||je===3&&(Be&130023424)===Be&&500>Re()-hl?Qn(e,0):fl|=s),st(e,t)}function Rd(e,t){t===0&&((e.mode&1)===0?t=1:(t=rs,rs<<=1,(rs&130023424)===0&&(rs=4194304)));var s=Qe();e=Gt(e,t),e!==null&&(Yr(e,t,s),st(e,s))}function n4(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Rd(e,s)}function r4(e,t){var s=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Rd(e,s)}var Ad;Ad=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return rt=!1,$p(e,t,s);rt=(e.flags&131072)!==0}else rt=!1,Se&&(t.flags&1048576)!==0&&d1(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Fs(e,t),e=t.pendingProps;var c=xr(t,We.current);Tr(t,s),c=$a(null,t,a,e,c,s);var d=Wa();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(a)?(d=!0,xs(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Da(t),c.updater=Us,t.stateNode=c,c._reactInternals=t,Ya(t,a,e,s),t=tl(null,t,a,!0,d,s)):(t.tag=0,Se&&d&&ba(t),Je(null,t,c,s),t=t.child),t;case 16:a=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=s4(a),e=Tt(a,e),c){case 0:t=el(null,t,a,e,s);break e;case 1:t=id(null,t,a,e,s);break e;case 11:t=X1(null,t,a,e,s);break e;case 14:t=ed(null,t,a,Tt(a.type,e),s);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),el(e,t,a,c,s);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),id(e,t,a,c,s);case 3:e:{if(sd(t),e===null)throw Error(i(387));a=t.pendingProps,d=t.memoizedState,c=d.element,C1(e,t),Rs(t,a,null,s);var p=t.memoizedState;if(a=p.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=Nr(Error(i(423)),t),t=od(e,t,a,s,c);break e}else if(a!==c){c=Nr(Error(i(424)),t),t=od(e,t,a,s,c);break e}else for(ft=hn(t.stateNode.containerInfo.firstChild),dt=t,Se=!0,bt=null,s=v1(t,null,a,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Er(),a===c){t=Qt(e,t,s);break e}Je(e,t,a,s)}t=t.child}return t;case 5:return _1(t),e===null&&Na(t),a=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,p=c.children,ka(a,c)?p=null:d!==null&&ka(a,d)&&(t.flags|=32),rd(e,t),Je(e,t,p,s),t.child;case 6:return e===null&&Na(t),null;case 13:return ad(e,t,s);case 4:return Ua(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ir(t,null,a,s):Je(e,t,a,s),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),X1(e,t,a,c,s);case 7:return Je(e,t,t.pendingProps,s),t.child;case 8:return Je(e,t,t.pendingProps.children,s),t.child;case 12:return Je(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,d=t.memoizedProps,p=c.value,ve(Ts,a._currentValue),a._currentValue=p,d!==null)if(It(d.value,p)){if(d.children===c.children&&!tt.current){t=Qt(e,t,s);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){p=d.child;for(var k=w.firstContext;k!==null;){if(k.context===a){if(d.tag===1){k=Jt(-1,s&-s),k.tag=2;var T=d.updateQueue;if(T!==null){T=T.shared;var D=T.pending;D===null?k.next=k:(k.next=D.next,D.next=k),T.pending=k}}d.lanes|=s,k=d.alternate,k!==null&&(k.lanes|=s),Ma(d.return,s,t),w.lanes|=s;break}k=k.next}}else if(d.tag===10)p=d.type===t.type?null:d.child;else if(d.tag===18){if(p=d.return,p===null)throw Error(i(341));p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Ma(p,s,t),p=d.sibling}else p=d.child;if(p!==null)p.return=d;else for(p=d;p!==null;){if(p===t){p=null;break}if(d=p.sibling,d!==null){d.return=p.return,p=d;break}p=p.return}d=p}Je(e,t,c.children,s),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,Tr(t,s),c=vt(c),a=a(c),t.flags|=1,Je(e,t,a,s),t.child;case 14:return a=t.type,c=Tt(a,t.pendingProps),c=Tt(a.type,c),ed(e,t,a,c,s);case 15:return td(e,t,t.type,t.pendingProps,s);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),Fs(e,t),t.tag=1,nt(a)?(e=!0,xs(t)):e=!1,Tr(t,s),q1(t,a,c),Ya(t,a,c,s),tl(null,t,a,!0,e,s);case 19:return cd(e,t,s);case 22:return nd(e,t,s)}throw Error(i(156,t.tag))};function Ld(e,t){return fu(e,t)}function i4(e,t,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,s,a){return new i4(e,t,s,a)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s4(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===De)return 14}return 2}function Sn(e,t){var s=e.alternate;return s===null?(s=kt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Ys(e,t,s,a,c,d){var p=2;if(a=e,typeof e=="function")kl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case ie:return Zn(s.children,c,d,t);case me:p=8,c|=8;break;case Ve:return e=kt(12,s,t,c|2),e.elementType=Ve,e.lanes=d,e;case we:return e=kt(13,s,t,c),e.elementType=we,e.lanes=d,e;case Ce:return e=kt(19,s,t,c),e.elementType=Ce,e.lanes=d,e;case Te:return Zs(s,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:p=10;break e;case mt:p=9;break e;case ee:p=11;break e;case De:p=14;break e;case et:p=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=kt(p,s,t,c),t.elementType=e,t.type=a,t.lanes=d,t}function Zn(e,t,s,a){return e=kt(7,e,a,t),e.lanes=s,e}function Zs(e,t,s,a){return e=kt(22,e,a,t),e.elementType=Te,e.lanes=s,e.stateNode={isHidden:!1},e}function xl(e,t,s){return e=kt(6,e,null,t),e.lanes=s,e}function _l(e,t,s){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o4(e,t,s,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Sl(e,t,s,a,c,d,p,w,k){return e=new o4(e,t,s,w,k),t===1?(t=1,d===!0&&(t|=8)):t=0,d=kt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(d),e}function a4(e,t,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:a==null?null:""+a,children:e,containerInfo:t,implementation:s}}function Od(e){if(!e)return mn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(nt(s))return l1(e,s,t)}return t}function Md(e,t,s,a,c,d,p,w,k){return e=Sl(s,a,!0,e,c,d,p,w,k),e.context=Od(null),s=e.current,a=Qe(),c=xn(s),d=Jt(a,c),d.callback=t??null,vn(s,d,c),e.current.lanes=c,Yr(e,c,a),st(e,a),e}function Xs(e,t,s,a){var c=t.current,d=Qe(),p=xn(c);return s=Od(s),t.context===null?t.context=s:t.pendingContext=s,t=Jt(d,p),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=vn(c,t,p),e!==null&&(Rt(e,c,p,d),Ns(e,c,p)),p}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function El(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function l4(){return null}var Dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Il(e){this._internalRoot=e}to.prototype.render=Il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Xs(e,t,null,null)},to.prototype.unmount=Il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Xs(null,e,null,null)}),t[$t]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var s=0;s<un.length&&t!==0&&t<un[s].priority;s++);un.splice(s,0,e),s===0&&_u(e)}};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function c4(e,t,s,a,c){if(c){if(typeof a=="function"){var d=a;a=function(){var T=eo(p);d.call(T)}}var p=Md(t,a,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=p,e[$t]=p.current,di(e.nodeType===8?e.parentNode:e),Jn(),p}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var w=a;a=function(){var T=eo(k);w.call(T)}}var k=Sl(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=k,e[$t]=k.current,di(e.nodeType===8?e.parentNode:e),Jn(function(){Xs(t,k,s,a)}),k}function ro(e,t,s,a,c){var d=s._reactRootContainer;if(d){var p=d;if(typeof c=="function"){var w=c;c=function(){var k=eo(p);w.call(k)}}Xs(t,p,e,c)}else p=c4(s,t,e,c,a);return eo(p)}vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Qr(t.pendingLanes);s!==0&&(Yo(t,s|1),st(t,Re()),(ce&6)===0&&(Lr=Re()+500,gn()))}break;case 13:Jn(function(){var a=Gt(e,1);if(a!==null){var c=Qe();Rt(a,e,1,c)}}),El(e,1)}},Zo=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var s=Qe();Rt(t,e,134217728,s)}El(e,134217728)}},wu=function(e){if(e.tag===13){var t=xn(e),s=Gt(e,t);if(s!==null){var a=Qe();Rt(s,e,t,a)}El(e,t)}},Cu=function(){return pe},ku=function(e,t){var s=pe;try{return pe=e,t()}finally{pe=s}},$o=function(e,t,s){switch(t){case"input":if(jo(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var a=s[t];if(a!==e&&a.form===e.form){var c=Cs(a);if(!c)throw Error(i(90));Wc(a),jo(a,c)}}}break;case"textarea":Qc(e,s);break;case"select":t=s.value,t!=null&&ur(e,!!s.multiple,t,!1)}},su=vl,ou=Jn;var u4={usingClientEntryPoint:!1,Events:[pi,Cr,Cs,ru,iu,vl]},Ti={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d4={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||l4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ts=io.inject(d4),Mt=io}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u4,ot.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(t))throw Error(i(200));return a4(e,t,null,s)},ot.createRoot=function(e,t){if(!bl(e))throw Error(i(299));var s=!1,a="",c=Dd;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Sl(e,1,!1,null,null,s,!1,a,c),e[$t]=t.current,di(e.nodeType===8?e.parentNode:e),new Il(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return Jn(e)},ot.hydrate=function(e,t,s){if(!no(t))throw Error(i(200));return ro(null,e,t,!0,s)},ot.hydrateRoot=function(e,t,s){if(!bl(e))throw Error(i(405));var a=s!=null&&s.hydratedSources||null,c=!1,d="",p=Dd;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),t=Md(t,null,e,1,s??null,c,!1,d,p),e[$t]=t.current,di(e),a)for(e=0;e<a.length;e++)s=a[e],c=s._getVersion,c=c(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,c]:t.mutableSourceEagerHydrationData.push(s,c);return new to(t)},ot.render=function(e,t,s){if(!no(t))throw Error(i(200));return ro(null,e,t,!1,s)},ot.unmountComponentAtNode=function(e){if(!no(e))throw Error(i(40));return e._reactRootContainer?(Jn(function(){ro(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},ot.unstable_batchedUpdates=vl,ot.unstable_renderSubtreeIntoContainer=function(e,t,s,a){if(!no(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ro(e,t,s,!1,a)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var qd;function pf(){if(qd)return Nl.exports;qd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Nl.exports=k4(),Nl.exports}var Kd;function x4(){if(Kd)return so;Kd=1;var r=pf();return so.createRoot=r.createRoot,so.hydrateRoot=r.hydrateRoot,so}var _4=x4();pf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},ji.apply(this,arguments)}var Nn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Nn||(Nn={}));const Gd="popstate";function S4(r){r===void 0&&(r={});function n(o,l){let{pathname:u,search:f,hash:m}=o.location;return Xl("",{pathname:u,search:f,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(o,l){return typeof l=="string"?l:mo(l)}return I4(n,i,null,r)}function Le(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function mf(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function E4(){return Math.random().toString(36).substr(2,8)}function Jd(r,n){return{usr:r.state,key:r.key,idx:n}}function Xl(r,n,i,o){return i===void 0&&(i=null),ji({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof n=="string"?zr(n):n,{state:i,key:n&&n.key||o||E4()})}function mo(r){let{pathname:n="/",search:i="",hash:o=""}=r;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function zr(r){let n={};if(r){let i=r.indexOf("#");i>=0&&(n.hash=r.substr(i),r=r.substr(0,i));let o=r.indexOf("?");o>=0&&(n.search=r.substr(o),r=r.substr(0,o)),r&&(n.pathname=r)}return n}function I4(r,n,i,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:u=!1}=o,f=l.history,m=Nn.Pop,h=null,y=_();y==null&&(y=0,f.replaceState(ji({},f.state,{idx:y}),""));function _(){return(f.state||{idx:null}).idx}function C(){m=Nn.Pop;let A=_(),K=A==null?null:A-y;y=A,h&&h({action:m,location:O.location,delta:K})}function x(A,K){m=Nn.Push;let W=Xl(O.location,A,K);y=_()+1;let L=Jd(W,y),V=O.createHref(W);try{f.pushState(L,"",V)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(V)}u&&h&&h({action:m,location:O.location,delta:1})}function R(A,K){m=Nn.Replace;let W=Xl(O.location,A,K);y=_();let L=Jd(W,y),V=O.createHref(W);f.replaceState(L,"",V),u&&h&&h({action:m,location:O.location,delta:0})}function P(A){let K=l.location.origin!=="null"?l.location.origin:l.location.href,W=typeof A=="string"?A:mo(A);return W=W.replace(/ $/,"%20"),Le(K,"No window.location.(origin|href) available to create URL for href: "+W),new URL(W,K)}let O={get action(){return m},get location(){return r(l,f)},listen(A){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Gd,C),h=A,()=>{l.removeEventListener(Gd,C),h=null}},createHref(A){return n(l,A)},createURL:P,encodeLocation(A){let K=P(A);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:x,replace:R,go(A){return f.go(A)}};return O}var Qd;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Qd||(Qd={}));function b4(r,n,i){return i===void 0&&(i="/"),T4(r,n,i)}function T4(r,n,i,o){let l=typeof n=="string"?zr(n):n,u=vc(l.pathname||"/",i);if(u==null)return null;let f=gf(r);P4(f);let m=null;for(let h=0;m==null&&h<f.length;++h){let y=V4(u);m=U4(f[h],y)}return m}function gf(r,n,i,o){n===void 0&&(n=[]),i===void 0&&(i=[]),o===void 0&&(o="");let l=(u,f,m)=>{let h={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(Le(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let y=Rn([o,h.relativePath]),_=i.concat(h);u.children&&u.children.length>0&&(Le(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),gf(u.children,n,_,y)),!(u.path==null&&!u.index)&&n.push({path:y,score:j4(y,u.index),routesMeta:_})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))l(u,f);else for(let h of yf(u.path))l(u,f,h)}),n}function yf(r){let n=r.split("/");if(n.length===0)return[];let[i,...o]=n,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let f=yf(o.join("/")),m=[];return m.push(...f.map(h=>h===""?u:[u,h].join("/"))),l&&m.push(...f),m.map(h=>r.startsWith("/")&&h===""?"/":h)}function P4(r){r.sort((n,i)=>n.score!==i.score?i.score-n.score:D4(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const N4=/^:[\w-]+$/,R4=3,A4=2,L4=1,O4=10,M4=-2,Yd=r=>r==="*";function j4(r,n){let i=r.split("/"),o=i.length;return i.some(Yd)&&(o+=M4),n&&(o+=A4),i.filter(l=>!Yd(l)).reduce((l,u)=>l+(N4.test(u)?R4:u===""?L4:O4),o)}function D4(r,n){return r.length===n.length&&r.slice(0,-1).every((o,l)=>o===n[l])?r[r.length-1]-n[n.length-1]:0}function U4(r,n,i){let{routesMeta:o}=r,l={},u="/",f=[];for(let m=0;m<o.length;++m){let h=o[m],y=m===o.length-1,_=u==="/"?n:n.slice(u.length)||"/",C=z4({path:h.relativePath,caseSensitive:h.caseSensitive,end:y},_),x=h.route;if(!C)return null;Object.assign(l,C.params),f.push({params:l,pathname:Rn([u,C.pathname]),pathnameBase:W4(Rn([u,C.pathnameBase])),route:x}),C.pathnameBase!=="/"&&(u=Rn([u,C.pathnameBase]))}return f}function z4(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,o]=F4(r.path,r.caseSensitive,r.end),l=n.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:o.reduce((y,_,C)=>{let{paramName:x,isOptional:R}=_;if(x==="*"){let O=m[C]||"";f=u.slice(0,u.length-O.length).replace(/(.)\/+$/,"$1")}const P=m[C];return R&&!P?y[x]=void 0:y[x]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function F4(r,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),mf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h)=>(o.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),o]}function V4(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return mf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),r}}function vc(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=r.charAt(i);return o&&o!=="/"?null:r.slice(i)||"/"}function H4(r,n){n===void 0&&(n="/");let{pathname:i,search:o="",hash:l=""}=typeof r=="string"?zr(r):r;return{pathname:i?i.startsWith("/")?i:B4(i,n):n,search:q4(o),hash:K4(l)}}function B4(r,n){let i=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ll(r,n,i,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $4(r){return r.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function wc(r,n){let i=$4(r);return n?i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function Cc(r,n,i,o){o===void 0&&(o=!1);let l;typeof r=="string"?l=zr(r):(l=ji({},r),Le(!l.pathname||!l.pathname.includes("?"),Ll("?","pathname","search",l)),Le(!l.pathname||!l.pathname.includes("#"),Ll("#","pathname","hash",l)),Le(!l.search||!l.search.includes("#"),Ll("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,m;if(f==null)m=i;else{let C=n.length-1;if(!o&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),C-=1;l.pathname=x.join("/")}m=C>=0?n[C]:"/"}let h=H4(l,m),y=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(y||_)&&(h.pathname+="/"),h}const Rn=r=>r.join("/").replace(/\/\/+/g,"/"),W4=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),q4=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,K4=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function G4(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const vf=["post","put","patch","delete"];new Set(vf);const J4=["get",...vf];new Set(J4);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Di.apply(this,arguments)}const kc=N.createContext(null),Q4=N.createContext(null),On=N.createContext(null),bo=N.createContext(null),Mn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),wf=N.createContext(null);function Y4(r,n){let{relative:i}=n===void 0?{}:n;Fr()||Le(!1);let{basename:o,navigator:l}=N.useContext(On),{hash:u,pathname:f,search:m}=kf(r,{relative:i}),h=f;return o!=="/"&&(h=f==="/"?o:Rn([o,f])),l.createHref({pathname:h,search:m,hash:u})}function Fr(){return N.useContext(bo)!=null}function Vi(){return Fr()||Le(!1),N.useContext(bo).location}function Cf(r){N.useContext(On).static||N.useLayoutEffect(r)}function Hi(){let{isDataRoute:r}=N.useContext(Mn);return r?u3():Z4()}function Z4(){Fr()||Le(!1);let r=N.useContext(kc),{basename:n,future:i,navigator:o}=N.useContext(On),{matches:l}=N.useContext(Mn),{pathname:u}=Vi(),f=JSON.stringify(wc(l,i.v7_relativeSplatPath)),m=N.useRef(!1);return Cf(()=>{m.current=!0}),N.useCallback(function(y,_){if(_===void 0&&(_={}),!m.current)return;if(typeof y=="number"){o.go(y);return}let C=Cc(y,JSON.parse(f),u,_.relative==="path");r==null&&n!=="/"&&(C.pathname=C.pathname==="/"?n:Rn([n,C.pathname])),(_.replace?o.replace:o.push)(C,_.state,_)},[n,o,f,u,r])}function kf(r,n){let{relative:i}=n===void 0?{}:n,{future:o}=N.useContext(On),{matches:l}=N.useContext(Mn),{pathname:u}=Vi(),f=JSON.stringify(wc(l,o.v7_relativeSplatPath));return N.useMemo(()=>Cc(r,JSON.parse(f),u,i==="path"),[r,f,u,i])}function X4(r,n){return e3(r,n)}function e3(r,n,i,o){Fr()||Le(!1);let{navigator:l}=N.useContext(On),{matches:u}=N.useContext(Mn),f=u[u.length-1],m=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let y=Vi(),_;if(n){var C;let A=typeof n=="string"?zr(n):n;h==="/"||(C=A.pathname)!=null&&C.startsWith(h)||Le(!1),_=A}else _=y;let x=_.pathname||"/",R=x;if(h!=="/"){let A=h.replace(/^\//,"").split("/");R="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=b4(r,{pathname:R}),O=s3(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:Rn([h,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:Rn([h,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),u,i,o);return n&&O?N.createElement(bo.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Nn.Pop}},O):O}function t3(){let r=c3(),n=G4(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),i?N.createElement("pre",{style:l},i):null,null)}const n3=N.createElement(t3,null);class r3 extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?N.createElement(Mn.Provider,{value:this.props.routeContext},N.createElement(wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i3(r){let{routeContext:n,match:i,children:o}=r,l=N.useContext(kc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),N.createElement(Mn.Provider,{value:n},o)}function s3(r,n,i,o){var l;if(n===void 0&&(n=[]),i===void 0&&(i=null),o===void 0&&(o=null),r==null){var u;if(!i)return null;if(i.errors)r=i.matches;else if((u=o)!=null&&u.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,m=(l=i)==null?void 0:l.errors;if(m!=null){let _=f.findIndex(C=>C.route.id&&m?.[C.route.id]!==void 0);_>=0||Le(!1),f=f.slice(0,Math.min(f.length,_+1))}let h=!1,y=-1;if(i&&o&&o.v7_partialHydration)for(let _=0;_<f.length;_++){let C=f[_];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(y=_),C.route.id){let{loaderData:x,errors:R}=i,P=C.route.loader&&x[C.route.id]===void 0&&(!R||R[C.route.id]===void 0);if(C.route.lazy||P){h=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((_,C,x)=>{let R,P=!1,O=null,A=null;i&&(R=m&&C.route.id?m[C.route.id]:void 0,O=C.route.errorElement||n3,h&&(y<0&&x===0?(d3("route-fallback"),P=!0,A=null):y===x&&(P=!0,A=C.route.hydrateFallbackElement||null)));let K=n.concat(f.slice(0,x+1)),W=()=>{let L;return R?L=O:P?L=A:C.route.Component?L=N.createElement(C.route.Component,null):C.route.element?L=C.route.element:L=_,N.createElement(i3,{match:C,routeContext:{outlet:_,matches:K,isDataRoute:i!=null},children:L})};return i&&(C.route.ErrorBoundary||C.route.errorElement||x===0)?N.createElement(r3,{location:i.location,revalidation:i.revalidation,component:O,error:R,children:W(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):W()},null)}var xf=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(xf||{}),_f=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(_f||{});function o3(r){let n=N.useContext(kc);return n||Le(!1),n}function a3(r){let n=N.useContext(Q4);return n||Le(!1),n}function l3(r){let n=N.useContext(Mn);return n||Le(!1),n}function Sf(r){let n=l3(),i=n.matches[n.matches.length-1];return i.route.id||Le(!1),i.route.id}function c3(){var r;let n=N.useContext(wf),i=a3(),o=Sf();return n!==void 0?n:(r=i.errors)==null?void 0:r[o]}function u3(){let{router:r}=o3(xf.UseNavigateStable),n=Sf(_f.UseNavigateStable),i=N.useRef(!1);return Cf(()=>{i.current=!0}),N.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Di({fromRouteId:n},u)))},[r,n])}const Zd={};function d3(r,n,i){Zd[r]||(Zd[r]=!0)}function f3(r,n){r?.v7_startTransition,r?.v7_relativeSplatPath}function ec(r){let{to:n,replace:i,state:o,relative:l}=r;Fr()||Le(!1);let{future:u,static:f}=N.useContext(On),{matches:m}=N.useContext(Mn),{pathname:h}=Vi(),y=Hi(),_=Cc(n,wc(m,u.v7_relativeSplatPath),h,l==="path"),C=JSON.stringify(_);return N.useEffect(()=>y(JSON.parse(C),{replace:i,state:o,relative:l}),[y,C,l,i,o]),null}function Zt(r){Le(!1)}function h3(r){let{basename:n="/",children:i=null,location:o,navigationType:l=Nn.Pop,navigator:u,static:f=!1,future:m}=r;Fr()&&Le(!1);let h=n.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:h,navigator:u,static:f,future:Di({v7_relativeSplatPath:!1},m)}),[h,m,u,f]);typeof o=="string"&&(o=zr(o));let{pathname:_="/",search:C="",hash:x="",state:R=null,key:P="default"}=o,O=N.useMemo(()=>{let A=vc(_,h);return A==null?null:{location:{pathname:A,search:C,hash:x,state:R,key:P},navigationType:l}},[h,_,C,x,R,P,l]);return O==null?null:N.createElement(On.Provider,{value:y},N.createElement(bo.Provider,{children:i,value:O}))}function p3(r){let{children:n,location:i}=r;return X4(tc(n),i)}new Promise(()=>{});function tc(r,n){n===void 0&&(n=[]);let i=[];return N.Children.forEach(r,(o,l)=>{if(!N.isValidElement(o))return;let u=[...n,l];if(o.type===N.Fragment){i.push.apply(i,tc(o.props.children,u));return}o.type!==Zt&&Le(!1),!o.props.index||!o.props.children||Le(!1);let f={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=tc(o.props.children,u)),i.push(f)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},nc.apply(this,arguments)}function m3(r,n){if(r==null)return{};var i={},o=Object.keys(r),l,u;for(u=0;u<o.length;u++)l=o[u],!(n.indexOf(l)>=0)&&(i[l]=r[l]);return i}function g3(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function y3(r,n){return r.button===0&&(!n||n==="_self")&&!g3(r)}const v3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],w3="6";try{window.__reactRouterVersion=w3}catch{}const C3="startTransition",Xd=v4[C3];function k3(r){let{basename:n,children:i,future:o,window:l}=r,u=N.useRef();u.current==null&&(u.current=S4({window:l,v5Compat:!0}));let f=u.current,[m,h]=N.useState({action:f.action,location:f.location}),{v7_startTransition:y}=o||{},_=N.useCallback(C=>{y&&Xd?Xd(()=>h(C)):h(C)},[h,y]);return N.useLayoutEffect(()=>f.listen(_),[f,_]),N.useEffect(()=>f3(o),[o]),N.createElement(h3,{basename:n,children:i,location:m.location,navigationType:m.action,navigator:f,future:o})}const x3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=N.forwardRef(function(n,i){let{onClick:o,relative:l,reloadDocument:u,replace:f,state:m,target:h,to:y,preventScrollReset:_,viewTransition:C}=n,x=m3(n,v3),{basename:R}=N.useContext(On),P,O=!1;if(typeof y=="string"&&_3.test(y)&&(P=y,x3))try{let L=new URL(window.location.href),V=y.startsWith("//")?new URL(L.protocol+y):new URL(y),G=vc(V.pathname,R);V.origin===L.origin&&G!=null?y=G+V.search+V.hash:O=!0}catch{}let A=Y4(y,{relative:l}),K=S3(y,{replace:f,state:m,target:h,preventScrollReset:_,relative:l,viewTransition:C});function W(L){o&&o(L),L.defaultPrevented||K(L)}return N.createElement("a",nc({},x,{href:P||A,onClick:O||u?o:W,ref:i,target:h}))});var e0;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(e0||(e0={}));var t0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(t0||(t0={}));function S3(r,n){let{target:i,replace:o,state:l,preventScrollReset:u,relative:f,viewTransition:m}=n===void 0?{}:n,h=Hi(),y=Vi(),_=kf(r,{relative:f});return N.useCallback(C=>{if(y3(C,i)){C.preventDefault();let x=o!==void 0?o:mo(y)===mo(_);h(r,{replace:x,state:l,preventScrollReset:u,relative:f,viewTransition:m})}},[y,h,_,o,l,i,r,u,f,m])}const Ef=N.createContext(),E3={cart:JSON.parse(localStorage.getItem("cart"))||[],wishlist:JSON.parse(localStorage.getItem("wishlist"))||[]},I3=(r,n)=>{switch(n.type){case"ADD_TO_CART":{const u=r.cart.find(f=>f.id===n.product.id)?r.cart.map(f=>f.id===n.product.id?{...f,quantity:f.quantity+1}:f):[...r.cart,{...n.product,quantity:1}];return{...r,cart:u}}case"INCREMENT":return{...r,cart:r.cart.map(l=>l.id===n.id?{...l,quantity:l.quantity+1}:l)};case"DECREMENT":return{...r,cart:r.cart.map(l=>l.id===n.id?{...l,quantity:l.quantity-1}:l).filter(l=>l.quantity>0)};case"REMOVE_FROM_CART":return{...r,cart:r.cart.filter(l=>l.id!==n.id)};case"CLEAR_CART":return{...r,cart:[]};case"TOGGLE_WISHLIST":const o=r.wishlist.includes(n.id)?r.wishlist.filter(l=>l!==n.id):[...r.wishlist,n.id];return{...r,wishlist:o};default:return r}},b3=({children:r})=>{const[n,i]=N.useReducer(I3,E3);N.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(n.cart)),localStorage.setItem("wishlist",JSON.stringify(n.wishlist))},[n.cart,n.wishlist]);const o=C=>i({type:"ADD_TO_CART",product:C}),l=C=>i({type:"REMOVE_FROM_CART",id:C}),u=()=>i({type:"CLEAR_CART"}),f=C=>i({type:"INCREMENT",id:C}),m=C=>i({type:"DECREMENT",id:C}),h=C=>i({type:"TOGGLE_WISHLIST",id:C}),y=n.cart.reduce((C,x)=>C+x.quantity,0),_=n.cart.reduce((C,x)=>C+x.price*x.quantity,0);return g.jsx(Ef.Provider,{value:{cart:n.cart,wishlist:n.wishlist,addToCart:o,removeFromCart:l,clearCart:u,increment:f,decrement:m,toggleWishlist:h,totalItems:y,totalPrice:_},children:r})},To=()=>N.useContext(Ef),T3=()=>{};var n0={};/**
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
 */const If=function(r){const n=[];let i=0;for(let o=0;o<r.length;o++){let l=r.charCodeAt(o);l<128?n[i++]=l:l<2048?(n[i++]=l>>6|192,n[i++]=l&63|128):(l&64512)===55296&&o+1<r.length&&(r.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++o)&1023),n[i++]=l>>18|240,n[i++]=l>>12&63|128,n[i++]=l>>6&63|128,n[i++]=l&63|128):(n[i++]=l>>12|224,n[i++]=l>>6&63|128,n[i++]=l&63|128)}return n},P3=function(r){const n=[];let i=0,o=0;for(;i<r.length;){const l=r[i++];if(l<128)n[o++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[i++];n[o++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[i++],f=r[i++],m=r[i++],h=((l&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;n[o++]=String.fromCharCode(55296+(h>>10)),n[o++]=String.fromCharCode(56320+(h&1023))}else{const u=r[i++],f=r[i++];n[o++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return n.join("")},bf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,m=f?r[l+1]:0,h=l+2<r.length,y=h?r[l+2]:0,_=u>>2,C=(u&3)<<4|m>>4;let x=(m&15)<<2|y>>6,R=y&63;h||(R=64,f||(x=64)),o.push(i[_],i[C],i[x],i[R])}return o.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(If(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):P3(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<r.length;){const u=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const C=l<r.length?i[r.charAt(l)]:64;if(++l,u==null||m==null||y==null||C==null)throw new N3;const x=u<<2|m>>4;if(o.push(x),y!==64){const R=m<<4&240|y>>2;if(o.push(R),C!==64){const P=y<<6&192|C;o.push(P)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class N3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R3=function(r){const n=If(r);return bf.encodeByteArray(n,!0)},Tf=function(r){return R3(r).replace(/\./g,"")},Pf=function(r){try{return bf.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function A3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const L3=()=>A3().__FIREBASE_DEFAULTS__,O3=()=>{if(typeof process>"u"||typeof n0>"u")return;const r=n0.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},M3=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&Pf(r[1]);return n&&JSON.parse(n)},xc=()=>{try{return T3()||L3()||O3()||M3()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},j3=r=>xc()?.emulatorHosts?.[r],Nf=()=>xc()?.config,Rf=r=>xc()?.[`_${r}`];/**
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
 */class D3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,i)=>{this.resolve=n,this.reject=i})}wrapCallback(n){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(i):n(i,o))}}}/**
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
 */function Po(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function U3(r){return(await fetch(r,{credentials:"include"})).ok}const Li={};function z3(){const r={prod:[],emulator:[]};for(const n of Object.keys(Li))Li[n]?r.emulator.push(n):r.prod.push(n);return r}function F3(r){let n=document.getElementById(r),i=!1;return n||(n=document.createElement("div"),n.setAttribute("id",r),i=!0),{created:i,element:n}}let r0=!1;function V3(r,n){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||Li[r]===n||Li[r]||r0)return;Li[r]=n;function i(x){return`__firebase__banner__${x}`}const o="__firebase__banner",u=z3().prod.length>0;function f(){const x=document.getElementById(o);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function h(x,R){x.setAttribute("width","24"),x.setAttribute("id",R),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function y(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{r0=!0,f()},x}function _(x,R){x.setAttribute("id",R),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=F3(o),R=i("text"),P=document.getElementById(R)||document.createElement("span"),O=i("learnmore"),A=document.getElementById(O)||document.createElement("a"),K=i("preprendIcon"),W=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const L=x.element;m(L),_(A,O);const V=y();h(W,K),L.append(W,P,A,V),document.body.appendChild(L)}u?(P.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function B3(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Af(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W3(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Lf(){try{return typeof indexedDB=="object"}catch{return!1}}function Of(){return new Promise((r,n)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{n(l.error?.message||"")}}catch(i){n(i)}})}function q3(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const K3="FirebaseError";class Bt extends Error{constructor(n,i,o){super(i),this.code=n,this.customData=o,this.name=K3,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(n,i,o){this.service=n,this.serviceName=i,this.errors=o}create(n,...i){const o=i[0]||{},l=`${this.service}/${n}`,u=this.errors[n],f=u?G3(u,o):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new Bt(l,m,o)}}function G3(r,n){return r.replace(J3,(i,o)=>{const l=n[o];return l!=null?String(l):`<${o}?>`})}const J3=/\{\$([^}]+)}/g;function Q3(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function rr(r,n){if(r===n)return!0;const i=Object.keys(r),o=Object.keys(n);for(const l of i){if(!o.includes(l))return!1;const u=r[l],f=n[l];if(i0(u)&&i0(f)){if(!rr(u,f))return!1}else if(u!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function i0(r){return r!==null&&typeof r=="object"}/**
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
 */function Bi(r){const n=[];for(const[i,o]of Object.entries(r))Array.isArray(o)?o.forEach(l=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return n.length?"&"+n.join("&"):""}function Ri(r){const n={};return r.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,u]=o.split("=");n[decodeURIComponent(l)]=decodeURIComponent(u)}}),n}function Ai(r){const n=r.indexOf("?");if(!n)return"";const i=r.indexOf("#",n);return r.substring(n,i>0?i:void 0)}function Y3(r,n){const i=new Z3(r,n);return i.subscribe.bind(i)}class Z3{constructor(n,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{n(this)}).catch(o=>{this.error(o)})}next(n){this.forEachObserver(i=>{i.next(n)})}error(n){this.forEachObserver(i=>{i.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,i,o){let l;if(n===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");X3(n,["next","error","complete"])?l=n:l={next:n,error:i,complete:o},l.next===void 0&&(l.next=Ol),l.error===void 0&&(l.error=Ol),l.complete===void 0&&(l.complete=Ol);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,n)}sendOne(n,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{i(this.observers[n])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X3(r,n){if(typeof r!="object"||r===null)return!1;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}function Ol(){}/**
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
 */const e6=1e3,t6=2,n6=14400*1e3,r6=.5;function s0(r,n=e6,i=t6){const o=n*Math.pow(i,r),l=Math.round(r6*o*(Math.random()-.5)*2);return Math.min(n6,o+l)}/**
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
 */function Ot(r){return r&&r._delegate?r._delegate:r}class Ht{constructor(n,i,o){this.name=n,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */class i6{constructor(n,i){this.name=n,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const i=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(i)){const o=new D3;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(n){const i=this.normalizeInstanceIdentifier(n?.identifier),o=n?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(o6(n))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:l});o.resolve(u)}catch{}}}}clearInstance(n=er){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...n.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=er){return this.instances.has(n)}getOptions(n=er){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:i={}}=n,o=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);o===m&&f.resolve(l)}return l}onInit(n,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(n),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&n(u,o),()=>{l.delete(n)}}invokeOnInitCallbacks(n,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(n,i)}catch{}}getOrInitializeService({instanceIdentifier:n,options:i={}}){let o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:s6(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null}normalizeInstanceIdentifier(n=er){return this.component?this.component.multipleInstances?n:er:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s6(r){return r===er?void 0:r}function o6(r){return r.instantiationMode==="EAGER"}/**
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
 */class a6{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const i=this.getProvider(n.name);if(i.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);i.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const i=new i6(n,this);return this.providers.set(n,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const l6={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},c6=ge.INFO,u6={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},d6=(r,n,...i)=>{if(n<r.logLevel)return;const o=new Date().toISOString(),l=u6[n];if(l)console[l](`[${o}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class _c{constructor(n){this.name=n,this._logLevel=c6,this._logHandler=d6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in ge))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?l6[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...n),this._logHandler(this,ge.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...n),this._logHandler(this,ge.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...n),this._logHandler(this,ge.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...n),this._logHandler(this,ge.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...n),this._logHandler(this,ge.ERROR,...n)}}const f6=(r,n)=>n.some(i=>r instanceof i);let o0,a0;function h6(){return o0||(o0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p6(){return a0||(a0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mf=new WeakMap,rc=new WeakMap,jf=new WeakMap,Ml=new WeakMap,Sc=new WeakMap;function m6(r){const n=new Promise((i,o)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{i(An(r.result)),l()},f=()=>{o(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return n.then(i=>{i instanceof IDBCursor&&Mf.set(i,r)}).catch(()=>{}),Sc.set(n,r),n}function g6(r){if(rc.has(r))return;const n=new Promise((i,o)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{i(),l()},f=()=>{o(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});rc.set(r,n)}let ic={get(r,n,i){if(r instanceof IDBTransaction){if(n==="done")return rc.get(r);if(n==="objectStoreNames")return r.objectStoreNames||jf.get(r);if(n==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return An(r[n])},set(r,n,i){return r[n]=i,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function y6(r){ic=r(ic)}function v6(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...i){const o=r.call(jl(this),n,...i);return jf.set(o,n.sort?n.sort():[n]),An(o)}:p6().includes(r)?function(...n){return r.apply(jl(this),n),An(Mf.get(this))}:function(...n){return An(r.apply(jl(this),n))}}function w6(r){return typeof r=="function"?v6(r):(r instanceof IDBTransaction&&g6(r),f6(r,h6())?new Proxy(r,ic):r)}function An(r){if(r instanceof IDBRequest)return m6(r);if(Ml.has(r))return Ml.get(r);const n=w6(r);return n!==r&&(Ml.set(r,n),Sc.set(n,r)),n}const jl=r=>Sc.get(r);function Df(r,n,{blocked:i,upgrade:o,blocking:l,terminated:u}={}){const f=indexedDB.open(r,n),m=An(f);return o&&f.addEventListener("upgradeneeded",h=>{o(An(f.result),h.oldVersion,h.newVersion,An(f.transaction),h)}),i&&f.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),m.then(h=>{u&&h.addEventListener("close",()=>u()),l&&h.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const C6=["get","getKey","getAll","getAllKeys","count"],k6=["put","add","delete","clear"],Dl=new Map;function l0(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(Dl.get(n))return Dl.get(n);const i=n.replace(/FromIndex$/,""),o=n!==i,l=k6.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||C6.includes(i)))return;const u=async function(f,...m){const h=this.transaction(f,l?"readwrite":"readonly");let y=h.store;return o&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&h.done]))[0]};return Dl.set(n,u),u}y6(r=>({...r,get:(n,i,o)=>l0(n,i)||r.get(n,i,o),has:(n,i)=>!!l0(n,i)||r.has(n,i)}));/**
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
 */class x6{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(_6(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function _6(r){return r.getComponent()?.type==="VERSION"}const sc="@firebase/app",c0="0.14.2";/**
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
 */const rn=new _c("@firebase/app"),S6="@firebase/app-compat",E6="@firebase/analytics-compat",I6="@firebase/analytics",b6="@firebase/app-check-compat",T6="@firebase/app-check",P6="@firebase/auth",N6="@firebase/auth-compat",R6="@firebase/database",A6="@firebase/data-connect",L6="@firebase/database-compat",O6="@firebase/functions",M6="@firebase/functions-compat",j6="@firebase/installations",D6="@firebase/installations-compat",U6="@firebase/messaging",z6="@firebase/messaging-compat",F6="@firebase/performance",V6="@firebase/performance-compat",H6="@firebase/remote-config",B6="@firebase/remote-config-compat",$6="@firebase/storage",W6="@firebase/storage-compat",q6="@firebase/firestore",K6="@firebase/ai",G6="@firebase/firestore-compat",J6="firebase",Q6="12.2.0";/**
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
 */const oc="[DEFAULT]",Y6={[sc]:"fire-core",[S6]:"fire-core-compat",[I6]:"fire-analytics",[E6]:"fire-analytics-compat",[T6]:"fire-app-check",[b6]:"fire-app-check-compat",[P6]:"fire-auth",[N6]:"fire-auth-compat",[R6]:"fire-rtdb",[A6]:"fire-data-connect",[L6]:"fire-rtdb-compat",[O6]:"fire-fn",[M6]:"fire-fn-compat",[j6]:"fire-iid",[D6]:"fire-iid-compat",[U6]:"fire-fcm",[z6]:"fire-fcm-compat",[F6]:"fire-perf",[V6]:"fire-perf-compat",[H6]:"fire-rc",[B6]:"fire-rc-compat",[$6]:"fire-gcs",[W6]:"fire-gcs-compat",[q6]:"fire-fst",[G6]:"fire-fst-compat",[K6]:"fire-vertex","fire-js":"fire-js",[J6]:"fire-js-all"};/**
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
 */const go=new Map,Z6=new Map,ac=new Map;function u0(r,n){try{r.container.addComponent(n)}catch(i){rn.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,i)}}function sn(r){const n=r.name;if(ac.has(n))return rn.debug(`There were multiple attempts to register component ${n}.`),!1;ac.set(n,r);for(const i of go.values())u0(i,r);for(const i of Z6.values())u0(i,r);return!0}function Vr(r,n){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(n)}function xt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const X6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new cr("app","Firebase",X6);/**
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
 */class e5{constructor(n,i,o){this._isDeleted=!1,this._options={...n},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=Q6;function Uf(r,n={}){let i=r;typeof n!="object"&&(n={name:n});const o={name:oc,automaticDataCollectionEnabled:!0,...n},l=o.name;if(typeof l!="string"||!l)throw Ln.create("bad-app-name",{appName:String(l)});if(i||(i=Nf()),!i)throw Ln.create("no-options");const u=go.get(l);if(u){if(rr(i,u.options)&&rr(o,u.config))return u;throw Ln.create("duplicate-app",{appName:l})}const f=new a6(l);for(const h of ac.values())f.addComponent(h);const m=new e5(i,o,f);return go.set(l,m),m}function zf(r=oc){const n=go.get(r);if(!n&&r===oc&&Nf())return Uf();if(!n)throw Ln.create("no-app",{appName:r});return n}function Ft(r,n,i){let o=Y6[r]??r;i&&(o+=`-${i}`);const l=o.match(/\s|\//),u=n.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${n}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${n}" contains illegal characters (whitespace or "/")`),rn.warn(f.join(" "));return}sn(new Ht(`${o}-version`,()=>({library:o,version:n}),"VERSION"))}/**
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
 */const t5="firebase-heartbeat-database",n5=1,Ui="firebase-heartbeat-store";let Ul=null;function Ff(){return Ul||(Ul=Df(t5,n5,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(Ui)}catch(i){console.warn(i)}}}}).catch(r=>{throw Ln.create("idb-open",{originalErrorMessage:r.message})})),Ul}async function r5(r){try{const i=(await Ff()).transaction(Ui),o=await i.objectStore(Ui).get(Vf(r));return await i.done,o}catch(n){if(n instanceof Bt)rn.warn(n.message);else{const i=Ln.create("idb-get",{originalErrorMessage:n?.message});rn.warn(i.message)}}}async function d0(r,n){try{const o=(await Ff()).transaction(Ui,"readwrite");await o.objectStore(Ui).put(n,Vf(r)),await o.done}catch(i){if(i instanceof Bt)rn.warn(i.message);else{const o=Ln.create("idb-set",{originalErrorMessage:i?.message});rn.warn(o.message)}}}function Vf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const i5=1024,s5=30;class o5{constructor(n){this.container=n,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new l5(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=f0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>s5){const l=c5(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){rn.warn(n)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=f0(),{heartbeatsToSend:i,unsentEntries:o}=a5(this._heartbeatsCache.heartbeats),l=Tf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return rn.warn(n),""}}}function f0(){return new Date().toISOString().substring(0,10)}function a5(r,n=i5){const i=[];let o=r.slice();for(const l of r){const u=i.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),h0(i)>n){u.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),h0(i)>n){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class l5{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lf()?Of().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await r5(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return d0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return d0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...n.heartbeats]})}else return}}function h0(r){return Tf(JSON.stringify({version:2,heartbeats:r})).length}function c5(r){if(r.length===0)return-1;let n=0,i=r[0].date;for(let o=1;o<r.length;o++)r[o].date<i&&(i=r[o].date,n=o);return n}/**
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
 */function u5(r){sn(new Ht("platform-logger",n=>new x6(n),"PRIVATE")),sn(new Ht("heartbeat",n=>new o5(n),"PRIVATE")),Ft(sc,c0,r),Ft(sc,c0,"esm2020"),Ft("fire-js","")}u5("");var d5="firebase",f5="12.2.1";/**
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
 */Ft(d5,f5,"app");const Hf="@firebase/installations",Ec="0.6.19";/**
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
 */const Bf=1e4,$f=`w:${Ec}`,Wf="FIS_v2",h5="https://firebaseinstallations.googleapis.com/v1",p5=3600*1e3,m5="installations",g5="Installations";/**
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
 */const y5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new cr(m5,g5,y5);function qf(r){return r instanceof Bt&&r.code.includes("request-failed")}/**
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
 */function Kf({projectId:r}){return`${h5}/projects/${r}/installations`}function Gf(r){return{token:r.token,requestStatus:2,expiresIn:w5(r.expiresIn),creationTime:Date.now()}}async function Jf(r,n){const o=(await n.json()).error;return ir.create("request-failed",{requestName:r,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function Qf({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function v5(r,{refreshToken:n}){const i=Qf(r);return i.append("Authorization",C5(n)),i}async function Yf(r){const n=await r();return n.status>=500&&n.status<600?r():n}function w5(r){return Number(r.replace("s","000"))}function C5(r){return`${Wf} ${r}`}/**
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
 */async function k5({appConfig:r,heartbeatServiceProvider:n},{fid:i}){const o=Kf(r),l=Qf(r),u=n.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:i,authVersion:Wf,appId:r.appId,sdkVersion:$f},m={method:"POST",headers:l,body:JSON.stringify(f)},h=await Yf(()=>fetch(o,m));if(h.ok){const y=await h.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:Gf(y.authToken)}}else throw await Jf("Create Installation",h)}/**
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
 */function Zf(r){return new Promise(n=>{setTimeout(n,r)})}/**
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
 */function x5(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _5=/^[cdef][\w-]{21}$/,lc="";function S5(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=E5(r);return _5.test(i)?i:lc}catch{return lc}}function E5(r){return x5(r).substr(0,22)}/**
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
 */function No(r){return`${r.appName}!${r.appId}`}/**
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
 */const Xf=new Map;function e2(r,n){const i=No(r);t2(i,n),I5(i,n)}function t2(r,n){const i=Xf.get(r);if(i)for(const o of i)o(n)}function I5(r,n){const i=b5();i&&i.postMessage({key:r,fid:n}),T5()}let tr=null;function b5(){return!tr&&"BroadcastChannel"in self&&(tr=new BroadcastChannel("[Firebase] FID Change"),tr.onmessage=r=>{t2(r.data.key,r.data.fid)}),tr}function T5(){Xf.size===0&&tr&&(tr.close(),tr=null)}/**
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
 */const P5="firebase-installations-database",N5=1,sr="firebase-installations-store";let zl=null;function Ic(){return zl||(zl=Df(P5,N5,{upgrade:(r,n)=>{switch(n){case 0:r.createObjectStore(sr)}}})),zl}async function yo(r,n){const i=No(r),l=(await Ic()).transaction(sr,"readwrite"),u=l.objectStore(sr),f=await u.get(i);return await u.put(n,i),await l.done,(!f||f.fid!==n.fid)&&e2(r,n.fid),n}async function n2(r){const n=No(r),o=(await Ic()).transaction(sr,"readwrite");await o.objectStore(sr).delete(n),await o.done}async function Ro(r,n){const i=No(r),l=(await Ic()).transaction(sr,"readwrite"),u=l.objectStore(sr),f=await u.get(i),m=n(f);return m===void 0?await u.delete(i):await u.put(m,i),await l.done,m&&(!f||f.fid!==m.fid)&&e2(r,m.fid),m}/**
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
 */async function bc(r){let n;const i=await Ro(r.appConfig,o=>{const l=R5(o),u=A5(r,l);return n=u.registrationPromise,u.installationEntry});return i.fid===lc?{installationEntry:await n}:{installationEntry:i,registrationPromise:n}}function R5(r){const n=r||{fid:S5(),registrationStatus:0};return r2(n)}function A5(r,n){if(n.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ir.create("app-offline"));return{installationEntry:n,registrationPromise:l}}const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},o=L5(r,i);return{installationEntry:i,registrationPromise:o}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:O5(r)}:{installationEntry:n}}async function L5(r,n){try{const i=await k5(r,n);return yo(r.appConfig,i)}catch(i){throw qf(i)&&i.customData.serverCode===409?await n2(r.appConfig):await yo(r.appConfig,{fid:n.fid,registrationStatus:0}),i}}async function O5(r){let n=await p0(r.appConfig);for(;n.registrationStatus===1;)await Zf(100),n=await p0(r.appConfig);if(n.registrationStatus===0){const{installationEntry:i,registrationPromise:o}=await bc(r);return o||i}return n}function p0(r){return Ro(r,n=>{if(!n)throw ir.create("installation-not-found");return r2(n)})}function r2(r){return M5(r)?{fid:r.fid,registrationStatus:0}:r}function M5(r){return r.registrationStatus===1&&r.registrationTime+Bf<Date.now()}/**
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
 */async function j5({appConfig:r,heartbeatServiceProvider:n},i){const o=D5(r,i),l=v5(r,i),u=n.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:$f,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(f)},h=await Yf(()=>fetch(o,m));if(h.ok){const y=await h.json();return Gf(y)}else throw await Jf("Generate Auth Token",h)}function D5(r,{fid:n}){return`${Kf(r)}/${n}/authTokens:generate`}/**
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
 */async function Tc(r,n=!1){let i;const o=await Ro(r.appConfig,u=>{if(!i2(u))throw ir.create("not-registered");const f=u.authToken;if(!n&&F5(f))return u;if(f.requestStatus===1)return i=U5(r,n),u;{if(!navigator.onLine)throw ir.create("app-offline");const m=H5(u);return i=z5(r,m),m}});return i?await i:o.authToken}async function U5(r,n){let i=await m0(r.appConfig);for(;i.authToken.requestStatus===1;)await Zf(100),i=await m0(r.appConfig);const o=i.authToken;return o.requestStatus===0?Tc(r,n):o}function m0(r){return Ro(r,n=>{if(!i2(n))throw ir.create("not-registered");const i=n.authToken;return B5(i)?{...n,authToken:{requestStatus:0}}:n})}async function z5(r,n){try{const i=await j5(r,n),o={...n,authToken:i};return await yo(r.appConfig,o),i}catch(i){if(qf(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await n2(r.appConfig);else{const o={...n,authToken:{requestStatus:0}};await yo(r.appConfig,o)}throw i}}function i2(r){return r!==void 0&&r.registrationStatus===2}function F5(r){return r.requestStatus===2&&!V5(r)}function V5(r){const n=Date.now();return n<r.creationTime||r.creationTime+r.expiresIn<n+p5}function H5(r){const n={requestStatus:1,requestTime:Date.now()};return{...r,authToken:n}}function B5(r){return r.requestStatus===1&&r.requestTime+Bf<Date.now()}/**
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
 */async function $5(r){const n=r,{installationEntry:i,registrationPromise:o}=await bc(n);return o?o.catch(console.error):Tc(n).catch(console.error),i.fid}/**
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
 */async function W5(r,n=!1){const i=r;return await q5(i),(await Tc(i,n)).token}async function q5(r){const{registrationPromise:n}=await bc(r);n&&await n}/**
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
 */function K5(r){if(!r||!r.options)throw Fl("App Configuration");if(!r.name)throw Fl("App Name");const n=["projectId","apiKey","appId"];for(const i of n)if(!r.options[i])throw Fl(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Fl(r){return ir.create("missing-app-config-values",{valueName:r})}/**
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
 */const s2="installations",G5="installations-internal",J5=r=>{const n=r.getProvider("app").getImmediate(),i=K5(n),o=Vr(n,"heartbeat");return{app:n,appConfig:i,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Q5=r=>{const n=r.getProvider("app").getImmediate(),i=Vr(n,s2).getImmediate();return{getId:()=>$5(i),getToken:l=>W5(i,l)}};function Y5(){sn(new Ht(s2,J5,"PUBLIC")),sn(new Ht(G5,Q5,"PRIVATE"))}Y5();Ft(Hf,Ec);Ft(Hf,Ec,"esm2020");/**
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
 */const vo="analytics",Z5="firebase_id",X5="origin",em=60*1e3,tm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pc="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new _c("@firebase/analytics");/**
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
 */const nm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new cr("analytics","Analytics",nm);/**
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
 */function rm(r){if(!r.startsWith(Pc)){const n=pt.create("invalid-gtag-resource",{gtagURL:r});return lt.warn(n.message),""}return r}function o2(r){return Promise.all(r.map(n=>n.catch(i=>i)))}function im(r,n){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,n)),i}function sm(r,n){const i=im("firebase-js-sdk-policy",{createScriptURL:rm}),o=document.createElement("script"),l=`${Pc}?l=${r}&id=${n}`;o.src=i?i?.createScriptURL(l):l,o.async=!0,document.head.appendChild(o)}function om(r){let n=[];return Array.isArray(window[r])?n=window[r]:window[r]=n,n}async function am(r,n,i,o,l,u){const f=o[l];try{if(f)await n[f];else{const h=(await o2(i)).find(y=>y.measurementId===l);h&&await n[h.appId]}}catch(m){lt.error(m)}r("config",l,u)}async function lm(r,n,i,o,l){try{let u=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const m=await o2(i);for(const h of f){const y=m.find(C=>C.measurementId===h),_=y&&n[y.appId];if(_)u.push(_);else{u=[];break}}}u.length===0&&(u=Object.values(n)),await Promise.all(u),r("event",o,l||{})}catch(u){lt.error(u)}}function cm(r,n,i,o){async function l(u,...f){try{if(u==="event"){const[m,h]=f;await lm(r,n,i,m,h)}else if(u==="config"){const[m,h]=f;await am(r,n,i,o,m,h)}else if(u==="consent"){const[m,h]=f;r("consent",m,h)}else if(u==="get"){const[m,h,y]=f;r("get",m,h,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){lt.error(m)}}return l}function um(r,n,i,o,l){let u=function(...f){window[o].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=cm(u,r,n,i),{gtagCore:u,wrappedGtag:window[l]}}function dm(r){const n=window.document.getElementsByTagName("script");for(const i of Object.values(n))if(i.src&&i.src.includes(Pc)&&i.src.includes(r))return i;return null}/**
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
 */const fm=30,hm=1e3;class pm{constructor(n={},i=hm){this.throttleMetadata=n,this.intervalMillis=i}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,i){this.throttleMetadata[n]=i}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const a2=new pm;function mm(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function gm(r){const{appId:n,apiKey:i}=r,o={method:"GET",headers:mm(i)},l=tm.replace("{app-id}",n),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function ym(r,n=a2,i){const{appId:o,apiKey:l,measurementId:u}=r.options;if(!o)throw pt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:o};throw pt.create("no-api-key")}const f=n.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new Cm;return setTimeout(async()=>{m.abort()},em),l2({appId:o,apiKey:l,measurementId:u},f,m,n)}async function l2(r,{throttleEndTimeMillis:n,backoffCount:i},o,l=a2){const{appId:u,measurementId:f}=r;try{await vm(o,n)}catch(m){if(f)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await gm(r);return l.deleteThrottleMetadata(u),m}catch(m){const h=m;if(!wm(h)){if(l.deleteThrottleMetadata(u),f)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:u,measurementId:f};throw m}const y=Number(h?.customData?.httpStatus)===503?s0(i,l.intervalMillis,fm):s0(i,l.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:i+1};return l.setThrottleMetadata(u,_),lt.debug(`Calling attemptFetch again in ${y} millis`),l2(r,_,o,l)}}function vm(r,n){return new Promise((i,o)=>{const l=Math.max(n-Date.now(),0),u=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(u),o(pt.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function wm(r){if(!(r instanceof Bt)||!r.customData)return!1;const n=Number(r.customData.httpStatus);return n===429||n===500||n===503||n===504}class Cm{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function km(r,n,i,o,l){if(l&&l.global){r("event",i,o);return}else{const u=await n,f={...o,send_to:u};r("event",i,f)}}/**
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
 */async function xm(){if(Lf())try{await Of()}catch(r){return lt.warn(pt.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return lt.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _m(r,n,i,o,l,u,f){const m=ym(r);m.then(x=>{i[x.measurementId]=x.appId,r.options.measurementId&&x.measurementId!==r.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>lt.error(x)),n.push(m);const h=xm().then(x=>{if(x)return o.getId()}),[y,_]=await Promise.all([m,h]);dm(u)||sm(u,y.measurementId),l("js",new Date);const C=f?.config??{};return C[X5]="firebase",C.update=!0,_!=null&&(C[Z5]=_),l("config",y.measurementId,C),y.measurementId}/**
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
 */class Sm{constructor(n){this.app=n}_delete(){return delete Oi[this.app.options.appId],Promise.resolve()}}let Oi={},g0=[];const y0={};let Vl="dataLayer",Em="gtag",v0,c2,w0=!1;function Im(){const r=[];if(Af()&&r.push("This is a browser extension environment."),q3()||r.push("Cookies are not available."),r.length>0){const n=r.map((o,l)=>`(${l+1}) ${o}`).join(" "),i=pt.create("invalid-analytics-context",{errorInfo:n});lt.warn(i.message)}}function bm(r,n,i){Im();const o=r.options.appId;if(!o)throw pt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Oi[o]!=null)throw pt.create("already-exists",{id:o});if(!w0){om(Vl);const{wrappedGtag:u,gtagCore:f}=um(Oi,g0,y0,Vl,Em);c2=u,v0=f,w0=!0}return Oi[o]=_m(r,g0,y0,n,v0,Vl,i),new Sm(r)}function Tm(r=zf()){r=Ot(r);const n=Vr(r,vo);return n.isInitialized()?n.getImmediate():Pm(r)}function Pm(r,n={}){const i=Vr(r,vo);if(i.isInitialized()){const l=i.getImmediate();if(rr(n,i.getOptions()))return l;throw pt.create("already-initialized")}return i.initialize({options:n})}function Nm(r,n,i,o){r=Ot(r),km(c2,Oi[r.app.options.appId],n,i,o).catch(l=>lt.error(l))}const C0="@firebase/analytics",k0="0.10.18";function Rm(){sn(new Ht(vo,(n,{options:i})=>{const o=n.getProvider("app").getImmediate(),l=n.getProvider("installations-internal").getImmediate();return bm(o,l,i)},"PUBLIC")),sn(new Ht("analytics-internal",r,"PRIVATE")),Ft(C0,k0),Ft(C0,k0,"esm2020");function r(n){try{const i=n.getProvider(vo).getImmediate();return{logEvent:(o,l,u)=>Nm(i,o,l,u)}}catch(i){throw pt.create("interop-component-reg-failed",{reason:i})}}}Rm();function u2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Am=u2,d2=new cr("auth","Firebase",u2());/**
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
 */const wo=new _c("@firebase/auth");function Lm(r,...n){wo.logLevel<=ge.WARN&&wo.warn(`Auth (${$i}): ${r}`,...n)}function co(r,...n){wo.logLevel<=ge.ERROR&&wo.error(`Auth (${$i}): ${r}`,...n)}/**
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
 */function St(r,...n){throw Rc(r,...n)}function Lt(r,...n){return Rc(r,...n)}function Nc(r,n,i){const o={...Am(),[n]:i};return new cr("auth","Firebase",o).create(n,{appName:r.name})}function nn(r){return Nc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Om(r,n,i){const o=i;if(!(n instanceof o))throw o.name!==n.constructor.name&&St(r,"argument-error"),Nc(r,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rc(r,...n){if(typeof r!="string"){const i=n[0],o=[...n.slice(1)];return o[0]&&(o[0].appName=r.name),r._errorFactory.create(i,...o)}return d2.create(r,...n)}function ne(r,n,...i){if(!r)throw Rc(n,...i)}function en(r){const n="INTERNAL ASSERTION FAILED: "+r;throw co(n),new Error(n)}function on(r,n){r||en(n)}/**
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
 */function cc(){return typeof self<"u"&&self.location?.href||""}function Mm(){return x0()==="http:"||x0()==="https:"}function x0(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function jm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||Af()||"connection"in navigator)?navigator.onLine:!0}function Dm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Wi{constructor(n,i){this.shortDelay=n,this.longDelay=i,on(i>n,"Short delay should be less than long delay!"),this.isMobile=H3()||$3()}get(){return jm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ac(r,n){on(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}/**
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
 */class f2{static initialize(n,i,o){this.fetchImpl=n,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fm=new Wi(3e4,6e4);function jn(r,n){return r.tenantId&&!n.tenantId?{...n,tenantId:r.tenantId}:n}async function Dn(r,n,i,o,l={}){return h2(r,l,async()=>{let u={},f={};o&&(n==="GET"?f=o:u={body:JSON.stringify(o)});const m=Bi({key:r.config.apiKey,...f}).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const y={method:n,headers:h,...u};return B3()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Po(r.emulatorConfig.host)&&(y.credentials="include"),f2.fetch()(await p2(r,r.config.apiHost,i,m),y)})}async function h2(r,n,i){r._canInitEmulator=!1;const o={...Um,...n};try{const l=new Hm(r),u=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw oo(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[h,y]=m.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(r,"credential-already-in-use",f);if(h==="EMAIL_EXISTS")throw oo(r,"email-already-in-use",f);if(h==="USER_DISABLED")throw oo(r,"user-disabled",f);const _=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Nc(r,_,y);St(r,_)}}catch(l){if(l instanceof Bt)throw l;St(r,"network-request-failed",{message:String(l)})}}async function qi(r,n,i,o,l={}){const u=await Dn(r,n,i,o,l);return"mfaPendingCredential"in u&&St(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function p2(r,n,i,o){const l=`${n}${i}?${o}`,u=r,f=u.config.emulator?Ac(r.config,l):`${r.config.apiScheme}://${l}`;return zm.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function Vm(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Lt(this.auth,"network-request-failed")),Fm.get())})}}function oo(r,n,i){const o={appName:r.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Lt(r,n,o);return l.customData._tokenResponse=i,l}function _0(r){return r!==void 0&&r.enterprise!==void 0}class Bm{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===n)return Vm(i.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $m(r,n){return Dn(r,"GET","/v2/recaptchaConfig",jn(r,n))}/**
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
 */async function Wm(r,n){return Dn(r,"POST","/v1/accounts:delete",n)}async function Co(r,n){return Dn(r,"POST","/v1/accounts:lookup",n)}/**
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
 */function Mi(r){if(r)try{const n=new Date(Number(r));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function qm(r,n=!1){const i=Ot(r),o=await i.getIdToken(n),l=Lc(o);ne(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u?.sign_in_provider;return{claims:l,token:o,authTime:Mi(Hl(l.auth_time)),issuedAtTime:Mi(Hl(l.iat)),expirationTime:Mi(Hl(l.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Hl(r){return Number(r)*1e3}function Lc(r){const[n,i,o]=r.split(".");if(n===void 0||i===void 0||o===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const l=Pf(i);return l?JSON.parse(l):(co("Failed to decode base64 JWT payload"),null)}catch(l){return co("Caught error parsing JWT payload as JSON",l?.toString()),null}}function S0(r){const n=Lc(r);return ne(n,"internal-error"),ne(typeof n.exp<"u","internal-error"),ne(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function zi(r,n,i=!1){if(i)return n;try{return await n}catch(o){throw o instanceof Bt&&Km(o)&&r.auth.currentUser===r&&await r.auth.signOut(),o}}function Km({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Gm{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(n=!1){if(!this.isRunning)return;const i=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){n?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uc{constructor(n,i){this.createdAt=n,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(r){const n=r.auth,i=await r.getIdToken(),o=await zi(r,Co(n,{idToken:i}));ne(o?.users.length,n,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const u=l.providerUserInfo?.length?m2(l.providerUserInfo):[],f=Qm(r.providerData,u),m=r.isAnonymous,h=!(r.email&&l.passwordHash)&&!f?.length,y=m?h:!1,_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new uc(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function Jm(r){const n=Ot(r);await ko(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function Qm(r,n){return[...r.filter(o=>!n.some(l=>l.providerId===o.providerId)),...n]}function m2(r){return r.map(({providerId:n,...i})=>({providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Ym(r,n){const i=await h2(r,{},async()=>{const o=Bi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await p2(r,l,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:m,body:o};return r.emulatorConfig&&Po(r.emulatorConfig.host)&&(h.credentials="include"),f2.fetch()(f,h)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Zm(r,n){return Dn(r,"POST","/v2/accounts:revokeToken",jn(r,n))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){ne(n.idToken,"internal-error"),ne(typeof n.idToken<"u","internal-error"),ne(typeof n.refreshToken<"u","internal-error");const i="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):S0(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,i)}updateFromIdToken(n){ne(n.length!==0,"internal-error");const i=S0(n);this.updateTokensAndExpiration(n,null,i)}async getToken(n,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,i){const{accessToken:o,refreshToken:l,expiresIn:u}=await Ym(n,i);this.updateTokensAndExpiration(o,l,Number(u))}updateTokensAndExpiration(n,i,o){this.refreshToken=i||null,this.accessToken=n||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(n,i){const{refreshToken:o,accessToken:l,expirationTime:u}=i,f=new jr;return o&&(ne(typeof o=="string","internal-error",{appName:n}),f.refreshToken=o),l&&(ne(typeof l=="string","internal-error",{appName:n}),f.accessToken=l),u&&(ne(typeof u=="number","internal-error",{appName:n}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function In(r,n){ne(typeof r=="string"||typeof r>"u","internal-error",{appName:n})}class At{constructor({uid:n,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new uc(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(n){const i=await zi(this,this.stsTokenManager.getToken(this.auth,n));return ne(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(n){return qm(this,n)}reload(){return Jm(this)}_assign(n){this!==n&&(ne(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(i=>({...i})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const i=new At({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(n){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,i=!1){let o=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),o=!0),i&&await ko(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(nn(this.auth));const n=await this.getIdToken();return await zi(this,Wm(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,i){const o=i.displayName??void 0,l=i.email??void 0,u=i.phoneNumber??void 0,f=i.photoURL??void 0,m=i.tenantId??void 0,h=i._redirectEventId??void 0,y=i.createdAt??void 0,_=i.lastLoginAt??void 0,{uid:C,emailVerified:x,isAnonymous:R,providerData:P,stsTokenManager:O}=i;ne(C&&O,n,"internal-error");const A=jr.fromJSON(this.name,O);ne(typeof C=="string",n,"internal-error"),In(o,n.name),In(l,n.name),ne(typeof x=="boolean",n,"internal-error"),ne(typeof R=="boolean",n,"internal-error"),In(u,n.name),In(f,n.name),In(m,n.name),In(h,n.name),In(y,n.name),In(_,n.name);const K=new At({uid:C,auth:n,email:l,emailVerified:x,displayName:o,isAnonymous:R,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:A,createdAt:y,lastLoginAt:_});return P&&Array.isArray(P)&&(K.providerData=P.map(W=>({...W}))),h&&(K._redirectEventId=h),K}static async _fromIdTokenResponse(n,i,o=!1){const l=new jr;l.updateFromServerResponse(i);const u=new At({uid:i.localId,auth:n,stsTokenManager:l,isAnonymous:o});return await ko(u),u}static async _fromGetAccountInfoResponse(n,i,o){const l=i.users[0];ne(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?m2(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!u?.length,m=new jr;m.updateFromIdToken(o);const h=new At({uid:l.localId,auth:n,stsTokenManager:m,isAnonymous:f}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new uc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(h,y),h}}/**
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
 */const E0=new Map;function tn(r){on(r instanceof Function,"Expected a class definition");let n=E0.get(r);return n?(on(n instanceof r,"Instance stored in cache mismatched with class"),n):(n=new r,E0.set(r,n),n)}/**
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
 */class g2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,i){this.storage[n]=i}async _get(n){const i=this.storage[n];return i===void 0?null:i}async _remove(n){delete this.storage[n]}_addListener(n,i){}_removeListener(n,i){}}g2.type="NONE";const I0=g2;/**
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
 */function uo(r,n,i){return`firebase:${r}:${n}:${i}`}class Dr{constructor(n,i,o){this.persistence=n,this.auth=i,this.userKey=o;const{config:l,name:u}=this.auth;this.fullUserKey=uo(this.userKey,l.apiKey,u),this.fullPersistenceKey=uo("persistence",l.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const i=await Co(this.auth,{idToken:n}).catch(()=>{});return i?At._fromGetAccountInfoResponse(this.auth,i,n):null}return At._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,i,o="authUser"){if(!i.length)return new Dr(tn(I0),n,o);const l=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=l[0]||tn(I0);const f=uo(o,n.config.apiKey,n.name);let m=null;for(const y of i)try{const _=await y._get(f);if(_){let C;if(typeof _=="string"){const x=await Co(n,{idToken:_}).catch(()=>{});if(!x)break;C=await At._fromGetAccountInfoResponse(n,x,_)}else C=At._fromJSON(n,_);y!==u&&(m=C),u=y;break}}catch{}const h=l.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!h.length?new Dr(u,n,o):(u=h[0],m&&await u._set(f,m.toJSON()),await Promise.all(i.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Dr(u,n,o))}}/**
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
 */function b0(r){const n=r.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(C2(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(y2(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(x2(n))return"Blackberry";if(_2(n))return"Webos";if(v2(n))return"Safari";if((n.includes("chrome/")||w2(n))&&!n.includes("edge/"))return"Chrome";if(k2(n))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=r.match(i);if(o?.length===2)return o[1]}return"Other"}function y2(r=Ze()){return/firefox\//i.test(r)}function v2(r=Ze()){const n=r.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function w2(r=Ze()){return/crios\//i.test(r)}function C2(r=Ze()){return/iemobile/i.test(r)}function k2(r=Ze()){return/android/i.test(r)}function x2(r=Ze()){return/blackberry/i.test(r)}function _2(r=Ze()){return/webos/i.test(r)}function Oc(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Xm(r=Ze()){return Oc(r)&&!!window.navigator?.standalone}function e8(){return W3()&&document.documentMode===10}function S2(r=Ze()){return Oc(r)||k2(r)||_2(r)||x2(r)||/windows phone/i.test(r)||C2(r)}/**
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
 */function E2(r,n=[]){let i;switch(r){case"Browser":i=b0(Ze());break;case"Worker":i=`${b0(Ze())}-${r}`;break;default:i=r}const o=n.length?n.join(","):"FirebaseCore-web";return`${i}/JsCore/${$i}/${o}`}/**
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
 */class t8{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,i){const o=u=>new Promise((f,m)=>{try{const h=n(u);f(h)}catch(h){m(h)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const i=[];try{for(const o of this.queue)await o(n),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function n8(r,n={}){return Dn(r,"GET","/v2/passwordPolicy",jn(r,n))}/**
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
 */const r8=6;class i8{constructor(n){const i=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??r8,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=n.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,i),this.validatePasswordCharacterOptions(n,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(n,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=n.length>=o),l&&(i.meetsMaxPasswordLength=n.length<=l)}validatePasswordCharacterOptions(n,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<n.length;l++)o=n.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(n,i,o,l,u){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=u))}}/**
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
 */class s8{constructor(n,i,o,l){this.app=n,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T0(this),this.idTokenSubscription=new T0(this),this.beforeStateQueue=new t8(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(n,i){return i&&(this._popupRedirectResolver=tn(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Dr.create(this,n),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const i=await Co(this,{idToken:n}),o=await At._fromGetAccountInfoResponse(this,i,n);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){if(xt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=o?._redirectEventId,m=await this.tryRedirectSignIn(n);(!u||u===f)&&m?.user&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(n){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(n){try{await ko(n)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=Dm()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(xt(this.app))return Promise.reject(nn(this));const i=n?Ot(n):null;return i&&ne(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(n,i=!1){if(!this._deleted)return n&&ne(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return xt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await n8(this),i=new i8(n);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new cr("auth","Firebase",n())}onAuthStateChanged(n,i,o){return this.registerStateListener(this.authStateSubscription,n,i,o)}beforeAuthStateChanged(n,i){return this.beforeStateQueue.pushCallback(n,i)}onIdTokenChanged(n,i,o){return this.registerStateListener(this.idTokenSubscription,n,i,o)}authStateReady(){return new Promise((n,i)=>{if(this.currentUser)n();else{const o=this.onAuthStateChanged(()=>{o(),n()},i)}})}async revokeAccessToken(n){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await Zm(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(n,i){const o=await this.getOrInitRedirectPersistenceManager(i);return n===null?o.removeCurrentUser():o.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const i=n&&tn(n)||this._popupRedirectResolver;ne(i,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[tn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===n?this._currentUser:this.redirectUser?._redirectEventId===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=this.currentUser?.uid??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,i,o,l){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof i=="function"){const h=n.addObserver(i,o,l);return()=>{f=!0,h()}}else{const h=n.addObserver(i);return()=>{f=!0,h()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=E2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return n?.error&&Lm(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Un(r){return Ot(r)}class T0{constructor(n){this.auth=n,this.observer=null,this.addObserver=Y3(i=>this.observer=i)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o8(r){Ao=r}function I2(r){return Ao.loadJS(r)}function a8(){return Ao.recaptchaEnterpriseScript}function l8(){return Ao.gapiScript}function c8(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class u8{constructor(){this.enterprise=new d8}ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}class d8{ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}const f8="recaptcha-enterprise",b2="NO_RECAPTCHA";class h8{constructor(n){this.type=f8,this.auth=Un(n)}async verify(n="verify",i=!1){async function o(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{$m(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new Bm(h);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(h=>{m(h)})})}function l(u,f,m){const h=window.grecaptcha;_0(h)?h.enterprise.ready(()=>{h.enterprise.execute(u,{action:n}).then(y=>{f(y)}).catch(()=>{f(b2)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u8().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{o(this.auth).then(m=>{if(!i&&_0(window.grecaptcha))l(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let h=a8();h.length!==0&&(h+=m),I2(h).then(()=>{l(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function P0(r,n,i,o=!1,l=!1){const u=new h8(r);let f;if(l)f=b2;else try{f=await u.verify(i)}catch{f=await u.verify(i,!0)}const m={...n};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const h=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const h=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return o?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function dc(r,n,i,o,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await P0(r,n,i,i==="getOobCode");return o(r,u)}else return o(r,n).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await P0(r,n,i,i==="getOobCode");return o(r,f)}else return Promise.reject(u)})}/**
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
 */function p8(r,n){const i=Vr(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),u=i.getOptions();if(rr(u,n??{}))return l;St(l,"already-initialized")}return i.initialize({options:n})}function m8(r,n){const i=n?.persistence||[],o=(Array.isArray(i)?i:[i]).map(tn);n?.errorMap&&r._updateErrorMap(n.errorMap),r._initializeWithPersistence(o,n?.popupRedirectResolver)}function g8(r,n,i){const o=Un(r);ne(/^https?:\/\//.test(n),o,"invalid-emulator-scheme");const l=!1,u=T2(n),{host:f,port:m}=y8(n),h=m===null?"":`:${m}`,y={url:`${u}//${f}${h}/`},_=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ne(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ne(rr(y,o.config.emulator)&&rr(_,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=y,o.emulatorConfig=_,o.settings.appVerificationDisabledForTesting=!0,Po(f)?(U3(`${u}//${f}${h}`),V3("Auth",!0)):v8()}function T2(r){const n=r.indexOf(":");return n<0?"":r.substr(0,n+1)}function y8(r){const n=T2(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(n.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const u=l[1];return{host:u,port:N0(o.substr(u.length+1))}}else{const[u,f]=o.split(":");return{host:u,port:N0(f)}}}function N0(r){if(!r)return null;const n=Number(r);return isNaN(n)?null:n}function v8(){function r(){const n=document.createElement("p"),i=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Mc{constructor(n,i){this.providerId=n,this.signInMethod=i}toJSON(){return en("not implemented")}_getIdTokenResponse(n){return en("not implemented")}_linkToIdToken(n,i){return en("not implemented")}_getReauthenticationResolver(n){return en("not implemented")}}async function w8(r,n){return Dn(r,"POST","/v1/accounts:signUp",n)}/**
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
 */async function C8(r,n){return qi(r,"POST","/v1/accounts:signInWithPassword",jn(r,n))}/**
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
 */async function k8(r,n){return qi(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,n))}async function x8(r,n){return qi(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,n))}/**
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
 */class Fi extends Mc{constructor(n,i,o,l=null){super("password",o),this._email=n,this._password=i,this._tenantId=l}static _fromEmailAndPassword(n,i){return new Fi(n,i,"password")}static _fromEmailAndCode(n,i,o=null){return new Fi(n,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(n,i,"signInWithPassword",C8);case"emailLink":return k8(n,{email:this._email,oobCode:this._password});default:St(n,"internal-error")}}async _linkToIdToken(n,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(n,o,"signUpPassword",w8);case"emailLink":return x8(n,{idToken:i,email:this._email,oobCode:this._password});default:St(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
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
 */async function Ur(r,n){return qi(r,"POST","/v1/accounts:signInWithIdp",jn(r,n))}/**
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
 */const _8="http://localhost";class or extends Mc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const i=new or(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(i.idToken=n.idToken),n.accessToken&&(i.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(i.nonce=n.nonce),n.pendingToken&&(i.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(i.accessToken=n.oauthToken,i.secret=n.oauthTokenSecret):St("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n,{providerId:o,signInMethod:l,...u}=i;if(!o||!l)return null;const f=new or(o,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(n){const i=this.buildRequest();return Ur(n,i)}_linkToIdToken(n,i){const o=this.buildRequest();return o.idToken=i,Ur(n,o)}_getReauthenticationResolver(n){const i=this.buildRequest();return i.autoCreate=!1,Ur(n,i)}buildRequest(){const n={requestUri:_8,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),n.postBody=Bi(i)}return n}}/**
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
 */function S8(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E8(r){const n=Ri(Ai(r)).link,i=n?Ri(Ai(n)).deep_link_id:null,o=Ri(Ai(r)).deep_link_id;return(o?Ri(Ai(o)).link:null)||o||i||n||r}class jc{constructor(n){const i=Ri(Ai(n)),o=i.apiKey??null,l=i.oobCode??null,u=S8(i.mode??null);ne(o&&l&&u,"argument-error"),this.apiKey=o,this.operation=u,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(n){const i=E8(n);try{return new jc(i)}catch{return null}}}/**
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
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(n,i){return Fi._fromEmailAndPassword(n,i)}static credentialWithLink(n,i){const o=jc.parseLink(i);return ne(o,"argument-error"),Fi._fromEmailAndCode(n,o.code,o.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dc{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Ki{constructor(){super("facebook.com")}static credential(n){return or._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return bn.credentialFromTaggedObject(n)}static credentialFromError(n){return bn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return bn.credential(n.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Xt extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(n,i){return or._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:i})}static credentialFromResult(n){return Xt.credentialFromTaggedObject(n)}static credentialFromError(n){return Xt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:i,oauthAccessToken:o}=n;if(!i&&!o)return null;try{return Xt.credential(i,o)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
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
 */class Tn extends Ki{constructor(){super("github.com")}static credential(n){return or._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Tn.credentialFromTaggedObject(n)}static credentialFromError(n){return Tn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Tn.credential(n.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class Pn extends Ki{constructor(){super("twitter.com")}static credential(n,i){return or._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:i})}static credentialFromResult(n){return Pn.credentialFromTaggedObject(n)}static credentialFromError(n){return Pn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=n;if(!i||!o)return null;try{return Pn.credential(i,o)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
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
 */async function I8(r,n){return qi(r,"POST","/v1/accounts:signUp",jn(r,n))}/**
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
 */class ar{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,i,o,l=!1){const u=await At._fromIdTokenResponse(n,o,l),f=R0(o);return new ar({user:u,providerId:f,_tokenResponse:o,operationType:i})}static async _forOperation(n,i,o){await n._updateTokensIfNecessary(o,!0);const l=R0(o);return new ar({user:n,providerId:l,_tokenResponse:o,operationType:i})}}function R0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class xo extends Bt{constructor(n,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(n,i,o,l){return new xo(n,i,o,l)}}function P2(r,n,i,o){return(n==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(r,u,n,o):u})}async function b8(r,n,i=!1){const o=await zi(r,n._linkToIdToken(r.auth,await r.getIdToken()),i);return ar._forOperation(r,"link",o)}/**
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
 */async function T8(r,n,i=!1){const{auth:o}=r;if(xt(o.app))return Promise.reject(nn(o));const l="reauthenticate";try{const u=await zi(r,P2(o,l,n,r),i);ne(u.idToken,o,"internal-error");const f=Lc(u.idToken);ne(f,o,"internal-error");const{sub:m}=f;return ne(r.uid===m,o,"user-mismatch"),ar._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&St(o,"user-mismatch"),u}}/**
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
 */async function N2(r,n,i=!1){if(xt(r.app))return Promise.reject(nn(r));const o="signIn",l=await P2(r,o,n),u=await ar._fromIdTokenResponse(r,o,l);return i||await r._updateCurrentUser(u.user),u}async function P8(r,n){return N2(Un(r),n)}/**
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
 */async function R2(r){const n=Un(r);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function N8(r,n,i){if(xt(r.app))return Promise.reject(nn(r));const o=Un(r),f=await dc(o,{returnSecureToken:!0,email:n,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",I8).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&R2(r),h}),m=await ar._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(m.user),m}function R8(r,n,i){return xt(r.app)?Promise.reject(nn(r)):P8(Ot(r),Hr.credential(n,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&R2(r),o})}function A8(r,n,i,o){return Ot(r).onIdTokenChanged(n,i,o)}function L8(r,n,i){return Ot(r).beforeAuthStateChanged(n,i)}function O8(r,n,i,o){return Ot(r).onAuthStateChanged(n,i,o)}function M8(r){return Ot(r).signOut()}const _o="__sak";/**
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
 */class A2{constructor(n,i){this.storageRetriever=n,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,i){return this.storage.setItem(n,JSON.stringify(i)),Promise.resolve()}_get(n){const i=this.storage.getItem(n);return Promise.resolve(i?JSON.parse(i):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const j8=1e3,D8=10;class L2 extends A2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,i)=>this.onStorageEvent(n,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S2(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&n(i,l,o)}}onStorageEvent(n,i=!1){if(!n.key){this.forAllChangedKeys((f,m,h)=>{this.notifyListeners(f,h)});return}const o=n.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},u=this.storage.getItem(o);e8()&&u!==n.newValue&&n.newValue!==n.oldValue?setTimeout(l,D8):l()}notifyListeners(n,i){this.localCache[n]=i;const o=this.listeners[n];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:i,newValue:o}),!0)})},j8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,i){await super._set(n,i),this.localCache[n]=JSON.stringify(i)}async _get(n){const i=await super._get(n);return this.localCache[n]=JSON.stringify(i),i}async _remove(n){await super._remove(n),delete this.localCache[n]}}L2.type="LOCAL";const U8=L2;/**
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
 */class O2 extends A2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,i){}_removeListener(n,i){}}O2.type="SESSION";const M2=O2;/**
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
 */function z8(r){return Promise.all(r.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Lo{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const i=this.receivers.find(l=>l.isListeningto(n));if(i)return i;const o=new Lo(n);return this.receivers.push(o),o}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const i=n,{eventId:o,eventType:l,data:u}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const m=Array.from(f).map(async y=>y(i.origin,u)),h=await z8(m);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:h})}_subscribe(n,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(i)}_unsubscribe(n,i){this.handlersMap[n]&&i&&this.handlersMap[n].delete(i),(!i||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
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
 */function Uc(r="",n=10){let i="";for(let o=0;o<n;o++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class F8{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((m,h)=>{const y=Uc("",20);l.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(C){const x=C;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(_),clearTimeout(u),h(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:n,eventId:y,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Vt(){return window}function V8(r){Vt().location.href=r}/**
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
 */function j2(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function H8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B8(){return navigator?.serviceWorker?.controller||null}function $8(){return j2()?self:null}/**
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
 */const D2="firebaseLocalStorageDb",W8=1,So="firebaseLocalStorage",U2="fbase_key";class Gi{constructor(n){this.request=n}toPromise(){return new Promise((n,i)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Oo(r,n){return r.transaction([So],n?"readwrite":"readonly").objectStore(So)}function q8(){const r=indexedDB.deleteDatabase(D2);return new Gi(r).toPromise()}function fc(){const r=indexedDB.open(D2,W8);return new Promise((n,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const o=r.result;try{o.createObjectStore(So,{keyPath:U2})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const o=r.result;o.objectStoreNames.contains(So)?n(o):(o.close(),await q8(),n(await fc()))})})}async function A0(r,n,i){const o=Oo(r,!0).put({[U2]:n,value:i});return new Gi(o).toPromise()}async function K8(r,n){const i=Oo(r,!1).get(n),o=await new Gi(i).toPromise();return o===void 0?null:o.value}function L0(r,n){const i=Oo(r,!0).delete(n);return new Gi(i).toPromise()}const G8=800,J8=3;class z2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(n){let i=0;for(;;)try{const o=await this._openDb();return await n(o)}catch(o){if(i++>J8)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance($8()),this.receiver._subscribe("keyChanged",async(n,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(n,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await H8(),!this.activeServiceWorker)return;this.sender=new F8(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&n[0]?.fulfilled&&n[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||B8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await fc();return await A0(n,_o,"1"),await L0(n,_o),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>A0(o,n,i)),this.localCache[n]=i,this.notifyServiceWorker(n)))}async _get(n){const i=await this._withRetries(o=>K8(o,n));return this.localCache[n]=i,i}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(i=>L0(i,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(l=>{const u=Oo(l,!1).getAll();return new Gi(u).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(n.length!==0)for(const{fbase_key:l,value:u}of n)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(n,i){this.localCache[n]=i;const o=this.listeners[n];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z2.type="LOCAL";const Q8=z2;new Wi(3e4,6e4);/**
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
 */function F2(r,n){return n?tn(n):(ne(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class zc extends Mc{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Ur(n,this._buildIdpRequest())}_linkToIdToken(n,i){return Ur(n,this._buildIdpRequest(i))}_getReauthenticationResolver(n){return Ur(n,this._buildIdpRequest())}_buildIdpRequest(n){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(i.idToken=n),i}}function Y8(r){return N2(r.auth,new zc(r),r.bypassAuthState)}function Z8(r){const{auth:n,user:i}=r;return ne(i,n,"internal-error"),T8(i,new zc(r),r.bypassAuthState)}async function X8(r){const{auth:n,user:i}=r;return ne(i,n,"internal-error"),b8(i,new zc(r),r.bypassAuthState)}/**
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
 */class V2{constructor(n,i,o,l,u=!1){this.auth=n,this.resolver=o,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(n,i)=>{this.pendingPromise={resolve:n,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(n){const{urlResponse:i,sessionId:o,postBody:l,tenantId:u,error:f,type:m}=n;if(f){this.reject(f);return}const h={auth:this.auth,requestUri:i,sessionId:o,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(h))}catch(y){this.reject(y)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return Y8;case"linkViaPopup":case"linkViaRedirect":return X8;case"reauthViaPopup":case"reauthViaRedirect":return Z8;default:St(this.auth,"internal-error")}}resolve(n){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eg=new Wi(2e3,1e4);async function tg(r,n,i){if(xt(r.app))return Promise.reject(Lt(r,"operation-not-supported-in-this-environment"));const o=Un(r);Om(r,n,Dc);const l=F2(o,i);return new nr(o,"signInViaPopup",n,l).executeNotNull()}class nr extends V2{constructor(n,i,o,l,u){super(n,i,l,u),this.provider=o,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return ne(n,this.auth,"internal-error"),n}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const n=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const n=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,eg.get())};n()}}nr.currentPopupAction=null;/**
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
 */const ng="pendingRedirect",fo=new Map;class rg extends V2{constructor(n,i,o=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let n=fo.get(this.auth._key());if(!n){try{const o=await ig(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(o)}catch(i){n=()=>Promise.reject(i)}fo.set(this.auth._key(),n)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const i=await this.auth._redirectUserForId(n.eventId);if(i)return this.user=i,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ig(r,n){const i=ag(n),o=og(r);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function sg(r,n){fo.set(r._key(),n)}function og(r){return tn(r._redirectPersistence)}function ag(r){return uo(ng,r.config.apiKey,r.name)}async function lg(r,n,i=!1){if(xt(r.app))return Promise.reject(nn(r));const o=Un(r),l=F2(o,n),f=await new rg(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,n)),f}/**
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
 */const cg=600*1e3;class ug{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(n,o)&&(i=!0,this.sendToConsumer(n,o),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!dg(n)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=n,i=!0)),i}sendToConsumer(n,i){if(n.error&&!H2(n)){const o=n.error.code?.split("auth/")[1]||"internal-error";i.onError(Lt(this.auth,o))}else i.onAuthEvent(n)}isEventForConsumer(n,i){const o=i.eventId===null||!!n.eventId&&n.eventId===i.eventId;return i.filter.includes(n.type)&&o}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=cg&&this.cachedEventUids.clear(),this.cachedEventUids.has(O0(n))}saveEventToCache(n){this.cachedEventUids.add(O0(n)),this.lastProcessedEventTime=Date.now()}}function O0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(n=>n).join("-")}function H2({type:r,error:n}){return r==="unknown"&&n?.code==="auth/no-auth-event"}function dg(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H2(r);default:return!1}}/**
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
 */async function fg(r,n={}){return Dn(r,"GET","/v1/projects",n)}/**
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
 */const hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pg=/^https?/;async function mg(r){if(r.config.emulator)return;const{authorizedDomains:n}=await fg(r);for(const i of n)try{if(gg(i))return}catch{}St(r,"unauthorized-domain")}function gg(r){const n=cc(),{protocol:i,hostname:o}=new URL(n);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&o===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===n.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!pg.test(i))return!1;if(hg.test(r))return o===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
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
 */const yg=new Wi(3e4,6e4);function M0(){const r=Vt().___jsl;if(r?.H){for(const n of Object.keys(r.H))if(r.H[n].r=r.H[n].r||[],r.H[n].L=r.H[n].L||[],r.H[n].r=[...r.H[n].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function vg(r){return new Promise((n,i)=>{function o(){M0(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{M0(),i(Lt(r,"network-request-failed"))},timeout:yg.get()})}if(Vt().gapi?.iframes?.Iframe)n(gapi.iframes.getContext());else if(Vt().gapi?.load)o();else{const l=c8("iframefcb");return Vt()[l]=()=>{gapi.load?o():i(Lt(r,"network-request-failed"))},I2(`${l8()}?onload=${l}`).catch(u=>i(u))}}).catch(n=>{throw ho=null,n})}let ho=null;function wg(r){return ho=ho||vg(r),ho}/**
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
 */const Cg=new Wi(5e3,15e3),kg="__/auth/iframe",xg="emulator/auth/iframe",_g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eg(r){const n=r.config;ne(n.authDomain,r,"auth-domain-config-required");const i=n.emulator?Ac(n,xg):`https://${r.config.authDomain}/${kg}`,o={apiKey:n.apiKey,appName:r.name,v:$i},l=Sg.get(r.config.apiHost);l&&(o.eid=l);const u=r._getFrameworks();return u.length&&(o.fw=u.join(",")),`${i}?${Bi(o).slice(1)}`}async function Ig(r){const n=await wg(r),i=Vt().gapi;return ne(i,r,"internal-error"),n.open({where:document.body,url:Eg(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_g,dontclear:!0},o=>new Promise(async(l,u)=>{await o.restyle({setHideOnLeave:!1});const f=Lt(r,"network-request-failed"),m=Vt().setTimeout(()=>{u(f)},Cg.get());function h(){Vt().clearTimeout(m),l(o)}o.ping(h).then(h,()=>{u(f)})}))}/**
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
 */const bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,Pg=600,Ng="_blank",Rg="http://localhost";class j0{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ag(r,n,i,o=Tg,l=Pg){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let m="";const h={...bg,width:o.toString(),height:l.toString(),top:u,left:f},y=Ze().toLowerCase();i&&(m=w2(y)?Ng:i),y2(y)&&(n=n||Rg,h.scrollbars="yes");const _=Object.entries(h).reduce((x,[R,P])=>`${x}${R}=${P},`,"");if(Xm(y)&&m!=="_self")return Lg(n||"",m),new j0(null);const C=window.open(n||"",m,_);ne(C,r,"popup-blocked");try{C.focus()}catch{}return new j0(C)}function Lg(r,n){const i=document.createElement("a");i.href=r,i.target=n;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const Og="__/auth/handler",Mg="emulator/auth/handler",jg=encodeURIComponent("fac");async function D0(r,n,i,o,l,u){ne(r.config.authDomain,r,"auth-domain-config-required"),ne(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:o,v:$i,eventId:l};if(n instanceof Dc){n.setDefaultLanguage(r.languageCode),f.providerId=n.providerId||"",Q3(n.getCustomParameters())||(f.customParameters=JSON.stringify(n.getCustomParameters()));for(const[_,C]of Object.entries({}))f[_]=C}if(n instanceof Ki){const _=n.getScopes().filter(C=>C!=="");_.length>0&&(f.scopes=_.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const _ of Object.keys(m))m[_]===void 0&&delete m[_];const h=await r._getAppCheckToken(),y=h?`#${jg}=${encodeURIComponent(h)}`:"";return`${Dg(r)}?${Bi(m).slice(1)}${y}`}function Dg({config:r}){return r.emulator?Ac(r,Mg):`https://${r.authDomain}/${Og}`}/**
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
 */const Bl="webStorageSupport";class Ug{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M2,this._completeRedirectFn=lg,this._overrideRedirectResult=sg}async _openPopup(n,i,o,l){on(this.eventManagers[n._key()]?.manager,"_initialize() not called before _openPopup()");const u=await D0(n,i,o,cc(),l);return Ag(n,u,Uc())}async _openRedirect(n,i,o,l){await this._originValidation(n);const u=await D0(n,i,o,cc(),l);return V8(u),new Promise(()=>{})}_initialize(n){const i=n._key();if(this.eventManagers[i]){const{manager:l,promise:u}=this.eventManagers[i];return l?Promise.resolve(l):(on(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(n);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(n){const i=await Ig(n),o=new ug(n);return i.register("authEvent",l=>(ne(l?.authEvent,n,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:o},this.iframes[n._key()]=i,o}_isIframeWebStorageSupported(n,i){this.iframes[n._key()].send(Bl,{type:Bl},l=>{const u=l?.[0]?.[Bl];u!==void 0&&i(!!u),St(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const i=n._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=mg(n)),this.originValidationPromises[i]}get _shouldInitProactively(){return S2()||v2()||Oc()}}const zg=Ug;var U0="@firebase/auth",z0="1.11.0";/**
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
 */class Fg{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const i=this.auth.onIdTokenChanged(o=>{n(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(n,i),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const i=this.internalListeners.get(n);i&&(this.internalListeners.delete(n),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vg(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hg(r){sn(new Ht("auth",(n,{options:i})=>{const o=n.getProvider("app").getImmediate(),l=n.getProvider("heartbeat"),u=n.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=o.options;ne(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const h={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E2(r)},y=new s8(o,l,u,h);return m8(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,i,o)=>{n.getProvider("auth-internal").initialize()})),sn(new Ht("auth-internal",n=>{const i=Un(n.getProvider("auth").getImmediate());return(o=>new Fg(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(U0,z0,Vg(r)),Ft(U0,z0,"esm2020")}/**
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
 */const Bg=300,$g=Rf("authIdTokenMaxAge")||Bg;let F0=null;const Wg=r=>async n=>{const i=n&&await n.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>$g)return;const l=i?.token;F0!==l&&(F0=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function qg(r=zf()){const n=Vr(r,"auth");if(n.isInitialized())return n.getImmediate();const i=p8(r,{popupRedirectResolver:zg,persistence:[Q8,U8,M2]}),o=Rf("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const f=Wg(u.toString());L8(i,f,()=>f(i.currentUser)),A8(i,m=>f(m))}}const l=j3("auth");return l&&g8(i,`http://${l}`),i}function Kg(){return document.getElementsByTagName("head")?.[0]??document}o8({loadJS(r){return new Promise((n,i)=>{const o=document.createElement("script");o.setAttribute("src",r),o.onload=n,o.onerror=l=>{const u=Lt("internal-error");u.customData=l,i(u)},o.type="text/javascript",o.charset="UTF-8",Kg().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hg("Browser");const Gg={apiKey:"AIzaSyAsIIq6VkxWGuTFt2QQKvT5fy0Iv5UoIvE",authDomain:"mrshrek-store.firebaseapp.com",projectId:"mrshrek-store",storageBucket:"mrshrek-store.firebasestorage.app",messagingSenderId:"1069635877069",appId:"1:1069635877069:web:d074de0f0030b6b58f1184",measurementId:"G-8XHMJ205S9"},B2=Uf(Gg);Tm(B2);const Ni=qg(B2),$2=N.createContext(),$l=r=>r.includes("email-already-in-use")?"Email already in use":r.includes("weak-password")?"Password should be at least 6 characters":r.includes("user-not-found")?"No account found with this email":r.includes("wrong-password")?"Incorrect password":r.includes("too-many-requests")?"Too many login attempts, try again later":r,Jg=({children:r})=>{const[n,i]=N.useState(null),[o,l]=N.useState(!1),[u,f]=N.useState(!0);N.useEffect(()=>{const C=O8(Ni,x=>{if(x){const R=x.email?.trim().toLowerCase(),P=R==="admin@shop.com";i({uid:x.uid,email:R}),l(P),localStorage.setItem("user",JSON.stringify({uid:x.uid,email:R})),localStorage.setItem("isAdmin",JSON.stringify(P))}else i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin");f(!1)});return()=>C()},[]);const m=async()=>{const C=new Xt;try{const R=(await tg(Ni,C)).user,P=R.email.trim().toLowerCase(),O=P==="admin@shop.com";return i({uid:R.uid,email:P}),l(O),localStorage.setItem("user",JSON.stringify({uid:R.uid,email:P})),localStorage.setItem("isAdmin",JSON.stringify(O)),{success:!0,user:{uid:R.uid,email:P}}}catch(x){return{success:!1,message:$l(x.message)}}},h=async(C,x)=>{try{const P=(await R8(Ni,C.trim(),x)).user,O=P.email.trim().toLowerCase(),A=O==="admin@shop.com";return i({uid:P.uid,email:O}),l(A),localStorage.setItem("user",JSON.stringify({uid:P.uid,email:O})),localStorage.setItem("isAdmin",JSON.stringify(A)),{success:!0,user:{uid:P.uid,email:O}}}catch(R){return{success:!1,message:$l(R.message)}}},y=async(C,x)=>{try{return await N8(Ni,C.trim(),x),{success:!0}}catch(R){return{success:!1,message:$l(R.message)}}},_=async()=>{try{await M8(Ni),i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin")}catch(C){console.error("Logout error:",C.message)}};return g.jsx($2.Provider,{value:{user:n,isAdmin:o,login:h,loginWithGoogle:m,logout:_,signup:y,loading:u},children:!u&&r})},zn=()=>N.useContext($2),W2=N.createContext();function Qg({children:r}){const[n,i]=N.useState(()=>{const h=localStorage.getItem("products");return h?JSON.parse(h):[]}),[o,l]=N.useState(()=>{const h=localStorage.getItem("hero");return h?JSON.parse(h):{title:"",subtitle:"",image:""}});N.useEffect(()=>{localStorage.setItem("products",JSON.stringify(n))},[n]),N.useEffect(()=>{localStorage.setItem("hero",JSON.stringify(o))},[o]);const u=h=>{i(y=>[...y,{...h,id:Date.now()}])},f=h=>{i(y=>y.filter(_=>_.id!==h))},m=(h,y)=>{i(_=>_.map(C=>C.id===h?{...C,...y}:C))};return g.jsx(W2.Provider,{value:{products:n,addProduct:u,deleteProduct:f,updateProduct:m,hero:o,setHero:l},children:r})}function Fc(){return N.useContext(W2)}const Yg=({children:r})=>{const{user:n,isAdmin:i,loading:o}=zn();return o?null:!n||!i?g.jsx(ec,{to:"/"}):r},q2=N.createContext();function Zg({children:r}){const[n,i]=N.useState(()=>{const f=localStorage.getItem("heroes");return f?JSON.parse(f):[]});N.useEffect(()=>{localStorage.setItem("heroes",JSON.stringify(n))},[n]);const o=f=>{const m={...f,id:Date.now()};i(h=>[...h,m])},l=(f,m)=>{i(h=>h.map(y=>y.id===f?{...y,...m}:y))},u=f=>{i(m=>m.filter(h=>h.id!==f))};return g.jsx(q2.Provider,{value:{heroes:n,addHero:o,updateHero:l,deleteHero:u},children:r})}const K2=()=>N.useContext(q2),G2=N.createContext();function Xg({children:r}){const[n,i]=N.useState(()=>{const l=localStorage.getItem("orders");return l?JSON.parse(l):[]});N.useEffect(()=>{localStorage.setItem("orders",JSON.stringify(n))},[n]);const o=l=>{i(u=>[...u,l])};return g.jsx(G2.Provider,{value:{orders:n,addOrder:o},children:r})}function J2(){return N.useContext(G2)}function Wl({children:r,adminOnly:n=!1}){const{user:i,loading:o}=zn();return o?g.jsx("div",{className:"flex justify-center items-center h-screen",children:g.jsx("p",{className:"text-gray-600",children:"Loading..."})}):i?n&&i.role!=="admin"?g.jsx(ec,{to:"/",replace:!0}):r:g.jsx(ec,{to:"/login",replace:!0})}const Q2=N.createContext(),e9=({children:r})=>{const[n,i]=N.useState([]),[o,l]=N.useState(""),[u,f]=N.useState(()=>JSON.parse(localStorage.getItem("wishlist"))||[]),[m,h]=N.useState(()=>JSON.parse(localStorage.getItem("recentlyViewed"))||[]);N.useEffect(()=>localStorage.setItem("wishlist",JSON.stringify(u)),[u]),N.useEffect(()=>localStorage.setItem("recentlyViewed",JSON.stringify(m)),[m]);const y=C=>{f(x=>x.includes(C)?x.filter(R=>R!==C):[...x,C])},_=C=>{h(x=>{const R=x.filter(P=>P.id!==C.id);return[C,...R].slice(0,10)})};return g.jsx(Q2.Provider,{value:{products:n,setProducts:i,searchTerm:o,setSearchTerm:l,wishlist:u,toggleWishlist:y,recentlyViewed:m,addRecentlyViewed:_},children:r})},Vc=()=>N.useContext(Q2);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n9=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,o)=>o?o.toUpperCase():i.toLowerCase()),V0=r=>{const n=n9(r);return n.charAt(0).toUpperCase()+n.slice(1)},Y2=(...r)=>r.filter((n,i,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===i).join(" ").trim(),r9=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=N.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:f,...m},h)=>N.createElement("svg",{ref:h,...i9,width:n,height:n,stroke:r,strokeWidth:o?Number(i)*24/Number(n):i,className:Y2("lucide",l),...!u&&!r9(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,_])=>N.createElement(y,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(r,n)=>{const i=N.forwardRef(({className:o,...l},u)=>N.createElement(s9,{ref:u,iconNode:n,className:Y2(`lucide-${t9(V0(r))}`,`lucide-${r}`,o),...l}));return i.displayName=V0(r),i};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],a9=$e("chevron-left",o9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],c9=$e("chevron-right",l9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],hc=$e("heart",u9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],H0=$e("history",d9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],B0=$e("log-in",f9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],$0=$e("log-out",h9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],m9=$e("menu",p9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M5 12h14",key:"1ays0h"}]],y9=$e("minus",g9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],w9=$e("plus",v9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],k9=$e("search",C9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],W0=$e("shield",x9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],q0=$e("shopping-cart",_9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],K0=$e("star",S9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],I9=$e("trash-2",E9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],G0=$e("user-plus",b9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],J0=$e("user",T9);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N9=$e("x",P9);function R9(){const{cart:r}=To(),{user:n,logout:i}=zn(),{searchTerm:o,setSearchTerm:l,wishlist:u}=Vc(),[f,m]=N.useState(!1),h=r.reduce((_,C)=>_+C.quantity,0),y=u.length;return g.jsxs("nav",{className:"bg-yellow-500 shadow-lg sticky top-0 z-50",children:[g.jsxs("div",{className:"container mx-auto flex items-center justify-between p-4 flex-wrap",children:[g.jsx(Ye,{to:"/",className:"text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition",children:"MrShrek"}),g.jsxs("div",{className:"flex-1 mx-6 relative min-w-[200px] hidden md:block",children:[g.jsx("input",{type:"text",value:o,onChange:_=>l(_.target.value),placeholder:"Search products...",className:"w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"}),g.jsx(k9,{className:"absolute right-3 top-2.5 text-gray-500 cursor-pointer",size:20})]}),g.jsx("div",{className:"md:hidden flex items-center",children:g.jsx("button",{onClick:()=>m(!f),children:f?g.jsx(N9,{size:28}):g.jsx(m9,{size:28})})}),g.jsxs("div",{className:"hidden md:flex items-center space-x-6 text-white font-medium",children:[n?g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md",children:[g.jsx(J0,{size:18})," ",n.email]}),g.jsxs(Ye,{to:"/orders",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(H0,{size:18})," Orders"]}),g.jsxs(Ye,{to:"/adminlogin",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(W0,{size:18})," Admin"]}),g.jsxs("button",{onClick:i,className:"flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition",children:[g.jsx($0,{size:16})," Logout"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs(Ye,{to:"/login",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(B0,{size:18})," Login"]}),g.jsxs(Ye,{to:"/signup",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(G0,{size:18})," Sign Up"]})]}),g.jsxs(Ye,{to:"/wishlist",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(hc,{size:22}),g.jsx("span",{children:"Wishlist"}),y>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:y})]}),g.jsxs(Ye,{to:"/cart",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(q0,{size:22}),g.jsx("span",{children:"Cart"}),h>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:h})]})]})]}),f&&g.jsx("div",{className:"md:hidden bg-yellow-500 px-4 pb-4",children:g.jsxs("div",{className:"flex flex-col space-y-2",children:[g.jsx("input",{type:"text",value:o,onChange:_=>l(_.target.value),placeholder:"Search products...",className:"px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"}),n?g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md",children:[g.jsx(J0,{size:18})," ",n.email]}),g.jsxs(Ye,{to:"/orders",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(H0,{size:18})," Orders"]}),g.jsxs(Ye,{to:"/adminlogin",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(W0,{size:18})," Admin"]}),g.jsxs("button",{onClick:i,className:"flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition",children:[g.jsx($0,{size:16})," Logout"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs(Ye,{to:"/login",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(B0,{size:18})," Login"]}),g.jsxs(Ye,{to:"/signup",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(G0,{size:18})," Sign Up"]})]}),g.jsxs(Ye,{to:"/wishlist",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(hc,{size:22}),g.jsx("span",{children:"Wishlist"}),y>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:y})]}),g.jsxs(Ye,{to:"/cart",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(q0,{size:22}),g.jsx("span",{children:"Cart"}),h>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:h})]})]})})]})}function A9(){const{heroes:r}=K2(),[n,i]=N.useState(0),[o,l]=N.useState(!1);return N.useEffect(()=>{if(r.length>1&&!o){const u=setInterval(()=>{i(f=>(f+1)%r.length)},3e3);return()=>clearInterval(u)}},[r,o]),r.length===0?g.jsx("div",{className:"relative bg-gray-200 h-64 md:h-[500px] flex items-center justify-center rounded-xl shadow-lg",children:g.jsx("h2",{className:"text-2xl font-bold text-gray-600",children:"No Hero Banner Added"})}):g.jsxs("div",{className:"relative w-full h-64 md:h-[500px] overflow-hidden rounded-xl shadow-2xl",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[r.map((u,f)=>g.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ease-in-out ${f===n?"opacity-100":"opacity-0"}`,children:[g.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-scale-down"}),g.jsxs("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center text-center px-6",children:[g.jsx("h2",{className:"text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn",children:u.title}),u.subtitle&&g.jsx("p",{className:"text-lg md:text-2xl text-gray-200 mt-3 max-w-2xl animate-fadeIn delay-200",children:u.subtitle}),u.ctaText&&g.jsx("a",{href:u.ctaLink||"#",className:"mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 animate-fadeIn delay-500",children:u.ctaText})]})]},u.id)),r.length>1&&g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>i(u=>(u-1+r.length)%r.length),className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:g.jsx(a9,{size:28})}),g.jsx("button",{onClick:()=>i(u=>(u+1)%r.length),className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:g.jsx(c9,{size:28})})]}),g.jsx("div",{className:"absolute bottom-4 w-full flex justify-center gap-2",children:r.map((u,f)=>g.jsx("button",{onClick:()=>i(f),className:`w-3 h-3 rounded-full transition ${n===f?"bg-yellow-500":"bg-white/60"}`},f))})]})}const L9=[{id:1,name:"iphones",image:"Iphones/iphone-13-pro.jpg"},{id:2,name:"iphones",image:"Iphones/iphone-13.jpg"}];function O9(){return g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-gray-100",children:L9.map(r=>g.jsxs("div",{className:"flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer",children:[g.jsx("img",{src:`/MrShrek-Store/${r.image}`,alt:r.name,className:"w-16 h-16 object-contain mb-2"}),g.jsx("span",{className:"font-medium",children:r.name})]},r.id))})}function M9({categories:r,onFilter:n}){const[i,o]=N.useState(5e5),[l,u]=N.useState(""),f=()=>{n({category:l,maxPrice:i})};return g.jsxs("aside",{className:"w-64 bg-white p-4 shadow rounded",children:[g.jsx("h3",{className:"font-bold mb-3",children:"Filters"}),g.jsxs("div",{className:"mb-4",children:[g.jsx("h4",{className:"font-semibold",children:"Category"}),g.jsxs("select",{value:l,onChange:m=>u(m.target.value),className:"w-full border px-2 py-1 rounded mt-2",children:[g.jsx("option",{value:"",children:"All"}),r.map((m,h)=>g.jsx("option",{value:m.name,children:m.name},h))]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"font-semibold",children:["Max Price: ₦",i.toLocaleString()]}),g.jsx("input",{type:"range",min:"40000",max:"5000000",step:"10000",value:i,onChange:m=>o(m.target.value),className:"w-full"})]}),g.jsx("button",{onClick:f,className:"mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 cursor-pointer",children:"Apply Filters"})]})}var Z2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Q0=_t.createContext&&_t.createContext(Z2),j9=["attr","size","title"];function D9(r,n){if(r==null)return{};var i=U9(r,n),o,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)o=u[l],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}function U9(r,n){if(r==null)return{};var i={};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){if(n.indexOf(o)>=0)continue;i[o]=r[o]}return i}function Eo(){return Eo=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Eo.apply(this,arguments)}function Y0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,o)}return i}function Io(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Y0(Object(i),!0).forEach(function(o){z9(r,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Y0(Object(i)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))})}return r}function z9(r,n,i){return n=F9(n),n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function F9(r){var n=V9(r,"string");return typeof n=="symbol"?n:n+""}function V9(r,n){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var o=i.call(r,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function X2(r){return r&&r.map((n,i)=>_t.createElement(n.tag,Io({key:i},n.attr),X2(n.child)))}function Br(r){return n=>_t.createElement(H9,Eo({attr:Io({},r.attr)},n),X2(r.child))}function H9(r){var n=i=>{var{attr:o,size:l,title:u}=r,f=D9(r,j9),m=l||i.size||"1em",h;return i.className&&(h=i.className),r.className&&(h=(h?h+" ":"")+r.className),_t.createElement("svg",Eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:h,style:Io(Io({color:r.color||i.color},i.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&_t.createElement("title",null,u),r.children)};return Q0!==void 0?_t.createElement(Q0.Consumer,null,i=>n(i)):n(Z2)}function B9(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(r)}function $9(r){return Br({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(r)}function W9(r){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(r)}function q9(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(r)}function K9(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function G9(r){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function J9(r){const[n,i]=N.useState({days:0,hours:0,minutes:0,seconds:0});return N.useEffect(()=>{const o=setInterval(()=>{const l=new Date,u=new Date(r)-l;if(u<=0){clearInterval(o),i({days:0,hours:0,minutes:0,seconds:0});return}i({days:Math.floor(u/864e5),hours:Math.floor(u/36e5%24),minutes:Math.floor(u/6e4%60),seconds:Math.floor(u/1e3%60)})},1e3);return()=>clearInterval(o)},[r]),n}const Q9=[{id:1,name:"Phones"},{id:2,name:"Electronics"},{id:3,name:"Fashion"},{id:4,name:"Groceries"}];function Y9(){const{products:r,updateProductRatings:n}=Fc(),{addToCart:i}=To(),{searchTerm:o,wishlist:l,toggleWishlist:u}=Vc(),[f,m]=N.useState([]),[h,y]=N.useState(""),[_,C]=N.useState(null),[x,R]=N.useState(8),[P,O]=N.useState("");N.useEffect(()=>{const L=JSON.parse(localStorage.getItem("productRatings"))||{},V=r.map(G=>({...G,ratings:L[G.id]||G.ratings||[]}));m(V)},[r]),N.useEffect(()=>{let L=[...r];if(o&&(L=L.filter(V=>V.name&&V.name.toLowerCase().includes(o.toLowerCase())||V.description&&V.description.toLowerCase().includes(o.toLowerCase())||V.category&&V.category.toLowerCase().includes(o.toLowerCase()))),h)switch(h){case"low-high":L.sort((V,G)=>V.price-G.price);break;case"high-low":L.sort((V,G)=>G.price-V.price);break;case"az":L.sort((V,G)=>(V.name||"").localeCompare(G.name||""));break;case"za":L.sort((V,G)=>(G.name||"").localeCompare(V.name||""));break}m(L),R(8)},[r,o,h]);const A=({category:L,maxPrice:V})=>{let G=r.filter(Y=>(!L||Y.category===L)&&(!V||Number(Y.price)<=V));if(o&&(G=G.filter(Y=>Y.name&&Y.name.toLowerCase().includes(o.toLowerCase())||Y.description&&Y.description.toLowerCase().includes(o.toLowerCase())||Y.category&&Y.category.toLowerCase().includes(o.toLowerCase()))),h)switch(h){case"low-high":G.sort((Y,ie)=>Y.price-ie.price);break;case"high-low":G.sort((Y,ie)=>ie.price-Y.price);break;case"az":G.sort((Y,ie)=>(Y.name||"").localeCompare(ie.name||""));break;case"za":G.sort((Y,ie)=>(ie.name||"").localeCompare(Y.name||""));break}m(G),R(8)},K=r.filter(L=>L.isFlashSale),W=r.slice(0,10);return g.jsxs("div",{className:'min-h-screen "bg-white text-gray-900"}',children:[g.jsx(A9,{}),g.jsx(O9,{}),g.jsxs("div",{className:"flex p-6 gap-6 flex-wrap",children:[g.jsx(M9,{categories:Q9,onFilter:A}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"flex justify-between items-center mb-4 gap-4 flex-wrap",children:g.jsxs("select",{value:h,onChange:L=>y(L.target.value),className:"border px-2 py-1 rounded",children:[g.jsx("option",{value:"",children:"Sort By"}),g.jsx("option",{value:"low-high",children:"Price: Low → High"}),g.jsx("option",{value:"high-low",children:"Price: High → Low"}),g.jsx("option",{value:"az",children:"Name: A → Z"}),g.jsx("option",{value:"za",children:"Name: Z → A"})]})}),r.length?f.length===0?g.jsx("p",{children:"No products found."}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:f.slice(0,x).map(L=>{const V=L.ratings?.length?L.ratings.reduce((G,Y)=>G+Y,0)/L.ratings.length:0;return g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg flex flex-col relative hover:scale-105 transition-transform",children:[L.isNew&&g.jsx("span",{className:"absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded",children:"New"}),L.isSale&&g.jsx("span",{className:"absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded",children:"Sale"}),g.jsx("div",{className:"absolute top-2 right-8 cursor-pointer",onClick:()=>u(L.id),children:g.jsx(hc,{className:`${l.includes(L.id)?"text-red-500 fill-red-500":"text-gray-400"}`})}),g.jsx("img",{src:L.image,alt:L.name,className:"w-full h-48 object-scale-down rounded mb-3 cursor-pointer",onClick:()=>C(L)}),g.jsx("h2",{className:"text-lg font-semibold line-clamp-1",children:L.name}),L.description&&g.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2",children:L.description}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold mb-2",children:["₦",Number(L.price).toLocaleString()]}),g.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[[...Array(5)].map((G,Y)=>g.jsx(K0,{size:16,className:Y<Math.round(V)?"text-yellow-500 fill-yellow-500":"text-gray-300 dark:text-gray-500"},Y)),g.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["(",L.ratings?.length||0," reviews)"]})]}),g.jsx("div",{className:"flex gap-1 mb-3",children:[1,2,3,4,5].map(G=>g.jsx(K0,{size:16,className:"cursor-pointer text-gray-300 hover:text-yellow-500",onClick:()=>{const Y=[...L.ratings||[],G],ie=f.map(Ve=>Ve.id===L.id?{...Ve,ratings:Y}:Ve);m(ie);const me=JSON.parse(localStorage.getItem("productRatings"))||{};me[L.id]=Y,localStorage.setItem("productRatings",JSON.stringify(me)),n(L.id,Y)}},G))}),g.jsx("button",{onClick:()=>i(L),className:"mt-auto bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]},L.id)})}),x<f.length&&g.jsx("div",{className:"flex justify-center mt-6",children:g.jsx("button",{onClick:()=>R(L=>L+8),className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-6 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Load More"})})]}):g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:[...Array(8)].map((L,V)=>g.jsx("div",{className:"bg-gray-200 h-64 rounded animate-pulse"},V))})]})]}),g.jsxs("div",{className:"mt-12",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Recommended for You"}),g.jsx("div",{className:"flex overflow-x-auto gap-4",children:W.map(L=>g.jsxs("div",{className:"min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 transition-transform",onClick:()=>C(L),children:[g.jsx("img",{src:L.image,alt:L.name,className:"w-full h-36 object-contain rounded mb-2"}),g.jsx("h3",{className:"text-sm font-semibold line-clamp-1",children:L.name}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold",children:["₦",Number(L.price).toLocaleString()]})]},L.id))})]}),K.length>0&&g.jsxs("div",{className:"mt-12 p-6 bg-yellow-50 dark:bg-yellow-800 rounded-lg",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4 text-red-600 dark:text-red-400",children:"🔥 Flash Sale"}),g.jsx("div",{className:"flex overflow-x-auto gap-4",children:K.map(L=>{const{days:V,hours:G,minutes:Y,seconds:ie}=J9(L.flashSaleEnd);return g.jsxs("div",{className:"min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col",children:[g.jsx("img",{src:L.image,alt:L.name,className:"w-full h-36 object-contain rounded mb-2"}),g.jsx("h3",{className:"text-sm font-semibold line-clamp-1",children:L.name}),g.jsxs("p",{className:"text-red-600 dark:text-red-400 font-bold mb-2",children:["₦",Number(L.price).toLocaleString()]}),g.jsxs("p",{className:"text-xs text-gray-700 dark:text-gray-300",children:["Ends in: ",V,"d ",G,"h ",Y,"m ",ie,"s"]}),g.jsx("button",{onClick:()=>i(L),className:"mt-2 bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]},L.id)})})]}),g.jsxs("div",{className:"mt-12 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center",children:[g.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Subscribe to our Newsletter"}),g.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Get updates on new products and flash sales."}),g.jsxs("div",{className:"flex justify-center gap-2 flex-wrap",children:[g.jsx("input",{type:"email",value:P,onChange:L=>O(L.target.value),placeholder:"Enter your email",className:"px-4 py-2 border rounded w-60"}),g.jsx("button",{onClick:()=>{P?(alert(`Subscribed ${P} to newsletter!`),O("")):alert("Please enter a valid email.")},className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Subscribe"})]})]}),g.jsxs("footer",{className:"mt-12 bg-gray-800 dark:bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-bold mb-2",children:"ShopEase"}),g.jsx("p",{className:"text-gray-400",children:"Your one-stop online store"})]}),g.jsxs("div",{className:"flex gap-4 mt-4 md:mt-0",children:[g.jsx("a",{href:"#",className:"hover:text-green-500",target:"_blank",children:g.jsx(B9,{size:20})}),g.jsx("a",{href:"#",className:"hover:text-green-500",target:"_blank",children:g.jsx(q9,{size:20})}),g.jsx("a",{href:"#",className:"hover:text-green-500",target:"_blank",children:g.jsx(W9,{size:20})})]})]}),_&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 md:w-2/3 relative",children:[g.jsx("button",{className:"absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl",onClick:()=>C(null),children:"×"}),g.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[g.jsx("img",{src:_.image,alt:_.name,className:"w-full md:w-1/2 h-64 object-contain rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.name}),g.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:_.description}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold mb-4",children:["₦",Number(_.price).toLocaleString()]}),g.jsx("button",{onClick:()=>{i(_),C(null)},className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]})]})]})})]})}var be=function(){return be=Object.assign||function(n){for(var i,o=1,l=arguments.length;o<l;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},be.apply(this,arguments)};function Hc(r,n){var i={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&n.indexOf(o)<0&&(i[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(r);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(r,o[l])&&(i[o[l]]=r[o[l]]);return i}function Z0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);n&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable}))),i.push.apply(i,o)}return i}function Ne(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Z0(Object(i),!0).forEach((function(o){nh(r,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Z0(Object(i)).forEach((function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))}))}return r}function lr(r){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lr(r)}function eh(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function X0(r,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function th(r,n,i){return n&&X0(r.prototype,n),i&&X0(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}function nh(r,n,i){return n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function pc(r,n){if(r==null)return{};var i,o,l=(function(f,m){if(f==null)return{};var h,y,_={},C=Object.keys(f);for(y=0;y<C.length;y++)h=C[y],m.indexOf(h)>=0||(_[h]=f[h]);return _})(r,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)i=u[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(r,i)&&(l[i]=r[i])}return l}function Z9(r,n){return(function(i){if(Array.isArray(i))return i})(r)||(function(i,o){var l=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var u,f,m=[],h=!0,y=!1;try{for(l=l.call(i);!(h=(u=l.next()).done)&&(m.push(u.value),!o||m.length!==o);h=!0);}catch(_){y=!0,f=_}finally{try{h||l.return==null||l.return()}finally{if(y)throw f}}return m}})(r,n)||rh(r,n)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function X9(r){return(function(n){if(Array.isArray(n))return mc(n)})(r)||(function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)})(r)||rh(r)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function rh(r,n){if(r){if(typeof r=="string")return mc(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?mc(r,n):void 0}}function mc(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,o=new Array(n);i<n;i++)o[i]=r[i];return o}var Bc={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"};Ne(Ne({},Bc),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"});var e7=Ne(Ne({},Bc),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),at={production:Ne(Ne({},Bc),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||e7;function ih(r,n){var i=[];return Object.keys(r).forEach((function(o){var l=n?"".concat(n,"[").concat(o,"]"):o,u=r[l];i.push(u!==null&&(typeof v>"u"?"undefined":lr(v))==="object"?ih(u,l):"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(u)))})),i.join("&")}function Mr(){return document.currentScript||(r=document.getElementsByTagName("script"))[r.length-1];var r}function ef(){var r=[],n=Mr();if(n){var i=Array.prototype.slice.call(n.attributes);r=Object.keys(i).filter((function(o){var l=i[o].nodeName;return l&&l.indexOf("data")>-1})).map((function(o){return i[o].nodeName}))}return r}var sh=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,t7=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,n7=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,r7=`
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
`,ql={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},tf=function(r){return r&&lr(r)==="object"?Object.keys(ql).reduce((function(n,i){return Ne(Ne({},n),{},nh({},i,r[i]||ql[i]))}),{}):ql},i7=`
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
`,nf=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(r/100).toFixed(2))},rf={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function sf(r){return Object.keys(r).reduce((function(n,i){var o=encodeURIComponent(i),l=encodeURIComponent(r[i]),u="".concat(o,"=").concat(l);return[].concat(X9(n),[u])}),[]).join("&")}var s7=function(r){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[r]||"".concat(r.toUpperCase()," PLAN")},oh=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(at.applePayVersion)}catch{return!1}},gc=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return oh()&&r.includes("apple_pay")};function o7(){var r=0;return Array.from(document.querySelectorAll("body *")).forEach((function(n){var i=window.getComputedStyle(n),o=parseFloat(i.zIndex);!Number.isNaN(o)&&o>r&&(r=o)})),r}function Kl(r){var n=document.createElement("iframe");return n.setAttribute("frameBorder","0"),n.setAttribute("allowtransparency","true"),n.id=r,n.style.display="none",n}function po(r){return r.querySelector("apple-pay-button")||r.querySelector("#apple-pay-button")}function ao(r){return document.querySelector("#".concat(r))}function of(r,n,i){var o=n.channels,l=o===void 0?[]:o,u=n.styles,f=u===void 0?{}:u,m={applePay:!1};return new Promise((function(h,y){if(r)if(gc(l)){if(po(r))return m.applePay=!0,void h(m);(function(_,C){return new Promise((function(x,R){var P=document.createElement("script");P.src=_,P.addEventListener("load",(function(){x(!0)})),P.addEventListener("error",(function(){P.remove(),R(!1)})),C?C.appendChild(P):document.head.appendChild(P)}))})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",r).then((function(){if(i&&i!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(lr(window.webpackJsonp),". Switching to fallback apple pay button"));(function(_,C){var x=C.styles,R=C.theme,P=document.createElement("style"),O=(function(K){var W=K.height,L=K.width,V=K.borderRadius,G=K.padding;return`
  apple-pay-button {
    --apple-pay-button-width: `.concat(L,`;
    --apple-pay-button-height: `).concat(W,`;
    --apple-pay-button-border-radius: `).concat(V,`;
    --apple-pay-button-padding: `).concat(G,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(L,`;
  }
`)})(x);P.type="text/css",P.styleSheet?P.styleSheet.cssText=O:P.appendChild(document.createTextNode(O)),_.appendChild(P);var A=document.createElement("apple-pay-button");A.setAttribute("buttonstyle",R==="light"?"white":"black"),A.setAttribute("type",x.type),A.setAttribute("locale",x.locale),_.appendChild(A)})(r,{styles:tf(f.applePay),theme:f.theme}),m.applePay=!0,h(m)})).catch((function(){(function(_,C){var x=C.styles,R=C.theme,P=document.createElement("style"),O=(function(W){var L=W.height,V=W.width,G=W.borderRadius,Y=W.padding,ie=W.type,me=W.locale;return`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(V,`;
        height: `).concat(L,`;
        border-radius: `).concat(G,`;
        padding: `).concat(Y,`;
        -apple-pay-button-type: `).concat(ie,`;
        -webkit-locale: `).concat(me,`;
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
`)})(x);P.type="text/css",P.styleSheet?P.styleSheet.cssText=O:P.appendChild(document.createTextNode(O)),_.appendChild(P);var A=document.createElement("button");A.classList.add("apple-pay-button",R==="light"?"apple-pay-button-white":"apple-pay-button-black"),A.id="apple-pay-button";var K=document.createElement("span");K.classList.add("logo"),A.appendChild(K),_.appendChild(A)})(r,{styles:tf(f.applePay),theme:f.theme}),m.applePay=!0,h(m)}))}else y("No wallet payment method is available on this device");else y("Container to mount elements was not provided")}))}function a7(r){for(;r.firstChild;)r.removeChild(r.firstChild)}var ah="payment-request-button",lh="paystackpop-button",ch="pay-with-vault-button";function uh(r){var n=document.createElement("button");return n.id=lh,n.className="open-paystack-pop-button",n.innerText=r,n}function af(r){return r.querySelector("#".concat(lh))}function dh(){var r=document.createElement("div");return r.id=ah,r}function Gl(r){return r.querySelector("#".concat(ah))}function l7(){var r=document.createElement("button");return r.className="pay-with-vault-button",r.id=ch,r.innerText="Pay with Vault",r}function c7(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=document.createElement("div");i.className="vault-logo-container",i.innerHTML=r7,r.appendChild(i);var o=document.createElement("p");o.id="instruction",o.className="vault-instruction",o.innerHTML="Access your saved cards and bank details for faster, more secure payments",r.appendChild(o);var l=l7();r.appendChild(l);var u=document.createElement("div");if(u.className="vault-divider",u.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',r.appendChild(u),n.canPayWithApplePay){var f=dh();r.appendChild(f)}var m=uh("Use other payment methods");r.appendChild(m)}function u7(r){var n=document.createElement("div");n.innerHTML=`
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
`,r.appendChild(n);var i=document.createElement("p");i.id="apple-pay-description",i.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",r.appendChild(i);var o=dh();r.appendChild(o);var l=uh("More payment options");r.appendChild(l)}var lo=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function d7(r){var n,i=Ne({},r);return i.metadata=r.metadata||{},i.metadata.referrer=(n=window.location.href)&&n.length>500?n.split("?")[0]:n,i.metadata=JSON.stringify(i.metadata),i.mode="popup",r.split&&typeof r.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach((function(o){i[o.from]&&(i[o.to]=i[o.from],delete i[o.from])})),Object.values(r).forEach((function(o,l){if(typeof o=="function"){var u=Object.keys(r)[l];delete i[u]}})),i}var f7=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],fh=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),hh=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.platform,i=r.userAgent,o=i===void 0?window&&window.navigator&&window.navigator.userAgent:i,l=n||fh;return f7.includes(l)||o.includes("Mac")&&"ontouchend"in document},h7=function(r,n,i){var o="".concat(at.paystackApiUrl,"transaction/update_log/").concat(r),l={Authorization:"Bearer ".concat(n)};return fetch(o,{method:"POST",body:JSON.stringify({payload:JSON.stringify(i)}),headers:l})},p7=function(r,n){var i="".concat(at.paystackApiUrl,"transaction/set_ip/").concat(r),o={Authorization:"Bearer ".concat(n)};return fetch(i,{method:"POST",headers:o})},m7={initializeLog:function(r){var n=r||{},i=n.attempts,o=n.authentication,l=n.errors,u=n.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:i||0,authentication:o,errors:l||0,success:!1,mobile:hh(),input:[],history:u||[]}},getTimeSpent:function(){var r=Math.round(Date.now()/1e3);return this.log.time_spent=r-this.log.start_time,this.log.time_spent},logAPIResponse:function(r,n){switch(r.status){case"success":return this.logApiSuccess(n);case"failed":return this.logApiError(r.message);default:return!1}},logValidationResponse:function(r){return this.log.history.push({type:"action",message:r,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(r){var n="Attempted to pay";return r&&(n+=" with ".concat(r)),this.log.attempts+=1,this.log.history.push({type:"action",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(r){var n="Error";return r&&(n+=": ".concat(r)),this.log.errors+=1,this.log.history.push({type:"error",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(r){var n="Successfully paid";return r&&(n+=" with ".concat(r)),this.log.success=!0,this.log.history.push({type:"success",message:n,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return h7(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return p7(this.id,this.response.merchant_key)}catch{}}},g7=["language","connect_account"],y7={requestInline:function(){var r=this,n=this.urlParameters,i=n.language,o=n.connect_account,l=pc(n,g7),u=Ne({"Content-Type":"application/json"},i&&{"Accept-Language":i});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),at.paystackApiUrl).toString(),{headers:u}):fetch(new URL("/checkout/request_inline",at.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(l),headers:Ne(Ne({},u),o&&{"x-connect-account":o})})).then((function(f){return f.json()})).then((function(f){if(f.status===!1)throw new Error(f.message);return r.response=f.data,r.id=f.data.id,r.status=f.data.transaction_status,r.accessCode=f.data.access_code,r.log=null,Object.assign(r,m7),r.initializeLog(f.data.log),r.saveIpAddress(),f.data}))}},Jl=(function(){function r(n){eh(this,r),(function(y){function _(P,O){this.message=P,this.issues=O||[]}if(!y||lr(y)!=="object")throw new _("Transaction parameters should be a non-empty object");var C=y;if("accessCode"in C)return{accessCode:C.accessCode};Object.keys(C).forEach((function(P){lo.find((function(O){return O.value===P}))!==void 0||delete C[P]}));var x=Object.keys(C),R=[];if(lo.filter((function(P){return P.required})).forEach((function(P){var O=!C[P.value],A=P.or?P.or.some((function(K){return C[K]})):null;O&&!A&&R.push({message:"Required parameter missing: ".concat(P.value)})})),x.forEach((function(P){var O=C[P],A=lo.find((function(W){return W.value===P})),K=lr(O);K==="object"&&Array.isArray(O)&&(K="array"),A.types.indexOf(K)<=-1&&R.push({message:"Invalid parameter type: ".concat(P),validTypes:A.types})})),x.forEach((function(P){var O=lo.find((function(A){return A.value===P}));O.override&&delete C[O.override]})),R.length)throw new _("Invalid transaction parameters",R)})(n),this.parameters=n,this.urlParameters=d7(n),this.id=null,this.status=null,this.accessCode=n.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var i=n.onError,o=n.onLoad,l=n.onSuccess,u=n.onCancel,f=n.callback,m=n.onClose,h=n.onBankTransferConfirmationPending;this.callbacks={onError:i,onLoad:o,onSuccess:l,onCancel:u,onBankTransferConfirmationPending:h},this.deprecatedCallbacks={callback:f,onClose:m},Object.assign(this,y7)}return th(r,[{key:"onSetupError",value:function(n){this.logError(n),this.callbacks.onError&&this.callbacks.onError(n)}},{key:"onLoad",value:function(n){var i=n.id,o=n.customer,l=n.accessCode;Object.assign(this,{id:i,customer:o,accessCode:l}),this.authorizationUrl="".concat(at.checkoutUrl).concat(l),this.callbacks.onLoad&&this.callbacks.onLoad({id:i,customer:o,accessCode:l})}},{key:"onSuccess",value:function(n){this.isActive=!1,this.response=n,this.status=n.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(n),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(n)}},{key:"setStatus",value:function(n){this.status=n}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(n){this.errors.push(n)}}]),r})(),$c=console?console.warn||console.log:function(){};function lf(r,n,i){$c('"'.concat(r,'" has been deprecated, please use "').concat(n,'". ').concat(i))}var se,v7=["preload","inlineTransaction"],w7=["container","styles","onElementsMount"];function Ql(r,n){if(!r.length)return null;var i=r.filter((function(o){var l,u,f,m,h=!o.status||o.status==="abandoned",y=(l=o.parameters,u=n,f=Object.keys(l).sort().join("")===Object.keys(u).sort().join(""),m=Object.values(l).sort().join("")===Object.values(u).sort().join(""),f&&m);return h&&y}));return i.length?i[i.length-1]:null}function cf(r){var n=r.checkoutIframe,i=r.urlParameters;n&&i&&n.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:i},"*")}var C7="trackCheckoutClosed",uf="trackPaymentError",k7="trackPaymentAttempt",x7="trackPaymentCompletion";function Yl(r){throw $c(r),new Error(r)}var df,ff,ph=(function(){function r(n){var i,o;eh(this,r),this.id=(function(){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=0;f<5;f+=1)l+=u.charAt(Math.floor(Math.random()*u.length));return l})(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=n&&n.isDeprecatedApi,n&&n.isEmbed?this.isEmbed=!0:n&&n.isPaymentRequest&&(n.container&&ao(n.container)||Yl("A container is required to mount the payment request button"),this.paymentRequestContainer=ao(n.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=(function(l){var u=Kl("inline-background-".concat(l));u.style.cssText=`
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
`),f.close(),u})(this.id),this.checkoutIframe=(i=this.id,(o=Kl("inline-checkout-".concat(i))).src="".concat(at.checkoutUrl,"popup"),o.style.cssText=`
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
`,o.setAttribute("allowpaymentrequest","true"),o.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(o),o),this.registerListeners()}return th(r,[{key:"registerListeners",value:function(){var n=this;window.addEventListener("message",(function(i){var o="".concat(i.origin,"/")===at.checkoutUrl,l=n.checkoutIframe&&n.checkoutIframe.contentWindow===i.source,u=n.isEmbed;o||l?n.respondToEvent(i):u&&n.respondToEmbedEvents(i)}))}},{key:"sendAnalyticsEventToCheckout",value:function(n,i){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:n,params:i},"*")}},{key:"checkout",value:function(n){this.activeTransaction()&&this.activeTransaction().cancel(),se=this;var i=Ql(this.transactions,n)||new Jl(n);return new Promise((function(o,l){i.requestInline().then((function(u){var f=(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=h.platform,_=h.userAgent,C=_===void 0?window&&window.navigator&&window.navigator.userAgent:_,x=y||fh,R=C&&!!C.match(/Version\/[\d.]+.*Safari/),P=x&&/(Mac)/i.test(x);return hh()||P&&R})()&&gc(u.channels),m=(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=!!h.custom_filters&&h.custom_filters.recurring,_=h.plan_details,C=y||_,x=!!h.link_config&&h.link_config.enabled&&h.link_config.has_payment_instruments;return!C&&x})(u);m||f?(se.preloadTransaction({inlineTransaction:i}),se.preCheckoutModal=(function(h,y){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=document.querySelector("#pre-checkout-modal-".concat(h));if(C){if(af(C)&&Gl(C))return C;C.remove()}var x=document.createElement("div");x.classList.add("pre-checkout-modal"),x.id="pre-checkout-modal-".concat(h),x.style.zIndex=o7()+1;var R=document.createElement("div");R.classList.add("pre-checkout-modal__content"),x.appendChild(R);var P=y||{},O=P.merchant_logo,A=P.merchant_name,K=P.email,W=P.amount,L=P.currency,V=P.label,G=new Intl.NumberFormat("en",{style:"currency",currency:L,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format(W/100),Y=document.createElement("div");Y.classList.add("payment-info"),Y.innerHTML='<img class="merchant-logo" src="'.concat(O,'" alt="').concat(A,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(V||K,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(G,`</span></div>
    </div>`),R.appendChild(Y),R.innerHTML+=n7;var ie=document.createElement("div");ie.classList.add("modal-wrapper"),_.canPayWithVault?c7(ie,{canPayWithApplePay:_.canPayWithApplePay}):u7(ie),ie.innerHTML=ie.innerHTML+sh+t7,R.appendChild(ie);var me=document.createElement("style");return me.textContent=i7,document.body.appendChild(me),document.body.appendChild(x),x})(se.id,u,{canPayWithVault:m,canPayWithApplePay:f}),f?(se.paymentRequestContainer=Gl(se.preCheckoutModal),of(se.paymentRequestContainer,{channels:u.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},u.merchant_id).then((function(){se.registerPaymentRequestEventListeners(),se.openPreCheckoutModal()})).catch((function(){m?(Gl(se.preCheckoutModal).remove(),se.openPreCheckoutModal()):(se.closePreCheckoutModal(),se.animateCheckoutIn())})).finally((function(){o(i)}))):(se.openPreCheckoutModal(),o(i))):(se.newTransaction({inlineTransaction:i}),o(i))})).catch((function(u){i.onSetupError({status:!1,message:u.message}),l(u)}))}))}},{key:"openPreCheckoutModal",value:function(){var n;this.registerPreCheckoutModalEventListeners(),n=this.preCheckoutModal,new Promise((function(i,o){try{var l=n.querySelector(".pre-checkout-modal__content");n.classList.add("show"),setTimeout((function(){l.classList.add("show"),i(!0)}),50)}catch(u){o(u)}}))}},{key:"registerPreCheckoutModalEventListeners",value:function(){var n,i=this,o=!1,l=this.activeTransaction();document.addEventListener("touchstart",(function(h){h.preventDefault(),o||(o=!0,n=setTimeout((function(){o=!1}),125))}),!0),document.addEventListener("touchend",(function(h){h.target&&h.target.isSameNode(se.preCheckoutModal)&&o&&(clearTimeout(n),se.closePreCheckoutModal(),l&&l.cancel()),o=!1}),!0);var u=af(this.preCheckoutModal),f=this.preCheckoutModal.querySelector("#".concat(ch));u.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn()},f&&(f.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn(),i.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var m=(function(h){return h.querySelector("#apple-pay-close-button")})(this.preCheckoutModal);m.onclick=function(){i.sendAnalyticsEventToCheckout(C7),i.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(n){var i;this.preCheckoutModal&&(n==="failed"?(i=this.preCheckoutModal)&&(i.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,i.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):((function(o){o&&(o.querySelector(".pre-checkout-modal__content").classList.remove("show"),o.classList.remove("show"))})(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(n){var i,o=n.preload,l=n.inlineTransaction,u=pc(n,v7),f=this.paymentRequestContainer&&po(this.paymentRequestContainer);this.activeTransaction()&&!f&&this.activeTransaction().cancel();var m=Ql(this.transactions,l?l.parameters:u),h=m||l||new Jl(u);return m?(h.isActive=!0,i={accessCode:h.accessCode}):(i=h.accessCode?{accessCode:h.accessCode}:h.urlParameters,this.transactions.push(h)),this.isDeprecatedApi||this.open(i,o),h}},{key:"preloadTransaction",value:function(n){var i=this;return this.newTransaction(Ne(Ne({},n),{},{preload:!0})),function(){return i.animateCheckoutIn()}}},{key:"paymentRequest",value:function(n){var i=n.container,o=n.styles,l=n.onElementsMount,u=pc(n,w7);return se=this,new Promise((function(f,m){var h=document.querySelector("#".concat(n.loadPaystackCheckoutButton));if(oh()){se.activeTransaction()&&se.activeTransaction().cancel(),i&&ao(i)||Yl("A container is required to mount the payment request button"),se.paymentRequestContainer=ao(i);var y=Ql(se.transactions,u),_=y||new Jl(u);_.requestInline().then((function(R){of(se.paymentRequestContainer,{channels:R.channels,styles:o},R.merchant_id).then((function(P){l&&l(P)})).catch((function(){l&&l(null)})).finally((function(){if(y?_.isActive=!0:se.transactions.push(_),se.registerPaymentRequestEventListeners(),h){var P=se.preloadTransaction({inlineTransaction:_});h.onclick=P}f(_)}))})).catch((function(R){_.onSetupError({status:!1,message:R.message}),m(R)}))}else{if(n&&n.loadPaystackCheckoutButton)if(h){var C=se.preloadTransaction(u);h.onclick=C}else $c("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");l&&l(null);var x=se.activeTransaction();f(x)}}))}},{key:"registerApplePayEventListener",value:function(){var n=this;po(this.paymentRequestContainer).onclick=function(){return n.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var n=this.activeTransaction();n&&gc(n.response.channels)?this.registerApplePayEventListener():a7(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var n,i,o,l,u,f=this,m="apple pay",h=this.activeTransaction();if(h){var y={channel:"apple_pay",paymentMethod:m,currency:h.currency,amount:h.amount},_={channel:"apple_pay",currency:h.currency,amount:h.amount,timeSpent:h.getTimeSpent()};try{h.logAttempt(m),this.sendAnalyticsEventToCheckout(k7,y);var C=(n={currency:h.response.currency,amount:h.response.amount,merchantName:h.response.merchant_name,interval:h.response.plan_details&&h.response.plan_details.interval},i=n.currency,o=n.amount,l=n.merchantName,u=n.interval,Ne({countryCode:"NG",currencyCode:i,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(l," - Paystack"),type:"final",amount:String(nf(o))}},typeof u=="string"&&u.trim()!==""&&{lineItems:[{label:s7(u),amount:String(nf(o))}]})),x=new window.ApplePaySession(at.applePayVersion,C);x.onvalidatemerchant=function(R){var P=(function(O){var A=O.transactionId,K=O.validationURL,W=O.merchantName,L=O.domainName,V=L===void 0?window&&window.location&&window.location.hostname:L,G="".concat(at.paymentBaseUrl).concat(at.applePayValidateSessionPath),Y=sf({transaction:A,sessionUrl:K,displayName:W,domainName:V});return fetch(G,Ne(Ne({},rf),{},{body:Y})).then((function(ie){return ie.json()}))})({validationURL:R.validationURL,transactionId:h.id,merchantName:h.response.merchant_name});P.then((function(O){O.status!=="success"?h.onSetupError(O):x.completeMerchantValidation(O.data),h.logValidationResponse(O.message)})).catch((function(O){h.onSetupError(O)}))},x.oncancel=function(){se.preCheckoutModal||h.onCancel()},x.onpaymentauthorized=function(R){var P=R.payment,O=(function(A){var K=A.transactionId,W=A.payment,L="".concat(at.paymentBaseUrl).concat(at.applePayChargePath),V=sf({transaction:K,paymentObject:JSON.stringify(W)});return fetch(L,Ne(Ne({},rf),{},{body:V})).then((function(G){return G.json()}))})({transactionId:h.id,payment:P});O.then((function(A){h.logAPIResponse(A,m),A.status==="success"?(x.completePayment(x.STATUS_SUCCESS),h.onSuccess(A),f.sendAnalyticsEventToCheckout(x7,_)):(x.completePayment(x.STATUS_FAILURE),h.onSetupError(A),f.sendAnalyticsEventToCheckout(uf,{channel:"apple_pay",message:A&&A.message||"Transaction attempt failed"})),se.closePreCheckoutModal(A.status)})).catch((function(A){x.completePayment(x.STATUS_FAILURE),h.onSetupError(A),f.sendAnalyticsEventToCheckout(uf,{channel:"apple_pay",message:A&&A.message||"Error occurred"}),se.closePreCheckoutModal("failed")}))},x.begin()}catch(R){h.onSetupError(R)}}else Yl("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(n){return this.newTransaction({accessCode:n})}},{key:"activeTransaction",value:function(){var n=this.transactions.filter((function(o){return o.isActive})),i=n.length?n[n.length-1]:null;return i}},{key:"cancelTransaction",value:function(n){var i=this.transactions.find((function(o){return o.id===n}))||this.activeTransaction();i&&(i.cancel(),this.close())}},{key:"respondToEvent",value:function(n){if(n){var i,o,l=this.activeTransaction();try{var u=n.data||n.message,f=u.event,m=u.data;if(f)switch(f){case"loaded:checkout":this.isLoaded=!0,l&&cf({checkoutIframe:this.checkoutIframe,urlParameters:l.urlParameters});break;case"loaded:transaction":i=this.backgroundIframe,(o=i.contentWindow.document)&&(o.getElementById("app-loader").style.display="none"),l.onLoad(m);break;case"error":m.type==="setup"?l.onSetupError(m):l.logError(m);break;case"cancel":case"close":this.close();var h=m&&m.status;h&&l.setStatus(h),!(this.paymentRequestContainer&&po(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(l.isActive=!1),l.onCancel();break;case"transfer:pending":this.close();var y=m&&m.status;y&&l.setStatus(y),l.onBankTransferConfirmationPending();break;case"success":this.close(),l.onSuccess(m)}}catch{}}}},{key:"respondToEmbedEvents",value:function(n){var i,o,l=this.activeTransaction(),u=n.data||n.message;if(u&&(typeof u=="string"||u instanceof String)){var f={action:o=(i=u)&&typeof i=="string"?i.split(" ")[0]:null,data:o?i.split(" ").slice(2).join(" "):null};f&&f.action==="PaystackClose"&&f.data&&l.onSuccess(u),f.action==="PaystackTLSClose"&&l.cancel()}}},{key:"animateCheckoutIn",value:function(){var n,i=this;if(!this.isOpen){var o=this.checkoutIframe,l=this.backgroundIframe;(n={checkoutIframe:o,backgroundIframe:l},new Promise((function(u,f){n||f("No dom element provided");var m=n.checkoutIframe,h=n.backgroundIframe;m&&h||f("No dom element provided"),m.style.display="",m.style.visibility="visible",h.style.display="",h.style.visibility="visible",u()}))).then((function(){i.checkoutIframe.contentWindow.postMessage("render","*")})),this.isOpen=!0}}},{key:"open",value:function(n,i){n&&(cf({checkoutIframe:this.checkoutIframe,urlParameters:n}),i||this.animateCheckoutIn())}},{key:"close",value:function(){var n=this;if(this.isOpen){var i,o=this.checkoutIframe,l=this.backgroundIframe;(i={checkoutIframe:o,backgroundIframe:l},new Promise((function(u,f){i||f("No dom element provided");var m=i.checkoutIframe,h=i.backgroundIframe;m&&h||f("No dom element provided"),h.style.opacity=0,m.style.display="none",m.style.visibility="hidden",setTimeout((function(){h.style.display="none",h.style.visibility="hidden",h.style.opacity=1,u()}),300)}))).then((function(){n.checkoutIframe.contentWindow.postMessage("close","*")})),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(n){var i=n&&n.container;se||(se=new r({isDeprecatedApi:!0,isEmbed:i})),lf("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var o=se.newTransaction(n,"deprecated"),l=o.urlParameters;if(i){var u="".concat(at.siteUrl,"/assets/payment/production/inline.html?").concat(ih(l)),f=(function(m,h){var y=Kl("embed-checkout-".concat(m));return y.style.cssText=`
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
`,y.src=h,y.id=m,y.name=m,y})(se.id,u);(function(m,h){var y=document.getElementById(m);y.innerHTML="",y.removeAttribute("style"),y.className="paystack-embed-container",y.style.position="relative",y.style.width="100%",y.appendChild(h)})(n.container,f),f.onload=function(){var m;f.contentWindow.postMessage("PaystackOpen ".concat(se.id),"*"),m=f,new Promise((function(h,y){m||y("No dom element provided"),m.style.display="",m.style.visibility="visible",h()}))}}else o.openIframe=function(){lf("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),se.open(l)};return o}}]),r})();if(df=ef().length>0,ff=Mr()&&Mr().parentElement.tagName==="FORM",df&&ff){var Zl,Xn=(function(){var r={},n=Mr();return ef().forEach((function(i){var o=n.getAttribute(i),l=i.split("data-")[1].replace(/-([a-z])/g,(function(u){return u[1].toUpperCase()}));r[l]=o})),(function(i){if(i.buttonId&&!document.getElementById(i.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var o=Ne({},i);o.buttonText=i.buttonText||"Pay",o.buttonVariant="normal",o.buttonWordmarkVariant="normal";var l=["normal","light"];return i.buttonVariant&&l.indexOf(i.buttonVariant)>-1&&(o.buttonVariant=i.buttonVariant),i.buttonWordmarkVariant&&l.indexOf(i.buttonWordmarkVariant)>-1&&(o.buttonWordmarkVariant=i.buttonWordmarkVariant),o})(r)})(),hf=Mr().parentElement;se||(se=new ph),(function(r){var n;if(r.id)(n=document.getElementById(r.id)).setAttribute("data-inline-id",r.id);else{var i=document.createElement("div");i.id="inline-button-".concat(r.inlineId),i.innerHTML=(function(o){var l,u,f={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:sh};return`
    <style>
      #inline-button-`.concat(o.inlineId,` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(o.inlineId,`__trigger {
        `).concat((l=o.variant||"normal",u={normal:`
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
      #inline-button-`).concat(o.inlineId,`__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(o.inlineId,`__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(o.inlineId,'__trigger" data-inline-id="').concat(o.inlineId,'">').concat(o.text||"Pay"," ").concat(o.currency||"NGN"," ").concat(o.amount,`</button>
    <div id="inline-button-`).concat(o.inlineId,`__wordmark">
      `).concat(f[o.wordmarkVariant||"normal"],`
    </div>
  `)})(r),r.parent.parentNode.insertBefore(i,r.parent.nextSibling),n=Z9(i.getElementsByTagName("button"),1)[0]}return n})({inlineId:se.id,amount:Xn.amount/100,currency:Xn.currency,id:Xn.buttonId,text:Xn.buttonText,variant:Xn.buttonVariant,wordmarkVariant:Xn.buttonWordmarkVariant,parent:Mr()}).addEventListener("click",(function(r){r.preventDefault(),Zl?se.resumeTransaction(Zl.accessCode):Zl=se.newTransaction(Ne(Ne({},Xn),{},{onSuccess:function(n){var i,o,l,u,f,m;i={type:"hidden",name:"reference",value:n.reference,parent:hf},o=i.type,l=i.value,u=i.name,f=i.parent,(m=document.createElement("input")).type=o,m.value=l,m.name=u,f.appendChild(m),hf.submit()}}))}))}var _7=function(r){var n=new ph;n.newTransaction(r)};function mh(r){function n(i){var o=i.config,l=i.onSuccess,u=i.onClose,f=be(be({},r),o),m=f.publicKey,h=f.firstname,y=f.lastname,_=f.phone,C=f.email,x=f.amount,R=f.reference,P=f.metadata,O=f.currency,A=O===void 0?"NGN":O,K=f.channels,W=f.label,L=f.plan,V=f.quantity,G=f.subaccount,Y=f.transaction_charge,ie=f.bearer,me=f.split,Ve=f.split_code,Xe=f.connect_account,mt=f.connect_split,ee=f.onBankTransferConfirmationPending,we=be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({onSuccess:l||function(){return null},onCancel:u||function(){return null},key:m,email:C,amount:x},h&&{firstname:h}),y&&{lastname:y}),_&&{phone:_}),R&&{ref:R}),A&&{currency:A}),K&&{channels:K}),P&&{metadata:P}),W&&{label:W}),ee&&{onBankTransferConfirmationPending:ee}),G&&{subaccount:G}),Y&&{transaction_charge:Y}),ie&&{bearer:ie}),me&&{split:me}),Ve&&{split_code:Ve}),L&&{plan:L}),V&&{quantity:V}),mt&&{connect_split:mt}),Xe&&{connect_account:Xe});_7(we)}return n}var S7=function(r){var n=r.text,i=r.className,o=r.children,l=r.onSuccess,u=r.onClose,f=r.disabled,m=Hc(r,["text","className","children","onSuccess","onClose","disabled"]),h=mh(m);return _t.createElement("button",{className:i,onClick:function(){return h({config:m,onSuccess:l,onClose:u})},disabled:f},n||o)},gh=N.createContext({config:{},initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),E7=function(r){var n=r.children,i=r.onSuccess,o=r.onClose,l=Hc(r,["children","onSuccess","onClose"]),u=mh(l);return _t.createElement(gh.Provider,{value:{config:l,initializePayment:u,onSuccess:i,onClose:o}},n)},I7=function(r){var n=r.children,i=r.ref,o=N.useContext(gh),l=o.config,u=o.initializePayment,f=o.onSuccess,m=o.onClose,h=function(){return u({config:l,onSuccess:f,onClose:m})};return n({initializePayment:h,ref:i})};N.forwardRef(function(r,n){var i=r.children,o=r.onSuccess,l=r.onClose,u=Hc(r,["children","onSuccess","onClose"]),f=o||function(){return null},m=l||function(){return null};return _t.createElement(E7,be({},u,{onSuccess:f,onClose:m}),_t.createElement(I7,{ref:n},i))});function b7(){const{cart:r,increment:n,decrement:i,removeFromCart:o,clearCart:l}=To(),{user:u}=zn(),{addOrder:f}=J2(),m=r.reduce((R,P)=>R+P.price*P.quantity,0),h="pk_live_8ae3997fa52803c7789fd20cf9b114f07bc9ccf4",y=m*100,_=u?u.email:"<user_email>",C=()=>{const R={id:Date.now(),items:r,total:m,email:_,date:new Date().toLocaleString()},P=JSON.parse(localStorage.getItem("orders"))||[];P.push(R),localStorage.setItem("orders",JSON.stringify(P)),l(),f(R),alert("✅ Payment Successful! Your order has been saved.")},x={email:_,amount:y,metadata:{custom_fields:[{display_name:"Cart Items",variable_name:"cart",value:r.map(R=>`${R.name} x${R.quantity}`).join(", ")}]},publicKey:h,text:"Checkout with Paystack",onSuccess:C,onClose:()=>alert("❌ Payment Window Closed")};return g.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[g.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Your Cart"}),r.length===0?g.jsx("p",{className:"text-gray-600",children:"Your cart is empty."}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"space-y-4",children:r.map(R=>g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white shadow rounded-lg",children:[g.jsx("img",{src:R.image,alt:R.name,className:"w-30 h-30 object-scale-down rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-lg font-semibold",children:R.name}),g.jsxs("p",{className:"text-gray-500 text-sm",children:["₦",R.price.toLocaleString()]}),g.jsxs("p",{className:"text-gray-400 text-xs",children:["Quantity: ",R.quantity]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{onClick:()=>i(R.id),className:"p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600",children:g.jsx(y9,{size:16})}),g.jsx("span",{className:"px-2 font-medium",children:R.quantity}),g.jsx("button",{onClick:()=>n(R.id),className:"p-2 rounded-full bg-green-500 text-white hover:bg-green-600",children:g.jsx(w9,{size:16})})]}),g.jsx("button",{onClick:()=>o(R.id),className:"p-2 rounded-full bg-red-500 text-white hover:bg-red-600",children:g.jsx(I9,{size:16})})]},R.id))}),g.jsxs("div",{className:"mt-8 p-6 bg-gray-50 shadow rounded-lg",children:[g.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Total: ₦",m.toLocaleString()]}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("button",{onClick:l,className:"bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800",children:"Clear Cart"}),g.jsx(S7,{...x,disabled:r.length===0||m===0,className:"bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"})]})]})]})]})}function T7(){const{login:r,loginWithGoogle:n}=zn(),i=Hi(),[o,l]=N.useState(""),[u,f]=N.useState(""),[m,h]=N.useState(""),[y,_]=N.useState(!1),C=async R=>{R.preventDefault(),h(""),_(!0);const P=await r(o,u);if(P.success){const O=P.user.email;i(O==="admin@shop.com"?"/admin":"/")}else h(P.message);_(!1)},x=async()=>{h(""),_(!0);const R=await n();if(R.success){const P=R.user.email;i(P==="admin@shop.com"?"/admin":"/")}else h(R.message);_(!1)};return g.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:g.jsxs("form",{className:"bg-white p-8 rounded-lg shadow-lg w-96 space-y-6",onSubmit:C,children:[g.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-4",children:"Welcome Back"}),m&&g.jsx("p",{className:"text-red-500 text-center",children:m}),g.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[g.jsx(K9,{className:"text-gray-400 mr-2"}),g.jsx("input",{type:"email",placeholder:"Email",className:"w-full outline-none",value:o,onChange:R=>l(R.target.value),required:!0})]}),g.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[g.jsx(G9,{className:"text-gray-400 mr-2"}),g.jsx("input",{type:"password",placeholder:"Password",className:"w-full outline-none",value:u,onChange:R=>f(R.target.value),required:!0})]}),g.jsx("button",{type:"submit",disabled:y,className:`w-full py-2 rounded text-white font-semibold transition ${y?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:y?"Logging in...":"Login"}),g.jsxs("div",{className:"flex items-center my-2",children:[g.jsx("hr",{className:"flex-1 border-gray-300"}),g.jsx("span",{className:"mx-2 text-gray-500 text-sm",children:"OR"}),g.jsx("hr",{className:"flex-1 border-gray-300"})]}),g.jsxs("button",{type:"button",onClick:x,disabled:y,className:"w-full py-2 rounded text-white bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 transition",children:[g.jsx($9,{}),y?"Processing...":"Login with Google"]}),g.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Don’t have an account?"," ",g.jsx(Ye,{to:"/signup",className:"text-blue-500 hover:underline font-medium",children:"Sign Up"})]})]})})}function P7(){const{signup:r}=zn(),n=Hi(),[i,o]=N.useState(""),[l,u]=N.useState(""),[f,m]=N.useState(""),[h,y]=N.useState(!1),_=async C=>{C.preventDefault(),m(""),y(!0);const x=await r(i,l);x.success?n("/"):m(x.message),y(!1)};return g.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:g.jsxs("form",{onSubmit:_,className:"bg-white p-6 rounded shadow-md w-96",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Sign Up"}),f&&g.jsx("p",{className:"text-red-500 mb-3",children:f}),g.jsx("input",{type:"email",placeholder:"Email",className:"border p-2 w-full mb-3 rounded",value:i,onChange:C=>o(C.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Password",className:"border p-2 w-full mb-3 rounded",value:l,onChange:C=>u(C.target.value),required:!0}),g.jsx("button",{type:"submit",disabled:h,className:`w-full py-2 rounded text-white transition ${h?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:h?"Signing up...":"Sign Up"}),g.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Already have an account?"," ",g.jsx(Ye,{to:"/login",className:"text-blue-500 hover:underline",children:"Login"})]})]})})}function N7(){const{orders:r}=J2(),{user:n}=zn(),i=n?r.filter(o=>o.email===n.email):[];return g.jsxs("div",{className:"p-6",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Order History"}),n?i.length===0?g.jsx("p",{children:"You have no orders yet."}):g.jsx("ul",{className:"space-y-4",children:i.map(o=>g.jsxs("li",{className:"bg-white p-4 rounded shadow space-y-2",children:[g.jsxs("p",{className:"font-bold",children:["Order ID: ",o.id]}),g.jsxs("p",{children:["Date: ",o.date]}),g.jsxs("p",{children:["Total: ₦",o.total.toLocaleString()]}),g.jsxs("p",{children:["Items: ",o.items.map(l=>l.name).join(", ")]})]},o.id))}):g.jsx("p",{children:"Please log in to view your orders."})]})}function R7(){const{products:r,addProduct:n,deleteProduct:i,updateProduct:o}=Fc(),{heroes:l,addHero:u,updateHero:f,deleteHero:m}=K2(),[h,y]=N.useState({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),[_,C]=N.useState(null),[x,R]=N.useState(null),P=ee=>{const{name:we,value:Ce}=ee.target;y(De=>({...De,[we]:Ce}))},O=ee=>{const we=ee.target.files[0];if(we){const Ce=new FileReader;Ce.onloadend=()=>{y(De=>({...De,image:Ce.result})),C(Ce.result)},Ce.readAsDataURL(we)}},A=ee=>{if(ee.preventDefault(),!h.title||!h.image){alert("Hero title and image are required.");return}x?(f(x,h),R(null)):u(h),y({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),C(null)},K=ee=>{y(ee),C(ee.image),R(ee.id)},[W,L]=N.useState({name:"",price:"",image:"",description:""}),[V,G]=N.useState(null),[Y,ie]=N.useState(null),me=ee=>{const{name:we,value:Ce}=ee.target;L(De=>({...De,[we]:Ce}))},Ve=ee=>{const we=ee.target.files[0];if(we){const Ce=new FileReader;Ce.onload=()=>{L(De=>({...De,image:Ce.result})),G(Ce.result)},Ce.readAsDataURL(we)}},Xe=ee=>{if(ee.preventDefault(),!W.name||!W.price||!W.image){alert("Please fill in product name, price, and image.");return}Y?(o(Y,W),ie(null)):n(W),L({name:"",price:"",image:"",description:""}),G(null)},mt=ee=>{L(ee),G(ee.image),ie(ee.id)};return g.jsxs("div",{className:"p-6 space-y-10",children:[g.jsxs("div",{className:"bg-white shadow rounded p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Hero Banner"}),g.jsxs("form",{onSubmit:A,className:"grid gap-4 mb-8",children:[g.jsx("input",{type:"text",name:"title",value:h.title,onChange:P,placeholder:"Hero Title",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"subtitle",value:h.subtitle,onChange:P,placeholder:"Hero Subtitle",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"ctaText",value:h.ctaText,onChange:P,placeholder:"CTA Button Text",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"ctaLink",value:h.ctaLink,onChange:P,placeholder:"CTA Button Link",className:"p-2 border rounded"}),g.jsx("input",{type:"file",accept:"image/*",onChange:O,className:"p-2 border rounded"}),_&&g.jsx("img",{src:_,alt:"Hero Preview",className:"w-full max-h-64 object-scale-down rounded border"}),g.jsx("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",children:x?"Update Hero":"Add Hero"})]}),l.length===0?g.jsx("p",{className:"text-gray-500",children:"No heroes yet. Add one above."}):g.jsx("div",{className:"grid gap-4",children:l.map(ee=>g.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm flex items-center p-4 gap-4",children:[g.jsx("img",{src:ee.image,alt:ee.title,className:"w-32 h-20 object-scale-down rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"font-bold",children:ee.title}),g.jsx("p",{className:"text-sm text-gray-600",children:ee.subtitle})]}),g.jsx("button",{onClick:()=>K(ee),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>m(ee.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]},ee.id))})]}),g.jsxs("div",{className:"bg-white shadow rounded p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Products"}),g.jsxs("form",{onSubmit:Xe,className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[g.jsx("input",{type:"text",name:"name",value:W.name,onChange:me,placeholder:"Product Name",className:"p-2 border rounded"}),g.jsx("input",{type:"number",name:"price",value:W.price,onChange:me,placeholder:"Price",className:"p-2 border rounded"}),g.jsx("input",{type:"file",accept:"image/*",onChange:Ve,className:"p-2 border rounded md:col-span-2"}),V&&g.jsx("img",{src:V,alt:"Product Preview",className:"w-32 h-32 object-scale-down rounded border md:col-span-2"}),g.jsx("textarea",{name:"description",value:W.description,onChange:me,placeholder:"Product Description",className:"p-2 border rounded md:col-span-2",rows:"3"}),g.jsx("button",{type:"submit",className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded col-span-1 md:col-span-2",children:Y?"Update Product":"Add Product"})]}),r.length===0?g.jsx("p",{className:"text-gray-500",children:"No products yet. Add one above."}):g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:r.map(ee=>g.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm overflow-hidden flex flex-col",children:[g.jsx("img",{src:ee.image,alt:ee.name,className:"w-full h-40 object-scale-down rounded-b-none mt-2"}),g.jsxs("div",{className:"p-4 flex-1 flex flex-col",children:[g.jsx("h3",{className:"text-lg font-semibold",children:ee.name}),g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:ee.description||"No description"}),g.jsxs("p",{className:"text-green-600 font-bold mb-4",children:["₦",Number(ee.price).toLocaleString()]}),g.jsxs("div",{className:"mt-auto flex gap-2",children:[g.jsx("button",{onClick:()=>mt(ee),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>i(ee.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]})]})]},ee.id))})]})]})}function A7(){const{login:r,logout:n}=zn(),i=Hi(),[o,l]=N.useState({email:"",password:""}),[u,f]=N.useState(""),[m,h]=N.useState(!1),y=async _=>{_.preventDefault(),f(""),h(!0);const C=await r(o.email,o.password);C.success?C.user.email==="admin@shop.com"?i("/admin"):(f("You are not allowed to log in here."),await n()):f(C.message),h(!1)};return g.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:g.jsxs("form",{onSubmit:y,className:"bg-white p-6 rounded shadow w-96 space-y-4",children:[g.jsx("h1",{className:"text-2xl font-bold text-center",children:"Admin Login"}),u&&g.jsx("p",{className:"text-red-500 text-center",children:u}),g.jsx("input",{type:"email",placeholder:"Admin Email",value:o.email,onChange:_=>l({...o,email:_.target.value}),className:"w-full border p-2 rounded",required:!0}),g.jsx("input",{type:"password",placeholder:"Password",value:o.password,onChange:_=>l({...o,password:_.target.value}),className:"w-full border p-2 rounded",required:!0}),g.jsx("button",{type:"submit",disabled:m,className:`w-full p-2 rounded text-white ${m?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:m?"Logging in...":"Login"})]})})}function L7(){const{wishlist:r,toggleWishlist:n}=Vc(),{addToCart:i}=To(),{products:o}=Fc(),l=o.filter(u=>r.includes(u.id));return l.length?g.jsx("div",{className:"p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:l.map(u=>g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg flex flex-col",children:[g.jsx("img",{src:u.image,alt:u.name,className:"w-full h-48 object-contain rounded mb-2"}),g.jsx("h2",{className:"font-semibold text-lg mb-1",children:u.name}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold mb-2",children:["₦",Number(u.price).toLocaleString()]}),g.jsxs("div",{className:"flex gap-2 mt-auto",children:[g.jsx("button",{onClick:()=>i(u),className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"}),g.jsx("button",{onClick:()=>n(u.id),className:"bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-700",children:"Remove"})]})]},u.id))}):g.jsx("p",{className:"p-6",children:"Your wishlist is empty."})}function O7(){return g.jsx(Jg,{children:g.jsx(Zg,{children:g.jsx(b3,{children:g.jsx(Xg,{children:g.jsx(Qg,{children:g.jsx(e9,{children:g.jsxs(k3,{basename:"/MrShrek-Store/",children:[g.jsx(R9,{}),g.jsxs(p3,{children:[g.jsx(Zt,{path:"/",element:g.jsx(Y9,{})}),g.jsx(Zt,{path:"/cart",element:g.jsx(Wl,{children:g.jsx(b7,{})})}),g.jsx(Zt,{path:"/login",element:g.jsx(T7,{})}),g.jsx(Zt,{path:"/signup",element:g.jsx(P7,{})}),g.jsx(Zt,{path:"/orders",element:g.jsx(Wl,{children:g.jsx(N7,{})})}),g.jsx(Zt,{path:"/admin",element:g.jsx(Yg,{children:g.jsx(R7,{})})}),g.jsx(Zt,{path:"/adminlogin",element:g.jsx(A7,{})}),g.jsx(Zt,{path:"/wishlist",element:g.jsx(Wl,{children:g.jsx(L7,{})})})]})]})})})})})})})}_4.createRoot(document.getElementById("root")).render(g.jsx(N.StrictMode,{children:g.jsx(O7,{})}));
