<template>
  <div class="search-bar">
    <div class="search-sort">
      <select v-model="form.category" class="form-control">
        <option value="">
          分类
        </option>
        <option v-for="(c, i) in categorys" :key="i" :value="c.code">
          {{ c.label }}
        </option>
      </select>
    </div>
    <div class="input-group search-input">
      <input v-model.trim="form.keyword" type="text" class="form-control" aria-describedby="basic-addon2">
      <a id="basic-addon2" href="" class="input-group-addon" @click.prevent="onSearch">
        <i class="fa fa-search" />
      </a>
    </div>
  </div>
</template>

<script>
import { Category } from '@/lib/constants/Category'
export default {
  name: 'SearchBar',
  components: {},
  data () {
    return {
      categorys: Category,
      form: {
        category: '',
        keyword: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    onSearch () {
      if (!(this.form.category && this.form.keyword)) {
        this.$alert('分类及关键字皆为必填')
        return
      }
      this.$router.push({ name: 'tv-search-result', query: { ...this.form } })
      $('#searchModal').modal('hide')
    }
  }
}
</script>
