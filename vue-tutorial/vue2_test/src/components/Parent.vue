<template>
    <div>
        <h1>This is Parent component</h1>
        <h3>Vue2.x 通过props 传递数据是单向</h3>
        <button @click="testParent">testParent:fullName</button>
        fullName:<input type="text" v-model="fullName">
        <Child v-bind:message="fullName"></Child> 
        <hr>
        <ChildOne :init-count="1"></ChildOne>
        <hr>
        <ChildTwo :div-width="100"></ChildTwo>
    </div>
</template>

<script>
import Child from './Child.vue'
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
export default {
    name: "Parent",
    components: {
        Child,
        ChildOne,
        ChildTwo
    },
    data: function(){
        return {
            fullName:'Hello World!'
        }
    },
    methods: {
        testParent(){
            console.log("this is Parent component ", this)
        }
    }
}
</script>

<style>

</style>