import{a5 as b,a6 as v,as as k,ai as f,bt as P,S as C,c as u,o as n,G as d,F as w,a as S,x as g,v as i,al as y,w as l,B as h,H as $,d as T,t as R}from"./DNo6IKk4.js";import L from"./CmShcx0N.js";import{s as A}from"./-bdlT3Hq.js";import"./mqMQ-6av.js";import"./DVnuI64i.js";import"./C5-hWqlV.js";import"./84arrLIv.js";import"./DmfvTtO6.js";import"./Dhp7bWBQ.js";import"./Be1fzYNM.js";import"./DGEOgZpe.js";import"./CiEf9rL-.js";import"./D334pSey.js";import"./BEvE57E3.js";import"./GOPd2_UA.js";import"./DLN_gFII.js";import"./DV2bcGZ7.js";import"./BbXbNT3w.js";import"./DiaL1tYq.js";import"./BPWKDLJN.js";import"./BwlIcE6M.js";import"./BENBL6gR.js";import"./Dtq0lwRV.js";import"./Ci4uh27m.js";import"./BXwmyZXL.js";import"./DDLXUmaw.js";import"./BrmcehsW.js";import"./_Kz99MUy.js";import"./B5Kf8BB-.js";import"./D1udKhmn.js";var B=b`
    .p-dataview {
        border-color: dt('dataview.border.color');
        border-width: dt('dataview.border.width');
        border-style: solid;
        border-radius: dt('dataview.border.radius');
        padding: dt('dataview.padding');
    }

    .p-dataview-header {
        background: dt('dataview.header.background');
        color: dt('dataview.header.color');
        border-color: dt('dataview.header.border.color');
        border-width: dt('dataview.header.border.width');
        border-style: solid;
        padding: dt('dataview.header.padding');
        border-radius: dt('dataview.header.border.radius');
    }

    .p-dataview-content {
        background: dt('dataview.content.background');
        border-color: dt('dataview.content.border.color');
        border-width: dt('dataview.content.border.width');
        border-style: solid;
        color: dt('dataview.content.color');
        padding: dt('dataview.content.padding');
        border-radius: dt('dataview.content.border.radius');
    }

    .p-dataview-footer {
        background: dt('dataview.footer.background');
        color: dt('dataview.footer.color');
        border-color: dt('dataview.footer.border.color');
        border-width: dt('dataview.footer.border.width');
        border-style: solid;
        padding: dt('dataview.footer.padding');
        border-radius: dt('dataview.footer.border.radius');
    }

    .p-dataview-paginator-top {
        border-width: dt('dataview.paginator.top.border.width');
        border-color: dt('dataview.paginator.top.border.color');
        border-style: solid;
    }

    .p-dataview-paginator-bottom {
        border-width: dt('dataview.paginator.bottom.border.width');
        border-color: dt('dataview.paginator.bottom.border.color');
        border-style: solid;
    }
`,O={root:function(e){var r=e.props;return["p-dataview p-component",{"p-dataview-list":r.layout==="list","p-dataview-grid":r.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(e){var r=e.position;return"p-dataview-paginator-"+r},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},F=v.extend({name:"dataview",style:B,classes:O}),z={name:"BaseDataView",extends:A,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:F,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function D(t){return I(t)||M(t)||N(t)||V()}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(t,e){if(t){if(typeof t=="string")return m(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function M(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function I(t){if(Array.isArray(t))return m(t)}function m(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,p=Array(e);r<e;r++)p[r]=t[r];return p}var K={name:"DataView",extends:z,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(e,r){return this.dataKey?f(e,this.dataKey):r},onPage:function(e){this.d_first=e.first,this.d_rows=e.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",e)},sort:function(){var e=this;if(this.value){var r=D(this.value),p=k();return r.sort(function(s,o){var c=f(s,e.sortField),a=f(o,e.sortField);return P(c,a,e.sortOrder,p)}),r}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var e=this.value;if(e&&e.length&&this.sortField&&(e=this.sort()),this.paginator){var r=this.lazy?0:this.d_first;return e.slice(r,r+this.d_rows)}else return e}else return null}},components:{DVPaginator:L}};function j(t,e,r,p,s,o){var c=C("DVPaginator");return n(),u("div",g({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(n(),u("div",g({key:0,class:t.cx("header")},t.ptm("header")),[i(t.$slots,"header")],16)):d("",!0),o.paginatorTop?(n(),w(c,{key:1,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:h(t.cx("pcPaginator",{position:"top"})),alwaysShow:t.alwaysShowPaginator,onPage:e[0]||(e[0]=function(a){return o.onPage(a)}),unstyled:t.unstyled,pt:t.ptm("pcPaginator")},y({_:2},[t.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[i(t.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,t.$slots.paginatorstart?{name:"start",fn:l(function(){return[i(t.$slots,"paginatorstart")]}),key:"1"}:void 0,t.$slots.paginatorend?{name:"end",fn:l(function(){return[i(t.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),S("div",g({class:t.cx("content")},t.ptm("content")),[o.empty?(n(),u("div",g({key:1,class:t.cx("emptyMessage")},t.ptm("emptyMessage")),[i(t.$slots,"empty",{layout:t.layout},function(){return[T(R(o.emptyMessageText),1)]})],16)):(n(),u($,{key:0},[t.$slots.list&&t.layout==="list"?i(t.$slots,"list",{key:0,items:o.items}):d("",!0),t.$slots.grid&&t.layout==="grid"?i(t.$slots,"grid",{key:1,items:o.items}):d("",!0)],64))],16),o.paginatorBottom?(n(),w(c,{key:2,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:h(t.cx("pcPaginator",{position:"bottom"})),alwaysShow:t.alwaysShowPaginator,onPage:e[1]||(e[1]=function(a){return o.onPage(a)}),unstyled:t.unstyled,pt:t.ptm("pcPaginator")},y({_:2},[t.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[i(t.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,t.$slots.paginatorstart?{name:"start",fn:l(function(){return[i(t.$slots,"paginatorstart")]}),key:"1"}:void 0,t.$slots.paginatorend?{name:"end",fn:l(function(){return[i(t.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),t.$slots.footer?(n(),u("div",g({key:3,class:t.cx("footer")},t.ptm("footer")),[i(t.$slots,"footer")],16)):d("",!0)],16)}K.render=j;export{K as default};
