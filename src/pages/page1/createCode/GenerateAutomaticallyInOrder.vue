<template>
  <!-- @finish="onFinish"
      @finishFailed="onFinishFailed" -->
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    style="
      display: flex;
      padding: 24px;
      background-color: #f5f5f5;
      flex-direction: column;
    "
  >
    <!-- <div
        style="
          display: flex;
          padding: 24px 24px 0 24px;
          background-color: #f5f5f5;
          flex-direction: column;
          gap: 20px;
        "
      > -->
    <a-form-item
      style="display: flex; flex-direction: column"
      :colon="false"
      :labelAlign="'left'"
      :rules="[
        {
          required: true,
          message: 'Please select code!',
        },
      ]"
    >
      <template #label>
        <span>
          Tiền tố mã
          <InfoCircleOutlined />
        </span>
      </template>
      <a-input v-model:value="formState.codePrefix" placeholder="Ví dụ: BL12" />
    </a-form-item>
    <div
      style="display: flex; flex-direction: row; margin-top: 20px; gap: 20px"
    >
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          :rules="[
            {
              required: true,
              message: 'Please select code!',
            },
          ]"
        >
          <template #label>
            <span>
              Hậu tố mã
              <InfoCircleOutlined />
            </span>
          </template>
          <a-input
            v-model:value="formState.codePrefix"
            placeholder="Ví dụ: 1236485"
          />
        </a-form-item>
      </div>
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          :rules="[
            {
              required: true,
              message: 'Please select code!',
            },
          ]"
        >
          <template #label>
            <span>
              Hậu tố mã
              <InfoCircleOutlined />
            </span>
          </template>
          <a-input
            v-model:value="formState.codePrefix"
            placeholder="Ví dụ: 1236485"
          />
        </a-form-item>
      </div>
    </div>
    .

    <div style="display: flex; flex: 1; flex-direction: row; gap: 20px">
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Số lượt sử dụng tối đa/mã"
          name="maxUsePerCode"
          :rules="[
            {
              required: true,
              message: 'Please input maximum number of uses/code!',
            },
          ]"
        >
          <a-input
            v-model:value="formState.maxUsePerCode"
            placeholder="Nhập số"
          />
        </a-form-item>
      </div>
      <div style="flex: 1">
        <a-form-item
          style="display: flex; flex-direction: column; flex: 1"
          :colon="false"
          :labelAlign="'left'"
          label="Số lượt sử dụng tối đa/ngày"
          name="maxUsePerDay"
          :rules="[
            {
              required: true,
              message: 'Please input maximum number of uses/code!',
            },
          ]"
        >
          <a-input
            v-model:value="formState.maxUsePerDay"
            placeholder="Nhập số"
          />
        </a-form-item>
      </div>
    </div>
    <!-- <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="background-color: #e57099"
        >
          Lưu
        </a-button>
      </a-form-item> -->
    <!-- </div> -->
  </a-form>
</template>

<script setup>
import { InfoCircleOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";

// const valueData = ref(null);
// const options = ref([
//   { value: "jack", label: "Jack" },
//   { value: "lucy", label: "Lucy" },
//   { value: "tom", label: "Tom" },
// ]);
const formState = reactive({
  nameProgram: "",
  code: "",
  budget: "",
  time: "",
  codePrefix: "",
  codeSuffix: "",
  quantityCode: "",
  maxUsePerCode: "",
  maxUsePerDay: "",
});
// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
// const filterOption = (input, option) => {
//   return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
// };
</script>

<style scoped></style>
