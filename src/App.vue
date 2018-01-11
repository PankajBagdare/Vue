<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-header></el-header>
    <router-view/>
  </div>
</template>

<script>
import Register from './components/Register'
import Users from './components/Users'
import User from './components/User'

export default {
  name: 'app',
  components: { Register, Users, User },
  http: {
    emulateJSON: true,
    emulateHTTP: true
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.el-row, .row {
  margin-bottom: 20px;
}
.el-table tr, .el-table th {
  text-align: left;
}
.box {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  margin: 1%;
  padding: 1%;
}
</style>
