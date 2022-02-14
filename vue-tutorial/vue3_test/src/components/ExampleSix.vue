<template>
    <div>
        <h1>learn computed api</h1>
        <h1>the information of a person</h1>
        姓:<input type="text" v-model="person.firstName">
        <br>
        名:<input type="text" v-model="person.lastName">
        <br>
        <span>全名:{{person.fullName}}</span>
        <br>
        全名:<input type="text" v-model="person.fullName">
    </div>
  </template>
  
<script>
import {reactive, computed} from 'vue'
export default {
    name: 'ExampleSix',
    setup: function () {
        let person = reactive({
            firstName:'张',
            lastName:'三',
            fullName:"张三"
        });

        person.fullName = computed({
            get(){
                return person.firstName+'-'+person.lastName;
            },
            set(value){
                const nameArr=value.split('-');
                person.firstName=nameArr[0];
                person.lastName=nameArr[1];
            }
        });
        return {person};
    }
}
</script>

<style scoped>

</style>