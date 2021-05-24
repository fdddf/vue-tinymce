!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=tinymce},function(t,e){t.exports=Vue},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("VueTinymce example")]),t._v(" "),n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("\n    点击加载移除编辑器，测试初始化和销毁：：："+t._s(t.show?"销毁":"加载")+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.switchLanguage}},[t._v("点击切换语言，测试更新config")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.show?n("vue-tinymce",{attrs:{content:t.content,config:t.config},on:{"update:content":function(e){t.content=e}}}):t._e(),t._v(" "),n("h2",[t._v("output")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}})],1)};a._withStripped=!0;var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-tinymce-comp"},[e("textarea",{ref:"editor"})])};r._withStripped=!0;var s=n(0),c=n.n(s);function l(t,e,n,i,o,a,r,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}var u=l({name:"VueTinymce",props:{content:{type:String,required:!0},updateEvent:{type:String,default:"beforeaddundo undo redo keyup focusout"},url:{type:String,default:"https://cdn.jsdelivr.net/npm/tinymce@%5E5.0.0"},config:{type:Object,default:function(){return{}}}},data:function(){return{editor:null,tinymceConfig:{allow_script_urls:!0,remove_script_host:!1,convert_urls:!1,relative_urls:!1,branding:!1,indentation:"2px",fontsize_formats:"12px 14px 16px 18px 20px 24px",plugins:"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",contextmenu:"link image imagetools table",image_advtab:!0,menubar:"file edit view insert format tools table help",toolbar1:"code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template",toolbar2:"formatselect | bold italic underline strikethrough | forecolor backcolor | textindent textoutdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | anchor codesample | ltr rtl"}}},watch:{config:{handler:function(t){Object.assign(this.tinymceConfig,t);if("en_US"===this.tinymceConfig.language)delete this.tinymceConfig.language,delete this.tinymceConfig.language_url;else{if(this.tinymceConfig.language||(this.tinymceConfig.language="zh_CN"),!(/^\[object String\]$/.test(Object.prototype.toString.call(this.tinymceConfig.language_url))&&this.tinymceConfig.language_url||"zh_CN"!==this.tinymceConfig.language)){var e="https://cdn.jsdelivr.net/npm/";/unpkg.com/.test(this.url)&&(e="https://unpkg.com/"),this.tinymceConfig.language_url="".concat(e,"@panhezeng/vue-tinymce@latest/dist/langs/").concat(this.tinymceConfig.language,".js")}/^\[object String\]$/.test(Object.prototype.toString.call(this.tinymceConfig.font_formats))&&this.tinymceConfig.font_formats||"zh_CN"!==this.tinymceConfig.language||(this.tinymceConfig.font_formats="Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",window.navigator.platform.indexOf("Win")>-1?this.tinymceConfig.font_formats="微软雅黑=Microsoft Yahei;黑体=SimHei;宋体=SimSun;楷体=KaiTi;隶书=STLiti;"+this.tinymceConfig.font_formats:window.navigator.platform.indexOf("Mac")>-1?this.tinymceConfig.font_formats="苹方=PingFang SC;黑体=STHeiti;宋体=STSong;楷体=STKaiti;隶书=STLiti;"+this.tinymceConfig.font_formats:window.navigator.platform.indexOf("Linux")>-1&&(this.tinymceConfig.font_formats="黑体=Source Han Sans SC;宋体=Source Han Serif SC;"+this.tinymceConfig.font_formats))}if(/^\[object Object\]$/.test(Object.prototype.toString.call(this.tinymceConfig.external_plugins))||(this.tinymceConfig.external_plugins={}),!this.tinymceConfig.external_plugins.textindentoutdent)for(var n=Object.keys(this.tinymceConfig),i=n.length-1;i>=0;i--){var o=n[i];if(-1!==o.indexOf("toolbar")&&/\btext(indent|outdent)\b/g.test(this.tinymceConfig[o])){"zh_CN"===this.tinymceConfig.language&&(this.tinymceConfig.external_plugins.textindentoutdentzhcn="https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js"),this.tinymceConfig.external_plugins.textindentoutdent="https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js";break}}this.$nextTick((function(){this.init()}))},immediate:!0,deep:!0},content:{handler:"setContent",immediate:!0}},beforeDestroy:function(){this.destroy()},created:function(){c.a.EditorManager.baseURL=this.url},mounted:function(){this.$nextTick((function(){this.editor||this.init()}))},methods:{init:function(){this.$nextTick((function(){var t=this,e=this.$refs.editor;e&&(this.destroy(),this.tinymceConfig.target=e,this.tinymceConfig.init_instance_callback=function(e){t&&t.$refs.editor&&(/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(t.config.init_instance_callback))&&t.config.init_instance_callback(e),t.editor=e,t.setContent(),e.on(t.updateEvent,c.a.util.Delay.debounce((function(){t.contentChange()}),300)))},c.a.init(this.tinymceConfig))}))},destroy:function(){try{this&&this.$refs.editor&&this.editor&&(this.editor.plugins.autosave&&this.editor.plugins.autosave.removeDraft(),c.a.PluginManager.remove("autosave"),this.editor.remove(),this.editor.destroy(),this.editor=null)}catch(t){return}},setContent:function(){this.$nextTick((function(){this&&this.$refs.editor&&this.editor&&this.editor.getContent()!==this.content&&this.editor.setContent(this.content)}))},contentChange:function(){this.$nextTick((function(){if(this&&this.$refs.editor&&this.editor){var t=this.editor.getContent();this.$emit("update:content",t),this.$emit("content-change",t)}}))}}},r,[],!1,null,null,null);u.options.__file="src/VueTinymce.vue";var f,d=u.exports;function g(t){f?console.warn("[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."):(f=t).component(d.name,d)}d.install=g,"undefined"!=typeof window&&window.Vue&&g(window.Vue);var m=l({name:"App",components:{VueTinymce:d},data:function(){return{content:"init content",show:!0,locale:""}},computed:{config:function(){var t={};return"en"===this.locale&&(t={language:"en_US"}),t}},created:function(){},methods:{switchLanguage:function(){this.locale?this.locale="":this.locale="en"}}},a,[],!1,null,null,null);m.options.__file="src/components/App.vue";var h=m.exports;new o.a({el:"#app",render:function(t){return t(h)}})}]);