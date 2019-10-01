self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~Addins~Editor.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[75],{1023:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(13),o=r(244),a=r(276),i=Object(o.b)(function(e,t){var r,o=Object(a.a)(e),i={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(r={},r[n.HighContrastSelector]={borderColor:"Highlight",color:"Highlight"},r)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(n.concatStyleSets)(o,i,t)})},1253:function(e,t,r){"use strict";var n=Array.isArray;t.a=n},1454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ExtendedPropertyType:#Exchange"},e)}},1529:function(e,t,r){"use strict";t.a=function(e,t){return e===t||e!=e&&t!=t}},1562:function(e,t,r){"use strict";var n=r(1625),o=r(0),a=r(1),i=r(193),u=r(867),s=r(185),l=r(1709),c=r(274),d=Object(u.a)(),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.type,r=e.size,n=e.ariaLabel,u=e.ariaLive,c=e.styles,f=e.label,p=e.theme,b=e.className,_=e.labelPosition,v=n,y=Object(s.j)(this.props,s.h,["size"]),g=r;void 0===g&&void 0!==t&&(g=t===i.b.large?i.a.large:i.a.medium);var m=d(c,{theme:p,size:g,className:b,labelPosition:_});return a.createElement("div",o.__assign({},y,{className:m.root}),a.createElement("div",{className:m.circle}),f&&a.createElement("div",{className:m.label},f),v&&a.createElement("div",{role:"status","aria-live":u},a.createElement(l.a,null,a.createElement("div",{className:m.screenReaderText},v))))},t.defaultProps={size:i.a.medium,ariaLive:"polite",labelPosition:"bottom"},t}(c.a),p=r(13),b={root:"ms-Spinner",circle:"ms-Spinner-circle",label:"ms-Spinner-label"},_=Object(p.keyframes)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});r.d(t,"a",function(){return v});var v=Object(n.a)(f,function(e){var t,r=e.theme,n=e.size,o=e.className,a=e.labelPosition,u=r.palette,s=Object(p.getGlobalClassNames)(b,r);return{root:[s.root,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},"top"===a&&{flexDirection:"column-reverse"},"right"===a&&{flexDirection:"row"},"left"===a&&{flexDirection:"row-reverse"},o],circle:[s.circle,{boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+u.themeLight,borderTopColor:u.themePrimary,animationName:_,animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:(t={},t[p.HighContrastSelector]={borderTopColor:"Highlight"},t)},n===i.a.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],n===i.a.small&&["ms-Spinner--small",{width:16,height:16}],n===i.a.medium&&["ms-Spinner--medium",{width:20,height:20}],n===i.a.large&&["ms-Spinner--large",{width:28,height:28}]],label:[s.label,r.fonts.small,{color:u.themePrimary,margin:"8px 0 0",textAlign:"center"},"top"===a&&{margin:"0 0 8px"},"right"===a&&{margin:"0 0 0 8px"},"left"===a&&{margin:"0 8px 0 0"}],screenReaderText:p.hiddenContentStyle}},void 0,{scope:"Spinner"})},1765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"BodyContentType:#Exchange"},e)}},1775:function(e,t,r){"use strict";var n=r(1412);t.a=function(e,t,r){"__proto__"==t&&n.a?Object(n.a)(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},1858:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ItemChange:#Exchange"},e)}},1862:function(e,t,r){"use strict";var n=r(645),o=r(613),a="[object Arguments]";var i=function(e){return Object(o.a)(e)&&Object(n.a)(e)==a},u=Object.prototype,s=u.hasOwnProperty,l=u.propertyIsEnumerable,c=i(function(){return arguments}())?i:function(e){return Object(o.a)(e)&&s.call(e,"callee")&&!l.call(e,"callee")};t.a=c},1863:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SetItemField:#Exchange"},e)}},1868:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetFolderJsonRequest:#Exchange"},e)}},1902:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DeleteItemField:#Exchange"},e)}},193:function(e,t,r){"use strict";var n,o;r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o}),function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"}(n||(n={})),function(e){e[e.normal=0]="normal",e[e.large=1]="large"}(o||(o={}))},2084:function(e,t,r){"use strict";(function(e){var n=r(479),o=r(2458),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?n.a.Buffer:void 0,s=(u?u.isBuffer:void 0)||o.a;t.a=s}).call(this,r(1849)(e))},2085:function(e,t,r){"use strict";var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.a=function(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}},2087:function(e,t,r){"use strict";var n=r(645),o=r(1656),a=r(613),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var u=function(e){return Object(a.a)(e)&&Object(o.a)(e.length)&&!!i[Object(n.a)(e)]},s=r(2452),l=r(2247),c=l.a&&l.a.isTypedArray,d=c?Object(s.a)(c):u;t.a=d},2091:function(e,t,r){"use strict";var n=Object.prototype;t.a=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},2247:function(e,t,r){"use strict";(function(e){var n=r(950),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&n.a.process,u=function(){try{return i&&i.binding&&i.binding("util")}catch(e){}}();t.a=u}).call(this,r(1849)(e))},2452:function(e,t,r){"use strict";t.a=function(e){return function(t){return e(t)}}},2454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"Message:#Exchange"},e)}},2456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56);t.default=function(e){return n.makeServiceRequest("GetAttachmentDownloadToken",{},e)}},2458:function(e,t,r){"use strict";t.a=function(){return!1}},2463:function(e,t,r){"use strict";t.a=function(e,t){return function(r){return e(t(r))}}},2464:function(e,t,r){"use strict";var n=r(1872),o=r(1862),a=r(1253),i=r(2084),u=r(2085),s=r(2087),l=Object.prototype.hasOwnProperty;t.a=function(e,t){var r=Object(a.a)(e),c=!r&&Object(o.a)(e),d=!r&&!c&&Object(i.a)(e),f=!r&&!c&&!d&&Object(s.a)(e),p=r||c||d||f,b=p?Object(n.a)(e.length,String):[],_=b.length;for(var v in e)!t&&!l.call(e,v)||p&&("length"==v||d&&("offset"==v||"parent"==v)||f&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||Object(u.a)(v,_))||b.push(v);return b}},2466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(2954);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("UpdateItem",e,t)}},2468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateItemRequest:#Exchange"},e)}},2476:function(e,t,r){"use strict";var n=r(1529),o=r(1433),a=r(2085),i=r(357);t.a=function(e,t,r){if(!Object(i.a)(r))return!1;var u=typeof t;return!!("number"==u?Object(o.a)(r)&&Object(a.a)(t,r.length):"string"==u&&t in r)&&Object(n.a)(r[t],e)}},2477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateItemRequest:#Exchange"},e)}},2483:function(e,t,r){"use strict";var n=r(1775),o=r(1529),a=Object.prototype.hasOwnProperty;t.a=function(e,t,r){var i=e[t];a.call(e,t)&&Object(o.a)(i,r)&&(void 0!==r||t in e)||Object(n.a)(e,t,r)}},2489:function(e,t,r){"use strict";var n=r(2483),o=r(1775);t.a=function(e,t,r,a){var i=!r;r||(r={});for(var u=-1,s=t.length;++u<s;){var l=t[u],c=a?a(r[l],e[l],l,r,e):void 0;void 0===c&&(c=e[l]),i?Object(o.a)(r,l,c):Object(n.a)(r,l,c)}return r}},2514:function(e,t,r){"use strict";var n=r(1850),o=r(2476);t.a=function(e){return Object(n.a)(function(t,r){var n=-1,a=r.length,i=a>1?r[a-1]:void 0,u=a>2?r[2]:void 0;for(i=e.length>3&&"function"==typeof i?(a--,i):void 0,u&&Object(o.a)(r[0],r[1],u)&&(i=a<3?void 0:i,a=1),t=Object(t);++n<a;){var s=r[n];s&&e(t,s,n,i)}return t})}},2950:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateItemJsonRequest:#Exchange"},e)}},2954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateItemJsonRequest:#Exchange"},e)}},3573:function(e,t,r){"use strict";var n=r(2464),o=r(3762),a=r(1433);t.a=function(e){return Object(a.a)(e)?Object(n.a)(e):Object(o.a)(e)}},3611:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(3649);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("AddEntityFeedback",e,t)}},3612:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"AddEntityFeedbackRequest:#Exchange"},e)}},3642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3930);t.HtmlSanitizer=n.default;var o=r(3683);t.htmlToDom=o.default,t.splitWithFragment=o.splitWithFragment;var a=r(3682);t.getInheritableStyles=a.default},3649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"AddEntityFeedbackJsonRequest:#Exchange"},e)}},3681:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign?function(e,t){return Object.assign(t||{},e)}:function(e,t){var r=t||{};if(e)for(var n=0,o=Object.keys(e);n<o.length;n++){var a=o[n];r[a]=e[a]}return r};t.default=n},3682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="border-spacing,caption-side,color,cursor,direction,empty-cells,font-family,font-size,font-style,font-variant,font-weight,font,letter-spacing,line-height,list-style-image,list-style-position,list-style-type,list-style,orphans,quotes,text-align,text-indent,text-transform,visibility,white-space,widows,word-spacing".split(",");t.default=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView,r=t&&t.getComputedStyle(e),o={};return n.forEach(function(e){return o[e]=r&&r.getPropertyValue(e)||""}),o}},3683:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="\x3c!--StartFragment--\x3e",o="\x3c!--EndFragment--\x3e";function a(e){var t=e.indexOf(n),r=e.lastIndexOf(o);if(t>=0&&r>=0&&r>=t+n.length){var a=e.substr(0,t),i=e.substr(r+o.length);return[e=e.substring(t+n.length,r),a,i]}return[e,null,null]}t.default=function(e,t,r){var n=(new DOMParser).parseFromString(e||"","text/html");return n&&n.body&&n.body.firstChild?(t&&(r||function(e,t){var r=a(t)[0];e.body.innerHTML=r})(n,e),n):null},t.splitWithFragment=a},3762:function(e,t,r){"use strict";var n=r(2091),o=r(2463),a=Object(o.a)(Object.keys,Object),i=Object.prototype.hasOwnProperty;t.a=function(e){if(!Object(n.a)(e))return a(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},3930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3681),o=r(3682),a=r(3683),i=r(3931),u=function(){function e(e){e=e||{},this.elementCallbacks=n.default(e.elementCallbacks),this.styleCallbacks=i.getStyleCallbacks(e.styleCallbacks),this.attributeCallbacks=n.default(e.attributeCallbacks),this.allowedTags=i.getAllowedTags(e.additionalAllowedTags),this.allowedAttributes=i.getAllowedAttributes(e.additionalAllowAttributes),this.defaultStyleValues=i.getDefaultStyleValues(e.additionalDefaultStyleValues),this.additionalGlobalStyleNodes=e.additionalGlobalStyleNodes||[],this.allowPreserveWhiteSpace=e.allowPreserveWhiteSpace}return e.convertInlineCss=function(t,r){return new e({additionalGlobalStyleNodes:r}).exec(t,!0)},e.sanitizeHtml=function(t,r){var n=new e(r=r||{}),a=r.currentElementOrStyle instanceof HTMLElement?o.default(r.currentElementOrStyle):r.currentElementOrStyle;return n.exec(t,r.convertCssOnly,r.preserveFragmentOnly,a)},e.prototype.exec=function(e,t,r,n){var o=a.default(e,r);return o&&(this.convertGlobalCssToInlineCss(o),t||this.sanitize(o.body,n)),o&&o.body&&o.body.innerHTML||""},e.prototype.sanitize=function(e,t){if(!e)return"";t=n.default(t,o.default(null)),this.processNode(e,t,{})},e.prototype.convertGlobalCssToInlineCss=function(e){for(var t=s(e.querySelectorAll("style")),r=0,n=this.additionalGlobalStyleNodes.reverse().map(function(e){return e.sheet}).concat(t.map(function(e){return e.sheet}).reverse()).filter(function(e){return e});r<n.length;r++)for(var o=n[r],a=function(t){var r=o.cssRules[t],n=r&&r.style?r.style.cssText:null;if(r.type!=CSSRule.STYLE_RULE||!n||!r.selectorText)return"continue";for(var a=0,i=r.selectorText.split(",");a<i.length;a++){var u=i[a];if(u&&u.trim()&&!(u.indexOf(":")>=0))s(e.querySelectorAll(u)).forEach(function(e){return e.setAttribute("style",n+(e.getAttribute("style")||""))})}},i=o.cssRules.length-1;i>=0;i--)a(i);t.forEach(function(e){e.parentNode&&e.parentNode.removeChild(e)})},e.prototype.processNode=function(e,t,r){var o=e.nodeType,a=o==Node.ELEMENT_NODE,i=o==Node.TEXT_NODE,u=e,s=a?u.tagName.toUpperCase():"";if(a&&!this.allowElement(u,s,r)||i&&/^[\r\n]*$/g.test(e.nodeValue)&&!t.insidePRE||!a&&!i)e.parentNode.removeChild(e);else if(i&&!this.allowPreserveWhiteSpace&&"pre"==t["white-space"])e.nodeValue=e.nodeValue.replace(/^ /gm," ").replace(/ {2}/g,"  ");else if(a){var l=n.default(t);this.processAttributes(u,r),this.processCss(u,s,l,r),"PRE"==s&&(l.insidePRE="true");for(var c=u.firstChild,d=void 0;c;c=d)d=c.nextSibling,this.processNode(c,l,r)}},e.prototype.processCss=function(e,t,r,n){var o=this,a=e.getAttributeNode("style");if(a){var i=a.value.split(";"),u=i.filter(function(t){var a;if(!t||""==t.trim()||2!=(a=t.split(":")).length)return!1;var i=a[0].trim().toLowerCase(),u=a[1].trim().toLowerCase(),s=o.styleCallbacks[i],l=null!=r[i],c=(!s||s(u,e,n))&&"inherit"!=u&&u.indexOf("expression")<0&&"-"!=i.substr(0,1)&&o.defaultStyleValues[i]!=u&&(l&&u!=r[i]||!l&&"initial"!=u&&"normal"!=u);return c&&l&&(r[i]=u),c&&(o.allowPreserveWhiteSpace||"white-space"!=i)});i.length!=u.length&&(u.length>0?e.setAttribute("style",u.map(function(e){return e.trim()}).join("; ")):e.removeAttribute("style"))}},e.prototype.processAttributes=function(e,t){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes[r],o=n.name.toLowerCase().trim(),a=n.value,i=this.attributeCallbacks[o];i?a=i(a,e,t):this.allowedAttributes.indexOf(o)<0&&(a=null),null==a||a.toLowerCase().indexOf("script:")>=0?e.removeAttribute(o):n.value=a}},e.prototype.allowElement=function(e,t,r){var n=this.elementCallbacks[t];return n?n(e,r):this.allowedTags.indexOf(t)>=0||t.indexOf(":")>0},e}();function s(e){return[].slice.call(e)}t.default=u},3931:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3681),o="BODY,H1,H2,H3,H4,H5,H6,FORM,P,BR,NOBR,HR,ACRONYM,ABBR,ADDRESS,B,BDI,BDO,BIG,BLOCKQUOTE,CENTER,CITE,CODE,DEL,DFN,EM,FONT,I,INS,KBD,MARK,METER,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SMALL,STRIKE,STRONG,SUB,SUP,TEMPLATE,TIME,TT,U,VAR,WBR,XMP,INPUT,TEXTAREA,BUTTON,SELECT,OPTGROUP,OPTION,LABEL,FIELDSET,LEGEND,DATALIST,OUTPUT,IMG,MAP,AREA,CANVAS,FIGCAPTION,FIGURE,PICTURE,A,NAV,UL,OL,LI,DIR,UL,DL,DT,DD,MENU,MENUITEM,TABLE,CAPTION,TH,TR,TD,THEAD,TBODY,TFOOT,COL,COLGROUP,DIV,SPAN,HEADER,FOOTER,MAIN,SECTION,ARTICLE,ASIDE,DETAILS,DIALOG,SUMMARY,DATA".split(","),a="accept,align,alt,checked,cite,color,cols,colspan,contextmenu,coords,datetime,default,dir,dirname,disabled,download,face,headers,height,hidden,high,href,hreflang,ismap,kind,label,lang,list,low,max,maxlength,media,min,multiple,open,optimum,pattern,placeholder,readonly,rel,required,reversed,rows,rowspan,scope,selected,shape,size,sizes,span,spellcheck,src,srclang,srcset,start,step,style,tabindex,target,title,translate,type,usemap,value,width,wrap".split(","),i={"background-color":"transparent","border-bottom-color":"rgb(0, 0, 0)","border-bottom-style":"none","border-bottom-width":"0px","border-image-outset":"0","border-image-repeat":"stretch","border-image-slice":"100%","border-image-source":"none","border-image-width":"1","border-left-color":"rgb(0, 0, 0)","border-left-style":"none","border-left-width":"0px","border-right-color":"rgb(0, 0, 0)","border-right-style":"none","border-right-width":"0px","border-top-color":"rgb(0, 0, 0)","border-top-style":"none","border-top-width":"0px","outline-color":"transparent","outline-style":"none","outline-width":"0px",overflow:"visible","text-decoration":"none","-webkit-text-stroke-width":"0px","word-wrap":"break-word","margin-left":"0px","margin-right":"0px",padding:"0px","padding-top":"0px","padding-left":"0px","padding-right":"0px","padding-bottom":"0px",border:"0px","border-top":"0px","border-left":"0px","border-right":"0px","border-bottom":"0px","vertical-align":"baseline",float:"none"};function u(){return null}function s(e,t){var r=t.tagName;return!("LI"==r||"DIV"==r)}function l(e){return e.filter(function(e,t,r){return r.indexOf(e)==t})}t.getAllowedTags=function(e){return l(o.concat(e||[])).map(function(e){return e.toUpperCase()})},t.getAllowedAttributes=function(e){return l(a.concat(e||[])).map(function(e){return e.toLocaleLowerCase()})},t.getDefaultStyleValues=function(e){var t=n.default(i);return e&&Object.keys(e).forEach(function(r){var n=e[r];null!=n?t[r]=n:delete t[r]}),t},t.getStyleCallbacks=function(e){var t=n.default(e);return t.position=t.position||u,t.width=t.width||s,t}},4554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(2950);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CreateItem",e,t)}},4666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SingleRecipientType:#Exchange"},e)}},4668:function(e,t,r){"use strict";var n=r(2489),o=r(2514),a=r(3573),i=Object(o.a)(function(e,t,r,o){Object(n.a)(t,Object(a.a)(t),e,o)});t.a=i},6107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ReplyAllToItem:#Exchange"},e)}},6108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ReplyToItem:#Exchange"},e)}},6716:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(7428);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetDlpPolicyTips",e,t)}},6717:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateResponseFromModernGroupRequest:#Exchange"},e)}},6718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(7429);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CreateResponseFromModernGroup",e,t)}},6719:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PostGroupItemRequest:#Exchange"},e)}},6720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(7430);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("PostGroupItem",e,t)}},6721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(7431);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("PostUnifiedGroupItem",e,t)}},6722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PostUnifiedGroupItemRequest:#Exchange"},e)}},6723:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApproveRequestItem:#Exchange"},e)}},6724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PostItem:#Exchange"},e)}},6725:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"RejectRequestItem:#Exchange"},e)}},692:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateMasterCategoryListRequest:#Exchange"},e)}},7428:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetDlpPolicyTipsRequest:#Exchange"},e)}},7429:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateResponseFromModernGroupJsonRequest:#Exchange"},e)}},7430:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PostGroupItemJsonRequest:#Exchange"},e)}},7431:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PostUnifiedGroupItemJsonRequest:#Exchange"},e)}},915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(692);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),n.makeServiceRequest("UpdateMasterCategoryList",e,t)}},951:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r(0),o=r(1),a=r(277),i=r(274),u=r(886),s=r(1023),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return o.createElement(a.a,n.__assign({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:Object(s.a)(r,t),onRenderDescription:i.b}))},t=n.__decorate([Object(u.a)("ActionButton",["theme","styles"],!0)],t)}(i.a)},963:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(1868);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetFolder",e,t)}},964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetFolderRequest:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.vendors~Addins~Editor.js.map
self.scriptsLoaded['owa.vendors~Addins~Editor.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~Addins~Editor.js'] = (new Date()).getTime();