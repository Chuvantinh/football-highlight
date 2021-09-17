<template>
  <div class="container">
    <h1>total user number is {{ count }}</h1>
    <h3>Users:</h3>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">City</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" v-bind:key="user.id">
        <th scope="row">{{user.id}}</th>
        <td>
          <router-link :to="{ path: 'users/'+ user.id , params: { userId: user.id }}">{{ user.name }}</router-link>
        </td>
        <td>{{user.email}}</td>
        <td>{{user.address.city}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Users",
  data(){
    return {
      users: null,
      count: 0,
    }
  },
  created: function (){
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then( res => {
        this.users = res.data;
        console.log(this.users);
      })
  },
  methods:{
    hello(){
      return "vantinh";
    }
  }
}
</script>

<style scoped>

</style>