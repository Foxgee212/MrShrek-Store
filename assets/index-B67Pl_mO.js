function f4(r,n){for(var i=0;i<n.length;i++){const o=n[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in r)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function h4(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bl={exports:{}},Pi={},Tl={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function p4(){if(Md)return le;Md=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,L={};function R(E,M,ae){this.props=E,this.context=M,this.refs=L,this.updater=ae||A}R.prototype.isReactComponent={},R.prototype.setState=function(E,M){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,M,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function q(){}q.prototype=R.prototype;function $(E,M,ae){this.props=E,this.context=M,this.refs=L,this.updater=ae||A}var Y=$.prototype=new q;Y.constructor=$,P(Y,R.prototype),Y.isPureReactComponent=!0;var se=Array.isArray,U=Object.prototype.hasOwnProperty,J={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function te(E,M,ae){var ce,de={},fe=null,ye=null;if(M!=null)for(ce in M.ref!==void 0&&(ye=M.ref),M.key!==void 0&&(fe=""+M.key),M)U.call(M,ce)&&!Q.hasOwnProperty(ce)&&(de[ce]=M[ce]);var pe=arguments.length-2;if(pe===1)de.children=ae;else if(1<pe){for(var xe=Array(pe),lt=0;lt<pe;lt++)xe[lt]=arguments[lt+2];de.children=xe}if(E&&E.defaultProps)for(ce in pe=E.defaultProps,pe)de[ce]===void 0&&(de[ce]=pe[ce]);return{$$typeof:r,type:E,key:fe,ref:ye,props:de,_owner:J.current}}function Ee(E,M){return{$$typeof:r,type:E.type,key:M,ref:E.ref,props:E.props,_owner:E._owner}}function Ze(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function mt(E){var M={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ae){return M[ae]})}var ee=/\/+/g;function we(E,M){return typeof E=="object"&&E!==null&&E.key!=null?mt(""+E.key):M.toString(36)}function Ce(E,M,ae,ce,de){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(fe){case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case r:case n:ye=!0}}if(ye)return ye=E,de=de(ye),E=ce===""?"."+we(ye,0):ce,se(de)?(ae="",E!=null&&(ae=E.replace(ee,"$&/")+"/"),Ce(de,M,ae,"",function(lt){return lt})):de!=null&&(Ze(de)&&(de=Ee(de,ae+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+E)),M.push(de)),1;if(ye=0,ce=ce===""?".":ce+":",se(E))for(var pe=0;pe<E.length;pe++){fe=E[pe];var xe=ce+we(fe,pe);ye+=Ce(fe,M,ae,xe,de)}else if(xe=x(E),typeof xe=="function")for(E=xe.call(E),pe=0;!(fe=E.next()).done;)fe=fe.value,xe=ce+we(fe,pe++),ye+=Ce(fe,M,ae,xe,de);else if(fe==="object")throw M=String(E),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ye}function Ue(E,M,ae){if(E==null)return E;var ce=[],de=0;return Ce(E,ce,"","",function(fe){return M.call(ae,fe,de++)}),ce}function Xe(E){if(E._status===-1){var M=E._result;M=M(),M.then(function(ae){(E._status===0||E._status===-1)&&(E._status=1,E._result=ae)},function(ae){(E._status===0||E._status===-1)&&(E._status=2,E._result=ae)}),E._status===-1&&(E._status=0,E._result=M)}if(E._status===1)return E._result.default;throw E._result}var Pe={current:null},F={transition:null},ne={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:F,ReactCurrentOwner:J};function B(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Ue,forEach:function(E,M,ae){Ue(E,function(){M.apply(this,arguments)},ae)},count:function(E){var M=0;return Ue(E,function(){M++}),M},toArray:function(E){return Ue(E,function(M){return M})||[]},only:function(E){if(!Ze(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},le.Component=R,le.Fragment=i,le.Profiler=l,le.PureComponent=$,le.StrictMode=o,le.Suspense=h,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,le.act=B,le.cloneElement=function(E,M,ae){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ce=P({},E.props),de=E.key,fe=E.ref,ye=E._owner;if(M!=null){if(M.ref!==void 0&&(fe=M.ref,ye=J.current),M.key!==void 0&&(de=""+M.key),E.type&&E.type.defaultProps)var pe=E.type.defaultProps;for(xe in M)U.call(M,xe)&&!Q.hasOwnProperty(xe)&&(ce[xe]=M[xe]===void 0&&pe!==void 0?pe[xe]:M[xe])}var xe=arguments.length-2;if(xe===1)ce.children=ae;else if(1<xe){pe=Array(xe);for(var lt=0;lt<xe;lt++)pe[lt]=arguments[lt+2];ce.children=pe}return{$$typeof:r,type:E.type,key:de,ref:fe,props:ce,_owner:ye}},le.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},le.createElement=te,le.createFactory=function(E){var M=te.bind(null,E);return M.type=E,M},le.createRef=function(){return{current:null}},le.forwardRef=function(E){return{$$typeof:m,render:E}},le.isValidElement=Ze,le.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:Xe}},le.memo=function(E,M){return{$$typeof:y,type:E,compare:M===void 0?null:M}},le.startTransition=function(E){var M=F.transition;F.transition={};try{E()}finally{F.transition=M}},le.unstable_act=B,le.useCallback=function(E,M){return Pe.current.useCallback(E,M)},le.useContext=function(E){return Pe.current.useContext(E)},le.useDebugValue=function(){},le.useDeferredValue=function(E){return Pe.current.useDeferredValue(E)},le.useEffect=function(E,M){return Pe.current.useEffect(E,M)},le.useId=function(){return Pe.current.useId()},le.useImperativeHandle=function(E,M,ae){return Pe.current.useImperativeHandle(E,M,ae)},le.useInsertionEffect=function(E,M){return Pe.current.useInsertionEffect(E,M)},le.useLayoutEffect=function(E,M){return Pe.current.useLayoutEffect(E,M)},le.useMemo=function(E,M){return Pe.current.useMemo(E,M)},le.useReducer=function(E,M,ae){return Pe.current.useReducer(E,M,ae)},le.useRef=function(E){return Pe.current.useRef(E)},le.useState=function(E){return Pe.current.useState(E)},le.useSyncExternalStore=function(E,M,ae){return Pe.current.useSyncExternalStore(E,M,ae)},le.useTransition=function(){return Pe.current.useTransition()},le.version="18.3.1",le}var jd;function pc(){return jd||(jd=1,Tl.exports=p4()),Tl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function m4(){if(Dd)return Pi;Dd=1;var r=pc(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,y){var S,_={},x=null,A=null;y!==void 0&&(x=""+y),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(A=h.ref);for(S in h)o.call(h,S)&&!u.hasOwnProperty(S)&&(_[S]=h[S]);if(m&&m.defaultProps)for(S in h=m.defaultProps,h)_[S]===void 0&&(_[S]=h[S]);return{$$typeof:n,type:m,key:x,ref:A,props:_,_owner:l.current}}return Pi.Fragment=i,Pi.jsx=f,Pi.jsxs=f,Pi}var Ud;function g4(){return Ud||(Ud=1,bl.exports=m4()),bl.exports}var g=g4(),N=pc();const xt=h4(N),y4=f4({__proto__:null,default:xt},[N]);var so={},Pl={exports:{}},st={},Nl={exports:{}},Al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function v4(){return zd||(zd=1,(function(r){function n(F,ne){var B=F.length;F.push(ne);e:for(;0<B;){var E=B-1>>>1,M=F[E];if(0<l(M,ne))F[E]=ne,F[B]=M,B=E;else break e}}function i(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var ne=F[0],B=F.pop();if(B!==ne){F[0]=B;e:for(var E=0,M=F.length,ae=M>>>1;E<ae;){var ce=2*(E+1)-1,de=F[ce],fe=ce+1,ye=F[fe];if(0>l(de,B))fe<M&&0>l(ye,de)?(F[E]=ye,F[fe]=B,E=fe):(F[E]=de,F[ce]=B,E=ce);else if(fe<M&&0>l(ye,B))F[E]=ye,F[fe]=B,E=fe;else break e}}return ne}function l(F,ne){var B=F.sortIndex-ne.sortIndex;return B!==0?B:F.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var h=[],y=[],S=1,_=null,x=3,A=!1,P=!1,L=!1,R=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(F){for(var ne=i(y);ne!==null;){if(ne.callback===null)o(y);else if(ne.startTime<=F)o(y),ne.sortIndex=ne.expirationTime,n(h,ne);else break;ne=i(y)}}function se(F){if(L=!1,Y(F),!P)if(i(h)!==null)P=!0,Xe(U);else{var ne=i(y);ne!==null&&Pe(se,ne.startTime-F)}}function U(F,ne){P=!1,L&&(L=!1,q(te),te=-1),A=!0;var B=x;try{for(Y(ne),_=i(h);_!==null&&(!(_.expirationTime>ne)||F&&!mt());){var E=_.callback;if(typeof E=="function"){_.callback=null,x=_.priorityLevel;var M=E(_.expirationTime<=ne);ne=r.unstable_now(),typeof M=="function"?_.callback=M:_===i(h)&&o(h),Y(ne)}else o(h);_=i(h)}if(_!==null)var ae=!0;else{var ce=i(y);ce!==null&&Pe(se,ce.startTime-ne),ae=!1}return ae}finally{_=null,x=B,A=!1}}var J=!1,Q=null,te=-1,Ee=5,Ze=-1;function mt(){return!(r.unstable_now()-Ze<Ee)}function ee(){if(Q!==null){var F=r.unstable_now();Ze=F;var ne=!0;try{ne=Q(!0,F)}finally{ne?we():(J=!1,Q=null)}}else J=!1}var we;if(typeof $=="function")we=function(){$(ee)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ue=Ce.port2;Ce.port1.onmessage=ee,we=function(){Ue.postMessage(null)}}else we=function(){R(ee,0)};function Xe(F){Q=F,J||(J=!0,we())}function Pe(F,ne){te=R(function(){F(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){P||A||(P=!0,Xe(U))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(h)},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var B=x;x=ne;try{return F()}finally{x=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,ne){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var B=x;x=F;try{return ne()}finally{x=B}},r.unstable_scheduleCallback=function(F,ne,B){var E=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?E+B:E):B=E,F){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=B+M,F={id:S++,callback:ne,priorityLevel:F,startTime:B,expirationTime:M,sortIndex:-1},B>E?(F.sortIndex=B,n(y,F),i(h)===null&&F===i(y)&&(L?(q(te),te=-1):L=!0,Pe(se,B-E))):(F.sortIndex=M,n(h,F),P||A||(P=!0,Xe(U))),F},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(F){var ne=x;return function(){var B=x;x=ne;try{return F.apply(this,arguments)}finally{x=B}}}})(Al)),Al}var Fd;function w4(){return Fd||(Fd=1,Nl.exports=v4()),Nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function C4(){if(Vd)return st;Vd=1;var r=pc(),n=w4();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},_={};function x(e){return h.call(_,e)?!0:h.call(S,e)?!1:y.test(e)?_[e]=!0:(S[e]=!0,!1)}function A(e,t,s,a){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,s,a){if(t===null||typeof t>"u"||A(e,t,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,s,a,c,d,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=p}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,$);R[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,$);R[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,$);R[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,s,a){var c=R.hasOwnProperty(t)?R[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,s,c,a)&&(s=null),a||c===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):c.mustUseProperty?e[c.propertyName]=s===null?c.type===3?!1:"":s:(t=c.attributeName,a=c.attributeNamespace,s===null?e.removeAttribute(t):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,a?e.setAttributeNS(a,t,s):e.setAttribute(t,s))))}var se=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),J=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ze=Symbol.for("react.provider"),mt=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Ue=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),F=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,E;function M(e){if(E===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var ae=!1;function ce(e,t){if(!e||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var a=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){a=T}e.call(t.prototype)}else{try{throw Error()}catch(T){a=T}e()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),d=a.stack.split(`
`),p=c.length-1,w=d.length-1;1<=p&&0<=w&&c[p]!==d[w];)w--;for(;1<=p&&0<=w;p--,w--)if(c[p]!==d[w]){if(p!==1||w!==1)do if(p--,w--,0>w||c[p]!==d[w]){var C=`
`+c[p].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=p&&0<=w);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?M(e):""}function de(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case J:return"Portal";case Ee:return"Profiler";case te:return"StrictMode";case we:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mt:return(e.displayName||"Context")+".Consumer";case Ze:return(e._context.displayName||"Context")+".Provider";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ue:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lt(e){var t=xe(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,d.call(this,p)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=lt(e))}function Vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),a="";return e&&(a=xe(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var s=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Hc(e,t){var s=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;s=pe(t.value!=null?t.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function Mo(e,t){Bc(e,t);var s=pe(t.value),a=t.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jo(e,t.type,s):t.hasOwnProperty("defaultValue")&&jo(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function jo(e,t,s){(t!=="number"||Qi(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var $r=Array.isArray;function ur(e,t,s,a){if(e=e.options,t){t={};for(var c=0;c<s.length;c++)t["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=t.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&a&&(e[s].defaultSelected=!0)}else{for(s=""+pe(s),t=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wc(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(i(92));if($r(s)){if(1<s.length)throw Error(i(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:pe(s)}}function qc(e,t){var s=pe(t.value),a=pe(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Jc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,s,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gh=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){gh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function Qc(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var a=s.indexOf("--")===0,c=Qc(s,t[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,c):e[s]=c}}var yh=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,t){if(t){if(yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vo=null;function Ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,dr=null,fr=null;function Zc(e){if(e=pi(e)){if(typeof Bo!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Cs(t),Bo(e.stateNode,e.type,t))}}function Xc(e){dr?fr?fr.push(e):fr=[e]:dr=e}function eu(){if(dr){var e=dr,t=fr;if(fr=dr=null,Zc(e),t)for(e=0;e<t.length;e++)Zc(t[e])}}function tu(e,t){return e(t)}function nu(){}var $o=!1;function ru(e,t,s){if($o)return e(t,s);$o=!0;try{return tu(e,t,s)}finally{$o=!1,(dr!==null||fr!==null)&&(nu(),eu())}}function Kr(e,t){var s=e.stateNode;if(s===null)return null;var a=Cs(s);if(a===null)return null;s=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,t,typeof s));return s}var Wo=!1;if(m)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Wo=!1}function vh(e,t,s,a,c,d,p,w,C){var T=Array.prototype.slice.call(arguments,3);try{t.apply(s,T)}catch(j){this.onError(j)}}var Jr=!1,Zi=null,Xi=!1,qo=null,wh={onError:function(e){Jr=!0,Zi=e}};function Ch(e,t,s,a,c,d,p,w,C){Jr=!1,Zi=null,vh.apply(wh,arguments)}function kh(e,t,s,a,c,d,p,w,C){if(Ch.apply(this,arguments),Jr){if(Jr){var T=Zi;Jr=!1,Zi=null}else throw Error(i(198));Xi||(Xi=!0,qo=T)}}function Fn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Fn(e)!==e)throw Error(i(188))}function _h(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var s=e,a=t;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(a=c.return,a!==null){s=a;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return su(c),e;if(d===a)return su(c),t;d=d.sibling}throw Error(i(188))}if(s.return!==a.return)s=c,a=d;else{for(var p=!1,w=c.child;w;){if(w===s){p=!0,s=c,a=d;break}if(w===a){p=!0,a=c,s=d;break}w=w.sibling}if(!p){for(w=d.child;w;){if(w===s){p=!0,s=d,a=c;break}if(w===a){p=!0,a=d,s=c;break}w=w.sibling}if(!p)throw Error(i(189))}}if(s.alternate!==a)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:t}function ou(e){return e=_h(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var lu=n.unstable_scheduleCallback,cu=n.unstable_cancelCallback,xh=n.unstable_shouldYield,Sh=n.unstable_requestPaint,Re=n.unstable_now,Eh=n.unstable_getCurrentPriorityLevel,Ko=n.unstable_ImmediatePriority,uu=n.unstable_UserBlockingPriority,es=n.unstable_NormalPriority,Ih=n.unstable_LowPriority,du=n.unstable_IdlePriority,ts=null,Mt=null;function bh(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Nh,Th=Math.log,Ph=Math.LN2;function Nh(e){return e>>>=0,e===0?32:31-(Th(e)/Ph|0)|0}var ns=64,rs=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function is(e,t){var s=e.pendingLanes;if(s===0)return 0;var a=0,c=e.suspendedLanes,d=e.pingedLanes,p=s&268435455;if(p!==0){var w=p&~c;w!==0?a=Qr(w):(d&=p,d!==0&&(a=Qr(d)))}else p=s&~c,p!==0?a=Qr(p):d!==0&&(a=Qr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)s=31-Et(t),c=1<<s,a|=e[s],t&=~c;return a}function Ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rh(e,t){for(var s=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var p=31-Et(d),w=1<<p,C=c[p];C===-1?((w&s)===0||(w&a)!==0)&&(c[p]=Ah(w,t)):C<=t&&(e.expiredLanes|=w),d&=~w}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=ns;return ns<<=1,(ns&4194240)===0&&(ns=64),e}function Jo(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Yr(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=s}function Lh(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var c=31-Et(s),d=1<<c;t[c]=0,a[c]=-1,e[c]=-1,s&=~d}}function Qo(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var a=31-Et(s),c=1<<a;c&t|e[a]&t&&(e[a]|=t),s&=~c}}var me=0;function hu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pu,Yo,mu,gu,yu,Zo=!1,ss=[],on=null,an=null,ln=null,Zr=new Map,Xr=new Map,cn=[],Oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vu(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function ei(e,t,s,a,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:d,targetContainers:[c]},t!==null&&(t=pi(t),t!==null&&Yo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Mh(e,t,s,a,c){switch(t){case"focusin":return on=ei(on,e,t,s,a,c),!0;case"dragenter":return an=ei(an,e,t,s,a,c),!0;case"mouseover":return ln=ei(ln,e,t,s,a,c),!0;case"pointerover":var d=c.pointerId;return Zr.set(d,ei(Zr.get(d)||null,e,t,s,a,c)),!0;case"gotpointercapture":return d=c.pointerId,Xr.set(d,ei(Xr.get(d)||null,e,t,s,a,c)),!0}return!1}function wu(e){var t=Vn(e.target);if(t!==null){var s=Fn(t);if(s!==null){if(t=s.tag,t===13){if(t=iu(s),t!==null){e.blockedOn=t,yu(e.priority,function(){mu(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);Vo=a,s.target.dispatchEvent(a),Vo=null}else return t=pi(s),t!==null&&Yo(t),e.blockedOn=s,!1;t.shift()}return!0}function Cu(e,t,s){os(e)&&s.delete(t)}function jh(){Zo=!1,on!==null&&os(on)&&(on=null),an!==null&&os(an)&&(an=null),ln!==null&&os(ln)&&(ln=null),Zr.forEach(Cu),Xr.forEach(Cu)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,jh)))}function ni(e){function t(c){return ti(c,e)}if(0<ss.length){ti(ss[0],e);for(var s=1;s<ss.length;s++){var a=ss[s];a.blockedOn===e&&(a.blockedOn=null)}}for(on!==null&&ti(on,e),an!==null&&ti(an,e),ln!==null&&ti(ln,e),Zr.forEach(t),Xr.forEach(t),s=0;s<cn.length;s++)a=cn[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<cn.length&&(s=cn[0],s.blockedOn===null);)wu(s),s.blockedOn===null&&cn.shift()}var hr=se.ReactCurrentBatchConfig,as=!0;function Dh(e,t,s,a){var c=me,d=hr.transition;hr.transition=null;try{me=1,Xo(e,t,s,a)}finally{me=c,hr.transition=d}}function Uh(e,t,s,a){var c=me,d=hr.transition;hr.transition=null;try{me=4,Xo(e,t,s,a)}finally{me=c,hr.transition=d}}function Xo(e,t,s,a){if(as){var c=ea(e,t,s,a);if(c===null)ya(e,t,a,ls,s),vu(e,a);else if(Mh(c,e,t,s,a))a.stopPropagation();else if(vu(e,a),t&4&&-1<Oh.indexOf(e)){for(;c!==null;){var d=pi(c);if(d!==null&&pu(d),d=ea(e,t,s,a),d===null&&ya(e,t,a,ls,s),d===c)break;c=d}c!==null&&a.stopPropagation()}else ya(e,t,a,null,s)}}var ls=null;function ea(e,t,s,a){if(ls=null,e=Ho(a),e=Vn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=iu(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eh()){case Ko:return 1;case uu:return 4;case es:case Ih:return 16;case du:return 536870912;default:return 16}default:return 16}}var un=null,ta=null,cs=null;function _u(){if(cs)return cs;var e,t=ta,s=t.length,a,c="value"in un?un.value:un.textContent,d=c.length;for(e=0;e<s&&t[e]===c[e];e++);var p=s-e;for(a=1;a<=p&&t[s-a]===c[d-a];a++);return cs=c.slice(e,1<a?1-a:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function xu(){return!1}function ct(e){function t(s,a,c,d,p){this._reactName=s,this._targetInst=c,this.type=a,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ds:xu,this.isPropagationStopped=xu,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=ct(pr),ri=B({},pr,{view:0,detail:0}),zh=ct(ri),ra,ia,ii,fs=B({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(ra=e.screenX-ii.screenX,ia=e.screenY-ii.screenY):ia=ra=0,ii=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),Su=ct(fs),Fh=B({},fs,{dataTransfer:0}),Vh=ct(Fh),Hh=B({},ri,{relatedTarget:0}),sa=ct(Hh),Bh=B({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=ct(Bh),Wh=B({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qh=ct(Wh),Kh=B({},pr,{data:0}),Eu=ct(Kh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function oa(){return Yh}var Zh=B({},ri,{key:function(e){if(e.key){var t=Gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=ct(Zh),ep=B({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=ct(ep),tp=B({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),np=ct(tp),rp=B({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ip=ct(rp),sp=B({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),op=ct(sp),ap=[9,13,27,32],aa=m&&"CompositionEvent"in window,si=null;m&&"documentMode"in document&&(si=document.documentMode);var lp=m&&"TextEvent"in window&&!si,bu=m&&(!aa||si&&8<si&&11>=si),Tu=" ",Pu=!1;function Nu(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function cp(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Pu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Pu?null:e;default:return null}}function up(e,t){if(mr)return e==="compositionend"||!aa&&Nu(e,t)?(e=_u(),cs=ta=un=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function Lu(e,t,s,a){Xc(a),t=ys(t,"onChange"),0<t.length&&(s=new na("onChange","change",null,s,a),e.push({event:s,listeners:t}))}var oi=null,ai=null;function fp(e){Yu(e,0)}function hs(e){var t=Cr(e);if(Vc(t))return e}function hp(e,t){if(e==="change")return t}var Ou=!1;if(m){var la;if(m){var ca="oninput"in document;if(!ca){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),ca=typeof Mu.oninput=="function"}la=ca}else la=!1;Ou=la&&(!document.documentMode||9<document.documentMode)}function ju(){oi&&(oi.detachEvent("onpropertychange",Du),ai=oi=null)}function Du(e){if(e.propertyName==="value"&&hs(ai)){var t=[];Lu(t,ai,e,Ho(e)),ru(fp,t)}}function pp(e,t,s){e==="focusin"?(ju(),oi=t,ai=s,oi.attachEvent("onpropertychange",Du)):e==="focusout"&&ju()}function mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(ai)}function gp(e,t){if(e==="click")return hs(t)}function yp(e,t){if(e==="input"||e==="change")return hs(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:vp;function li(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var c=s[a];if(!h.call(t,c)||!It(e[c],t[c]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var s=Uu(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=t&&a>=t)return{node:s,offset:t-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Uu(s)}}function Fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Qi(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=Vu(),s=e.focusedElem,a=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&Fu(s.ownerDocument.documentElement,s)){if(a!==null&&ua(s)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=s.textContent.length,d=Math.min(a.start,c);a=a.end===void 0?d:Math.min(a.end,c),!e.extend&&d>a&&(c=a,a=d,d=c),c=zu(s,d);var p=zu(s,a);c&&p&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cp=m&&"documentMode"in document&&11>=document.documentMode,gr=null,da=null,ci=null,fa=!1;function Hu(e,t,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fa||gr==null||gr!==Qi(a)||(a=gr,"selectionStart"in a&&ua(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ci&&li(ci,a)||(ci=a,a=ys(da,"onSelect"),0<a.length&&(t=new na("onSelect","select",null,t,s),e.push({event:t,listeners:a}),t.target=gr)))}function ps(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var yr={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionend:ps("Transition","TransitionEnd")},ha={},Bu={};m&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function ms(e){if(ha[e])return ha[e];if(!yr[e])return e;var t=yr[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Bu)return ha[e]=t[s];return e}var $u=ms("animationend"),Wu=ms("animationiteration"),qu=ms("animationstart"),Ku=ms("transitionend"),Gu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Gu.set(e,t),u(t,[e])}for(var pa=0;pa<Ju.length;pa++){var ma=Ju[pa],kp=ma.toLowerCase(),_p=ma[0].toUpperCase()+ma.slice(1);dn(kp,"on"+_p)}dn($u,"onAnimationEnd"),dn(Wu,"onAnimationIteration"),dn(qu,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Ku,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Qu(e,t,s){var a=e.type||"unknown-event";e.currentTarget=s,kh(a,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],c=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var p=a.length-1;0<=p;p--){var w=a[p],C=w.instance,T=w.currentTarget;if(w=w.listener,C!==d&&c.isPropagationStopped())break e;Qu(c,w,T),d=C}else for(p=0;p<a.length;p++){if(w=a[p],C=w.instance,T=w.currentTarget,w=w.listener,C!==d&&c.isPropagationStopped())break e;Qu(c,w,T),d=C}}}if(Xi)throw e=qo,Xi=!1,qo=null,e}function ke(e,t){var s=t[xa];s===void 0&&(s=t[xa]=new Set);var a=e+"__bubble";s.has(a)||(Zu(t,e,2,!1),s.add(a))}function ga(e,t,s){var a=0;t&&(a|=4),Zu(s,e,a,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[gs]){e[gs]=!0,o.forEach(function(s){s!=="selectionchange"&&(xp.has(s)||ga(s,!1,e),ga(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,ga("selectionchange",!1,t))}}function Zu(e,t,s,a){switch(ku(t)){case 1:var c=Dh;break;case 4:c=Uh;break;default:c=Xo}s=c.bind(null,t,s,e),c=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,s,{capture:!0,passive:c}):e.addEventListener(t,s,!0):c!==void 0?e.addEventListener(t,s,{passive:c}):e.addEventListener(t,s,!1)}function ya(e,t,s,a,c){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var w=a.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var C=p.tag;if((C===3||C===4)&&(C=p.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;p=p.return}for(;w!==null;){if(p=Vn(w),p===null)return;if(C=p.tag,C===5||C===6){a=d=p;continue e}w=w.parentNode}}a=a.return}ru(function(){var T=d,j=Ho(s),D=[];e:{var O=Gu.get(e);if(O!==void 0){var V=na,W=e;switch(e){case"keypress":if(us(s)===0)break e;case"keydown":case"keyup":V=Xh;break;case"focusin":W="focus",V=sa;break;case"focusout":W="blur",V=sa;break;case"beforeblur":case"afterblur":V=sa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=np;break;case $u:case Wu:case qu:V=$h;break;case Ku:V=ip;break;case"scroll":V=zh;break;case"wheel":V=op;break;case"copy":case"cut":case"paste":V=qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Iu}var K=(t&4)!==0,Le=!K&&e==="scroll",I=K?O!==null?O+"Capture":null:O;K=[];for(var k=T,b;k!==null;){b=k;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,I!==null&&(z=Kr(k,I),z!=null&&K.push(fi(k,z,b)))),Le)break;k=k.return}0<K.length&&(O=new V(O,W,null,s,j),D.push({event:O,listeners:K}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",O&&s!==Vo&&(W=s.relatedTarget||s.fromElement)&&(Vn(W)||W[$t]))break e;if((V||O)&&(O=j.window===j?j:(O=j.ownerDocument)?O.defaultView||O.parentWindow:window,V?(W=s.relatedTarget||s.toElement,V=T,W=W?Vn(W):null,W!==null&&(Le=Fn(W),W!==Le||W.tag!==5&&W.tag!==6)&&(W=null)):(V=null,W=T),V!==W)){if(K=Su,z="onMouseLeave",I="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(K=Iu,z="onPointerLeave",I="onPointerEnter",k="pointer"),Le=V==null?O:Cr(V),b=W==null?O:Cr(W),O=new K(z,k+"leave",V,s,j),O.target=Le,O.relatedTarget=b,z=null,Vn(j)===T&&(K=new K(I,k+"enter",W,s,j),K.target=b,K.relatedTarget=Le,z=K),Le=z,V&&W)t:{for(K=V,I=W,k=0,b=K;b;b=vr(b))k++;for(b=0,z=I;z;z=vr(z))b++;for(;0<k-b;)K=vr(K),k--;for(;0<b-k;)I=vr(I),b--;for(;k--;){if(K===I||I!==null&&K===I.alternate)break t;K=vr(K),I=vr(I)}K=null}else K=null;V!==null&&Xu(D,O,V,K,!1),W!==null&&Le!==null&&Xu(D,Le,W,K,!0)}}e:{if(O=T?Cr(T):window,V=O.nodeName&&O.nodeName.toLowerCase(),V==="select"||V==="input"&&O.type==="file")var G=hp;else if(Ru(O))if(Ou)G=yp;else{G=mp;var Z=pp}else(V=O.nodeName)&&V.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(G=gp);if(G&&(G=G(e,T))){Lu(D,G,s,j);break e}Z&&Z(e,O,T),e==="focusout"&&(Z=O._wrapperState)&&Z.controlled&&O.type==="number"&&jo(O,"number",O.value)}switch(Z=T?Cr(T):window,e){case"focusin":(Ru(Z)||Z.contentEditable==="true")&&(gr=Z,da=T,ci=null);break;case"focusout":ci=da=gr=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Hu(D,s,j);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":Hu(D,s,j)}var X;if(aa)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else mr?Nu(e,s)&&(ie="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(bu&&s.locale!=="ko"&&(mr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&mr&&(X=_u()):(un=j,ta="value"in un?un.value:un.textContent,mr=!0)),Z=ys(T,ie),0<Z.length&&(ie=new Eu(ie,e,null,s,j),D.push({event:ie,listeners:Z}),X?ie.data=X:(X=Au(s),X!==null&&(ie.data=X)))),(X=lp?cp(e,s):up(e,s))&&(T=ys(T,"onBeforeInput"),0<T.length&&(j=new Eu("onBeforeInput","beforeinput",null,s,j),D.push({event:j,listeners:T}),j.data=X))}Yu(D,t)})}function fi(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ys(e,t){for(var s=t+"Capture",a=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Kr(e,s),d!=null&&a.unshift(fi(e,d,c)),d=Kr(e,t),d!=null&&a.push(fi(e,d,c))),e=e.return}return a}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,s,a,c){for(var d=t._reactName,p=[];s!==null&&s!==a;){var w=s,C=w.alternate,T=w.stateNode;if(C!==null&&C===a)break;w.tag===5&&T!==null&&(w=T,c?(C=Kr(s,d),C!=null&&p.unshift(fi(s,C,w))):c||(C=Kr(s,d),C!=null&&p.push(fi(s,C,w)))),s=s.return}p.length!==0&&e.push({event:t,listeners:p})}var Sp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function e1(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(Ep,"")}function vs(e,t,s){if(t=e1(t),e1(e)!==t&&s)throw Error(i(425))}function ws(){}var va=null,wa=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,Ip=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(e){return t1.resolve(null).then(e).catch(Tp)}:ka;function Tp(e){setTimeout(function(){throw e})}function _a(e,t){var s=t,a=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(a===0){e.removeChild(c),ni(t);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=c}while(s);ni(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function n1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),jt="__reactFiber$"+wr,hi="__reactProps$"+wr,$t="__reactContainer$"+wr,xa="__reactEvents$"+wr,Pp="__reactListeners$"+wr,Np="__reactHandles$"+wr;function Vn(e){var t=e[jt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[$t]||s[jt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=n1(e);e!==null;){if(s=e[jt])return s;e=n1(e)}return t}e=s,s=e.parentNode}return null}function pi(e){return e=e[jt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Cs(e){return e[hi]||null}var Sa=[],kr=-1;function hn(e){return{current:e}}function _e(e){0>kr||(e.current=Sa[kr],Sa[kr]=null,kr--)}function ve(e,t){kr++,Sa[kr]=e.current,e.current=t}var pn={},We=hn(pn),et=hn(!1),Hn=pn;function _r(e,t){var s=e.type.contextTypes;if(!s)return pn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in s)c[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function tt(e){return e=e.childContextTypes,e!=null}function ks(){_e(et),_e(We)}function r1(e,t,s){if(We.current!==pn)throw Error(i(168));ve(We,t),ve(et,s)}function i1(e,t,s){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(i(108,ye(e)||"Unknown",c));return B({},s,a)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Hn=We.current,ve(We,e),ve(et,et.current),!0}function s1(e,t,s){var a=e.stateNode;if(!a)throw Error(i(169));s?(e=i1(e,t,Hn),a.__reactInternalMemoizedMergedChildContext=e,_e(et),_e(We),ve(We,e)):_e(et),ve(et,s)}var Wt=null,xs=!1,Ea=!1;function o1(e){Wt===null?Wt=[e]:Wt.push(e)}function Ap(e){xs=!0,o1(e)}function mn(){if(!Ea&&Wt!==null){Ea=!0;var e=0,t=me;try{var s=Wt;for(me=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}Wt=null,xs=!1}catch(c){throw Wt!==null&&(Wt=Wt.slice(e+1)),lu(Ko,mn),c}finally{me=t,Ea=!1}}return null}var xr=[],Sr=0,Ss=null,Es=0,gt=[],yt=0,Bn=null,qt=1,Kt="";function $n(e,t){xr[Sr++]=Es,xr[Sr++]=Ss,Ss=e,Es=t}function a1(e,t,s){gt[yt++]=qt,gt[yt++]=Kt,gt[yt++]=Bn,Bn=e;var a=qt;e=Kt;var c=32-Et(a)-1;a&=~(1<<c),s+=1;var d=32-Et(t)+c;if(30<d){var p=c-c%5;d=(a&(1<<p)-1).toString(32),a>>=p,c-=p,qt=1<<32-Et(t)+c|s<<c|a,Kt=d+e}else qt=1<<d|s<<c|a,Kt=e}function Ia(e){e.return!==null&&($n(e,1),a1(e,1,0))}function ba(e){for(;e===Ss;)Ss=xr[--Sr],xr[Sr]=null,Es=xr[--Sr],xr[Sr]=null;for(;e===Bn;)Bn=gt[--yt],gt[yt]=null,Kt=gt[--yt],gt[yt]=null,qt=gt[--yt],gt[yt]=null}var ut=null,dt=null,Se=!1,bt=null;function l1(e,t){var s=kt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function c1(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Bn!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=kt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,ut=e,dt=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(Se){var t=dt;if(t){var s=t;if(!c1(e,t)){if(Ta(e))throw Error(i(418));t=fn(s.nextSibling);var a=ut;t&&c1(e,t)?l1(a,s):(e.flags=e.flags&-4097|2,Se=!1,ut=e)}}else{if(Ta(e))throw Error(i(418));e.flags=e.flags&-4097|2,Se=!1,ut=e}}}function u1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Is(e){if(e!==ut)return!1;if(!Se)return u1(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=dt)){if(Ta(e))throw d1(),Error(i(418));for(;t;)l1(e,t),t=fn(t.nextSibling)}if(u1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){dt=fn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?fn(e.stateNode.nextSibling):null;return!0}function d1(){for(var e=dt;e;)e=fn(e.nextSibling)}function Er(){dt=ut=null,Se=!1}function Na(e){bt===null?bt=[e]:bt.push(e)}var Rp=se.ReactCurrentBatchConfig;function mi(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var a=s.stateNode}if(!a)throw Error(i(147,e));var c=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(p){var w=c.refs;p===null?delete w[d]:w[d]=p},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function bs(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function f1(e){var t=e._init;return t(e._payload)}function h1(e){function t(I,k){if(e){var b=I.deletions;b===null?(I.deletions=[k],I.flags|=16):b.push(k)}}function s(I,k){if(!e)return null;for(;k!==null;)t(I,k),k=k.sibling;return null}function a(I,k){for(I=new Map;k!==null;)k.key!==null?I.set(k.key,k):I.set(k.index,k),k=k.sibling;return I}function c(I,k){return I=xn(I,k),I.index=0,I.sibling=null,I}function d(I,k,b){return I.index=b,e?(b=I.alternate,b!==null?(b=b.index,b<k?(I.flags|=2,k):b):(I.flags|=2,k)):(I.flags|=1048576,k)}function p(I){return e&&I.alternate===null&&(I.flags|=2),I}function w(I,k,b,z){return k===null||k.tag!==6?(k=kl(b,I.mode,z),k.return=I,k):(k=c(k,b),k.return=I,k)}function C(I,k,b,z){var G=b.type;return G===Q?j(I,k,b.props.children,z,b.key):k!==null&&(k.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Xe&&f1(G)===k.type)?(z=c(k,b.props),z.ref=mi(I,k,b),z.return=I,z):(z=Ys(b.type,b.key,b.props,null,I.mode,z),z.ref=mi(I,k,b),z.return=I,z)}function T(I,k,b,z){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=_l(b,I.mode,z),k.return=I,k):(k=c(k,b.children||[]),k.return=I,k)}function j(I,k,b,z,G){return k===null||k.tag!==7?(k=Zn(b,I.mode,z,G),k.return=I,k):(k=c(k,b),k.return=I,k)}function D(I,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=kl(""+k,I.mode,b),k.return=I,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return b=Ys(k.type,k.key,k.props,null,I.mode,b),b.ref=mi(I,null,k),b.return=I,b;case J:return k=_l(k,I.mode,b),k.return=I,k;case Xe:var z=k._init;return D(I,z(k._payload),b)}if($r(k)||ne(k))return k=Zn(k,I.mode,b,null),k.return=I,k;bs(I,k)}return null}function O(I,k,b,z){var G=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return G!==null?null:w(I,k,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===G?C(I,k,b,z):null;case J:return b.key===G?T(I,k,b,z):null;case Xe:return G=b._init,O(I,k,G(b._payload),z)}if($r(b)||ne(b))return G!==null?null:j(I,k,b,z,null);bs(I,b)}return null}function V(I,k,b,z,G){if(typeof z=="string"&&z!==""||typeof z=="number")return I=I.get(b)||null,w(k,I,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return I=I.get(z.key===null?b:z.key)||null,C(k,I,z,G);case J:return I=I.get(z.key===null?b:z.key)||null,T(k,I,z,G);case Xe:var Z=z._init;return V(I,k,b,Z(z._payload),G)}if($r(z)||ne(z))return I=I.get(b)||null,j(k,I,z,G,null);bs(k,z)}return null}function W(I,k,b,z){for(var G=null,Z=null,X=k,ie=k=0,Ve=null;X!==null&&ie<b.length;ie++){X.index>ie?(Ve=X,X=null):Ve=X.sibling;var he=O(I,X,b[ie],z);if(he===null){X===null&&(X=Ve);break}e&&X&&he.alternate===null&&t(I,X),k=d(he,k,ie),Z===null?G=he:Z.sibling=he,Z=he,X=Ve}if(ie===b.length)return s(I,X),Se&&$n(I,ie),G;if(X===null){for(;ie<b.length;ie++)X=D(I,b[ie],z),X!==null&&(k=d(X,k,ie),Z===null?G=X:Z.sibling=X,Z=X);return Se&&$n(I,ie),G}for(X=a(I,X);ie<b.length;ie++)Ve=V(X,I,ie,b[ie],z),Ve!==null&&(e&&Ve.alternate!==null&&X.delete(Ve.key===null?ie:Ve.key),k=d(Ve,k,ie),Z===null?G=Ve:Z.sibling=Ve,Z=Ve);return e&&X.forEach(function(Sn){return t(I,Sn)}),Se&&$n(I,ie),G}function K(I,k,b,z){var G=ne(b);if(typeof G!="function")throw Error(i(150));if(b=G.call(b),b==null)throw Error(i(151));for(var Z=G=null,X=k,ie=k=0,Ve=null,he=b.next();X!==null&&!he.done;ie++,he=b.next()){X.index>ie?(Ve=X,X=null):Ve=X.sibling;var Sn=O(I,X,he.value,z);if(Sn===null){X===null&&(X=Ve);break}e&&X&&Sn.alternate===null&&t(I,X),k=d(Sn,k,ie),Z===null?G=Sn:Z.sibling=Sn,Z=Sn,X=Ve}if(he.done)return s(I,X),Se&&$n(I,ie),G;if(X===null){for(;!he.done;ie++,he=b.next())he=D(I,he.value,z),he!==null&&(k=d(he,k,ie),Z===null?G=he:Z.sibling=he,Z=he);return Se&&$n(I,ie),G}for(X=a(I,X);!he.done;ie++,he=b.next())he=V(X,I,ie,he.value,z),he!==null&&(e&&he.alternate!==null&&X.delete(he.key===null?ie:he.key),k=d(he,k,ie),Z===null?G=he:Z.sibling=he,Z=he);return e&&X.forEach(function(d4){return t(I,d4)}),Se&&$n(I,ie),G}function Le(I,k,b,z){if(typeof b=="object"&&b!==null&&b.type===Q&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case U:e:{for(var G=b.key,Z=k;Z!==null;){if(Z.key===G){if(G=b.type,G===Q){if(Z.tag===7){s(I,Z.sibling),k=c(Z,b.props.children),k.return=I,I=k;break e}}else if(Z.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Xe&&f1(G)===Z.type){s(I,Z.sibling),k=c(Z,b.props),k.ref=mi(I,Z,b),k.return=I,I=k;break e}s(I,Z);break}else t(I,Z);Z=Z.sibling}b.type===Q?(k=Zn(b.props.children,I.mode,z,b.key),k.return=I,I=k):(z=Ys(b.type,b.key,b.props,null,I.mode,z),z.ref=mi(I,k,b),z.return=I,I=z)}return p(I);case J:e:{for(Z=b.key;k!==null;){if(k.key===Z)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){s(I,k.sibling),k=c(k,b.children||[]),k.return=I,I=k;break e}else{s(I,k);break}else t(I,k);k=k.sibling}k=_l(b,I.mode,z),k.return=I,I=k}return p(I);case Xe:return Z=b._init,Le(I,k,Z(b._payload),z)}if($r(b))return W(I,k,b,z);if(ne(b))return K(I,k,b,z);bs(I,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(s(I,k.sibling),k=c(k,b),k.return=I,I=k):(s(I,k),k=kl(b,I.mode,z),k.return=I,I=k),p(I)):s(I,k)}return Le}var Ir=h1(!0),p1=h1(!1),Ts=hn(null),Ps=null,br=null,Aa=null;function Ra(){Aa=br=Ps=null}function La(e){var t=Ts.current;_e(Ts),e._currentValue=t}function Oa(e,t,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;e=e.return}}function Tr(e,t){Ps=e,Aa=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(Ps===null)throw Error(i(308));br=e,Ps.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Wn=null;function Ma(e){Wn===null?Wn=[e]:Wn.push(e)}function m1(e,t,s,a){var c=t.interleaved;return c===null?(s.next=s,Ma(t)):(s.next=c.next,c.next=s),t.interleaved=s,Gt(e,a)}function Gt(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var gn=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Gt(e,s)}return c=a.interleaved,c===null?(t.next=t,Ma(a)):(t.next=c.next,c.next=t),a.interleaved=t,Gt(e,s)}function Ns(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Qo(e,s)}}function y1(e,t){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var p={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};d===null?c=d=p:d=d.next=p,s=s.next}while(s!==null);d===null?c=d=t:d=d.next=t}else c=d=t;s={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function As(e,t,s,a){var c=e.updateQueue;gn=!1;var d=c.firstBaseUpdate,p=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var C=w,T=C.next;C.next=null,p===null?d=T:p.next=T,p=C;var j=e.alternate;j!==null&&(j=j.updateQueue,w=j.lastBaseUpdate,w!==p&&(w===null?j.firstBaseUpdate=T:w.next=T,j.lastBaseUpdate=C))}if(d!==null){var D=c.baseState;p=0,j=T=C=null,w=d;do{var O=w.lane,V=w.eventTime;if((a&O)===O){j!==null&&(j=j.next={eventTime:V,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var W=e,K=w;switch(O=t,V=s,K.tag){case 1:if(W=K.payload,typeof W=="function"){D=W.call(V,D,O);break e}D=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=K.payload,O=typeof W=="function"?W.call(V,D,O):W,O==null)break e;D=B({},D,O);break e;case 2:gn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,O=c.effects,O===null?c.effects=[w]:O.push(w))}else V={eventTime:V,lane:O,tag:w.tag,payload:w.payload,callback:w.callback,next:null},j===null?(T=j=V,C=D):j=j.next=V,p|=O;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;O=w,w=O.next,O.next=null,c.lastBaseUpdate=O,c.shared.pending=null}}while(!0);if(j===null&&(C=D),c.baseState=C,c.firstBaseUpdate=T,c.lastBaseUpdate=j,t=c.shared.interleaved,t!==null){c=t;do p|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);Gn|=p,e.lanes=p,e.memoizedState=D}}function v1(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=s,typeof c!="function")throw Error(i(191,c));c.call(a)}}}var gi={},Dt=hn(gi),yi=hn(gi),vi=hn(gi);function qn(e){if(e===gi)throw Error(i(174));return e}function Da(e,t){switch(ve(vi,t),ve(yi,e),ve(Dt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uo(t,e)}_e(Dt),ve(Dt,t)}function Pr(){_e(Dt),_e(yi),_e(vi)}function w1(e){qn(vi.current);var t=qn(Dt.current),s=Uo(t,e.type);t!==s&&(ve(yi,e),ve(Dt,s))}function Ua(e){yi.current===e&&(_e(Dt),_e(yi))}var Ie=hn(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function Fa(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var Ls=se.ReactCurrentDispatcher,Va=se.ReactCurrentBatchConfig,Kn=0,be=null,je=null,ze=null,Os=!1,wi=!1,Ci=0,Lp=0;function qe(){throw Error(i(321))}function Ha(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!It(e[s],t[s]))return!1;return!0}function Ba(e,t,s,a,c,d){if(Kn=d,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ls.current=e===null||e.memoizedState===null?Dp:Up,e=s(a,c),wi){d=0;do{if(wi=!1,Ci=0,25<=d)throw Error(i(301));d+=1,ze=je=null,t.updateQueue=null,Ls.current=zp,e=s(a,c)}while(wi)}if(Ls.current=Ds,t=je!==null&&je.next!==null,Kn=0,ze=je=be=null,Os=!1,t)throw Error(i(300));return e}function $a(){var e=Ci!==0;return Ci=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?be.memoizedState=ze=e:ze=ze.next=e,ze}function wt(){if(je===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=ze===null?be.memoizedState:ze.next;if(t!==null)ze=t,je=e;else{if(e===null)throw Error(i(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ze===null?be.memoizedState=ze=e:ze=ze.next=e}return ze}function ki(e,t){return typeof t=="function"?t(e):t}function Wa(e){var t=wt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=je,c=a.baseQueue,d=s.pending;if(d!==null){if(c!==null){var p=c.next;c.next=d.next,d.next=p}a.baseQueue=c=d,s.pending=null}if(c!==null){d=c.next,a=a.baseState;var w=p=null,C=null,T=d;do{var j=T.lane;if((Kn&j)===j)C!==null&&(C=C.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:e(a,T.action);else{var D={lane:j,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};C===null?(w=C=D,p=a):C=C.next=D,be.lanes|=j,Gn|=j}T=T.next}while(T!==null&&T!==d);C===null?p=a:C.next=w,It(a,t.memoizedState)||(nt=!0),t.memoizedState=a,t.baseState=p,t.baseQueue=C,s.lastRenderedState=a}if(e=s.interleaved,e!==null){c=e;do d=c.lane,be.lanes|=d,Gn|=d,c=c.next;while(c!==e)}else c===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function qa(e){var t=wt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=s.dispatch,c=s.pending,d=t.memoizedState;if(c!==null){s.pending=null;var p=c=c.next;do d=e(d,p.action),p=p.next;while(p!==c);It(d,t.memoizedState)||(nt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),s.lastRenderedState=d}return[d,a]}function C1(){}function k1(e,t){var s=be,a=wt(),c=t(),d=!It(a.memoizedState,c);if(d&&(a.memoizedState=c,nt=!0),a=a.queue,Ka(S1.bind(null,s,a,e),[e]),a.getSnapshot!==t||d||ze!==null&&ze.memoizedState.tag&1){if(s.flags|=2048,_i(9,x1.bind(null,s,a,c,t),void 0,null),Fe===null)throw Error(i(349));(Kn&30)!==0||_1(s,t,c)}return c}function _1(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function x1(e,t,s,a){t.value=s,t.getSnapshot=a,E1(t)&&I1(e)}function S1(e,t,s){return s(function(){E1(t)&&I1(e)})}function E1(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!It(e,s)}catch{return!0}}function I1(e){var t=Gt(e,1);t!==null&&At(t,e,1,-1)}function b1(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,be,e),[t.memoizedState,e]}function _i(e,t,s,a){return e={tag:e,create:t,destroy:s,deps:a,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e)),e}function T1(){return wt().memoizedState}function Ms(e,t,s,a){var c=Ut();be.flags|=e,c.memoizedState=_i(1|t,s,void 0,a===void 0?null:a)}function js(e,t,s,a){var c=wt();a=a===void 0?null:a;var d=void 0;if(je!==null){var p=je.memoizedState;if(d=p.destroy,a!==null&&Ha(a,p.deps)){c.memoizedState=_i(t,s,d,a);return}}be.flags|=e,c.memoizedState=_i(1|t,s,d,a)}function P1(e,t){return Ms(8390656,8,e,t)}function Ka(e,t){return js(2048,8,e,t)}function N1(e,t){return js(4,2,e,t)}function A1(e,t){return js(4,4,e,t)}function R1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L1(e,t,s){return s=s!=null?s.concat([e]):null,js(4,4,R1.bind(null,t,e),s)}function Ga(){}function O1(e,t){var s=wt();t=t===void 0?null:t;var a=s.memoizedState;return a!==null&&t!==null&&Ha(t,a[1])?a[0]:(s.memoizedState=[e,t],e)}function M1(e,t){var s=wt();t=t===void 0?null:t;var a=s.memoizedState;return a!==null&&t!==null&&Ha(t,a[1])?a[0]:(e=e(),s.memoizedState=[e,t],e)}function j1(e,t,s){return(Kn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=s):(It(s,t)||(s=fu(),be.lanes|=s,Gn|=s,e.baseState=!0),t)}function Op(e,t){var s=me;me=s!==0&&4>s?s:4,e(!0);var a=Va.transition;Va.transition={};try{e(!1),t()}finally{me=s,Va.transition=a}}function D1(){return wt().memoizedState}function Mp(e,t,s){var a=kn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},U1(e))z1(t,s);else if(s=m1(e,t,s,a),s!==null){var c=Qe();At(s,e,a,c),F1(s,t,a)}}function jp(e,t,s){var a=kn(e),c={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(U1(e))z1(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var p=t.lastRenderedState,w=d(p,s);if(c.hasEagerState=!0,c.eagerState=w,It(w,p)){var C=t.interleaved;C===null?(c.next=c,Ma(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}s=m1(e,t,c,a),s!==null&&(c=Qe(),At(s,e,a,c),F1(s,t,a))}}function U1(e){var t=e.alternate;return e===be||t!==null&&t===be}function z1(e,t){wi=Os=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function F1(e,t,s){if((s&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Qo(e,s)}}var Ds={readContext:vt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Dp={readContext:vt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:P1,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Ms(4194308,4,R1.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var s=Ut();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var a=Ut();return t=s!==void 0?s(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Mp.bind(null,be,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:b1,useDebugValue:Ga,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=b1(!1),t=e[0];return e=Op.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var a=be,c=Ut();if(Se){if(s===void 0)throw Error(i(407));s=s()}else{if(s=t(),Fe===null)throw Error(i(349));(Kn&30)!==0||_1(a,t,s)}c.memoizedState=s;var d={value:s,getSnapshot:t};return c.queue=d,P1(S1.bind(null,a,d,e),[e]),a.flags|=2048,_i(9,x1.bind(null,a,d,s,t),void 0,null),s},useId:function(){var e=Ut(),t=Fe.identifierPrefix;if(Se){var s=Kt,a=qt;s=(a&~(1<<32-Et(a)-1)).toString(32)+s,t=":"+t+"R"+s,s=Ci++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Lp++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Up={readContext:vt,useCallback:O1,useContext:vt,useEffect:Ka,useImperativeHandle:L1,useInsertionEffect:N1,useLayoutEffect:A1,useMemo:M1,useReducer:Wa,useRef:T1,useState:function(){return Wa(ki)},useDebugValue:Ga,useDeferredValue:function(e){var t=wt();return j1(t,je.memoizedState,e)},useTransition:function(){var e=Wa(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:C1,useSyncExternalStore:k1,useId:D1,unstable_isNewReconciler:!1},zp={readContext:vt,useCallback:O1,useContext:vt,useEffect:Ka,useImperativeHandle:L1,useInsertionEffect:N1,useLayoutEffect:A1,useMemo:M1,useReducer:qa,useRef:T1,useState:function(){return qa(ki)},useDebugValue:Ga,useDeferredValue:function(e){var t=wt();return je===null?t.memoizedState=e:j1(t,je.memoizedState,e)},useTransition:function(){var e=qa(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:C1,useSyncExternalStore:k1,useId:D1,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Ja(e,t,s,a){t=e.memoizedState,s=s(a,t),s=s==null?t:B({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Us={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var a=Qe(),c=kn(e),d=Jt(a,c);d.payload=t,s!=null&&(d.callback=s),t=yn(e,d,c),t!==null&&(At(t,e,c,a),Ns(t,e,c))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var a=Qe(),c=kn(e),d=Jt(a,c);d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=yn(e,d,c),t!==null&&(At(t,e,c,a),Ns(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Qe(),a=kn(e),c=Jt(s,a);c.tag=2,t!=null&&(c.callback=t),t=yn(e,c,a),t!==null&&(At(t,e,a,s),Ns(t,e,a))}};function V1(e,t,s,a,c,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,p):t.prototype&&t.prototype.isPureReactComponent?!li(s,a)||!li(c,d):!0}function H1(e,t,s){var a=!1,c=pn,d=t.contextType;return typeof d=="object"&&d!==null?d=vt(d):(c=tt(t)?Hn:We.current,a=t.contextTypes,d=(a=a!=null)?_r(e,c):pn),t=new t(s,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function B1(e,t,s,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Qa(e,t,s,a){var c=e.stateNode;c.props=s,c.state=e.memoizedState,c.refs={},ja(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=vt(d):(d=tt(t)?Hn:We.current,c.context=_r(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ja(e,t,d,s),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Us.enqueueReplaceState(c,c.state,null),As(e,s,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var s="",a=t;do s+=de(a),a=a.return;while(a);var c=s}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function Ya(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Fp=typeof WeakMap=="function"?WeakMap:Map;function $1(e,t,s){s=Jt(-1,s),s.tag=3,s.payload={element:null};var a=t.value;return s.callback=function(){Ws||(Ws=!0,hl=a),Za(e,t)},s}function W1(e,t,s){s=Jt(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;s.payload=function(){return a(c)},s.callback=function(){Za(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(s.callback=function(){Za(e,t),typeof a!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),s}function q1(e,t,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Fp;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(s)||(c.add(s),e=e4.bind(null,e,t,s),t.then(e,e))}function K1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function G1(e,t,s,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Jt(-1,1),t.tag=2,yn(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Vp=se.ReactCurrentOwner,nt=!1;function Je(e,t,s,a){t.child=e===null?p1(t,null,s,a):Ir(t,e.child,s,a)}function J1(e,t,s,a,c){s=s.render;var d=t.ref;return Tr(t,c),a=Ba(e,t,s,a,d,c),s=$a(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qt(e,t,c)):(Se&&s&&Ia(t),t.flags|=1,Je(e,t,a,c),t.child)}function Q1(e,t,s,a,c){if(e===null){var d=s.type;return typeof d=="function"&&!Cl(d)&&d.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=d,Y1(e,t,d,a,c)):(e=Ys(s.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var p=d.memoizedProps;if(s=s.compare,s=s!==null?s:li,s(p,a)&&e.ref===t.ref)return Qt(e,t,c)}return t.flags|=1,e=xn(d,a),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,s,a,c){if(e!==null){var d=e.memoizedProps;if(li(d,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Qt(e,t,c)}return Xa(e,t,s,a,c)}function Z1(e,t,s){var a=t.pendingProps,c=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Rr,ft),ft|=s;else{if((s&1073741824)===0)return e=d!==null?d.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Rr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:s,ve(Rr,ft),ft|=a}else d!==null?(a=d.baseLanes|s,t.memoizedState=null):a=s,ve(Rr,ft),ft|=a;return Je(e,t,c,s),t.child}function X1(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Xa(e,t,s,a,c){var d=tt(s)?Hn:We.current;return d=_r(t,d),Tr(t,c),s=Ba(e,t,s,a,d,c),a=$a(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qt(e,t,c)):(Se&&a&&Ia(t),t.flags|=1,Je(e,t,s,c),t.child)}function ed(e,t,s,a,c){if(tt(s)){var d=!0;_s(t)}else d=!1;if(Tr(t,c),t.stateNode===null)Fs(e,t),H1(t,s,a),Qa(t,s,a,c),a=!0;else if(e===null){var p=t.stateNode,w=t.memoizedProps;p.props=w;var C=p.context,T=s.contextType;typeof T=="object"&&T!==null?T=vt(T):(T=tt(s)?Hn:We.current,T=_r(t,T));var j=s.getDerivedStateFromProps,D=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function";D||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==a||C!==T)&&B1(t,p,a,T),gn=!1;var O=t.memoizedState;p.state=O,As(t,a,p,c),C=t.memoizedState,w!==a||O!==C||et.current||gn?(typeof j=="function"&&(Ja(t,s,j,a),C=t.memoizedState),(w=gn||V1(t,s,w,a,O,C,T))?(D||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),p.props=a,p.state=C,p.context=T,a=w):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{p=t.stateNode,g1(e,t),w=t.memoizedProps,T=t.type===t.elementType?w:Tt(t.type,w),p.props=T,D=t.pendingProps,O=p.context,C=s.contextType,typeof C=="object"&&C!==null?C=vt(C):(C=tt(s)?Hn:We.current,C=_r(t,C));var V=s.getDerivedStateFromProps;(j=typeof V=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==D||O!==C)&&B1(t,p,a,C),gn=!1,O=t.memoizedState,p.state=O,As(t,a,p,c);var W=t.memoizedState;w!==D||O!==W||et.current||gn?(typeof V=="function"&&(Ja(t,s,V,a),W=t.memoizedState),(T=gn||V1(t,s,T,a,O,W,C)||!1)?(j||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,W,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,W,C)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=W),p.props=a,p.state=W,p.context=C,a=T):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return el(e,t,s,a,d,c)}function el(e,t,s,a,c,d){X1(e,t);var p=(t.flags&128)!==0;if(!a&&!p)return c&&s1(t,s,!1),Qt(e,t,d);a=t.stateNode,Vp.current=t;var w=p&&typeof s.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&p?(t.child=Ir(t,e.child,null,d),t.child=Ir(t,null,w,d)):Je(e,t,w,d),t.memoizedState=a.state,c&&s1(t,s,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?r1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&r1(e,t.context,!1),Da(e,t.containerInfo)}function nd(e,t,s,a,c){return Er(),Na(c),t.flags|=256,Je(e,t,s,a),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,s){var a=t.pendingProps,c=Ie.current,d=!1,p=(t.flags&128)!==0,w;if((w=p)||(w=e!==null&&e.memoizedState===null?!1:(c&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ve(Ie,c&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=a.children,e=a.fallback,d?(a=t.mode,d=t.child,p={mode:"hidden",children:p},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=Zs(p,a,0,null),e=Zn(e,a,s,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=nl(s),t.memoizedState=tl,e):rl(t,p));if(c=e.memoizedState,c!==null&&(w=c.dehydrated,w!==null))return Hp(e,t,p,a,w,c,s);if(d){d=a.fallback,p=t.mode,c=e.child,w=c.sibling;var C={mode:"hidden",children:a.children};return(p&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=C,t.deletions=null):(a=xn(c,C),a.subtreeFlags=c.subtreeFlags&14680064),w!==null?d=xn(w,d):(d=Zn(d,p,s,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,p=e.child.memoizedState,p=p===null?nl(s):{baseLanes:p.baseLanes|s,cachePool:null,transitions:p.transitions},d.memoizedState=p,d.childLanes=e.childLanes&~s,t.memoizedState=tl,a}return d=e.child,e=d.sibling,a=xn(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=s),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a}function rl(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,s,a){return a!==null&&Na(a),Ir(t,e.child,null,s),e=rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,s,a,c,d,p){if(s)return t.flags&256?(t.flags&=-257,a=Ya(Error(i(422))),zs(e,t,p,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,c=t.mode,a=Zs({mode:"visible",children:a.children},c,0,null),d=Zn(d,c,p,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&Ir(t,e.child,null,p),t.child.memoizedState=nl(p),t.memoizedState=tl,d);if((t.mode&1)===0)return zs(e,t,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var w=a.dgst;return a=w,d=Error(i(419)),a=Ya(d,a,void 0),zs(e,t,p,a)}if(w=(p&e.childLanes)!==0,nt||w){if(a=Fe,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,Gt(e,c),At(a,e,c,-1))}return wl(),a=Ya(Error(i(421))),zs(e,t,p,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=t4.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,dt=fn(c.nextSibling),ut=t,Se=!0,bt=null,e!==null&&(gt[yt++]=qt,gt[yt++]=Kt,gt[yt++]=Bn,qt=e.id,Kt=e.overflow,Bn=t),t=rl(t,a.children),t.flags|=4096,t)}function id(e,t,s){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Oa(e.return,t,s)}function il(e,t,s,a,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=s,d.tailMode=c)}function sd(e,t,s){var a=t.pendingProps,c=a.revealOrder,d=a.tail;if(Je(e,t,a.children,s),a=Ie.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,s,t);else if(e.tag===19)id(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ve(Ie,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(s=t.child,c=null;s!==null;)e=s.alternate,e!==null&&Rs(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=t.child,t.child=null):(c=s.sibling,s.sibling=null),il(t,!1,c,s,d);break;case"backwards":for(s=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Rs(e)===null){t.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}il(t,!0,s,null,d);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,s=xn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=xn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Bp(e,t,s){switch(t.tag){case 3:td(t),Er();break;case 5:w1(t);break;case 1:tt(t.type)&&_s(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ve(Ts,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ve(Ie,Ie.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?rd(e,t,s):(ve(Ie,Ie.current&1),e=Qt(e,t,s),e!==null?e.sibling:null);ve(Ie,Ie.current&1);break;case 19:if(a=(s&t.childLanes)!==0,(e.flags&128)!==0){if(a)return sd(e,t,s);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(Ie,Ie.current),a)break;return null;case 22:case 23:return t.lanes=0,Z1(e,t,s)}return Qt(e,t,s)}var od,sl,ad,ld;od=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},sl=function(){},ad=function(e,t,s,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,qn(Dt.current);var d=null;switch(s){case"input":c=Oo(e,c),a=Oo(e,a),d=[];break;case"select":c=B({},c,{value:void 0}),a=B({},a,{value:void 0}),d=[];break;case"textarea":c=Do(e,c),a=Do(e,a),d=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ws)}zo(s,a);var p;s=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var w=c[T];for(p in w)w.hasOwnProperty(p)&&(s||(s={}),s[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?d||(d=[]):(d=d||[]).push(T,null));for(T in a){var C=a[T];if(w=c?.[T],a.hasOwnProperty(T)&&C!==w&&(C!=null||w!=null))if(T==="style")if(w){for(p in w)!w.hasOwnProperty(p)||C&&C.hasOwnProperty(p)||(s||(s={}),s[p]="");for(p in C)C.hasOwnProperty(p)&&w[p]!==C[p]&&(s||(s={}),s[p]=C[p])}else s||(d||(d=[]),d.push(T,s)),s=C;else T==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(d=d||[]).push(T,C)):T==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(T,""+C):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(C!=null&&T==="onScroll"&&ke("scroll",e),d||w===C||(d=[])):(d=d||[]).push(T,C))}s&&(d=d||[]).push("style",s);var T=d;(t.updateQueue=T)&&(t.flags|=4)}},ld=function(e,t,s,a){s!==a&&(t.flags|=4)};function xi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(t)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=s,t}function $p(e,t,s){var a=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return tt(t.type)&&ks(),Ke(t),null;case 3:return a=t.stateNode,Pr(),_e(et),_e(We),Fa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(gl(bt),bt=null))),sl(e,t),Ke(t),null;case 5:Ua(t);var c=qn(vi.current);if(s=t.type,e!==null&&t.stateNode!=null)ad(e,t,s,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}if(e=qn(Dt.current),Is(t)){a=t.stateNode,s=t.type;var d=t.memoizedProps;switch(a[jt]=t,a[hi]=d,e=(t.mode&1)!==0,s){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(c=0;c<ui.length;c++)ke(ui[c],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":Hc(a,d),ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},ke("invalid",a);break;case"textarea":Wc(a,d),ke("invalid",a)}zo(s,d),c=null;for(var p in d)if(d.hasOwnProperty(p)){var w=d[p];p==="children"?typeof w=="string"?a.textContent!==w&&(d.suppressHydrationWarning!==!0&&vs(a.textContent,w,e),c=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&vs(a.textContent,w,e),c=["children",""+w]):l.hasOwnProperty(p)&&w!=null&&p==="onScroll"&&ke("scroll",a)}switch(s){case"input":Ji(a),$c(a,d,!0);break;case"textarea":Ji(a),Kc(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=ws)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=p.createElement(s,{is:a.is}):(e=p.createElement(s),s==="select"&&(p=e,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):e=p.createElementNS(e,s),e[jt]=t,e[hi]=a,od(e,t,!1,!1),t.stateNode=e;e:{switch(p=Fo(s,a),s){case"dialog":ke("cancel",e),ke("close",e),c=a;break;case"iframe":case"object":case"embed":ke("load",e),c=a;break;case"video":case"audio":for(c=0;c<ui.length;c++)ke(ui[c],e);c=a;break;case"source":ke("error",e),c=a;break;case"img":case"image":case"link":ke("error",e),ke("load",e),c=a;break;case"details":ke("toggle",e),c=a;break;case"input":Hc(e,a),c=Oo(e,a),ke("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=B({},a,{value:void 0}),ke("invalid",e);break;case"textarea":Wc(e,a),c=Do(e,a),ke("invalid",e);break;default:c=a}zo(s,c),w=c;for(d in w)if(w.hasOwnProperty(d)){var C=w[d];d==="style"?Yc(e,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Jc(e,C)):d==="children"?typeof C=="string"?(s!=="textarea"||C!=="")&&Wr(e,C):typeof C=="number"&&Wr(e,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?C!=null&&d==="onScroll"&&ke("scroll",e):C!=null&&Y(e,d,C,p))}switch(s){case"input":Ji(e),$c(e,a,!1);break;case"textarea":Ji(e),Kc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?ur(e,!!a.multiple,d,!1):a.defaultValue!=null&&ur(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=ws)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)ld(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(s=qn(vi.current),qn(Dt.current),Is(t)){if(a=t.stateNode,s=t.memoizedProps,a[jt]=t,(d=a.nodeValue!==s)&&(e=ut,e!==null))switch(e.tag){case 3:vs(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(a.nodeValue,s,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[jt]=t,t.stateNode=a}return Ke(t),null;case 13:if(_e(Ie),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)d1(),Er(),t.flags|=98560,d=!1;else if(d=Is(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[jt]=t}else Er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),d=!1}else bt!==null&&(gl(bt),bt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?De===0&&(De=3):wl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Pr(),sl(e,t),e===null&&di(t.stateNode.containerInfo),Ke(t),null;case 10:return La(t.type._context),Ke(t),null;case 17:return tt(t.type)&&ks(),Ke(t),null;case 19:if(_e(Ie),d=t.memoizedState,d===null)return Ke(t),null;if(a=(t.flags&128)!==0,p=d.rendering,p===null)if(a)xi(d,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=Rs(e),p!==null){for(t.flags|=128,xi(d,!1),a=p.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=s,s=t.child;s!==null;)d=s,e=a,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return ve(Ie,Ie.current&1|2),t.child}e=e.sibling}d.tail!==null&&Re()>Lr&&(t.flags|=128,a=!0,xi(d,!1),t.lanes=4194304)}else{if(!a)if(e=Rs(p),e!==null){if(t.flags|=128,a=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),xi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Se)return Ke(t),null}else 2*Re()-d.renderingStartTime>Lr&&s!==1073741824&&(t.flags|=128,a=!0,xi(d,!1),t.lanes=4194304);d.isBackwards?(p.sibling=t.child,t.child=p):(s=d.last,s!==null?s.sibling=p:t.child=p,d.last=p)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Re(),t.sibling=null,s=Ie.current,ve(Ie,a?s&1|2:s&1),t):(Ke(t),null);case 22:case 23:return vl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Wp(e,t){switch(ba(t),t.tag){case 1:return tt(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),_e(et),_e(We),Fa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ua(t),null;case 13:if(_e(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Ie),null;case 4:return Pr(),null;case 10:return La(t.type._context),null;case 22:case 23:return vl(),null;case 24:return null;default:return null}}var Vs=!1,Ge=!1,qp=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ar(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){Ne(e,t,a)}else s.current=null}function ol(e,t,s){try{s()}catch(a){Ne(e,t,a)}}var cd=!1;function Kp(e,t){if(va=as,e=Vu(),ua(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var c=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var p=0,w=-1,C=-1,T=0,j=0,D=e,O=null;t:for(;;){for(var V;D!==s||c!==0&&D.nodeType!==3||(w=p+c),D!==d||a!==0&&D.nodeType!==3||(C=p+a),D.nodeType===3&&(p+=D.nodeValue.length),(V=D.firstChild)!==null;)O=D,D=V;for(;;){if(D===e)break t;if(O===s&&++T===c&&(w=p),O===d&&++j===a&&(C=p),(V=D.nextSibling)!==null)break;D=O,O=D.parentNode}D=V}s=w===-1||C===-1?null:{start:w,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(wa={focusedElem:e,selectionRange:s},as=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var K=W.memoizedProps,Le=W.memoizedState,I=t.stateNode,k=I.getSnapshotBeforeUpdate(t.elementType===t.type?K:Tt(t.type,K),Le);I.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(z){Ne(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return W=cd,cd=!1,W}function Si(e,t,s){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&ol(t,s,d)}c=c.next}while(c!==a)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==t)}}function al(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[hi],delete t[xa],delete t[Pp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=ws));else if(a!==4&&(e=e.child,e!==null))for(ll(e,t,s),e=e.sibling;e!==null;)ll(e,t,s),e=e.sibling}function cl(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(cl(e,t,s),e=e.sibling;e!==null;)cl(e,t,s),e=e.sibling}var He=null,Pt=!1;function vn(e,t,s){for(s=s.child;s!==null;)hd(e,t,s),s=s.sibling}function hd(e,t,s){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ts,s)}catch{}switch(s.tag){case 5:Ge||Ar(s,t);case 6:var a=He,c=Pt;He=null,vn(e,t,s),He=a,Pt=c,He!==null&&(Pt?(e=He,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):He.removeChild(s.stateNode));break;case 18:He!==null&&(Pt?(e=He,s=s.stateNode,e.nodeType===8?_a(e.parentNode,s):e.nodeType===1&&_a(e,s),ni(e)):_a(He,s.stateNode));break;case 4:a=He,c=Pt,He=s.stateNode.containerInfo,Pt=!0,vn(e,t,s),He=a,Pt=c;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var d=c,p=d.destroy;d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&ol(s,t,p),c=c.next}while(c!==a)}vn(e,t,s);break;case 1:if(!Ge&&(Ar(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(w){Ne(s,t,w)}vn(e,t,s);break;case 21:vn(e,t,s);break;case 22:s.mode&1?(Ge=(a=Ge)||s.memoizedState!==null,vn(e,t,s),Ge=a):vn(e,t,s);break;default:vn(e,t,s)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new qp),t.forEach(function(a){var c=n4.bind(null,e,a);s.has(a)||(s.add(a),a.then(c,c))})}}function Nt(e,t){var s=t.deletions;if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];try{var d=e,p=t,w=p;e:for(;w!==null;){switch(w.tag){case 5:He=w.stateNode,Pt=!1;break e;case 3:He=w.stateNode.containerInfo,Pt=!0;break e;case 4:He=w.stateNode.containerInfo,Pt=!0;break e}w=w.return}if(He===null)throw Error(i(160));hd(d,p,c),He=null,Pt=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch(T){Ne(c,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),zt(e),a&4){try{Si(3,e,e.return),Hs(3,e)}catch(K){Ne(e,e.return,K)}try{Si(5,e,e.return)}catch(K){Ne(e,e.return,K)}}break;case 1:Nt(t,e),zt(e),a&512&&s!==null&&Ar(s,s.return);break;case 5:if(Nt(t,e),zt(e),a&512&&s!==null&&Ar(s,s.return),e.flags&32){var c=e.stateNode;try{Wr(c,"")}catch(K){Ne(e,e.return,K)}}if(a&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,p=s!==null?s.memoizedProps:d,w=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&Bc(c,d),Fo(w,p);var T=Fo(w,d);for(p=0;p<C.length;p+=2){var j=C[p],D=C[p+1];j==="style"?Yc(c,D):j==="dangerouslySetInnerHTML"?Jc(c,D):j==="children"?Wr(c,D):Y(c,j,D,T)}switch(w){case"input":Mo(c,d);break;case"textarea":qc(c,d);break;case"select":var O=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var V=d.value;V!=null?ur(c,!!d.multiple,V,!1):O!==!!d.multiple&&(d.defaultValue!=null?ur(c,!!d.multiple,d.defaultValue,!0):ur(c,!!d.multiple,d.multiple?[]:"",!1))}c[hi]=d}catch(K){Ne(e,e.return,K)}}break;case 6:if(Nt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(i(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(K){Ne(e,e.return,K)}}break;case 3:if(Nt(t,e),zt(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(K){Ne(e,e.return,K)}break;case 4:Nt(t,e),zt(e);break;case 13:Nt(t,e),zt(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(fl=Re())),a&4&&pd(e);break;case 22:if(j=s!==null&&s.memoizedState!==null,e.mode&1?(Ge=(T=Ge)||j,Nt(t,e),Ge=T):Nt(t,e),zt(e),a&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!j&&(e.mode&1)!==0)for(H=e,j=e.child;j!==null;){for(D=H=j;H!==null;){switch(O=H,V=O.child,O.tag){case 0:case 11:case 14:case 15:Si(4,O,O.return);break;case 1:Ar(O,O.return);var W=O.stateNode;if(typeof W.componentWillUnmount=="function"){a=O,s=O.return;try{t=a,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(K){Ne(a,s,K)}}break;case 5:Ar(O,O.return);break;case 22:if(O.memoizedState!==null){vd(D);continue}}V!==null?(V.return=O,H=V):vd(D)}j=j.sibling}e:for(j=null,D=e;;){if(D.tag===5){if(j===null){j=D;try{c=D.stateNode,T?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=D.stateNode,C=D.memoizedProps.style,p=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=Qc("display",p))}catch(K){Ne(e,e.return,K)}}}else if(D.tag===6){if(j===null)try{D.stateNode.nodeValue=T?"":D.memoizedProps}catch(K){Ne(e,e.return,K)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;j===D&&(j=null),D=D.return}j===D&&(j=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Nt(t,e),zt(e),a&4&&pd(e);break;case 21:break;default:Nt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(dd(s)){var a=s;break e}s=s.return}throw Error(i(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Wr(c,""),a.flags&=-33);var d=fd(e);cl(e,d,c);break;case 3:case 4:var p=a.stateNode.containerInfo,w=fd(e);ll(e,w,p);break;default:throw Error(i(161))}}catch(C){Ne(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gp(e,t,s){H=e,gd(e)}function gd(e,t,s){for(var a=(e.mode&1)!==0;H!==null;){var c=H,d=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Vs;if(!p){var w=c.alternate,C=w!==null&&w.memoizedState!==null||Ge;w=Vs;var T=Ge;if(Vs=p,(Ge=C)&&!T)for(H=c;H!==null;)p=H,C=p.child,p.tag===22&&p.memoizedState!==null?wd(c):C!==null?(C.return=p,H=C):wd(c);for(;d!==null;)H=d,gd(d),d=d.sibling;H=c,Vs=w,Ge=T}yd(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,H=d):yd(e)}}function yd(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Hs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ge)if(s===null)a.componentDidMount();else{var c=t.elementType===t.type?s.memoizedProps:Tt(t.type,s.memoizedProps);a.componentDidUpdate(c,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&v1(t,d,a);break;case 3:var p=t.updateQueue;if(p!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}v1(t,p,s)}break;case 5:var w=t.stateNode;if(s===null&&t.flags&4){s=w;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&s.focus();break;case"img":C.src&&(s.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var j=T.memoizedState;if(j!==null){var D=j.dehydrated;D!==null&&ni(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ge||t.flags&512&&al(t)}catch(O){Ne(t,t.return,O)}}if(t===e){H=null;break}if(s=t.sibling,s!==null){s.return=t.return,H=s;break}H=t.return}}function vd(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}function wd(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Hs(4,t)}catch(C){Ne(t,s,C)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(C){Ne(t,c,C)}}var d=t.return;try{al(t)}catch(C){Ne(t,d,C)}break;case 5:var p=t.return;try{al(t)}catch(C){Ne(t,p,C)}}}catch(C){Ne(t,t.return,C)}if(t===e){H=null;break}var w=t.sibling;if(w!==null){w.return=t.return,H=w;break}H=t.return}}var Jp=Math.ceil,Bs=se.ReactCurrentDispatcher,ul=se.ReactCurrentOwner,Ct=se.ReactCurrentBatchConfig,ue=0,Fe=null,Me=null,Be=0,ft=0,Rr=hn(0),De=0,Ei=null,Gn=0,$s=0,dl=0,Ii=null,rt=null,fl=0,Lr=1/0,Yt=null,Ws=!1,hl=null,wn=null,qs=!1,Cn=null,Ks=0,bi=0,pl=null,Gs=-1,Js=0;function Qe(){return(ue&6)!==0?Re():Gs!==-1?Gs:Gs=Re()}function kn(e){return(e.mode&1)===0?1:(ue&2)!==0&&Be!==0?Be&-Be:Rp.transition!==null?(Js===0&&(Js=fu()),Js):(e=me,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e)}function At(e,t,s,a){if(50<bi)throw bi=0,pl=null,Error(i(185));Yr(e,s,a),((ue&2)===0||e!==Fe)&&(e===Fe&&((ue&2)===0&&($s|=s),De===4&&_n(e,Be)),it(e,a),s===1&&ue===0&&(t.mode&1)===0&&(Lr=Re()+500,xs&&mn()))}function it(e,t){var s=e.callbackNode;Rh(e,t);var a=is(e,e===Fe?Be:0);if(a===0)s!==null&&cu(s),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(s!=null&&cu(s),t===1)e.tag===0?Ap(kd.bind(null,e)):o1(kd.bind(null,e)),bp(function(){(ue&6)===0&&mn()}),s=null;else{switch(hu(a)){case 1:s=Ko;break;case 4:s=uu;break;case 16:s=es;break;case 536870912:s=du;break;default:s=es}s=Pd(s,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Cd(e,t){if(Gs=-1,Js=0,(ue&6)!==0)throw Error(i(327));var s=e.callbackNode;if(Or()&&e.callbackNode!==s)return null;var a=is(e,e===Fe?Be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Qs(e,a);else{t=a;var c=ue;ue|=2;var d=xd();(Fe!==e||Be!==t)&&(Yt=null,Lr=Re()+500,Qn(e,t));do try{Zp();break}catch(w){_d(e,w)}while(!0);Ra(),Bs.current=d,ue=c,Me!==null?t=0:(Fe=null,Be=0,t=De)}if(t!==0){if(t===2&&(c=Go(e),c!==0&&(a=c,t=ml(e,c))),t===1)throw s=Ei,Qn(e,0),_n(e,a),it(e,Re()),s;if(t===6)_n(e,a);else{if(c=e.current.alternate,(a&30)===0&&!Qp(c)&&(t=Qs(e,a),t===2&&(d=Go(e),d!==0&&(a=d,t=ml(e,d))),t===1))throw s=Ei,Qn(e,0),_n(e,a),it(e,Re()),s;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Yn(e,rt,Yt);break;case 3:if(_n(e,a),(a&130023424)===a&&(t=fl+500-Re(),10<t)){if(is(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Qe(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=ka(Yn.bind(null,e,rt,Yt),t);break}Yn(e,rt,Yt);break;case 4:if(_n(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var p=31-Et(a);d=1<<p,p=t[p],p>c&&(c=p),a&=~d}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Jp(a/1960))-a,10<a){e.timeoutHandle=ka(Yn.bind(null,e,rt,Yt),a);break}Yn(e,rt,Yt);break;case 5:Yn(e,rt,Yt);break;default:throw Error(i(329))}}}return it(e,Re()),e.callbackNode===s?Cd.bind(null,e):null}function ml(e,t){var s=Ii;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=rt,rt=s,t!==null&&gl(t)),e}function gl(e){rt===null?rt=e:rt.push.apply(rt,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var c=s[a],d=c.getSnapshot;c=c.value;try{if(!It(d(),c))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~dl,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Et(t),a=1<<s;e[s]=-1,t&=~a}}function kd(e){if((ue&6)!==0)throw Error(i(327));Or();var t=is(e,0);if((t&1)===0)return it(e,Re()),null;var s=Qs(e,t);if(e.tag!==0&&s===2){var a=Go(e);a!==0&&(t=a,s=ml(e,a))}if(s===1)throw s=Ei,Qn(e,0),_n(e,t),it(e,Re()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,rt,Yt),it(e,Re()),null}function yl(e,t){var s=ue;ue|=1;try{return e(t)}finally{ue=s,ue===0&&(Lr=Re()+500,xs&&mn())}}function Jn(e){Cn!==null&&Cn.tag===0&&(ue&6)===0&&Or();var t=ue;ue|=1;var s=Ct.transition,a=me;try{if(Ct.transition=null,me=1,e)return e()}finally{me=a,Ct.transition=s,ue=t,(ue&6)===0&&mn()}}function vl(){ft=Rr.current,_e(Rr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Ip(s)),Me!==null)for(s=Me.return;s!==null;){var a=s;switch(ba(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ks();break;case 3:Pr(),_e(et),_e(We),Fa();break;case 5:Ua(a);break;case 4:Pr();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:La(a.type._context);break;case 22:case 23:vl()}s=s.return}if(Fe=e,Me=e=xn(e.current,null),Be=ft=t,De=0,Ei=null,dl=$s=Gn=0,rt=Ii=null,Wn!==null){for(t=0;t<Wn.length;t++)if(s=Wn[t],a=s.interleaved,a!==null){s.interleaved=null;var c=a.next,d=s.pending;if(d!==null){var p=d.next;d.next=c,a.next=p}s.pending=a}Wn=null}return e}function _d(e,t){do{var s=Me;try{if(Ra(),Ls.current=Ds,Os){for(var a=be.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Os=!1}if(Kn=0,ze=je=be=null,wi=!1,Ci=0,ul.current=null,s===null||s.return===null){De=1,Ei=t,Me=null;break}e:{var d=e,p=s.return,w=s,C=t;if(t=Be,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var T=C,j=w,D=j.tag;if((j.mode&1)===0&&(D===0||D===11||D===15)){var O=j.alternate;O?(j.updateQueue=O.updateQueue,j.memoizedState=O.memoizedState,j.lanes=O.lanes):(j.updateQueue=null,j.memoizedState=null)}var V=K1(p);if(V!==null){V.flags&=-257,G1(V,p,w,d,t),V.mode&1&&q1(d,T,t),t=V,C=T;var W=t.updateQueue;if(W===null){var K=new Set;K.add(C),t.updateQueue=K}else W.add(C);break e}else{if((t&1)===0){q1(d,T,t),wl();break e}C=Error(i(426))}}else if(Se&&w.mode&1){var Le=K1(p);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),G1(Le,p,w,d,t),Na(Nr(C,w));break e}}d=C=Nr(C,w),De!==4&&(De=2),Ii===null?Ii=[d]:Ii.push(d),d=p;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var I=$1(d,C,t);y1(d,I);break e;case 1:w=C;var k=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(wn===null||!wn.has(b)))){d.flags|=65536,t&=-t,d.lanes|=t;var z=W1(d,w,t);y1(d,z);break e}}d=d.return}while(d!==null)}Ed(s)}catch(G){t=G,Me===s&&s!==null&&(Me=s=s.return);continue}break}while(!0)}function xd(){var e=Bs.current;return Bs.current=Ds,e===null?Ds:e}function wl(){(De===0||De===3||De===2)&&(De=4),Fe===null||(Gn&268435455)===0&&($s&268435455)===0||_n(Fe,Be)}function Qs(e,t){var s=ue;ue|=2;var a=xd();(Fe!==e||Be!==t)&&(Yt=null,Qn(e,t));do try{Yp();break}catch(c){_d(e,c)}while(!0);if(Ra(),ue=s,Bs.current=a,Me!==null)throw Error(i(261));return Fe=null,Be=0,De}function Yp(){for(;Me!==null;)Sd(Me)}function Zp(){for(;Me!==null&&!xh();)Sd(Me)}function Sd(e){var t=Td(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Ed(e):Me=t,ul.current=null}function Ed(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=$p(s,t,ft),s!==null){Me=s;return}}else{if(s=Wp(s,t),s!==null){s.flags&=32767,Me=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);De===0&&(De=5)}function Yn(e,t,s){var a=me,c=Ct.transition;try{Ct.transition=null,me=1,Xp(e,t,s,a)}finally{Ct.transition=c,me=a}return null}function Xp(e,t,s,a){do Or();while(Cn!==null);if((ue&6)!==0)throw Error(i(327));s=e.finishedWork;var c=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=s.lanes|s.childLanes;if(Lh(e,d),e===Fe&&(Me=Fe=null,Be=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||qs||(qs=!0,Pd(es,function(){return Or(),null})),d=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||d){d=Ct.transition,Ct.transition=null;var p=me;me=1;var w=ue;ue|=4,ul.current=null,Kp(e,s),md(s,e),wp(wa),as=!!va,wa=va=null,e.current=s,Gp(s),Sh(),ue=w,me=p,Ct.transition=d}else e.current=s;if(qs&&(qs=!1,Cn=e,Ks=c),d=e.pendingLanes,d===0&&(wn=null),bh(s.stateNode),it(e,Re()),t!==null)for(a=e.onRecoverableError,s=0;s<t.length;s++)c=t[s],a(c.value,{componentStack:c.stack,digest:c.digest});if(Ws)throw Ws=!1,e=hl,hl=null,e;return(Ks&1)!==0&&e.tag!==0&&Or(),d=e.pendingLanes,(d&1)!==0?e===pl?bi++:(bi=0,pl=e):bi=0,mn(),null}function Or(){if(Cn!==null){var e=hu(Ks),t=Ct.transition,s=me;try{if(Ct.transition=null,me=16>e?16:e,Cn===null)var a=!1;else{if(e=Cn,Cn=null,Ks=0,(ue&6)!==0)throw Error(i(331));var c=ue;for(ue|=4,H=e.current;H!==null;){var d=H,p=d.child;if((H.flags&16)!==0){var w=d.deletions;if(w!==null){for(var C=0;C<w.length;C++){var T=w[C];for(H=T;H!==null;){var j=H;switch(j.tag){case 0:case 11:case 15:Si(8,j,d)}var D=j.child;if(D!==null)D.return=j,H=D;else for(;H!==null;){j=H;var O=j.sibling,V=j.return;if(ud(j),j===T){H=null;break}if(O!==null){O.return=V,H=O;break}H=V}}}var W=d.alternate;if(W!==null){var K=W.child;if(K!==null){W.child=null;do{var Le=K.sibling;K.sibling=null,K=Le}while(K!==null)}}H=d}}if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,H=p;else e:for(;H!==null;){if(d=H,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Si(9,d,d.return)}var I=d.sibling;if(I!==null){I.return=d.return,H=I;break e}H=d.return}}var k=e.current;for(H=k;H!==null;){p=H;var b=p.child;if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,H=b;else e:for(p=k;H!==null;){if(w=H,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Hs(9,w)}}catch(G){Ne(w,w.return,G)}if(w===p){H=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,H=z;break e}H=w.return}}if(ue=c,mn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ts,e)}catch{}a=!0}return a}finally{me=s,Ct.transition=t}}return!1}function Id(e,t,s){t=Nr(s,t),t=$1(e,t,1),e=yn(e,t,1),t=Qe(),e!==null&&(Yr(e,1,t),it(e,t))}function Ne(e,t,s){if(e.tag===3)Id(e,e,s);else for(;t!==null;){if(t.tag===3){Id(t,e,s);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=Nr(s,e),e=W1(t,e,1),t=yn(t,e,1),e=Qe(),t!==null&&(Yr(t,1,e),it(t,e));break}}t=t.return}}function e4(e,t,s){var a=e.pingCache;a!==null&&a.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&s,Fe===e&&(Be&s)===s&&(De===4||De===3&&(Be&130023424)===Be&&500>Re()-fl?Qn(e,0):dl|=s),it(e,t)}function bd(e,t){t===0&&((e.mode&1)===0?t=1:(t=rs,rs<<=1,(rs&130023424)===0&&(rs=4194304)));var s=Qe();e=Gt(e,t),e!==null&&(Yr(e,t,s),it(e,s))}function t4(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),bd(e,s)}function n4(e,t){var s=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),bd(e,s)}var Td;Td=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return nt=!1,Bp(e,t,s);nt=(e.flags&131072)!==0}else nt=!1,Se&&(t.flags&1048576)!==0&&a1(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Fs(e,t),e=t.pendingProps;var c=_r(t,We.current);Tr(t,s),c=Ba(null,t,a,e,c,s);var d=$a();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(a)?(d=!0,_s(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ja(t),c.updater=Us,t.stateNode=c,c._reactInternals=t,Qa(t,a,e,s),t=el(null,t,a,!0,d,s)):(t.tag=0,Se&&d&&Ia(t),Je(null,t,c,s),t=t.child),t;case 16:a=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=i4(a),e=Tt(a,e),c){case 0:t=Xa(null,t,a,e,s);break e;case 1:t=ed(null,t,a,e,s);break e;case 11:t=J1(null,t,a,e,s);break e;case 14:t=Q1(null,t,a,Tt(a.type,e),s);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),Xa(e,t,a,c,s);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),ed(e,t,a,c,s);case 3:e:{if(td(t),e===null)throw Error(i(387));a=t.pendingProps,d=t.memoizedState,c=d.element,g1(e,t),As(t,a,null,s);var p=t.memoizedState;if(a=p.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=Nr(Error(i(423)),t),t=nd(e,t,a,s,c);break e}else if(a!==c){c=Nr(Error(i(424)),t),t=nd(e,t,a,s,c);break e}else for(dt=fn(t.stateNode.containerInfo.firstChild),ut=t,Se=!0,bt=null,s=p1(t,null,a,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Er(),a===c){t=Qt(e,t,s);break e}Je(e,t,a,s)}t=t.child}return t;case 5:return w1(t),e===null&&Pa(t),a=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,p=c.children,Ca(a,c)?p=null:d!==null&&Ca(a,d)&&(t.flags|=32),X1(e,t),Je(e,t,p,s),t.child;case 6:return e===null&&Pa(t),null;case 13:return rd(e,t,s);case 4:return Da(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ir(t,null,a,s):Je(e,t,a,s),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),J1(e,t,a,c,s);case 7:return Je(e,t,t.pendingProps,s),t.child;case 8:return Je(e,t,t.pendingProps.children,s),t.child;case 12:return Je(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,d=t.memoizedProps,p=c.value,ve(Ts,a._currentValue),a._currentValue=p,d!==null)if(It(d.value,p)){if(d.children===c.children&&!et.current){t=Qt(e,t,s);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){p=d.child;for(var C=w.firstContext;C!==null;){if(C.context===a){if(d.tag===1){C=Jt(-1,s&-s),C.tag=2;var T=d.updateQueue;if(T!==null){T=T.shared;var j=T.pending;j===null?C.next=C:(C.next=j.next,j.next=C),T.pending=C}}d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),Oa(d.return,s,t),w.lanes|=s;break}C=C.next}}else if(d.tag===10)p=d.type===t.type?null:d.child;else if(d.tag===18){if(p=d.return,p===null)throw Error(i(341));p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Oa(p,s,t),p=d.sibling}else p=d.child;if(p!==null)p.return=d;else for(p=d;p!==null;){if(p===t){p=null;break}if(d=p.sibling,d!==null){d.return=p.return,p=d;break}p=p.return}d=p}Je(e,t,c.children,s),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,Tr(t,s),c=vt(c),a=a(c),t.flags|=1,Je(e,t,a,s),t.child;case 14:return a=t.type,c=Tt(a,t.pendingProps),c=Tt(a.type,c),Q1(e,t,a,c,s);case 15:return Y1(e,t,t.type,t.pendingProps,s);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:Tt(a,c),Fs(e,t),t.tag=1,tt(a)?(e=!0,_s(t)):e=!1,Tr(t,s),H1(t,a,c),Qa(t,a,c,s),el(null,t,a,!0,e,s);case 19:return sd(e,t,s);case 22:return Z1(e,t,s)}throw Error(i(156,t.tag))};function Pd(e,t){return lu(e,t)}function r4(e,t,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,s,a){return new r4(e,t,s,a)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i4(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===Ue)return 14}return 2}function xn(e,t){var s=e.alternate;return s===null?(s=kt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Ys(e,t,s,a,c,d){var p=2;if(a=e,typeof e=="function")Cl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case Q:return Zn(s.children,c,d,t);case te:p=8,c|=8;break;case Ee:return e=kt(12,s,t,c|2),e.elementType=Ee,e.lanes=d,e;case we:return e=kt(13,s,t,c),e.elementType=we,e.lanes=d,e;case Ce:return e=kt(19,s,t,c),e.elementType=Ce,e.lanes=d,e;case Pe:return Zs(s,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ze:p=10;break e;case mt:p=9;break e;case ee:p=11;break e;case Ue:p=14;break e;case Xe:p=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=kt(p,s,t,c),t.elementType=e,t.type=a,t.lanes=d,t}function Zn(e,t,s,a){return e=kt(7,e,a,t),e.lanes=s,e}function Zs(e,t,s,a){return e=kt(22,e,a,t),e.elementType=Pe,e.lanes=s,e.stateNode={isHidden:!1},e}function kl(e,t,s){return e=kt(6,e,null,t),e.lanes=s,e}function _l(e,t,s){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s4(e,t,s,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function xl(e,t,s,a,c,d,p,w,C){return e=new s4(e,t,s,w,C),t===1?(t=1,d===!0&&(t|=8)):t=0,d=kt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ja(d),e}function o4(e,t,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:a==null?null:""+a,children:e,containerInfo:t,implementation:s}}function Nd(e){if(!e)return pn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(tt(s))return i1(e,s,t)}return t}function Ad(e,t,s,a,c,d,p,w,C){return e=xl(s,a,!0,e,c,d,p,w,C),e.context=Nd(null),s=e.current,a=Qe(),c=kn(s),d=Jt(a,c),d.callback=t??null,yn(s,d,c),e.current.lanes=c,Yr(e,c,a),it(e,a),e}function Xs(e,t,s,a){var c=t.current,d=Qe(),p=kn(c);return s=Nd(s),t.context===null?t.context=s:t.pendingContext=s,t=Jt(d,p),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=yn(c,t,p),e!==null&&(At(e,c,p,d),Ns(e,c,p)),p}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Sl(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function a4(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function El(e){this._internalRoot=e}to.prototype.render=El.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Xs(e,t,null,null)},to.prototype.unmount=El.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Xs(null,e,null,null)}),t[$t]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var s=0;s<cn.length&&t!==0&&t<cn[s].priority;s++);cn.splice(s,0,e),s===0&&wu(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function l4(e,t,s,a,c){if(c){if(typeof a=="function"){var d=a;a=function(){var T=eo(p);d.call(T)}}var p=Ad(t,a,e,0,null,!1,!1,"",Od);return e._reactRootContainer=p,e[$t]=p.current,di(e.nodeType===8?e.parentNode:e),Jn(),p}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var w=a;a=function(){var T=eo(C);w.call(T)}}var C=xl(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=C,e[$t]=C.current,di(e.nodeType===8?e.parentNode:e),Jn(function(){Xs(t,C,s,a)}),C}function ro(e,t,s,a,c){var d=s._reactRootContainer;if(d){var p=d;if(typeof c=="function"){var w=c;c=function(){var C=eo(p);w.call(C)}}Xs(t,p,e,c)}else p=l4(s,t,e,c,a);return eo(p)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Qr(t.pendingLanes);s!==0&&(Qo(t,s|1),it(t,Re()),(ue&6)===0&&(Lr=Re()+500,mn()))}break;case 13:Jn(function(){var a=Gt(e,1);if(a!==null){var c=Qe();At(a,e,1,c)}}),Sl(e,1)}},Yo=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var s=Qe();At(t,e,134217728,s)}Sl(e,134217728)}},mu=function(e){if(e.tag===13){var t=kn(e),s=Gt(e,t);if(s!==null){var a=Qe();At(s,e,t,a)}Sl(e,t)}},gu=function(){return me},yu=function(e,t){var s=me;try{return me=e,t()}finally{me=s}},Bo=function(e,t,s){switch(t){case"input":if(Mo(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var a=s[t];if(a!==e&&a.form===e.form){var c=Cs(a);if(!c)throw Error(i(90));Vc(a),Mo(a,c)}}}break;case"textarea":qc(e,s);break;case"select":t=s.value,t!=null&&ur(e,!!s.multiple,t,!1)}},tu=yl,nu=Jn;var c4={usingClientEntryPoint:!1,Events:[pi,Cr,Cs,Xc,eu,yl]},Ti={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u4={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||a4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ts=io.inject(u4),Mt=io}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c4,st.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(i(200));return o4(e,t,null,s)},st.createRoot=function(e,t){if(!Il(e))throw Error(i(299));var s=!1,a="",c=Ld;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=xl(e,1,!1,null,null,s,!1,a,c),e[$t]=t.current,di(e.nodeType===8?e.parentNode:e),new El(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Jn(e)},st.hydrate=function(e,t,s){if(!no(t))throw Error(i(200));return ro(null,e,t,!0,s)},st.hydrateRoot=function(e,t,s){if(!Il(e))throw Error(i(405));var a=s!=null&&s.hydratedSources||null,c=!1,d="",p=Ld;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),t=Ad(t,null,e,1,s??null,c,!1,d,p),e[$t]=t.current,di(e),a)for(e=0;e<a.length;e++)s=a[e],c=s._getVersion,c=c(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,c]:t.mutableSourceEagerHydrationData.push(s,c);return new to(t)},st.render=function(e,t,s){if(!no(t))throw Error(i(200));return ro(null,e,t,!1,s)},st.unmountComponentAtNode=function(e){if(!no(e))throw Error(i(40));return e._reactRootContainer?(Jn(function(){ro(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},st.unstable_batchedUpdates=yl,st.unstable_renderSubtreeIntoContainer=function(e,t,s,a){if(!no(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ro(e,t,s,!1,a)},st.version="18.3.1-next-f1338f8080-20240426",st}var Hd;function df(){if(Hd)return Pl.exports;Hd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Pl.exports=C4(),Pl.exports}var Bd;function k4(){if(Bd)return so;Bd=1;var r=df();return so.createRoot=r.createRoot,so.hydrateRoot=r.hydrateRoot,so}var _4=k4();df();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},ji.apply(this,arguments)}var Nn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Nn||(Nn={}));const $d="popstate";function x4(r){r===void 0&&(r={});function n(o,l){let{pathname:u,search:f,hash:m}=o.location;return Yl("",{pathname:u,search:f,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(o,l){return typeof l=="string"?l:mo(l)}return E4(n,i,null,r)}function Oe(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function ff(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function S4(){return Math.random().toString(36).substr(2,8)}function Wd(r,n){return{usr:r.state,key:r.key,idx:n}}function Yl(r,n,i,o){return i===void 0&&(i=null),ji({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof n=="string"?zr(n):n,{state:i,key:n&&n.key||o||S4()})}function mo(r){let{pathname:n="/",search:i="",hash:o=""}=r;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function zr(r){let n={};if(r){let i=r.indexOf("#");i>=0&&(n.hash=r.substr(i),r=r.substr(0,i));let o=r.indexOf("?");o>=0&&(n.search=r.substr(o),r=r.substr(0,o)),r&&(n.pathname=r)}return n}function E4(r,n,i,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:u=!1}=o,f=l.history,m=Nn.Pop,h=null,y=S();y==null&&(y=0,f.replaceState(ji({},f.state,{idx:y}),""));function S(){return(f.state||{idx:null}).idx}function _(){m=Nn.Pop;let R=S(),q=R==null?null:R-y;y=R,h&&h({action:m,location:L.location,delta:q})}function x(R,q){m=Nn.Push;let $=Yl(L.location,R,q);y=S()+1;let Y=Wd($,y),se=L.createHref($);try{f.pushState(Y,"",se)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;l.location.assign(se)}u&&h&&h({action:m,location:L.location,delta:1})}function A(R,q){m=Nn.Replace;let $=Yl(L.location,R,q);y=S();let Y=Wd($,y),se=L.createHref($);f.replaceState(Y,"",se),u&&h&&h({action:m,location:L.location,delta:0})}function P(R){let q=l.location.origin!=="null"?l.location.origin:l.location.href,$=typeof R=="string"?R:mo(R);return $=$.replace(/ $/,"%20"),Oe(q,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,q)}let L={get action(){return m},get location(){return r(l,f)},listen(R){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener($d,_),h=R,()=>{l.removeEventListener($d,_),h=null}},createHref(R){return n(l,R)},createURL:P,encodeLocation(R){let q=P(R);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:x,replace:A,go(R){return f.go(R)}};return L}var qd;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(qd||(qd={}));function I4(r,n,i){return i===void 0&&(i="/"),b4(r,n,i)}function b4(r,n,i,o){let l=typeof n=="string"?zr(n):n,u=mc(l.pathname||"/",i);if(u==null)return null;let f=hf(r);T4(f);let m=null;for(let h=0;m==null&&h<f.length;++h){let y=F4(u);m=D4(f[h],y)}return m}function hf(r,n,i,o){n===void 0&&(n=[]),i===void 0&&(i=[]),o===void 0&&(o="");let l=(u,f,m)=>{let h={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(Oe(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let y=An([o,h.relativePath]),S=i.concat(h);u.children&&u.children.length>0&&(Oe(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),hf(u.children,n,S,y)),!(u.path==null&&!u.index)&&n.push({path:y,score:M4(y,u.index),routesMeta:S})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))l(u,f);else for(let h of pf(u.path))l(u,f,h)}),n}function pf(r){let n=r.split("/");if(n.length===0)return[];let[i,...o]=n,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let f=pf(o.join("/")),m=[];return m.push(...f.map(h=>h===""?u:[u,h].join("/"))),l&&m.push(...f),m.map(h=>r.startsWith("/")&&h===""?"/":h)}function T4(r){r.sort((n,i)=>n.score!==i.score?i.score-n.score:j4(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const P4=/^:[\w-]+$/,N4=3,A4=2,R4=1,L4=10,O4=-2,Kd=r=>r==="*";function M4(r,n){let i=r.split("/"),o=i.length;return i.some(Kd)&&(o+=O4),n&&(o+=A4),i.filter(l=>!Kd(l)).reduce((l,u)=>l+(P4.test(u)?N4:u===""?R4:L4),o)}function j4(r,n){return r.length===n.length&&r.slice(0,-1).every((o,l)=>o===n[l])?r[r.length-1]-n[n.length-1]:0}function D4(r,n,i){let{routesMeta:o}=r,l={},u="/",f=[];for(let m=0;m<o.length;++m){let h=o[m],y=m===o.length-1,S=u==="/"?n:n.slice(u.length)||"/",_=U4({path:h.relativePath,caseSensitive:h.caseSensitive,end:y},S),x=h.route;if(!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:An([u,_.pathname]),pathnameBase:$4(An([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=An([u,_.pathnameBase]))}return f}function U4(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,o]=z4(r.path,r.caseSensitive,r.end),l=n.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:o.reduce((y,S,_)=>{let{paramName:x,isOptional:A}=S;if(x==="*"){let L=m[_]||"";f=u.slice(0,u.length-L.length).replace(/(.)\/+$/,"$1")}const P=m[_];return A&&!P?y[x]=void 0:y[x]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function z4(r,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),ff(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h)=>(o.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),o]}function F4(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ff(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),r}}function mc(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=r.charAt(i);return o&&o!=="/"?null:r.slice(i)||"/"}function V4(r,n){n===void 0&&(n="/");let{pathname:i,search:o="",hash:l=""}=typeof r=="string"?zr(r):r;return{pathname:i?i.startsWith("/")?i:H4(i,n):n,search:W4(o),hash:q4(l)}}function H4(r,n){let i=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Rl(r,n,i,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function B4(r){return r.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function gc(r,n){let i=B4(r);return n?i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function yc(r,n,i,o){o===void 0&&(o=!1);let l;typeof r=="string"?l=zr(r):(l=ji({},r),Oe(!l.pathname||!l.pathname.includes("?"),Rl("?","pathname","search",l)),Oe(!l.pathname||!l.pathname.includes("#"),Rl("#","pathname","hash",l)),Oe(!l.search||!l.search.includes("#"),Rl("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,m;if(f==null)m=i;else{let _=n.length-1;if(!o&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}m=_>=0?n[_]:"/"}let h=V4(l,m),y=f&&f!=="/"&&f.endsWith("/"),S=(u||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(y||S)&&(h.pathname+="/"),h}const An=r=>r.join("/").replace(/\/\/+/g,"/"),$4=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),W4=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,q4=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function K4(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const mf=["post","put","patch","delete"];new Set(mf);const G4=["get",...mf];new Set(G4);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Di.apply(this,arguments)}const vc=N.createContext(null),J4=N.createContext(null),On=N.createContext(null),bo=N.createContext(null),Mn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),gf=N.createContext(null);function Q4(r,n){let{relative:i}=n===void 0?{}:n;Fr()||Oe(!1);let{basename:o,navigator:l}=N.useContext(On),{hash:u,pathname:f,search:m}=vf(r,{relative:i}),h=f;return o!=="/"&&(h=f==="/"?o:An([o,f])),l.createHref({pathname:h,search:m,hash:u})}function Fr(){return N.useContext(bo)!=null}function Vi(){return Fr()||Oe(!1),N.useContext(bo).location}function yf(r){N.useContext(On).static||N.useLayoutEffect(r)}function Hi(){let{isDataRoute:r}=N.useContext(Mn);return r?c3():Y4()}function Y4(){Fr()||Oe(!1);let r=N.useContext(vc),{basename:n,future:i,navigator:o}=N.useContext(On),{matches:l}=N.useContext(Mn),{pathname:u}=Vi(),f=JSON.stringify(gc(l,i.v7_relativeSplatPath)),m=N.useRef(!1);return yf(()=>{m.current=!0}),N.useCallback(function(y,S){if(S===void 0&&(S={}),!m.current)return;if(typeof y=="number"){o.go(y);return}let _=yc(y,JSON.parse(f),u,S.relative==="path");r==null&&n!=="/"&&(_.pathname=_.pathname==="/"?n:An([n,_.pathname])),(S.replace?o.replace:o.push)(_,S.state,S)},[n,o,f,u,r])}function vf(r,n){let{relative:i}=n===void 0?{}:n,{future:o}=N.useContext(On),{matches:l}=N.useContext(Mn),{pathname:u}=Vi(),f=JSON.stringify(gc(l,o.v7_relativeSplatPath));return N.useMemo(()=>yc(r,JSON.parse(f),u,i==="path"),[r,f,u,i])}function Z4(r,n){return X4(r,n)}function X4(r,n,i,o){Fr()||Oe(!1);let{navigator:l}=N.useContext(On),{matches:u}=N.useContext(Mn),f=u[u.length-1],m=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let y=Vi(),S;if(n){var _;let R=typeof n=="string"?zr(n):n;h==="/"||(_=R.pathname)!=null&&_.startsWith(h)||Oe(!1),S=R}else S=y;let x=S.pathname||"/",A=x;if(h!=="/"){let R=h.replace(/^\//,"").split("/");A="/"+x.replace(/^\//,"").split("/").slice(R.length).join("/")}let P=I4(r,{pathname:A}),L=i3(P&&P.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:An([h,l.encodeLocation?l.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?h:An([h,l.encodeLocation?l.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),u,i,o);return n&&L?N.createElement(bo.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},S),navigationType:Nn.Pop}},L):L}function e3(){let r=l3(),n=K4(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),i?N.createElement("pre",{style:l},i):null,null)}const t3=N.createElement(e3,null);class n3 extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?N.createElement(Mn.Provider,{value:this.props.routeContext},N.createElement(gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function r3(r){let{routeContext:n,match:i,children:o}=r,l=N.useContext(vc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),N.createElement(Mn.Provider,{value:n},o)}function i3(r,n,i,o){var l;if(n===void 0&&(n=[]),i===void 0&&(i=null),o===void 0&&(o=null),r==null){var u;if(!i)return null;if(i.errors)r=i.matches;else if((u=o)!=null&&u.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,m=(l=i)==null?void 0:l.errors;if(m!=null){let S=f.findIndex(_=>_.route.id&&m?.[_.route.id]!==void 0);S>=0||Oe(!1),f=f.slice(0,Math.min(f.length,S+1))}let h=!1,y=-1;if(i&&o&&o.v7_partialHydration)for(let S=0;S<f.length;S++){let _=f[S];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(y=S),_.route.id){let{loaderData:x,errors:A}=i,P=_.route.loader&&x[_.route.id]===void 0&&(!A||A[_.route.id]===void 0);if(_.route.lazy||P){h=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((S,_,x)=>{let A,P=!1,L=null,R=null;i&&(A=m&&_.route.id?m[_.route.id]:void 0,L=_.route.errorElement||t3,h&&(y<0&&x===0?(u3("route-fallback"),P=!0,R=null):y===x&&(P=!0,R=_.route.hydrateFallbackElement||null)));let q=n.concat(f.slice(0,x+1)),$=()=>{let Y;return A?Y=L:P?Y=R:_.route.Component?Y=N.createElement(_.route.Component,null):_.route.element?Y=_.route.element:Y=S,N.createElement(r3,{match:_,routeContext:{outlet:S,matches:q,isDataRoute:i!=null},children:Y})};return i&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?N.createElement(n3,{location:i.location,revalidation:i.revalidation,component:L,error:A,children:$(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):$()},null)}var wf=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(wf||{}),Cf=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Cf||{});function s3(r){let n=N.useContext(vc);return n||Oe(!1),n}function o3(r){let n=N.useContext(J4);return n||Oe(!1),n}function a3(r){let n=N.useContext(Mn);return n||Oe(!1),n}function kf(r){let n=a3(),i=n.matches[n.matches.length-1];return i.route.id||Oe(!1),i.route.id}function l3(){var r;let n=N.useContext(gf),i=o3(),o=kf();return n!==void 0?n:(r=i.errors)==null?void 0:r[o]}function c3(){let{router:r}=s3(wf.UseNavigateStable),n=kf(Cf.UseNavigateStable),i=N.useRef(!1);return yf(()=>{i.current=!0}),N.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Di({fromRouteId:n},u)))},[r,n])}const Gd={};function u3(r,n,i){Gd[r]||(Gd[r]=!0)}function d3(r,n){r?.v7_startTransition,r?.v7_relativeSplatPath}function Zl(r){let{to:n,replace:i,state:o,relative:l}=r;Fr()||Oe(!1);let{future:u,static:f}=N.useContext(On),{matches:m}=N.useContext(Mn),{pathname:h}=Vi(),y=Hi(),S=yc(n,gc(m,u.v7_relativeSplatPath),h,l==="path"),_=JSON.stringify(S);return N.useEffect(()=>y(JSON.parse(_),{replace:i,state:o,relative:l}),[y,_,l,i,o]),null}function In(r){Oe(!1)}function f3(r){let{basename:n="/",children:i=null,location:o,navigationType:l=Nn.Pop,navigator:u,static:f=!1,future:m}=r;Fr()&&Oe(!1);let h=n.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:h,navigator:u,static:f,future:Di({v7_relativeSplatPath:!1},m)}),[h,m,u,f]);typeof o=="string"&&(o=zr(o));let{pathname:S="/",search:_="",hash:x="",state:A=null,key:P="default"}=o,L=N.useMemo(()=>{let R=mc(S,h);return R==null?null:{location:{pathname:R,search:_,hash:x,state:A,key:P},navigationType:l}},[h,S,_,x,A,P,l]);return L==null?null:N.createElement(On.Provider,{value:y},N.createElement(bo.Provider,{children:i,value:L}))}function h3(r){let{children:n,location:i}=r;return Z4(Xl(n),i)}new Promise(()=>{});function Xl(r,n){n===void 0&&(n=[]);let i=[];return N.Children.forEach(r,(o,l)=>{if(!N.isValidElement(o))return;let u=[...n,l];if(o.type===N.Fragment){i.push.apply(i,Xl(o.props.children,u));return}o.type!==In&&Oe(!1),!o.props.index||!o.props.children||Oe(!1);let f={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Xl(o.props.children,u)),i.push(f)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},ec.apply(this,arguments)}function p3(r,n){if(r==null)return{};var i={},o=Object.keys(r),l,u;for(u=0;u<o.length;u++)l=o[u],!(n.indexOf(l)>=0)&&(i[l]=r[l]);return i}function m3(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function g3(r,n){return r.button===0&&(!n||n==="_self")&&!m3(r)}const y3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v3="6";try{window.__reactRouterVersion=v3}catch{}const w3="startTransition",Jd=y4[w3];function C3(r){let{basename:n,children:i,future:o,window:l}=r,u=N.useRef();u.current==null&&(u.current=x4({window:l,v5Compat:!0}));let f=u.current,[m,h]=N.useState({action:f.action,location:f.location}),{v7_startTransition:y}=o||{},S=N.useCallback(_=>{y&&Jd?Jd(()=>h(_)):h(_)},[h,y]);return N.useLayoutEffect(()=>f.listen(S),[f,S]),N.useEffect(()=>d3(o),[o]),N.createElement(f3,{basename:n,children:i,location:m.location,navigationType:m.action,navigator:f,future:o})}const k3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=N.forwardRef(function(n,i){let{onClick:o,relative:l,reloadDocument:u,replace:f,state:m,target:h,to:y,preventScrollReset:S,viewTransition:_}=n,x=p3(n,y3),{basename:A}=N.useContext(On),P,L=!1;if(typeof y=="string"&&_3.test(y)&&(P=y,k3))try{let Y=new URL(window.location.href),se=y.startsWith("//")?new URL(Y.protocol+y):new URL(y),U=mc(se.pathname,A);se.origin===Y.origin&&U!=null?y=U+se.search+se.hash:L=!0}catch{}let R=Q4(y,{relative:l}),q=x3(y,{replace:f,state:m,target:h,preventScrollReset:S,relative:l,viewTransition:_});function $(Y){o&&o(Y),Y.defaultPrevented||q(Y)}return N.createElement("a",ec({},x,{href:P||R,onClick:L||u?o:$,ref:i,target:h}))});var Qd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Yd;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Yd||(Yd={}));function x3(r,n){let{target:i,replace:o,state:l,preventScrollReset:u,relative:f,viewTransition:m}=n===void 0?{}:n,h=Hi(),y=Vi(),S=vf(r,{relative:f});return N.useCallback(_=>{if(g3(_,i)){_.preventDefault();let x=o!==void 0?o:mo(y)===mo(S);h(r,{replace:x,state:l,preventScrollReset:u,relative:f,viewTransition:m})}},[y,h,S,o,l,i,r,u,f,m])}const _f=N.createContext(),S3=(r,n)=>{switch(n.type){case"ADD_TO_CART":return r.find(o=>o.id===n.product.id)?r.map(o=>o.id===n.product.id?{...o,quantity:o.quantity+1}:o):[...r,{...n.product,quantity:1}];case"INCREMENT":return r.map(i=>i.id===n.id?{...i,quantity:i.quantity+1}:i);case"DECREMENT":return r.map(i=>i.id===n.id?{...i,quantity:i.quantity-1}:i).filter(i=>i.quantity>0);case"REMOVE_FROM_CART":return r.filter(i=>i.id!==n.id);case"CLEAR_CART":return[];default:return r}},E3=({children:r})=>{const n=JSON.parse(localStorage.getItem("cart"))||[],[i,o]=N.useReducer(S3,n);N.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(i))},[i]);const l=y=>o({type:"ADD_TO_CART",product:y}),u=y=>o({type:"REMOVE_FROM_CART",id:y}),f=()=>o({type:"CLEAR_CART"}),m=y=>o({type:"INCREMENT",id:y}),h=y=>o({type:"DECREMENT",id:y});return g.jsx(_f.Provider,{value:{cart:i,addToCart:l,removeFromCart:u,clearCart:f,increment:m,decrement:h},children:r})},wc=()=>N.useContext(_f),I3=()=>{};var Zd={};/**
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
 */const xf=function(r){const n=[];let i=0;for(let o=0;o<r.length;o++){let l=r.charCodeAt(o);l<128?n[i++]=l:l<2048?(n[i++]=l>>6|192,n[i++]=l&63|128):(l&64512)===55296&&o+1<r.length&&(r.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++o)&1023),n[i++]=l>>18|240,n[i++]=l>>12&63|128,n[i++]=l>>6&63|128,n[i++]=l&63|128):(n[i++]=l>>12|224,n[i++]=l>>6&63|128,n[i++]=l&63|128)}return n},b3=function(r){const n=[];let i=0,o=0;for(;i<r.length;){const l=r[i++];if(l<128)n[o++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[i++];n[o++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[i++],f=r[i++],m=r[i++],h=((l&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;n[o++]=String.fromCharCode(55296+(h>>10)),n[o++]=String.fromCharCode(56320+(h&1023))}else{const u=r[i++],f=r[i++];n[o++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return n.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,m=f?r[l+1]:0,h=l+2<r.length,y=h?r[l+2]:0,S=u>>2,_=(u&3)<<4|m>>4;let x=(m&15)<<2|y>>6,A=y&63;h||(A=64,f||(x=64)),o.push(i[S],i[_],i[x],i[A])}return o.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(xf(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):b3(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<r.length;){const u=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const _=l<r.length?i[r.charAt(l)]:64;if(++l,u==null||m==null||y==null||_==null)throw new T3;const x=u<<2|m>>4;if(o.push(x),y!==64){const A=m<<4&240|y>>2;if(o.push(A),_!==64){const P=y<<6&192|_;o.push(P)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class T3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P3=function(r){const n=xf(r);return Sf.encodeByteArray(n,!0)},Ef=function(r){return P3(r).replace(/\./g,"")},If=function(r){try{return Sf.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function N3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A3=()=>N3().__FIREBASE_DEFAULTS__,R3=()=>{if(typeof process>"u"||typeof Zd>"u")return;const r=Zd.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},L3=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&If(r[1]);return n&&JSON.parse(n)},Cc=()=>{try{return I3()||A3()||R3()||L3()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},O3=r=>Cc()?.emulatorHosts?.[r],bf=()=>Cc()?.config,Tf=r=>Cc()?.[`_${r}`];/**
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
 */class M3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,i)=>{this.resolve=n,this.reject=i})}wrapCallback(n){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(i):n(i,o))}}}/**
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
 */function To(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function j3(r){return(await fetch(r,{credentials:"include"})).ok}const Li={};function D3(){const r={prod:[],emulator:[]};for(const n of Object.keys(Li))Li[n]?r.emulator.push(n):r.prod.push(n);return r}function U3(r){let n=document.getElementById(r),i=!1;return n||(n=document.createElement("div"),n.setAttribute("id",r),i=!0),{created:i,element:n}}let Xd=!1;function z3(r,n){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||Li[r]===n||Li[r]||Xd)return;Li[r]=n;function i(x){return`__firebase__banner__${x}`}const o="__firebase__banner",u=D3().prod.length>0;function f(){const x=document.getElementById(o);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function h(x,A){x.setAttribute("width","24"),x.setAttribute("id",A),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function y(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Xd=!0,f()},x}function S(x,A){x.setAttribute("id",A),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function _(){const x=U3(o),A=i("text"),P=document.getElementById(A)||document.createElement("span"),L=i("learnmore"),R=document.getElementById(L)||document.createElement("a"),q=i("preprendIcon"),$=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Y=x.element;m(Y),S(R,L);const se=y();h($,q),Y.append($,P,R,se),document.body.appendChild(Y)}u?(P.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function V3(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function H3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B3(){const r=Ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Nf(){try{return typeof indexedDB=="object"}catch{return!1}}function Af(){return new Promise((r,n)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{n(l.error?.message||"")}}catch(i){n(i)}})}function $3(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const W3="FirebaseError";class Bt extends Error{constructor(n,i,o){super(i),this.code=n,this.customData=o,this.name=W3,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(n,i,o){this.service=n,this.serviceName=i,this.errors=o}create(n,...i){const o=i[0]||{},l=`${this.service}/${n}`,u=this.errors[n],f=u?q3(u,o):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new Bt(l,m,o)}}function q3(r,n){return r.replace(K3,(i,o)=>{const l=n[o];return l!=null?String(l):`<${o}?>`})}const K3=/\{\$([^}]+)}/g;function G3(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function rr(r,n){if(r===n)return!0;const i=Object.keys(r),o=Object.keys(n);for(const l of i){if(!o.includes(l))return!1;const u=r[l],f=n[l];if(e0(u)&&e0(f)){if(!rr(u,f))return!1}else if(u!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function e0(r){return r!==null&&typeof r=="object"}/**
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
 */function Bi(r){const n=[];for(const[i,o]of Object.entries(r))Array.isArray(o)?o.forEach(l=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return n.length?"&"+n.join("&"):""}function Ai(r){const n={};return r.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,u]=o.split("=");n[decodeURIComponent(l)]=decodeURIComponent(u)}}),n}function Ri(r){const n=r.indexOf("?");if(!n)return"";const i=r.indexOf("#",n);return r.substring(n,i>0?i:void 0)}function J3(r,n){const i=new Q3(r,n);return i.subscribe.bind(i)}class Q3{constructor(n,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{n(this)}).catch(o=>{this.error(o)})}next(n){this.forEachObserver(i=>{i.next(n)})}error(n){this.forEachObserver(i=>{i.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,i,o){let l;if(n===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");Y3(n,["next","error","complete"])?l=n:l={next:n,error:i,complete:o},l.next===void 0&&(l.next=Ll),l.error===void 0&&(l.error=Ll),l.complete===void 0&&(l.complete=Ll);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,n)}sendOne(n,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{i(this.observers[n])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y3(r,n){if(typeof r!="object"||r===null)return!1;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}function Ll(){}/**
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
 */const Z3=1e3,X3=2,e6=14400*1e3,t6=.5;function t0(r,n=Z3,i=X3){const o=n*Math.pow(i,r),l=Math.round(t6*o*(Math.random()-.5)*2);return Math.min(e6,o+l)}/**
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
 */class n6{constructor(n,i){this.name=n,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const i=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(i)){const o=new M3;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(n){const i=this.normalizeInstanceIdentifier(n?.identifier),o=n?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(i6(n))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:l});o.resolve(u)}catch{}}}}clearInstance(n=er){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...n.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=er){return this.instances.has(n)}getOptions(n=er){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:i={}}=n,o=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);o===m&&f.resolve(l)}return l}onInit(n,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(n),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&n(u,o),()=>{l.delete(n)}}invokeOnInitCallbacks(n,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(n,i)}catch{}}getOrInitializeService({instanceIdentifier:n,options:i={}}){let o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:r6(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null}normalizeInstanceIdentifier(n=er){return this.component?this.component.multipleInstances?n:er:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r6(r){return r===er?void 0:r}function i6(r){return r.instantiationMode==="EAGER"}/**
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
 */class s6{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const i=this.getProvider(n.name);if(i.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);i.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const i=new n6(n,this);return this.providers.set(n,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const o6={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},a6=ge.INFO,l6={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},c6=(r,n,...i)=>{if(n<r.logLevel)return;const o=new Date().toISOString(),l=l6[n];if(l)console[l](`[${o}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class kc{constructor(n){this.name=n,this._logLevel=a6,this._logHandler=c6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in ge))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?o6[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...n),this._logHandler(this,ge.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...n),this._logHandler(this,ge.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...n),this._logHandler(this,ge.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...n),this._logHandler(this,ge.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...n),this._logHandler(this,ge.ERROR,...n)}}const u6=(r,n)=>n.some(i=>r instanceof i);let n0,r0;function d6(){return n0||(n0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f6(){return r0||(r0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rf=new WeakMap,tc=new WeakMap,Lf=new WeakMap,Ol=new WeakMap,_c=new WeakMap;function h6(r){const n=new Promise((i,o)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{i(Rn(r.result)),l()},f=()=>{o(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return n.then(i=>{i instanceof IDBCursor&&Rf.set(i,r)}).catch(()=>{}),_c.set(n,r),n}function p6(r){if(tc.has(r))return;const n=new Promise((i,o)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{i(),l()},f=()=>{o(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});tc.set(r,n)}let nc={get(r,n,i){if(r instanceof IDBTransaction){if(n==="done")return tc.get(r);if(n==="objectStoreNames")return r.objectStoreNames||Lf.get(r);if(n==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Rn(r[n])},set(r,n,i){return r[n]=i,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function m6(r){nc=r(nc)}function g6(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...i){const o=r.call(Ml(this),n,...i);return Lf.set(o,n.sort?n.sort():[n]),Rn(o)}:f6().includes(r)?function(...n){return r.apply(Ml(this),n),Rn(Rf.get(this))}:function(...n){return Rn(r.apply(Ml(this),n))}}function y6(r){return typeof r=="function"?g6(r):(r instanceof IDBTransaction&&p6(r),u6(r,d6())?new Proxy(r,nc):r)}function Rn(r){if(r instanceof IDBRequest)return h6(r);if(Ol.has(r))return Ol.get(r);const n=y6(r);return n!==r&&(Ol.set(r,n),_c.set(n,r)),n}const Ml=r=>_c.get(r);function Of(r,n,{blocked:i,upgrade:o,blocking:l,terminated:u}={}){const f=indexedDB.open(r,n),m=Rn(f);return o&&f.addEventListener("upgradeneeded",h=>{o(Rn(f.result),h.oldVersion,h.newVersion,Rn(f.transaction),h)}),i&&f.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),m.then(h=>{u&&h.addEventListener("close",()=>u()),l&&h.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const v6=["get","getKey","getAll","getAllKeys","count"],w6=["put","add","delete","clear"],jl=new Map;function i0(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(jl.get(n))return jl.get(n);const i=n.replace(/FromIndex$/,""),o=n!==i,l=w6.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||v6.includes(i)))return;const u=async function(f,...m){const h=this.transaction(f,l?"readwrite":"readonly");let y=h.store;return o&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&h.done]))[0]};return jl.set(n,u),u}m6(r=>({...r,get:(n,i,o)=>i0(n,i)||r.get(n,i,o),has:(n,i)=>!!i0(n,i)||r.has(n,i)}));/**
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
 */class C6{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(k6(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function k6(r){return r.getComponent()?.type==="VERSION"}const rc="@firebase/app",s0="0.14.2";/**
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
 */const nn=new kc("@firebase/app"),_6="@firebase/app-compat",x6="@firebase/analytics-compat",S6="@firebase/analytics",E6="@firebase/app-check-compat",I6="@firebase/app-check",b6="@firebase/auth",T6="@firebase/auth-compat",P6="@firebase/database",N6="@firebase/data-connect",A6="@firebase/database-compat",R6="@firebase/functions",L6="@firebase/functions-compat",O6="@firebase/installations",M6="@firebase/installations-compat",j6="@firebase/messaging",D6="@firebase/messaging-compat",U6="@firebase/performance",z6="@firebase/performance-compat",F6="@firebase/remote-config",V6="@firebase/remote-config-compat",H6="@firebase/storage",B6="@firebase/storage-compat",$6="@firebase/firestore",W6="@firebase/ai",q6="@firebase/firestore-compat",K6="firebase",G6="12.2.0";/**
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
 */const ic="[DEFAULT]",J6={[rc]:"fire-core",[_6]:"fire-core-compat",[S6]:"fire-analytics",[x6]:"fire-analytics-compat",[I6]:"fire-app-check",[E6]:"fire-app-check-compat",[b6]:"fire-auth",[T6]:"fire-auth-compat",[P6]:"fire-rtdb",[N6]:"fire-data-connect",[A6]:"fire-rtdb-compat",[R6]:"fire-fn",[L6]:"fire-fn-compat",[O6]:"fire-iid",[M6]:"fire-iid-compat",[j6]:"fire-fcm",[D6]:"fire-fcm-compat",[U6]:"fire-perf",[z6]:"fire-perf-compat",[F6]:"fire-rc",[V6]:"fire-rc-compat",[H6]:"fire-gcs",[B6]:"fire-gcs-compat",[$6]:"fire-fst",[q6]:"fire-fst-compat",[W6]:"fire-vertex","fire-js":"fire-js",[K6]:"fire-js-all"};/**
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
 */const go=new Map,Q6=new Map,sc=new Map;function o0(r,n){try{r.container.addComponent(n)}catch(i){nn.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,i)}}function rn(r){const n=r.name;if(sc.has(n))return nn.debug(`There were multiple attempts to register component ${n}.`),!1;sc.set(n,r);for(const i of go.values())o0(i,r);for(const i of Q6.values())o0(i,r);return!0}function Vr(r,n){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(n)}function _t(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Y6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new cr("app","Firebase",Y6);/**
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
 */class Z6{constructor(n,i,o){this._isDeleted=!1,this._options={...n},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=G6;function Mf(r,n={}){let i=r;typeof n!="object"&&(n={name:n});const o={name:ic,automaticDataCollectionEnabled:!0,...n},l=o.name;if(typeof l!="string"||!l)throw Ln.create("bad-app-name",{appName:String(l)});if(i||(i=bf()),!i)throw Ln.create("no-options");const u=go.get(l);if(u){if(rr(i,u.options)&&rr(o,u.config))return u;throw Ln.create("duplicate-app",{appName:l})}const f=new s6(l);for(const h of sc.values())f.addComponent(h);const m=new Z6(i,o,f);return go.set(l,m),m}function jf(r=ic){const n=go.get(r);if(!n&&r===ic&&bf())return Mf();if(!n)throw Ln.create("no-app",{appName:r});return n}function Ft(r,n,i){let o=J6[r]??r;i&&(o+=`-${i}`);const l=o.match(/\s|\//),u=n.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${n}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${n}" contains illegal characters (whitespace or "/")`),nn.warn(f.join(" "));return}rn(new Ht(`${o}-version`,()=>({library:o,version:n}),"VERSION"))}/**
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
 */const X6="firebase-heartbeat-database",e5=1,Ui="firebase-heartbeat-store";let Dl=null;function Df(){return Dl||(Dl=Of(X6,e5,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(Ui)}catch(i){console.warn(i)}}}}).catch(r=>{throw Ln.create("idb-open",{originalErrorMessage:r.message})})),Dl}async function t5(r){try{const i=(await Df()).transaction(Ui),o=await i.objectStore(Ui).get(Uf(r));return await i.done,o}catch(n){if(n instanceof Bt)nn.warn(n.message);else{const i=Ln.create("idb-get",{originalErrorMessage:n?.message});nn.warn(i.message)}}}async function a0(r,n){try{const o=(await Df()).transaction(Ui,"readwrite");await o.objectStore(Ui).put(n,Uf(r)),await o.done}catch(i){if(i instanceof Bt)nn.warn(i.message);else{const o=Ln.create("idb-set",{originalErrorMessage:i?.message});nn.warn(o.message)}}}function Uf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const n5=1024,r5=30;class i5{constructor(n){this.container=n,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new o5(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=l0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>r5){const l=a5(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){nn.warn(n)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=l0(),{heartbeatsToSend:i,unsentEntries:o}=s5(this._heartbeatsCache.heartbeats),l=Ef(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return nn.warn(n),""}}}function l0(){return new Date().toISOString().substring(0,10)}function s5(r,n=n5){const i=[];let o=r.slice();for(const l of r){const u=i.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),c0(i)>n){u.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),c0(i)>n){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class o5{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nf()?Af().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await t5(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return a0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return a0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...n.heartbeats]})}else return}}function c0(r){return Ef(JSON.stringify({version:2,heartbeats:r})).length}function a5(r){if(r.length===0)return-1;let n=0,i=r[0].date;for(let o=1;o<r.length;o++)r[o].date<i&&(i=r[o].date,n=o);return n}/**
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
 */function l5(r){rn(new Ht("platform-logger",n=>new C6(n),"PRIVATE")),rn(new Ht("heartbeat",n=>new i5(n),"PRIVATE")),Ft(rc,s0,r),Ft(rc,s0,"esm2020"),Ft("fire-js","")}l5("");var c5="firebase",u5="12.2.1";/**
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
 */Ft(c5,u5,"app");const zf="@firebase/installations",xc="0.6.19";/**
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
 */const Ff=1e4,Vf=`w:${xc}`,Hf="FIS_v2",d5="https://firebaseinstallations.googleapis.com/v1",f5=3600*1e3,h5="installations",p5="Installations";/**
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
 */const m5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new cr(h5,p5,m5);function Bf(r){return r instanceof Bt&&r.code.includes("request-failed")}/**
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
 */function $f({projectId:r}){return`${d5}/projects/${r}/installations`}function Wf(r){return{token:r.token,requestStatus:2,expiresIn:y5(r.expiresIn),creationTime:Date.now()}}async function qf(r,n){const o=(await n.json()).error;return ir.create("request-failed",{requestName:r,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function Kf({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function g5(r,{refreshToken:n}){const i=Kf(r);return i.append("Authorization",v5(n)),i}async function Gf(r){const n=await r();return n.status>=500&&n.status<600?r():n}function y5(r){return Number(r.replace("s","000"))}function v5(r){return`${Hf} ${r}`}/**
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
 */async function w5({appConfig:r,heartbeatServiceProvider:n},{fid:i}){const o=$f(r),l=Kf(r),u=n.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:i,authVersion:Hf,appId:r.appId,sdkVersion:Vf},m={method:"POST",headers:l,body:JSON.stringify(f)},h=await Gf(()=>fetch(o,m));if(h.ok){const y=await h.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:Wf(y.authToken)}}else throw await qf("Create Installation",h)}/**
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
 */function Jf(r){return new Promise(n=>{setTimeout(n,r)})}/**
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
 */function C5(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const k5=/^[cdef][\w-]{21}$/,oc="";function _5(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=x5(r);return k5.test(i)?i:oc}catch{return oc}}function x5(r){return C5(r).substr(0,22)}/**
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
 */function Po(r){return`${r.appName}!${r.appId}`}/**
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
 */const Qf=new Map;function Yf(r,n){const i=Po(r);Zf(i,n),S5(i,n)}function Zf(r,n){const i=Qf.get(r);if(i)for(const o of i)o(n)}function S5(r,n){const i=E5();i&&i.postMessage({key:r,fid:n}),I5()}let tr=null;function E5(){return!tr&&"BroadcastChannel"in self&&(tr=new BroadcastChannel("[Firebase] FID Change"),tr.onmessage=r=>{Zf(r.data.key,r.data.fid)}),tr}function I5(){Qf.size===0&&tr&&(tr.close(),tr=null)}/**
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
 */const b5="firebase-installations-database",T5=1,sr="firebase-installations-store";let Ul=null;function Sc(){return Ul||(Ul=Of(b5,T5,{upgrade:(r,n)=>{switch(n){case 0:r.createObjectStore(sr)}}})),Ul}async function yo(r,n){const i=Po(r),l=(await Sc()).transaction(sr,"readwrite"),u=l.objectStore(sr),f=await u.get(i);return await u.put(n,i),await l.done,(!f||f.fid!==n.fid)&&Yf(r,n.fid),n}async function Xf(r){const n=Po(r),o=(await Sc()).transaction(sr,"readwrite");await o.objectStore(sr).delete(n),await o.done}async function No(r,n){const i=Po(r),l=(await Sc()).transaction(sr,"readwrite"),u=l.objectStore(sr),f=await u.get(i),m=n(f);return m===void 0?await u.delete(i):await u.put(m,i),await l.done,m&&(!f||f.fid!==m.fid)&&Yf(r,m.fid),m}/**
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
 */async function Ec(r){let n;const i=await No(r.appConfig,o=>{const l=P5(o),u=N5(r,l);return n=u.registrationPromise,u.installationEntry});return i.fid===oc?{installationEntry:await n}:{installationEntry:i,registrationPromise:n}}function P5(r){const n=r||{fid:_5(),registrationStatus:0};return e2(n)}function N5(r,n){if(n.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ir.create("app-offline"));return{installationEntry:n,registrationPromise:l}}const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},o=A5(r,i);return{installationEntry:i,registrationPromise:o}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:R5(r)}:{installationEntry:n}}async function A5(r,n){try{const i=await w5(r,n);return yo(r.appConfig,i)}catch(i){throw Bf(i)&&i.customData.serverCode===409?await Xf(r.appConfig):await yo(r.appConfig,{fid:n.fid,registrationStatus:0}),i}}async function R5(r){let n=await u0(r.appConfig);for(;n.registrationStatus===1;)await Jf(100),n=await u0(r.appConfig);if(n.registrationStatus===0){const{installationEntry:i,registrationPromise:o}=await Ec(r);return o||i}return n}function u0(r){return No(r,n=>{if(!n)throw ir.create("installation-not-found");return e2(n)})}function e2(r){return L5(r)?{fid:r.fid,registrationStatus:0}:r}function L5(r){return r.registrationStatus===1&&r.registrationTime+Ff<Date.now()}/**
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
 */async function O5({appConfig:r,heartbeatServiceProvider:n},i){const o=M5(r,i),l=g5(r,i),u=n.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:Vf,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(f)},h=await Gf(()=>fetch(o,m));if(h.ok){const y=await h.json();return Wf(y)}else throw await qf("Generate Auth Token",h)}function M5(r,{fid:n}){return`${$f(r)}/${n}/authTokens:generate`}/**
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
 */async function Ic(r,n=!1){let i;const o=await No(r.appConfig,u=>{if(!t2(u))throw ir.create("not-registered");const f=u.authToken;if(!n&&U5(f))return u;if(f.requestStatus===1)return i=j5(r,n),u;{if(!navigator.onLine)throw ir.create("app-offline");const m=F5(u);return i=D5(r,m),m}});return i?await i:o.authToken}async function j5(r,n){let i=await d0(r.appConfig);for(;i.authToken.requestStatus===1;)await Jf(100),i=await d0(r.appConfig);const o=i.authToken;return o.requestStatus===0?Ic(r,n):o}function d0(r){return No(r,n=>{if(!t2(n))throw ir.create("not-registered");const i=n.authToken;return V5(i)?{...n,authToken:{requestStatus:0}}:n})}async function D5(r,n){try{const i=await O5(r,n),o={...n,authToken:i};return await yo(r.appConfig,o),i}catch(i){if(Bf(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Xf(r.appConfig);else{const o={...n,authToken:{requestStatus:0}};await yo(r.appConfig,o)}throw i}}function t2(r){return r!==void 0&&r.registrationStatus===2}function U5(r){return r.requestStatus===2&&!z5(r)}function z5(r){const n=Date.now();return n<r.creationTime||r.creationTime+r.expiresIn<n+f5}function F5(r){const n={requestStatus:1,requestTime:Date.now()};return{...r,authToken:n}}function V5(r){return r.requestStatus===1&&r.requestTime+Ff<Date.now()}/**
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
 */async function H5(r){const n=r,{installationEntry:i,registrationPromise:o}=await Ec(n);return o?o.catch(console.error):Ic(n).catch(console.error),i.fid}/**
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
 */async function B5(r,n=!1){const i=r;return await $5(i),(await Ic(i,n)).token}async function $5(r){const{registrationPromise:n}=await Ec(r);n&&await n}/**
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
 */function W5(r){if(!r||!r.options)throw zl("App Configuration");if(!r.name)throw zl("App Name");const n=["projectId","apiKey","appId"];for(const i of n)if(!r.options[i])throw zl(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function zl(r){return ir.create("missing-app-config-values",{valueName:r})}/**
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
 */const n2="installations",q5="installations-internal",K5=r=>{const n=r.getProvider("app").getImmediate(),i=W5(n),o=Vr(n,"heartbeat");return{app:n,appConfig:i,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},G5=r=>{const n=r.getProvider("app").getImmediate(),i=Vr(n,n2).getImmediate();return{getId:()=>H5(i),getToken:l=>B5(i,l)}};function J5(){rn(new Ht(n2,K5,"PUBLIC")),rn(new Ht(q5,G5,"PRIVATE"))}J5();Ft(zf,xc);Ft(zf,xc,"esm2020");/**
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
 */const vo="analytics",Q5="firebase_id",Y5="origin",Z5=60*1e3,X5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bc="https://www.googletagmanager.com/gtag/js";/**
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
 */const at=new kc("@firebase/analytics");/**
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
 */const em={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new cr("analytics","Analytics",em);/**
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
 */function tm(r){if(!r.startsWith(bc)){const n=pt.create("invalid-gtag-resource",{gtagURL:r});return at.warn(n.message),""}return r}function r2(r){return Promise.all(r.map(n=>n.catch(i=>i)))}function nm(r,n){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,n)),i}function rm(r,n){const i=nm("firebase-js-sdk-policy",{createScriptURL:tm}),o=document.createElement("script"),l=`${bc}?l=${r}&id=${n}`;o.src=i?i?.createScriptURL(l):l,o.async=!0,document.head.appendChild(o)}function im(r){let n=[];return Array.isArray(window[r])?n=window[r]:window[r]=n,n}async function sm(r,n,i,o,l,u){const f=o[l];try{if(f)await n[f];else{const h=(await r2(i)).find(y=>y.measurementId===l);h&&await n[h.appId]}}catch(m){at.error(m)}r("config",l,u)}async function om(r,n,i,o,l){try{let u=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const m=await r2(i);for(const h of f){const y=m.find(_=>_.measurementId===h),S=y&&n[y.appId];if(S)u.push(S);else{u=[];break}}}u.length===0&&(u=Object.values(n)),await Promise.all(u),r("event",o,l||{})}catch(u){at.error(u)}}function am(r,n,i,o){async function l(u,...f){try{if(u==="event"){const[m,h]=f;await om(r,n,i,m,h)}else if(u==="config"){const[m,h]=f;await sm(r,n,i,o,m,h)}else if(u==="consent"){const[m,h]=f;r("consent",m,h)}else if(u==="get"){const[m,h,y]=f;r("get",m,h,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){at.error(m)}}return l}function lm(r,n,i,o,l){let u=function(...f){window[o].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=am(u,r,n,i),{gtagCore:u,wrappedGtag:window[l]}}function cm(r){const n=window.document.getElementsByTagName("script");for(const i of Object.values(n))if(i.src&&i.src.includes(bc)&&i.src.includes(r))return i;return null}/**
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
 */const um=30,dm=1e3;class fm{constructor(n={},i=dm){this.throttleMetadata=n,this.intervalMillis=i}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,i){this.throttleMetadata[n]=i}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const i2=new fm;function hm(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function pm(r){const{appId:n,apiKey:i}=r,o={method:"GET",headers:hm(i)},l=X5.replace("{app-id}",n),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function mm(r,n=i2,i){const{appId:o,apiKey:l,measurementId:u}=r.options;if(!o)throw pt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:o};throw pt.create("no-api-key")}const f=n.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new vm;return setTimeout(async()=>{m.abort()},Z5),s2({appId:o,apiKey:l,measurementId:u},f,m,n)}async function s2(r,{throttleEndTimeMillis:n,backoffCount:i},o,l=i2){const{appId:u,measurementId:f}=r;try{await gm(o,n)}catch(m){if(f)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await pm(r);return l.deleteThrottleMetadata(u),m}catch(m){const h=m;if(!ym(h)){if(l.deleteThrottleMetadata(u),f)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:u,measurementId:f};throw m}const y=Number(h?.customData?.httpStatus)===503?t0(i,l.intervalMillis,um):t0(i,l.intervalMillis),S={throttleEndTimeMillis:Date.now()+y,backoffCount:i+1};return l.setThrottleMetadata(u,S),at.debug(`Calling attemptFetch again in ${y} millis`),s2(r,S,o,l)}}function gm(r,n){return new Promise((i,o)=>{const l=Math.max(n-Date.now(),0),u=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(u),o(pt.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function ym(r){if(!(r instanceof Bt)||!r.customData)return!1;const n=Number(r.customData.httpStatus);return n===429||n===500||n===503||n===504}class vm{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function wm(r,n,i,o,l){if(l&&l.global){r("event",i,o);return}else{const u=await n,f={...o,send_to:u};r("event",i,f)}}/**
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
 */async function Cm(){if(Nf())try{await Af()}catch(r){return at.warn(pt.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return at.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function km(r,n,i,o,l,u,f){const m=mm(r);m.then(x=>{i[x.measurementId]=x.appId,r.options.measurementId&&x.measurementId!==r.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>at.error(x)),n.push(m);const h=Cm().then(x=>{if(x)return o.getId()}),[y,S]=await Promise.all([m,h]);cm(u)||rm(u,y.measurementId),l("js",new Date);const _=f?.config??{};return _[Y5]="firebase",_.update=!0,S!=null&&(_[Q5]=S),l("config",y.measurementId,_),y.measurementId}/**
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
 */class _m{constructor(n){this.app=n}_delete(){return delete Oi[this.app.options.appId],Promise.resolve()}}let Oi={},f0=[];const h0={};let Fl="dataLayer",xm="gtag",p0,o2,m0=!1;function Sm(){const r=[];if(Pf()&&r.push("This is a browser extension environment."),$3()||r.push("Cookies are not available."),r.length>0){const n=r.map((o,l)=>`(${l+1}) ${o}`).join(" "),i=pt.create("invalid-analytics-context",{errorInfo:n});at.warn(i.message)}}function Em(r,n,i){Sm();const o=r.options.appId;if(!o)throw pt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Oi[o]!=null)throw pt.create("already-exists",{id:o});if(!m0){im(Fl);const{wrappedGtag:u,gtagCore:f}=lm(Oi,f0,h0,Fl,xm);o2=u,p0=f,m0=!0}return Oi[o]=km(r,f0,h0,n,p0,Fl,i),new _m(r)}function Im(r=jf()){r=Ot(r);const n=Vr(r,vo);return n.isInitialized()?n.getImmediate():bm(r)}function bm(r,n={}){const i=Vr(r,vo);if(i.isInitialized()){const l=i.getImmediate();if(rr(n,i.getOptions()))return l;throw pt.create("already-initialized")}return i.initialize({options:n})}function Tm(r,n,i,o){r=Ot(r),wm(o2,Oi[r.app.options.appId],n,i,o).catch(l=>at.error(l))}const g0="@firebase/analytics",y0="0.10.18";function Pm(){rn(new Ht(vo,(n,{options:i})=>{const o=n.getProvider("app").getImmediate(),l=n.getProvider("installations-internal").getImmediate();return Em(o,l,i)},"PUBLIC")),rn(new Ht("analytics-internal",r,"PRIVATE")),Ft(g0,y0),Ft(g0,y0,"esm2020");function r(n){try{const i=n.getProvider(vo).getImmediate();return{logEvent:(o,l,u)=>Tm(i,o,l,u)}}catch(i){throw pt.create("interop-component-reg-failed",{reason:i})}}}Pm();function a2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nm=a2,l2=new cr("auth","Firebase",a2());/**
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
 */const wo=new kc("@firebase/auth");function Am(r,...n){wo.logLevel<=ge.WARN&&wo.warn(`Auth (${$i}): ${r}`,...n)}function co(r,...n){wo.logLevel<=ge.ERROR&&wo.error(`Auth (${$i}): ${r}`,...n)}/**
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
 */function St(r,...n){throw Pc(r,...n)}function Lt(r,...n){return Pc(r,...n)}function Tc(r,n,i){const o={...Nm(),[n]:i};return new cr("auth","Firebase",o).create(n,{appName:r.name})}function tn(r){return Tc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rm(r,n,i){const o=i;if(!(n instanceof o))throw o.name!==n.constructor.name&&St(r,"argument-error"),Tc(r,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pc(r,...n){if(typeof r!="string"){const i=n[0],o=[...n.slice(1)];return o[0]&&(o[0].appName=r.name),r._errorFactory.create(i,...o)}return l2.create(r,...n)}function re(r,n,...i){if(!r)throw Pc(n,...i)}function Xt(r){const n="INTERNAL ASSERTION FAILED: "+r;throw co(n),new Error(n)}function sn(r,n){r||Xt(n)}/**
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
 */function ac(){return typeof self<"u"&&self.location?.href||""}function Lm(){return v0()==="http:"||v0()==="https:"}function v0(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Om(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||Pf()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Wi{constructor(n,i){this.shortDelay=n,this.longDelay=i,sn(i>n,"Short delay should be less than long delay!"),this.isMobile=F3()||H3()}get(){return Om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nc(r,n){sn(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}/**
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
 */class c2{static initialize(n,i,o){this.fetchImpl=n,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Um=new Wi(3e4,6e4);function jn(r,n){return r.tenantId&&!n.tenantId?{...n,tenantId:r.tenantId}:n}async function Dn(r,n,i,o,l={}){return u2(r,l,async()=>{let u={},f={};o&&(n==="GET"?f=o:u={body:JSON.stringify(o)});const m=Bi({key:r.config.apiKey,...f}).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const y={method:n,headers:h,...u};return V3()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&To(r.emulatorConfig.host)&&(y.credentials="include"),c2.fetch()(await d2(r,r.config.apiHost,i,m),y)})}async function u2(r,n,i){r._canInitEmulator=!1;const o={...jm,...n};try{const l=new Fm(r),u=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw oo(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[h,y]=m.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(r,"credential-already-in-use",f);if(h==="EMAIL_EXISTS")throw oo(r,"email-already-in-use",f);if(h==="USER_DISABLED")throw oo(r,"user-disabled",f);const S=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Tc(r,S,y);St(r,S)}}catch(l){if(l instanceof Bt)throw l;St(r,"network-request-failed",{message:String(l)})}}async function qi(r,n,i,o,l={}){const u=await Dn(r,n,i,o,l);return"mfaPendingCredential"in u&&St(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function d2(r,n,i,o){const l=`${n}${i}?${o}`,u=r,f=u.config.emulator?Nc(r.config,l):`${r.config.apiScheme}://${l}`;return Dm.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function zm(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Lt(this.auth,"network-request-failed")),Um.get())})}}function oo(r,n,i){const o={appName:r.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Lt(r,n,o);return l.customData._tokenResponse=i,l}function w0(r){return r!==void 0&&r.enterprise!==void 0}class Vm{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===n)return zm(i.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hm(r,n){return Dn(r,"GET","/v2/recaptchaConfig",jn(r,n))}/**
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
 */async function Bm(r,n){return Dn(r,"POST","/v1/accounts:delete",n)}async function Co(r,n){return Dn(r,"POST","/v1/accounts:lookup",n)}/**
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
 */function Mi(r){if(r)try{const n=new Date(Number(r));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function $m(r,n=!1){const i=Ot(r),o=await i.getIdToken(n),l=Ac(o);re(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u?.sign_in_provider;return{claims:l,token:o,authTime:Mi(Vl(l.auth_time)),issuedAtTime:Mi(Vl(l.iat)),expirationTime:Mi(Vl(l.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Vl(r){return Number(r)*1e3}function Ac(r){const[n,i,o]=r.split(".");if(n===void 0||i===void 0||o===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const l=If(i);return l?JSON.parse(l):(co("Failed to decode base64 JWT payload"),null)}catch(l){return co("Caught error parsing JWT payload as JSON",l?.toString()),null}}function C0(r){const n=Ac(r);return re(n,"internal-error"),re(typeof n.exp<"u","internal-error"),re(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function zi(r,n,i=!1){if(i)return n;try{return await n}catch(o){throw o instanceof Bt&&Wm(o)&&r.auth.currentUser===r&&await r.auth.signOut(),o}}function Wm({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class qm{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(n=!1){if(!this.isRunning)return;const i=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){n?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(n,i){this.createdAt=n,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(r){const n=r.auth,i=await r.getIdToken(),o=await zi(r,Co(n,{idToken:i}));re(o?.users.length,n,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const u=l.providerUserInfo?.length?f2(l.providerUserInfo):[],f=Gm(r.providerData,u),m=r.isAnonymous,h=!(r.email&&l.passwordHash)&&!f?.length,y=m?h:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new lc(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,S)}async function Km(r){const n=Ot(r);await ko(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function Gm(r,n){return[...r.filter(o=>!n.some(l=>l.providerId===o.providerId)),...n]}function f2(r){return r.map(({providerId:n,...i})=>({providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Jm(r,n){const i=await u2(r,{},async()=>{const o=Bi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await d2(r,l,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:m,body:o};return r.emulatorConfig&&To(r.emulatorConfig.host)&&(h.credentials="include"),c2.fetch()(f,h)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Qm(r,n){return Dn(r,"POST","/v2/accounts:revokeToken",jn(r,n))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){re(n.idToken,"internal-error"),re(typeof n.idToken<"u","internal-error"),re(typeof n.refreshToken<"u","internal-error");const i="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):C0(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,i)}updateFromIdToken(n){re(n.length!==0,"internal-error");const i=C0(n);this.updateTokensAndExpiration(n,null,i)}async getToken(n,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,i){const{accessToken:o,refreshToken:l,expiresIn:u}=await Jm(n,i);this.updateTokensAndExpiration(o,l,Number(u))}updateTokensAndExpiration(n,i,o){this.refreshToken=i||null,this.accessToken=n||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(n,i){const{refreshToken:o,accessToken:l,expirationTime:u}=i,f=new jr;return o&&(re(typeof o=="string","internal-error",{appName:n}),f.refreshToken=o),l&&(re(typeof l=="string","internal-error",{appName:n}),f.accessToken=l),u&&(re(typeof u=="number","internal-error",{appName:n}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function En(r,n){re(typeof r=="string"||typeof r>"u","internal-error",{appName:n})}class Rt{constructor({uid:n,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new lc(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(n){const i=await zi(this,this.stsTokenManager.getToken(this.auth,n));return re(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(n){return $m(this,n)}reload(){return Km(this)}_assign(n){this!==n&&(re(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(i=>({...i})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const i=new Rt({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(n){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,i=!1){let o=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),o=!0),i&&await ko(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(tn(this.auth));const n=await this.getIdToken();return await zi(this,Bm(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,i){const o=i.displayName??void 0,l=i.email??void 0,u=i.phoneNumber??void 0,f=i.photoURL??void 0,m=i.tenantId??void 0,h=i._redirectEventId??void 0,y=i.createdAt??void 0,S=i.lastLoginAt??void 0,{uid:_,emailVerified:x,isAnonymous:A,providerData:P,stsTokenManager:L}=i;re(_&&L,n,"internal-error");const R=jr.fromJSON(this.name,L);re(typeof _=="string",n,"internal-error"),En(o,n.name),En(l,n.name),re(typeof x=="boolean",n,"internal-error"),re(typeof A=="boolean",n,"internal-error"),En(u,n.name),En(f,n.name),En(m,n.name),En(h,n.name),En(y,n.name),En(S,n.name);const q=new Rt({uid:_,auth:n,email:l,emailVerified:x,displayName:o,isAnonymous:A,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:R,createdAt:y,lastLoginAt:S});return P&&Array.isArray(P)&&(q.providerData=P.map($=>({...$}))),h&&(q._redirectEventId=h),q}static async _fromIdTokenResponse(n,i,o=!1){const l=new jr;l.updateFromServerResponse(i);const u=new Rt({uid:i.localId,auth:n,stsTokenManager:l,isAnonymous:o});return await ko(u),u}static async _fromGetAccountInfoResponse(n,i,o){const l=i.users[0];re(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?f2(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!u?.length,m=new jr;m.updateFromIdToken(o);const h=new Rt({uid:l.localId,auth:n,stsTokenManager:m,isAnonymous:f}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new lc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(h,y),h}}/**
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
 */const k0=new Map;function en(r){sn(r instanceof Function,"Expected a class definition");let n=k0.get(r);return n?(sn(n instanceof r,"Instance stored in cache mismatched with class"),n):(n=new r,k0.set(r,n),n)}/**
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
 */class h2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,i){this.storage[n]=i}async _get(n){const i=this.storage[n];return i===void 0?null:i}async _remove(n){delete this.storage[n]}_addListener(n,i){}_removeListener(n,i){}}h2.type="NONE";const _0=h2;/**
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
 */function uo(r,n,i){return`firebase:${r}:${n}:${i}`}class Dr{constructor(n,i,o){this.persistence=n,this.auth=i,this.userKey=o;const{config:l,name:u}=this.auth;this.fullUserKey=uo(this.userKey,l.apiKey,u),this.fullPersistenceKey=uo("persistence",l.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const i=await Co(this.auth,{idToken:n}).catch(()=>{});return i?Rt._fromGetAccountInfoResponse(this.auth,i,n):null}return Rt._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,i,o="authUser"){if(!i.length)return new Dr(en(_0),n,o);const l=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=l[0]||en(_0);const f=uo(o,n.config.apiKey,n.name);let m=null;for(const y of i)try{const S=await y._get(f);if(S){let _;if(typeof S=="string"){const x=await Co(n,{idToken:S}).catch(()=>{});if(!x)break;_=await Rt._fromGetAccountInfoResponse(n,x,S)}else _=Rt._fromJSON(n,S);y!==u&&(m=_),u=y;break}}catch{}const h=l.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!h.length?new Dr(u,n,o):(u=h[0],m&&await u._set(f,m.toJSON()),await Promise.all(i.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Dr(u,n,o))}}/**
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
 */function x0(r){const n=r.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(y2(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(p2(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(w2(n))return"Blackberry";if(C2(n))return"Webos";if(m2(n))return"Safari";if((n.includes("chrome/")||g2(n))&&!n.includes("edge/"))return"Chrome";if(v2(n))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=r.match(i);if(o?.length===2)return o[1]}return"Other"}function p2(r=Ye()){return/firefox\//i.test(r)}function m2(r=Ye()){const n=r.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function g2(r=Ye()){return/crios\//i.test(r)}function y2(r=Ye()){return/iemobile/i.test(r)}function v2(r=Ye()){return/android/i.test(r)}function w2(r=Ye()){return/blackberry/i.test(r)}function C2(r=Ye()){return/webos/i.test(r)}function Rc(r=Ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ym(r=Ye()){return Rc(r)&&!!window.navigator?.standalone}function Zm(){return B3()&&document.documentMode===10}function k2(r=Ye()){return Rc(r)||v2(r)||C2(r)||w2(r)||/windows phone/i.test(r)||y2(r)}/**
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
 */function _2(r,n=[]){let i;switch(r){case"Browser":i=x0(Ye());break;case"Worker":i=`${x0(Ye())}-${r}`;break;default:i=r}const o=n.length?n.join(","):"FirebaseCore-web";return`${i}/JsCore/${$i}/${o}`}/**
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
 */class Xm{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,i){const o=u=>new Promise((f,m)=>{try{const h=n(u);f(h)}catch(h){m(h)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const i=[];try{for(const o of this.queue)await o(n),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function e8(r,n={}){return Dn(r,"GET","/v2/passwordPolicy",jn(r,n))}/**
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
 */const t8=6;class n8{constructor(n){const i=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??t8,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=n.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,i),this.validatePasswordCharacterOptions(n,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(n,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=n.length>=o),l&&(i.meetsMaxPasswordLength=n.length<=l)}validatePasswordCharacterOptions(n,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<n.length;l++)o=n.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(n,i,o,l,u){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=u))}}/**
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
 */class r8{constructor(n,i,o,l){this.app=n,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S0(this),this.idTokenSubscription=new S0(this),this.beforeStateQueue=new Xm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(n,i){return i&&(this._popupRedirectResolver=en(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Dr.create(this,n),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const i=await Co(this,{idToken:n}),o=await Rt._fromGetAccountInfoResponse(this,i,n);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){if(_t(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=o?._redirectEventId,m=await this.tryRedirectSignIn(n);(!u||u===f)&&m?.user&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(n){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(n){try{await ko(n)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(_t(this.app))return Promise.reject(tn(this));const i=n?Ot(n):null;return i&&re(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(n,i=!1){if(!this._deleted)return n&&re(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return _t(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await e8(this),i=new n8(n);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new cr("auth","Firebase",n())}onAuthStateChanged(n,i,o){return this.registerStateListener(this.authStateSubscription,n,i,o)}beforeAuthStateChanged(n,i){return this.beforeStateQueue.pushCallback(n,i)}onIdTokenChanged(n,i,o){return this.registerStateListener(this.idTokenSubscription,n,i,o)}authStateReady(){return new Promise((n,i)=>{if(this.currentUser)n();else{const o=this.onAuthStateChanged(()=>{o(),n()},i)}})}async revokeAccessToken(n){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await Qm(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(n,i){const o=await this.getOrInitRedirectPersistenceManager(i);return n===null?o.removeCurrentUser():o.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const i=n&&en(n)||this._popupRedirectResolver;re(i,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[en(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===n?this._currentUser:this.redirectUser?._redirectEventId===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=this.currentUser?.uid??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,i,o,l){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof i=="function"){const h=n.addObserver(i,o,l);return()=>{f=!0,h()}}else{const h=n.addObserver(i);return()=>{f=!0,h()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=_2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return n?.error&&Am(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Un(r){return Ot(r)}class S0{constructor(n){this.auth=n,this.observer=null,this.addObserver=J3(i=>this.observer=i)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i8(r){Ao=r}function x2(r){return Ao.loadJS(r)}function s8(){return Ao.recaptchaEnterpriseScript}function o8(){return Ao.gapiScript}function a8(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class l8{constructor(){this.enterprise=new c8}ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}class c8{ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}const u8="recaptcha-enterprise",S2="NO_RECAPTCHA";class d8{constructor(n){this.type=u8,this.auth=Un(n)}async verify(n="verify",i=!1){async function o(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{Hm(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new Vm(h);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(h=>{m(h)})})}function l(u,f,m){const h=window.grecaptcha;w0(h)?h.enterprise.ready(()=>{h.enterprise.execute(u,{action:n}).then(y=>{f(y)}).catch(()=>{f(S2)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new l8().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{o(this.auth).then(m=>{if(!i&&w0(window.grecaptcha))l(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let h=s8();h.length!==0&&(h+=m),x2(h).then(()=>{l(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function E0(r,n,i,o=!1,l=!1){const u=new d8(r);let f;if(l)f=S2;else try{f=await u.verify(i)}catch{f=await u.verify(i,!0)}const m={...n};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const h=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const h=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return o?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function cc(r,n,i,o,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await E0(r,n,i,i==="getOobCode");return o(r,u)}else return o(r,n).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await E0(r,n,i,i==="getOobCode");return o(r,f)}else return Promise.reject(u)})}/**
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
 */function f8(r,n){const i=Vr(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),u=i.getOptions();if(rr(u,n??{}))return l;St(l,"already-initialized")}return i.initialize({options:n})}function h8(r,n){const i=n?.persistence||[],o=(Array.isArray(i)?i:[i]).map(en);n?.errorMap&&r._updateErrorMap(n.errorMap),r._initializeWithPersistence(o,n?.popupRedirectResolver)}function p8(r,n,i){const o=Un(r);re(/^https?:\/\//.test(n),o,"invalid-emulator-scheme");const l=!1,u=E2(n),{host:f,port:m}=m8(n),h=m===null?"":`:${m}`,y={url:`${u}//${f}${h}/`},S=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){re(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),re(rr(y,o.config.emulator)&&rr(S,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=y,o.emulatorConfig=S,o.settings.appVerificationDisabledForTesting=!0,To(f)?(j3(`${u}//${f}${h}`),z3("Auth",!0)):g8()}function E2(r){const n=r.indexOf(":");return n<0?"":r.substr(0,n+1)}function m8(r){const n=E2(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(n.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const u=l[1];return{host:u,port:I0(o.substr(u.length+1))}}else{const[u,f]=o.split(":");return{host:u,port:I0(f)}}}function I0(r){if(!r)return null;const n=Number(r);return isNaN(n)?null:n}function g8(){function r(){const n=document.createElement("p"),i=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Lc{constructor(n,i){this.providerId=n,this.signInMethod=i}toJSON(){return Xt("not implemented")}_getIdTokenResponse(n){return Xt("not implemented")}_linkToIdToken(n,i){return Xt("not implemented")}_getReauthenticationResolver(n){return Xt("not implemented")}}async function y8(r,n){return Dn(r,"POST","/v1/accounts:signUp",n)}/**
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
 */async function v8(r,n){return qi(r,"POST","/v1/accounts:signInWithPassword",jn(r,n))}/**
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
 */async function w8(r,n){return qi(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,n))}async function C8(r,n){return qi(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,n))}/**
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
 */class Fi extends Lc{constructor(n,i,o,l=null){super("password",o),this._email=n,this._password=i,this._tenantId=l}static _fromEmailAndPassword(n,i){return new Fi(n,i,"password")}static _fromEmailAndCode(n,i,o=null){return new Fi(n,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(n,i,"signInWithPassword",v8);case"emailLink":return w8(n,{email:this._email,oobCode:this._password});default:St(n,"internal-error")}}async _linkToIdToken(n,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(n,o,"signUpPassword",y8);case"emailLink":return C8(n,{idToken:i,email:this._email,oobCode:this._password});default:St(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
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
 */const k8="http://localhost";class or extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const i=new or(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(i.idToken=n.idToken),n.accessToken&&(i.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(i.nonce=n.nonce),n.pendingToken&&(i.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(i.accessToken=n.oauthToken,i.secret=n.oauthTokenSecret):St("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n,{providerId:o,signInMethod:l,...u}=i;if(!o||!l)return null;const f=new or(o,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(n){const i=this.buildRequest();return Ur(n,i)}_linkToIdToken(n,i){const o=this.buildRequest();return o.idToken=i,Ur(n,o)}_getReauthenticationResolver(n){const i=this.buildRequest();return i.autoCreate=!1,Ur(n,i)}buildRequest(){const n={requestUri:k8,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),n.postBody=Bi(i)}return n}}/**
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
 */function _8(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x8(r){const n=Ai(Ri(r)).link,i=n?Ai(Ri(n)).deep_link_id:null,o=Ai(Ri(r)).deep_link_id;return(o?Ai(Ri(o)).link:null)||o||i||n||r}class Oc{constructor(n){const i=Ai(Ri(n)),o=i.apiKey??null,l=i.oobCode??null,u=_8(i.mode??null);re(o&&l&&u,"argument-error"),this.apiKey=o,this.operation=u,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(n){const i=x8(n);try{return new Oc(i)}catch{return null}}}/**
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
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(n,i){return Fi._fromEmailAndPassword(n,i)}static credentialWithLink(n,i){const o=Oc.parseLink(i);return re(o,"argument-error"),Fi._fromEmailAndCode(n,o.code,o.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mc{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends Mc{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(n,i){return or._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:i})}static credentialFromResult(n){return Zt.credentialFromTaggedObject(n)}static credentialFromError(n){return Zt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:i,oauthAccessToken:o}=n;if(!i&&!o)return null;try{return Zt.credential(i,o)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */async function S8(r,n){return qi(r,"POST","/v1/accounts:signUp",jn(r,n))}/**
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
 */class ar{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,i,o,l=!1){const u=await Rt._fromIdTokenResponse(n,o,l),f=b0(o);return new ar({user:u,providerId:f,_tokenResponse:o,operationType:i})}static async _forOperation(n,i,o){await n._updateTokensIfNecessary(o,!0);const l=b0(o);return new ar({user:n,providerId:l,_tokenResponse:o,operationType:i})}}function b0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class _o extends Bt{constructor(n,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(n,i,o,l){return new _o(n,i,o,l)}}function I2(r,n,i,o){return(n==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(r,u,n,o):u})}async function E8(r,n,i=!1){const o=await zi(r,n._linkToIdToken(r.auth,await r.getIdToken()),i);return ar._forOperation(r,"link",o)}/**
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
 */async function I8(r,n,i=!1){const{auth:o}=r;if(_t(o.app))return Promise.reject(tn(o));const l="reauthenticate";try{const u=await zi(r,I2(o,l,n,r),i);re(u.idToken,o,"internal-error");const f=Ac(u.idToken);re(f,o,"internal-error");const{sub:m}=f;return re(r.uid===m,o,"user-mismatch"),ar._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&St(o,"user-mismatch"),u}}/**
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
 */async function b2(r,n,i=!1){if(_t(r.app))return Promise.reject(tn(r));const o="signIn",l=await I2(r,o,n),u=await ar._fromIdTokenResponse(r,o,l);return i||await r._updateCurrentUser(u.user),u}async function b8(r,n){return b2(Un(r),n)}/**
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
 */async function T2(r){const n=Un(r);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function T8(r,n,i){if(_t(r.app))return Promise.reject(tn(r));const o=Un(r),f=await cc(o,{returnSecureToken:!0,email:n,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",S8).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&T2(r),h}),m=await ar._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(m.user),m}function P8(r,n,i){return _t(r.app)?Promise.reject(tn(r)):b8(Ot(r),Hr.credential(n,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&T2(r),o})}function N8(r,n,i,o){return Ot(r).onIdTokenChanged(n,i,o)}function A8(r,n,i){return Ot(r).beforeAuthStateChanged(n,i)}function R8(r,n,i,o){return Ot(r).onAuthStateChanged(n,i,o)}function L8(r){return Ot(r).signOut()}const xo="__sak";/**
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
 */class P2{constructor(n,i){this.storageRetriever=n,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,i){return this.storage.setItem(n,JSON.stringify(i)),Promise.resolve()}_get(n){const i=this.storage.getItem(n);return Promise.resolve(i?JSON.parse(i):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const O8=1e3,M8=10;class N2 extends P2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,i)=>this.onStorageEvent(n,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k2(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&n(i,l,o)}}onStorageEvent(n,i=!1){if(!n.key){this.forAllChangedKeys((f,m,h)=>{this.notifyListeners(f,h)});return}const o=n.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},u=this.storage.getItem(o);Zm()&&u!==n.newValue&&n.newValue!==n.oldValue?setTimeout(l,M8):l()}notifyListeners(n,i){this.localCache[n]=i;const o=this.listeners[n];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:i,newValue:o}),!0)})},O8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,i){await super._set(n,i),this.localCache[n]=JSON.stringify(i)}async _get(n){const i=await super._get(n);return this.localCache[n]=JSON.stringify(i),i}async _remove(n){await super._remove(n),delete this.localCache[n]}}N2.type="LOCAL";const j8=N2;/**
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
 */class A2 extends P2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,i){}_removeListener(n,i){}}A2.type="SESSION";const R2=A2;/**
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
 */function D8(r){return Promise.all(r.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Ro{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const i=this.receivers.find(l=>l.isListeningto(n));if(i)return i;const o=new Ro(n);return this.receivers.push(o),o}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const i=n,{eventId:o,eventType:l,data:u}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const m=Array.from(f).map(async y=>y(i.origin,u)),h=await D8(m);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:h})}_subscribe(n,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(i)}_unsubscribe(n,i){this.handlersMap[n]&&i&&this.handlersMap[n].delete(i),(!i||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
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
 */function jc(r="",n=10){let i="";for(let o=0;o<n;o++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class U8{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((m,h)=>{const y=jc("",20);l.port1.start();const S=setTimeout(()=>{h(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(_){const x=_;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(S),u=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(S),clearTimeout(u),h(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:n,eventId:y,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Vt(){return window}function z8(r){Vt().location.href=r}/**
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
 */function L2(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function F8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V8(){return navigator?.serviceWorker?.controller||null}function H8(){return L2()?self:null}/**
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
 */const O2="firebaseLocalStorageDb",B8=1,So="firebaseLocalStorage",M2="fbase_key";class Gi{constructor(n){this.request=n}toPromise(){return new Promise((n,i)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Lo(r,n){return r.transaction([So],n?"readwrite":"readonly").objectStore(So)}function $8(){const r=indexedDB.deleteDatabase(O2);return new Gi(r).toPromise()}function uc(){const r=indexedDB.open(O2,B8);return new Promise((n,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const o=r.result;try{o.createObjectStore(So,{keyPath:M2})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const o=r.result;o.objectStoreNames.contains(So)?n(o):(o.close(),await $8(),n(await uc()))})})}async function T0(r,n,i){const o=Lo(r,!0).put({[M2]:n,value:i});return new Gi(o).toPromise()}async function W8(r,n){const i=Lo(r,!1).get(n),o=await new Gi(i).toPromise();return o===void 0?null:o.value}function P0(r,n){const i=Lo(r,!0).delete(n);return new Gi(i).toPromise()}const q8=800,K8=3;class j2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(n){let i=0;for(;;)try{const o=await this._openDb();return await n(o)}catch(o){if(i++>K8)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(H8()),this.receiver._subscribe("keyChanged",async(n,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(n,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await F8(),!this.activeServiceWorker)return;this.sender=new U8(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&n[0]?.fulfilled&&n[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||V8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await uc();return await T0(n,xo,"1"),await P0(n,xo),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>T0(o,n,i)),this.localCache[n]=i,this.notifyServiceWorker(n)))}async _get(n){const i=await this._withRetries(o=>W8(o,n));return this.localCache[n]=i,i}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(i=>P0(i,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(l=>{const u=Lo(l,!1).getAll();return new Gi(u).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(n.length!==0)for(const{fbase_key:l,value:u}of n)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(n,i){this.localCache[n]=i;const o=this.listeners[n];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j2.type="LOCAL";const G8=j2;new Wi(3e4,6e4);/**
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
 */function D2(r,n){return n?en(n):(re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Dc extends Lc{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Ur(n,this._buildIdpRequest())}_linkToIdToken(n,i){return Ur(n,this._buildIdpRequest(i))}_getReauthenticationResolver(n){return Ur(n,this._buildIdpRequest())}_buildIdpRequest(n){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(i.idToken=n),i}}function J8(r){return b2(r.auth,new Dc(r),r.bypassAuthState)}function Q8(r){const{auth:n,user:i}=r;return re(i,n,"internal-error"),I8(i,new Dc(r),r.bypassAuthState)}async function Y8(r){const{auth:n,user:i}=r;return re(i,n,"internal-error"),E8(i,new Dc(r),r.bypassAuthState)}/**
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
 */class U2{constructor(n,i,o,l,u=!1){this.auth=n,this.resolver=o,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(n,i)=>{this.pendingPromise={resolve:n,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(n){const{urlResponse:i,sessionId:o,postBody:l,tenantId:u,error:f,type:m}=n;if(f){this.reject(f);return}const h={auth:this.auth,requestUri:i,sessionId:o,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(h))}catch(y){this.reject(y)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return J8;case"linkViaPopup":case"linkViaRedirect":return Y8;case"reauthViaPopup":case"reauthViaRedirect":return Q8;default:St(this.auth,"internal-error")}}resolve(n){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Z8=new Wi(2e3,1e4);async function X8(r,n,i){if(_t(r.app))return Promise.reject(Lt(r,"operation-not-supported-in-this-environment"));const o=Un(r);Rm(r,n,Mc);const l=D2(o,i);return new nr(o,"signInViaPopup",n,l).executeNotNull()}class nr extends U2{constructor(n,i,o,l,u){super(n,i,l,u),this.provider=o,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return re(n,this.auth,"internal-error"),n}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const n=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const n=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,Z8.get())};n()}}nr.currentPopupAction=null;/**
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
 */const e9="pendingRedirect",fo=new Map;class t9 extends U2{constructor(n,i,o=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let n=fo.get(this.auth._key());if(!n){try{const o=await n9(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(o)}catch(i){n=()=>Promise.reject(i)}fo.set(this.auth._key(),n)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const i=await this.auth._redirectUserForId(n.eventId);if(i)return this.user=i,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n9(r,n){const i=s9(n),o=i9(r);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function r9(r,n){fo.set(r._key(),n)}function i9(r){return en(r._redirectPersistence)}function s9(r){return uo(e9,r.config.apiKey,r.name)}async function o9(r,n,i=!1){if(_t(r.app))return Promise.reject(tn(r));const o=Un(r),l=D2(o,n),f=await new t9(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,n)),f}/**
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
 */const a9=600*1e3;class l9{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(n,o)&&(i=!0,this.sendToConsumer(n,o),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!c9(n)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=n,i=!0)),i}sendToConsumer(n,i){if(n.error&&!z2(n)){const o=n.error.code?.split("auth/")[1]||"internal-error";i.onError(Lt(this.auth,o))}else i.onAuthEvent(n)}isEventForConsumer(n,i){const o=i.eventId===null||!!n.eventId&&n.eventId===i.eventId;return i.filter.includes(n.type)&&o}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=a9&&this.cachedEventUids.clear(),this.cachedEventUids.has(N0(n))}saveEventToCache(n){this.cachedEventUids.add(N0(n)),this.lastProcessedEventTime=Date.now()}}function N0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(n=>n).join("-")}function z2({type:r,error:n}){return r==="unknown"&&n?.code==="auth/no-auth-event"}function c9(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z2(r);default:return!1}}/**
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
 */async function u9(r,n={}){return Dn(r,"GET","/v1/projects",n)}/**
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
 */const d9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f9=/^https?/;async function h9(r){if(r.config.emulator)return;const{authorizedDomains:n}=await u9(r);for(const i of n)try{if(p9(i))return}catch{}St(r,"unauthorized-domain")}function p9(r){const n=ac(),{protocol:i,hostname:o}=new URL(n);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&o===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===n.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!f9.test(i))return!1;if(d9.test(r))return o===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
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
 */const m9=new Wi(3e4,6e4);function A0(){const r=Vt().___jsl;if(r?.H){for(const n of Object.keys(r.H))if(r.H[n].r=r.H[n].r||[],r.H[n].L=r.H[n].L||[],r.H[n].r=[...r.H[n].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function g9(r){return new Promise((n,i)=>{function o(){A0(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{A0(),i(Lt(r,"network-request-failed"))},timeout:m9.get()})}if(Vt().gapi?.iframes?.Iframe)n(gapi.iframes.getContext());else if(Vt().gapi?.load)o();else{const l=a8("iframefcb");return Vt()[l]=()=>{gapi.load?o():i(Lt(r,"network-request-failed"))},x2(`${o8()}?onload=${l}`).catch(u=>i(u))}}).catch(n=>{throw ho=null,n})}let ho=null;function y9(r){return ho=ho||g9(r),ho}/**
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
 */const v9=new Wi(5e3,15e3),w9="__/auth/iframe",C9="emulator/auth/iframe",k9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x9(r){const n=r.config;re(n.authDomain,r,"auth-domain-config-required");const i=n.emulator?Nc(n,C9):`https://${r.config.authDomain}/${w9}`,o={apiKey:n.apiKey,appName:r.name,v:$i},l=_9.get(r.config.apiHost);l&&(o.eid=l);const u=r._getFrameworks();return u.length&&(o.fw=u.join(",")),`${i}?${Bi(o).slice(1)}`}async function S9(r){const n=await y9(r),i=Vt().gapi;return re(i,r,"internal-error"),n.open({where:document.body,url:x9(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k9,dontclear:!0},o=>new Promise(async(l,u)=>{await o.restyle({setHideOnLeave:!1});const f=Lt(r,"network-request-failed"),m=Vt().setTimeout(()=>{u(f)},v9.get());function h(){Vt().clearTimeout(m),l(o)}o.ping(h).then(h,()=>{u(f)})}))}/**
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
 */const E9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I9=500,b9=600,T9="_blank",P9="http://localhost";class R0{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N9(r,n,i,o=I9,l=b9){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let m="";const h={...E9,width:o.toString(),height:l.toString(),top:u,left:f},y=Ye().toLowerCase();i&&(m=g2(y)?T9:i),p2(y)&&(n=n||P9,h.scrollbars="yes");const S=Object.entries(h).reduce((x,[A,P])=>`${x}${A}=${P},`,"");if(Ym(y)&&m!=="_self")return A9(n||"",m),new R0(null);const _=window.open(n||"",m,S);re(_,r,"popup-blocked");try{_.focus()}catch{}return new R0(_)}function A9(r,n){const i=document.createElement("a");i.href=r,i.target=n;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const R9="__/auth/handler",L9="emulator/auth/handler",O9=encodeURIComponent("fac");async function L0(r,n,i,o,l,u){re(r.config.authDomain,r,"auth-domain-config-required"),re(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:o,v:$i,eventId:l};if(n instanceof Mc){n.setDefaultLanguage(r.languageCode),f.providerId=n.providerId||"",G3(n.getCustomParameters())||(f.customParameters=JSON.stringify(n.getCustomParameters()));for(const[S,_]of Object.entries({}))f[S]=_}if(n instanceof Ki){const S=n.getScopes().filter(_=>_!=="");S.length>0&&(f.scopes=S.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const S of Object.keys(m))m[S]===void 0&&delete m[S];const h=await r._getAppCheckToken(),y=h?`#${O9}=${encodeURIComponent(h)}`:"";return`${M9(r)}?${Bi(m).slice(1)}${y}`}function M9({config:r}){return r.emulator?Nc(r,L9):`https://${r.authDomain}/${R9}`}/**
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
 */const Hl="webStorageSupport";class j9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R2,this._completeRedirectFn=o9,this._overrideRedirectResult=r9}async _openPopup(n,i,o,l){sn(this.eventManagers[n._key()]?.manager,"_initialize() not called before _openPopup()");const u=await L0(n,i,o,ac(),l);return N9(n,u,jc())}async _openRedirect(n,i,o,l){await this._originValidation(n);const u=await L0(n,i,o,ac(),l);return z8(u),new Promise(()=>{})}_initialize(n){const i=n._key();if(this.eventManagers[i]){const{manager:l,promise:u}=this.eventManagers[i];return l?Promise.resolve(l):(sn(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(n);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(n){const i=await S9(n),o=new l9(n);return i.register("authEvent",l=>(re(l?.authEvent,n,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:o},this.iframes[n._key()]=i,o}_isIframeWebStorageSupported(n,i){this.iframes[n._key()].send(Hl,{type:Hl},l=>{const u=l?.[0]?.[Hl];u!==void 0&&i(!!u),St(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const i=n._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=h9(n)),this.originValidationPromises[i]}get _shouldInitProactively(){return k2()||m2()||Rc()}}const D9=j9;var O0="@firebase/auth",M0="1.11.0";/**
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
 */class U9{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const i=this.auth.onIdTokenChanged(o=>{n(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(n,i),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const i=this.internalListeners.get(n);i&&(this.internalListeners.delete(n),i(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z9(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F9(r){rn(new Ht("auth",(n,{options:i})=>{const o=n.getProvider("app").getImmediate(),l=n.getProvider("heartbeat"),u=n.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=o.options;re(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const h={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_2(r)},y=new r8(o,l,u,h);return h8(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,i,o)=>{n.getProvider("auth-internal").initialize()})),rn(new Ht("auth-internal",n=>{const i=Un(n.getProvider("auth").getImmediate());return(o=>new U9(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(O0,M0,z9(r)),Ft(O0,M0,"esm2020")}/**
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
 */const V9=300,H9=Tf("authIdTokenMaxAge")||V9;let j0=null;const B9=r=>async n=>{const i=n&&await n.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>H9)return;const l=i?.token;j0!==l&&(j0=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function $9(r=jf()){const n=Vr(r,"auth");if(n.isInitialized())return n.getImmediate();const i=f8(r,{popupRedirectResolver:D9,persistence:[G8,j8,R2]}),o=Tf("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const f=B9(u.toString());A8(i,f,()=>f(i.currentUser)),N8(i,m=>f(m))}}const l=O3("auth");return l&&p8(i,`http://${l}`),i}function W9(){return document.getElementsByTagName("head")?.[0]??document}i8({loadJS(r){return new Promise((n,i)=>{const o=document.createElement("script");o.setAttribute("src",r),o.onload=n,o.onerror=l=>{const u=Lt("internal-error");u.customData=l,i(u)},o.type="text/javascript",o.charset="UTF-8",W9().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F9("Browser");const q9={apiKey:"AIzaSyAsIIq6VkxWGuTFt2QQKvT5fy0Iv5UoIvE",authDomain:"mrshrek-store.firebaseapp.com",projectId:"mrshrek-store",storageBucket:"mrshrek-store.firebasestorage.app",messagingSenderId:"1069635877069",appId:"1:1069635877069:web:d074de0f0030b6b58f1184",measurementId:"G-8XHMJ205S9"},F2=Mf(q9);Im(F2);const Ni=$9(F2),V2=N.createContext(),Bl=r=>r.includes("email-already-in-use")?"Email already in use":r.includes("weak-password")?"Password should be at least 6 characters":r.includes("user-not-found")?"No account found with this email":r.includes("wrong-password")?"Incorrect password":r.includes("too-many-requests")?"Too many login attempts, try again later":r,K9=({children:r})=>{const[n,i]=N.useState(null),[o,l]=N.useState(!1),[u,f]=N.useState(!0);N.useEffect(()=>{const _=R8(Ni,x=>{if(x){const A=x.email?.trim().toLowerCase(),P=A==="admin@shop.com";i({uid:x.uid,email:A}),l(P),localStorage.setItem("user",JSON.stringify({uid:x.uid,email:A})),localStorage.setItem("isAdmin",JSON.stringify(P))}else i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin");f(!1)});return()=>_()},[]);const m=async()=>{const _=new Zt;try{const A=(await X8(Ni,_)).user,P=A.email.trim().toLowerCase(),L=P==="admin@shop.com";return i({uid:A.uid,email:P}),l(L),localStorage.setItem("user",JSON.stringify({uid:A.uid,email:P})),localStorage.setItem("isAdmin",JSON.stringify(L)),{success:!0,user:{uid:A.uid,email:P}}}catch(x){return{success:!1,message:Bl(x.message)}}},h=async(_,x)=>{try{const P=(await P8(Ni,_.trim(),x)).user,L=P.email.trim().toLowerCase(),R=L==="admin@shop.com";return i({uid:P.uid,email:L}),l(R),localStorage.setItem("user",JSON.stringify({uid:P.uid,email:L})),localStorage.setItem("isAdmin",JSON.stringify(R)),{success:!0,user:{uid:P.uid,email:L}}}catch(A){return{success:!1,message:Bl(A.message)}}},y=async(_,x)=>{try{return await T8(Ni,_.trim(),x),{success:!0}}catch(A){return{success:!1,message:Bl(A.message)}}},S=async()=>{try{await L8(Ni),i(null),l(!1),localStorage.removeItem("user"),localStorage.removeItem("isAdmin")}catch(_){console.error("Logout error:",_.message)}};return g.jsx(V2.Provider,{value:{user:n,isAdmin:o,login:h,loginWithGoogle:m,logout:S,signup:y,loading:u},children:!u&&r})},zn=()=>N.useContext(V2),H2=N.createContext();function G9({children:r}){const[n,i]=N.useState(()=>{const h=localStorage.getItem("products");return h?JSON.parse(h):[]}),[o,l]=N.useState(()=>{const h=localStorage.getItem("hero");return h?JSON.parse(h):{title:"",subtitle:"",image:""}});N.useEffect(()=>{localStorage.setItem("products",JSON.stringify(n))},[n]),N.useEffect(()=>{localStorage.setItem("hero",JSON.stringify(o))},[o]);const u=h=>{i(y=>[...y,{...h,id:Date.now()}])},f=h=>{i(y=>y.filter(S=>S.id!==h))},m=(h,y)=>{i(S=>S.map(_=>_.id===h?{..._,...y}:_))};return g.jsx(H2.Provider,{value:{products:n,addProduct:u,deleteProduct:f,updateProduct:m,hero:o,setHero:l},children:r})}function B2(){return N.useContext(H2)}const J9=({children:r})=>{const{user:n,isAdmin:i,loading:o}=zn();return o?null:!n||!i?g.jsx(Zl,{to:"/"}):r},$2=N.createContext();function Q9({children:r}){const[n,i]=N.useState(()=>{const f=localStorage.getItem("heroes");return f?JSON.parse(f):[]});N.useEffect(()=>{localStorage.setItem("heroes",JSON.stringify(n))},[n]);const o=f=>{const m={...f,id:Date.now()};i(h=>[...h,m])},l=(f,m)=>{i(h=>h.map(y=>y.id===f?{...y,...m}:y))},u=f=>{i(m=>m.filter(h=>h.id!==f))};return g.jsx($2.Provider,{value:{heroes:n,addHero:o,updateHero:l,deleteHero:u},children:r})}const W2=()=>N.useContext($2),q2=N.createContext();function Y9({children:r}){const[n,i]=N.useState(()=>{const l=localStorage.getItem("orders");return l?JSON.parse(l):[]});N.useEffect(()=>{localStorage.setItem("orders",JSON.stringify(n))},[n]);const o=l=>{i(u=>[...u,l])};return g.jsx(q2.Provider,{value:{orders:n,addOrder:o},children:r})}function K2(){return N.useContext(q2)}function D0({children:r,adminOnly:n=!1}){const{user:i,loading:o}=zn();return o?g.jsx("div",{className:"flex justify-center items-center h-screen",children:g.jsx("p",{className:"text-gray-600",children:"Loading..."})}):i?n&&i.role!=="admin"?g.jsx(Zl,{to:"/",replace:!0}):r:g.jsx(Zl,{to:"/login",replace:!0})}const G2=N.createContext(),Z9=({children:r})=>{const[n,i]=N.useState("");return g.jsx(G2.Provider,{value:{searchTerm:n,setSearchTerm:i},children:r})},J2=()=>N.useContext(G2);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eg=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,o)=>o?o.toUpperCase():i.toLowerCase()),U0=r=>{const n=eg(r);return n.charAt(0).toUpperCase()+n.slice(1)},Q2=(...r)=>r.filter((n,i,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===i).join(" ").trim(),tg=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ng={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=N.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:f,...m},h)=>N.createElement("svg",{ref:h,...ng,width:n,height:n,stroke:r,strokeWidth:o?Number(i)*24/Number(n):i,className:Q2("lucide",l),...!u&&!tg(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,S])=>N.createElement(y,S)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(r,n)=>{const i=N.forwardRef(({className:o,...l},u)=>N.createElement(rg,{ref:u,iconNode:n,className:Q2(`lucide-${X9(U0(r))}`,`lucide-${r}`,o),...l}));return i.displayName=U0(r),i};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],sg=$e("chevron-left",ig);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ag=$e("chevron-right",og);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],cg=$e("heart",lg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],z0=$e("history",ug);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],F0=$e("log-in",dg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],V0=$e("log-out",fg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],pg=$e("menu",hg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M5 12h14",key:"1ays0h"}]],gg=$e("minus",mg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vg=$e("plus",yg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Cg=$e("search",wg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],H0=$e("shield",kg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],B0=$e("shopping-cart",_g);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],$0=$e("star",xg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Eg=$e("trash-2",Sg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],W0=$e("user-plus",Ig);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],q0=$e("user",bg);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pg=$e("x",Tg);function Ng(){const{cart:r}=wc(),{user:n,logout:i}=zn(),{searchTerm:o,setSearchTerm:l}=J2(),u=r.reduce((h,y)=>h+y.quantity,0),[f,m]=N.useState(!1);return g.jsxs("nav",{className:"bg-yellow-500 shadow-lg sticky top-0 z-50",children:[g.jsxs("div",{className:"container mx-auto flex items-center justify-between p-4 flex-wrap",children:[g.jsx(ht,{to:"/",className:"text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition",children:"MrShrek"}),g.jsxs("div",{className:"flex-1 mx-6 relative min-w-[200px] hidden md:block",children:[g.jsx("input",{type:"text",value:o,onChange:h=>l(h.target.value),placeholder:"Search for products, brands and categories",className:"w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"}),g.jsx(Cg,{className:"absolute right-3 top-2.5 text-gray-500 cursor-pointer",size:20})]}),g.jsx("div",{className:"md:hidden flex items-center",children:g.jsx("button",{onClick:()=>m(!f),children:f?g.jsx(Pg,{size:28}):g.jsx(pg,{size:28})})}),g.jsxs("div",{className:"hidden md:flex items-center space-x-6 text-white font-medium",children:[n?g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md",children:[g.jsx(q0,{size:18})," ",n.email]}),g.jsxs(ht,{to:"/orders",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(z0,{size:18})," Orders"]}),g.jsxs(ht,{to:"/adminlogin",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(H0,{size:18})," Admin"]}),g.jsxs("button",{onClick:i,className:"flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition",children:[g.jsx(V0,{size:16})," Logout"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs(ht,{to:"/login",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(F0,{size:18})," Login"]}),g.jsxs(ht,{to:"/signup",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(W0,{size:18})," Sign Up"]})]}),g.jsxs(ht,{to:"/cart",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(B0,{size:22}),g.jsx("span",{children:"Cart"}),u>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:u})]})]})]}),f&&g.jsx("div",{className:"md:hidden bg-yellow-500 px-4 pb-4",children:g.jsxs("div",{className:"flex flex-col space-y-2",children:[g.jsx("input",{type:"text",value:o,onChange:h=>l(h.target.value),placeholder:"Search products...",className:"px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"}),n?g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md",children:[g.jsx(q0,{size:18})," ",n.email]}),g.jsxs(ht,{to:"/orders",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(z0,{size:18})," Orders"]}),g.jsxs(ht,{to:"/adminlogin",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(H0,{size:18})," Admin"]}),g.jsxs("button",{onClick:i,className:"flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition",children:[g.jsx(V0,{size:16})," Logout"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs(ht,{to:"/login",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(F0,{size:18})," Login"]}),g.jsxs(ht,{to:"/signup",className:"flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(W0,{size:18})," Sign Up"]})]}),g.jsxs(ht,{to:"/cart",className:"relative flex items-center gap-1 hover:text-gray-200 transition",children:[g.jsx(B0,{size:22}),g.jsx("span",{children:"Cart"}),u>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg",children:u})]})]})})]})}function Ag(){const{heroes:r}=W2(),[n,i]=N.useState(0),[o,l]=N.useState(!1);return N.useEffect(()=>{if(r.length>1&&!o){const u=setInterval(()=>{i(f=>(f+1)%r.length)},3e3);return()=>clearInterval(u)}},[r,o]),r.length===0?g.jsx("div",{className:"relative bg-gray-200 h-64 md:h-[500px] flex items-center justify-center rounded-xl shadow-lg",children:g.jsx("h2",{className:"text-2xl font-bold text-gray-600",children:"No Hero Banner Added"})}):g.jsxs("div",{className:"relative w-full h-64 md:h-[500px] overflow-hidden rounded-xl shadow-2xl",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[r.map((u,f)=>g.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ease-in-out ${f===n?"opacity-100":"opacity-0"}`,children:[g.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-scale-down"}),g.jsxs("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center text-center px-6",children:[g.jsx("h2",{className:"text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn",children:u.title}),u.subtitle&&g.jsx("p",{className:"text-lg md:text-2xl text-gray-200 mt-3 max-w-2xl animate-fadeIn delay-200",children:u.subtitle}),u.ctaText&&g.jsx("a",{href:u.ctaLink||"#",className:"mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 animate-fadeIn delay-500",children:u.ctaText})]})]},u.id)),r.length>1&&g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>i(u=>(u-1+r.length)%r.length),className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:g.jsx(sg,{size:28})}),g.jsx("button",{onClick:()=>i(u=>(u+1)%r.length),className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition",children:g.jsx(ag,{size:28})})]}),g.jsx("div",{className:"absolute bottom-4 w-full flex justify-center gap-2",children:r.map((u,f)=>g.jsx("button",{onClick:()=>i(f),className:`w-3 h-3 rounded-full transition ${n===f?"bg-yellow-500":"bg-white/60"}`},f))})]})}const Rg=[{id:1,name:"iphones",image:"Iphones/iphone-13-pro.jpg"},{id:2,name:"iphones",image:"Iphones/iphone-13.jpg"}];function Lg(){return g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-gray-100",children:Rg.map(r=>g.jsxs("div",{className:"flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer",children:[g.jsx("img",{src:`/MrShrek-Store/${r.image}`,alt:r.name,className:"w-16 h-16 object-contain mb-2"}),g.jsx("span",{className:"font-medium",children:r.name})]},r.id))})}function Og({categories:r,onFilter:n}){const[i,o]=N.useState(5e5),[l,u]=N.useState(""),f=()=>{n({category:l,maxPrice:i})};return g.jsxs("aside",{className:"w-64 bg-white p-4 shadow rounded",children:[g.jsx("h3",{className:"font-bold mb-3",children:"Filters"}),g.jsxs("div",{className:"mb-4",children:[g.jsx("h4",{className:"font-semibold",children:"Category"}),g.jsxs("select",{value:l,onChange:m=>u(m.target.value),className:"w-full border px-2 py-1 rounded mt-2",children:[g.jsx("option",{value:"",children:"All"}),r.map((m,h)=>g.jsx("option",{value:m.name,children:m.name},h))]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"font-semibold",children:["Max Price: ₦",i.toLocaleString()]}),g.jsx("input",{type:"range",min:"40000",max:"5000000",step:"10000",value:i,onChange:m=>o(m.target.value),className:"w-full"})]}),g.jsx("button",{onClick:f,className:"mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 cursor-pointer",children:"Apply Filters"})]})}var Y2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K0=xt.createContext&&xt.createContext(Y2),Mg=["attr","size","title"];function jg(r,n){if(r==null)return{};var i=Dg(r,n),o,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)o=u[l],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}function Dg(r,n){if(r==null)return{};var i={};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){if(n.indexOf(o)>=0)continue;i[o]=r[o]}return i}function Eo(){return Eo=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Eo.apply(this,arguments)}function G0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,o)}return i}function Io(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?G0(Object(i),!0).forEach(function(o){Ug(r,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):G0(Object(i)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))})}return r}function Ug(r,n,i){return n=zg(n),n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function zg(r){var n=Fg(r,"string");return typeof n=="symbol"?n:n+""}function Fg(r,n){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var o=i.call(r,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Z2(r){return r&&r.map((n,i)=>xt.createElement(n.tag,Io({key:i},n.attr),Z2(n.child)))}function Br(r){return n=>xt.createElement(Vg,Eo({attr:Io({},r.attr)},n),Z2(r.child))}function Vg(r){var n=i=>{var{attr:o,size:l,title:u}=r,f=jg(r,Mg),m=l||i.size||"1em",h;return i.className&&(h=i.className),r.className&&(h=(h?h+" ":"")+r.className),xt.createElement("svg",Eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:h,style:Io(Io({color:r.color||i.color},i.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&xt.createElement("title",null,u),r.children)};return K0!==void 0?xt.createElement(K0.Consumer,null,i=>n(i)):n(Y2)}function Hg(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(r)}function Bg(r){return Br({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(r)}function $g(r){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(r)}function Wg(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(r)}function qg(r){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function Kg(r){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function Gg(r){const[n,i]=N.useState({days:0,hours:0,minutes:0,seconds:0});return N.useEffect(()=>{const o=setInterval(()=>{const l=new Date,u=new Date(r)-l;if(u<=0){clearInterval(o),i({days:0,hours:0,minutes:0,seconds:0});return}i({days:Math.floor(u/864e5),hours:Math.floor(u/36e5%24),minutes:Math.floor(u/6e4%60),seconds:Math.floor(u/1e3%60)})},1e3);return()=>clearInterval(o)},[r]),n}const Jg=[{id:1,name:"Phones"},{id:2,name:"Electronics"},{id:3,name:"Fashion"},{id:4,name:"Groceries"}];function Qg(){const{products:r}=B2(),{addToCart:n}=wc(),{searchTerm:i}=J2(),[o,l]=N.useState(!1),[u,f]=N.useState([]),[m,h]=N.useState(""),[y,S]=N.useState(null),[_,x]=N.useState([]),[A,P]=N.useState(8),[L,R]=N.useState("");N.useEffect(()=>{let U=[...r];if(i&&(U=U.filter(J=>J.name&&J.name.toLowerCase().includes(i.toLowerCase())||J.description&&J.description.toLowerCase().includes(i.toLowerCase())||J.category&&J.category.toLowerCase().includes(i.toLowerCase()))),m)switch(m){case"low-high":U.sort((J,Q)=>J.price-Q.price);break;case"high-low":U.sort((J,Q)=>Q.price-J.price);break;case"az":U.sort((J,Q)=>(J.name||"").localeCompare(Q.name||""));break;case"za":U.sort((J,Q)=>(Q.name||"").localeCompare(J.name||""));break}f(U),P(8)},[r,i,m]);const q=({category:U,maxPrice:J})=>{let Q=r.filter(te=>(!U||te.category===U)&&(!J||Number(te.price)<=J));if(i&&(Q=Q.filter(te=>te.name&&te.name.toLowerCase().includes(i.toLowerCase())||te.description&&te.description.toLowerCase().includes(i.toLowerCase())||te.category&&te.category.toLowerCase().includes(i.toLowerCase()))),m)switch(m){case"low-high":Q.sort((te,Ee)=>te.price-Ee.price);break;case"high-low":Q.sort((te,Ee)=>Ee.price-te.price);break;case"az":Q.sort((te,Ee)=>(te.name||"").localeCompare(Ee.name||""));break;case"za":Q.sort((te,Ee)=>(Ee.name||"").localeCompare(te.name||""));break}f(Q),P(8)},$=U=>{x(J=>J.includes(U)?J.filter(Q=>Q!==U):[...J,U])},Y=r.filter(U=>U.isFlashSale),se=r.slice(0,10);return g.jsxs("div",{className:`min-h-screen ${o?"dark bg-gray-900 text-white":"bg-white text-gray-900"}`,children:[g.jsx(Ag,{}),g.jsx(Lg,{}),g.jsx("div",{className:"flex justify-end p-4",children:g.jsx("button",{onClick:()=>l(!o),className:"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded",children:o?"Light Mode":"Dark Mode"})}),g.jsxs("div",{className:"flex p-6 gap-6 flex-wrap",children:[g.jsx(Og,{categories:Jg,onFilter:q}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"flex justify-between items-center mb-4 gap-4 flex-wrap",children:g.jsxs("select",{value:m,onChange:U=>h(U.target.value),className:"border px-2 py-1 rounded",children:[g.jsx("option",{value:"",children:"Sort By"}),g.jsx("option",{value:"low-high",children:"Price: Low → High"}),g.jsx("option",{value:"high-low",children:"Price: High → Low"}),g.jsx("option",{value:"az",children:"Name: A → Z"}),g.jsx("option",{value:"za",children:"Name: Z → A"})]})}),r.length?u.length===0?g.jsx("p",{children:"No products found."}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:u.slice(0,A).map(U=>{const J=U.ratings?.length?U.ratings.reduce((Q,te)=>Q+te,0)/U.ratings.length:0;return g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col relative hover:scale-105 transition-transform",children:[U.isNew&&g.jsx("span",{className:"absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded",children:"New"}),U.isSale&&g.jsx("span",{className:"absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded",children:"Sale"}),g.jsx("div",{className:"absolute top-2 right-8 cursor-pointer",onClick:()=>$(U.id),children:g.jsx(cg,{className:`${_.includes(U.id)?"text-red-500 fill-red-500":"text-gray-400"}`})}),g.jsx("img",{src:U.image,alt:U.name,className:"w-full h-48 object-scale-down rounded mb-3 cursor-pointer",onClick:()=>S(U)}),g.jsx("h2",{className:"text-lg font-semibold line-clamp-1",children:U.name}),U.description&&g.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2",children:U.description}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold mb-2",children:["₦",Number(U.price).toLocaleString()]}),g.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[[...Array(5)].map((Q,te)=>g.jsx($0,{size:16,className:te<Math.round(J)?"text-yellow-500 fill-yellow-500":"text-gray-300 dark:text-gray-500"},te)),g.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["(",U.ratings?.length||0," reviews)"]})]}),g.jsx("div",{className:"flex gap-1 mb-3",children:[1,2,3,4,5].map(Q=>g.jsx($0,{size:16,className:"cursor-pointer text-gray-300 hover:text-yellow-500",onClick:()=>{U.ratings=U.ratings?[...U.ratings,Q]:[Q],f([...u])}},Q))}),g.jsx("button",{onClick:()=>n(U),className:"mt-auto bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]},U.id)})}),A<u.length&&g.jsx("div",{className:"flex justify-center mt-6",children:g.jsx("button",{onClick:()=>P(U=>U+8),className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-6 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Load More"})})]}):g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:[...Array(8)].map((U,J)=>g.jsx("div",{className:"bg-gray-200 h-64 rounded animate-pulse"},J))})]})]}),g.jsxs("div",{className:"mt-12",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Recommended for You"}),g.jsx("div",{className:"flex overflow-x-auto gap-4",children:se.map(U=>g.jsxs("div",{className:"min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 transition-transform",onClick:()=>S(U),children:[g.jsx("img",{src:U.image,alt:U.name,className:"w-full h-36 object-contain rounded mb-2"}),g.jsx("h3",{className:"text-sm font-semibold line-clamp-1",children:U.name}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold",children:["₦",Number(U.price).toLocaleString()]})]},U.id))})]}),Y.length>0&&g.jsxs("div",{className:"mt-12 p-6 bg-yellow-50 dark:bg-yellow-800 rounded-lg",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4 text-red-600 dark:text-red-400",children:"🔥 Flash Sale"}),g.jsx("div",{className:"flex overflow-x-auto gap-4",children:Y.map(U=>{const{days:J,hours:Q,minutes:te,seconds:Ee}=Gg(U.flashSaleEnd);return g.jsxs("div",{className:"min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col",children:[g.jsx("img",{src:U.image,alt:U.name,className:"w-full h-36 object-contain rounded mb-2"}),g.jsx("h3",{className:"text-sm font-semibold line-clamp-1",children:U.name}),g.jsxs("p",{className:"text-red-600 dark:text-red-400 font-bold mb-2",children:["₦",Number(U.price).toLocaleString()]}),g.jsxs("p",{className:"text-xs text-gray-700 dark:text-gray-300",children:["Ends in: ",J,"d ",Q,"h ",te,"m ",Ee,"s"]}),g.jsx("button",{onClick:()=>n(U),className:"mt-2 bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]},U.id)})})]}),g.jsxs("div",{className:"mt-12 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center",children:[g.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Subscribe to our Newsletter"}),g.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Get updates on new products and flash sales."}),g.jsxs("div",{className:"flex justify-center gap-2 flex-wrap",children:[g.jsx("input",{type:"email",value:L,onChange:U=>R(U.target.value),placeholder:"Enter your email",className:"px-4 py-2 border rounded w-60"}),g.jsx("button",{onClick:()=>{L?(alert(`Subscribed ${L} to newsletter!`),R("")):alert("Please enter a valid email.")},className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Subscribe"})]})]}),g.jsxs("footer",{className:"mt-12 bg-gray-800 dark:bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-bold mb-2",children:"ShopEase"}),g.jsx("p",{className:"text-gray-400",children:"Your one-stop online store"})]}),g.jsxs("div",{className:"flex gap-4 mt-4 md:mt-0",children:[g.jsx("a",{href:"#",className:"hover:text-green-500",children:g.jsx(Hg,{size:20})}),g.jsx("a",{href:"#",className:"hover:text-green-500",children:g.jsx(Wg,{size:20})}),g.jsx("a",{href:"#",className:"hover:text-green-500",children:g.jsx($g,{size:20})})]})]}),y&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 md:w-2/3 relative",children:[g.jsx("button",{className:"absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl",onClick:()=>S(null),children:"×"}),g.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[g.jsx("img",{src:y.image,alt:y.name,className:"w-full md:w-1/2 h-64 object-contain rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"text-2xl font-bold mb-2",children:y.name}),g.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:y.description}),g.jsxs("p",{className:"text-green-600 dark:text-green-400 font-bold mb-4",children:["₦",Number(y.price).toLocaleString()]}),g.jsx("button",{onClick:()=>{n(y),S(null)},className:"bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600",children:"Add to Cart"})]})]})]})})]})}var Te=function(){return Te=Object.assign||function(n){for(var i,o=1,l=arguments.length;o<l;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},Te.apply(this,arguments)};function Uc(r,n){var i={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&n.indexOf(o)<0&&(i[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(r);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(r,o[l])&&(i[o[l]]=r[o[l]]);return i}function J0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);n&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable}))),i.push.apply(i,o)}return i}function Ae(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?J0(Object(i),!0).forEach((function(o){th(r,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):J0(Object(i)).forEach((function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))}))}return r}function lr(r){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lr(r)}function X2(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function Q0(r,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function eh(r,n,i){return n&&Q0(r.prototype,n),i&&Q0(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}function th(r,n,i){return n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function dc(r,n){if(r==null)return{};var i,o,l=(function(f,m){if(f==null)return{};var h,y,S={},_=Object.keys(f);for(y=0;y<_.length;y++)h=_[y],m.indexOf(h)>=0||(S[h]=f[h]);return S})(r,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)i=u[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(r,i)&&(l[i]=r[i])}return l}function Yg(r,n){return(function(i){if(Array.isArray(i))return i})(r)||(function(i,o){var l=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var u,f,m=[],h=!0,y=!1;try{for(l=l.call(i);!(h=(u=l.next()).done)&&(m.push(u.value),!o||m.length!==o);h=!0);}catch(S){y=!0,f=S}finally{try{h||l.return==null||l.return()}finally{if(y)throw f}}return m}})(r,n)||nh(r,n)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function Zg(r){return(function(n){if(Array.isArray(n))return fc(n)})(r)||(function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)})(r)||nh(r)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function nh(r,n){if(r){if(typeof r=="string")return fc(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?fc(r,n):void 0}}function fc(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,o=new Array(n);i<n;i++)o[i]=r[i];return o}var zc={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"};Ae(Ae({},zc),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"});var Xg=Ae(Ae({},zc),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),ot={production:Ae(Ae({},zc),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||Xg;function rh(r,n){var i=[];return Object.keys(r).forEach((function(o){var l=n?"".concat(n,"[").concat(o,"]"):o,u=r[l];i.push(u!==null&&(typeof v>"u"?"undefined":lr(v))==="object"?rh(u,l):"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(u)))})),i.join("&")}function Mr(){return document.currentScript||(r=document.getElementsByTagName("script"))[r.length-1];var r}function Y0(){var r=[],n=Mr();if(n){var i=Array.prototype.slice.call(n.attributes);r=Object.keys(i).filter((function(o){var l=i[o].nodeName;return l&&l.indexOf("data")>-1})).map((function(o){return i[o].nodeName}))}return r}var ih=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,e7=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,t7=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,n7=`
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
`,$l={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},Z0=function(r){return r&&lr(r)==="object"?Object.keys($l).reduce((function(n,i){return Ae(Ae({},n),{},th({},i,r[i]||$l[i]))}),{}):$l},r7=`
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
`,X0=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(r/100).toFixed(2))},ef={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function tf(r){return Object.keys(r).reduce((function(n,i){var o=encodeURIComponent(i),l=encodeURIComponent(r[i]),u="".concat(o,"=").concat(l);return[].concat(Zg(n),[u])}),[]).join("&")}var i7=function(r){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[r]||"".concat(r.toUpperCase()," PLAN")},sh=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(ot.applePayVersion)}catch{return!1}},hc=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return sh()&&r.includes("apple_pay")};function s7(){var r=0;return Array.from(document.querySelectorAll("body *")).forEach((function(n){var i=window.getComputedStyle(n),o=parseFloat(i.zIndex);!Number.isNaN(o)&&o>r&&(r=o)})),r}function Wl(r){var n=document.createElement("iframe");return n.setAttribute("frameBorder","0"),n.setAttribute("allowtransparency","true"),n.id=r,n.style.display="none",n}function po(r){return r.querySelector("apple-pay-button")||r.querySelector("#apple-pay-button")}function ao(r){return document.querySelector("#".concat(r))}function nf(r,n,i){var o=n.channels,l=o===void 0?[]:o,u=n.styles,f=u===void 0?{}:u,m={applePay:!1};return new Promise((function(h,y){if(r)if(hc(l)){if(po(r))return m.applePay=!0,void h(m);(function(S,_){return new Promise((function(x,A){var P=document.createElement("script");P.src=S,P.addEventListener("load",(function(){x(!0)})),P.addEventListener("error",(function(){P.remove(),A(!1)})),_?_.appendChild(P):document.head.appendChild(P)}))})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",r).then((function(){if(i&&i!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(lr(window.webpackJsonp),". Switching to fallback apple pay button"));(function(S,_){var x=_.styles,A=_.theme,P=document.createElement("style"),L=(function(q){var $=q.height,Y=q.width,se=q.borderRadius,U=q.padding;return`
  apple-pay-button {
    --apple-pay-button-width: `.concat(Y,`;
    --apple-pay-button-height: `).concat($,`;
    --apple-pay-button-border-radius: `).concat(se,`;
    --apple-pay-button-padding: `).concat(U,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(Y,`;
  }
`)})(x);P.type="text/css",P.styleSheet?P.styleSheet.cssText=L:P.appendChild(document.createTextNode(L)),S.appendChild(P);var R=document.createElement("apple-pay-button");R.setAttribute("buttonstyle",A==="light"?"white":"black"),R.setAttribute("type",x.type),R.setAttribute("locale",x.locale),S.appendChild(R)})(r,{styles:Z0(f.applePay),theme:f.theme}),m.applePay=!0,h(m)})).catch((function(){(function(S,_){var x=_.styles,A=_.theme,P=document.createElement("style"),L=(function($){var Y=$.height,se=$.width,U=$.borderRadius,J=$.padding,Q=$.type,te=$.locale;return`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(se,`;
        height: `).concat(Y,`;
        border-radius: `).concat(U,`;
        padding: `).concat(J,`;
        -apple-pay-button-type: `).concat(Q,`;
        -webkit-locale: `).concat(te,`;
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
`)})(x);P.type="text/css",P.styleSheet?P.styleSheet.cssText=L:P.appendChild(document.createTextNode(L)),S.appendChild(P);var R=document.createElement("button");R.classList.add("apple-pay-button",A==="light"?"apple-pay-button-white":"apple-pay-button-black"),R.id="apple-pay-button";var q=document.createElement("span");q.classList.add("logo"),R.appendChild(q),S.appendChild(R)})(r,{styles:Z0(f.applePay),theme:f.theme}),m.applePay=!0,h(m)}))}else y("No wallet payment method is available on this device");else y("Container to mount elements was not provided")}))}function o7(r){for(;r.firstChild;)r.removeChild(r.firstChild)}var oh="payment-request-button",ah="paystackpop-button",lh="pay-with-vault-button";function ch(r){var n=document.createElement("button");return n.id=ah,n.className="open-paystack-pop-button",n.innerText=r,n}function rf(r){return r.querySelector("#".concat(ah))}function uh(){var r=document.createElement("div");return r.id=oh,r}function ql(r){return r.querySelector("#".concat(oh))}function a7(){var r=document.createElement("button");return r.className="pay-with-vault-button",r.id=lh,r.innerText="Pay with Vault",r}function l7(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=document.createElement("div");i.className="vault-logo-container",i.innerHTML=n7,r.appendChild(i);var o=document.createElement("p");o.id="instruction",o.className="vault-instruction",o.innerHTML="Access your saved cards and bank details for faster, more secure payments",r.appendChild(o);var l=a7();r.appendChild(l);var u=document.createElement("div");if(u.className="vault-divider",u.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',r.appendChild(u),n.canPayWithApplePay){var f=uh();r.appendChild(f)}var m=ch("Use other payment methods");r.appendChild(m)}function c7(r){var n=document.createElement("div");n.innerHTML=`
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
`,r.appendChild(n);var i=document.createElement("p");i.id="apple-pay-description",i.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",r.appendChild(i);var o=uh();r.appendChild(o);var l=ch("More payment options");r.appendChild(l)}var lo=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function u7(r){var n,i=Ae({},r);return i.metadata=r.metadata||{},i.metadata.referrer=(n=window.location.href)&&n.length>500?n.split("?")[0]:n,i.metadata=JSON.stringify(i.metadata),i.mode="popup",r.split&&typeof r.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach((function(o){i[o.from]&&(i[o.to]=i[o.from],delete i[o.from])})),Object.values(r).forEach((function(o,l){if(typeof o=="function"){var u=Object.keys(r)[l];delete i[u]}})),i}var d7=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],dh=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),fh=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.platform,i=r.userAgent,o=i===void 0?window&&window.navigator&&window.navigator.userAgent:i,l=n||dh;return d7.includes(l)||o.includes("Mac")&&"ontouchend"in document},f7=function(r,n,i){var o="".concat(ot.paystackApiUrl,"transaction/update_log/").concat(r),l={Authorization:"Bearer ".concat(n)};return fetch(o,{method:"POST",body:JSON.stringify({payload:JSON.stringify(i)}),headers:l})},h7=function(r,n){var i="".concat(ot.paystackApiUrl,"transaction/set_ip/").concat(r),o={Authorization:"Bearer ".concat(n)};return fetch(i,{method:"POST",headers:o})},p7={initializeLog:function(r){var n=r||{},i=n.attempts,o=n.authentication,l=n.errors,u=n.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:i||0,authentication:o,errors:l||0,success:!1,mobile:fh(),input:[],history:u||[]}},getTimeSpent:function(){var r=Math.round(Date.now()/1e3);return this.log.time_spent=r-this.log.start_time,this.log.time_spent},logAPIResponse:function(r,n){switch(r.status){case"success":return this.logApiSuccess(n);case"failed":return this.logApiError(r.message);default:return!1}},logValidationResponse:function(r){return this.log.history.push({type:"action",message:r,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(r){var n="Attempted to pay";return r&&(n+=" with ".concat(r)),this.log.attempts+=1,this.log.history.push({type:"action",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(r){var n="Error";return r&&(n+=": ".concat(r)),this.log.errors+=1,this.log.history.push({type:"error",message:n,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(r){var n="Successfully paid";return r&&(n+=" with ".concat(r)),this.log.success=!0,this.log.history.push({type:"success",message:n,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return f7(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return h7(this.id,this.response.merchant_key)}catch{}}},m7=["language","connect_account"],g7={requestInline:function(){var r=this,n=this.urlParameters,i=n.language,o=n.connect_account,l=dc(n,m7),u=Ae({"Content-Type":"application/json"},i&&{"Accept-Language":i});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),ot.paystackApiUrl).toString(),{headers:u}):fetch(new URL("/checkout/request_inline",ot.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(l),headers:Ae(Ae({},u),o&&{"x-connect-account":o})})).then((function(f){return f.json()})).then((function(f){if(f.status===!1)throw new Error(f.message);return r.response=f.data,r.id=f.data.id,r.status=f.data.transaction_status,r.accessCode=f.data.access_code,r.log=null,Object.assign(r,p7),r.initializeLog(f.data.log),r.saveIpAddress(),f.data}))}},Kl=(function(){function r(n){X2(this,r),(function(y){function S(P,L){this.message=P,this.issues=L||[]}if(!y||lr(y)!=="object")throw new S("Transaction parameters should be a non-empty object");var _=y;if("accessCode"in _)return{accessCode:_.accessCode};Object.keys(_).forEach((function(P){lo.find((function(L){return L.value===P}))!==void 0||delete _[P]}));var x=Object.keys(_),A=[];if(lo.filter((function(P){return P.required})).forEach((function(P){var L=!_[P.value],R=P.or?P.or.some((function(q){return _[q]})):null;L&&!R&&A.push({message:"Required parameter missing: ".concat(P.value)})})),x.forEach((function(P){var L=_[P],R=lo.find((function($){return $.value===P})),q=lr(L);q==="object"&&Array.isArray(L)&&(q="array"),R.types.indexOf(q)<=-1&&A.push({message:"Invalid parameter type: ".concat(P),validTypes:R.types})})),x.forEach((function(P){var L=lo.find((function(R){return R.value===P}));L.override&&delete _[L.override]})),A.length)throw new S("Invalid transaction parameters",A)})(n),this.parameters=n,this.urlParameters=u7(n),this.id=null,this.status=null,this.accessCode=n.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var i=n.onError,o=n.onLoad,l=n.onSuccess,u=n.onCancel,f=n.callback,m=n.onClose,h=n.onBankTransferConfirmationPending;this.callbacks={onError:i,onLoad:o,onSuccess:l,onCancel:u,onBankTransferConfirmationPending:h},this.deprecatedCallbacks={callback:f,onClose:m},Object.assign(this,g7)}return eh(r,[{key:"onSetupError",value:function(n){this.logError(n),this.callbacks.onError&&this.callbacks.onError(n)}},{key:"onLoad",value:function(n){var i=n.id,o=n.customer,l=n.accessCode;Object.assign(this,{id:i,customer:o,accessCode:l}),this.authorizationUrl="".concat(ot.checkoutUrl).concat(l),this.callbacks.onLoad&&this.callbacks.onLoad({id:i,customer:o,accessCode:l})}},{key:"onSuccess",value:function(n){this.isActive=!1,this.response=n,this.status=n.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(n),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(n)}},{key:"setStatus",value:function(n){this.status=n}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(n){this.errors.push(n)}}]),r})(),Fc=console?console.warn||console.log:function(){};function sf(r,n,i){Fc('"'.concat(r,'" has been deprecated, please use "').concat(n,'". ').concat(i))}var oe,y7=["preload","inlineTransaction"],v7=["container","styles","onElementsMount"];function Gl(r,n){if(!r.length)return null;var i=r.filter((function(o){var l,u,f,m,h=!o.status||o.status==="abandoned",y=(l=o.parameters,u=n,f=Object.keys(l).sort().join("")===Object.keys(u).sort().join(""),m=Object.values(l).sort().join("")===Object.values(u).sort().join(""),f&&m);return h&&y}));return i.length?i[i.length-1]:null}function of(r){var n=r.checkoutIframe,i=r.urlParameters;n&&i&&n.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:i},"*")}var w7="trackCheckoutClosed",af="trackPaymentError",C7="trackPaymentAttempt",k7="trackPaymentCompletion";function Jl(r){throw Fc(r),new Error(r)}var lf,cf,hh=(function(){function r(n){var i,o;X2(this,r),this.id=(function(){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=0;f<5;f+=1)l+=u.charAt(Math.floor(Math.random()*u.length));return l})(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=n&&n.isDeprecatedApi,n&&n.isEmbed?this.isEmbed=!0:n&&n.isPaymentRequest&&(n.container&&ao(n.container)||Jl("A container is required to mount the payment request button"),this.paymentRequestContainer=ao(n.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=(function(l){var u=Wl("inline-background-".concat(l));u.style.cssText=`
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
`),f.close(),u})(this.id),this.checkoutIframe=(i=this.id,(o=Wl("inline-checkout-".concat(i))).src="".concat(ot.checkoutUrl,"popup"),o.style.cssText=`
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
`,o.setAttribute("allowpaymentrequest","true"),o.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(o),o),this.registerListeners()}return eh(r,[{key:"registerListeners",value:function(){var n=this;window.addEventListener("message",(function(i){var o="".concat(i.origin,"/")===ot.checkoutUrl,l=n.checkoutIframe&&n.checkoutIframe.contentWindow===i.source,u=n.isEmbed;o||l?n.respondToEvent(i):u&&n.respondToEmbedEvents(i)}))}},{key:"sendAnalyticsEventToCheckout",value:function(n,i){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:n,params:i},"*")}},{key:"checkout",value:function(n){this.activeTransaction()&&this.activeTransaction().cancel(),oe=this;var i=Gl(this.transactions,n)||new Kl(n);return new Promise((function(o,l){i.requestInline().then((function(u){var f=(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=h.platform,S=h.userAgent,_=S===void 0?window&&window.navigator&&window.navigator.userAgent:S,x=y||dh,A=_&&!!_.match(/Version\/[\d.]+.*Safari/),P=x&&/(Mac)/i.test(x);return fh()||P&&A})()&&hc(u.channels),m=(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=!!h.custom_filters&&h.custom_filters.recurring,S=h.plan_details,_=y||S,x=!!h.link_config&&h.link_config.enabled&&h.link_config.has_payment_instruments;return!_&&x})(u);m||f?(oe.preloadTransaction({inlineTransaction:i}),oe.preCheckoutModal=(function(h,y){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},_=document.querySelector("#pre-checkout-modal-".concat(h));if(_){if(rf(_)&&ql(_))return _;_.remove()}var x=document.createElement("div");x.classList.add("pre-checkout-modal"),x.id="pre-checkout-modal-".concat(h),x.style.zIndex=s7()+1;var A=document.createElement("div");A.classList.add("pre-checkout-modal__content"),x.appendChild(A);var P=y||{},L=P.merchant_logo,R=P.merchant_name,q=P.email,$=P.amount,Y=P.currency,se=P.label,U=new Intl.NumberFormat("en",{style:"currency",currency:Y,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format($/100),J=document.createElement("div");J.classList.add("payment-info"),J.innerHTML='<img class="merchant-logo" src="'.concat(L,'" alt="').concat(R,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(se||q,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(U,`</span></div>
    </div>`),A.appendChild(J),A.innerHTML+=t7;var Q=document.createElement("div");Q.classList.add("modal-wrapper"),S.canPayWithVault?l7(Q,{canPayWithApplePay:S.canPayWithApplePay}):c7(Q),Q.innerHTML=Q.innerHTML+ih+e7,A.appendChild(Q);var te=document.createElement("style");return te.textContent=r7,document.body.appendChild(te),document.body.appendChild(x),x})(oe.id,u,{canPayWithVault:m,canPayWithApplePay:f}),f?(oe.paymentRequestContainer=ql(oe.preCheckoutModal),nf(oe.paymentRequestContainer,{channels:u.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},u.merchant_id).then((function(){oe.registerPaymentRequestEventListeners(),oe.openPreCheckoutModal()})).catch((function(){m?(ql(oe.preCheckoutModal).remove(),oe.openPreCheckoutModal()):(oe.closePreCheckoutModal(),oe.animateCheckoutIn())})).finally((function(){o(i)}))):(oe.openPreCheckoutModal(),o(i))):(oe.newTransaction({inlineTransaction:i}),o(i))})).catch((function(u){i.onSetupError({status:!1,message:u.message}),l(u)}))}))}},{key:"openPreCheckoutModal",value:function(){var n;this.registerPreCheckoutModalEventListeners(),n=this.preCheckoutModal,new Promise((function(i,o){try{var l=n.querySelector(".pre-checkout-modal__content");n.classList.add("show"),setTimeout((function(){l.classList.add("show"),i(!0)}),50)}catch(u){o(u)}}))}},{key:"registerPreCheckoutModalEventListeners",value:function(){var n,i=this,o=!1,l=this.activeTransaction();document.addEventListener("touchstart",(function(h){h.preventDefault(),o||(o=!0,n=setTimeout((function(){o=!1}),125))}),!0),document.addEventListener("touchend",(function(h){h.target&&h.target.isSameNode(oe.preCheckoutModal)&&o&&(clearTimeout(n),oe.closePreCheckoutModal(),l&&l.cancel()),o=!1}),!0);var u=rf(this.preCheckoutModal),f=this.preCheckoutModal.querySelector("#".concat(lh));u.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn()},f&&(f.onclick=function(){i.closePreCheckoutModal(),i.animateCheckoutIn(),i.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var m=(function(h){return h.querySelector("#apple-pay-close-button")})(this.preCheckoutModal);m.onclick=function(){i.sendAnalyticsEventToCheckout(w7),i.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(n){var i;this.preCheckoutModal&&(n==="failed"?(i=this.preCheckoutModal)&&(i.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,i.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):((function(o){o&&(o.querySelector(".pre-checkout-modal__content").classList.remove("show"),o.classList.remove("show"))})(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(n){var i,o=n.preload,l=n.inlineTransaction,u=dc(n,y7),f=this.paymentRequestContainer&&po(this.paymentRequestContainer);this.activeTransaction()&&!f&&this.activeTransaction().cancel();var m=Gl(this.transactions,l?l.parameters:u),h=m||l||new Kl(u);return m?(h.isActive=!0,i={accessCode:h.accessCode}):(i=h.accessCode?{accessCode:h.accessCode}:h.urlParameters,this.transactions.push(h)),this.isDeprecatedApi||this.open(i,o),h}},{key:"preloadTransaction",value:function(n){var i=this;return this.newTransaction(Ae(Ae({},n),{},{preload:!0})),function(){return i.animateCheckoutIn()}}},{key:"paymentRequest",value:function(n){var i=n.container,o=n.styles,l=n.onElementsMount,u=dc(n,v7);return oe=this,new Promise((function(f,m){var h=document.querySelector("#".concat(n.loadPaystackCheckoutButton));if(sh()){oe.activeTransaction()&&oe.activeTransaction().cancel(),i&&ao(i)||Jl("A container is required to mount the payment request button"),oe.paymentRequestContainer=ao(i);var y=Gl(oe.transactions,u),S=y||new Kl(u);S.requestInline().then((function(A){nf(oe.paymentRequestContainer,{channels:A.channels,styles:o},A.merchant_id).then((function(P){l&&l(P)})).catch((function(){l&&l(null)})).finally((function(){if(y?S.isActive=!0:oe.transactions.push(S),oe.registerPaymentRequestEventListeners(),h){var P=oe.preloadTransaction({inlineTransaction:S});h.onclick=P}f(S)}))})).catch((function(A){S.onSetupError({status:!1,message:A.message}),m(A)}))}else{if(n&&n.loadPaystackCheckoutButton)if(h){var _=oe.preloadTransaction(u);h.onclick=_}else Fc("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");l&&l(null);var x=oe.activeTransaction();f(x)}}))}},{key:"registerApplePayEventListener",value:function(){var n=this;po(this.paymentRequestContainer).onclick=function(){return n.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var n=this.activeTransaction();n&&hc(n.response.channels)?this.registerApplePayEventListener():o7(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var n,i,o,l,u,f=this,m="apple pay",h=this.activeTransaction();if(h){var y={channel:"apple_pay",paymentMethod:m,currency:h.currency,amount:h.amount},S={channel:"apple_pay",currency:h.currency,amount:h.amount,timeSpent:h.getTimeSpent()};try{h.logAttempt(m),this.sendAnalyticsEventToCheckout(C7,y);var _=(n={currency:h.response.currency,amount:h.response.amount,merchantName:h.response.merchant_name,interval:h.response.plan_details&&h.response.plan_details.interval},i=n.currency,o=n.amount,l=n.merchantName,u=n.interval,Ae({countryCode:"NG",currencyCode:i,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(l," - Paystack"),type:"final",amount:String(X0(o))}},typeof u=="string"&&u.trim()!==""&&{lineItems:[{label:i7(u),amount:String(X0(o))}]})),x=new window.ApplePaySession(ot.applePayVersion,_);x.onvalidatemerchant=function(A){var P=(function(L){var R=L.transactionId,q=L.validationURL,$=L.merchantName,Y=L.domainName,se=Y===void 0?window&&window.location&&window.location.hostname:Y,U="".concat(ot.paymentBaseUrl).concat(ot.applePayValidateSessionPath),J=tf({transaction:R,sessionUrl:q,displayName:$,domainName:se});return fetch(U,Ae(Ae({},ef),{},{body:J})).then((function(Q){return Q.json()}))})({validationURL:A.validationURL,transactionId:h.id,merchantName:h.response.merchant_name});P.then((function(L){L.status!=="success"?h.onSetupError(L):x.completeMerchantValidation(L.data),h.logValidationResponse(L.message)})).catch((function(L){h.onSetupError(L)}))},x.oncancel=function(){oe.preCheckoutModal||h.onCancel()},x.onpaymentauthorized=function(A){var P=A.payment,L=(function(R){var q=R.transactionId,$=R.payment,Y="".concat(ot.paymentBaseUrl).concat(ot.applePayChargePath),se=tf({transaction:q,paymentObject:JSON.stringify($)});return fetch(Y,Ae(Ae({},ef),{},{body:se})).then((function(U){return U.json()}))})({transactionId:h.id,payment:P});L.then((function(R){h.logAPIResponse(R,m),R.status==="success"?(x.completePayment(x.STATUS_SUCCESS),h.onSuccess(R),f.sendAnalyticsEventToCheckout(k7,S)):(x.completePayment(x.STATUS_FAILURE),h.onSetupError(R),f.sendAnalyticsEventToCheckout(af,{channel:"apple_pay",message:R&&R.message||"Transaction attempt failed"})),oe.closePreCheckoutModal(R.status)})).catch((function(R){x.completePayment(x.STATUS_FAILURE),h.onSetupError(R),f.sendAnalyticsEventToCheckout(af,{channel:"apple_pay",message:R&&R.message||"Error occurred"}),oe.closePreCheckoutModal("failed")}))},x.begin()}catch(A){h.onSetupError(A)}}else Jl("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(n){return this.newTransaction({accessCode:n})}},{key:"activeTransaction",value:function(){var n=this.transactions.filter((function(o){return o.isActive})),i=n.length?n[n.length-1]:null;return i}},{key:"cancelTransaction",value:function(n){var i=this.transactions.find((function(o){return o.id===n}))||this.activeTransaction();i&&(i.cancel(),this.close())}},{key:"respondToEvent",value:function(n){if(n){var i,o,l=this.activeTransaction();try{var u=n.data||n.message,f=u.event,m=u.data;if(f)switch(f){case"loaded:checkout":this.isLoaded=!0,l&&of({checkoutIframe:this.checkoutIframe,urlParameters:l.urlParameters});break;case"loaded:transaction":i=this.backgroundIframe,(o=i.contentWindow.document)&&(o.getElementById("app-loader").style.display="none"),l.onLoad(m);break;case"error":m.type==="setup"?l.onSetupError(m):l.logError(m);break;case"cancel":case"close":this.close();var h=m&&m.status;h&&l.setStatus(h),!(this.paymentRequestContainer&&po(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(l.isActive=!1),l.onCancel();break;case"transfer:pending":this.close();var y=m&&m.status;y&&l.setStatus(y),l.onBankTransferConfirmationPending();break;case"success":this.close(),l.onSuccess(m)}}catch{}}}},{key:"respondToEmbedEvents",value:function(n){var i,o,l=this.activeTransaction(),u=n.data||n.message;if(u&&(typeof u=="string"||u instanceof String)){var f={action:o=(i=u)&&typeof i=="string"?i.split(" ")[0]:null,data:o?i.split(" ").slice(2).join(" "):null};f&&f.action==="PaystackClose"&&f.data&&l.onSuccess(u),f.action==="PaystackTLSClose"&&l.cancel()}}},{key:"animateCheckoutIn",value:function(){var n,i=this;if(!this.isOpen){var o=this.checkoutIframe,l=this.backgroundIframe;(n={checkoutIframe:o,backgroundIframe:l},new Promise((function(u,f){n||f("No dom element provided");var m=n.checkoutIframe,h=n.backgroundIframe;m&&h||f("No dom element provided"),m.style.display="",m.style.visibility="visible",h.style.display="",h.style.visibility="visible",u()}))).then((function(){i.checkoutIframe.contentWindow.postMessage("render","*")})),this.isOpen=!0}}},{key:"open",value:function(n,i){n&&(of({checkoutIframe:this.checkoutIframe,urlParameters:n}),i||this.animateCheckoutIn())}},{key:"close",value:function(){var n=this;if(this.isOpen){var i,o=this.checkoutIframe,l=this.backgroundIframe;(i={checkoutIframe:o,backgroundIframe:l},new Promise((function(u,f){i||f("No dom element provided");var m=i.checkoutIframe,h=i.backgroundIframe;m&&h||f("No dom element provided"),h.style.opacity=0,m.style.display="none",m.style.visibility="hidden",setTimeout((function(){h.style.display="none",h.style.visibility="hidden",h.style.opacity=1,u()}),300)}))).then((function(){n.checkoutIframe.contentWindow.postMessage("close","*")})),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(n){var i=n&&n.container;oe||(oe=new r({isDeprecatedApi:!0,isEmbed:i})),sf("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var o=oe.newTransaction(n,"deprecated"),l=o.urlParameters;if(i){var u="".concat(ot.siteUrl,"/assets/payment/production/inline.html?").concat(rh(l)),f=(function(m,h){var y=Wl("embed-checkout-".concat(m));return y.style.cssText=`
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
`,y.src=h,y.id=m,y.name=m,y})(oe.id,u);(function(m,h){var y=document.getElementById(m);y.innerHTML="",y.removeAttribute("style"),y.className="paystack-embed-container",y.style.position="relative",y.style.width="100%",y.appendChild(h)})(n.container,f),f.onload=function(){var m;f.contentWindow.postMessage("PaystackOpen ".concat(oe.id),"*"),m=f,new Promise((function(h,y){m||y("No dom element provided"),m.style.display="",m.style.visibility="visible",h()}))}}else o.openIframe=function(){sf("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),oe.open(l)};return o}}]),r})();if(lf=Y0().length>0,cf=Mr()&&Mr().parentElement.tagName==="FORM",lf&&cf){var Ql,Xn=(function(){var r={},n=Mr();return Y0().forEach((function(i){var o=n.getAttribute(i),l=i.split("data-")[1].replace(/-([a-z])/g,(function(u){return u[1].toUpperCase()}));r[l]=o})),(function(i){if(i.buttonId&&!document.getElementById(i.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var o=Ae({},i);o.buttonText=i.buttonText||"Pay",o.buttonVariant="normal",o.buttonWordmarkVariant="normal";var l=["normal","light"];return i.buttonVariant&&l.indexOf(i.buttonVariant)>-1&&(o.buttonVariant=i.buttonVariant),i.buttonWordmarkVariant&&l.indexOf(i.buttonWordmarkVariant)>-1&&(o.buttonWordmarkVariant=i.buttonWordmarkVariant),o})(r)})(),uf=Mr().parentElement;oe||(oe=new hh),(function(r){var n;if(r.id)(n=document.getElementById(r.id)).setAttribute("data-inline-id",r.id);else{var i=document.createElement("div");i.id="inline-button-".concat(r.inlineId),i.innerHTML=(function(o){var l,u,f={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:ih};return`
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
  `)})(r),r.parent.parentNode.insertBefore(i,r.parent.nextSibling),n=Yg(i.getElementsByTagName("button"),1)[0]}return n})({inlineId:oe.id,amount:Xn.amount/100,currency:Xn.currency,id:Xn.buttonId,text:Xn.buttonText,variant:Xn.buttonVariant,wordmarkVariant:Xn.buttonWordmarkVariant,parent:Mr()}).addEventListener("click",(function(r){r.preventDefault(),Ql?oe.resumeTransaction(Ql.accessCode):Ql=oe.newTransaction(Ae(Ae({},Xn),{},{onSuccess:function(n){var i,o,l,u,f,m;i={type:"hidden",name:"reference",value:n.reference,parent:uf},o=i.type,l=i.value,u=i.name,f=i.parent,(m=document.createElement("input")).type=o,m.value=l,m.name=u,f.appendChild(m),uf.submit()}}))}))}var _7=function(r){var n=new hh;n.newTransaction(r)};function ph(r){function n(i){var o=i.config,l=i.onSuccess,u=i.onClose,f=Te(Te({},r),o),m=f.publicKey,h=f.firstname,y=f.lastname,S=f.phone,_=f.email,x=f.amount,A=f.reference,P=f.metadata,L=f.currency,R=L===void 0?"NGN":L,q=f.channels,$=f.label,Y=f.plan,se=f.quantity,U=f.subaccount,J=f.transaction_charge,Q=f.bearer,te=f.split,Ee=f.split_code,Ze=f.connect_account,mt=f.connect_split,ee=f.onBankTransferConfirmationPending,we=Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(Te({onSuccess:l||function(){return null},onCancel:u||function(){return null},key:m,email:_,amount:x},h&&{firstname:h}),y&&{lastname:y}),S&&{phone:S}),A&&{ref:A}),R&&{currency:R}),q&&{channels:q}),P&&{metadata:P}),$&&{label:$}),ee&&{onBankTransferConfirmationPending:ee}),U&&{subaccount:U}),J&&{transaction_charge:J}),Q&&{bearer:Q}),te&&{split:te}),Ee&&{split_code:Ee}),Y&&{plan:Y}),se&&{quantity:se}),mt&&{connect_split:mt}),Ze&&{connect_account:Ze});_7(we)}return n}var x7=function(r){var n=r.text,i=r.className,o=r.children,l=r.onSuccess,u=r.onClose,f=r.disabled,m=Uc(r,["text","className","children","onSuccess","onClose","disabled"]),h=ph(m);return xt.createElement("button",{className:i,onClick:function(){return h({config:m,onSuccess:l,onClose:u})},disabled:f},n||o)},mh=N.createContext({config:{},initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),S7=function(r){var n=r.children,i=r.onSuccess,o=r.onClose,l=Uc(r,["children","onSuccess","onClose"]),u=ph(l);return xt.createElement(mh.Provider,{value:{config:l,initializePayment:u,onSuccess:i,onClose:o}},n)},E7=function(r){var n=r.children,i=r.ref,o=N.useContext(mh),l=o.config,u=o.initializePayment,f=o.onSuccess,m=o.onClose,h=function(){return u({config:l,onSuccess:f,onClose:m})};return n({initializePayment:h,ref:i})};N.forwardRef(function(r,n){var i=r.children,o=r.onSuccess,l=r.onClose,u=Uc(r,["children","onSuccess","onClose"]),f=o||function(){return null},m=l||function(){return null};return xt.createElement(S7,Te({},u,{onSuccess:f,onClose:m}),xt.createElement(E7,{ref:n},i))});function I7(){const{cart:r,increment:n,decrement:i,removeFromCart:o,clearCart:l}=wc(),{user:u}=zn(),{addOrder:f}=K2(),m=r.reduce((A,P)=>A+P.price*P.quantity,0),h="pk_live_8ae3997fa52803c7789fd20cf9b114f07bc9ccf4",y=m*100,S=u?u.email:"<user_email>",_=()=>{const A={id:Date.now(),items:r,total:m,email:S,date:new Date().toLocaleString()},P=JSON.parse(localStorage.getItem("orders"))||[];P.push(A),localStorage.setItem("orders",JSON.stringify(P)),l(),f(A),alert("✅ Payment Successful! Your order has been saved.")},x={email:S,amount:y,metadata:{custom_fields:[{display_name:"Cart Items",variable_name:"cart",value:r.map(A=>`${A.name} x${A.quantity}`).join(", ")}]},publicKey:h,text:"Checkout with Paystack",onSuccess:_,onClose:()=>alert("❌ Payment Window Closed")};return g.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[g.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Your Cart"}),r.length===0?g.jsx("p",{className:"text-gray-600",children:"Your cart is empty."}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"space-y-4",children:r.map(A=>g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white shadow rounded-lg",children:[g.jsx("img",{src:A.image,alt:A.name,className:"w-30 h-30 object-scale-down rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-lg font-semibold",children:A.name}),g.jsxs("p",{className:"text-gray-500 text-sm",children:["₦",A.price.toLocaleString()]}),g.jsxs("p",{className:"text-gray-400 text-xs",children:["Quantity: ",A.quantity]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{onClick:()=>i(A.id),className:"p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600",children:g.jsx(gg,{size:16})}),g.jsx("span",{className:"px-2 font-medium",children:A.quantity}),g.jsx("button",{onClick:()=>n(A.id),className:"p-2 rounded-full bg-green-500 text-white hover:bg-green-600",children:g.jsx(vg,{size:16})})]}),g.jsx("button",{onClick:()=>o(A.id),className:"p-2 rounded-full bg-red-500 text-white hover:bg-red-600",children:g.jsx(Eg,{size:16})})]},A.id))}),g.jsxs("div",{className:"mt-8 p-6 bg-gray-50 shadow rounded-lg",children:[g.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Total: ₦",m.toLocaleString()]}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("button",{onClick:l,className:"bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800",children:"Clear Cart"}),g.jsx(x7,{...x,disabled:r.length===0||m===0,className:"bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"})]})]})]})]})}function b7(){const{login:r,loginWithGoogle:n}=zn(),i=Hi(),[o,l]=N.useState(""),[u,f]=N.useState(""),[m,h]=N.useState(""),[y,S]=N.useState(!1),_=async A=>{A.preventDefault(),h(""),S(!0);const P=await r(o,u);if(P.success){const L=P.user.email;i(L==="admin@shop.com"?"/admin":"/")}else h(P.message);S(!1)},x=async()=>{h(""),S(!0);const A=await n();if(A.success){const P=A.user.email;i(P==="admin@shop.com"?"/admin":"/")}else h(A.message);S(!1)};return g.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:g.jsxs("form",{className:"bg-white p-8 rounded-lg shadow-lg w-96 space-y-6",onSubmit:_,children:[g.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-4",children:"Welcome Back"}),m&&g.jsx("p",{className:"text-red-500 text-center",children:m}),g.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[g.jsx(qg,{className:"text-gray-400 mr-2"}),g.jsx("input",{type:"email",placeholder:"Email",className:"w-full outline-none",value:o,onChange:A=>l(A.target.value),required:!0})]}),g.jsxs("div",{className:"flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500",children:[g.jsx(Kg,{className:"text-gray-400 mr-2"}),g.jsx("input",{type:"password",placeholder:"Password",className:"w-full outline-none",value:u,onChange:A=>f(A.target.value),required:!0})]}),g.jsx("button",{type:"submit",disabled:y,className:`w-full py-2 rounded text-white font-semibold transition ${y?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:y?"Logging in...":"Login"}),g.jsxs("div",{className:"flex items-center my-2",children:[g.jsx("hr",{className:"flex-1 border-gray-300"}),g.jsx("span",{className:"mx-2 text-gray-500 text-sm",children:"OR"}),g.jsx("hr",{className:"flex-1 border-gray-300"})]}),g.jsxs("button",{type:"button",onClick:x,disabled:y,className:"w-full py-2 rounded text-white bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 transition",children:[g.jsx(Bg,{}),y?"Processing...":"Login with Google"]}),g.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Don’t have an account?"," ",g.jsx(ht,{to:"/signup",className:"text-blue-500 hover:underline font-medium",children:"Sign Up"})]})]})})}function T7(){const{signup:r}=zn(),n=Hi(),[i,o]=N.useState(""),[l,u]=N.useState(""),[f,m]=N.useState(""),[h,y]=N.useState(!1),S=async _=>{_.preventDefault(),m(""),y(!0);const x=await r(i,l);x.success?n("/"):m(x.message),y(!1)};return g.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:g.jsxs("form",{onSubmit:S,className:"bg-white p-6 rounded shadow-md w-96",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Sign Up"}),f&&g.jsx("p",{className:"text-red-500 mb-3",children:f}),g.jsx("input",{type:"email",placeholder:"Email",className:"border p-2 w-full mb-3 rounded",value:i,onChange:_=>o(_.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Password",className:"border p-2 w-full mb-3 rounded",value:l,onChange:_=>u(_.target.value),required:!0}),g.jsx("button",{type:"submit",disabled:h,className:`w-full py-2 rounded text-white transition ${h?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:h?"Signing up...":"Sign Up"}),g.jsxs("p",{className:"text-sm text-gray-600 mt-4 text-center",children:["Already have an account?"," ",g.jsx(ht,{to:"/login",className:"text-blue-500 hover:underline",children:"Login"})]})]})})}function P7(){const{orders:r}=K2(),{user:n}=zn(),i=n?r.filter(o=>o.email===n.email):[];return g.jsxs("div",{className:"p-6",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Order History"}),n?i.length===0?g.jsx("p",{children:"You have no orders yet."}):g.jsx("ul",{className:"space-y-4",children:i.map(o=>g.jsxs("li",{className:"bg-white p-4 rounded shadow space-y-2",children:[g.jsxs("p",{className:"font-bold",children:["Order ID: ",o.id]}),g.jsxs("p",{children:["Date: ",o.date]}),g.jsxs("p",{children:["Total: ₦",o.total.toLocaleString()]}),g.jsxs("p",{children:["Items: ",o.items.map(l=>l.name).join(", ")]})]},o.id))}):g.jsx("p",{children:"Please log in to view your orders."})]})}function N7(){const{products:r,addProduct:n,deleteProduct:i,updateProduct:o}=B2(),{heroes:l,addHero:u,updateHero:f,deleteHero:m}=W2(),[h,y]=N.useState({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),[S,_]=N.useState(null),[x,A]=N.useState(null),P=ee=>{const{name:we,value:Ce}=ee.target;y(Ue=>({...Ue,[we]:Ce}))},L=ee=>{const we=ee.target.files[0];if(we){const Ce=new FileReader;Ce.onloadend=()=>{y(Ue=>({...Ue,image:Ce.result})),_(Ce.result)},Ce.readAsDataURL(we)}},R=ee=>{if(ee.preventDefault(),!h.title||!h.image){alert("Hero title and image are required.");return}x?(f(x,h),A(null)):u(h),y({title:"",subtitle:"",ctaText:"",ctaLink:"",image:""}),_(null)},q=ee=>{y(ee),_(ee.image),A(ee.id)},[$,Y]=N.useState({name:"",price:"",image:"",description:""}),[se,U]=N.useState(null),[J,Q]=N.useState(null),te=ee=>{const{name:we,value:Ce}=ee.target;Y(Ue=>({...Ue,[we]:Ce}))},Ee=ee=>{const we=ee.target.files[0];if(we){const Ce=new FileReader;Ce.onload=()=>{Y(Ue=>({...Ue,image:Ce.result})),U(Ce.result)},Ce.readAsDataURL(we)}},Ze=ee=>{if(ee.preventDefault(),!$.name||!$.price||!$.image){alert("Please fill in product name, price, and image.");return}J?(o(J,$),Q(null)):n($),Y({name:"",price:"",image:"",description:""}),U(null)},mt=ee=>{Y(ee),U(ee.image),Q(ee.id)};return g.jsxs("div",{className:"p-6 space-y-10",children:[g.jsxs("div",{className:"bg-white shadow rounded p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Hero Banner"}),g.jsxs("form",{onSubmit:R,className:"grid gap-4 mb-8",children:[g.jsx("input",{type:"text",name:"title",value:h.title,onChange:P,placeholder:"Hero Title",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"subtitle",value:h.subtitle,onChange:P,placeholder:"Hero Subtitle",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"ctaText",value:h.ctaText,onChange:P,placeholder:"CTA Button Text",className:"p-2 border rounded"}),g.jsx("input",{type:"text",name:"ctaLink",value:h.ctaLink,onChange:P,placeholder:"CTA Button Link",className:"p-2 border rounded"}),g.jsx("input",{type:"file",accept:"image/*",onChange:L,className:"p-2 border rounded"}),S&&g.jsx("img",{src:S,alt:"Hero Preview",className:"w-full max-h-64 object-scale-down rounded border"}),g.jsx("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",children:x?"Update Hero":"Add Hero"})]}),l.length===0?g.jsx("p",{className:"text-gray-500",children:"No heroes yet. Add one above."}):g.jsx("div",{className:"grid gap-4",children:l.map(ee=>g.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm flex items-center p-4 gap-4",children:[g.jsx("img",{src:ee.image,alt:ee.title,className:"w-32 h-20 object-scale-down rounded"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"font-bold",children:ee.title}),g.jsx("p",{className:"text-sm text-gray-600",children:ee.subtitle})]}),g.jsx("button",{onClick:()=>q(ee),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>m(ee.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]},ee.id))})]}),g.jsxs("div",{className:"bg-white shadow rounded p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Manage Products"}),g.jsxs("form",{onSubmit:Ze,className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[g.jsx("input",{type:"text",name:"name",value:$.name,onChange:te,placeholder:"Product Name",className:"p-2 border rounded"}),g.jsx("input",{type:"number",name:"price",value:$.price,onChange:te,placeholder:"Price",className:"p-2 border rounded"}),g.jsx("input",{type:"file",accept:"image/*",onChange:Ee,className:"p-2 border rounded md:col-span-2"}),se&&g.jsx("img",{src:se,alt:"Product Preview",className:"w-32 h-32 object-scale-down rounded border md:col-span-2"}),g.jsx("textarea",{name:"description",value:$.description,onChange:te,placeholder:"Product Description",className:"p-2 border rounded md:col-span-2",rows:"3"}),g.jsx("button",{type:"submit",className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded col-span-1 md:col-span-2",children:J?"Update Product":"Add Product"})]}),r.length===0?g.jsx("p",{className:"text-gray-500",children:"No products yet. Add one above."}):g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:r.map(ee=>g.jsxs("div",{className:"bg-gray-50 border rounded-lg shadow-sm overflow-hidden flex flex-col",children:[g.jsx("img",{src:ee.image,alt:ee.name,className:"w-full h-40 object-scale-down rounded-b-none mt-2"}),g.jsxs("div",{className:"p-4 flex-1 flex flex-col",children:[g.jsx("h3",{className:"text-lg font-semibold",children:ee.name}),g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:ee.description||"No description"}),g.jsxs("p",{className:"text-green-600 font-bold mb-4",children:["₦",Number(ee.price).toLocaleString()]}),g.jsxs("div",{className:"mt-auto flex gap-2",children:[g.jsx("button",{onClick:()=>mt(ee),className:"bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>i(ee.id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"Delete"})]})]})]},ee.id))})]})]})}function A7(){const{login:r,logout:n}=zn(),i=Hi(),[o,l]=N.useState({email:"",password:""}),[u,f]=N.useState(""),[m,h]=N.useState(!1),y=async S=>{S.preventDefault(),f(""),h(!0);const _=await r(o.email,o.password);_.success?_.user.email==="admin@shop.com"?i("/admin"):(f("You are not allowed to log in here."),await n()):f(_.message),h(!1)};return g.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:g.jsxs("form",{onSubmit:y,className:"bg-white p-6 rounded shadow w-96 space-y-4",children:[g.jsx("h1",{className:"text-2xl font-bold text-center",children:"Admin Login"}),u&&g.jsx("p",{className:"text-red-500 text-center",children:u}),g.jsx("input",{type:"email",placeholder:"Admin Email",value:o.email,onChange:S=>l({...o,email:S.target.value}),className:"w-full border p-2 rounded",required:!0}),g.jsx("input",{type:"password",placeholder:"Password",value:o.password,onChange:S=>l({...o,password:S.target.value}),className:"w-full border p-2 rounded",required:!0}),g.jsx("button",{type:"submit",disabled:m,className:`w-full p-2 rounded text-white ${m?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"}`,children:m?"Logging in...":"Login"})]})})}function R7(){return g.jsx(K9,{children:g.jsx(Q9,{children:g.jsx(E3,{children:g.jsx(Y9,{children:g.jsx(G9,{children:g.jsx(Z9,{children:g.jsxs(C3,{basename:"/MrShrek-Store/",children:[g.jsx(Ng,{}),g.jsxs(h3,{children:[g.jsx(In,{path:"/",element:g.jsx(Qg,{})}),g.jsx(In,{path:"/cart",element:g.jsx(D0,{children:g.jsx(I7,{})})}),g.jsx(In,{path:"/login",element:g.jsx(b7,{})}),g.jsx(In,{path:"/signup",element:g.jsx(T7,{})}),g.jsx(In,{path:"/orders",element:g.jsx(D0,{children:g.jsx(P7,{})})}),g.jsx(In,{path:"/admin",element:g.jsx(J9,{children:g.jsx(N7,{})})}),g.jsx(In,{path:"/adminlogin",element:g.jsx(A7,{})})]})]})})})})})})})}_4.createRoot(document.getElementById("root")).render(g.jsx(N.StrictMode,{children:g.jsx(R7,{})}));
