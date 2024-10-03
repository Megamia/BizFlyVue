<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :style="{ width: isMenuOpen ? '80px' : '256px' }"
    mode="inline"
    :items="items"
    :inline-collapsed="isMenuOpen"
    @click="handleClick"
  >
  </a-menu>
  <button @click="toggleMenu">{{ isMenuOpen ? "Open" : "Close" }}</button>
</template>
<script setup>
import { reactive, ref, h } from "vue";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  ApartmentOutlined,
  FileTextOutlined,
  DollarOutlined,
  GiftOutlined,
  SettingOutlined,
  // MailOutlined,
  // AppstoreOutlined,
  // SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const router = useRouter();
const selectedKeys = ref(["1"]);
const openKeys = ref(["sub1"]);
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = reactive([
  getItem("Trang chủ", "sub1", () => h(HomeOutlined)),
  getItem("Thành viên", "sub2", () => h(UsergroupAddOutlined)),
  getItem("Phân hạng thành viên", "sub3", () => h(ApartmentOutlined)),
  // {
  //   type: "divider", //Đường kẻ phân chia giữa các item
  // },
  getItem("Phiếu điều chỉnh", "sub4", () => h(FileTextOutlined), [
    getItem("Điều chỉnh điểm", "1"),
    getItem("Điều chỉnh hạng", "2"),
  ]),
  getItem("Tích điểm", "sub5", () => h(DollarOutlined), [
    getItem("Chương trình tích điểm", "3"),
    getItem("Giao dịch tích điểm", "4"),
  ]),
  getItem("Công cụ khuyến mãi", "sub6", () => h(GiftOutlined), [
    getItem("Quản lý chương trình", "5"),
    getItem("Quản lý chiến dịch", "6"),
    getItem("Gạch mã", "7"),
  ]),
  getItem("Cài đặt", "sub7", () => h(SettingOutlined)),

  // getItem(
  //   "Group",
  //   "grp",
  //   null,
  //   [getItem("Option 13", "13"), getItem("Option 14", "14")],
  //   "group"
  // ),
]);

const handleClick = (e) => {
  console.log("click", e);
  if (e.key === "sub1") {
    router.push("/AddNewProgram");
  } else if (e.key === "sub2") {
    router.push("/HomePage");
  } else if (e.key === "sub3") {
    router.back();
  }
};
</script>
