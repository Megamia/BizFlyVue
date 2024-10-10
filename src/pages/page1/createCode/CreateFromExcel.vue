<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      gap: 24px;
      border: 1px solid #f0f0f0;
    "
  >
    <a-form>
      <a-form-item>
        <a-flex
          style="
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 24px;
            flex: 1;
            flex-direction: row;
          "
        >
          <a-flex style="flex-direction: column">
            <span> Bước 1: Tải về và điền thông tin vào mẫu </span>
            <span>
              Xem thông tin hướng dẫn để điền thông tin bản mẫu
              <RouterLink to="/HomePage">tại đây</RouterLink>
            </span>
          </a-flex>
          <a-upload
            style="display: flex; flex: 1; justify-content: flex-end"
            :file-list="formState.fileList"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            name="file"
          >
            <a-button
              style="
                background-color: #e57099;
                color: white;
                padding-block: 4px;
                padding-inline: 15px;
                border-radius: 1px;
                border: 0 solid #e57099;
              "
            >
              <DownloadOutlined />
              Tải bản mẫu về
            </a-button>
          </a-upload>
        </a-flex>
      </a-form-item>

      <a-form-item>
        <a-flex style="flex-direction: column">
          <span> Bước 2: Tải tập file Excel </span>
          <a-upload-dragger
            v-model:fileList="formState.dragger"
            name="files"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
          >
            <p class="ant-upload-drag-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1239_124011)">
                  <path
                    d="M24.3382 21.1644C24.2981 21.1132 24.2469 21.0718 24.1884 21.0433C24.1299 21.0148 24.0657 21 24.0007 21C23.9356 21 23.8714 21.0148 23.813 21.0433C23.7545 21.0718 23.7033 21.1132 23.6632 21.1644L17.6632 28.7555C17.6137 28.8187 17.583 28.8945 17.5746 28.9743C17.5662 29.0541 17.5804 29.1346 17.6156 29.2067C17.6508 29.2788 17.7056 29.3395 17.7737 29.3819C17.8418 29.4243 17.9205 29.4468 18.0007 29.4466H21.9596V42.4323C21.9596 42.668 22.1525 42.8609 22.3882 42.8609H25.6025C25.8382 42.8609 26.031 42.668 26.031 42.4323V29.4519H30.0007C30.3596 29.4519 30.5578 29.0394 30.3382 28.7609L24.3382 21.1644Z"
                    fill="#E57099"
                  />
                  <path
                    d="M40.0393 16.2063C37.5857 9.73484 31.3339 5.13306 24.0107 5.13306C16.6875 5.13306 10.4357 9.72949 7.98214 16.2009C3.39107 17.4063 0 21.5902 0 26.5616C0 32.4813 4.79464 37.2759 10.7089 37.2759H12.8571C13.0929 37.2759 13.2857 37.0831 13.2857 36.8473V33.6331C13.2857 33.3973 13.0929 33.2045 12.8571 33.2045H10.7089C8.90357 33.2045 7.20536 32.4866 5.94107 31.1848C4.68214 29.8884 4.0125 28.142 4.07143 26.3313C4.11964 24.917 4.60179 23.5884 5.475 22.4688C6.36964 21.3277 7.62321 20.4973 9.01607 20.1277L11.0464 19.5973L11.7911 17.6366C12.2518 16.4152 12.8946 15.2741 13.7036 14.2402C14.5022 13.2154 15.4481 12.3146 16.5107 11.567C18.7125 10.0188 21.3054 9.19913 24.0107 9.19913C26.7161 9.19913 29.3089 10.0188 31.5107 11.567C32.5768 12.317 33.5196 13.217 34.3179 14.2402C35.1268 15.2741 35.7696 16.4206 36.2304 17.6366L36.9696 19.592L38.9946 20.1277C41.8982 20.9098 43.9286 23.5509 43.9286 26.5616C43.9286 28.3348 43.2375 30.0063 41.9839 31.2598C41.3692 31.8782 40.6378 32.3685 39.8323 32.7023C39.0268 33.0361 38.163 33.2068 37.2911 33.2045H35.1429C34.9071 33.2045 34.7143 33.3973 34.7143 33.6331V36.8473C34.7143 37.0831 34.9071 37.2759 35.1429 37.2759H37.2911C43.2054 37.2759 48 32.4813 48 26.5616C48 21.5956 44.6196 17.417 40.0393 16.2063Z"
                    fill="#E57099"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1239_124011">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p class="ant-upload-text">Chọn hoặc kéo file Excel vào đây</p>
            <p class="ant-upload-hint">
              Số lượng tối đa cho mỗi lượt thêm hàng loạt là 1000 mã Chỉ hỗ trợ
              các tập tin định dạng: xlxs, xls
            </p>
          </a-upload-dragger>
        </a-flex>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { DownloadOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { message } from 'ant-design-vue';
const formState = reactive({
  fileList: [],
  dragger: [],
});
const handleChange = (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
</script>

<style scoped></style>
