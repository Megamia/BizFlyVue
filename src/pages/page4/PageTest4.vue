<template>
  <a-flex
    vertical
    gap="24"
    style="background-color: white; flex: 1; padding: 24px"
  >
    <a-flex>
      <span style="font-size: 20px; font-weight: bold"> Cấu hình gửi tin </span>
    </a-flex>
    <a-flex vertical style="border: 1px solid #0000000f">
      <a-flex
        gap="24px"
        style="
          flex: 1;
          padding: 16px 24px 16px 24px;
          border-bottom: 1px solid #0000000f;
          justify-content: space-between;
          background-color: #fafafa;
        "
      >
        <span>Zalo OA đã đăng ký ZNS</span>
        <a-switch v-model:checked="checked" />
      </a-flex>

      <a-flex vertical gap="8" style="padding: 24px" v-if="checked">
        <a-flex style="flex: 1; justify-content: space-between">
          <span> Mẫu ZNS </span>
          <span>
            <a-typography-link>Cách tạo mẫu ZNS</a-typography-link>
          </span>
        </a-flex>
        <a-flex style="padding-bottom: 10px">
          <a-select
            ref="select"
            v-model:value="value1"
            style="flex: 1"
            placeholder="Chọn mẫu"
          >
            <a-select-option value="a">a</a-select-option>
            <a-select-option value="lucy">abc</a-select-option>
          </a-select>
        </a-flex>
        <a-flex v-if="value1 === 'a'">
          Đồng bộ các tùy biến trong tin nhắn mẫu ZNS trên với Loyalty Bizfly:
          <a-flex>
          <a-flex></a-flex>
          </a-flex>
        </a-flex>
      </a-flex>
    </a-flex>
    <a-flex style="flex: 1; justify-content: flex-end">
      <a-button
        style="border-radius: 0; background-color: #e57099; color: white"
        >Lưu</a-button
      >
    </a-flex>
  </a-flex>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const checked = ref(false);
</script>

<style scoped></style>
