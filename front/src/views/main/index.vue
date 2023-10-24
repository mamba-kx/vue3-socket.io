<template>
  <div class="loginWrapper">
    <div class="userName">
      <p class="name">请输入用户名：</p>
      <input class="nameInput" type="text" v-model="userInfo.name" />
    </div>
    <div class="userAvatar">
      <p class="avatar">请选择头像：</p>
      <div class="avatarBox">
        <img
          v-for="item in AVATOR_LIST"
          :key="item?.id"
          class="avatarImg"
          :src="item.url"
        />
      </div>
      <button class="loginBtn" @click="onLogin">登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userInfo = ref({
  name: "",
  avator: ""
});
import { ref } from "vue";
import { AVATOR_LIST } from "./constants/index";
import { useRouter } from "vue-router";

const router = useRouter();
const onLogin = () => {
  router.push("/chat");
};
</script>

<style scoped>
/* login */
.loginWrapper {
  width: 400px;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: block;
  border-radius: 5px;
  background-color: #d4d4ee;
}
.userName {
  width: 100%;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
}
.name {
  padding: 10px 0 10px 10px;
}
.nameInput {
  margin: 8px auto;
  height: 25px;
  width: 93%;
  display: block;
  text-indent: 5px;
}
.userAvatar {
  box-sizing: border-box;
}
.avatar {
  padding: 10px 0 0px 10px;
}
.avatarWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.avatarBox {
  width: 100%;
  height: 172px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.avatarImg {
  width: 35px;
  height: 35px;
  margin: 10px;
  border: 1px solid rgb(100, 99, 99);
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(221 189 189);
}
.loginBtn {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: none;
  border-top: 1px solid #000;
  border-radius: 5px;
  background-color: #7889e3;
  font-size: 18px;
  color: #fff;
}
.selected {
  border: 2px solid #0ccce8;
  transform: scale(1.2);
}
</style>
