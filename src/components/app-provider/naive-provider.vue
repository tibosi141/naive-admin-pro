<script setup lang="ts">
const dialog = useDialog()
const message = useMessage()
const notification = useNotification()
const loadingBar = useLoadingBar()

useGlobalConfigProvider({
  dialog,
  message,
  notification,
  loadingBar
})
</script>

<template>
  <slot />
</template>
