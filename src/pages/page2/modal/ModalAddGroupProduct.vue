<template>
  <a-modal v-model:open="open" width="720px" @cancel="cancel">
    <template #title>
      <span> Thêm nhóm sản phẩm </span>
    </template>
    <a-flex vertical style="border-block: 1px solid #f0f0f0; padding-top: 24px">
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Sản phẩm được áp dụng"
        
        :rules="[{ required: true
        }]"
      >
        <!-- name="value" -->
        <!-- , message: 'Please select product!'  -->
        <a-radio-group v-model:value="value" name="radioGroup">
          <a-radio value="1">Tất cả sản phẩm</a-radio>
          <a-radio value="2">Một số sản phẩm nhất định</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        v-if="value === '2'"
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Tên nhóm sản phẩm"
        name="name"
        :rules="[{ required: true, message: 'Please select product!' }]"
      >
        <span>asdhashd</span>
      </a-form-item>
    </a-flex>
    <span @click="test"> a </span>
  </a-modal>
</template>

<script setup>
import { ref } from "vue";
const open = ref(true);
const value = ref("1");
const test = () => {
  console.log(value.value);
};
</script>

<style scoped></style>
