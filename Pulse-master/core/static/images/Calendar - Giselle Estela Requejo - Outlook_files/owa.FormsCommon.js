self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.FormsCommon.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[239],{11859:function(e){e.exports={b:"NVa",c:"OVa",a:"PVa"}},11860:function(e,t,a){var n=a(11861),s=a(31);"string"==typeof n&&(n=[[e.i,n]]);for(var o=0;o<n.length;o++)s.loadStyles(n[o][1],!1);n.locals&&(e.exports=n.locals)},11861:function(e,t,a){(t=e.exports=a(30)(!1)).push([e.i,"._3dmRCoQjmjOcikYw4M3hKk{font-size:12px;font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;white-space:pre-wrap}",""]),t.locals={container:"_3dmRCoQjmjOcikYw4M3hKk"}},5260:function(e,t,a){var n=a(5983),s=a(31);"string"==typeof n&&(n=[[e.i,n]]);for(var o=0;o<n.length;o++)s.loadStyles(n[o][1],!1);n.locals&&(e.exports=n.locals)},5261:function(e,t,a){"use strict";var n=a(0),s=a(5984),o=a(4),l=a(1),c=a(28),r=a(3483),i=a(10),p=a(5260),d=a(166);t.a=Object(c.a)(function(e){var t=Object(r.a)(n.__assign({},e,{className:d(p.persona,e.className)})),a=e.name,c=e.emailAddress;return l.createElement(t,null,l.createElement("span",{className:d(p.personaName,"allowTextSelection")},c===Object(i.a)().SessionSettings.UserEmailAddress?Object(o.a)(s.a):a))})},5983:function(e,t,a){(t=e.exports=a(30)(!1)).push([e.i,'._3VZe-wsP5VLwHRnPNSVopN:focus{outline:1px solid "[theme:neutralSecondary, default:#666666]"!important}.H2hvpAQzVlxLeV2GkcRwf{font-weight:600;cursor:pointer}',""]),t.locals={persona:"_3VZe-wsP5VLwHRnPNSVopN",personaName:"H2hvpAQzVlxLeV2GkcRwf"}},5984:function(e){e.exports={a:"JVa"}},8501:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(28),o=a(11859),l=a(4),c=a(3645),r=a(5),i=a(498),p=a(2944),d=a(3890),m=a(5261),u=a(6),f=a(11860),b=a(166),w=Object(s.a)(function(e){var t=e.event,a=e.onReviewClicked,s=e.hideTime,w=e.className,j=t.RequiredAttendees&&t.OptionalAttendees?t.RequiredAttendees.concat(t.OptionalAttendees).filter(function(e){return e.ProposedStart}):[],O=n.useCallback(function(){var e,t;a(1===j.length?(e=j[0].ProposedStart,t=j[0].ProposedEnd,{Start:Object(r.cc)(e),End:Object(r.cc)(t),IsAllDayEvent:!1}):null)},[j]);return Object(u.e)("cal-mf-timeProposalUI")&&0!==j.length?n.createElement(p.a,{styles:Object(d.a)(Object(i.c)(t)),className:b(f.container,w),onClick:O},1===j.length?s?Object(l.c)(Object(l.a)(o.c),n.createElement(m.a,{name:j[0].Mailbox.Name,emailAddress:j[0].Mailbox.EmailAddress})):Object(l.c)(Object(l.a)(o.b),n.createElement(m.a,{name:j[0].Mailbox.Name,emailAddress:j[0].Mailbox.EmailAddress}),n.createElement("span",null,Object(c.a)(j[0].ProposedStart,j[0].ProposedEnd))):Object(l.b)(Object(l.a)(o.a),j.length)):null});a.d(t,"TimeProposals",function(){return w})}},0,[514,105,24,116,495]]);
//# sourceMappingURL=owa.FormsCommon.js.map
self.scriptsLoaded['owa.FormsCommon.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.FormsCommon.js'] = (new Date()).getTime();