self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.HotkeysMap.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[272],{10159:function(e){e.exports={d:"qJb",b:"rJb",f:"sJb",e:"tJb",a:"uJb",c:"vJb"}},10160:function(e,t,o){var r=o(10161),n=o(31);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)n.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},10161:function(e,t,o){(t=e.exports=o(30)(!1)).push([e.i,".q2y7w0VvwQHpEuwdCjcBC{width:50%}",""]),t.locals={column:"q2y7w0VvwQHpEuwdCjcBC"}},10162:function(e,t,o){var r=o(10163),n=o(31);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)n.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},10163:function(e,t,o){(t=e.exports=o(30)(!1)).push([e.i,"html[dir] h3{margin-top:0;margin-bottom:6px}.UFT9SMvUJkbE1Kz0EiMNW{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;width:716px}html[dir=ltr] .UFT9SMvUJkbE1Kz0EiMNW{padding:36px 0 0 36px}html[dir=rtl] .UFT9SMvUJkbE1Kz0EiMNW{padding:36px 36px 0 0}.GED6eltDJQpxdW6LHmp2y{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;width:716px}html[dir=ltr] .GED6eltDJQpxdW6LHmp2y{padding:36px 0 18px 36px}html[dir=rtl] .GED6eltDJQpxdW6LHmp2y{padding:36px 36px 18px 0}html[dir=ltr] ._29tqFc4GgJuTv9fMa2ho6m{float:right;margin:12px 12px 0 0}html[dir=rtl] ._29tqFc4GgJuTv9fMa2ho6m{float:left;margin:12px 0 0 12px}html[dir] ._1DI7X8x5Jai0wSMnhS-cgA{margin-bottom:18px}._2qAgUHu17UOAOqDaR9vuOS{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3EEci_VQ_AhFp330enXWFM{font-size:12px;font-weight:400}html[dir=ltr] ._3EEci_VQ_AhFp330enXWFM{margin-right:1em}html[dir=rtl] ._3EEci_VQ_AhFp330enXWFM{margin-left:1em}._1yYs9T4P1EpanAnjaKpl1C{font-size:12px;font-weight:400;width:160px;-ms-flex-negative:0;flex-shrink:0;word-wrap:break-word}html[dir=ltr] ._1yYs9T4P1EpanAnjaKpl1C{text-align:left}html[dir=rtl] ._1yYs9T4P1EpanAnjaKpl1C{text-align:right}html[dir] ._2-dmRHTrTxA5BO2zrujpW0{padding:12px 36px 36px 36px}",""]),t.locals={containerWithFooter:"UFT9SMvUJkbE1Kz0EiMNW",containerWithoutFooter:"GED6eltDJQpxdW6LHmp2y",closeButton:"_29tqFc4GgJuTv9fMa2ho6m",commandCategoryContainer:"_1DI7X8x5Jai0wSMnhS-cgA",shortcut:"_2qAgUHu17UOAOqDaR9vuOS",description:"_3EEci_VQ_AhFp330enXWFM",hotkey:"_1yYs9T4P1EpanAnjaKpl1C",footer:"_2-dmRHTrTxA5BO2zrujpW0"}},177:function(e,t,o){"use strict";var r=o(7),n=(o(1),o(54)),i=o(482),a=o(3),s=new a.c(function(){return o.e(922).then(o.t.bind(null,13551,7))}),c=new a.b(s,function(e){return e.default}),l=o(25);function u(e){if("string"==typeof e||Array.isArray(e))return e;var t=Object(l.f)().UserOptions,o=(void 0===t?{}:t).KeyboardShortcutsMode;switch(void 0===o?"":o){case 0:return e.hotmail;case 2:return e.yahoo;case 3:return e.gmail;case 4:return e.owa;default:return}}function p(e,t){if(e.ctrlKey||e.altKey||e.metaKey||t)return!1;var o=e.target;return"INPUT"==o.tagName||"SELECT"==o.tagName||"TEXTAREA"==o.tagName||o.contentEditable&&"true"==o.contentEditable}var d="__keydownHandlerMap",h="__keydownHandlerHooksAdded";function f(e,t,o,a){return void 0===t&&(t=!0),void 0===o&&(o=!0),void 0===a&&(a=!1),function(s,l,f){if("object"==typeof window&&(s[d]=s[d]||{},s[d][l]={command:Object(i.a)(e),stopPropagation:t,preventDefault:o,allowHotkeyOnTextFields:a},!s[h])){var m=s.componentDidMount;s.componentDidMount=function(){var e=this;m&&m.call(this);var t,o=c.import(),i=function(){e.__mousetrap&&e.__mousetrap.reset(),t&&t()},a=o.then(function(o){e.__mousetrap=new o(n.findDOMNode(e)),t=Object(r.autorun)(function(e){var t=this;this.__mousetrap.reset();for(var o=e[d],r=Object.keys(o),n=function(n){var a=r[n],s=u(o[a].command);s&&i.__mousetrap.bind(s,function(r){p(r,o[a].allowHotkeyOnTextFields)||(o[a].stopPropagation&&r.stopPropagation(),o[a].preventDefault&&r.preventDefault(),e[a].call(t,r))})},i=this,a=0;a<r.length;a++)n(a)}.bind(e,s))}).catch(i);this.__cleanupMousetrap=a.then(function(){return i})};var y=s.componentWillUnmount;s.componentWillUnmount=function(){y&&y.call(this),this.__cleanupMousetrap&&this.__cleanupMousetrap.then(function(e){return e()})},s[h]=!0}}}var m=o(0);function y(e,t,o){var n=void 0===o?{}:o,a=n.allowHotkeyOnTextFields,s=void 0!==a&&a,l=n.isEnabled,p=n.stopPropagation,d=void 0===p||p,h=n.preventDefault,f=void 0===h||h;return m.__awaiter(this,void 0,void 0,function(){var o,n,a,p;return m.__generator(this,function(h){switch(h.label){case 0:return[4,c.import()];case 1:return o=h.sent(),n=new o(document.body),a=function(e){return u(e=Object(i.a)(e))}(e),p=Object(r.autorun)(function(){!function(e,t,o){e.reset(),t&&e.bind(t,o)}(n,a,b(s,l,d,f,t))}),[2,function(){n.reset(),p()}]}})})}function b(e,t,o,r,n){return function(i){p(i,e)||t&&!t()||(o&&i.stopPropagation(),r&&i.preventDefault(),n())}}o.d(t,"c",function(){return f}),o.d(t,"a",function(){return y}),o.d(t,"b",function(){return i.a})},2944:function(e,t,o){"use strict";var r=o(1625),n=o(0),i=o(1),a=o(867),s=o(274),c=o(796),l=Object(a.a)(),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._link=i.createRef(),t._onClick=function(e){var o=t.props,r=o.onClick;o.disabled?e.preventDefault():r&&r(e)},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.disabled,r=t.children,a=t.className,s=t.href,u=t.theme,p=t.styles,d=t.keytipProps,h=l(p,{className:a,isButton:!s,isDisabled:o,theme:u}),f=this._getRootType(this.props);return i.createElement(c.a,{keytipProps:d,ariaDescribedBy:this.props["aria-describedby"],disabled:o},function(t){return i.createElement(f,n.__assign({},t,e._adjustPropsForRootType(f,e.props),{className:h.root,onClick:e._onClick,ref:e._link,"aria-disabled":o}),r)})},t.prototype.focus=function(){var e=this._link.current;e&&e.focus&&e.focus()},t.prototype._adjustPropsForRootType=function(e,t){t.children,t.as;var o=t.disabled,r=t.target,i=t.href,a=(t.theme,t.getStyles,t.styles,t.componentRef,n.__rest(t,["children","as","disabled","target","href","theme","getStyles","styles","componentRef"]));return"string"==typeof e?"a"===e?n.__assign({target:r,href:o?void 0:i},a):"button"===e?n.__assign({type:"button",disabled:o},a):n.__assign({},a,{disabled:o}):n.__assign({target:r,href:i,disabled:o},a)},t.prototype._getRootType=function(e){return e.as?e.as:e.href?"a":"button"},t}(s.a),p=o(13),d={root:"ms-Link"};o.d(t,"a",function(){return h});var h=Object(r.a)(u,function(e){var t,o,r,n=e.className,i=e.isButton,a=e.isDisabled,s=e.theme,c=s.semanticColors,l=c.link,u=c.linkHovered,h=c.disabledText,f=c.focusBorder,m=Object(p.getGlobalClassNames)(d,s);return{root:[m.root,s.fonts.medium,{color:l,outline:"none",fontSize:"inherit",fontWeight:"inherit",selectors:(t={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+f+" inset",selectors:(o={},o[p.HighContrastSelector]={outline:"1px solid WindowText"},o)}},t[p.HighContrastSelector]={borderBottom:"none"},t)},i&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(r={},r[p.HighContrastSelectorBlack]={color:"#FFFF00"},r[p.HighContrastSelectorWhite]={color:"#00009F"},r)},!i&&{textDecoration:"none"},a&&["is-disabled",{color:h,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!a&&{selectors:{"&:active, &:hover, &:active:hover":{color:u,textDecoration:"underline"},"&:focus":{color:l}}},m.root,n]}},void 0,{scope:"Link"})},3086:function(e,t,o){"use strict";o.r(t);var r=o(2),n=Object(r.createStore)("HotkeysMapStore",{isVisible:!1})(),i=Object(r.mutatorAction)("setIsHotkeysMapVisible",function(e){n.isVisible=e}),a=o(0),s=o(10159),c=o(4),l=o(1),u=o(10160);var p=function(e){var t=l.Children.toArray(e.children),o=Math.ceil(t.length/2);return l.createElement(l.Fragment,null,l.createElement("div",{className:u.column},t.slice(0,o)),l.createElement("div",{className:u.column},t.slice(o)))},d=o(25),h=o(177),f=o(5614),m=o(6031),y=o(918),b=o(2944),_=o(1658),k=o(19),g=o(10162),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onGoToOptionsClick=function(){t.onDismiss(),t.props.goToOptions&&t.props.goToOptions()},t}return a.__extends(t,e),t.prototype.componentDidMount=function(){this.hotkeyDisposePromise=Object(h.a)({hotmail:"?",yahoo:"?",gmail:"?",owa:"?"},this.showHotkeysMap)},t.prototype.componentWillUnmount=function(){this.hotkeyDisposePromise.then(function(e){return e()})},t.prototype.render=function(){var e=!!this.props.goToOptions;return l.createElement(_.a,{isOpen:n.isVisible,onDismiss:this.onDismiss},l.createElement(y.a,{className:g.closeButton,iconProps:{iconName:"Cancel"},onClick:this.onDismiss}),l.createElement("div",{className:e?g.containerWithFooter:g.containerWithoutFooter},l.createElement(p,null,this.renderHotkeyCommandCategories(this.props.commandCategories))),e&&this.renderFooter())},t.prototype.showHotkeysMap=function(){1!==Object(d.f)().UserOptions.KeyboardShortcutsMode&&i(!0)},t.prototype.onDismiss=function(){i(!1)},t.prototype.renderHotkeyCommandCategories=function(e){var t=this;return e.map(function(e){return l.createElement("div",{className:g.commandCategoryContainer,key:e.displayName},l.createElement("h3",null,e.displayName),t.renderCommands(t.getHotkeysForCommand(e)))})},t.prototype.renderCommands=function(e){var t=Object(d.f)().UserOptions.KeyboardShortcutsMode,o=Object(f.a)(t);return e.filter(function(e){return e[o]}).map(function(e){return l.createElement("span",{className:g.shortcut,key:e.description},l.createElement("span",{className:g.description},e.description),l.createElement("span",{className:g.hotkey},Object(m.a)(Object(h.b)(e)[o])))})},t.prototype.renderFooter=function(){var e="";switch(Object(d.f)().UserOptions.KeyboardShortcutsMode){case 0:e=Object(c.a)(s.d);break;case 3:e=Object(c.a)(s.b);break;case 2:e=Object(c.a)(s.f);break;case 4:e=Object(c.a)(s.e)}return l.createElement("div",{className:g.footer},l.createElement("span",null,Object(c.b)(Object(c.a)(s.a),e)),l.createElement(b.a,{onClick:this.onGoToOptionsClick},Object(c.a)(s.c)))},t.prototype.getHotkeysForCommand=function(e){return this.props.hotkeyCommands.filter(function(t){return t.category===e.category})},t=a.__decorate([k.observer],t)}(l.Component);o.d(t,"setIsHotkeysMapVisible",function(){return i}),o.d(t,"HotkeysMap",function(){return v})},482:function(e,t,o){"use strict";var r=o(125);function n(e,t){return e?t(e):e}function i(e){return e.replace(/\bctrl\b/,"command")}var a=[function(e){if(Array.isArray(e)){if(e.includes("del"))return e.concat("backspace")}else if("del"===e)return["del","backspace"];return e},function(e){return Array.isArray(e)?e.map(i):i(e)}];function s(e){return Object(r.j)()?function(e,t){return Array.isArray(e)||"string"==typeof e?t.reduce(function(e,t){return t(e)},e):{hotmail:t.reduce(function(e,t){return n(e,t)},e.hotmail),owa:t.reduce(function(e,t){return n(e,t)},e.owa),gmail:t.reduce(function(e,t){return n(e,t)},e.gmail),yahoo:t.reduce(function(e,t){return n(e,t)},e.yahoo)}}(e,a):e}o.d(t,"a",function(){return s})},5614:function(e,t,o){"use strict";function r(e){switch(e){case 0:return"hotmail";case 3:return"gmail";case 2:return"yahoo";case 4:return"owa";case 1:return null}}o.d(t,"a",function(){return r})},6031:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o(6032),n=o(4),i=o(77);function a(e,t){return"string"==typeof e?s(e,t):e instanceof Array?e.map(function(e){return s(e,t)}).join(" / "):""}function s(e,t){var o=e.split("+");if(1===o.length){var i=e.split(" ");return 1===i.length?c(i[0],t):Object(n.b)(Object(n.a)(r.keyboardShortcutThen),c(i[0],t),c(i[1],t))}var a=[];return o.forEach(function(e){a.push(c(e,t))}),a.join("+")}function c(e,t){var o,a=(void 0===t?{}:t).useMacSymbols;if(void 0===a?Object(i.i)():a)switch(e.toLowerCase()){case"command":return"⌘";case"alt":return"⌥";case"shift":return"⇧"}return Object(n.a)(r["hotkey_keyword_"+e])||(o=e).charAt(0).toUpperCase()+o.slice(1)}},6032:function(e){e.exports={hotkey_keyword_shift:"iea",hotkey_keyword_ctrl:"jea",hotkey_keyword_alt:"kea",hotkey_keyword_meta:"lea",hotkey_keyword_backspace:"mea",hotkey_keyword_tab:"nea",hotkey_keyword_enter:"oea",hotkey_keyword_return:"pea",hotkey_keyword_capslock:"qea",hotkey_keyword_esc:"rea",hotkey_keyword_escape:"sea",hotkey_keyword_space:"tea",hotkey_keyword_pageup:"uea",hotkey_keyword_pagedown:"vea",hotkey_keyword_end:"wea",hotkey_keyword_home:"xea",hotkey_keyword_left:"yea",hotkey_keyword_up:"zea",hotkey_keyword_right:"Aea",hotkey_keyword_down:"Bea",hotkey_keyword_ins:"Cea",hotkey_keyword_del:"Dea",hotkey_keyword_command:"Eea",hotkey_keyword_plus:"Fea",keyboardShortcutThen:"Gea"}}}]);
//# sourceMappingURL=owa.HotkeysMap.js.map
self.scriptsLoaded['owa.HotkeysMap.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.HotkeysMap.js'] = (new Date()).getTime();