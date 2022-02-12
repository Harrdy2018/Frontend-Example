<template>
    <div>
        <h1>learn setup api</h1>
        <h2>name:{{name}}</h2>
        <h2>age:{{age}}</h2>
        <h2>sex:{{sex}}</h2>
        <button @click="sayHello">speak</button>
        <button @click="sayWelcome">welcome</button>
    </div>
  </template>
  
<script>
// import {h} from 'vue'
export default {
    name: 'ExampleOne',
    data() {
        return {
        sex: 'nan'
        }
    },
    methods: {
        sayWelcome(){
        alert("welcome to china!");
        }
    },
    setup: function () {
        let name = "zhangsan";
        let age = 18;

        function sayHello(){
        alert(`i am ${name} i ${age}`);
        }

        return {name,age,sayHello};

        // 返回一个渲染函数，页面以渲染函数为主
        // return ()=>h('h1', "Hello my render");
    }
}
</script>

<style scoped>

</style>