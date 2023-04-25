<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="flex justify-evenly">
      <router-link to="/">
        go to home
      </router-link>
      |
      <router-link to="/workspace">
        go to work
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>

</style>
