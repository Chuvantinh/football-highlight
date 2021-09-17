<template>
  <div class="user-details">
      <p class="id">Id: </p>
      <p class="name"> Name: </p>
      <p class="email">Email: </p>
      <p class="email">City: </p>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: [
      'user'
  ],
}
</script>

<style scoped>

</style>