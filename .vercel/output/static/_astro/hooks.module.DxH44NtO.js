import{l as w}from"./preact.module.Bl_WOuGg.js";var v,i,s,y,H=0,C=[],u=w,A=u.__b,F=u.__r,g=u.diffed,k=u.__c,q=u.unmount,T=u.__;function d(_,t){u.__h&&u.__h(i,_,H||t),H=0;var o=i.__H||(i.__H={__:[],__h:[]});return _>=o.__.length&&o.__.push({}),o.__[_]}function P(_){return H=1,x(W,_)}function x(_,t,o){var r=d(v++,2);if(r.t=_,!r.__c&&(r.__=[W(void 0,t),function(c){var e=r.__N?r.__N[0]:r.__[0],f=r.t(e,c);e!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=i,!i.u)){var a=function(c,e,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(n){return!!n.__c});if(m.every(function(n){return!n.__N}))return!h||h.call(this,c,e,f);var E=r.__c.props!==c;return m.forEach(function(n){if(n.__N){var j=n.__[0];n.__=n.__N,n.__N=void 0,j!==n.__[0]&&(E=!0)}}),h&&h.call(this,c,e,f)||E};i.u=!0;var h=i.shouldComponentUpdate,N=i.componentWillUpdate;i.componentWillUpdate=function(c,e,f){if(this.__e){var m=h;h=void 0,a(c,e,f),h=m}N&&N.call(this,c,e,f)},i.shouldComponentUpdate=a}return r.__N||r.__}function S(_,t){var o=d(v++,3);!u.__s&&b(o.__H,t)&&(o.__=_,o.i=t,i.__H.__h.push(o))}function $(_,t){var o=d(v++,7);return b(o.__H,t)&&(o.__=_(),o.__H=t,o.__h=_),o.__}function z(){for(var _;_=C.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(l),_.__H.__h.forEach(p),_.__H.__h=[]}catch(t){_.__H.__h=[],u.__e(t,_.__v)}}u.__b=function(_){i=null,A&&A(_)},u.__=function(_,t){_&&t.__k&&t.__k.__m&&(_.__m=t.__k.__m),T&&T(_,t)},u.__r=function(_){F&&F(_),v=0;var t=(i=_.__c).__H;t&&(s===i?(t.__h=[],i.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.i=o.__N=void 0})):(t.__h.forEach(l),t.__h.forEach(p),t.__h=[],v=0)),s=i},u.diffed=function(_){g&&g(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(C.push(t)!==1&&y===u.requestAnimationFrame||((y=u.requestAnimationFrame)||B)(z)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.i=void 0})),s=i=null},u.__c=function(_,t){t.some(function(o){try{o.__h.forEach(l),o.__h=o.__h.filter(function(r){return!r.__||p(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],u.__e(r,o.__v)}}),k&&k(_,t)},u.unmount=function(_){q&&q(_);var t,o=_.__c;o&&o.__H&&(o.__H.__.forEach(function(r){try{l(r)}catch(a){t=a}}),o.__H=void 0,t&&u.__e(t,o.__v))};var U=typeof requestAnimationFrame=="function";function B(_){var t,o=function(){clearTimeout(r),U&&cancelAnimationFrame(t),setTimeout(_)},r=setTimeout(o,100);U&&(t=requestAnimationFrame(o))}function l(_){var t=i,o=_.__c;typeof o=="function"&&(_.__c=void 0,o()),i=t}function p(_){var t=i;_.__c=_.__(),i=t}function b(_,t){return!_||_.length!==t.length||t.some(function(o,r){return o!==_[r]})}function W(_,t){return typeof t=="function"?t(_):t}export{$ as T,P as h,S as y};
