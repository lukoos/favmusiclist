import t from"./BqTrNu9k.js";import{a5 as o,a6 as s,S as n,c as l,o as i,v as d,b as p,x as a}from"./DNo6IKk4.js";import"./Be1fzYNM.js";import"./-bdlT3Hq.js";var v=o`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,c={root:"p-overlaybadge"},g=s.extend({name:"overlaybadge",style:v,classes:c}),m={name:"OverlayBadge",extends:t,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:m,inheritAttrs:!1,components:{Badge:t}};function u(e,b,B,f,$,h){var r=n("Badge");return i(),l("div",a({class:e.cx("root")},e.ptmi("root")),[d(e.$slots,"default"),p(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=u;export{y as default};
