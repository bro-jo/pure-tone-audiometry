(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2DY1":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){return t.replace(a,"-$1").toLowerCase()};var a=/([A-Z])/g;t.exports=e.default},"9SKx":function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=function(t){return(0,o.default)(t.replace(r,"ms-"))};var o=a(n("DZ0b")),r=/^-ms-/;t.exports=e.default},AEfA:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=void 0;var o=a(n("xU8c")),r=a(n("sKrG"));function i(t,e,n){var a,r={target:t,currentTarget:t};function i(t){t.target===t.currentTarget&&(clearTimeout(a),t.target.removeEventListener(o.default.end,i),e.call(this))}o.default.end?null==n&&(n=l(t)||0):n=0,o.default.end?(t.addEventListener(o.default.end,i,!1),a=setTimeout(function(){return i(r)},1.5*(n||100))):setTimeout(i.bind(null,r),0)}i._parseDuration=l;var s=i;function l(t){var e=(0,r.default)(t,o.default.duration),n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}e.default=s,t.exports=e.default},Bp9Y:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.default=a,t.exports=e.default},DZ0b:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){return t.replace(a,function(t,e){return e.toUpperCase()})};var a=/-(.)/g;t.exports=e.default},H0zx:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=function(t){if(!t)throw new TypeError("No Element passed to `getComputedStyle()`");var e=t.ownerDocument;return"defaultView"in e?e.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):window.getComputedStyle(t,null):{getPropertyValue:function(e){var n=t.style;"float"==(e=(0,o.default)(e))&&(e="styleFloat");var a=t.currentStyle[e]||null;if(null==a&&n&&n[e]&&(a=n[e]),i.test(a)&&!r.test(e)){var s=n.left,l=t.runtimeStyle,u=l&&l.left;u&&(l.left=t.currentStyle.left),n.left="fontSize"===e?"1em":a,a=n.pixelLeft+"px",n.left=s,u&&(l.left=u)}return a}}};var o=a(n("9SKx")),r=/^(top|right|bottom|left)$/,i=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;t.exports=e.default},O9o6:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){return!(!t||!a.test(t))};var a=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.exports=e.default},QLaP:function(t,e,n){"use strict";t.exports=function(t,e,n,a,o,r,i,s){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,o,r,i,s],c=0;(l=new Error(e.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},S3Uj:function(t,e,n){"use strict";e.__esModule=!0,e.default=e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(e,n,a):e[n]=t[n]}return e.default=t,e}(n("17x9")),o=s(n("q1tI")),r=s(n("i8i4")),i=n("VCL8");n("xfxO");function s(t){return t&&t.__esModule?t:{default:t}}var l="unmounted";e.UNMOUNTED=l;var u="exited";e.EXITED=u;var c="entering";e.ENTERING=c;var p="entered";e.ENTERED=p;e.EXITING="exiting";var d=function(t){var e,n;function a(e,n){var a;a=t.call(this,e,n)||this;var o,r=n.transitionGroup,i=r&&!r.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?i?(o=u,a.appearStatus=c):o=p:o=e.unmountOnExit||e.mountOnEnter?l:u,a.state={status:o},a.nextCallback=null,a}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(t,e){return t.in&&e.status===l?{status:u}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(e=c):n!==c&&n!==p||(e="exiting")}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!=typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},i.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=r.default.findDOMNode(this);e===c?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},i.performEnter=function(t,e){var n=this,a=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,r=this.getTimeouts(),i=o?r.appear:r.enter;e||a?(this.props.onEnter(t,o),this.safeSetState({status:c},function(){n.props.onEntering(t,o),n.onTransitionEnd(t,i,function(){n.safeSetState({status:p},function(){n.props.onEntered(t,o)})})})):this.safeSetState({status:p},function(){n.props.onEntered(t)})},i.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(t),this.safeSetState({status:"exiting"},function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,function(){e.safeSetState({status:u},function(){e.props.onExited(t)})})})):this.safeSetState({status:u},function(){e.props.onExited(t)})},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},i.render=function(){var t=this.state.status;if(t===l)return null;var e=this.props,n=e.children,a=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(e,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(t,a);var r=o.default.Children.only(n);return o.default.cloneElement(r,a)},a}(o.default.Component);function f(){}d.contextTypes={transitionGroup:a.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var h=(0,i.polyfill)(d);e.default=h},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},VCL8:function(t,e,n){"use strict";function a(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function o(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!=n?n:null}.bind(this))}function r(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function i(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var n=null,i=null,s=null;if("function"==typeof e.componentWillMount?n="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?s="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var l=t.displayName||t.name,u="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=a,e.componentWillReceiveProps=o),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=r;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,a)}}return t}n.r(e),n.d(e,"polyfill",function(){return i}),a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},X9D3:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=function(t){return(0,o.default)(t).replace(r,"-ms-")};var o=a(n("2DY1")),r=/^ms-/;t.exports=e.default},ZqkZ:function(t,e,n){"use strict";e.__esModule=!0,e.uncontrolledPropTypes=function(t,e){var n={};return Object.keys(t).forEach(function(t){n[r(t)]=o}),n},e.isProp=function(t,e){return void 0!==t[e]},e.defaultKey=r,e.canAcceptRef=function(t){return!!t&&("function"!=typeof t||t.prototype&&t.prototype.isReactComponent)};var a;(a=n("QLaP"))&&a.__esModule;var o=function(){};function r(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}},a413:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){return"removeProperty"in t.style?t.style.removeProperty(e):t.style.removeAttribute(e)},t.exports=e.default},bLWD:function(t,e,n){"use strict";e.__esModule=!0,e.default=function t(e,n,r){void 0===r&&(r=[]);var s=e.displayName||e.name||"Component";var l=o.canAcceptRef(e);var u=Object.keys(n);var c=u.map(o.defaultKey);!l&&r.length&&invariant(!1);var p=function(t){var s,l;function p(){for(var e,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).handlers=Object.create(null),u.forEach(function(t){var a=n[t];e.handlers[a]=function(n){if(e.props[a]){var o;e._notifying=!0;for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];(o=e.props)[a].apply(o,[n].concat(i)),e._notifying=!1}e._values[t]=n,e.unmounted||e.forceUpdate()}}),r.length&&(e.attachRef=function(t){e.inner=t}),e}l=t,(s=p).prototype=Object.create(l.prototype),s.prototype.constructor=s,s.__proto__=l;var d=p.prototype;return d.shouldComponentUpdate=function(){return!this._notifying},d.componentWillMount=function(){var t=this,e=this.props;this._values=Object.create(null),u.forEach(function(n){t._values[n]=e[o.defaultKey(n)]})},d.componentWillReceiveProps=function(t){var e=this,n=this.props;u.forEach(function(a){!o.isProp(t,a)&&o.isProp(n,a)&&(e._values[a]=t[o.defaultKey(a)])})},d.componentWillUnmount=function(){this.unmounted=!0},d.render=function(){var t=this,n=this.props,o=n.innerRef,r=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(n,["innerRef"]);c.forEach(function(t){delete r[t]});var s={};return u.forEach(function(e){var n=t.props[e];s[e]=void 0!==n?n:t._values[e]}),a.default.createElement(e,i({},r,s,this.handlers,{ref:o||this.attachRef}))},p}(a.default.Component);p.displayName="Uncontrolled("+s+")";p.propTypes=i({innerRef:function(){}},o.uncontrolledPropTypes(n,s));r.forEach(function(t){p.prototype[t]=function(){var e;return(e=this.inner)[t].apply(e,arguments)}});var d=p;a.default.forwardRef&&((d=a.default.forwardRef(function(t,e){return a.default.createElement(p,i({},t,{innerRef:e}))})).propTypes=p.propTypes);d.ControlledComponent=e;d.deferControlTo=function(e,a,o){return void 0===a&&(a={}),t(e,i({},n,a),o)};return d};var a=r(n("q1tI")),o=(r(n("QLaP")),function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(e,n,a):e[n]=t[n]}return e.default=t,e}(n("ZqkZ")));function r(t){return t&&t.__esModule?t:{default:t}}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}t.exports=e.default},bbA1:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ta2",function(){var t=n("q9Xy");return{page:t.default||t}}])},q9Xy:function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),o=n.n(a),r=n("O40h"),i=n("0iUn"),s=n("sLSF"),l=n("MI3g"),u=n("a7VT"),c=n("AT/M"),p=n("Tit0"),d=n("vYYK"),f=n("q1tI"),h=n.n(f),m=n("b7Uv"),v=n("0px3"),y=n("RAs/"),E=n("hVfy"),b=n("HVTr"),g=n("TSYQ"),x=n.n(g),N=n("yTlV"),O=function(t){function e(){return t.apply(this,arguments)||this}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.bsPrefix,n=t.className,a=t.striped,o=t.bordered,r=t.hover,i=t.size,s=t.variant,l=t.responsive,u=Object(E.a)(t,["bsPrefix","className","striped","bordered","hover","size","variant","responsive"]),c=x()(e,n,s&&e+"-"+s,i&&e+"-"+i,a&&e+"-striped",o&&e+"-bordered",r&&e+"-hover"),p=h.a.createElement("table",Object(y.a)({},u,{className:c}));if(l){var d=e+"-responsive";return"string"==typeof l&&(d=d+"-"+l),h.a.createElement("div",{className:d},p)}return p},e}(h.a.Component),C=Object(N.a)(O,"table"),w=n("bLWD"),S=n.n(w),_=n("DZ0b"),T=n.n(_),k=function(t){return t[0].toUpperCase()+T()(t).slice(1)};function P(t,e){var n,a,o=void 0===e?{}:e,r=o.displayName,i=void 0===r?k(t):r,s=o.Component,l=void 0===s?"div":s,u=o.defaultProps;return Object(N.a)((a=n=function(t){function e(){return t.apply(this,arguments)||this}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.className,n=t.bsPrefix,a=t.as,o=void 0===a?l:a,r=Object(E.a)(t,["className","bsPrefix","as"]);return h.a.createElement(o,Object(y.a)({},u,r,{className:x()(e,n)}))},e}(h.a.Component),n.displayName=i,a),t)}var j,D=n("S3Uj"),M=n.n(D),R=n("AEfA"),A=n.n(R);var U=((j={})[D.ENTERING]="show",j[D.ENTERED]="show",j),L=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).handleEnter=function(t){!function(t){t.offsetHeight}(t),e.props.onEnter&&e.props.onEnter(t)},e}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.className,n=t.children,a=Object(E.a)(t,["className","children"]);return h.a.createElement(M.a,Object(y.a)({addEndListener:A.a},a,{onEnter:this.handleEnter}),function(t,a){return h.a.cloneElement(n,Object(y.a)({},a,{className:x()("fade",e,n.props.className,U[t])}))})},e}(h.a.Component);L.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var B=L,q=function(t){function e(){return t.apply(this,arguments)||this}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.label,n=t.onClick;return h.a.createElement("button",{type:"button",className:"close",onClick:n},h.a.createElement("span",{"aria-hidden":"true"},"×"),h.a.createElement("span",{className:"sr-only"},e))},e}(h.a.Component);q.defaultProps={label:"Close"};var W=q,F=n("pvJ/"),I=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).handleClose=function(t){e.props.onClose(!1,t)},e}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.bsPrefix,n=t.show,a=t.closeLabel,o=t.className,r=t.children,i=t.variant,s=t.dismissible,l=t.transition,u=(t.onClose,Object(E.a)(t,["bsPrefix","show","closeLabel","className","children","variant","dismissible","transition","onClose"])),c=h.a.createElement("div",Object(y.a)({role:"alert"},l?u:void 0,{className:x()(o,e,i&&e+"-"+i,s&&e+"-dismissible")}),s&&h.a.createElement(W,{onClick:this.handleClose,label:a}),r);return l?h.a.createElement(l,Object(y.a)({unmountOnExit:!0},u,{in:n}),c):n?c:null},e}(h.a.Component);I.defaultProps={show:!0,transition:B,closeLabel:"Close alert"};var G,V=S()(Object(N.a)(I,"alert"),{show:"onClose"}),X=(G="h4",h.a.forwardRef(function(t,e){return h.a.createElement("div",Object(y.a)({},t,{ref:e,className:x()(t.className,G)}))}));V.Link=P("alert-link",{Component:F.a}),V.Heading=P("alert-heading",{Component:X});var K=V;var Y=1e3;function H(t,e,n){var a=(t-e)/(n-e)*100;return Math.round(a*Y)/Y}var Z=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.renderProgressBar=function(t){var e,n=t.min,a=t.now,o=t.max,r=t.label,i=t.srOnly,s=t.striped,l=t.animated,u=t.className,c=t.style,p=t.variant,d=t.bsPrefix,f=Object(E.a)(t,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return h.a.createElement("div",Object(y.a)({},f,{role:"progressbar",className:x()(u,d+"-bar",(e={},e["bg-"+p]=p,e[d+"-bar-animated"]=l,e[d+"-bar-striped"]=l||s,e)),style:Object(y.a)({width:H(a,n,o)+"%"},c),"aria-valuenow":a,"aria-valuemin":n,"aria-valuemax":o}),i?h.a.createElement("span",{className:"sr-only"},r):r)},n.render=function(){var t=this.props,e=t.isChild,n=Object(E.a)(t,["isChild"]);if(e)return this.renderProgressBar(n);var a=n.min,o=n.now,r=n.max,i=n.label,s=n.srOnly,l=n.striped,u=n.animated,c=n.bsPrefix,p=n.variant,d=n.className,m=n.children,v=Object(E.a)(n,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return h.a.createElement("div",Object(y.a)({},v,{className:x()(d,c)}),m?function(t,e){var n=0;return h.a.Children.map(t,function(t){return h.a.isValidElement(t)?e(t,n++):t})}(m,function(t){return Object(f.cloneElement)(t,{isChild:!0})}):this.renderProgressBar({min:a,now:o,max:r,label:i,srOnly:s,striped:l,animated:u,bsPrefix:c,variant:p}))},e}(h.a.Component);Z.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var z,Q=Object(N.a)(Z,"progress"),$=Q,J=n("mLQA"),tt=n("RMBO"),et=n("6mxo"),nt=n("20a2"),at=n.n(nt),ot=[250,500,1e3,2e3,4e3,8e3],rt=[.001,.002,.003,.004,.006,.01],it=rt[rt.length-1];!function(t){t.Left="Left",t.Right="Right"}(z||(z={}));var st=function(t){function e(){var t,n;Object(i.default)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=Object(l.default)(this,(t=Object(u.default)(e)).call.apply(t,[this].concat(o))),Object(d.a)(Object(c.default)(n),"audioContextHistory",[]),Object(d.a)(Object(c.default)(n),"state",{isSideChanged:!1,step:0,isFinished:!1,frequency:void 0,panValue:void 0,volume:void 0,results:[],shouldBlockButton:!1}),n}return Object(p.default)(e,t),Object(s.default)(e,[{key:"componentDidMount",value:function(){var t=this;console.log("componentDidMount"),this.initAudio(),setTimeout(function(){try{t.oscillator.stop()}catch(e){console.warn(e)}t.oscillator.start()},300)}},{key:"initAudio",value:function(){var t=window;this.audioContext=new(t.AudioContext||t.webkitAudioContext),this.audioContextHistory.push(this.audioContext),this.oscillator=this.audioContext.createOscillator(),this.gainNode=this.audioContext.createGain(),this.panNode=this.audioContext.createStereoPanner(),this.oscillator.type="sine",this.oscillator.frequency.value=440,this.oscillator.connect(this.panNode),this.panNode.connect(this.gainNode),this.panNode.pan.value=-.9,this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.gainNode.gain.value=it,console.log("this.gainNode.gain.value",this.gainNode.gain.value)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount");try{this.gainNode.gain.value=0,this.panNode.pan.value=0,this.oscillator.disconnect(),this.audioContext.close()}catch(t){console.error("stopAudio error")}finally{this.stopAudio()}}},{key:"getRandomGain",value:function(){return rt[Math.floor(Math.random()*(rt.length-2))]}},{key:"getRandomFrequency",value:function(){return ot[Math.floor(Math.random()*ot.length)]}},{key:"stopAudio",value:function(){try{this.audioContextHistory.map(function(){var t=Object(r.default)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.close();case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}},t,null,[[0,5]])}));return function(e){return t.apply(this,arguments)}}())}catch(t){console.error("stopAudio error")}try{this.gainNode.gain.value=0,this.oscillator.disconnect(),this.audioContext.close(),this.audioContext=null,this.gainNode=null,this.panNode=null}catch(t){console.error("stopAudio error")}}},{key:"startAudio",value:function(){var t=window,e=this.getRandomFrequency(),n=Math.random()<.5?-.9:.9,a=this.getRandomGain();this.setState({frequency:e,panValue:n,volume:a}),this.audioContext=new(t.AudioContext||t.webkitAudioContext),this.audioContextHistory.push(this.audioContext),this.oscillator=this.audioContext.createOscillator(),this.gainNode=this.audioContext.createGain(),this.panNode=this.audioContext.createStereoPanner(),this.oscillator.type="sine",this.oscillator.frequency.value=e,this.oscillator.connect(this.panNode),this.panNode.connect(this.gainNode),this.panNode.pan.value=n,this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.gainNode.gain.value=a,console.log("this.oscillator.frequency.value ",this.oscillator.frequency.value),console.log("this.panNode.pan.value",this.panNode.pan.value),console.log("this.gainNode.gain.value",this.gainNode.gain.value),this.oscillator.start()}},{key:"render",value:function(){var t=this;if(this.state.isFinished){var e=this.state.results.filter(function(t){return t.correct}).length,n=Math.floor(e/this.state.results.length*100);return console.log("this.state.results.filter(r => r.correct).length",this.state.results.filter(function(t){return t.correct}).length),console.log("this.state.results.length",this.state.results.length),console.log("percent",n),h.a.createElement("div",null,h.a.createElement(et.b,{className:"my-3 p-3 bg-white"},h.a.createElement(m.a,null,h.a.createElement(v.a,{className:"col-sm-12 mb-5"},h.a.createElement(tt.b,null,"검사가",h.a.createElement("br",null),h.a.createElement("span",{className:"text-primary"},"종료"),"되었습니다.",h.a.createElement("br",null),"꼭 ",h.a.createElement("span",{className:"text-primary"},"볼륨"),"을",h.a.createElement("br",null),"다시 ",h.a.createElement("span",{className:"text-primary"},"낮춰"),"주세요"))),h.a.createElement(m.a,null,h.a.createElement(v.a,{className:"col-sm-12 mb-5"},h.a.createElement(C,{striped:!0,bordered:!0,hover:!0},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",null,"#"),h.a.createElement("th",null,"주파수"),h.a.createElement("th",null,"소리 크기"),h.a.createElement("th",null,"방향"),h.a.createElement("th",null,"O/X"))),h.a.createElement("tbody",null,this.state.results.map(function(t,e){var n=t.frequency,a=t.volume,o=t.pan,r=t.correct;return h.a.createElement("tr",null,h.a.createElement("td",null,e),h.a.createElement("td",null,n),h.a.createElement("td",null,a),h.a.createElement("td",null,o),h.a.createElement("td",null,r?"O":"X"))}))),h.a.createElement(K,{variant:n>=90?"success":n>=80?"warning":"danger"},e,"개 맞추셨네요. ",n>=90?"정상":n>=80?"주의":"위험"," 단계 입니다."),h.a.createElement(m.a,{className:"justify-content-end"},h.a.createElement(v.a,{className:"col-sm-8 mb-5"},h.a.createElement(tt.a,{className:"ml-3 mt-5"},"* 간단한 청력 테스트에 도움을 주는 보조 테스트이며, 전문적인 ",h.a.createElement("span",{className:"text-primary"},"의료행위를 대체할 수 없습니다.")),h.a.createElement(tt.a,{className:"ml-3 mt-2"},"* 검사 종료 후 ",h.a.createElement("span",{className:"text-primary"},"기기의 볼륨"),"을 다시 ",h.a.createElement("span",{className:"text-primary"},"낮춰주세요."))))))))}return h.a.createElement("div",null,h.a.createElement(et.b,{className:"my-3 p-3 bg-white"},h.a.createElement(m.a,null,h.a.createElement(v.a,{className:"col-sm-12 mb-5"},h.a.createElement(tt.b,null,h.a.createElement("span",{className:"text-primary"},"어느 쪽 귀"),"에서 들리시나요?",h.a.createElement("br",null)),"#",this.state.step)),h.a.createElement(m.a,null,h.a.createElement(v.a,{className:"col-sm-12 mb-5"},h.a.createElement($,{now:this.state.step,min:0,max:21}))),h.a.createElement(et.a,{className:"align-items-end"},h.a.createElement(v.a,{className:"col-12 mt-2 text-center"},h.a.createElement(J.a,{className:"btn-block",disabled:this.state.shouldBlockButton,onClick:function(){return t.handleNothing()}},"들리지 않음")),h.a.createElement(v.a,{className:"col-12 mt-2 text-center"},h.a.createElement(J.a,{className:"btn-block",disabled:this.state.shouldBlockButton,onClick:function(){return t.handleLeft()}},"왼쪽")),h.a.createElement(v.a,{className:"col-12 mt-2 text-center"},h.a.createElement(J.a,{className:"btn-block",disabled:this.state.shouldBlockButton,onClick:function(){return t.handleRight()}},"오른쪽")))))}},{key:"saveResult",value:function(t){var e=t.choice;this.setState(function(t){var n=t.panValue<0?z.Left:z.Right;console.log("prevState.pan",n),console.log("choice",e),console.log("prevState.pan === choice",n===e);var a={frequency:t.frequency,pan:n,volume:t.volume,correct:t.isSideChanged?n!==e:n===e},o=t.results.concat([a]);return o.sort(function(t,e){return t.frequency-e.frequency}),{results:o}})}},{key:"goToNextSound",value:function(){var t=this,e=this.state.step;this.setState({shouldBlockButton:!0}),20!==e?(this.setState(function(t){return{step:t.step+1}}),setTimeout(function(){return t.startAudio()},1e3),setTimeout(function(){return t.setState({shouldBlockButton:!1})},1500)):this.finishTest()}},{key:"finishTest",value:function(){var t=this;this.setState({isFinished:!0}),setTimeout(function(){return t.stopAudio()},500)}},{key:"handleNothing",value:function(){var t=this.state.step;this.stopAudio(),0!==t?(this.saveResult({choice:void 0}),this.goToNextSound()):at.a.push("/wrong?msg=들리지%20않음")}},{key:"handleLeft",value:function(){var t=this,e=this.state.step;if(this.stopAudio(),0===e)return this.setState({isSideChanged:!1,step:1,shouldBlockButton:!0}),setTimeout(function(){return t.startAudio()},1e3),void setTimeout(function(){return t.setState({shouldBlockButton:!1})},1500);this.saveResult({choice:z.Left}),this.goToNextSound()}},{key:"handleRight",value:function(){var t=this,e=this.state.step;if(this.stopAudio(),0===e)return this.setState({isSideChanged:!0,step:1,shouldBlockButton:!0}),setTimeout(function(){return t.startAudio()},1e3),void setTimeout(function(){return t.setState({shouldBlockButton:!1})},1500);this.saveResult({choice:z.Right}),this.goToNextSound()}}]),e}(h.a.Component);e.default=st},sKrG:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=function(t,e,n){var a="",c="",p=e;if("string"==typeof e){if(void 0===n)return t.style[(0,o.default)(e)]||(0,i.default)(t).getPropertyValue((0,r.default)(e));(p={})[e]=n}Object.keys(p).forEach(function(e){var n=p[e];n||0===n?(0,u.default)(e)?c+=e+"("+n+") ":a+=(0,r.default)(e)+": "+n+";":(0,s.default)(t,(0,r.default)(e))}),c&&(a+=l.transform+": "+c+";");t.style.cssText+=";"+a};var o=a(n("9SKx")),r=a(n("X9D3")),i=a(n("H0zx")),s=a(n("a413")),l=n("xU8c"),u=a(n("O9o6"));t.exports=e.default},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("hfKm"),o=n.n(a);function r(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},xU8c:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=e.animationEnd=e.animationDelay=e.animationTiming=e.animationDuration=e.animationName=e.transitionEnd=e.transitionDuration=e.transitionDelay=e.transitionTiming=e.transitionProperty=e.transform=void 0;var o,r,i,s,l,u,c,p,d,f,h,m=a(n("Bp9Y")),v="transform";if(e.transform=v,e.animationEnd=i,e.transitionEnd=r,e.transitionDelay=c,e.transitionTiming=u,e.transitionDuration=l,e.transitionProperty=s,e.animationDelay=h,e.animationTiming=f,e.animationDuration=d,e.animationName=p,m.default){var y=function(){for(var t,e,n=document.createElement("div").style,a={O:function(t){return"o"+t.toLowerCase()},Moz:function(t){return t.toLowerCase()},Webkit:function(t){return"webkit"+t},ms:function(t){return"MS"+t}},o=Object.keys(a),r="",i=0;i<o.length;i++){var s=o[i];if(s+"TransitionProperty"in n){r="-"+s.toLowerCase(),t=a[s]("TransitionEnd"),e=a[s]("AnimationEnd");break}}!t&&"transitionProperty"in n&&(t="transitionend");!e&&"animationName"in n&&(e="animationend");return n=null,{animationEnd:e,transitionEnd:t,prefix:r}}();o=y.prefix,e.transitionEnd=r=y.transitionEnd,e.animationEnd=i=y.animationEnd,e.transform=v=o+"-"+v,e.transitionProperty=s=o+"-transition-property",e.transitionDuration=l=o+"-transition-duration",e.transitionDelay=c=o+"-transition-delay",e.transitionTiming=u=o+"-transition-timing-function",e.animationName=p=o+"-animation-name",e.animationDuration=d=o+"-animation-duration",e.animationTiming=f=o+"-animation-delay",e.animationDelay=h=o+"-animation-timing-function"}var E={transform:v,end:r,property:s,timing:u,delay:c,duration:l};e.default=E},xfxO:function(t,e,n){"use strict";e.__esModule=!0,e.classNamesShape=e.timeoutsShape=void 0;var a;(a=n("17x9"))&&a.__esModule;e.timeoutsShape=null;e.classNamesShape=null}},[["bbA1",1,0]]]);