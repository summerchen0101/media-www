<template>
  <div class="tv_sub_lTitle">
    <div class="dropdown">
      <button
        id="dropdownMenu1"
        class="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {{ $route.params.category | enum('category') }}
        <span class="caret" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li v-for="(c, i) in list" :key="i">
          <nuxt-link
            :to="{name: 'tv-filter-category',
                  params: {category: c.code}}"
          >
            {{ c.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Category } from '@/lib/constants'
export default {
  props: {
  },
  data () {
    return {
      list: Category.filter(c => c.code !== this.$route.params.category)
    }
  },
  methods: {
  }
}
</script>
