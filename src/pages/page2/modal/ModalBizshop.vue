<template>
  <div>
    <span style="font-size: 20px"> modalbiz </span>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const show = () => {
  console.log("Show modal");
};
onMounted(() => show());
</script>

<style scoped></style>
