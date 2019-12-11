<template>
  <div class="main">
    <div class="search-box">
      <div class="search-input">
        <span>姓名：</span>
        <el-input placeholder="请输入文字" v-model="name"></el-input>
      </div>
      <el-button class="search-btn" type="success">搜索</el-button>
    </div>

    <div class="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" prop="date" width="180"></el-table-column>
        <el-table-column label="姓名" prop="name" width="180"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
      </el-table>
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
      name: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
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

.content {
  margin-top: 20px;
  height: 100%;
  min-height: 800px;
  background: #fff;
  padding: 20px;
}
</style>
