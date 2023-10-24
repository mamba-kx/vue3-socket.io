<template>
  <div class="setting">
    <ClearOutlined @click="clearChatRecord" />
    <SettingOutlined style="margin-left: 10px" />
  </div>
</template>

<script lang="ts" setup>
import { SettingOutlined, ClearOutlined } from "@ant-design/icons-vue";
import { useSocket } from "../../hooks/useSocket";

const { socket } = useSocket();

// 清空聊天记录
const clearChatRecord = () => {
  socket.emit("clearChatRecord", []);
};
</script>

<style lang="scss" scoped>
.setting {
  position: absolute;
  top: 0;
  right: 10px;
  position: absolute;
}
</style>
