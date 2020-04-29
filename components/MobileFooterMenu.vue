<template>
  <footer class="mb-footer-box">
    <ul class="menu_list">
      <li v-for="(c,i) in cates" :key="i">
        <nuxt-link
          :to="{name: 'tv-filter-category', params: {category: c.code}}"
          active-class="active"
          :class="{active: $route.query.category === c.code}"
        >
          <span><i :class="c.icon" /></span><span>{{ c.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import { Category } from '@/lib/constants'
export default {
  name: 'MobileFooterMenu',
  components: {},
  data () {
    return {
      cates: Category
    }
  },
  mounted () {}
}
</script>
