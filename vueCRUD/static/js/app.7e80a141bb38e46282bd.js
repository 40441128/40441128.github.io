webpackJsonp([1],{"+sBd":function(t,e){},"18rA":function(t,e){},"9M+g":function(t,e){},F2MN:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={name:"header.vue",data:function(){return{week_arr:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],nav_date:"",nav_week:"",nav_time:"",show_home:!1}},methods:{getNowDateTime:function(){var t=new Date;this.nav_date=t.getMonth()+1+"月"+t.getDate()+"日",this.nav_week=this.week_arr[t.getDay()],this.nav_time=(t.getHours()<12?"上午":"下午")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()},btn_logout:function(){var t=this;this.$swal({text:"你確定要登出嗎？",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(function(e){e.isConfirmed?(t.$store.state.userLv="",t.$swal({position:"top-end",icon:"success",title:"登出成功",showConfirmButton:!1,timer:1500}),t.$router.push("/")):t.$swal({icon:"warning",title:"取消登出"})})}},mounted:function(){setInterval(this.getNowDateTime,500)},created:function(){this.getNowDateTime()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topnav"},[t._m(0),t._v(" "),s("div",{staticClass:"right_nav"},[this.$store.state.userLv?s("div"):t._e(),t._v(" "),s("div",[t._v(t._s(t.nav_date))]),t._v(" "),s("div",[t._v(t._s(t.nav_week))]),t._v(" "),s("div",{staticStyle:{color:"#FFFFFF"}},[t._v(t._s(t.nav_time))]),t._v(" "),this.$store.state.userLv?s("div",{staticClass:"user_nav"},[s("span",[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.btn_logout}},[t._v("登出")])]),t._v(" "),s("span",[t._v(t._s(this.$store.state.userLv))])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left_nav"},[e("div",{staticClass:"main_title"},[this._v("飲料小舖")])])}]};var r={name:"App",components:{"anys-header":s("VU/8")(i,o,!1,function(t){s("+sBd")},"data-v-6bf25df9",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("anys-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var d=s("VU/8")(r,a,!1,function(t){s("18rA")},null,null).exports,c=s("/ocq"),l={name:"loginUI",data:function(){return{account:"",password:""}},methods:{btn_login:function(){var t=this;if(""!==this.account&&""!==this.password){var e=this.$store.state.user.filter(function(e,s,n){return e.Account===t.account});e.length>0?e[0].Password===this.password?("管理員"===e[0].Lv?(this.$swal({position:"top-end",icon:"success",title:"管理員登入",showConfirmButton:!1,timer:1500}),this.$router.push("/showList")):(this.$swal({position:"top-end",icon:"success",title:"登入成功",showConfirmButton:!1,timer:1500}),this.$router.push("/Order")),this.$store.state.userLv=e[0].Lv,this.account="",this.password=""):this.$swal.fire({icon:"error",title:"登入失敗\n 密碼錯誤！！！"}):this.$swal.fire({icon:"error",title:"登入失敗\n 帳號或密碼錯誤！！！"}),console.log(e)}else this.$swal.fire({icon:"error",title:"登入失敗\n 帳號或密碼，未輸入！！！"})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loginUI"},[s("main",{},[""===this.$store.state.userLv?s("div",{staticClass:"login"},[s("h1",[t._v("登入畫面")]),t._v(" "),s("div",[s("div",[s("label",{staticClass:"form-label",attrs:{for:"floatingInput"}},[t._v("帳號")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",staticStyle:{width:"50%",margin:"auto"},attrs:{type:"text",id:"floatingInput",placeholder:"請輸入帳號"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),t._v(" "),s("div",[s("label",{staticClass:"form-label",attrs:{for:"floatingPassword"}},[t._v("密碼")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",staticStyle:{width:"50%",margin:"auto"},attrs:{type:"password",id:"floatingPassword",placeholder:"請輸入密碼"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"w-50 btn btn-lg btn-primary",staticStyle:{"margin-top":"20px"},on:{click:t.btn_login}},[t._v("\n          登入\n        ")])])]):s("div",{staticStyle:{color:"red","margin-top":"25%"}},[s("h1",{staticStyle:{"font-weight":"bold"}},[t._v("請先按右上登出按鈕，再重新登入！！！")])])])])},staticRenderFns:[]};var v=s("VU/8")(l,u,!1,function(t){s("F2MN")},"data-v-30197962",null).exports,h=s("mvHQ"),m=s.n(h),p={name:"Order",computed:{countTotal:function(){var t=0,e=0;return this.order.forEach(function(s,n){t+=s.price*s.count,e+=s.count}),{total:t,count:e}}},data:function(){return{order:[],title:["品項","價格","數量","總額","移除飲品"]}},methods:{doMinus:function(t){var e=this.order.findIndex(function(e){if(e.orderId===t)return!0});this.order[e].count=Number(this.order[e].count)-1,this.order[e].count<0&&(this.order[e].count=0)},doPlus:function(t){var e=this.order.findIndex(function(e){if(e.orderId===t)return!0});this.order[e].count=Number(this.order[e].count)+1},doDelete:function(t){var e=this.order.findIndex(function(e){if(e.orderId===t)return!0});this.order[e].count=0}},mounted:function(){this.order=[],this.$store.state.order.length>0&&(this.order=JSON.parse(m()(this.$store.state.order)),console.log("order",this.order))}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[s("table",{staticClass:"table table-striped table-bordered table-rwd",staticStyle:{"table-layout":"fixed","word-break":"break-all"}},[s("thead",{staticClass:"table-dark"},[s("tr",{staticClass:"tr-only-hide"},t._l(t.title,function(e,n){return s("th",{key:n,attrs:{scope:"col"}},[t._v(t._s(e))])}),0)]),t._v(" "),s("tbody",t._l(this.order,function(e,n){return s("tr",{key:n},[s("td",{attrs:{"data-th":"品項"}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),s("td",{attrs:{"data-th":"價格"}},[t._v("\n          "+t._s(e.price)+"\n        ")]),t._v(" "),s("td",{attrs:{"data-th":"數量"}},[s("button",{staticClass:"btn btn-warning",on:{click:function(s){return t.doMinus(e.orderId)}}},[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"item.count"}],staticStyle:{width:"80px"},attrs:{type:"text"},domProps:{value:e.count},on:{input:function(s){s.target.composing||t.$set(e,"count",s.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",on:{click:function(s){return t.doPlus(e.orderId)}}},[t._v("+")])]),t._v(" "),s("td",{attrs:{"data-th":"總額"}},[t._v("\n          "+t._s(e.price*e.count)+"\n        ")]),t._v(" "),s("td",{attrs:{"data-th":"移除飲品"}},[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.doDelete(e.orderId)}}},[t._v("刪除")])])])}),0),t._v(" "),s("tfoot",{staticStyle:{"font-size":"50px"}},[s("div",[t._v("杯數:"+t._s(t.countTotal.count)+"杯")]),t._v(" "),s("div",[t._v("total:$"+t._s(t.countTotal.total))])])])])},staticRenderFns:[]};var _=s("VU/8")(p,f,!1,function(t){s("tD9Z")},"data-v-1e992522",null).exports,g={name:"showList",data:function(){return{title:["品項","價格","功能"]}},methods:{doAddEdit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t){console.log(this.$store.state.order.length+1);var e={orderId:this.$store.state.order.length+1,name:"",price:0,count:0};console.log(e),this.$router.push({name:"addEditList",params:{dataList:m()(e),type:"add"}})}else this.$router.push({name:"addEditList",params:{dataList:m()(t),type:"edit"}})},doDelete:function(t){var e=this,s=this.$store.state.order.findIndex(function(e){if(e.orderId===t.orderId)return!0}),n=this;this.$swal({text:"你確定要 "+t.name+" 刪除嗎？",type:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定",cancelButtonText:"取消"}).then(function(i){if(i.isConfirmed){e.$store.state.order.splice(s,1);var o=e.$store.state.order.findIndex(function(e){if(e.orderId===t.orderId)return!0});console.log("delectInx => ",o),-1===o?n.$swal({position:"top-end",icon:"success",title:t.name+" 刪除成功",showConfirmButton:!1,timer:1500}):n.$swal({icon:"error",title:t.name+" 刪除失敗！！！"})}else n.$swal({icon:"warning",title:"取消刪除！！！"})})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showList"},[s("div",{staticStyle:{"text-align":"left",margin:"10px"}},[s("button",{staticClass:"btn btn-warning",staticStyle:{width:"100px"},on:{click:function(e){return t.doAddEdit()}}},[t._v("新增")])]),t._v(" "),s("div",[s("table",{staticClass:"table table-striped table-bordered table-rwd"},[s("thead",{staticClass:"table-dark"},[s("tr",{staticClass:"tr-only-hide"},t._l(t.title,function(e,n){return s("th",{key:n,attrs:{scope:"col"}},[t._v(t._s(e))])}),0)]),t._v(" "),s("tbody",t._l(this.$store.state.order,function(e,n){return s("tr",{key:n},[s("td",{attrs:{"data-th":"品項"}},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),s("td",{attrs:{"data-th":"價格"}},[t._v("\n            "+t._s(e.price)+"\n          ")]),t._v(" "),s("td",{attrs:{"data-th":"功能"}},[s("button",{staticClass:"btn btn-success",on:{click:function(s){return t.doAddEdit(e)}}},[t._v("修改")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.doDelete(e)}}},[t._v("刪除")])])])}),0)])])])},staticRenderFns:[]};var b=s("VU/8")(g,w,!1,function(t){s("UUWS")},"data-v-aad1e7e6",null).exports,$=s("fZjL"),y=s.n($),L=s("pFYg"),C=s.n(L),x=s("gRE1"),I=s.n(x),k={name:"addEditList",data:function(){return{itemList:{},type:""}},methods:{btn_save:function(){var t=this;if(""===this.itemList.name)this.$swal.fire({icon:"error",title:"储存失敗\n 品項，未輸入！！！"});else if(0===this.itemList.price)this.$swal.fire({icon:"error",title:"储存失敗\n 價錢，不能為0！！！"});else if(this.itemList.price=Number(this.itemList.price),"add"===this.type)this.$store.state.order.push(JSON.parse(m()(this.itemList))),console.log(this.$store.state.order[this.$store.state.order.length-1]),4===I()(this.$store.state.order[this.$store.state.order.length-1]).length?(this.$swal({position:"top-end",icon:"success",title:"新增成功",showConfirmButton:!1,timer:1500}),this.$router.push("/showList")):this.$swal.fire({icon:"error",title:"新增失敗！！！"});else if("edit"===this.type){var e=this.$store.state.order.findIndex(function(e){if(e.orderId===t.itemList.orderId)return!0});console.log("save"),console.log("edit"),console.log("itemList => ",this.itemList),console.log("inx => ",e),this.$store.state.order[e]=JSON.parse(m()(this.itemList)),console.log(this.$store.state.order[e]),4===I()(this.$store.state.order[e]).length?(this.$swal({position:"top-end",icon:"success",title:"修改成功",showConfirmButton:!1,timer:1500}),this.$router.push("/showList")):this.$swal.fire({icon:"error",title:"修改失敗！！！"})}}},mounted:function(){var t=JSON.parse(this.$route.params.dataList);console.log("dataList => ",t),console.log("typeof => ",void 0===t?"undefined":C()(t)),console.log("length => ",y()(t).length),y()(t).length>0&&(this.itemList=t),this.$route.params.type&&(this.type=this.$route.params.type)}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addEditList"},[s("main",{},[s("div",{staticClass:"product"},[s("h1",[t._v("新增 / 編輯 畫面")]),t._v(" "),s("div",[s("div",[s("label",{staticClass:"form-label",attrs:{for:"floatingName"}},[t._v("品項")]),t._v(" "),"add"===t.type?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.itemList.name,expression:"itemList.name"}],staticClass:"form-control",staticStyle:{width:"50%",margin:"auto"},attrs:{type:"text",id:"floatingName",placeholder:"請輸入品項"},domProps:{value:t.itemList.name},on:{input:function(e){e.target.composing||t.$set(t.itemList,"name",e.target.value)}}})]):"edit"===t.type?s("span",{staticStyle:{width:"50%",margin:"auto",display:"block","font-size":"50px"}},[t._v("\n            "+t._s(t.itemList.name)+"\n          ")]):t._e()]),t._v(" "),s("div",[s("label",{staticClass:"form-label",attrs:{for:"floatingPrice"}},[t._v("價格")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.itemList.price,expression:"itemList.price"}],staticClass:"form-control",staticStyle:{width:"50%",margin:"auto"},attrs:{type:"number",id:"floatingPrice",placeholder:"請輸入價格"},domProps:{value:t.itemList.price},on:{input:function(e){e.target.composing||t.$set(t.itemList,"price",e.target.value)}}})]),t._v(" "),s("div",[s("button",{staticClass:"w-50 btn btn-lg btn-primary",staticStyle:{"margin-top":"20px"},on:{click:t.btn_save}},[t._v("\n            储存\n          ")])]),t._v(" "),s("div",[s("router-link",{attrs:{to:"/showList"}},[s("button",{staticClass:"w-50 btn btn-lg btn-secondary",staticStyle:{"margin-top":"20px"}},[t._v("\n              取消 並 回到首頁\n            ")])])],1)])])])])},staticRenderFns:[]};var S=s("VU/8")(k,N,!1,function(t){s("rLhF")},"data-v-b36fc33e",null).exports;n.default.use(c.a);var B=new c.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"loginUI",component:v},{path:"/Order",name:"Order",component:_},{path:"/showList",name:"showList",component:b},{path:"/addEditList",name:"addEditList",component:S}]}),E=s("NYxO");n.default.use(E.a);var F=new E.a.Store({state:{user:[{userId:1,Account:"A",Password:"a",Lv:"管理員"},{userId:2,Account:"B",Password:"b",Lv:"顧客"}],userAccount:"",userPassword:"",userLv:"",order:[{orderId:"1",name:"白玉歐蕾",price:65,count:0},{orderId:"2",name:"決明子紅茶",price:45,count:0},{orderId:"3",name:"伯爵巧克力奶",price:55,count:0},{orderId:"4",name:"甘蔗青茶",price:35,count:0},{orderId:"5",name:"黑糖珍珠鮮奶",price:50,count:0},{orderId:"6",name:"檸檬綠茶",price:40,count:0}]},gatters:{},mutations:{},actions:{}}),P=s("NOK/"),U=s.n(P),A=(s("UdIB"),s("Tqaz"));s("Jmt5"),s("9M+g");n.default.use(A.a),n.default.use(U.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:B,store:F,components:{App:d},template:"<App/>"})},UUWS:function(t,e){},UdIB:function(t,e){},rLhF:function(t,e){},tD9Z:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7e80a141bb38e46282bd.js.map