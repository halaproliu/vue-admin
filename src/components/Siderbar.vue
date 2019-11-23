<template>
  <el-aside width="240px">
    <el-menu @close="handleCloseMenu" @open="hanldeOpenMenu" class="el-menu-vertical">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-location"></i>
          <span>选项一</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-location"></i>
          <span>选项二</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Siderbar',
  data () {
    return {}
  },
  methods: {
    hanldeOpenMenu (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCloseMenu (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-menu-vertical {
  margin-top: 60px;
  text-align: left;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 60px);
  overflow: hidden;
  border-right: 0;
}
</style>
