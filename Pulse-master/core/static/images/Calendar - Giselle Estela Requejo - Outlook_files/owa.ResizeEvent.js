self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ResizeEvent.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[386],{2964:function(e,t,i){"use strict";i.r(t);var n="resize-event",r=i(425),o=i(2),u=Object(o.createStore)("resizeEmitters",{emitters:{}})();function s(e,t){if(void 0===t&&(t=null),!u.emitters[e]){var i=new r.a;u.emitters[e]=i,(t||window).addEventListener("resize",function(){u.emitters[e].emit(n)})}return u.emitters[e]}function c(e,t,i){void 0===t&&(t=""),void 0===i&&(i=null),s(t,i).on(n,e)}function f(e){void 0===e&&(e=""),s(e).emit(n)}function d(e,t){void 0===t&&(t=""),s(t).off(n,e)}function m(e){u.emitters[e]&&(u.emitters[e].off(n,null),delete u.emitters[e])}i.d(t,"subscribe",function(){return c}),i.d(t,"trigger",function(){return f}),i.d(t,"unsubscribe",function(){return d}),i.d(t,"removeResizeEventEmitter",function(){return m})}}]);
//# sourceMappingURL=owa.ResizeEvent.js.map
self.scriptsLoaded['owa.ResizeEvent.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ResizeEvent.js'] = (new Date()).getTime();