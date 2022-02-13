<template>
    <div>
        <h1>learn ref api</h1>
        <h1>the information of a person</h1>
        <h2>name:{{name}}</h2>
        <h2>age:{{age}}</h2>
        <h2>type:{{job.type}}</h2>
        <h2>salary:{{job.salary}}</h2>
        <button @click="changeInfo">edit info</button>
    </div>
  </template>
  
<script>
import {ref} from 'vue'
export default {
    name: 'ExampleTwo',
    setup: function () {
        let name = ref("zhangsan");
        let age = ref(18);
        let job = ref({
            type: "FrontEnd",
            salary: '30K'
        })
        console.log(name);
        console.log(age);
        console.log(job);

        function changeInfo(){     
            name.value = "lisi";
            age.value = 27;
            job.value.type = "BackEnd";
        }

        return {name, age, job, changeInfo};
    }
}
</script>

<style scoped>

</style>