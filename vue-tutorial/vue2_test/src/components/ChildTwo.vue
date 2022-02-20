<template>
    <div>
        <h1>This is ChildTwo component</h1>
        <button @click="test">test</button>
        <h4>子组件接受父组件传过来的值,并且做适当转换</h4>
        <div :style="styleWidth">组件内容</div>
    </div>
</template>

<script>
export default {
    name: 'ChildTwo',
    props: ['divWidth'],
    data: function() {
        return {
           
        }
    },
    methods: {
        test(){
            console.log("this is ChildTwo component ", this);
        }
    },
    computed: {
        styleWidth: function(){
            return {
                width: this.divWidth+'px'
            }
        }
    }
}
</script>

<style>
    
</style>