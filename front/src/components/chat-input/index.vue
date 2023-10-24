<template>
  <div class="chatInput">
    <a-textarea
      v-model:value="store.chatValue"
      placeholder="请输入你的内容"
      allow-clear
      style="height: 100%"
      @pressEnter="onSendMsg"
    />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "../../store/index";
import { useSocket } from "../../hooks/useSocket";

const { socket } = useSocket();
const store = useStore();

// 发送消息
const onSendMsg = () => {
  socket.emit("message", {
    msg: store.chatValue,
    avator: "https://avatars.githubusercontent.com/u/83341147?v=4"
  });
  store.chatValue = "";
};
</script>

<style lang="scss" scoped>
.chatInput {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
