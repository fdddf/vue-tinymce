<template>
  <div id="app">
    <h1>VueTinymce example</h1>
    <vue-tinymce :content.sync="content"/>
    <h2>output</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
  const VueTinymce = () => import('../../dist/vue-tinymce.min')

  export default {
    name: 'App',
    components: {VueTinymce},
    data () {
      return {
        content: '',
      }
    },
    created () {

    },
  }
</script>
<style>
</style>
