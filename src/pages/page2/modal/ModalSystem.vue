<template>
  <a-modal v-model:open="open" width="720px" @cancel="cancel">
    <template #title> Chọn sản phẩm từ hệ thống </template>
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
          <!-- @change="handleChange" -->
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
        <a-select ref="select" v-model:value="value2" style="width: 180px">
          <!-- @change="handleChange" -->
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
        <a-input-search
          v-model:value="value3"
          placeholder="Nhập tên sản phẩm hoặc mã ID"
          style="width: 280px"
        />
        <!-- @search="onSearch" -->
      </a-flex>
      <a-flex style="justify-content: space-between; flex: 1">
        <a-dropdown>
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-flex vertical gap="12" style="padding: 20px; border-radius: 0">
                <span style="font-size: 16px; font-weight: bold">Bộ lọc</span>
                <a-flex
                  gap="16"
                  style="align-items: center"
                  v-for="(item, index) in loop"
                  :key="index"
                >
                  <span style="font-size: 14px; flex: 1" v-if="index === 0"
                    >Điều kiện
                  </span>
                  <a-select
                    ref="select"
                    v-model:value="value6"
                    style="flex: 1"
                    v-if="index > 0"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                  </a-select>
                  <a-flex gap="16">
                    <a-select
                      ref="select"
                      v-model:value="value4"
                      style="width: 180px"
                      placeholder="Chọn trường"
                    >
                      <!-- @change="handleChange" -->
                      <a-select-option value="jack">Jack</a-select-option>
                      <a-select-option value="lucy">Lucy</a-select-option>
                    </a-select>
                    <a-select
                      ref="select"
                      v-model:value="value5"
                      style="width: 140px"
                      placeholder="Chọn giá trị"
                    >
                      <!-- @change="handleChange" -->
                      <a-select-option value="jack">Jack</a-select-option>
                      <a-select-option value="lucy">Lucy</a-select-option>
                    </a-select>
                    <a-input
                      v-model:value="value3"
                      placeholder="Nhập dữ liệu"
                      style="width: 149px"
                    />
                    <!-- @search="onSearch" -->
                  </a-flex>
                  <span
                    @click="del(index)"
                    :style="{ cursor: index > 0 ? 'pointer' : '' }"
                  >
                    X</span
                  >
                </a-flex>
                <a-flex>
                  <span
                    style="
                      display: flex;
                      gap: 10px;
                      align-items: center;
                      color: #e57099;
                      cursor: pointer;
                    "
                    @click="addnew"
                  >
                    <PlusOutlined />
                    Thêm điều kiện
                  </span>
                </a-flex>
                <a-flex gap="16" style="flex: 1; justify-content: flex-end">
                  <a-button @click="cancel" style="border-radius: 0"
                    >Hủy</a-button
                  >
                  <a-button
                    style="
                      background-color: #e57099;
                      color: white;
                      border-radius: 0;
                    "
                    @click="handleOk"
                  >
                    Áp dụng
                  </a-button>
                </a-flex>
              </a-flex>
            </a-menu>
          </template>
          <a-button>
            <FilterOutlined />
            Thêm bộ lọc
            <DownOutlined />
          </a-button>
        </a-dropdown>
        <a-button>
          <ReloadOutlined />
          Đặt lại
        </a-button>
      </a-flex>
      <a-flex style="max-height: 350px; overflow-y: scroll">
        <a-table
          :row-selection="rowSelection"
          :columns="columns"
          :data-source="data"
          style="flex: 1"
          :bordered="true"
        >
          <!-- :pagination="{ pageSize: 2 }" -->
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
import {
  PlusOutlined,
  DownOutlined,
  FilterOutlined,
  ReloadOutlined,
} from "@ant-design/icons-vue";
const emit = defineEmits(["cancel"]);

const columns = ref([
  { title: "Sản phẩm", dataIndex: "name" },
  { title: "Giá", dataIndex: "price" },
]);

const loop = ref([[]]);
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

const handleMenuClick = () => {
  console.log("a");
};
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
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref("Và");

const addnew = () => {
  loop.value.push([]);
};
const del = (index) => {
  if (index > 0) {
    loop.value.splice(index, 1);
  } else {
    return;
  }
};
const handleOk = (e) => {
  console.log(e);
};

const cancel = (e) => {
  console.log(e);
  emit("cancel");
};

// const renderFooter = () => {
//   return `${ numberProductSelected.value } số sản phẩm đã chọn`;
// };
// :footer="renderFooter"
</script>

<style scoped></style>
