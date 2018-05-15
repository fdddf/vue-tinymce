<template>
  <div class="vue-tinymce-comp" :id="`vue-tinymce-${id}`">
    <textarea :name="`vue-tinymce-content-${id}`" ref="editor" v-model="contentClone"></textarea>
  </div>
</template>
<script>
  import tinymce from 'tinymce/tinymce'

  export default {
    name: 'VueTinymce',
    mixins: [],
    components: {},
    props: {
      // 当前页面该编辑器的唯一id，如果只有一个可以用默认值
      id: {
        type: String,
        default: '1',
      },
      // 父组件通过:content.sync同步富文本编辑器内容
      content: {
        type: String,
        required: true,
      },
      // 触发content同步更新的tinymce Editor Events，如果需要更即时的同步，可以使用Change
      // https://www.tinymce.com/docs/advanced/events/
      updateEvent: {
        type: String,
        default: 'MouseOut',
      },
      // tinymce依赖文件的cdn url
      url: {
        type: String,
        default: 'https://unpkg.com/tinymce@latest',
      },
      // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar3:''}"
      config: {
        type: Object,
        default () {
          return {}
        },
      },
    },
    data () {
      return {
        editor: null,
        contentClone: '',
        configClone: {},
      }
    },
    computed: {},
    watch: {
      content: {
        handler (val, oldVal) { this.setContent() },
        immediate: true,
      },
    },
    created () {
      // 合并配置，把传入的配置和默认配置合并
      this.configClone = Object.assign({
        branding: false,
        language: 'zh_CN',
        theme_url: `${this.url}/themes/modern/theme.js`,
        skin_url: `${this.url}/skins/lightgray`,
        menubar: false,
        fontsize_formats: '12px 13px 14px 15px 16px 18px 20px 24px',
        font_formats: '微软雅黑="微软雅黑";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Courier New=courier new,courier;Helvetica=helvetica;Symbol=symbol;Times New Roman=times new roman,times;Verdana=verdana,geneva;',
        external_plugins: {},
        plugins: 'code hr link textcolor colorpicker advlist lists contextmenu paste table image imagetools media preview',
        contextmenu: 'selectall copy paste inserttable',
        toolbar1: 'code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview',
        toolbar2: 'bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist',
        toolbar3: 'image media',
      }, this.config)

      // 如果language是默认zh_CN，则加载简体中文语言包
      if (!this.configClone.language_url && this.configClone.language === 'zh_CN') {
        require('./langs/zh_CN.js')
      }
      // 把配置的plugins转换为external_plugins的形式，使用unpgk cdn
      if (Object.prototype.toString.call(this.configClone.plugins) === '[object String]') {
        const plugins = this.configClone.plugins.match(/([\d\w]+)/gm)
        if (Object.prototype.toString.call(plugins) === '[object Array]') {
          plugins.forEach(value => {
            this.configClone.external_plugins[value] = `${this.url}/plugins/${value}/plugin.js`
          })
        }
      }
      this.configClone.plugins = ''
    },
    mounted () {
      this.$nextTick(() => {
        // 编辑器实例初始化
        this.configClone.target = this.$refs.editor
        this.configClone.setup = (editor) => {
          if (Object.prototype.toString.call(this.config.setup) === '[object Function]') {
            this.config.setup(editor)
          }
          this.editor = editor
          this.setContent(true)
          editor.on(this.updateEvent, this.contentChange)
        }
        tinymce.init(this.configClone)
      })
    },
    beforeDestroy () {
      // 销毁
      if (this.editor) {
        this.editor.destroy()
        this.editor = null
      }
    },
    methods: {
      setContent (force) {
        // 如果组件内容和父组件传入的内容不一样，或者强制设置内容
        if (this.contentClone !== this.content || force) {
          this.contentClone = this.content
          // 如果编辑器实例已经为真
          if (this.editor) {
            this.editor.setContent(this.contentClone)
          }
        }
      },
      contentChange (e) {
        // 同步到父组件
        this.contentClone = this.editor.getContent()
        this.$emit('update:content', this.contentClone)
      },
    },
  }
</script>
