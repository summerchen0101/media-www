<template>
  <div class="panel panel-default">
    <div :id="`heading${index}`" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#accordion"
          :href="`#collapse${index}`"
          :aria-controls="`collapse${index}`"
        >
          <i class="fa fa-youtube-play" /> {{ source.name }}
        </a>
      </h4>
    </div>
    <div
      :id="`collapse${index}`"
      class="panel-collapse collapse"
      role="tabpanel"
      :aria-labelledby="`heading${index}`"
    >
      <div class="panel-body">
        <span v-if="source.episodes.length === 0">(空)</span>
        <nuxt-link
          v-for="(episode, i) in source.episodes"
          :key="i"
          active-class="active"
          exact
          :to="{...$route, query: {...$route.query,
                                   source: source.id,
                                   episode: episode.id}}"
          :class="{active: episode.id === $route.query.episode}"
        >
          {{ episode.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
  }
}
</script>
