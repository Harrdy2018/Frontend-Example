<template>
  <div id="nav">
    <router-link to="/">原生基础组件</router-link> |
    <router-link :to="{name:'eleGrid'}">列表组件</router-link> |
    <router-link :to="{name:'study'}">learn vue3</router-link> |
    <br>
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