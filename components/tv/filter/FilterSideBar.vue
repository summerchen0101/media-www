<template>
  <div class="tv_sub_left col-xs-12 col-sm-3 col-md-2">
    <FilterEntranceSelector />
    <div class="tb_sub_select_box">
      <div class="tv_sub_stitle">
        类别：
      </div>
      <ul class="tv_sub_select_tab">
        <li><a href="">全部</a></li>
        <li><a href="">古装</a></li>
        <li><a href="">武侠</a></li>
        <li><a href="">警匪</a></li>
        <li><a href="">军事</a></li>
        <li><a href="">神话</a></li>
        <li><a href="">科幻</a></li>
        <li><a href="" class="select">悬疑</a></li>
        <li><a href="">都市</a></li>
        <li><a href="">家庭</a></li>
        <li><a href="">搞笑</a></li>
        <li><a href="">偶像</a></li>
        <li><a href="">言情</a></li>
        <li><a href="">时装</a></li>
      </ul>
    </div>
    <div class="tb_sub_select_box">
      <div class="tv_sub_stitle">
        地区：
      </div>
      <ul class="tv_sub_select_tab">
        <li><a href="">全部</a></li>
        <li><a href="">大陆</a></li>
        <li><a href="">香港</a></li>
        <li><a href="">美国</a></li>
        <li><a href="">台湾</a></li>
        <li><a href="" class="select">韩国</a></li>
        <li><a href="">泰国</a></li>
        <li><a href="">新加坡</a></li>
        <li><a href="">日本</a></li>
        <li><a href="">法国</a></li>
        <li><a href="">英国</a></li>
      </ul>
    </div>
    <div class="tb_sub_select_box">
      <div class="tv_sub_stitle">
        时间：
      </div>
      <ul class="tv_sub_select_tab">
        <li><a href="">全部</a></li>
        <li><a href="">2017</a></li>
        <li><a href="" class="select">2016</a></li>
        <li><a href="">2015</a></li>
        <li><a href="">2014</a></li>
        <li><a href="">2013</a></li>
        <li><a href="">2012</a></li>
        <li><a href="">2011</a></li>
        <li><a href="">2010</a></li>
      </ul>
    </div>
    <div class="tb_sub_select_box">
      <div class="tv_sub_stitle">
        状态：
      </div>
      <ul class="tv_sub_select_tab">
        <li><a href="">全部</a></li>
        <li><a href="">跟播</a></li>
        <li><a href="">完结</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    FilterEntranceSelector: () => import('@/components/tv/filter/FilterEntranceSelector')
  },
  props: {
  }
}
</script>
