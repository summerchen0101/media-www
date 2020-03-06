<template>
  <div class="search-bar">
    <div class="search-sort">
      <select id="" name="" class="form-control">
        <option value="">
          分类
        </option>
      </select>
    </div>
    <div class="input-group search-input">
      <input type="text" class="form-control" aria-describedby="basic-addon2">
      <a id="basic-addon2" href="" class="input-group-addon" @click.prevent="onSearch">
        <i class="fa fa-search" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  props: {
    onSearch: {
      type: Function,
      default: () => {}
    }
  },
  mounted () {}
}
</script>
