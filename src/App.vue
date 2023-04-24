<script setup lang="ts"></script>

<template>
  <n-config-provider>
    <app-provider>
      <nav>
        <router-link to="/">
          go to home
        </router-link>
        |
        <router-link to="/workspace">
          go to work
        </router-link>
      </nav>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
