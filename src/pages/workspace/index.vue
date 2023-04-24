<script setup lang="ts">
const dialog = useDialog()
const message = useMessage()
const notification = useNotification()
const loadingBar = useLoadingBar()

const onDialog = () => {
  dialog.success({
    title: '成功',
    content: '厉害',
    positiveText: '哇',
    onPositiveClick() {
      message.success('✌!')
    },
  })
}

const onMessage = () => {
  message.success('Hello, world!')
}

const onNotification = () => {
  notification.success({
    title: 'Hello, world!',
    content: 'This is a success notification.',
  })
}

const onLoading = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 2000)
}
</script>

<template>
  <div>
    <h1>Work Page</h1>
    <n-button @click="onDialog">
      Dialog
    </n-button>
    <n-button @click="onMessage">
      Message
    </n-button>
    <n-button @click="onNotification">
      Notification
    </n-button>
    <n-button @click="onLoading">
      Loading
    </n-button>
  </div>
</template>

<style scoped></style>
