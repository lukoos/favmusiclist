import{c as b}from"./Be1fzYNM.js";import{s as f}from"./CvmPMGaR.js";import{s as y}from"./NgYOdqA2.js";import v from"./CWmR9Erk.js";import{R as B}from"./C5-hWqlV.js";import{s as k}from"./-bdlT3Hq.js";import{a5 as w,a6 as P,S as $,c as p,o as d,a as s,b as g,v as l,G as c,x as o,t as C,B as D,w as h,F as S,J as A,am as I,ax as K,ak as L}from"./DNo6IKk4.js";import"./DVnuI64i.js";import"./DV2bcGZ7.js";import"./BqTrNu9k.js";import"./84arrLIv.js";import"./DmfvTtO6.js";var T=w`
    .p-panel {
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,E={root:function(t){var u=t.props;return["p-panel p-component",{"p-panel-toggleable":u.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},N=P.extend({name:"panel",style:T,classes:E}),V={name:"BasePanel",extends:k,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:N,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:V,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return b({toggleable:this.toggleable})}},components:{PlusIcon:y,MinusIcon:f,Button:v},directives:{ripple:B}},M=["data-p"],R=["data-p"],z=["id"],F=["id","aria-labelledby"];function G(e,t,u,J,r,a){var m=$("Button");return d(),p("div",o({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[s("div",o({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[l(e.$slots,"header",{id:e.$id+"_header",class:D(e.cx("title"))},function(){return[e.header?(d(),p("span",o({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),C(e.header),17,z)):c("",!0)]}),s("div",o({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?l(e.$slots,"togglebutton",{key:0,collapsed:r.d_collapsed,toggleCallback:function(i){return a.toggle(i)},keydownCallback:function(i){return a.onKeyDown(i)}},function(){return[g(m,o({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(n){return a.toggle(n)}),onKeydown:t[1]||(t[1]=function(n){return a.onKeyDown(n)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(n){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},function(){return[(d(),S(A(r.d_collapsed?"PlusIcon":"MinusIcon"),o({class:n.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,R),g(L,o({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[I(s("div",o({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",o({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(d(),p("div",o({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16,F),[[K,!r.d_collapsed]])]}),_:3},16)],16,M)}j.render=G;export{j as default};
