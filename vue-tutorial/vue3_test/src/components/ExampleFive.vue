<template>
    <div>
        <h1>learn</h1>
        <h1>the information of a person</h1>
        <h2 v-show="person.name">name:{{person.name}}</h2>
        <h2 v-show="person.age">sex:{{person.age}}</h2>
        <h2>父组件给子组件传值</h2>
        <h3>msg:{{msg}}--school:{{school}}</h3>
        <button @click="test">组件触发事件</button>
        <h2>插槽</h2>
        <slot></slot>
        <slot name="qwer"></slot>
    </div>
</template>
  
<script>
import {reactive} from 'vue'
export default {
    name: 'ExampleFive',
    props:['msg', 'school'],
    emits:['hello'],
    beforeCreate(){
        console.log("---beforeCreate start----", this)
    },
    setup(props, context) {
        console.log("---setup start----", this)
        console.log(props, context)
        let person = reactive({
            name : "hardy",
            age : 17
        });

        function test(){
            context.emit('hello', 6666);
        }

        return {person, test};
    }
}
</script>

<style scoped>

</style>