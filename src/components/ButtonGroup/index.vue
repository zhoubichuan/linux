<template>
  <div :class="{'button-group':justify==='center'}">
    <el-row type="flex" class="row-bg" :justify="justify">
      <el-col><slot></slot></el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name: 'ButtonGroup',
  props: {
    justify: {
      type: String,
      default: 'center'
    }
  },
  data () {
      return {
        addModalFlag: false
      }
  },
  install (Vue) {
    Vue.component('ButtonGroup', this)
  }
}
</script>
<style>
.button-group{
  text-align: center
}
</style>