# vue-tinymce

## 示例

[点击预览](https://panhezeng.github.io/vue-tinymce/)

示例代码目录 /example

## 说明

本打算将原项目个人封装的 TinyMCE Vue 组件替换为官方 TinyMCE Vue 组件，尝试后发现官方组件严重 TinyMCE Cloud，否则不好用。

本组件默认配置的 toolbar 属性值，依据微信公众号后台富文本编辑器布局配置。

本组件只是简单封装，没有多余功能，默认语言中文 language: 'zh_CN'。

使用本组件的优势，相对于官方 TinyMCE Vue 组件来说：不用在项目中 import TinyMCE 的模板和插件 js，通过https://cdn.jsdelivr.net/npm/tinymce@~5实现了同步版本资源，默认中文配置，自动销毁等。

setup 和 init_instance_callback 的区别，虽然两个 API 都能获得 TinyMCE 实例，但前者是实例刚创建时的回调，后者是实例初始化完成时的回调，init_instance_callback 获得的实例才能使用 setContent 等 API。

**现在本组件基于 TinyMCE ~5 版本，TinyMCE 依赖的 js 和 css 也是 ~5 版本，依赖已锁定为 tinymce ~5，不会出现 tinymce 大版本升级造成本组件无法运行的问题。本组件也没有太复杂的东西，放心使用，如果有需求，可以 fork 修改。**

**之前基于 TinyMCE ~4 版本的版本已经不能使用，请先`npm uninstall vue-tinymce tinymce`，重新 `npm install vue-tinymce tinymce`，并且清除浏览器缓存。**

修改了 output 方式，通过 require 或 window 方式使用，不需要加.default

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
  }
};
</script>
```

```javascript
// 默认语言 language zh_CN font_formats 中文相关字体
// 其他
defaultConfig = {
  allow_script_urls: true,
  remove_script_host: false,
  convert_urls: false,
  relative_urls: false,
  // document_base_url: this.url,
  // theme_url: `${this.url}/themes/silver/theme.min.js`,
  // skin_url: `${this.url}/skins/ui/oxide`,
  branding: false,
  menubar: false,
  indentation: "2px",
  fontsize_formats: "12px 14px 16px 18px 20px 24px",
  external_plugins: {
    "text-indent-outdent":
      "https://cdn.jsdelivr.net/npm/tinymce-plugin-text-indent-outdent@latest/dist/tinymce-plugin-text-indent-outdent/plugin.min.js"
  },
  plugins:
    "code hr link advlist lists paste table image imagetools media preview",
  contextmenu: "selectall copy paste inserttable",
  toolbar1:
    "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",
  toolbar2:
    "formatselect | bold italic underline strikethrough | forecolor backcolor | text-indent text-outdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"
};
```

## 用法

### internal vue 方式

`npm i vue tinymce @panhezeng/vue-tinymce -S`

#### 异步

```vue
<script>
const VueTinymce = () => import("@panhezeng/vue-tinymce");

export default {
  components: { VueTinymce }
};
</script>
```

#### 同步

```vue
<script>
import Vue from "vue";
import VueTinymce from "@panhezeng/vue-tinymce";

Vue.use(VueTinymce);
</script>
```

### external vue 方式

```html
<script src="https://cdn.jsdelivr.net/npm/vue@~2/dist/vue.min.js"></script>
```

`npm i tinymce @panhezeng/vue-tinymce -S`

```javascript
// auto install
import "@panhezeng/vue-tinymce";
```

or

```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~2/dist/vue.min.js,npm/tinymce@~5/tinymce.min.js,npm/@panhezeng/vue-tinymce@latest/dist/vue-tinymce.min.js"></script>
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
