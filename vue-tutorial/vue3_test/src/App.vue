<template>
  <div id="nav">
    <router-link to="/">原生基础组件</router-link> |
    <router-link :to="{name:'eleBase'}">ele基础组件</router-link> |
    <router-link :to="{name:'eleGrid'}">列表组件</router-link> |
    <router-link :to="{name:'helpForm'}">表单辅助</router-link> |
    <br>
  </div>
  <div>
    <router-link :to="{name:'study'}">learn vue3</router-link> |
    <router-link :to="{name:'sendMessage'}">父子组件之间传值</router-link> |
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>