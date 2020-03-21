<template>
  <div class="video_player_info_path">
    <div class="container">
      <ul>
        <li>
          <nuxt-link :to="{name: 'index'}">
            首页
          </nuxt-link>
        </li> >
        <li>
          <nuxt-link :to="{name: 'tv-filter-category', params: {category: category}}">
            {{ category | enum('Category') }}
          </nuxt-link>
        </li> >
        <li>
          <nuxt-link :to="$route.fullPath">
            {{ title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    category: {
      type: String,
      default: () => ''
    }
  },
  methods: {
  }
}
</script>
