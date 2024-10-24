<template>
  <a-modal v-model:open="open" width="720px" @cancel="cancel">
    <template #title> Chọn sản phẩm từ Bizshop </template>
    <template #footer>
      <a-flex
        gap="16"
        style="align-items: center; flex: 1; justify-content: flex-end"
      >
        <span> {{ numberProductSelected }} sản phẩm đã được chọn </span>
        <a-flex>
          <a-button @click="cancel">Hủy</a-button>
          <a-button
            style="background-color: #e57099; color: white"
            @click="handleOk"
          >
            Áp dụng
          </a-button>
        </a-flex>
      </a-flex>
    </template>
    <a-flex
      vertical
      gap="20"
      style="border-block: 1px solid #f0f0f0; padding: 24px"
    >
      <a-flex gap="16">
        <a-select ref="select" v-model:value="value1" style="width: 180px">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
        <a-select ref="select" v-model:value="value2" style="width: 180px">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
        <a-input-search
          v-model:value="value3"
          placeholder="Nhập tên sản phẩm hoặc mã ID"
          style="width: 280px"
        />
      </a-flex>
      <a-flex style="max-height: 350px; overflow-y: scroll">
        <a-table
          :row-selection="rowSelection"
          :columns="columns"
          :data-source="data"
          style="flex: 1"
          :bordered="true"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'name'">
              <a-flex gap="8" style="padding: 16px 16px 16px 0">
                <img :src="record.src" style="width: 48px; height: 48px" />
                <a-flex vertical>
                  <span>{{ record.name }}</span>
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
  </a-modal>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["cancel"]);

const columns = ref([
  { title: "Sản phẩm", dataIndex: "name" },
  { title: "Giá", dataIndex: "price" },
]);

const data = ref([
  {
    key: "1",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Đầm lụa hoa nền đen",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "2",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Quần dài hoa nền đen túi chéo",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "3",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Áo 2 dây kem trắng",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "4",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Jupe hồng cam viền cạp đen",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "5",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Sơ mi lụa khoét cổ",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "6",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Sơ mi cam buộc dây",
    price: "500.000",
    id: 123456789,
  },
  {
    key: "7",
    src: "https://thienha3d.vn/wp-content/uploads/2018/07/tranh-phong-canh-kho-doc-dep-nhat-cho-phong-khach-5.jpg",
    name: "Jupe hồng cam viền cạp đen",
    price: "500.000",
    id: 123456789,
  },
]);

const numberProductSelected = ref(0);
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    numberProductSelected.value = selectedRowKeys.length;
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};
const open = ref(true);
const value1 = ref("Tất cả danh mục");
const value2 = ref("Tất cả thương hiệu");
const value3 = ref("");

const handleOk = (e) => {
  console.log(e);
};

const cancel = (e) => {
  console.log(e);
  emit("cancel");
};
</script>

<style scoped></style>
