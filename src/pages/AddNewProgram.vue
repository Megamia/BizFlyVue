<template>
  <div
    style="
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: #f5f5f5;
      padding-block: 24px;
      padding-inline: 124px;
      gap: 24px;
    "
  >
    <div style="display: flex; flex-direction: column; gap: 2px">
      <span style="font-size: 14px; color: #00000073">
        <LeftOutlined />
        Danh sách chương trình
      </span>
      <span style="font-size: 24px" @click="log">Thêm chương trình mới</span>
    </div>

    <div style="display: flex; flex-direction: column">
      <div
        style="
          display: flex;
          flex: 1;
          flex-direction: row;
          gap: 16px;
          width: 100%;
        "
      >
        <a-steps
          v-model:current="current"
          direction="vertical"
          style="display: flex; gap: 16px"
        >
          <a-step class="test">
            <template #description>
              <div style="display: flex; flex: 1" v-if="current === 0">
                <component :is="PageTest1" />
              </div>
              <div v-else class="unActive">Thông tin cơ bản</div>
            </template>
          </a-step>
          <a-step>
            <template #description>
              <div style="display: flex; flex: 1" v-if="current === 1">
                <component :is="PageTest2" />
              </div>
              <div v-else class="unActive">Thiết lập ưu đãi</div>
            </template>
          </a-step>
          <a-step>
            <template #description>
              <div style="display: flex; flex: 1" v-if="current === 2">
                <component :is="PageTest3" />
              </div>
              <div v-else class="unActive">Khu vực và đối tượng</div>
            </template>
          </a-step>
        </a-steps>

        <!-- <div style="flex: 1; display: flex">
          <component :is="steps[current].component" :key="steps[current].key" />
        </div> -->
      </div>

      <div class="steps-action">
        <a-button
          :disabled="current === 0"
          style="margin-left: 8px"
          @click="prev"
        >
          Previous
        </a-button>
        <a-button
          v-if="current === steps.length - 1"
          type="primary"
          @click="message.success('Processing complete!')"
        >
          Done
        </a-button>
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          @click="next"
        >
          Next
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LeftOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { message } from "ant-design-vue";
import PageTest1 from "./PageTest1.vue";
import PageTest3 from "./PageTest3.vue";
import PageTest2 from "./PageTest2.vue";

const current = ref(0);
const next = () => {
  if (current.value < steps.length - 1) {
    current.value++;
    log();
  }
};

const prev = () => {
  if (current.value > 0) {
    current.value--;
    log();
  }
};

const log = () => {
  console.log(current.value);
};

const steps = [
  {
    title: "First",
    content: "First-content",
    key: 1,
    component: PageTest1,
  },
  {
    title: "Second",
    content: "Second-content",
    key: 2,
    component: PageTest2,
  },
  {
    title: "Last",
    content: "Last-content",
    key: 3,
    component: PageTest3,
  },
];
</script>

<style scoped>
:deep(.ant-form-horizontal .ant-form-item-control) {
  flex: none;
  min-width: unset;
}

:deep(.ant-steps .ant-steps-item-process .ant-steps-item-icon) {
  background-color: #e57099;
  border-color: #e57099;
}
.unActive {
  padding: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: #00000073;
  background-color: white;
}
.ant-steps-item-icon {
  background-color: red;
}
/* .ant-modal-content{
    background-color: blue;
} */
</style>
