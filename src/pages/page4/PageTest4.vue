<template>
  <a-flex
    vertical
    gap="24"
    style="background-color: white; flex: 1; padding: 24px"
  >
    <a-flex>
      <span style="font-size: 20px; font-weight: bold"> Cấu hình gửi tin </span>
    </a-flex>
    <a-flex vertical style="border: 1px solid #0000000f">
      <a-flex
        gap="24px"
        style="
          flex: 1;
          padding: 16px 24px 16px 24px;
          border-bottom: 1px solid #0000000f;
          justify-content: space-between;
          background-color: #fafafa;
        "
      >
        <span>Zalo OA đã đăng ký ZNS</span>
        <a-switch v-model:checked="checked" />
      </a-flex>

      <a-flex vertical gap="8" style="padding: 24px" v-if="checked">
        <a-flex style="flex: 1; justify-content: space-between">
          <span> Mẫu ZNS </span>
          <span>
            <a-typography-link>Cách tạo mẫu ZNS</a-typography-link>
          </span>
        </a-flex>
        <a-flex style="padding-bottom: 10px">
          <a-select
            ref="select"
            v-model:value="value1"
            style="flex: 1"
            placeholder="Chọn mẫu"
          >
            <a-select-option value="a">a</a-select-option>
            <a-select-option value="lucy">abc</a-select-option>
          </a-select>
        </a-flex>
        <a-flex v-if="value1 === 'a'" vertical gap="8">
          Đồng bộ các tùy biến trong tin nhắn mẫu ZNS trên với Loyalty Bizfly:
          <a-flex
            style="flex: 1; justify-content: space-between; align-items: center"
          >
            <a-flex vertical style="border: 1px solid gray; width: 308px">
              <a-flex
                class="itemZNS"
                style="background-color: #fafafa; font-weight: bold"
              >
                <span>ZNS</span>
              </a-flex>
              <a-flex class="itemZNS itemChil">
                <span>Tên khách hàng</span>
              </a-flex>
              <a-flex class="itemZNS itemChil">
                <span>Tên khuyến mãi</span>
              </a-flex>
              <a-flex class="itemZNS itemChil">
                <span>Mã voucher</span>
              </a-flex>
            </a-flex>
            <a-flex>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1944_40757)">
                  <path
                    d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z"
                    fill="#FBEAF0"
                  />
                  <path
                    d="M30.8731 16.5437C30.8543 18.2391 30.3262 19.4922 29.3106 20.5281C27.9903 21.8711 26.6707 23.2156 25.3129 24.5195C23.8567 25.9164 22.1098 26.4305 20.1567 25.8594C18.2403 25.2976 16.9793 24.0047 16.4989 22.0406C16.1161 20.4781 16.4872 19.043 17.4106 17.7437C17.562 17.5256 17.7886 17.371 18.0469 17.3096C18.3053 17.2482 18.5772 17.2843 18.8106 17.4109C19.0681 17.5422 19.2668 17.7657 19.3669 18.0369C19.4671 18.3081 19.4615 18.607 19.3512 18.8742C19.2652 19.0552 19.1686 19.231 19.0622 19.4008C18.352 20.6719 18.6129 22.2187 19.6872 23.093C20.8254 24.0226 22.4364 24.0547 23.502 23.05C25.0062 21.6312 26.4689 20.1698 27.8903 18.6656C28.8504 17.65 28.8129 16.0406 27.9286 14.9156C27.1129 13.8773 25.6043 13.5594 24.3739 14.1726C24.1676 14.275 23.977 14.407 23.7723 14.5172C23.5185 14.6514 23.2235 14.6852 22.9459 14.612C22.6683 14.5387 22.4284 14.3638 22.2739 14.1219C21.9481 13.5937 22.0536 12.9539 22.5606 12.6C24.2692 11.4078 26.0911 11.1836 27.97 12.125C29.8622 13.0734 30.7707 14.6851 30.8731 16.5437Z"
                    fill="#E57099"
                  />
                  <path
                    d="M14.21 28.4632C12.1381 28.3117 10.4475 27.3242 9.57797 25.239C8.69359 23.1195 9.13031 21.1632 10.6959 19.5125C12.0342 18.1015 13.4358 16.75 14.8366 15.4031C16.3991 13.9054 18.5756 13.5281 20.4905 14.3695C22.4717 15.2414 23.7022 17.1164 23.6623 19.225C23.6428 20.3046 23.2928 21.2804 22.6803 22.1656C22.2897 22.7304 21.6928 22.8851 21.1561 22.5601C20.5912 22.2179 20.4342 21.6125 20.7358 20.9937C20.9303 20.5929 21.1725 20.2007 21.2827 19.7765C21.5952 18.5328 21.0405 17.2906 19.9475 16.6414C18.8545 15.9922 17.4475 16.0742 16.51 16.9695C15.0186 18.4023 13.5561 19.8671 12.1397 21.3734C11.192 22.3804 11.21 23.914 12.0616 25.0406C12.853 26.0898 14.3209 26.4468 15.5537 25.8828C15.7772 25.7804 15.9842 25.6429 16.1991 25.5234C16.7272 25.2297 17.4491 25.3828 17.7616 25.8523C17.92 26.0948 17.9805 26.3883 17.9309 26.6737C17.8813 26.9591 17.7253 27.215 17.4944 27.3898C16.5748 28.1007 15.517 28.439 14.21 28.4632Z"
                    fill="#E57099"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1944_40757">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0 0.00195312)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a-flex>
            <a-flex vertical style="border: 1px solid gray; width: 308px">
              <a-flex
                class="itemLoyalty"
                style="background-color: #fafafa; font-weight: bold"
              >
                <span>Loyalty</span>
              </a-flex>
              <a-flex class="itemLoyalty">
                <a-select
                  ref="select"
                  v-model:value="value2"
                  placeholder="Chọn tùy biến"
                  style="display: flex; flex: 1"
                >
                  <a-select-option value="1">Tên khách hàng</a-select-option>
                  <a-select-option value="2">Tên chương trình</a-select-option>
                  <a-select-option value="3">Mã ưu đãi</a-select-option>
                  <a-select-option value="4">Khu vực áp dụng</a-select-option>
                  <a-select-option value="5">Thời gian áp dụng</a-select-option>
                </a-select>
              </a-flex>
              <a-flex class="itemLoyalty">
                <a-select
                  ref="select"
                  v-model:value="value3"
                  placeholder="Chọn tùy biến"
                  style="display: flex; flex: 1"
                >
                  <a-select-option value="1">Tên khách hàng</a-select-option>
                  <a-select-option value="2">Tên chương trình</a-select-option>
                  <a-select-option value="3">Mã ưu đãi</a-select-option>
                  <a-select-option value="4">Khu vực áp dụng</a-select-option>
                  <a-select-option value="5">Thời gian áp dụng</a-select-option>
                </a-select>
              </a-flex>
              <a-flex class="itemLoyalty">
                <a-select
                  ref="select"
                  v-model:value="value4"
                  placeholder="Chọn tùy biến"
                  style="display: flex; flex: 1"
                >
                  <a-select-option value="1">Tên khách hàng</a-select-option>
                  <a-select-option value="2">Tên chương trình</a-select-option>
                  <a-select-option value="3">Mã ưu đãi</a-select-option>
                  <a-select-option value="4">Khu vực áp dụng</a-select-option>
                  <a-select-option value="5">Thời gian áp dụng</a-select-option>
                </a-select>
              </a-flex>
            </a-flex>
          </a-flex>
        </a-flex>
      </a-flex>
    </a-flex>
    <a-flex style="flex: 1; justify-content: flex-end">
      <a-button
        style="border-radius: 0; background-color: #e57099; color: white"
        >Lưu</a-button
      >
    </a-flex>
  </a-flex>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const checked = ref(false);
</script>

<style scoped>
.itemZNS,
.itemLoyalty {
  font-size: 14px;
  border: 1px solid gray;
  padding: 16px;
  align-items: center;
  justify-content: center;
}
.itemChil {
  span {
    padding-inline: 8px;
    background-color: #f5f5f5;
  }
}
</style>
