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
      gap: 20px;
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
      <div
        style="
          display: flex;
          flex: 1;
          background-color: white;
          padding: 20px;
          gap: 24px;
          border-radius: 2px;
          margin-top: 70px;
        "
      >
        <div style="flex: 1">
          <a-form-item
            style="display: flex; flex-direction: column"
            :colon="false"
            :labelAlign="'left'"
            label="Các kí tự được cho phép"
            :rules="[
              {
                required: true,
                message: 'Please select code!',
              },
            ]"
          >
            <a-select
              v-model:value="valueData"
              show-search
              :options="options"
              placeholder="Select a person"
              :filter-option="filterOption"
            >
            </a-select>
          </a-form-item>
        </div>
        <div style="flex: 1">
          <a-form-item
            style="display: flex; flex-direction: column; flex: 1"
            :colon="false"
            :labelAlign="'left'"
            label="Độ dài"
            :rules="[
              {
                required: true,
                message: 'Please select code!',
              },
            ]"
          >
            <a-input
              v-model:value="formState.codeSuffix"
              placeholder="Nhập số"
            />
          </a-form-item>
        </div>
      </div>
    </a-form-item>

    <div
      style="
        display: flex;
        flex: 1;
        flex-direction: row;
        gap: 20px;
        margin-top: 70px;
      "
    >
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Số lượng mã"
        name="quantityCode"
        :rules="[
          {
            required: true,
            message: 'Please input quantity code!',
          },
        ]"
      >
        <a-input
          v-model:value="formState.quantityCode"
          placeholder="Nhập số lượng mã"
        />
      </a-form-item>
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
      <a-form-item
        style="display: flex; flex-direction: column"
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
        <a-input v-model:value="formState.maxUsePerDay" placeholder="Nhập số" />
      </a-form-item>
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
import { ref, reactive } from "vue";

const valueData = ref(null);
const options = ref([
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "tom", label: "Tom" },
]);
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
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<style scoped></style>
