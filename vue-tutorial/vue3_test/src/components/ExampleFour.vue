<template>
    <div>
        <h1>learn</h1>
        <h1>the information of a person</h1>
        <h2 v-show="person.name">name:{{person.name}}</h2>
        <h2 v-show="person.sex">sex:{{person.sex}}</h2>
        <h2>hobby:{{person.hobby}}</h2>
        <button @click="addSex">添加一个sex属性</button>
        <button @click="deleteName">删除一个Name属性</button>
        <button @click="updateHobby">更新Hobby属性</button>
    </div>
  </template>
  
<script>
import {reactive} from 'vue'
export default {
    name: 'ExampleFour',
    setup() {
        let person = reactive({
            name : "hardy",
            hobby : ["learn", "play game"]
        });

        function addSex(){     
            person.sex = '女'
        }

        function deleteName(){
            delete person.name;
        }

        function updateHobby(){
            person.hobby[0] = "paly yinyin gou"
        }

        return {person, addSex, deleteName, updateHobby};
    }
}
</script>

<style scoped>

</style>