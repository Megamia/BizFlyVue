<template>
  <a-modal v-model:open="open" width="640px">
    <template #title>
      <span style="font-size: 20px"> Chọn sản phẩm từ file Excel </span>
    </template>
    <a-flex
      vertical
      gap="20"
      style="border-top: 1px solid #f0f0f0; padding-block: 24px"
    >
      <a-flex
        gap="20"
        style="
          padding-bottom: 24px;
          align-items: center;
          border-bottom: 1px solid #f0f0f0;
        "
      >
        <a-flex vertical style="flex: 1">
          <span style="font-size: 14px; font-weight: bold">
            Bước 1: Tải về và điền thông tin vào mẫu
          </span>
          <span style="font-size: 14px">
            Xem thông tin hướng dẫn để điền thông tin bản mẫu
            <a-typography-link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              tại đây
            </a-typography-link>
          </span>
        </a-flex>
        <a-flex>
          <a-upload
            v-model:file-list="fileList"
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="handleChange"
          >
            <a-button style="background-color: #e57099; color: white">
              <DownloadOutlined />
              Tải bản mẫu về
            </a-button>
          </a-upload>
        </a-flex>
      </a-flex>
      <a-flex vertical gap="12">
        <span style="font-size: 14px; font-weight: bold">
          Bước 2: Tải tập file Excel
        </span>
        <a-flex>
          <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
            @drop="handleDrop"
          >
            <a-flex
              vertical
              gap="20"
              style="align-items: center; padding: 24px 80px 24px 80px"
            >
              <CloudUploadOutlined style="font-size: 48px; color: #e57099" />
              <span style="font-size: 16px; font-weight: 500">
                Chọn hoặc kéo file Excel vào đây
              </span>
              <span style="font-size: 14px">
                Số lượng tối đa cho mỗi lượt thêm hàng loạt là 100 sản phẩm. Chỉ
                hỗ trợ các tập tin định dạng: xlxs, xls
              </span>
              <a-button style="background-color: #e57099; color: white" @click="getdata">
                Chọn tập tin
              </a-button>
            </a-flex>
          </a-upload-dragger>
        </a-flex>
      </a-flex>
    </a-flex>
    <template #footer>
    </template>
  </a-modal>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { message } from "ant-design-vue";
import { CloudUploadOutlined, DownloadOutlined } from "@ant-design/icons-vue";
const open = ref(true);
const emit = defineEmits(["getdata"]);

const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const fileList = ref([]);
const headers = {
  authorization: "authorization-text",
};
const getdata = () => {
  emit("getdata");
};
</script>

<style scoped></style>
