<template>
    <a-modal v-model:open="open" @ok="handleOk" width="720">
      <template #title> Chọn sản phẩm từ Bizshop </template>
      <a-flex
        vertical
        gap="20"
        style="border-block: 1px solid #f0f0f0; padding: 24px"
      >
        <a-flex gap="16">
          <a-select ref="select" v-model:value="value1" style="width: 120px">
            <!-- @change="handleChange" -->
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
          <a-select ref="select" v-model:value="value2" style="width: 120px">
            <!-- @change="handleChange" -->
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
          <a-input-search
            v-model:value="value3"
            placeholder="Nhập tên sản phẩm hoặc mã ID"
            style="width: 200px"
          />
          <!-- @search="onSearch" -->
        </a-flex>
      </a-flex>
    </a-modal>
</template>

<script setup>
import { ref, onMounted } from "vue";

const open = ref(true);
const value1 = ref("jack");
const value2 = ref("jack");
const value3 = ref("");
const show = () => {
  console.log("Show modal");
};

const handleOk = (e) => {
  console.log(e);
};

onMounted(() => show());
</script>

<style scoped></style>
