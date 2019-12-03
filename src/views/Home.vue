<template>
  <div class="main">
    <div class="search-box">
      <div class="search-input">
        <span>姓名：</span>
        <el-input placeholder="请输入文字" v-model="name"></el-input>
      </div>
      <el-button class="search-btn" type="success">搜索</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from '../api'
import log from '../decorator/log'
export default {
  name: 'home',
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    @log({
      type: '22'
    })
    async init () {
      const res = await api.post('/api/getIntelligentEvaluateStatus')
      console.log(res)
      return 'noBuried'
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
