self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.0.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[0],{136:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(827);function o(t,e){return void 0===e&&(e=!0),t&&(e&&Object(i.a)(t)||t.parentNode&&t.parentNode)}},1629:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return m}),n.d(e,"f",function(){return _}),n.d(e,"e",function(){return v});var i,o,r,s,a,u=n(121),l=n(419),c=0,d=Object(l.a)({overflow:"hidden !important"}),h="data-is-scrollable",p=(o=0,r=null,s=function(t){1===t.targetTouches.length&&(o=t.targetTouches[0].clientY)},a=function(t){if(1===t.targetTouches.length&&(t.stopPropagation(),r)){var e=t.targetTouches[0].clientY-o,n=v(t.target);n&&(r=n),0===r.scrollTop&&e>0&&t.preventDefault(),r.scrollHeight-r.scrollTop<=r.clientHeight&&e<0&&t.preventDefault()}},function(t,e){t&&(e.on(t,"touchstart",s,{passive:!1}),e.on(t,"touchmove",a,{passive:!1}),r=t)}),g=function(t){t.preventDefault()};function f(){var t=Object(u.a)();t&&t.body&&!c&&(t.body.classList.add(d),t.body.addEventListener("touchmove",g,{passive:!1,capture:!1})),c++}function m(){if(c>0){var t=Object(u.a)();t&&t.body&&1===c&&(t.body.classList.remove(d),t.body.removeEventListener("touchmove",g)),c--}}function _(){if(void 0===i){var t=document.createElement("div");t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("overflow","scroll"),t.style.setProperty("position","absolute"),t.style.setProperty("top","-9999px"),document.body.appendChild(t),i=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return i}function v(t){for(var e=t;e&&e!==document.body;){if("true"===e.getAttribute(h))return e;e=e.parentElement}for(e=t;e&&e!==document.body;){if("false"!==e.getAttribute(h)){var n=getComputedStyle(e),i=n?n.getPropertyValue("overflow-y"):"";if(i&&("scroll"===i||"auto"===i))return e}e=e.parentElement}return e&&e!==document.body||(e=window),e}},1723:function(t,e,n){"use strict";var i,o=n(0),r=n(1),s=n(1625),a=n(49),u=n(57),l=n(552),c=n(135),d=n(185),h=n(540),p=n(197),g=n(339),f=n(121),m=n(93),_=n(29),v=n(1803),b=n(332),E=n(1629),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e}(v.a);function O(t,e,n){return{targetEdge:t,alignmentEdge:e,isAuto:n}}var w=((i={})[a.a.topLeftEdge]=O(_.b.top,_.b.left),i[a.a.topCenter]=O(_.b.top),i[a.a.topRightEdge]=O(_.b.top,_.b.right),i[a.a.topAutoEdge]=O(_.b.top,void 0,!0),i[a.a.bottomLeftEdge]=O(_.b.bottom,_.b.left),i[a.a.bottomCenter]=O(_.b.bottom),i[a.a.bottomRightEdge]=O(_.b.bottom,_.b.right),i[a.a.bottomAutoEdge]=O(_.b.bottom,void 0,!0),i[a.a.leftTopEdge]=O(_.b.left,_.b.top),i[a.a.leftCenter]=O(_.b.left),i[a.a.leftBottomEdge]=O(_.b.left,_.b.bottom),i[a.a.rightTopEdge]=O(_.b.right,_.b.top),i[a.a.rightCenter]=O(_.b.right),i[a.a.rightBottomEdge]=O(_.b.right,_.b.bottom),i);function P(t,e){return!(t.top<e.top)&&(!(t.bottom>e.bottom)&&(!(t.left<e.left)&&!(t.right>e.right)))}function C(t,e){var n=new Array;return t.top<e.top&&n.push(_.b.top),t.bottom>e.bottom&&n.push(_.b.bottom),t.left<e.left&&n.push(_.b.left),t.right>e.right&&n.push(_.b.right),n}function j(t,e){return t[_.b[e]]}function x(t,e,n){return t[_.b[e]]=n,t}function S(t,e){var n=M(e);return(j(t,n.positiveEdge)+j(t,n.negativeEdge))/2}function F(t,e){return t>0?e:-1*e}function A(t,e){return F(t,j(e,t))}function H(t,e,n){return F(n,j(t,n)-j(e,n))}function W(t,e,n){var i=j(t,e)-n;return t=x(t,e,n),t=x(t,-1*e,j(t,-1*e)-i)}function L(t,e,n,i){return void 0===i&&(i=0),W(t,n,j(e,n)+F(n,i))}function D(t,e,n){return A(n,t)>A(n,e)}function R(t,e,n,i,o,r,s){void 0===o&&(o=0);var a=i.alignmentEdge,u=i.alignTargetEdge,l={elementRectangle:t,targetEdge:i.targetEdge,alignmentEdge:a};r||s||(l=function(t,e,n,i,o){void 0===o&&(o=0);var r=[_.b.left,_.b.right,_.b.bottom,_.b.top];Object(b.a)()&&(r[0]*=-1,r[1]*=-1);for(var s=t,a=i.targetEdge,u=i.alignmentEdge,l=0;l<4;l++){if(D(s,n,a))return{elementRectangle:s,targetEdge:a,alignmentEdge:u};r.splice(r.indexOf(a),1),r.indexOf(-1*a)>-1?a*=-1:(u=a,a=r.slice(-1)[0]),s=N(t,e,{targetEdge:a,alignmentEdge:u},o)}return{elementRectangle:t,targetEdge:i.targetEdge,alignmentEdge:u}}(t,e,n,i,o));var c=C(t,n);if(u){if(l.alignmentEdge&&c.indexOf(-1*l.alignmentEdge)>-1){var d=function(t,e,n,i){var o=t.alignmentEdge,r=t.targetEdge,s=-1*o;return{elementRectangle:N(t.elementRectangle,e,{targetEdge:r,alignmentEdge:s},n,i),targetEdge:r,alignmentEdge:s}}(l,e,o,s);if(P(d.elementRectangle,n))return d}}else for(var h=0,p=c;h<p.length;h++){var g=p[h];l.elementRectangle=L(l.elementRectangle,n,g)}return l}function k(t,e,n){var i=M(e).positiveEdge;return W(t,i,n-(S(t,e)-j(t,i)))}function N(t,e,n,i,o){var r;void 0===i&&(i=0);var s=n.alignmentEdge,a=n.targetEdge,u=o?a:-1*a;(r=o?L(t,e,a,i):function(t,e,n,i){void 0===i&&(i=0);var o=F(-1*n,i);return W(t,-1*n,j(e,n)+o)}(t,e,a,i),s)?r=L(r,e,s):r=k(r,u,S(e,a));return r}function M(t){return t===_.b.top||t===_.b.bottom?{positiveEdge:_.b.left,negativeEdge:_.b.right}:{positiveEdge:_.b.top,negativeEdge:_.b.bottom}}function B(t,e,n){return n&&Math.abs(H(t,n,e))>Math.abs(H(t,n,-1*e))?-1*e:e}function T(t){return Math.sqrt(t*t*2)}function I(t,e,n){if(void 0===t&&(t=a.a.bottomAutoEdge),n)return{alignmentEdge:n.alignmentEdge,isAuto:n.isAuto,targetEdge:n.targetEdge};var i=o.__assign({},w[t]);return Object(b.a)()?(i.alignmentEdge&&i.alignmentEdge%2==0&&(i.alignmentEdge=-1*i.alignmentEdge),void 0!==e?w[e]:i):i}function U(t,e,n){var i=S(e,t),o=S(n,t),r=M(t),s=r.positiveEdge,a=r.negativeEdge;return i<=o?s:a}function V(t,e,n,i,o,r,s){var a=N(t,e,i,o,s);return P(a,n)?{elementRectangle:a,targetEdge:i.targetEdge,alignmentEdge:i.alignmentEdge}:R(t,e,n,i,o,r,s)}function Y(t,e,n){var i=-1*t.targetEdge,r=new y(0,t.elementRectangle.width,0,t.elementRectangle.height),s={},a=B(t.elementRectangle,t.alignmentEdge?t.alignmentEdge:M(i).positiveEdge,n);return s[_.b[i]]=j(e,i),s[_.b[a]]=H(e,r,a),{elementPosition:o.__assign({},s),closestEdge:U(t.targetEdge,e,r),targetEdge:i}}function q(t,e){var n=e.targetRectangle,i=M(e.targetEdge),o=i.positiveEdge,r=i.negativeEdge,s=S(n,e.targetEdge),a=new y(t/2,e.elementRectangle.width-t/2,t/2,e.elementRectangle.height-t/2),u=new y(0,t,0,t);return D(u=k(u=W(u,-1*e.targetEdge,-t/2),-1*e.targetEdge,s-A(o,e.elementRectangle)),a,o)?D(u,a,r)||(u=L(u,a,r)):u=L(u,a,o),u}function z(t){var e=t.getBoundingClientRect();return new y(e.left,e.right,e.top,e.bottom)}function K(t){return new y(t.left,t.right,t.top,t.bottom)}function X(t,e,n,i,o){var r=0,s=w[e],a=o?-1*s.targetEdge:s.targetEdge;return(r=a===_.b.top?j(t,s.targetEdge)-i.top-n:a===_.b.bottom?i.bottom-j(t,s.targetEdge)-n:i.bottom-t.top-n)>0?r:i.height}function G(t,e,n,i){var r=t.gapSpace?t.gapSpace:0,s=function(t,e){var n;if(e){if(e.preventDefault){var i=e;n=new y(i.clientX,i.clientX,i.clientY,i.clientY)}else if(e.getBoundingClientRect)n=z(e);else{var o=e;n=new y(o.x,o.x,o.y,o.y)}if(!P(n,t))for(var r=0,s=C(n,t);r<s.length;r++){var a=s[r];n[_.b[a]]=t[_.b[a]]}}else n=new y(0,0,0,0);return n}(n,t.target),a=function(t,e,n,i,o){return t.isAuto&&(t.alignmentEdge=U(t.targetEdge,e,n)),t.alignTargetEdge=o,t}(I(t.directionalHint,t.directionalHintForRTL,i),s,n,t.coverTarget,t.alignTargetEdge),u=V(z(e),s,n,a,r,t.directionalHintFixed,t.coverTarget);return o.__assign({},u,{targetRectangle:s})}function $(t,e,n,i){return{elementPosition:function(t,e,n,i,o,r){var s={},a=z(e),u=r?n:-1*n,l=_.b[u],c=B(t,o||M(n).positiveEdge,i);return s[l]=H(t,a,u),s[_.b[c]]=H(t,a,c),s}(t.elementRectangle,e,t.targetEdge,n,t.alignmentEdge,i),targetEdge:t.targetEdge,alignmentEdge:t.alignmentEdge}}function Z(t,e,n,i){return function(t,e,n,i){var r=t.isBeakVisible&&t.beakWidth||0,s=T(r)/2+(t.gapSpace?t.gapSpace:0),a=t;a.gapSpace=s;var u=t.bounds?K(t.bounds):new y(0,window.innerWidth-Object(E.f)(),0,window.innerHeight),l=G(a,n,u,i),c=Y(l,q(r,l),u);return o.__assign({},$(l,e,u,t.coverTarget),{beakPosition:c})}(t,e,n,i)}var J,Q=n(1822),tt=n(867),et=n(13),nt=((J={})[_.b.top]=et.AnimationClassNames.slideUpIn10,J[_.b.bottom]=et.AnimationClassNames.slideDownIn10,J[_.b.left]=et.AnimationClassNames.slideLeftIn10,J[_.b.right]=et.AnimationClassNames.slideRightIn10,J),it=Object(tt.a)({disableCaching:!0}),ot=0,rt=0,st={opacity:0,filter:"opacity(0)"},at=["role","aria-roledescription"],ut=function(t){function e(e){var n=t.call(this,e)||this;return n._hostElement=r.createRef(),n._calloutElement=r.createRef(),n._hasListeners=!1,n._disposables=[],n.dismiss=function(t){var e=n.props.onDismiss;e&&e(t)},n._dismissOnScroll=function(t){var e=n.props.preventDismissOnScroll;n.state.positions&&!e&&n._dismissOnClickOrScroll(t)},n._dismissOnResize=function(t){n.props.preventDismissOnResize||n.dismiss(t)},n._dismissOnLostFocus=function(t){n.props.preventDismissOnLostFocus||n._dismissOnClickOrScroll(t)},n._setInitialFocus=function(){n.props.setInitialFocus&&!n._didSetInitialFocus&&n.state.positions&&n._calloutElement.current&&(n._didSetInitialFocus=!0,n._async.requestAnimationFrame(function(){return Object(u.c)(n._calloutElement.current)}))},n._onComponentDidMount=function(){n._addListeners(),n.props.onLayerMounted&&n.props.onLayerMounted(),n._updateAsyncPosition(),n._setHeightOffsetEveryFrame()},n._mouseDownOnPopup=function(){n._isMouseDownOnPopup=!0},n._mouseUpOnPopup=function(){n._isMouseDownOnPopup=!1},n._async=new l.a(n),n._didSetInitialFocus=!1,n.state={positions:void 0,slideDirectionalClassName:void 0,calloutElementRect:void 0,heightOffset:0},n._positionAttempts=0,n}return o.__extends(e,t),e.prototype.componentDidUpdate=function(){this.props.hidden?this._hasListeners&&this._removeListeners():(this._setInitialFocus(),this._hasListeners||this._addListeners(),this._updateAsyncPosition())},e.prototype.shouldComponentUpdate=function(t,e){return(!this.props.hidden||!t.hidden)&&(!Object(c.f)(this.props,t)||!Object(c.f)(this.state,e))},e.prototype.componentWillMount=function(){this._setTargetWindowAndElement(this._getTarget())},e.prototype.componentWillUnmount=function(){this._async.dispose(),this._disposables.forEach(function(t){return t()})},e.prototype.componentWillUpdate=function(t){var e=this._getTarget(t);(e!==this._getTarget()||"string"==typeof e||e instanceof String)&&!this._blockResetHeight&&(this._maxHeight=void 0,this._setTargetWindowAndElement(e)),t.gapSpace===this.props.gapSpace&&this.props.beakWidth===t.beakWidth||(this._maxHeight=void 0),t.finalHeight!==this.props.finalHeight&&this._setHeightOffsetEveryFrame(),this._didPositionPropsChange(t,this.props)&&(this._maxHeight=void 0,this._setTargetWindowAndElement(e),this.setState({positions:void 0}),this._didSetInitialFocus=!1,this._bounds=void 0),this._blockResetHeight=!1},e.prototype.componentDidMount=function(){this.props.hidden||this._onComponentDidMount()},e.prototype.render=function(){if(!this._targetWindow)return null;var t=this.props.target,e=this.props,n=e.styles,i=e.style,s=e.ariaLabel,a=e.ariaDescribedBy,u=e.ariaLabelledBy,l=e.className,c=e.isBeakVisible,p=e.children,g=e.beakWidth,f=e.calloutWidth,m=e.calloutMaxWidth,_=e.finalHeight,v=e.hideOverflow,b=void 0===v?!!_:v,E=e.backgroundColor,y=e.calloutMaxHeight,O=e.onScroll,w=e.shouldRestoreFocus,P=void 0===w||w;t=this._getTarget();var C=this.state.positions,j=this._getMaxHeight()?this._getMaxHeight()+this.state.heightOffset:void 0,x=y&&j&&y<j?y:j,S=b,F=c&&!!t;this._classNames=it(n,{theme:this.props.theme,className:l,overflowYHidden:S,calloutWidth:f,positions:C,beakWidth:g,backgroundColor:E,calloutMaxWidth:m});var A=o.__assign({},i,{maxHeight:x},S&&{overflowY:"hidden"}),H=this.props.hidden?{visibility:"hidden"}:void 0;return r.createElement("div",{ref:this._hostElement,className:this._classNames.container,style:H},r.createElement("div",o.__assign({},Object(d.j)(this.props,d.h,at),{className:Object(h.a)(this._classNames.root,C&&C.targetEdge&&nt[C.targetEdge]),style:C?C.elementPosition:st,tabIndex:-1,ref:this._calloutElement}),F&&r.createElement("div",{className:this._classNames.beak,style:this._getBeakPosition()}),F&&r.createElement("div",{className:this._classNames.beakCurtain}),r.createElement(Q.a,o.__assign({},Object(d.j)(this.props,at),{ariaLabel:s,ariaDescribedBy:a,ariaLabelledBy:u,className:this._classNames.calloutMain,onDismiss:this.dismiss,onScroll:O,shouldRestoreFocus:P,style:A,onMouseDown:this._mouseDownOnPopup,onMouseUp:this._mouseUpOnPopup}),p)))},e.prototype._dismissOnClickOrScroll=function(t){var e=t.target,n=this._hostElement.current&&!Object(p.a)(this._hostElement.current,e);n&&this._isMouseDownOnPopup?this._isMouseDownOnPopup=!1:(!this._target&&n||t.target!==this._targetWindow&&n&&(this._target.stopPropagation||!this._target||e!==this._target&&!Object(p.a)(this._target,e)))&&this.dismiss(t)},e.prototype._addListeners=function(){var t=this;this._async.setTimeout(function(){t._disposables.push(Object(g.a)(t._targetWindow,"scroll",t._dismissOnScroll,!0),Object(g.a)(t._targetWindow,"resize",t._dismissOnResize,!0),Object(g.a)(t._targetWindow.document.documentElement,"focus",t._dismissOnLostFocus,!0),Object(g.a)(t._targetWindow.document.documentElement,"click",t._dismissOnLostFocus,!0)),t._hasListeners=!0},0)},e.prototype._removeListeners=function(){this._disposables.forEach(function(t){return t()}),this._disposables=[],this._hasListeners=!1},e.prototype._updateAsyncPosition=function(){var t=this;this._async.requestAnimationFrame(function(){return t._updatePosition()})},e.prototype._getBeakPosition=function(){var t=this.state.positions,e=o.__assign({},t&&t.beakPosition?t.beakPosition.elementPosition:null);return e.top||e.bottom||e.left||e.right||(e.left=rt,e.top=ot),e},e.prototype._updatePosition=function(){this._setTargetWindowAndElement(this._getTarget());var t=this.state.positions,e=this._hostElement.current,n=this._calloutElement.current,i=!!this.props.target;if(e&&n&&(!i||this._target)){var o=void 0;(o=Object(c.a)(o,this.props)).bounds=this._getBounds(),o.target=this._target;var r=Z(o,e,n,t);!t&&r||t&&r&&!this._arePositionsEqual(t,r)&&this._positionAttempts<5?(this._positionAttempts++,this.setState({positions:r})):this._positionAttempts>0&&(this._positionAttempts=0,this.props.onPositioned&&this.props.onPositioned(this.state.positions))}},e.prototype._getBounds=function(){if(!this._bounds){var t=this.props.bounds;t||(t={top:0+this.props.minPagePadding,left:0+this.props.minPagePadding,right:this._targetWindow.innerWidth-this.props.minPagePadding,bottom:this._targetWindow.innerHeight-this.props.minPagePadding,width:this._targetWindow.innerWidth-2*this.props.minPagePadding,height:this._targetWindow.innerHeight-2*this.props.minPagePadding}),this._bounds=t}return this._bounds},e.prototype._getMaxHeight=function(){var t=this;if(!this._maxHeight)if(this.props.directionalHintFixed&&this._target){var e=this.props.isBeakVisible?this.props.beakWidth:0,n=(this.props.gapSpace?this.props.gapSpace:0)+e;this._async.requestAnimationFrame(function(){t._target&&(t._maxHeight=function(t,e,n,i,o){void 0===n&&(n=0);var r=t,s=t,a=t,u=i?K(i):new y(0,window.innerWidth-Object(E.f)(),0,window.innerHeight);return X(r.stopPropagation?new y(r.clientX,r.clientX,r.clientY,r.clientY):void 0!==a.x&&void 0!==a.y?new y(a.x,a.x,a.y,a.y):z(s),e,n,u,o)}(t._target,t.props.directionalHint,n,t._getBounds(),t.props.coverTarget),t._blockResetHeight=!0,t.forceUpdate())})}else this._maxHeight=this._getBounds().height;return this._maxHeight},e.prototype._arePositionsEqual=function(t,e){return this._comparePositions(t.elementPosition,e.elementPosition)&&this._comparePositions(t.beakPosition.elementPosition,e.beakPosition.elementPosition)},e.prototype._comparePositions=function(t,e){for(var n in e)if(e.hasOwnProperty(n)){var i=t[n],o=e[n];if(void 0===i||void 0===o)return!1;if(i.toFixed(2)!==o.toFixed(2))return!1}return!0},e.prototype._setTargetWindowAndElement=function(t){if(t)if("string"==typeof t){var e=Object(f.a)();this._target=e?e.querySelector(t):null,this._targetWindow=Object(m.a)()}else if(t.stopPropagation)this._targetWindow=Object(m.a)(t.toElement),this._target=t;else if(t.getBoundingClientRect){var n=t;this._targetWindow=Object(m.a)(n),this._target=t}else void 0!==t.current?(this._target=t.current,this._targetWindow=Object(m.a)(this._target)):(this._targetWindow=Object(m.a)(),this._target=t);else this._targetWindow=Object(m.a)()},e.prototype._setHeightOffsetEveryFrame=function(){var t=this;this._calloutElement.current&&this.props.finalHeight&&(this._setHeightOffsetTimer=this._async.requestAnimationFrame(function(){var e=t._calloutElement.current&&t._calloutElement.current.lastChild;if(e){var n=e.scrollHeight-e.offsetHeight;t.setState({heightOffset:t.state.heightOffset+n}),e.offsetHeight<t.props.finalHeight?t._setHeightOffsetEveryFrame():t._async.cancelAnimationFrame(t._setHeightOffsetTimer)}}))},e.prototype._didPositionPropsChange=function(t,e){return!t.hidden&&t.hidden!==e.hidden||t.directionalHint!==e.directionalHint},e.prototype._getTarget=function(t){return void 0===t&&(t=this.props),t.target},e.defaultProps={preventDismissOnLostFocus:!1,preventDismissOnScroll:!1,preventDismissOnResize:!1,isBeakVisible:!0,beakWidth:16,gapSpace:0,minPagePadding:8,directionalHint:a.a.bottomAutoEdge},e}(r.Component);function lt(t){return{height:t,width:t}}var ct={container:"ms-Callout-container",root:"ms-Callout",beak:"ms-Callout-beak",beakCurtain:"ms-Callout-beakCurtain",calloutMain:"ms-Callout-main"},dt=Object(s.a)(ut,function(t){var e,n=t.theme,i=t.className,o=t.overflowYHidden,r=t.calloutWidth,s=t.beakWidth,a=t.backgroundColor,u=t.calloutMaxWidth,l=Object(et.getGlobalClassNames)(ct,n),c=n.palette,d=n.effects;return{container:[l.container,{position:"relative"}],root:[l.root,n.fonts.medium,{position:"absolute",boxSizing:"border-box",borderRadius:d.roundedCorner2,boxShadow:d.elevation16,selectors:(e={},e[et.HighContrastSelector]={borderWidth:1,borderStyle:"solid",borderColor:"WindowText"},e)},Object(et.focusClear)(),i,!!r&&{width:r},!!u&&{maxWidth:u}],beak:[l.beak,{position:"absolute",backgroundColor:c.white,boxShadow:"inherit",border:"inherit",boxSizing:"border-box",transform:"rotate(45deg)"},lt(s),a&&{backgroundColor:a}],beakCurtain:[l.beakCurtain,{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:c.white,borderRadius:d.roundedCorner2}],calloutMain:[l.calloutMain,{backgroundColor:c.white,overflowX:"hidden",overflowY:"auto",position:"relative",borderRadius:d.roundedCorner2},o&&{overflowY:"hidden"},a&&{backgroundColor:a}]}},void 0,{scope:"CalloutContent"}),ht=n(1832);n.d(e,"a",function(){return pt});var pt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){var t=this.props,e=t.layerProps,n=o.__rest(t,["layerProps"]),i=r.createElement(dt,o.__assign({},n));return this.props.doNotLayer?i:r.createElement(ht.a,o.__assign({},e),i)},e}(r.Component)},1803:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=0),this.top=n,this.bottom=i,this.left=t,this.right=e}return Object.defineProperty(t.prototype,"width",{get:function(){return this.right-this.left},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.bottom-this.top},enumerable:!0,configurable:!0}),t.prototype.equals=function(t){return parseFloat(this.top.toFixed(4))===parseFloat(t.top.toFixed(4))&&parseFloat(this.bottom.toFixed(4))===parseFloat(t.bottom.toFixed(4))&&parseFloat(this.left.toFixed(4))===parseFloat(t.left.toFixed(4))&&parseFloat(this.right.toFixed(4))===parseFloat(t.right.toFixed(4))},t}()},1804:function(t,e,n){"use strict";function i(t,e){var n=t,i=e;n._virtual||(n._virtual={children:[]});var o=n._virtual.parent;if(o&&o!==e){var r=o._virtual.children.indexOf(n);r>-1&&o._virtual.children.splice(r,1)}n._virtual.parent=i||void 0,i&&(i._virtual||(i._virtual={children:[]}),i._virtual.children.push(n))}n.d(e,"a",function(){return i})},1822:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n(0),o=n(1),r=n(43),s=n(552),a=n(121),u=n(339),l=n(57),c=n(185),d=function(t){function e(e){var n=t.call(this,e)||this;return n._root=o.createRef(),n._disposables=[],n._onKeyDown=function(t){switch(t.which){case r.a.escape:n.props.onDismiss&&(n.props.onDismiss(t),t.preventDefault(),t.stopPropagation())}},n._onFocus=function(){n._containsFocus=!0},n._onBlur=function(t){n._root.current&&n._root.current.contains(t.relatedTarget)&&(n._containsFocus=!1)},n._async=new s.a(n),n.state={needsVerticalScrollBar:!1},n}return i.__extends(e,t),e.prototype.componentWillMount=function(){this._originalFocusedElement=Object(a.a)().activeElement},e.prototype.componentDidMount=function(){this._root.current&&(this._disposables.push(Object(u.a)(this._root.current,"focus",this._onFocus,!0),Object(u.a)(this._root.current,"blur",this._onBlur,!0)),Object(l.a)(this._root.current)&&(this._containsFocus=!0)),this._updateScrollBarAsync()},e.prototype.componentDidUpdate=function(){this._updateScrollBarAsync(),this._async.dispose()},e.prototype.componentWillUnmount=function(){this._disposables.forEach(function(t){return t()}),this.props.shouldRestoreFocus&&this._originalFocusedElement&&this._containsFocus&&this._originalFocusedElement!==window&&this._originalFocusedElement&&this._originalFocusedElement.focus()},e.prototype.render=function(){var t=this.props,e=t.role,n=t.className,r=t.ariaLabel,s=t.ariaLabelledBy,a=t.ariaDescribedBy,u=t.style;return o.createElement("div",i.__assign({ref:this._root},Object(c.j)(this.props,c.h),{className:n,role:e,"aria-label":r,"aria-labelledby":s,"aria-describedby":a,onKeyDown:this._onKeyDown,style:i.__assign({overflowY:this.state.needsVerticalScrollBar?"scroll":void 0,outline:"none"},u)}),this.props.children)},e.prototype._updateScrollBarAsync=function(){var t=this;this._async.requestAnimationFrame(function(){t._getScrollBar()})},e.prototype._getScrollBar=function(){if(!this.props.style||!this.props.style.overflowY){var t=!1;if(this._root&&this._root.current&&this._root.current.firstElementChild){var e=this._root.current.clientHeight,n=this._root.current.firstElementChild.clientHeight;e>0&&n>e&&(t=n-e>1)}this.state.needsVerticalScrollBar!==t&&this.setState({needsVerticalScrollBar:t})}},e.defaultProps={shouldRestoreFocus:!0},e}(o.Component)},1832:function(t,e,n){"use strict";var i,o=n(1625),r=n(0),s=n(1),a=n(54),u=n(1736),l=n(867),c=n(1804),d=n(121),h=n(610),p=n(886),g={};var f=Object(l.a)(),m=function(t){function e(e){var n,i,o=t.call(this,e)||this;return o._handleRootElementRef=function(t){o._rootElement=t,t&&o._setVirtualParent()},o._filterEvent=function(t){t.eventPhase===Event.BUBBLING_PHASE&&"mouseenter"!==t.type&&"mouseleave"!==t.type&&t.stopPropagation()},o.state={hasMounted:!1},o.props.hostId&&(n=o.props.hostId,i=o,g[n]||(g[n]=[]),g[n].push(i)),o}return r.__extends(e,t),e.prototype.componentWillMount=function(){this._layerElement=this._getLayerElement()},e.prototype.componentWillUpdate=function(){this._layerElement||(this._layerElement=this._getLayerElement())},e.prototype.componentDidMount=function(){this.setState({hasMounted:!0}),this._setVirtualParent();var t=this.props,e=t.onLayerDidMount,n=t.onLayerMounted;n&&n(),e&&e()},e.prototype.componentWillUnmount=function(){this._removeLayerElement();var t=this.props,e=t.onLayerWillUnmount,n=t.hostId;e&&e(),n&&function(t,e){if(g[t]){var n=g[t].indexOf(e);n>=0&&(g[t].splice(n,1),0===g[t].length&&delete g[t])}}(n,this)},e.prototype.componentDidUpdate=function(){this._setVirtualParent()},e.prototype.render=function(){var t=this._getClassNames(),e=this.props.eventBubblingEnabled,n=this.state.hasMounted;return s.createElement("span",{className:"ms-layer",ref:this._handleRootElementRef},this._layerElement&&n&&a.createPortal(e?s.createElement(u.a,{className:t.content},this.props.children):s.createElement(u.a,{className:t.content,onClick:this._filterEvent,onContextMenu:this._filterEvent,onDoubleClick:this._filterEvent,onDrag:this._filterEvent,onDragEnd:this._filterEvent,onDragEnter:this._filterEvent,onDragExit:this._filterEvent,onDragLeave:this._filterEvent,onDragOver:this._filterEvent,onDragStart:this._filterEvent,onDrop:this._filterEvent,onMouseDown:this._filterEvent,onMouseEnter:this._filterEvent,onMouseLeave:this._filterEvent,onMouseMove:this._filterEvent,onMouseOver:this._filterEvent,onMouseOut:this._filterEvent,onMouseUp:this._filterEvent,onKeyDown:this._filterEvent,onKeyPress:this._filterEvent,onKeyUp:this._filterEvent,onFocus:this._filterEvent,onBlur:this._filterEvent,onChange:this._filterEvent,onInput:this._filterEvent,onInvalid:this._filterEvent,onSubmit:this._filterEvent},this.props.children),this._layerElement))},e.prototype._getClassNames=function(){var t=this.props,e=t.className,n=t.styles,i=t.theme;return f(n,{theme:i,className:e,isNotHost:!this.props.hostId})},e.prototype._setVirtualParent=function(){this._rootElement&&this._layerElement&&Object(c.a)(this._layerElement,this._rootElement)},e.prototype._getLayerElement=function(){var t=this._getHost(),e=this._getClassNames();if(t!==this._host&&this._removeLayerElement(),t&&(this._host=t,!this._layerElement)){var n=Object(d.a)();if(!n)return;this._layerElement=n.createElement("div"),this._layerElement.className=e.root,Object(h.b)(this._layerElement),this.props.insertFirst?t.insertBefore(this._layerElement,t.firstChild):t.appendChild(this._layerElement)}return this._layerElement},e.prototype._removeLayerElement=function(){if(this._layerElement){this.props.onLayerWillUnmount();var t=this._layerElement.parentNode;t&&t.removeChild(this._layerElement),this._layerElement=void 0}},e.prototype._getHost=function(){var t=this.props.hostId,e=Object(d.a)();if(e){if(t)return e.getElementById(t);var n=i;return n?e.querySelector(n):e.body}},e.defaultProps={onLayerDidMount:function(){},onLayerWillUnmount:function(){}},e=r.__decorate([Object(p.a)("Layer",["theme","hostId"])],e)}(s.Component),_=n(13),v={root:"ms-Layer",rootNoHost:"ms-Layer--fixed",content:"ms-Layer-content"};n.d(e,"a",function(){return b});var b=Object(o.a)(m,function(t){var e=t.className,n=t.isNotHost,i=t.theme,o=Object(_.getGlobalClassNames)(v,i);return{root:[o.root,i.fonts.medium,n&&[o.rootNoHost,{position:"fixed",zIndex:_.ZIndexes.Layer,top:0,left:0,bottom:0,right:0,visibility:"hidden"}],e],content:[o.content,{visibility:"visible"}]}},void 0,{scope:"Layer",fields:["hostId","theme","styles"]})},197:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(136);function o(t,e,n){void 0===n&&(n=!0);var o=!1;if(t&&e)if(n)for(o=!1;e;){var r=Object(i.a)(e);if(r===t){o=!0;break}e=r}else t.contains&&(o=t.contains(e));return o}},29:function(t,e,n){"use strict";var i,o;n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),function(t){t[t.top=1]="top",t[t.bottom=-1]="bottom",t[t.left=2]="left",t[t.right=-2]="right"}(i||(i={})),function(t){t[t.top=0]="top",t[t.bottom=1]="bottom",t[t.start=2]="start",t[t.end=3]="end"}(o||(o={}))},49:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={topLeftEdge:0,topCenter:1,topRightEdge:2,topAutoEdge:3,bottomLeftEdge:4,bottomCenter:5,bottomRightEdge:6,bottomAutoEdge:7,leftTopEdge:8,leftCenter:9,leftBottomEdge:10,rightTopEdge:11,rightCenter:12,rightBottomEdge:13}},492:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(136);function o(t,e){return t&&t!==document.body?e(t)?t:o(Object(i.a)(t),e):null}},540:function(t,e,n){"use strict";function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=[],i=0,o=t;i<o.length;i++){var r=o[i];if(r)if("string"==typeof r)n.push(r);else if(r.hasOwnProperty("toString")&&"function"==typeof r.toString)n.push(r.toString());else for(var s in r)r[s]&&n.push(s)}return n.join(" ")}n.d(e,"a",function(){return i})},57:function(t,e,n){"use strict";n.d(e,"e",function(){return h}),n.d(e,"h",function(){return p}),n.d(e,"f",function(){return g}),n.d(e,"i",function(){return f}),n.d(e,"c",function(){return m}),n.d(e,"k",function(){return _}),n.d(e,"j",function(){return v}),n.d(e,"o",function(){return b}),n.d(e,"n",function(){return E}),n.d(e,"m",function(){return y}),n.d(e,"l",function(){return O}),n.d(e,"a",function(){return w}),n.d(e,"p",function(){return P}),n.d(e,"b",function(){return j}),n.d(e,"g",function(){return x}),n.d(e,"d",function(){return S});var i=n(828),o=n(197),r=n(136),s=n(93),a=n(121),u="data-is-focusable",l="data-is-visible",c="data-focuszone-id",d="data-is-sub-focuszone";function h(t,e,n){return v(t,e,!0,!1,!1,n)}function p(t,e,n){return _(t,e,!0,!1,!0,n)}function g(t,e,n,i){return void 0===i&&(i=!0),v(t,e,i,!1,!1,n,!1,!0)}function f(t,e,n,i){return void 0===i&&(i=!0),_(t,e,i,!1,!0,n,!1,!0)}function m(t){var e=v(t,t,!0,!1,!1,!0);return!!e&&(j(e),!0)}function _(t,e,n,i,o,r,s,a){if(!e||!s&&e===t)return null;var u=b(e);if(o&&u&&(r||!y(e)&&!O(e))){var l=_(t,e.lastElementChild,!0,!0,!0,r,s,a);if(l){if(a&&E(l,!0)||!a)return l;var c=_(t,l.previousElementSibling,!0,!0,!0,r,s,a);if(c)return c;for(var d=l.parentElement;d&&d!==e;){var h=_(t,d.previousElementSibling,!0,!0,!0,r,s,a);if(h)return h;d=d.parentElement}}}if(n&&u&&E(e,a))return e;var p=_(t,e.previousElementSibling,!0,!0,!0,r,s,a);return p||(i?null:_(t,e.parentElement,!0,!1,!1,r,s,a))}function v(t,e,n,i,o,r,s,a){if(!e||e===t&&o&&!s)return null;var u=b(e);if(n&&u&&E(e,a))return e;if(!o&&u&&(r||!y(e)&&!O(e))){var l=v(t,e.firstElementChild,!0,!0,!1,r,s,a);if(l)return l}if(e===t)return null;var c=v(t,e.nextElementSibling,!0,!0,!1,r,s,a);return c||(i?null:v(t,e.parentElement,!1,!1,!0,r,s,a))}function b(t){if(!t||!t.getAttribute)return!1;var e=t.getAttribute(l);return null!=e?"true"===e:0!==t.offsetHeight||null!==t.offsetParent||!0===t.isVisible}function E(t,e){if(!t||t.disabled)return!1;var n=0,i=null;t&&t.getAttribute&&(i=t.getAttribute("tabIndex"))&&(n=parseInt(i,10));var o=t.getAttribute?t.getAttribute(u):null,r=null!==i&&n>=0,s=!!t&&"false"!==o&&("A"===t.tagName||"BUTTON"===t.tagName||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"true"===o||r);return e?-1!==n&&s:s}function y(t){return!!(t&&t.getAttribute&&t.getAttribute(c))}function O(t){return!(!t||!t.getAttribute||"true"!==t.getAttribute(d))}function w(t){var e=Object(a.a)(t),n=e&&e.activeElement;return!(!n||!Object(o.a)(t,n))}function P(t,e){return"true"!==Object(i.a)(t,e)}var C=void 0;function j(t){if(t){if(C)return void(C=t);C=t;var e=Object(s.a)(t);e&&e.requestAnimationFrame(function(){C&&C.focus(),C=void 0})}}function x(t,e){for(var n=t,i=0,o=e;i<o.length;i++){var r=o[i],s=n.children[Math.min(r,n.children.length-1)];if(!s)break;n=s}return n=E(n)&&b(n)?n:v(t,n,!0)||_(t,n)}function S(t,e){for(var n=[];e&&t&&e!==t;){var i=Object(r.a)(e,!0);if(null===i)return[];n.unshift(Array.prototype.indexOf.call(i.children,e)),e=i}return n}},610:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i="data-portal-element";function o(t){t.setAttribute(i,"true")}},611:function(t,e,n){"use strict";function i(t,e){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}n.d(e,"a",function(){return i})},826:function(t,e,n){"use strict";function i(t){return t&&!!t._virtual}n.d(e,"a",function(){return i})},827:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(826);function o(t){var e;return t&&Object(i.a)(t)&&(e=t._virtual.parent),e}},828:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(492);function o(t,e){var n=Object(i.a)(t,function(t){return t.hasAttribute(e)});return n&&n.getAttribute(e)}},830:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(492),o=n(610);function r(t,e){var n=Object(i.a)(t,function(t){return e===t||t.hasAttribute(o.a)});return null!==n&&n.hasAttribute(o.a)}},886:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n(0),o=n(1),r=n(218),s=n(611),a=n(392),u=n(280);function l(t,e,n){return function(l){var c,d=((c=function(s){function c(t){var e=s.call(this,t)||this;return e._onSettingChanged=e._onSettingChanged.bind(e),e}return i.__extends(c,s),c.prototype.componentDidMount=function(){r.a.observe(this._onSettingChanged)},c.prototype.componentWillUnmount=function(){r.a.unobserve(this._onSettingChanged)},c.prototype.render=function(){var s=this;return o.createElement(a.a.Consumer,null,function(a){var c=r.a.getSettings(e,t,a.customizations),d=s.props;if(c.styles&&"function"==typeof c.styles&&(c.styles=c.styles(i.__assign({},c,d))),n&&(c.styles||d.styles)){var h=Object(u.a)(c.styles,d.styles);return o.createElement(l,i.__assign({},c,d,{styles:h}))}return o.createElement(l,i.__assign({},c,d))})},c.prototype._onSettingChanged=function(){this.forceUpdate()},c}(o.Component)).displayName="Customized"+t,c);return Object(s.a)(l,d)}}}}]);
//# sourceMappingURL=owa.0.js.map
self.scriptsLoaded['owa.0.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.0.js'] = (new Date()).getTime();