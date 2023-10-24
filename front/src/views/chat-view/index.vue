<template>
  <div class="chatBox">
    <div class="userInfo">
      <p>用户列表</p>
      <ul>
        <li v-for="item in userList" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="chatInfo">
      <p class="title">
        聊天框
        <!-- 设置 -->
        <SettingBox />
      </p>
      <div class="chatContent">
        <ul>
          <li v-for="(item, index) in store.chatList" :key="index">
            <img :src="item?.avator" alt="" />
            <div class="msgBox">
              <span>
                {{ item?.msg }}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 输入框 -->
      <ChatInput />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ChatInput from "../../components/chat-input/index.vue";
import SettingBox from "../../components/setting-box/index.vue";
import { useSocket } from "../../hooks/useSocket";
import { useStore } from "../../store";

const store = useStore();
const { socket } = useSocket();

const userList = ref([
  { id: 1, name: "ckx" },
  { id: 2, name: "ckx11" },
  { id: 3, name: "ckx33" }
]);

onMounted(() => {
  socket.connect();
  socket.on("message", (message: any) => {
    console.log("msg", message);
    store.chatList = message;
  });
});

socket.on("connect", () => {
  socket.emit("chat");
});
</script>

<style lang="scss" scoped>
/* chat */
.chatBox {
  display: flex;
  width: 80vw;
  height: 600px;
  background-color: #f3f3f3;
  @include center;
  .userInfo {
    width: 170px;
    height: 100%;
    box-sizing: border-box;
    background-color: rgb(36 35 35 / 93%);
    color: #fff;
    p {
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      border-bottom: 1px solid #fff;
    }
    ul {
      li:first-child {
        margin: 10px 0 5px;
      }
      li {
        margin-bottom: 5px;
      }
    }
  }
  .chatInfo {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    p {
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      font-weight: bold;
      border-bottom: 1px solid #fff;
    }
    .chatContent {
      height: calc(100% - 100px - 40px);
      /* background-color: #000; */
      padding: 0 20px;
      text-align: left;
      ul {
        li {
          display: flex;
          align-items: center;
          margin: 20px 0;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .msgBox {
            height: 30px;
            width: 100%;
            background: rgb(126, 236, 126);
            color: #fff;
            display: flex;
            align-items: center;
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
