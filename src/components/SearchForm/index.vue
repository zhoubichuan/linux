<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item name="1">
      <template slot="title">
        <i class="header-icon el-icon-info"></i><span style="padding-left:10px;">搜索</span>
      </template>
      <transition>
        <el-form size="mini" :inline="true" :model="value" class="demo-form-inline">
        <el-row :gutter="20" v-for="(row, rowIndex) in conditionItems" :key="rowIndex">
          <el-col :span="8" v-for="(col, colIndex) in row" :key="colIndex">
            <el-form-item :label="col.label" label-width="100px">
              <!-- <keep-alive> -->
                <component 
                  :is="col.type" 
                  v-model="formInline[col.name]"
                  :placeholder="col.placeholder"
                  :multiple="col.multiple"
                  :defaultValue="col.defaultValue"
                  :options="col.options">
                </component>
              <!-- </keep-alive> -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      </transition>
      <button-group>
        <me-button type="primary" @click="handleQuery">查询</me-button>
        <me-button @click="onSubmit">重置</me-button>
        <me-button v-if="condition.length>6" type="text" @click="searchMore">+ 更多选项</me-button>
      </button-group>
    </el-collapse-item>
  </el-collapse>
</template>
<script>

export default {
  name: 'SearchForm',
  components: {
    searchInput: () => import('./SearchInput'),
    searchSelect: () => import('./SearchSelect'),
    searchUser: () => import('./SearchUser'),
    searchRadio: () => import('./SearchRadio'),
    searchCascader: () => import('./SearchCascader'),
    searchTime: () => import('./SearchTimeSelect')
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    condition: {
      type: Array,
      default: () => []
    }
  },
  // model: {
  //   props: 'value',
  //   event: 'input'
  // },
  computed: {
    conditionItems () {
      let formItems = []
      if (this.isShowAll) {
        formItems = this.$devideArr(this.condition, 3)
      } else {
        formItems = this.$devideArr(this.condition.slice(0, 6), 3)
      }
      return formItems
    }
  },
  data () {
    return {
      mode: this.value,
      isShowAll: false,
      formInline: {

      },
      activeNames: ['1']
    }
  },
  watch: {
    formInline: {
      handler (newVal, oldVal) {
        console.log(newVal)
        this.$emit('input', newVal)
      },
      deep: true
    }
  },
  created () {
    this.handleInit()
  },
  methods: {
    handleInit () {
      // this.condition.forEach(item => {
      //   this.formInline[item.name] = item.defaultValue || ''
      // })
    },
    searchMore () {
      this.isShowAll = !this.isShowAll
    },
    handleQuery () {
      this.$emit('handleSearch', this.formInline)
    },
    onSubmit () {
      console.log('submit!')
    },
    handleChange (val) {
      console.log(val)
    }
  },
  install (Vue) {
    Vue.component('SearchForm', this)
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>