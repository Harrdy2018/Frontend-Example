<template>
    <div class="hello">
      <h1>this is vue2 ExampleOne.vue</h1>
      <h3>name:{{name}}</h3>

      <h4 v-show="person.name">姓名:{{person.name}}</h4>
      <h4>年龄:{{person.age}}</h4>
      <h4 v-show="person.sex">性别:{{person.sex}}</h4>
      <h4>爱好:{{person.hobby}}</h4>

      <button @click="addSex">添加一个sex属性</button>
      <button @click="deleteName">删除name属性</button>
      <button @click="updateHobby">修改第一个爱好的名字</button>
    </div>
</template>
  
<script>
// import Vue from 'vue'
  export default {
    name: 'ExampleOne',
    data(){
        return{
            name: "hardy",
            person: {
                name:"zhangsan",
                age:18,
                hobby:['学习', "吃饭"]
            }
        }
    },
    methods:{
        addSex(){
            // 第一种直接在对象上修改无法响应
            // this.person.sex = '女';
            // console.log(this);

            // 第二种可以
            this.$set(this.person, "sex", '女');

            // 第三种引入Vue
            // Vue.set(this.person, "sex", '女');

        },
        deleteName(){
            console.log(this.person);
            // 第一种直接在对象上修改无法响应
            // delete this.person.name;

            // 第二种可以
            this.$delete(this.person, 'name');

            // 第三种引入Vue
            //Vue.delete(this.person, 'name');
            console.log(this.person);
        },
        updateHobby(){
            console.log(this.person.hobby);
            //this.person.hobby[0] = "打游戏";
            //this.$set(this.person.hobby, 0, "打游戏");
            //Vue.set(this.person.hobby, 0, "打游戏");
            this.person.hobby.splice(0,1,"打游戏")
            console.log(this.person.hobby);
        }
    }
  }
</script>
  
<style scoped>
</style>