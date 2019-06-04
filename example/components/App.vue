<template>
  <div id="app">
    <h1>VueTinymce example</h1>
    <button @click="show = !show">
      点击加载移除编辑器，测试初始化和销毁：：：{{ show ? "销毁" : "加载" }}
    </button>
    <br />
    <br />
    <button @click="switchLanguage">点击切换语言，测试更新config</button>
    <br />
    <br />
    <vue-tinymce :content.sync="content" :config="config" v-if="show" />
    <vue-tinymce
      :content.sync="content"
      :config="config"
      url="https://unpkg.com/tinymce@~5"
    />
    <h2>output</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
require("../../dist/vue-tinymce.min");
// require("../../src");
//    import Vue from 'vue'
//    import VueTinymce from '../../dist/vue-tinymce.min'
//
//    Vue.use(VueTinymce)

//  const VueTinymce = () => import('../../dist/vue-tinymce.min')

export default {
  name: "App",
  //    components: {VueTinymce},
  data() {
    return {
      content: "init content",
      show: true,
      locale: ""
    };
  },
  computed: {
    config() {
      let language = {};
      if (this.locale === "en") {
        language = { language: "en_US" };
      }
      return language;
    }
  },
  created() {},
  methods: {
    switchLanguage() {
      if (this.locale) {
        this.locale = "";
      } else {
        this.locale = "en";
      }
    }
  }
};
</script>
<style></style>
