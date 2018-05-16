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

    本来打算把原项目的自己封装的TinyMCE Vue组件换成官方的TinyMCE Vue组件，结果发现官方组件，如果不使用TinyMCE Cloud，并不比自己封装的好
    本组件的默认配置的toolbar相关主要是参考微信公众号的富文本编辑器的布局配置
    虽然原项目TinyMCE Vue组件几乎做得和微信公众号的富文本编辑器一样，图片音频视频资源管理是单独的侧边栏，实现的核心是TinyMCE editor的insertContent方法，并且依赖element ui
    但是本组件只是简单封装，默认语言中文language: 'zh_CN'
    
    使用本组件而不是使用官方TinyMCE Vue组件的优势
    不用自己import TinyMCE的插件js，通过https://unpkg.com/tinymce@latest实现了同步最新版资源
    本打算把TinyMCE依赖都通过import加载，但是import skins/lightgray无法正常加载其依赖的图片等资源，比如插入音频视频文件，无法显示Object.gif占位图，只能通过skin_url方式才正常显示
    本组件使用的TinyMCE是latest版本，TinyMCE依赖的相关js和css等也是latest版本，没有太复杂的东西，放心使用，如果觉得不好的地方，可以fork自行修改，非常简单
   
```vue
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
      // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
      config: {
        type: Object,
        default () {
          return {}
        },
      },
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
```

