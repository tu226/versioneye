(function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t){return function(e){return this.lang().ordinal(t.call(this,e))}}function i(){}function r(t){a(this,t)}function o(t){var e=this._data={},n=t.years||t.year||t.y||0,i=t.months||t.month||t.M||0,r=t.weeks||t.week||t.w||0,o=t.days||t.day||t.d||0,a=t.hours||t.hour||t.h||0,u=t.minutes||t.minute||t.m||0,l=t.seconds||t.second||t.s||0,c=t.milliseconds||t.millisecond||t.ms||0;this._milliseconds=c+1e3*l+6e4*u+36e5*a,this._days=o+7*r,this._months=i+12*n,e.milliseconds=c%1e3,l+=s(c/1e3),e.seconds=l%60,u+=s(l/60),e.minutes=u%60,a+=s(u/60),e.hours=a%24,o+=s(a/24),o+=7*r,e.days=o%30,i+=s(o/30),e.months=i%12,n+=s(i/12),e.years=n}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function s(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function l(t,e,n){var i,r=e._milliseconds,o=e._days,a=e._months;r&&t._d.setTime(+t+r*n),o&&t.date(t.date()+o*n),a&&(i=t.date(),t.date(1).month(t.month()+a*n).date(Math.min(i,t.daysInMonth())))}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t,e){var n,i=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(n=0;i>n;n++)~~t[n]!==~~e[n]&&o++;return o+r}function p(t,e){return e.abbr=t,R[t]||(R[t]=new i),R[t].set(e),R[t]}function d(t){return t?(!R[t]&&$&&require("./lang/"+t),R[t]):P.fn._lang}function f(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function m(t){var e,n,i=t.match(L);for(e=0,n=i.length;n>e;e++)i[e]=re[i[e]]?re[i[e]]:f(i[e]);return function(r){var o="";for(e=0;n>e;e++)o+="function"==typeof i[e].call?i[e].call(r,t):i[e];return o}}function g(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var i=5;i--&&F.test(e);)e=e.replace(F,n);return ee[e]||(ee[e]=m(e)),ee[e](t)}function v(t){switch(t){case"DDDD":return z;case"YYYY":return q;case"YYYYY":return U;case"S":case"SS":case"SSS":case"DDD":return B;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return W;case"X":return Q;case"Z":case"ZZ":return V;case"T":return Y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return H;default:return new RegExp(t.replace("\\",""))}}function y(t,e,n){var i,r=n._a;switch(t){case"M":case"MM":r[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":i=d(n._l).monthsParse(e),null!=i?r[1]=i:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(r[2]=~~e);break;case"YY":r[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":r[0]=~~e;break;case"a":case"A":n._isPm="pm"===(e+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":r[3]=~~e;break;case"m":case"mm":r[4]=~~e;break;case"s":case"ss":r[5]=~~e;break;case"S":case"SS":case"SSS":r[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,i=(e+"").match(J),i&&i[1]&&(n._tzh=~~i[1]),i&&i[2]&&(n._tzm=~~i[2]),i&&"+"===i[0]&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}null==e&&(n._isValid=!1)}function b(t){var e,n,i=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=i[e]=null==t._a[e]?2===e?1:0:t._a[e];i[3]+=t._tzh||0,i[4]+=t._tzm||0,n=new Date(0),t._useUTC?(n.setUTCFullYear(i[0],i[1],i[2]),n.setUTCHours(i[3],i[4],i[5],i[6])):(n.setFullYear(i[0],i[1],i[2]),n.setHours(i[3],i[4],i[5],i[6])),t._d=n}}function w(t){var e,n,i=t._f.match(L),r=t._i;for(t._a=[],e=0;e<i.length;e++)n=(v(i[e]).exec(r)||[])[0],n&&(r=r.slice(r.indexOf(n)+n.length)),re[i[e]]&&y(i[e],n,t);t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),b(t)}function x(t){for(var e,n,i,o,s=99;t._f.length;){if(e=a({},t),e._f=t._f.pop(),w(e),n=new r(e),n.isValid()){i=n;break}o=h(e._a,n.toArray()),s>o&&(s=o,i=n)}a(t,i)}function _(t){var e,n=t._i;if(X.exec(n)){for(t._f="YYYY-MM-DDT",e=0;4>e;e++)if(G[e][1].exec(n)){t._f+=G[e][0];break}V.exec(n)&&(t._f+=" Z"),w(t)}else t._d=new Date(n)}function C(e){var n=e._i,i=j.exec(n);n===t?e._d=new Date:i?e._d=new Date(+i[1]):"string"==typeof n?_(e):c(n)?(e._a=n.slice(0),b(e)):e._d=new Date(n instanceof Date?+n:n)}function E(t,e,n,i,r){return r.relativeTime(e||1,!!n,t,i)}function S(t,e,n){var i=O(Math.abs(t)/1e3),r=O(i/60),o=O(r/60),a=O(o/24),s=O(a/365),u=45>i&&["s",i]||1===r&&["m"]||45>r&&["mm",r]||1===o&&["h"]||22>o&&["hh",o]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",O(a/30)]||1===s&&["y"]||["yy",s];return u[2]=e,u[3]=t>0,u[4]=n,E.apply({},u)}function k(t,e,n){var i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),Math.ceil(P(t).add("d",r).dayOfYear()/7)}function T(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=d().preparse(e)),P.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?c(n)?x(t):w(t):C(t),new r(t))}function M(t,e){P.fn[t]=P.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),this):this._d["get"+n+e]()}}function D(t){P.duration.fn[t]=function(){return this._data[t]}}function A(t,e){P.duration.fn["as"+t]=function(){return+this/e}}for(var P,I,N="2.0.0",O=Math.round,R={},$="undefined"!=typeof module&&module.exports,j=/^\/?Date\((\-?\d+)/i,L=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,F=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,H=/\d\d?/,B=/\d{1,3}/,z=/\d{3}/,q=/\d{1,4}/,U=/[+\-]?\d{1,6}/,W=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,V=/Z|[\+\-]\d\d:?\d\d/i,Y=/T/i,Q=/[\+\-]?\d+(\.\d{1,3})?/,X=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,K="YYYY-MM-DDTHH:mm:ssZ",G=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],J=/([\+\-]|\d\d)/gi,Z="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),te={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ee={},ne="DDD w W M D d".split(" "),ie="M D H h m s w W".split(" "),re={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},X:function(){return this.unix()}};ne.length;)I=ne.pop(),re[I+"o"]=n(re[I]);for(;ie.length;)I=ie.pop(),re[I+I]=e(re[I],2);for(re.DDDD=e(re.DDD,3),i.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,i;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=P([2e3,e]),i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(i.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,i){var r=this._relativeTime[n];return"function"==typeof r?r(t,e,n,i):r.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return k(t,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},P=function(t,e,n){return T({_i:t,_f:e,_l:n,_isUTC:!1})},P.utc=function(t,e,n){return T({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},P.unix=function(t){return P(1e3*t)},P.duration=function(t,e){var n,i=P.isDuration(t),r="number"==typeof t,a=i?t._data:r?{}:t;return r&&(e?a[e]=t:a.milliseconds=t),n=new o(a),i&&t.hasOwnProperty("_lang")&&(n._lang=t._lang),n},P.version=N,P.defaultFormat=K,P.lang=function(t,e){return t?(e?p(t,e):R[t]||d(t),void(P.duration.fn._lang=P.fn._lang=d(t))):P.fn._lang._abbr},P.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),d(t)},P.isMoment=function(t){return t instanceof r},P.isDuration=function(t){return t instanceof o},P.fn=r.prototype={clone:function(){return P(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return P.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!h(this._a,(this._isUTC?P.utc(this._a):P(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(t){var e=g(this,t||P.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?P.duration(+e,t):P.duration(t,e),l(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?P.duration(+e,t):P.duration(t,e),l(this,n,-1),this},diff:function(t,e,n){var i,r,o=this._isUTC?P(t).utc():P(t).local(),a=6e4*(this.zone()-o.zone());return e&&(e=e.replace(/s$/,"")),"year"===e||"month"===e?(i=432e5*(this.daysInMonth()+o.daysInMonth()),r=12*(this.year()-o.year())+(this.month()-o.month()),r+=(this-P(this).startOf("month")-(o-P(o).startOf("month")))/i,"year"===e&&(r/=12)):(i=this-o-a,r="second"===e?i/1e3:"minute"===e?i/6e4:"hour"===e?i/36e5:"day"===e?i/864e5:"week"===e?i/6048e5:i),n?r:s(r)},from:function(t,e){return P.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(P(),t)},calendar:function(){var t=this.diff(P().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return t%4===0&&t%100!==0||t%400===0},isDST:function(){return this.zone()<P([this.year()]).zone()||this.zone()<P([this.year(),5]).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==t?e:this.add({d:t-e})},startOf:function(t){switch(t=t.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.day(0),this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+P(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+P(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+P(t).startOf(e)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return P.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=O((P(this).startOf("day")-P(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},isoWeek:function(t){var e=k(this,1,4);return null==t?e:this.add("d",7*(t-e))},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},lang:function(e){return e===t?this._lang:(this._lang=d(e),this)}},I=0;I<Z.length;I++)M(Z[I].toLowerCase().replace(/s$/,""),Z[I]);M("year","FullYear"),P.fn.days=P.fn.day,P.fn.weeks=P.fn.week,P.fn.isoWeeks=P.fn.isoWeek,P.duration.fn=o.prototype={weeks:function(){return s(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},lang:P.fn.lang};for(I in te)te.hasOwnProperty(I)&&(A(I,te[I]),D(I.toLowerCase()));A("Weeks",6048e5),P.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),$&&(module.exports=P),"undefined"==typeof ender&&(this.moment=P),"function"==typeof define&&define.amd&&define("moment",[],function(){return P})}).call(this);