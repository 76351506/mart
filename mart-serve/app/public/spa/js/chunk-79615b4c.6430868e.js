(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79615b4c"],{"35d0":function(e,t,r){"use strict";r("4bf8"),r("5c98"),r("9dff"),r("abea"),r("c549"),r("3d52"),r("ba36"),r("7a62"),r("20ca"),r("c5a9")},8808:function(e,t,r){"use strict";var a=r("cd86"),n=r.n(a);n.a},cd86:function(e,t,r){},ea54:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[r("van-icon",{staticClass:"del",attrs:{name:"share-o"},on:{click:function(t){return e.$router.history.go("-1")}}}),e._v(" 修改地址")],1),r("van-address-edit",{ref:"address",attrs:{"area-list":e.areaList,"show-postal":"","show-set-default":"","show-search-result":"","show-delete":"","address-info":e.userInfo,"search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave,delete:e.onDelete}})],1)},n=[],s=(r("053b"),r("35d0"),r("0c7e")),c=(r("4bf8"),r("5c98"),r("9dff"),r("abea"),r("c549"),r("3d52"),r("1e37"),r("d4bd")),o=(r("0517"),r("b6f5")),i=(r("6a61"),r("cf7f")),u=r("2e8e"),d=r("c24f"),l=r("2f94"),f={data:function(){return{result:null,show:!1,areaList:{},searchResult:[],userInfo:{},str:""}},created:function(){this.getAddresscity();var e=this.$route.query;this.str=e.city+e.county+e.street,this.userInfo={addressDetail:"",city:e.city,country:"",county:e.county,isDefault:!1,name:e.auser,postalCode:"400011",province:e.province,tel:e.mobile}},mounted:function(){this.$refs.address.setAddressDetail(this.str)},methods:{onSave:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(d["d"])();case 2:return a=r.sent,n={auser:e.name,mobile:e.tel,province:e.province,city:e.city,county:e.county,uid:a.data.uid,street:e.addressDetail,aid:t.$route.query.aid},r.next=6,Object(l["c"])(n);case 6:s=r.sent,s.data.code&&(e.isDefault&&(localStorage.setItem("aid",t.$route.query.aid),i=n,u=i.province+i.city+i.county+i.street,localStorage.setItem("mycity",u)),Object(o["a"])({type:"success",message:s.data.msg,duration:2e3,onClose:function(){t.$router.go("-1")}})),Object(c["a"])("save");case 9:case"end":return r.stop()}}),r)})))()},onDelete:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])({aid:e.$route.query.aid});case 2:r=t.sent,s["a"].confirm({title:"删除",message:"确定要删除吗"}).then((function(){r.data.code&&Object(o["a"])({type:"danger",message:r.data.msg,duration:2e3,onClose:function(){e.$router.go("-1"),localStorage.removeItem("aid")}})})).catch((function(){Object(c["a"])("取消删除")}));case 4:case"end":return t.stop()}}),t)})))()},getAddresscity:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.areaList=Object(u["a"])();case 1:case"end":return t.stop()}}),t)})))()}}},h=f,m=(r("8808"),r("9ca4")),b=Object(m["a"])(h,a,n,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-79615b4c.6430868e.js.map