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
        {{ $enum('Category', $route.params.category) }}
        <span class="caret" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li v-for="(c, i) in Category" :key="i">
          <nuxt-link :to="`/tv/filter/${c.code}`">
            {{ c.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Category } from '@/lib/constants/Category'
export default {
  props: {
  },
  data () {
    return {
      Category
    }
  },
  methods: {
  }
}
</script>
