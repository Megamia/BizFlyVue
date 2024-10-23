<template>
  <a-flex
    vertical
    
    style="background-color: white; flex: 1; padding: 24px"
  >
  <a-flex vertical gap="24">
    <a-flex>
      <span style="font-size: 20px; font-weight: bold"
        >Khu vực và đối tượng
      </span>
    </a-flex>
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
        <a-flex vertical gap="16">
          <a-radio-group
            v-model:value="value1"
            name="radioGroup"
            style="display: flex; gap: 40px"
          >
            <a-radio value="1">Tất cả </a-radio>
            <a-radio value="2">Khu vực xác định</a-radio>
          </a-radio-group>
          <a-select
            v-if="value1 === '2'"
            v-model:value="value3"
            mode="multiple"
            style="width: 100%"
            placeholder="Please select"
            :options="
              [...Array(25)].map((_, i) => ({
                value: (i + 10).toString(36) + (i + 1),
              }))
            "
          />
        </a-flex>
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
        <a-flex vertical gap="24">
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
          <a-form-item
            v-if="value2 === '2'"
            style="display: flex; flex-direction: column"
            :colon="false"
            :labelAlign="'left'"
            label="Phân hạng áp dụng"
            :rules="[{ required: true }]"
          >
          <a-select
            v-model:value="value4"
            mode="multiple"
            style="width: 100%"
            placeholder="Please select"
            :options="
              [...Array(25)].map((_, i) => ({
                value: (i + 10).toString(36) + (i + 1),
              }))
            "
          />
          </a-form-item>
          <a-form-item
            v-if="value2 === '3'"
            style="display: flex; flex-direction: column"
            :colon="false"
            :labelAlign="'left'"
            label="Danh sách thành viên Loyalty áp dụng "
            :rules="[{ required: true }]"
          >
          <a-select
            v-model:value="value5"
            mode="multiple"
            style="width: 100%"
            placeholder="Please select"
            :options="
              [...Array(25)].map((_, i) => ({
                value: (i + 10).toString(36) + (i + 1),
              }))
            "
          />
          </a-form-item>
          <a-form-item
            v-if="value2 === '4'"
            style="display: flex; flex-direction: column"
            :colon="false"
            :labelAlign="'left'"
            label="Phân hạng áp dụng"
            :rules="[{ required: true }]"
          >
            <a-input placeholder="Nhập thông tin" v-model:value="value6" />
          </a-form-item>
        </a-flex>
      </a-form-item>
    </a-flex>
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
        @click="test"
      >
        Lưu</a-button
      >
    </a-flex>
  </a-flex>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("1");
const value2 = ref("1");
const value3 = ref(["a1", "b1"]);
const value4 = ref(["a1", "b1"]);
const value5 = ref(["a1", "b1"]);
const value6 = ref("");

const test = () => {
  console.log(value1.value);
};
</script>
<style scoped>
:deep(.ant-form-item){
  /* background-color: red; */
  margin: 0;
  padding-bottom: 10px
}
</style>
