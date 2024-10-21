<template>
  <a-modal v-model:open="open" width="640px">
    <a-flex vertical gap="24" style="padding: 30px 0 4px 0; flex: 1">
      <a-flex
        gap="16"
        style="
          padding: 16px;
          border-radius: 2px;
          background-color: #55cc770d;
          flex: 1;
        "
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM20.0469 9.42813L13.4656 18.5531C13.3736 18.6815 13.2524 18.7861 13.1119 18.8583C12.9714 18.9305 12.8157 18.9681 12.6578 18.9681C12.4999 18.9681 12.3442 18.9305 12.2037 18.8583C12.0632 18.7861 11.942 18.6815 11.85 18.5531L7.95312 13.1531C7.83437 12.9875 7.95312 12.7563 8.15625 12.7563H9.62187C9.94063 12.7563 10.2437 12.9094 10.4312 13.1719L12.6562 16.2594L17.5688 9.44687C17.7563 9.1875 18.0562 9.03125 18.3781 9.03125H19.8438C20.0469 9.03125 20.1656 9.2625 20.0469 9.42813Z"
            fill="#55CC77"
          />
        </svg>

        <a-flex vertical>
          <span style="color: #55cc77">Tải file Excel lên thành công</span>
          <span
            >Tải lên thành công 100 sản phẩm.
            <a-typography-link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Xem chi tiết
            </a-typography-link></span
          >
        </a-flex>
      </a-flex>
      <a-flex vertical gap="16">
        <span>Danh sách sản phẩm tải lên thành công</span>
        <a-flex
          style="
            max-height: 350px;
            width: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
          "
        >
          <a-table
            :columns="columns"
            :data-source="data1"
            :pagination="false"
            :bordered="true"
          >
            <template #bodyCell="{ column, record, index }">
              <template v-if="column.dataIndex === 'stt'">
                <a-flex style="align-items: center; justify-content: center">
                  <span style="text-align: center">{{ index }}</span>
                </a-flex>
              </template>
              <template v-if="column.dataIndex === 'product'">
                <a-flex gap="8" style="padding: 16px 16px 16px 0">
                  <img :src="record.src" style="width: 48px; height: 48px" />
                  <a-flex vertical>
                    <span>{{ record.product }}</span>
                    <span>{{ record.id }}</span>
                  </a-flex>
                </a-flex>
              </template>
              <template v-if="column.dataIndex === 'price'">
                <a-flex>
                  <span> {{ record.price }} ₫ </span>
                </a-flex>
              </template>
            </template>
          </a-table>
        </a-flex>
      </a-flex>
    </a-flex>
    <template #footer>
      <a-flex
        gap="16"
        style="align-items: center; flex: 1; justify-content: flex-end"
      >
        <span style="font-size: 14px; color: black">
          {{ numberProductSelected }} sản phẩm đã được thêm
        </span>
        <a-flex>
          <a-button @click="otherExcel"> Chọn file excel khác</a-button>
          <a-button
            style="background-color: #e57099; color: white"
            @click="havedata"
          >
            Áp dụng</a-button
          >
        </a-flex>
      </a-flex>
    </template>
  </a-modal>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";

const emit = defineEmits(["otherExcel", "havedata"]);
const open = ref(true);
const otherExcel = () => {
  emit("otherExcel");
};
const numberProductSelected = ref(0);
onMounted(() => {
  const getData = () => {
    numberProductSelected.value = data1.length;
  };
  getData();
});

const havedata = () => {
  emit("havedata");
};
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    width: 67,
  },
  {
    title: "Sản phẩm",
    dataIndex: "product",
    key: "product",
    width: 385,
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
    ellipsis: true,
    width: 140,
  },
];
const data1 = [
  {
    key: "1",
    product: "John Brown",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "2",
    product: "Jim Green",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "3",
    product: "Joe Black",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "4",
    product: "Joe Black4",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    price: "500.000",
    id: 123456789,
  },
];
</script>

<style scoped></style>
