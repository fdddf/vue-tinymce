# vue-tinymce

[示例](https://panhezeng.github.io/vue-tinymce/)

## use

`npm i @panhezeng/vue-tinymce -S`

```vue
<script>
  const VueTinymce = () => import('@panhezeng/vue-tinymce')
 
   export default {
     name: 'App',
     components: {VueTinymce},
     data () {return {content: ''}},
   }
</script>
```



## 说明

    本打算将原项目个人封装的TinyMCE Vue组件替换为官方TinyMCE Vue组件，尝试后发现官方组件严重TinyMCE Cloud，否则不好用。
    本组件默认配置的toolbar属性值，依据微信公众号后台富文本编辑器布局配置。
    原项目中的TinyMCE Vue组件几乎做得和微信公众号后台富文本编辑器一样，图片音频视频资源管理是单独侧边栏，实现核心是TinyMCE editor的insertContent方法，并且依赖element ui。
    本组件只是简单封装，没有多余功能，默认语言中文language: 'zh_CN'。
    
    使用本组件的优势，相对于官方TinyMCE Vue组件来说：
    不用在项目中import TinyMCE的模板和插件js，通过https://cdn.jsdelivr.net/npm/tinymce@latest实现了同步latest版本资源，
    默认中文配置，
    自动销毁等。
    
    尝试了通过import加载TinyMCE依赖，但是发现import skins/lightgray无法正常加载其依赖的图片等资源，比如插入音频视频文件，无法显示Object.gif占位图，只能通过skin_url方式才正常显示。
    setup和init_instance_callback的区别，虽然两个API都能获得TinyMCE实例，但前者是实例刚创建时的回调，后者是实例初始化完成时的回调，init_instance_callback获得的实例才能使用setContent等API。
    本组件使用的TinyMCE是latest版本，TinyMCE依赖的相关js和css等也是latest版本，没有太复杂的东西，放心使用，如果有需求，可以fork修改。
   
```vue
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
```

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm version patch
npm publish --access public

```

