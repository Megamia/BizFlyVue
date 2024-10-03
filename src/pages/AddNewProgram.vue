<template>
    <div
        style="
            display: flex;
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
            <span style="font-size: 24px" @click="log"
                >Thêm chương trình mới</span
            >
        </div>

        <div>
            <div style="display: flex; flex-direction: row; gap: 16px">
                <a-steps
                    :current="current"
                    :items="items"
                    direction="vertical"
                    style="height: 686px; width: 32px"
                >
                </a-steps>

                <div
                    v-if="current === 0"
                    style="
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        border-radius: 4px;
                        padding: 24px 24px 0 24px;
                        gap: 24px;
                        background-color: white;
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
                                style="
                                    display: flex;
                                    flex-direction: row;
                                    gap: 16px;
                                "
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
                                    width="100%"
                                    v-model:open="isShowModal"
                                    title="Tạo mã ưu đãi"
                                    @ok="handleOk"
                                >
                                    <div style="height: 100px;background-color: red;"></div>
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
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    padding-bottom: 24px;
                                "
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
                                    v-model:value="
                                        formState['range-time-picker']
                                    "
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
                                    style="
                                        display: flex;
                                        flex-direction: column;
                                        gap: 24px;
                                    "
                                    v-model:value="value"
                                    name="radioGroup"
                                >
                                    <div
                                        style="
                                            display: flex;
                                            flex-direction: column;
                                            gap: 8px;
                                        "
                                    >
                                        <a-radio
                                            :value="1"
                                            style="display: flex"
                                            >Số ngày hiệu lực kể từ khi nhận
                                            mã</a-radio
                                        >
                                        <div
                                            v-if="value === 1"
                                            style="
                                                display: flex;
                                                flex-direction: row;
                                                margin-left: 24px;
                                            "
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

                                    <div
                                        style="
                                            display: flex;
                                            flex-direction: column;
                                            gap: 8px;
                                        "
                                    >
                                        <a-radio
                                            :value="2"
                                            style="display: flex"
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
                <div v-else-if="current === 1">
                    <span> 1 </span>
                </div>
                <div v-else-if="current === 2">
                    <span> 2 </span>
                </div>
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

<script  setup>
import { LeftOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import { message } from "ant-design-vue";

const checked = ref(false);
const isShowModal = ref(false);

const showModal = () => {
    isShowModal.value = true;
};

const handleOk = () => {
    isShowModal.value = false;
};

const numberr = ref(2);
const add = () => {
    numberr.value++;
};
const del = () => {
    numberr.value--;
};

const value = ref(1);
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
    },
    {
        title: "Second",
        content: "Second-content",
    },
    {
        title: "Last",
        content: "Last-content",
    },
];

const items = steps.map((item, index) => ({
    key: index,
}));



const formState = reactive({
    nameProgram: "",
    code: "",
    budget: "",
    time: "",
});




const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<style scoped>
:deep(.ant-form-horizontal .ant-form-item-control) {
    flex: none;
    min-width: unset;
}

/* .ant-modal-content{
    background-color: blue;
} */
</style>
