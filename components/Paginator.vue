<template>
  <div v-if="paginator.count > 0" class="page_list">
    <a v-if="paginator.page === 1 " class="disabled"><i class="fa fa-angle-left" aria-hidden="true" /></a>
    <a v-else href="" @click.prevent="onPageChange(paginator.page - 1)"><i class="fa fa-angle-left" aria-hidden="true" /></a>
    <template v-for="p in paginator.totalPages">
      <a
        v-if="p === paginator.page"
        :key="p"
        class="select"
      >{{ p }}</a>
      <a
        v-else
        :key="p"
        href=""
        @click.prevent="onPageChange(p)"
      >{{ p }}</a>
    </template>

    <a v-if="paginator.page === paginator.totalPages" class="disabled"><i class="fa fa-angle-right" aria-hidden="true" /></a>
    <a v-else href="" @click.prevent="onPageChange(paginator.page + 1)"><i class="fa fa-angle-right" aria-hidden="true" /></a>
  </div>
</template>
<script>
export default {
  props: {
    paginator: {
      type: Object,
      default: () => ({
        page: 1,
        perpage: 20,
        count: 0,
        totalPages: 0
      })
    }
  },
  methods: {
    onPageChange (page) {
      this.$emit('change', page)
    }
  }
}
</script>
