<template>
    <div>
        <h1>learn reactive api</h1>
        <h1>the information of a person</h1>
        <h2>type:{{job.type}}</h2>
        <h2>salary:{{job.salary}}</h2>
        <h2>the value of c:{{job.a.b.c}}</h2>
        <h2>hobby:{{hobby}}</h2>
        <button @click="changeInfo">edit info</button>
    </div>
  </template>
  
<script>
import {reactive} from 'vue'
export default {
    name: 'ExampleThree',
    setup: function () {
        let job = reactive({
            type: "FrontEnd",
            salary: '30K',
            a:{
                b:{
                    c:666
                }
            }
        })
        let hobby = reactive(['抽烟', '喝酒', '打游戏']);
        console.log(job);
        console.log("hobby = ", hobby);

        function changeInfo(){     
            job.type = "BackEnd";
            job.a.b.c = 99999;
            hobby[0] = '学习';
        }

        return {job, hobby, changeInfo};
    }
}
</script>

<style scoped>

</style>