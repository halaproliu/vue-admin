<template>
  <el-header>
    <i class="el-icon-user-solid"></i>
    <span class="header-title">halapro.liu</span>
  </el-header>
</template>

<style lang="scss" scoped>
@import '~assets/scss/mixin.scss';
.el-header {
  background-color: #008de1;
  color: #fff;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  @include flex(justify);
}

.header-title {
  padding-left: 15px;
}
</style>
