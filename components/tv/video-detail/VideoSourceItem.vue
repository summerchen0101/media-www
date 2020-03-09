<template>
  <div class="panel panel-default">
    <div :id="`heading${index}`" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#accordion"
          :href="`#collapse${index}`"
          aria-expanded="false"
          :aria-controls="`collapse${index}`"
        >
          <i class="fa fa-youtube-play" /> 播放位置{{ index+1 }}
        </a>
      </h4>
    </div>
    <div :id="`collapse${index}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${index}`">
      <div class="panel-body">
        <a
          v-for="(item, i) in info.episodeList"
          :key="i"
          href=""
          :class="{active: episode === i+1}"
        >第{{ i+1 }}集</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    episode: {
      type: Number,
      default: () => 1
    },
    info: {
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
