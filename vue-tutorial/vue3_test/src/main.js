import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
console.log(app);
app.mount('#app')

// 过10s卸载你的组件
/*
setTimeout(() => {
    app.unmount("#app");
}, 10000);
*/