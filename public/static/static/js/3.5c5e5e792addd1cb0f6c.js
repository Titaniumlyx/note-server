webpackJsonp([3],{"2QH8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("teIl"),n=a("VfqU"),s={name:"search",components:{Header:i.a,ArticleList:n.a},data:function(){return{articleData:[],title:""}},methods:{getArticle:function(){var t=this;this.$axios.get("/getArticle").then(function(e){t.articleData=e.data.data})},handleSearch:function(){var t=this,e=this.title;this.$axios.get("/articleSearch",{params:{title:e}}).then(function(e){console.log(e),200==e.data.code&&(t.articleData=e.data.data)})}},mounted:function(){this.getArticle()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container"},[a("Header"),t._v(" "),a("div",{staticClass:"search-wrap"},[a("div",{staticClass:"inputBlock clearfix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"fll",attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleSearch(e):null},input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),a("span",{staticClass:"fll",on:{click:t.handleSearch}},[t._v("搜索")])]),t._v(" "),a("h3",[t._v("相关笔记")]),t._v(" "),a("div",{staticClass:"lists"},[a("ArticleList",{attrs:{articles:t.articleData}})],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(s,r,!1,function(t){a("ZhUe")},"data-v-2da8ef8e",null);e.default=c.exports},ZhUe:function(t,e){}});
//# sourceMappingURL=3.5c5e5e792addd1cb0f6c.js.map