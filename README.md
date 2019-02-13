# vue-tinymce

## 示例

[点击预览](https://panhezeng.github.io/vue-tinymce/)

示例代码目录 /example

## 说明

本打算将原项目个人封装的TinyMCE Vue组件替换为官方TinyMCE Vue组件，尝试后发现官方组件严重TinyMCE Cloud，否则不好用。
本组件默认配置的toolbar属性值，依据微信公众号后台富文本编辑器布局配置。
原项目中的TinyMCE Vue组件几乎做得和微信公众号后台富文本编辑器一样，图片音频视频资源管理是单独侧边栏，实现核心是TinyMCE editor的insertContent方法，并且依赖element ui。
本组件只是简单封装，没有多余功能，默认语言中文language: 'zh_CN'。

使用本组件的优势，相对于官方TinyMCE Vue组件来说：
不用在项目中import TinyMCE的模板和插件js，通过https://cdn.jsdelivr.net/npm/tinymce@~5实现了同步版本资源，
默认中文配置，
自动销毁等。

setup和init_instance_callback的区别，虽然两个API都能获得TinyMCE实例，但前者是实例刚创建时的回调，后者是实例初始化完成时的回调，init_instance_callback获得的实例才能使用setContent等API。
本组件使用的TinyMCE是~5版本，TinyMCE依赖的相关js和css等也是~5版本，没有太复杂的东西，放心使用，如果有需求，可以fork修改。
修改了output方式，通过require或window方式使用，不需要加.default
   
```vue
<script>
  export default {
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
  }
</script>  
```

## 用法

### internal vue 方式

`npm i vue tinymce @panhezeng/vue-tinymce -S`

#### 异步
```vue
<script>
  const VueTinymce = () => import('@panhezeng/vue-tinymce')
 
   export default {
     components: {VueTinymce}
   }
</script>
```

#### 同步
```vue
<script>
    import Vue from 'vue'
    import VueTinymce from '@panhezeng/vue-tinymce'

    Vue.use(VueTinymce)
</script>
```

### external vue 方式

```html
<script src="https://cdn.jsdelivr.net/npm/vue@~2/dist/vue.min.js"></script>
```

`npm i tinymce @panhezeng/vue-tinymce -S`

```javascript
// auto install
import '@panhezeng/vue-tinymce'
```
or 
```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~2/dist/vue.min.js,npm/tinymce@~5/tinymce.min.js,npm/@panhezeng/vue-tinymce@latest/dist/vue-tinymce.min.js"></script>
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
npm version patch && npm publish --access public

```

