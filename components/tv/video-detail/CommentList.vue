<template>
  <div class="comment_list">
    <div v-for="(item, i) in list" :key="i" class="comment_unit">
      <div class="comment_img">
        <img src="/images/tv_korea_detail/comment_img.jpg" alt="">
      </div>
      <div class="comment_txt">
        <div class="comment_user">
          <a href="" class="user_name">{{ item.author }}</a>：
        </div>
        <div class="comment_user_talk">
          {{ item.content }}
        </div>
        <div class="user_post_time">
          {{ item.createdAt }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  computed: {
    list () {
      return this.$store.getters[`${this.$route.query.category}/commentList`]
    }
  },
  methods: {
  }
}
</script>
