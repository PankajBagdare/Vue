<template>
  <div class="users">
    <h2>User</h2>
    <el-col :span="16" :offset="4">{{user.name}}
    </el-col>
    <el-col :span="16" :offset="4">{{user.email}}
    </el-col>
    <el-col :span="16" :offset="4">{{user.address}}
    </el-col>
 </div>
</template>


<script>

export default {
  name: 'User',
  data () {
    return {
      user: { name: '', email: '', address: '' }
    }
  },
  beforeCreate: function() {
    var id = this.$route.params.id
    this.$http.get('http://localhost:3001/users/' + id ).then(response => {
      this.user = response.data.user
    });
  }
}

</script>
