<template>
<p>this is todo-item component</p>
</template>

<script>
export default{
    name: "todo-item",
    props: {
        text: String,
        isComplete: Boolean
    },
    setup(props, context){
        console.log("todo-item component setup func props ", props);
        console.log("todo-item component setup func context ", context);
    }
}
</script>

<style>

</style>