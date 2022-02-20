<template>
    <div>
        <h1>This is ChildOne component</h1>
        <button @click="test">test</button>
        <h4>子组件正确改父组件传过来的值</h4>
        <h5>父组件传递初始值进来,子组件将它作为初始值保存起来,在自己的作用域下可以随意使用和修改</h5>
        <p>count:{{count}}</p>
        <button @click="count++">add 1</button>
    </div>
</template>

<script>
export default {
    name: 'ChildOne',
    props: ['initCount'],
    data: function() {
        return {
            count: this.initCount
        }
    },
    methods: {
        test(){
            console.log("this is ChildOne component ", this);
        }
    }
}
</script>

<style>
    
</style>