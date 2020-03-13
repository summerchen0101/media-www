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
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleSubmit">
            <ValidationProvider v-slot="v" :rules="`max:${maxLength}`" name="comment">
              <textarea id="msg" v-model="comment" class="form-control" rows="3" />
              <span class="text-danger">{{ v.errors[0] }}</span>
            </ValidationProvider>
            <div class="comment_btn">
              <span>还可以输入{{ maxLength - comment.length }}个字</span>
              <span>
                <button type="submit" class="btn submit_btn" :disabled="invalid">发表评论</button>
              </span>
            </div>
          </form>
        </ValidationObserver>
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
  data () {
    return {
      category: this.$route.query.category,
      id: this.$route.query.id,
      maxLength: 140,
      comment: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch(`${this.category}/addComment`, {
        id: this.id,
        comment: this.comment
      })
    }
  }
}
</script>
