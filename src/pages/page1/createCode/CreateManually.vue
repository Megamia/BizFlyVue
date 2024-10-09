<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      gap: 4px;
      background-color: #f5f5f5;
    "
  >
    <!-- <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      style="
        display: flex;
        flex: 1;
        padding: 24px;
        background-color: #f5f5f5;
        flex-direction: column;
      "
    > -->
    <div>
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        :label="'Nhập mã'"
        name="area"
        :rules="[
          {
            required: true,
            message: 'Please select code!',
          },
        ]"
      >
        <a-textarea
          v-model:value="formState.area"
          placeholder="Ví dụ: Sinhnhat"
          allow-clear
          style="display: flex; flex: 1"
        />
        <span style="font-size: 14px; color: #00000073"
          >Mỗi mã cách nhau 1 dấu phẩy, tối đa 1000 mã</span
        >
      </a-form-item>
    </div>
    <div style="display: flex; flex: 1; flex-direction: row; gap: 24px">
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          :label="'Số lượt sử dụng tối đa/mã'"
          name="code"
          :rules="[
            {
              required: true,
              message: 'Please select code!',
            },
          ]"
        >
          <a-input v-model:value="formState.number" placeholder="Nhập số" />
        </a-form-item>
      </div>
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          :label="'Số lượt sử dụng tối đa/ngày'"
          name="day"
          :rules="[
            {
              required: true,
              message: 'Please select code!',
            },
          ]"
        >
          <a-input v-model:value="formState.number" placeholder="Nhập số" />
        </a-form-item>
      </div>
    </div>
    <!-- </a-form> -->
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formState = reactive({
  area: "",
  number: "",
});
</script>

<style scoped></style>
