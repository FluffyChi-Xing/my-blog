<script setup lang="ts">
useHead({
  title: '我的博客'
})
const description = ref(
    [
        '炽煋-也被称为Fluffy-ChiXing',
        '来自新疆',
        '现生活于辽宁大连',
        '一只没什么存在感的Furry,猫猫龙',
        'IT民工/苦逼大学生/前端程序员/正在成为全栈程序员ing',
        '群星/城市天际线玩家'
    ]
)
const skills = ref([
  {
    id: 1,
    content: '我完成了你看到的这个页面'
  },
  {
    id: 2,
    content: '我会开发web/微信小程序/Flutter等'
  },
  {
    id: 3,
    content: '目前的技术栈:Vue + Nuxt + Tailwindcss + Element Plus/Ant'
  },
  {
    id: 4,
    content: '一点点JakartaEE知识/一点点Python知识/一点点C++知识'
  }
])
const bili = ref('https://space.bilibili.com/233985651?spm_id_from=333.1007.0.0')
const git = ref('https://github.com/FluffyChi-Xing')
const jumpToBili = () => {
  window.open(bili.value)
}
const jumpToGit = () => {
  window.open(git.value)
}
</script>

<template>
  <div class="w-screen h-screen block sm:px-4 md:p-3 lg:p-4 xl:p-8 overflow-x-hidden relative bg-img">
    <!--  顶部信息栏  -->
    <div class="max-w-full p-4 h-auto mx-auto lg:flex md:flex justify-between sm:block">
      <div class="lg:max-w-[250px] p-4 md:max-w-[250px] lg:w-[250px] md:w-[250px] mb-8 md:mb-4 sm:max-w-[300px] sm:h-[300px] mx-auto h-[350px] glass bg-[#FFFFFF33] rounded-2xl">
        <div class="relative block w-full h-full">
          <div class="w-full h-[80px] relative block">
            <img src="../assets/image/avatar.png" alt="" id="avatar" class="hover:shadow-2xl hover:cursor-pointer w-[80px] h-[80px] block rounded-[40px] object-cover mx-auto">
          </div>
          <div class="w-full h-[50px] relative block text-2xl font-bold text-white text-center leading-[25px]">
            <p>炽煋</p>
            <p class="text-xl">学生/个人开发者/Furry</p>
          </div>
          <div class="w-full h-[130px] relative flex">
            <div class="w-full h-[50px] my-auto relative flex justify-between m-auto">
              <el-button type="primary" plain class="w-[100px] h-[50px] block relative m-auto" @click="jumpToBili">BiliBili</el-button>
              <el-button type="primary" plain class="w-[100px] h-[50px] block relative m-auto" @click="jumpToGit">Github</el-button>
            </div>
          </div>
        </div>
      </div>
      <!--   个人简介栏   -->
      <div class="sm:max-w-[300px] md:max-w-[500px] lg:max-w-[900px] max-w-[1200px] lg:h-[450px] md:h-[450px] h-[600px] p-4 md:w-[500px] lg:w-[860px] sm:mx-auto mx-auto glass bg-[#FFFFFF33] rounded-2xl">
        <div class="scroll w-full h-full relative block overflow-x-hidden overflow-y-scroll">
          <span class="relative block w-full h-8 leading-8 text-white text-left font-bold text-3xl">我是谁?</span>
          <ul class="list-disc block relative w-full h-auto text-white">
            <li class="w-full lg:h-6 md:h-6 sm:h-12 sm:text-[15px] leading-6 text-xl text-left p-4 whitespace-pre-line" v-for="item in description" :key="item">{{item}}</li>
          </ul>
          <span class="relative block w-full h-8 leading-8 text-white text-left font-bold text-3xl mt-6">我的技能?</span>
          <ul class="list-disc block relative w-full h-auto text-white sm:mt-auto">
            <li class="w-full lg:h-6 md:h-6 sm:h-12 sm:text-[15px] leading-6 text-xl text-left p-4 whitespace-pre-line" v-for="item in skills" :key="item.id">{{item.content}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!--  底部信息栏  -->
    <div class="lg:flex md:flex flex justify-around mx-auto mt-auto lg:max-w-[1225px] sm:h-[100px] md:max-w-[900px] sm:max-w-[300px] h-[80px] glass bg-[#FFFFFF33] rounded-2xl">
      <span class="w-full h-[80px] text-center text-white text-xl leading-[40px] md:leading-[80px] lg:leading-[80px]">你现在就看到的是静态版，正式版博客正在开发中....</span>
    </div>
  </div>
</template>

<style scoped>
.glass {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.bg-img {
  background-image: url("../assets/image/cool.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.scroll {
  scrollbar-width: none;
}
.scroll::-webkit-scrollbar {
  display: none;
}
</style>