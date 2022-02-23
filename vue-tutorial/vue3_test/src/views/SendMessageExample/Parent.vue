<template>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <h3>在 Vue 中,父子组件的关系可以总结为 props向下传递,事件向上传递。父组件通过 props 给子组件下发数据;子组件通过事件给父组件发送消息.</h3>
        <p>父组件数据是写死的</p>
        <Child message="数据来自父组件"></Child>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>父组件数据是动态数据</p>
        <input type="text" v-model="text">
        <Child v-bind:my-text="text"></Child>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>什么情况下需要使用"v-bind"</p>
        <p>传递了一个字符串"1"</p>
        <Child some-propa="1"></Child>
        <p>传递了一个数字1</p>
        <Child :some-propb="1"></Child>
        <Child v-bind:some-propc="1"></Child>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>传递一个对象的所有属性</p>
        <todo-item v-bind="todo"></todo-item>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>数据带验证</p>
        <input type="text" v-model="inputMes">
        <validation v-bind:my-text="inputMes"></validation>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>vue2是单向数据流;</p>
        <input type="text" v-model="age">
        <dataFlow v-bind:init-count="age" v-bind:div-width="100"></dataFlow>
    </div>
    <hr>
    <div>
        <h1>This is Parent component</h1>
        <p>子组件给父组件发消息</p>
        <ChildEmitEvent @hello="ReceiveMessageFromChild"></ChildEmitEvent>
    </div>
</template>

<script>
import Child from '@/views/SendMessageExample/Child.vue'
import todoItem from '@/views/SendMessageExample/todoItem.vue'
import validation from '@/views/SendMessageExample/validation.vue'
import dataFlow from '@/views/SendMessageExample/dataFlow.vue'
import ChildEmitEvent from '@/views/SendMessageExample/ChildEmitEvent.vue'
import {ref, reactive} from 'vue'
export default {
    name: "Parent",
    components:{
        Child,
        todoItem,
        validation,
        dataFlow,
        ChildEmitEvent
    },
    setup(){
        let text = ref("父组件的数据是动态的");
        let inputMes = ref(1);
        let age = ref(1);
        let todo = reactive({
            text: "learn vue3",
            isComplete: false
        });

        function ReceiveMessageFromChild(param){
            alert(`receive message from child ${param}`);
        }

        return {
            text, 
            todo, 
            inputMes,
            age,
            ReceiveMessageFromChild
        };
    }
}
</script>

<style>

</style>