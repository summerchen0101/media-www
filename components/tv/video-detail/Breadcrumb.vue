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
          <nuxt-link :to="{name: 'tv-filter-category', params: {category: 'drama'}}">
            电视剧
          </nuxt-link>
        </li> >
        <li>
          <nuxt-link :to="{name: 'tv-video-detail'}">
            太阳的后裔
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  methods: {
  }
}
</script>
