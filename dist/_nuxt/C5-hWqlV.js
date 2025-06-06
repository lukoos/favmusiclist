import{a5 as h,a6 as y,aw as v,aq as a,aG as p,aH as d,ae as b,aE as g,aI as k,ap as A,aJ as E}from"./DNo6IKk4.js";import{B as S}from"./84arrLIv.js";var w=h`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,$={root:"p-ink"},x=y.extend({name:"ripple-directive",style:w,classes:$}),I=S.extend({style:x});function o(e){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}function T(e){return M(e)||C(e)||R(e)||_()}function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(e,t){if(e){if(typeof e=="string")return s(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}function C(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return s(e)}function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}function c(e,t,i){return(t=P(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function P(e){var t=U(e,"string");return o(t)=="symbol"?t:t+""}function U(e,t){if(o(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L=I.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var i=this.getInk(t);i||(i=E("span",c(c({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(i),this.$el=i)},remove:function(t){var i=this.getInk(t);i&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),i.removeEventListener("animationend",this.onAnimationEnd),i.remove())},onMouseDown:function(t){var i=this,r=t.currentTarget,n=this.getInk(r);if(!(!n||getComputedStyle(n,null).display==="none")){if(!this.isUnstyled()&&a(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!p(n)&&!d(n)){var u=Math.max(b(r),g(r));n.style.height=u+"px",n.style.width=u+"px"}var l=k(r),f=t.pageX-l.left+document.body.scrollTop-d(n)/2,m=t.pageY-l.top+document.body.scrollLeft-p(n)/2;n.style.top=m+"px",n.style.left=f+"px",!this.isUnstyled()&&A(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){n&&(!i.isUnstyled()&&a(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&a(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?T(t.children).find(function(i){return v(i,"data-pc-name")==="ripple"}):void 0}}});export{L as R};
