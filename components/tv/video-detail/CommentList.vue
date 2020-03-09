<template>
  <div class="comment_list">
    <div v-for="i in 4" :key="i" class="comment_unit">
      <div class="comment_img">
        <img src="/images/tv_korea_detail/comment_img2.jpg" alt="">
      </div>
      <div class="comment_txt">
        <div class="comment_user">
          <a href="" class="user_name">Sunny</a>：
        </div>
        <div class="comment_user_talk">
          以美丽的南国风光为背景展开，是一部通过处在陌生且极其恶劣环境中渴望爱情和成功的年轻军人和医生的生活
        </div>
        <div class="user_post_time">
          2017-02-23 18:30
        </div>
      </div>
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
