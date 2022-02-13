<template>
    <div>
        <h1>learn</h1>
        <h1>the information of a person</h1>
        <h2 v-show="person.name">name:{{person.name}}</h2>
        <h2 v-show="person.age">sex:{{person.age}}</h2>
    </div>
</template>
  
<script>
import {reactive} from 'vue'
export default {
    name: 'ExampleFive',
    props:['msg', 'school'],
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

        return {person};
    }
}
</script>

<style scoped>

</style>