(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679d9cee"],{"017f":function(t,i,s){"use strict";s("8ccd")},"37f9":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page"},[s("van-nav-bar",{staticClass:"index-bar",scopedSlots:t._u([{key:"title",fn:function(){return[s("van-search",{staticClass:"search",attrs:{placeholder:"输入搜索关键字"}})]},proxy:!0},{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"apps-o",size:"30",color:"#FFF"}})]},proxy:!0},{key:"right",fn:function(){return[s("van-button",{attrs:{color:"#0095df",size:"small"},on:{click:t.submit}},[t._v("登陆")])]},proxy:!0}])}),s("div",{staticClass:"lists"},[s("van-tabs",{on:{change:t.change},scopedSlots:t._u([{key:"nav-right",fn:function(){return[s("div",{staticClass:"nav-wrap"},[s("van-icon",{attrs:{name:"wap-nav"}})],1)]},proxy:!0}]),model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.lists,(function(i){return s("van-tab",{key:i._id,attrs:{title:i.name}},[s("van-list",t._l(i.list,(function(i){return s("router-link",{key:i._id,attrs:{to:{path:"/detail/"+i._id}}},[s("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticClass:"van-multi-ellipsis--l2"},[t._v(" "+t._s(i.title)+" ")])]},proxy:!0},{key:"label",fn:function(){return[s("van-grid",{attrs:{"column-num":2,border:!1}},t._l(i.imageSrc,(function(t,i){return s("van-grid-item",{key:i},[s("van-image",{staticClass:"ac-img",attrs:{src:t}})],1)})),1),s("div",{staticClass:"author"},[s("span",[t._v(t._s(i.title))]),s("span",[t._v(t._s(i.comment)+" 评论")]),s("span",[t._v(t._s(t._f("showTime")(i.time)))])])]},proxy:!0}],null,!0)})],1)})),1)],1)})),1)],1)],1)},n=[],e={data:function(){return{active:0,lists:[]}},filters:{showTime:function(t){var i=new Date(t);return i.getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"号"}},methods:{submit:function(){this.$router.push("/user")},change:function(t){var i=this;this.axios.post("/api/get_article_list",{cate_id:this.lists[t]._id}).then((function(s){i.lists[t].list=s.data.data,i.$set(i.lists,t,i.lists[t])}))}},created:function(){var t=this;this.axios.post("/api/get_cate_list").then((function(i){t.lists=i.data.data,t.axios.post("/api/get_article_list",{cate_id:t.lists[t.active]._id,skip:0,limit:10}).then((function(i){t.lists[t.active].list=i.data.data,t.$set(t.lists,t.active,t.lists[t.active])}))}))}},c=e,l=(s("017f"),s("2877")),r=Object(l["a"])(c,a,n,!1,null,null,null);i["default"]=r.exports},"8ccd":function(t,i,s){}}]);
//# sourceMappingURL=chunk-679d9cee.7f844022.js.map