<template>
  <a-flex
    vertical
    gap="24"
    style="background-color: white; flex: 1; padding: 24px"
  >
    <span style="font-size: 20px; font-weight: bold"
      >Khu vực và đối tượng
    </span>
    <a-flex vertical>
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Khu vực áp dụng"
        :rules="[{ required: true }]"
      >
        <!-- name="value" -->
        <!-- , message: 'Please select product!'  -->
        <a-radio-group
          v-model:value="value1"
          name="radioGroup"
          style="display: flex; gap: 40px"
        >
          <a-radio value="1">Tất cả </a-radio>
          <a-radio value="2">Khu vực xác định</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Đối tượng áp dụng"
        :rules="[{ required: true }]"
      >
        <!-- name="value" -->
        <!-- , message: 'Please select product!'  -->
        <a-radio-group
          v-model:value="value2"
          name="radioGroup"
          style="display: flex; gap: 40px"
        >
          <a-radio value="1">Tất cả khách hàng </a-radio>
          <a-radio value="2">Theo phân hạng</a-radio>
          <a-radio value="3">Theo danh sách thành viên Loyalty</a-radio>
          <a-radio value="4">Tùy chỉnh</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-flex>
    <a-flex
      style="
        flex: 1;
        justify-content: flex-end;
        padding-top: 16px;
        border-top: 1px solid #0000000f;
      "
    >
      <a-button
        style="background-color: #e57099; border-radius: 0; color: white"
      >
        Lưu</a-button
      >
    </a-flex>
  </a-flex>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(1);
const value2 = ref(1);
</script>
<style scoped></style>
