self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.OutlookServiceOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[345],{13807:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(70),i=o(8),r=Object(i.action)("setFeatureSettings")(function(e,t,o){e.options[t]=o}),s=o(39),c=o(1041),d=o(648),u=o(92),f=o(65),O=o(6),p=o(11),l="ows/v1.0/OutlookOptions/{0}";function b(e,t){var o=Object(a.a)(l,s.a[e]);if(Object(d.a)().loadState===c.a.OptionsLoaded){if(Object(d.a)().options[e]&&Object(d.a)().options[e].lastModifiedDateTime){if(t&&0!==Object.keys(t).length){var i=t;i["feature@is.Queryable"],i["feature@odata.type"],i.createdDateTime,i.lastModifiedDateTime;return j(1,o,n.__rest(i,["feature@is.Queryable","feature@odata.type","createdDateTime","lastModifiedDateTime"]))}return p.d.info("createOrUpdateOptionsForFeature called with no changes to options"),Promise.resolve()}return j(0,o,t)}return Promise.reject("Options are not loaded. Cannot update options.")}function j(e,t,o){var n={correlationId:Object(u.a)(),options:o};return(1==e?f.c:f.d)(t,n,n.correlationId,void 0,{PreferOption:Object(O.e)("fwk-option-useRestCore")&&"Ows.UseRestCore"}).then(function(e){if(!function(e){if(e&&e.options&&1==e.options.length){var t=e.options[0];return r(Object(d.a)(),t.feature,t),!0}return!1}(e))throw new Error("Error processing options response")})}var v=o(646),w=o(179),S=Object(i.action)("applyDefaultOptions")(function(e){void 0===e&&(e=Object(v.a)()),Object.keys(Object(d.a)().options).forEach(function(t){Object(d.a)().options[t].lastModifiedDateTime||e[t]&&w(Object(d.a)().options[t],e[t])})}),h=o(1042),m=null,g=Object(i.action)("loadOptions")(function(){switch(Object(d.a)().loadState){case c.a.OptionsNotLoaded:return Object(d.a)().loadState=c.a.OptionsLoading,m=Object(f.b)("ows/v1.0/OutlookOptions",void 0,void 0,{PreferOption:Object(O.e)("fwk-option-useRestCore")&&"Ows.UseRestCore"}).then(function(e){!function(e){e?(e.options&&e.options.forEach(function(e){null!=e&&r(Object(d.a)(),e.feature,e)}),S(),Object(d.a)().loadState=c.a.OptionsLoaded):(p.d.info("Error loading options"),Object(h.a)(),Object(d.a)().loadState=c.a.OptionsNotLoaded)}(e),m=null});case c.a.OptionsLoading:return m;case c.a.OptionsLoaded:return Promise.resolve()}});var A=o(1026);function y(e){return n.__awaiter(this,void 0,void 0,function(){return n.__generator(this,function(t){switch(t.label){case 0:return[4,g()];case 1:return t.sent(),[2,Object(A.a)(e)]}})})}var C=Object(i.action)("updateAddinPinStatus")(function(e,t,o){var n=Object(A.a)(s.a.SurfaceActions),a=Object(A.a)(s.a.CalendarSurfaceAddins),i=!!o.readMode&&D(n.readSurfaceAddins,e,t);i=o.composeMode&&D(n.composeSurfaceAddins,e,t)||i;var r=!!o.calendarMode&&D(a.calendarSurfaceAddins,e,t);i&&b(s.a.SurfaceActions,n),r&&b(s.a.CalendarSurfaceAddins,a)}),D=function(e,t,o){var n=!1;return o?-1===e.indexOf(t)&&(e.push(t),n=!0):-1!==e.indexOf(t)&&(e.splice(e.indexOf(t),1),n=!0),n};o.d(t,"createOrUpdateOptionsForFeature",function(){return b}),o.d(t,"loadOptions",function(){return g}),o.d(t,"getServerOptionsForFeature",function(){return y}),o.d(t,"updateAddinPinStatus",function(){return C})}},0,[514,105]]);
//# sourceMappingURL=owa.OutlookServiceOptions.js.map
self.scriptsLoaded['owa.OutlookServiceOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.OutlookServiceOptions.js'] = (new Date()).getTime();