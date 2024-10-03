<template>
  <div class="layout">
    <SideBar /> 
    <div class="content">
      <router-view /> 
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
</script>

<style>
.layout {
  display: flex;
}

.SideBar {
  width: 250px; /* Độ rộng của SideBar */
}

.content {
  flex-grow: 1; /* Phần nội dung sẽ chiếm toàn bộ không gian còn lại */
  padding: 20px;
}
</style>
