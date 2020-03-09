<template>
  <div class="tv_detail_comment">
    <div class="tv_detail_head">
      <span class="tv_detail_mtitle">评论</span>
    </div>
    <div class="comment_input_box">
      <div class="comment_img">
        <img src="/images/tv_korea_detail/comment_img.jpg" alt="">
      </div>
      <div class="comment_txt">
        <form action="">
          <textarea id="msg" class="form-control" rows="3" />
          <div class="comment_btn">
            <span>还可以输入140个字</span>
            <span><button type="submit" class="btn submit_btn">发表评论</button></span>
          </div>
        </form>
      </div>
    </div>
    <CommentList />
  </div>
</template>
<script>
export default {
  components: {
    CommentList: () => import('@/components/tv/video-detail/CommentList')
  },
  props: {
  },
  methods: {
  }
}
</script>
