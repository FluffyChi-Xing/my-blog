<template>
  <div style="position: relative">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// You might choose this based on an API call or logged-in status
const layout = "main-content";

const nuxtApp = useNuxtApp()
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
</script>