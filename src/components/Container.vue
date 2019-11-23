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

<style scoped>
.el-container {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  margin-top: 60px;
}
</style>
