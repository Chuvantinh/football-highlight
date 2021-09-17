<template>
  <div class="home">
    <h1>This website was created by Van Tinh Chu was run with none of profit.</h1>
    <p>Because I want to bring a free website for the enjoy of highlight football. Here are some pages you can go inside and enjoy football.</p>
    <div>
      <router-link to="/highlight" tag="button" class="hightlight">highlight Footbal</router-link>
      <router-link to="/users" tag="button" class="users">users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
  .home{
    height: 500px;
  }
  .hightlight{
    color: #42b983;
  }

  .users{
    color: #2c3e50;
  }
</style>