define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./core/DOMEval"],function(t,e,n,r,i,o,a,s,u,l,c,p,h,f){"use strict";function d(t){var e=!!t&&"length"in t&&t.length,n=g.type(t);return"function"!==n&&!g.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}var m="3.1.1",g=function(t,e){return new g.fn.init(t,e)},v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,b=/-([a-z])/g,w=function(t,e){return e.toUpperCase()};return g.fn=g.prototype={jquery:m,constructor:g,length:0,toArray:function(){return r.call(this)},get:function(t){return null==t?r.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=g.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return g.each(this,t)},map:function(t){return this.pushStack(g.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:t.sort,splice:t.splice},g.extend=g.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(t=arguments[s]))for(e in t)n=a[e],r=t[e],a!==r&&(l&&r&&(g.isPlainObject(r)||(i=g.isArray(r)))?(i?(i=!1,o=n&&g.isArray(n)?n:[]):o=n&&g.isPlainObject(n)?n:{},a[e]=g.extend(l,o,r)):void 0!==r&&(a[e]=r));return a},g.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===g.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=g.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,r;return!(!t||"[object Object]"!==u.call(t))&&(!(e=n(t))||(r=l.call(e,"constructor")&&e.constructor,"function"==typeof r&&c.call(r)===p))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?s[u.call(t)]||"object":typeof t},globalEval:function(t){f(t)},camelCase:function(t){return t.replace(y,"ms-").replace(b,w)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var n,r=0;if(d(t))for(n=t.length;r<n&&e.call(t[r],r,t[r])!==!1;r++);else for(r in t)if(e.call(t[r],r,t[r])===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(v,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(d(Object(t))?g.merge(n,"string"==typeof t?[t]:t):o.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:a.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],o=0,a=t.length,s=!n;o<a;o++)r=!e(t[o],o),r!==s&&i.push(t[o]);return i},map:function(t,e,n){var r,o,a=0,s=[];if(d(t))for(r=t.length;a<r;a++)o=e(t[a],a,n),null!=o&&s.push(o);else for(a in t)o=e(t[a],a,n),null!=o&&s.push(o);return i.apply([],s)},guid:1,proxy:function(t,e){var n,i,o;if("string"==typeof e&&(n=t[e],e=t,t=n),g.isFunction(t))return i=r.call(arguments,2),o=function(){return t.apply(e||this,i.concat(r.call(arguments)))},o.guid=t.guid=t.guid||g.guid++,o},now:Date.now,support:h}),"function"==typeof Symbol&&(g.fn[Symbol.iterator]=t[Symbol.iterator]),g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){s["[object "+e+"]"]=e.toLowerCase()}),g});