<template>
    <div>
        <h1>learn watch api</h1>
        <h2>求和{{sum}}</h2>
        <button @click="sum++">+1</button>
        <br>
        <h2>当前信息为{{msg}}</h2>
        <button @click="msg+='!'">修改信息</button>
        <hr>
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <h2>薪水:{{person.job.j1.salary}}K</h2>
        <button @click="person.name+='!'">修改姓名</button>
        <button @click="person.age++">增长年龄</button>
        <button @click="person.job.j1.salary++">增长薪水</button>
    </div>
</template>
  
<script>
import {ref, watch, reactive} from 'vue'
export default {
    name: 'ExampleSeven',
    setup: function () {
        let sum = ref(0);
        let msg = ref('hello');
        let person = reactive({
            name:"zhang",
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        });

        watch(sum, (newValue, oldValue)=>{
            console.log(`newValue ${newValue} oldValue ${oldValue}`);
        })

        watch(msg, (newValue, oldValue)=>{
            console.log(`newValue ${newValue} oldValue ${oldValue}`);
        })

        watch([sum, msg], (newValue, oldValue)=>{
            console.log("监视多个");
            console.log(`newValue ${newValue} oldValue ${oldValue}`);
        })

        watch(person, (newValue, oldValue)=>{
            // 有bug 无法获取 oldValue
            console.log("监视对象");
            console.log(newValue);
            console.log(oldValue);
        });

        watch(()=>person.name, (newValue, oldValue)=>{
            console.log("监视对象中的name");
            console.log(newValue);
            console.log(oldValue);
        });

        watch([()=>person.name, ()=>person.age], (newValue, oldValue)=>{
            console.log("监视对象中的name和age");
            console.log(newValue);
            console.log(oldValue);
        });

        watch(()=>person.job, (newValue, oldValue)=>{
            console.log("监视对象中的job");
            console.log(newValue);
            console.log(oldValue);
        }, {deep:true});

        return {sum, msg, person};
    }  
}
</script>

<style scoped>

</style>