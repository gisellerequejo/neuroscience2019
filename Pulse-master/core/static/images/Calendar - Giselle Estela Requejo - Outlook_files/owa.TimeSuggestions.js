self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.TimeSuggestions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[440],{11507:function(e){e.exports={a:"rIa",b:"sIa",c:"tIa",d:"uIa",e:"vIa"}},11508:function(e,t,n){var i=n(11509),r=n(31);"string"==typeof i&&(i=[[e.i,i]]);for(var o=0;o<i.length;o++)r.loadStyles(i[o][1],!1);i.locals&&(e.exports=i.locals)},11509:function(e,t,n){(t=e.exports=n(30)(!1)).push([e.i,"._3f2yvfdkt-zi79BAVe9Qf0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;font-size:14px}html[dir=ltr] ._3f2yvfdkt-zi79BAVe9Qf0{padding:0 0 0 40px}html[dir=rtl] ._3f2yvfdkt-zi79BAVe9Qf0{padding:0 40px 0 0}._3q4R7uUnUWhYDu_gtNvzCn{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}._3M88YFsK-_FodqJixNUm2x,._3q4R7uUnUWhYDu_gtNvzCn{display:-webkit-box;display:-ms-flexbox;display:flex}html[dir=ltr] ._2E-3qRjG9foicsoN3D_9AC{margin-right:5px}html[dir=rtl] ._2E-3qRjG9foicsoN3D_9AC{margin-left:5px}._1M3_ivGm5qbWeS5u9KuBcD{font-weight:600}html[dir=ltr] ._1M3_ivGm5qbWeS5u9KuBcD,html[dir=rtl] ._1M3_ivGm5qbWeS5u9KuBcD{margin-left:2px;margin-right:2px}html[dir=ltr] ._2a_bU7QqsmPs8rVO0YN8xJ{margin-left:5px;margin-right:2px}html[dir=rtl] ._2a_bU7QqsmPs8rVO0YN8xJ{margin-right:5px;margin-left:2px}._2H-TcVEKIlmeDrwL1TcJY9{text-decoration:none!important}html[dir=ltr] ._2H-TcVEKIlmeDrwL1TcJY9,html[dir=rtl] ._2H-TcVEKIlmeDrwL1TcJY9{margin-left:4px;margin-right:4px}._1ht2NuTpdSV3yISK9vyn7_{font-weight:700}html[dir=ltr] ._27ua2y76RbM1VHa_iZbHjc,html[dir=rtl] ._27ua2y76RbM1VHa_iZbHjc{margin-left:2px;margin-right:2px}",""]),t.locals={suggestionsContainer:"_3f2yvfdkt-zi79BAVe9Qf0",suggestions:"_3q4R7uUnUWhYDu_gtNvzCn",suggestion:"_3M88YFsK-_FodqJixNUm2x",freeLabel:"_2E-3qRjG9foicsoN3D_9AC",dayLabel:"_1M3_ivGm5qbWeS5u9KuBcD",noSuggestionText:"_2a_bU7QqsmPs8rVO0YN8xJ",link:"_2H-TcVEKIlmeDrwL1TcJY9",bold:"_1ht2NuTpdSV3yISK9vyn7_",timeSuggestionSeparator:"_27ua2y76RbM1VHa_iZbHjc"}},13732:function(e,t,n){"use strict";n.r(t);var i=n(3889),r=n(2),o=Object(r.action)("setPreviousDate",function(e){return{prevStart:e}}),a=Object(r.action)("setPreviousDurationInMinutes",function(e){return{durationInMinutes:e}}),s=Object(r.action)("updateTimeSuggestions",function(e){return{timeSuggestions:e}}),c=Object(r.action)("setTimeSuggestionsRequestState",function(e){return{timeSuggestionsRequestState:e}}),u=Object(r.action)("setLastFindMeetingTimesRequestId",function(e){return{lastFindMeetingTimesRequestId:e}}),l=Object(r.action)("setLastFindMeetingTimesRequestDate",function(e){return{lastFindMeetingTimesRequestDate:e}});Object(r.mutator)(o,function(e){Object(i.b)().previousStart=e.prevStart}),Object(r.mutator)(s,function(e){Object(i.b)().timeSuggestions=e.timeSuggestions}),Object(r.mutator)(u,function(e){Object(i.b)().lastFindMeetingTimesRequestId=e.lastFindMeetingTimesRequestId}),Object(r.mutator)(l,function(e){Object(i.b)().lastFindMeetingTimesRequestDate=e.lastFindMeetingTimesRequestDate}),Object(r.mutator)(a,function(e){Object(i.b)().previousMeetingDurationInMinutes=e.durationInMinutes}),Object(r.mutator)(c,function(e){Object(i.b)().timeSuggestionsRequestState=e.timeSuggestionsRequestState});var d=n(0),b=n(5),g=n(4762),m=n(1020),f="yyyy-MM-dd HH:mm:ss";function O(e,t,n){var i,r,o,a,s=(i=Object(b.f)(t,-1),r=-1*g.a.SEARCH_WINDOW_DAYS_BEFORE,o=Object(b.e)(i,r),a=Object(b.Kb)(),Object(b.Bb)(a,o)?o:Object(b.Kb)(i.tz,a)),c=Object(b.A)(Object(b.e)(s,g.a.SEARCH_WINDOW_DAYS_AFTER));return{attendees:d.__spread(e.RequiredAttendees.map(E).filter(function(e){return null!=e}),e.OptionalAttendees.map(E).filter(function(e){return null!=e})),timeConstraint:{timeslots:[{Start:{DateTime:Object(b.D)(s,f),TimeZone:t.tz},End:{DateTime:Object(b.D)(c,f),TimeZone:t.tz}}]},meetingDuration:p(t,n),locationConstraint:S(e.Locations),minimumAttendeePercentage:g.a.MINIMUM_ATTENDEE_PERCENTAGE,maxCandidates:g.a.MAX_CANDIDATES}}function E(e){return Object(m.a)(e.Mailbox.EmailAddress)?{emailAddress:{address:e.Mailbox.EmailAddress}}:null}function S(e){return e?{locations:e.filter(function(e){return e&&e.PostalAddress&&"Resource"==e.PostalAddress.LocationSource}).map(function(e){return{email:e.PostalAddress.LocationUri,name:e.DisplayName}}),suggestLocation:!1,isRequired:!0}:{suggestLocation:!1}}function p(e,t){return t=Object(b.Kb)(e.tz,t),"PT"+Object(b.x)(t,e)+"M"}var _=n(7394),h=n(65),j=n(3),v=new j.c(function(){return Promise.all([n.e(6),n.e(7),n.e(9),n.e(14),n.e(169)]).then(n.bind(null,13757))}),A=new j.b(v,function(e){return e.logFindMeetingTimesRequestDiagnostics}),D=n(6);function T(e,t){var n={};return n[_.a.APPNAME_HEADERNAME]=_.a.APPNAME_HEADERVALUE,n[_.a.SCENARIONAME_HEADERNAME]=t,n[_.a.RETURNCHRONOLOGICALRESULTS_HEADERNAME]=_.a.RETURNCHRONOLOGICALRESULTS_HEADERVALUE,n[_.a.DEBUGINFO_HEADERNAME]=_.a.DEBUGINFO_HEADERVALUE,Object(h.d)(_.a.FMT_ENDPOINT_URL,e,void 0,!0,n,void 0,void 0,void 0,"findMeetingTimes").then(function(e){return function(e){return d.__awaiter(this,void 0,void 0,function(){var t,n,i,r,o;return d.__generator(this,function(a){switch(a.label){case 0:return t="",n="",i="",e?[4,e.clone().json()]:[2,null];case 1:return o=a.sent(),e.headers&&(e.headers.has("request-id")&&(t=e.headers.get("request-id")),e.headers.has("x-calculatedbetarget")&&(n=e.headers.get("x-calculatedbetarget")),e.headers.has("date")&&(r=new Date(e.headers.get("date")))),o&&o.DebugInfo&&(i=o.DebugInfo),[2,{requestId:t,status:e?e.status+" "+e.statusText:"Error",requestTime:r?r.toLocaleDateString()+" "+r.toLocaleTimeString():"",server:n,debug:i}]}})})}(e).then(function(e){Object(D.e)("cal-mf-diagnostics")&&A.import().then(function(t){return t({requestId:e.requestId,status:e.status,requestTime:e.requestTime,server:e.server,debug:e.debug})})}),e})}var N=n(124),R=n(207),x=n(4091),M=n(4647),y=n(61);function C(e){return e.IsAllDayEvent||e.Recurrence||Object(N.s)(e.RequiredAttendees)||Object(N.s)(e.OptionalAttendees)||d.__spread(e.RequiredAttendees,e.OptionalAttendees).some(function(e){var t=e.Mailbox;return!!t&&("PrivateDL"==t.MailboxType||"PublicDL"==t.MailboxType||"GroupMailbox"==t.MailboxType)})}function I(){c(M.a.NoSuggestionsFound),Object(y.D)(),w()}function w(){Object(y.i)(),o(null),a(0),u(null),l(null)}Object(r.orchestrator)(x.b,function(e){return d.__awaiter(void 0,void 0,void 0,function(){var t,n,r,g,m,f,E,S,p,_,h;return d.__generator(this,function(d){switch(d.label){case 0:return t=Object(i.b)(),n=t.previousStart,r=t.previousMeetingDurationInMinutes,g=e.event,m=e.attendeesChanged,Object(N.q)(g,!0)?C(g)?(I(),[2]):(f=g.Start,E=g.End,(S=Object(b.x)(E,f))<=0?(I(),[2]):!m&&(v=f,(j=n)&&j.tz==v.tz&&Object(b.hb)(j)==Object(b.hb)(v)&&Object(b.sb)(j)==Object(b.sb)(v)&&Object(b.xb)(j)==Object(b.xb)(v))&&r==S?[3,5]:(p=O(g,f,E),c(M.a.SearchingSuggestions),[4,T(p,"suggestions")])):(c(null),w(),Object(y.h)(),[2]);case 1:return _=d.sent(),C(g)?(I(),[2]):Object(R.a)(_.status)?[4,_.json()]:[3,3];case 2:return(h=d.sent()).MeetingTimeSuggestions&&h.MeetingTimeSuggestions.length>0&&h.MeetingTimeSuggestions[0]?(s(h),u(_.headers.get("request-id")),l(new Date(_.headers.get("date"))),c(M.a.ShowSuggestions)):I(),[3,4];case 3:I(),d.label=4;case 4:o(f),a(Object(b.x)(E,f)),m&&Object(y.G)(),d.label=5;case 5:return[2]}var j,v})})}),Object(r.orchestrator)(x.a,function(e){s(null),o(null),a(0),c(null),u(null),l(null),Object(x.b)(e.event,!0)});var k=n(11507),H=n(4);var F=n(19),L=n(2944),q=n(18),P=n(1),U=n.n(P),W=n(3527),K=n(3890),V=n(11508),B=n(115).bind(V),G=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getTimeSuggestionsPrefix=function(e){return e?U.a.createElement("span",{className:V.dayLabel},e):U.a.createElement("span",{className:V.timeSuggestionSeparator},Object(H.a)(k.e))},t.onTimeSuggestionSelected=function(e,n,i){return function(){(0,t.props.onTimeSuggestionClicked)(e,n),Object(q.o)("TimeSuggestionClicked"),Object(y.C)(i)}},t.onSchedulingAssistantClicked=function(){(0,t.props.onTimeSuggestionNotFound)(),Object(y.E)()},t.formatTimeSuggestions=function(e){var n=t.props,i=n.event,r=n.maxCandidates,o=e.MeetingTimeSuggestions.slice(0,r),a=null;return Object(y.i)(),o.map(function(e){var t,n=(t=e.MeetingTimeSlot,{start:Object(b.Kb)(t.Start.TimeZone,t.Start.DateTime),end:Object(b.Kb)(t.End.TimeZone,t.End.DateTime)}),r=Object(b.Kb)(i.Start,n.start),o=Object(b.Kb)(i.End,n.end),s=Object(W.f)(r,o),c=Object(b.Cb)(i.Start,r)&&Object(b.Cb)(i.End,o),u=null;return Object(y.H)(r),a&&Object(b.Db)(a,r)||(a=r,u=Object(b.db)(r)),{start:r,end:o,date:u,time:s,isCurrentlySelected:c}})},t}return d.__extends(t,e),t.prototype.render=function(){return U.a.createElement("div",{className:V.suggestionsContainer},U.a.createElement("div",{className:V.freeLabel},Object(H.a)(k.a)),U.a.createElement("div",{className:V.suggestions},this.getTimeSuggestionContent()))},t.prototype.getTimeSuggestionContent=function(){var e=this,t=Object(i.b)(),n=t.timeSuggestions,r=t.timeSuggestionsRequestState,o=this.props,a=o.colorScheme,s=o.hideSchedulingAssistantLink;switch(r){case M.a.SearchingSuggestions:return U.a.createElement("div",{className:V.noSuggestionText},Object(H.a)(k.b));case M.a.NoSuggestionsFound:return U.a.createElement("div",{className:V.noSuggestionText},Object(H.a)(k.c),!s&&U.a.createElement(L.a,{className:V.link,styles:Object(K.a)(a),onClick:this.onSchedulingAssistantClicked},Object(H.a)(k.d)));case M.a.ShowSuggestions:var c=this.formatTimeSuggestions(n);return Object(q.o)("TimeSuggestionShown"),Object(y.F)(c.length),c.map(function(t,n,i){var r;return U.a.createElement("div",{className:V.suggestion,key:n},e.getTimeSuggestionsPrefix(t.date),U.a.createElement(L.a,{className:B(V.link,(r={},r[V.bold]=t.isCurrentlySelected,r)),styles:Object(K.a)(a),onClick:e.onTimeSuggestionSelected(t.start,t.end,n)},t.time))});default:return null}},t=d.__decorate([F.observer],t)}(U.a.Component);n.d(t,"initializeTimeSuggestions",function(){return x.a}),n.d(t,"TimeSuggestions",function(){return G})},2944:function(e,t,n){"use strict";var i=n(1625),r=n(0),o=n(1),a=n(867),s=n(274),c=n(796),u=Object(a.a)(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._link=o.createRef(),t._onClick=function(e){var n=t.props,i=n.onClick;n.disabled?e.preventDefault():i&&i(e)},t}return r.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.disabled,i=t.children,a=t.className,s=t.href,l=t.theme,d=t.styles,b=t.keytipProps,g=u(d,{className:a,isButton:!s,isDisabled:n,theme:l}),m=this._getRootType(this.props);return o.createElement(c.a,{keytipProps:b,ariaDescribedBy:this.props["aria-describedby"],disabled:n},function(t){return o.createElement(m,r.__assign({},t,e._adjustPropsForRootType(m,e.props),{className:g.root,onClick:e._onClick,ref:e._link,"aria-disabled":n}),i)})},t.prototype.focus=function(){var e=this._link.current;e&&e.focus&&e.focus()},t.prototype._adjustPropsForRootType=function(e,t){t.children,t.as;var n=t.disabled,i=t.target,o=t.href,a=(t.theme,t.getStyles,t.styles,t.componentRef,r.__rest(t,["children","as","disabled","target","href","theme","getStyles","styles","componentRef"]));return"string"==typeof e?"a"===e?r.__assign({target:i,href:n?void 0:o},a):"button"===e?r.__assign({type:"button",disabled:n},a):r.__assign({},a,{disabled:n}):r.__assign({target:i,href:o,disabled:n},a)},t.prototype._getRootType=function(e){return e.as?e.as:e.href?"a":"button"},t}(s.a),d=n(13),b={root:"ms-Link"};n.d(t,"a",function(){return g});var g=Object(i.a)(l,function(e){var t,n,i,r=e.className,o=e.isButton,a=e.isDisabled,s=e.theme,c=s.semanticColors,u=c.link,l=c.linkHovered,g=c.disabledText,m=c.focusBorder,f=Object(d.getGlobalClassNames)(b,s);return{root:[f.root,s.fonts.medium,{color:u,outline:"none",fontSize:"inherit",fontWeight:"inherit",selectors:(t={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+m+" inset",selectors:(n={},n[d.HighContrastSelector]={outline:"1px solid WindowText"},n)}},t[d.HighContrastSelector]={borderBottom:"none"},t)},o&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(i={},i[d.HighContrastSelectorBlack]={color:"#FFFF00"},i[d.HighContrastSelectorWhite]={color:"#00009F"},i)},!o&&{textDecoration:"none"},a&&["is-disabled",{color:g,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!a&&{selectors:{"&:active, &:hover, &:active:hover":{color:l,textDecoration:"underline"},"&:focus":{color:u}}},f.root,r]}},void 0,{scope:"Link"})},3527:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return d});var i=n(70),r=n(773),o=n(5);function a(e,t,n){return Object(i.a)(Object(r.a)("oneDayAllDayFormatString"),d(e,n))}function s(e,t,n){var a=Object(o.Kb)(e,Object(o.Wb)(t,1));return Object(i.a)(Object(r.a)("multiDayAllDayFormatString"),d(e,n),d(a,n))}function c(e,t,n){var a=Object(o.Kb)(e,t);return Object(o.Cb)(e,a)?Object(i.a)(Object(r.a)("sameDayNoDurationFormatString"),d(e,n),Object(o.W)(e)):Object(i.a)(Object(r.a)("sameDayFormatString"),d(e,n),Object(o.W)(e),Object(o.W)(a))}function u(e,t){var n=Object(o.Kb)(e,t);return Object(i.a)(Object(r.a)("timeSpanFormatString"),Object(o.W)(e),Object(o.W)(n))}function l(e,t,n){var a=Object(o.Kb)(e,t);return Object(i.a)(Object(r.a)("differentDayFormatString"),d(e,n),Object(o.W)(e),d(a,n),Object(o.W)(a))}function d(e,t){return(t?o.db:o.Y)(e)}},3890:function(e,t,n){"use strict";var i=n(180),r=n(86),o=function(e){return function(t){var n=t.isDisabled;return{root:[n&&{color:Object(r.g)().neutralSecondary},!n&&[{color:e.linkColor},{selectors:{"&:active, &:hover, &:active:hover":{color:e.linkHoverColor,textDecoration:"none"},"&:focus":{color:e.linkColor}}}]]}}};t.a=function(e,t){if(!e)return null;var n=t||Object(r.h)().white;return o({linkColor:Object(i.k)(n,e,e.calPrimary),linkHoverColor:Object(i.k)(n,e,e.calDarker)})}},4647:function(e,t,n){"use strict";var i;n.d(t,"a",function(){return i}),function(e){e[e.NoSuggestionsFound=1]="NoSuggestionsFound",e[e.SearchingSuggestions=2]="SearchingSuggestions",e[e.ShowSuggestions=3]="ShowSuggestions"}(i||(i={}))},4762:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={SEARCH_WINDOW_DAYS_BEFORE:0,SEARCH_WINDOW_DAYS_AFTER:7,MINIMUM_ATTENDEE_PERCENTAGE:100,MAX_CANDIDATES:3,MAX_CANDIDATES_QUICK_COMPOSE:2}},7394:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var i={APPNAME_HEADERNAME:"x-findmeetingtimes-appname",APPNAME_HEADERVALUE:"owa-react",SCENARIONAME_HEADERNAME:"x-findmeetingtimes-appscenario",RETURNCHRONOLOGICALRESULTS_HEADERNAME:"x-returnchronologicalresults",RETURNCHRONOLOGICALRESULTS_HEADERVALUE:"true",FMT_ENDPOINT_URL:"ows/Scheduling/api/v1.0/me/findmeetingtimes",DEBUGINFO_HEADERNAME:"prefer",DEBUGINFO_HEADERVALUE:"returndebuginfo"},r={APPNAME_HEADERNAME:"x-getroomavailability-appname",APPNAME_HEADERVALUE:"owa-react",SCENARIONAME_HEADERNAME:"x-getroomavailability-appscenario",ENDPOINT_URL:"ows/Scheduling/api/v1.0/me/getroomavailability"}}},0,[6,7,9,14,169,514,105,24,116]]);
//# sourceMappingURL=owa.TimeSuggestions.js.map
self.scriptsLoaded['owa.TimeSuggestions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.TimeSuggestions.js'] = (new Date()).getTime();