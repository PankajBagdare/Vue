<template>
  <div class="users col-md-12">
    <h2>Users</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th> <th>Email</th> <th>Address</th> <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address}}</td>
          <td>
            <router-link :to="{ path: `/user/${user.id}` }">
              <el-button type="info" size="small">Show</el-button>
            </router-link>
            <router-link :to="{ path: `/user/edit/${user.id}` }">
              <el-button type="info" size="small">Edit</el-button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

export default {
  name: 'Users',
  data () {
    return {
      users: this.$store.state.users
    }
  },
  beforeCreate() {
    this.$http.get('http://localhost:3001/users').then(response => {
      this.users = response.data.users
    })
  }
}

</script>
