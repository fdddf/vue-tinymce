<template>
  <div class="vue-tinymce-comp">
    <textarea ref="editor"></textarea>
  </div>
</template>
<script>
import tinymce from "tinymce";

export default {
  name: "VueTinymce",
  props: {
    // 父组件通过:content.sync同步富文本编辑器内容
    content: {
      type: String,
      required: true
    },
    // 触发content同步更新的tinymce Editor Events，其他https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup"
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/tinymce@~5"
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      editor: null
    };
  },
  watch: {
    config: {
      handler: "init",
      immediate: true,
      deep: true
    },
    content: {
      handler: "setContent",
      immediate: true
    }
  },
  beforeDestroy() {
    this.destroy();
  },
  created() {
    // 从指定url加载tinymce依赖文件
    tinymce.EditorManager.baseURL = this.url;
  },
  methods: {
    init() {
      this.destroy();

      const tinymceConfig = {
        allow_script_urls: true,
        remove_script_host: false,
        convert_urls: false,
        relative_urls: false,
        // document_base_url: this.url,
        // theme_url: `${this.url}/themes/silver/theme.min.js`,
        // skin_url: `${this.url}/skins/ui/oxide`,
        branding: false,
        menubar: false,
        fontsize_formats: "12px 13px 14px 15px 16px 18px 20px 24px",
        external_plugins: {},
        plugins:
          "code hr link advlist lists paste table image imagetools media preview",
        contextmenu: "selectall copy paste inserttable",
        toolbar1:
          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",
        toolbar2:
          "bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"
      };

      // 用外部配置覆盖内部默认配置
      Object.assign(tinymceConfig, this.config);

      // ============================================================================
      // 如果语言相关为默认英语，则修改默认配置为中文

      const zhCN = "zh_CN";
      const enUS = "en_US";
      // 如果语言没有配置，则默认配置为中文
      if (!tinymceConfig.language) {
        tinymceConfig.language = zhCN;
      }
      // 如果有配置语言，并且不是"en_US"，并且没有配置language_url，则使用本项目的语言包
      if (
        Object.prototype.toString.call(tinymceConfig.language) ===
          "[object String]" &&
        tinymceConfig.language !== enUS &&
        Object.prototype.toString.call(tinymceConfig.language_url) !==
          "[object String]"
      ) {
        let langCDN = "https://cdn.jsdelivr.net/npm/";
        if (/unpkg.com/.test(this.url)) {
          langCDN = "https://unpkg.com/";
        }
        tinymceConfig.language_url = `${langCDN}@panhezeng/vue-tinymce@latest/src/langs/${
          tinymceConfig.language
        }.min.js`;
      }

      // 如果语言为中文，并且没有配置字体，则使用内部配置
      if (
        tinymceConfig.language === zhCN &&
        Object.prototype.toString.call(tinymceConfig.font_formats) !==
          "[object String]"
      ) {
        tinymceConfig.font_formats =
          '微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats';
        // tinymceConfig.content_style =
        //   'body, td, pre {font-family:"微软雅黑", "苹方", "宋体", Verdana, Arial, Helvetica, sans-serif;}';
      }

      // 如果配置为默认英语，则删除语言相关配置节点
      if (tinymceConfig.language === enUS) {
        delete tinymceConfig.language;
        delete tinymceConfig.language_url;
      }

      // 把配置的plugins转换为external_plugins的形式，使用cdn
      // if (
      //   Object.prototype.toString.call(tinymceConfig.plugins) === "[object String]"
      // ) {
      //   const plugins = tinymceConfig.plugins.match(/([\d\w]+)/gm);
      //   if (Object.prototype.toString.call(plugins) === "[object Array]") {
      //     plugins.forEach(value => {
      //       tinymceConfig.external_plugins[value] = `${
      //         this.url
      //       }/plugins/${value}/plugin.min.js`;
      //     });
      //   }
      // }
      // delete tinymceConfig.plugins;

      this.$nextTick(() => {
        // 编辑器实例初始化
        const refEditor = this.$refs.editor;
        if (refEditor) {
          tinymceConfig.target = this.$refs.editor;
          tinymceConfig.init_instance_callback = editor => {
            if (this && this.$refs.editor) {
              if (
                Object.prototype.toString.call(
                  this.config.init_instance_callback
                ) === "[object Function]"
              ) {
                this.config.init_instance_callback(editor);
              }
              this.editor = editor;
              this.setContent();
              editor.on(
                this.updateEvent,
                tinymce.util.Delay.debounce(() => {
                  this.contentChange();
                }, 300)
              );
            }
          };
          tinymce.init(tinymceConfig);
        }
      });
    },
    destroy() {
      try {
        // 销毁
        if (this.editor) {
          this.editor.remove();
          this.editor.destroy();
          this.editor = null;
        }
      } catch (e) {}
    },
    setContent() {
      // 如果编辑器实例已经为真，并且编辑器内容和父组件传入的内容不一样
      if (this.editor && this.editor.getContent() !== this.content) {
        this.editor.setContent(this.content);
      }
    },
    contentChange() {
      // 同步到父组件
      if (this.editor) {
        const content = this.editor.getContent();
        this.$emit("update:content", content);
        this.$emit("content-change", content);
      }
    }
  }
};
</script>
