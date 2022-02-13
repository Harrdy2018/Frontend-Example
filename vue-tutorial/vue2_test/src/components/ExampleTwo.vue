<template>
    <div class="hello">
      <h1>父组件给子组件传值</h1>
      <h2>msg:{{ msg }}</h2>
      <h2>school:{{ school }}</h2>
      <slot></slot>
      <slot name="testA"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExampleTwo',
    props: {
      msg: String,
      school: String
    },
    mounted(){
        console.log("mounted ",this);
    }
  }
  </script>
  <style scoped>
  </style>
  