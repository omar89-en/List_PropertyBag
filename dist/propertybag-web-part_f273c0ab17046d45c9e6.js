define("bba25bf5-ba22-4a6b-b88c-f214943a631e_0.0.1",["@microsoft/sp-property-pane","@microsoft/sp-core-library","PropertybagWebPartStrings","@microsoft/sp-webpart-base","react","react-dom","@microsoft/sp-http"],function(n,a,i,r,o,s,c){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="nAs8")}({"26ea":function(e,t){e.exports=n},"87Cj":function(e,t,n){var a=n("CL57"),i=n("ruv1");"string"==typeof a&&(a=[[e.i,a]]);for(var r=0;r<a.length;r++)i.loadStyles(a[r][1],!0);a.locals&&(e.exports=a.locals)},CL57:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,".welcome_d6cf1237{display:grid;padding:10px;max-height:400px;overflow-x:hidden;overflow-y:auto}.welcome_d6cf1237 table{border-collapse:collapse;border:1px solid #000}.welcome_d6cf1237 tr:nth-child(2n){background-color:#fff}.welcome_d6cf1237 tr:nth-child(odd){background-color:#d9e1f2}.welcome_d6cf1237 th{text-align:center}.welcome_d6cf1237 td,.welcome_d6cf1237 th{border:1px solid #000;padding:5px;font-family:Arial,Helvetica,sans-serif;font-size:larger}.welcome_d6cf1237 td{max-width:345px;overflow-wrap:break-word;text-align:inherit}.table1_d6cf1237{table-layout:auto}",""])},JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,a,i,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(i," */")),c=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[r].concat(c).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},UWqr:function(e,t){e.exports=a},Vsz0:function(e,t){e.exports=i},br4S:function(e,t){e.exports=r},cDcd:function(e,t){e.exports=o},faye:function(e,t){e.exports=s},nAs8:function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),i=n("faye"),r=n("UWqr"),o=n("26ea"),s=n("br4S"),c=n("Vsz0");n("87Cj");var d,l=n("vlQI"),u=(d=function(e,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},d(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={allProperty:[],data:[],Property:[]},!1===t.guid?n.getpro():n.getList1(t.guid),n}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.description,e.guid,e.isDarkTheme,e.environmentMessage,e.hasTeamsContext,e.userDisplayName,this.state.allProperty),n=this.state.Property;return a.createElement("div",{className:"welcome_d6cf1237"},a.createElement("table",{className:"table1_d6cf1237"},a.createElement("tr",null,a.createElement("th",null,"Key"),a.createElement("th",null,"Value")),t.map(function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,e.key),a.createElement("td",null,e.value))}),n.map(function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,e.key),a.createElement("td",null,e.value))})))},t.prototype.getpro=function(){var e=this,t=[];this.props.spHttpClient.get(this.props.currentWebUrl+"/_api/web/allProperties?$select=*",l.SPHttpClient.configurations.v1).then(function(n){n.json().then(function(n){for(var a in n)"@odata.context"!=a&&"@odata.editLink"!=a&&"@odata.id"!=a&&"@odata.type"!=a&&t.push({key:a,value:n[a]});e.setState({allProperty:t})})})},t.prototype.getList1=function(e){return t=this,void 0,a=function(){var t,n=this;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(a){return t=[],this.props.spHttpClient.get(this.props.currentWebUrl+"/_api/web/lists('"+e+"')/RootFolder/Properties",l.SPHttpClient.configurations.v1).then(function(e){e.json().then(function(e){for(var a in e)"@odata.context"!=a&&"@odata.editLink"!=a&&"@odata.id"!=a&&"@odata.type"!=a&&t.push({key:a,value:e[a]});n.setState({Property:t})})}),[2]})},new((n=void 0)||(n=Promise))(function(e,i){function r(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n(function(e){e(a)})).then(r,o)}s((a=a.apply(t,[])).next())});var t,n,a},t}(a.Component),p=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isDarkTheme=!1,t._environmentMessage="",t}return p(t,e),t.prototype.onInit=function(){return this._environmentMessage=this._getEnvironmentMessage(),this.guid=this.getUrlParameter("guid"),e.prototype.onInit.call(this)},t.prototype.render=function(){var e=a.createElement(f,{description:this.properties.description,isDarkTheme:this._isDarkTheme,environmentMessage:this._environmentMessage,hasTeamsContext:!!this.context.sdks.microsoftTeams,userDisplayName:this.context.pageContext.user.displayName,spHttpClient:this.context.spHttpClient,currentWebUrl:this.context.pageContext.web.absoluteUrl,guid:this.getUrlParameter("guid")});i.render(e,this.domElement)},t.prototype.getUrlParameter=function(e){var t,n,a=window.location.search.substring(1).split("&");for(n=0;n<a.length;n++)if((t=a[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1]);return!1},t.prototype._getEnvironmentMessage=function(){return this.context.sdks.microsoftTeams?this.context.isServedFromLocalhost?c.AppLocalEnvironmentTeams:c.AppTeamsTabEnvironment:this.context.isServedFromLocalhost?c.AppLocalEnvironmentSharePoint:c.AppSharePointEnvironment},t.prototype.onThemeChanged=function(e){if(e){this._isDarkTheme=!!e.isInverted;var t=e.semanticColors;this.domElement.style.setProperty("--bodyText",t.bodyText),this.domElement.style.setProperty("--link",t.link),this.domElement.style.setProperty("--linkHovered",t.linkHovered)}},t.prototype.onDispose=function(){i.unmountComponentAtNode(this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return r.Version.parse("1.0")},enumerable:!1,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(o.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel})]}]}]}},t}(s.BaseClientSideWebPart);t.default=m},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.splitStyles=t.detokenize=t.clearStyles=t.loadTheme=t.flush=t.configureRunMode=t.configureLoadStyles=t.loadStyles=void 0;var a,i="undefined"==typeof window?e:window,r=i&&i.CSPSettings&&i.CSPSettings.nonce,o=((a=i.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]}).runState||(a=n(n({},a),{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),a.registeredThemableStyles||(a=n(n({},a),{registeredThemableStyles:[]})),i.__themeState__=a,a),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,c=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var t=c();e();var n=c();o.perf.duration+=n-t}function l(){d(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function u(e,t){o.loadStyles?o.loadStyles(m(e).styleString,e):function(e){if("undefined"!=typeof document){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),a=m(e),i=a.styleString,s=a.themable;n.setAttribute("data-load-themed-styles","true"),r&&n.setAttribute("nonce",r),n.appendChild(document.createTextNode(i)),o.perf.count++,t.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var d={styleElement:n,themableStyle:e};s?o.registeredThemableStyles.push(d):o.registeredStyles.push(d)}}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(p(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(p(o.registeredThemableStyles),o.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function m(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var a=e.theme;if(a){n=!0;var i=t?t[a]:void 0,r=e.defaultValue||"inherit";return t&&!i&&console,i||r}return e.rawString}).join(""),themable:n}}function _(e){var t=[];if(e){for(var n=0,a=void 0;a=s.exec(e);){var i=a.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:a[1],defaultValue:a[2]}),n=s.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),d(function(){var n=Array.isArray(e)?e:_(e),a=o.runState,i=a.mode,r=a.buffer,s=a.flushTimer;t||1===i?(r.push(n),s||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,l()},0))):u(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=l,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var a=n[t];e.push(a.themableStyle)}e.length>0&&(f(1),u([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=function(e){return e&&(e=m(_(e)).styleString),e},t.splitStyles=_}).call(this,n("yLpj"))},vlQI:function(e,t){e.exports=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});