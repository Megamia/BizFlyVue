<template>
  <a-modal v-model:open="open" width="720px">
    <template #title>
      <span> Thêm nhóm sản phẩm </span>
    </template>
    <template #footer>
      <a-flex
        gap="8"
        style="flex: 1; justify-content: flex-end; align-self: center"
      >
        <a-button style="border-radius: 0">Hủy</a-button>
        <a-button
          style="background-color: #e57099; color: white; border-radius: 0"
          >Lưu lại</a-button
        >
      </a-flex>
    </template>
    <a-flex vertical style="border-block: 1px solid #f0f0f0; padding-top: 24px">
      <a-form-item
        style="display: flex; flex-direction: column"
        :colon="false"
        :labelAlign="'left'"
        label="Sản phẩm được áp dụng"
        :rules="[{ required: true }]"
      >
        <a-radio-group v-model:value="value" name="radioGroup">
          <a-radio value="1">Tất cả sản phẩm</a-radio>
          <a-radio value="2">Một số sản phẩm nhất định</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-flex vertical v-if="value === '2'">
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Tên nhóm sản phẩm"
          name="name"
          :rules="[{ required: true, message: 'Please select product!' }]"
        >
          <a-input
            v-model:value="name"
            placeholder="Gợi ý đặt tên theo cú pháp: Nhóm sản phẩm + [tên loại/danh mục sản phẩm]. Ví dụ: Nhóm sản phẩm áo thun nữ"
          />
        </a-form-item>
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Thêm sản phẩm"
          :rules="[{ required: false }]"
        >
          <a-flex gap="24" style="flex: 1">
            <a-button
              style="flex: 1; border: 1px solid #e57099; color: #e57099"
              @click="showModal(1)"
            >
              <ShopOutlined />
              Từ Bizshop
            </a-button>
            <a-button
              style="flex: 1; border: 1px solid #e57099; color: #e57099"
              @click="showModal(2)"
            >
              <FileTextOutlined />
              Từ Hệ thống
            </a-button>
            <a-button
              style="flex: 1; border: 1px solid #e57099; color: #e57099"
              @click="showModal(3)"
            >
              <FileExcelOutlined />
              Từ Excel
            </a-button>
          </a-flex>
        </a-form-item>
      </a-flex>
    </a-flex>
    <ModalBizshop v-if="isShowModal === 1" @cancel="cancel" />
    <ModalSystem v-if="isShowModal === 2" @cancel="cancel" />
    <ModalExcelWithoutData
      v-if="isShowModal === 3 && !haveData"
      @getdata="getdata"
      @cancel="cancel"
    />
    <ModalExcelWithData
      v-if="isShowModal === 3 && haveData"
      @cancel="cancel"
      @otherExcel="otherExcel"
    />
  </a-modal>
</template>

<script setup>
import {
  ShopOutlined,
  FileTextOutlined,
  FileExcelOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import ModalBizshop from "./ModalBizshop.vue";
import ModalSystem from "./ModalSystem.vue";
import ModalExcelWithoutData from "./ModalExcelWithoutData.vue";
import ModalExcelWithData from "./ModalExcelWithData.vue";
const open = ref(true);
const haveData = ref(false);
const value = ref("1");
const name = ref("");
const isShowModal = ref(0);
const showModal = (values) => {
  isShowModal.value = values;
};
const cancel = () => {
  isShowModal.value = null;
};
const getdata = () => {
  haveData.value = !haveData.value;
};
const otherExcel = () => {
  haveData.value = !haveData.value;
};
</script>

<style scoped></style>
