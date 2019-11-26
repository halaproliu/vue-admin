<template>
  <div class="main">
    <div class="search-box">
      <div class="search-input">
        <span>姓名：</span>
        <el-input placeholder="请输入文字" v-model="name"></el-input>
      </div>
      <el-button type="success" class="search-btn">搜索</el-button>
    </div>
    div.content
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixin.scss';
.main {
  height: 100%;
}

.search-box {
  background: #fff;
  padding: 15px;
  @include flex(justify);
}

.search-input {
  width: 240px;
  @include flex(flex-start);
  span {
    min-width: 60px;
  }
}

.search-btn {
  margin-left: 20px;
}
</style>
