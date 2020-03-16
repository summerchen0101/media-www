<template>
  <div class="tv_detail_comment">
    <div class="tv_detail_head">
      <span class="tv_detail_mtitle">评论</span>
    </div>
    <div v-if="!$auth.loggedIn" class="comment_nologin">
      撰写留言前，请先<a class="fancybox" href="#login_dialog">登入</a>
    </div>
    <div v-else class="comment_input_box">
      <div class="comment_img">
        <img src="/images/tv_korea_detail/comment_img.jpg" alt="">
      </div>
      <div class="comment_txt">
        <ValidationObserver v-slot="{ invalid }">
          <form>
            <ValidationProvider v-slot="v" :rules="`max:${maxLength}`" name="comment">
              <textarea id="msg" v-model="comment" class="form-control" rows="3" />
              <span class="text-danger">{{ v.errors[0] }}</span>
            </ValidationProvider>
            <div class="comment_btn">
              <span>还可以输入{{ restText }}个字</span>
              <span>
                <button class="btn submit_btn" :disabled="invalid" @click.prevent="handleSubmit">发表评论</button>
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
  computed: {
    restText () {
      return this.maxLength - this.comment.length > 0
        ? this.maxLength - this.comment.length
        : 0
    }
  },
  methods: {
    async handleSubmit (e) {
      e.target.blur()
      if (!this.comment) { return }
      const res = await this.$store.dispatch(`${this.category}/addComment`, {
        id: this.id,
        comment: this.comment
      })
      if (res.code === '0') {
        this.$alert('新增成功', { type: 'success' })
        this.comment = ''
      }
      e.target.blur()
    }
  }
}
</script>
