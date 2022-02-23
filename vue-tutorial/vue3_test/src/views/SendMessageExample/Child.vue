<template>
    <div>
        <h2>This is child component</h2>
        <p v-if="message">{{message}}</p>
        <p v-if="myText">{{myText}}</p>
        <p v-if="somePropa">{{somePropa}}:{{typeof somePropa}}</p>
        <p v-if="somePropb">{{somePropb}}:{{typeof somePropb}}</p>
        <p v-if="somePropc">{{somePropc}}:{{typeof somePropc}}</p>
    </div>
</template>

<script>
export default {
    name: "Child",
    props: ['message', 'myText', 'somePropa', 'somePropb', 'somePropc'],
    setup(props, context){
        console.log("child component setup func props ", props);
        console.log("child component setup func context ", context);
    }
}
</script>

<style>

</style>