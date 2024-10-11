<template>
  <a-flex
    vertical
    style="flex: 1; padding: 24px; gap: 24px; background-color: white"
  >
    <span style="font-size: 20px; line-height: 28px; font-weight: 700"
      >Thiết lập ưu đãi</span
    >
    <a-flex style="background-color: #f5f5f5; padding: 16px; gap: 16px">
      <div
        style="
          display: flex;
          flex-direction: column;
          flex: 1;
          background-color: white;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
        "
      >
        <a-flex
          style="flex: 1; border-bottom: 1px solid #d9d9d9; padding: 16px"
        >
          Ưu đãi 1
          <a-flex
            style="
              align-items: center;
              gap: 20px;
              flex: 1;
              justify-content: flex-end;
              color: #e57099;
            "
          >
            <CopyOutlined @click="copy" />
            <DeleteOutlined @click="del" />
          </a-flex>
        </a-flex>
        <a-flex style="padding:16px">
        <span>
          Loại giảm giá | Mức giảm
        </span>
        </a-flex>
      </div>
    </a-flex>
  </a-flex>
</template>
<script setup>
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons-vue";

const copy = () => {
  console.log("Copy");
};
const del = () => {
  console.log("Delete");
};
</script>

<style scoped></style>
