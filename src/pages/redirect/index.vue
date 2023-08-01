<script setup lang="ts">
const router = useRouter()
const path = router.currentRoute.value.params.path

if (path) router.replace(path as string)
else router.replace('/')
</script>

<template>
  <div />
</template>
