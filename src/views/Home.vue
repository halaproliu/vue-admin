<template>
  <div class="main">
    <div class="search-box">
      <div class="search-input">
        <span>姓名：</span>
        <el-input placeholder="请输入文字" v-model="name"></el-input>
      </div>
    </div>
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
.main {
  background: #fff;
  height: 100%;
  padding: 20px;
}

.search-box {
}

.search-input {
  width: 240px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    min-width: 60px;
  }
}
</style>
