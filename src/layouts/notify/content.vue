<script lang="ts" setup>
import Container from './container.vue'
import NotifyItem from './notify-item.vue'
import MessageItem from './message-item.vue'
import PpcomingItem from './upcoming-item.vue'
</script>

<template>
  <n-tabs default-value="notify" justify-content="center" type="line">
    <n-tab-pane name="notify" tab="通知">
      <Container>
        <NotifyItem
          title="测试通知"
          desc="五天前"
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <NotifyItem
          read
          title="测试通知"
          desc="五天前"
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <NotifyItem
          read
          title="测试通知"
          desc="五天前"
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <NotifyItem
          read
          title="测试通知"
          desc="五天前"
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </Container>
    </n-tab-pane>
    <n-tab-pane name="message" tab="消息">
      <Container>
        <MessageItem
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          title="测试通知"
          desc="这里是描述信息"
          timer="五天前"
        />
        <MessageItem
          read
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          title="测试通知"
          desc="这里是描述信息"
          timer="五天前"
        />
        <MessageItem
          read
          avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          title="测试通知"
          desc="这里是描述信息"
          timer="五天前"
        />
      </Container>
    </n-tab-pane>
    <n-tab-pane name="upcoming" tab="待办">
      <Container>
        <PpcomingItem
          tag="未开始"
          title="任务名称"
          content="这个任务你需要在2022-12-04前开始"
        />
        <PpcomingItem
          read
          type="success"
          tag="已完成"
          title="任务名称"
          content="这个任务你需要在2022-12-04前开始"
        />
        <PpcomingItem
          read
          type="warning"
          tag="未完成"
          title="任务名称"
          content="这个任务你需要在2022-12-04前开始"
        />
        <PpcomingItem
          read
          type="error"
          tag="已结束"
          title="任务名称"
          content="这个任务你需要在2022-12-04前开始"
        />
        <PpcomingItem
          read
          type="info"
          tag="未开始"
          title="任务名称"
          content="这个任务你需要在2022-12-04前开始"
        />
      </Container>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped></style>
