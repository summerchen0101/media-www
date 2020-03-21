<template>
  <div class="dropdown member_select">
    <button
      id="dropdownMenu1"
      class="btn btn-default dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <template v-if="$route.query.category">
        {{ $route.query.category | enum('category') }}
      </template>
      <template v-else>
        全部
      </template>
      <span class="caret" />
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
      <li>
        <nuxt-link :to="{name: 'user-record'}">
          全部
        </nuxt-link>
      </li>
      <li v-for="(c, i) in cates" :key="i">
        <nuxt-link :to="{name: 'user-record', query: {category: c.code}}">
          {{ c.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Category } from '@/lib/constants'
export default {
  name: 'TypeSelector',
  data () {
    return {
      cates: Category
    }
  }
}
</script>
