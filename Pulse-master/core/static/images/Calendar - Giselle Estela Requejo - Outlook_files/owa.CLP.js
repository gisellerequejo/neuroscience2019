self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.CLP.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[141],{10358:function(e,t,n){var i=n(10359),r=n(31);"string"==typeof i&&(i=[[e.i,i]]);for(var a=0;a<i.length;a++)r.loadStyles(i[a][1],!1);i.locals&&(e.exports=i.locals)},10359:function(e,t,n){(t=e.exports=n(30)(!1)).push([e.i,'._31IkFpp5b72Rv6tTM5wjsx{color:"[theme:neutralSecondary, default:#666666]"}html[dir=ltr] ._31IkFpp5b72Rv6tTM5wjsx{padding-left:12px;padding-right:8px}html[dir=rtl] ._31IkFpp5b72Rv6tTM5wjsx{padding-right:12px;padding-left:8px}._35yiavnkrHXl4okJM1d7bN{font-size:12px}html[dir=ltr] ._2dJK6zp7Pb1DJHdwx-4zHt{margin-right:4px}html[dir=rtl] ._2dJK6zp7Pb1DJHdwx-4zHt{margin-left:4px}',""]),t.locals={subjectLabel:"_31IkFpp5b72Rv6tTM5wjsx",subjectLabelText:"_35yiavnkrHXl4okJM1d7bN",labelIcon:"_2dJK6zp7Pb1DJHdwx-4zHt"}},10360:function(e){e.exports={g:"k$a",f:"l$a",e:"m$a",c:"n$a",d:"o$a",b:"p$a",a:"q$a"}},1302:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n(1),r=n(54),a=n(406),o=0;function c(e){var t=document.createElement("div");t.id="owa-modal-"+o++,document.body.appendChild(t);var n,c=!1,l=function(){c||(c=!0,r.unmountComponentAtNode(t),document.body.removeChild(t))};return[new Promise(function(o,c){n=c,r.render(i.createElement(a.a,{child:i.createElement(e,{onDismiss:function(e){l(),o(e)}}),type:a.b.None,onError:function(){l(),c()}}),t)}),function(){l(),n()}]}},1679:function(e,t,n){"use strict";var i=n(990),r=n(8),a=Object(r.action)("removeInfoBarMessageInReadingPane")(function(e,t,n){void 0===n&&(n="0");for(var r=0;r<e.infoBarIds.length;r++)if(e.infoBarIds[r]==t){e.infoBarIds.splice(r,1);break}i.b[n]&&(delete i.b[n][t],0===Object.keys(i.b[n]).length&&delete i.b[n])});t.a=a},2496:function(e,t,n){"use strict";var i=n(0),r=n(990),a=n(8),o=Object(a.action)("addInfoBarMessage")(function(e,t,n,a){void 0===n&&(n="0"),-1==e.infoBarIds.indexOf(t)?e.infoBarIds.push(t):e.infoBarIds=i.__spread(e.infoBarIds),a&&(r.b[n]||(r.b[n]={}),r.b[n][t]=a)});t.a=o},2529:function(e,t,n){"use strict";n.r(t);var i=n(2),r=Object(i.action)("loadCLPUserLabels"),a=n(7438),o=n(65),c=n(10),l=function(e){if(!e||!e.value)return{userLabels:[],learnMoreUrl:""};var t=e.value,n=Object(c.a)().SessionSettings.UserLanguage,i={},r="";return t.forEach(function(e){"true"==e.Setting_enabled&&(!r&&e.PolicySetting_customurl&&(r=e.PolicySetting_customurl),i[e.Id]=function(e,t){var n=e["DisplayName_"+t]||e.DisplayName_Fallback;return{id:e.Id,parentId:e.ParentId,displayName:n,infobarDisplayText:n,tooltip:e.Setting_tooltip,settingOrder:parseInt(e.Setting_order),isDefault:"true"==e.PolicySetting_default,isEncryptingLabel:!!e.RightsProtectMessage_Disabled&&"false"==e.RightsProtectMessage_Disabled,children:[]}}(e,n))}),Object.keys(i).forEach(function(e){var t=i[e];if(t.parentId){var n=i[t.parentId];n&&(t.infobarDisplayText=n.displayName+"\\"+t.displayName,n.children.push(t)),delete i[e]}}),{userLabels:s(Object.values(i)),learnMoreUrl:r}};function s(e){return e?(e.sort(u),e.forEach(function(e){e.children&&e.children.sort(u)}),e):null}function u(e,t){return e.settingOrder-t.settingOrder}var d=n(6),f=n(4669),b=n(44);Object(i.orchestrator)(r,function(){Object(d.e)("cmp-clp")&&!Object(b.a)()&&Object(o.b)("/compliancepolicy/api/v1.0/user/label").then(function(e){Object(a.a)(l(e)),Object(f.c)(e)})});var p=Object(i.action)("setJustificationSent",function(e,t){return{clpViewState:e,justificationSent:t}});Object(i.mutator)(p,function(e){var t=e.clpViewState,n=e.justificationSent;t.justificationSent=n});var L=Object(i.action)("setSelectedCLPLabel",function(e,t,n){return{labelToSet:e,infoBarViewState:t,clpViewState:n}}),g=Object(i.action)("internalSetSelectedCLPLabel",function(e,t){return{labelToSet:t,clpViewState:e}}),v=n(2496),m=n(1679);Object(i.orchestrator)(L,function(e){var t=e.infoBarViewState,n=e.clpViewState,i=e.labelToSet,r=t.infoBarIds;n.selectedCLPLabel&&i.id==n.selectedCLPLabel.id?(g(n,null),r.indexOf("CLPLabel")>=0&&Object(m.a)(t,"CLPLabel")):i.isDefault?(g(n,i),r.indexOf("CLPLabel")>=0&&Object(m.a)(t,"CLPLabel")):(g(n,i),r.indexOf("CLPLabel")<0&&Object(v.a)(t,"CLPLabel"))}),Object(i.mutator)(g,function(e){var t=e.clpViewState,n=e.labelToSet;t.selectedCLPLabel=n});var O=n(1),h=n(362),j=n(28),P=n(1772),C=n(10358),y=Object(j.a)(function(e){var t=e.subjectHeaderLabel;return t?O.createElement(P.a,{content:t.tooltip,hostClassName:C.subjectLabel},O.createElement(h.a,{iconName:t.isEncryptingLabel?"Lock":"MarkAsProtected",className:C.labelIcon}),O.createElement("span",{className:C.subjectLabelText},t.infobarDisplayText)):null}),I=n(0),x=n(309),S=n.n(x),E=n(955),_=n(495),w=n.n(_),D=n(4066),T=n(160),k=n(4811),J=Object(i.mutatorAction)("updateItemCLPInfoInMailStore",function(e,t){e&&(e.itemCLPInfo=t)}),M=n(5305);function B(e,t){if(Object(d.e)("cmp-clp")&&e&&!e.itemCLPInfo){var n="";n=t?t.Value:Object(M.a)(e),J(e,Object(k.a)(n))}}var U=n(5299),N=n(4670);function R(e){return I.__awaiter(this,void 0,void 0,function(){var t;return I.__generator(this,function(n){return(t=T.a.items.get(e))?t.itemCLPInfo?[2,Promise.resolve(t.itemCLPInfo)]:[2,A(e).then(function(e){return B(t,e),t.itemCLPInfo})]:[2,Promise.resolve(Object(N.a)())]})})}function A(e){return I.__awaiter(this,void 0,void 0,function(){return I.__generator(this,function(t){return[2,Object(E.a)([e],w()({BaseShape:"IdOnly",AdditionalProperties:[S()({PropertyName:U.c,DistinguishedPropertySetId:"InternetHeaders",PropertyType:"String"})]}),null).then(function(e){return e&&e[0]&&e[0].Items&&e[0].Items[0]?Object(D.b)(e[0].Items[0],null,U.c):null})]})})}var F=n(10360),H=n(4),V=n(19),z=n(2448),$=n(684),K=n(1520),X=n(1763),W=n(888),q=n(3630),G=n(2402),Y=function(e){function t(t){var n=e.call(this,t)||this;return n.confirmDialog=function(){n.props.onDismiss({success:!0,downgradeJustification:n.state.downgradeJustification})},n.closeDialog=function(){n.props.onDismiss({success:!1,downgradeJustification:null})},n.onChoiceChange=function(e,t){if("OTHERS"!=t.key)return n.setState({downgradeJustification:t.value||""}),void(n.isPresetJustification=!0);n.isPresetJustification=!1},n.onTextFieldChange=function(e,t){n.isPresetJustification||n.setState({downgradeJustification:t||""})},n.isPresetJustification=!0,n.state={downgradeJustification:""},n}return I.__extends(t,e),t.prototype.render=function(){var e=this,t=[{key:"LABEL_NOT_APPLY",text:Object(H.a)(F.g),value:"Previous label no longer applies"},{key:"LABEL_NOT_CORRECT",text:Object(H.a)(F.f),value:"Previous label was incorrect"},{key:"OTHERS",text:Object(H.a)(F.e),onRenderField:function(t,n){return O.createElement("div",null,n(t),t.checked&&O.createElement(G.a,{multiline:!0,rows:3,onChange:e.onTextFieldChange}))},styles:{choiceFieldWrapper:{width:"100%"},field:{marginBottom:"10px"}}}],n=!this.state.downgradeJustification;return O.createElement(z.a,{hidden:!1,onDismiss:this.closeDialog,dialogContentProps:{type:$.a.normal,title:Object(H.a)(F.c),subText:Object(H.a)(F.d)}},O.createElement(q.a,{options:t,onChange:this.onChoiceChange}),O.createElement(K.a,null,O.createElement(X.a,{onClick:this.confirmDialog,disabled:n,text:Object(H.a)(F.b)}),O.createElement(W.a,{onClick:this.closeDialog,text:Object(H.a)(F.a)})))},t=I.__decorate([V.observer],t)}(O.Component),Q=n(1302);function Z(e,t,n,i){var r=n.originalCLPLabel;i&&r&&e.settingOrder<=r.settingOrder&&!n.justificationSent?I.__read(Object(Q.a)(Y),1)[0].then(function(i){var r=i.success,a=i.downgradeJustification;r&&a&&(p(n,!0),L(e,t,n),Object(f.d)(n,a),Object(f.b)(n.selectedCLPLabel,e))}):(L(e,t,n),Object(f.b)(n.selectedCLPLabel,e))}n.d(t,"CLPSubjectHeaderLabel",function(){return y}),n.d(t,"loadCLPUserLabels",function(){return r}),n.d(t,"loadItemCLPInfo",function(){return R}),n.d(t,"logReadCLPLabel",function(){return f.e}),n.d(t,"showJustificationModal",function(){return Z}),n.d(t,"updateItemCLPInfo",function(){return B})},4002:function(e,t,n){"use strict";n.d(t,"b",function(){return r});var i=n(2),r=Object(i.createStore)("CLPUserLabels",{userLabels:[],learnMoreUrl:""});t.a=r()},4066:function(e,t,n){"use strict";function i(e,t,n,i){var a=r(e,t,n,i);return a?a.Value:null}function r(e,t,n,i){if(!e||!e.ExtendedProperty)return null;for(var r=0;r<e.ExtendedProperty.length;r++){var a=e.ExtendedProperty[r],o=null,c=null,l=null;if(a&&a.ExtendedFieldURI&&(o=a.ExtendedFieldURI.PropertyTag,c=a.ExtendedFieldURI.PropertyName,l=a.ExtendedFieldURI.PropertyId),t&&o==t)return a;if(n&&c==n)return a;if(i&&l==i)return a}return null}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},4669:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var i=n(0),r=n(18),a=n(5),o=n(10);function c(e,t){var n=f(e.selectedCLPLabel,"Change"),a=e.originalCLPLabel,o=e.selectedCLPLabel,c=i.__assign({},n,{IsLabelChanged:!0,LabelIdBefore:a?a.id:null,IsProtectionChanged:!(!a||!o)&&a.isEncryptingLabel!=o.isEncryptingLabel,ProtectedBefore:a&&a.isEncryptingLabel,UserJustification:t});r.i.importAndExecute(c)}function l(e){var t=f(e,"Discover");r.i.importAndExecute(t)}function s(e){e&&Object(r.o)("LoadCLPLabelOnBoot",{isLabelListEmpty:!e.value||0==e.value.length})}function u(e){e&&Object(r.o)("LoadCLPLabelComposeUsage",{isDefaultLabel:e.isDefault,isEncryptingLabel:e.isEncryptingLabel})}function d(e,t){t&&e?Object(r.o)("LoadCLPLabelChange",{isDowngrade:e.settingOrder>t.settingOrder,isOriginalLabelDefault:e.isDefault}):e&&Object(r.o)("LoadCLPLabelUnselect",{isOriginalLabelDefault:e.isDefault,isOriginalLabelEncrypting:e.isEncryptingLabel})}function f(e,t){var n=Object(o.a)().SessionSettings,i=n.ExternalDirectoryTenantGuid,r=n.UserEmailAddress;return{CreationTime:Object(a.ob)(Object(a.Jb)()),Version:"1.1",Operation:t,OrganizationId:i,UserId:r,ApplicationId:"00000002-0000-0ff1-ce00-000000000000",ApplicationName:"Outlook Web",DataState:"Use",LabelId:e?e.id:null,Protected:e?e.isEncryptingLabel:null}}},4670:function(e,t,n){"use strict";function i(){return{nonTenantLabelString:"",selectedLabel:null}}n.d(t,"a",function(){return i})},4811:function(e,t,n){"use strict";var i=n(4002),r=n(4670),a=/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g;function o(e,t){if(!t)return null;for(var n=0;n<t.length;n++){var i=t[n];if(i.id==e)return i;var r=o(e,i.children);if(r)return r}return null}t.a=function(e){var t=Object(r.a)();if(!e)return t;for(var n=e.split(";"),c=Object(i.b)().userLabels,l={},s=0;s<n.length;s++){var u=n[s];if(u){var d=u.match(a);if(d&&0!=d.length){var f=d[0];l[f]?l[f].push(u):l[f]=[u]}}}var b=Object.keys(l);for(s=0;s<b.length;s++){var p=o(b[s],c);if(p){t.selectedLabel=p,delete l[b[s]];break}}return Object.values(l).forEach(function(e){t.nonTenantLabelString+=e.join(";")+";"}),t}},5299:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var i="msip_labels",r="X-MS-Exchange-Organization-ModifySensitivityLabel",a="00000000-0000-0000-0000-000000000000"},5305:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(4066),r="msip_labels";function a(e){return e&&e.ExtendedProperty?Object(i.a)(e,null,r):null}},7438:function(e,t,n){"use strict";var i=n(2),r=n(4002);t.a=Object(i.mutatorAction)("initializeCLPStore",function(e){var t=Object(r.b)();t.userLabels=e.userLabels,t.learnMoreUrl=e.learnMoreUrl})},990:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});var i={};function r(e,t){return i[e]&&i[e][t]}}},0,[514,105,24,116]]);
//# sourceMappingURL=owa.CLP.js.map
self.scriptsLoaded['owa.CLP.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.CLP.js'] = (new Date()).getTime();