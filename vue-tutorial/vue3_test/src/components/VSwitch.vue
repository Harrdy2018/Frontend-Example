<template>
<div>
</div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['case'],
    setup(props, context){
        console.log("自定义组件 props ",props);
        console.log("自定义组件 context.slots ",context.slots);
        return ()=>{
            if(context.slots[props.case]){
                return context.slots[props.case]();
            }
            return context.slots.default();
        };
    }
});
</script>

<style></style>