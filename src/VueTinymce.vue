<template>
  <div class="vue-tinymce-comp" :id="`vue-tinymce-${id}`">
    <textarea :name="`vue-tinymce-content-${id}`" ref="editor"></textarea>
  </div>
</template>
<script>
  import tinymce from 'tinymce'

  export default {
    name: 'VueTinymce',
    mixins: [],
    components: {},
    props: {
      // 当前页面该编辑器的唯一id，如果只有一个可以用默认值
      id: {
        type: String,
        default: '1'
      },
      // 父组件通过:content.sync同步富文本编辑器内容
      content: {
        type: String,
        required: true
      },
      // 触发content同步更新的tinymce Editor Events，如要更即时的同步，可以使用Change Event
      // https://www.tinymce.com/docs/advanced/events/
      updateEvent: {
        type: String,
        default: 'MouseOut'
      },
      // tinymce依赖文件的cdn url
      url: {
        type: String,
        default: 'https://cdn.jsdelivr.net/npm/tinymce@latest'
      },
      // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
      config: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        editor: null
      }
    },
    computed: {},
    watch: {
      config: {
        handler: 'init',
        immediate: true,
        deep: true
      },
      content: {
        handler: 'setContent',
        immediate: true
      }
    },
    created () {},
    mounted () {},
    beforeDestroy () {
//      debugger
      this.destroy()
    },
    methods: {
      init () {
        this.destroy()

        let config = {}

        if (Object.prototype.toString.call(this.config) === '[object Object]' && Object.keys(this.config).length) {
          config = Object.assign(config, this.config)
        }

        const zhCN = 'zh_CN'

        // 如果language不等于false，才设置默认值
        if (config.language !== false) {
          if (Object.prototype.toString.call(config.language) !== '[object String]') {
            config.language = zhCN
          }
          if (Object.prototype.toString.call(config.language_url) !== '[object String]') {
            config.language_url = `https://cdn.jsdelivr.net/npm/@panhezeng/vue-tinymce@latest/src/langs/${config.language}.min.js`
          }
        }

        const extend = {
          font_formats: 'Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Courier New=courier new,courier;Helvetica=helvetica;Symbol=symbol;Times New Roman=times new roman,times;Verdana=verdana,geneva;'
        }

        if (config.language === zhCN) {
          extend.font_formats = '微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";' + extend.font_formats
          extend.content_style = 'body, td, pre {font-family:"微软雅黑", "苹方", "宋体", Verdana, Arial, Helvetica, sans-serif;}'
        }

        // 合并配置，把传入的配置和默认配置合并
        config = Object.assign({
          convert_urls: false,
          branding: false,
          theme_url: `${this.url}/themes/modern/theme.min.js`,
          skin_url: `${this.url}/skins/lightgray`,
          menubar: false,
          fontsize_formats: '12px 13px 14px 15px 16px 18px 20px 24px',
          external_plugins: {},
          plugins: 'code hr link textcolor colorpicker advlist lists contextmenu paste table image imagetools media preview',
          contextmenu: 'selectall copy paste inserttable',
          toolbar1: 'code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media',
          toolbar2: 'bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist'
        }, extend, config)

        // 把配置的plugins转换为external_plugins的形式，使用cdn
        if (Object.prototype.toString.call(config.plugins) === '[object String]') {
          const plugins = config.plugins.match(/([\d\w]+)/gm)
          if (Object.prototype.toString.call(plugins) === '[object Array]') {
            plugins.forEach(value => {
              config.external_plugins[value] = `${this.url}/plugins/${value}/plugin.min.js`
            })
          }
        }
        delete config.plugins

        this.$nextTick(() => {
          // 编辑器实例初始化
          config.target = this.$refs.editor
          config.init_instance_callback = editor => {
            if (Object.prototype.toString.call(this.config.init_instance_callback) === '[object Function]') {
              this.config.init_instance_callback(editor)
            }
            this.editor = editor
            this.setContent()
            editor.on(this.updateEvent, this.contentChange)
          }
          tinymce.init(config)
        })
      },
      destroy () {
        try {
          // 销毁
          if (this.editor) {
            this.editor.destroy()
            this.editor = null
          }
          tinymce.remove()
        } catch (e) {

        }

      },
      setContent () {
        // 如果编辑器实例已经为真，并且编辑器内容和父组件传入的内容不一样
        if (this.editor && this.editor.getContent() !== this.content) {
          this.editor.setContent(this.content)
        }
      },
      contentChange (e) {
        // 同步到父组件
        if (this.editor) {
          this.$emit('update:content', this.editor.getContent())
        }
      }
    }
  }
</script>
