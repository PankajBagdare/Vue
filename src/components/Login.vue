<template>
  <div id="login" class="box">
    <h3>Login</h3>
    <el-row>      
      <el-col :span="20" :offset="2">
        <el-input type="text" placeholder="Enter email" v-model="email"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-input type="password" placeholder="Password" v-model="password" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button plain type="info" v-on:click="validateLogin">Login</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return { email: '', password: '' }
  },
  methods: {
    validateLogin() {
      this.$http.post('http://localhost:3001/login', {
        email: this.email, 
        password: this.password
      }).then( response => {
        this.$session.start()
        this.$session.set('jwt', response.data.token)
        this.$http.headers.common['Authorization'] = 'Bearer ' + response.body.token
        this.$router.push('/users')
      }, error => {
        alert(response.data.message)
      });

    }
  }
}
</script>
<style >
  #login{
    margin: 0 25%;
  }
</style>