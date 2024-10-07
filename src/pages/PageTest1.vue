<template>
  <div
    style="
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: white;
      padding: 24px;
    "
  >
    <span
      style="
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: #000000d9;
      "
    >
      Thông tin cơ bản
    </span>
    <div>
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Tên chương trình"
          name="nameProgram"
          :rules="[
            {
              required: true,
              message: 'Please input name program!',
            },
          ]"
        >
          <a-input
            v-model:value="formState.nameProgram"
            placeholder="Nhập tên chương trình"
          />
        </a-form-item>

        <a-form-item
          style="display: flex; flex-direction: row; gap: 16px"
          :colon="false"
          label="Mã ưu đãi"
          name="code"
          :rules="[
            {
              required: false,
              message: 'Please input code!',
            },
          ]"
        >
          <a-button
            style="
              width: 103px;
              height: 32px;
              border-radius: 2px;
              border-color: #e57099;
            "
            type="dashed"
            block
            @click="showModal"
          >
            <span style="color: #e57099">
              <PlusOutlined />
              Tạo mã
            </span>
          </a-button>

          <a-modal
            width="800px"
            height="740px"
            v-model:open="isShowModal"
            @ok="handleOk"
            style="display: flex"
          >
            <template #title>
              <span style="font-size: 20px; margin-bottom: 8px"
                >Tạo mã ưu đãi</span
              >
            </template>

            <div
              style="
                height: 100px;
                padding-block: 24px;
                border-block: 1px solid #00000040;
                margin-top: 16px;
              "
            >
              <div>
                <span style="font-size: 14px">Loại mã</span>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <a-form-item
                style="display: flex; flex-direction: column"
                :colon="false"
                :labelAlign="'left'"
                label="Cách tạo mã"
                :rules="[
                  {
                    required: true,
                    message: 'Please select code!',
                  },
                ]"
              >
                <a-radio-group
                  v-model:value="radioCode"
                  name="radioGroup"
                  :change="test(radioCode)"
                >
                  <a-radio value="1">Tạo tự động ngẫu nhiên </a-radio>
                  <a-radio value="2">Tạo tự động theo thứ tự</a-radio>
                  <a-radio value="3">Tạo thủ công</a-radio>
                  <a-radio value="4">Nhập từ Excel</a-radio>
                </a-radio-group>
              </a-form-item>
              <div
                style="
                  display: flex;
                  padding: 24px;
                  background-color: #f5f5f5;
                  flex-direction: column;
                "
              >
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
                  <a-input
                    v-model:value="formState.codePrefix"
                    placeholder="Ví dụ: BL12"
                  />
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
                      flex-direction: row;
                      background-color: white;
                      padding: 20px 20px 20px 0;
                    "
                  >
                    <div style="display: flex; flex: 1; flex-direction: column">
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
                          style="width: 200px"
                          :options="options"
                          :filter-option="filterOption"
                        >
                          <template #placeholder>
                            <p style="font-size: 10px; color: black">
                              Select a person
                            </p>
                          </template>
                        </a-select>
                      </a-form-item>
                    </div>
                    <div style="display: flex; flex: 1; flex-direction: column">
                      <a-form-item
                        style="display: flex; flex-direction: column"
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
                          v-model:value="formState.codePrefix"
                          placeholder="Nhập số"
                        />
                      </a-form-item>
                    </div>
                  </div>
                </a-form-item>
              </div>
            </div>
          </a-modal>
        </a-form-item>

        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Ngân sách"
          name="budget"
          :rules="[
            {
              required: true,
              message: 'Please input budget!',
            },
          ]"
        >
          <a-input
            v-model:value="formState.budget"
            placeholder="Nhập ngân sách"
          />
        </a-form-item>

        <a-form-item
          style="display: flex; flex-direction: column; padding-bottom: 24px"
          :colon="false"
          :labelAlign="'left'"
          label="Thời gian diễn ra chương trình"
          name="range-time-picker"
          :rules="[
            {
              required: true,
              message: 'Please input the time!',
            },
          ]"
        >
          <a-range-picker
            v-model:value="formState['range-time-picker']"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </a-form-item>

        <a-form-item
          style="display: flex; flex-direction: column"
          :colon="false"
          :labelAlign="'left'"
          label="Hiệu lực mã ưu đãi"
          :rules="[
            {
              required: true,
              message: 'Please input budget!',
            },
          ]"
        >
          <a-radio-group
            style="display: flex; flex-direction: column; gap: 24px"
            v-model:value="value"
            name="radioGroup"
          >
            <div style="display: flex; flex-direction: column; gap: 8px">
              <a-radio :value="1" style="display: flex"
                >Số ngày hiệu lực kể từ khi nhận mã</a-radio
              >
              <div
                v-if="value === 1"
                style="display: flex; flex-direction: row; margin-left: 24px"
              >
                <a-button
                  @click="del"
                  style="
                    display: flex;
                    width: 32px;
                    height: 32px;
                    border-radius: 2px 0 0 2px;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  -
                </a-button>
                <a-input
                  v-model:value="numberr"
                  style="
                    display: flex;
                    width: 58px;
                    height: 32px;
                    border-radius: 0;
                    padding-block: 4px;
                    padding-inline: 12px;
                    text-align: center;
                  "
                />
                <a-button
                  @click="add"
                  style="
                    display: flex;
                    width: 32px;
                    height: 32px;
                    border-radius: 0 2px 2px 0;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  +
                </a-button>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px">
              <a-radio :value="2" style="display: flex"
                >Phạm vi thời gian cụ thể</a-radio
              >
              <div
                v-if="value === 2"
                style="
                  display: flex;
                  flex-direction: row;
                  margin-left: 24px;
                  font-size: 14px;
                "
              >
                2
              </div>
            </div>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :colon="false"
          :labelAlign="'left'"
          label="Áp dụng khung giờ sử dụng mã"
          name="budget"
        >
          <a-switch v-model:checked="checked" />
        </a-form-item>

        <div
          style="
            display: flex;
            flex: 1;
            justify-content: end;
            border-top: 1px solid #0000000f;
            padding-top: 16px;
          "
        >
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              style="background-color: #e57099"
            >
              Lưu
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";

const test = (e) => {
  console.log(e);
};

const isShowModal = ref(false);
const radioCode = ref("1");
const numberr = ref(2);
const checked = ref(false);
const showModal = () => {
  isShowModal.value = true;
};
const handleOk = () => {
  isShowModal.value = false;
};
const add = () => {
  numberr.value++;
};
const del = () => {
  numberr.value--;
};

const value = ref(1);
const valueData = ref("");
const options = ref([
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "tom", label: "Tom" },
]);
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const formState = reactive({
  nameProgram: "",
  code: "",
  budget: "",
  time: "",
  codePrefix: "",
});

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>

</style>
