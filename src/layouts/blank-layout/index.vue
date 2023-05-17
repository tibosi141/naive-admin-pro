<script setup lang="ts"></script>

<template>
  <n-el tag="div" flex="~ col" class="pro-admin-login-container h-screen">
    <slot name="prefix" />
    <div class="flex-1">
      <slot />
    </div>
    <slot name="suffix">
      <div flex="~ shrink-0" class="items-center justify-center my-2">
        <span>Navie Admin Pro &copy; 2022 后台管理系统模板</span>
      </div>
    </slot>
  </n-el>
</template>

<style scoped>
.pro-admin-login-container {
  background-image: url('~/assets/images/login-bg.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
</style>
