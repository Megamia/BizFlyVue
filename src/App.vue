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
:root {
  --ant-primary-color: #e57099;
}

.ant-steps .ant-steps-item-finish .ant-steps-item-icon {
  background-color: var(--ant-primary-color);
  svg {
    color: white;
  }
}
.ant-steps
  .ant-steps-item-finish
  > .ant-steps-item-container
  > .ant-steps-item-tail::after {
  background-color: var(--ant-primary-color);
}
.ant-btn {
  background-color: var(--ant-primary-color);
  color: white;
  border-radius: 0;
}
.ant-switch.ant-switch-checked .ant-switch-inner {
  background-color: var(--ant-primary-color);
}

.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-steps-item-container[role='button']:hover .ant-steps-item-icon{
  border-color: var(--ant-primary-color)
}
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
