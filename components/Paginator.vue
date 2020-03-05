<template>
  <div v-if="count > 0" class="page_list">
    <a v-if="page === 1 " class="disabled"><i class="fa fa-angle-left" aria-hidden="true" /></a>
    <a v-else href="" @click.prevent="onPageChange(page - 1)"><i class="fa fa-angle-left" aria-hidden="true" /></a>
    <template v-for="p in totalPages">
      <a
        v-if="p === page"
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

    <a v-if="page === totalPages" class="disabled"><i class="fa fa-angle-right" aria-hidden="true" /></a>
    <a v-else href="" @click.prevent="onPageChange(page + 1)"><i class="fa fa-angle-right" aria-hidden="true" /></a>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: () => 1
    },
    perpage: {
      type: Number,
      default: () => 20
    },
    count: {
      type: Number,
      default: () => 100
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.count / this.perpage)
    }
  },
  methods: {
    onPageChange (page) {
      this.$emit('change', page)
    }
  }
}
</script>
