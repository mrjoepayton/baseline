/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-cookies-cssanimations-flash-flexbox-formvalidation-history-inlinesvg-json-mediaqueries-rgba-svg-touchevents-video-videoautoplay-setclasses-shiv !*/
!function(e,A,t){function n(e,A){return typeof e===A}function o(){var e,A,t,o,a,r,i;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],A=E[l],A.name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(t=0;t<A.options.aliases.length;t++)e.push(A.options.aliases[t].toLowerCase());for(o=n(A.fn,"function")?A.fn():A.fn,a=0;a<e.length;a++)r=e[a],i=r.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),T.push((o?"":"no-")+i.join("-"))}}function a(e){var A=R.className,t=Modernizr._config.classPrefix||"";if(F&&(A=A.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");A=A.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(A+=" "+t+e.join(" "+t),F?R.className.baseVal=A:R.className=A)}function r(){return"function"!=typeof A.createElement?A.createElement(arguments[0]):F?A.createElementNS.call(A,"http://www.w3.org/2000/svg",arguments[0]):A.createElement.apply(A,arguments)}function i(e,A){if("object"==typeof e)for(var t in e)B(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;A="function"==typeof A?A():A,1==n.length?Modernizr[n[0]]=A:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=A),a([(A&&0!=A?"":"no-")+n.join("-")]),Modernizr._trigger(e,A)}return Modernizr}function l(){var e=A.body;return e||(e=r(F?"svg":"body"),e.fake=!0),e}function c(e,t,n,o){var a,i,c,s,d="modernizr",u=r("div"),p=l();if(parseInt(n,10))for(;n--;)c=r("div"),c.id=o?o[n]:d+(n+1),u.appendChild(c);return a=r("style"),a.type="text/css",a.id="s"+d,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(A.createTextNode(e)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",s=R.style.overflow,R.style.overflow="hidden",R.appendChild(p)),i=t(u,e),p.fake?(p.parentNode.removeChild(p),R.style.overflow=s,R.offsetHeight):u.parentNode.removeChild(u),!!i}function s(e,A){return!!~(""+e).indexOf(A)}function d(e){return e.replace(/([A-Z])/g,function(e,A){return"-"+A.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(A,t,n){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,A,t);var a=e.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(a){var r=a.error?"error":"log";a[r].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&A.currentStyle&&A.currentStyle[n];return o}function p(A,n){var o=A.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(A[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+d(A[o])+":"+n+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return t}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,A,t){return A+t.toUpperCase()}).replace(/^-/,"")}function h(e,A,o,a){function i(){c&&(delete k.style,delete k.modElem)}if(a=n(a,"undefined")?!1:a,!n(o,"undefined")){var l=p(e,o);if(!n(l,"undefined"))return l}for(var c,d,u,h,m,g=["modernizr","tspan","samp"];!k.style&&g.length;)c=!0,k.modElem=r(g.shift()),k.style=k.modElem.style;for(u=e.length,d=0;u>d;d++)if(h=e[d],m=k.style[h],s(h,"-")&&(h=f(h)),k.style[h]!==t){if(a||n(o,"undefined"))return i(),"pfx"==A?h:!0;try{k.style[h]=o}catch(v){}if(k.style[h]!=m)return i(),"pfx"==A?h:!0}return i(),!1}function m(e,A){return function(){return e.apply(A,arguments)}}function g(e,A,t){var o;for(var a in e)if(e[a]in A)return t===!1?e[a]:(o=A[e[a]],n(o,"function")?m(o,t||A):o);return!1}function v(e,A,t,o,a){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(r+" ")+r).split(" ");return n(A,"string")||n(A,"undefined")?h(i,A,o,a):(i=(e+" "+M.join(r+" ")+r).split(" "),g(i,A,t))}function y(e,A,n){return v(e,t,t,A,n)}var E=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var t=this;setTimeout(function(){A(t[e])},0)},addTest:function(e,A,t){E.push({name:e,fn:A,options:t})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var T=[],R=A.documentElement,F="svg"===R.nodeName.toLowerCase();F||!function(e,A){function t(e,A){var t=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return t.innerHTML="x<style>"+A+"</style>",n.insertBefore(t.lastChild,n.firstChild)}function n(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,A){var t=y.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=t+" "+e,c(A)}function a(e){var A=v[e[m]];return A||(A={},g++,e[m]=g,v[g]=A),A}function r(e,t,n){if(t||(t=A),d)return t.createElement(e);n||(n=a(t));var o;return o=n.cache[e]?n.cache[e].cloneNode():h.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||f.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function i(e,t){if(e||(e=A),d)return e.createDocumentFragment();t=t||a(e);for(var o=t.frag.cloneNode(),r=0,i=n(),l=i.length;l>r;r++)o.createElement(i[r]);return o}function l(e,A){A.cache||(A.cache={},A.createElem=e.createElement,A.createFrag=e.createDocumentFragment,A.frag=A.createFrag()),e.createElement=function(t){return y.shivMethods?r(t,e,A):A.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return A.createElem(e),A.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,A.frag)}function c(e){e||(e=A);var n=a(e);return!y.shivCSS||s||n.hasCSS||(n.hasCSS=!!t(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||l(e,n),e}var s,d,u="3.7.3",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=A.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,d=1==e.childNodes.length||function(){A.createElement("a");var e=A.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){s=!0,d=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:p.shivCSS!==!1,supportsUnknownElements:d,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:i,addElements:o};e.html5=y,c(A),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,A),Modernizr.addTest("audio",function(){var e=r("audio"),A=!1;try{A=!!e.canPlayType,A&&(A=new Boolean(A),A.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),A.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),A.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),A.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),A.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return A}),Modernizr.addTest("cookies",function(){try{A.cookie="cookietest=1";var e=-1!=A.cookie.indexOf("cookietest=");return A.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}});var B;!function(){var e={}.hasOwnProperty;B=n(e,"undefined")||n(e.call,"undefined")?function(e,A){return A in e&&n(e.constructor.prototype[A],"undefined")}:function(A,t){return e.call(A,t)}}(),w._l={},w.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,A){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,n;for(e=0;e<t.length;e++)(n=t[e])(A)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=i}),Modernizr.addAsyncTest(function(){var t,n,o=function(e){R.contains(e)||R.appendChild(e)},a=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},c=function(e,A){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),i("flash",function(){return t}),A&&f.contains(A)){for(;A.parentNode!==f;)A=A.parentNode;f.removeChild(A)}};try{n="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(s){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n),t||F)c(!1);else{var d,u,p=r("embed"),f=l();if(p.type="application/x-shockwave-flash",f.appendChild(p),!("Pan"in p||n))return o(f),c("blocked",p),void a(f);d=function(){return o(f),R.contains(f)?(R.contains(p)?(u=p.style.cssText,""!==u?c("blocked",p):c(!0,p)):c("blocked"),void a(f)):(f=A.body||f,p=r("embed"),p.type="application/x-shockwave-flash",f.appendChild(p),setTimeout(d,1e3))},setTimeout(d,10)}}),Modernizr.addTest("history",function(){var A=navigator.userAgent;return-1===A.indexOf("Android 2.")&&-1===A.indexOf("Android 4.0")||-1===A.indexOf("Mobile Safari")||-1!==A.indexOf("Chrome")||-1!==A.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!A.createElementNS&&!!A.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=b;var C=w.testStyles=c;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&A instanceof DocumentTouch)t=!0;else{var n=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");C(n,function(e){t=9===e.offsetTop})}return t}),Modernizr.addTest("video",function(){var e=r("video"),A=!1;try{A=!!e.canPlayType,A&&(A=new Boolean(A),A.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),A.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),A.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),A.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),A.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return A});var G="Moz O ms Webkit",x=w._config.usePrefixes?G.split(" "):[];w._cssomPrefixes=x;var S={elem:r("modernizr")};Modernizr._q.push(function(){delete S.elem});var k={style:S.elem.style};Modernizr._q.unshift(function(){delete k.style});var M=w._config.usePrefixes?G.toLowerCase().split(" "):[];w._domPrefixes=M,w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0));var P=function(){var A=e.matchMedia||e.msMatchMedia;return A?function(e){var t=A(e);return t&&t.matches||!1}:function(A){var t=!1;return c("@media "+A+" { #modernizr { position: absolute; } }",function(A){t="absolute"==(e.getComputedStyle?e.getComputedStyle(A,null):A.currentStyle).position}),t}}();w.mq=P,Modernizr.addTest("mediaqueries",P("only all")),Modernizr.addTest("rgba",function(){var e=r("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("formvalidation",function(){var A=r("form");if(!("checkValidity"in A&&"addEventListener"in A))return!1;if("reportValidity"in A)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,A.addEventListener("submit",function(A){(!e.opera||e.operamini)&&A.preventDefault(),A.stopPropagation()},!1),A.innerHTML='<input name="modTest" required="required" /><button></button>',C("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(A),t=A.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,A.getElementsByTagName("button")[0].click()}),n}),Modernizr.addTest("inlinesvg",function(){var e=r("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addAsyncTest(function(){function e(r){o++,clearTimeout(A);var l=r&&"playing"===r.type||0!==a.currentTime;return!l&&n>o?void(A=setTimeout(e,t)):(a.removeEventListener("playing",e,!1),i("videoautoplay",l),void(a.parentNode&&a.parentNode.removeChild(a)))}var A,t=200,n=5,o=0,a=r("video"),l=a.style;if(!(Modernizr.video&&"autoplay"in a))return void i("videoautoplay",!1);l.position="absolute",l.height=0,l.width=0;try{if(Modernizr.video.ogg)a.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void i("videoautoplay",!1);a.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(c){return void i("videoautoplay",!1)}a.setAttribute("autoplay",""),a.style.cssText="display:none",R.appendChild(a),setTimeout(function(){a.addEventListener("playing",e,!1),A=setTimeout(e,t)},0)}),o(),a(T),delete w.addTest,delete w.addAsyncTest;for(var Q=0;Q<Modernizr._q.length;Q++)Modernizr._q[Q]();e.Modernizr=Modernizr}(window,document);