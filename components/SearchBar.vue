<template>
  <div class="search-bar">
    <div class="search-sort">
      <select
        v-model="form.category"
        class="form-control"
      >
        <option value="">
          分类
        </option>
        <option v-for="(c, i) in categorys" :key="i" :value="c.code">
          {{ c.label }}
        </option>
      </select>
    </div>
    <div class="input-group search-input">
      <input v-model.trim="form.keyword" type="text" class="form-control" aria-describedby="basic-addon2" @keyup.enter="onSearch">
      <a id="basic-addon2" href="" class="input-group-addon" @click.prevent="onSearch">
        <i class="fa fa-search" />
      </a>
    </div>
  </div>
</template>

<script>
import { Category } from '@/lib/constants'
const initForm = {
  category: Category[0].code, // 預設第一個分類
  keyword: ''
}
export default {
  name: 'SearchBar',
  components: {},
  data () {
    return {
      categorys: Category,
      form: { ...initForm }
    }
  },
  watch: {
    'form.category' (value) {
      this.$bus.$emit('search/categoryChanged', value)
    }
  },
  mounted () {
    this.$bus.$emit('search/categoryChanged', this.form.category) // 預設撈取第一個分類的列表
    this.$bus.$on('search/clearForm', this.clearForm)
  },
  methods: {
    clearForm () {
      this.form = { ...initForm }
    },
    onSearch () {
      if (!(this.form.category && this.form.keyword)) {
        this.$alert('请选择分类及输入关键字')
        return
      }
      this.$router.push({ name: 'tv-search-result', query: { ...this.form } })
    }
  }
}
</script>
