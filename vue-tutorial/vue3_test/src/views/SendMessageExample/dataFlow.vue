<template>
    <p>this is dataFlow component</p>
    <p>initCount:{{initCount}}</p>
    <button @click="initCount++">直接更改从父组件传来的值</button>
    <p>count:{{count}}</p>
    <button @click="count++">提前备份,再更改备份值</button>
    <div :style="widthStyle">组件内容</div>

    <button @click="testValue">test能否更改值</button>
</template>
    
<script>
import {computed, ref} from 'vue'
    export default{
        name: "dataFlow",
        props: ['initCount', 'divWidth'],
        setup(props, context){
            console.log("dataFlow  component setup func props ", props);
            console.log("dataFlow  component setup func context ", context);

            let count = ref(props.initCount);
            let widthStyle = computed(()=>{
                return {width: props.divWidth+'px'};
            });

            function testValue(){
                console.log("验证数据流 initCount ", props.initCount);
                console.log("验证数据流 count ", count);
                console.log("验证数据流 widthStyle ", widthStyle);
            }

            return {
                count,
                widthStyle,
                testValue
            };
        }
    }
</script>
    
<style>
    
</style>