<template>
  <div class="member_left col-xs-12 col-sm-3 col-md-3">
    <div class="intro_info">
      <div class="member_bigImg">
        <img src="/images/member/member_bigImg.jpg" alt="">
      </div>
      <div class="user_name">
        {{ $auth.user.account }}
      </div>
      <div class="user_id">
        ID:{{ $auth.user.id }}
      </div>
    </div>
    <div class="member_list_pc">
      <nuxt-link :to="{name: 'user-record'}">
        <i class="fa fa-history" />观看纪录
      </nuxt-link>
      <nuxt-link :to="{name: 'user-favorite'}">
        <i class="fa fa-heart-o" />我的收藏
      </nuxt-link>
      <nuxt-link :to="{name: 'user-profile'}">
        <i class="fa fa-cog" />帐号设置
      </nuxt-link>
    </div>
    <select name="here" class="member_list_mb" @change="onSelectedMenu">
      <option value="">
        请选择
      </option>
      <option value="user-record">
        观看纪录
      </option>
      <option value="user-favorite">
        我的收藏
      </option>
      <option value="user-profile">
        帐号设置
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'MemberSideMenu',
  components: {},
  mounted () {
  },
  methods: {
    onSelectedMenu (e) {
      this.$router.push({ name: e.target.value })
    }
  }
}
</script>
