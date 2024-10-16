<template>
  <div class="layout">
    <div style="position: fixed">
      <SideBar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<style>
.layout {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
}

.SideBar {
  width: 250px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
  
}
</style>
