!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=Vue},function(t,e,n){var i;window,t.exports=(i=n(2),function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=i},function(t,e,n){"use strict";n.r(e),n.d(e,"VueTinymce",(function(){return o}));var i,o=n(2).default;function r(t){i?console.warn("[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."):(i=t).component(o.name,o)}o.install=r,"undefined"!=typeof window&&window.Vue&&r(window.Vue)},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-tinymce-comp"},[e("textarea",{ref:"editor"})])};i._withStripped=!0;var o=n(0),r=n.n(o),a=function(t,e,n,i,o,r,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=[],u._compiled=!0),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}({name:"VueTinymce",props:{content:{type:String,required:!0},updateEvent:{type:String,default:"beforeaddundo undo redo keyup"},url:{type:String,default:"https://cdn.jsdelivr.net/npm/tinymce@~5"},config:{type:Object,default:function(){return{}}}},data:function(){return{editor:null,tinymceConfig:{allow_script_urls:!0,remove_script_host:!1,convert_urls:!1,relative_urls:!1,branding:!1,menubar:!1,indentation:"2px",fontsize_formats:"12px 14px 16px 18px 20px 24px",external_plugins:{},plugins:"code hr link advlist lists paste table image imagetools media preview",contextmenu:"selectall copy paste inserttable",toolbar1:"code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",toolbar2:"formatselect | bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"}}},watch:{config:{handler:function(t){if(Object.assign(this.tinymceConfig,t),this.tinymceConfig.language||(this.tinymceConfig.language="zh_CN"),"[object String]"===Object.prototype.toString.call(this.tinymceConfig.language)&&"en_US"!==this.tinymceConfig.language&&"[object String]"!==Object.prototype.toString.call(this.tinymceConfig.language_url)){var e="https://cdn.jsdelivr.net/npm/";/unpkg.com/.test(this.url)&&(e="https://unpkg.com/"),this.tinymceConfig.language_url="".concat(e,"@panhezeng/vue-tinymce@latest/src/langs/").concat(this.tinymceConfig.language,".min.js")}"zh_CN"===this.tinymceConfig.language&&"[object String]"!==Object.prototype.toString.call(this.tinymceConfig.font_formats)&&(this.tinymceConfig.font_formats='微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats'),"en_US"===this.tinymceConfig.language&&(delete this.tinymceConfig.language,delete this.tinymceConfig.language_url),this.init()},immediate:!0,deep:!0},content:{handler:"setContent",immediate:!0}},beforeDestroy:function(){this.destroy()},created:function(){r.a.EditorManager.baseURL=this.url},mounted:function(){this.$nextTick((function(){this.editor||this.init()}))},methods:{init:function(){var t=this,e=this.$refs.editor;e&&(this.destroy(),this.tinymceConfig.target=e,this.tinymceConfig.init_instance_callback=function(e){t&&t.$refs.editor&&(/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(t.config.init_instance_callback))&&t.config.init_instance_callback(e),t.editor=e,t.setContent(),e.on(t.updateEvent,r.a.util.Delay.debounce((function(){t.contentChange()}),300)))},r.a.init(this.tinymceConfig))},destroy:function(){try{this&&this.$refs.editor&&this.editor&&(r.a.remove(this.editor),this.editor.remove(),this.editor.destroy(),this.editor=null)}catch(t){return}},setContent:function(){this.$nextTick((function(){this&&this.$refs.editor&&this.editor&&this.editor.getContent()!==this.content&&this.editor.setContent(this.content)}))},contentChange:function(){this.$nextTick((function(){if(this&&this.$refs.editor&&this.editor){var t=this.editor.getContent();this.$emit("update:content",t),this.$emit("content-change",t)}}))}}},i);a.options.__file="src/VueTinymce.vue",e.default=a.exports}]).VueTinymce)},function(t,e){t.exports=tinymce},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("VueTinymce example")]),t._v(" "),n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("\n    点击加载移除编辑器，测试初始化和销毁：：："+t._s(t.show?"销毁":"加载")+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.switchLanguage}},[t._v("点击切换语言，测试更新config")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.show?n("vue-tinymce",{attrs:{content:t.content,config:t.config},on:{"update:content":function(e){t.content=e}}}):t._e(),t._v(" "),n("vue-tinymce",{attrs:{content:t.content,config:t.config,url:"https://unpkg.com/tinymce@~5"},on:{"update:content":function(e){t.content=e}}}),t._v(" "),n("h2",[t._v("output")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}})],1)};r._withStripped=!0,n(1);var a=function(t,e,n,i,o,r,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}({name:"App",data:function(){return{content:"init content",show:!0,locale:""}},computed:{config:function(){var t={};return"en"===this.locale&&(t={language:"en_US"}),t}},created:function(){},methods:{switchLanguage:function(){this.locale?this.locale="":this.locale="en"}}},r,[],!1,null,null,null);a.options.__file="example/components/App.vue";var c=a.exports;new o.a({el:"#app",render:function(t){return t(c)}})}]);