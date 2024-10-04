import { createApp } from "vue";
import App from "./App.vue";
import {
  Row,
  Col,
  Dropdown,
  Button,
  Menu,
  Anchor,
  Steps,
  Space,
  Form,
  Input,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  Modal,
  Step,
} from "ant-design-vue";
import router from "./Router";

createApp(App)
  .use(router)
  .use(Row)
  .use(Col)
  .use(Dropdown)
  .use(Button)
  .use(Menu)
  .use(Anchor)
  .use(Steps)
  .use(Space)
  .use(Form)
  .use(Input)
  .use(Checkbox)
  .use(DatePicker)
  .use(Radio)
  .use(Switch)
  .use(Modal)
  .use(Step)
  .mount("#app");
