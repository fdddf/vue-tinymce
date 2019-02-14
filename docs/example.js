!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 3));
})([
  function(e, t) {
    e.exports = Vue;
  },
  function(e, t, n) {
    var o;
    window,
      (e.exports = ((o = n(2)),
      (function(e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var r = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function(e, t, o) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: o });
          }),
          (n.r = function(e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
              (n.r(o),
              Object.defineProperty(o, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                n.d(
                  o,
                  r,
                  function(t) {
                    return e[t];
                  }.bind(null, r)
                );
            return o;
          }),
          (n.n = function(e) {
            var t =
              e && e.__esModule
                ? function() {
                    return e.default;
                  }
                : function() {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 1))
        );
      })([
        function(e, t) {
          e.exports = o;
        },
        function(e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, "VueTinymce", function() {
              return r;
            });
          var o,
            r = n(2).default;
          function i(e) {
            o
              ? console.warn(
                  "[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."
                )
              : (o = e).component(r.name, r);
          }
          (r.install = i),
            "undefined" != typeof window && window.Vue && i(window.Vue);
        },
        function(e, t, n) {
          "use strict";
          n.r(t);
          var o = function() {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("div", { staticClass: "vue-tinymce-comp" }, [
              t("textarea", { ref: "editor" })
            ]);
          };
          o._withStripped = !0;
          var r = n(0),
            i = n.n(r),
            a = (function(e, t, n, o, r, i, a, c) {
              var u,
                l = "function" == typeof e ? e.options : e;
              if (
                (t &&
                  ((l.render = t),
                  (l.staticRenderFns = []),
                  (l._compiled = !0)),
                u)
              )
                if (l.functional) {
                  l._injectStyles = u;
                  var s = l.render;
                  l.render = function(e, t) {
                    return u.call(t), s(e, t);
                  };
                } else {
                  var d = l.beforeCreate;
                  l.beforeCreate = d ? [].concat(d, u) : [u];
                }
              return { exports: e, options: l };
            })(
              {
                name: "VueTinymce",
                props: {
                  content: { type: String, required: !0 },
                  updateEvent: {
                    type: String,
                    default: "beforeaddundo undo redo keyup"
                  },
                  url: {
                    type: String,
                    default: "https://cdn.jsdelivr.net/npm/tinymce@~5"
                  },
                  config: {
                    type: Object,
                    default: function() {
                      return {};
                    }
                  }
                },
                data: function() {
                  return { editor: null };
                },
                watch: {
                  config: { handler: "init", immediate: !0, deep: !0 },
                  content: { handler: "setContent", immediate: !0 }
                },
                beforeDestroy: function() {
                  this.destroy();
                },
                methods: {
                  init: function() {
                    var e = this;
                    this.destroy();
                    var t = {
                      allow_script_urls: !0,
                      remove_script_host: !1,
                      convert_urls: !1,
                      relative_urls: !1,
                      branding: !1,
                      menubar: !1,
                      fontsize_formats:
                        "12px 13px 14px 15px 16px 18px 20px 24px",
                      external_plugins: {},
                      plugins:
                        "code hr link advlist lists paste table image imagetools media preview",
                      contextmenu: "selectall copy paste inserttable",
                      toolbar1:
                        "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",
                      toolbar2:
                        "bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"
                    };
                    Object.assign(t, this.config),
                      t.language || (t.language = "zh_CN"),
                      "[object String]" ===
                        Object.prototype.toString.call(t.language) &&
                        "en_US" !== t.language &&
                        "[object String]" !==
                          Object.prototype.toString.call(t.language_url) &&
                        (t.language_url = "https://cdn.jsdelivr.net/npm/@panhezeng/vue-tinymce@latest/src/langs/".concat(
                          t.language,
                          ".min.js"
                        )),
                      "zh_CN" === t.language &&
                        "[object String]" !==
                          Object.prototype.toString.call(t.font_formats) &&
                        (t.font_formats =
                          '微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats'),
                      "en_US" === t.language &&
                        (delete t.language, delete t.language_url),
                      (i.a.EditorManager.baseURL = this.url),
                      this.$nextTick(function() {
                        (t.target = e.$refs.editor),
                          (t.init_instance_callback = function(t) {
                            "[object Function]" ===
                              Object.prototype.toString.call(
                                e.config.init_instance_callback
                              ) && e.config.init_instance_callback(t),
                              (e.editor = t),
                              e.setContent(),
                              t.on(
                                e.updateEvent,
                                i.a.util.Delay.debounce(function() {
                                  e.contentChange();
                                }, 300)
                              );
                          }),
                          i.a.init(t);
                      });
                  },
                  destroy: function() {
                    try {
                      this.editor &&
                        (this.editor.remove(),
                        this.editor.destroy(),
                        (this.editor = null));
                    } catch (e) {}
                  },
                  setContent: function() {
                    this.editor &&
                      this.editor.getContent() !== this.content &&
                      this.editor.setContent(this.content);
                  },
                  contentChange: function() {
                    if (this.editor) {
                      var e = this.editor.getContent();
                      this.$emit("update:content", e),
                        this.$emit("content-change", e);
                    }
                  }
                }
              },
              o
            );
          (a.options.__file = "src/VueTinymce.vue"), (t.default = a.exports);
        }
      ]).VueTinymce));
  },
  function(e, t) {
    e.exports = tinymce;
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
      r = n.n(o),
      i = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("h1", [e._v("VueTinymce example")]),
            e._v(" "),
            n(
              "button",
              {
                on: {
                  click: function(t) {
                    e.show = !e.show;
                  }
                }
              },
              [
                e._v(
                  "\n    点击加载移除编辑器，测试初始化和销毁：：：" +
                    e._s(e.show ? "销毁" : "加载") +
                    "\n  "
                )
              ]
            ),
            e._v(" "),
            n("br"),
            e._v(" "),
            n("br"),
            e._v(" "),
            n("button", { on: { click: e.switchLanguage } }, [
              e._v("点击切换语言，测试更新config")
            ]),
            e._v(" "),
            n("br"),
            e._v(" "),
            n("br"),
            e._v(" "),
            e.show
              ? n("vue-tinymce", {
                  attrs: { content: e.content, config: e.config },
                  on: {
                    "update:content": function(t) {
                      e.content = t;
                    }
                  }
                })
              : e._e(),
            e._v(" "),
            n("vue-tinymce", {
              attrs: { content: e.content, config: e.config },
              on: {
                "update:content": function(t) {
                  e.content = t;
                }
              }
            }),
            e._v(" "),
            n("h2", [e._v("output")]),
            e._v(" "),
            n("div", { domProps: { innerHTML: e._s(e.content) } })
          ],
          1
        );
      };
    (i._withStripped = !0), n(1);
    var a = (function(e, t, n, o, r, i, a, c) {
      var u,
        l = "function" == typeof e ? e.options : e;
      if (
        (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
        o && (l.functional = !0),
        i && (l._scopeId = "data-v-" + i),
        a
          ? ((u = function(e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                r && r.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(a);
            }),
            (l._ssrRegister = u))
          : r &&
            (u = c
              ? function() {
                  r.call(this, this.$root.$options.shadowRoot);
                }
              : r),
        u)
      )
        if (l.functional) {
          l._injectStyles = u;
          var s = l.render;
          l.render = function(e, t) {
            return u.call(t), s(e, t);
          };
        } else {
          var d = l.beforeCreate;
          l.beforeCreate = d ? [].concat(d, u) : [u];
        }
      return { exports: e, options: l };
    })(
      {
        name: "App",
        data: function() {
          return { content: "init content", show: !0, locale: "" };
        },
        computed: {
          config: function() {
            var e = {};
            return "en" === this.locale && (e = { language: "en_US" }), e;
          }
        },
        created: function() {},
        methods: {
          switchLanguage: function() {
            this.locale ? (this.locale = "") : (this.locale = "en");
          }
        }
      },
      i,
      [],
      !1,
      null,
      null,
      null
    );
    a.options.__file = "example/components/App.vue";
    var c = a.exports;
    new r.a({
      el: "#app",
      render: function(e) {
        return e(c);
      }
    });
  }
]);
