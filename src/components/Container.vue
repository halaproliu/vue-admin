<template>
  <el-container>
    <Header></Header>
    <el-container>
      <Siderbar></Siderbar>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import Siderbar from './Siderbar'
export default {
  name: 'Container',
  data () {
    return {}
  },
  components: {
    Header,
    Siderbar
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
$bgcolor: #e9eef3;
.el-container {
  height: 100%;
  background-color: $bgcolor;
}

.el-main {
  background-color: $bgcolor;
  color: #333;
  text-align: center;
  margin-top: 60px;
  max-height: calc(100% - 60px - 20px);
  overflow: hidden;
}
</style>
