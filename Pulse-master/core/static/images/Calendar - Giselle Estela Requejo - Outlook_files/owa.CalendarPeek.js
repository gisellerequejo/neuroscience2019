self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.CalendarPeek.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[159],{13773:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(647),o=n(1800),a=n(124),s=n(289),c=n(18),u=n(1782),d=n(1784),l=n(1780),f=n(8),p=Object(f.action)("showItemPeek")(function(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2]})})}),b=Object(f.action)("hideItemPeek")(function(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2]})})}),m=n(5);function v(e){if(e&&e.start){var t=Object(m.Jb)();return function(e,t){return Object(m.x)(e.start,t)<=0&&Object(m.x)(e.end,t)>=0}(e,t)?1:Object(m.Bb)(t,e.start)?2:0}return null}var h=n(4775);function g(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,f,m,g,_,j;return r.__generator(this,function(r){switch(r.label){case 0:return n=Object(c.q)(),Object(i.a)(),Object(s.c)(e)?[2]:(f=Object(o.a)(e.ItemId,null),m=f.event,g=f.fullEventPromise,b(),p(),Object(d.e)({itemId:e.ItemId.Id}),t&&l.e.importAndExecute(e.ItemId,t.eventScope,t.onSend,t.titleText,t.iconName,t.proposedTime,t.forwardees,t.showNotifyToggle,t.sendResponse,t.isCancelledEvent,t.isDeclinedSeriesInstance,t.isTxpShareEvent,t.responseType),Object(a.u)(e)&&Object(u.o)(),n&&(n.markUserPerceivedTime(!0),_=v({start:m.Start,end:m.End}),j=Object(a.v)(m),n.addCustomData({ExperienceType:m.ExperienceType,CharmId:m.CharmId,PPFViewTime:_,isMeeting:j,timeRelevance:Object(h.a)(m.Start,m.End)})),[4,g]);case 1:return r.sent(),[2]}})})}var _=n(5117),j=n(2);Object(j.orchestrator)(d.b,function(e){var t=e.item;g(t),_.i.importAndExecute(t.ItemId.Id,2)});var O=n(2460);Object(j.orchestrator)(d.a,function(e){return r.__awaiter(void 0,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return Object(d.e)(null),b(),[4,O.a.import()];case 1:return e.sent()("EventViewed"),[2]}})})});var I=n(1265),S=n(1182),y=n(3618);Object(j.orchestrator)(d.d,function(e){return r.__awaiter(void 0,void 0,void 0,function(){var t,n,i,o,a,s,c;return r.__generator(this,function(u){return t=e.calendarEvent,n=e.actOnSeries,i=e.titleText,o=e.actionSource,a=e.responseType,s={Accept:"Accept",Tentative:"Help",Decline:"Cancel"},c=function(e,r,i,s,c,u,l){var f=i||a;Object(I.j)(t.ItemId,t.ResponseType,f,t.FreeBusyType,n,c,o,r,s,Object(S.a)()),Object(d.a)()},g(t,r.__assign({},Object(y.a)(""),{responseType:a,onSend:c,titleText:i,eventScope:n?3:0,iconName:s[a]||"CalendarReply",sendResponse:t.IsResponseRequested,showNotifyToggle:t.IsResponseRequested,isDeclinedSeriesInstance:"Decline"===t.ResponseType&&t.IsRecurring&&!n})),[2]})})});var x=n(2621);Object(j.orchestrator)(d.c,function(e){return r.__awaiter(void 0,void 0,void 0,function(){var t,n,i,o,a;return r.__generator(this,function(s){return t=e.item,n=e.eventScope,i=e.actionSource,o=e.titleText,a=r.__assign({},Object(y.a)(""),{eventScope:n,titleText:o,iconName:"RemoveEvent",onSend:function(e,n){Object(I.b)(t.ItemId,i,e,n)},responseType:"Cancel",proposedTime:null,showNotifyToggle:!1,sendResponse:!0,forwardees:null,isCancelledEvent:!0,isDeclinedSeriesInstance:!1,isTxpShareEvent:!1}),!function(e){var t=Object(x.a)().viewState;if(t&&t.itemId)return e===t.itemId;return!1}(t.ItemId.Id)?g(t,a):l.e.importAndExecute(t.ItemId,a.eventScope,a.onSend,a.titleText,a.iconName,a.proposedTime,a.forwardees,a.showNotifyToggle,a.sendResponse,a.isCancelledEvent,a.isDeclinedSeriesInstance,a.isTxpShareEvent,a.responseType),[2]})})}),Object(j.mutator)(d.e,function(e){Object(x.a)().viewState=e.state}),n.d(t,"openItemPeek",function(){return d.b}),n.d(t,"openItemPeekToRespond",function(){return d.d}),n.d(t,"openItemPeekToCancel",function(){return d.c})},1394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(875),i=n(876),o=n(877),a=n(309);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:i.default({TimeZoneDefinition:o.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return a.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},1654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetPersonaJsonRequest:#Exchange"},e)}},1846:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r={};function i(e){r=e}function o(){return r}},1847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(1654);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("GetPersona",e,t)}},2431:function(e,t,n){"use strict";var r=n(2435),i=n(333),o=n(7),a=Object(o.computed)(function(){var e=new Set;return i.a.brandList.smtps.forEach(function(t){return e.add(t.toLowerCase())}),i.a.brandList.tier3Smtps.forEach(function(t){return e.add(t.toLowerCase())}),e}),s=Object(o.computed)(function(){var e=new Set;return i.a.brandList.tier3Smtps.forEach(function(t){return e.add(t.toLowerCase())}),e}),c=n(683),u=n(393);function d(e){return!(1!==Object(u.b)()||!f())&&p(e,a)}function l(e){return!(1!==Object(u.b)()||!f())&&p(e,s)}function f(){return i.a.brandListLoadState===c.a.unloaded&&Object(r.a)(),!(i.a.brandListLoadState!=c.a.loadSucceeded||!i.a.brandList||!i.a.brandList.smtps)}function p(e,t){return!!e&&(-1!==(e=e.toLowerCase()).indexOf("@")&&t.get().has(e))}n.d(t,"a",function(){return d}),n.d(t,"b",function(){return l})},2435:function(e,t,n){"use strict";var r=n(0),i=n(2),o=n(333),a=Object(i.mutatorAction)("SET_BRAND_LIST",function(e){o.a.brandList=e}),s=Object(i.mutatorAction)("SET_BRAND_LIST_LOAD_STATE",function(e){o.a.brandListLoadState=e}),c=n(683),u=n(11),d=n(15),l=n(6),f=function(e){if(200!==e.status)throw new Error("error fetching brand list: request for '"+e.url+"' resolved with status "+e.status);return e.json()},p=function(){return r.__awaiter(void 0,void 0,void 0,function(){var e,t,n,i,o;return r.__generator(this,function(a){switch(a.label){case 0:return e=Object(d.m)()+"resources/json/brandList.json",Object(l.e)("rp-brandListBingManaged")?(t=Object(d.m)()+"resources/json/bingPagesManagedBrandList.json",[4,Promise.all([fetch(e).then(f),fetch(t).then(f)])]):[3,2];case 1:return n=r.__read.apply(void 0,[a.sent(),2]),i=n[0],o=n[1],[2,{smtps:i.smtps.concat(o.smtps),tier3Smtps:i.tier3Smtps.concat(o.tier3Smtps)}];case 2:return[4,fetch(e).then(f)];case 3:return[2,a.sent()]}})})};function b(){return r.__awaiter(this,void 0,void 0,function(){var e,t;return r.__generator(this,function(n){switch(n.label){case 0:if(o.a.brandListLoadState!=c.a.unloaded)return[2];s(c.a.loading),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,p()];case 2:return(e=n.sent())?(s(c.a.loadSucceeded),a(e)):(s(c.a.loadFailed),u.d.info("error fetching brand list. Empty response")),[3,4];case 3:return t=n.sent(),s(c.a.loadFailed),u.d.info("error fetching brand list. Exception: "+t),[3,4];case 4:return[2]}})})}n.d(t,"a",function(){return b})},3484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetNotesForPersonaRequest:#Exchange"},e)}},3493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetPersonaRequest:#Exchange"},e)}},3495:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var r=n(3689);function i(e){return Object(r.b)().meetingIdToInsightsMap.get(e)}function o(e){var t=i(e);return t?t.files.filter(function(e){return!e.isMeetingAttachment}):[]}function a(e){var t=i(e);return t?t.emails:[]}function s(e){return o(e).length+a(e).length}function c(e){var t=i(e);return t?t.files.filter(function(e){return e.isMeetingAttachment}):[]}function u(e){var t=i(e);return t&&0!==t.files.length?t.files:[]}},3497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PersonaPropertyUpdate:#Exchange"},e)}},3541:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"CreatePersonaJsonRequest:#Exchange"},e)}},3542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(3484);t.default=function(e,t){return void 0===e.getNotesForPersonaRequest||e.getNotesForPersonaRequest.__type||(e.getNotesForPersonaRequest=i.default(e.getNotesForPersonaRequest)),r.makeServiceRequest("GetNotesForPersona",e,t)}},3543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdatePersonaJsonRequest:#Exchange"},e)}},3548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(3541);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=i.default(e.request)),r.makeServiceRequest("CreatePersona",e,t)}},3549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"CreatePersonaRequest:#Exchange"},e)}},3550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(3543);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=i.default(e.request)),r.makeServiceRequest("UpdatePersona",e,t)}},3551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdatePersonaRequest:#Exchange"},e)}},3618:function(e,t,n){"use strict";function r(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),{content:e,isDirty:t}}n.d(t,"a",function(){return r})},3689:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(3717),i=n(2),o={meetingIdToInsightsMap:new(n(7).ObservableMap)({}),peopleInsightCount:null,pendingServiceQueue:[]};r.b.initialize(o.meetingIdToInsightsMap);var a=Object(i.createStore)("meetingInsightsStore",o);t.a=a()},3717:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(910),i=20,o=new r.a(i);t.b=o},3718:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return l});var r=n(6),i=n(10),o=n(41),a=n(11),s=n(124),c=n(154),u=n(25);function d(){return Object(r.e)("cal-relatedContent-filesAndEmailsUX")&&Object(i.a)().SessionSettings.IsSubstrateSearchServiceAvailable&&!Object(u.p)()}function l(e){var t=Object(c.k)(e);if(!t)return!1;var n=t.IsMeeting,r=t.ParentFolderId.Id,i=Object(o.m)(r);return i?!!n&&!i.IsGroupMailboxCalendar&&!Object(s.A)(t):(a.d.error("calendarEntry should not be null"),!1)}},3719:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var r=n(4207),i=n(4208),o=n(4),a=n(5);function s(e,t){var n=Object(a.Db)(e,Object(a.Jb)())?Object(a.W)(e):Object(a.U)(e);return Object(o.b)(t,n)}function c(e,t,n){return n&&!e?s(n,Object(o.a)(i.a)):t?s(t,Object(o.a)(r.a)):""}function u(e){return s(e,"{0}")}},3761:function(e,t,n){"use strict";var r=n(3),i=n(3717),o=n(3689),a=n(3718),s=n(3495),c=n(3719);function u(e){var t=Object(s.c)(e);return t?t.dataFetchSource:null}function d(e){var t=Object(s.c)(e);return t?t.traceId:null}n.d(t,"n",function(){return f}),n.d(t,"o",function(){return p}),n.d(t,"b",function(){return b}),n.d(t,"a",function(){return i.a}),n.d(t,"g",function(){return o.b}),n.d(t,"m",function(){return a.b}),n.d(t,"l",function(){return a.a}),n.d(t,"h",function(){return s.d}),n.d(t,"j",function(){return s.e}),n.d(t,"k",function(){return s.f}),n.d(t,"d",function(){return s.b}),n.d(t,"c",function(){return s.a}),n.d(t,"i",function(){return c.a}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return d});var l=new r.c(function(){return Promise.all([n.e(10),n.e(19),n.e(20),n.e(327)]).then(n.bind(null,13742))}),f=new r.a(l,function(e){return e.fetchMeetingInsights}),p=new r.a(l,function(e){return e.setPeopleInsightCountState}),b=Object(r.d)(l,function(e){return e.InsightDocRow})},4207:function(e){e.exports={a:"tVa"}},4208:function(e){e.exports={a:"uVa"}},4775:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r,i=n(5),o=n(25),a=n(75);function s(e,t,n){if(void 0===n&&(n=Object(i.Jb)()),Object(i.Db)(e,n))return-1===Object(i.p)(t,n)?r.EarlierToday:1===Object(i.p)(e,n)?r.LaterToday:-1===Object(i.p)(e,n)&&1===Object(i.p)(t,n)?r.Now:(Object(a.a)(e),-2);if(Object(i.Gb)(e,n,Object(o.k)().WeekStartDay)){var s=Object(i.Qb)(e),c=Object(i.Qb)(Object(i.Kb)(e.tz,n)),u=Object(i.u)(s,c);return u<-1?r.SameWeekBeforeYesterday:-1===u?r.Yesterday:1===u?r.Tomorrow:u>1?r.SameWeekAfterTomorrow:(Object(a.a)(u),-1)}var d=Object(i.Ub)(e,Object(o.k)().WeekStartDay),l=Object(i.Ub)(Object(i.Kb)(e.tz,n),Object(o.k)().WeekStartDay),f=Object(i.z)(d,l);return f<-1?r.BeforeLastWeek:-1===f?r.LastWeek:1===f?r.NextWeek:f>1?r.AfterNextWeek:(Object(a.a)(f),-1)}!function(e){e[e.BeforeLastWeek=0]="BeforeLastWeek",e[e.LastWeek=1]="LastWeek",e[e.SameWeekBeforeYesterday=2]="SameWeekBeforeYesterday",e[e.Yesterday=3]="Yesterday",e[e.Now=4]="Now",e[e.Tomorrow=5]="Tomorrow",e[e.SameWeekAfterTomorrow=6]="SameWeekAfterTomorrow",e[e.NextWeek=7]="NextWeek",e[e.AfterNextWeek=8]="AfterNextWeek",e[e.EarlierToday=9]="EarlierToday",e[e.LaterToday=11]="LaterToday"}(r||(r={}))},4776:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(2),i=Object(r.createStore)("relatedContentStore",{hasScrolledInDetailsForm:!1});i()},4949:function(e,t,n){var r=n(5916),i=n(31);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},5117:function(e,t,n){"use strict";var r=n(3),i=n(4776),o=n(0),a=n(5915),s=n(4),c=n(1),u=n(28),d=n(362),l=n(4949),f=Object(u.a)(function(e){return c.createElement(c.Fragment,null,c.createElement("div",{className:l.headerRow},c.createElement(d.a,{iconName:"CRMCustomerInsightsApp",className:l.insightsIcon,style:{color:e.color}}),c.createElement("div",{className:l.relatedContentHeaderText,style:{color:e.color}},Object(s.a)(a.a))),c.createElement("p",{className:l.relatedContentHeaderSubText},Object(s.a)(a.b)))}),p=n(6);function b(){return Object(p.e)("cal-meetingInsights")}var m=n(19),v=n(18),h=n(180),g=n(333),_=n(3531),j=Object(u.a)(function(e){if(c.useEffect(function(){Object(_.a)()},[]),g.a.isLivePersonaCardInitialized){var t=window.MeetingInsightsV2;return!!t&&c.createElement(t,{calendarItemId:e.calendarItem.ItemId.Id,onInsightsReceived:e.onInsightsReceived,customLinkTextColor:e.customLinkTextColor})}return null}),O=n(86),I=n(3761);function S(){return Object(p.e)("cal-meetingInsights")&&Object(I.g)().peopleInsightCount}function y(){return Object(p.e)("cal-meetingInsights")&&null!==Object(I.g)().peopleInsightCount}var x=n(4949),w=function(e){function t(t){var n=e.call(this,t)||this;return n.getFilesCount=function(){return Object(I.j)(n.props.calendarItem.ItemId.Id).length},n.getEmailsCount=function(){return Object(I.h)(n.props.calendarItem.ItemId.Id).length},n.onInsightsReceived=function(e){I.o.importAndExecute(e)},n.tryEndPerfDatapoint=function(){if(n.insightsPerfDatapoint){var e=Object(I.f)(n.props.calendarItem.ItemId.Id);e&&(n.insightsPerfDatapoint.addCustomData({filesCount:n.getFilesCount(),emailsCount:n.getEmailsCount(),dataFetchSource:Object(I.e)(n.props.calendarItem.ItemId.Id),isOrganizer:n.props.calendarItem.IsOrganizer,traceId:e}),n.insightsPerfDatapoint.end(),n.insightsPerfDatapoint=null)}},n.logInsightsCacheHitMissRateOnFirstRender=function(){if(n.insightsPerfDatapoint){var e=!!Object(I.f)(n.props.calendarItem.ItemId.Id);n.insightsPerfDatapoint.addCustomData({cacheHit:e})}},Object(p.e)("cal-relatedContent-filesAndEmailsUX")&&(n.insightsPerfDatapoint=new v.a("RelatedContentFilesAndEmailsRenderingLatency")),n}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.logInsightsCacheHitMissRateOnFirstRender(),this.tryEndPerfDatapoint()},t.prototype.componentDidUpdate=function(){this.tryEndPerfDatapoint()},t.prototype.componentWillUnmount=function(){this.insightsPerfDatapoint&&this.insightsPerfDatapoint.invalidate(),I.o.importAndExecute(null)},t.prototype.render=function(){var e=y(),t=e?S():0,n=this.getFilesCount(),r=this.getEmailsCount();if(e&&0===n+r+t)return null;var i=n>0||r>0||t>0,o=Object(h.k)(Object(O.h)().neutralLighterAlt,this.props.colorScheme,this.props.colorScheme.calDarkAlt);return c.createElement("div",{className:i?x.insightsContainer:"",role:"region"},i&&c.createElement(f,{color:o}),c.createElement("div",{className:x.insightsContent},n>0&&c.createElement(N,{color:o,colorScheme:this.props.colorScheme,readingPaneEntrySource:this.props.readingPaneEntrySource,meetingId:this.props.calendarItem.ItemId.Id}),r>0&&c.createElement(L,{color:o,colorScheme:this.props.colorScheme,adjustTopMargin:n>0,readingPaneEntrySource:this.props.readingPaneEntrySource,meetingId:this.props.calendarItem.ItemId.Id}),b()&&c.createElement(j,{calendarItem:this.props.calendarItem,onInsightsReceived:this.onInsightsReceived,customLinkTextColor:o})))},t=o.__decorate([m.observer],t)}(c.Component);function T(){return Object(p.e)("cal-relatedContent-filesAndEmailsUX")||b()}function E(e){var t=Object(I.j)(e),n=Object(I.h)(e),r=y()?S():0;return t.length+n.length+r>0}n.d(t,"h",function(){return R}),n.d(t,"g",function(){return C}),n.d(t,"i",function(){return k}),n.d(t,"c",function(){return L}),n.d(t,"d",function(){return N}),n.d(t,"a",function(){return U}),n.d(t,"f",function(){return i.a}),n.d(t,"b",function(){return w}),n.d(t,"j",function(){return T}),n.d(t,"e",function(){return E});var P=new r.c(function(){return Promise.all([n.e(10),n.e(383)]).then(n.bind(null,13716))}),R=new r.a(P,function(e){return e.setHasScrolledInDetailsForm}),C=new r.a(P,function(e){return e.resetRelatedContentViewState}),k=new r.a(P,function(e){return e.tryFetchRelatedContentInsights}),L=Object(r.d)(P,function(e){return e.RelatedEmailsWell}),N=Object(r.d)(P,function(e){return e.RelatedFilesWell}),U=Object(r.d)(P,function(e){return e.MeetingInsightsButton})},5915:function(e){e.exports={a:"pWa",b:"qWa"}},5916:function(e,t,n){(t=e.exports=n(30)(!1)).push([e.i,'._1SF9qXLy2s3Ji75K89nUPa{max-width:876px}html[dir] ._1SF9qXLy2s3Ji75K89nUPa{border-radius:2px;padding:19px 0 28px 0}html[dir=ltr] ._1SF9qXLy2s3Ji75K89nUPa{margin:20px 0 24px 23px}html[dir=rtl] ._1SF9qXLy2s3Ji75K89nUPa{margin:20px 23px 24px 0}html[dir=ltr] ._2g7s6JwY6AIPAVo9vNiv8k{padding-left:36px}html[dir=rtl] ._2g7s6JwY6AIPAVo9vNiv8k{padding-right:36px}._3VrzUzj4kEp7cooLu3qn30{color:"[theme:themeDarkAlt, default:#005A9E]"}._2UH1ZBkEL0WgTbJveQ-nPH{color:"[theme:neutralSecondary, default:#666666]"}._2UkQUnUHv-expqoTNGcOWN{font-size:21px;font-weight:100;color:"[theme:themeDarkAlt, default:#005A9E]";font-weight:600}html[dir] ._2UkQUnUHv-expqoTNGcOWN{margin-top:5px;margin-bottom:9px}._3ahRzlDxJG-uPxz7wjRx1b{font-size:14px;font-weight:400;color:"[theme:neutralSecondary, default:#666666]"}html[dir=ltr] ._3ahRzlDxJG-uPxz7wjRx1b{margin:0 0 20px 36px}html[dir=rtl] ._3ahRzlDxJG-uPxz7wjRx1b{margin:0 36px 20px 0}._3L97dFeEsl0O_hhSuv5TNx{-webkit-box-align:center;-ms-flex-align:center;align-items:center}._3L97dFeEsl0O_hhSuv5TNx,._3F0_t8g3aT4pK8ZYCv5F_v{display:-webkit-box;display:-ms-flexbox;display:flex}._3F0_t8g3aT4pK8ZYCv5F_v{font-size:28px;font-weight:100;width:36px}',""]),t.locals={insightsContainer:"_1SF9qXLy2s3Ji75K89nUPa",insightsContent:"_2g7s6JwY6AIPAVo9vNiv8k",firstLineHeaderText:"_3VrzUzj4kEp7cooLu3qn30",secondLineHeaderText:"_2UH1ZBkEL0WgTbJveQ-nPH",relatedContentHeaderText:"_2UkQUnUHv-expqoTNGcOWN",relatedContentHeaderSubText:"_3ahRzlDxJG-uPxz7wjRx1b",headerRow:"_3L97dFeEsl0O_hhSuv5TNx",insightsIcon:"_3F0_t8g3aT4pK8ZYCv5F_v"}},902:function(e,t,n){"use strict";var r=n(0);function i(e){return e>0}var o=n(2),a=n(23),s=Object(o.action)("UNSUBSCRIBE_FROM_BRAND_SUBSCRIPTION",function(e,t,n,r,i){return Object(a.a)({name:"UnsubscribeSubscription",customData:{unsubscribeSourceType:e}},{unsubscribeSourceType:e,smtpIdentifier:t,unsubscribeSilentUris:n,unsubscribeHttpUri:r,completedCallback:i})}),c=Object(o.action)("AFTER_UNSUBSCRIBE",function(e,t,n,r,i){return{smtpIdentifier:e,unsubscribeSourceType:t,responseType:n,debugMessage:r,completedCallback:i}}),u=Object(o.action)("LOAD_SUBSCRIPTIONS_CACHE"),d=n(4),l=n(65),f="ows/api/beta/subscriptions/{0}/unsubscribe";var p,b=function(e,t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(n){switch(n.label){case 0:return[4,Object(l.c)(Object(d.b)(f,e),{unsubscribeSilentUris:t},null,!0)];case 1:return[2,n.sent()]}})})};!function(e){e[e.Fail=0]="Fail",e[e.Success=1]="Success"}(p||(p={}));var m=p,v=null;function h(e){if(e&&v){return r.__read(v.subscriptions.filter(function(t){return t&&t.smtpInfo&&t.smtpInfo.smtpAddress&&t.smtpInfo.smtpAddress.toLowerCase()===e.toLowerCase()}),1)[0]}}var g=n(207);Object(o.orchestrator)(s,function(e){return r.__awaiter(void 0,void 0,void 0,function(){var t,n,o,a,s,u,d,l,f,p;return r.__generator(this,function(h){switch(h.label){case 0:return t=e.unsubscribeSourceType,n=e.smtpIdentifier,o=e.unsubscribeSilentUris,a=e.unsubscribeHttpUri,s=e.completedCallback,a&&0!==a.length||o&&0!==o.length?(o&&i(o.length)||!a?u="No unsubscribe URIs provided":(window.open(a,"_blank"),u="Opened unsubscribe URI in new tab"),[4,b(n,o)]):(u="No unsubscribe URIs or SilentURIs provided",d=m.Fail,c(n,t,d,u,s),[2,Promise.reject("No unsubscribe URIs or SilentURIs provided")]);case 1:return l=h.sent(),f=null,Object(g.a)(l.status)?(u="Unsubscribe service called successfully. "+u,d=m.Success,function(e){if(v){var t,n=r.__read(v.subscriptions.filter(function(n,r){return!(!n||!n.smtpInfo||n.smtpInfo.smtpIdentifier!==e||(t=r,0))}),1)[0];n?(v.subscriptions.splice(t,1),v.unsubscribedSubscriptions.push(n)):j()}}(n),[3,4]):[3,2];case 2:return u="Unsubscribe service failed. "+u,d=m.Fail,[4,l.text().then(function(e){return e?JSON.parse(e):{}})];case 3:p=h.sent(),(f=new Error("ResponseCode="+l.status+", ErrorMessage="+(p&&p.error&&p.error.message))).fetchErrorType="ServerFailure",h.label=4;case 4:return c(n,t,d,u,s),f?[2,Promise.reject(f)]:[2,Promise.resolve()]}})})});var _="ows/api/beta/subscriptions?orderBy=name, asc";var j=function(e){return r.__awaiter(this,void 0,void 0,function(){var t,n;return r.__generator(this,function(i){switch(i.label){case 0:return[4,Object(l.b)(e?_+"&noResolveBrand=true":_,void 0,!0)];case 1:return t=i.sent(),Object(g.a)(t.status)?[4,t.json()]:[3,3];case 2:return function(e){v=r.__assign({},e)}(n=i.sent()),[2,n];case 3:return[2,null]}})})};Object(o.orchestrator)(u,function(e){j(!0)});Object(o.mutator)(c,function(e){var t=e.unsubscribeSourceType,n=e.responseType,r=e.debugMessage,i=e.completedCallback;"BrandCard"===t&&i&&i(n===m.Success,r)});n.d(t,"b",function(){return j}),n.d(t,"f",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return h}),n.d(t,"g",function(){return i})}},0,[5,7,8,13,155,6,9,14,142,157,240,4,10,571,399,0,1,526,178,78,16,149,514,105,557,335,24,116,234,495]]);
//# sourceMappingURL=owa.CalendarPeek.js.map
self.scriptsLoaded['owa.CalendarPeek.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.CalendarPeek.js'] = (new Date()).getTime();