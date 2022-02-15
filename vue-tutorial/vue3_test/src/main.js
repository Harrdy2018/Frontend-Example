import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from "./router"

const app = createApp(App);
console.log(app);
app.use(router);
app.use(ElementPlus, {locale: zhCn});
app.mount('#app')

// 过10s卸载你的组件
/*
setTimeout(() => {
    app.unmount("#app");
}, 10000);
*/