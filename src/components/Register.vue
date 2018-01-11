<template>
  <div id="sign-up" class="box">
    <h3>Register {{title}} User</h3>
    <form>
      <el-row>
        <el-col :offset="2" :span="20">
          <el-input type="text" placeholder="Enter Name" v-model="user.name"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="2" :span="20">
          <el-input type="email" placeholder="Enter Email" v-model="user.email"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="2" :span="20">
          <el-input type="password" placeholder="Enter password" v-model="user.password"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="2" :span="20">
          <el-input type="textarea" autosize placeholder="Address" v-model="user.address"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <router-link to="/users">
          <el-button type="info" plain v-on:click="register">Submit</el-button>
        </router-link>
      </el-row>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      user: { id: '', name: '', password: '', address: '', email: '' },
      title: this.$route.path
    }
  },
  methods: {
    register () {
      if (this.user.id) {
        var url = 'http://localhost:3001/users/' + this.user.id
        
        this.$http.put(url, { user: this.user }).then(response => {

          window.location = '/user/' + response.data.user.id
        }, response => {
          console.log(response.data)
        });
      }
      else {
        this.$http.post('http://localhost:3001/users', {user: this.user}).then(response => {

          window.location = '/user/' + response.data.user.id
        }, response => {
          console.log(response.data)
        });
      }
      this.user = { name: '', password: '', address: '', email: '' }
    }
  },

  beforeCreate: function() {
    if (this.$route.path.match('edit') ) {
      var id = this.$route.params.id
      this.$http.get('http://localhost:3001/users/' + id ).then(response => {
        this.user = response.data.user
      });
    }
  }
}

</script>
<style>
  #sign-up {
    margin: 0 20%;
  }
</style>