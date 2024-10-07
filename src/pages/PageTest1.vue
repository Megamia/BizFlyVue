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
            :inert="isShowModal"
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
          aria-modal="true"
            width="800px"
            v-model:open="isShowModal"
            @ok="handleOk"
            style="display: flex; margin-block: 30px; top: 50px"
          >
            <template #footer>
              <a-button @click="handleCancel">Hủy</a-button>
              <a-button
                type="primary"
                @click="handleOk"
                style="
                  background-color: #e57099;
                  border-radius: 2px;
                  padding-inline: 15px;
                  padding-block: 4px;
                "
                >Áp dụng</a-button
              >
            </template>
            <template #title>
              <span style="font-size: 20px; margin-bottom: 8px"
                >Tạo mã ưu đãi</span
              >
            </template>

            <div
              style="
                display: flex;
                flex-direction: column;
                padding-block: 24px;
                border-block: 1px solid #00000040;
                margin-top: 16px;
              "
            >
              <div>
                <span style="font-size: 14px">Loại mã</span>
                <div style="display: flex; flex-direction: row">
                  <div style="display: flex; flex: 1">
                    <p>
                      <svg
                        width="30"
                        height="20"
                        viewBox="0 0 30 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30 13.3838V18.5616C30 19.0779 29.5789 19.4991 29.0625 19.4991H10.2381V17.2692C10.2381 16.8551 9.90225 16.5192 9.48806 16.5192C9.07388 16.5192 8.73806 16.8551 8.73806 17.2692V19.4991H0.9375C0.421125 19.4991 0 19.0779 0 18.5616V13.3838C1.67138 13.1623 2.96081 11.7317 2.96081 9.9998C2.96081 8.26786 1.67138 6.8373 0 6.61574V1.43799C0 0.921613 0.421125 0.500488 0.9375 0.500488H8.73806V2.73036C8.73806 3.14455 9.07388 3.48036 9.48806 3.48036C9.90225 3.48036 10.2381 3.14455 10.2381 2.73036V0.500488H29.0625C29.5788 0.500488 30 0.921613 30 1.43799V6.61574C28.3286 6.8373 27.0392 8.2678 27.0392 9.9998C27.0392 11.7318 28.3286 13.1623 30 13.3838ZM15.7939 4.72861C15.1225 4.72861 14.5146 5.0008 14.0746 5.44086C13.6345 5.88086 13.3623 6.4888 13.3623 7.16011C13.3623 7.83149 13.6345 8.4393 14.0746 8.87936C14.5146 9.31943 15.1225 9.59161 15.7939 9.59161C16.4653 9.59161 17.0731 9.31943 17.5131 8.87936C17.9532 8.4393 18.2254 7.83143 18.2254 7.16011C18.2254 6.48874 17.9532 5.88086 17.5131 5.44086C17.0731 5.0008 16.4653 4.72861 15.7939 4.72861ZM22.4309 10.408C21.7595 10.408 21.1517 10.6802 20.7116 11.1202C20.2715 11.5603 19.9993 12.1682 19.9993 12.8395C19.9993 13.5109 20.2715 14.1187 20.7116 14.5587C21.1516 14.9988 21.7595 15.271 22.4309 15.271C23.1023 15.271 23.7101 14.9988 24.1501 14.5587C24.5902 14.1187 24.8624 13.5108 24.8624 12.8395C24.8624 12.1681 24.5902 11.5603 24.1501 11.1202C23.7101 10.6802 23.1023 10.408 22.4309 10.408ZM23.0896 12.1807C22.9211 12.0122 22.6881 11.908 22.4309 11.908C22.1736 11.908 21.9407 12.0122 21.7721 12.1807C21.6036 12.3492 21.4994 12.5822 21.4994 12.8395C21.4994 13.0968 21.6036 13.3297 21.7721 13.4982C21.9406 13.6667 22.1736 13.771 22.4309 13.771C22.6882 13.771 22.9211 13.6667 23.0896 13.4982C23.2581 13.3297 23.3623 13.0968 23.3623 12.8395C23.3624 12.5822 23.2581 12.3493 23.0896 12.1807ZM21.3157 5.32918L15.6403 13.7185C15.4089 14.0615 15.4994 14.5272 15.8424 14.7586C16.1854 14.9899 16.6511 14.8994 16.8825 14.5564L22.5579 6.16711C22.7892 5.82411 22.6987 5.35843 22.3557 5.12705C22.0127 4.89568 21.5471 4.98618 21.3157 5.32918ZM16.4526 6.50143C16.2841 6.33293 16.0512 6.22868 15.7939 6.22868C15.5366 6.22868 15.3038 6.33293 15.1352 6.50143C14.9667 6.66993 14.8624 6.90286 14.8624 7.16018C14.8624 7.41749 14.9667 7.65036 15.1352 7.81893C15.3037 7.98743 15.5366 8.09168 15.7939 8.09168C16.0513 8.09168 16.2841 7.98743 16.4526 7.81893C16.6211 7.65043 16.7254 7.41749 16.7254 7.16018C16.7254 6.9028 16.6211 6.66993 16.4526 6.50143ZM8.738 11.6797V13.9096C8.738 14.3237 9.07381 14.6596 9.488 14.6596C9.90219 14.6596 10.238 14.3237 10.238 13.9096V11.6797C10.238 11.2655 9.90219 10.9297 9.488 10.9297C9.07381 10.9297 8.738 11.2654 8.738 11.6797ZM8.738 6.09011V8.31993C8.738 8.73411 9.07381 9.06993 9.488 9.06993C9.90219 9.06993 10.238 8.73411 10.238 8.31993V6.09011C10.238 5.67593 9.90219 5.34011 9.488 5.34011C9.07381 5.34011 8.738 5.67593 8.738 6.09011Z"
                          fill="#E57099"
                        />
                      </svg>
                      Mã giảm giá định danh
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M32 0H0L32 32V0Z" fill="#E57099" />
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2507 1.96875H12.1586C12.0054 1.96875 11.8601 2.03906 11.7664 2.15937L5.32418 10.3203L2.23512 6.40625C2.18839 6.34692 2.12882 6.29895 2.0609 6.26593C1.99297 6.23292 1.91845 6.21572 1.84293 6.21563H0.750741C0.646054 6.21563 0.588241 6.33594 0.652304 6.41719L4.93199 11.8391C5.13199 12.0922 5.51637 12.0922 5.71793 11.8391L13.3492 2.16875C13.4132 2.08906 13.3554 1.96875 13.2507 1.96875Z" fill="white"/>
</svg>

                      </svg>
                    </p>
                  </div>
                  <div style="display: flex; flex: 1">
                    <p>Mã giảm giá không định danh</p>
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
                    <a-radio-group v-model:value="radioCode" name="radioGroup">
                      <a-radio value="1">Tạo tự động ngẫu nhiên </a-radio>
                      <a-radio value="2">Tạo tự động theo thứ tự</a-radio>
                      <a-radio value="3">Tạo thủ công</a-radio>
                      <a-radio value="4">Nhập từ Excel</a-radio>
                    </a-radio-group>
                  </a-form-item>
                  <div
                    style="
                      display: flex;
                      padding: 24px 24px 0 24px;
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
                          padding: 20px 20px 0 20px;
                        "
                      >
                        <div
                          style="display: flex; flex: 1; flex-direction: column"
                        >
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
                        <div
                          style="display: flex; flex: 1; flex-direction: column"
                        >
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
                              v-model:value="formState.codeSuffix"
                              placeholder="Nhập số"
                            />
                          </a-form-item>
                        </div>
                      </div>
                    </a-form-item>
                    <div
                      style="
                        display: flex;
                        flex: 1;
                        flex-direction: row;
                        gap: 20px;
                      "
                    >
                      <a-form-item
                        style="display: flex; flex-direction: column"
                        :colon="false"
                        :labelAlign="'left'"
                        label="Số lượng mã"
                        name="quantityCode"
                        :rules="[
                          {
                            required: true,
                            message: 'Please input quantity code!',
                          },
                        ]"
                      >
                        <a-input
                          v-model:value="formState.quantityCode"
                          placeholder="Nhập số lượng mã"
                        />
                      </a-form-item>
                      <a-form-item
                        style="display: flex; flex-direction: column"
                        :colon="false"
                        :labelAlign="'left'"
                        label="Số lượt sử dụng tối đa/mã"
                        name="maxUsePerCode"
                        :rules="[
                          {
                            required: true,
                            message:
                              'Please input maximum number of uses/code!',
                          },
                        ]"
                      >
                        <a-input
                          v-model:value="formState.maxUsePerCode"
                          placeholder="Nhập số"
                        />
                      </a-form-item>
                      <a-form-item
                        style="display: flex; flex-direction: column"
                        :colon="false"
                        :labelAlign="'left'"
                        label="Số lượt sử dụng tối đa/ngày"
                        name="maxUsePerDay"
                        :rules="[
                          {
                            required: true,
                            message:
                              'Please input maximum number of uses/code!',
                          },
                        ]"
                      >
                        <a-input
                          v-model:value="formState.maxUsePerDay"
                          placeholder="Nhập số"
                        />
                      </a-form-item>
                    </div>
                  </div>
                </div>
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

const isShowModal = ref(false);
const radioCode = ref("1");
const numberr = ref(2);
const checked = ref(false);
const showModal = () => {
  isShowModal.value = true;
};

const handleCancel = () => {
  isShowModal.value = false;
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
  codeSuffix: "",
  quantityCode: "",
  maxUsePerCode: "",
  maxUsePerDay: "",
});

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped></style>
