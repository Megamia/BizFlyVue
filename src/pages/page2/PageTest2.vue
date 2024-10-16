<template>
  <a-flex
    vertical
    style="flex: 1; padding: 24px; gap: 24px; background-color: white"
  >
    <span style="font-size: 20px; line-height: 28px; font-weight: 700"
      >Thiết lập ưu đãi</span
    >
    <a-flex
      vertical
      style="background-color: #f5f5f5; padding: 16px; gap: 16px"
    >
      <span> Khách hàng sẽ nhận được ưu đãi khi thõa mãn điều kiện sau: </span>
      <div
        v-for="(concessionary, index) in concessionaryData"
        :key="index"
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
          <span style="font-size: 14px; font-weight: bold">
            Ưu đãi {{ index }}
          </span>
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
            <DeleteOutlined @click="del(index)" />
          </a-flex>
        </a-flex>
        <a-flex vertical style="padding: 16px; gap: 20px">
          <a-flex vertical style="gap: 12px">
            <span style="font-size: 14px; line-height: 22px; font-weight: bold">
              Loại giảm giá | Mức giảm
            </span>
            <a-flex
              vertical
              style="background-color: #f5f5f5; padding: 16px; gap: 16px"
            >
              <a-flex horizon gap="16">
                <a-select
                  ref="select"
                  v-model:value="value1"
                  style="width: 180px"
                >
                  <a-select-option value="order"
                    >Giảm giá đơn hàng</a-select-option
                  >
                  <a-select-option value="price"
                    >Giảm giá tiền công</a-select-option
                  >
                  <a-select-option value="gift">Quà tặng</a-select-option>
                </a-select>
                <a-flex style="flex: 1" v-if="value1 === 'order'">
                  <a-select
                    ref="select"
                    v-model:value="value2"
                    style="width: 180px"
                    class="a"
                  >
                    <a-select-option value="money"
                      >Theo số tiền</a-select-option
                    >
                    <a-select-option value="percent"
                      >Theo phần trăm</a-select-option
                    >
                  </a-select>
                  <a-input
                    placeholder="Nhập giá trị"
                    style="display: flex; flex: 1"
                    :value="money"
                    v-if="value2 === 'money'"
                  >
                    <template #suffix>
                      <PlusOutlined style="color: #00000040" />
                    </template>
                  </a-input>
                  <a-input
                    placeholder="Nhập giá trị"
                    :value="percent"
                    v-if="value2 === 'percent'"
                  >
                    <template #suffix>
                      <PercentageOutlined style="color: #00000040" />
                    </template>
                  </a-input>
                </a-flex>
                <a-flex
                  v-else-if="value1 === 'gift'"
                  gap="26"
                  style="align-items: center; flex: 1"
                >
                  <span style="font-size: 14px; line-height: 22px"
                    >Tặng 1 trong các quà sau đây khi thỏa mãn điều kiện ưu đãi
                  </span>
                  <a-select
                    ref="select"
                    v-model:value="value3"
                    style="width: 180px"
                    class="a"
                  >
                    <a-select-option value="1" @click="showmodal('Bizshop')"
                      >Từ Bizshop</a-select-option
                    >
                    <a-select-option value="2" @click="showmodal('Hệ thống')"
                      >Từ hệ thống</a-select-option
                    >
                    <a-select-option value="3" @click="showmodal('Excel')"
                      >Từ Excel</a-select-option
                    >
                  </a-select>
                </a-flex>
              </a-flex>
              <a-flex vertical style="gap: 8px">
                <span> Mức giảm tối đa </span>
                <a-flex style="align-items: center; flex: 1; height: 100%">
                  <a-radio-group v-model:value="sale" style="display: flex">
                    <a-radio :value="1">Không giới hạn</a-radio>
                    <a-radio :value="2">Có giới hạn</a-radio>
                  </a-radio-group>
                  <a-input
                    type="number"
                    placeholder="Nhập số tiền"
                    v-if="sale === 2"
                    :value="limited"
                    style="width: 180px"
                  >
                    <template #suffix>
                      <PlusOutlined style="color: #00000040" />
                    </template>
                  </a-input>
                </a-flex>
              </a-flex>
            </a-flex>
          </a-flex>
          <a-flex vertical style="gap: 12px">
            <span style="font-size: 14px; line-height: 22px; font-weight: bold">
              Nhóm sản phẩm và điều kiện áp dụng
            </span>
            <!-- <a-flex
              vertical
              style="
                background-color: #f5f5f5;
                border-radius: 2px;
                padding: 16px;
                gap: 16px;
              "
            >
              <span>Thỏa mãn điều kiện</span>
              <a-flex gap="16">
                <button
                  style="padding-block: 5px; padding-inline: 16px; height: 32px"
                >
                  Khi mua
                </button>
                <a-flex
                  vertical
                  gap="12"
                  style="
                    border-left: 2px solid #e57099;
                    padding: 16px;
                    background-color: white;
                    flex: 1;
                  "
                >
                  <a-flex style="flex: 1" gap="12">
                    <span>Nhóm sản phẩm kim cương viên</span>
                    <span style="color: #00000073"> | </span>
                    <a-typography-paragraph
                      v-model:content="editableStr"
                      editable
                      style="color: #00000073"
                    />
                    <span
                      style="display: flex; flex: 1; justify-content: flex-end"
                      >X</span
                    >
                  </a-flex>
                  <a-flex gap="12" style="flex: 1">
                    <a-select
                      ref="select"
                      v-model:value="condition1"
                      style="flex: 1"
                    >
                      <a-select-option value="valueOrder"
                        >Giá trị đơn hàng</a-select-option
                      >
                      <a-select-option value="lucy">abc</a-select-option>
                    </a-select>
                    <a-select
                      ref="select"
                      v-model:value="condition2"
                      style="flex: 1"
                    >
                      <a-select-option value="time"
                        >Trong khoảng</a-select-option
                      >
                      <a-select-option value="lucy">4556</a-select-option>
                    </a-select>
                    <a-range-picker
                      style="flex: 2"
                      :show-time="{ format: 'HH:mm' }"
                      format="YYYY-MM-DD HH:mm"
                      :placeholder="['Start Time', 'End Time']"
                    />
                  </a-flex>
                 
                </a-flex>
              </a-flex>
            </a-flex> -->
            <a-flex>
              <div style="color: #e57099">
                <PlusOutlined />
                Thêm mới
              </div>
            </a-flex>
          </a-flex>
        </a-flex>
      </div>
      <a-button
        style="
          width: 135px;
          color: #e57099;
          border-radius: 0;
          border: 1px solid #e57099;
        "
        @click="test"
      >
        <PlusCircleOutlined />
        thêm mới
      </a-button>
      <ModalBizshop v-if="value3 === '1'" />
    </a-flex>
  </a-flex>
</template>
<script setup>
import {
  CopyOutlined,
  DeleteOutlined,
  PercentageOutlined,
  PlusOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import ModalBizshop from "./modal/ModalBizshop.vue";

const money = ref("100.000đ");
const percent = ref("");
// const editableStr = ref("abc");
const limited = ref("");
const sale = ref(1);
const value1 = ref("order");
const value2 = ref("money");
const value3 = ref("Thêm quà tặng");

const concessionaryData = ref([]);
// const condition1 = ref("valueOrder");
// const condition2 = ref("time");
const copy = () => {
  console.log("Copy");
};
const del = (index) => {
  console.log("Delete");
  concessionaryData.value.splice(index, 1);
};

// const changevalue = (values) => {
//   value1.value = values;
//   console.log(values);
// };

const showmodal = (values) => {
  console.log(values);
  console.log(value3.value);
};

const test = () => {
  console.log("Add");
  concessionaryData.value.push([]);
};

const checkNum = () => {
  if (concessionaryData.value.length === 0) {
    concessionaryData.value.push([]);
  }
};
onMounted(() => checkNum());
</script>

<style lang="scss" scoped></style>
