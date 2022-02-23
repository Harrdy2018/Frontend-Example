<template>
    <p>this is validation component</p>
    <p>{{myText}}</p>
    <p>
        验证的type 类型可以是:String/Number/Boolean/Object/Array/Function
    </p>
    <p>
        type 也可以是一个自定义构造器,使用instanceof 检测。
        当prop 验证失败时,在开发版本下会在控制台抛出一条警告。
    </p>
</template>
    
<script>
export default{
    name: "validation",
    props: {
        myText: {
            type: Number,
            required: true,
            default: 1
        }
    }
}
</script>
    
<style>
    
</style>