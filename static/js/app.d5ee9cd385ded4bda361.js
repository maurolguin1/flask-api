webpackJsonp([1],Array(45).concat([function(e,t,n){"use strict";var a=n(2),s=n(183),i=n(164),l=n.n(i);a.default.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Hello",component:l.a}]})},function(e,t,n){"use strict";var a=n(2),s=n(9),i=n(91);a.default.use(s.a);var l={response:"",methods:{login:{name:"",description:"",params:{}},allKey:[""]},contentType:"json",requestBody:0,requestWay:"POST"},r=new s.a.Store({state:l,getters:i,mutations:{newResponse:function(e,t){e.response=t},getallMethods:function(e,t){e.methods=t},newRequestBody:function(e,t){e.requestBody=t},setContentType:function(e,t){e.contentType=t},setRequestWay:function(e,t){e.requestWay=t}}});t.a=r},,function(e,t){},,function(e,t,n){n(154);var a=n(4)(n(93),n(181),null,null);e.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=n(50),i=n.n(s),l=n(45),r=n(47),o=n.n(r),u=n(48),c=(n.n(u),n(44)),d=n.n(c),p=n(49),h=n.n(p),v=n(9),f=n(46);a.default.use(v.a),a.default.use(o.a);var m=d.a.create({baseURL:"http://localhost:5000",timeout:5e3});a.default.use(h.a,m),a.default.config.productionTip=!1,new a.default({el:"#app",router:l.a,store:f.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getrequestway",function(){return a});var a=function(e){return e.requestWay}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(151);t.default={mixins:[a.a],name:"ElOption",componentName:"ElOption",props:{value:{required:!0},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},data:function(){return{index:-1,groupDisabled:!1,visible:!0,hitState:!1}},computed:{currentLabel:function(){return this.label||("string"==typeof this.value||"number"==typeof this.value?this.value:"")},currentValue:function(){return this.value||this.label||""},parent:function(){for(var e=this.$parent;!e.isSelect;)e=e.$parent;return e},itemSelected:function(){return this.parent.multiple?this.parent.value.indexOf(this.value)>-1:this.value===this.parent.value},limitReached:function(){return!!this.parent.multiple&&(!this.itemSelected&&this.parent.value.length>=this.parent.multipleLimit&&this.parent.multipleLimit>0)}},watch:{currentLabel:function(){this.created||this.parent.remote||this.dispatch("ElSelect","setSelected")},value:function(){this.created||this.parent.remote||this.dispatch("ElSelect","setSelected")}},methods:{handleGroupDisabled:function(e){this.groupDisabled=e},hoverItem:function(){this.disabled||this.groupDisabled||(this.parent.hoverIndex=this.parent.options.indexOf(this))},selectOptionClick:function(){!0!==this.disabled&&!0!==this.groupDisabled&&this.dispatch("ElSelect","handleOptionClick",this)},queryChange:function(e){var t=String(e).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,"\\$1");this.visible=new RegExp(t,"i").test(this.currentLabel)||this.created,this.visible||this.parent.filteredOptionsCount--},resetIndex:function(){var e=this;this.$nextTick(function(){e.index=e.parent.options.indexOf(e)})}},created:function(){this.parent.options.push(this),this.parent.cachedOptions.push(this),this.parent.optionsCount++,this.parent.filteredOptionsCount++,this.index=this.parent.options.indexOf(this),this.$on("queryChange",this.queryChange),this.$on("handleGroupDisabled",this.handleGroupDisabled),this.$on("resetIndex",this.resetIndex)},beforeDestroy:function(){this.dispatch("ElSelect","onOptionDestroy",this)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(167),s=n.n(a),i=n(170),l=n.n(i),r=n(169),o=n.n(r);t.default={data:function(){return{title:"API-Test"}},components:{headerA:s.a,tabPage:l.a,responArea:o.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{options:[{value:"1",label:"No Auth"},{value:"2",label:"Basic Auth"},{value:"3",label:"Digest Auth"},{value:"4",label:"OAuth 1.0"},{value:"5",label:"OAuth 2.0"},{value:"6",label:"Hawk Authentication"},{value:"7",label:"AWS Signature"}],value:"1"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{radio:2}},methods:{setArea:function(e){1===e?this.$store.commit("setContentType","text"):2===e?this.$store.commit("setContentType","json"):3===e?(this.$store.commit("setContentType","form url-encode"),this.$store.commit("newRequestBody",1)):4===e?(this.$store.commit("setContentType","multipart"),this.$store.commit("newRequestBody",1)):this.$store.commit("setContentType","file")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formServer:{header:[""]}}},methods:{onAddHeader:function(e){"addheader"===e&&this.formServer.header.push({key:null,value:null})},onRemoveHeader:function(e,t){"delheader"===e&&this.formServer.header.splice(t,1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(105),s=n.n(a),i=n(9),l=n(41),r=n.n(l),o=n(156),u=n.n(o);t.default={data:function(){return{allApi:{},methodParams:[{select:"str"}],options:[{value:"str",label:"str"},{value:"int",label:"int"},{value:"float",label:"float"},{value:"dict",label:"dict"},{value:"list",label:"list"}],value:"int"}},methods:{onAddHeader:function(e){"addHeader"===e&&this.methodParams.push({key:null,value:null,select:"str"})},onRemoveHeader:function(e,t){"delHeader"===e&&this.methodParams.splice(t,1)},sendRequest:function(){var e=this,t=this,n=t.getrequestway;console.log("send"),this.$store.commit("newResponse",""),"POST"===n?t.axios.post("/login",r.a.stringify({name:"yuyuan",password:u()("yuyuan")})).then(function(t){e.$store.commit("newResponse",t.data)}):"GET"===n&&t.axios.get("/login").then(function(t){e.$store.commit("newResponse",t.data)})}},computed:s()({methods:function(){return this.$store.state.methods}},n.i(i.b)(["getrequestway"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(165),s=n.n(a);t.default={data:function(){return{allApi:{}}},components:{apiPage:s.a},computed:{methods:function(){return this.$store.state.methods},allKey:function(){return this.$store.state.methods.allKey}},methods:{setapiroute:function(){console.log(this),this.$store.commit("newResponse",this.title)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(160),s=n.n(a);t.default={components:{ElOption:s.a},data:function(){return{inputUrl:"",select:"POST"}},methods:{sendMessage:function(){var e=this,t=this,n=t.select;console.log("submit"),this.$store.commit("newResponse",""),"POST"===n?t.axios.post(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"GET"===n?t.axios.get(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"PUT"===n?t.axios.put(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)}):"DELETE"===n&&t.axios.delete(t.inputUrl).then(function(t){e.$store.commit("newResponse",t.data)})},changeWay:function(e){"GET"===e?this.$store.commit("setRequestWay","GET"):"POST"===e?this.$store.commit("setRequestWay","POST"):"PUT"===e?this.$store.commit("setRequestWay","PUT"):"DELETE"===e&&this.$store.commit("setRequestWay","DELETE")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{textarea1:""}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},computed:{response:function(){return this.$store.state.response}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(41),s=n.n(a),i=n(161),l=n.n(i),r=n(163),o=n.n(r),u=n(162),c=n.n(u),d=n(168),p=n.n(d),h=n(166),v=n.n(h);t.default={data:function(){return{activeName:"third"}},components:{authPage:l.a,headerPage:o.a,bodyPage:c.a,resquestArea:p.a,getApi:v.a},methods:{handleClick:function(e,t){console.log(e,t)},getAllApi:function(){var e=this,t=this;console.log("get all api"),this.$store.commit("getallMethods",{login:{name:"",description:"",params:{}},allKey:[""]}),t.axios.post("/get_all_api",s.a.stringify({name:"yuyuan",password:"yuyuan"})).then(function(t){e.$store.commit("getallMethods",t.data)})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},,,,,,function(e,t,n){var a=n(4)(n(92),n(173),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(94),n(172),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(95),n(174),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(96),n(175),null,null);e.exports=a.exports},function(e,t,n){n(153);var a=n(4)(n(97),n(179),"data-v-4756c840",null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(98),n(176),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(99),n(177),null,null);e.exports=a.exports},function(e,t,n){n(152);var a=n(4)(n(100),n(171),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(101),n(182),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(102),n(180),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(103),n(178),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"15px"}},[n("span",[n("el-input",{attrs:{placeholder:"API-url",size:"small"},model:{value:e.inputUrl,callback:function(t){e.inputUrl=t},expression:"inputUrl"}},[n("el-select",{attrs:{placeholder:"请求方法"},on:{change:e.changeWay},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{attrs:{label:"GET",value:"GET"}}),e._v(" "),n("el-option",{attrs:{label:"POST",value:"POST"}}),e._v(" "),n("el-option",{attrs:{label:"PUT",value:"PUT"}}),e._v(" "),n("el-option",{attrs:{label:"DELETE",value:"DELETE"}}),e._v(" "),n("el-option",{attrs:{label:"PATCH",value:"PATCH"}}),e._v(" "),n("el-option",{attrs:{label:"HEAD",value:"HEAD"}}),e._v(" "),n("el-option",{attrs:{label:"OPTIONS",value:"OPTIONS"}})],1),e._v(" "),n("el-button",{staticStyle:{"background-color":"#1D8CE0",color:"whitesmoke","font-weight":"bold"},attrs:{type:"success"},on:{click:e.sendMessage},slot:"append"},[e._v("发送")])],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-select-dropdown__item",class:{selected:e.itemSelected,"is-disabled":e.disabled||e.groupDisabled||e.limitReached,hover:e.parent.hoverIndex===e.index},on:{mouseenter:e.hoverItem,click:function(t){t.stopPropagation(),e.selectOptionClick(t)}}},[e._t("default",[n("span",[e._v(e._s(e.currentLabel))])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"5px 5px"}},[n("el-radio-group",{on:{change:e.setArea},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[n("el-radio",{attrs:{label:1}},[e._v("Text")]),e._v(" "),n("el-radio",{attrs:{label:2}},[e._v("Json")]),e._v(" "),n("el-radio",{attrs:{label:3}},[e._v("Form Url-encoded")]),e._v(" "),n("el-radio",{attrs:{label:4}},[e._v("Multipart")]),e._v(" "),n("el-radio",{attrs:{label:5}},[e._v("File")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-col",[n("el-form",{attrs:{model:e.formServer}},[n("el-form-item",{attrs:{label:"Add params:"}},[n("div",[n("i",{staticClass:"el-icon-plus",staticStyle:{cursor:"pointer"},on:{click:function(t){e.onAddHeader("addheader")}}}),e._v(" "),n("br")]),e._v(" "),e._l(e.formServer.header,function(t,a){return n("div",{key:a,staticStyle:{"margin-bottom":"10px"}},[n("el-input",{staticStyle:{width:"200px","margin-right":"20px"},attrs:{placeholder:"key"},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"item.key"}}),e._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"value"},model:{value:t.value,callback:function(e){t.value="string"==typeof e?e.trim():e},expression:"item.value"}}),e._v(" "),n("i",{staticClass:"el-icon-delete",on:{click:function(t){e.onRemoveHeader("delheader",a)}}})],1)})],2)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-col",[n("el-form",{attrs:{model:e.allApi}},[[n("i",{staticStyle:{"font-weight":"bold",color:"#20a0ff"}},[e._v(e._s(e.methods.login.description))]),e._v(" "),n("el-form-item",{attrs:{label:"Add params:"}},[n("div",[n("i",{staticClass:"el-icon-plus",staticStyle:{cursor:"pointer"},on:{click:function(t){e.onAddHeader("addHeader")}}}),e._v(" "),n("el-button",{staticStyle:{"margin-left":"40%"},attrs:{type:"success",size:"small"},on:{click:e.sendRequest}},[e._v("Send")]),e._v(" "),n("br")],1),e._v(" "),e._l(e.methodParams,function(t,a){return n("div",{key:a,staticStyle:{"margin-bottom":"10px"}},[n("el-select",{attrs:{placeholder:"type"},model:{value:t.select,callback:function(e){t.select=e},expression:"item.select"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"key"},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"item.key"}}),e._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"value"},model:{value:t.value,callback:function(e){t.value="string"==typeof e?e.trim():e},expression:"item.value"}}),e._v(" "),n("i",{staticClass:"el-icon-delete",on:{click:function(t){e.onRemoveHeader("delHeader",a)}}})],1)})],2)]],2)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-collapse",{attrs:{accordion:""},on:{change:e.setapiroute}},e._l(e.allKey,function(t){return n("el-collapse-item",{key:!1},[n("template",{slot:"title"},[e._v("\n        "+e._s(t)+"\n      ")]),e._v(" "),n("api-page")],2)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"Authorization",name:"first"}},[n("div",[n("span",[n("span",{staticStyle:{margin:"50px"}},[e._v("Type")]),e._v(" "),n("auth-page",{staticStyle:{width:"40%"}})],1)])]),e._v(" "),n("el-tab-pane",{attrs:{label:"Headers",name:"second"}},[n("header-page")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"Body",name:"third"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticStyle:{margin:"5px"}},[n("body-page")],1),e._v(" "),n("div",{staticStyle:{width:"100%",height:"100%"}},[n("resquest-area")],1)])]),e._v(" "),n("el-tab-pane",{attrs:{label:"Get API",name:"fouth"}},[n("el-button",{staticStyle:{margin:"5px"},attrs:{type:"info",size:"small"},on:{click:e.getAllApi}},[e._v("get all api")]),e._v(" "),n("get-api")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-input",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"textarea",autosize:{minRows:29,maxRows:100},placeholder:""},model:{value:e.response,callback:function(t){e.response=t},expression:"response"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{width:"50%",float:"left"}},[n("h2",{staticClass:"tittle",domProps:{textContent:e._s(e.title)}}),e._v(" "),n("header-a"),e._v(" "),n("br"),e._v(" "),n("tab-page")],1),e._v(" "),n("div",{staticStyle:{float:"left",margin:"5% 5% 0% 5%",width:"40%",height:"100%"}},[n("i",{staticStyle:{"font-size":"large"}},[e._v("Response")]),e._v(" "),n("respon-area")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-input",{staticStyle:{width:"100%",height:"80%"},attrs:{type:"textarea",autosize:{minRows:25,maxRows:100},placeholder:"Request body"},model:{value:e.textarea1,callback:function(t){e.textarea1=t},expression:"textarea1"}})],1)},staticRenderFns:[]}}]),[90]);
//# sourceMappingURL=app.d5ee9cd385ded4bda361.js.map