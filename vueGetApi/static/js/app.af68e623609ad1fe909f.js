webpackJsonp([1],{"9M+g":function(e,t){},Jmt5:function(e,t){},N4m7:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={name:"header.vue",data:function(){return{week_arr:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],nav_date:"",nav_week:"",nav_time:"",show_home:!1}},methods:{getNowDateTime:function(){var e=new Date;this.nav_date=e.getMonth()+1+"月"+e.getDate()+"日",this.nav_week=this.week_arr[e.getDay()],this.nav_time=(e.getHours()<12?"上午":"下午")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()}},mounted:function(){setInterval(this.getNowDateTime,500)},created:function(){this.getNowDateTime()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topnav"},[e._m(0),e._v(" "),a("div",{staticClass:"right_nav"},[a("div",[e._v(e._s(e.nav_date))]),e._v(" "),a("div",[e._v(e._s(e.nav_week))]),e._v(" "),a("div",{staticStyle:{color:"#FFFFFF"}},[e._v(e._s(e.nav_time))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left_nav"},[t("div",{staticClass:"main_title"},[this._v("三十六小時天氣預報")])])}]};var r={name:"App",components:{"anys-header":a("VU/8")(i,s,!1,function(e){a("sZ+9")},"data-v-58c3fbfe",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("anys-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(e){a("N4m7")},null,null).exports,c=a("/ocq"),m=a("gRE1"),d=a.n(m),v=a("fZjL"),u=a.n(v),_=a("mvHQ"),h=a.n(_),f={name:"Meteorological",data:function(){return{loading:!0,weather_data:[],weatherFliterData:[],nameList:[],selectName:"",dataList:[]}},mounted:function(){var e=this;this.$axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-4942B096-85EE-467F-A16C-8C1BE01A5773").then(function(t){console.log(t),200===t.status&&(e.loading=!1,e.weather_data=t.data.records.location,e.weather_data.forEach(function(t,a,n){e.nameList.push(t.locationName)}))}).catch(function(e){return console.log(e)})},methods:{getNameData:function(){var e=this;if(this.selectName){this.dataList=[];var t=this.weather_data.filter(function(t,a,n){return t.locationName===e.selectName});console.log("oldSelectList = ",t);var a=JSON.parse(h()(t));console.log("selectList = ",a),a.forEach(function(t,a,n){console.log(t.locationName),e.dataList.locationName=t.locationName,e.dataList.weatherElement=[],t.weatherElement.forEach(function(t,a,n){t.time.forEach(function(n,i,s){e.dataList.weatherElement[i]||(e.dataList.weatherElement[i]=[]),e.dataList.weatherElement[i][a]||(e.dataList.weatherElement[i][a]=[]),e.dataList.weatherElement[i].startTime||(e.dataList.weatherElement[i].startTime=""),e.dataList.weatherElement[i].endTime||(e.dataList.weatherElement[i].endTime=""),n.elementName=t.elementName,e.dataList.weatherElement[i][a]=n,e.dataList.weatherElement[i].startTime=n.startTime,e.dataList.weatherElement[i].endTime=n.endTime})})}),console.log(this.dataList),console.log(u()(this.dataList)),console.log(d()(this.dataList).length)}}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Meteorological"},[e.loading?a("div",[e._v("資料載入中請稍等...")]):a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectName,expression:"selectName"}],staticClass:"form-select form-select-lg mb-3",staticStyle:{"text-align":"center"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectName=t.target.multiple?a:a[0]},e.getNameData]}},e._l(e.nameList,function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),0),e._v(" "),Object.values(e.dataList).length>0?a("div",[a("div",{staticStyle:{"font-size":"50px","background-color":"#536DFE",color:"white"}},[e._v(e._s(e.dataList.locationName)+" 天氣")]),e._v(" "),e._l(e.dataList.weatherElement,function(t,n){return a("div",{key:n,staticClass:"wrap",attrs:{value:t}},[a("div",[e._v("時間區間："+e._s(t.startTime)+" ~ "+e._s(t.endTime))]),e._v(" "),e._l(t,function(t,n){return a("div",{key:n,attrs:{value:t}},["Wx"==t.elementName?a("span",[e._v("\n              "+e._s(t.parameter.parameterName)+"\n          ")]):"PoP"==t.elementName?a("span",[e._v("\n              降雨機率：\n              "),e._v("\n              "+e._s(t.parameter.parameterName)+"\n          ")]):"MinT"==t.elementName?a("span",[e._v("\n              最低溫：\n              "),e._v("\n              "+e._s(t.parameter.parameterName)+"\n          ")]):"MaxT"==t.elementName?a("span",[e._v("\n              最高溫：\n              "),e._v("\n              "+e._s(t.parameter.parameterName)+"\n          ")]):e._e(),e._v("\n          "+e._s(t.parameter.parameterUnit)+"\n        ")])})],2)})],2):a("div",[a("div",{staticStyle:{"font-size":"50px",color:"red"}},[e._v("請從上方選擇縣市")])])])])},staticRenderFns:[]};var g=a("VU/8")(f,p,!1,function(e){a("lFmD")},"data-v-a68979e0",null).exports;n.default.use(c.a);var w=new c.a({routes:[{path:"/",name:"Meteorological",component:g}]}),N=a("mtWM"),E=a.n(N),L=a("Tqaz");a("Jmt5"),a("9M+g");n.default.use(L.a),n.default.config.productionTip=!1,n.default.prototype.$axios=E.a,new n.default({el:"#app",router:w,components:{App:l},template:"<App/>"})},lFmD:function(e,t){},"sZ+9":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.af68e623609ad1fe909f.js.map