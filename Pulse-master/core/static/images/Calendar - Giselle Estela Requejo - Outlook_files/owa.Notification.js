self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Notification.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[335],{13709:function(n,e,t){"use strict";t.r(e);var r,i=t(425);function a(){return r||(r=new i.a),r}var c,o,s,u=t(0),d=t(92),l=function(){return c||(c=Object(d.a)()),c},f=function(){void 0===o&&(o=new Promise(function(n){s=n}))},p=function(){return f(),o},b=function(){f(),s()};var h,v={ChannelData:"ChannelData",SubscriptionAdded:"SubscriptionAdded",SubscriptionRemoved:"SubscriptionRemoved",SubscriptionUpdated:"SubscriptionUpdated",NotificationData:"NotificationData",TraceWarn:"TraceWarn",TraceError:"TraceError"};function m(n){a().emit(v.TraceWarn,n)}var g=!1;function w(){return g||R(),Object.keys(h).map(function(n){return h[n].refs[0].subscription})}function _(n){return g||R(),k(n)?h[n].refs:[]}function y(n){return h[n]}function k(n){return n in h}function R(){h={},g=!0}function I(n){try{n()}catch(n){e=n,a().emit(v.TraceError,e)}var e}var T="Reload";function S(n,e){var t,r;a().emit(v.NotificationData,n);var i=_(n.id).map(function(n){return n.callback}),c=function(e){I(function(){e(n)})};try{for(var o=u.__values(i),s=o.next();!s.done;s=o.next()){c(s.value)}}catch(n){t={error:n}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}}function x(n){return{id:n,EventType:T}}function E(){var n,e,t=w();try{for(var r=u.__values(t),i=r.next();!i.done;i=r.next()){S(x(i.value.subscriptionId))}}catch(e){n={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(n)throw n.error}}}var C=[],U=!1,D=function(){return C},j=function(n){return C.push(n)},H=function(){return C=[]},M=function(n){return U=n},O=function(){return U},A=t(9471),N=t.n(A),P=t(9473),q=t.n(P),W=t(26),z=t(6),F=3,G=8,J=3e5,Q=500;function X(n){return u.__awaiter(this,void 0,void 0,function(){var e,t=this;return u.__generator(this,function(r){switch(r.label){case 0:return 0!==(e=y(n.subscriptionId)).pendingRetryHandle&&(window.clearTimeout(e.pendingRetryHandle),e.pendingRetryHandle=0),e.status=2,nn(n,e),Object(z.e)("fwk-batchSubscriptions")?(j(n),O()||(window.setTimeout(function(){return u.__awaiter(t,void 0,void 0,function(){var n;return u.__generator(this,function(e){switch(e.label){case 0:return n=D(),H(),M(!1),[4,Y(n)];case 1:return e.sent(),[2]}})})},Q),M(!0)),[3,3]):[3,1];case 1:return[4,Y([n])];case 2:r.sent(),r.label=3;case 3:return[2]}})})}function Y(n){return u.__awaiter(this,void 0,void 0,function(){var e,t,r=this;return u.__generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,5]),[4,N()({request:{Header:Object(W.getJsonRequestHeader)()},subscriptionData:n.map(function(n){return{SubscriptionId:n.subscriptionId,Parameters:n.subscriptionParameters}})})];case 1:return e=i.sent(),[4,Z(n,function(n,t){return u.__awaiter(r,void 0,void 0,function(){var r;return u.__generator(this,function(i){switch(i.label){case 0:return 0===(r=e.filter(function(n){return n.SubscriptionId===t.subscriptionId})).length?[3,2]:[4,K(r[0],t,n)];case 1:return i.sent(),[3,4];case 2:return[4,L(t,n,new Error(t.subscriptionId+" not in subscription responses"))];case 3:i.sent(),i.label=4;case 4:return[2]}})})})];case 2:return i.sent(),[3,5];case 3:return t=i.sent(),[4,Z(n,function(n,e){return u.__awaiter(r,void 0,void 0,function(){return u.__generator(this,function(r){switch(r.label){case 0:return[4,L(e,n,t)];case 1:return r.sent(),[2]}})})})];case 4:return i.sent(),[3,5];case 5:return[2]}})})}function B(n){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,q()({subscriptionData:[{SubscriptionId:n.subscriptionId,Parameters:n.subscriptionParameters}]})];case 1:return e.sent(),[3,3];case 2:return m("Subscription unsubscribe failed: "+e.sent().message),[3,3];case 3:return[2]}})})}function K(n,e,t){return u.__awaiter(this,void 0,void 0,function(){var r,i,a;return u.__generator(this,function(c){switch(c.label){case 0:return n.SuccessfullyCreated?[3,2]:[4,V(e,t,n.ErrorInfo)];case 1:return c.sent(),[3,3];case 2:if(t.retries>0)for(r=_(e.subscriptionId),i=0;i<r.length;i++)(a=r[i]).subscription.onReconnected&&I(a.subscription.onReconnected);t.retries=0,t.pendingRetryHandle=0,t.status=3,nn(e,t,""),c.label=3;case 3:return[2]}})})}function L(n,e,t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(r){switch(r.label){case 0:return[4,V(n,e,t.message)];case 1:return r.sent(),[2]}})})}function V(n,e,t){return u.__awaiter(this,void 0,void 0,function(){var r,i,a;return u.__generator(this,function(c){switch(c.label){case 0:if(function(n){var e,t,r=x(n),i=_(n),a=function(n){!0!==n.subscription.noSubscriptionFailureReload&&I(function(){n.callback(r)})};try{for(var c=u.__values(i),o=c.next();!o.done;o=c.next())a(o.value)}catch(n){e={error:n}}finally{try{o&&!o.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}}(n.subscriptionId),0===e.retries)for(r=_(n.subscriptionId),i=function(n){var e=r[n];e.subscription.onDisconnected&&I(function(){e.subscription.onDisconnected(t)})},a=0;a<r.length;a++)i(a);return e.retries+=1,e.status=1,e.retries<F?[4,X(n)]:[3,2];case 1:return c.sent(),[3,3];case 2:e.retries<G&&(e.pendingRetryHandle=window.setTimeout(function(){e.pendingRetryHandle=0,X(n)},J)),c.label=3;case 3:return nn(n,e,t),[2]}})})}function Z(n,e){return u.__awaiter(this,void 0,void 0,function(){var t=this;return u.__generator(this,function(r){switch(r.label){case 0:return[4,Promise.all(n.map(function(n){return u.__awaiter(t,void 0,void 0,function(){var t;return u.__generator(this,function(r){switch(r.label){case 0:return(t=y(n.subscriptionId))?[4,e(t,n)]:[2];case 1:return r.sent(),[2]}})})}))];case 1:return r.sent(),[2]}})})}function nn(n,e,t){a().emit(v.SubscriptionUpdated,n,e,t)}var en,tn,rn,an,cn=t(234),on="pg",sn="ReloadAllNotification",un=-1,dn=6e4;function ln(){en.qs={UA:"0",cid:rn.channelId,"X-OWA-CANARY":Object(cn.getOwaCanaryCookie)()}}function fn(){rn.giveUpReconnecting=!1,rn.reconnectScheduled=!1,en.start(tn)}function pn(n){var e,t,r=n;try{for(var i=u.__values(r),a=i.next();!a.done;a=i.next()){var c=a.value;c.id===on?bn(c):c.id===sn?(E(),kn("reload all"),rn.mark++):(S(c),rn.mark++)}}catch(n){e={error:n}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}}function bn(n){switch("update"!==n.data&&kn(n.data),n.data){case"alive1":!function(n){2===rn.state&&kn("alive1 when channel was already ready");kn("channel ids: local "+rn.channelId+" server "+n.cid),kn("client mark: "+rn.mark+", server mark: "+n.mark),rn.channelId=n.cid,rn.state=2,ln(),hn(n),rn.mark=0,b()}(n);break;case"reinitSubscriptions":Promise.all(w().map(function(n){X(n)})),kn("reinit subscriptions");break;case"validateSubscriptions":kn("validate subscriptions:"+function(n){var e=[];if(null!=n){for(var t={},r=0;r<n.length;++r)null!=n[r]&&(t[n[r]]=!0);for(var i=w(),a=0;a<i.length;++a)3!=y(i[a].subscriptionId).status||t[i[a].subscriptionId]||(e.push(i[a].subscriptionId),X(i[a]))}return e}(n.subscriptionIds).join("|"));break;case"update":hn(n);break;case"backendConnectionDropped":!function(){mn();var n=Math.floor(Math.random()*dn);rn.reconnectTimeout=an.backoffMaximum,_n(n)}(),kn("backend connection dropped");break;case"diagnostic":kn("diagnostic: "+n.message)}}function hn(n){n.mark!==rn.mark&&(kn("mark mismatch local: "+rn.mark+", server: "+n.mark),E(),rn.mark=n.mark)}function vn(n){n.context&&(401===n.context.status||440===n.context.status?(kn("session timed out"),rn.giveUpReconnecting=!0,an.handleSessionTimeout&&an.handleSessionTimeout()):449===n.context.status&&(kn("Canary cookie expiration"),ln()))}function mn(){kn("connection stopped"),rn.state=3,rn.giveUpReconnecting=!0,en.stop()}function gn(){1==rn.state?rn.state=0:2!=rn.state&&4!=rn.state||(rn.state=3),!0!==rn.giveUpReconnecting&&_n()}function wn(n){switch(n.newState){case 1:0===rn.state?(rn.state=1,kn("channel initialized")):3===rn.state&&(rn.state=4,kn("channel reconnecting")),rn.reconnectTimeout=Math.abs(an.minimumReconnectInterval),rn.checkReadyTimer=window.setTimeout(yn,an.readyCheckTimeout);break;case 4:case 2:1===rn.state?(rn.state=0,kn("channel uninitialized")):2===rn.state&&(rn.state=4,kn("channel reconnecting")),rn.checkReadyTimer!==un&&(window.clearTimeout(rn.checkReadyTimer),rn.checkReadyTimer=un)}}function _n(n){var e=Math.abs(rn.reconnectTimeout);void 0!==n&&(e+=n),kn("retrying connection with backoff "+e),window.setTimeout(fn,e),rn.reconnectTimeout=Math.min(2*Math.abs(rn.reconnectTimeout),Math.abs(an.backoffMaximum)),rn.reconnectScheduled=!0}function yn(){2!==rn.state&&(kn("ready check timer expired"),mn(),_n())}function kn(n){a().emit(v.ChannelData,n)}function Rn(n,e,t,r){en=n,tn=e,an=r,(rn=t).channelId=l(),en.received(pn),en.error(vn),en.disconnected(gn),en.stateChanged(wn),ln();var i=en.stop.bind(en);en.stop=function(n,e){i(!0,e)},$.signalR.ajaxDefaults.timeout=6e4,$.signalR.transports.serverSentEvents.timeOut=6e4,fn()}var In=t(9474);function Tn(n){window.$=In,window.jQuery=In,t(9475);var e={state:0,channelId:null,mark:0,reconnectTimeout:n.minimumReconnectInterval,reconnectScheduled:!1,giveUpReconnecting:!1,checkReadyTimer:-1};if(Object(z.e)("fwk-patchSignalRGetUrl")){var r=In.signalR.transports._logic.getUrl;In.signalR.transports._logic.getUrl=function(n,e,t,i,a){return n.appRelativeUrl=n.url,r(n,e,t,i,a)}}Rn(In.connection(n.channelEndpoint),{transport:[In.signalR.transports.serverSentEvents.name,In.signalR.transports.foreverFrame.name],pingInterval:n.pingInterval},e,n)}function Sn(n,e){!function(n,e){g||R(),k(n.subscriptionId)||(h[n.subscriptionId]={refs:[],status:0,retries:0,pendingRetryHandle:0}),h[n.subscriptionId].refs.push({subscription:n,callback:e})}(n,e),function(n){u.__awaiter(this,void 0,void 0,function(){var e;return u.__generator(this,function(t){switch(t.label){case 0:return n.requiresExplicitSubscribe?0!==(e=y(n.subscriptionId)).status?[3,2]:(a().emit(v.SubscriptionAdded,n),[4,X(n)]):[2];case 1:return t.sent(),[3,3];case 2:nn(n,e),t.label=3;case 3:return[2]}})})}(n)}function xn(n,e){!function(n,e){if(k(n.subscriptionId)){for(var t=h[n.subscriptionId].refs,r=0;r<t.length;r++)if(t[r].callback===e){t.splice(r,1);break}0===t.length&&(0!==h[n.subscriptionId].pendingRetryHandle&&window.clearTimeout(h[n.subscriptionId].pendingRetryHandle),delete h[n.subscriptionId])}else m("Tried to remove "+n.subscriptionId+" from the subscription tracker when it didn't exist")}(n,e),function(n){u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return n.requiresExplicitSubscribe?k(n.subscriptionId)?[3,2]:(a().emit(v.SubscriptionRemoved,n),[4,B(n)]):[2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}(n)}t.d(e,"EventEmitter",function(){return En}),t.d(e,"subscribe",function(){return Sn}),t.d(e,"unsubscribe",function(){return xn}),t.d(e,"getChannelId",function(){return l}),t.d(e,"getChannelReady",function(){return p}),t.d(e,"initializeNotificationManager",function(){return Tn}),t.d(e,"getNotificationEmitter",function(){return a}),t.d(e,"NotificationEventType",function(){return v});var En=typeof i.a}}]);
//# sourceMappingURL=owa.Notification.js.map
self.scriptsLoaded['owa.Notification.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Notification.js'] = (new Date()).getTime();