<script setup lang="ts">
const onGet = async () => {
  const res = await useGet(
    'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/200',
  )

  // eslint-disable-next-line no-console
  console.log(res)
}
const onPost = async () => {
  const res = await usePost(
    'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/post',
  )

  // eslint-disable-next-line no-console
  console.log(res)
}
const onPut = async () => {
  const res = await usePut(
    'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/put',
  )

  // eslint-disable-next-line no-console
  console.log(res)
}
const onDelete = async () => {
  const res = await useDelete(
    'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/delete',
  )

  // eslint-disable-next-line no-console
  console.log(res)
}
</script>

<template>
  <div>
    <h1 class="mb-24px p-12px text-center border-b">
      Home Page
    </h1>
    <n-space size="large">
      <n-button @click="onGet">
        get
      </n-button>
      <n-button @click="onPost">
        post
      </n-button>
      <n-button @click="onPut">
        put
      </n-button>
      <n-button @click="onDelete">
        delete
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
