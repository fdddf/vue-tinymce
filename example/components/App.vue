<template>
  <div id="app">
    <h1>VueTinymce example</h1>
    <button @click="show=!show">点击加载移除编辑器，测试初始化和销毁</button>
    <vue-tinymce :content.sync="content" v-if="show"/>
    <h2>output</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
//  const VueTinymce = () => import('../../dist/vue-tinymce.min')
    const VueTinymce = () => import('../../src')

  export default {
    name: 'App',
    components: {VueTinymce},
    data () {
      return {
        content: 'init content',
        show: true,
      }
    },
    created () {},
  }
</script>
<style>
</style>
