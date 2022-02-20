<template>
    <div>
        <h1>This is Child component</h1>
        <h4>子组件错误修改父组件传过来的值</h4>
        <p>{{message}}</p>
        <button @click="test">test</button>
        <button @click="message+='!'">错误更改message,控制台报Warn</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: ['message'],
    methods: {
        test(){
            console.log("this is Child component ", this);
        }
    }
}
</script>

<style>
    
</style>