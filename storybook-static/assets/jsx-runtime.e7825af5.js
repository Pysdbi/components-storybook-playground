import{g as z}from"./iframe.a65bf098.js";function H(e,r){for(var t=0;t<r.length;t++){const o=r[t];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in e)){const u=Object.getOwnPropertyDescriptor(o,n);u&&Object.defineProperty(e,n,u.get?u:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}},c={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;function J(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function G(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(u){n[u]=u}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var K=G()?Object.assign:function(e,r){for(var t,o=J(e),n,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var l in t)W.call(t,l)&&(o[l]=t[l]);if($){n=$(t);for(var f=0;f<n.length;f++)Y.call(t,n[f])&&(o[n[f]]=t[n[f]])}}return o};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=K,s=typeof Symbol=="function"&&Symbol.for,d=s?Symbol.for("react.element"):60103,Q=s?Symbol.for("react.portal"):60106,X=s?Symbol.for("react.fragment"):60107,Z=s?Symbol.for("react.strict_mode"):60108,ee=s?Symbol.for("react.profiler"):60114,re=s?Symbol.for("react.provider"):60109,te=s?Symbol.for("react.context"):60110,ne=s?Symbol.for("react.forward_ref"):60112,oe=s?Symbol.for("react.suspense"):60113,ue=s?Symbol.for("react.memo"):60115,fe=s?Symbol.for("react.lazy"):60116,k=typeof Symbol=="function"&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};function y(e,r,t){this.props=e,this.context=r,this.refs=F,this.updater=t||A}y.prototype.isReactComponent={};y.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=y.prototype;function w(e,r,t){this.props=e,this.context=r,this.refs=F,this.updater=t||A}var E=w.prototype=new I;E.constructor=w;x(E,y.prototype);E.isPureReactComponent=!0;var P={current:null},N=Object.prototype.hasOwnProperty,U={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var o,n={},u=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(u=""+r.key),r)N.call(r,o)&&!U.hasOwnProperty(o)&&(n[o]=r[o]);var f=arguments.length-2;if(f===1)n.children=t;else if(1<f){for(var i=Array(f),p=0;p<f;p++)i[p]=arguments[p+2];n.children=i}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)n[o]===void 0&&(n[o]=f[o]);return{$$typeof:d,type:e,key:u,ref:l,props:n,_owner:P.current}}function ce(e,r){return{$$typeof:d,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function le(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(t){return r[t]})}var D=/\/+/g,g=[];function L(e,r,t,o){if(g.length){var n=g.pop();return n.result=e,n.keyPrefix=r,n.func=t,n.context=o,n.count=0,n}return{result:e,keyPrefix:r,func:t,context:o,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>g.length&&g.push(e)}function O(e,r,t,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(n){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case d:case Q:u=!0}}if(u)return t(o,e,r===""?"."+j(e,0):r),1;if(u=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){n=e[l];var f=r+j(n,l);u+=O(n,f,t,o)}else if(e===null||typeof e!="object"?f=null:(f=k&&e[k]||e["@@iterator"],f=typeof f=="function"?f:null),typeof f=="function")for(e=f.call(e),l=0;!(n=e.next()).done;)n=n.value,f=r+j(n,l++),u+=O(n,f,t,o);else if(n==="object")throw t=""+e,Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function S(e,r,t){return e==null?0:O(e,"",r,t)}function j(e,r){return typeof e=="object"&&e!==null&&e.key!=null?le(e.key):r.toString(36)}function ie(e,r){e.func.call(e.context,r,e.count++)}function se(e,r,t){var o=e.result,n=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?b(e,o,t,function(u){return u}):e!=null&&(R(e)&&(e=ce(e,n+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+t)),o.push(e))}function b(e,r,t,o,n){var u="";t!=null&&(u=(""+t).replace(D,"$&/")+"/"),r=L(r,u,o,n),S(e,se,r),T(r)}var M={current:null};function a(){var e=M.current;if(e===null)throw Error(m(321));return e}var pe={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:x};c.Children={map:function(e,r,t){if(e==null)return e;var o=[];return b(e,o,null,r,t),o},forEach:function(e,r,t){if(e==null)return e;r=L(null,null,r,t),S(e,ie,r),T(r)},count:function(e){return S(e,function(){return null},null)},toArray:function(e){var r=[];return b(e,r,null,function(t){return t}),r},only:function(e){if(!R(e))throw Error(m(143));return e}};c.Component=y;c.Fragment=X;c.Profiler=ee;c.PureComponent=w;c.StrictMode=Z;c.Suspense=oe;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe;c.cloneElement=function(e,r,t){if(e==null)throw Error(m(267,e));var o=x({},e.props),n=e.key,u=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,l=P.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in r)N.call(r,i)&&!U.hasOwnProperty(i)&&(o[i]=r[i]===void 0&&f!==void 0?f[i]:r[i])}var i=arguments.length-2;if(i===1)o.children=t;else if(1<i){f=Array(i);for(var p=0;p<i;p++)f[p]=arguments[p+2];o.children=f}return{$$typeof:d,type:e.type,key:n,ref:u,props:o,_owner:l}};c.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:te,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:re,_context:e},e.Consumer=e};c.createElement=q;c.createFactory=function(e){var r=q.bind(null,e);return r.type=e,r};c.createRef=function(){return{current:null}};c.forwardRef=function(e){return{$$typeof:ne,render:e}};c.isValidElement=R;c.lazy=function(e){return{$$typeof:fe,_ctor:e,_status:-1,_result:null}};c.memo=function(e,r){return{$$typeof:ue,type:e,compare:r===void 0?null:r}};c.useCallback=function(e,r){return a().useCallback(e,r)};c.useContext=function(e,r){return a().useContext(e,r)};c.useDebugValue=function(){};c.useEffect=function(e,r){return a().useEffect(e,r)};c.useImperativeHandle=function(e,r,t){return a().useImperativeHandle(e,r,t)};c.useLayoutEffect=function(e,r){return a().useLayoutEffect(e,r)};c.useMemo=function(e,r){return a().useMemo(e,r)};c.useReducer=function(e,r,t){return a().useReducer(e,r,t)};c.useRef=function(e){return a().useRef(e)};c.useState=function(e){return a().useState(e)};c.version="16.14.0";(function(e){e.exports=c})(h);const ae=z(h.exports),he=H({__proto__:null,default:ae},[h.exports]);var _={exports:{}},v={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=h.exports,B=60103;v.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var C=Symbol.for;B=C("react.element"),v.Fragment=C("react.fragment")}var de=ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,me=Object.prototype.hasOwnProperty,ve={key:!0,ref:!0,__self:!0,__source:!0};function V(e,r,t){var o,n={},u=null,l=null;t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)me.call(r,o)&&!ve.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:B,type:e,key:u,ref:l,props:n,_owner:de.current}}v.jsx=V;v.jsxs=V;(function(e){e.exports=v})(_);const _e=_.exports.Fragment,je=_.exports.jsx,Oe=_.exports.jsxs;export{_e as F,he as R,Oe as a,ae as b,je as j,K as o,h as r};
//# sourceMappingURL=jsx-runtime.e7825af5.js.map
