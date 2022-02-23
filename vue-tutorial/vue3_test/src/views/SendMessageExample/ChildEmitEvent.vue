<template>
<div>
    <h3>This is ChildEmitEvent component</h3>
    <button @click="SendMessageToParent">子组件触发事件</button>
</div>
</template>

<script>
export default {
    name: 'ChildEmitEvent',
    setup(props, context){
        console.log("ChildEmitEvent 组件 props ", props);
        console.log("ChildEmitEvent 组件 context ", context);

        function SendMessageToParent() {
            context.emit('hello', '父组件,你真的牛皮');
        }

        return {
            SendMessageToParent
        }
    }
}
</script>


<style>

</style>